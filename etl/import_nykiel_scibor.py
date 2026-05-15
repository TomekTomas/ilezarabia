#!/usr/bin/env python3
"""Import hand-reviewed rows for Nykiel Kosma and Ścibor Kamila."""

from __future__ import annotations

import sqlite3
from pathlib import Path

DB = Path("data/analysis.db")
USD_PLN = 3.6205

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
    amount: float | None,
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


def import_nykiel(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2024,
            "source_contains": "nykiel_kosma_240520",
            "date": "2024-05-20",
            "confidence": "medium",
            "cash": 2300,
            "foreign": "213 USD; 50 BWP; 114,38 GBP; 150 KES",
            "securities": 100820 + 17000 * USD_PLN,
            "securities_raw": "Obligacje Skarbu Państwa 100 820 PLN; akcje na giełdzie NYSE 17 000 USD.",
            "incomes": [
                ("foreign_employment", "Umowa o pracę w Wielkiej Brytanii", None, "15 023 GBP netto"),
                ("contract_work", "Umowy cywilnoprawne", 2002.08, "2 002,08 PLN netto"),
                ("employment", "Umowa o pracę w Polsce", 2169.50, "2 169,50 PLN netto"),
                ("dividend", "Dywidendy z akcji giełdy NYSE", None, "800 USD netto"),
            ],
        },
        {
            "filing_year": 2025,
            "date": "2025-04-17",
            "confidence": "medium",
            "cash": 8800,
            "foreign": "6005 GBP; 6 USD; 7 EUR; 50 BWP; 150 KES",
            "securities": 117400 + 13317 * USD_PLN + 4438 + 9472,
            "securities_raw": "Obligacje Skarbu Państwa 117 400 PLN; akcje NYSE 13 317 USD; Uniqo Fundusz Akcji Amerykańskich 4 438 PLN; Uniqo FIO/IKZE 9 472 PLN.",
            "incomes": [
                ("council_allowance", "Dieta radnego", 27545.50, "27 545,50 PLN"),
                ("foreign_employment", "Wynagrodzenie z umowy o pracę w Wielkiej Brytanii", None, "17 654,32 GBP"),
                ("employment", "Wynagrodzenie z umowy o pracę w Polsce", 36802.33, "36 802,33 PLN"),
                ("contract_work", "Umowy cywilnoprawne", 2378.08, "2 378,08 PLN"),
                ("interest", "Odsetki od obligacji Skarbu Państwa", 5378.66, "5 378,66 PLN"),
                ("dividend", "Dywidendy z akcji giełdy NYSE", None, "808 GBP"),
            ],
        },
        {
            "filing_year": 2026,
            "date": "2026-04-22",
            "confidence": "medium",
            "cash": 63094,
            "foreign": "7663,67 GBP; 3568,57 USD; 50 BWP; 150 KES; 40 HKD; 100 PHP; 100 TWD",
            "securities": 125000 + 12030.47 * USD_PLN + 5002.44 + 20829.11,
            "securities_raw": "Obligacje Skarbu Państwa 125 000 PLN; akcje na giełdzie NYSE 12 030,47 USD; Uniqo Fundusz Akcji Amerykańskich 5 002,44 PLN; fundusze inwestycyjne Uniqo IKZE 20 829,11 PLN.",
            "incomes": [
                ("council_allowance", "Dieta radnego", 49075.05, "49 075,05 PLN"),
                ("employment", "Umowa o pracę", 91324.52, "91 324,52 PLN"),
                ("employment_tax_relief", "Dochód z umowy o pracę objęty ulgą", 85528.00, "85 528,00 PLN"),
                ("contract_work", "Umowy cywilnoprawne", 20755.05, "20 755,05 PLN"),
                ("interest", "Odsetki od obligacji Skarbu Państwa", 675.88, "675,88 PLN"),
                ("dividend", "Dywidendy z akcji giełdy NYSE", None, "768,91 GBP"),
            ],
        },
    ]

    for row in rows:
        sid = statement_id(conn, "nykiel-kosma", row["filing_year"], row.get("source_contains"))
        clear_statement(
            conn,
            sid,
            row["date"],
            row["confidence"],
            "Manual review from rendered contact sheets. Foreign-currency incomes are kept in raw text unless PLN was declared.",
        )
        section(conn, sid, "I", f"Środki PLN: {row['cash']} PLN; waluty obce: {row['foreign']}; papiery wartościowe: {row['securities_raw']}", row["confidence"])
        section(conn, sid, "II", "Nieruchomości: nie dotyczy.", row["confidence"])
        section(conn, sid, "III", "Udziały w spółkach handlowych: nie dotyczy.", row["confidence"])
        section(conn, sid, "IV", "Akcje i dywidendy z giełdy NYSE wykazane w formularzu.", row["confidence"])
        section(conn, sid, "V", "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.", row["confidence"])
        section(conn, sid, "VI", "Prowadzona działalność gospodarcza: nie dotyczy.", row["confidence"])
        section(conn, sid, "VII", "Funkcje w spółkach handlowych: nie dotyczy.", row["confidence"])
        section(conn, sid, "VIII", "Dochody z diet, pracy, umów cywilnoprawnych, odsetek i dywidend.", row["confidence"])
        section(conn, sid, "IX", "Składniki mienia ruchomego powyżej progu: nie dotyczy.", row["confidence"])
        section(conn, sid, "X", "Zobowiązania: nie dotyczy.", row["confidence"])
        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence=row["confidence"])
        asset(conn, sid, "I", "foreign_currency", "Waluty obce", None, raw_text=row["foreign"], confidence=row["confidence"])
        asset(conn, sid, "IV", "securities", "Obligacje, akcje NYSE i fundusze inwestycyjne", round(row["securities"], 2), raw_text=row["securities_raw"], confidence=row["confidence"])
        for income_type, description, amount, raw in row["incomes"]:
            income(conn, sid, "VIII", income_type, description, description, amount, raw_text=raw, confidence=row["confidence"])


def import_scibor(conn: sqlite3.Connection) -> None:
    rows = [
        {
            "filing_year": 2024,
            "source_contains": "scibor_kamila_240603",
            "date": "2024-06-03",
            "confidence": "medium",
            "cash": 20000,
            "flat": None,
            "real_estate": [
                ("Działka leśna", 128238, "3886 m2", "małżeńska wspólność majątkowa"),
                ("Działka z pawilonem handlowym", 585000, "udział 538/3968", "małżeńska wspólność majątkowa"),
                ("Działka drogowa i działka budowlana", 25000, "50 m2 i 70 m2", "małżeńska wspólność majątkowa"),
                ("Działka budowlano-przemysłowa", 450000, "808 m2", "małżeńska wspólność majątkowa"),
            ],
            "incomes": [
                ("rental_income", "Wynajem powierzchni biurowych", 32000.00),
                ("council_allowance", "Dieta radnego osiedla", 858.92),
            ],
            "vehicles": [
                "Mazda RX8 2007",
                "Skoda Fabia 2013",
                "Fiat Panda 2014",
                "BMW 330 2008",
                "Mercedes Vito 2011",
                "VW ID.Buzz 2022",
                "Citroen Hobby 2021",
                "Citroen C0 2011",
            ],
            "liabilities": [
                ("Bank Millennium", "Kredyt obrotowy, wykorzystanie na dzień oświadczenia", 22931.13),
                ("Bank Millennium", "Kredyt firmowy z 11.2022, pozostało do spłaty", 217227.93),
            ],
        },
        {
            "filing_year": 2025,
            "source_contains": "scibor_kamila_2025",
            "date": "2025-04-23",
            "confidence": "high",
            "cash": 29000,
            "flat": ("Mieszkanie", 355000, "54,36 m2", "majątek odrębny, nabyty w drodze spadku"),
            "real_estate": [
                ("Działka leśna", 128238, "3886 m2, udział 1/2", "majątek odrębny"),
                ("Działka z pawilonem handlowym", 585000, "udział 538/3968, udział 1/2", "majątek odrębny"),
                ("Działka budowlano-przemysłowa", 450000, "808 m2, udział 1/2", "majątek odrębny"),
            ],
            "incomes": [
                ("council_allowance", "Dieta rady osiedla", 1259.75),
                ("council_allowance", "Dieta radnego", 77745.41),
                ("rental_income", "Wynajem powierzchni biurowych", 96000.00),
            ],
            "vehicles": ["Citroen C0 2011"],
            "liabilities": [],
        },
        {
            "filing_year": 2026,
            "date": "2026-04-27",
            "confidence": "high",
            "cash": 42000,
            "flat": ("Mieszkanie", 370000, "54,36 m2", "majątek odrębny, nabyty w drodze spadku"),
            "real_estate": [
                ("Działka leśna", 128238, "2508,93 m2, udział 1/2", "majątek odrębny"),
                ("Działka budowlana", 548000, "1377,07 m2, udział 1/2", "majątek odrębny"),
                ("Działka z pawilonem handlowym", 585000, "udział 538/3968", "majątek odrębny"),
                ("Działka budowlano-przemysłowa", 450000, "808 m2, udział 1/2", "majątek odrębny"),
            ],
            "incomes": [
                ("council_allowance", "Dieta radnego", 49562.05),
                ("rental_income", "Wynajem powierzchni lokali", 95700.00),
            ],
            "vehicles": ["Citroen C0 2011, udział 1/2"],
            "liabilities": [],
        },
    ]

    for row in rows:
        sid = statement_id(conn, "scibor-kamila", row["filing_year"], row.get("source_contains"))
        clear_statement(
            conn,
            sid,
            row["date"],
            row["confidence"],
            "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
        )
        section(conn, sid, "I", f"Środki pieniężne w PLN: {row['cash']} zł; waluty obce i papiery wartościowe: nie dotyczy.", row["confidence"])
        section(conn, sid, "II", "Mieszkanie i/lub działki odczytane z części II formularza.", row["confidence"])
        section(conn, sid, "III", "Udziały w spółkach handlowych: nie dotyczy.", row["confidence"])
        section(conn, sid, "IV", "Akcje w spółkach handlowych: nie dotyczy.", row["confidence"])
        section(conn, sid, "V", "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.", row["confidence"])
        section(conn, sid, "VI", "Prowadzona działalność gospodarcza: nie dotyczy.", row["confidence"])
        section(conn, sid, "VII", "Funkcje w spółkach handlowych: nie dotyczy.", row["confidence"])
        section(conn, sid, "VIII", "Diety i dochody z wynajmu według formularza.", row["confidence"])
        section(conn, sid, "IX", "; ".join(row["vehicles"]), row["confidence"])
        section(conn, sid, "X", "Zobowiązania: nie dotyczy." if not row["liabilities"] else "Zobowiązania bankowe według formularza.", row["confidence"])

        asset(conn, sid, "I", "cash_pln", "Środki pieniężne w walucie polskiej", row["cash"], confidence=row["confidence"])
        if row["flat"]:
            desc, value, area, title = row["flat"]
            asset(conn, sid, "II", "real_estate_flat", desc, value, area=area, legal_title=title, confidence=row["confidence"])
        for desc, value, area, title in row["real_estate"]:
            asset(conn, sid, "II", "real_estate_land", desc, value, area=area, legal_title=title, confidence=row["confidence"])
        for vehicle in row["vehicles"]:
            asset(conn, sid, "IX", "vehicle", vehicle, None, confidence=row["confidence"])
        for income_type, description, amount in row["incomes"]:
            payer = "Rada Miejska / rada osiedla" if income_type == "council_allowance" else description
            income(conn, sid, "VIII", income_type, payer, description, amount, confidence=row["confidence"])
        for creditor, description, amount in row["liabilities"]:
            liability(conn, sid, creditor, description, amount, confidence=row["confidence"])


def main() -> int:
    with sqlite3.connect(DB) as conn:
        import_nykiel(conn)
        import_scibor(conn)
    print("Imported reviewed statements for Nykiel Kosma and Ścibor Kamila.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
