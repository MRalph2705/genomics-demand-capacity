# Step 0: The story and the data

## The business problem

A genomic testing laboratory gets **referrals**: a doctor asks for a patient's DNA to be tested. Each referral goes through stages:

```
referred  ->  sample received  ->  sequenced  ->  reported
```

The lab can only **sequence** a fixed number of samples each week. That is its **capacity**. If more samples arrive than the lab can sequence, a **backlog** builds up. Patients then wait longer.

The service manager wants to know:

1. Is demand (referrals) growing faster than capacity?
2. How big did the backlog get, and when?
3. Did patients wait longer than the target? Were urgent and routine cases treated the same?
4. What will demand be in the next 12 weeks? Is there a gap against planned capacity?
5. How much extra weekly capacity clears today's backlog, and how fast?

You are the data engineer. You build the pipeline that answers these.

## Your 60-second story (write it at the end, in your words)

An interviewer will say "tell me about a project". Your answer has four parts: **the problem, what you built, how you know it is right, what you would do next.** Step 11 helps you write it. Do not write it now.

## The data

The data is **synthetic**: made by a simulation of a lab queue. It is not real, and the turnaround targets (urgent 14 days, routine 42 days) are **assumptions for this exercise, not NHS standards**.

`data/referrals_raw.csv`: one row per referral.

| Column | Meaning |
|---|---|
| `referral_id` | e.g. R000001 |
| `referred_date` | the doctor asked for the test |
| `test_type` | Rare disease, Cancer panel or Rapid |
| `priority` | urgent or routine |
| `sample_received_date` | the sample reached the lab. Empty = not yet |
| `sequenced_date` | the lab sequenced it. Empty = not yet |
| `reported_date` | the result was reported. Empty = not yet |

`data/capacity_weekly.csv`: `week_start` (a Monday) and `sequencing_capacity` (samples per week). 90 weeks: **78 weeks of history, then 12 planned weeks**.

The raw file is **dirty on purpose**. Real files are. Part of your job is to find the faults and not hide them.

## How the project is built

```
data/*.csv  ->  clean (reject bad rows WITH a reason)  ->  weekly measures  ->  turnaround  ->  forecast  ->  results
```

You build the clean, weekly and turnaround parts **twice** (SQL first, Python second). Then you check that both give the same numbers. That check is what makes the project trustworthy.

## How the checker works (so it is not magic)

- Each step has a test file in `checks/`. It calls **your** code and compares the answer with the known-good answer in `checks/expected/`.
- Python checks call your functions. SQL checks run your T-SQL in DuckDB (through a translator called sqlglot).
- Some checks use tiny hand-made tables, so every rule is tested on its own.
- A step passes only if every check in it passes.

Next: [Step 1: Look at the data](01_look_at_the_data.md)
