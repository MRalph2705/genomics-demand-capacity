# Step 11: README and interview practice

**Goal:** turn the project into something a stranger understands in two minutes, and something you can talk about for ten.

**Time:** 2–3 hours. Use `README.md` (a template with gaps for **your** words).

## Part 1: Write the README

Open `README.md`. Fill every `[YOUR WORDS]`. Rules:
- Run the pipeline first. Take the numbers **from your output**, not from the example. Yours may differ slightly if you made different choices. Say what you got.
- Keep the **synthetic data** warning. Keep "targets are assumptions, not NHS standards".
- Short sentences. A manager should be able to read it.
- Put in the limits honestly. A project that says what it cannot do is more believable.

## Part 2: Your 60-second story

Write it in 4 parts, then say it aloud until it fits in a minute:

1. **The problem.** One sentence: what the service wants to know.
2. **What I built.** Two sentences: the pipeline, the stages, SQL and Python.
3. **How I know it is right.** Two sentences: rejects counted, tests, SQL and Python agree, a backtest for the forecast.
4. **What I would do next.** One sentence: real definitions from the service team, seasons, staff capacity.

## Part 3: Questions an interviewer may ask

Practise each answer aloud. A strong answer is short, has one concrete number, and says why.

| Question | A strong answer includes |
|---|---|
| Why did you only count old referrals in the turnaround measure? | Recent referrals have not had time to finish, so they look late for no real reason. Explain the cutoff rule with an example. |
| How did you test the forecast? | Hid the last 12 weeks, scored three methods on them (MAE and MAPE), kept the simplest that won. Say what the error was and what it means in plain words. |
| How do you know the SQL and Python agree? | A check compares every weekly figure and every cohort. Mention rounding (half up vs half to even). |
| What did you do with bad data? | Found it in profiling (counts), kept rejected rows with one reason each, the counts add up. Never silently dropped. |
| What would you do differently with real data? | Check definitions with the service team (what counts as a referral? as "received"?), add stages and staff capacity, model seasons, and handle patient data under information governance rules. |
| Why are the targets not real? | They are assumptions for the exercise. Real targets must come from the service. |
| What was the hardest part? | Be honest and specific. A real answer from you beats a polished one. |
| What would break if the file format changed? | Which function reads it, which check would fail first, what the log would say. |
| Walk me through your backlog calculation. | Cumulative samples received minus cumulative samples sequenced. Why not referrals? |
| Why SQL **and** Python? | Different tools in the job. SQL close to the data, Python for tests, charts and forecasting. Writing both let you check one against the other. |

## Part 4: Be honest about how you built it

This was a **guided build**. You can say so, and be proud of it: *"I followed a structured build plan with automated checks, and wrote the code myself. I kept a decision log."* The log in `notes/decisions.md` is your proof.

Do not claim things that are not true:
- Do not say you invented the design. Say you built it.
- Do not say it was tested on SQL Server unless you ran it on SQL Server (Step 12).
- Do not claim the data is real.

If you do not know something, say "I'd check", then say how. That is a good answer.

## Part 5: The mock interview

Ask a friend, or record yourself, answering five of the questions above. Watch it back. Fix the first thing you don't like.

## Finish

1. `python check.py all` — every step PASSED.
2. Upload to GitHub (below).
3. Put the link on your CV, with one line: *"Pipeline in T-SQL and Python (pandas): cleaning with rejects, weekly demand/capacity/backlog, turnaround against target, backtested 12-week forecast; SQL and Python reconciled."*

### Upload to GitHub (no git needed)

1. Create a repository named `genomics-demand-capacity`.
2. **Add file → Upload files.** Drag in the **contents** of this folder (the folders `dcap`, `sql`, `data`, `guide`, `notes`, `checks`, `output`, and the files). GitHub keeps the folder structure when you drag whole folders.
3. Do not upload `__pycache__` folders.
4. Check the README shows the chart. If the picture is missing, `output/demand_capacity.png` was not uploaded.
