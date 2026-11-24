# Step 12 (optional): Run it on a real SQL Server

**Goal:** prove the T-SQL runs on SQL Server, then move data between Python and SQL Server.

**Not checked by the tests.** The checks run your SQL in DuckDB. I could not reach a real SQL Server to test this step, so there is no automatic check here. Use it when you have a dev server (Developer edition, or Docker) and after course Module 4.

## Part A: run your SQL on SQL Server

1. Get a SQL Server you may break. **Do not use a work or live server.** Options: Developer edition (free), or Docker `mcr.microsoft.com/mssql/server:2022-latest`.
2. Edit the two file paths in `sql/01_create_tables.sql` (`BULK INSERT` reads the path as the **server's service account, on the server's drives**).
3. Run `01`, then `02`, `03`, `04`, in SSMS, Azure Data Studio or `sqlcmd`.
4. Compare with the Python results: `SELECT * FROM dbo.vw_WeeklySummary ORDER BY WeekStart;` and the files in `output/`.

Things to expect, and what they teach:
- `CREATE OR ALTER VIEW` needs SQL Server 2016 SP1 or later. `FORMAT = 'CSV'` in `BULK INSERT` needs 2017 or later.
- If the row counts differ from Step 2 (read 8717, loaded 8677, rejected 15), find out why before anything else.
- If `Utilisation` is 0 for most weeks, you have whole-number division (Step 3).
- If a date column has `1900-01-01` values, you have the empty-text trap (Step 2).
- Errors in a batch: SSMS carries on with the next batch. Read **all** the messages.

Write what broke, and how you fixed it, in `notes/decisions.md`. It is the best material for the interview question "what went wrong?".

## Part B: Python and SQL Server (after Module 4)

Tasks, in order. Write them as separate small scripts. Keep secrets out of the code (use environment variables).

1. Connect with `pyodbc` or SQLAlchemy and run `SELECT COUNT(*) FROM dbo.Referrals`.
2. Read `dbo.vw_WeeklySummary` into a DataFrame with a **parameterised** query, and compare it with `output/weekly_summary.csv` in code.
3. Write the Python results (the forecast) back to a table you create, in **one transaction**. A failure must leave the table as it was.
4. Add logging, and a `pytest` test for the comparison.

Hints for the interview: be ready to say why you use parameters and not string-building, and what "one transaction" protects you from.
