# Genomic testing service: demand, capacity and backlog

[YOUR WORDS: one or two sentences. What question does this answer, and for whom?]

> **The data is synthetic.** No real patient or NHS data is used. A simulation of a laboratory queue made the referral file. The turnaround targets are **assumptions for this exercise, not NHS standards**. The results show how the method works. They are not findings about any real service.

![Demand, capacity and backlog](output/demand_capacity.png)

## The business questions

1. [YOUR WORDS]
2. [YOUR WORDS]
3. [YOUR WORDS]

## What the analysis found (on this synthetic data)

Take every number from **your own** `output/` files.

- [YOUR WORDS: demand against capacity]
- [YOUR WORDS: the peak backlog, and when]
- [YOUR WORDS: urgent against routine turnaround]
- [YOUR WORDS: the 12-week outlook and the extra capacity that clears the backlog]

## How it works

[YOUR WORDS: draw the flow in a few lines, as a text diagram.]

| Step | Where | What it does |
|---|---|---|
| Clean | `sql/02_clean_load.sql`, `dcap/clean.py` | [YOUR WORDS] |
| Measure | `sql/03_weekly_summary.sql`, `dcap/metrics.py` | [YOUR WORDS] |
| Turnaround | `sql/04_turnaround.sql`, `dcap/metrics.py` | [YOUR WORDS] |
| Forecast | `dcap/forecast.py` | [YOUR WORDS] |

### Choices worth knowing about

Use your `notes/decisions.md`. Four or five of your best entries.

- [YOUR WORDS]

## Run it

```
pip install -r requirements.txt
python run_pipeline.py
python check.py all
```

## Limits

- Synthetic data. [YOUR WORDS: what real services have that this does not.]
- [YOUR WORDS: the forecast's limit.]
- [YOUR WORDS: SQL Server. Say honestly whether you ran the SQL on SQL Server or only in DuckDB.]

## Ideas for next steps

- [YOUR WORDS]

## What I learned

[YOUR WORDS: two sentences. The most honest, specific thing you learned.]
