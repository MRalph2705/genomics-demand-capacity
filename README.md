# Data Engineering Study Site

A static website (no build step, no server). Five tabs: Today (your hour, the minimum day, the 15-minute rule, daily tick and wins), Course (every lesson), Genomics project (project pages and milestones), Progress (lesson ticks and schedule, with Export) and Help.

## Put it on GitHub (no git needed)
1. Sign in to github.com. Click New repository. Name it `dataeng-study`. Choose Public. Click Create.
2. Click "uploading an existing file". Drag in everything from this folder: `index.html`, `style.css`, `app.js`, the `data` folder and `.nojekyll`.
   If the `.nojekyll` file does not upload, skip it. The site works without it.
3. Click Commit changes.
4. Go to Settings, then Pages. Under Source choose "Deploy from a branch". Choose branch `main` and folder `/ (root)`. Click Save.
5. Wait one or two minutes. GitHub shows the address: `https://YOUR-NAME.github.io/dataeng-study/`.

## Use it
- Open a topic. Do the eight steps. Tick the five boxes at the bottom.
- Progress, then Lesson ticks: shows all ticks. "Copy summary for Claude" copies a text summary. Paste it in the chat to get a mini test.
- Progress, then Schedule: compares topics done with topics the plan expects by today. Change the start and finish dates to match your real time.
- Export your progress from Progress, Lesson ticks now and then. The export includes your streak, wins and project ticks. Ticks are saved in the browser only.

## Add a topic
Lessons live in `lessons_m1.py`, `lessons_m2.py`, `lessons_m2b.py` and `build_topics.py` (older lessons). Senior-style worked examples are in `examples_pro.py` in the `dataeng-site-src` folder. The course order is in `build_course.py`. Run `python3 build_course.py <site folder>`. It runs every example, checks that no lesson uses an idea taught later, and rewrites `data/topics.js`. Upload that one file again.
Run every code example before you write its output into a topic.


## About the worked examples
Each worked example is written in the style a senior engineer would use, with a box that says why. The Python style follows PEP 8 (layout and names), PEP 20 (the Zen of Python) and PEP 257 (docstrings). The SQL follows common T-SQL style. The Python output is made by running the code. The SQL results were checked in DuckDB, not on SQL Server.


## Genomics project tab

The `Genomics project` tab shows the day pages and guides of the guided project. They are written as markdown in the project folder and converted by `python3 dataeng-site-src/build_genomics.py <site folder> <project folder>`, which writes `data/genomics.js`. Run it again whenever a project page changes, then upload `data/genomics.js`. The tab itself lives in `app.js`, `index.html` and `style.css`.
