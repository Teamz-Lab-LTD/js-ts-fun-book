# Teamz Lab Learning — Course Style Guide

The style is mostly ENCODED IN THE SCHEMA. Fill every field the way the best existing courses
(`class-9-math-bangla`, `js-ts-fun-book`, `flutter-dart-masterclass`) do. This guide is the spec.

## Voice (non-negotiable)
- **Analogy-first.** Every lesson opens with a plain, everyday analogy. Use local, concrete imagery
  the reader lives with (রিকশা, ফুচকা, bazar, cricket; for tech: a coffee shop queue, a locker key).
  Never abstract. A 12-year-old must picture it.
- **Conversational, never a textbook.** Short sentences. "You" not "the learner". Explain, don't lecture.
- **One misconception per lesson.** Include a point that names the common wrong belief and corrects it.
- **Bangla stays Bangla.** For a `bn` course, EVERY field is Bangla (titles, analogies, quiz). Do not
  mix English sentences into Bangla lessons. Technical terms may stay English inline (e.g. "function").
- **NCTB accuracy over creativity.** For curriculum courses (class 6–10), the math/science MUST match
  the official NCTB chapter and formula. Correctness first; style second. Never invent a formula.
- **No clickbait, no fake claims.** Never promise "guaranteed 95+" as fact; frame as "built to help you".
- **Cite, quote, and quantify — in every lesson.** Name the source of any rule, standard or spec
  ("per the NCTB 2026 Class 9 syllabus", "Flutter's official State management guide"), include at
  least one short direct quotation from that source, and give at least one concrete number (a date,
  a version, a measured figure, a limit). This is the ONE content tactic with published evidence
  behind it: adding cited sources, quotations and statistics raised how much of a source an AI
  assistant reproduces in its answer by 30-40% (Aggarwal et al., KDD 2024 "GEO: Generative Engine
  Optimization"; partially re-validated ICLR 2026). Two honest limits, so nobody over-trusts it:
  the metric is word-share INSIDE the AI answer, never clicks or revenue, and on a real production
  engine the gain shrank to +9-22%. Do it because a cited, quantified lesson is a better lesson —
  treat the AI-citation lift as a bonus, not the reason.
- **Never invent a citation.** A fabricated source or made-up statistic is worse than none. If the
  real number is not known, write the lesson without it rather than guessing one.

## config.js — `const COURSE_CONFIG = { ... }`
Required: `title`, `subtitle` (may contain a `<span class="accent">`), `shortTitle`, `description`
(supports `{lessonCount}`), `keywords` (comma string), `topics` (array, 6–12), `educationalLevel`.
Structure: `topicMap` (category name → array of lesson ids; MUST cover every lesson id exactly once),
`conceptFlows` (lesson id → 3–5 short concept steps), `srs` `{boxes:5, intervals:[1,3,7,14,30],
reviewBatchSize:10}`, `xp` `{lessonComplete:10, quizCorrect:5, streak:2}`.
Presentation: `social` `{hashtags, tweetTemplate}`, `footerTagline`, `thinkDeeperQ`, `branding`
`{trustStrip, headerSubtitle, services:[...]}`. Copy an existing course's config as the template and
change the content — do not omit fields the generators read.
For a non-code course add `defaultLang`/`forceLang` (locks UI language) and set the card language to 1.

## data.js — `const LESSONS_DATA = [ { ... } ]`
Each lesson object, in this shape (the generators read these exact keys):
```js
{
  id: 1,                          // unique integer, sequential
  title: "…",                     // answers a real search query in the reader's words
  subtitle: "…",
  analogy: "…",                   // the everyday-imagery opener (REQUIRED)
  whatIs: "…",                    // plain-speech definition (becomes the meta description)
  realWorld: "…",                 // where this shows up in real life / real BD context
  points: [                       // 6–8 items; include ONE "⚠️ common misconception" point
    { t: "Short bold title", d: "one-clause explanation", code: "optional snippet" }
  ],
  code: "…",                      // worked example (for math too: a step-by-step solved sum)
  walkthrough: ["step 1", "step 2"],
  bug: { code: "…", hint: "…", answer: "…" },   // code courses: a debug challenge.
                                                 // math: use it as "ভুল ধরো" — a worked WRONG solution to spot.
  eli5: "…",                      // explain to a 10-year-old (REQUIRED)
  funFact: "…",
  quiz: [                         // 4–5 options, ONE correct, each with a short explanation
    { q: "…", options: ["…"], answer: 0, explain: "…" }
  ]
}
```
A pilot = 10 lessons. Every lesson must serve a member keyword from the task or an NCTB chapter — no
filler lessons. Expansion appends NEW ids only; never rewrite an existing lesson (a human may have
edited it).

## Hard limits
- Edit ONLY `courses/<slug>/config.js` and `courses/<slug>/data.js`. Never touch `tools/`,
  `learn.html`, `interactive.js`, `index.html`, or any generated file in `lessons/` or `c/`.
- Never remove a lesson or change another course.
- If unsure of an NCTB fact, write a smaller correct course, not a larger wrong one.
