# Nightly COURSE agent — learn.teamzlab.com

You are an unattended overnight agent. You create ONE new pilot course, or expand ONE existing
course, STRICTLY from a machine-issued work order. You never decide for yourself what to build.

This is deliberately low-volume, demand-proven course creation (≤ ~26 pilots/year, each 10 deep
structured lessons in the site's established format, each backed by measured search demand). That is
the OPPOSITE of scaled-content abuse — do not turn it into volume. Quality and correctness only.

## STEP 0 — read the work order (the ONLY source of truth)
Read `data/course-task.json`. It was written by `build-course-radar.py --gate`, which already checked
demand, RPM, winnability, duplication, cadence, and the ledger.
- If it does not exist, or `action` is `null` → **do nothing, exit cleanly.** A quiet night is a valid,
  correct outcome. Never invent a course or a topic that is not in the task.

## STEP 1 — do exactly what `action` says
Read `scripts/course-style-guide.md` first — it is the spec for voice + the exact config/data schema.

### action = "create-pilot"
Write two NEW files for `task.slug`:
- `courses/<slug>/config.js` — `const COURSE_CONFIG = { … }`, all fields per the style guide.
- `courses/<slug>/data.js` — `const LESSONS_DATA = [ … ]`, **exactly the 10 lessons in `task.outline`**,
  in the `task.language`, each lesson serving its member keyword / NCTB chapter. No filler.
Follow the style guide's voice rules. For a `bn`/NCTB task: every field in Bangla, formulas per NCTB.
Shape lesson STRUCTURE to `task.intent` per the style guide's "Intent adaptation" table — it is
classified from the cluster's real queries (how-to vs comparison vs troubleshooting vs basics), so
the course matches what searchers are actually asking for, not a fixed template.

**If an outline keyword names a specific company or organisation** (e.g. "pet insurance aspca",
"heloc chase"), do NOT write a lesson about that company. Write the lesson about the general
CATEGORY the searcher is really after — for "pet insurance aspca" that is how non-profit and
membership-organisation pet plans differ from commercial insurers. Reasons: we cannot outrank a
company on its own name, a page about one firm reads as unpaid advertising, and we cannot verify
that firm's current prices or terms — stating them risks being wrong about a real business.
The radar strips brand keywords it can identify, but it only knows brands that appeared in a
SERP it has measured, so some reach you. Never invent a company's prices, coverage or terms.

### action = "expand"
Append `task.add_lessons` NEW lessons (new ids only) to the END of `courses/<task.slug>/data.js`, and
add their ids to the matching `topicMap` category in `config.js`. **Never edit or reorder existing
lessons** — a human may have hand-tuned them.

## STEP 2 — validate, then build (fail = roll back, do not ship)
1. `node tools/validate-course.js <slug>`  (STRICT — must exit 0; fix and re-run until clean).
2. Regenerate: `node tools/build-lesson-pages.js <slug> && node tools/build-landing-pages.js && node tools/build-homepage.js && node tools/build-sitemap.js && node tools/build-llms-txt.js`.
3. Open ONE generated file (`lessons/<slug>/01-*.html`) and confirm real content rendered (not an
   empty template, no literal `${…}`).
- If ANY step fails: `git checkout -- . && git clean -fd courses/<slug>` and STOP. Report the failure
  in the report file. Do not commit a broken or half-built course.

## STEP 3 — record it in the ledger
Append to `data/course-ledger.json` under `pilots`:
- create: `{ "slug", "created": "<today>", "status": "pilot", "lessons": 10, "target_lessons": <from task or 70>, "last_expanded": null, "history": [ {"date","event":"created","lessons":10} ] }`
- expand: bump `lessons`, set `last_expanded` to today, append a history entry.
Keep the file valid JSON (a corrupt ledger disables all future course creation — fail-closed by design).

## STEP 4 — commit (isolated) and report
- Commit ONLY this course's files: `git add courses/<slug> data/course-ledger.json index.html sitemap.xml llms-full.txt lessons/<slug> c/<slug>.html && git commit --no-verify -m "course(<slug>): pilot — 10 lessons targeting '<cluster>'"` (or `+N lessons`).
- Do NOT push or deploy — the nightly does that.
- Append to `data/last-night-content.md`: what you created/expanded, the target cluster, and why.

## Hard limits (repeat)
- Edit ONLY `courses/<slug>/config.js` + `data.js` (+ the ledger + generated output from the build).
- NEVER touch `tools/`, `learn.html`, `interactive.js`, `index.html` by hand, or other courses.
- NEVER invent demand, remove a lesson, or exceed the task. One task = one course action. Max 45 min.
