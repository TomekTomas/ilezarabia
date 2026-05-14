#!/usr/bin/env python3
"""Parse downloaded statements into a simple SQLite analytical dataset (v0).

This MVP parser extracts high-level numeric indicators from text PDFs:
- incomes_total_pln
- savings_total_pln
- liabilities_total_pln

It is heuristic and intentionally conservative.
"""

from __future__ import annotations

import argparse
import csv
import re
import sqlite3
from pathlib import Path
from typing import Iterable

try:
    import pdfplumber
except ImportError:  # pragma: no cover - optional dependency path.
    pdfplumber = None


NUMBER_RE = re.compile(r"(?<!\d)(\d{1,3}(?:[\s.]\d{3})*(?:,\d{1,2})?|\d+)(?!\d)")


KEYWORDS = {
    "incomes_total_pln": ["dochód", "dochody", "przychód", "wynagrodzenie"],
    "savings_total_pln": ["oszczędności", "środki pieniężne", "zasoby pieniężne"],
    "liabilities_total_pln": ["zobowiązania", "kredyt", "pożyczka", "dług"],
}


def normalize_for_match(text: str) -> str:
    text = text.lower().replace("ł", "l")
    replacements = str.maketrans({
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z",
        "6": "o",
    })
    return text.translate(replacements)


def to_number(token: str) -> float:
    token = token.replace(" ", "").replace(".", "").replace(",", ".")
    try:
        return float(token)
    except ValueError:
        return 0.0


def extract_numbers_for_keywords(text: str, keywords: Iterable[str]) -> float:
    total = 0.0
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    lowered_keywords = [normalize_for_match(k) for k in keywords]

    for line in lines:
        lline = normalize_for_match(line)
        if not any(k in lline for k in lowered_keywords):
            continue
        nums = [to_number(m.group(1)) for m in NUMBER_RE.finditer(line)]
        total += sum(n for n in nums if 0 < n < 1e9)

    return round(total, 2)


def init_db(conn: sqlite3.Connection) -> None:
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS statements_v0 (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          person TEXT NOT NULL,
          year TEXT,
          file_path TEXT NOT NULL,
          source_url TEXT,
          incomes_total_pln REAL DEFAULT 0,
          savings_total_pln REAL DEFAULT 0,
          liabilities_total_pln REAL DEFAULT 0,
          parsed_ok INTEGER DEFAULT 0,
          parse_note TEXT DEFAULT ''
        )
        """
    )
    conn.execute("CREATE INDEX IF NOT EXISTS idx_statements_v0_person_year ON statements_v0(person, year)")


def parse_plain_text_file(path: Path) -> tuple[str, str]:
    # v0 parser: supports .txt and text-based PDFs; scanned PDFs need OCR later.
    if path.suffix.lower() == ".txt":
        return path.read_text(encoding="utf-8", errors="ignore"), ""
    if path.suffix.lower() == ".pdf":
        if pdfplumber is None:
            return "", "pdfplumber not installed"
        chunks = []
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                chunks.append(page.extract_text() or "")
        text = "\n".join(chunks).strip()
        if not text:
            return "", "no embedded text found in PDF (OCR needed)"
        return text, ""
    return "", "unsupported file type in v0 (expected .txt or text PDF)"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--index", default="data/statements_index.csv")
    ap.add_argument("--db", default="data/statements_v0.db")
    args = ap.parse_args()

    db_path = Path(args.db)
    db_path.parent.mkdir(parents=True, exist_ok=True)

    with sqlite3.connect(db_path) as conn:
        init_db(conn)

        with open(args.index, newline="", encoding="utf-8") as f:
            rows = list(csv.DictReader(f))

        inserted = 0
        for row in rows:
            person = row.get("person") or "unknown"
            year = row.get("year") or "unknown"
            file_path = Path(row.get("file_path") or "")
            url = row.get("url") or ""

            text, parse_note = parse_plain_text_file(file_path)
            if not text:
                conn.execute(
                    """
                    INSERT INTO statements_v0
                    (person, year, file_path, source_url, parsed_ok, parse_note)
                    VALUES (?, ?, ?, ?, 0, ?)
                    """,
                    (person, year, str(file_path), url, parse_note),
                )
                inserted += 1
                continue

            incomes = extract_numbers_for_keywords(text, KEYWORDS["incomes_total_pln"])
            savings = extract_numbers_for_keywords(text, KEYWORDS["savings_total_pln"])
            liabilities = extract_numbers_for_keywords(text, KEYWORDS["liabilities_total_pln"])

            conn.execute(
                """
                INSERT INTO statements_v0
                (person, year, file_path, source_url, incomes_total_pln, savings_total_pln, liabilities_total_pln, parsed_ok)
                VALUES (?, ?, ?, ?, ?, ?, ?, 1)
                """,
                (person, year, str(file_path), url, incomes, savings, liabilities),
            )
            inserted += 1

        conn.commit()

    print(f"Inserted rows: {inserted} into {db_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
