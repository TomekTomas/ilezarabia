#!/usr/bin/env python3
"""Export reviewed analysis data into a static web data module."""

from __future__ import annotations

import argparse
import json
import sqlite3
from pathlib import Path


def rows(conn: sqlite3.Connection, query: str, params: tuple = ()) -> list[dict]:
    conn.row_factory = sqlite3.Row
    return [dict(row) for row in conn.execute(query, params)]


def export_payload(db_path: Path) -> dict:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row

    people = rows(
        conn,
        """
        SELECT DISTINCT p.id, p.name, p.slug
        FROM people p
        JOIN statements s ON s.person_id = p.id
        WHERE s.extraction_status = 'manual_reviewed'
        ORDER BY p.name
        """,
    )

    for person in people:
        statements = rows(
            conn,
            """
            SELECT
              s.id,
              s.year,
              s.statement_date,
              s.source_url,
              s.file_path,
              s.confidence,
              s.notes,
              sp.assets_value_pln,
              sp.income_total_pln,
              sp.liabilities_total_pln
            FROM statements s
            JOIN statement_pillars sp ON sp.statement_id = s.id
            WHERE s.person_id = ?
              AND s.extraction_status = 'manual_reviewed'
            ORDER BY s.year
            """,
            (person["id"],),
        )

        for statement in statements:
            statement_id = statement["id"]
            statement["assets"] = rows(
                conn,
                """
                SELECT section_code, asset_type, description, value_pln, area, legal_title, ownership, raw_text, confidence
                FROM asset_items
                WHERE statement_id = ?
                ORDER BY section_code, asset_type, id
                """,
                (statement_id,),
            )
            statement["incomes"] = rows(
                conn,
                """
                SELECT section_code, income_type, payer, description, amount_pln, raw_text, confidence
                FROM income_items
                WHERE statement_id = ?
                ORDER BY section_code, income_type, id
                """,
                (statement_id,),
            )
            statement["liabilities"] = rows(
                conn,
                """
                SELECT creditor, description, amount_pln, currency, raw_text, confidence
                FROM liability_items
                WHERE statement_id = ?
                ORDER BY id
                """,
                (statement_id,),
            )
            statement["sections"] = rows(
                conn,
                """
                SELECT section_code, section_title, pillar, raw_text, structured_json, confidence, review_status
                FROM statement_sections
                WHERE statement_id = ?
                ORDER BY
                  CASE section_code
                    WHEN 'I' THEN 1 WHEN 'II' THEN 2 WHEN 'III' THEN 3 WHEN 'IV' THEN 4 WHEN 'V' THEN 5
                    WHEN 'VI' THEN 6 WHEN 'VII' THEN 7 WHEN 'VIII' THEN 8 WHEN 'IX' THEN 9 WHEN 'X' THEN 10
                    ELSE 99
                  END
                """,
                (statement_id,),
            )
            for section in statement["sections"]:
                try:
                    section["structured"] = json.loads(section.pop("structured_json") or "{}")
                except json.JSONDecodeError:
                    section["structured"] = {}

        person["statements"] = statements

    return {
        "generated_at": rows(conn, "SELECT datetime('now') AS generated_at")[0]["generated_at"],
        "people": people,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--db", default="data/analysis.db")
    parser.add_argument("--out", default="web/data.js")
    args = parser.parse_args()

    payload = export_payload(Path(args.db))
    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        "window.ILE_ZARABIA_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Exported {len(payload['people'])} reviewed people to {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
