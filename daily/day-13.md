# Day 13: Step 4: check and Stage A review

*Planned for Sun 22 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Pass `python check.py 4`, then confirm the whole SQL half is done.

**Files you will touch:** `sql/04_turnaround.sql`, `notes/decisions.md`.

## 0 to 5 min: Start (the same every day)

1. Open the project folder `genomics-demand-capacity-guided` in File Explorer.
2. Click the **address bar** at the top of the window, type `cmd` and press Enter. A black window opens **inside that folder**. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type `python check.py` and press Enter. (If you see "python is not recognized", type `py check.py` instead, and use `py` wherever this page says `python`.)
4. Open `notes/progress.md` in your text editor (VS Code if you have it, otherwise Notepad). Read your **last line**. It says where you stopped.

## 5 to 30 min: Check 4

```
python check.py 4
```
Five tests. Read the **first** failure only. Likely ones:
- "view holds only eligible referrals": your `WHERE` is wrong. Eligible when `ReferredDate <= DATEADD(DAY, -TargetDays, DataEnd)`. Is `DataEnd` built from `MIN(ReferredDate)` plus 78 weeks?
- "no integer division in the percentage": you forgot `100.0 *`.
- "rules on a small table": test these questions: is an unreported old referral counted as *not* within target? Are you counting `NULL` days as within target by mistake?
- "median and p90": did you leave out `DISTINCT` or use the wrong `PARTITION BY`?
- If the checker says it **cannot read a statement**: look for a typo first. If the T-SQL is valid, tell me. I can add support.

## 30 to 45 min: Compare and decide

1. Open the finished version's `sql/04_turnaround.sql`. How does it hold the targets? What would you change to move the targets into a table you can edit? Are there other ways to apply the eligibility rule?
2. In `notes/decisions.md` under **## Step 4: turnaround** answer: **what would you tell a manager who asks why the latest month has no figure?**
3. Say it aloud: *"The turnaround measure only counts referrals that are old enough to have met their target by the end of the data. Without that, recent referrals look late only because they have not finished, and the last months of the chart would be wrong. Unreported old referrals count as missing the target."*

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 13: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 45 to 55 min: Stage A review

1. `python check.py` should show **Steps 1, 2, 3 and 4 PASSED** and 5 to 10 "not yet". If one is not, fix it **now**.
2. Read the last section of `guide/04` (**Stage A is done**).
3. On paper, write the **five things you learned in the SQL half that you did not know a fortnight ago**. (Examples: why `NULLIF` goes inside `TRY_CONVERT`; why backlog is a running difference; why `PERCENTILE_CONT` needs `OVER`.)
4. Optional: upload the SQL half to GitHub now (the web steps are at the end of `guide/11_readme_and_interview.md`). Upload `sql/`, `notes/`, `guide/`, `README.md`.

## 55 to 57 min

Tomorrow is a **blank-page session**. You will write from memory. Do not read your own SQL tonight.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 13, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 14: open `daily/day-14.md`. Blank-page session.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
[< Day 12](day-12.md)  [Day 14 >](day-14.md)
