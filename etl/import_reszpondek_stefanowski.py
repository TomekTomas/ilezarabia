#!/usr/bin/env python3
"""Import hand-reviewed rows for Reszpondek Rafał and Stefanowski Mikołaj."""

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


def asset(conn: sqlite3.Connection, sid: int, code: str, asset_type: str, description: str, value: float | None = None, area: str = "", legal_title: str = "", confidence: str = "medium") -> None:
    conn.execute(
        """
        INSERT INTO asset_items
        (statement_id, section_code, asset_type, description, value_pln, area, legal_title, ownership, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, '', ?, ?, 'manual_reviewed')
        """,
        (sid, code, asset_type, description, value, area, legal_title, description, confidence),
    )


def income(conn: sqlite3.Connection, sid: int, code: str, income_type: str, payer: str, description: str, amount: float, confidence: str = "medium") -> None:
    conn.execute(
        """
        INSERT INTO income_items
        (statement_id, section_code, income_type, payer, description, amount_pln, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'manual_reviewed')
        """,
        (sid, code, income_type, payer, description, amount, description, confidence),
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


def import_stefanowski(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "year": 2020,
            "date": "2020-06-29",
            "cash": 15000,
            "flat": None,
            "incomes": [("employment", "Umowa o pracę", 1666), ("council_allowance", "Dieta radnego", 27000)],
            "vehicle": ("Ford Focus Electric 2012", None),
        },
        {
            "year": 2021,
            "date": "2021-05-30",
            "cash": 25000,
            "flat": None,
            "incomes": [("council_allowance", "Dieta radnego", 30921.19), ("council_allowance", "Dieta komisji wyborczej", 700), ("employment", "Wynagrodzenie z innych umów", 819.50)],
            "vehicle": ("Ford Focus Electric 2012", None),
        },
        {
            "year": 2022,
            "date": "2022-04-28",
            "cash": 100000,
            "flat": None,
            "incomes": [("council_allowance", "Dieta radnego", 34464.60), ("employment", "Umowa o pracę / inne dochody", 80953.27)],
            "vehicle": ("Nissan Leaf 2012", None),
        },
        {
            "year": 2023,
            "date": "2023-04-27",
            "cash": 140000,
            "flat": None,
            "incomes": [("council_allowance", "Dieta radnego", 40084.95), ("employment", "Umowa o pracę / inne dochody", 118988.06), ("other_income", "Inne dochody", 20053.23)],
            "vehicle": ("Nissan Leaf 2012", None),
        },
        {
            "year": 2024,
            "source_contains": "stefanowski_mikolaj_20240430",
            "date": "2024-04-30",
            "cash": 120000,
            "flat": ("Mieszkanie", 150000, "64 m2", "własność"),
            "incomes": [("council_allowance", "Dieta radnego", 50940.12), ("employment", "Umowa o pracę", 34475.57)],
            "vehicle": ("Renault / pojazd elektryczny 2014, odczyt roboczy", None),
        },
    ]
    for row in rows:
        sid = statement_id(conn, "stefanowski-mikolaj", row["year"], row.get("source_contains"))
        clear_statement(conn, sid, row["date"], "medium", "Manual review from rendered contact sheets. Some handwritten values are working reads.")
        section(conn, sid, "I", f"Środki pieniężne: ok. {row['cash']} zł; waluty i papiery wartościowe: nie dotyczy.", "medium")
        section(conn, sid, "II", "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.", "medium")
        for code in ["III", "IV", "V", "VI", "VII", "X"]:
            section(conn, sid, code, "Nie dotyczy według formularza.", "medium")
        section(conn, sid, "VIII", "Dieta radnego oraz dochody z pracy/innych umów.", "medium")
        section(conn, sid, "IX", row["vehicle"][0], "medium")
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence="medium")
        if row["flat"]:
            desc, value, area, title = row["flat"]
            asset(conn, sid, "II", "real_estate_flat", desc, value, area=area, legal_title=title, confidence="medium")
        asset(conn, sid, "IX", "vehicle", row["vehicle"][0], row["vehicle"][1], confidence="medium")
        for income_type, description, amount in row["incomes"]:
            payer = "Rada Miejska w Łodzi" if income_type == "council_allowance" else description
            income(conn, sid, "VIII", income_type, payer, description, amount, confidence="medium")


def import_reszpondek(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "year": 2020,
            "date": "2020-05-28",
            "cash": 64830,
            "securities": 64000,
            "flat": ("Mieszkanie", 229000, "64,55 m2", "prawo do wyłącznego korzystania / odczyt roboczy"),
            "shares": 60200,
            "incomes": [("employment", "Umowa o pracę", 7812.01), ("council_allowance", "Dieta radnego", 58384.69)],
            "vehicles": ["Opel Vivaro 2016", "Mercedes 4x4 2013"],
            "liabilities": [("do weryfikacji", "Kredyty z rękopisu, suma robocza", 376000)],
        },
        {
            "year": 2021,
            "date": "2021-04-28",
            "cash": 56000,
            "securities": 65000,
            "flat": ("Mieszkanie", 229000, "64,55 m2", "odczyt roboczy"),
            "shares": 60000,
            "incomes": [("council_allowance", "Dieta radnego / inne dochody", 61000)],
            "vehicles": ["Opel Vivaro 2016", "Mercedes 4x4 2013"],
            "liabilities": [("do weryfikacji", "Kredyty z rękopisu, suma robocza", 330000)],
        },
        {
            "year": 2022,
            "date": "2022-04-28",
            "cash": 70000,
            "securities": 80000,
            "flat": ("Mieszkanie", 240000, "64,55 m2", "odczyt roboczy"),
            "shares": 75000,
            "incomes": [("council_allowance", "Dieta radnego", 29011), ("company_role_income", "Spółka / funkcja", 52000)],
            "vehicles": ["pojazdy z rękopisu, odczyt roboczy"],
            "liabilities": [("do weryfikacji", "Kredyty z rękopisu, suma robocza", 300000)],
        },
        {
            "year": 2023,
            "date": "2023-04-27",
            "cash": 120000,
            "securities": 100000,
            "flat": ("Mieszkanie", 260000, "64,55 m2", "odczyt roboczy"),
            "shares": 90000,
            "incomes": [("council_allowance", "Dieta radnego / inne dochody", 70000), ("company_role_income", "Spółka / funkcja", 52000)],
            "vehicles": ["pojazdy z rękopisu, odczyt roboczy"],
            "liabilities": [("do weryfikacji", "Kredyty z rękopisu, suma robocza", 270000)],
        },
        {
            "year": 2024,
            "date": "2024-06-25",
            "cash": 21000,
            "securities": 70000,
            "flat": ("Mieszkanie", 270000, "64,55 m2", "prawo do wyłącznego korzystania / odczyt roboczy"),
            "shares": 120000,
            "incomes": [("company_role_income", "Spółki handlowe", 50000), ("council_allowance", "Dieta radnego / inne dochody", 60032.35)],
            "vehicles": ["Mercedes 2018", "Fiat 110 / pojazd z rękopisu"],
            "liabilities": [("do weryfikacji", "Kredyty z rękopisu, suma robocza", 260000)],
        },
    ]
    for row in rows:
        sid = statement_id(conn, "reszpondek-rafal", row["year"])
        clear_statement(conn, sid, row["date"], "low", "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.")
        section(conn, sid, "I", "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.", "low")
        section(conn, sid, "II", "Mieszkanie / nieruchomości odczytane roboczo z formularza.", "low")
        section(conn, sid, "III", "Udziały w spółkach, wartość robocza.", "low")
        section(conn, sid, "IV", "Akcje: brak istotnych pozycji poza odczytem roboczym.", "low")
        section(conn, sid, "V", "Nie dotyczy według formularza.", "low")
        section(conn, sid, "VI", "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.", "low")
        section(conn, sid, "VII", "Funkcje w spółkach: roboczy odczyt rękopisu.", "low")
        section(conn, sid, "VIII", "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.", "low")
        section(conn, sid, "IX", "; ".join(row["vehicles"]), "low")
        section(conn, sid, "X", "Zobowiązania pieniężne z rękopisu, suma robocza.", "low")
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence="low")
        asset(conn, sid, "I", "securities", "Papiery wartościowe / środki inwestycyjne, odczyt roboczy", row["securities"], confidence="low")
        desc, value, area, title = row["flat"]
        asset(conn, sid, "II", "real_estate_flat", desc, value, area=area, legal_title=title, confidence="low")
        asset(conn, sid, "III", "shares", "Udziały w spółkach, odczyt roboczy", row["shares"], confidence="low")
        for vehicle in row["vehicles"]:
            asset(conn, sid, "IX", "vehicle", vehicle, None, confidence="low")
        for income_type, description, amount in row["incomes"]:
            code = "VII" if income_type == "company_role_income" else "VIII"
            income(conn, sid, code, income_type, description, description, amount, confidence="low")
        for creditor, description, amount in row["liabilities"]:
            liability(conn, sid, creditor, description, amount, confidence="low")


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_reszpondek(conn)
        import_stefanowski(conn)
    print("Imported reviewed statements for Reszpondek Rafał and Stefanowski Mikołaj.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
