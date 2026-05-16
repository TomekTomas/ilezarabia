#!/usr/bin/env python3
"""Import hand-reviewed rows for Stasiak Krzysztof and Włodarczyk Maja."""

from __future__ import annotations

import sqlite3
from pathlib import Path

DB = Path("data/analysis.db")

SECTIONS = {
    "I": ("Środki pieniężne i papiery wartościowe", "assets"),
    "II": ("Nieruchomości", "assets"),
    "III": ("Udziały w spółkach handlowych", "assets"),
    "IV": ("Akcje w spółkach handlowych", "assets"),
    "V": ("Mienie nabyte od Skarbu Państwa lub samorządu", "assets"),
    "VI": ("Prowadzona działalność gospodarcza", "earnings"),
    "VII": ("Funkcje w spółkach handlowych i dochody", "earnings"),
    "VIII": ("Inne dochody", "earnings"),
    "IX": ("Składniki mienia ruchomego powyżej 10 000 zł", "assets"),
    "X": ("Zobowiązania pieniężne", "debts"),
}


def statement_id(conn: sqlite3.Connection, slug: str, filing_year: int, source_contains: str | None = None) -> int:
    query = """
        SELECT s.id
        FROM statements s
        JOIN people p ON p.id = s.person_id
        WHERE p.slug = ? AND s.year = ?
    """
    params: list[object] = [slug, filing_year]
    if source_contains:
        query += " AND s.source_url LIKE ?"
        params.append(f"%{source_contains}%")
    query += " ORDER BY s.id LIMIT 1"
    row = conn.execute(query, params).fetchone()
    if row is None:
        raise RuntimeError(f"Missing statement: {slug} {filing_year} {source_contains or ''}")
    return int(row[0])


def clear_statement(conn: sqlite3.Connection, sid: int, date: str, confidence: str, notes: str) -> None:
    for table in ["asset_items", "income_items", "liability_items"]:
        conn.execute(f"DELETE FROM {table} WHERE statement_id = ?", (sid,))
    conn.execute(
        """
        UPDATE statements
        SET statement_date = ?, extraction_status = 'manual_reviewed', confidence = ?, notes = ?
        WHERE id = ?
        """,
        (date, confidence, notes, sid),
    )
    for code, (title, pillar) in SECTIONS.items():
        conn.execute(
            """
            INSERT OR IGNORE INTO statement_sections(statement_id, section_code, section_title, pillar)
            VALUES (?, ?, ?, ?)
            """,
            (sid, code, title, pillar),
        )


def section(conn: sqlite3.Connection, sid: int, code: str, raw_text: str, confidence: str) -> None:
    title, pillar = SECTIONS[code]
    conn.execute(
        """
        UPDATE statement_sections
        SET section_title = ?, pillar = ?, raw_text = ?, confidence = ?, review_status = 'manual_reviewed'
        WHERE statement_id = ? AND section_code = ?
        """,
        (title, pillar, raw_text, confidence, sid, code),
    )


def asset(
    conn: sqlite3.Connection,
    sid: int,
    code: str,
    asset_type: str,
    description: str,
    value: float | None = None,
    area: str = "",
    legal_title: str = "",
    raw_text: str = "",
    confidence: str = "medium",
) -> None:
    conn.execute(
        """
        INSERT INTO asset_items
        (statement_id, section_code, asset_type, description, value_pln, area, legal_title, ownership, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, '', ?, ?, 'manual_reviewed')
        """,
        (sid, code, asset_type, description, value, area, legal_title, raw_text or description, confidence),
    )


def income(
    conn: sqlite3.Connection,
    sid: int,
    code: str,
    income_type: str,
    payer: str,
    description: str,
    amount: float,
    raw_text: str = "",
    confidence: str = "medium",
) -> None:
    conn.execute(
        """
        INSERT INTO income_items
        (statement_id, section_code, income_type, payer, description, amount_pln, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'manual_reviewed')
        """,
        (sid, code, income_type, payer, description, amount, raw_text or description, confidence),
    )


def liability(conn: sqlite3.Connection, sid: int, creditor: str, description: str, amount: float, confidence: str = "medium") -> None:
    conn.execute(
        """
        INSERT INTO liability_items
        (statement_id, creditor, description, amount_pln, currency, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, 'PLN', ?, ?, 'manual_reviewed')
        """,
        (sid, creditor, description, amount, description, confidence),
    )


def add_stasiak_real_estate(conn: sqlite3.Connection, sid: int, flat_value: float, lands: list[tuple[str, float, str, str]], confidence: str) -> None:
    asset(conn, sid, "II", "real_estate_flat", "Mieszkanie", flat_value, area="54 m2", legal_title="własność obciążona prawem służebności osobistej / darowizna", confidence=confidence)
    for description, value, area, legal_title in lands:
        asset(conn, sid, "II", "real_estate_land", description, value, area=area, legal_title=legal_title, confidence=confidence)


def import_stasiak(conn: sqlite3.Connection) -> None:
    common_lands = [
        ("Działka", 60000, "1200 m2", "własność"),
        ("Boks garażowy", 27000, "16,24 m2", "własność / darowizna"),
    ]
    rows = [
        {
            "filing_year": 2020,
            "date": "2020-05-28",
            "cash": 84000,
            "securities": 671500,
            "flat": 150000,
            "lands": common_lands,
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 32209.56), ("employment", "Stosunek pracy", 136304.86), ("contract_work", "Umowa zlecenia", 6000)],
            "confidence": "high",
        },
        {
            "filing_year": 2021,
            "date": "2021-04-28",
            "cash": 91000,
            "securities": 806000,
            "flat": 150000,
            "lands": common_lands,
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 32209.56), ("employment", "Stosunek pracy", 139943.34)],
            "confidence": "high",
        },
        {
            "filing_year": 2022,
            "date": "2022-04-27",
            "cash": 126700,
            "securities": 903500,
            "flat": 150000,
            "lands": common_lands,
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 37909.91), ("employment", "Stosunek pracy", 146374.90)],
            "confidence": "high",
        },
        {
            "filing_year": 2023,
            "date": "2023-04-26",
            "cash": 259000,
            "securities": 821000,
            "flat": 150000,
            "lands": common_lands,
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 48428.28), ("employment", "Stosunek pracy", 149169.41)],
            "confidence": "high",
        },
        {
            "filing_year": 2024,
            "source_contains": "stasiak_krzysztof_20240429",
            "date": "2024-04-29",
            "cash": 316000,
            "securities": 1066000,
            "flat": 150000,
            "lands": [
                ("Działka", 100000, "1200 m2", "własność"),
                ("Działka", 13000, "300 m2", "udział 1/10 części we własności"),
                ("Działka", 40000, "400 m2", "własność / darowizna"),
                ("Boks garażowy", None, "16,24 m2", "własność"),
            ],
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 48428.28), ("employment", "Stosunek pracy", 147443.39)],
            "confidence": "medium",
        },
        {
            "filing_year": 2025,
            "date": "2025-04-25",
            "cash": 68000,
            "securities": 1506600,
            "flat": 250000,
            "lands": [
                ("Działka", 100000, "1200 m2", "własność"),
                ("Działka", 40000, "300 m2", "udział 1/10 części we własności"),
                ("Boks garażowy", 40000, "16,24 m2", "własność"),
            ],
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 50000), ("employment", "Stosunek pracy", 106668.95), ("employment", "Stosunek pracy", 20250)],
            "confidence": "medium",
        },
        {
            "filing_year": 2026,
            "date": "2026-04-27",
            "cash": 37000,
            "securities": 1822000,
            "flat": 250000,
            "lands": [
                ("Działka", 100000, "1200 m2", "własność"),
                ("Działka", 15000, "300 m2", "udział 1/10 części we własności"),
                ("Działka", 40000, "400 m2", "własność"),
            ],
            "incomes": [("council_allowance", "Rada Miejska w Łodzi", 52377.85), ("employment", "Stosunek pracy", 13248), ("employment", "Stosunek pracy", 7914.29)],
            "confidence": "medium",
        },
    ]

    for row in rows:
        sid = statement_id(conn, "stasiak-krzysztof", row["filing_year"], row.get("source_contains"))
        clear_statement(conn, sid, row["date"], row["confidence"], "Manual review from rendered contact sheets. Data year in UI is filing year minus one.")
        section(conn, sid, "I", f"Środki pieniężne: ok. {row['cash']} zł; papiery wartościowe / fundusze: ok. {row['securities']} zł.", row["confidence"])
        section(conn, sid, "II", "Mieszkanie, działki i boks garażowy odczytane z części II formularza.", row["confidence"])
        for code in ["III", "IV", "V", "VI", "VII"]:
            section(conn, sid, code, "Nie dotyczy / nie posiada według formularza.", row["confidence"])
        section(conn, sid, "VIII", "Dieta radnego i dochody ze stosunku pracy.", row["confidence"])
        section(conn, sid, "IX", "Hyundai Tucson 2019.", row["confidence"])
        section(conn, sid, "X", "Zobowiązania: nie dotyczy.", row["confidence"])
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence=row["confidence"])
        asset(conn, sid, "I", "investment_funds", "Jednostki funduszy inwestycyjnych / obligacje / IKZE", row["securities"], confidence=row["confidence"])
        add_stasiak_real_estate(conn, sid, row["flat"], row["lands"], row["confidence"])
        asset(conn, sid, "IX", "vehicle", "Hyundai Tucson 2019", None, confidence=row["confidence"])
        for income_type, description, amount in row["incomes"]:
            income(conn, sid, "VIII", income_type, description, description, amount, confidence=row["confidence"])


def import_wlodarczyk(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2024,
            "date": "2024-06-05",
            "cash": 5000,
            "securities": 2600,
            "incomes": [],
            "confidence": "low",
            "notes": "Włodarczyk 2024: handwritten form; securities amount is a low-confidence working read.",
        },
        {
            "filing_year": 2025,
            "date": "2025-04-30",
            "cash": 20000,
            "securities": None,
            "incomes": [("council_allowance", "Dieta radnego", 5759.00)],
            "confidence": "low",
            "notes": "Włodarczyk 2025: handwritten income entry is a low-confidence working read.",
        },
        {
            "filing_year": 2026,
            "date": "2026-04-30",
            "cash": 20000,
            "securities": None,
            "incomes": [("council_allowance", "Dieta radnego", 48588.04)],
            "confidence": "medium",
            "notes": "Włodarczyk 2026: manual review from contact sheet; income value is readable but handwritten.",
        },
    ]
    for row in rows:
        sid = statement_id(conn, "wlodarczyk-maja", row["filing_year"])
        clear_statement(conn, sid, row["date"], row["confidence"], row["notes"])
        section(conn, sid, "I", f"Środki pieniężne: {row['cash']} zł; papiery wartościowe: {row['securities'] or 'nie dotyczy'}.", row["confidence"])
        for code in ["II", "III", "IV", "V", "VI", "VII", "IX", "X"]:
            section(conn, sid, code, "Nie dotyczy według formularza.", row["confidence"])
        section(conn, sid, "VIII", "Dochody z diety radnego, jeśli wykazane w formularzu.", row["confidence"])
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence=row["confidence"])
        if row["securities"]:
            asset(conn, sid, "I", "securities", "Papiery wartościowe / akcje, odczyt roboczy", row["securities"], confidence=row["confidence"])
        for income_type, description, amount in row["incomes"]:
            income(conn, sid, "VIII", income_type, "Rada Miejska w Łodzi", description, amount, confidence=row["confidence"])


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_stasiak(conn)
        import_wlodarczyk(conn)
    print("Imported reviewed statements for Stasiak Krzysztof and Włodarczyk Maja.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
