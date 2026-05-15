#!/usr/bin/env python3
"""Export reviewed analysis data into a static web data module."""

from __future__ import annotations

import argparse
import json
import re
import sqlite3
from pathlib import Path

MARKET_CONTEXT = {
    "generated_label": "wyceny z 2026-05-15",
    "fx_effective_date": "2026-05-14",
    "fx": {"USD": 3.6205, "EUR": 4.2401, "DKK": 0.5674},
    "crypto": {"BTC": {"usd": 80492.0, "pln": 294181.0}, "XRP": {"usd": 1.47, "pln": 5.36}},
    "stocks": {"NVDA": {"usd": 235.74}, "ACHR": {"usd": 6.41}},
    "sources": {
        "fx": "https://api.nbp.pl/",
        "crypto": "https://www.coingecko.com/",
        "stocks": "market data snapshot",
    },
}


def parse_number(text: str) -> float | None:
    cleaned = re.sub(r"[^0-9,.-]", "", text).replace(" ", "")
    if not cleaned:
        return None
    if "," in cleaned and "." in cleaned:
        cleaned = cleaned.replace(".", "").replace(",", ".")
    else:
        cleaned = cleaned.replace(",", ".")
    try:
        return float(cleaned)
    except ValueError:
        return None


def estimate_item_value(item: dict) -> None:
    raw = f"{item.get('description') or ''}; {item.get('raw_text') or ''}"
    parts: list[str] = []
    total = 0.0

    if item.get("asset_type") == "foreign_currency":
        for amount, code in re.findall(r"([0-9][0-9\s.,]*)\s*(USD|EUR|DKK|BTC|XRP)\b", raw, flags=re.I):
            value = parse_number(amount)
            if value is None:
                continue
            code = code.upper()
            if code in MARKET_CONTEXT["fx"]:
                pln = value * MARKET_CONTEXT["fx"][code]
                parts.append(f"{value:g} {code} x {MARKET_CONTEXT['fx'][code]:g} PLN")
            elif code in MARKET_CONTEXT["crypto"]:
                pln = value * MARKET_CONTEXT["crypto"][code]["pln"]
                parts.append(f"{value:g} {code} x {MARKET_CONTEXT['crypto'][code]['pln']:g} PLN")
            else:
                continue
            total += pln

    if item.get("asset_type") == "securities":
        aliases = {"NVIDIA": "NVDA", "NVDA": "NVDA", "ACHR": "ACHR"}
        for name, amount in re.findall(r"\b(NVIDIA|NVDA|ACHR)\b\s*([0-9][0-9\s.,]*)", raw, flags=re.I):
            symbol = aliases[name.upper()]
            value = parse_number(amount)
            price = MARKET_CONTEXT["stocks"].get(symbol, {}).get("usd")
            if value is None or price is None:
                continue
            pln = value * price * MARKET_CONTEXT["fx"]["USD"]
            parts.append(f"{value:g} {symbol} x {price:g} USD x {MARKET_CONTEXT['fx']['USD']:g} PLN")
            total += pln

        declared = re.search(r"kwot[aeę]\s+([0-9][0-9\s.,]*)\s*USD", raw, flags=re.I)
        if declared:
            declared_value = parse_number(declared.group(1))
            if declared_value is not None:
                item["declared_value_usd"] = round(declared_value, 2)

    if total:
        item["estimated_value_pln"] = round(total, 2)
        item["estimate_note"] = "; ".join(parts)


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
        person["role"] = "Radny/Radna"
        person["category"] = "Radni"
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
            statement["filing_year"] = statement["year"]
            statement["report_year"] = statement["year"] - 1 if statement["year"] else None
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
            for item in statement["assets"]:
                estimate_item_value(item)
            estimated_extra = sum(
                item.get("estimated_value_pln") or 0
                for item in statement["assets"]
                if item.get("value_pln") is None
            )
            statement["assets_estimated_extra_pln"] = round(estimated_extra, 2)
            statement["assets_estimated_total_pln"] = round((statement["assets_value_pln"] or 0) + estimated_extra, 2)
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
        "market_context": MARKET_CONTEXT,
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
