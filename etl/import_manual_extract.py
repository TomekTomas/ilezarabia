#!/usr/bin/env python3
"""Import a reviewed disclosure extraction JSON into analysis.db."""

from __future__ import annotations

import argparse
import json
import sqlite3
from pathlib import Path


def connect(db_path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def statement_id_for_source(conn: sqlite3.Connection, source_url: str) -> int:
    row = conn.execute("SELECT id FROM statements WHERE source_url = ?", (source_url,)).fetchone()
    if row is None:
        raise SystemExit(f"Statement not found for source_url: {source_url}")
    return row[0]


def clear_existing_items(conn: sqlite3.Connection, statement_id: int) -> None:
    conn.execute("DELETE FROM asset_items WHERE statement_id = ?", (statement_id,))
    conn.execute("DELETE FROM income_items WHERE statement_id = ?", (statement_id,))
    conn.execute("DELETE FROM liability_items WHERE statement_id = ?", (statement_id,))


def update_sections(conn: sqlite3.Connection, statement_id: int, sections: dict) -> None:
    for code, payload in sections.items():
        conn.execute(
            """
            UPDATE statement_sections
            SET raw_text = ?, structured_json = ?, confidence = ?, review_status = ?
            WHERE statement_id = ? AND section_code = ?
            """,
            (
                payload.get("raw_text", ""),
                json.dumps(payload.get("structured", payload), ensure_ascii=False),
                payload.get("confidence", "high"),
                payload.get("review_status", "reviewed"),
                statement_id,
                code,
            ),
        )


def insert_assets(conn: sqlite3.Connection, statement_id: int, assets: list[dict]) -> None:
    for item in assets:
        conn.execute(
            """
            INSERT INTO asset_items
            (statement_id, section_code, asset_type, description, value_pln, area, legal_title, ownership, raw_text, confidence, review_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                statement_id,
                item.get("section_code", ""),
                item.get("asset_type", ""),
                item.get("description", ""),
                item.get("value_pln"),
                item.get("area", ""),
                item.get("legal_title", ""),
                item.get("ownership", ""),
                item.get("raw_text", ""),
                item.get("confidence", "high"),
                item.get("review_status", "reviewed"),
            ),
        )


def insert_incomes(conn: sqlite3.Connection, statement_id: int, incomes: list[dict]) -> None:
    for item in incomes:
        conn.execute(
            """
            INSERT INTO income_items
            (statement_id, section_code, income_type, payer, description, amount_pln, raw_text, confidence, review_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                statement_id,
                item.get("section_code", ""),
                item.get("income_type", ""),
                item.get("payer", ""),
                item.get("description", ""),
                item.get("amount_pln"),
                item.get("raw_text", ""),
                item.get("confidence", "high"),
                item.get("review_status", "reviewed"),
            ),
        )


def insert_liabilities(conn: sqlite3.Connection, statement_id: int, liabilities: list[dict]) -> None:
    for item in liabilities:
        conn.execute(
            """
            INSERT INTO liability_items
            (statement_id, creditor, description, amount_pln, currency, raw_text, confidence, review_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                statement_id,
                item.get("creditor", ""),
                item.get("description", ""),
                item.get("amount_pln"),
                item.get("currency", "PLN"),
                item.get("raw_text", ""),
                item.get("confidence", "high"),
                item.get("review_status", "reviewed"),
            ),
        )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--db", default="data/analysis.db")
    parser.add_argument("--json", required=True)
    args = parser.parse_args()

    payload = json.loads(Path(args.json).read_text(encoding="utf-8"))

    with connect(Path(args.db)) as conn:
        statement_id = statement_id_for_source(conn, payload["source_url"])
        clear_existing_items(conn, statement_id)
        conn.execute(
            """
            UPDATE statements
            SET statement_date = ?, extraction_status = ?, confidence = ?, notes = ?
            WHERE id = ?
            """,
            (
                payload.get("statement_date"),
                "manual_reviewed",
                payload.get("confidence", "high"),
                payload.get("notes", ""),
                statement_id,
            ),
        )
        update_sections(conn, statement_id, payload.get("sections", {}))
        insert_assets(conn, statement_id, payload.get("asset_items", []))
        insert_incomes(conn, statement_id, payload.get("income_items", []))
        insert_liabilities(conn, statement_id, payload.get("liability_items", []))
        conn.execute(
            """
            INSERT INTO extraction_runs(statement_id, method, input_file, output_file, status)
            VALUES (?, 'manual_review', ?, ?, 'ok')
            """,
            (statement_id, payload.get("source_file", ""), args.json),
        )
        conn.commit()

    print(f"Imported manual extraction for statement_id={statement_id}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
