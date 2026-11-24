# Step 2 (SQL): Clean and load

**Goal:** turn the dirty text file into trustworthy rows. Keep the bad rows, with a reason. Never drop a row silently.

**File to write:** `sql/02_clean_load.sql` (the brief is in the comment at the top of the file)
**Check:** `python check.py 2`   **Time:** 2–3 hours   **You need:** CTEs, `CASE`, `ROW_NUMBER`, `TRY_CONVERT`

## Think first

1. The raw table has **only text**. Why is that a good idea for a load? (What happens to a load when one date says `31/02/2025`?)
2. If a row is bad, what are the choices? Delete it, fix it, or keep it aside with a reason. Which one lets you explain the numbers later?
3. A row can break two rules. How many reasons should it get? Which one?

## The pattern (a different subject)

Open `guide/examples/library_sql.sql` (a library lends books and DVDs). Pattern 1 does the same job. Run it:

```
python guide/examples/run_library_sql.py
```

Read it and notice **five** ideas:
1. A `Typed` CTE turns text into types in one place.
2. `CASE LOWER(LTRIM(RTRIM(x))) WHEN ... END` gives standard spellings. No `ELSE`, so an unknown value becomes `NULL`.
3. `ROW_NUMBER() OVER (PARTITION BY id ORDER BY ...)` numbers the copies of each id. `WHERE RowInId = 1` keeps one.
4. `CASE WHEN ... THEN 'reason'` gives one reason per row: the **first** true `WHEN` wins. So the order of the `WHEN` lines matters.
5. `RejectReason IS NULL` means "good row". The same view feeds both inserts.

Close the file. Do not copy it. The genomics rules are different: more stages, more reasons.

## Your task

Follow the brief in `sql/02_clean_load.sql`. Build it in this order and run `python run_sql.py` as you go:

1. A query that selects the columns as text, trimmed.
2. Add the type conversions.
3. Add the standard spellings.
4. Add the `ROW_NUMBER` and keep one row per id.
5. Add `RejectReason`.
6. Turn it into the view, then write the two `INSERT`s and the count `SELECT`.

## The T-SQL trap you must know

On SQL Server, converting an **empty text** to a date gives **1900-01-01**, not NULL. That would turn every empty date into a real date of 1 January 1900 and hide the fault. So always write:

```sql
TRY_CONVERT(DATE, NULLIF(r.ReportedDate, ''))
```

`NULLIF(x, '')` turns an empty text into NULL first. DuckDB (the checker) turns `''` into NULL by itself, so the checker cannot see this mistake. That is why the check also looks for the word `NULLIF` in your file. I could not run this on SQL Server here: it is documented behaviour.

## Hints (open one at a time)

<details><summary>Hint 1: the shape</summary>

```
CREATE OR ALTER VIEW dbo.vw_ReferralsChecked AS
WITH Typed    AS ( ... one SELECT from dbo.Referrals_Raw ... ),
     Numbered AS ( ... Typed plus a ROW_NUMBER column ... )
SELECT ..., CASE WHEN ... END AS RejectReason
FROM Numbered
WHERE RowInId = 1;
GO
INSERT ... SELECT ... WHERE RejectReason IS NULL;
INSERT ... SELECT ... WHERE RejectReason IS NOT NULL;
GO
SELECT three counts;
```
</details>

<details><summary>Hint 2: ROW_NUMBER</summary>

`PARTITION BY` the id. `ORDER BY` something that makes the choice repeatable (SQL has no "first row in the file"). On this data every repeat is an exact copy, so the order does not change the result. Think about what you would do if a repeat had *different* data.
</details>

<details><summary>Hint 3: the reasons</summary>

Write the reasons in the order of the brief. A date comparison with a NULL is not true, so `n.ReportedDate < n.SequencedDate` is safely false when either side is empty. The two "without" rules are different: there the later date is *present* and the earlier one is *missing*.
</details>

<details><summary>Hint 4: the check says my view has the wrong number of rows</summary>

The view must have one row per `ReferralID` after trimming. Did you trim the id before numbering? Did you filter on `RowInId = 1`?
</details>

## Common mistakes (all caught by the checker)

- Using `ELSE` in the test-type `CASE`. An unknown value must stay NULL.
- Reasons in the wrong order, so a row gets its second reason.
- `<=` instead of `<` for "before". A referral reported on the same day it was sequenced is **fine**.
- Rejecting a row because a *later* date is empty. Not every referral has finished.
- Forgetting `GO` before the `INSERT` (a view must start its own batch).

## Compare

When the check passes, open `genomics-demand-capacity/sql/02_clean_load.sql`. Ask:
1. Did I put the `WHEN`s in a different order? Does that change which reason a row gets?
2. Which version is easier to read in six months? Why?
3. What does the reference do that I did not? What did I do that it does not?

## Say it aloud

*"I load the file as text so a bad value can never stop the load. I convert with TRY_CONVERT after turning empty text into NULL, because SQL Server turns empty text into 1900-01-01. Bad rows are kept in a rejects table with one reason each, so the counts add up: read = loaded + rejected."*

Write your own answer in `notes/decisions.md`: **what is your rule for a duplicate id, and why?**

Next: [Step 3: SQL weekly summary](03_sql_weekly.md)
