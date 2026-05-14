#!/usr/bin/env python3
"""Parse downloaded statements into a simple SQLite analytical dataset (v0).

The parser first reads embedded text from TXT/PDF files. With --ocr enabled it
also renders scanned PDFs and runs Tesseract OCR.
"""

from __future__ import annotations

import argparse
import csv
import re
import shutil
import sqlite3
from pathlib import Path
from typing import Iterable

try:
    import fitz  # PyMuPDF
except ImportError:  # pragma: no cover - optional dependency path.
    fitz = None

try:
    import pdfplumber
except ImportError:  # pragma: no cover - optional dependency path.
    pdfplumber = None

try:
    import pytesseract
    from PIL import Image
except ImportError:  # pragma: no cover - optional dependency path.
    pytesseract = None
    Image = None


NUMBER_RE = re.compile(r"(?<!\d)(\d{1,3}(?:[\s.]\d{3})*(?:,\d{1,2})?|\d+)(?!\d)")


KEYWORDS = {
    "incomes_total_pln": ["dochod", "dochody", "przychod", "wynagrodzenie"],
    "savings_total_pln": ["oszczednosci", "srodki pieniezne", "zasoby pieniezne"],
    "liabilities_total_pln": ["zobowiazania", "kredyt", "pozyczka", "dlug"],
}


def normalize_for_match(text: str) -> str:
    replacements = str.maketrans(
        {
            "ą": "a",
            "ć": "c",
            "ę": "e",
            "ł": "l",
            "ń": "n",
            "ó": "o",
            "ś": "s",
            "ź": "z",
            "ż": "z",
            "6": "o",
        }
    )
    return text.lower().translate(replacements)


def slugify(text: str) -> str:
    text = normalize_for_match(text)
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text[:120] or "unknown"


def to_number(token: str) -> float:
    token = token.replace(" ", "").replace(".", "").replace(",", ".")
    try:
        return float(token)
    except ValueError:
        return 0.0


def extract_numbers_for_keywords(text: str, keywords: Iterable[str]) -> float:
    total = 0.0
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    lowered_keywords = [normalize_for_match(keyword) for keyword in keywords]

    for line in lines:
        normalized_line = normalize_for_match(line)
        if not any(keyword in normalized_line for keyword in lowered_keywords):
            continue
        nums = [to_number(match.group(1)) for match in NUMBER_RE.finditer(line)]
        total += sum(num for num in nums if 0 < num < 1e9)

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


def find_tesseract_cmd() -> str | None:
    candidates = [
        shutil.which("tesseract"),
        r"C:\Program Files\Tesseract-OCR\tesseract.exe",
        r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return str(candidate)
    return None


def extract_pdf_text(path: Path) -> str:
    if pdfplumber is None:
        return ""
    chunks = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            chunks.append(page.extract_text() or "")
    return "\n".join(chunks).strip()


def ocr_pdf(path: Path, lang: str, tessdata_dir: str | None, dpi: int, max_pages: int) -> str:
    if fitz is None:
        return ""
    if pytesseract is None or Image is None:
        return ""

    tesseract_cmd = find_tesseract_cmd()
    if tesseract_cmd:
        pytesseract.pytesseract.tesseract_cmd = tesseract_cmd

    config = "--psm 6"
    if tessdata_dir:
        tessdata_path = Path(tessdata_dir).resolve().as_posix()
        config += f" --tessdata-dir {tessdata_path}"

    chunks = []
    scale = dpi / 72
    matrix = fitz.Matrix(scale, scale)
    with fitz.open(path) as doc:
        page_count = len(doc) if max_pages <= 0 else min(len(doc), max_pages)
        for page_index in range(page_count):
            page = doc[page_index]
            pix = page.get_pixmap(matrix=matrix, alpha=False)
            image = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
            chunks.append(pytesseract.image_to_string(image, lang=lang, config=config))

    return "\n".join(chunks).strip()


def parse_document(path: Path, args: argparse.Namespace) -> tuple[str, str]:
    if path.suffix.lower() == ".txt":
        return path.read_text(encoding="utf-8", errors="ignore"), "text file"

    if path.suffix.lower() != ".pdf":
        return "", "unsupported file type in v0 (expected .txt or PDF)"

    text = extract_pdf_text(path)
    if text:
        return text, "embedded PDF text"

    if not args.ocr:
        return "", "no embedded text found in PDF (run with --ocr)"

    text = ocr_pdf(
        path,
        lang=args.ocr_lang,
        tessdata_dir=args.tessdata_dir,
        dpi=args.ocr_dpi,
        max_pages=args.ocr_max_pages,
    )
    if text:
        return text, "ocr"
    return "", "OCR produced no text"


def save_text(text: str, source_path: Path, person: str, text_out: str | None) -> None:
    if not text_out:
        return
    target = Path(text_out) / slugify(person) / f"{source_path.stem}.txt"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(text, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--index", default="data/statements_index.csv")
    parser.add_argument("--db", default="data/statements_v0.db")
    parser.add_argument("--ocr", action="store_true", help="Run Tesseract OCR for scanned PDFs")
    parser.add_argument("--ocr-lang", default="pol", help="Tesseract language, e.g. pol or pol+eng")
    parser.add_argument("--tessdata-dir", default="data/tessdata", help="Directory containing *.traineddata files")
    parser.add_argument("--ocr-dpi", type=int, default=180)
    parser.add_argument("--ocr-max-pages", type=int, default=0, help="0 = all pages")
    parser.add_argument("--text-out", default="data/text", help="Write extracted/OCR text files here; empty disables")
    parser.add_argument("--replace", action="store_true", help="Clear statements_v0 before inserting")
    args = parser.parse_args()

    db_path = Path(args.db)
    db_path.parent.mkdir(parents=True, exist_ok=True)

    with sqlite3.connect(db_path) as conn:
        init_db(conn)
        if args.replace:
            conn.execute("DELETE FROM statements_v0")

        with open(args.index, newline="", encoding="utf-8") as f:
            rows = list(csv.DictReader(f))

        inserted = 0
        for row in rows:
            person = row.get("person") or "unknown"
            year = row.get("year") or "unknown"
            file_path = Path(row.get("file_path") or "")
            url = row.get("url") or ""

            text, parse_note = parse_document(file_path, args)
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

            save_text(text, file_path, person, args.text_out)
            incomes = extract_numbers_for_keywords(text, KEYWORDS["incomes_total_pln"])
            savings = extract_numbers_for_keywords(text, KEYWORDS["savings_total_pln"])
            liabilities = extract_numbers_for_keywords(text, KEYWORDS["liabilities_total_pln"])

            conn.execute(
                """
                INSERT INTO statements_v0
                (person, year, file_path, source_url, incomes_total_pln, savings_total_pln, liabilities_total_pln, parsed_ok, parse_note)
                VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?)
                """,
                (person, year, str(file_path), url, incomes, savings, liabilities, parse_note),
            )
            inserted += 1

        conn.commit()

    print(f"Inserted rows: {inserted} into {db_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
