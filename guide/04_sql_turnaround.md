# Step 4 (SQL): Turnaround against a target

**Goal:** what share of patients got their result within the target time, by month and priority?

**File to write:** `sql/04_turnaround.sql`   **Check:** `python check.py 4`   **Time:** 2–3 hours
**You need:** `DATEDIFF`, `DATEADD`, a join to a small rules table, `SUM(CASE...)`, `PERCENTILE_CONT`

## Think first

This step is about **fairness**. Imagine it is 1 July and a routine referral was made on 25 June. It has no result yet. Is that a failure? The target is 42 days. So you cannot tell yet.

1. If you count that referral as "late", what happens to the latest months on your chart? (They look terrible, for no real reason.)
2. So which referrals may you judge? Write the rule: *a referral can be judged only if it is old enough that its target date has already passed by the end of the data.*
3. What about an old referral that was **never** reported? Within target, or not?

Say the rule out loud. This rule is the kind of detail interviewers like to ask about.

## The pattern (a different subject)

`guide/examples/library_sql.sql`, **Pattern 3** ("on time" loans). A small `Rules` CTE holds the loan days for each item type (`UNION ALL` of constant rows). A join gives each loan its own limit. A `WHERE` keeps only loans old enough to judge. Then `SUM(CASE WHEN ... THEN 1 ELSE 0 END) / COUNT(*)` gives the share.

Run `python guide/examples/run_library_sql.py` and look at the `PctOnTime` result. Close it.

## Your task

The brief is in `sql/04_turnaround.sql`. Three parts: a view of **eligible** referrals, the percentage, and the median and 90th percentile.

Targets: urgent 14 days, routine 42 days (assumptions, not NHS standards). `DataEnd` = the first referral date + 78 weeks.

## T-SQL traps you must know

1. **Whole-number division again.** `100 * SUM(...) / COUNT(*)` is a whole number in T-SQL. Start with `100.0 *`. The check looks for a decimal in `PctWithinTarget`.
2. **`PERCENTILE_CONT` needs `OVER`.** In T-SQL it is a window function, not an aggregate. So it returns one value *per row*. Use `SELECT DISTINCT` to get one row per group. (In other databases it is a normal aggregate, so do not carry this habit to them.)
3. **`NULL <= 14` is not true.** An unreported referral has `DaysToReport = NULL`, so `CASE WHEN DaysToReport <= TargetDays THEN 1 ELSE 0 END` gives 0 for it. That is the behaviour you want. Know *why* it works.

## Hints (open one at a time)

<details><summary>Hint 1: the view</summary>

```
CREATE OR ALTER VIEW dbo.vw_EligibleForTarget AS
WITH Params  AS (SELECT DATEADD(WEEK, 78, MIN(ReferredDate)) AS DataEnd FROM dbo.Referrals),
     Targets AS (SELECT 'urgent' AS Priority, 14 AS TargetDays UNION ALL SELECT 'routine', 42)
SELECT ... FROM dbo.Referrals r JOIN Targets t ON ... CROSS JOIN Params p WHERE <eligible>;
```
</details>

<details><summary>Hint 2: the month</summary>

The first day of the month: `DATEFROMPARTS(YEAR(x), MONTH(x), 1)`.
</details>

<details><summary>Hint 3: the eligibility test</summary>

Eligible when `ReferredDate <= DATEADD(DAY, -TargetDays, DataEnd)`. Read it as: "the target date (referral + target days) is on or before the end of the data".
</details>

<details><summary>Hint 4: the percentile query returns far too many rows</summary>

`PERCENTILE_CONT(...) WITHIN GROUP (ORDER BY ...) OVER (PARTITION BY ...)` gives a value on every row. Add `DISTINCT`. Do the `PARTITION BY` columns match the columns you select?
</details>

## Compare

Open `genomics-demand-capacity/sql/04_turnaround.sql`. Ask: how does it hold the targets? What would you change to move the targets into a table you could edit? Are there other ways to apply the eligibility rule?

## Say it aloud

*"The turnaround measure only counts referrals that are old enough to have met their target by the end of the data. Without that, recent referrals look late only because they have not finished, and the last months of the chart would be wrong. Unreported old referrals count as missing the target."*

Write in `notes/decisions.md`: **what would you tell a manager who asks why the latest month has no figure?**

## Stage A is done

Run `python check.py`. Steps 1–4 should say PASSED. Put the SQL on GitHub now (a first commit). Then wait for course Module 3 before Step 5.

Next: [Step 5: Python clean](05_python_clean.md)
