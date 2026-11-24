"""Shared helpers for the checks. You do not need to read this file.

The SQL checks work like this: sqlglot translates your T-SQL into DuckDB's dialect, DuckDB runs it on
the project data, and the answers are compared with the known-good answers in checks/expected/.
DuckDB is NOT SQL Server. It is a good test of your logic, not of SQL Server behaviour.
"""
import re
from pathlib import Path

import duckdb
import pandas as pd
import sqlglot

ROOT = Path(__file__).resolve().parent.parent
EXPECTED = ROOT / "checks" / "expected"
RAW_COLUMNS = ["ReferralID", "ReferredDate", "TestType", "Priority", "SampleReceivedDate", "SequencedDate", "ReportedDate"]


def expected(name, **kwargs):
    return pd.read_csv(EXPECTED / name, **kwargs)


def sql_statements(script_name):
    """Read sql/<script_name>, remove comments, split on GO, translate each batch to DuckDB."""
    path = ROOT / "sql" / script_name
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)
    text = re.sub(r"--[^\n]*", "", text)
    if not text.strip():
        raise AssertionError(f"sql/{script_name} is empty. Write it (the brief is in the comment at the top).")
    batches = [b.strip() for b in re.split(r"^\s*GO\s*$", text, flags=re.MULTILINE | re.IGNORECASE) if b.strip()]
    result = []
    for batch in batches:
        try:
            result.extend(sqlglot.transpile(batch, read="tsql", write="duckdb"))
        except Exception as error:      # sqlglot could not read it
            first = " ".join(str(error).split())[:300]
            raise AssertionError(f"The checker could not read a statement in sql/{script_name}: {first}\n"
                                 "Look for a typo first. If the T-SQL is valid, the checker may not support it: tell your tutor.")
    return result


def build_database(with_clean=False):
    """An in-memory DuckDB with the project tables. with_clean=True also fills dbo.Referrals with the known-good clean rows."""
    con = duckdb.connect()
    con.execute("CREATE SCHEMA dbo")
    con.execute(f"""CREATE TABLE dbo.Referrals_Raw AS SELECT * FROM read_csv('{(ROOT / "data/referrals_raw.csv").as_posix()}',
                    all_varchar = true, header = true,
                    names = ['ReferralID', 'ReferredDate', 'TestType', 'Priority', 'SampleReceivedDate', 'SequencedDate', 'ReportedDate'])""")
    con.execute("""CREATE TABLE dbo.Referrals (
        ReferralID VARCHAR, ReferredDate DATE, TestType VARCHAR, Priority VARCHAR,
        SampleReceivedDate DATE, SequencedDate DATE, ReportedDate DATE,
        ReferredWeek DATE GENERATED ALWAYS AS (date_trunc('week', ReferredDate)::DATE),
        SampleReceivedWeek DATE GENERATED ALWAYS AS (date_trunc('week', SampleReceivedDate)::DATE),
        SequencedWeek DATE GENERATED ALWAYS AS (date_trunc('week', SequencedDate)::DATE),
        ReportedWeek DATE GENERATED ALWAYS AS (date_trunc('week', ReportedDate)::DATE))""")
    con.execute("CREATE TABLE dbo.Referrals_Rejected (ReferralID VARCHAR, RejectReason VARCHAR)")
    con.execute(f"""CREATE TABLE dbo.CapacityWeekly AS SELECT CAST(week_start AS DATE) AS WeekStart,
                    CAST(sequencing_capacity AS INT) AS SequencingCapacity FROM read_csv('{(ROOT / "data/capacity_weekly.csv").as_posix()}')""")
    if with_clean:
        con.execute(f"""INSERT INTO dbo.Referrals (ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate)
                        SELECT referral_id, CAST(referred_date AS DATE), test_type, priority, CAST(sample_received_date AS DATE),
                               CAST(sequenced_date AS DATE), CAST(reported_date AS DATE)
                        FROM read_csv('{(EXPECTED / "clean_referrals.csv").as_posix()}')""")
    return con


def run_script(con, script_name):
    """Run every statement of the script. Return the results of the SELECT statements, in order."""
    results = []
    for sql in sql_statements(script_name):
        try:
            cursor = con.execute(sql)
        except Exception as error:
            raise AssertionError(f"sql/{script_name} failed when it ran: {' '.join(str(error).split())[:400]}\n"
                                 f"The statement began: {sql[:120]!r}")
        if sql.lstrip().upper().startswith("SELECT") or sql.lstrip().upper().startswith("WITH"):
            results.append(cursor.fetchdf())
    return results


def lower_columns(frame):
    frame = frame.copy()
    frame.columns = [c.lower() for c in frame.columns]
    return frame


def script_text(script_name):
    """The script without comments, in upper case."""
    text = (ROOT / "sql" / script_name).read_text(encoding="utf-8")
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)
    return re.sub(r"--[^\n]*", "", text).upper()


def column_expression(script_name, alias):
    """The text of the SELECT-list column that ends with  AS <alias>."""
    text = script_text(script_name)
    end = text.find("AS " + alias.upper())
    assert end >= 0, f"Could not find a column called {alias} in sql/{script_name}. Use  AS {alias}."
    depth, i = 0, end - 1
    while i >= 0:
        ch = text[i]
        if ch == ")":
            depth += 1
        elif ch == "(":
            depth -= 1
        elif ch == "," and depth == 0:
            break
        i -= 1
    return text[i + 1:end]


def uses_decimal_arithmetic(expression):
    """True if the expression casts to a decimal type or uses a decimal number such as 1.0 or 100.0."""
    return bool(re.search(r"CAST\s*\(|CONVERT\s*\(|\d\.\d", expression))
