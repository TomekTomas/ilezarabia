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


def item_key(item: dict) -> str:
    parts = [
        item.get("asset_type") or "",
        item.get("description") or "",
        item.get("area") or "",
        item.get("legal_title") or "",
    ]
    return re.sub(r"\s+", " ", " ".join(parts).lower()).strip()


def significant_assets(statement: dict) -> list[dict]:
    items = []
    for item in statement.get("assets", []):
        value = item.get("value_pln") or item.get("estimated_value_pln") or 0
        if value >= 50_000:
            items.append({"key": item_key(item), "label": item.get("description") or item.get("asset_type"), "value": value})
    return items


def attach_anomalies(statements: list[dict]) -> None:
    previous = None
    for statement in statements:
        statement["anomalies"] = []
        statement["anomaly_score"] = 0
        if previous is None:
            previous = statement
            continue

        income = statement.get("income_total_pln") or 0
        asset_total = statement.get("assets_estimated_total_pln") or statement.get("assets_value_pln") or 0
        previous_asset_total = previous.get("assets_estimated_total_pln") or previous.get("assets_value_pln") or 0
        debt_total = statement.get("liabilities_total_pln") or 0
        previous_debt_total = previous.get("liabilities_total_pln") or 0
        asset_delta = asset_total - previous_asset_total
        debt_delta = debt_total - previous_debt_total
        net_delta = (asset_total - debt_total) - (previous_asset_total - previous_debt_total)
        unexplained_gap = income - max(net_delta, 0)

        previous_assets = {item["key"] for item in significant_assets(previous)}
        current_assets = significant_assets(statement)
        new_assets = [item for item in current_assets if item["key"] not in previous_assets]

        if income >= 100_000 and unexplained_gap >= max(100_000, income * 0.35):
            severity = "high" if unexplained_gap >= max(250_000, income * 0.55) else "medium"
            statement["anomalies"].append(
                {
                    "type": "income_gap",
                    "severity": severity,
                    "title": "Dochód nie widać w zmianie majątku",
                    "description": (
                        "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. "
                        "Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu "
                        "albo brak pełnego odzwierciedlenia w aktywach."
                    ),
                    "amount_pln": round(unexplained_gap, 2),
                    "metrics": {
                        "income_pln": round(income, 2),
                        "net_delta_pln": round(net_delta, 2),
                        "asset_delta_pln": round(asset_delta, 2),
                        "debt_delta_pln": round(debt_delta, 2),
                    },
                }
            )

        if asset_delta >= max(150_000, income + max(debt_delta, 0) + 100_000):
            statement["anomalies"].append(
                {
                    "type": "asset_jump",
                    "severity": "medium",
                    "title": "Skok majątku większy niż deklarowane źródła",
                    "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
                    "amount_pln": round(asset_delta - income - max(debt_delta, 0), 2),
                    "metrics": {
                        "income_pln": round(income, 2),
                        "asset_delta_pln": round(asset_delta, 2),
                        "debt_delta_pln": round(debt_delta, 2),
                    },
                }
            )

        if debt_delta >= 100_000 and asset_delta < debt_delta * 0.4:
            statement["anomalies"].append(
                {
                    "type": "debt_jump",
                    "severity": "medium",
                    "title": "Wzrost zobowiązań bez podobnego wzrostu aktywów",
                    "description": "Zadłużenie wzrosło dużo mocniej niż widoczny majątek.",
                    "amount_pln": round(debt_delta, 2),
                    "metrics": {
                        "asset_delta_pln": round(asset_delta, 2),
                        "debt_delta_pln": round(debt_delta, 2),
                    },
                }
            )

        if new_assets:
            statement["asset_changes"] = {
                "new_significant_assets": [
                    {"label": item["label"], "value_pln": round(item["value"], 2)} for item in new_assets[:5]
                ]
            }
        else:
            statement["asset_changes"] = {"new_significant_assets": []}

        statement["anomaly_score"] = sum(2 if item["severity"] == "high" else 1 for item in statement["anomalies"])
        previous = statement


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

        attach_anomalies(statements)
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
