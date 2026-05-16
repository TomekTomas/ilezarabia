window.ILE_ZARABIA_DATA = {
  "generated_at": "2026-05-16 23:24:16",
  "market_context": {
    "generated_label": "wyceny z 2026-05-15",
    "fx_effective_date": "2026-05-14",
    "fx": {
      "USD": 3.6205,
      "EUR": 4.2401,
      "DKK": 0.5674
    },
    "crypto": {
      "BTC": {
        "usd": 80492.0,
        "pln": 294181.0
      },
      "XRP": {
        "usd": 1.47,
        "pln": 5.36
      }
    },
    "stocks": {
      "NVDA": {
        "usd": 235.74
      },
      "ACHR": {
        "usd": 6.41
      }
    },
    "sources": {
      "fx": "https://api.nbp.pl/",
      "crypto": "https://www.coingecko.com/",
      "stocks": "market data snapshot"
    }
  },
  "people": [
    {
      "id": 15,
      "name": "Anielak Tomasz",
      "slug": "anielak-tomasz",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 83,
          "year": 2020,
          "statement_date": "2020-05-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/anielak_tomasz_2020.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2020_7ba6f14728cc.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 257737.0,
          "income_total_pln": 107974.27,
          "liabilities_total_pln": 2500.0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 17737.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "17737 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 240000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 257737.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Radnego Miejskiego w Łodzi",
              "amount_pln": 2657.29,
              "raw_text": "Dieta Radnego Miejskiego w Łodzi: 2657.29 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Zarządu Rady Osiedla",
              "amount_pln": 899.21,
              "raw_text": "Dieta Zarządu Rady Osiedla: 899.21 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "election_commission_allowance",
              "payer": "",
              "description": "Dieta komisja wyborcza",
              "amount_pln": 400.0,
              "raw_text": "Dieta komisja wyborcza: 400.00 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 89808.35,
              "raw_text": "Umowa o pracę: 89808.35 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 6985.0,
              "raw_text": "Umowa o pracę: 6985.00 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "supervisory_board_allowance",
              "payer": "",
              "description": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej",
              "amount_pln": 7224.42,
              "raw_text": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 7224.42 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "PKO BP",
              "description": "Kredyt hipoteczny; pierwotnie 51 tys. zł, na 31.12.2019 pozostało ok. 2,5 tys. zł do spłaty plus odsetki.",
              "amount_pln": 2500.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny w PKO BP w kwocie 51 tys. zł - z czego na dzień 31.12.2019 r. pozostało ok. 2,5 tys. zł do spłaty + odsetki.",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 17737 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 17737,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 240000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 89808.35 zł Dieta Radnego Miejskiego w Łodzi: 2657.29 zł Dieta Zarządu Rady Osiedla: 899.21 zł Dieta komisja wyborcza: 400.00 zł Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 7224.42 zł Umowa o pracę: 6985.00 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 107974.27
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "nie dotyczy",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": null,
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Kredyt hipoteczny w PKO BP w kwocie 51 tys. zł - z czego na dzień 31.12.2019 r. pozostało ok. 2,5 tys. zł do spłaty + odsetki.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": true
              }
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 129,
          "year": 2021,
          "statement_date": "2021-04-26",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/anielak_tomasz_2021.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2021_2d6de050e317.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 249086.59,
          "income_total_pln": 126650.53,
          "liabilities_total_pln": 19497.82,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 9086.59,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "9086.59 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 240000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 249086.59,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Miejska w Łodzi",
              "amount_pln": 31525.12,
              "raw_text": "Dieta Rada Miejska w Łodzi: 31525.12 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Zarządu Rady Osiedla",
              "amount_pln": 1610.52,
              "raw_text": "Dieta Zarządu Rady Osiedla: 1610.52 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 85654.89,
              "raw_text": "Umowa o pracę: 85654.89 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "supervisory_board_allowance",
              "payer": "",
              "description": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej",
              "amount_pln": 7860.0,
              "raw_text": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 7860.00 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "RCI Banque",
              "description": "Kredyt na zakup auta zaciągnięty 17.06.2020 r.",
              "amount_pln": 19497.82,
              "currency": "PLN",
              "raw_text": "Kredyt na zakup auta w banku RCI BANQUE zaciągnięty 17.06.20 r. w kwocie 19 497,82 zł",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 9086.59 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 9086.59,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 240000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 85654.89 zł Dieta Rada Miejska w Łodzi: 31525.12 zł Dieta Zarządu Rady Osiedla: 1610.52 zł Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 7860.00 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 126650.53
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Kredyt na zakup auta w banku RCI BANQUE zaciągnięty 17.06.20 r. w kwocie 19 497,82 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": true
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 126650.53,
              "metrics": {
                "income_pln": 126650.53,
                "net_delta_pln": -25648.23,
                "asset_delta_pln": -8650.41,
                "debt_delta_pln": 16997.82
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 192,
          "year": 2022,
          "statement_date": "2022-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/anielak_tomasz_2022.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2022_a0cd34840c5a.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 244698.48,
          "income_total_pln": 146779.5,
          "liabilities_total_pln": 19497.82,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 4698.48,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "4698.48 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 240000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 244698.48,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Miejska w Łodzi wraz z dietą Rady Osiedla",
              "amount_pln": 37571.71,
              "raw_text": "Dieta Rada Miejska w Łodzi wraz z dietą Rady Osiedla: 37571.71 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 100627.79,
              "raw_text": "Umowa o pracę: 100627.79 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "supervisory_board_allowance",
              "payer": "",
              "description": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej",
              "amount_pln": 8580.0,
              "raw_text": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 8580.00 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "RCI Banque",
              "description": "Kredyt na zakup auta zaciągnięty 17.06.2020 r.",
              "amount_pln": 19497.82,
              "currency": "PLN",
              "raw_text": "Kredyt na zakup auta w banku RCI BANQUE zaciągnięty 17.06.20 r. w kwocie 19 497,82 zł",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 4698.48 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 4698.48,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 240 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 240000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 100627.79 zł Dieta Rada Miejska w Łodzi wraz z dietą Rady Osiedla: 37571.71 zł Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 8580.00 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 146779.5
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Kredyt na zakup auta w banku RCI BANQUE zaciągnięty 17.06.20 r. w kwocie 19 497,82 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": true
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 146779.5,
              "metrics": {
                "income_pln": 146779.5,
                "net_delta_pln": -4388.11,
                "asset_delta_pln": -4388.11,
                "debt_delta_pln": 0.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 239,
          "year": 2023,
          "statement_date": "2023-04-25",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Anielak_Tomasz_2023.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2023_cef18f5b31fb.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted. Formularz ma na pierwszej stronie wydrukowany rok 2022 przy dacie, ale podpis/stempel na stronie 4 wskazuje 25.04.2023.",
          "assets_value_pln": 250555.4,
          "income_total_pln": 175633.76,
          "liabilities_total_pln": 0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 8555.4,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "8555.4 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 242000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 242 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 250555.4,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Miejska w Łodzi",
              "amount_pln": 47861.36,
              "raw_text": "Dieta Rada Miejska w Łodzi: 47861.36 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 118436.4,
              "raw_text": "Umowa o pracę: 118436.40 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "supervisory_board_allowance",
              "payer": "",
              "description": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej",
              "amount_pln": 9336.0,
              "raw_text": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 9336.00 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 8555.4 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 8555.4,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 242 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 242000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 118436.40 zł Dieta Rada Miejska w Łodzi: 47861.36 zł Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 9336.00 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 175633.76
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne o wartości powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 150279.02,
              "metrics": {
                "income_pln": 175633.76,
                "net_delta_pln": 25354.74,
                "asset_delta_pln": 5856.92,
                "debt_delta_pln": -19497.82
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 15,
          "year": 2024,
          "statement_date": "2024-04-23",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_24/anielak_tomasz_2024.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2024_cbf84b7e35ba.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 323153.0,
          "income_total_pln": 182580.88999999998,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 23153.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "23153.0 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 300000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 300 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 323153.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Osiedla oraz Rada Miejska w Łodzi",
              "amount_pln": 49788.99,
              "raw_text": "Dieta Rada Osiedla oraz Rada Miejska w Łodzi: 49788.99 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 128181.9,
              "raw_text": "Umowa o pracę: 128181.90 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "supervisory_board_allowance",
              "payer": "",
              "description": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej",
              "amount_pln": 4610.0,
              "raw_text": "Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 4610.00 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 23153.0 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 23153.0,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 300 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 300000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 128181.90 zł Dieta Rada Osiedla oraz Rada Miejska w Łodzi: 49788.99 zł Dieta Rada Nadzorcza Spółdzielni Mieszkaniowej: 4610.00 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 182580.89
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne o wartości powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 109983.29,
              "metrics": {
                "income_pln": 182580.89,
                "net_delta_pln": 72597.6,
                "asset_delta_pln": 72597.6,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 358,
          "year": 2025,
          "statement_date": "2025-04-24",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/anielak_tomasz_2025.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2025_fc3459bb7a5a.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 311542.0,
          "income_total_pln": 182367.39,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 11542.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "11542 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 300000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 300 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 311542.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Osiedla oraz Rada Miejska w Łodzi",
              "amount_pln": 49728.04,
              "raw_text": "Dieta Rada Osiedla oraz Rada Miejska w Łodzi: 49728.04 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 132639.35,
              "raw_text": "Umowa o pracę: 132639.35 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 11542 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 11542,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 300 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 300000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 132639.35 zł Dieta Rada Osiedla oraz Rada Miejska w Łodzi: 49728.04 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 182367.39
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne o wartości powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 182367.39,
              "metrics": {
                "income_pln": 182367.39,
                "net_delta_pln": -11611.0,
                "asset_delta_pln": -11611.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 46,
          "year": 2026,
          "statement_date": "2026-04-17",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/anielak_tomasz_2026.pdf",
          "file_path": "data\\raw\\anielak-tomasz\\2026_cbba474932db.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Section B omitted.",
          "assets_value_pln": 376300.0,
          "income_total_pln": 119324.40000000001,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne zgromadzone w walucie polskiej",
              "value_pln": 6300.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "6300 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 370000.0,
              "area": "46,84 m2",
              "legal_title": "spółdzielcze własnościowe prawo do lokalu",
              "ownership": "",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 370 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Dacia Duster (2019)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 376300.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "allowance",
              "payer": "",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 2366.0,
              "raw_text": "Dieta Rada Programowa TVP: 2366.00 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta Rada Miejska w Łodzi",
              "amount_pln": 49569.79,
              "raw_text": "Dieta Rada Miejska w Łodzi: 49569.79 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 50712.37,
              "raw_text": "Umowa o pracę: 50712.37 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "",
              "description": "Umowa o pracę",
              "amount_pln": 6229.52,
              "raw_text": "Umowa o pracę: 6229.52 zł",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "pension_social_security",
              "payer": "",
              "description": "ZUS",
              "amount_pln": 10446.72,
              "raw_text": "ZUS: 10446.72 zł",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne zgromadzone w walucie polskiej: 6300 zł; waluta obca: Brak; papiery wartościowe: Brak.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 6300,
                "foreign_currency": "Brak",
                "securities": "Brak"
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie o powierzchni 46,84 m2, o wartości ok. 370 tys. zł, tytuł prawny: spółdzielcze własnościowe prawo do lokalu.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "flat_area_m2": "46,84",
                "flat_value_pln": 370000,
                "flat_legal_title": "spółdzielcze własnościowe prawo do lokalu"
              }
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_shares": false
              }
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie posiadam. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_stocks": false
              }
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa/innych podmiotów publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_public_property_acquisition": false
              }
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzenie działalności gospodarczej: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_business_activity": false
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "W spółkach handlowych: nie dotyczy. Dochód: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_company_roles": false,
                "income_pln": 0
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę: 50712.37 zł Umowa o pracę: 6229.52 zł Dieta Rada Programowa TVP: 2366.00 zł ZUS: 10446.72 zł Dieta Rada Miejska w Łodzi: 49569.79 zł",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 119324.4
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Dacia, Duster (2019)",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "vehicle": "Dacia Duster (2019)",
                "value_pln": null
              }
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne o wartości powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    },
    {
      "id": 93,
      "name": "Chojnacka-Duraj Justyna",
      "slug": "chojnacka-duraj-justyna",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 93,
          "year": 2020,
          "statement_date": "2020-05-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/chojnacka-duraj_justyna_2020.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2020_90d28241f0e1.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 460000.0,
          "income_total_pln": 129674.31,
          "liabilities_total_pln": 0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 60000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 400000.0,
              "area": "65 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Ford Focus 2010",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Ford Focus 2010",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 460000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 31404.32,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta rady osiedla",
              "amount_pln": 561.94,
              "raw_text": "Dieta rady osiedla",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 97708.05,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 60000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Ford Focus 2010",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 140,
          "year": 2021,
          "statement_date": "2021-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/chojnacka-duraj_justyna_2021.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2021_157420d907c4.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 580000.0,
          "income_total_pln": 133674.36000000002,
          "liabilities_total_pln": 6100.0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 80000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 500000.0,
              "area": "65 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Nissan 2020",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Nissan 2020",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 580000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 30800.4,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 95587.16,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 7286.8,
              "raw_text": "Inne źródła",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "ZFŚS",
              "description": "Pożyczka z ZFŚS",
              "amount_pln": 6100.0,
              "currency": "PLN",
              "raw_text": "Pożyczka z ZFŚS",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 80000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nissan 2020",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania z ZFŚS według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 201,
          "year": 2022,
          "statement_date": "2022-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/chojnacka-duraj_justyna_2022.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2022_ed7b593652f6.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 570000.0,
          "income_total_pln": 79155.11,
          "liabilities_total_pln": 40666.56,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 120000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 450000.0,
              "area": "65 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "X-Trail Nissan 2020",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 570000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 34464.6,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 37990.92,
              "raw_text": "Inne źródła",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 1886.2,
              "raw_text": "Inne źródła",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "personal_services",
              "payer": "Działalność wykonywana osobiście",
              "description": "Działalność wykonywana osobiście",
              "amount_pln": 4813.39,
              "raw_text": "Działalność wykonywana osobiście",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "ZFŚS",
              "description": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "amount_pln": 40666.56,
              "currency": "PLN",
              "raw_text": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 120000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania z ZFŚS według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 246,
          "year": 2023,
          "statement_date": "2023-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Chojnacka-Duraj_Justyna_2023.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2023_db54f7654c12.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 700000.0,
          "income_total_pln": 132636.67,
          "liabilities_total_pln": 25416.0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 200000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 500000.0,
              "area": "65 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "X-Trail Nissan 2020",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 700000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 48115.96,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 80514.69,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 4006.02,
              "raw_text": "Inne źródła",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "ZFŚS",
              "description": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "amount_pln": 25416.0,
              "currency": "PLN",
              "raw_text": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 200000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania z ZFŚS według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 298,
          "year": 2024,
          "statement_date": "2024-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/chojnacka-duraj_justyna_20240429.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2024_0e3637b66f8e.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1049000.0,
          "income_total_pln": 151566.05,
          "liabilities_total_pln": 100666.64,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 40000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 500000.0,
              "area": "55 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 500000.0,
              "area": "90 m2",
              "legal_title": "własność, działka 190 m2",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 9000.0,
              "area": "0,9835 ha",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "X-Trail Nissan 2020",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1049000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 47088.35,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 12968.89,
              "raw_text": "Inne źródła",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne źródła",
              "description": "Inne źródła",
              "amount_pln": 77648.4,
              "raw_text": "Inne źródła",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "personal_services",
              "payer": "Działalność wykonywana osobiście",
              "description": "Działalność wykonywana osobiście",
              "amount_pln": 13860.41,
              "raw_text": "Działalność wykonywana osobiście",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "ZFŚS",
              "description": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "amount_pln": 100666.64,
              "currency": "PLN",
              "raw_text": "Pożyczka gotówkowa z ZFŚS, pozostało do spłaty",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 40000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania z ZFŚS według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 122183.31,
              "metrics": {
                "income_pln": 151566.05,
                "asset_delta_pln": 349000.0,
                "debt_delta_pln": 75250.64
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 500000.0
              },
              {
                "label": "Dom",
                "value_pln": 500000.0
              }
            ]
          }
        },
        {
          "id": 364,
          "year": 2025,
          "statement_date": "2025-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/chojnacka-duraj_justyna_2025.pdf",
          "file_path": "data\\raw\\chojnacka-duraj-justyna\\2025_5811d253b061.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1039000.0,
          "income_total_pln": 186507.13999999998,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 30000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 500000.0,
              "area": "55 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 500000.0,
              "area": "90 m2",
              "legal_title": "własność, działka 190 m2",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 9000.0,
              "area": "0,9835 ha",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "X-Trail Nissan 2020",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1039000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 46624.52,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "PIT-37",
              "description": "PIT-37",
              "amount_pln": 139882.62,
              "raw_text": "PIT-37",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: około 30000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie oraz ewentualna działka odczytane z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta, umowa o pracę i inne źródła dochodu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "X-Trail Nissan 2020",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    },
    {
      "id": 53,
      "name": "Domaszewicz Bartosz",
      "slug": "domaszewicz-bartosz",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 95,
          "year": 2020,
          "statement_date": "2020-05-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/domaszewicz_bartosz_2020.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2020_dd89592b76f7.pdf",
          "confidence": "high",
          "notes": "Older manual review. Typed/clean form; data year is filing year minus one.",
          "assets_value_pln": 30000.0,
          "income_total_pln": 35574.06,
          "liabilities_total_pln": 0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 30000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "30 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "1100 BRL; 400 EUR; 500 USD",
              "confidence": "high",
              "estimated_value_pln": 3506.29,
              "estimate_note": "400 EUR x 4.2401 PLN; 500 USD x 3.6205 PLN"
            }
          ],
          "assets_estimated_extra_pln": 3506.29,
          "assets_estimated_total_pln": 33506.29,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 32209.56,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 3364.5,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 30 000 zł; waluty obce: 1100 BRL, 400 EUR, 500 USD; papiery wartościowe: brak.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Umowa o pracę 3 364,50 zł; dieta radnego 32 209,56 zł.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 144,
          "year": 2021,
          "statement_date": "2021-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/domaszewicz_bartosz_2021.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2021_28156791db75.pdf",
          "confidence": "low",
          "notes": "Older manual review from contact sheet. Handwritten income values require confirmation.",
          "assets_value_pln": 10000.0,
          "income_total_pln": 53900.0,
          "liabilities_total_pln": 0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 10000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "10 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "1 000 USD",
              "confidence": "medium",
              "estimated_value_pln": 3620.5,
              "estimate_note": "1000 USD x 3.6205 PLN"
            }
          ],
          "assets_estimated_extra_pln": 3620.5,
          "assets_estimated_total_pln": 13620.5,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "działalność gospodarcza",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 9400.0,
              "raw_text": "Dochód z działalności gospodarczej",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego / inne dochody",
              "amount_pln": 44500.0,
              "raw_text": "ok. 44 500 zł - do potwierdzenia",
              "confidence": "low"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 10 000 zł; waluty obce: 1 000 USD; papiery wartościowe: brak.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: dochód 9 400 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego / inne dochody: ok. 44 500 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 203,
          "year": 2022,
          "statement_date": "2022-05-06",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/domaszewicz_bartosz_2022.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2022_e0dc47c9af75.pdf",
          "confidence": "medium",
          "notes": "Older manual review from contact sheet. Real estate is readable; business income still needs second review.",
          "assets_value_pln": 1004000.0,
          "income_total_pln": 82824.54000000001,
          "liabilities_total_pln": 0,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 10000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "10 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 504000.0,
              "area": "131,5 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 131,5 m2, 504 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom 100 m2",
              "value_pln": 250000.0,
              "area": "100 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 100 m2, 250 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 1511 m2",
              "value_pln": 240000.0,
              "area": "1511 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 1511 m2, 240 000 zł",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1004000.0,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "działalność gospodarcza",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 44896.61,
              "raw_text": "ok. 44 896,61 zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 37927.93,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 10 000 zł; waluty obce i papiery wartościowe: brak.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom 131,5 m2 504 000 zł; dom 100 m2 250 000 zł; działka 1511 m2 240 000 zł; pozostałe działki do weryfikacji.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: dochód ok. 44 896,61 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego 37 927,93 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 907554.96,
              "metrics": {
                "income_pln": 82824.54,
                "asset_delta_pln": 990379.5,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Dom",
                "value_pln": 504000.0
              },
              {
                "label": "Dom 100 m2",
                "value_pln": 250000.0
              },
              {
                "label": "Działka 1511 m2",
                "value_pln": 240000.0
              }
            ]
          }
        },
        {
          "id": 248,
          "year": 2023,
          "statement_date": "2023-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Domaszewicz_Bartosz_2023.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2023_5d6564fd5783.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheet. Imported as low confidence because several handwritten values require confirmation.",
          "assets_value_pln": 1708400.0,
          "income_total_pln": 33053.96,
          "liabilities_total_pln": 0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 8400.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "ok. 8,4 tys. zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 850000.0,
              "area": "131,5 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 131,5 m2, 850 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom 100 m2",
              "value_pln": 400000.0,
              "area": "100 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 100 m2, 400 000 zł",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 1511 m2",
              "value_pln": 270000.0,
              "area": "1511 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 1511 m2, 270 000 zł",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 651 m2",
              "value_pln": 60000.0,
              "area": "651 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 651 m2, 60 000 zł",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 254 m2",
              "value_pln": 100000.0,
              "area": "254 m2",
              "legal_title": "użytkowanie wieczyste",
              "ownership": "",
              "raw_text": "Działka 254 m2, 100 000 zł",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Husqvarna Svartpilen 125 (2022)",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Husqvarna Svartpilen 125 (2022), ok. 20 000 zł",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1708400.0,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "działalność gospodarcza",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 4906.05,
              "raw_text": "możliwy dochód 4 906,05 zł",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 28147.91,
              "raw_text": "ok. 28 147,91 zł",
              "confidence": "low"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne ok. 8,4 tys. zł; waluty obce: brak; papiery wartościowe: brak.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom 131,5 m2 850 000 zł; dom 100 m2 400 000 zł; działki: 1511 m2 270 000 zł, 651 m2 60 000 zł, 254 m2 100 000 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: przychód/dochod do weryfikacji; możliwy dochód 4 906,05 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego ok. 28 147,91 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Husqvarna Svartpilen 125 (2022), ok. 20 000 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Brak zobowiązań powyżej progu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 671346.04,
              "metrics": {
                "income_pln": 33053.96,
                "asset_delta_pln": 704400.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Działka 651 m2",
                "value_pln": 60000.0
              },
              {
                "label": "Działka 254 m2",
                "value_pln": 100000.0
              }
            ]
          }
        },
        {
          "id": 303,
          "year": 2024,
          "statement_date": "2024-06-05",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/domaszewicz_bartosz_240605.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2024_959ec97fb0ac.pdf",
          "confidence": "medium",
          "notes": "Manual review from contact sheet. Several handwritten figures are marked uncertain; filing year shown separately from data year.",
          "assets_value_pln": 2082787.34,
          "income_total_pln": 330179.54,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 33787.34,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "ok. 33 787,34 zł",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "8 000 USD",
              "confidence": "medium",
              "estimated_value_pln": 28964.0,
              "estimate_note": "8000 USD x 3.6205 PLN"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 1000000.0,
              "area": "131 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 131 m2, ok. 1 000 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom 100 m2",
              "value_pln": 550000.0,
              "area": "100 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 100 m2, 550 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 1511 m2",
              "value_pln": 300000.0,
              "area": "1511 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 1511 m2, 300 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 651 m2",
              "value_pln": 80000.0,
              "area": "651 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 651 m2, 80 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 254 m2",
              "value_pln": 100000.0,
              "area": "254 m2",
              "legal_title": "użytkowanie wieczyste",
              "ownership": "",
              "raw_text": "Działka 254 m2, 100 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Husqvarna Svartpilen 125 (2022)",
              "value_pln": 19000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Husqvarna Svartpilen 125 (2022), ok. 19 000 zł",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 28964.0,
          "assets_estimated_total_pln": 2111751.34,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "działalność gospodarcza",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 299408.35,
              "raw_text": "ok. 299 408,35 zł",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 30771.19,
              "raw_text": "ok. 30 771,19 zł",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 33 787,34 zł; waluta obca: 8 000 USD; papiery wartościowe: brak.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom 131 m2 ok. 1 000 000 zł; dom 100 m2 550 000 zł; działka 1511 m2 300 000 zł; działka 651 m2 80 000 zł; działka 254 m2 100 000 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza, dochód ok. 299 408,35 zł - do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego ok. 30 771,19 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Husqvarna Svartpilen 125 (2022), ok. 19 000 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Brak zobowiązań powyżej progu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Dom",
                "value_pln": 1000000.0
              }
            ]
          }
        },
        {
          "id": 366,
          "year": 2025,
          "statement_date": "2025-04-20",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/domaszewicz_bartosz_2025.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2025_22a99b25c363.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Foreign currencies and securities kept without PLN conversion.",
          "assets_value_pln": 2621527.15,
          "income_total_pln": 1033273.45,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 121527.15,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "121 527,15 zł",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce i kryptoaktywa",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "10 000 USD; 2 048,20 EUR; 0,60815252 BTC; 177,289928 XRP",
              "confidence": "high",
              "estimated_value_pln": 224746.76,
              "estimate_note": "10000 USD x 3.6205 PLN; 2048.2 EUR x 4.2401 PLN; 0.608153 BTC x 294181 PLN; 177.29 XRP x 5.36 PLN"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "NVIDIA 22,5038642; kwota 3 017,77 USD",
              "confidence": "high",
              "declared_value_usd": 3017.77,
              "estimated_value_pln": 19206.97,
              "estimate_note": "22.5039 NVDA x 235.74 USD x 3.6205 PLN"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 1250000.0,
              "area": "131 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 131 m2, wartość 1 250 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom 100 m2",
              "value_pln": 650000.0,
              "area": "100 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 100 m2, wartość 650 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 1511 m2",
              "value_pln": 400000.0,
              "area": "1511 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 1511 m2, wartość 400 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 651 m2",
              "value_pln": 100000.0,
              "area": "651 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 651 m2, wartość 100 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 254 m2",
              "value_pln": 100000.0,
              "area": "254 m2",
              "legal_title": "użytkowanie wieczyste",
              "ownership": "",
              "raw_text": "Działka 254 m2, wartość 100 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Husqvarna Svartpilen 125 (2022)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Husqvarna Svartpilen 125 (2022)",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Renault Captur (2017)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Renault Captur (2017)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 243953.73,
          "assets_estimated_total_pln": 2865480.88,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 996952.24,
              "raw_text": "Dochód z działalności gospodarczej",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta radnego",
              "amount_pln": 36321.21,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 121 527,15 zł; waluty obce: 10 000 USD, 2 048,20 EUR, 0,60815252 BTC, 177,289928 XRP; papiery wartościowe: NVIDIA 22,5038642 na kwotę 3 017,77 USD.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 121527.15
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Dom 131 m2, wartość 1 250 000 zł. Inne nieruchomości: dom 100 m2 wartość 650 000 zł współwłasność; działka 1511 m2 wartość 400 000 zł współwłasność; działka 651 m2 wartość 100 000 zł współwłasność; działka 254 m2 wartość 100 000 zł użytkowanie wieczyste.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych z udziałem gminnych osób prawnych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub jednostek publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: firma świadcząca usługi utrzymania czystości. Przychód 1 087 517,24 zł; dochód 996 952,24 zł.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "business_income_pln": 996952.24,
                "business_revenue_pln": 1087517.24
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego: 36 321,21 zł.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "council_allowance_pln": 36321.21
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: Husqvarna Svartpilen 125, rok 2022; Renault Captur, rok 2017.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 121527.15
              },
              {
                "label": "Waluty obce i kryptoaktywa",
                "value_pln": 224746.76
              }
            ]
          }
        },
        {
          "id": 53,
          "year": 2026,
          "statement_date": "2026-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/domaszewicz_bartosz_2026.pdf",
          "file_path": "data\\raw\\domaszewicz-bartosz\\2026_3d670d37989f.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered PDF pages. Foreign currencies and securities kept without PLN conversion.",
          "assets_value_pln": 2862176.32,
          "income_total_pln": 1315740.4000000001,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 44668.75,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "44 668,75 zł",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce i kryptoaktywa",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "15 000 USD; 516,30 EUR; 3,35 DKK; 0,40362829 BTC; 176,598497 XRP",
              "confidence": "high",
              "estimated_value_pln": 176184.91,
              "estimate_note": "15000 USD x 3.6205 PLN; 516.3 EUR x 4.2401 PLN; 3.35 DKK x 0.5674 PLN; 0.403628 BTC x 294181 PLN; 176.598 XRP x 5.36 PLN"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "NVIDIA 53,54173916; ACHR 282,72222174; kwota 12 113,59 USD",
              "confidence": "high",
              "declared_value_usd": 12113.59,
              "estimated_value_pln": 52258.95,
              "estimate_note": "53.5417 NVDA x 235.74 USD x 3.6205 PLN; 282.722 ACHR x 6.41 USD x 3.6205 PLN"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 317507.57,
              "area": "48,33 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie 48,33 m2, wartość 317 507,57 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 1250000.0,
              "area": "131 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 131 m2, wartość 1 250 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom 100 m2",
              "value_pln": 650000.0,
              "area": "100 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Dom 100 m2, wartość 650 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 1511 m2",
              "value_pln": 400000.0,
              "area": "1511 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 1511 m2, wartość 400 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 651 m2",
              "value_pln": 100000.0,
              "area": "651 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 651 m2, wartość 100 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka 234 m2",
              "value_pln": 100000.0,
              "area": "234 m2",
              "legal_title": "współwłasność",
              "ownership": "",
              "raw_text": "Działka 234 m2, wartość 100 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Husqvarna Svartpilen 125 (2022)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Husqvarna Svartpilen 125 (2022)",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Renault Captur (2017)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Renault Captur (2017)",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 228443.86,
          "assets_estimated_total_pln": 3090620.18,
          "incomes": [
            {
              "section_code": "VI",
              "income_type": "business_income",
              "payer": "",
              "description": "Dochód z działalności gospodarczej",
              "amount_pln": 1265422.54,
              "raw_text": "Dochód z działalności gospodarczej",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Dieta radnego",
              "amount_pln": 50317.86,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 44 668,75 zł; waluty obce: 15 000 USD, 516,30 EUR, 3,35 DKK, 0,40362829 BTC, 176,598497 XRP; papiery wartościowe: NVIDIA 53,54173916, ACHR 282,72222174 na kwotę 12 113,59 USD.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 44668.75
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Dom 131 m2, wartość 1 250 000 zł, współwłasność. Mieszkanie 48,33 m2, wartość 317 507,57 zł, własność. Inne nieruchomości: dom 100 m2 wartość 650 000 zł współwłasność; działka 1511 m2 wartość 400 000 zł współwłasność; działka 651 m2 wartość 100 000 zł współwłasność; działka 234 m2 wartość 100 000 zł współwłasność.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych z udziałem gminnych osób prawnych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub jednostek publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: firma świadcząca usługi utrzymania czystości. Przychód 1 289 441,29 zł; dochód 1 265 422,54 zł.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "business_income_pln": 1265422.54,
                "business_revenue_pln": 1289441.29
              }
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego: 50 317,86 zł.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "council_allowance_pln": 50317.86
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: Husqvarna Svartpilen 125, rok 2022; Renault Captur, rok 2017.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne powyżej 10 000 zł: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "has_liabilities_over_10000_pln": false
              }
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 1090601.1,
              "metrics": {
                "income_pln": 1315740.4,
                "net_delta_pln": 225139.3,
                "asset_delta_pln": 225139.3,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Papiery wartościowe",
                "value_pln": 52258.95
              },
              {
                "label": "Mieszkanie",
                "value_pln": 317507.57
              },
              {
                "label": "Działka 234 m2",
                "value_pln": 100000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 65,
      "name": "Makowski Krzysztof",
      "slug": "makowski-krzysztof",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 106,
          "year": 2020,
          "statement_date": "2020-05-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/makowski_krzysztof_2020.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2020_c2cc71e1381d.pdf",
          "confidence": "low",
          "notes": "Makowski 2020: handwritten statement. Income and liability totals are low-confidence working reads.",
          "assets_value_pln": 10000.0,
          "income_total_pln": 125704.20999999999,
          "liabilities_total_pln": 290000.0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 10000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "10 000 zł",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 10000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość robocza",
              "amount_pln": 15704.21,
              "raw_text": "Dochód z funkcji w spółkach - wartość robocza",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi / inne dochody",
              "description": "Dochody z rękopisu - wartość robocza",
              "amount_pln": 110000.0,
              "raw_text": "Dochody z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - wartość robocza",
              "amount_pln": 290000.0,
              "currency": "PLN",
              "raw_text": "Zobowiązania z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 10 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: wpisane ręcznie; szczegóły do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Dochód z funkcji w spółkach: ok. 15 704.21 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody / dieta / praca: roboczo ok. 110 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: wpisy ręczne, kwoty do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: roboczo ok. 290 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 156,
          "year": 2021,
          "statement_date": "2021-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/makowski_krzysztof_2021.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2021_60252cc9df5a.pdf",
          "confidence": "low",
          "notes": "Makowski 2021: handwritten statement. Most section VIII-X values require confirmation.",
          "assets_value_pln": 10000.0,
          "income_total_pln": 167750.0,
          "liabilities_total_pln": 400000.0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 10000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "10 000 zł",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 10000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość robocza",
              "amount_pln": 22750.0,
              "raw_text": "Dochód z funkcji w spółkach - wartość robocza",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi / inne dochody",
              "description": "Dochody z rękopisu - wartość robocza",
              "amount_pln": 145000.0,
              "raw_text": "Dochody z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - wartość robocza",
              "amount_pln": 400000.0,
              "currency": "PLN",
              "raw_text": "Zobowiązania z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 10 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: wpisane ręcznie; szczegóły do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Dochód z funkcji w spółkach: ok. 22 750.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody / dieta / praca: roboczo ok. 145 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: wpisy ręczne, kwoty do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: roboczo ok. 400 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 167750.0,
              "metrics": {
                "income_pln": 167750.0,
                "net_delta_pln": -110000.0,
                "asset_delta_pln": 0.0,
                "debt_delta_pln": 110000.0
              }
            },
            {
              "type": "debt_jump",
              "severity": "medium",
              "title": "Wzrost zobowiązań bez podobnego wzrostu aktywów",
              "description": "Zadłużenie wzrosło dużo mocniej niż widoczny majątek.",
              "amount_pln": 110000.0,
              "metrics": {
                "asset_delta_pln": 0.0,
                "debt_delta_pln": 110000.0
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 213,
          "year": 2022,
          "statement_date": "2022-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/makowski_krzysztof_2022.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2022_2440ba693dc1.pdf",
          "confidence": "low",
          "notes": "Makowski 2022: handwritten statement. Imported only as low-confidence working baseline.",
          "assets_value_pln": 20000.0,
          "income_total_pln": 176000.0,
          "liabilities_total_pln": 450000.0,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "20 000 zł",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 20000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość robocza",
              "amount_pln": 26000.0,
              "raw_text": "Dochód z funkcji w spółkach - wartość robocza",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi / inne dochody",
              "description": "Dochody z rękopisu - wartość robocza",
              "amount_pln": 150000.0,
              "raw_text": "Dochody z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - wartość robocza",
              "amount_pln": 450000.0,
              "currency": "PLN",
              "raw_text": "Zobowiązania z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: wpisane ręcznie; szczegóły do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Dochód z funkcji w spółkach: ok. 26 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody / dieta / praca: roboczo ok. 150 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: wpisy ręczne, kwoty do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: roboczo ok. 450 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 176000.0,
              "metrics": {
                "income_pln": 176000.0,
                "net_delta_pln": -40000.0,
                "asset_delta_pln": 10000.0,
                "debt_delta_pln": 50000.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 258,
          "year": 2023,
          "statement_date": "2023-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Makowski_Krzysztof_2023.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2023_7171cbba2f75.pdf",
          "confidence": "low",
          "notes": "Makowski 2023: handwritten statement. Values are approximate pending manual confirmation.",
          "assets_value_pln": 20000.0,
          "income_total_pln": 205700.0,
          "liabilities_total_pln": 500000.0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "20 000 zł",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 20000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość robocza",
              "amount_pln": 40700.0,
              "raw_text": "Dochód z funkcji w spółkach - wartość robocza",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi / inne dochody",
              "description": "Dochody z rękopisu - wartość robocza",
              "amount_pln": 165000.0,
              "raw_text": "Dochody z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - wartość robocza",
              "amount_pln": 500000.0,
              "currency": "PLN",
              "raw_text": "Zobowiązania z rękopisu - wartość robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: wpisane ręcznie; szczegóły do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Dochód z funkcji w spółkach: ok. 40 700.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody / dieta / praca: roboczo ok. 165 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: wpisy ręczne, kwoty do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: roboczo ok. 500 000.00 zł do potwierdzenia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 205700.0,
              "metrics": {
                "income_pln": 205700.0,
                "net_delta_pln": -50000.0,
                "asset_delta_pln": 0.0,
                "debt_delta_pln": 50000.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 326,
          "year": 2024,
          "statement_date": "2024-04-25",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/makowski_krzysztof_20240425.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2024_dafcd05c69c3.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheet. Imported as low confidence; handwritten statement requires user confirmation.",
          "assets_value_pln": 50000.0,
          "income_total_pln": 195000.0,
          "liabilities_total_pln": 300000.0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "20 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "movable_property",
              "description": "Domek letniskowy",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "ok. 20 000 zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Fiat 126p",
              "value_pln": 10000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Fiat 126p, ok. 10 000 zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "VW Caddy",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "VW Caddy - wartość nieczytelna",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 50000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość niepewna",
              "amount_pln": 35000.0,
              "raw_text": "ok. 35 tys. zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dochód/dieta z funkcji publicznej - do weryfikacji",
              "amount_pln": 160000.0,
              "raw_text": "wartość przybliżona z rękopisu",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - kwota częściowo nieczytelna",
              "amount_pln": 300000.0,
              "currency": "PLN",
              "raw_text": "szacunek roboczy, do potwierdzenia",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach: LT&BUD sp. z o.o. i druga spółka; szczegóły do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Dochód z funkcji w spółkach: ok. 35 tys. zł - do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody: kilka pozycji z rękopisu do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Ruchomości: Fiat 126p, VW Caddy, domek letniskowy, przyczepa/urzłdzenia; kwoty do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: kilka pozycji kredytowych, wartości do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 380,
          "year": 2025,
          "statement_date": "2025-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/makowski_krzysztof_2025.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2025_2cf258998718.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheet. Handwritten values imported only where readable; most monetary values need second review.",
          "assets_value_pln": 135000.0,
          "income_total_pln": 239500.0,
          "liabilities_total_pln": 320000.0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 60000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "60 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "movable_property",
              "description": "Domek letniskowy",
              "value_pln": 30000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "ok. 30 000 zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Przyczepa kempingowa KABE",
              "value_pln": 45000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "ok. 45 000 zł - do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "VW Caddy",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "VW Caddy - wartość nieczytelna",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 135000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "spółki handlowe",
              "description": "Dochód z funkcji w spółkach - wartość niepewna",
              "amount_pln": 44500.0,
              "raw_text": "suma szacunkowa z dwóch pozycji, do potwierdzenia",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego / dochód z funkcji publicznej - do weryfikacji",
              "amount_pln": 195000.0,
              "raw_text": "wartość przybliżona z rękopisu",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Zobowiązania z rękopisu - kwota częściowo nieczytelna",
              "amount_pln": 320000.0,
              "currency": "PLN",
              "raw_text": "szacunek roboczy, do potwierdzenia",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 60 000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach: LT&BUD sp. z o.o. i Nasza Księgarnia sp. z o.o.; liczby udziałów do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "",
              "confidence": "unreviewed",
              "review_status": "pending",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach i dochody z tego tytułu: wartości do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z zatrudnienia/innej działalności: kilka pozycji rękopisu do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Mienie ruchome powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Ruchomości: domek letniskowy, przyczepa KABE, VW Caddy, automat/urządzenie pożyczkowe; kwoty do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: kredyty/pożyczki z widocznymi kwotami do weryfikacji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 174500.0,
              "metrics": {
                "income_pln": 239500.0,
                "net_delta_pln": 65000.0,
                "asset_delta_pln": 85000.0,
                "debt_delta_pln": 20000.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 60000.0
              }
            ]
          }
        },
        {
          "id": 65,
          "year": 2026,
          "statement_date": "2026-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/makowski_krzysztof_2026.pdf",
          "file_path": "data\\raw\\makowski-krzysztof\\2026_019fd9fbe3b6.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered PDF pages. Handwritten statement; several values marked medium confidence and require second review.",
          "assets_value_pln": 355996.41000000003,
          "income_total_pln": 568245.89,
          "liabilities_total_pln": 790068.0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "20 000 zł",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 208000.0,
              "area": "51,16 m2",
              "legal_title": "wspólność majątkowa małżeńska / własność",
              "ownership": "",
              "raw_text": "Mieszkanie 51,16 m2, wartość 208 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Inna nieruchomość 0,0352 ha",
              "value_pln": 1000.0,
              "area": "0,0352 ha",
              "legal_title": "współwłasność małżeńska",
              "ownership": "",
              "raw_text": "0,0352 ha, wartość 1 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "movable_property",
              "description": "Domek letniskowy",
              "value_pln": 30000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Domek letniskowy 30 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "movable_property",
              "description": "Urządzenie/automat pożyczkowy",
              "value_pln": 49996.41,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Urządzenie/automat pożyczkowy 49 996,41 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Przyczepa kempingowa KABE",
              "value_pln": 47000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Przyczepa kempingowa KABE 47 000 zł",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "VW Caddy (2013)",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "VW Caddy, rok 2013, wartość do weryfikacji",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 355996.41,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "",
              "description": "Dochód z funkcji w spółkach",
              "amount_pln": 26680.0,
              "raw_text": "Widoczny dochód 26 680,00 zł",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 176441.12,
              "raw_text": "Rada Miejska w Łodzi 176 441,12 zł",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "",
              "description": "Inne dochody z rękopisu",
              "amount_pln": 14905.01,
              "raw_text": "Pozycja dochodowa 14 905,01 zł",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "",
              "description": "Inne dochody z rękopisu",
              "amount_pln": 70304.71,
              "raw_text": "Pozycja dochodowa 70 304,71 zł",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "",
              "description": "Inne dochody z rękopisu",
              "amount_pln": 279915.05,
              "raw_text": "Pozycja dochodowa 279 915,05 zł",
              "confidence": "medium"
            }
          ],
          "liabilities": [
            {
              "creditor": "BNP Paribas",
              "description": "Kredyt gotówkowy 120 000 zł, do spłaty ok. 116 850 zł",
              "amount_pln": 116850.0,
              "currency": "PLN",
              "raw_text": "BNP Paribas kredyt gotówkowy 120 000 zł, do spłaty 116 850 zł",
              "confidence": "medium"
            },
            {
              "creditor": "DEKA S.A.",
              "description": "Kredyt hipoteczny/mieszkaniowy ok. 644 450 zł, do spłaty ok. 625 251 zł",
              "amount_pln": 625251.0,
              "currency": "PLN",
              "raw_text": "DEKA S.A. kredyt mieszkaniowy/hipoteczny 644 450 zł, do spłaty ok. 625 251 zł",
              "confidence": "medium"
            },
            {
              "creditor": "BNP Paribas",
              "description": "Kredyt 56 000 zł, do spłaty 47 967 zł",
              "amount_pln": 47967.0,
              "currency": "PLN",
              "raw_text": "BNP Paribas 56 000 zł, do spłaty 47 967 zł",
              "confidence": "medium"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Srodki pieniezne i papiery wartosciowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20 000 zł; waluta obca: nie dotyczy; papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {
                "cash_pln": 20000
              }
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomosci",
              "pillar": "assets",
              "raw_text": "Mieszkanie 51,16 m2, wartość 208 000 zł, tytuł: wspólność majątkowa małżeńska / własność. Inne nieruchomości: 0,0352 ha, wartość 1 000 zł, współwłasność małżeńska.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udzialy w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w innych spółkach handlowych: m.in. LT&BUD sp. z o.o. oraz Nasza Księgarnia sp. z o.o.; dochód 0 zł. Odczyt rękopisu częściowy.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spolkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Panstwa lub samorzadu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub jednostek publicznych w drodze przetargu: nie dotyczy.",
              "confidence": "high",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona dzialalnosc gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy. Zarzłdzanie/funkcje w działalności: Fundacja Bezpieczni, Akademia Walki z Rakiem; dochód 0 zł.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spolkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych i dochody: kilka pozycji, odczyt rękopisu częściowy; widoczny dochód 26 680,00 zł.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {
                "company_roles_income_pln": 26680
              }
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody: Rada Miejska w Łodzi 176 441,12 zł; inne pozycje odczytane z rękopisu: 14 905,01 zł, 70 304,71 zł, 279 915,05 zł.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {
                "total_income_pln": 541245.89
              }
            },
            {
              "section_code": "IX",
              "section_title": "Skladniki mienia ruchomego powyzej 10000 zl",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego: m.in. domek letniskowy, przyczepa kempingowa KABE, VW Caddy 2013, automat/urządzenie pożyczkowe; odczyt wartości częściowy.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiazania pieniezne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: BNP Paribas kredyt gotówkowy 120 000 zł, do spłaty ok. 116 850 zł; DEKA S.A. kredyt hipoteczny/mieszkaniowy ok. 644 450 zł, do spłaty ok. 625 251 zł; BNP Paribas 56 000 zł, do spłaty 47 967 zł. Odczyt rękopisu wymaga późniejszej kontroli.",
              "confidence": "medium",
              "review_status": "reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 568245.89,
              "metrics": {
                "income_pln": 568245.89,
                "net_delta_pln": -249071.59,
                "asset_delta_pln": 220996.41,
                "debt_delta_pln": 470068.0
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 208000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 66,
      "name": "Marzec Radosław",
      "slug": "marzec-radoslaw",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 110,
          "year": 2020,
          "statement_date": "2020-05-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/marzec_radoslaw_2020.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2020_57be4a7e2a04.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 725711.6,
          "income_total_pln": 160158.18,
          "liabilities_total_pln": 501809.2,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 8000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 25493.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 650000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 2218.6,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 725711.6,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Umowa zlecenia",
              "description": "Umowa zlecenia",
              "amount_pln": 7200.0,
              "raw_text": "Umowa zlecenia",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 32122.57,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 104956.74,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "insurance_benefit",
              "payer": "Świadczenie z polisy PZU",
              "description": "Świadczenie z polisy PZU",
              "amount_pln": 2200.0,
              "raw_text": "Świadczenie z polisy PZU",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Zapłata za sieć wodociągową",
              "description": "Zapłata za sieć wodociągową",
              "amount_pln": 5700.31,
              "raw_text": "Zapłata za sieć wodociągową",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 4394.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "social_benefit",
              "payer": "Zasiłek macierzyński / urlop ojcowski",
              "description": "Zasiłek macierzyński / urlop ojcowski",
              "amount_pln": 3584.56,
              "raw_text": "Zasiłek macierzyński / urlop ojcowski",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 493809.2,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Brak składników mienia ruchomego powyżej progu.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 162,
          "year": 2021,
          "statement_date": "2021-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/marzec_radoslaw_2021.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2021_1c6ea996a908.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 737989.6,
          "income_total_pln": 168193.78,
          "liabilities_total_pln": 524299.26,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 5000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 40350.4,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 650000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 2639.2,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Peugeot 308 1.6 HDI SW, rocznik 2008, kupiony i sprzedany w 2020 r.",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Peugeot 308 1.6 HDI SW, rocznik 2008, kupiony i sprzedany w 2020 r.",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 737989.6,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 31283.54,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 121044.24,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "grant",
              "payer": "Dotacja WFOŚiGW w Łodzi",
              "description": "Dotacja WFOŚiGW w Łodzi",
              "amount_pln": 13500.0,
              "raw_text": "Dotacja WFOŚiGW w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 2366.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 480944.09,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 35355.17,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Peugeot 308 1.6 HDI SW, rocznik 2008, kupiony i sprzedany w 2020 r.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 168193.78,
              "metrics": {
                "income_pln": 168193.78,
                "net_delta_pln": -10212.06,
                "asset_delta_pln": 12278.0,
                "debt_delta_pln": 22490.06
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 218,
          "year": 2022,
          "statement_date": "2022-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/marzec_radoslaw_2022.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2022_3f884810a463.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 878996.41,
          "income_total_pln": 355254.76,
          "liabilities_total_pln": 511156.57999999996,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 4500.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 51261.31,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 780000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 3235.1,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "renewable_energy_installation",
              "description": "Instalacja fotowoltaiczna 9,77 kWp",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 878996.41,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "KPS SKRA Bełchatów S.A.",
              "description": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "amount_pln": 249544.35,
              "raw_text": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 37330.13,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 57704.28,
              "raw_text": "Umowa o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "grant",
              "payer": "Dotacja WFOŚiGW w Łodzi",
              "description": "Dotacja WFOŚiGW w Łodzi",
              "amount_pln": 5000.0,
              "raw_text": "Dotacja WFOŚiGW w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 5676.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 466352.22,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 36804.36,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 201105.27,
              "metrics": {
                "income_pln": 355254.76,
                "net_delta_pln": 154149.49,
                "asset_delta_pln": 141006.81,
                "debt_delta_pln": -13142.68
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "IKZE",
                "value_pln": 51261.31
              }
            ]
          }
        },
        {
          "id": 261,
          "year": 2023,
          "statement_date": "2023-04-26",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Marzec_Radoslaw_2023.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2023_2dbbde7086f3.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 931051.09,
          "income_total_pln": 416176.87999999995,
          "liabilities_total_pln": 510869.74,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 53000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 53339.59,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 780000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 4711.5,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "renewable_energy_installation",
              "description": "Instalacja fotowoltaiczna 9,77 kWp",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 931051.09,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "KPS SKRA Bełchatów S.A.",
              "description": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "amount_pln": 361748.72,
              "raw_text": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 47861.36,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 5000.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "social_benefit",
              "payer": "Zasiłek z ubezpieczenia społecznego",
              "description": "Zasiłek z ubezpieczenia społecznego",
              "amount_pln": 1566.8,
              "raw_text": "Zasiłek z ubezpieczenia społecznego",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 460450.88,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 42418.86,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "KPS SKRA Bełchatów S.A., wiceprezes od 1.03.2021",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 363835.36,
              "metrics": {
                "income_pln": 416176.88,
                "net_delta_pln": 52341.52,
                "asset_delta_pln": 52054.68,
                "debt_delta_pln": -286.84
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 53000.0
              }
            ]
          }
        },
        {
          "id": 328,
          "year": 2024,
          "statement_date": "2024-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/marzec_radoslaw_20240430.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2024_ba01c95530c5.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 910120.4,
          "income_total_pln": 425021.91,
          "liabilities_total_pln": 456157.49,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 12000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 74500.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 780000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 3620.4,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "renewable_energy_installation",
              "description": "Instalacja fotowoltaiczna 9,77 kWp",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 910120.4,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "KPS SKRA Bełchatów S.A.",
              "description": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "amount_pln": 372588.18,
              "raw_text": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 46933.73,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 5500.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 412109.36,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 36048.13,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 391240.35,
              "metrics": {
                "income_pln": 425021.91,
                "net_delta_pln": 33781.56,
                "asset_delta_pln": -20930.69,
                "debt_delta_pln": -54712.25
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 381,
          "year": 2025,
          "statement_date": "2025-04-23",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/marzec_radoslaw_2025.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2025_a45e0eef982d.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 945281.75,
          "income_total_pln": 266906.9,
          "liabilities_total_pln": 441772.44,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 35000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 88282.95,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 780000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 1998.8,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "renewable_energy_installation",
              "description": "Instalacja fotowoltaiczna 9,77 kWp",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 945281.75,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "KPS SKRA Bełchatów S.A.",
              "description": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "amount_pln": 110748.58,
              "raw_text": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 44769.25,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Świadczenie z umowy o pracę",
              "description": "Świadczenie z umowy o pracę",
              "amount_pln": 106389.07,
              "raw_text": "Świadczenie z umowy o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 5000.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 400995.24,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 32777.2,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "KPS SKRA Bełchatów S.A., p.o. prezesa od 16.06.2023",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Instalacja fotowoltaiczna 9,77 kWp",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 217360.5,
              "metrics": {
                "income_pln": 266906.9,
                "net_delta_pln": 49546.4,
                "asset_delta_pln": 35161.35,
                "debt_delta_pln": -14385.05
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 66,
          "year": 2026,
          "statement_date": "2026-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/marzec_radoslaw_2026.pdf",
          "file_path": "data\\raw\\marzec-radoslaw\\2026_3b739ee0a64d.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1139676.4,
          "income_total_pln": 284779.13,
          "liabilities_total_pln": 423723.08999999997,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 88000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "retirement_account",
              "description": "IKZE",
              "value_pln": 109305.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 900000.0,
              "area": "233,22 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Nieruchomość, na której znajduje się dom",
              "value_pln": 37500.0,
              "area": "0,1135 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Nieruchomość, na której znajduje się dom",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział 1/12 w nieruchomości",
              "value_pln": 2500.0,
              "area": "0,2415 ha",
              "legal_title": "umowa darowizny",
              "ownership": "",
              "raw_text": "Udział 1/12 w nieruchomości",
              "confidence": "high"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "value_pln": 2371.4,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje Bioton 190 szt. i JSW 70 szt.",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Opel Corsa 2012, 1.2",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Opel Corsa 2012, 1.2",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1139676.4,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego w Łodzi",
              "amount_pln": 49569.79,
              "raw_text": "Dieta radnego miejskiego w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Świadczenie z umowy o pracę",
              "description": "Świadczenie z umowy o pracę",
              "amount_pln": 131402.59,
              "raw_text": "Świadczenie z umowy o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Świadczenie z umowy o pracę",
              "description": "Świadczenie z umowy o pracę",
              "amount_pln": 37306.75,
              "raw_text": "Świadczenie z umowy o pracę",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "personal_services",
              "payer": "Działalność wykonywana osobiście",
              "description": "Działalność wykonywana osobiście",
              "amount_pln": 65000.0,
              "raw_text": "Działalność wykonywana osobiście",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "public_media_allowance",
              "payer": "Dieta Rada Programowa TVP",
              "description": "Dieta Rada Programowa TVP",
              "amount_pln": 1500.0,
              "raw_text": "Dieta Rada Programowa TVP",
              "confidence": "high"
            }
          ],
          "liabilities": [
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "amount_pln": 388372.55,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, kapitał do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "WFOŚiGW w Łodzi",
              "description": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "amount_pln": 27350.54,
              "currency": "PLN",
              "raw_text": "Pożyczka/dofinansowanie, kwota do spłaty na koniec roku",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Limit karty kredytowej",
              "amount_pln": 7000.0,
              "currency": "PLN",
              "raw_text": "Limit karty kredytowej",
              "confidence": "high"
            },
            {
              "creditor": "BOŚ S.A.",
              "description": "Kredyt odnawialny",
              "amount_pln": 1000.0,
              "currency": "PLN",
              "raw_text": "Kredyt odnawialny",
              "confidence": "high"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, IKZE oraz akcje Bioton/JSW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom oraz dwie pozycje gruntowe; wartości odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / nie posiada.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: Bioton 190 szt. oraz JSW 70 szt., wartości według deklaracji rocznej.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody rozpisane według pozycji z części VIII.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Opel Corsa 2012, 1.2",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania BOŚ S.A. oraz WFOŚiGW odczytane ręcznie z formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 88000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 67,
      "name": "Masłowski Marcin",
      "slug": "maslowski-marcin",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 330,
          "year": 2024,
          "statement_date": "2024-05-06",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/maslowski_marcin_240506.pdf",
          "file_path": "data\\raw\\maslowski-marcin\\2024_5878e908b43d.pdf",
          "confidence": "low",
          "notes": "Masłowski 2024: rękopis, wartości części VII-X są robocze i do późniejszej weryfikacji hurtowej.",
          "assets_value_pln": 24000.0,
          "income_total_pln": 278497.9,
          "liabilities_total_pln": 537000.0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 4000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Subaru Outback 2010",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Subaru Outback 2010",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 24000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "EXPO Łódź sp. z o.o.",
              "description": "Wynagrodzenie z funkcji w EXPO Łódź, odczyt roboczy",
              "amount_pln": 23769.99,
              "raw_text": "Wynagrodzenie z funkcji w EXPO Łódź, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Agencja reklamy / Fala",
              "description": "Umowa zlecenie, odczyt roboczy",
              "amount_pln": 35680.0,
              "raw_text": "Umowa zlecenie, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "do weryfikacji",
              "description": "Umowa zlecenie, odczyt roboczy",
              "amount_pln": 28668.0,
              "raw_text": "Umowa zlecenie, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Urząd Miasta Łodzi",
              "description": "Umowa o pracę w UMŁ, odczyt roboczy",
              "amount_pln": 190379.91,
              "raw_text": "Umowa o pracę w UMŁ, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "Bank Pocztowy",
              "description": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "amount_pln": 252000.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "Santander Bank",
              "description": "Kredyt gotówkowy, odczyt roboczy",
              "amount_pln": 180000.0,
              "currency": "PLN",
              "raw_text": "Kredyt gotówkowy, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "Deutsche Bank",
              "description": "Kredyt gotówkowy, odczyt roboczy",
              "amount_pln": 105000.0,
              "currency": "PLN",
              "raw_text": "Kredyt gotówkowy, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 4 000 zł; waluty obce i papiery wartościowe: brak.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: brak pozycji odczytanych z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje i wynagrodzenia w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Subaru Outback 2010  wartość roboczo 20 000 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 382,
          "year": 2025,
          "statement_date": "2025-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/maslowski_marcin_2025.pdf",
          "file_path": "data\\raw\\maslowski-marcin\\2025_473501b42c70.pdf",
          "confidence": "low",
          "notes": "Masłowski 2025: rękopis, kwoty zobowiązań i dochodów niskiej pewności.",
          "assets_value_pln": 25000.0,
          "income_total_pln": 211350.64,
          "liabilities_total_pln": 600000.0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 0.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Subaru XV 2012",
              "value_pln": 25000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Subaru XV 2012",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 25000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "EXPO Łódź sp. z o.o.",
              "description": "Rada Nadzorcza EXPO Łódź, odczyt roboczy",
              "amount_pln": 14619.68,
              "raw_text": "Rada Nadzorcza EXPO Łódź, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Agencja Fala sp. z o.o.",
              "description": "Umowa / wynagrodzenie, odczyt roboczy",
              "amount_pln": 138041.26,
              "raw_text": "Umowa / wynagrodzenie, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego, odczyt roboczy",
              "amount_pln": 26508.36,
              "raw_text": "Dieta radnego, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Urząd Miasta Łodzi",
              "description": "UMŁ, odczyt roboczy",
              "amount_pln": 32181.34,
              "raw_text": "UMŁ, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "Bank Pocztowy",
              "description": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "amount_pln": 330000.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "Santander Bank",
              "description": "Kredyt konsumencki, odczyt roboczy",
              "amount_pln": 130000.0,
              "currency": "PLN",
              "raw_text": "Kredyt konsumencki, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "PKO BP",
              "description": "Kredyt konsumencki, odczyt roboczy",
              "amount_pln": 15000.0,
              "currency": "PLN",
              "raw_text": "Kredyt konsumencki, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt konsumencki, odczyt roboczy",
              "amount_pln": 25000.0,
              "currency": "PLN",
              "raw_text": "Kredyt konsumencki, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "Deutsche Bank",
              "description": "Kredyt konsumencki z 2009 r., odczyt roboczy",
              "amount_pln": 100000.0,
              "currency": "PLN",
              "raw_text": "Kredyt konsumencki z 2009 r., odczyt roboczy",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 0 zł; waluty obce i papiery wartościowe: brak.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: brak pozycji odczytanych z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje i wynagrodzenia w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Subaru XV 2012  wartość roboczo 25 000 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 211350.64,
              "metrics": {
                "income_pln": 211350.64,
                "net_delta_pln": -62000.0,
                "asset_delta_pln": 1000.0,
                "debt_delta_pln": 63000.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 67,
          "year": 2026,
          "statement_date": "2026-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/maslowski_marcin_2026.pdf",
          "file_path": "data\\raw\\maslowski-marcin\\2026_7fdca0d02c41.pdf",
          "confidence": "low",
          "notes": "Masłowski 2026: rękopis, część X niejednoznaczna; wpisane jako roboczy odczyt do weryfikacji.",
          "assets_value_pln": 20000.0,
          "income_total_pln": 300772.33,
          "liabilities_total_pln": 593700.0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 0.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Subaru XV 2012",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Subaru XV 2012",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 20000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Holding Łódzki sp. z o.o.",
              "description": "Wynagrodzenie, odczyt roboczy",
              "amount_pln": 17203.2,
              "raw_text": "Wynagrodzenie, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Agencja Reklamy Fala sp. z o.o.",
              "description": "Wynagrodzenie, odczyt roboczy",
              "amount_pln": 236434.4,
              "raw_text": "Wynagrodzenie, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego, odczyt roboczy",
              "amount_pln": 47134.73,
              "raw_text": "Dieta radnego, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "Bank Pocztowy",
              "description": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "amount_pln": 281000.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny / gotówkowy, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt, odczyt roboczy",
              "amount_pln": 81700.0,
              "currency": "PLN",
              "raw_text": "Kredyt, odczyt roboczy",
              "confidence": "low"
            },
            {
              "creditor": "PKO BP",
              "description": "Kredyt, odczyt roboczy",
              "amount_pln": 231000.0,
              "currency": "PLN",
              "raw_text": "Kredyt, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 0 zł; waluty obce i papiery wartościowe: brak.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: brak pozycji odczytanych z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy / brak odczytanej pozycji.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje i wynagrodzenia w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Inne dochody: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Subaru XV 2012  wartość roboczo 20 000 zł.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 299472.33,
              "metrics": {
                "income_pln": 300772.33,
                "net_delta_pln": 1300.0,
                "asset_delta_pln": -5000.0,
                "debt_delta_pln": -6300.0
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    },
    {
      "id": 69,
      "name": "Nykiel Kosma",
      "slug": "nykiel-kosma",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 333,
          "year": 2024,
          "statement_date": "2024-05-20",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/nykiel_kosma_240520.pdf",
          "file_path": "data\\raw\\nykiel-kosma\\2024_ebedd98c2f0e.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Foreign-currency incomes are kept in raw text unless PLN was declared.",
          "assets_value_pln": 164668.5,
          "income_total_pln": 4171.58,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 2300.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "213 USD; 50 BWP; 114,38 GBP; 150 KES",
              "confidence": "medium",
              "estimated_value_pln": 771.17,
              "estimate_note": "213 USD x 3.6205 PLN"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Obligacje, akcje NYSE i fundusze inwestycyjne",
              "value_pln": 162368.5,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Obligacje Skarbu Państwa 100 820 PLN; akcje na giełdzie NYSE 17 000 USD.",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 771.17,
          "assets_estimated_total_pln": 165439.67,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Umowy cywilnoprawne",
              "description": "Umowy cywilnoprawne",
              "amount_pln": 2002.08,
              "raw_text": "2 002,08 PLN netto",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "dividend",
              "payer": "Dywidendy z akcji giełdy NYSE",
              "description": "Dywidendy z akcji giełdy NYSE",
              "amount_pln": null,
              "raw_text": "800 USD netto",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę w Polsce",
              "description": "Umowa o pracę w Polsce",
              "amount_pln": 2169.5,
              "raw_text": "2 169,50 PLN netto",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "foreign_employment",
              "payer": "Umowa o pracę w Wielkiej Brytanii",
              "description": "Umowa o pracę w Wielkiej Brytanii",
              "amount_pln": null,
              "raw_text": "15 023 GBP netto",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki PLN: 2300 PLN; waluty obce: 213 USD; 50 BWP; 114,38 GBP; 150 KES; papiery wartościowe: Obligacje Skarbu Państwa 100 820 PLN; akcje na giełdzie NYSE 17 000 USD.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i dywidendy z giełdy NYSE wykazane w formularzu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diet, pracy, umów cywilnoprawnych, odsetek i dywidend.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego powyżej progu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 384,
          "year": 2025,
          "statement_date": "2025-04-17",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/nykiel_kosma_2025.pdf",
          "file_path": "data\\raw\\nykiel-kosma\\2025_fc53a1807359.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Foreign-currency incomes are kept in raw text unless PLN was declared.",
          "assets_value_pln": 188324.2,
          "income_total_pln": 72104.57,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 8800.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "6005 GBP; 6 USD; 7 EUR; 50 BWP; 150 KES",
              "confidence": "medium",
              "estimated_value_pln": 51.4,
              "estimate_note": "6 USD x 3.6205 PLN; 7 EUR x 4.2401 PLN"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Obligacje, akcje NYSE i fundusze inwestycyjne",
              "value_pln": 179524.2,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Obligacje Skarbu Państwa 117 400 PLN; akcje NYSE 13 317 USD; Uniqo Fundusz Akcji Amerykańskich 4 438 PLN; Uniqo FIO/IKZE 9 472 PLN.",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 51.4,
          "assets_estimated_total_pln": 188375.6,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Umowy cywilnoprawne",
              "description": "Umowy cywilnoprawne",
              "amount_pln": 2378.08,
              "raw_text": "2 378,08 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego",
              "description": "Dieta radnego",
              "amount_pln": 27545.5,
              "raw_text": "27 545,50 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "dividend",
              "payer": "Dywidendy z akcji giełdy NYSE",
              "description": "Dywidendy z akcji giełdy NYSE",
              "amount_pln": null,
              "raw_text": "808 GBP",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Wynagrodzenie z umowy o pracę w Polsce",
              "description": "Wynagrodzenie z umowy o pracę w Polsce",
              "amount_pln": 36802.33,
              "raw_text": "36 802,33 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "foreign_employment",
              "payer": "Wynagrodzenie z umowy o pracę w Wielkiej Brytanii",
              "description": "Wynagrodzenie z umowy o pracę w Wielkiej Brytanii",
              "amount_pln": null,
              "raw_text": "17 654,32 GBP",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "interest",
              "payer": "Odsetki od obligacji Skarbu Państwa",
              "description": "Odsetki od obligacji Skarbu Państwa",
              "amount_pln": 5378.66,
              "raw_text": "5 378,66 PLN",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki PLN: 8800 PLN; waluty obce: 6005 GBP; 6 USD; 7 EUR; 50 BWP; 150 KES; papiery wartościowe: Obligacje Skarbu Państwa 117 400 PLN; akcje NYSE 13 317 USD; Uniqo Fundusz Akcji Amerykańskich 4 438 PLN; Uniqo FIO/IKZE 9 472 PLN.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i dywidendy z giełdy NYSE wykazane w formularzu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diet, pracy, umów cywilnoprawnych, odsetek i dywidend.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego powyżej progu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 69,
          "year": 2026,
          "statement_date": "2026-04-22",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/nykiel_kosma_2026.pdf",
          "file_path": "data\\raw\\nykiel-kosma\\2026_be7e86465c7f.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Foreign-currency incomes are kept in raw text unless PLN was declared.",
          "assets_value_pln": 257481.87,
          "income_total_pln": 247358.5,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 63094.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "foreign_currency",
              "description": "Waluty obce",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "7663,67 GBP; 3568,57 USD; 50 BWP; 150 KES; 40 HKD; 100 PHP; 100 TWD",
              "confidence": "medium",
              "estimated_value_pln": 12920.01,
              "estimate_note": "3568.57 USD x 3.6205 PLN"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Obligacje, akcje NYSE i fundusze inwestycyjne",
              "value_pln": 194387.87,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Obligacje Skarbu Państwa 125 000 PLN; akcje na giełdzie NYSE 12 030,47 USD; Uniqo Fundusz Akcji Amerykańskich 5 002,44 PLN; fundusze inwestycyjne Uniqo IKZE 20 829,11 PLN.",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 12920.01,
          "assets_estimated_total_pln": 270401.88,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Umowy cywilnoprawne",
              "description": "Umowy cywilnoprawne",
              "amount_pln": 20755.05,
              "raw_text": "20 755,05 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego",
              "description": "Dieta radnego",
              "amount_pln": 49075.05,
              "raw_text": "49 075,05 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "dividend",
              "payer": "Dywidendy z akcji giełdy NYSE",
              "description": "Dywidendy z akcji giełdy NYSE",
              "amount_pln": null,
              "raw_text": "768,91 GBP",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 91324.52,
              "raw_text": "91 324,52 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment_tax_relief",
              "payer": "Dochód z umowy o pracę objęty ulgą",
              "description": "Dochód z umowy o pracę objęty ulgą",
              "amount_pln": 85528.0,
              "raw_text": "85 528,00 PLN",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "interest",
              "payer": "Odsetki od obligacji Skarbu Państwa",
              "description": "Odsetki od obligacji Skarbu Państwa",
              "amount_pln": 675.88,
              "raw_text": "675,88 PLN",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki PLN: 63094 PLN; waluty obce: 7663,67 GBP; 3568,57 USD; 50 BWP; 150 KES; 40 HKD; 100 PHP; 100 TWD; papiery wartościowe: Obligacje Skarbu Państwa 125 000 PLN; akcje na giełdzie NYSE 12 030,47 USD; Uniqo Fundusz Akcji Amerykańskich 5 002,44 PLN; fundusze inwestycyjne Uniqo IKZE 20 829,11 PLN.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i dywidendy z giełdy NYSE wykazane w formularzu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diet, pracy, umów cywilnoprawnych, odsetek i dywidend.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Składniki mienia ruchomego powyżej progu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 165332.22,
              "metrics": {
                "income_pln": 247358.5,
                "net_delta_pln": 82026.28,
                "asset_delta_pln": 82026.28,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 63094.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 120,
      "name": "Reszpondek Rafał",
      "slug": "reszpondek-rafal",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 120,
          "year": 2020,
          "statement_date": "2020-05-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/reszpondek_rafal_2020.pdf",
          "file_path": "data\\raw\\reszpondek-rafal\\2020_edbca9c031a1.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.",
          "assets_value_pln": 418030.0,
          "income_total_pln": 66196.7,
          "liabilities_total_pln": 376000.0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 64830.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "value_pln": 64000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 229000.0,
              "area": "64,55 m2",
              "legal_title": "prawo do wyłącznego korzystania / odczyt roboczy",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "III",
              "asset_type": "shares",
              "description": "Udziały w spółkach, odczyt roboczy",
              "value_pln": 60200.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Udziały w spółkach, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Opel Vivaro 2016",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Opel Vivaro 2016",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Mercedes 4x4 2013",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Mercedes 4x4 2013",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 418030.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego",
              "description": "Dieta radnego",
              "amount_pln": 58384.69,
              "raw_text": "Dieta radnego",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 7812.01,
              "raw_text": "Umowa o pracę",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Kredyty z rękopisu, suma robocza",
              "amount_pln": 376000.0,
              "currency": "PLN",
              "raw_text": "Kredyty z rękopisu, suma robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie / nieruchomości odczytane roboczo z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach, wartość robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: brak istotnych pozycji poza odczytem roboczym.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Opel Vivaro 2016; Mercedes 4x4 2013",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne z rękopisu, suma robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 177,
          "year": 2021,
          "statement_date": "2021-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/reszpondek_rafal_2021.pdf",
          "file_path": "data\\raw\\reszpondek-rafal\\2021_b707a5d4969b.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.",
          "assets_value_pln": 410000.0,
          "income_total_pln": 61000.0,
          "liabilities_total_pln": 330000.0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 56000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "value_pln": 65000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 229000.0,
              "area": "64,55 m2",
              "legal_title": "odczyt roboczy",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "III",
              "asset_type": "shares",
              "description": "Udziały w spółkach, odczyt roboczy",
              "value_pln": 60000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Udziały w spółkach, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Opel Vivaro 2016",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Opel Vivaro 2016",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Mercedes 4x4 2013",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Mercedes 4x4 2013",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 410000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego / inne dochody",
              "description": "Dieta radnego / inne dochody",
              "amount_pln": 61000.0,
              "raw_text": "Dieta radnego / inne dochody",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Kredyty z rękopisu, suma robocza",
              "amount_pln": 330000.0,
              "currency": "PLN",
              "raw_text": "Kredyty z rękopisu, suma robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie / nieruchomości odczytane roboczo z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach, wartość robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: brak istotnych pozycji poza odczytem roboczym.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Opel Vivaro 2016; Mercedes 4x4 2013",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne z rękopisu, suma robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 229000.0
              }
            ]
          }
        },
        {
          "id": 228,
          "year": 2022,
          "statement_date": "2022-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/reszpondek_rafal_2022.pdf",
          "file_path": "data\\raw\\reszpondek-rafal\\2022_59172c3c526a.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.",
          "assets_value_pln": 465000.0,
          "income_total_pln": 81011.0,
          "liabilities_total_pln": 300000.0,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 70000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "value_pln": 80000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 240000.0,
              "area": "64,55 m2",
              "legal_title": "odczyt roboczy",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "III",
              "asset_type": "shares",
              "description": "Udziały w spółkach, odczyt roboczy",
              "value_pln": 75000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Udziały w spółkach, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "pojazdy z rękopisu, odczyt roboczy",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "pojazdy z rękopisu, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 465000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Spółka / funkcja",
              "description": "Spółka / funkcja",
              "amount_pln": 52000.0,
              "raw_text": "Spółka / funkcja",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego",
              "description": "Dieta radnego",
              "amount_pln": 29011.0,
              "raw_text": "Dieta radnego",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Kredyty z rękopisu, suma robocza",
              "amount_pln": 300000.0,
              "currency": "PLN",
              "raw_text": "Kredyty z rękopisu, suma robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie / nieruchomości odczytane roboczo z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach, wartość robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: brak istotnych pozycji poza odczytem roboczym.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "pojazdy z rękopisu, odczyt roboczy",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne z rękopisu, suma robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 271,
          "year": 2023,
          "statement_date": "2023-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Reszpondek_Rafal_2023.pdf",
          "file_path": "data\\raw\\reszpondek-rafal\\2023_46f0db685e9c.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.",
          "assets_value_pln": 570000.0,
          "income_total_pln": 122000.0,
          "liabilities_total_pln": 270000.0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 120000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "value_pln": 100000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 260000.0,
              "area": "64,55 m2",
              "legal_title": "odczyt roboczy",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "III",
              "asset_type": "shares",
              "description": "Udziały w spółkach, odczyt roboczy",
              "value_pln": 90000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Udziały w spółkach, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "pojazdy z rękopisu, odczyt roboczy",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "pojazdy z rękopisu, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 570000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Spółka / funkcja",
              "description": "Spółka / funkcja",
              "amount_pln": 52000.0,
              "raw_text": "Spółka / funkcja",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego / inne dochody",
              "description": "Dieta radnego / inne dochody",
              "amount_pln": 70000.0,
              "raw_text": "Dieta radnego / inne dochody",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Kredyty z rękopisu, suma robocza",
              "amount_pln": 270000.0,
              "currency": "PLN",
              "raw_text": "Kredyty z rękopisu, suma robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie / nieruchomości odczytane roboczo z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach, wartość robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: brak istotnych pozycji poza odczytem roboczym.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "pojazdy z rękopisu, odczyt roboczy",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne z rękopisu, suma robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 343,
          "year": 2024,
          "statement_date": "2024-06-25",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/reszpondek_rafal_240624.pdf",
          "file_path": "data\\raw\\reszpondek-rafal\\2024_ed754a5dab6e.pdf",
          "confidence": "low",
          "notes": "Manual review from contact sheets. Handwritten statement; values are working reads for later batch correction.",
          "assets_value_pln": 481000.0,
          "income_total_pln": 110032.35,
          "liabilities_total_pln": 260000.0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 21000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "value_pln": 70000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / środki inwestycyjne, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 270000.0,
              "area": "64,55 m2",
              "legal_title": "prawo do wyłącznego korzystania / odczyt roboczy",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "III",
              "asset_type": "shares",
              "description": "Udziały w spółkach, odczyt roboczy",
              "value_pln": 120000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Udziały w spółkach, odczyt roboczy",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Mercedes 2018",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Mercedes 2018",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Fiat 110 / pojazd z rękopisu",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Fiat 110 / pojazd z rękopisu",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 481000.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Spółki handlowe",
              "description": "Spółki handlowe",
              "amount_pln": 50000.0,
              "raw_text": "Spółki handlowe",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Dieta radnego / inne dochody",
              "description": "Dieta radnego / inne dochody",
              "amount_pln": 60032.35,
              "raw_text": "Dieta radnego / inne dochody",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "do weryfikacji",
              "description": "Kredyty z rękopisu, suma robocza",
              "amount_pln": 260000.0,
              "currency": "PLN",
              "raw_text": "Kredyty z rękopisu, suma robocza",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki, waluty i papiery wartościowe z rękopisu, wartości robocze.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie / nieruchomości odczytane roboczo z formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach, wartość robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje: brak istotnych pozycji poza odczytem roboczym.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza: nie dotyczy / brak czytelnej kwoty.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach: roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z pracy, diet i funkcji, roboczy odczyt rękopisu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Mercedes 2018; Fiat 110 / pojazd z rękopisu",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania pieniężne z rękopisu, suma robocza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 110032.35,
              "metrics": {
                "income_pln": 110032.35,
                "net_delta_pln": -79000.0,
                "asset_delta_pln": -89000.0,
                "debt_delta_pln": -10000.0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 270000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 76,
      "name": "Stasiak Krzysztof",
      "slug": "stasiak-krzysztof",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 123,
          "year": 2020,
          "statement_date": "2020-05-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/stasiak_krzysztof_2020.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2020_d52fd2cacc77.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 992500.0,
          "income_total_pln": 174514.41999999998,
          "liabilities_total_pln": 0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 84000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 671500.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 60000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": 27000.0,
              "area": "16,24 m2",
              "legal_title": "własność / darowizna",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 992500.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "contract_work",
              "payer": "Umowa zlecenia",
              "description": "Umowa zlecenia",
              "amount_pln": 6000.0,
              "raw_text": "Umowa zlecenia",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 32209.56,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 136304.86,
              "raw_text": "Stosunek pracy",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 84000 zł; papiery wartościowe / fundusze: ok. 671500 zł.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 182,
          "year": 2021,
          "statement_date": "2021-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/stasiak_krzysztof_2021.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2021_bc1ece6396cf.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1134000.0,
          "income_total_pln": 172152.9,
          "liabilities_total_pln": 0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 91000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 806000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 60000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": 27000.0,
              "area": "16,24 m2",
              "legal_title": "własność / darowizna",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1134000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 32209.56,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 139943.34,
              "raw_text": "Stosunek pracy",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 91000 zł; papiery wartościowe / fundusze: ok. 806000 zł.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 232,
          "year": 2022,
          "statement_date": "2022-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/stasiak_krzysztof_2022.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2022_62bd20f61b51.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1267200.0,
          "income_total_pln": 184284.81,
          "liabilities_total_pln": 0,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 126700.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 903500.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 60000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": 27000.0,
              "area": "16,24 m2",
              "legal_title": "własność / darowizna",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1267200.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 37909.91,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 146374.9,
              "raw_text": "Stosunek pracy",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 126700 zł; papiery wartościowe / fundusze: ok. 903500 zł.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 274,
          "year": 2023,
          "statement_date": "2023-04-26",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Stasiak_Krzysztof_2023.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2023_128e78d73e2c.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1317000.0,
          "income_total_pln": 197597.69,
          "liabilities_total_pln": 0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 259000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 821000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 60000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": 27000.0,
              "area": "16,24 m2",
              "legal_title": "własność / darowizna",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1317000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 48428.28,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 149169.41,
              "raw_text": "Stosunek pracy",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 259000 zł; papiery wartościowe / fundusze: ok. 821000 zł.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 147797.69,
              "metrics": {
                "income_pln": 197597.69,
                "net_delta_pln": 49800.0,
                "asset_delta_pln": 49800.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 348,
          "year": 2024,
          "statement_date": "2024-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/stasiak_krzysztof_20240429.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2024_f1166872224a.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1685000.0,
          "income_total_pln": 195871.67,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 316000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 1066000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 100000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 13000.0,
              "area": "300 m2",
              "legal_title": "udział 1/10 części we własności",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 40000.0,
              "area": "400 m2",
              "legal_title": "własność / darowizna",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": null,
              "area": "16,24 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1685000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 48428.28,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 147443.39,
              "raw_text": "Stosunek pracy",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 316000 zł; papiery wartościowe / fundusze: ok. 1066000 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 172128.33,
              "metrics": {
                "income_pln": 195871.67,
                "asset_delta_pln": 368000.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 394,
          "year": 2025,
          "statement_date": "2025-04-25",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/stasiak_krzysztof_2025.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2025_315285bfaec4.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 2004600.0,
          "income_total_pln": 176918.95,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 68000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 1506600.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 250000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 100000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 40000.0,
              "area": "300 m2",
              "legal_title": "udział 1/10 części we własności",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Boks garażowy",
              "value_pln": 40000.0,
              "area": "16,24 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Boks garażowy",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 2004600.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 50000.0,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 106668.95,
              "raw_text": "Stosunek pracy",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 20250.0,
              "raw_text": "Stosunek pracy",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 68000 zł; papiery wartościowe / fundusze: ok. 1506600 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 142681.05,
              "metrics": {
                "income_pln": 176918.95,
                "asset_delta_pln": 319600.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 76,
          "year": 2026,
          "statement_date": "2026-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/stasiak_krzysztof_2026.pdf",
          "file_path": "data\\raw\\stasiak-krzysztof\\2026_6a050d556b58.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 2264000.0,
          "income_total_pln": 73540.14,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 37000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "I",
              "asset_type": "investment_funds",
              "description": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "value_pln": 1822000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Jednostki funduszy inwestycyjnych / obligacje / IKZE",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 250000.0,
              "area": "54 m2",
              "legal_title": "własność obciążona prawem służebności osobistej / darowizna",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 100000.0,
              "area": "1200 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 15000.0,
              "area": "300 m2",
              "legal_title": "udział 1/10 części we własności",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka",
              "value_pln": 40000.0,
              "area": "400 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Działka",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Hyundai Tucson 2019",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Hyundai Tucson 2019",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 2264000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Rada Miejska w Łodzi",
              "amount_pln": 52377.85,
              "raw_text": "Rada Miejska w Łodzi",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 13248.0,
              "raw_text": "Stosunek pracy",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Stosunek pracy",
              "description": "Stosunek pracy",
              "amount_pln": 7914.29,
              "raw_text": "Stosunek pracy",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 37000 zł; papiery wartościowe / fundusze: ok. 1822000 zł.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie, działki i boks garażowy odczytane z części II formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy / nie posiada według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego i dochody ze stosunku pracy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Hyundai Tucson 2019.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 185859.86,
              "metrics": {
                "income_pln": 73540.14,
                "asset_delta_pln": 259400.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    },
    {
      "id": 124,
      "name": "Stefanowski Mikołaj",
      "slug": "stefanowski-mikolaj",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 124,
          "year": 2020,
          "statement_date": "2020-06-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_20/stefanowski_mikolaj_2020.pdf",
          "file_path": "data\\raw\\stefanowski-mikolaj\\2020_5e0079bf20ad.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Some handwritten values are working reads.",
          "assets_value_pln": 15000.0,
          "income_total_pln": 28666.0,
          "liabilities_total_pln": 0,
          "filing_year": 2020,
          "report_year": 2019,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 15000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Ford Focus Electric 2012",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Ford Focus Electric 2012",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 15000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 27000.0,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 1666.0,
              "raw_text": "Umowa o pracę",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 15000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego oraz dochody z pracy/innych umów.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Ford Focus Electric 2012",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 184,
          "year": 2021,
          "statement_date": "2021-05-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_21/stefanowski_mikolaj_2021.pdf",
          "file_path": "data\\raw\\stefanowski-mikolaj\\2021_d7b802da5b5c.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Some handwritten values are working reads.",
          "assets_value_pln": 25000.0,
          "income_total_pln": 32440.69,
          "liabilities_total_pln": 0,
          "filing_year": 2021,
          "report_year": 2020,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 25000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Ford Focus Electric 2012",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Ford Focus Electric 2012",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 25000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 30921.19,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta komisji wyborczej",
              "amount_pln": 700.0,
              "raw_text": "Dieta komisji wyborczej",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Wynagrodzenie z innych umów",
              "description": "Wynagrodzenie z innych umów",
              "amount_pln": 819.5,
              "raw_text": "Wynagrodzenie z innych umów",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 25000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego oraz dochody z pracy/innych umów.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Ford Focus Electric 2012",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 233,
          "year": 2022,
          "statement_date": "2022-04-28",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_22/stefanowski_mikolaj_2022.pdf",
          "file_path": "data\\raw\\stefanowski-mikolaj\\2022_369f3dd111b9.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Some handwritten values are working reads.",
          "assets_value_pln": 100000.0,
          "income_total_pln": 115417.87,
          "liabilities_total_pln": 0,
          "filing_year": 2022,
          "report_year": 2021,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 100000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Nissan Leaf 2012",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Nissan Leaf 2012",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 100000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 34464.6,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę / inne dochody",
              "description": "Umowa o pracę / inne dochody",
              "amount_pln": 80953.27,
              "raw_text": "Umowa o pracę / inne dochody",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 100000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego oraz dochody z pracy/innych umów.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nissan Leaf 2012",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne w walucie polskiej",
                "value_pln": 100000.0
              }
            ]
          }
        },
        {
          "id": 275,
          "year": 2023,
          "statement_date": "2023-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_23/Stefanowski_Mikolaj_2023.pdf",
          "file_path": "data\\raw\\stefanowski-mikolaj\\2023_c0c6fa522621.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Some handwritten values are working reads.",
          "assets_value_pln": 140000.0,
          "income_total_pln": 179126.24,
          "liabilities_total_pln": 0,
          "filing_year": 2023,
          "report_year": 2022,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 140000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Nissan Leaf 2012",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Nissan Leaf 2012",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 140000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 40084.95,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę / inne dochody",
              "description": "Umowa o pracę / inne dochody",
              "amount_pln": 118988.06,
              "raw_text": "Umowa o pracę / inne dochody",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "other_income",
              "payer": "Inne dochody",
              "description": "Inne dochody",
              "amount_pln": 20053.23,
              "raw_text": "Inne dochody",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 140000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego oraz dochody z pracy/innych umów.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nissan Leaf 2012",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "medium",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 139126.24,
              "metrics": {
                "income_pln": 179126.24,
                "net_delta_pln": 40000.0,
                "asset_delta_pln": 40000.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 350,
          "year": 2024,
          "statement_date": "2024-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/stefanowski_mikolaj_20240430.pdf",
          "file_path": "data\\raw\\stefanowski-mikolaj\\2024_3c2585ba880f.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Some handwritten values are working reads.",
          "assets_value_pln": 270000.0,
          "income_total_pln": 85415.69,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 120000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 150000.0,
              "area": "64 m2",
              "legal_title": "własność",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Renault / pojazd elektryczny 2014, odczyt roboczy",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Renault / pojazd elektryczny 2014, odczyt roboczy",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 270000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 50940.12,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "employment",
              "payer": "Umowa o pracę",
              "description": "Umowa o pracę",
              "amount_pln": 34475.57,
              "raw_text": "Umowa o pracę",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: ok. 120000 zł; waluty i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nieruchomości: nie dotyczy poza wskazanym mieszkaniem w 2024.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dieta radnego oraz dochody z pracy/innych umów.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Renault / pojazd elektryczny 2014, odczyt roboczy",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 150000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 81,
      "name": "Włodarczyk Maja",
      "slug": "wlodarczyk-maja",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 356,
          "year": 2024,
          "statement_date": "2024-06-05",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/wlodarczyk_maja_240605.pdf",
          "file_path": "data\\raw\\wlodarczyk-maja\\2024_d545d143c3fc.pdf",
          "confidence": "low",
          "notes": "Włodarczyk 2024: handwritten form; securities amount is a low-confidence working read.",
          "assets_value_pln": 7600.0,
          "income_total_pln": 0,
          "liabilities_total_pln": 0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 5000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            },
            {
              "section_code": "I",
              "asset_type": "securities",
              "description": "Papiery wartościowe / akcje, odczyt roboczy",
              "value_pln": 2600.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Papiery wartościowe / akcje, odczyt roboczy",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 7600.0,
          "incomes": [],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 5000 zł; papiery wartościowe: 2600.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diety radnego, jeśli wykazane w formularzu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 399,
          "year": 2025,
          "statement_date": "2025-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/wlodarczyk_maja_2025.pdf",
          "file_path": "data\\raw\\wlodarczyk-maja\\2025_3ac9c198c6ff.pdf",
          "confidence": "low",
          "notes": "Włodarczyk 2025: handwritten income entry is a low-confidence working read.",
          "assets_value_pln": 20000.0,
          "income_total_pln": 5759.0,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 20000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 5759.0,
              "raw_text": "Dieta radnego",
              "confidence": "low"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20000 zł; papiery wartościowe: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diety radnego, jeśli wykazane w formularzu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        },
        {
          "id": 81,
          "year": 2026,
          "statement_date": "2026-04-30",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/wlodarczyk_maja_2026.pdf",
          "file_path": "data\\raw\\wlodarczyk-maja\\2026_c8fce73efd70.pdf",
          "confidence": "medium",
          "notes": "Włodarczyk 2026: manual review from contact sheet; income value is readable but handwritten.",
          "assets_value_pln": 20000.0,
          "income_total_pln": 48588.04,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 20000.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 48588.04,
              "raw_text": "Dieta radnego",
              "confidence": "medium"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne: 20000 zł; papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Dochody z diety radnego, jeśli wykazane w formularzu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Nie dotyczy według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    },
    {
      "id": 74,
      "name": "Ścibor Kamila",
      "slug": "scibor-kamila",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 344,
          "year": 2024,
          "statement_date": "2024-06-03",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/scibor_kamila_240603.pdf",
          "file_path": "data\\raw\\scibor-kamila\\2024_8779ea9237a5.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1208238.0,
          "income_total_pln": 32858.92,
          "liabilities_total_pln": 240159.06,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 20000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka leśna",
              "value_pln": 128238.0,
              "area": "3886 m2",
              "legal_title": "małżeńska wspólność majątkowa",
              "ownership": "",
              "raw_text": "Działka leśna",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka z pawilonem handlowym",
              "value_pln": 585000.0,
              "area": "udział 538/3968",
              "legal_title": "małżeńska wspólność majątkowa",
              "ownership": "",
              "raw_text": "Działka z pawilonem handlowym",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka drogowa i działka budowlana",
              "value_pln": 25000.0,
              "area": "50 m2 i 70 m2",
              "legal_title": "małżeńska wspólność majątkowa",
              "ownership": "",
              "raw_text": "Działka drogowa i działka budowlana",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka budowlano-przemysłowa",
              "value_pln": 450000.0,
              "area": "808 m2",
              "legal_title": "małżeńska wspólność majątkowa",
              "ownership": "",
              "raw_text": "Działka budowlano-przemysłowa",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Mazda RX8 2007",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Mazda RX8 2007",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Skoda Fabia 2013",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Skoda Fabia 2013",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Fiat Panda 2014",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Fiat Panda 2014",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "BMW 330 2008",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "BMW 330 2008",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Mercedes Vito 2011",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Mercedes Vito 2011",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "VW ID.Buzz 2022",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "VW ID.Buzz 2022",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Citroen Hobby 2021",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Citroen Hobby 2021",
              "confidence": "medium"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Citroen C0 2011",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Citroen C0 2011",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1208238.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego osiedla",
              "amount_pln": 858.92,
              "raw_text": "Dieta radnego osiedla",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem powierzchni biurowych",
              "description": "Wynajem powierzchni biurowych",
              "amount_pln": 32000.0,
              "raw_text": "Wynajem powierzchni biurowych",
              "confidence": "medium"
            }
          ],
          "liabilities": [
            {
              "creditor": "Bank Millennium",
              "description": "Kredyt obrotowy, wykorzystanie na dzień oświadczenia",
              "amount_pln": 22931.13,
              "currency": "PLN",
              "raw_text": "Kredyt obrotowy, wykorzystanie na dzień oświadczenia",
              "confidence": "medium"
            },
            {
              "creditor": "Bank Millennium",
              "description": "Kredyt firmowy z 11.2022, pozostało do spłaty",
              "amount_pln": 217227.93,
              "currency": "PLN",
              "raw_text": "Kredyt firmowy z 11.2022, pozostało do spłaty",
              "confidence": "medium"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 20000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie i/lub działki odczytane z części II formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety i dochody z wynajmu według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Mazda RX8 2007; Skoda Fabia 2013; Fiat Panda 2014; BMW 330 2008; Mercedes Vito 2011; VW ID.Buzz 2022; Citroen Hobby 2021; Citroen C0 2011",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania bankowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 391,
          "year": 2025,
          "statement_date": "2025-04-23",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/scibor_kamila_2025.pdf",
          "file_path": "data\\raw\\scibor-kamila\\2025_3431a866b01d.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 1547238.0,
          "income_total_pln": 175005.16,
          "liabilities_total_pln": 0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 29000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 355000.0,
              "area": "54,36 m2",
              "legal_title": "majątek odrębny, nabyty w drodze spadku",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka leśna",
              "value_pln": 128238.0,
              "area": "3886 m2, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka leśna",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka z pawilonem handlowym",
              "value_pln": 585000.0,
              "area": "udział 538/3968, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka z pawilonem handlowym",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka budowlano-przemysłowa",
              "value_pln": 450000.0,
              "area": "808 m2, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka budowlano-przemysłowa",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Citroen C0 2011",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Citroen C0 2011",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1547238.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta rady osiedla",
              "amount_pln": 1259.75,
              "raw_text": "Dieta rady osiedla",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 77745.41,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem powierzchni biurowych",
              "description": "Wynajem powierzchni biurowych",
              "amount_pln": 96000.0,
              "raw_text": "Wynajem powierzchni biurowych",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 29000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie i/lub działki odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety i dochody z wynajmu według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Citroen C0 2011",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 163994.84,
              "metrics": {
                "income_pln": 175005.16,
                "asset_delta_pln": 339000.0,
                "debt_delta_pln": -240159.06
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Mieszkanie",
                "value_pln": 355000.0
              },
              {
                "label": "Działka leśna",
                "value_pln": 128238.0
              },
              {
                "label": "Działka z pawilonem handlowym",
                "value_pln": 585000.0
              },
              {
                "label": "Działka budowlano-przemysłowa",
                "value_pln": 450000.0
              }
            ]
          }
        },
        {
          "id": 74,
          "year": 2026,
          "statement_date": "2026-04-27",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/scibor_kamila_2026.pdf",
          "file_path": "data\\raw\\scibor-kamila\\2026_da63ab34f294.pdf",
          "confidence": "high",
          "notes": "Manual review from rendered contact sheets. Data year in UI is filing year minus one.",
          "assets_value_pln": 2123238.0,
          "income_total_pln": 145262.05,
          "liabilities_total_pln": 0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne w walucie polskiej",
              "value_pln": 42000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne w walucie polskiej",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 370000.0,
              "area": "54,36 m2",
              "legal_title": "majątek odrębny, nabyty w drodze spadku",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka leśna",
              "value_pln": 128238.0,
              "area": "2508,93 m2, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka leśna",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka budowlana",
              "value_pln": 548000.0,
              "area": "1377,07 m2, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka budowlana",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka z pawilonem handlowym",
              "value_pln": 585000.0,
              "area": "udział 538/3968",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka z pawilonem handlowym",
              "confidence": "high"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Działka budowlano-przemysłowa",
              "value_pln": 450000.0,
              "area": "808 m2, udział 1/2",
              "legal_title": "majątek odrębny",
              "ownership": "",
              "raw_text": "Działka budowlano-przemysłowa",
              "confidence": "high"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "Citroen C0 2011, udział 1/2",
              "value_pln": null,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Citroen C0 2011, udział 1/2",
              "confidence": "high"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 2123238.0,
          "incomes": [
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska / rada osiedla",
              "description": "Dieta radnego",
              "amount_pln": 49562.05,
              "raw_text": "Dieta radnego",
              "confidence": "high"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem powierzchni lokali",
              "description": "Wynajem powierzchni lokali",
              "amount_pln": 95700.0,
              "raw_text": "Wynajem powierzchni lokali",
              "confidence": "high"
            }
          ],
          "liabilities": [],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne w PLN: 42000 zł; waluty obce i papiery wartościowe: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Mieszkanie i/lub działki odczytane z części II formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Prowadzona działalność gospodarcza: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach handlowych: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety i dochody z wynajmu według formularza.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Citroen C0 2011, udział 1/2",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Zobowiązania: nie dotyczy.",
              "confidence": "high",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "asset_jump",
              "severity": "medium",
              "title": "Skok majątku większy niż deklarowane źródła",
              "description": "Wzrost aktywów jest większy niż suma dochodu i wzrostu zadłużenia w tym okresie.",
              "amount_pln": 430737.95,
              "metrics": {
                "income_pln": 145262.05,
                "asset_delta_pln": 576000.0,
                "debt_delta_pln": 0
              }
            }
          ],
          "anomaly_score": 1,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Działka leśna",
                "value_pln": 128238.0
              },
              {
                "label": "Działka budowlana",
                "value_pln": 548000.0
              },
              {
                "label": "Działka z pawilonem handlowym",
                "value_pln": 585000.0
              }
            ]
          }
        }
      ]
    },
    {
      "id": 82,
      "name": "Żuraw Elżbieta",
      "slug": "zuraw-elzbieta",
      "role": "Radny/Radna",
      "category": "Radni",
      "statements": [
        {
          "id": 357,
          "year": 2024,
          "statement_date": "2024-06-05",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_24/zuraw_elzbieta_240605.pdf",
          "file_path": "data\\raw\\zuraw-elzbieta\\2024_d84d71fea5a1.pdf",
          "confidence": "low",
          "notes": "Manual review from rendered contact sheets. Handwritten values are working reads.",
          "assets_value_pln": 1275800.0,
          "income_total_pln": 22374.0,
          "liabilities_total_pln": 267728.0,
          "filing_year": 2024,
          "report_year": 2023,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne i lokaty w PLN",
              "value_pln": 40800.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne i lokaty w PLN",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 370000.0,
              "area": "64,4 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 450000.0,
              "area": "99,6 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "low"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział w nieruchomości z domem i działką",
              "value_pln": 400000.0,
              "area": "350 m2 domu, 1000 m2 działki",
              "legal_title": "współwłasność w udziale 12,5%, tytuł spadku",
              "ownership": "",
              "raw_text": "Udział w nieruchomości z domem i działką",
              "confidence": "low"
            },
            {
              "section_code": "IX",
              "asset_type": "vehicle",
              "description": "VW Golf 5, 2007",
              "value_pln": 15000.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "VW Golf 5, 2007",
              "confidence": "low"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1275800.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Polska Press / ProMedia",
              "description": "Funkcja w spółce, odczyt ręczny",
              "amount_pln": 0.0,
              "raw_text": "Funkcja w spółce, odczyt ręczny",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "association_income",
              "payer": "Stowarzyszenie / repertuar",
              "description": "Stowarzyszenie / repertuar",
              "amount_pln": 200.0,
              "raw_text": "Stowarzyszenie / repertuar",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego",
              "amount_pln": 17174.0,
              "raw_text": "Dieta radnego",
              "confidence": "low"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem mieszkania",
              "description": "Wynajem mieszkania",
              "amount_pln": 5000.0,
              "raw_text": "Wynajem mieszkania",
              "confidence": "low"
            }
          ],
          "liabilities": [
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny, odczyt ręczny",
              "amount_pln": 245500.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, odczyt ręczny",
              "confidence": "low"
            },
            {
              "creditor": "InBank",
              "description": "Kredyt gotówkowy, odczyt ręczny",
              "amount_pln": 22228.0,
              "currency": "PLN",
              "raw_text": "Kredyt gotówkowy, odczyt ręczny",
              "confidence": "low"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, lokaty i papiery wartościowe według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom, mieszkanie i udział w nieruchomości spadkowej.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i papiery wartościowe według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza zawieszona / bez dochodu.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach Polska Press / ProMedia.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety, najem i inne dochody.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "VW Golf 5, 2007",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Kredyty hipoteczne/gotówkowe według formularza.",
              "confidence": "low",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0
        },
        {
          "id": 400,
          "year": 2025,
          "statement_date": "2025-04-25",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_SS_25/zuraw_elzbieta_2025.pdf",
          "file_path": "data\\raw\\zuraw-elzbieta\\2025_5a85b032247f.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Handwritten values are working reads.",
          "assets_value_pln": 1338375.13,
          "income_total_pln": 422471.43,
          "liabilities_total_pln": 51895.0,
          "filing_year": 2025,
          "report_year": 2024,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne i lokaty w PLN",
              "value_pln": 111645.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne i lokaty w PLN",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 370000.0,
              "area": "64,4 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 450000.0,
              "area": "99,6 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział w nieruchomości z domem i działką",
              "value_pln": 400000.0,
              "area": "działka 35 arów, dom ok. 200 m2",
              "legal_title": "współwłasność w udziale 12,5%, tytuł spadku",
              "ownership": "",
              "raw_text": "Udział w nieruchomości z domem i działką",
              "confidence": "medium"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje i papiery wartościowe",
              "value_pln": 6730.13,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje i papiery wartościowe",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1338375.13,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Polska Press / ProMedia",
              "description": "Dochód z funkcji w zarządzie",
              "amount_pln": 356827.43,
              "raw_text": "Dochód z funkcji w zarządzie",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "copyright_income",
              "payer": "Tytuł własnych praw / art. 35",
              "description": "Tytuł własnych praw / art. 35",
              "amount_pln": 3530.0,
              "raw_text": "Tytuł własnych praw / art. 35",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego",
              "amount_pln": 58614.0,
              "raw_text": "Dieta radnego miejskiego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem mieszkania",
              "description": "Wynajem mieszkania",
              "amount_pln": 3500.0,
              "raw_text": "Wynajem mieszkania",
              "confidence": "medium"
            }
          ],
          "liabilities": [
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny BOK/BIK, pozostało do spłaty",
              "amount_pln": 28795.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny BOK/BIK, pozostało do spłaty",
              "confidence": "medium"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny, pozostało do spłaty",
              "amount_pln": 5425.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, pozostało do spłaty",
              "confidence": "medium"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny, pozostało do spłaty",
              "amount_pln": 17675.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, pozostało do spłaty",
              "confidence": "medium"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, lokaty i papiery wartościowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom, mieszkanie i udział w nieruchomości spadkowej.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i papiery wartościowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza zawieszona / bez dochodu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach Polska Press / ProMedia.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety, najem i inne dochody.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Kredyty hipoteczne/gotówkowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [],
          "anomaly_score": 0,
          "asset_changes": {
            "new_significant_assets": [
              {
                "label": "Środki pieniężne i lokaty w PLN",
                "value_pln": 111645.0
              },
              {
                "label": "Udział w nieruchomości z domem i działką",
                "value_pln": 400000.0
              }
            ]
          }
        },
        {
          "id": 82,
          "year": 2026,
          "statement_date": "2026-04-29",
          "source_url": "https://bip.uml.lodz.pl/files/bip/public/BIP_MW_26/zuraw_elzbieta_2026.pdf",
          "file_path": "data\\raw\\zuraw-elzbieta\\2026_f220014f2f5a.pdf",
          "confidence": "medium",
          "notes": "Manual review from rendered contact sheets. Handwritten values are working reads.",
          "assets_value_pln": 1398314.0,
          "income_total_pln": 794977.11,
          "liabilities_total_pln": 323.0,
          "filing_year": 2026,
          "report_year": 2025,
          "assets": [
            {
              "section_code": "I",
              "asset_type": "cash_pln",
              "description": "Środki pieniężne i lokaty w PLN",
              "value_pln": 157330.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Środki pieniężne i lokaty w PLN",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_flat",
              "description": "Mieszkanie",
              "value_pln": 370000.0,
              "area": "64,4 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Mieszkanie",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_house",
              "description": "Dom",
              "value_pln": 450000.0,
              "area": "99,6 m2",
              "legal_title": "własność indywidualna / kredyt hipoteczny",
              "ownership": "",
              "raw_text": "Dom",
              "confidence": "medium"
            },
            {
              "section_code": "II",
              "asset_type": "real_estate_land",
              "description": "Udział w nieruchomości z domem i działką",
              "value_pln": 400000.0,
              "area": "działka 35 arów, dom ok. 200 m2",
              "legal_title": "współwłasność w udziale 12,5%, tytuł spadku",
              "ownership": "",
              "raw_text": "Udział w nieruchomości z domem i działką",
              "confidence": "medium"
            },
            {
              "section_code": "IV",
              "asset_type": "securities",
              "description": "Akcje i papiery wartościowe",
              "value_pln": 20984.0,
              "area": "",
              "legal_title": "",
              "ownership": "",
              "raw_text": "Akcje i papiery wartościowe",
              "confidence": "medium"
            }
          ],
          "assets_estimated_extra_pln": 0,
          "assets_estimated_total_pln": 1398314.0,
          "incomes": [
            {
              "section_code": "VII",
              "income_type": "company_role_income",
              "payer": "Polska Press / ProMedia",
              "description": "Dochód z funkcji w zarządzie",
              "amount_pln": 697078.78,
              "raw_text": "Dochód z funkcji w zarządzie",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "association_income",
              "payer": "Stowarzyszenie wydawców Repropol",
              "description": "Stowarzyszenie wydawców Repropol",
              "amount_pln": 200.0,
              "raw_text": "Stowarzyszenie wydawców Repropol",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "council_allowance",
              "payer": "Rada Miejska w Łodzi",
              "description": "Dieta radnego miejskiego",
              "amount_pln": 49348.33,
              "raw_text": "Dieta radnego miejskiego",
              "confidence": "medium"
            },
            {
              "section_code": "VIII",
              "income_type": "rental_income",
              "payer": "Wynajem mieszkania",
              "description": "Wynajem mieszkania",
              "amount_pln": 48350.0,
              "raw_text": "Wynajem mieszkania",
              "confidence": "medium"
            }
          ],
          "liabilities": [
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny BOK/BIK, pozostało do spłaty",
              "amount_pln": 230.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny BOK/BIK, pozostało do spłaty",
              "confidence": "medium"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny, pozostało do spłaty",
              "amount_pln": 13.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, pozostało do spłaty",
              "confidence": "medium"
            },
            {
              "creditor": "mBank",
              "description": "Kredyt hipoteczny, pozostało do spłaty",
              "amount_pln": 80.0,
              "currency": "PLN",
              "raw_text": "Kredyt hipoteczny, pozostało do spłaty",
              "confidence": "medium"
            }
          ],
          "sections": [
            {
              "section_code": "I",
              "section_title": "Środki pieniężne i papiery wartościowe",
              "pillar": "assets",
              "raw_text": "Środki pieniężne, lokaty i papiery wartościowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "II",
              "section_title": "Nieruchomości",
              "pillar": "assets",
              "raw_text": "Dom, mieszkanie i udział w nieruchomości spadkowej.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "III",
              "section_title": "Udziały w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Udziały w spółkach: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IV",
              "section_title": "Akcje w spółkach handlowych",
              "pillar": "assets",
              "raw_text": "Akcje i papiery wartościowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "V",
              "section_title": "Mienie nabyte od Skarbu Państwa lub samorządu",
              "pillar": "assets",
              "raw_text": "Mienie nabyte od Skarbu Państwa lub samorządu: nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VI",
              "section_title": "Prowadzona działalność gospodarcza",
              "pillar": "earnings",
              "raw_text": "Działalność gospodarcza zawieszona / bez dochodu.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VII",
              "section_title": "Funkcje w spółkach handlowych i dochody",
              "pillar": "earnings",
              "raw_text": "Funkcje w spółkach Polska Press / ProMedia.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "VIII",
              "section_title": "Inne dochody",
              "pillar": "earnings",
              "raw_text": "Diety, najem i inne dochody.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "IX",
              "section_title": "Składniki mienia ruchomego powyżej 10 000 zł",
              "pillar": "assets",
              "raw_text": "Nie dotyczy.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            },
            {
              "section_code": "X",
              "section_title": "Zobowiązania pieniężne",
              "pillar": "debts",
              "raw_text": "Kredyty hipoteczne/gotówkowe według formularza.",
              "confidence": "medium",
              "review_status": "manual_reviewed",
              "structured": {}
            }
          ],
          "anomalies": [
            {
              "type": "income_gap",
              "severity": "high",
              "title": "Dochód nie widać w zmianie majątku",
              "description": "Deklarowany dochód jest wyraźnie wyższy niż wzrost majątku netto. Może to oznaczać wydatki, transfery, spłatę pozycji niewidocznych w formularzu albo brak pełnego odzwierciedlenia w aktywach.",
              "amount_pln": 683466.24,
              "metrics": {
                "income_pln": 794977.11,
                "net_delta_pln": 111510.87,
                "asset_delta_pln": 59938.87,
                "debt_delta_pln": -51572.0
              }
            }
          ],
          "anomaly_score": 2,
          "asset_changes": {
            "new_significant_assets": []
          }
        }
      ]
    }
  ]
};
