#!/usr/bin/env python3
"""Download Łódź city council asset statement files from BIP.

MVP scraper focused on councillors (radni).

Usage:
  python etl/download_statements.py --out data/raw --index data/statements_index.csv
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import os
import re
import time
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://bip.uml.lodz.pl/samorzad/oswiadczenia-majatkowe/wyszukiwarka-oswiadczen-majatkowych/"
USER_AGENT = "Mozilla/5.0 (compatible; lodz-oswiadczenia-mvp/0.1)"


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"[^a-z0-9\-ąćęłńóśźż]", "", text)
    return text[:120] or "unknown"


def detect_year(text: str) -> str:
    m = re.search(r"(20\d{2}|19\d{2})", text)
    return m.group(1) if m else "unknown"


def find_document_links(html: str, base_url: str) -> Iterable[dict]:
    soup = BeautifulSoup(html, "html.parser")

    # Grab all links to common downloadable doc types.
    for a in soup.select("a[href]"):
        href = a.get("href", "").strip()
        if not href:
            continue
        full = urljoin(base_url, href)
        path = urlparse(full).path.lower()
        if not path.endswith((".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx")):
            continue

        anchor_text = " ".join(a.stripped_strings)
        context = a.find_parent()
        context_text = " ".join(context.stripped_strings) if context else anchor_text
        blob = f"{anchor_text} {context_text}".strip()

        person = "unknown"
        person_match = re.search(r"([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+\s+[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)", blob)
        if person_match:
            person = person_match.group(1)

        yield {
            "url": full,
            "anchor_text": anchor_text,
            "context_text": context_text[:500],
            "year": detect_year(blob),
            "person": person,
        }


def download_file(session: requests.Session, url: str, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with session.get(url, timeout=60, stream=True) as r:
        r.raise_for_status()
        with out_path.open("wb") as f:
            for chunk in r.iter_content(chunk_size=1024 * 64):
                if chunk:
                    f.write(chunk)


def file_ext(url: str) -> str:
    path = urlparse(url).path
    ext = Path(path).suffix.lower()
    return ext if ext else ".bin"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default="data/raw", help="Directory for downloaded files")
    parser.add_argument("--index", default="data/statements_index.csv", help="CSV metadata output")
    parser.add_argument("--delay", type=float, default=0.4, help="Delay between file downloads (seconds)")
    parser.add_argument("--max-files", type=int, default=0, help="Optional limit for testing (0 = no limit)")
    args = parser.parse_args()

    out_dir = Path(args.out)
    index_path = Path(args.index)
    index_path.parent.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    resp = session.get(BASE_URL, timeout=60)
    resp.raise_for_status()

    links = list(find_document_links(resp.text, BASE_URL))

    seen = set()
    rows = []
    downloaded = 0

    for item in links:
        url = item["url"]
        if url in seen:
            continue
        seen.add(url)

        if args.max_files and downloaded >= args.max_files:
            break

        person_slug = slugify(item["person"])
        year = item["year"]
        ext = file_ext(url)
        short_hash = hashlib.sha1(url.encode("utf-8")).hexdigest()[:12]
        fname = f"{year}_{short_hash}{ext}"
        target = out_dir / person_slug / fname

        status = "ok"
        err = ""
        if not target.exists():
            try:
                download_file(session, url, target)
                downloaded += 1
                time.sleep(args.delay)
            except Exception as exc:  # noqa: BLE001 - keep crawler resilient
                status = "error"
                err = str(exc)

        rows.append(
            {
                "person": item["person"],
                "year": year,
                "url": url,
                "file_path": str(target),
                "status": status,
                "error": err,
                "anchor_text": item["anchor_text"],
            }
        )

    with index_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["person", "year", "url", "file_path", "status", "error", "anchor_text"],
        )
        writer.writeheader()
        writer.writerows(rows)

    print(f"Found links: {len(links)} | Unique: {len(seen)} | Downloaded now: {downloaded}")
    print(f"Index saved to: {index_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
