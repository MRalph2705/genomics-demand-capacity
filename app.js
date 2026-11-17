(function () {
  "use strict";
  var TOPICS = window.TOPICS || [];
  var SYL = window.SYLLABUS || [];
  var SITE = window.SITE || {};
  var STEPS = [
    "Read the explanation",
    "Predicted before the reveal",
    "Built it from a blank page",
    "Taught it back in my own words",
    "Self-check: all answers right"
  ];
  var KEY = "dataeng.v1";
  var mem = null;
  var byId = {};
  TOPICS.forEach(function (t) { byId[t.id] = t; });

  // ---------- storage (always safe) ----------
  function load() {
    if (mem) return mem;
    var s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
    if (!s || typeof s !== "object") s = {};
    if (!s.done) s.done = {};
    if (!s.start) s.start = SITE.defaultStart;
    if (!s.pace) s.pace = SITE.defaultPace || 4;
    if (!s.notes) s.notes = {};
    mem = s;
    return s;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* blocked: keep in memory */ } }
  function steps(id) {
    var s = load();
    if (!s.done[id] || !s.done[id].steps) s.done[id] = { steps: [false, false, false, false, false], completed: null };
    return s.done[id];
  }
  function isDone(id) { var d = load().done[id]; return !!(d && d.steps && d.steps.length === 5 && d.steps.every(Boolean)); }
  function doneCount() { return TOPICS.filter(function (t) { return isDone(t.id); }).length; }

  // ---------- DOM helpers ----------
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") el.className = attrs[k];
      else if (k === "text") el.textContent = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k]; // only our own generated SVG
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] != null) el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c != null) el.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return el;
  }
  function reveal(label, body) { return h("details", { class: "rv" }, [h("summary", { text: label }), h("div", { class: "ans" }, [body])]); }
  function bar(pct) { return h("div", { class: "bar-o", "aria-hidden": "true" }, [h("div", { class: "bar-i", style: "width:" + pct + "%" })]); }

  // ---------- dates ----------
  function parse(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function iso(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day; }
  function today() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
  function days(a, b) { return Math.round((b - a) / 86400000); }
  function fmt(d) { return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  function addDays(d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }

  var FLAT = [];
  SYL.forEach(function (m) { m.lessons.forEach(function (l) { FLAT.push({ l: l, m: m }); }); });
  function dueDate(i) { var s = load(); return addDays(parse(s.start), Math.round((i + 1) / s.pace * 7)); }
  function expectedNow() {
    var s = load(), el = Math.max(0, days(parse(s.start), today()));
    return Math.min(FLAT.length, Math.floor(el / 7 * s.pace + 1e-9));
  }

  var SRC = { B: "Baraa", Z: "Zoomcamp", D: "DP-700", O: "own material" };
  function srcNames(c) { return String(c || "").replace(/\b([BZDO])\b/g, function (x) { return SRC[x]; }); }

  // ---------- pages ----------
  function pageSyllabus() {
    var root = h("div");
    root.appendChild(h("h1", { text: "Course map" }));
    var built = TOPICS.length, total = FLAT.length;
    root.appendChild(h("div", { class: "card" }, [
      h("div", { class: "row" }, [
        h("div", { class: "grow" }, [h("div", { class: "mute small", text: "Lessons built" }), h("div", { class: "stat", text: built + " of " + total })]),
        h("div", { class: "grow" }, [h("div", { class: "mute small", text: "Lessons you have finished" }), h("div", { class: "stat", text: doneCount() })])]),
      h("p", { class: "small mute", text: "Built lessons are complete: picture, prediction, explanation, run-checked example in senior style, tasks and self-check. Planned lessons are on the map but not written yet. Each built lesson uses only ideas taught before it." })]));
    SYL.forEach(function (m, mi) {
      var builtHere = m.lessons.filter(function (l) { return l.status === "built"; });
      var doneHere = builtHere.filter(function (l) { return isDone(l.id); }).length;
      var d = h("details", { class: "mod", open: mi === 0 ? "open" : false });
      d.appendChild(h("summary", {}, [
        h("strong", { text: "Module " + m.no + ": " + m.title }),
        h("span", { class: "mute small", text: "  " + doneHere + " done, " + builtHere.length + " built, " + m.lessons.length + " planned" })]));
      d.appendChild(h("p", { class: "small mute", text: "Basis: " + srcNames(m.basis) }));
      m.lessons.forEach(function (l) {
        var cls = l.status === "built" ? (isDone(l.id) ? "ok" : "") : (l.status === "waiting" ? "bad" : "mute");
        var label = l.status === "built" ? (isDone(l.id) ? "Done" : "Built") : (l.status === "waiting" ? "Waiting for " + (l.waitsFor || []).map(function (w) { return w.no || w; }).join(", ") : "Planned");
        var inner = h("div", { class: "lrow" }, [
          h("span", { class: "lno", text: l.no }),
          h("span", { class: "grow" + (l.status === "built" ? "" : " mute"), text: l.title }),
          l.src ? h("span", { class: "small mute", text: srcNames(l.src) }) : null,
          h("span", { class: "tag " + cls, text: label })]);
        d.appendChild(l.status === "built" ? h("a", { class: "tl", href: "#/topic/" + l.id }, [inner]) : inner);
      });
      root.appendChild(d);
    });
    return root;
  }

  function prereqBox(t) {
    var items = [], missing = [];
    (t.prereqs || []).forEach(function (p) {
      var ok = isDone(p.id);
      if (!ok) missing.push(p);
      items.push(h("li", {}, [h("a", { href: "#/topic/" + p.id, text: p.no + " " + p.title }), " ", h("span", { class: "tag " + (ok ? "ok" : "bad"), text: ok ? "done" : "not done" })]));
    });
    var box = h("div", { class: "card" }, [h("strong", { text: "Before this lesson" })]);
    if (items.length) box.appendChild(h("ul", {}, items)); else box.appendChild(h("p", { class: "small", text: "You need nothing from other lessons." }));
    if (t.assumed && t.assumed.length) {
      box.appendChild(h("p", { class: "small", text: "This lesson assumes these SQL ideas from your earlier SQL days:" }));
      var ul = h("ul");
      t.assumed.forEach(function (a) { ul.appendChild(h("li", { text: a.label || a })); });
      box.appendChild(ul);
      box.appendChild(h("p", { class: "small mute", text: (SITE.assumedNote || "") }));
    }
    if (missing.length) box.appendChild(h("p", { class: "late", text: "You have not ticked " + missing.length + " earlier lesson" + (missing.length > 1 ? "s" : "") + " yet. Do them first, or this lesson may ask you things you have not seen." }));
    return box;
  }

  function noteList(notes) {
    if (!notes || !notes.length) return null;
    var box = h("div", { class: "notes" }, [h("strong", { text: "Why this is the senior way" })]), ul = h("ul");
    notes.forEach(function (n) { ul.appendChild(h("li", { text: n })); });
    box.appendChild(ul);
    return box;
  }

  function pageTopic(id) {
    var t = byId[id];
    if (!t) return h("div", {}, [h("p", { text: "This lesson is not built yet." }), h("a", { href: "#/topics", text: "Back to the course map" })]);
    var mod = SYL.filter(function (m) { return m.id === t.module; })[0];
    var root = h("div");
    root.appendChild(h("a", { href: "#/topics", text: "< Course map" }));
    root.appendChild(h("h1", { text: t.lessonNo + " " + t.title }));
    root.appendChild(h("p", {}, [h("span", { class: "tag " + (t.track === "SQL" ? "sql" : ""), text: t.track }), " ",
      h("span", { class: "mute", text: " Module " + (mod ? mod.no + ": " + mod.title : "") + ". About " + t.minutes + " minutes. " + t.summary })]));
    root.appendChild(prereqBox(t));

    root.appendChild(h("h2", { text: "1. Picture" }));
    root.appendChild(h("div", { class: "card" }, [h("div", { html: t.picture.svg }), h("p", { class: "mute small", text: t.picture.caption || "" })]));

    root.appendChild(h("h2", { text: "2. Predict first" }));
    root.appendChild(h("div", { class: "card" }, [h("p", { text: t.predict.q, style: "white-space:pre-wrap" }),
      h("p", { class: "mute small", text: "Write your answer on paper first. Then open the answer." }), reveal("Show the answer", h("p", { text: t.predict.reveal }))]));

    root.appendChild(h("h2", { text: "3. Explanation" }));
    t.explain.forEach(function (sec) {
      var c = h("div", { class: "card" }, [h("h3", { text: sec.h })]), ul = h("ul");
      sec.p.forEach(function (line) { ul.appendChild(h("li", { text: line })); });
      c.appendChild(ul); root.appendChild(c);
    });

    root.appendChild(h("h2", { text: "4. Worked example" }));
    root.appendChild(h("div", { class: "card" }, [
      h("strong", { text: t.example.title }), h("pre", {}, [t.example.code]),
      h("div", { class: "small mute", text: "Output (checked by running it):" }), h("pre", { class: "out" }, [t.example.output]),
      t.track === "SQL" ? h("p", { class: "mute small", text: "The numbers were checked in DuckDB. The syntax is SQL Server (T-SQL). Check small differences when you run it on your own server." }) : null,
      noteList(t.example.notes)]));

    root.appendChild(h("h2", { text: "5. Question and answer" }));
    root.appendChild(h("div", { class: "card" }, [h("p", { text: t.qa.q, style: "white-space:pre-wrap" }), reveal("Show the answer", h("p", { text: t.qa.a }))]));

    if (t.mixed && t.mixed.length) {
      root.appendChild(h("h2", { text: "Mixed practice: what is asked together" }));
      root.appendChild(h("p", { class: "mute small", text: "Real questions mix ideas. Write each answer yourself first. Then open the answer and compare line by line. Every output was produced by running the answer." }));
      t.mixed.forEach(function (m) {
        var code = m.sql || m.code || m.answer || "";
        root.appendChild(h("div", { class: "card" }, [
          h("strong", { text: m.title }), h("p", { text: m.task }),
          (m.tableData ? h("div", { class: "small mute", text: "Table " + (m.table || "") + ":" }) : null), (m.tableData ? h("pre", {}, [m.tableData]) : null),
          (m.setup ? h("div", { class: "small mute", text: "Given:" }) : null), (m.setup ? h("pre", {}, [m.setup]) : null),
          (m.broken ? h("div", { class: "small mute", text: "Code to fix:" }) : null), (m.broken ? h("pre", {}, [m.broken]) : null),
          (m.broken ? reveal("What the broken code prints (predict first)", h("pre", { class: "out" }, [m.brokenOutput || ""])) : null),
          reveal("Hint", h("p", { text: m.hint || "" })),
          reveal("Show the answer", h("div", {}, [h("pre", {}, [code]), h("div", { class: "small mute", text: "Output:" }), h("pre", { class: "out" }, [m.output || ""])]))]));
      });
    }

    root.appendChild(h("h2", { text: "6. Build it from a blank page" }));
    root.appendChild(h("div", { class: "card" }, [h("p", { text: t.build.task }), reveal("Hint", h("p", { text: t.build.hint })), reveal("How to check your work", h("p", { text: t.build.check }))]));

    root.appendChild(h("h2", { text: "7. Teach it back" }));
    var ta = h("textarea", { "aria-label": "Your teach-back", placeholder: "Write it in your own words." });
    ta.value = load().notes[t.id] || "";
    ta.addEventListener("input", function () { load().notes[t.id] = ta.value; save(); });
    root.appendChild(h("div", { class: "card" }, [h("p", { text: t.teach }), ta, h("p", { class: "small mute", text: "Saved in this browser as you type." })]));

    root.appendChild(h("h2", { text: "8. Self-check" }));
    var sc = h("div", { class: "card" });
    t.selfCheck.forEach(function (q) { sc.appendChild(h("div", {}, [h("p", { text: q.q }), reveal("Show the answer", h("p", { text: q.a }))])); });
    root.appendChild(sc);

    if (t.mistakes && t.mistakes.length) {
      root.appendChild(h("h2", { text: "Your own past mistakes on this topic" }));
      var mc = h("div", { class: "card" }), mul = h("ul");
      t.mistakes.forEach(function (m) { mul.appendChild(h("li", { text: m })); });
      mc.appendChild(mul); root.appendChild(mc);
    }

    root.appendChild(h("h2", { text: "Tick off" }));
    var tc = h("div", { class: "card" }), status = h("p", { class: "mute" });
    function refresh() {
      var n = steps(t.id).steps.filter(Boolean).length;
      status.textContent = n === 5 ? "Lesson complete" + (steps(t.id).completed ? " on " + steps(t.id).completed + "." : ".") + " Tell Claude: 'I have done " + t.title + "' to get a mini test. For a test that also revises earlier lessons, copy the summary on the Tracker page and paste it to Claude." : n + " of 5 steps done.";
    }
    STEPS.forEach(function (label, i) {
      var cb = h("input", { type: "checkbox" });
      cb.checked = !!steps(t.id).steps[i];
      cb.addEventListener("change", function () {
        var d = steps(t.id); d.steps[i] = cb.checked;
        d.completed = d.steps.every(Boolean) ? (d.completed || iso(today())) : null;
        save(); refresh();
      });
      tc.appendChild(h("label", { class: "chk" }, [cb, h("span", { text: label })]));
    });
    tc.appendChild(status); refresh(); root.appendChild(tc);

    var idx = TOPICS.indexOf(t), nav = h("div", { class: "row" });
    if (idx > 0) nav.appendChild(h("a", { class: "btn", href: "#/topic/" + TOPICS[idx - 1].id, text: "< Previous" }));
    if (idx < TOPICS.length - 1) nav.appendChild(h("a", { class: "btn", href: "#/topic/" + TOPICS[idx + 1].id, text: "Next >" }));
    root.appendChild(nav);
    return root;
  }

  function summaryText() {
    var s = load(), done = [], open = [];
    TOPICS.forEach(function (t, i) {
      var d = s.done[t.id], n = d && d.steps ? d.steps.filter(Boolean).length : 0;
      if (n === 5) done.push({ t: t, i: i, date: d.completed || "" }); else if (n > 0) open.push({ t: t, n: n });
    });
    // oldest first: by completion date, then by lesson order
    done.sort(function (x, y) { return x.date < y.date ? -1 : x.date > y.date ? 1 : x.i - y.i; });
    var newest = done.length ? done[done.length - 1].date : "";
    var fresh = done.filter(function (x) { return x.date === newest; });
    var older = done.filter(function (x) { return x.date !== newest; });
    var lines = ["Study summary (" + iso(today()) + ")",
      "Finished: " + done.length + " of " + TOPICS.length + " built lessons (" + FLAT.length + " planned in total). Plan expects " + expectedNow() + " by today at " + s.pace + " lessons a week.", ""];
    function row(x) { return "[x] " + x.t.lessonNo + " " + x.t.title + " (" + x.t.track + ", done " + (x.date || "date unknown") + "): " + x.t.summary; }
    lines.push("NEWEST finished lessons (the focus of the test):");
    if (fresh.length) fresh.forEach(function (x) { lines.push(row(x)); }); else lines.push("(none yet)");
    lines.push("", "EARLIER finished lessons (the review pool, oldest first):");
    if (older.length) older.forEach(function (x) { lines.push(row(x)); }); else lines.push("(none yet)");
    if (open.length) {
      lines.push("", "Started but not finished:");
      open.forEach(function (x) { lines.push("[ ] " + x.t.lessonNo + " " + x.t.title + " (" + x.n + "/5 steps)"); });
    }
    lines.push("", "Please write me a CUMULATIVE mini test:",
      "1. NEW (about half the questions): 4 or 5 questions on the NEWEST lessons above.",
      "2. REVIEW (about half): 4 or 5 questions from the EARLIER lessons. Favour the oldest ones and the topics on my cheat sheet where I slipped. Where you can, make one question use two or more lessons at once, for example a loop with a string method and an f-string.",
      "3. ONE write-from-a-blank-page task that joins the newest lesson with at least two earlier ones. Use a business example, not football.",
      "Rules: use only ideas from the finished lessons above. Run every question's code before you send it, so the answers are checked. Do not show the answers until I reply. After I answer, tell me which lesson each wrong answer belongs to, show the real error messages, and add repeated mistakes to my cheat sheet.");
    return lines.join("\n");
  }

  function progressNav(active) {
    return h("div", { class: "subnav" }, [
      h("a", { href: "#/tracker", class: active === "tracker" ? "on" : "", text: "Lesson ticks" }),
      h("a", { href: "#/calendar", class: active === "calendar" ? "on" : "", text: "Schedule" })]);
  }

  function pageTracker() {
    var root = h("div");
    root.appendChild(h("h1", { text: "Progress" }));
    root.appendChild(progressNav("tracker"));
    root.appendChild(h("div", { class: "card" }, [h("h3", { text: "Days studied (last 28 days)" }), logStrip(28),
      h("p", { class: "small mute", text: "F = full hour, M = minimum day. Tick today on the Today page." })]));
    var n = doneCount(), pct = Math.round(100 * n / Math.max(1, TOPICS.length));
    root.appendChild(h("div", { class: "card" }, [h("div", { class: "stat", text: n + " of " + TOPICS.length + " built lessons done (" + pct + "%)" }), bar(pct),
      h("p", { class: "small mute", text: "More lessons are added in batches. The full map has " + FLAT.length + " lessons." })]));
    SYL.forEach(function (m) {
      var ts = TOPICS.filter(function (t) { return t.module === m.id; });
      if (!ts.length) return;
      var tbl = h("table"), head = h("tr");
      ["Lesson"].concat(STEPS.map(function (x, i) { return "Step " + (i + 1); })).forEach(function (x) { head.appendChild(h("th", { text: x })); });
      tbl.appendChild(head);
      ts.forEach(function (t) {
        var tr = h("tr"), d = steps(t.id);
        tr.appendChild(h("td", {}, [h("a", { href: "#/topic/" + t.id, text: t.lessonNo + " " + t.title })]));
        d.steps.forEach(function (v, i) {
          var cb = h("input", { type: "checkbox", "aria-label": t.title + ": " + STEPS[i] });
          cb.checked = !!v;
          cb.addEventListener("change", function () {
            d.steps[i] = cb.checked; d.completed = d.steps.every(Boolean) ? (d.completed || iso(today())) : null; save(); render();
          });
          tr.appendChild(h("td", {}, [cb]));
        });
        tbl.appendChild(tr);
      });
      root.appendChild(h("h2", { text: "Module " + m.no + ": " + m.title }));
      root.appendChild(h("div", { class: "card", style: "overflow-x:auto" }, [tbl]));
    });
    root.appendChild(h("p", { class: "small mute", text: "Steps: " + STEPS.map(function (x, i) { return (i + 1) + " " + x; }).join("; ") + "." }));

    var out = h("textarea", { "aria-label": "Summary for Claude", readonly: "readonly", rows: "16" }); out.value = summaryText();
    var msg = h("span", { class: "mute small" });
    var copy = h("button", { class: "pri", text: "Copy summary for Claude", onclick: function () {
      out.value = summaryText(); out.select(); var ok = false;
      try { if (navigator.clipboard) { navigator.clipboard.writeText(out.value); ok = true; } else ok = document.execCommand("copy"); } catch (e) { ok = false; }
      msg.textContent = ok ? "Copied. Paste it into your chat with Claude." : "Select the text and copy it by hand.";
    } });
    root.appendChild(h("h2", { text: "Tell Claude what you have done" }));
    root.appendChild(h("div", { class: "card" }, [h("p", { text: "Paste this summary into the chat. Claude then writes one mini test. Half the questions cover your newest lessons. The other half revise earlier lessons, and one task mixes them." }), out, h("div", { class: "row" }, [copy, msg])]));

    var imp = h("input", { type: "file", accept: "application/json", "aria-label": "Import file" });
    imp.addEventListener("change", function () {
      var f = imp.files && imp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { var o = JSON.parse(r.result); if (!o || typeof o.done !== "object") throw new Error("bad"); mem = o; load(); save(); render(); }
        catch (e) { alert("This file is not a valid export."); }
      };
      r.readAsText(f);
    });
    var exp = h("button", { text: "Export my progress", onclick: function () {
      var blob = new Blob([JSON.stringify(load(), null, 1)], { type: "application/json" });
      var a = h("a", { href: URL.createObjectURL(blob), download: "dataeng-progress-" + iso(today()) + ".json" });
      document.body.appendChild(a); a.click(); a.remove();
    } });
    var reset = h("button", { text: "Reset everything", onclick: function () {
      if (confirm("Delete all ticks and notes in this browser?")) { mem = { done: {}, notes: {}, start: SITE.defaultStart, pace: SITE.defaultPace || 4 }; save(); render(); }
    } });
    root.appendChild(h("h2", { text: "Keep a copy" }));
    root.appendChild(h("div", { class: "card" }, [h("p", { text: "Your progress lives in this browser on this device. Export it to move to another device or to keep a backup." }),
      h("div", { class: "row" }, [exp, h("label", { class: "row" }, ["Import: ", imp]), reset])]));
    return root;
  }

  function pageCalendar() {
    var root = h("div"), s = load();
    root.appendChild(h("h1", { text: "Progress" }));
    root.appendChild(progressNav("calendar"));
    var total = FLAT.length, built = TOPICS.length, done = doneCount(), expected = expectedNow();
    var target = Math.min(expected, built), behind = Math.max(0, target - done);
    var finish = dueDate(total - 1), n = today(), st = parse(s.start), el = Math.max(0, days(st, n));
    var verdict, vcls;
    if (behind > 0) { verdict = behind + (behind === 1 ? " lesson" : " lessons") + " to catch up on. Do the next one."; vcls = ""; }
    else if (expected > built && done >= built) { verdict = "Caught up with everything built. More lessons are coming."; vcls = "ontime"; }
    else if (done > target) { verdict = "Ahead by " + (done - target) + (done - target === 1 ? " lesson." : " lessons."); vcls = "ontime"; }
    else { verdict = "On plan."; vcls = "ontime"; }
    root.appendChild(h("div", { class: "card" }, [
      h("div", { class: "row" }, [
        h("div", { class: "grow" }, [h("div", { class: "mute small", text: "You have finished" }), h("div", { class: "stat", text: String(done) })]),
        h("div", { class: "grow" }, [h("div", { class: "mute small", text: "The plan expects by today" }), h("div", { class: "stat", text: String(expected) })]),
        h("div", { class: "grow" }, [h("div", { class: "mute small", text: "Built so far" }), h("div", { class: "stat", text: String(built) })])]),
      h("p", { class: "stat " + vcls, text: verdict }),
      h("p", { class: "small mute", text: "Today is " + fmt(n) + ". Week " + (Math.floor(el / 7) + 1) + " of the plan. At " + s.pace + " lessons a week, all " + total + " lessons finish on " + fmt(finish) + "." }),
      bar(Math.round(100 * done / Math.max(1, total))),
      h("p", { class: "small mute", text: "The bar shows your finished lessons out of all " + total + " planned. If the plan expects more lessons than are built, the gap is on my side, not yours. The verdict compares you with the lessons that exist." })]));

    var sd = h("input", { type: "date", value: s.start, "aria-label": "Plan start" });
    var pc = h("input", { type: "number", min: "1", max: "14", value: String(s.pace), "aria-label": "Lessons per week", style: "width:5em" });
    function setPlan() { var p = parseInt(pc.value, 10); if (sd.value && p >= 1 && p <= 14) { s.start = sd.value; s.pace = p; save(); render(); } }
    sd.addEventListener("change", setPlan); pc.addEventListener("change", setPlan);
    root.appendChild(h("div", { class: "card row" }, [h("label", {}, ["Start ", sd]), h("label", {}, ["Lessons per week ", pc]),
      h("span", { class: "small mute", text: "Pick a pace you can keep. A lesson is about 40 minutes of work plus the tasks." })]));

    root.appendChild(h("h2", { text: "Schedule by module" }));
    var tbl = h("table"), hd = h("tr");
    ["Module", "Starts", "Ends", "Built", "Done"].forEach(function (x) { hd.appendChild(h("th", { text: x })); });
    tbl.appendChild(hd);
    var idx = 0;
    SYL.forEach(function (m) {
      var first = idx, last = idx + m.lessons.length - 1; idx += m.lessons.length;
      var ts = TOPICS.filter(function (t) { return t.module === m.id; });
      var dn = ts.filter(function (t) { return isDone(t.id); }).length;
      var late = last < expected && dn < ts.length;
      var tr = h("tr");
      tr.appendChild(h("td", { text: m.no + ". " + m.title }));
      tr.appendChild(h("td", { text: fmt(first === 0 ? st : dueDate(first - 1)) }));
      tr.appendChild(h("td", { text: fmt(dueDate(last)) }));
      tr.appendChild(h("td", { text: ts.length + " of " + m.lessons.length }));
      tr.appendChild(h("td", {}, [h("span", { class: "tag " + (dn === ts.length && ts.length ? "ok" : late ? "bad" : ""), text: dn + "/" + ts.length })]));
      tbl.appendChild(tr);
    });
    root.appendChild(h("div", { class: "card", style: "overflow-x:auto" }, [tbl]));

    root.appendChild(h("h2", { text: "Lesson by lesson (built lessons)" }));
    var t2 = h("table"), h2r = h("tr");
    ["Due", "Lesson", "Status"].forEach(function (x) { h2r.appendChild(h("th", { text: x })); });
    t2.appendChild(h2r);
    FLAT.forEach(function (f, i) {
      if (f.l.status !== "built") return;
      var dn = isDone(f.l.id), od = !dn && dueDate(i) < n;
      var tr = h("tr");
      tr.appendChild(h("td", { text: fmt(dueDate(i)) }));
      tr.appendChild(h("td", {}, [h("a", { href: "#/topic/" + f.l.id, text: f.l.no + " " + f.l.title })]));
      tr.appendChild(h("td", {}, [h("span", { class: "tag " + (dn ? "ok" : od ? "bad" : ""), text: dn ? "Done" : od ? "Overdue" : "Upcoming" })]));
      t2.appendChild(tr);
    });
    root.appendChild(h("div", { class: "card", style: "overflow-x:auto" }, [t2]));

    root.appendChild(h("h2", { text: "Milestones and notes" }));
    var mc = h("div", { class: "card" }), ul = h("ul");
    (SITE.milestones || []).forEach(function (m) { var d = parse(m.date), left = days(n, d); ul.appendChild(h("li", { text: fmt(d) + ": " + m.label + " (" + (left >= 0 ? left + " days away" : -left + " days ago") + ")" })); });
    (SITE.notes || []).forEach(function (x) { ul.appendChild(h("li", { text: x })); });
    mc.appendChild(ul); root.appendChild(mc);
    return root;
  }

  function pageMethod() {
    var root = h("div"), src = SITE.sources || {};
    function srcText(k) { var v = src[k]; if (!v) return ""; return typeof v === "string" ? v : (v.title || "") + (v.note ? " - " + v.note : ""); }
    root.appendChild(h("h1", { text: "Help and method" }));
    root.appendChild(h("div", { class: "card" }, [h("h3", { text: "Where things are" }), h("ul", {}, [
      h("li", {}, [h("a", { href: "#/today", text: "Today" }), ": what to do in your hour, the minimum day, the 15-minute rule, wins."]),
      h("li", {}, [h("a", { href: "#/topics", text: "Course" }), ": every lesson, in order."]),
      h("li", {}, [h("a", { href: "#/genomics", text: "Genomics project" }), ": the project pages, milestones and the Python-block order."]),
      h("li", {}, [h("a", { href: "#/tracker", text: "Progress" }), ": lesson ticks and the schedule. Export a backup of everything here."]),
      h("li", {}, [h("a", { href: "#/genomics/stay", text: "Stay on track" }), ": the full guide for hard days."])])]));
    var blocks = [
      ["How every lesson is built", [
        "Step 1. Look at the picture.", "Step 2. Predict the answer on paper. Then check it.", "Step 3. Read the short explanation.",
        "Step 4. Read the worked example. Every example was run and its output checked.", "Step 5. Answer the question without help. Then check.",
        "Step 6. Do the mixed practice, then build the code from a blank page.", "Step 7. Teach it back in your own words.", "Step 8. Do the self-check."]],
      ["Nothing is used before it is taught", [
        "Each lesson lists the ideas it teaches and the ideas it uses. A check runs every time the site is built.",
        "If a lesson uses an idea that no earlier lesson teaches, the build stops. The lesson is held back until its prerequisite is written.",
        "Each lesson shows 'Before this lesson'. It links the lessons you need and shows which you have finished.",
        "The SQL lessons assume basic SQL from your earlier days. They list exactly which ideas."]],
      ["Picture first, then effort", [
        "The picture comes first. It shows how the idea works before you read words.",
        "The prediction step comes before the answer. A wrong guess teaches more than a passive read.",
        "You build every idea from a blank page. Reading code and writing code are different skills.",
        "Compare yourself only with your past self. The tracker and calendar help with this."]],
      ["Simple English (ASD-STE100 style)", [
        "Sentences are short. One idea in each sentence.", "Verbs are active. The text avoids idioms and contractions.",
        "This is a style, not a certified check. The official STE rules include a fixed word list that is not used in full here."]],
      ["Where the course comes from", [
        "Baraa: " + srcText("B"), "Zoomcamp: " + srcText("Z"), "DP-700: " + srcText("D"), "Own: " + srcText("O"),
        "The Karpathy post you linked first could not be read. The course you meant is the Zoomcamp by Alexey Grigorev. The learning-method ideas here are general ones: build, predict, teach back, and compare with your past self."]],
      ["Limits you should know", [
        "The lessons are written by Claude. They follow the outline of each source course. They do not copy their text.",
        "SQL example numbers were checked in DuckDB. The syntax is T-SQL. Python examples were run in Python.",
        "Your progress is saved in this browser only. Use Export to keep a copy."]]
    ];
    blocks.forEach(function (b) {
      var c = h("div", { class: "card" }, [h("h3", { text: b[0] })]), ul = h("ul");
      b[1].forEach(function (l) { ul.appendChild(h("li", { text: l })); });
      c.appendChild(ul); root.appendChild(c);
    });
    return root;
  }


  // ---------- genomics project tab ----------

  var GEN = window.GENOMICS || { order: [], pages: {} };
  var BLOCKS = [
    { id: "py-control" }, { id: "py-functions" }, { id: "py-dict-count" }, { id: "py-comprehensions" },
    { id: "py-mutable-default" }, { id: "py-files" }, { id: "py-except-order" }, { id: "py-scripts" },
    { id: "py-datetime" }, { id: "py-logging" }, { id: "pd-basics" }, { id: "pd-select" },
    { pending: "3.3 Group and aggregate" }, { pending: "3.4 Merge and join" }, { pending: "3.5 Rolling, shift, rank, cumsum" }
  ];
  var MILESTONES = [
    ["m1", "M1  SQL half passes checks 1 to 4 and is on GitHub", "rough date: Tue 15 Dec"],
    ["m2", "M2  Python blocks done up to lesson 3.5", "rough date: Fri 18 Dec"],
    ["m3", "M3  Python half passes checks 5 to 9, pipeline runs", "rough date: Sun 10 Jan"],
    ["m4", "M4  Check 10, README written, repo public, mock interview", "rough date: Sun 17 Jan"],
    ["m5", "M5  My own second project", "rough date: Sun 31 Jan"]
  ];
  function genGet(k) { var s = load(); return !!(s.gen && s.gen[k]); }
  function genSet(k, v) { var s = load(); if (!s.gen) s.gen = {}; if (v) s.gen[k] = true; else delete s.gen[k]; save(); }
  function stepsDone(id) { var d = load().done[id]; return d && d.steps ? d.steps.filter(Boolean).length : 0; }
  function dayIds() { return GEN.order.filter(function (id) { return GEN.pages[id].kind === "day"; }); }
  function genCheck(key, label, extra, onChange) {
    var cb = h("input", { type: "checkbox" });
    cb.checked = genGet(key);
    cb.addEventListener("change", function () { genSet(key, cb.checked); if (onChange) onChange(); });
    return h("label", { class: "chk" }, [cb, h("span", {}, [label, extra ? h("span", { class: "mute small", text: "  " + extra }) : null])]);
  }

  function pageGenomicsHome() {
    var root = h("div");
    root.appendChild(h("h1", { text: "Genomics project" }));
    root.appendChild(h("p", { class: "mute", text: "Build the demand and capacity pipeline for the NHS genomics job. Each hour: 25 minutes of Python block, then 35 minutes of project. You always do the next unticked item. There is no behind, only next." }));

    var builtBlocks = BLOCKS.filter(function (b) { return b.id && byId[b.id]; });
    var nextBlock = builtBlocks.filter(function (b) { return !isDone(b.id); })[0];
    var days = dayIds();
    var nextDay = days.filter(function (id) { return !genGet(id); })[0];

    var nu = h("div", { class: "card" });
    nu.appendChild(h("h2", { text: "Next up" }));
    nu.appendChild(h("p", {}, [h("strong", { text: "Python block (25 min): " }),
      nextBlock ? h("a", { href: "#/topic/" + nextBlock.id, text: byId[nextBlock.id].lessonNo + " " + byId[nextBlock.id].title }) :
        "all the built lessons on this list are done. The next ones are being written: tell Claude."]));
    nu.appendChild(h("p", {}, [h("strong", { text: "Project (35 min): " }),
      nextDay ? h("a", { href: "#/genomics/" + nextDay, text: GEN.pages[nextDay].title }) :
        "all written pages are done. The next ones are being written: tell Claude."]));
    nu.appendChild(h("p", { class: "mute small" }, ["Low energy or only 20 minutes? Do the Python block and log it. That counts. Stuck for 15 minutes? ",
      h("a", { href: "#/genomics/stay", text: "Stay on track, section 4" }), "."]));
    root.appendChild(nu);

    var prog = h("div", { class: "card" });
    var bDone = builtBlocks.filter(function (b) { return isDone(b.id); }).length;
    var dDone = days.filter(function (id) { return genGet(id); }).length;
    var pb = h("p"), pd = h("p");
    prog.appendChild(h("h2", { text: "Progress" }));
    prog.appendChild(pb); prog.appendChild(bar(builtBlocks.length ? Math.round(100 * bDone / builtBlocks.length) : 0));
    prog.appendChild(pd); prog.appendChild(bar(days.length ? Math.round(100 * dDone / days.length) : 0));
    pb.textContent = "Python blocks: " + bDone + " of " + builtBlocks.length + " built lessons done (" + (BLOCKS.length - builtBlocks.length) + " more being written)";
    pd.textContent = "Project pages: " + dDone + " of " + days.length + " written pages done (more being written)";
    root.appendChild(prog);

    root.appendChild(h("h2", { text: "Milestones" }));
    var mc = h("div", { class: "card" });
    MILESTONES.forEach(function (m) { mc.appendChild(genCheck(m[0], m[1], m[2])); });
    mc.appendChild(h("p", { class: "mute small", text: "Dates move, the order does not. Missing a date is information, not failure: tell Claude and we re-plan." }));
    root.appendChild(mc);

    root.appendChild(h("h2", { text: "Python blocks (in order)" }));
    root.appendChild(h("p", { class: "mute small" }, ["Two sittings per lesson: A to learn it, B to prove it from a blank page. A lesson counts as done here when all five steps are ticked on its page. ",
      h("a", { href: "#/genomics/blocks", text: "How to do a lesson in 25 minutes" }), "."]));
    var bl = h("div", { class: "card" });
    BLOCKS.forEach(function (b, i) {
      var t = b.id && byId[b.id];
      var left = t ? h("a", { href: "#/topic/" + b.id, text: t.lessonNo + " " + t.title }) : h("span", { class: "mute", text: b.pending + " (being written)" });
      var n = t ? stepsDone(b.id) : 0;
      var tag = !t ? h("span", { class: "tag mute", text: "coming" }) :
        h("span", { class: "tag " + (n === 5 ? "ok" : (n ? "" : "bad")), text: n === 5 ? "done" : (n + " of 5") });
      bl.appendChild(h("div", { class: "row lrow" }, [h("span", { class: "lno", text: (i + 1) + "." }), h("span", { class: "grow" }, [left]), tag]));
    });
    root.appendChild(bl);

    root.appendChild(h("h2", { text: "Project pages" }));
    root.appendChild(h("p", { class: "mute small", text: "Each page has a PAUSE POINT about halfway, so one page is about two sittings. Tick a page when you have finished all of it. Pages from Day 15 onwards are still being written." }));
    var pl = h("div", { class: "card" });
    days.forEach(function (id) {
      var row = h("div", { class: "row lrow" }, [
        genCheck(id, "", ""),
        h("span", { class: "grow" }, [h("a", { href: "#/genomics/" + id, text: GEN.pages[id].title })])]);
      pl.appendChild(row);
    });
    root.appendChild(pl);

    root.appendChild(h("h2", { text: "Guides" }));
    var gc = h("div", { class: "card" });
    ["stay", "blocks", "plan"].forEach(function (id) {
      if (GEN.pages[id]) gc.appendChild(h("p", {}, [h("a", { href: "#/genomics/" + id, text: GEN.pages[id].title })]));
    });
    root.appendChild(gc);
    return root;
  }

  function pageGenomics(sub) {
    if (!sub) return pageGenomicsHome();
    var p = GEN.pages[sub];
    if (!p) return h("div", {}, [h("p", { text: "That page does not exist." }), h("a", { href: "#/genomics", text: "Back to the Genomics project" })]);
    var root = h("div");
    root.appendChild(h("a", { href: "#/genomics", text: "< Genomics project" }));
    root.appendChild(h("h1", { text: p.title }));
    if (p.kind === "day") root.appendChild(h("p", { class: "mute small", text: "File names in code style (such as notes/findings.py) are in your project folder, not on this site. Run commands in a terminal opened inside that folder." }));
    root.appendChild(h("div", { class: "md", html: p.html })); // our own pre-rendered markdown (see dataeng-site-src/build_genomics.py)
    if (p.kind === "day") {
      root.appendChild(h("div", { class: "card" }, [genCheck(sub, "I have finished this page (both parts)", "")]));
      var days = dayIds(), idx = days.indexOf(sub), nav = h("div", { class: "row" });
      if (idx > 0) nav.appendChild(h("a", { class: "btn", href: "#/genomics/" + days[idx - 1], text: "< Previous" }));
      if (idx < days.length - 1) nav.appendChild(h("a", { class: "btn", href: "#/genomics/" + days[idx + 1], text: "Next >" }));
      root.appendChild(nav);
    }
    return root;
  }


  // ---------- daily log, wins, and the Today page ----------
  function logMap() { var s = load(); if (!s.log) s.log = {}; return s.log; }
  function logSet(d, v) { var l = logMap(); if (v) l[iso(d)] = v; else delete l[iso(d)]; save(); }
  function streak() {
    var l = logMap(), d = today(), n = 0;
    if (!l[iso(d)]) d = addDays(d, -1);
    while (l[iso(d)]) { n++; d = addDays(d, -1); }
    return n;
  }
  function logStrip(count) {
    var l = logMap(), wrap = h("div", { class: "strip", role: "img", "aria-label": "Study days over the last " + count + " days" });
    for (var i = count - 1; i >= 0; i--) {
      var d = addDays(today(), -i), v = l[iso(d)];
      wrap.appendChild(h("span", { class: "dot " + (v || "none") + (i === 0 ? " now" : ""), title: fmt(d) + (v === "full" ? ": full hour" : v === "min" ? ": minimum day" : ": nothing logged"), text: v === "full" ? "F" : v === "min" ? "M" : "" }));
    }
    return wrap;
  }
  function copyButton(label, getText) {
    var msg = h("span", { class: "mute small" });
    var b = h("button", { text: label, onclick: function () {
      var ok = false;
      try { if (navigator.clipboard) { navigator.clipboard.writeText(getText()); ok = true; } } catch (e) { ok = false; }
      msg.textContent = ok ? "Copied." : "Select the text and copy it by hand.";
    } });
    return h("span", {}, [b, " ", msg]);
  }

  function pageToday() {
    var root = h("div"), GENP = (window.GENOMICS || { order: [], pages: {} });
    root.appendChild(h("h1", { text: "Today" }));
    root.appendChild(h("p", { class: "mute", text: fmt(today()) + ". Your hour is 2 to 3 pm. Do the next item. There is no behind, only next." }));

    // what is next
    var nextBlock = BLOCKS.filter(function (b) { return b.id && byId[b.id] && !isDone(b.id); })[0];
    var dayList = GENP.order.filter(function (id) { return GENP.pages[id].kind === "day"; });
    var nextDay = dayList.filter(function (id) { return !genGet(id); })[0];

    // missed-yesterday notice
    var l = logMap(), yKey = iso(addDays(today(), -1)), any = Object.keys(l).length > 0;
    if (any && !l[yKey] && !l[iso(today())]) {
      root.appendChild(h("div", { class: "callout amb" }, [h("strong", { text: "Yesterday was missed. That is fine. " }),
        "No catch-up. Today is a minimum day: do the Python block only, then tick it below. The rule is never two days in a row."]));
    }

    var hour = h("div", { class: "card hour" });
    hour.appendChild(h("h2", { text: "Your hour" }));
    var ol = h("ol", { class: "steps" });
    ol.appendChild(h("li", {}, [h("strong", { text: "Python block, 25 minutes. " }),
      nextBlock ? h("a", { href: "#/topic/" + nextBlock.id, text: "Next: " + byId[nextBlock.id].lessonNo + " " + byId[nextBlock.id].title }) : "The built lessons on the list are done. Tell Claude.",
      h("div", { class: "mute small" }, ["Sitting A learns it. Sitting B proves it from a blank page the next day. ", h("a", { href: "#/genomics/blocks", text: "How a block works" }), "."])]));
    ol.appendChild(h("li", {}, [h("strong", { text: "Project, 35 minutes. " }),
      nextDay ? h("a", { href: "#/genomics/" + nextDay, text: "Next: " + GENP.pages[nextDay].title }) : "All written pages are done. Tell Claude.",
      h("div", { class: "mute small", text: "Each page has a PAUSE POINT. If time runs out, stop there and write down where." })]));
    ol.appendChild(h("li", {}, [h("strong", { text: "Log it, 3 minutes. " }), "Write one line in notes/progress.md: what you did and the first thing to do next time. Then tick today below."]));
    hour.appendChild(ol);
    root.appendChild(hour);

    // tick today
    var tickCard = h("div", { class: "card" });
    tickCard.appendChild(h("h2", { text: "Tick today" }));
    var statusP = h("p", { class: "stat2" }), strip = h("div"), streakP = h("p", { class: "mute" });
    function refreshLog() {
      var v = logMap()[iso(today())];
      statusP.textContent = v === "full" ? "Today: full hour done. Well done." : v === "min" ? "Today: minimum day done. That counts as a day." : "Today: not ticked yet.";
      var n = streak();
      streakP.textContent = "Streak: " + n + (n === 1 ? " day" : " days") + " in a row. Last 14 days below (F = full hour, M = minimum day).";
      strip.textContent = ""; strip.appendChild(logStrip(14));
    }
    tickCard.appendChild(statusP);
    tickCard.appendChild(h("div", { class: "row" }, [
      h("button", { class: "pri", text: "I did the full hour", onclick: function () { logSet(today(), "full"); refreshLog(); } }),
      h("button", { text: "I did a minimum day", onclick: function () { logSet(today(), "min"); refreshLog(); } }),
      h("button", { text: "Undo", onclick: function () { logSet(today(), null); refreshLog(); } })]));
    tickCard.appendChild(streakP); tickCard.appendChild(strip);
    root.appendChild(tickCard); refreshLog();

    // minimum day
    var md = h("div", { class: "callout good big" });
    md.appendChild(h("h2", { text: "MINIMUM DAY: never zero" }));
    md.appendChild(h("p", { text: "Tired? Short of time? Only 20 minutes? Do just this. It counts as a full day on your streak." }));
    var ol2 = h("ol", { class: "steps" });
    ["Open a terminal in the project folder and run python check.py. (2 minutes)",
     "Do the next Python block sitting. (about 20 minutes)",
     "Write the progress line, then press \"I did a minimum day\" above. (1 minute)"].forEach(function (x) { ol2.appendChild(h("li", { text: x })); });
    md.appendChild(ol2);
    md.appendChild(h("p", {}, [h("strong", { text: "The rule: never miss two days in a row. " }),
      "One missed day is normal. After a missed day, do a minimum day, not a catch-up day."]));
    root.appendChild(md);

    // stuck
    var st = h("div", { class: "card" });
    st.appendChild(h("h2", { text: "Stuck? The 15-minute rule" }));
    st.appendChild(h("p", { class: "mute", text: "Hitting a wall is the work, not a sign you are bad at this. The plan is decided in advance so you do not have to decide while stuck." }));
    var tbl = h("table");
    [["0 to 5 min", "Read the error message slowly, out loud. The last line says what went wrong. Delete code until it works, then add back one line at a time."],
     ["5 to 10 min", "Print what you are unsure about: print(x), print(type(x)), print(df.head())."],
     ["10 to 15 min", "Open the first hint. Only the first."],
     ["At 15 min", "STOP. Write a wall note (below). Switch to something else for the rest of the sitting. Send the note to Claude."]].forEach(function (r) {
      tbl.appendChild(h("tr", {}, [h("td", {}, [h("strong", { text: r[0] })]), h("td", { text: r[1] })]));
    });
    st.appendChild(tbl);
    var wall = "WALL, " + iso(today()) + ": I was trying to ______. I expected ______. I got ______ (paste the last error line).\nI already tried ______ and ______.";
    st.appendChild(h("pre", { text: wall }));
    st.appendChild(copyButton("Copy the wall note", function () { return wall; }));
    st.appendChild(h("p", { class: "small mute" }, ["A wall you solve is a win. Write it below. ", h("a", { href: "#/genomics/stay", text: "Read the full Stay on track guide" }), "."]));
    root.appendChild(st);

    // wins
    var wc = h("div", { class: "card" }), list = h("div");
    wc.appendChild(h("h2", { text: "Wins" }));
    wc.appendChild(h("p", { class: "mute small", text: "One line after each sitting: something you can do now that you could not do last week. Read these on a bad day." }));
    var inp = h("input", { type: "text", "aria-label": "A win", placeholder: "For example: I wrote a ROW_NUMBER query without looking", style: "width:100%" });
    function refreshWins() {
      var w = load().wins || [], shown = w.slice().reverse();
      list.textContent = "";
      if (!shown.length) list.appendChild(h("p", { class: "mute small", text: "No wins yet. Your first one is coming." }));
      shown.slice(0, 5).forEach(function (x) { list.appendChild(h("p", {}, [h("span", { class: "mute small", text: x.d + "  " }), x.t])); });
      if (shown.length > 5) {
        var det = h("details", {}, [h("summary", { text: "Show all " + shown.length })]);
        shown.slice(5).forEach(function (x) { det.appendChild(h("p", {}, [h("span", { class: "mute small", text: x.d + "  " }), x.t])); });
        list.appendChild(det);
      }
    }
    function addWin() {
      var t = inp.value.trim(); if (!t) return;
      var s2 = load(); if (!s2.wins) s2.wins = []; s2.wins.push({ d: iso(today()), t: t }); save(); inp.value = ""; refreshWins();
    }
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") addWin(); });
    wc.appendChild(h("div", { class: "row" }, [h("span", { class: "grow" }, [inp]), h("button", { text: "Add win", onclick: addWin })]));
    wc.appendChild(list); root.appendChild(wc); refreshWins();

    // sunday
    var sd = h("div", { class: "card" });
    sd.appendChild(h("h2", { text: "Sunday review (10 minutes)" }));
    var ol3 = h("ol", { class: "steps" });
    ["How many days did I do something, out of 7? (Aim for 5, not 7.)", "What was my biggest wall, and did I solve it?", "What is the first thing I will do on Monday?"].forEach(function (x) { ol3.appendChild(h("li", { text: x })); });
    sd.appendChild(ol3);
    sd.appendChild(h("p", { class: "mute small", text: "Send the three answers to Claude in the chat. Or write \"missed it\" and the plan resets with no judgement." }));
    root.appendChild(sd);

    root.appendChild(h("p", {}, [h("a", { class: "btn", href: "#/genomics", text: "Genomics project" }), " ", h("a", { class: "btn", href: "#/topics", text: "Course map" }), " ", h("a", { class: "btn", href: "#/method", text: "Help" })]));
    return root;
  }

  // ---------- router ----------
  function render() {
    var app = document.getElementById("app"), hash = location.hash || "#/today";
    var parts = hash.replace(/^#\//, "").split("/"), tab = parts[0], page;
    if (tab === "today") page = pageToday();
    else if (tab === "topic") page = pageTopic(parts[1]);
    else if (tab === "tracker") page = pageTracker();
    else if (tab === "calendar") page = pageCalendar();
    else if (tab === "method") page = pageMethod();
    else if (tab === "genomics") page = pageGenomics(parts[1]);
    else if (tab === "topics") page = pageSyllabus();
    else { tab = "today"; page = pageToday(); }
    app.textContent = ""; app.appendChild(page);
    Array.prototype.forEach.call(document.querySelectorAll("#nav a"), function (a) {
      var group = { topic: "topics", topics: "topics", tracker: "progress", calendar: "progress", method: "help" }[tab] || tab;
      a.classList.toggle("on", a.getAttribute("data-tab") === group);
    });
  }
  window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
  render();
})();
