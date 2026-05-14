#!/usr/bin/env python3
"""Create the normalized analysis database for councillor disclosures.

The schema mirrors the declaration form sections I-X and keeps extracted facts
separate from raw text so OCR/model output can be reviewed safely.
"""

from __future__ import annotations

import argparse
import csv
import re
import sqlite3
from pathlib import Path


SECTIONS = [
    ("I", "Srodki pieniezne i papiery wartosciowe", "assets"),
    ("II", "Nieruchomosci", "assets"),
    ("III", "Udzialy w spolkach handlowych", "assets"),
    ("IV", "Akcje w spolkach handlowych", "assets"),
    ("V", "Mienie nabyte od Skarbu Panstwa lub samorzadu", "assets"),
    ("VI", "Prowadzona dzialalnosc gospodarcza", "earnings"),
    ("VII", "Funkcje w spolkach handlowych i dochody", "earnings"),
    ("VIII", "Inne dochody", "earnings"),
    ("IX", "Skladniki mienia ruchomego powyzej 10000 zl", "assets"),
    ("X", "Zobowiazania pieniezne", "debts"),
]


def slugify(text: str) -> str:
    text = text.lower()
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
        }
    )
    text = text.translate(replacements)
    return re.sub(r"[^a-z0-9]+", "-", text).strip("-") or "unknown"


def connect(db_path: Path) -> sqlite3.Connection:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_schema(conn: sqlite3.Connection) -> None:
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS people (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          slug TEXT NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS statements (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          person_id INTEGER NOT NULL REFERENCES people(id) ON DELETE CASCADE,
          year INTEGER,
          source_url TEXT NOT NULL UNIQUE,
          file_path TEXT NOT NULL,
          download_status TEXT DEFAULT 'ok',
          extraction_status TEXT DEFAULT 'pending',
          confidence TEXT DEFAULT 'unreviewed',
          notes TEXT DEFAULT '',
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS statement_sections (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          statement_id INTEGER NOT NULL REFERENCES statements(id) ON DELETE CASCADE,
          section_code TEXT NOT NULL,
          section_title TEXT NOT NULL,
          pillar TEXT NOT NULL CHECK (pillar IN ('assets', 'earnings', 'debts')),
          raw_text TEXT DEFAULT '',
          structured_json TEXT DEFAULT '',
          confidence TEXT DEFAULT 'unreviewed',
          review_status TEXT DEFAULT 'pending',
          UNIQUE(statement_id, section_code)
        );

        CREATE TABLE IF NOT EXISTS asset_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          statement_id INTEGER NOT NULL REFERENCES statements(id) ON DELETE CASCADE,
          section_code TEXT NOT NULL,
          asset_type TEXT NOT NULL,
          description TEXT DEFAULT '',
          value_pln REAL,
          area TEXT DEFAULT '',
          legal_title TEXT DEFAULT '',
          ownership TEXT DEFAULT '',
          raw_text TEXT DEFAULT '',
          confidence TEXT DEFAULT 'unreviewed',
          review_status TEXT DEFAULT 'pending'
        );

        CREATE TABLE IF NOT EXISTS income_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          statement_id INTEGER NOT NULL REFERENCES statements(id) ON DELETE CASCADE,
          section_code TEXT NOT NULL,
          income_type TEXT NOT NULL,
          payer TEXT DEFAULT '',
          description TEXT DEFAULT '',
          amount_pln REAL,
          raw_text TEXT DEFAULT '',
          confidence TEXT DEFAULT 'unreviewed',
          review_status TEXT DEFAULT 'pending'
        );

        CREATE TABLE IF NOT EXISTS liability_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          statement_id INTEGER NOT NULL REFERENCES statements(id) ON DELETE CASCADE,
          creditor TEXT DEFAULT '',
          description TEXT DEFAULT '',
          amount_pln REAL,
          currency TEXT DEFAULT 'PLN',
          raw_text TEXT DEFAULT '',
          confidence TEXT DEFAULT 'unreviewed',
          review_status TEXT DEFAULT 'pending'
        );

        CREATE TABLE IF NOT EXISTS extraction_runs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          statement_id INTEGER NOT NULL REFERENCES statements(id) ON DELETE CASCADE,
          method TEXT NOT NULL,
          model TEXT DEFAULT '',
          input_file TEXT DEFAULT '',
          output_file TEXT DEFAULT '',
          status TEXT NOT NULL,
          error TEXT DEFAULT '',
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX IF NOT EXISTS idx_statements_person_year ON statements(person_id, year);
        CREATE INDEX IF NOT EXISTS idx_sections_pillar ON statement_sections(pillar);
        CREATE INDEX IF NOT EXISTS idx_assets_statement ON asset_items(statement_id);
        CREATE INDEX IF NOT EXISTS idx_income_statement ON income_items(statement_id);
        CREATE INDEX IF NOT EXISTS idx_liabilities_statement ON liability_items(statement_id);

        CREATE VIEW IF NOT EXISTS statement_pillars AS
        SELECT
          s.id AS statement_id,
          p.name AS person,
          s.year,
          COALESCE((SELECT SUM(value_pln) FROM asset_items a WHERE a.statement_id = s.id), 0) AS assets_value_pln,
          COALESCE((SELECT SUM(amount_pln) FROM income_items i WHERE i.statement_id = s.id), 0) AS income_total_pln,
          COALESCE((SELECT SUM(amount_pln) FROM liability_items l WHERE l.statement_id = s.id), 0) AS liabilities_total_pln,
          s.extraction_status,
          s.confidence
        FROM statements s
        JOIN people p ON p.id = s.person_id;
        """
    )


def upsert_person(conn: sqlite3.Connection, name: str) -> int:
    slug = slugify(name)
    conn.execute("INSERT OR IGNORE INTO people(name, slug) VALUES (?, ?)", (name, slug))
    return conn.execute("SELECT id FROM people WHERE name = ?", (name,)).fetchone()[0]


def upsert_statement(conn: sqlite3.Connection, row: dict) -> int:
    person_id = upsert_person(conn, row.get("person") or "unknown")
    year_text = row.get("year") or ""
    year = int(year_text) if year_text.isdigit() else None
    conn.execute(
        """
        INSERT INTO statements(person_id, year, source_url, file_path, download_status)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(source_url) DO UPDATE SET
          person_id=excluded.person_id,
          year=excluded.year,
          file_path=excluded.file_path,
          download_status=excluded.download_status
        """,
        (person_id, year, row.get("url") or "", row.get("file_path") or "", row.get("status") or "ok"),
    )
    return conn.execute("SELECT id FROM statements WHERE source_url = ?", (row.get("url") or "",)).fetchone()[0]


def seed_sections(conn: sqlite3.Connection, statement_id: int) -> None:
    conn.executemany(
        """
        INSERT OR IGNORE INTO statement_sections(statement_id, section_code, section_title, pillar)
        VALUES (?, ?, ?, ?)
        """,
        [(statement_id, code, title, pillar) for code, title, pillar in SECTIONS],
    )


def import_index(conn: sqlite3.Connection, index_path: Path) -> int:
    with index_path.open(newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    for row in rows:
        statement_id = upsert_statement(conn, row)
        seed_sections(conn, statement_id)

    conn.commit()
    return len(rows)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--index", default="data/statements_index.csv")
    parser.add_argument("--db", default="data/analysis.db")
    args = parser.parse_args()

    with connect(Path(args.db)) as conn:
        init_schema(conn)
        count = import_index(conn, Path(args.index))

        people_count = conn.execute("SELECT COUNT(*) FROM people").fetchone()[0]
        statement_count = conn.execute("SELECT COUNT(*) FROM statements").fetchone()[0]
        section_count = conn.execute("SELECT COUNT(*) FROM statement_sections").fetchone()[0]

    print(f"Imported index rows: {count}")
    print(f"People: {people_count} | Statements: {statement_count} | Sections: {section_count}")
    print(f"Database: {args.db}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
