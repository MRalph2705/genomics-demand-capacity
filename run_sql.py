"""Run T-SQL on the project data, to explore it.

    python run_sql.py "SELECT COUNT(*) AS n FROM dbo.Referrals_Raw"
    python run_sql.py my_query.sql
    python run_sql.py --clean my_query.sql     (dbo.Referrals is filled with the known-good clean rows,
                                                so you can build Steps 3 and 4 without finishing Step 2)

Tables you can use: dbo.Referrals_Raw (all text) and dbo.CapacityWeekly.
This runs in DuckDB (see checks/harness.py), not SQL Server, so a few functions differ.
"""
import sys
from pathlib import Path

import pandas as pd
import sqlglot

sys.path.insert(0, str(Path(__file__).resolve().parent / "checks"))
from harness import build_database  # noqa: E402


def main(argv):
    clean = "--clean" in argv
    argv = [a for a in argv if a != "--clean"]
    if len(argv) != 1:
        print(__doc__)
        return 2
    text = Path(argv[0]).read_text(encoding="utf-8") if Path(argv[0]).suffix == ".sql" else argv[0]
    con = build_database(with_clean=clean)
    pd.set_option("display.width", 200, "display.max_columns", 30, "display.max_rows", 60)
    for statement in sqlglot.transpile(text, read="tsql", write="duckdb"):
        print(con.execute(statement).fetchdf().to_string(index=False))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
