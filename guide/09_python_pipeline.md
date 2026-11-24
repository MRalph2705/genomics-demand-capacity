# Step 9 (Python): The pipeline

**Goal:** one command runs the whole analysis and writes the results. This is what "a pipeline" means: the pieces joined in the right order, with logging, so someone else can run it.

**File to write:** `main()` in `run_pipeline.py`   **Check:** `python check.py 9`   **Time:** about 2 hours

## Think first

1. What goes wrong if `main()` is 150 lines long? (Hint: how would you test it? How would you find a bug?)
2. What should a person see on screen when it runs? What would you want in the log if it failed at 3 a.m.?
3. The reject file and the row counts: who reads them, and when?

## The pattern

You already have the pieces. A pipeline is a short list of calls:

```
read  ->  clean (+ write rejects)  ->  weekly table  ->  backtest  ->  forecast  ->  gap  ->  scenarios  ->  turnaround  ->  charts
```

Rules for `main()`:
- One line per idea. The work is in the `dcap` functions.
- Log the counts at the point they are known (`log.info("...", value)`), not at the end.
- Write every output to the `output/` folder.
- No numbers in `main()` that belong in `config.py`.

## Your task

The comment at the top of `run_pipeline.py` lists the steps and the files to write. Build it **one stage at a time**: write stage 1, run `python run_pipeline.py`, see it work, add the next. Do not write all of it and then run it.

## Hints (open one at a time)

<details><summary>Logging</summary>

`logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(levelname)s %(message)s")` at the start of `main()`. Then `log.info(...)` anywhere. Why `logging` and not `print`? Logging has levels, times and can go to a file.
</details>

<details><summary>Writing the CSV files</summary>

`frame.to_csv(path, index=False, date_format="%Y-%m-%d")`. For the weekly table and the forecast the **index** is `week_start`, so keep it: `index_label="week_start"` (the weekly table already names its index).
</details>

<details><summary>The scenarios</summary>

A DataFrame with one column of extra-capacity options and one column of results. `weeks_to_clear` returns `None` when it does not clear: pandas stores that as missing. The backlog now is the last `backlog_end`.
</details>

<details><summary>Planned capacity</summary>

A Series: `capacity.set_index("week_start")["sequencing_capacity"]`. `capacity_gap` looks up the forecast weeks in it.
</details>

## The check

It copies your project to a fresh folder, runs `python run_pipeline.py` there, and compares every output file with the known-good answer. So it proves the pipeline works **from nothing**, not just on your machine with leftover files.

## Compare

Open `genomics-demand-capacity/run_pipeline.py`. Is `main()` shorter or longer than yours? What would you extract into a function? Where could a failure happen without a clear message?

## Say it aloud

*"The pipeline loads, cleans, measures, forecasts and writes results with one command. Every stage logs its row counts, so I can see what a run did. I proved it works from a clean folder."*

Before you move on, run `python run_pipeline.py` yourself and open `output/demand_capacity.png`. Does the chart tell the story from the project's first page?

Next: [Step 10: make SQL and Python agree](10_make_them_agree.md)
