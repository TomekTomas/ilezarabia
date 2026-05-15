#!/usr/bin/env python3
"""Import hand-reviewed rows for the next two councillors in the index."""

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


def liability(
    conn: sqlite3.Connection,
    sid: int,
    creditor: str,
    description: str,
    amount: float,
    raw_text: str = "",
    confidence: str = "medium",
) -> None:
    conn.execute(
        """
        INSERT INTO liability_items
        (statement_id, creditor, description, amount_pln, currency, raw_text, confidence, review_status)
        VALUES (?, ?, ?, ?, 'PLN', ?, ?, 'manual_reviewed')
        """,
        (sid, creditor, description, amount, raw_text or description, confidence),
    )


def add_marzec_real_estate(conn: sqlite3.Connection, sid: int, house_value: float) -> None:
    asset(conn, sid, "II", "real_estate_house", "Dom", house_value, area="233,22 m2", legal_title="własność", confidence="high")
    asset(
        conn,
        sid,
        "II",
        "real_estate_land",
        "Nieruchomość, na której znajduje się dom",
        37500,
        area="0,1135 ha",
        legal_title="umowa darowizny",
        confidence="high",
    )
    asset(
        conn,
        sid,
        "II",
        "real_estate_land",
        "Udział 1/12 w nieruchomości",
        2500,
        area="0,2415 ha",
        legal_title="umowa darowizny",
        confidence="high",
    )


def add_marzec_liabilities(conn: sqlite3.Connection, sid: int, mortgage: float, wfosis: float | None = None) -> None:
    liability(conn, sid, "BOŚ S.A.", "Kredyt hipoteczny, kapitał do spłaty na koniec roku", mortgage, confidence="high")
    if wfosis is not None:
        liability(conn, sid, "WFOŚiGW w Łodzi", "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku", wfosis, confidence="high")
    liability(conn, sid, "BOŚ S.A.", "Limit karty kredytowej", 7000, confidence="high")
    liability(conn, sid, "BOŚ S.A.", "Kredyt odnawialny", 1000, confidence="high")


def import_marzec(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2020,
            "date": "2020-05-29",
            "cash": 8000,
            "ikze": 25493,
            "securities": 2218.60,
            "house": 650000,
            "incomes": [
                ("employment", "Umowa o pracę", 104956.74),
                ("social_benefit", "Zasiłek macierzyński / urlop ojcowski", 3584.56),
                ("public_media_allowance", "Dieta Rada Programowa TVP", 4394.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 32122.57),
                ("other_income", "Zapłata za sieć wodociągową", 5700.31),
                ("contract_work", "Umowa zlecenia", 7200.00),
                ("insurance_benefit", "Świadczenie z polisy PZU", 2200.00),
            ],
            "mortgage": 493809.20,
        },
        {
            "filing_year": 2021,
            "date": "2021-04-29",
            "cash": 5000,
            "ikze": 40350.40,
            "securities": 2639.20,
            "house": 650000,
            "incomes": [
                ("employment", "Umowa o pracę", 121044.24),
                ("public_media_allowance", "Dieta Rada Programowa TVP", 2366.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 31283.54),
                ("grant", "Dotacja WFOŚiGW w Łodzi", 13500.00),
            ],
            "vehicle": "Peugeot 308 1.6 HDI SW, rocznik 2008, kupiony i sprzedany w 2020 r.",
            "mortgage": 480944.09,
            "wfosis": 35355.17,
        },
        {
            "filing_year": 2022,
            "date": "2022-04-29",
            "cash": 4500,
            "ikze": 51261.31,
            "securities": 3235.10,
            "house": 780000,
            "company_income": 249544.35,
            "company_role": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
            "incomes": [
                ("employment", "Umowa o pracę", 57704.28),
                ("public_media_allowance", "Dieta Rada Programowa TVP", 5676.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 37330.13),
                ("grant", "Dotacja WFOŚiGW w Łodzi", 5000.00),
            ],
            "asset_ix": "Instalacja fotowoltaiczna 9,77 kWp",
            "mortgage": 466352.22,
            "wfosis": 36804.36,
        },
        {
            "filing_year": 2023,
            "date": "2023-04-26",
            "cash": 53000,
            "ikze": 53339.59,
            "securities": 4711.50,
            "house": 780000,
            "company_income": 361748.72,
            "company_role": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
            "incomes": [
                ("social_benefit", "Zasiłek z ubezpieczenia społecznego", 1566.80),
                ("public_media_allowance", "Dieta Rada Programowa TVP", 5000.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 47861.36),
            ],
            "asset_ix": "Instalacja fotowoltaiczna 9,77 kWp",
            "mortgage": 460450.88,
            "wfosis": 42418.86,
        },
        {
            "filing_year": 2024,
            "source_contains": "marzec_radoslaw_20240430",
            "date": "2024-04-30",
            "cash": 12000,
            "ikze": 74500,
            "securities": 3620.40,
            "house": 780000,
            "company_income": 372588.18,
            "company_role": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
            "incomes": [
                ("public_media_allowance", "Dieta Rada Programowa TVP", 5500.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 46933.73),
            ],
            "asset_ix": "Instalacja fotowoltaiczna 9,77 kWp",
            "mortgage": 412109.36,
            "wfosis": 36048.13,
        },
        {
            "filing_year": 2025,
            "date": "2025-04-23",
            "cash": 35000,
            "ikze": 88282.95,
            "securities": 1998.80,
            "house": 780000,
            "company_income": 110748.58,
            "company_role": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
            "incomes": [
                ("public_media_allowance", "Dieta Rada Programowa TVP", 5000.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 44769.25),
                ("employment", "Świadczenie z umowy o pracę", 106389.07),
            ],
            "asset_ix": "Instalacja fotowoltaiczna 9,77 kWp",
            "mortgage": 400995.24,
            "wfosis": 32777.20,
        },
        {
            "filing_year": 2026,
            "date": "2026-04-29",
            "cash": 88000,
            "ikze": 109305,
            "securities": 2371.40,
            "house": 900000,
            "incomes": [
                ("public_media_allowance", "Dieta Rada Programowa TVP", 1500.00),
                ("council_allowance", "Dieta radnego miejskiego w Łodzi", 49569.79),
                ("employment", "Świadczenie z umowy o pracę", 131402.59),
                ("personal_services", "Działalność wykonywana osobiście", 65000.00),
                ("employment", "Świadczenie z umowy o pracę", 37306.75),
            ],
            "vehicle": "Opel Corsa 2012, 1.2",
            "mortgage": 388372.55,
            "wfosis": 27350.54,
        },
    ]

    for row in rows:
        sid = statement_id(conn, "marzec-radoslaw", row["filing_year"], row.get("source_contains"))
        clear_statement(
            conn,
            sid,
            row["date"],
            "high",
            "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
        )
        section(conn, sid, "I", "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.", "high")
        section(conn, sid, "II", "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.", "high")
        section(conn, sid, "III", "Udziały w spółkach handlowych: nie dotyczy / nie posiada.", "high")
        section(conn, sid, "IV", "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.", "high")
        section(conn, sid, "V", "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.", "high")
        section(conn, sid, "VI", "Prowadzona działalność gospodarcza: nie dotyczy.", "high")
        section(conn, sid, "VII", row.get("company_role", "Funkcje w spółkach handlowych: nie dotyczy."), "high")
        section(conn, sid, "VIII", "Dochody rozpisane według pozycji z części VIII.", "high")
        section(conn, sid, "IX", row.get("asset_ix") or row.get("vehicle") or "Brak składników mienia ruchomego powyżej progu.", "high")
        section(conn, sid, "X", "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.", "high")

        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence="high")
        asset(conn, sid, "I", "retirement_account", "IKZE", row["ikze"], confidence="high")
        asset(conn, sid, "IV", "securities", "Akcje Bioton 190 szt. i JSW 70 szt.", row["securities"], confidence="high")
        add_marzec_real_estate(conn, sid, row["house"])
        if row.get("asset_ix"):
            asset(conn, sid, "IX", "renewable_energy_installation", row["asset_ix"], None, confidence="high")
        if row.get("vehicle"):
            asset(conn, sid, "IX", "vehicle", row["vehicle"], None, confidence="high")
        if row.get("company_income"):
            income(conn, sid, "VII", "company_role_income", "KPS SKRA Bełchatów S.A.", row["company_role"], row["company_income"], confidence="high")
        for income_type, description, amount in row["incomes"]:
            payer = "Rada Miejska w Łodzi" if income_type == "council_allowance" else description
            income(conn, sid, "VIII", income_type, payer, description, amount, confidence="high")
        add_marzec_liabilities(conn, sid, row["mortgage"], row.get("wfosis"))


def import_maslowski(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2024,
            "date": "2024-05-06",
            "cash": 4000,
            "incomes": [
                ("company_role_income", "EXPO Łódź sp. z o.o.", "Wynagrodzenie z funkcji w EXPO Łódź, odczyt roboczy", 23769.99),
                ("contract_work", "Agencja reklamy / Fala", "Umowa zlecenie, odczyt roboczy", 35680.00),
                ("contract_work", "do weryfikacji", "Umowa zlecenie, odczyt roboczy", 28668.00),
                ("employment", "Urząd Miasta Łodzi", "Umowa o pracę w UMŁ, odczyt roboczy", 190379.91),
            ],
            "vehicle": ("Subaru Outback 2010", 20000),
            "liabilities": [
                ("Bank Pocztowy", "Kredyt hipoteczny / gotówkowy, odczyt roboczy", 252000),
                ("Santander Bank", "Kredyt gotówkowy, odczyt roboczy", 180000),
                ("Deutsche Bank", "Kredyt gotówkowy, odczyt roboczy", 105000),
            ],
            "notes": "Masłowski 2024: rękopis, wartości części VII-X są robocze i do późniejszej weryfikacji hurtowej.",
        },
        {
            "filing_year": 2025,
            "date": "2025-04-30",
            "cash": 0,
            "incomes": [
                ("company_role_income", "EXPO Łódź sp. z o.o.", "Rada Nadzorcza EXPO Łódź, odczyt roboczy", 14619.68),
                ("council_allowance", "Rada Miejska w Łodzi", "Dieta radnego, odczyt roboczy", 26508.36),
                ("employment", "Urząd Miasta Łodzi", "UMŁ, odczyt roboczy", 32181.34),
                ("contract_work", "Agencja Fala sp. z o.o.", "Umowa / wynagrodzenie, odczyt roboczy", 138041.26),
            ],
            "vehicle": ("Subaru XV 2012", 25000),
            "liabilities": [
                ("Bank Pocztowy", "Kredyt hipoteczny / gotówkowy, odczyt roboczy", 330000),
                ("Santander Bank", "Kredyt konsumencki, odczyt roboczy", 130000),
                ("PKO BP", "Kredyt konsumencki, odczyt roboczy", 15000),
                ("mBank", "Kredyt konsumencki, odczyt roboczy", 25000),
                ("Deutsche Bank", "Kredyt konsumencki z 2009 r., odczyt roboczy", 100000),
            ],
            "notes": "Masłowski 2025: rękopis, kwoty zobowiązań i dochodów niskiej pewności.",
        },
        {
            "filing_year": 2026,
            "date": "2026-04-30",
            "cash": 0,
            "incomes": [
                ("contract_work", "Agencja Reklamy Fala sp. z o.o.", "Wynagrodzenie, odczyt roboczy", 236434.40),
                ("company_role_income", "Holding Łódzki sp. z o.o.", "Wynagrodzenie, odczyt roboczy", 17203.20),
                ("council_allowance", "Rada Miejska w Łodzi", "Dieta radnego, odczyt roboczy", 47134.73),
            ],
            "vehicle": ("Subaru XV 2012", 20000),
            "liabilities": [
                ("Bank Pocztowy", "Kredyt hipoteczny / gotówkowy, odczyt roboczy", 281000),
                ("mBank", "Kredyt, odczyt roboczy", 81700),
                ("PKO BP", "Kredyt, odczyt roboczy", 231000),
            ],
            "notes": "Masłowski 2026: rękopis, część X niejednoznaczna; wpisane jako roboczy odczyt do weryfikacji.",
        },
    ]

    for row in rows:
        sid = statement_id(conn, "maslowski-marcin", row["filing_year"])
        clear_statement(conn, sid, row["date"], "low", row["notes"])
        section(conn, sid, "I", f"Środki pieniężne w PLN: {row['cash']:,.0f} zł; waluty obce i papiery wartościowe: brak.".replace(",", " "), "low")
        section(conn, sid, "II", "Nieruchomości: brak pozycji odczytanych z formularza.", "low")
        section(conn, sid, "III", "Udziały w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.", "low")
        section(conn, sid, "IV", "Akcje w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.", "low")
        section(conn, sid, "V", "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy / brak odczytanej pozycji.", "low")
        section(conn, sid, "VI", "Prowadzona działalność gospodarcza: nie dotyczy / brak odczytanej pozycji.", "low")
        section(conn, sid, "VII", "Funkcje i wynagrodzenia w spółkach: roboczy odczyt rękopisu.", "low")
        section(conn, sid, "VIII", "Inne dochody: roboczy odczyt rękopisu.", "low")
        section(conn, sid, "IX", f"{row['vehicle'][0]}, wartość roboczo {row['vehicle'][1]:,.0f} zł.".replace(",", " "), "low")
        section(conn, sid, "X", "Zobowiązania pieniężne: roboczy odczyt rękopisu.", "low")

        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence="low")
        asset(conn, sid, "IX", "vehicle", row["vehicle"][0], row["vehicle"][1], confidence="low")
        for income_type, payer, description, amount in row["incomes"]:
            code = "VII" if income_type == "company_role_income" else "VIII"
            income(conn, sid, code, income_type, payer, description, amount, confidence="low")
        for creditor, description, amount in row["liabilities"]:
            liability(conn, sid, creditor, description, amount, confidence="low")


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_marzec(conn)
        import_maslowski(conn)
    print("Imported reviewed statements for Marzec Radosław and Masłowski Marcin.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
