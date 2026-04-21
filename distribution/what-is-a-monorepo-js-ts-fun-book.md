---
title: "What is a Monorepo?"
slug: what-is-a-monorepo-js-ts-fun-book
canonical_url: https://learn.teamzlab.com/lessons/js-ts-fun-book/33-what-is-a-monorepo.html
language: en
tags: ["typescript", "javascript", "nestjs", "programming"]
description: "A monorepo is a single Git repository that contains multiple projects (frontend, backend, shared libraries). Tools like Turborepo and pnpm workspaces make it…"
priority: medium
series: "Free Full-Stack Playbook"
seo_keywords: ["what is a monorepo?", "typescript", "javascript", "nestjs", "what is a monorepo? tutorial", "free what is a monorepo? course"]
aso_keywords: []
competition: "medium"
source_lesson: 33
source_course: js-ts-fun-book
---
> **TL;DR:** A monorepo is a single Git repository that contains multiple projects (frontend, backend, shared libraries). Tools like Turborepo and pnpm workspaces make it…

## The analogy

*Imagine you have 3 pets: a cat, a dog, and a parrot. You COULD keep each in a separate house (3 repos). OR you could keep them all in ONE big house with separate rooms (monorepo). They share the same kitchen (shared code), same electricity (build tools), but each has their own space!*

## What is it, really?

A monorepo is a single Git repository that contains multiple projects (frontend, backend, shared libraries). Tools like Turborepo and pnpm workspaces make it efficient by sharing dependencies and running tasks in parallel.

## Why it matters in the real world

Companies like Google, Meta, and Microsoft use monorepos. Your NestJS backend and React frontend can share TypeScript types — change a type once, both sides update instantly!

## The 8 things you actually need to know

**One Repository** — A monorepo keeps your frontend app, backend API, shared libraries, and configuration all in a single Git repository. This means one place to clone, one set of pull requests, and one CI/CD pipeline. Changes that span multiple packages (like updating a shared API type) become a single atomic commit.

**Shared Code** — Create a shared packages directory with common TypeScript types, utility functions, validation schemas, and configuration files. Both your React frontend and NestJS backend import from the same shared package. Change a type definition once and both sides update immediately — no copy-pasting or version drift between projects.

**Turborepo / Nx** — Monorepo build tools like Turborepo and Nx understand your project dependency graph and only rebuild what actually changed. They cache build outputs, run independent tasks in parallel, and skip already-completed work. A change to only the frontend skips rebuilding the backend entirely, saving significant CI time.

**pnpm Workspaces** — pnpm workspaces connect your project folders (apps/frontend, apps/backend, packages/shared) so they can import code from each other directly using the package name. No need to publish packages to npm — pnpm symlinks them locally. It also deduplicates shared dependencies to save disk space.

**Smart Builds** — Instead of rebuilding everything from scratch, monorepo tools use content hashing to detect exactly what changed. If you only modified a CSS file in the frontend, the backend build is skipped entirely. For a monorepo with 50 packages, smart caching can reduce CI build times from 30 minutes to under 2 minutes.

**Shared Dependencies** — In a monorepo, npm packages are installed once at the root level and shared by all projects. This means every package uses the exact same version of React, TypeScript, or any other dependency — eliminating version conflicts. Updating a dependency is a single change instead of updating it separately across multiple repositories.

**Easy Refactoring** — Need to rename a shared interface or restructure a utility module? In a monorepo, your IDE can refactor across all packages at once and you immediately see any code that breaks. In separate repos, you would need to update and publish the shared package, then update each consumer individually — much slower and error-prone.

**Consistent Tooling & Standards** — A monorepo lets you share ESLint configs, Prettier settings, TypeScript configs, and CI/CD workflows across all packages from a single root. Every project follows the same coding standards automatically. New packages inherit the team's quality standards by default instead of requiring manual setup each time.

## Working code example

```python
// Typical monorepo structure:
my-project/
├── apps/
│   ├── frontend/     ← React app (Vite + TypeScript)
│   └── backend/      ← NestJS app
├── packages/
│   └── shared/       ← Shared types, utils
├── package.json      ← Root config
├── pnpm-workspace.yaml
└── turbo.json        ← Turborepo config

// pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"

// In frontend, you can import shared types:
import { UserDTO } from '@myproject/shared';

// turbo.json — configure what to cache
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"]
    }
  }
}
```

**Line-by-line breakdown:**

1. Typical monorepo structure:
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. pnpm-workspace.yaml
13. 
14. 
15. 
16. 
17. In frontend, you can import shared types:
18. Importing required dependencies
19. 
20. turbo.json — configure what to cache
21. Opening block
22. 
23. 
24. 
25. 
26. Closing block
27. 
28. 
29. Closing block
30. Closing block
31. Closing block

## Spot the bug

```
// packages/shared/types.ts
export interface User { name: string; }

// apps/frontend/app.tsx
import { User } from '../../packages/shared/types';
```

<details><summary>Hint</summary>

Is using deep relative paths the right approach in a monorepo?

</details>

<details><summary>Answer</summary>

Deep relative paths (../../packages) are fragile and break when files move. Fix: use workspace package names: import { User } from '@myproject/shared' with proper package.json config.

</details>

## Explain it like I'm five

You have a toy car, airplane, and shared batteries. You could keep each in separate boxes (separate repos), but then you need batteries in EVERY box! A monorepo is one big toybox with sections - all toys share the same batteries. New batteries? All toys benefit!

## Fun fact

Google's monorepo has over 2 BILLION lines of code and 86 terabytes of data. One repo. Seriously. 🤯

## Try it yourself

Create a folder structure with apps/frontend, apps/backend, and packages/shared. Add a shared types.ts file and try importing it from both apps!

---

## Want the interactive version?

This article is lesson 33 of [**Free Full-Stack Playbook**](https://learn.teamzlab.com/c/js-ts-fun-book.html) — a **free, interactive course** with quizzes, a code playground, spaced-repetition flashcards, and 48 more lessons. No signup required.

- 📖 [Open this lesson with quizzes + code playground](https://learn.teamzlab.com/lessons/js-ts-fun-book/33-what-is-a-monorepo.html)
- 🎓 [See the full 49-lesson curriculum](https://learn.teamzlab.com/c/js-ts-fun-book.html)
- 🏠 [All 16 free courses on Teamz Lab Learning](https://learn.teamzlab.com/)

## Related lessons from this course

- [JavaScript vs TypeScript](https://learn.teamzlab.com/lessons/js-ts-fun-book/01-javascript-vs-typescript.html) — Adding Superpowers to JS
- [Developer Tooling](https://learn.teamzlab.com/lessons/js-ts-fun-book/02-developer-tooling.html) — Work Smarter, Not Harder
- [Variables, Types & Arrays](https://learn.teamzlab.com/lessons/js-ts-fun-book/03-variables-types-arrays.html) — The Building Blocks of Data

---

*Built by [Teamz Lab](https://teamzlab.com) — we build production mobile and web apps for clients worldwide. This free course is how we give back. Free Full-Stack Playbook's [interactive version is here](https://learn.teamzlab.com/c/js-ts-fun-book.html).*
