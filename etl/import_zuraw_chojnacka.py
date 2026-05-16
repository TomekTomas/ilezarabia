#!/usr/bin/env python3
"""Import hand-reviewed rows for Żuraw Elżbieta and Chojnacka-Duraj Justyna."""

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


def asset(conn: sqlite3.Connection, sid: int, code: str, asset_type: str, description: str, value: float | None = None, area: str = "", legal_title: str = "", raw_text: str = "", confidence: str = "medium") -> None:
    conn.execute(
        """
        INSERT INTO asset_items
        (statement_id, section_code, asset_type, description, value_pln, area, legal_title, ownership, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, '', ?, ?, 'manual_reviewed')
        """,
        (sid, code, asset_type, description, value, area, legal_title, raw_text or description, confidence),
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


def import_zuraw(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2024,
            "date": "2024-06-05",
            "confidence": "low",
            "cash": 40800,
            "securities": None,
            "real_estate": [
                ("Dom", 450000, "99,6 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Mieszkanie", 370000, "64,4 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Udział w nieruchomości z domem i działką", 400000, "350 m2 domu, 1000 m2 działki", "współwłasność w udziale 12,5%, tytuł spadku"),
            ],
            "incomes_vii": [("company_role_income", "Polska Press / ProMedia", "Funkcja w spółce, odczyt ręczny", 0)],
            "incomes": [
                ("rental_income", "Wynajem mieszkania", 5000),
                ("council_allowance", "Dieta radnego", 17174),
                ("association_income", "Stowarzyszenie / repertuar", 200),
            ],
            "vehicle": ("VW Golf 5, 2007", 15000),
            "liabilities": [
                ("mBank", "Kredyt hipoteczny, odczyt ręczny", 245500),
                ("InBank", "Kredyt gotówkowy, odczyt ręczny", 22228),
            ],
        },
        {
            "filing_year": 2025,
            "date": "2025-04-25",
            "confidence": "medium",
            "cash": 111645,
            "securities": 6730.13,
            "real_estate": [
                ("Dom", 450000, "99,6 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Mieszkanie", 370000, "64,4 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Udział w nieruchomości z domem i działką", 400000, "działka 35 arów, dom ok. 200 m2", "współwłasność w udziale 12,5%, tytuł spadku"),
            ],
            "incomes_vii": [("company_role_income", "Polska Press / ProMedia", "Dochód z funkcji w zarządzie", 356827.43)],
            "incomes": [
                ("rental_income", "Wynajem mieszkania", 3500),
                ("copyright_income", "Tytuł własnych praw / art. 35", 3530),
                ("council_allowance", "Dieta radnego miejskiego", 58614),
            ],
            "vehicle": None,
            "liabilities": [
                ("mBank", "Kredyt hipoteczny BOK/BIK, pozostało do spłaty", 28795),
                ("mBank", "Kredyt hipoteczny, pozostało do spłaty", 5425),
                ("mBank", "Kredyt hipoteczny, pozostało do spłaty", 17675),
            ],
        },
        {
            "filing_year": 2026,
            "date": "2026-04-29",
            "confidence": "medium",
            "cash": 157330,
            "securities": 20984,
            "real_estate": [
                ("Dom", 450000, "99,6 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Mieszkanie", 370000, "64,4 m2", "własność indywidualna / kredyt hipoteczny"),
                ("Udział w nieruchomości z domem i działką", 400000, "działka 35 arów, dom ok. 200 m2", "współwłasność w udziale 12,5%, tytuł spadku"),
            ],
            "incomes_vii": [("company_role_income", "Polska Press / ProMedia", "Dochód z funkcji w zarządzie", 697078.78)],
            "incomes": [
                ("council_allowance", "Dieta radnego miejskiego", 49348.33),
                ("rental_income", "Wynajem mieszkania", 48350),
                ("association_income", "Stowarzyszenie wydawców Repropol", 200),
            ],
            "vehicle": None,
            "liabilities": [
                ("mBank", "Kredyt hipoteczny BOK/BIK, pozostało do spłaty", 230),
                ("mBank", "Kredyt hipoteczny, pozostało do spłaty", 13),
                ("mBank", "Kredyt hipoteczny, pozostało do spłaty", 80),
            ],
        },
    ]
    for row in rows:
        sid = statement_id(conn, "zuraw-elzbieta", row["filing_year"])
        clear_statement(conn, sid, row["date"], row["confidence"], "Manual review from rendered contact sheets. Handwritten values are working reads.")
        section(conn, sid, "I", "Środki pieniężne, lokaty i papiery wartościowe według formularza.", row["confidence"])
        section(conn, sid, "II", "Dom, mieszkanie i udział w nieruchomości spadkowej.", row["confidence"])
        section(conn, sid, "III", "Udziały w spółkach: nie dotyczy.", row["confidence"])
        section(conn, sid, "IV", "Akcje i papiery wartościowe według formularza.", row["confidence"])
        section(conn, sid, "V", "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.", row["confidence"])
        section(conn, sid, "VI", "Działalność gospodarcza zawieszona / bez dochodu.", row["confidence"])
        section(conn, sid, "VII", "Funkcje w spółkach Polska Press / ProMedia.", row["confidence"])
        section(conn, sid, "VIII", "Diety, najem i inne dochody.", row["confidence"])
        section(conn, sid, "IX", row["vehicle"][0] if row["vehicle"] else "Nie dotyczy.", row["confidence"])
        section(conn, sid, "X", "Kredyty hipoteczne/gotówkowe według formularza.", row["confidence"])
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne i lokaty w PLN", row["cash"], confidence=row["confidence"])
        if row["securities"]:
            asset(conn, sid, "IV", "securities", "Akcje i papiery wartościowe", row["securities"], confidence=row["confidence"])
        for description, value, area, title in row["real_estate"]:
            kind = "real_estate_house" if description == "Dom" else "real_estate_flat" if description == "Mieszkanie" else "real_estate_land"
            asset(conn, sid, "II", kind, description, value, area=area, legal_title=title, confidence=row["confidence"])
        if row["vehicle"]:
            asset(conn, sid, "IX", "vehicle", row["vehicle"][0], row["vehicle"][1], confidence=row["confidence"])
        for income_type, payer, description, amount in row["incomes_vii"]:
            income(conn, sid, "VII", income_type, payer, description, amount, confidence=row["confidence"])
        for income_type, description, amount in row["incomes"]:
            payer = "Rada Miejska w Łodzi" if income_type == "council_allowance" else description
            income(conn, sid, "VIII", income_type, payer, description, amount, confidence=row["confidence"])
        for creditor, description, amount in row["liabilities"]:
            liability(conn, sid, creditor, description, amount, confidence=row["confidence"])


def import_chojnacka(conn: sqlite3.Connection) -> None:
    rows = [
        (2020, "2020-05-29", 60000, 400000, None, [("council_allowance", "Dieta radnego", 31404.32), ("council_allowance", "Dieta rady osiedla", 561.94), ("employment", "Umowa o pracę", 97708.05)], "Ford Focus 2010", []),
        (2021, "2021-04-30", 80000, 500000, None, [("council_allowance", "Dieta radnego", 30800.40), ("other_income", "Inne źródła", 7286.80), ("employment", "Umowa o pracę", 95587.16)], "Nissan 2020", [("ZFŚS", "Pożyczka z ZFŚS", 6100)]),
        (2022, "2022-04-28", 120000, 450000, None, [("council_allowance", "Dieta radnego", 34464.60), ("other_income", "Inne źródła", 37990.92), ("personal_services", "Działalność wykonywana osobiście", 4813.39), ("other_income", "Inne źródła", 1886.20)], "X-Trail Nissan 2020", [("ZFŚS", "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty", 40666.56)]),
        (2023, "2023-04-28", 200000, 500000, None, [("council_allowance", "Dieta radnego", 48115.96), ("other_income", "Inne źródła", 4006.02), ("employment", "Umowa o pracę", 80514.69)], "X-Trail Nissan 2020", [("ZFŚS", "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty", 25416.00)]),
        (2024, "2024-04-29", 40000, 1000000, ("Działka", 9000, "0,9835 ha", "własność"), [("council_allowance", "Dieta radnego", 47088.35), ("other_income", "Inne źródła", 12968.89), ("personal_services", "Działalność wykonywana osobiście", 13860.41), ("other_income", "Inne źródła", 77648.40)], "X-Trail Nissan 2020", [("ZFŚS", "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty", 100666.64)]),
        (2025, "2025-04-29", 30000, 1000000, ("Działka", 9000, "0,9835 ha", "własność"), [("council_allowance", "Dieta radnego", 46624.52), ("other_income", "PIT-37", 139882.62)], "X-Trail Nissan 2020", []),
    ]
    for filing_year, date, cash, flat_value, land, incomes, vehicle, liabilities in rows:
        source = "chojnacka-duraj_justyna_20240429" if filing_year == 2024 else None
        sid = statement_id(conn, "chojnacka-duraj-justyna", filing_year, source)
        clear_statement(conn, sid, date, "high", "Manual review from rendered contact sheets. Data year in UI is filing year minus one.")
        section(conn, sid, "I", f"Środki pieniężne: około {cash} zł; waluty i papiery wartościowe: nie dotyczy.", "high")
        section(conn, sid, "II", "Mieszkanie oraz ewentualna działka odczytane z formularza.", "high")
        for code in ["III", "IV", "V", "VI", "VII"]:
            section(conn, sid, code, "Nie dotyczy według formularza.", "high")
        section(conn, sid, "VIII", "Dieta, umowa o pracę i inne źródła dochodu.", "high")
        section(conn, sid, "IX", vehicle, "high")
        section(conn, sid, "X", "Zobowiązania z ZFŚS według formularza." if liabilities else "Zobowiązania: nie dotyczy.", "high")
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", cash, confidence="high")
        if filing_year >= 2024:
            asset(conn, sid, "II", "real_estate_house", "Dom", 500000, area="90 m2", legal_title="własność, działka 190 m2", confidence="high")
            asset(conn, sid, "II", "real_estate_flat", "Mieszkanie", 500000, area="55 m2", legal_title="własność", confidence="high")
        else:
            asset(conn, sid, "II", "real_estate_flat", "Mieszkanie", flat_value, area="65 m2", legal_title="własność", confidence="high")
        if land:
            desc, value, area, title = land
            asset(conn, sid, "II", "real_estate_land", desc, value, area=area, legal_title=title, confidence="high")
        asset(conn, sid, "IX", "vehicle", vehicle, None, confidence="high")
        for income_type, description, amount in incomes:
            payer = "Rada Miejska / rada osiedla" if income_type == "council_allowance" else description
            income(conn, sid, "VIII", income_type, payer, description, amount, confidence="high")
        for creditor, description, amount in liabilities:
            liability(conn, sid, creditor, description, amount, confidence="high")


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_zuraw(conn)
        import_chojnacka(conn)
    print("Imported reviewed statements for Żuraw Elżbieta and Chojnacka-Duraj Justyna.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
