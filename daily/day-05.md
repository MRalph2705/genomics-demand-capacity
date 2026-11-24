# Day 5: Step 2: select, convert, spell (parts 1 to 3)

*Planned for Sat 14 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Write the first half of the cleaning query, in a scratch file, and check it with real numbers.

**Files you will touch:** New file `scratch/step2.sql` (you create it). `notes/progress.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: Make your workbench

You will build the query in a scratch file first, because `run_sql.py` can run a plain `SELECT` but not the final view-plus-`GO` script. (The final script is tested with `python check.py 2` on Day 7.)

1. In the project folder create a new folder called `scratch`.
2. Inside it create a file called `step2.sql` (in your editor: New file, Save As `scratch\step2.sql`).
3. You run it with: `python run_sql.py scratch/step2.sql`

## 10 to 25 min: Part 1. Select the columns as trimmed text

Type (do not paste) this start into `scratch/step2.sql` and then finish the other six columns yourself in the same style:

```sql
WITH Typed AS (
    SELECT
        LTRIM(RTRIM(r.ReferralID)) AS ReferralID
        -- add the other six columns here, each trimmed, with the same names as the raw table
    FROM dbo.Referrals_Raw AS r
)
SELECT * FROM Typed;
```
Run it. You get a table with 8,717 rows (it prints a lot; only the first and last lines matter). Then change the last line to this and run again:
```sql
SELECT COUNT(*) AS n FROM Typed;
```
**You should see 8717.** If not, did you leave out `FROM dbo.Referrals_Raw AS r`?

## 25 to 40 min: Part 2. Real dates

Change the four date columns (ReferredDate, SampleReceivedDate, SequencedDate, ReportedDate) from trimmed text into real dates:
```sql
TRY_CONVERT(DATE, NULLIF(r.ReferredDate, '')) AS ReferredDate
```
Always the same shape: `TRY_CONVERT(DATE, NULLIF(<column>, ''))`. **Every date column, no exceptions.** Then check with this final line:
```sql
SELECT
    COUNT(*) AS rows_,
    SUM(CASE WHEN ReferredDate       IS NULL THEN 1 ELSE 0 END) AS no_referred,
    SUM(CASE WHEN SampleReceivedDate IS NULL THEN 1 ELSE 0 END) AS no_sample,
    SUM(CASE WHEN SequencedDate      IS NULL THEN 1 ELSE 0 END) AS no_sequenced,
    SUM(CASE WHEN ReportedDate       IS NULL THEN 1 ELSE 0 END) AS no_reported
FROM Typed;
```
**You should see:** `rows_` 8717, `no_referred` 0, `no_sample` 78, `no_sequenced` 181, `no_reported` 413.
If a number is different: did one column miss `NULLIF`? Is a column name mixed up?

(Those empty counts are *not* faults. A referral that has not been sequenced yet is normal. Think about why.)

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 5: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 40 to 55 min: Part 3. Standard spellings

Replace the `TestType` and `Priority` columns:
- `TestType` must be exactly `Rare disease`, `Cancer panel` or `Rapid`. Use `CASE LOWER(LTRIM(RTRIM(r.TestType))) WHEN 'rare disease' THEN 'Rare disease' ... END`. **No `ELSE`.** (Anything unknown must become NULL, so the next part can reject it.)
- `Priority`: trim and lower-case it.

Check with this final line:
```sql
SELECT TestType, COUNT(*) AS n FROM Typed GROUP BY TestType ORDER BY TestType;
```
**You should see exactly three rows** and no NULL: `Cancer panel 3042`, `Rapid 1311`, `Rare disease 4364`. (Compare with Day 3: the messy spellings have been folded into the right ones. 3041 + 1 = 3042.)
Then:
```sql
SELECT Priority, COUNT(*) AS n FROM Typed GROUP BY Priority ORDER BY Priority;
```
**You should see:** `routine 7448`, `urgent 1269`.

## 55 to 57 min: Save

Do not delete `scratch/step2.sql`. You continue tomorrow.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 5, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 6: open `daily/day-06.md`. Add the ROW_NUMBER and the RejectReason to `scratch/step2.sql`.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 4](day-04.md)  [Day 6 >](day-06.md)
