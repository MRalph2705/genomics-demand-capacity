# Day 7: Step 2: finish, check, compare

*Planned for Mon 16 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Move your query into the real file, add the loads, and pass `python check.py 2`.

**Files you will touch:** `sql/02_clean_load.sql` (you write it today), `notes/decisions.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 25 min: Build the real file

Open `sql/02_clean_load.sql`. Leave the big comment at the top. **Below it** write, in this order:

1. `CREATE OR ALTER VIEW dbo.vw_ReferralsChecked AS` then your whole query (the `WITH Typed AS ... Numbered AS ...` and the final `SELECT ... WHERE RowInId = 1`). The view must return these columns: `ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate, RejectReason`. A `CREATE VIEW` cannot be followed directly by other statements, so end it with `;` and then a line containing just **`GO`**.
2. Two inserts:
   - good rows (`RejectReason IS NULL`) go into `dbo.Referrals` (columns `ReferralID, ReferredDate, TestType, Priority, SampleReceivedDate, SequencedDate, ReportedDate`);
   - bad rows go into `dbo.Referrals_Rejected` (columns `ReferralID, RejectReason`).
3. A line `GO`.
4. One last `SELECT` with three numbers named `RowsRead` (count of `dbo.Referrals_Raw`), `RowsLoaded` (count of `dbo.Referrals`) and `RowsRejected` (count of `dbo.Referrals_Rejected`). Use three small subqueries: `(SELECT COUNT(*) FROM dbo.Referrals_Raw) AS RowsRead`.

Hint 1 in `guide/02` shows the shape. The tables `dbo.Referrals` and `dbo.Referrals_Rejected` already exist (made in `sql/01_create_tables.sql`; read the file to see their columns).

## 25 to 45 min: Check

```
python check.py 2
```
There are 4 tests. **Read only the first failure message** and fix only that. Common ones:
- "could not read a statement": a typo, usually a missing comma between CTEs or a missing `;`.
- "view has the wrong number of rows": you did not trim the id before numbering, or forgot `WHERE RowInId = 1`.
- wrong reason: your `WHEN` lines are in the wrong order, or you used `<=`.
- "NULLIF": one of your date conversions has no `NULLIF` inside `TRY_CONVERT`. The checker counts them.
Expected result on the real file, from the brief: **read 8717, loaded 8677, rejected 15**.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 7: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 45 to 55 min: Compare with the finished version

1. If you have not already, unzip `genomics-demand-capacity.zip` (the finished project I sent you earlier) into a **separate** folder.
2. Open its `sql/02_clean_load.sql` next to yours. Answer, in `notes/decisions.md` under **## Step 2: cleaning**:
   - Did I put the `WHEN`s in a different order? Does that change which reason a row gets?
   - Which version is easier to read in six months?
   - What does the finished version do that I did not? What did I do that it does not?
3. Add one more entry there: **what is your rule for a duplicate id, and why?** (You thought about it on Days 3 and 6.)
4. Say it aloud: *"I load the file as text so a bad value can never stop the load. I convert with TRY_CONVERT after turning empty text into NULL, because SQL Server turns empty text into 1900-01-01. Bad rows are kept in a rejects table with one reason each, so the counts add up: read = loaded + rejected."*

## 55 to 57 min

`python check.py` shows Steps 1 and 2 as PASSED. Tick it on a sticky note. Two steps done.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 7, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 8: open `daily/day-08.md`. Step 3, the weekly table.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 6](day-06.md)  [Day 8 >](day-08.md)
