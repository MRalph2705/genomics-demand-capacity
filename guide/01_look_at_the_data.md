# Step 1: Look at the data

**Goal:** know your data before you write any code. Most data bugs are found here, not later.

**File to edit:** `notes/findings.py`   **Check:** `python check.py 1`   **Time:** about 1 hour

## Think first

Before you count anything, write down on paper what you *expect*:
- How many rows? Is each `referral_id` unique?
- What do you think is wrong with the file? (You are told it is dirty.)
- Which columns can be empty, and is empty always a fault?

Guessing first is the habit. If you only look, you do not notice when you are surprised.

## The tools

You can answer with SQL or with pandas. Do the SQL way at least once, because Steps 2–4 are SQL.

**SQL.** Run a query on the raw table:
```
python run_sql.py "SELECT COUNT(*) AS n FROM dbo.Referrals_Raw"
```
Tables you can query: `dbo.Referrals_Raw` (every column is text) and `dbo.CapacityWeekly`.
Column names in the raw table: `ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate`.
Put longer queries in a `.sql` file and run `python run_sql.py my_query.sql`.

**pandas.** In a Python file or a notebook:
```python
import pandas as pd
raw = pd.read_csv("data/referrals_raw.csv", dtype=str, keep_default_na=False)   # everything as text, nothing hidden
```
Reading everything as text means pandas does not guess. You see exactly what the file says.

## Your 10 questions

They are in `notes/findings.py`. Fill in each `None`.

Some need care:
- "Exact duplicate" means **every column** is the same as an earlier row.
- Some questions say "after removing exact duplicates". Do that first.
- An empty date is not a fault by itself. A referral that has not been sequenced yet is normal.
- Write dates as text like `"2025-01-06"`.

## Hints (open one at a time)

<details><summary>Hint 1: counting rows and duplicates</summary>

Total rows is a simple count. For exact duplicates, count how many rows you would lose if you removed copies: rows minus rows left. In SQL, `SELECT DISTINCT` (all columns) gives the rows left. In pandas, `duplicated()` or `drop_duplicates()`.
</details>

<details><summary>Hint 2: the messy test type</summary>

The standard spellings are exactly `Rare disease`, `Cancer panel` and `Rapid`. Count rows where `test_type` is not one of those three. Look at the odd values with `SELECT DISTINCT TestType` (or `value_counts()`). What kinds of mess do you see?
</details>

<details><summary>Hint 3: reported before sequenced</summary>

Both columns are text. Convert them to dates first. In SQL use `TRY_CONVERT(DATE, NULLIF(col, ''))`. An empty text must become NULL first (the next step explains why). Then compare the two dates. A comparison with a NULL is never true, so empty rows drop out by themselves.
</details>

<details><summary>Hint 4: capacity</summary>

`dbo.CapacityWeekly` already has real types. `COUNT(*)` and `MIN(...)`.
</details>

## When it passes

Write in `notes/decisions.md` (Step 2 section) **one thing that surprised you** and what you will do about it.

## Say it aloud

*"Before I wrote any code I profiled the raw file: row counts, duplicates, odd spellings, impossible date orders. I found X, Y and Z. That decided what my cleaning step does."* Say it with your real numbers.

Next: [Step 2: SQL clean and load](02_sql_clean.md)
