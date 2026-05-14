#!/usr/bin/env python3
"""Dependency-free downloader for Lodz BIP financial disclosures.

Default mode downloads councillor (Radny/a) statements:
- submits the BIP search form with the Radny(a) position filter,
- walks result pages in order,
- opens each person page,
- downloads only document links matching that person's name.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import time
import unicodedata
from collections import deque
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlencode, urljoin, urlparse
from urllib.request import Request, urlopen

BASE_URL = "https://bip.uml.lodz.pl/samorzad/oswiadczenia-majatkowe/wyszukiwarka-oswiadczen-majatkowych/"
UA = "Mozilla/5.0 (compatible; lodz-oswiadczenia-stdlib/0.3)"
DOC_EXT = (".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx")
RADNY_POSITION_ID = "3"


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[tuple[str, str]] = []
        self.hidden_inputs: dict[str, str] = {}
        self._href_stack: list[str] = []
        self._text_stack: list[list[str]] = []

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        if tag.lower() == "a":
            href = attr.get("href", "")
            if href:
                self._href_stack.append(href)
                self._text_stack.append([])
        elif tag.lower() == "input" and attr.get("type") == "hidden" and attr.get("name"):
            self.hidden_inputs[attr["name"]] = attr.get("value", "")

    def handle_endtag(self, tag):
        if tag.lower() != "a" or not self._href_stack:
            return
        href = self._href_stack.pop()
        text = " ".join(" ".join(self._text_stack.pop()).split())
        self.links.append((href, text))

    def handle_data(self, data):
        if self._text_stack:
            self._text_stack[-1].append(data)


def parse_page(html: str) -> LinkParser:
    parser = LinkParser()
    parser.feed(html)
    return parser


def fetch_text(url: str) -> str:
    req = Request(url, headers={"User-Agent": UA})
    with urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def download_binary(url: str, out: Path, retries: int = 3, backoff: float = 0.8) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    last_exc = None
    for attempt in range(1, retries + 1):
        try:
            req = Request(url, headers={"User-Agent": UA})
            with urlopen(req, timeout=120) as resp:
                out.write_bytes(resp.read())
            return
        except Exception as exc:  # noqa: BLE001 - crawler should keep going.
            last_exc = exc
            if attempt < retries:
                time.sleep(backoff * attempt)
    raise RuntimeError(f"download failed after {retries} retries: {last_exc}")


def slugify(text: str) -> str:
    t = normalize_key(text).replace("_", "-")
    return t[:120] or "unknown"


def normalize_key(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = text.replace("ł", "l").replace("Ł", "L")
    return re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")


def detect_year(text: str) -> str:
    filename = Path(urlparse(text).path).stem if "://" in text else Path(text).stem
    m = re.search(r"(?<!\d)(20\d{2}|19\d{2})(?!\d)", filename)
    if m:
        return m.group(1)
    m = re.search(r"(?<!\d)(20\d{2}|19\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?!\d)", filename)
    if m:
        return m.group(1)
    m = re.search(r"(?<!\d)(?:0[1-9]|[12]\d|3[01])(?:0[1-9]|1[0-2])(20\d{2}|19\d{2})(?!\d)", filename)
    if m:
        return m.group(1)
    m = re.search(r"(?<!\d)(\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?!\d)", filename)
    if m:
        return f"20{m.group(1)}"
    m = re.search(r"/BIP_[^/]*_(\d{2})(?:/|_)", text, flags=re.IGNORECASE)
    if m:
        return f"20{m.group(1)}"
    return "unknown"


def build_radny_filter_url() -> str:
    parser = parse_page(fetch_text(BASE_URL))
    params = dict(parser.hidden_inputs)
    params["tx_edgefinancialdisclosure_person[personDemand][lastName]"] = ""
    params["tx_edgefinancialdisclosure_person[personDemand][financialDisclosureForPosition]"] = RADNY_POSITION_ID
    params["tx_edgefinancialdisclosure_person[personDemand][financialDisclosureFromYear]"] = "0"
    return f"{BASE_URL}?{urlencode(params)}"


def is_person_link(href: str) -> bool:
    return "tx_edgefinancialdisclosure_person%5Baction%5D=show" in href or "tx_edgefinancialdisclosure_person[action]=show" in href


def is_list_page_link(href: str) -> bool:
    return "tx_edgefinancialdisclosure_person%5Baction%5D=list" in href or "tx_edgefinancialdisclosure_person[action]=list" in href


def collect_radny_people(max_pages: int) -> list[dict]:
    q = deque([build_radny_filter_url()])
    seen_pages = set()
    seen_people = set()
    people: list[dict] = []

    while q and len(seen_pages) < max_pages:
        url = q.popleft()
        if url in seen_pages:
            continue
        seen_pages.add(url)

        try:
            parser = parse_page(fetch_text(url))
        except Exception:
            continue

        for href, text in parser.links:
            full = urljoin(url, href)
            if is_person_link(href):
                name = text.strip()
                if name and full not in seen_people:
                    seen_people.add(full)
                    people.append({"name": name, "url": full})
            elif is_list_page_link(href) and full not in seen_pages:
                q.append(full)

    return people


def document_belongs_to_person(doc_url: str, anchor_text: str, person: str) -> bool:
    person_tokens = [token for token in normalize_key(person).split("_") if len(token) > 1]
    haystack = normalize_key(f"{Path(urlparse(doc_url).path).stem} {anchor_text}")
    return bool(person_tokens) and all(token in haystack for token in person_tokens)


def find_person_documents(person: dict) -> list[dict]:
    parser = parse_page(fetch_text(person["url"]))
    docs = []

    for href, anchor_text in parser.links:
        full = urljoin(person["url"], href)
        path = urlparse(full).path.lower()
        if not path.endswith(DOC_EXT):
            continue
        if not document_belongs_to_person(full, anchor_text, person["name"]):
            continue
        docs.append(
            {
                "person": person["name"],
                "year": detect_year(f"{full} {anchor_text}"),
                "url": full,
            }
        )

    return docs


def crawl_legacy_pages(start: str, max_pages: int) -> list[dict]:
    q = deque([start])
    seen_pages = set()
    doc_links: list[str] = []
    base_netloc = urlparse(start).netloc

    while q and len(seen_pages) < max_pages:
        url = q.popleft()
        if url in seen_pages:
            continue
        seen_pages.add(url)

        try:
            parser = parse_page(fetch_text(url))
        except Exception:
            continue

        for href, _text in parser.links:
            full = urljoin(url, href)
            parsed = urlparse(full)
            path = parsed.path.lower()

            if path.endswith(DOC_EXT):
                doc_links.append(full)
                continue

            if parsed.netloc == base_netloc and (path.endswith("/") or "." not in Path(path).name):
                if full not in seen_pages:
                    q.append(full)

    return [{"person": "unknown", "year": detect_year(url), "url": url} for url in sorted(set(doc_links))]


def load_existing_urls(index_path: Path) -> set[str]:
    if not index_path.exists():
        return set()
    with index_path.open(newline="", encoding="utf-8") as f:
        return {row.get("url", "") for row in csv.DictReader(f) if row.get("url")}


def append_rows(index_path: Path, rows: list[dict]) -> None:
    index_path.parent.mkdir(parents=True, exist_ok=True)
    file_exists = index_path.exists()
    with index_path.open("a", newline="", encoding="utf-8") as f:
        fieldnames = ["person", "year", "url", "file_path", "status", "error"]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        writer.writerows(rows)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="data/raw")
    ap.add_argument("--index", default="data/statements_index.csv")
    ap.add_argument("--delay", type=float, default=0.2)
    ap.add_argument("--max-files", type=int, default=0)
    ap.add_argument("--max-pages", type=int, default=40)
    ap.add_argument("--mode", choices=["radny", "legacy"], default="radny")
    ap.add_argument("--retries", type=int, default=3)
    ap.add_argument("--backoff", type=float, default=0.8)
    ap.add_argument("--report", default="data/download_report.json")
    args = ap.parse_args()

    index_path = Path(args.index)
    existing_urls = load_existing_urls(index_path)

    people = []
    if args.mode == "radny":
        people = collect_radny_people(max_pages=args.max_pages)
        docs = []
        for person in people:
            try:
                docs.extend(find_person_documents(person))
            except Exception:
                continue
        unique_docs = {doc["url"]: doc for doc in docs}
        docs = [unique_docs[url] for url in sorted(unique_docs)]
    else:
        docs = crawl_legacy_pages(BASE_URL, max_pages=args.max_pages)

    new_rows = []
    downloaded = 0
    skipped_existing = 0
    errors = 0

    for item in docs:
        url = item["url"]
        if url in existing_urls:
            skipped_existing += 1
            continue
        if args.max_files and downloaded >= args.max_files:
            break

        ext = Path(urlparse(url).path).suffix.lower() or ".bin"
        short_hash = hashlib.sha1(url.encode("utf-8")).hexdigest()[:12]
        target = Path(args.out) / slugify(item["person"]) / f"{item['year']}_{short_hash}{ext}"

        status, error = "ok", ""
        try:
            if not target.exists():
                download_binary(url, target, retries=args.retries, backoff=args.backoff)
                downloaded += 1
                time.sleep(args.delay)
        except Exception as exc:  # noqa: BLE001 - record error and continue.
            status, error = "error", str(exc)
            errors += 1

        new_rows.append(
            {
                "person": item["person"],
                "year": item["year"],
                "url": url,
                "file_path": str(target),
                "status": status,
                "error": error,
            }
        )

    append_rows(index_path, new_rows)
    report = {
        "mode": args.mode,
        "people_pages": len(people),
        "unique_docs": len(docs),
        "new_rows": len(new_rows),
        "downloaded_now": downloaded,
        "errors": errors,
        "skipped_existing": skipped_existing,
        "index_path": str(index_path),
    }
    report_path = Path(args.report)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    if args.mode == "radny":
        print(f"People pages: {len(people)} | Unique docs: {len(docs)}")
    else:
        print(f"Unique docs: {len(docs)}")
    print(f"New index rows: {len(new_rows)} | Downloaded now: {downloaded} | Errors: {errors} | Skipped(existing): {skipped_existing}")
    print(f"Index path: {index_path}")
    print(f"Report path: {report_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
