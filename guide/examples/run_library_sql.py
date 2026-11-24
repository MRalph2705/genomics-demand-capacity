"""Run library_sql.sql in DuckDB (through sqlglot), the same way the project checks run your SQL."""
import re
from pathlib import Path

import duckdb
import pandas as pd
import sqlglot

HERE = Path(__file__).resolve().parent
RAW = [("L1", "2025-03-03", "Book", "adult", "2025-03-10"), ("L2", "2025-03-04", " dvd ", "Child", "2025-03-12"),
       ("L3", "2025-03-05", "BOOK", "adult", ""), ("L4", "2025-03-10", "Book", "adult", "2025-03-09"),
       ("L5", "2025-03-11", "Game", "adult", "2025-03-20"), ("L6", "2025-03-12", "Book", "adult", "2025-03-30"),
       ("L6", "2025-03-12", "Book", "adult", "2025-03-30"), ("L7", "2025-03-18", "Book", "teen", "2025-03-24"),
       ("L8", "", "Book", "adult", "2025-03-24"), ("L9", "2025-03-19", "Book", "adult", "")]


def week(column):
    return f"date_trunc('week', {column})::DATE"


def main():
    con = duckdb.connect()
    con.execute("CREATE SCHEMA dbo")
    con.execute("CREATE TABLE dbo.Loans_Raw (LoanID VARCHAR, Borrowed VARCHAR, ItemType VARCHAR, MemberType VARCHAR, Returned VARCHAR)")
    con.executemany("INSERT INTO dbo.Loans_Raw VALUES (?, ?, ?, ?, ?)", RAW)
    text = re.sub(r"/\*.*?\*/", "", (HERE / "library_sql.sql").read_text(encoding="utf-8"), flags=re.S)
    text = re.sub(r"--[^\n]*", "", text)
    batches = [b.strip() for b in re.split(r"^\s*GO\s*$", text, flags=re.M | re.I) if b.strip()]
    pd.set_option("display.width", 160)
    for number, batch in enumerate(batches, 1):
        for statement in sqlglot.transpile(batch, read="tsql", write="duckdb"):
            if "LoansClean" in statement and number == 3 and not con.execute(
                    "SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'loansclean'").fetchone()[0]:
                # In real life dbo.LoansClean is filled by the load. Here we make it from the view and add a calendar.
                con.execute(f"""CREATE TABLE dbo.LoansClean AS SELECT LoanID, Borrowed, ItemType, MemberType, Returned,
                                {week('Borrowed')} AS BorrowedWeek, {week('Returned')} AS ReturnedWeek
                                FROM dbo.vw_LoansChecked WHERE RejectReason IS NULL""")
                con.execute("CREATE TABLE dbo.Calendar AS SELECT CAST(range AS DATE) AS WeekStart FROM range(DATE '2025-03-03', DATE '2025-03-31', INTERVAL 7 DAY)")
            result = con.execute(statement)
            if statement.lstrip().upper().startswith("SELECT"):
                print(result.fetchdf().to_string(index=False), "\n")


if __name__ == "__main__":
    main()
