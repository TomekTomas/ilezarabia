#!/usr/bin/env python3
"""Extract structured disclosure data from PDFs with an OpenAI vision model.

This is intended for scanned forms where local OCR is too noisy. It reads the
download index CSV, sends each PDF as a file input, and writes one JSON object
per source PDF.
"""

from __future__ import annotations

import argparse
import base64
import csv
import json
import os
import time
from pathlib import Path

from openai import OpenAI


PROMPT = """
Odczytaj oświadczenie majątkowe radnego z załączonego PDF.

Zwróć wyłącznie poprawny JSON bez markdown. Jeśli czegoś nie da się pewnie
odczytać, wpisz null i dodaj krótką uwagę w polu "notes".

Schemat:
{
  "person": string | null,
  "statement_date": string | null,
  "year_or_period": string | null,
  "real_estate": [
    {
      "type": string,
      "area": string | null,
      "value_pln": number | null,
      "legal_title": string | null,
      "raw_text": string
    }
  ],
  "business_activity_income_pln": number | null,
  "employment_income_pln": number | null,
  "other_income_pln": number | null,
  "cash_savings_pln": number | null,
  "liabilities": [
    {
      "description": string,
      "amount_pln": number | null,
      "raw_text": string
    }
  ],
  "cars_or_assets": [
    {
      "description": string,
      "value_pln": number | null,
      "raw_text": string
    }
  ],
  "confidence": "high" | "medium" | "low",
  "notes": string
}

Nie zgaduj kwot. Nie przepisuj numerów rubryk jako kwot. Dla odczytanych kwot
używaj liczby w PLN bez spacji, np. 300000.
"""


def encode_pdf(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode("utf-8")


def existing_sources(output_path: Path) -> set[str]:
    if not output_path.exists():
        return set()
    sources = set()
    with output_path.open(encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            try:
                sources.add(json.loads(line).get("source_file", ""))
            except json.JSONDecodeError:
                continue
    return sources


def extract_one(client: OpenAI, model: str, row: dict) -> dict:
    pdf_path = Path(row["file_path"])
    response = client.responses.create(
        model=model,
        input=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_file",
                        "filename": pdf_path.name,
                        "file_data": f"data:application/pdf;base64,{encode_pdf(pdf_path)}",
                    },
                    {
                        "type": "input_text",
                        "text": PROMPT,
                    },
                ],
            }
        ],
    )
    text = response.output_text.strip()
    data = json.loads(text)
    data["_meta"] = {
        "source_person": row.get("person"),
        "source_year": row.get("year"),
        "source_url": row.get("url"),
        "source_file": row.get("file_path"),
        "model": model,
    }
    return data


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--index", default="data/statements_index.csv")
    parser.add_argument("--out", default="data/openai_extracted.jsonl")
    parser.add_argument("--model", default=os.environ.get("OPENAI_MODEL", "gpt-5"))
    parser.add_argument("--limit", type=int, default=0, help="0 = all rows")
    parser.add_argument("--delay", type=float, default=0.0)
    args = parser.parse_args()

    if not os.environ.get("OPENAI_API_KEY"):
        raise SystemExit("OPENAI_API_KEY is not set.")

    output_path = Path(args.out)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    done = existing_sources(output_path)

    with open(args.index, newline="", encoding="utf-8") as f:
        rows = [row for row in csv.DictReader(f) if row.get("file_path")]

    if args.limit:
        rows = rows[: args.limit]

    client = OpenAI()
    written = 0
    with output_path.open("a", encoding="utf-8") as out:
        for row in rows:
            if row["file_path"] in done:
                continue
            try:
                data = extract_one(client, args.model, row)
            except Exception as exc:  # noqa: BLE001 - preserve failures per file.
                data = {
                    "_meta": {
                        "source_person": row.get("person"),
                        "source_year": row.get("year"),
                        "source_url": row.get("url"),
                        "source_file": row.get("file_path"),
                        "model": args.model,
                    },
                    "error": str(exc),
                }
            out.write(json.dumps(data, ensure_ascii=False) + "\n")
            out.flush()
            written += 1
            print(f"{written}: {row.get('person')} -> {row.get('file_path')}")
            if args.delay:
                time.sleep(args.delay)

    print(f"Saved {written} new results to {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
