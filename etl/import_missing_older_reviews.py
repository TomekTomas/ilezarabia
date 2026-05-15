#!/usr/bin/env python3
"""Import older hand-reviewed rows for Domaszewicz and Makowski."""

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
    "VII": ("Funkcje w spółkach handlowych", "earnings"),
    "VIII": ("Inne dochody", "earnings"),
    "IX": ("Mienie ruchome powyżej 10 000 zł", "assets"),
    "X": ("Zobowiązania pieniężne", "debts"),
}


def statement_id(conn: sqlite3.Connection, name: str, filing_year: int, source_contains: str | None = None) -> int:
    query = """
        SELECT s.id
        FROM statements s
        JOIN people p ON p.id = s.person_id
        WHERE p.name = ? AND s.year = ?
    """
    params: list[object] = [name, filing_year]
    if source_contains:
        query += " AND s.source_url LIKE ?"
        params.append(f"%{source_contains}%")
    query += " ORDER BY s.id LIMIT 1"
    row = conn.execute(query, params).fetchone()
    if row is None:
        raise RuntimeError(f"Missing statement: {name} {filing_year} {source_contains or ''}")
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


def liability(
    conn: sqlite3.Connection,
    sid: int,
    creditor: str,
    description: str,
    amount: float,
    raw_text: str = "",
    confidence: str = "low",
) -> None:
    conn.execute(
        """
        INSERT INTO liability_items
        (statement_id, creditor, description, amount_pln, currency, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, 'PLN', ?, ?, 'manual_reviewed')
        """,
        (sid, creditor, description, amount, raw_text or description, confidence),
    )


def import_domaszewicz(conn: sqlite3.Connection) -> None:
    sid = statement_id(conn, "Domaszewicz Bartosz", 2020)
    clear_statement(
        conn,
        sid,
        "2020-05-29",
        "high",
        "Older manual review. Typed/clean form; data year is filing year minus one.",
    )
    section(conn, sid, "I", "Środki pieniężne: 30 000 zł; waluty obce: 1100 BRL, 400 EUR, 500 USD; papiery wartościowe: brak.", "high")
    section(conn, sid, "II", "Nieruchomości: nie dotyczy.", "high")
    section(conn, sid, "VIII", "Umowa o pracę 3 364,50 zł; dieta radnego 32 209,56 zł.", "high")
    section(conn, sid, "IX", "Składniki mienia ruchomego: nie dotyczy.", "high")
    section(conn, sid, "X", "Zobowiązania: nie dotyczy.", "high")
    asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", 30000, raw_text="30 000 zł", confidence="high")
    asset(conn, sid, "I", "foreign_currency", "Waluty obce", None, raw_text="1100 BRL; 400 EUR; 500 USD", confidence="high")
    income(conn, sid, "VIII", "employment", "umowa o pracę", "Umowa o pracę", 3364.50, confidence="high")
    income(conn, sid, "VIII", "council_allowance", "Rada Miejska w Łodzi", "Dieta radnego", 32209.56, confidence="high")

    sid = statement_id(conn, "Domaszewicz Bartosz", 2021)
    clear_statement(
        conn,
        sid,
        "2021-04-30",
        "low",
        "Older manual review from contact sheet. Handwritten income values require confirmation.",
    )
    section(conn, sid, "I", "Środki pieniężne: 10 000 zł; waluty obce: 1 000 USD; papiery wartościowe: brak.", "medium")
    section(conn, sid, "II", "Nieruchomości: nie dotyczy.", "medium")
    section(conn, sid, "VI", "Działalność gospodarcza: dochód 9 400 zł.", "medium")
    section(conn, sid, "VIII", "Dieta radnego / inne dochody: ok. 44 500 zł do potwierdzenia.", "low")
    section(conn, sid, "IX", "Składniki mienia ruchomego: nie dotyczy.", "medium")
    section(conn, sid, "X", "Zobowiązania: nie dotyczy.", "medium")
    asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", 10000, raw_text="10 000 zł", confidence="medium")
    asset(conn, sid, "I", "foreign_currency", "Waluty obce", None, raw_text="1 000 USD", confidence="medium")
    income(conn, sid, "VI", "business_income", "działalność gospodarcza", "Dochód z działalności gospodarczej", 9400, confidence="medium")
    income(conn, sid, "VIII", "council_allowance", "Rada Miejska w Łodzi", "Dieta radnego / inne dochody", 44500, raw_text="ok. 44 500 zł - do potwierdzenia", confidence="low")

    sid = statement_id(conn, "Domaszewicz Bartosz", 2022)
    clear_statement(
        conn,
        sid,
        "2022-05-06",
        "medium",
        "Older manual review from contact sheet. Real estate is readable; business income still needs second review.",
    )
    section(conn, sid, "I", "Środki pieniężne: 10 000 zł; waluty obce i papiery wartościowe: brak.", "medium")
    section(conn, sid, "II", "Dom 131,5 m2 504 000 zł; dom 100 m2 250 000 zł; działka 1511 m2 240 000 zł; pozostałe działki do weryfikacji.", "medium")
    section(conn, sid, "VI", "Działalność gospodarcza: dochód ok. 44 896,61 zł do potwierdzenia.", "low")
    section(conn, sid, "VIII", "Dieta radnego 37 927,93 zł.", "medium")
    section(conn, sid, "IX", "Składniki mienia ruchomego: nie dotyczy.", "medium")
    section(conn, sid, "X", "Zobowiązania: nie dotyczy.", "medium")
    asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", 10000, raw_text="10 000 zł", confidence="medium")
    asset(conn, sid, "II", "real_estate_house", "Dom", 504000, area="131,5 m2", legal_title="współwłasność", raw_text="Dom 131,5 m2, 504 000 zł", confidence="medium")
    asset(conn, sid, "II", "real_estate_house", "Dom 100 m2", 250000, area="100 m2", legal_title="współwłasność", raw_text="Dom 100 m2, 250 000 zł", confidence="medium")
    asset(conn, sid, "II", "real_estate_land", "Działka 1511 m2", 240000, area="1511 m2", legal_title="współwłasność", raw_text="Działka 1511 m2, 240 000 zł", confidence="medium")
    income(conn, sid, "VI", "business_income", "działalność gospodarcza", "Dochód z działalności gospodarczej", 44896.61, raw_text="ok. 44 896,61 zł - do potwierdzenia", confidence="low")
    income(conn, sid, "VIII", "council_allowance", "Rada Miejska w Łodzi", "Dieta radnego", 37927.93, confidence="medium")


def import_makowski(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2020,
            "date": "2020-05-28",
            "cash": 10000,
            "company_income": 15704.21,
            "other_income": 110000,
            "liabilities": 290000,
            "notes": "Makowski 2020: handwritten statement. Income and liability totals are low-confidence working reads.",
        },
        {
            "filing_year": 2021,
            "date": "2021-04-28",
            "cash": 10000,
            "company_income": 22750,
            "other_income": 145000,
            "liabilities": 400000,
            "notes": "Makowski 2021: handwritten statement. Most section VIII-X values require confirmation.",
        },
        {
            "filing_year": 2022,
            "date": "2022-04-29",
            "cash": 20000,
            "company_income": 26000,
            "other_income": 150000,
            "liabilities": 450000,
            "notes": "Makowski 2022: handwritten statement. Imported only as low-confidence working baseline.",
        },
        {
            "filing_year": 2023,
            "date": "2023-04-27",
            "cash": 20000,
            "company_income": 40700,
            "other_income": 165000,
            "liabilities": 500000,
            "notes": "Makowski 2023: handwritten statement. Values are approximate pending manual confirmation.",
        },
    ]
    for row in rows:
        sid = statement_id(conn, "Makowski Krzysztof", row["filing_year"])
        clear_statement(conn, sid, row["date"], "low", row["notes"])
        section(conn, sid, "I", f"Środki pieniężne: {row['cash']:,.0f} zł; waluty obce i papiery wartościowe: nie dotyczy.".replace(",", " "), "low")
        section(conn, sid, "II", "Nieruchomości: nie dotyczy według formularza.", "medium")
        section(conn, sid, "III", "Udziały w spółkach handlowych: wpisane ręcznie; szczegóły do potwierdzenia.", "low")
        section(conn, sid, "VII", f"Dochód z funkcji w spółkach: ok. {row['company_income']:,.2f} zł do potwierdzenia.".replace(",", " "), "low")
        section(conn, sid, "VIII", f"Inne dochody / dieta / praca: roboczo ok. {row['other_income']:,.2f} zł do potwierdzenia.".replace(",", " "), "low")
        section(conn, sid, "IX", "Składniki mienia ruchomego: wpisy ręczne, kwoty do potwierdzenia.", "low")
        section(conn, sid, "X", f"Zobowiązania: roboczo ok. {row['liabilities']:,.2f} zł do potwierdzenia.".replace(",", " "), "low")
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], raw_text=f"{row['cash']:,.0f} zł".replace(",", " "), confidence="low")
        income(conn, sid, "VII", "company_role_income", "spółki handlowe", "Dochód z funkcji w spółkach - wartość robocza", row["company_income"], confidence="low")
        income(conn, sid, "VIII", "council_allowance", "Rada Miejska w Łodzi / inne dochody", "Dochody z rękopisu - wartość robocza", row["other_income"], confidence="low")
        liability(conn, sid, "do weryfikacji", "Zobowiązania z rękopisu - wartość robocza", row["liabilities"], confidence="low")


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_domaszewicz(conn)
        import_makowski(conn)
    print("Imported missing older reviewed statements for Domaszewicz and Makowski.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
