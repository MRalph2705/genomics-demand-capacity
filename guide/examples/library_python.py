"""WORKED EXAMPLE (a different subject): a public library lends books and DVDs.

It shows the SAME patterns you will use on the genomics project, on a tiny table you can read in one go.
Run it:   python guide/examples/library_python.py
Read it, then close it and write your own version for the genomics data. Do not copy and paste.
"""
import io

import numpy as np
import pandas as pd

LOANS_CSV = """loan_id,borrowed,item_type,member_type,returned
L1,2025-03-03,Book,adult,2025-03-10
L2,2025-03-04, dvd ,Child,2025-03-12
L3,2025-03-05,BOOK,adult,
L4,2025-03-10,Book,adult,2025-03-09
L5,2025-03-11,Game,adult,2025-03-20
L6,2025-03-12,Book,adult,2025-03-30
L6,2025-03-12,Book,adult,2025-03-30
L7,2025-03-18,Book,teen,2025-03-24
L8,,Book,adult,2025-03-24
L9,2025-03-19,Book,adult,
"""

ITEM_TYPES = ("Book", "DVD")            # the standard spellings
MEMBER_TYPES = ("adult", "child", "teen")
LOAN_DAYS = {"Book": 14, "DVD": 7}      # how long you may keep an item


# ---------------------------------------------------------------- pattern 1: load, tidy, find problems, split
def load_loans(text):
    """Dates become datetimes. Empty becomes NaT. The id is text."""
    return pd.read_csv(io.StringIO(text), parse_dates=["borrowed", "returned"], dtype={"loan_id": "string"})


def tidy(frame):
    """Return a COPY with standard spellings. Unknown item types become missing."""
    result = frame.copy()
    canonical = {name.lower(): name for name in ITEM_TYPES}
    result["item_type"] = result["item_type"].str.strip().str.lower().map(canonical)
    result["member_type"] = result["member_type"].str.strip().str.lower()
    return result


def find_problems(frame):
    """One reason per bad row ('' for a good row). The FIRST reason that applies wins."""
    reasons = pd.Series("", index=frame.index, dtype="string")

    def flag(mask, reason):
        reasons.loc[mask & (reasons == "")] = reason       # only rows with no reason yet

    flag(frame["item_type"].isna(), "unknown item_type")
    flag(~frame["member_type"].isin(MEMBER_TYPES), "unknown member_type")
    flag(frame["borrowed"].isna(), "missing borrowed date")
    flag(frame["returned"] < frame["borrowed"], "returned before borrowed")
    return reasons


def clean_loans(raw):
    """Return (clean, rejected, counts). Never drop a row without counting it."""
    counts = {"rows_read": len(raw)}
    no_copies = raw.drop_duplicates()
    counts["copies_removed"] = len(raw) - len(no_copies)
    tidy_rows = tidy(no_copies)
    reasons = find_problems(tidy_rows)
    bad = reasons != ""
    rejected = tidy_rows[bad].assign(reject_reason=reasons[bad])
    clean = tidy_rows[~bad].reset_index(drop=True)
    counts["rows_rejected"], counts["rows_kept"] = len(rejected), len(clean)
    return clean, rejected, counts


# ---------------------------------------------------------------- pattern 2: weeks, running totals
def monday_of(dates):
    return (dates - pd.to_timedelta(dates.dt.weekday, unit="D")).dt.normalize()


def per_week(dates, name):
    """How many dates in each week? Missing dates are ignored."""
    return monday_of(dates.dropna()).value_counts().rename(name)


def weekly_loans(clean):
    weeks = pd.date_range("2025-03-03", periods=4, freq="7D")           # every week must appear, even an empty one
    table = pd.concat([per_week(clean["borrowed"], "borrowed"), per_week(clean["returned"], "returned")],
                      axis=1, sort=False).reindex(weeks).fillna(0).astype(int)
    table.index.name = "week_start"
    table["items_out"] = table["borrowed"].cumsum() - table["returned"].cumsum()      # running total
    table["borrowed_3wk_avg"] = table["borrowed"].rolling(3).mean().round(1)           # first 2 weeks are missing
    return table


# ---------------------------------------------------------------- pattern 3: cohorts and a fair measure
def on_time_share(clean, data_end):
    """Share returned on time, by item type. Count a loan only if it is old enough to be judged."""
    rows = []
    for item_type, days in LOAN_DAYS.items():
        group = clean[(clean["item_type"] == item_type) & (clean["borrowed"] <= data_end - pd.Timedelta(days=days))].copy()
        group["days_out"] = (group["returned"] - group["borrowed"]).dt.days
        group["on_time"] = group["days_out"].le(days)               # NaN (not returned) -> False
        rows.append({"item_type": item_type, "loans": len(group), "pct_on_time": round(group["on_time"].mean() * 100, 1),
                     "median_days_out": group["days_out"].median()})
    return pd.DataFrame(rows)


# ---------------------------------------------------------------- pattern 4: forecast, test it, answer "how long?"
def repeat_last(history, horizon):
    return np.repeat(history[-1], horizon)


def average_of_last_3(history, horizon):
    return np.repeat(history[-3:].mean(), horizon)


def weeks_until_zero(waiting, inflow, outflow):
    """Each week: waiting = max(0, waiting + inflow - outflow). Return the week number it hits zero, or None."""
    for week, (came, went) in enumerate(zip(inflow, outflow), start=1):
        waiting = max(0.0, waiting + came - went)
        if waiting == 0:
            return week
    return None


if __name__ == "__main__":
    pd.set_option("display.width", 160)
    raw = load_loans(LOANS_CSV)
    clean, rejected, counts = clean_loans(raw)
    print("counts:", counts)
    print(rejected[["loan_id", "reject_reason"]].to_string(index=False))
    table = weekly_loans(clean)
    print(table)
    print(on_time_share(clean, data_end=pd.Timestamp("2025-03-31")))
    history = table["borrowed"].to_numpy(dtype=float)
    print("repeat_last:", repeat_last(history, 2), " average_of_last_3:", average_of_last_3(history, 2))
    print("weeks until zero:", weeks_until_zero(5, [3, 3, 3], [6, 6, 6]), weeks_until_zero(5, [3, 3], [3, 3]))
