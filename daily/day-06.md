# Day 6: Step 2: ROW_NUMBER and reject reasons (parts 4 and 5)

*Planned for Sun 15 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Keep one row per referral id, and give each bad row exactly one reason.

**Files you will touch:** `scratch/step2.sql`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: Think

Reread your Day 3 sentence: *the repeated rows are exact copies*. So which copy you keep does not change the result. But SQL has no "first row in the file". So `ROW_NUMBER` needs an `ORDER BY` that makes the choice **repeatable**. If a repeat ever had different data, what would you want to happen? (Write one line. It goes into `notes/decisions.md` on Day 7.)

## 10 to 30 min: Part 4. One row per id

Open `scratch/step2.sql`. After the `Typed` CTE add a second CTE (put a comma after the first one's closing bracket):
```sql
Numbered AS (
    SELECT t.*,
           ROW_NUMBER() OVER (PARTITION BY t.ReferralID ORDER BY ______) AS RowInId
    FROM Typed AS t
)
```
Fill the `ORDER BY` blank with the date columns (any order is fine; pick the one you can defend). Then check:
```sql
SELECT RowInId, COUNT(*) AS n FROM Numbered GROUP BY RowInId ORDER BY RowInId;
```
**You should see:** `1  8692` and `2  25`. That is 8,692 different ids, and 25 repeats. Does that match your Day 2 numbers? It must.

Then keep only the first of each: the final query becomes `SELECT ... FROM Numbered WHERE RowInId = 1`. Check:
```sql
SELECT COUNT(*) AS n FROM Numbered WHERE RowInId = 1;
```
**You should see 8692.**

## 30 to 52 min: Part 5. The RejectReason column

In the final `SELECT` (the one that reads from `Numbered`) add this column. Write the eight lines in **the order from the brief** (the order you wrote on paper yesterday). The first `WHEN` that is true wins:

```sql
CASE
    WHEN n.TestType IS NULL THEN 'unknown test_type'
    WHEN ______ THEN 'unknown priority'
    ...six more...
END AS RejectReason
```
The exact wording of each reason is in the brief at the top of `sql/02_clean_load.sql` (copy the words exactly; the checker compares them letter by letter).

Three things to think about while you write them:
- `n.SampleReceivedDate < n.ReferredDate` is simply **false** when either date is NULL. Why is that handy here?
- "sequenced without sample received" is different. There the later date **is present** and the earlier **is NULL**. Write that test with `IS NOT NULL` and `IS NULL`.
- Use `<`, not `<=`. A result reported on the same day as sequencing is fine.

Check: turn your final select into a CTE called `Checked` (a third CTE after `Numbered`, containing the `SELECT ... CASE ... END AS RejectReason ... WHERE RowInId = 1`), then end the file with:
```sql
SELECT RejectReason, COUNT(*) AS n FROM Checked GROUP BY RejectReason ORDER BY RejectReason;
```
**You should see:** one row with RejectReason empty (NULL) and `n` = 8677, and one row `reported_date before sequenced_date` with `n` = 15. Total 8,692.
(Only one rule fires on the real file. The other seven are tested by the checker with tiny made-up tables on Day 7. This is why test tables matter: real data does not exercise every rule.)

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 6: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 52 to 57 min: Stuck?

Stuck for 15 minutes on the same thing? Open the hints in `guide/02_sql_clean.md` **one at a time, in order**: Hint 2 for ROW_NUMBER, Hint 3 for the reasons. Not before.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 6, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 7: open `daily/day-07.md`. Turn the scratch query into the view, add the two INSERTs and the count SELECT in `sql/02_clean_load.sql`.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 5](day-05.md)  [Day 7 >](day-07.md)
