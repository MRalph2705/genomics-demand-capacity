# Day 1: Set up and understand the story

*Planned for Tue 10 Nov. Time: 60 minutes. Back to the [plan](../DAILY-PLAN.md).*

> **Short on time?** Part 1 is everything above the PAUSE POINT (roughly 35 to 50 minutes, depending on the day, so about two of your 25-minute project slots). Part 2 is the rest. The minute marks in the headings below were set for a longer slot, so treat them as a rough guide. When your 25 minutes run out, stop at the end of the section you are in and log its title. Brick wall? See `STAY-ON-TRACK.md` section 4.

**Goal today:** Get the project running on your laptop and understand the business problem. You write no code today.

**Files you will touch:** `README`-type reading only. You create nothing except one line in `notes/progress.md`.

## 0 to 5 min: Start

Today there is no daily routine yet. First you set up the project (next section).


## 5 to 20 min: Unzip and install (one time only)

1. Find `genomics-demand-capacity-guided.zip`. Right-click it, choose **Extract All**, and pick a folder you will find again, for example `Documents\projects`. You now have a folder called `genomics-demand-capacity-guided`.
2. Open a terminal **inside that folder**: open the folder in File Explorer, click the **address bar** at the top, type `cmd` and press Enter. A black window opens. (Mac: open Terminal, type `cd ` and drag the folder onto the window, press Enter.)
3. Type this and press Enter:
   ```
   pip install -r requirements.txt
   ```
   (If `pip` is not recognized: `py -m pip install -r requirements.txt`.)
   Lots of text scrolls past. It should end with **Successfully installed ...** or **Requirement already satisfied**. That is fine.
4. Type `python check.py` and press Enter. You should see a list called **YOUR PROGRESS**: Step 1 to Step 10, every one saying **not yet**. That is correct. Nothing is built yet.

**If something fails:** copy the last 10 lines of the red/error text into a message to me. Do not spend more than 10 minutes on it. A work laptop can block `pip`. If it does, tell me.

## 20 to 35 min: Read

1. Open `START-HERE.md` and read it all. Pay attention to the table of steps and the section **How each step works**.
2. Open `guide/00_the_story_and_the_data.md` and read it all. It explains the lab, the data and the checker.

---
**PAUSE POINT.** This is the nearest tidy stopping place. If you run out of project time (25 minutes) before here, stop at the end of the section you are in instead. Write one line in `notes/progress.md`: `Day 1: done up to <section title>. Resume there.` Tomorrow, start at the section below. (Do the 'Start' steps first, as always, but not again the parts you already did.)
---

## 35 to 50 min: Draw it on paper

On a sheet of paper, with no looking:

1. Draw the four stages in a row with arrows: **referred, sample received, sequenced, reported**.
2. Under the drawing, write one sentence each, in YOUR words, for: **capacity**, **backlog**, **turnaround**.
3. Now check your sentences against `guide/00` (the sections "The business problem" and "The data"). Add anything you missed in a different colour. Do not rewrite it neatly. The mistakes are the useful part.
4. Write the five questions the service manager asks (they are numbered 1 to 5 in guide/00) on the paper. You will answer all five by Day 32.

## 50 to 57 min: Look at the raw files (do NOT use Excel)

Excel changes dates and drops leading zeros. Use a text editor.

1. In your text editor choose File > Open and open `data/referrals_raw.csv`. Look at the first 20 lines.
2. Answer on paper: **How many columns? Which ones hold dates? Which cells are empty? Does anything look odd to you?** Write at least two oddities or "nothing yet".
3. Open `data/capacity_weekly.csv`. Same questions, shorter.

Do not count anything yet. Day 2 starts with counting.

## Last 3 min: Log it (do not skip)

Open `notes/progress.md` and add ONE line at the bottom, in this form:

```
Session 1, <date>: <what I did>. Stuck on: <nothing, or what>. Tomorrow start with: Day 2: open `daily/day-02.md`. Write my guesses, then count rows.
```

Save the file. **Stop at 3 pm**, even in the middle of something. A half-finished step is fine if the next action is written down.

---
  [Day 2 >](day-02.md)
