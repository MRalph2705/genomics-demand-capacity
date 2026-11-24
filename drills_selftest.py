"""Checks the drill bank itself: every reference solution passes its tests, and every starting file fails them.
Run:  python drills_selftest.py     (you do not need this to use the drills)"""
import os
import sys
import tempfile

import drill
from drills_bank import DRILLS

bad = 0
ids = [d["id"] for d in DRILLS]
assert len(ids) == len(set(ids)), "duplicate drill ids"
with tempfile.TemporaryDirectory() as tmp:
    for d in DRILLS:
        p = os.path.join(tmp, d["id"] + ".py")
        open(p, "w", encoding="utf-8").write(d["solution"])
        st, msg = drill.run_tests(d, p)
        ok = st == "PASS"
        problems = [] if ok else ["solution gives %s: %s" % (st, msg)]
        for box in (0, 1, 2):
            open(p, "w", encoding="utf-8").write(drill.make_stub(d, box))
            st2, msg2 = drill.run_tests(d, p)
            lvl = drill.effective_level(d, box)
            if st2 == "PASS":
                problems.append("starting file (box %d, level %s) already passes" % (box, lvl))
            if lvl in ("B", "C") and st2 in ("SYNTAX", "CRASH"):
                problems.append("starting file (box %d, level %s) should run but gives %s: %s" % (box, lvl, st2, msg2))
        if d["level"] == "A" and not d.get("skeleton"):
            problems.append("level A needs a skeleton")
        print(("ok   " if not problems else "FAIL ") + d["id"])
        for pr in problems:
            print("       " + pr)
        bad += bool(problems)
print("\n%d drills, %d with problems" % (len(DRILLS), bad))
sys.exit(1 if bad else 0)
