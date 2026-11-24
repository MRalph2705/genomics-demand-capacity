# Day 3: Step 1: finish and check

*Planned for Thu 12 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Answer questions 6 to 10 and pass check 1.

**Files you will touch:** `notes/findings.py`, `notes/decisions.md`, `notes/progress.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 10 min: Where you are

`python check.py 1` should currently stop at `rows_with_messy_test_type is not answered yet` (your first five are right). Open `notes/findings.py` and find the five `None` lines left: `rows_with_messy_test_type`, `rows_reported_before_sequenced`, `rows_without_sample_received_date`, `weeks_in_capacity_file`, `lowest_weekly_capacity`.

## 10 to 25 min: Question 6, the messy test type

**Question 6: how many rows have a `TestType` that is not EXACTLY `Rare disease`, `Cancer panel` or `Rapid`?**

First **look** at the values. Spaces are invisible, so put square brackets round them:
```
python run_sql.py "SELECT CONCAT('[', TestType, ']') AS shown, COUNT(*) AS n FROM dbo.Referrals_Raw GROUP BY TestType ORDER BY TestType"
```
You see six rows. Read each one. Which are exactly right? Which have a different case, or a space inside the brackets? Add up the `n` of **only the wrong ones**. That is your answer. Write it as `rows_with_messy_test_type`.

(Why does this matter? If you filter on `TestType = 'Cancer panel'` later, the messy rows silently disappear.)

## 25 to 40 min: Questions 7 and 8 (use your own SQL)

Both questions say "after removing exact duplicates". So start from this, which keeps one of each exact row:
```
(SELECT DISTINCT * FROM dbo.Referrals_Raw) AS d
```

**Question 7: how many rows have `reported_date` earlier than `sequenced_date`?**
Both are text. Make a file called `my_query.sql` in the project folder (File > New, Save As, in the project folder) and fill in the two blanks:
```sql
SELECT COUNT(*) AS n
FROM (SELECT DISTINCT * FROM dbo.Referrals_Raw) AS d
WHERE ______  <  ______ ;
```
Each blank must turn the text column into a real date: `TRY_CONVERT(DATE, NULLIF(d.ReportedDate, ''))`. The `NULLIF(x, '')` turns an empty cell into NULL first. (Day 4 explains why this matters on SQL Server. Just write it this way.) Run it:
```
python run_sql.py my_query.sql
```
Write the number as `rows_reported_before_sequenced`. Stuck for 15 minutes? Read **Hint 3** in `guide/01_look_at_the_data.md`.

**Question 8: how many rows have an empty `sample_received_date`?**
Change `my_query.sql` to:
```sql
SELECT COUNT(*) AS n
FROM (SELECT DISTINCT * FROM dbo.Referrals_Raw) AS d
WHERE NULLIF(LTRIM(RTRIM(d.SampleReceivedDate)), '') IS NULL;
```
Run it the same way. (An empty cell can arrive as NULL or as empty text depending on how it was loaded. This test catches both.) Write the number as `rows_without_sample_received_date`.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 3: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 40 to 47 min: Questions 9 and 10 (capacity file)

```
python run_sql.py "SELECT COUNT(*) AS n, MIN(SequencingCapacity) AS lowest FROM dbo.CapacityWeekly"
```
Two numbers: write `n` as `weeks_in_capacity_file` and `lowest` as `lowest_weekly_capacity`.

## 47 to 57 min: Check, then think

1. `python check.py 1`. All ten should pass. If not, it names the first one that is wrong or empty: fix only that one.
2. Open `notes/decisions.md`. Under **## Step 2: cleaning** replace `(your entries)` with one entry in this form (the file shows an example at the top):
   - **Choice:** (what you will do about the duplicate rows)
   - **Why:**
   - **Other option:**
3. Say this out loud once, with your real numbers: *"Before I wrote any code I profiled the raw file: row counts, duplicates, odd spellings, impossible date orders. I found X, Y and Z. That decided what my cleaning step does."*

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 3, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 4: open `daily/day-04.md`. Read guide/02 and run the library example.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 2](day-02.md)  [Day 4 >](day-04.md)
