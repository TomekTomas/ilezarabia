# lodz-oswiadczenia

MVP open-source projektu do pobierania oświadczeń majątkowych łódzkich radnych z BIP i budowania bazy do dalszej analizy.

## Szybki start

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python etl/download_statements.py --out data/raw --index data/statements_index.csv
```

## Co robi skrypt

- pobiera stronę wyszukiwarki oświadczeń,
- wyszukuje linki do dokumentów (`pdf/jpg/png/doc/docx`),
- pobiera pliki do `data/raw/<radny>/...`,
- zapisuje indeks CSV z metadanymi: osoba, rok, URL, ścieżka, status.

## Następne kroki

1. Rozszerzyć crawler o paginację/filtry, jeśli źródło ich wymaga.
2. Dodać parser/OCR i zapis do bazy SQLite/PostgreSQL.
3. Wystawić API i frontend z wykresami trendów.


## Parser v0 -> SQLite

Po pobraniu plików możesz zbudować prostą bazę SQLite (MVP):

```bash
python etl/parse_statements_v0.py --index data/statements_index.csv --db data/statements_v0.db
```

Uwaga: parser v0 przetwarza tylko pliki `.txt` (heurystyki po słowach kluczowych).
To celowy etap przejściowy przed dodaniem OCR/PDF parsera.


## Tryb bez zależności (stdlib)

Jeśli instalacja `pip` jest zablokowana, użyj wersji bez bibliotek zewnętrznych:

```bash
python etl/download_statements_stdlib.py --out data/raw --index data/statements_index.csv
```

Ten wariant używa tylko standardowej biblioteki Pythona.


### Resume + pagination

Aby ściągać „wszystko” i móc wznawiać po przerwaniu:

```bash
python etl/download_statements_stdlib.py --out data/raw --index data/statements_index.csv --max-pages 80
```

- skrypt dopisuje tylko nowe URL-e do indeksu (resume),
- przeszukuje wiele stron w obrębie domeny BIP (`--max-pages`).


### Retry + raport JSON

Przykład uruchomienia z retry i raportem:

```bash
python etl/download_statements_stdlib.py --out data/raw --index data/statements_index.csv --max-pages 80 --retries 5 --backoff 1.2 --report data/download_report.json
```

Raport JSON zawiera m.in. `downloaded_now`, `errors`, `skipped_existing`.


## Ekstrakcja przez model vision OpenAI

Lokalny OCR bywa zbyt słaby dla skanów formularzy. Do dokładniejszej ekstrakcji
można użyć modelu vision przez OpenAI API:

```powershell
$env:OPENAI_API_KEY="sk-..."
python etl/extract_with_openai.py --index data/statements_index.csv --out data/openai_extracted.jsonl --limit 5
```

Skrypt wysyła PDF jako wejście plikowe i zapisuje jeden obiekt JSON na dokument.
Wynik trafia do `data/openai_extracted.jsonl`.


## Baza analityczna

Do właściwej analizy używamy znormalizowanej bazy SQLite:

```powershell
python etl/init_analysis_db.py --index data/statements_index.csv --db data/analysis.db
```

Model danych odzwierciedla sekcje formularza I-X i trzy filary analizy:

- `assets`: I środki pieniężne/papiery, II nieruchomości, III udziały, IV akcje, V mienie nabyte od Skarbu Państwa/samorządu, IX ruchomości powyżej 10000 zł,
- `earnings`: VI działalność gospodarcza, VII funkcje w spółkach i dochody, VIII inne dochody,
- `debts`: X zobowiązania pieniężne.

Najważniejsze tabele:

- `people` - osoby/radni,
- `statements` - pojedyncze oświadczenia/PDF-y,
- `statement_sections` - zawsze 10 rekordów na oświadczenie, po jednym dla sekcji I-X,
- `asset_items`, `income_items`, `liability_items` - zweryfikowane pozycje wyciągnięte z sekcji,
- `statement_pillars` - widok agregujący majątek, zarobki i kredyty.
## Serwis WWW

Pierwsza wersja frontendu jest statyczna i korzysta z danych wyeksportowanych z
`data/analysis.db`:

```powershell
python etl/export_web_data.py --db data/analysis.db --out web/data.js
python -m http.server 8000 --bind 127.0.0.1 --directory web
```

Nastepnie otworz `http://127.0.0.1:8000`.

Frontend pokazuje:

- porownanie trzech filarow w czasie,
- rozbicie majatku na typy pozycji,
- rozbicie dochodow na rodzaje przychodow,
- zobowiazania z wierzycielem i opisem,
- podglad sekcji formularza I-X.
