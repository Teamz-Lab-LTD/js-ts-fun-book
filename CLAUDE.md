# CLAUDE.md — The JS & TS Fun Book

> This file gives any AI assistant (Claude, Cursor, Copilot, etc.) the full context to work on this project.

## Project Overview

**The JS & TS Fun Book** is a single-page interactive HTML tutorial that teaches TypeScript, NestJS, React, and fullstack development through 40 gamified lessons — from "What is Programming?" to deploying a full-stack app. It is designed to be viral, SEO-friendly, and visually polished — matching the Teamz Lab brand.

- **Live URL**: `https://learn.teamzlab.com/learn.html?course=js-ts-fun-book`
- **GitHub Pages**: `https://teamz-lab-ltd.github.io/teamz-lab-learning/learn.html?course=js-ts-fun-book`
- **Organization**: Teamz Lab LTD

---

## Architecture

The project uses a **multi-course architecture**:

### `learn.html` (~3400+ lines, ~100KB)
The **generic rendering engine** shared across all courses. Contains:
- All CSS (custom properties theming, dark/light mode, RTL support)
- HTML structure (sidebar, header, main content, footer)
- All JavaScript logic (rendering, quiz system with option shuffling, flashcards, SRS, achievements, XP, analytics)
- SEO meta tags (Open Graph, Twitter Cards, JSON-LD structured data, FAQ schema)
- SVG icon system
- Share buttons (Twitter, LinkedIn, Facebook, WhatsApp, Reddit, copy link)
- Firebase Analytics integration (production-only)
- 8-language UI support

### `courses/js-ts-fun-book/data.js` (~large)
The **lesson content**. Contains a single global:
```js
const LESSONS_DATA = [ ... ];  // Array of 40 lesson objects
```

### `courses/js-ts-fun-book/config.js`
The **course configuration**. Contains:
```js
const COURSE_CONFIG = { ... };  // Title, SEO, topicMap, conceptFlows, SRS settings, XP rewards
```

### `index.html`
Landing page / course selector.

---

## Design System / Theming

### CSS Custom Properties (Dark Mode — default)
```css
:root {
  --bg: #12151A;
  --surface: #1D1F25;
  --text: #FFFFFF;
  --text-muted: rgba(255,255,255,0.7);
  --border: rgba(255,255,255,0.15);
  --accent: #D9FE06;          /* Neon green — primary brand color */
  --accent-text: #12151A;
  --heading: #D9FE06;
}
```

### Light Mode (via `html[data-theme="light"]`)
### RTL Support (via `html[dir="rtl"]`) — for Arabic language

### Typography
- **Font**: Poppins (Google Fonts) — weights 400, 500, 600, 700, 800
- **Code font**: Fira Code, Consolas, monospace

---

## Lesson Data Structure

Each lesson in `LESSONS_DATA` follows this schema:

```js
{
  id: Number,            // 1-40
  title: String,
  subtitle: String,
  analogy: String,       // Fun real-world analogy
  points: [              // 7-11 teaching points (flashcard-ready)
    { t: String, d: String }
  ],
  whatIs: String,
  realWorld: String,
  code: String,          // Code example
  funFact: String,
  quiz: [                // 3-5 quizzes per lesson (options shuffled at render time)
    { q: String, opts: [String], ans: Number }
  ],
  challenge: String,
  resources: [           // External learning resources
    { type: String, title: String, url: String, source: String }
  ],
  eli5: String,          // Explain Like I'm 5
  codeWalkthrough: [String],  // Line-by-line code explanation
  bugChallenge: { code: String, hint: String, answer: String },
  difficulty: String,    // "beginner" | "intermediate" | "advanced"
  prereqs: [Number]      // Prerequisite lesson IDs
}
```

### Content Stats
- **40 lessons**, **346 teaching points**, **120+ quizzes**
- Every lesson has: analogy, points, whatIs, realWorld, code, funFact, quiz, challenge, resources, eli5, codeWalkthrough, bugChallenge, difficulty, prereqs

---

## The 40 Lessons (by topic)

| Topic | Lesson IDs | Count |
|-------|-----------|-------|
| Getting Started | 37, 38, 39, 40 | 4 |
| Fundamentals | 1, 2 | 2 |
| TypeScript Basics | 3, 4, 5, 6, 7 | 5 |
| TypeScript Advanced | 8, 9, 10, 22 | 4 |
| Frontend | 11, 12, 13 | 3 |
| API & REST | 14 | 1 |
| NestJS | 15, 16, 17 | 3 |
| Database | 18, 19 | 2 |
| Config | 20 | 1 |
| Security | 21 | 1 |
| Caching & Jobs | 23, 24 | 2 |
| Services | 25, 26, 27 | 3 |
| Real-time | 28 | 1 |
| Testing | 29 | 1 |
| DevOps | 30, 31, 32 | 3 |
| Architecture | 33 | 1 |
| Integration | 34, 35, 36 | 3 |

---

## Platform Features

### Learning
- Flashcard mode (default ON) with flip animation and SRS difficulty rating
- Code playground with live JS execution
- Line-by-line code walkthroughs
- Spot-the-bug challenges
- Typing challenges for muscle memory
- Elaborative interrogation ("Think Deeper" prompts)
- Self-explanation text input
- ELI5 toggle
- Concept flow diagrams per lesson
- Prerequisites with completion tracking

### Assessment
- Per-lesson quizzes with **shuffled option order** (seeded randomization)
- Confidence rating before answering (Unsure / Somewhat / Very Sure)
- Spaced Repetition Review (Leitner 5-box system)
- Mixed Challenge (interleaved cross-lesson quizzes)
- Achievement system with confetti and witty messages

### Gamification
- XP system with 10 level titles (Newbie to Grandmaster)
- Progress tracking (overall + per-topic)
- Bookmarks
- Point reactions (Got It / Hard / Love)
- Lesson ratings (5-star)
- Completion milestones with messages
- Certificate generation with LinkedIn share

### Tools
- Full-text search across all lesson content
- Per-lesson notes editor (rich text, copy/share, all-notes view)
- Dashboard with donut chart, topic progress, skill tree
- Keyboard shortcuts (arrows, Ctrl+K search, D dashboard, N notes, T theme)

### Internationalization
- 8-language UI: English, Bengali, Hindi, Spanish, Arabic, Portuguese, Indonesian, French
- Arabic RTL support (CSS `[dir="rtl"]` rules)
- Google Translate integration for lesson content

### Analytics
- Firebase Analytics (production-only: learn.teamzlab.com, teamz-lab-ltd.github.io)
- `window.__logEvent(name, params)` — tracks 20+ event types
- `window.__setUserProps(props)` — user segmentation
- Events: lesson_view, lesson_complete, quiz_answer, bookmark_toggle, theme_toggle, share_click, hire_click, etc.

---

## State Management

All state persisted to `localStorage` key `funbook_state`:
- `current`, `completed`, `quizScores`, `bookmarks`, `xp`, `xpEarned`
- `lessonNotes`, `selfExplanations`, `pointReactions`, `lessonRatings`
- `confidenceRatings`, `srsCards`, `flashcardDifficulty`, `reviewStreak`
- `lang`, `certName`

Theme persisted separately in `localStorage` key `theme`.

---

## Known Considerations & Rules

1. **Quiz options are shuffled at render time** — `shuffleOpts()` uses seeded randomization so options appear in different positions but stay consistent across re-renders.
2. **Quiz count is dynamic** — The system uses `l.quiz.length` everywhere, not a hardcoded number. You can add more quizzes freely.
3. **data.js uses `const LESSONS_DATA`** — The HTML references this global. Do not wrap in a module or change the variable name.
4. **config.js uses `const COURSE_CONFIG`** — Contains topicMap, conceptFlows, SRS settings, XP rewards. Read by learn.html.
5. **No external dependencies** — Only Google Fonts (Poppins) and Firebase Analytics CDN. Everything else is self-contained.
6. **SVG icons only, no emoji** — Icons use `stroke: currentColor` for theme compatibility.
7. **RTL support** — Arabic language triggers `dir="rtl"` on `<html>`. Code blocks stay LTR.

---

## How to Add a New Lesson

1. Add a new object to `LESSONS_DATA` in `data.js` following the schema above (all fields required)
2. Add the lesson ID to the appropriate topic in `config.js` `topicMap`
3. Add a concept flow array in `config.js` `conceptFlows`
4. The lesson count, progress, and SEO are all auto-calculated from the data

---

## Deployment

- **GitHub Pages**: Deploy from `main` branch, root `/`
- **Custom domain**: learn.teamzlab.com
- **No build step** — Everything is static HTML/CSS/JS
- **Files needed**: `learn.html`, `index.html`, `courses/js-ts-fun-book/data.js`, `courses/js-ts-fun-book/config.js`

---

## Business Integration

- Footer CTA for hiring Teamz Lab (Upwork, website, apps)
- Services: AI Integration, Web & Mobile Apps, SaaS, TypeScript expertise
- Organization schema with service catalog in JSON-LD
- Analytics tracks hire_click events with location context
