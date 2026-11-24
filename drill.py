#!/usr/bin/env python3
"""drill.py: one short code-writing task a day, checked for you.

    python drill.py            today's drill (creates a file for you to edit)
    python drill.py check      run the hidden tests on your file
    python drill.py hint       a hint (after you have tried)
    python drill.py stop       stuck? stop for today, with a wall note to send
    python drill.py solution   see the answer (only after 2 failed checks)
    python drill.py more       another drill today
    python drill.py list       every drill and where you are with it
    python drill.py help       this text

How it works
- A drill unlocks when you tick Sitting A of its lesson in notes/tracker.md.
- The first time, you may get a skeleton with ___ blanks. Next time the same drill comes back with less help
  (signature only), then with an empty page. That is on purpose: it is how writing from a blank page gets easier.
- A drill you pass comes back after 1, 2, 4, 8, 16, 32 days. A drill you miss comes back tomorrow.
- The tests are hidden. They tell you what failed, not the answer.
Spend 10 minutes. If you are not through, run `python drill.py stop`.
"""
import datetime as dt
import json
import os
import re
import subprocess
import sys
import tempfile
import textwrap
import time

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from drills_bank import DRILLS  # noqa: E402

STATE = os.path.join(HERE, "notes", "drills.json")
WORK = os.path.join(HERE, "drills", "work")
TRACKER = os.path.join(HERE, "notes", "tracker.md")
GAPS = [1, 2, 4, 8, 16, 32]
LEVEL_NAME = {"A": "fill the blanks", "B": "signature and docstring given", "C": "blank page"}
BY_ID = {d["id"]: d for d in DRILLS}


def lesson_key(d):
    a, b = d["lesson"].split(".")
    return (int(a), int(b))


ORDER = sorted(range(len(DRILLS)), key=lambda i: (lesson_key(DRILLS[i]), i))
ORDERED = [DRILLS[i] for i in ORDER]


# ---------------------------------------------------------------- state
def today():
    return dt.date.today()


def load():
    try:
        with open(STATE, encoding="utf-8") as f:
            s = json.load(f)
    except (OSError, ValueError):
        s = {}
    s.setdefault("drills", {})
    s.setdefault("current", None)
    s.setdefault("done_on", {})
    return s


def save(s):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    with open(STATE, "w", encoding="utf-8") as f:
        json.dump(s, f, indent=1)


def rec(s, did):
    return s["drills"].setdefault(did, {"box": 0, "due": None, "tries": 0, "hint": False, "solution": False, "passes": 0, "started": None})


def unlocked_lessons():
    """Lessons whose Sitting A is ticked in the tracker. Lessons the tracker does not list (1.1 to 1.3) are always open."""
    listed, opened = {}, set()
    try:
        text = open(TRACKER, encoding="utf-8").read()
    except OSError:
        return None  # no tracker: everything is open
    for m in re.finditer(r"^- \[.\] (\d+\.\d+) .*?: A \[(.)\]", text, re.M):
        listed[m.group(1)] = m.group(2).strip().lower() == "x"
    return {k for k, v in listed.items() if v}, set(listed)


def is_unlocked(d):
    u = unlocked_lessons()
    if u is None:
        return True
    ticked, listed = u
    return d["lesson"] not in listed or d["lesson"] in ticked


# ---------------------------------------------------------------- stubs
def effective_level(d, box):
    idx = "ABC".index(d["level"]) + min(box, 2)
    return "ABC"[min(idx, 2)]


def make_stub(d, box):
    lvl = effective_level(d, box)
    head = "# %s  (lesson %s, %s)\n# Edit this file. Then run:  python drill.py check\n\n" % (d["title"], d["lesson"], LEVEL_NAME[lvl])
    imports = (d["imports"].strip() + "\n\n\n") if d["imports"].strip() else ""
    if lvl == "A" and d.get("skeleton"):
        return head + d["skeleton"]
    if lvl == "B":
        doc = textwrap.fill(d["doc"], 74, subsequent_indent="    ")
        return head + imports + d["sig"] + '\n    """' + doc + '"""\n'
    name_part = d["sig"].replace("def ", "").rstrip(":")
    task = "\n".join("# " + line for line in textwrap.wrap(d["doc"], 76))
    return head + imports.rstrip("\n") + ("\n\n" if imports else "") + "# TASK\n" + task + "\n#\n# Name and parameters: " + name_part + "\n# Write it from an empty page. No notes.\n"


# ---------------------------------------------------------------- tests
HARNESS = r'''
import sys, io, contextlib, traceback
user_path, tests_path = sys.argv[1], sys.argv[2]
def check(cond, msg):
    if not cond:
        raise AssertionError(msg)
ns = {"__name__": "drill_file"}
src = open(user_path, encoding="utf-8").read()
try:
    code = compile(src, "your file", "exec")
except SyntaxError as e:
    print("SYNTAX|line %s: %s" % (e.lineno, e.msg))
    sys.exit(3)
buf = io.StringIO()
try:
    with contextlib.redirect_stdout(buf):
        exec(code, ns)
except Exception as e:
    tb = [f for f in traceback.extract_tb(e.__traceback__) if f.filename == "your file"]
    where = (" on line %d" % tb[-1].lineno) if tb else ""
    print("CRASH|%s: %s%s" % (type(e).__name__, e, where))
    sys.exit(3)
def need(name):
    if name not in ns:
        raise AssertionError("I cannot find %s. Define it with the exact name and parameters shown in the task." % name)
    return ns[name]
try:
    import pandas as pd
except Exception:
    pd = None
tns = {"ns": ns, "need": need, "check": check, "pd": pd}
try:
    exec(compile(open(tests_path, encoding="utf-8").read(), "tests", "exec"), tns)
except AssertionError as e:
    print("FAIL|%s" % e)
    sys.exit(1)
except Exception as e:
    tb = traceback.extract_tb(e.__traceback__)
    mine = [f for f in tb if f.filename == "your file"]
    where = (" (in your code, line %d)" % mine[-1].lineno) if mine else ""
    print("ERROR|%s: %s%s" % (type(e).__name__, e, where))
    sys.exit(2)
print("PASS|")
sys.exit(0)
'''


def run_tests(d, path):
    """Returns (status, message). status is PASS, FAIL, ERROR, SYNTAX, CRASH or TIMEOUT."""
    with tempfile.TemporaryDirectory() as tmp:
        h, t = os.path.join(tmp, "h.py"), os.path.join(tmp, "t.py")
        open(h, "w", encoding="utf-8").write(HARNESS)
        open(t, "w", encoding="utf-8").write(d["tests"])
        try:
            r = subprocess.run([sys.executable, "-I", h, os.path.abspath(path), t], cwd=tmp, capture_output=True, text=True, timeout=20)
        except subprocess.TimeoutExpired:
            return "TIMEOUT", "Your code ran for more than 20 seconds. Is there a loop that never ends?"
        out = (r.stdout or "").strip().splitlines()
        last = out[-1] if out else ""
        if "|" in last:
            status, msg = last.split("|", 1)
            return status, msg
        return "ERROR", (r.stderr or r.stdout or "unknown problem").strip()[-400:]


# ---------------------------------------------------------------- commands
def pick(s, more=False):
    t = today().isoformat()
    due = []
    for d in ORDERED:
        r = s["drills"].get(d["id"])
        if r and r.get("due") and r["due"] <= t and is_unlocked(d):
            due.append((r["due"], r["box"], d))
    if due:
        due.sort(key=lambda x: (x[0], x[1]))
        return due[0][2], "review"
    for d in ORDERED:
        if d["id"] not in s["drills"] and is_unlocked(d):
            return d, "new"
    return None, None


def show(d, box, kind):
    lvl = effective_level(d, box)
    path = os.path.relpath(os.path.join(WORK, d["id"] + ".py"), HERE)
    print()
    print("=" * 64)
    print("DRILL: %s" % d["title"])
    print("Lesson %s   |   %s   |   %s" % (d["lesson"], "a review: less help this time" if kind == "review" else "new", LEVEL_NAME[lvl]))
    print("=" * 64)
    print(textwrap.fill(d["doc"], 72))
    print()
    print("Your file:  %s" % path)
    print("1. Open it in your editor and write the code. Type it, do not paste.")
    print("2. Run:  python drill.py check")
    print("Aim for 10 minutes. Stuck?  python drill.py hint   or   python drill.py stop")
    print()


def cmd_today(more=False):
    s = load()
    t = today().isoformat()
    if s["current"] and s["current"] in BY_ID:
        d = BY_ID[s["current"]]
        r = rec(s, d["id"])
        print("You have an unfinished drill. Carry on with it.")
        show(d, r["box"], "review" if r["passes"] else "new")
        return
    if s["done_on"].get(t, 0) >= 1 and not more:
        print("You have done today's drill. Nice. For another one:  python drill.py more")
        return
    d, kind = pick(s)
    if not d:
        if unlocked_lessons() is not None:
            print("Nothing left to unlock yet. Tick Sitting A of the next lesson in notes/tracker.md, then run this again.")
        else:
            print("No drills left.")
        return
    r = rec(s, d["id"])
    os.makedirs(WORK, exist_ok=True)
    path = os.path.join(WORK, d["id"] + ".py")
    if os.path.exists(path):
        os.replace(path, os.path.join(WORK, d["id"] + ".old.py"))
    open(path, "w", encoding="utf-8").write(make_stub(d, r["box"]))
    r.update({"tries": 0, "hint": False, "solution": False, "started": time.time()})
    s["current"] = d["id"]
    save(s)
    show(d, r["box"], kind)


def current_drill(s, name=None):
    did = name or s["current"]
    if not did or did not in BY_ID:
        print("No drill is open. Run:  python drill.py")
        return None
    return BY_ID[did]


def cmd_check():
    s = load()
    d = current_drill(s)
    if not d:
        return
    r = rec(s, d["id"])
    path = os.path.join(WORK, d["id"] + ".py")
    if not os.path.exists(path):
        print("I cannot find %s. Run  python drill.py  to make it." % os.path.relpath(path, HERE))
        return
    status, msg = run_tests(d, path)
    mins = (time.time() - r["started"]) / 60 if r.get("started") else 0
    if status == "PASS":
        helped = r["hint"] or r["solution"]
        if helped:
            r["due"] = (today() + dt.timedelta(days=GAPS[min(r["box"], 5)])).isoformat()
            g = GAPS[min(r["box"], 5)]
            nxt = "in %d day%s (you used the hint, so the gap did not grow)" % (g, "" if g == 1 else "s")
        else:
            r["box"] = min(r["box"] + 1, 6)
            gap = GAPS[min(r["box"] - 1, 5)]
            r["due"] = (today() + dt.timedelta(days=gap)).isoformat()
            nxt = "in %d day%s, with %s" % (gap, "" if gap == 1 else "s", "less help" if r["box"] < 2 else "a blank page")
        r["passes"] += 1
        s["current"] = None
        s["done_on"][today().isoformat()] = s["done_on"].get(today().isoformat(), 0) + 1
        save(s)
        print()
        print("PASS.  %s" % ("First go, no hints. " if not helped and r["tries"] == 0 else ""))
        print("Time: about %d minute%s. This drill comes back %s." % (round(mins), "" if round(mins) == 1 else "s", nxt))
        print("Add a line to notes/wins.md: what you can write now that you could not before.")
        print("Another drill today?  python drill.py more")
        return
    r["tries"] += 1
    save(s)
    print()
    label = {"FAIL": "NOT YET", "ERROR": "YOUR CODE RAISED AN ERROR", "SYNTAX": "SYNTAX ERROR", "CRASH": "YOUR FILE CRASHED WHEN IT RAN", "TIMEOUT": "TOO SLOW"}.get(status, status)
    print("%s" % label)
    print(textwrap.fill(msg, 72))
    if status in ("SYNTAX", "CRASH", "ERROR") and "___" in open(path, encoding="utf-8").read():
        print("There are still ___ blanks in your file. Replace each ___ with the missing code.")
    print()
    print("Attempt %d. Read the message, change one thing, check again." % r["tries"])
    if r["tries"] == 2 and not r["hint"]:
        print("You can ask for a hint now:  python drill.py hint")
    if r["tries"] >= 3:
        print("Still stuck? Options: python drill.py hint, python drill.py stop, or python drill.py solution")
    if mins >= 10:
        print("10 minutes are up. Run  python drill.py stop  and write a wall note. Do not grind.")


def cmd_hint():
    s = load()
    d = current_drill(s)
    if not d:
        return
    r = rec(s, d["id"])
    if r["tries"] < 1:
        print("Run  python drill.py check  at least once first. The test message is often enough.")
        return
    r["hint"] = True
    save(s)
    print("HINT: " + textwrap.fill(d["hint"], 72))


def wall_note(d):
    print()
    print("Wall note (paste into notes/progress.md, and send to Claude if you like):")
    print("WALL, %s: drill %s. I was trying to ______. I expected ______. I got ______." % (today().isoformat(), d["id"]))
    print("I already tried ______ and ______.")


def cmd_stop():
    s = load()
    d = current_drill(s)
    if not d:
        return
    r = rec(s, d["id"])
    r["due"] = (today() + dt.timedelta(days=1)).isoformat()
    s["current"] = None
    s["done_on"][today().isoformat()] = s["done_on"].get(today().isoformat(), 0) + 1
    save(s)
    print("Stopped. That is fine: stopping at the wall is the plan, not a failure.")
    print("This drill comes back tomorrow with a fresh file. Your old attempt is still in drills/work/.")
    wall_note(d)


def cmd_solution():
    s = load()
    d = current_drill(s)
    if not d:
        return
    r = rec(s, d["id"])
    if r["tries"] < 2:
        print("Run  python drill.py check  at least twice first. Then try  python drill.py hint.")
        return
    r["solution"] = True
    r["box"] = 0
    r["due"] = (today() + dt.timedelta(days=1)).isoformat()
    s["current"] = None
    s["done_on"][today().isoformat()] = s["done_on"].get(today().isoformat(), 0) + 1
    save(s)
    print("One way to write it:\n")
    print(d["solution"])
    print("Read it. Then close it and type it from memory. It comes back tomorrow with a fresh file, so you write it again.")


def cmd_list():
    s = load()
    t = today().isoformat()
    print("%-20s %-5s %-3s %s" % ("drill", "lesson", "lvl", "status"))
    for d in ORDERED:
        r = s["drills"].get(d["id"])
        if not is_unlocked(d):
            st = "locked (tick Sitting A of lesson %s)" % d["lesson"]
        elif not r:
            st = "new"
        elif r["due"] and r["due"] <= t:
            st = "due now (box %d)" % r["box"]
        elif r["due"]:
            st = "next %s (box %d)" % (r["due"], r["box"])
        else:
            st = "open"
        print("%-20s %-6s %-3s %s" % (d["id"][:20], d["lesson"], d["level"], st))


def main(argv):
    cmd = argv[1] if len(argv) > 1 else ""
    if cmd in ("", "today"):
        cmd_today()
    elif cmd == "more":
        cmd_today(more=True)
    elif cmd == "check":
        cmd_check()
    elif cmd == "hint":
        cmd_hint()
    elif cmd == "stop":
        cmd_stop()
    elif cmd == "solution":
        cmd_solution()
    elif cmd == "list":
        cmd_list()
    else:
        print(__doc__)


if __name__ == "__main__":
    main(sys.argv)
