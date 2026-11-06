"""Check the T-SQL scripts against the pandas results.

SQL Server is not needed. sqlglot translates each T-SQL statement to DuckDB, DuckDB runs it
and the numbers are compared with the files in output/. Two things are set up by hand because
they are SQL Server only: the BULK INSERT load, and the week columns (DuckDB's own date_trunc
is used there, so the week logic is checked by a second method).

Run from the project folder:  python tests/check_sql_with_duckdb.py
Needs: pip install duckdb sqlglot
"""
import re
import sys
from pathlib import Path

import duckdb
import pandas as pd
import sqlglot

ROOT = Path(__file__).resolve().parent.parent


def statements(script_name):
    """Split a script on GO lines and translate each batch to DuckDB SQL."""
    text = (ROOT / "sql" / script_name).read_text(encoding="utf-8")
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)        # remove /* ... */ comments
    text = re.sub(r"--[^\n]*", "", text)                           # remove -- comments
    batches = [b.strip() for b in re.split(r"^\s*GO\s*$", text, flags=re.MULTILINE | re.IGNORECASE) if b.strip()]
    result = []
    for batch in batches:
        result.extend(sqlglot.transpile(batch, read="tsql", write="duckdb"))
    return result


def build_database():
    con = duckdb.connect()
    con.execute("CREATE SCHEMA dbo")
    con.execute(f"""CREATE TABLE dbo.Referrals_Raw AS
                    SELECT * FROM read_csv('{ROOT / "data/referrals_raw.csv"}', all_varchar = true, header = true,
                    names = ['ReferralID', 'ReferredDate', 'TestType', 'Priority',
                             'SampleReceivedDate', 'SequencedDate', 'ReportedDate'])""")
    con.execute("""CREATE TABLE dbo.Referrals (
        ReferralID VARCHAR, ReferredDate DATE, TestType VARCHAR, Priority VARCHAR,
        SampleReceivedDate DATE, SequencedDate DATE, ReportedDate DATE,
        ReferredWeek DATE GENERATED ALWAYS AS (date_trunc('week', ReferredDate)::DATE),
        SampleReceivedWeek DATE GENERATED ALWAYS AS (date_trunc('week', SampleReceivedDate)::DATE),
        SequencedWeek DATE GENERATED ALWAYS AS (date_trunc('week', SequencedDate)::DATE),
        ReportedWeek DATE GENERATED ALWAYS AS (date_trunc('week', ReportedDate)::DATE))""")
    con.execute("CREATE TABLE dbo.Referrals_Rejected (ReferralID VARCHAR, RejectReason VARCHAR)")
    con.execute(f"""CREATE TABLE dbo.CapacityWeekly AS
                    SELECT CAST(week_start AS DATE) AS WeekStart, CAST(sequencing_capacity AS INT) AS SequencingCapacity
                    FROM read_csv('{ROOT / "data/capacity_weekly.csv"}')""")
    return con


def run_script(con, script_name):
    """Run every statement and return the results of the SELECT statements, in order."""
    results = []
    for sql in statements(script_name):
        cursor = con.execute(sql)
        if sql.lstrip().upper().startswith("SELECT"):
            results.append(cursor.fetchdf())
    return results


def check(name, condition, detail=""):
    print(("PASS " if condition else "FAIL ") + name + (f"  {detail}" if not condition else ""))
    return condition


def main():
    con = build_database()
    ok = True

    counts, reasons = run_script(con, "02_clean_load.sql")
    ok &= check("rows read 8717, loaded 8677, rejected 15",
                tuple(counts.iloc[0]) == (8717, 8677, 15), str(counts.to_dict("records")))
    ok &= check("reject reason", reasons.iloc[0]["RejectReason"] == "reported_date before sequenced_date")

    weekly_sql = run_script(con, "03_weekly_summary.sql")[-1]
    weekly_py = pd.read_csv(ROOT / "output/weekly_summary.csv", parse_dates=["week_start"])
    ok &= check("weekly: 78 weeks", len(weekly_sql) == len(weekly_py) == 78, f"{len(weekly_sql)} vs {len(weekly_py)}")
    for sql_col, py_col in [("Referrals", "referrals"), ("SamplesReceived", "samples_received"), ("Sequenced", "sequenced"),
                            ("Reported", "reported"), ("Capacity", "capacity"), ("BacklogEnd", "backlog_end")]:
        same = (weekly_sql[sql_col].astype(int).to_numpy() == weekly_py[py_col].to_numpy()).all()
        ok &= check(f"weekly {py_col} matches pandas", same)
    for sql_col, py_col in [("Utilisation", "utilisation"), ("Referrals4WkAvg", "referrals_4wk_avg")]:
        a, b = weekly_sql[sql_col].astype(float).to_numpy(), weekly_py[py_col].to_numpy()
        # SQL ROUND goes half up and pandas rounds half to even (97.25 -> 97.3 and 97.2), so allow one last digit.
        ok &= check(f"weekly {py_col} matches pandas", ((abs(a - b) < 0.101) | (pd.isna(a) & pd.isna(b))).all())

    pct_sql, pct_py = run_script(con, "04_turnaround.sql")[0], pd.read_csv(ROOT / "output/turnaround_by_month.csv")
    pct_py = pct_py.sort_values(["priority", "month"], ascending=[False, True]).reset_index(drop=True)
    ok &= check("turnaround: same number of cohorts", len(pct_sql) == len(pct_py), f"{len(pct_sql)} vs {len(pct_py)}")
    ok &= check("turnaround: referrals match", (pct_sql["Referrals"].to_numpy() == pct_py["referrals"].to_numpy()).all())
    ok &= check("turnaround: % within target matches",
                (abs(pct_sql["PctWithinTarget"].astype(float).to_numpy() - pct_py["pct_within_target"].to_numpy()) < 0.11).all())

    spread_sql = run_script(con, "04_turnaround.sql")[1]
    ok &= check("turnaround: median days matches",
                (abs(spread_sql["MedianDays"].astype(float).to_numpy() - pct_py["median_days"].to_numpy()) < 0.01).all())
    ok &= check("turnaround: 90th percentile matches",
                (abs(spread_sql["P90Days"].astype(float).to_numpy() - pct_py["p90_days"].to_numpy()) < 0.11).all())

    print("ALL CHECKS PASSED" if ok else "SOME CHECKS FAILED")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
