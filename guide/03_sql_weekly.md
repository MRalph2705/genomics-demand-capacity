# Step 3 (SQL): One row per week

**Goal:** weekly demand, work done, capacity, utilisation and backlog, in one view. This is the table every chart and forecast comes from.

**File to write:** `sql/03_weekly_summary.sql`   **Check:** `python check.py 3`   **Time:** 2–3 hours
**You need:** `GROUP BY`, `LEFT JOIN`, `COALESCE`, window functions with a frame

The check does not depend on Step 2. It loads the known-good clean rows for you.

## Think first

1. What is a **backlog**? Write it as a sum: *samples that have arrived* minus *samples that have been sequenced*, both counted up to the end of the week. Why is it not "referrals minus sequenced"? (A referral has no sample yet.)
2. If no sample was sequenced in a week, what must that week show? Zero, or no row? Which one breaks a running total?
3. The capacity file has 90 weeks. Why does the view show only 78?

## The pattern (a different subject)

`guide/examples/library_sql.sql`, **Pattern 2** (items borrowed, returned, and "items out"). Run `python guide/examples/run_library_sql.py`.

Notice:
1. One small `GROUP BY` CTE **per measure** (`Borrowed`, `Returned`), each producing `WeekStart` and a count.
2. A **calendar** (here `dbo.Calendar`) is the left side. Every week is there. `LEFT JOIN` each measure to it and `COALESCE(x, 0)`.
3. A running total is `SUM(x) OVER (ORDER BY week ROWS UNBOUNDED PRECEDING)`. The frame is written out.
4. A 3-week average uses `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW`. It is NULL until three weeks exist, so a `CASE WHEN COUNT(*) OVER (same frame) = 3` guards it.

Close it. Yours has four measures and a 4-week average.

## Your task

The brief is in `sql/03_weekly_summary.sql`. `dbo.Referrals` already has the Monday-of-week columns (`ReferredWeek`, `SampleReceivedWeek`, `SequencedWeek`, `ReportedWeek`). Look at `01_create_tables.sql` to see how they are made. Why does it use `DATEDIFF(DAY, 0, ...)` and not `DATEPART(WEEKDAY, ...)`? (Think about what `SET DATEFIRST` changes.)

Build it in this order:
1. Referrals per week (one CTE). Run it alone.
2. The other three measures.
3. Join them to `dbo.CapacityWeekly`. Keep only the first 78 weeks.
4. Utilisation.
5. Backlog and the 4-week average.

## The T-SQL trap you must know

In T-SQL, `7 / 2` is **3**, not 3.5. Whole number divided by whole number gives a whole number. And `AVG` of whole numbers gives a whole number. So:

```sql
CAST(w.Sequenced AS DECIMAL(9, 3)) / w.Capacity       -- decimal arithmetic
AVG(CAST(w.Referrals AS DECIMAL(9, 2)))
```

DuckDB (the checker) gives 3.5 either way, so it cannot see this mistake. The check therefore looks for a `CAST` or a decimal number such as `1.0` in these two columns. If you leave it out, SQL Server would give you `0` for utilisation in most weeks.

## Hints (open one at a time)

<details><summary>Hint 1: the shape</summary>

```
CREATE OR ALTER VIEW dbo.vw_WeeklySummary AS
WITH Referred  AS (SELECT week, COUNT(*) ... GROUP BY week),
     Received  AS (...), Sequenced AS (...), Reported AS (...),
     Weekly    AS (SELECT c.WeekStart, COALESCE(...), ... FROM dbo.CapacityWeekly c LEFT JOIN ... WHERE ...)
SELECT ... window functions ... FROM Weekly;
```
</details>

<details><summary>Hint 2: only 78 weeks</summary>

The history is the first 78 weeks of the capacity file. Which week is the first? `MIN(WeekStart)`. Which date is 78 weeks later? `DATEADD(WEEK, 78, ...)`. Keep weeks **before** that date.
</details>

<details><summary>Hint 3: the empty-week check fails (77 rows)</summary>

Start from `dbo.CapacityWeekly` and `LEFT JOIN` the measures **to it**. If you start from a measure, or use `INNER JOIN`, a week with no events disappears.
</details>

<details><summary>Hint 4: the window frame</summary>

`ROWS UNBOUNDED PRECEDING` means "from the first row to this row". You can write one `SUM(...) OVER (...)` for received and another for sequenced and subtract. Always write `ROWS`, not the default `RANGE`: it is faster and clearer.
</details>

## Compare

Open `genomics-demand-capacity/sql/03_weekly_summary.sql`. Ask: what is the same? Did I write four CTEs or one? Is the 78 weeks written as a number in the SQL? Where would you move it if the history length changed?

## Say it aloud

*"The weekly view starts from the capacity calendar and left-joins each measure, so a week with no events still shows zero. Backlog is cumulative samples received minus cumulative samples sequenced, using window functions with an explicit frame. I cast to decimal because T-SQL divides whole numbers as whole numbers."*

Write in `notes/decisions.md`: **why does backlog use samples received and not referrals?**

Next: [Step 4: SQL turnaround](04_sql_turnaround.md)
