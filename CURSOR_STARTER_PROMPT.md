# Cursor Starter Prompt

> Copy everything below this line and paste it as your first message in Cursor to give the AI full context.

---

I'm working on **The JS & TS Fun Book** — an interactive single-page HTML tutorial for learning TypeScript, NestJS, React, and fullstack development. Before doing anything, please read `CLAUDE.md` in the project root — it has the complete architecture, design system, data schema, function docs, and all project context.

## Quick Summary

**Architecture**: Two files work together:
- `the-js-ts-fun-book.html` (~40KB) — The rendering engine containing all CSS, HTML structure, JavaScript logic, SVG icon map, SEO meta tags, achievement/confetti system, and theme toggle
- `data.js` (~128KB) — Contains `const LESSONS_DATA = [...]` with 30 lesson objects. Each lesson has: title, subtitle, analogy, 6-11 teaching points `{t, d}`, whatIs, realWorld, code example, funFact, exactly 3 quizzes `{q, opts[4], ans}`, and a challenge

**Stats**: 30 lessons, 216 teaching points, 90 quizzes (3 per lesson)

**Design**: Teamz Lab brand — neon green accent `#D9FE06`, dark mode default (`#12151A` bg), Poppins font, SVG icons only (no emoji), `border-radius: 12px` cards, CSS custom properties for theming.

**Lesson Topics** (in order):
1-9: Monorepo, JS vs TS, Variables/Types, Objects/Interfaces, Functions, Union Types, Classes/OOP, Async/Await, Generics
10-12: React, React vs React Native, Frontend Tech Stack
13-21: NestJS, MongoDB, Prisma, Redis, Bull Queues, JWT Auth, Email, Push Notifications, AWS S3
22-30: Docker, Testing, WebSockets, API Design, NestJS Patterns, Deployment, Dev Tooling, Integration, Learning Path

**Key Rules**:
- Quiz objects use `q:` for question (NOT `t:` — that was a past bug)
- Exactly 3 quizzes per lesson (achievement system depends on this)
- `ICONS` map in HTML has keys 1-30 matching lesson IDs
- No external deps except Google Fonts
- `data.js` must use `const LESSONS_DATA = [...]` as a global (no modules)

**GitHub**: `https://github.com/Teamz-Lab-LTD/js-ts-fun-book` (Teamz-Lab-LTD org)
**Live URL**: `https://teamz-lab-ltd.github.io/js-ts-fun-book/`

**Pending tasks to finish**:
1. Push `the-js-ts-fun-book.html` and `data.js` to GitHub (README.md and index.html already pushed)
2. Make the repo public to enable GitHub Pages
3. Enable GitHub Pages (Settings → Pages → Deploy from branch → main / root)
4. Create an og-image.png (1200x630) for social media previews
5. Test all 30 lessons in a browser

Please read `CLAUDE.md` now, then let me know what you'd like to work on.
