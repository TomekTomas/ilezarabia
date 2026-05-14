#!/usr/bin/env python3
"""Dependency-free downloader for Łódź BIP statements.

Features:
- stdlib only
- pagination crawl (same-domain HTML pages)
- resumable index (append-safe by URL)
- summary report
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import re
import json
import time
from collections import deque
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

BASE_URL = "https://bip.uml.lodz.pl/samorzad/oswiadczenia-majatkowe/wyszukiwarka-oswiadczen-majatkowych/"
UA = "Mozilla/5.0 (compatible; lodz-oswiadczenia-stdlib/0.2)"
DOC_EXT = (".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx")


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[str] = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() != "a":
            return
        href = dict(attrs).get("href", "")
        if href:
            self.links.append(href)


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
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
            if attempt < retries:
                time.sleep(backoff * attempt)
    raise RuntimeError(f"download failed after {retries} retries: {last_exc}")


def slugify(text: str) -> str:
    t = re.sub(r"\s+", "-", text.strip().lower())
    t = re.sub(r"[^a-z0-9\-ąćęłńóśźż]", "", t)
    return t[:120] or "unknown"


def detect_year(text: str) -> str:
    m = re.search(r"(20\d{2}|19\d{2})", text)
    return m.group(1) if m else "unknown"


def crawl_pages(start: str, max_pages: int) -> list[str]:
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
            html = fetch_text(url)
        except Exception:
            continue

        parser = LinkParser()
        parser.feed(html)
        for href in parser.links:
            full = urljoin(url, href)
            parsed = urlparse(full)
            path = parsed.path.lower()

            if path.endswith(DOC_EXT):
                doc_links.append(full)
                continue

            # follow only same-domain likely html pages
            if parsed.netloc == base_netloc and (path.endswith("/") or "." not in Path(path).name):
                if full not in seen_pages:
                    q.append(full)

    return doc_links


def load_existing_urls(index_path: Path) -> set[str]:
    if not index_path.exists():
        return set()
    with index_path.open(newline="", encoding="utf-8") as f:
        return {r.get("url", "") for r in csv.DictReader(f) if r.get("url")}


def append_rows(index_path: Path, rows: list[dict]) -> None:
    index_path.parent.mkdir(parents=True, exist_ok=True)
    file_exists = index_path.exists()
    with index_path.open("a", newline="", encoding="utf-8") as f:
        fieldnames = ["person", "year", "url", "file_path", "status", "error"]
        w = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            w.writeheader()
        w.writerows(rows)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="data/raw")
    ap.add_argument("--index", default="data/statements_index.csv")
    ap.add_argument("--delay", type=float, default=0.2)
    ap.add_argument("--max-files", type=int, default=0)
    ap.add_argument("--max-pages", type=int, default=40)
    ap.add_argument("--retries", type=int, default=3)
    ap.add_argument("--backoff", type=float, default=0.8)
    ap.add_argument("--report", default="data/download_report.json")
    args = ap.parse_args()

    index_path = Path(args.index)
    existing_urls = load_existing_urls(index_path)

    links = crawl_pages(BASE_URL, max_pages=args.max_pages)
    unique = sorted(set(links))

    new_rows = []
    downloaded = 0
    skipped_existing = 0
    errors = 0

    for url in unique:
        if url in existing_urls:
            skipped_existing += 1
            continue
        if args.max_files and downloaded >= args.max_files:
            break

        name_hint = Path(urlparse(url).path).stem.replace("_", " ")
        person = "unknown"
        m = re.search(r"([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+\s+[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)", name_hint)
        if m:
            person = m.group(1)

        year = detect_year(url)
        ext = Path(urlparse(url).path).suffix.lower() or ".bin"
        short_hash = hashlib.sha1(url.encode("utf-8")).hexdigest()[:12]
        target = Path(args.out) / slugify(person) / f"{year}_{short_hash}{ext}"

        status, error = "ok", ""
        try:
            if not target.exists():
                download_binary(url, target, retries=args.retries, backoff=args.backoff)
                downloaded += 1
                time.sleep(args.delay)
        except Exception as exc:  # noqa: BLE001
            status, error = "error", str(exc)
            errors += 1

        new_rows.append({
            "person": person,
            "year": year,
            "url": url,
            "file_path": str(target),
            "status": status,
            "error": error,
        })

    append_rows(index_path, new_rows)
    report = {
        "discovered_links": len(links),
        "unique_docs": len(unique),
        "new_rows": len(new_rows),
        "downloaded_now": downloaded,
        "errors": errors,
        "skipped_existing": skipped_existing,
        "index_path": str(index_path),
    }
    report_path = Path(args.report)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Discovered links: {len(links)} | Unique docs: {len(unique)}")
    print(f"New index rows: {len(new_rows)} | Downloaded now: {downloaded} | Errors: {errors} | Skipped(existing): {skipped_existing}")
    print(f"Index path: {index_path}")
    print(f"Report path: {report_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
