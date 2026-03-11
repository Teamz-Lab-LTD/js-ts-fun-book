const LESSONS_DATA = [
  {
    id: 1,
    title: "GitHub Profile That Gets You Hired",
    subtitle: "Turn your GitHub into a developer portfolio that recruiters actually read",
    analogy: "Your GitHub profile is like your storefront window — people decide whether to walk in within 3 seconds. A bare profile is like a closed shop with no sign. A polished one is like an Apple Store: clean, inviting, and screaming competence.",
    points: [
      { t: "Bio That Sells", d: "Your bio gets 2 seconds of attention. Use the format: [Role] | [Top 2-3 Skills] | [What You Build]. Example: 'Mobile Engineer | Flutter & React Native | Building apps used by 50K+ users'. Skip 'passionate learner' — show proof instead." },
      { t: "Profile README Power Move", d: "Create a repo named exactly your username (e.g., github.com/you/you). Add a README.md and it appears on your profile. Include: a one-liner intro, tech stack badges, current projects, and GitHub stats. This is your billboard." },
      { t: "Pin Your Best 6 Repos", d: "You get 6 pinned repos — treat them like a curated portfolio. Pin projects that show range: one full-stack app, one open-source contribution, one tool/library. Each must have a solid README with screenshots." },
      { t: "The Green Graph Strategy", d: "Contribution graphs matter psychologically. Commit daily — even small docs fixes count. Use a schedule: Mon/Wed/Fri for project work, Tue/Thu for open source, weekends for learning repos. Consistency beats intensity." },
      { t: "README Is Your Sales Page", d: "Every pinned repo needs: a clear title, one-paragraph description, screenshot or GIF demo, tech stack list, how to run it locally, and what you learned. No README = invisible project." },
      { t: "Use Topics and Descriptions", d: "Add topics (tags) to every repo — 'react-native', 'typescript', 'firebase'. Write a one-line description for each repo. This helps GitHub search surface your work and shows you care about details." },
      { t: "Activity Beyond Code", d: "Open issues on projects you use, review PRs, answer discussions. GitHub tracks all activity types. Recruiters see someone who engages with the community, not just pushes code in isolation." },
      { t: "Profile Photo and Details", d: "Use a professional, friendly photo (not a logo, not an anime character). Add your location, company/freelance status, website link, and Twitter/LinkedIn. Incomplete profiles look like throwaway accounts." },
      { t: "Star and Fork Strategically", d: "Star repos in your tech stack — it shows what you follow. Fork repos you actually plan to contribute to. Your stars list is a public signal of your interests and awareness of the ecosystem." },
      { t: "Automate Your Stats", d: "Use GitHub Actions to auto-update your profile README with live stats: contribution streaks, top languages, recent activity. Tools like github-readme-stats and github-readme-streak-stats make this easy." }
    ],
    whatIs: "Your GitHub profile is the first thing technical recruiters and hiring managers check — often before your resume. A well-optimized GitHub profile demonstrates your coding ability, consistency, communication skills, and professionalism. It's living proof that you can actually build things.",
    realWorld: "A developer with a mediocre resume but an outstanding GitHub profile (daily commits, clean repos, good READMEs, open-source contributions) will often get interviews over someone with a perfect resume but an empty GitHub. Companies like Shopify, GitLab, and Basecamp explicitly review GitHub profiles during hiring.",
    code: `# \u{1F680} Hi, I'm [Your Name]

## Mobile Engineer | Flutter & React Native | Open Source Contributor

[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=radical)](https://github.com/YOUR_USERNAME)

### \u{1F6E0}\u{FE0F} Tech Stack
\\\`\\\`\\\`
Mobile:    Flutter | React Native | Swift | Kotlin
Backend:   Node.js | NestJS | Firebase
Database:  PostgreSQL | MongoDB | Redis
DevOps:    Docker | GitHub Actions | AWS
\\\`\\\`\\\`

### \u{1F4CC} What I'm Working On
- \u{1F4F1} Building [App Name] — [one-line description]
- \u{1F331} Contributing to [Open Source Project]
- \u{1F4DD} Writing about mobile development on [dev.to/yourname]

### \u{1F4CA} This Week's Coding Stats
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

### \u{1F4EB} Connect
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/YOUR_NAME)
[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat&logo=twitter)](https://twitter.com/YOUR_HANDLE)
[![Portfolio](https://img.shields.io/badge/-Portfolio-000?style=flat&logo=vercel)](https://yoursite.com)`,
    funFact: "GitHub's Octocat mascot was designed in 2008 by Simon Oxley, the same designer who created the original Twitter bird. GitHub profiles with a README get 30% more profile views on average according to a 2023 dev survey.",
    quiz: [
      { q: "How do you create a profile README on GitHub?", opts: ["Create a repo named 'profile-readme'", "Create a repo with the same name as your username", "Edit your GitHub bio settings", "Fork the github-readme template"], ans: 1 },
      { q: "How many repos can you pin to your GitHub profile?", opts: ["4", "6", "8", "10"], ans: 1 },
      { q: "What's the most impactful element of a pinned repo?", opts: ["Number of stars", "A comprehensive README with screenshots", "The programming language used", "The repo creation date"], ans: 1 },
      { q: "What's the best bio format for a developer GitHub profile?", opts: ["'Passionate about coding and learning new things'", "'[Role] | [Top Skills] | [What You Build]'", "'Student at [University], looking for opportunities'", "'Code is poetry'"], ans: 1 },
      { q: "What does a consistent contribution graph signal to recruiters?", opts: ["You have no life outside coding", "You're disciplined and consistently practicing your craft", "You use automated commit tools", "You only work on personal projects"], ans: 1 },
      { q: "Which activity does NOT show on your GitHub contribution graph?", opts: ["Opening issues", "Creating pull requests", "Starring repositories", "Committing to repos"], ans: 2 },
      { q: "What should you add to every repo for GitHub search visibility?", opts: ["A LICENSE file only", "Topics (tags) and a one-line description", "Multiple branches", "A CONTRIBUTING.md file"], ans: 1 }
    ],
    challenge: "Create or update your GitHub profile README today. Include: a one-liner intro, tech stack badges (use shields.io), your top 3 pinned repos with descriptions, and a GitHub stats card. Then review your 6 pinned repos — does each one have a README with at least a description, tech stack, and setup instructions? Fix the weakest one.",
    resources: [
      { type: "article", title: "Awesome GitHub Profile READMEs", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme", source: "GitHub" },
      { type: "tool", title: "GitHub Readme Stats Generator", url: "https://github.com/anuraghazra/github-readme-stats", source: "GitHub" },
      { type: "tool", title: "Shields.io Badge Generator", url: "https://shields.io/", source: "Shields.io" },
      { type: "article", title: "How to Create an Impressive GitHub Profile", url: "https://www.sitepoint.com/github-profile-readme/", source: "SitePoint" }
    ],
    eli5: "Imagine you're selling lemonade. If your stand has no sign, no menu, and dirty cups — nobody buys. But if you have a bright sign, a clean setup, free samples, and a smiling face — everyone stops. Your GitHub profile is your lemonade stand for coding jobs!",
    codeWalkthrough: [
      "Line 1: The heading with your name — this is the first thing visitors see, make it count",
      "Line 3: Your tagline — Role, Skills, and What You Build in one scannable line",
      "Line 5: GitHub Stats card — auto-generated from your actual contribution data, shows you're active",
      "Lines 8-13: Tech Stack section — organized by category so recruiters can quickly scan your skills",
      "Lines 16-18: Current Projects section — shows you're actively building, not just a stale profile",
      "Lines 21-22: WakaTime integration — auto-updates with your actual coding hours per language",
      "Lines 25-27: Connect section — badges linking to LinkedIn, Twitter, and portfolio for easy contact"
    ],
    bugChallenge: {
      code: `# My Profile README
## Tech Stack: JavaScript, Python
- Working on stuff
- Learning things
[GitHub Stats](github-readme-stats.vercel.app/api?username=)`,
      hint: "There are 5 problems: missing username in stats URL, vague descriptions, no badges, no pinned project links, and no contact information. How would you fix each one?",
      answer: "The stats URL is missing the username parameter. 'Working on stuff' and 'Learning things' are too vague — replace with specific project names and technologies. Add shields.io badges for the tech stack. Add links to actual pinned repos. Add LinkedIn/Twitter/email contact badges at the bottom."
    },
    difficulty: "beginner",
    prereqs: []
  },
  {
    id: 2,
    title: "Building Portfolio Projects That Impress",
    subtitle: "Stop building TODO apps — build projects that make hiring managers say 'we need this person'",
    analogy: "Building another TODO app for your portfolio is like a chef applying to a restaurant with a boiled egg as their sample dish. Sure, it's food — but it doesn't prove you can handle a real kitchen. You need to show you can cook a full meal under pressure.",
    points: [
      { t: "The TODO App Trap", d: "Every bootcamp grad has a TODO app, a weather app, and a calculator. These prove you followed a tutorial, not that you can build software. Impressive projects solve real problems, have real users, or demonstrate complex technical decisions." },
      { t: "The 3 Pillars of an Impressive Project", d: "Every portfolio project needs: (1) a real problem it solves, (2) technical depth beyond CRUD, and (3) production-quality polish — tests, CI/CD, error handling, and documentation. Missing any pillar and it looks like a tutorial." },
      { t: "Project Ideas That Actually Impress", d: "Build tools developers use: a CLI tool, a VS Code extension, a GitHub Action, a performance monitoring dashboard. Or solve a niche problem: a scheduling app for local businesses, an inventory tracker, a content management tool." },
      { t: "Tests Are Non-Negotiable", d: "A project without tests screams 'I don't work professionally.' Add unit tests for core logic, integration tests for API endpoints, and at least one E2E test. Aim for 70%+ coverage on critical paths. Use Jest, Vitest, or your framework's test runner." },
      { t: "CI/CD Pipeline = Professional Signal", d: "Add a GitHub Actions workflow that runs tests on every PR, lints code, and deploys automatically. This alone puts you ahead of 80% of candidates. It shows you understand real development workflows." },
      { t: "README as Documentation", d: "Your README should include: problem statement, architecture diagram, tech stack with justification, setup instructions, screenshots/GIF demos, API documentation, what you'd improve with more time. This is the most-read file in your repo." },
      { t: "Clean Architecture Over Features", d: "Hiring managers care more about HOW you built it than WHAT you built. Show separation of concerns, proper error handling, environment config, logging, and clean git history. 5 well-built features beat 50 sloppy ones." },
      { t: "The 'Why This Tech' Question", d: "For every technology choice, have a reason. 'I used Redis for caching because the leaderboard query was N+1 and taking 800ms' beats 'I used Redis because it's popular.' Document these decisions in your README or an ADR file." },
      { t: "Deploy It or It Doesn't Count", d: "An undeployed project is just code on GitHub. Deploy to Vercel, Railway, Fly.io, or AWS. Add the live URL to your repo description. Hiring managers click live links — they rarely clone and run locally." },
      { t: "Mobile Dev Portfolio Strategy", d: "For mobile devs: build one polished app with offline support, push notifications, and analytics. Record a screen demo video. Publish to TestFlight or Play Store internal testing. Show the full lifecycle, not just the code." }
    ],
    whatIs: "Portfolio projects are the proof that you can actually build software. They bridge the gap between 'I know React' and 'I've built and shipped a React application with authentication, real-time updates, CI/CD, and 85% test coverage.' The right 2-3 projects can outweigh years of listed experience.",
    realWorld: "A junior developer built a GitHub Action that auto-labels PRs based on file paths changed. It got 500+ stars and was featured in GitHub's marketplace. Three companies reached out with interview offers — not because of her resume, but because they found her project while searching for GitHub Actions. The project demonstrated real engineering: tests, semantic versioning, automated releases, and clear documentation.",
    code: `# Project Structure Template for Portfolio Projects
\\\`\\\`\\\`
my-impressive-project/
\u251C\u2500\u2500 .github/
\u2502   \u251C\u2500\u2500 workflows/
\u2502   \u2502   \u251C\u2500\u2500 ci.yml              # Run tests + lint on every PR
\u2502   \u2502   \u2514\u2500\u2500 deploy.yml          # Auto-deploy on merge to main
\u2502   \u2514\u2500\u2500 PULL_REQUEST_TEMPLATE.md
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 modules/             # Feature-based organization
\u2502   \u251C\u2500\u2500 shared/              # Shared utilities, types
\u2502   \u2514\u2500\u2500 config/              # Environment configuration
\u251C\u2500\u2500 tests/
\u2502   \u251C\u2500\u2500 unit/
\u2502   \u251C\u2500\u2500 integration/
\u2502   \u2514\u2500\u2500 e2e/
\u251C\u2500\u2500 docs/
\u2502   \u251C\u2500\u2500 architecture.md      # Architecture decisions
\u2502   \u2514\u2500\u2500 api.md               # API documentation
\u251C\u2500\u2500 README.md                # The star of the show
\u251C\u2500\u2500 .env.example             # Never commit .env!
\u251C\u2500\u2500 docker-compose.yml       # Easy local setup
\u2514\u2500\u2500 Makefile                 # Common commands
\\\`\\\`\\\`

# GitHub Actions CI Workflow (.github/workflows/ci.yml)
\\\`\\\`\\\`yaml
name: CI Pipeline
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build
\\\`\\\`\\\``,
    funFact: "According to Stack Overflow's Developer Survey, 76% of hiring managers say they look at candidates' GitHub profiles or portfolio projects. Projects with live demos get 5x more engagement from recruiters than repos with just code.",
    quiz: [
      { q: "Why are TODO apps poor portfolio projects?", opts: ["They're too complex to build well", "They only prove you followed a tutorial, not that you can solve real problems", "Hiring managers hate productivity apps", "They require too many technologies"], ans: 1 },
      { q: "What are the 3 pillars of an impressive portfolio project?", opts: ["Speed, beauty, and popularity", "Real problem, technical depth, and production-quality polish", "Many features, many commits, many stars", "React, Node.js, and PostgreSQL"], ans: 1 },
      { q: "What minimum test coverage should you aim for on critical paths?", opts: ["30%", "50%", "70%", "100%"], ans: 2 },
      { q: "Why is a CI/CD pipeline important in a portfolio project?", opts: ["It makes the repo look bigger", "It shows you understand professional development workflows", "It's required by GitHub", "It automatically gets you more stars"], ans: 1 },
      { q: "What's more important to hiring managers — features or architecture?", opts: ["More features always wins", "HOW you built it matters more than WHAT you built", "Neither — only stars matter", "Features, because managers don't read code"], ans: 1 },
      { q: "Why should every tech choice have a documented reason?", opts: ["To make the README longer", "To show you make intentional engineering decisions, not just following trends", "Because it's required for open source licenses", "To avoid code review comments"], ans: 1 },
      { q: "What makes a mobile dev portfolio stand out?", opts: ["Having 20+ apps on the store", "One polished app with offline support, push notifications, and a demo video", "Using the latest framework", "Having the most downloads"], ans: 1 }
    ],
    challenge: "Pick one project idea that solves a real problem you've encountered. Create the repo with the folder structure from this lesson. Write the README first (problem statement, planned architecture, tech stack with justifications). Set up a CI workflow that runs on PRs. You don't need to build the full app yet — just ship the skeleton with tests for one core module.",
    resources: [
      { type: "article", title: "How to Build a Portfolio That Gets You Hired", url: "https://www.joshwcomeau.com/effective-portfolio/", source: "Josh W. Comeau" },
      { type: "tool", title: "GitHub Actions Starter Workflows", url: "https://github.com/actions/starter-workflows", source: "GitHub" },
      { type: "article", title: "Architecture Decision Records", url: "https://adr.github.io/", source: "ADR GitHub" },
      { type: "video", title: "Senior Developer Portfolio Tips", url: "https://www.youtube.com/watch?v=oC483DTjRXU", source: "Fireship" }
    ],
    eli5: "Imagine you want to join a soccer team. You could say 'I know all the rules of soccer!' But the coach wants to see you PLAY. A portfolio project is you playing the game — dribbling, passing, scoring — so the coach (hiring manager) can see you're ready for the real team.",
    codeWalkthrough: [
      "The folder structure shows professional organization — features in modules/, shared code separated, config isolated",
      ".github/workflows/ contains CI/CD — this runs automatically on every pull request",
      "tests/ split by type: unit (fast, isolated), integration (API tests), e2e (full user flows)",
      "docs/ folder shows you think about maintainability and team collaboration",
      ".env.example provides setup instructions without exposing secrets",
      "docker-compose.yml means anyone can run your project with one command",
      "The CI workflow: checkout code, setup Node, install deps, lint, test with coverage, then build",
      "Using actions/checkout@v4 and setup-node@v4 — always pin to specific versions for reproducibility"
    ],
    bugChallenge: {
      code: `# My Portfolio Project
## Setup
npm install
npm start

## Features
- Login
- Dashboard
- Settings

Tech: React, Node, MongoDB`,
      hint: "This README is missing at least 6 critical elements that make a project look professional. What are they?",
      answer: "Missing: (1) Problem statement — what does this solve? (2) Screenshots or demo GIF. (3) Architecture explanation. (4) Tech stack justification — WHY these technologies? (5) Test instructions and coverage info. (6) Deployment/live URL. (7) Environment setup (.env.example). (8) What you'd improve section. The features list is vague — 'Login' tells nothing about the implementation."
    },
    difficulty: "intermediate",
    prereqs: [1]
  },
  {
    id: 3,
    title: "Open Source & Developer Visibility",
    subtitle: "Get noticed by contributing to projects used by thousands of developers",
    analogy: "Contributing to open source is like volunteering at a community event where all the top chefs in town also volunteer. You work alongside them, learn their techniques, and when a restaurant job opens up — they already know you and your work ethic. You skipped the resume pile entirely.",
    points: [
      { t: "Finding Good First Issues", d: "Go to github.com/topics/good-first-issue or use the filter 'label:good-first-issue language:typescript'. Focus on projects you actually use — your motivation will be higher and you'll understand the codebase context naturally." },
      { t: "Start With Documentation", d: "Your first PR doesn't need to be code. Fix a typo in docs, add a missing example, improve error messages, or translate documentation. Maintainers love this — it shows you read their docs carefully and care about the project." },
      { t: "Reading Code Before Writing Code", d: "Before submitting a PR, spend 2-3 hours reading the project's existing code. Understand their patterns, naming conventions, and test style. A PR that matches the project's style gets merged 3x faster than one that introduces new patterns." },
      { t: "The Perfect PR Formula", d: "Title: concise description of what changes. Body: why this change is needed, what it does, how to test it, screenshots if UI. Keep PRs small (under 200 lines). One PR = one concern. Link to the issue it fixes." },
      { t: "Building Developer Visibility", d: "Write about what you learn: a blog post about a tricky bug you fixed, a Twitter thread about a pattern you discovered, a dev.to article about your contribution journey. Content compounds — one post can bring opportunities for months." },
      { t: "Speaking at Meetups", d: "Local meetups are desperate for speakers. Give a 10-minute talk about something you learned: a library comparison, a debugging story, a project architecture walkthrough. It builds confidence and puts you on people's radar." },
      { t: "The Contribution Workflow", d: "Fork → Clone → Branch → Code → Test → Push → PR. Always branch from the latest main. Always run the project's test suite before submitting. Always read CONTRIBUTING.md if it exists." },
      { t: "Building Relationships, Not Just PRs", d: "Comment thoughtfully on issues, help other contributors, review PRs (even if you're not a maintainer). Maintainers remember helpful people. Some of the best job referrals come from open source relationships." },
      { t: "Dev.to and Hashnode Strategy", d: "Publish one article every 2 weeks. Topics: what you built and why, comparisons (Library A vs B), tutorials for problems you solved. Use clear titles, add a hero image, include code snippets. Cross-post to Medium for extra reach." },
      { t: "Tracking Your Impact", d: "Keep a 'brag document' of your contributions: PRs merged, issues resolved, articles published, talks given. Update it weekly. This becomes gold for resume bullets and interview stories." }
    ],
    whatIs: "Open source contribution is working on publicly available software projects maintained by companies or communities. Developer visibility means being known in your tech community through contributions, content, and conversations. Together, they create a reputation that makes opportunities come to you instead of you chasing them.",
    realWorld: "Evan You created Vue.js as a side project while contributing to open source. Dan Abramov got hired by Facebook after his Redux library gained traction. But you don't need to create a framework — developers regularly get hired because a maintainer recommended them, or a hiring manager read their blog post, or their GitHub contribution showed up in a search.",
    code: `# Pull Request Template (.github/PULL_REQUEST_TEMPLATE.md)
\\\`\\\`\\\`markdown
## What does this PR do?
<!-- Describe the change in 1-2 sentences -->

## Why is this change needed?
<!-- Link to issue: Fixes #123 -->

## How to test
<!-- Step-by-step instructions to verify the change -->
1.
2.
3.

## Screenshots (if applicable)
<!-- Before/After screenshots for UI changes -->

## Checklist
- [ ] I've read the CONTRIBUTING.md
- [ ] Tests pass locally (\`npm test\`)
- [ ] I've added tests for new functionality
- [ ] Documentation is updated
- [ ] PR title follows conventional commits (feat:, fix:, docs:)
\\\`\\\`\\\`

# Open Source Contribution Workflow
\\\`\\\`\\\`bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/project-name.git
cd project-name

# 2. Add upstream remote to stay in sync
git remote add upstream https://github.com/ORIGINAL_OWNER/project-name.git

# 3. Create a feature branch from latest main
git fetch upstream
git checkout -b fix/improve-error-message upstream/main

# 4. Make your changes, test them
npm test
npm run lint

# 5. Commit with a clear message
git commit -m "fix: improve error message for invalid config path"

# 6. Push to your fork and create PR
git push origin fix/improve-error-message
# Then open PR on GitHub from your fork to upstream/main
\\\`\\\`\\\``,
    funFact: "The term 'open source' was coined in 1998 at a strategy session in Palo Alto. Today, 97% of commercial software uses open source components. GitHub reported that over 413 million open source contributions were made in 2023 alone.",
    quiz: [
      { q: "What's the best first contribution to an open source project?", opts: ["Rewrite the entire codebase", "Fix documentation, typos, or add missing examples", "Add a major new feature", "File a bug report and wait"], ans: 1 },
      { q: "How long should you spend reading a project's code before your first PR?", opts: ["Don't bother — just submit your code", "15 minutes to skim the README", "2-3 hours understanding patterns and conventions", "A full week studying every file"], ans: 2 },
      { q: "What makes a PR more likely to be merged quickly?", opts: ["Making it as large as possible to show effort", "Matching the project's existing code style and keeping it small", "Using the newest JavaScript features", "Adding lots of comments explaining your code"], ans: 1 },
      { q: "Why should you write about your contributions?", opts: ["To brag on social media", "Content compounds — one post can bring opportunities for months", "It's required by open source licenses", "Maintainers won't merge PRs without a blog post"], ans: 1 },
      { q: "Where can you find good first issues to contribute to?", opts: ["Only on React and Node.js repos", "github.com/topics/good-first-issue and filtering by label", "You have to ask maintainers directly", "Good first issues don't exist — all issues are hard"], ans: 1 },
      { q: "What's a 'brag document' used for?", opts: ["Showing off to friends", "Tracking contributions, PRs, articles, and talks for resumes and interviews", "A required file in open source repos", "A type of GitHub profile feature"], ans: 1 },
      { q: "What's the correct contribution workflow order?", opts: ["Code → Fork → Push → PR", "Fork → Clone → Branch → Code → Test → Push → PR", "PR → Code → Test → Push", "Clone → Code → Push → Fork → PR"], ans: 1 }
    ],
    challenge: "Find an open source project you use daily (your framework, a tool, a library). Browse its issues and find one labeled 'good-first-issue' or 'help-wanted'. Read the project's CONTRIBUTING.md, fork the repo, and set up the development environment locally. Even if you don't submit a PR today, write down 3 potential contributions you could make (docs fix, test addition, bug fix). Then start a brag document — a simple markdown file listing your contributions, articles, and talks.",
    resources: [
      { type: "tool", title: "Good First Issues Finder", url: "https://goodfirstissues.com/", source: "Good First Issues" },
      { type: "article", title: "How to Contribute to Open Source", url: "https://opensource.guide/how-to-contribute/", source: "GitHub Open Source Guide" },
      { type: "article", title: "Get Started with Dev.to", url: "https://dev.to/about", source: "Dev.to" },
      { type: "article", title: "Brag Document Template", url: "https://jvns.ca/blog/brag-documents/", source: "Julia Evans" }
    ],
    eli5: "Imagine there's a big community garden where everyone grows vegetables together. If you help water the plants, pull some weeds, and plant a few flowers — everyone sees you helping. When someone needs a gardener for their private garden (a job!), they already know you're good because they watched you work.",
    codeWalkthrough: [
      "The PR template starts with 'What' — a clear, concise description so reviewers understand the change immediately",
      "'Why' links to the issue — every PR should trace back to a reported problem or feature request",
      "'How to test' gives step-by-step verification — this respects the maintainer's time",
      "The checklist ensures quality: CONTRIBUTING.md read, tests pass, docs updated, proper commit format",
      "The workflow starts by forking — you never push directly to someone else's repo",
      "Adding upstream remote lets you sync with the original project as it evolves",
      "Creating a branch from upstream/main ensures you're working from the latest code",
      "Running tests and lint before committing catches issues early — don't waste reviewer time"
    ],
    bugChallenge: {
      code: `# My first open source contribution
git clone https://github.com/ORIGINAL_OWNER/big-project.git
cd big-project
# Made changes directly on main branch
git add .
git commit -m "changes"
git push origin main`,
      hint: "There are 4 critical mistakes in this contribution workflow. What are they?",
      answer: "(1) Cloned the original repo instead of forking first — you can't push to repos you don't own. (2) Made changes directly on main instead of creating a feature branch. (3) Commit message 'changes' is useless — should describe what and why. (4) 'git add .' stages everything including potential unrelated files — should add specific files."
    },
    difficulty: "intermediate",
    prereqs: [1, 2]
  },
  {
    id: 4,
    title: "LeetCode Strategy: Pattern-Based Approach",
    subtitle: "Stop solving random problems — learn 15 patterns that cover 90% of coding interviews",
    analogy: "Solving random LeetCode problems is like studying for a math exam by doing random problems from random chapters. You might solve 500 and still fail. But if you learn the 15 core formulas and recognize which formula applies to each problem — you can solve almost anything with just 75-100 problems practiced.",
    points: [
      { t: "The Pattern-Based Revolution", d: "There are roughly 15 coding patterns that cover 90%+ of interview questions: Two Pointers, Sliding Window, Fast & Slow Pointers, Merge Intervals, Cyclic Sort, BFS, DFS, Two Heaps, Subsets, Modified Binary Search, Top K, K-way Merge, Topological Sort, Dynamic Programming, Bit Manipulation." },
      { t: "Quality Over Quantity", d: "Solving 75 problems deeply (understanding the pattern, writing it from scratch 3 times, explaining it aloud) beats solving 500 problems once by looking at solutions. The goal isn't to memorize answers — it's to recognize patterns in new problems." },
      { t: "The 25-Minute Rule", d: "Time-box every problem to 25 minutes. If you can't solve it, read the solution — but don't just read it. Understand WHY it works, then close the solution and rewrite it from memory. Come back to the same problem in 3 days." },
      { t: "Spaced Repetition for Problems", d: "After solving a problem, schedule reviews: Day 1 → Day 3 → Day 7 → Day 14 → Day 30. Use a spreadsheet or Anki to track this. Problems you struggle with get shorter intervals. This is how you build lasting recall, not temporary familiarity." },
      { t: "The NeetCode 150 Roadmap", d: "Don't pick random problems. Follow a structured list: NeetCode 150 or Blind 75 organizes problems by pattern. Start with Easy problems in each pattern, then Medium, then Hard. Never jump to Hard without mastering the pattern on Easy." },
      { t: "Difficulty Progression Strategy", d: "Week 1-2: Only Easy problems (build confidence). Week 3-6: Medium problems (the meat of interviews). Week 7-8: Hard problems (only for FAANG-level prep). 80% of interviews are Medium difficulty — focus there." },
      { t: "Language Consistency", d: "Pick ONE language and stick with it. Know its standard library cold: sorting, hash maps, sets, queues, heaps, string manipulation. Switching languages mid-prep wastes time on syntax instead of patterns." },
      { t: "The Problem-Solving Framework", d: "For every problem: (1) Understand — restate in your own words. (2) Plan — identify the pattern, write pseudocode. (3) Execute — code the solution. (4) Review — optimize time/space, consider edge cases. (5) Record — log the problem, pattern, and key insight." },
      { t: "Common Traps to Avoid", d: "Don't spend 2 hours on one problem (diminishing returns). Don't skip Easy problems (they build pattern recognition). Don't ignore time complexity (always analyze Big O). Don't practice only on a computer (write on paper/whiteboard too)." },
      { t: "Weekly Practice Schedule", d: "Mon/Wed/Fri: Solve 2 new problems (one Easy, one Medium). Tue/Thu: Review 3-4 previously solved problems from memory. Weekend: One Hard problem + review the week's patterns. Total: ~8 new + 8 reviews per week." }
    ],
    whatIs: "Pattern-based LeetCode preparation is a strategic approach to coding interview prep that focuses on learning reusable problem-solving patterns rather than memorizing individual solutions. Instead of grinding 1000 random problems, you learn 15 core patterns and practice recognizing which pattern applies to each new problem you encounter.",
    realWorld: "A developer spent 6 months solving 700 random LeetCode problems but failed 3 Google interviews because she couldn't solve novel variations. She then switched to pattern-based prep, solved 100 problems organized by pattern, and passed her next interview at Meta. The difference wasn't more practice — it was smarter practice.",
    code: `# LeetCode Pattern Cheat Sheet
# ================================

# PATTERN 1: Two Pointers
# Use when: sorted array, find pairs, remove duplicates
# Key insight: Two pointers moving toward each other or same direction
# Classic problems: Two Sum II, 3Sum, Container With Most Water
# Template:
\\\`\\\`\\\`
left, right = 0, len(arr) - 1
while left < right:
    if condition_met: return result
    elif need_bigger: left += 1
    else: right -= 1
\\\`\\\`\\\`

# PATTERN 2: Sliding Window
# Use when: contiguous subarray/substring, max/min of window
# Key insight: Expand window right, shrink from left
# Classic: Max Subarray Sum of Size K, Longest Substring Without Repeat
# Template:
\\\`\\\`\\\`
window_start = 0
for window_end in range(len(arr)):
    # Add arr[window_end] to window
    while window_needs_shrinking:
        # Remove arr[window_start] from window
        window_start += 1
    # Update result
\\\`\\\`\\\`

# PATTERN 3: BFS (Level-Order Traversal)
# Use when: shortest path, level-by-level processing
# Key insight: Queue-based, process all nodes at current level
# Classic: Binary Tree Level Order, Shortest Path in Grid
# Template:
\\\`\\\`\\\`
queue = deque([start])
visited = set([start])
while queue:
    level_size = len(queue)
    for _ in range(level_size):
        node = queue.popleft()
        for neighbor in get_neighbors(node):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\\\`\\\`\\\`

# PATTERN 4: DFS (Depth-First Search)
# Use when: explore all paths, tree traversal, backtracking
# Key insight: Stack-based (or recursion), go deep before wide
# Classic: Path Sum, Number of Islands, Permutations
# Template:
\\\`\\\`\\\`
def dfs(node, path, result):
    if is_leaf(node):
        result.append(path[:])
        return
    for next_node in get_neighbors(node):
        path.append(next_node)
        dfs(next_node, path, result)
        path.pop()  # backtrack
\\\`\\\`\\\`

# PATTERN 5: Dynamic Programming
# Use when: overlapping subproblems, optimal substructure
# Key insight: Solve small → build up. Memoize or tabulate.
# Classic: Climbing Stairs, Coin Change, Longest Common Subsequence
# Template:
\\\`\\\`\\\`
dp = [base_case] * (n + 1)
for i in range(1, n + 1):
    dp[i] = recurrence_relation(dp[i-1], dp[i-2], ...)
return dp[n]
\\\`\\\`\\\`

# =========================
# PATTERN RECOGNITION GUIDE
# =========================
# "Find pair in sorted array" → Two Pointers
# "Contiguous subarray with condition" → Sliding Window
# "Shortest path / minimum steps" → BFS
# "All paths / combinations / permutations" → DFS/Backtracking
# "Overlapping subproblems" → Dynamic Programming
# "Top/Bottom K elements" → Heap
# "Find in sorted array" → Modified Binary Search
# "Merge sorted lists/arrays" → K-way Merge
# "Build order / dependencies" → Topological Sort`,
    funFact: "LeetCode has over 3,000 problems, but data from thousands of FAANG interviews shows that roughly 200 problems (organized into 15 patterns) cover over 90% of all questions asked. The company's premium subscription has a 'sort by frequency' feature that shows which problems are actually asked at specific companies.",
    quiz: [
      { q: "How many core coding patterns cover 90%+ of interview questions?", opts: ["5", "10", "15", "25"], ans: 2 },
      { q: "What should you do if you can't solve a problem in 25 minutes?", opts: ["Keep trying for 2 more hours", "Read the solution, understand it, then rewrite from memory later", "Skip it and never return to it", "Ask ChatGPT for the answer"], ans: 1 },
      { q: "What's the recommended spaced repetition schedule for a solved problem?", opts: ["Never review it again", "Day 1, Day 3, Day 7, Day 14, Day 30", "Every day for a month", "Once a week for a year"], ans: 1 },
      { q: "Which difficulty level makes up 80% of actual interview questions?", opts: ["Easy", "Medium", "Hard", "Equal split across all"], ans: 1 },
      { q: "When you see 'find a pair in a sorted array', which pattern should you use?", opts: ["Dynamic Programming", "BFS", "Two Pointers", "Sliding Window"], ans: 2 },
      { q: "What's better for interview prep: 500 random problems or 100 pattern-organized problems?", opts: ["500 random — more practice is always better", "100 pattern-organized — deep understanding beats shallow grinding", "It doesn't matter — all practice is equal", "Neither — just study theory"], ans: 1 },
      { q: "When should you use BFS over DFS?", opts: ["When you need to find ALL paths", "When you need the SHORTEST path or level-by-level processing", "Always — BFS is better", "Only for binary trees"], ans: 1 }
    ],
    challenge: "Create a LeetCode tracking spreadsheet with columns: Problem Name, Pattern, Difficulty, Date Solved, Time Taken, Solved Without Help (Y/N), Next Review Date. Solve these 3 problems today using the patterns from this lesson: (1) Two Sum II - Input Array Is Sorted (Two Pointers), (2) Maximum Subarray (Sliding Window/DP), (3) Binary Tree Level Order Traversal (BFS). For each, identify the pattern BEFORE coding, write pseudocode first, then implement.",
    resources: [
      { type: "article", title: "NeetCode 150 Problem Roadmap", url: "https://neetcode.io/practice", source: "NeetCode" },
      { type: "article", title: "14 Patterns to Ace Any Coding Interview", url: "https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed", source: "Hackernoon" },
      { type: "article", title: "Blind 75 LeetCode Questions", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions", source: "LeetCode" },
      { type: "tool", title: "Anki Flashcards for Spaced Repetition", url: "https://apps.ankiweb.net/", source: "Anki" }
    ],
    eli5: "Imagine you're learning to solve jigsaw puzzles. If someone gives you 500 random puzzles, you'll struggle with each one. But if someone teaches you: 'corners first, then edges, then group by color' — suddenly you can solve ANY puzzle using those 3 tricks. Coding patterns are like puzzle-solving tricks!",
    codeWalkthrough: [
      "Two Pointers template: Initialize left at start, right at end. Move them toward each other based on conditions.",
      "This works because the array is sorted — if sum is too small, move left up; if too big, move right down.",
      "Sliding Window template: Expand the window by moving the right pointer. Shrink from left when the window violates constraints.",
      "This achieves O(n) instead of O(n²) by avoiding redundant computation of overlapping subarrays.",
      "BFS template: Use a queue, process level by level. Track visited nodes to avoid cycles.",
      "BFS guarantees shortest path in unweighted graphs — DFS does not.",
      "DFS template: Go deep using recursion, backtrack by removing the last choice when you hit a dead end.",
      "DP template: Start with base cases, build up solutions to larger problems using previously computed results.",
      "The pattern recognition guide at the bottom is the real gem — memorize these mappings for instant pattern identification."
    ],
    bugChallenge: {
      code: `# Trying to find two numbers that sum to target in sorted array
def two_sum(arr, target):
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]
    return []`,
      hint: "This solution has 3 problems: wrong time complexity, a logical bug with using the same element twice, and it ignores the fact that the array is sorted. How would you fix it using the Two Pointers pattern?",
      answer: "Problems: (1) O(n²) brute force when O(n) is possible with Two Pointers since array is sorted. (2) j starts at 0 so i could equal j, using the same element twice. (3) Doesn't leverage the sorted property. Fix: Use two pointers (left=0, right=len-1). If sum < target, left++. If sum > target, right--. If sum == target, return [left, right]. O(n) time, O(1) space."
    },
    difficulty: "intermediate",
    prereqs: []
  },
  {
    id: 5,
    title: "Top Interview Coding Patterns",
    subtitle: "Master the exact patterns that appear in 90% of technical interviews at top companies",
    analogy: "Coding patterns are like martial arts kata — choreographed sequences of moves. A karate master doesn't think about each punch individually in a fight; they recognize the situation and flow into the right kata instinctively. Similarly, top interviewees don't solve each problem from scratch — they recognize the pattern and apply the template.",
    points: [
      { t: "Two Pointers Mastery", d: "Use when dealing with sorted arrays or linked lists where you need to find pairs. Start pointers at both ends (or both at start). Move them based on comparison with target. Covers: pair sum, triplets, removing duplicates, squaring sorted arrays. O(n) time." },
      { t: "Sliding Window Deep Dive", d: "Use for problems involving contiguous subarrays or substrings with a constraint. Maintain a window that expands right and shrinks left. Two types: fixed-size window (easy) and variable-size window (medium). Covers: max sum subarray, longest substring, minimum window substring." },
      { t: "BFS vs DFS Decision Framework", d: "BFS = shortest path, level-order, minimum steps. DFS = all paths, combinations, permutations, tree depth. BFS uses a queue, DFS uses recursion/stack. If the problem says 'shortest' or 'minimum steps' — it's BFS. If it says 'all possible' or 'generate all' — it's DFS." },
      { t: "Dynamic Programming Simplified", d: "DP = recursion + memoization. Step 1: Write the brute force recursive solution. Step 2: Add memoization (top-down) or convert to tabulation (bottom-up). Key question: 'Can I express the answer using answers to smaller subproblems?' If yes → DP." },
      { t: "Binary Search Variations", d: "Beyond basic search: find first/last occurrence, search in rotated array, find peak element, search in 2D matrix. The key insight: if you can define a condition that splits the search space in half, you can use binary search. Not just for sorted arrays!" },
      { t: "Heap / Priority Queue Patterns", d: "Use for Top K, K-th largest/smallest, merge K sorted lists, scheduling problems. Min-heap for K largest (counterintuitive!), max-heap for K smallest. Always maintain heap size K for O(n log K) instead of O(n log n)." },
      { t: "Graph Pattern Recognition", d: "Adjacency list for sparse graphs, matrix for dense. BFS for shortest unweighted path, Dijkstra for weighted. Topological sort for dependency ordering. Union-Find for connected components. Detect cycle: DFS with 3-state coloring." },
      { t: "Interval Patterns", d: "Sort by start time first. Then: merge overlapping intervals (expand end), insert interval (binary search insert point), meeting rooms (min-heap for end times). Key insight: after sorting, you only need to compare with the previous interval." },
      { t: "Backtracking Template", d: "Used for combinations, permutations, subsets, N-Queens. Template: make a choice, recurse, undo the choice (backtrack). Optimization: prune early when you know a path can't lead to a valid solution. Always think: what are my choices at each step?" },
      { t: "Pattern Combination in Hard Problems", d: "Hard problems combine 2-3 patterns. Example: 'Find shortest path with constraints' = BFS + DP. 'Find K closest points' = Heap + Euclidean distance. Practice recognizing multi-pattern problems by breaking them into subproblems." }
    ],
    whatIs: "Interview coding patterns are reusable algorithmic templates that solve broad categories of problems. Instead of memorizing solutions to 1000 individual problems, mastering 10-15 patterns gives you the tools to solve virtually any problem an interviewer throws at you. Each pattern has a recognizable trigger (problem description keywords), a template (code structure), and variations (twists interviewers add).",
    realWorld: "Google's interview process has been studied extensively. Analysis of thousands of interview questions shows that 15 patterns cover approximately 90% of all coding questions asked at FAANG companies. A former Google interviewer revealed that they deliberately pick problems that test pattern recognition — they want to see if you can identify the underlying structure, not just brute-force a solution.",
    code: `# Complete Pattern Templates for Top Interview Patterns
# =====================================================

# 1. TWO POINTERS: Pair with Target Sum (Sorted Array)
\\\`\\\`\\\`python
def pair_with_target(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1    # Need bigger sum
        else:
            right -= 1   # Need smaller sum
    return [-1, -1]
# Time: O(n), Space: O(1)
\\\`\\\`\\\`

# 2. SLIDING WINDOW: Longest Substring with K Distinct Chars
\\\`\\\`\\\`python
def longest_substring_k_distinct(s, k):
    window_start, max_length = 0, 0
    char_freq = {}
    for window_end in range(len(s)):
        right_char = s[window_end]
        char_freq[right_char] = char_freq.get(right_char, 0) + 1
        while len(char_freq) > k:  # Shrink window
            left_char = s[window_start]
            char_freq[left_char] -= 1
            if char_freq[left_char] == 0:
                del char_freq[left_char]
            window_start += 1
        max_length = max(max_length, window_end - window_start + 1)
    return max_length
# Time: O(n), Space: O(k)
\\\`\\\`\\\`

# 3. MODIFIED BINARY SEARCH: Search in Rotated Array
\\\`\\\`\\\`python
def search_rotated(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        # Left half is sorted
        if arr[left] <= arr[mid]:
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
# Time: O(log n), Space: O(1)
\\\`\\\`\\\`

# 4. TOP K ELEMENTS: K Largest Numbers (Min-Heap)
\\\`\\\`\\\`python
import heapq
def find_k_largest(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)  # Remove smallest
    return list(min_heap)
# Time: O(n log k), Space: O(k)
\\\`\\\`\\\`

# 5. BACKTRACKING: Generate All Subsets
\\\`\\\`\\\`python
def subsets(nums):
    result = []
    def backtrack(start, current):
        result.append(current[:])  # Add copy
        for i in range(start, len(nums)):
            current.append(nums[i])       # Choose
            backtrack(i + 1, current)      # Explore
            current.pop()                  # Un-choose
    backtrack(0, [])
    return result
# Time: O(2^n), Space: O(n) for recursion stack
\\\`\\\`\\\``,
    funFact: "The 'Two Pointers' technique was first formally described in computer science literature in the 1960s, but it became a standard interview pattern after companies realized it could distinguish between candidates who truly understand algorithms and those who just memorize solutions. The technique alone covers at least 30 common interview questions.",
    quiz: [
      { q: "When a problem says 'find the shortest path' or 'minimum steps', which pattern should you use?", opts: ["DFS", "BFS", "Dynamic Programming", "Two Pointers"], ans: 1 },
      { q: "For finding the K largest elements, you should use a:", opts: ["Max-heap of size N", "Min-heap of size K", "Sorted array", "Binary search tree"], ans: 1 },
      { q: "What's the key insight for Sliding Window problems?", opts: ["Always use two nested loops", "Expand the window right, shrink from left — avoid recomputing the entire window", "Sort the array first", "Use recursion to try all windows"], ans: 1 },
      { q: "When should you use backtracking?", opts: ["Finding shortest paths", "Generating all combinations, permutations, or subsets", "Searching in sorted arrays", "Merging sorted lists"], ans: 1 },
      { q: "How do you convert a brute-force recursive solution into DP?", opts: ["Rewrite it with loops — recursion is always wrong", "Add memoization to cache results of subproblems", "Use a heap instead", "Convert to BFS"], ans: 1 },
      { q: "What's the time complexity of the Two Pointers pattern on a sorted array?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"], ans: 2 },
      { q: "Hard interview problems typically combine how many patterns?", opts: ["Just 1 pattern", "2-3 patterns combined", "5+ patterns", "No patterns — they're unique each time"], ans: 1 }
    ],
    challenge: "Solve one problem for each of these 5 patterns today: (1) Two Pointers: LeetCode #167 Two Sum II. (2) Sliding Window: LeetCode #3 Longest Substring Without Repeating Characters. (3) BFS: LeetCode #102 Binary Tree Level Order Traversal. (4) Binary Search: LeetCode #33 Search in Rotated Sorted Array. (5) Backtracking: LeetCode #78 Subsets. Before coding each one, write down which pattern you'll use and WHY. Time yourself — aim for under 20 minutes per Easy, 30 minutes per Medium.",
    resources: [
      { type: "article", title: "Grokking the Coding Interview Patterns", url: "https://www.designgurus.io/course/grokking-the-coding-interview", source: "Design Gurus" },
      { type: "video", title: "NeetCode Pattern Explanations", url: "https://www.youtube.com/c/NeetCode", source: "YouTube" },
      { type: "article", title: "LeetCode Patterns by Sean Prashad", url: "https://seanprashad.com/leetcode-patterns/", source: "Sean Prashad" },
      { type: "tool", title: "VisuAlgo - Algorithm Visualizations", url: "https://visualgo.net/", source: "VisuAlgo" }
    ],
    eli5: "Think of coding patterns like LEGO instruction booklets. Each booklet teaches you how to build one type of thing — a car, a house, a spaceship. Once you know 15 different booklets, someone can give you a pile of random LEGO pieces and say 'build me a castle with wheels' and you'll think: 'Oh! That's the house booklet + the car booklet combined!' That's pattern recognition!",
    codeWalkthrough: [
      "Two Pointers: Start at both ends of sorted array. If sum too small, move left up. If too big, move right down. Guaranteed O(n).",
      "Sliding Window: The char_freq dictionary tracks what's in our current window. When too many distinct chars, shrink from left.",
      "The while loop inside the for loop looks like O(n²) but is actually O(n) — each element enters and leaves the window at most once.",
      "Rotated Binary Search: The trick is one half is always sorted. Check if target falls in the sorted half; if yes, search there.",
      "Top K with min-heap: Keep only K elements in the heap. When you add element K+1, the smallest gets evicted. What remains = K largest.",
      "Backtracking for subsets: At each position, you either include the element or skip it. This creates a binary tree of 2^n possibilities.",
      "The pattern of append → recurse → pop is the backtracking template. 'Pop' undoes the choice so you can try the next option.",
      "Notice every solution includes time and space complexity — always state this in interviews."
    ],
    bugChallenge: {
      code: `# Sliding Window: Find max sum subarray of size K
def max_sum_subarray(arr, k):
    max_sum = 0
    window_sum = 0
    for i in range(len(arr)):
        window_sum += arr[i]
        if i >= k:
            window_sum -= arr[i - k]
            max_sum = max(max_sum, window_sum)
    return max_sum

# Test: max_sum_subarray([2, 1, 5, 1, 3, 2], 3)
# Expected: 9 (5+1+3), but returns 6. Why?`,
      hint: "There are 2 bugs: one is an off-by-one error in when the window becomes valid, and the other is about where the max_sum update happens. When does the first valid window of size K complete?",
      answer: "Bug 1: The condition should be 'if i >= k' is correct for removing, but max_sum should also be updated when i == k-1 (the first complete window). Bug 2: max_sum update is inside the 'if i >= k' block, so it misses the first valid window (when i == k-1). Fix: change to 'if i >= k - 1' for the max_sum update, and 'if i >= k' for the subtraction. Or restructure: subtract when i >= k, then always update max_sum when i >= k - 1."
    },
    difficulty: "advanced",
    prereqs: [4]
  },
  {
    id: 6,
    title: "Live Coding Under Pressure",
    subtitle: "Turn interview anxiety into a structured performance that impresses interviewers",
    analogy: "A live coding interview is like a jazz performance, not a written exam. The audience (interviewer) doesn't just want to hear the right notes — they want to see you improvise, recover from mistakes, and communicate your musical ideas. A technically perfect but silent performance scores lower than a slightly imperfect but engaging one.",
    points: [
      { t: "The UMPIRE Method", d: "A six-step framework: Understand the problem, Match to a pattern, Plan your approach, Implement the code, Review and test, Evaluate complexity. Spend 40% of your time on U-M-P before writing any code. Interviewers grade your process, not just the output." },
      { t: "Thinking Out Loud Is Not Optional", d: "Narrate everything: 'I'm thinking this is a sliding window problem because we need a contiguous subarray...' 'I'll use a hash map here because we need O(1) lookups...' Silence is your enemy. Even saying 'Let me think about this for a moment' is better than dead air." },
      { t: "Clarifying Questions Show Senior Thinking", d: "Always ask 2-3 questions before solving: 'Can the array contain negatives?' 'Should I handle the empty input case?' 'Is the input sorted?' This shows you think about edge cases, not just happy paths. It also buys you thinking time." },
      { t: "Start With Brute Force — Always", d: "Say: 'Let me start with the brute force approach — O(n²) nested loops. Then I'll optimize.' This is strategic: it shows you can solve it, gives you a baseline, and often reveals the optimization path. Jumping straight to optimal and getting stuck is worse." },
      { t: "Handle Being Stuck Gracefully", d: "When stuck, don't panic. Say: 'I'm not immediately seeing the optimization. Let me think about what data structure could help here...' Try: work through a small example by hand, think about what information you're recomputing, consider a hash map." },
      { t: "Using Hints Like a Pro", d: "Interviewers give hints because they WANT you to succeed. When you get one, don't feel embarrassed. Say: 'Ah, that's a great point — if I use a heap here, I can get the top K in O(n log K)...' Show you can build on hints." },
      { t: "Testing Your Solution Live", d: "After coding, trace through with a small example: 'Let me walk through this with input [1, 3, 5]. At step 1, left=0, right=2...' Then check edge cases: empty input, single element, all same values, negative numbers. This catches bugs and shows thoroughness." },
      { t: "Time Management During the Interview", d: "45-min interview breakdown: 5 min clarify, 5 min plan, 20 min code, 10 min test/optimize, 5 min questions. If you're 25 min in and haven't started coding — you've spent too long planning. If coding takes more than 20 min, simplify." },
      { t: "Body Language and Energy", d: "Sit up straight, make eye contact (or camera contact if virtual). Smile when you solve something. Show enthusiasm about the problem. Interviewers are evaluating if they want to work with you 8 hours a day. Be someone they'd enjoy pairing with." },
      { t: "Recovery Moves When You Make Mistakes", d: "Wrong approach? 'I realize this won't work because [reason]. Let me pivot to [new approach].' Bug in code? 'Good catch — the issue is [X], let me fix it.' Running out of time? 'I know how to solve this — let me describe the approach and code the critical part.'" }
    ],
    whatIs: "Live coding interviews test your ability to solve programming problems in real-time while an interviewer watches. Unlike take-home assignments, they evaluate your problem-solving process, communication skills, and ability to perform under pressure. The UMPIRE method (Understand, Match, Plan, Implement, Review, Evaluate) provides a repeatable structure that turns a stressful situation into a systematic performance.",
    realWorld: "A senior engineer at Stripe shared that they've seen candidates solve Hard problems in silence and get rejected, while others struggled with Medium problems but got hired because they communicated beautifully, handled hints well, and showed strong analytical thinking. The interviewer's debrief form at most companies has sections for 'communication' and 'problem-solving process' that weigh as much as 'correctness.'",
    code: `# UMPIRE Method: Live Coding Transcript Template
# ================================================

# PROBLEM: "Find the longest substring without repeating characters"

# ---- STEP 1: UNDERSTAND (2-3 min) ----
# Candidate: "Let me make sure I understand. Given a string,
# I need to find the length of the longest substring where
# no character appears more than once."
#
# "A few questions:
#  - Can the string be empty? → Return 0
#  - Is it just lowercase letters or any character? → Any
#  - Do I return the length or the substring itself? → Length"
#
# "So for 'abcabcbb', the answer is 3 ('abc')"

# ---- STEP 2: MATCH (1 min) ----
# Candidate: "This feels like a Sliding Window problem because
# I need a contiguous substring and I'm looking for the longest
# one that satisfies a condition (no repeats)."

# ---- STEP 3: PLAN (2-3 min) ----
# Candidate: "Here's my approach:
# 1. Use a sliding window with left and right pointers
# 2. Expand right, adding characters to a set
# 3. If we see a duplicate, shrink from left until no duplicate
# 4. Track the max window size throughout
# Time: O(n), Space: O(min(n, alphabet_size))"

# ---- STEP 4: IMPLEMENT (10-15 min) ----
\\\`\\\`\\\`python
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_length = 0

    for right in range(len(s)):
        # Shrink window if duplicate found
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1

        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)

    return max_length
\\\`\\\`\\\`

# ---- STEP 5: REVIEW (3-5 min) ----
# Candidate: "Let me trace through 'abcabcbb':
#   right=0: 'a' → set={a}, max=1
#   right=1: 'b' → set={a,b}, max=2
#   right=2: 'c' → set={a,b,c}, max=3
#   right=3: 'a' duplicate! shrink: remove 'a', left=1
#            set={b,c,a}, max=3
#   ... continues ... final answer: 3 ✓"
#
# "Edge cases: empty string → 0 ✓, single char → 1 ✓,
#  all same chars 'aaaa' → 1 ✓"

# ---- STEP 6: EVALUATE ----
# Candidate: "Time complexity: O(n) — each character enters and
# leaves the set at most once. Space: O(min(n, 26)) for the set.
# Could optimize with a hashmap storing last index to jump left
# pointer directly, but this solution is clean and efficient."`,
    funFact: "Google's internal data shows that interviewers decide their overall impression of a candidate within the first 10 minutes. The remaining 35 minutes either confirm or (rarely) change that initial impression. This is why the UMPIRE method front-loads the impressive parts — clarification and planning — before you write a single line of code.",
    quiz: [
      { q: "What does UMPIRE stand for?", opts: ["Understand, Memorize, Program, Iterate, Run, Exit", "Understand, Match, Plan, Implement, Review, Evaluate", "Understand, Map, Plan, Install, Run, Evaluate", "Unpack, Match, Plan, Implement, Refactor, Explain"], ans: 1 },
      { q: "What percentage of your time should you spend on U-M-P (before coding)?", opts: ["10%", "20%", "40%", "60%"], ans: 2 },
      { q: "What should you do when you get stuck during a live coding interview?", opts: ["Sit in silence until you figure it out", "Immediately ask for the answer", "Verbalize what you're thinking and try working through a small example", "Start over with a completely different approach"], ans: 2 },
      { q: "Why should you always start with the brute force approach?", opts: ["It's faster to code", "It shows you can solve the problem and often reveals the optimization path", "Interviewers only care about brute force", "Optimized solutions are never expected"], ans: 1 },
      { q: "How should you handle interviewer hints?", opts: ["Ignore them — using hints means you failed", "Build on them enthusiastically and show your understanding", "Ask for more hints until they give you the answer", "Politely decline and keep trying your approach"], ans: 1 },
      { q: "What's the recommended time breakdown for a 45-minute coding interview?", opts: ["40 min coding, 5 min questions", "5 clarify, 5 plan, 20 code, 10 test, 5 questions", "15 clarify, 15 plan, 15 code", "Jump straight into coding for 45 minutes"], ans: 1 }
    ],
    challenge: "Do a mock interview with yourself or a friend using this problem: 'Given an array of intervals [[1,3],[2,6],[8,10],[15,18]], merge all overlapping intervals.' Follow UMPIRE strictly — set a 45-minute timer. Record yourself (phone or screen recording) and review: Did you think aloud the whole time? Did you clarify edge cases? Did you test with examples? How much time did you spend on each step? Do this exercise 3 times this week with different problems.",
    resources: [
      { type: "tool", title: "Pramp - Free Mock Interviews", url: "https://www.pramp.com/", source: "Pramp" },
      { type: "video", title: "How to Ace a Google Coding Interview", url: "https://www.youtube.com/watch?v=uQdy914JRKQ", source: "YouTube" },
      { type: "article", title: "The UMPIRE Method Explained", url: "https://guides.codepath.com/compsci/UMPIRE-Interview-Strategy", source: "CodePath" },
      { type: "tool", title: "Interviewing.io - Anonymous Practice Interviews", url: "https://interviewing.io/", source: "Interviewing.io" }
    ],
    eli5: "Imagine you're cooking on a TV cooking show. The judges don't just taste your food — they watch you cook! They want to see: Do you read the recipe carefully? Do you taste as you go? Do you stay calm when something burns? Do you explain what you're doing? Even if your dish isn't perfect, a confident chef who narrates their process impresses judges more than a silent cook who makes a perfect dish.",
    codeWalkthrough: [
      "UNDERSTAND: The transcript shows asking 3 clarifying questions — this is the most important step that most candidates skip",
      "MATCH: Identifying 'Sliding Window' from keywords like 'contiguous substring' and 'longest' — this is pattern recognition in action",
      "PLAN: Describing the algorithm in 4 bullet points before coding — the interviewer now knows what to expect",
      "Including time/space complexity in the plan shows you think about efficiency upfront",
      "IMPLEMENT: The code is clean and matches the plan exactly — no surprises for the interviewer",
      "The while loop handles duplicates by shrinking the window — this is the core sliding window technique",
      "REVIEW: Tracing through the example step by step catches bugs and shows thoroughness",
      "Testing edge cases (empty, single char, all same) demonstrates production-quality thinking",
      "EVALUATE: Stating complexity with reasoning shows you don't just memorize — you understand WHY it's O(n)"
    ],
    bugChallenge: {
      code: `# Mock Interview Transcript (spot the mistakes):
# Interviewer: "Find two numbers in an array that sum to target"
# Candidate: *starts coding immediately*
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
# Candidate: "Done. It's O(n²)."  *silence*`,
      hint: "There are 5 problems with this interview performance: a process mistake, a code bug, a missing optimization discussion, missing edge case testing, and poor communication. Find all 5.",
      answer: "(1) Process: Started coding immediately without clarifying questions or planning (skipped U-M-P). (2) Bug: j starts at i, not i+1, so the same element can be used twice. (3) Missing optimization: Should mention hash map approach for O(n) and ask if that's preferred. (4) No testing: Didn't trace through an example or test edge cases. (5) Communication: Barely spoke — said 'Done' and went silent. Should narrate approach, explain trade-offs, and discuss improvements."
    },
    difficulty: "advanced",
    prereqs: [4, 5]
  },
  {
    id: 7,
    title: "Technical Mock Interview Mastery",
    subtitle: "Build interview confidence through deliberate practice with peers and platforms",
    analogy: "Preparing for a coding interview without doing mock interviews is like preparing for a swimming competition by only reading about swimming techniques. You can know every stroke perfectly in theory, but the first time you hit cold water with a timer running and people watching — everything changes. Mock interviews are your pool sessions before race day.",
    points: [
      { t: "Why Mock Interviews Are Non-Negotiable", d: "Solving problems alone builds technical skill. Mock interviews build performance skill — handling pressure, communicating clearly, managing time, recovering from mistakes. These are different skills. Most people fail interviews not because they can't code, but because they can't code while being watched." },
      { t: "Free Platforms for Mock Interviews", d: "Pramp: free peer-to-peer mocks with structured feedback. Interviewing.io: anonymous practice with real engineers. LeetCode Mock: timed interview simulations. Each gives different practice: Pramp for communication, Interviewing.io for realism, LeetCode Mock for solo time pressure." },
      { t: "Peer Mock Interview Setup", d: "Find a study partner at a similar level. Schedule 2x per week. Format: 45 min interview + 15 min feedback. Alternate interviewer/interviewee roles. Use real company questions from LeetCode's company-tagged problems. Video call to simulate real conditions." },
      { t: "Being an Effective Interviewer", d: "When you play interviewer: don't help too quickly, let them struggle for 2-3 minutes before hinting. Ask follow-up questions: 'What's the time complexity?' 'Can you optimize?' 'What about edge case X?' This teaches you what interviewers look for — invaluable when you're the candidate." },
      { t: "The Feedback Framework", d: "After each mock, evaluate 5 areas on a 1-5 scale: (1) Problem Understanding — did they clarify? (2) Approach — was the plan clear? (3) Code Quality — clean, readable, correct? (4) Communication — did they think aloud? (5) Testing — did they verify their solution? Written feedback is 10x more useful than verbal." },
      { t: "Common Interview Formats", d: "Phone Screen: 1 medium problem, 30-45 min, shared editor. Onsite: 4-5 rounds (coding, system design, behavioral, team fit). Take-home: build something in 3-4 hours. Pair programming: code together on a real problem. Know the format before you practice." },
      { t: "Recording and Self-Review", d: "Record your mock interviews (with partner's permission). Watch yourself: Do you fidget? Do you go silent? Do you rush to code? Do you test your solution? Self-review reveals blind spots that partners might not mention. It's uncomfortable but transformative." },
      { t: "The 20-Mock Rule", d: "Research shows interview performance plateaus after about 20 mock interviews. The first 5 mocks feel awful — that's normal. Mocks 6-15 show rapid improvement. Mocks 16-20 refine your style. Schedule at least 20 before your target interview date." },
      { t: "Simulating Real Conditions", d: "Practice on a plain text editor (not your IDE with autocomplete). Use a timer. Don't look anything up. Dress as you would for the interview. If it's remote, practice with your webcam on. The more realistic the practice, the more comfortable the real thing." },
      { t: "Post-Mock Action Items", d: "After every mock, write down: (1) What went well, (2) What to improve, (3) Problems/patterns to study. If you got stuck on a DP problem, your next 3 practice problems should be DP. Targeted improvement beats random grinding." }
    ],
    whatIs: "Mock interviews are practice interview sessions that simulate real technical interview conditions. They bridge the gap between being able to solve problems in a comfortable environment and being able to perform under interview pressure. The combination of time constraints, an observer, and having to communicate your thought process makes mock interviews the closest thing to real interview practice.",
    realWorld: "An engineering manager at Amazon shared that they interviewed 500+ candidates over 3 years. The single best predictor of interview success wasn't algorithm knowledge or years of experience — it was whether the candidate had done mock interviews. Candidates who practiced 10+ mocks had a 3x higher pass rate than those who only did LeetCode alone.",
    code: `# Mock Interview Scoring Rubric
# =============================

# Score each area 1-5 (1=Poor, 3=Acceptable, 5=Excellent)

\\\`\\\`\\\`
MOCK INTERVIEW SCORECARD
========================
Date: ___________
Interviewer: ___________
Candidate: ___________
Problem: ___________
Difficulty: Easy / Medium / Hard

SCORING (1-5):
┌─────────────────────────┬───────┬────────────────────────────┐
│ Category                │ Score │ Notes                      │
├─────────────────────────┼───────┼────────────────────────────┤
│ 1. Problem Clarification│  /5   │ Asked good questions?      │
│    - Edge cases asked?  │       │ Restated problem?          │
│    - Constraints clear? │       │                            │
├─────────────────────────┼───────┼────────────────────────────┤
│ 2. Approach & Planning  │  /5   │ Identified pattern?        │
│    - Pattern recognized?│       │ Discussed trade-offs?      │
│    - Brute force first? │       │ Time/space mentioned?      │
├─────────────────────────┼───────┼────────────────────────────┤
│ 3. Code Quality         │  /5   │ Clean variable names?      │
│    - Correct solution?  │       │ Modular functions?         │
│    - Clean & readable?  │       │ Handled edge cases?        │
├─────────────────────────┼───────┼────────────────────────────┤
│ 4. Communication        │  /5   │ Thought aloud?             │
│    - Thinking aloud?    │       │ Explained decisions?       │
│    - Handled hints?     │       │ Recovered from mistakes?   │
├─────────────────────────┼───────┼────────────────────────────┤
│ 5. Testing & Evaluation │  /5   │ Traced through example?    │
│    - Tested with input? │       │ Found bugs?                │
│    - Edge cases tested? │       │ Stated complexity?         │
├─────────────────────────┼───────┼────────────────────────────┤
│ TOTAL                   │  /25  │                            │
└─────────────────────────┴───────┴────────────────────────────┘

RESULT: Strong Hire / Hire / Lean Hire / Lean No / No Hire

TOP 3 STRENGTHS:
1.
2.
3.

TOP 3 IMPROVEMENTS:
1.
2.
3.

PROBLEMS TO PRACTICE:
- Pattern: ___________  Problems: ___________
- Pattern: ___________  Problems: ___________
\\\`\\\`\\\`

# Weekly Mock Interview Schedule
\\\`\\\`\\\`
WEEK PLAN (8 weeks to interview)
================================
Week 1-2: Solo LeetCode (build foundation)
  - 4 problems/day, Easy + Medium
  - Start recording yourself solving problems

Week 3-4: Peer Mocks Begin
  - Mon/Thu: Mock with Partner A (45 min + feedback)
  - Daily: 2 LeetCode problems

Week 5-6: Intensify
  - Mon/Wed/Fri: Mocks (alternate partners)
  - Tue/Thu: Targeted practice on weak patterns
  - Weekend: 1 system design mock

Week 7-8: Peak Performance
  - 4-5 mocks per week
  - Focus on realistic conditions
  - Review all feedback notes
  - Light practice only (don't burn out)
\\\`\\\`\\\``,
    funFact: "Pramp (the free mock interview platform) got its name from 'PRActice Makes Perfect.' Since launching in 2015, it has facilitated over 3 million mock interviews. Their data shows that candidates who complete 10+ peer interviews on the platform have a 70% higher chance of receiving a job offer within 3 months.",
    quiz: [
      { q: "What's the main skill that mock interviews build that solo practice doesn't?", opts: ["Algorithm knowledge", "Performance under pressure and communication skills", "Typing speed", "Knowledge of more programming languages"], ans: 1 },
      { q: "How many mock interviews does research suggest you need before performance plateaus?", opts: ["5", "10", "20", "50"], ans: 2 },
      { q: "What's the recommended mock interview format with a peer?", opts: ["2 hours of coding problems back to back", "45 min interview + 15 min structured feedback", "30 min of whiteboard explanation only", "Just solve LeetCode problems on a call together"], ans: 1 },
      { q: "What are the 5 areas to score in the feedback framework?", opts: ["Speed, accuracy, difficulty, language, style", "Clarification, approach, code quality, communication, testing", "Syntax, logic, efficiency, readability, completeness", "Greeting, coding, explaining, debugging, thanking"], ans: 1 },
      { q: "Why is being the interviewer valuable practice?", opts: ["It's easier than being the candidate", "It teaches you what interviewers look for and how they evaluate", "You can copy the candidate's solutions", "It counts as community service"], ans: 1 },
      { q: "What should you do immediately after every mock interview?", opts: ["Celebrate and relax", "Write down what went well, what to improve, and patterns to study", "Solve 5 more LeetCode problems", "Nothing — the interview itself is enough practice"], ans: 1 },
      { q: "What makes mock interviews more realistic?", opts: ["Using your favorite IDE with autocomplete", "Using a plain text editor, timer, webcam on, no lookups", "Solving the problem beforehand so you don't get stuck", "Having your notes open for reference"], ans: 1 }
    ],
    challenge: "Sign up for Pramp (free) and schedule your first mock interview this week. Before the mock, prepare by solving 3 Medium LeetCode problems using the UMPIRE method. During the mock, focus on communication over correctness — narrate your entire thought process. After the mock, fill out the scoring rubric from this lesson for yourself. If you can't find a partner, record yourself solving a problem on video (phone camera pointed at screen) and review it — you'll be surprised by what you notice.",
    resources: [
      { type: "tool", title: "Pramp - Free Peer Mock Interviews", url: "https://www.pramp.com/", source: "Pramp" },
      { type: "tool", title: "Interviewing.io - Practice with Engineers", url: "https://interviewing.io/", source: "Interviewing.io" },
      { type: "article", title: "How to Run Effective Mock Interviews", url: "https://www.techinterviewhandbook.org/mock-interviews/", source: "Tech Interview Handbook" },
      { type: "video", title: "Mock Interview Examples", url: "https://www.youtube.com/results?search_query=mock+coding+interview", source: "YouTube" }
    ],
    eli5: "Remember when you learned to ride a bike? Reading about balance and pedaling wasn't enough — you needed to actually GET ON the bike and wobble around until it clicked. Mock interviews are the wobbling phase. Yeah, you'll fall a few times. But after 20 rides, you'll be cruising like a pro!",
    codeWalkthrough: [
      "The scorecard has 5 categories, each scored 1-5. Total of 25 points gives a clear performance picture.",
      "Problem Clarification checks if the candidate asked questions before coding — the #1 mistake is skipping this.",
      "Approach & Planning evaluates pattern recognition and whether brute force was discussed first.",
      "Code Quality isn't just about correctness — clean variable names and modular functions matter too.",
      "Communication is weighted equally with code — thinking aloud is a learnable skill that needs practice.",
      "The 'Result' uses actual industry terms: Strong Hire to No Hire. This calibrates your self-assessment.",
      "The weekly schedule ramps up intensity: solo first, then peer mocks, then peak frequency before the real interview.",
      "Notice Week 7-8 says 'light practice only' — burnout before interview day is a real risk."
    ],
    bugChallenge: {
      code: `# Mock Interview Prep Plan (What's wrong?)
Week 1: Solve 50 Easy LeetCode problems
Week 2: Solve 50 Medium LeetCode problems
Week 3: Solve 50 Hard LeetCode problems
Week 4: Do 1 mock interview
Week 5: Real interview at Google`,
      hint: "There are 5 strategic mistakes in this prep plan. Think about practice quality vs quantity, mock interview timing, difficulty progression, and burnout.",
      answer: "(1) Too many problems per week — 50/week leads to shallow understanding, not deep pattern mastery. (2) Only 1 mock interview — need at least 15-20 for performance skill. (3) Hard problems in Week 3 is too early — most interviews are Medium difficulty. (4) No spaced repetition — solving once without review means you'll forget. (5) No rest before the real interview — Week 5 should be light review, not right after grinding 150 problems. Better plan: 10 problems/week with spaced review, mocks starting Week 2, focus on Medium, light week before interview."
    },
    difficulty: "intermediate",
    prereqs: [4]
  },
  {
    id: 8,
    title: "System Design Interview for Mobile Devs",
    subtitle: "Ace system design rounds by thinking like a mobile-first architect",
    analogy: "System design interviews are like being an architect asked to design a building live. The interviewer doesn't want a finished blueprint — they want to see how you think about trade-offs. Should we use steel or wood? How many floors? What about earthquake resistance? For mobile devs, you're designing the building AND the elevator system that connects floors (client-server communication).",
    points: [
      { t: "The 4-Step Framework", d: "Every system design follows: (1) Requirements — functional and non-functional (2) High-Level Design — major components and how they connect (3) Deep Dive — detail 2-3 components the interviewer cares about (4) Trade-offs — what you'd do differently at different scales. Spend 5 min on each for a 20-min round." },
      { t: "Requirements Gathering Is Half the Battle", d: "Ask: 'How many users? What's the read/write ratio? Do we need real-time updates? What platforms (iOS, Android, web)? What's the latency requirement?' Writing down requirements on the whiteboard shows structure. Bad candidates jump straight to drawing boxes." },
      { t: "Estimating Scale (Back-of-Envelope)", d: "Key numbers to memorize: 1M users ≈ 10K concurrent. 1 KB per request × 10K QPS = 10 MB/s bandwidth. 1M records × 1 KB = 1 GB storage. 80/20 rule: 20% of data serves 80% of requests (cache this). Practice doing these calculations out loud." },
      { t: "Mobile-Specific Design Considerations", d: "Offline support (local DB + sync). Battery/data usage optimization. Push notification architecture. App size constraints. Screen size adaptation. These are your SUPERPOWERS in system design — most backend-focused candidates ignore them." },
      { t: "The Components You Must Know", d: "Load balancer (distribute traffic). API gateway (auth, rate limiting). CDN (static assets, images). Cache (Redis — hot data). Database (SQL for relations, NoSQL for flexibility). Message queue (async processing). Object storage (S3 for files/images)." },
      { t: "Database Design Decisions", d: "SQL when: relationships matter, ACID needed, structured data. NoSQL when: flexible schema, horizontal scaling, high write throughput. For mobile: usually SQL backend + local SQLite/Realm on device. Always discuss indexing strategy for read-heavy queries." },
      { t: "Caching Strategy for Mobile", d: "Three levels: (1) Device cache — images, API responses, user data. (2) CDN — static assets worldwide. (3) Server cache — Redis for hot data. Mobile cache policy: cache-first for reads, optimistic updates for writes, background sync for consistency." },
      { t: "Real-Time Architecture", d: "Options: polling (simple, wasteful), long polling (better), SSE (server push), WebSockets (bidirectional). For mobile: WebSockets for chat/live features, push notifications for background updates, polling as fallback when WebSocket fails." },
      { t: "Common Mobile System Design Questions", d: "Design: Instagram feed, WhatsApp messaging, Uber ride matching, Spotify offline mode, Twitter timeline, Google Maps navigation. For each, know: data model, API design, sync strategy, caching approach, and how to handle offline/poor connectivity." },
      { t: "Drawing the Architecture Diagram", d: "Start with the client (mobile app). Draw the API gateway. Add backend services. Show the database. Mark the cache layers. Use arrows for data flow direction. Label each arrow (REST, WebSocket, gRPC). This visual becomes your discussion anchor." }
    ],
    whatIs: "System design interviews evaluate your ability to design large-scale software systems. For mobile developers, this means designing not just the backend infrastructure, but the entire client-server architecture including offline support, caching strategies, and real-time communication. The interviewer assesses your ability to make and justify technical trade-offs at scale.",
    realWorld: "A mobile developer at a fintech company was asked to design a payment system in their interview. While backend candidates focused only on server architecture, she included: offline payment queuing, optimistic UI updates, retry logic with idempotency keys, local transaction history cache, and push notification for payment confirmations. She got the offer because her design was the most complete — it covered the full user experience, not just the server side.",
    code: `# System Design Template & Checklist
# ====================================

# STEP 1: REQUIREMENTS (5 minutes)
\\\`\\\`\\\`
FUNCTIONAL REQUIREMENTS:
- [ ] Core features (list 3-5)
- [ ] User actions (what can users do?)
- [ ] Data flows (what data moves where?)

NON-FUNCTIONAL REQUIREMENTS:
- [ ] Scale: _____ users, _____ DAU
- [ ] Availability: 99.9% uptime? (3 nines = 8.7 hr downtime/year)
- [ ] Latency: < _____ ms for reads, < _____ ms for writes
- [ ] Consistency: Strong or eventual?
- [ ] Storage: _____ GB/TB estimated

MOBILE-SPECIFIC:
- [ ] Offline support needed?
- [ ] Real-time updates needed?
- [ ] Push notifications?
- [ ] Battery/data optimization?
- [ ] Multi-platform (iOS + Android)?
\\\`\\\`\\\`

# STEP 2: HIGH-LEVEL DESIGN (5 minutes)
\\\`\\\`\\\`
┌──────────┐     ┌───────────┐     ┌──────────────┐
│  Mobile  │────▸│    API    │────▸│   Backend    │
│   App    │◂────│  Gateway  │◂────│   Services   │
└──────────┘     └───────────┘     └──────────────┘
     │                │                    │
     │           ┌────┴─────┐         ┌────┴─────┐
     │           │   CDN    │         │   Cache   │
     │           │ (images) │         │  (Redis)  │
     │           └──────────┘         └──────────┘
     │                                     │
┌────┴─────┐                         ┌─────┴──────┐
│  Local   │                         │  Database  │
│   DB     │                         │ (Postgres) │
│ (SQLite) │                         └────────────┘
└──────────┘
\\\`\\\`\\\`

# STEP 3: DEEP DIVE AREAS
\\\`\\\`\\\`
API DESIGN:
  POST /api/v1/posts        → Create post
  GET  /api/v1/feed?page=1  → Get feed (paginated)
  PUT  /api/v1/posts/:id    → Update post
  WS   /ws/notifications    → Real-time updates

DATA MODEL:
  Users:    id, name, email, avatar_url, created_at
  Posts:    id, user_id, content, media_url, created_at
  Feed:     fan-out-on-write for < 10K followers
            fan-out-on-read for celebrities

CACHING STRATEGY:
  Layer 1 — Device:  SQLite for feed, disk cache for images
  Layer 2 — CDN:     All static assets + image thumbnails
  Layer 3 — Redis:   User sessions, feed cache, counters

OFFLINE SYNC:
  - Queue writes locally when offline
  - Sync on reconnection with conflict resolution
  - Last-write-wins for simple fields
  - CRDT for collaborative data (if needed)
\\\`\\\`\\\`

# STEP 4: SCALE & TRADE-OFFS
\\\`\\\`\\\`
BACK-OF-ENVELOPE:
  10M users × 20% DAU = 2M DAU
  2M DAU × 10 reads/day = 20M reads/day ≈ 230 QPS
  2M DAU × 2 writes/day = 4M writes/day ≈ 46 QPS
  Read-heavy → Cache aggressively

TRADE-OFFS DISCUSSED:
  ✓ SQL vs NoSQL → SQL for ACID on payments, NoSQL for feed
  ✓ Push vs Pull → Push for < 10K followers, Pull for celebs
  ✓ Strong vs Eventual consistency → Eventual for feed, Strong for payments
  ✓ WebSocket vs Polling → WS for active, fallback to polling

WHAT I'D IMPROVE WITH MORE TIME:
  - Add monitoring (Prometheus + Grafana)
  - Implement circuit breaker for external services
  - Add A/B testing infrastructure
  - Geographic distribution (multi-region)
\\\`\\\`\\\``,
    funFact: "The system design interview was popularized by Google in the mid-2000s when they realized coding interviews alone couldn't predict whether a developer could architect large systems. Today, system design rounds are used by 95% of companies hiring for senior roles. For mobile developers, companies like Meta and Uber have mobile-specific system design rounds that focus on client architecture, offline support, and performance optimization.",
    quiz: [
      { q: "What are the 4 steps of the system design framework?", opts: ["Code, Test, Deploy, Monitor", "Requirements, High-Level Design, Deep Dive, Trade-offs", "Frontend, Backend, Database, DevOps", "Ask, Design, Build, Ship"], ans: 1 },
      { q: "What's a mobile developer's superpower in system design interviews?", opts: ["Knowing more algorithms", "Understanding offline support, battery optimization, and push notifications", "Being able to code faster", "Knowing multiple programming languages"], ans: 1 },
      { q: "When should you use fan-out-on-write vs fan-out-on-read for a feed?", opts: ["Always fan-out-on-write", "Fan-out-on-write for normal users, fan-out-on-read for celebrities", "Always fan-out-on-read", "It doesn't matter — they're the same"], ans: 1 },
      { q: "What's the first thing you should do in a system design interview?", opts: ["Start drawing the architecture diagram", "Gather requirements — functional and non-functional", "Choose the database technology", "Estimate the number of servers needed"], ans: 1 },
      { q: "For a read-heavy system (230 QPS reads, 46 QPS writes), what's the primary optimization?", opts: ["More write servers", "Aggressive caching (Redis, CDN, device cache)", "Sharding the database immediately", "Using NoSQL instead of SQL"], ans: 1 },
      { q: "What real-time communication method is best for a mobile chat feature?", opts: ["HTTP polling every 1 second", "WebSockets with push notification fallback", "Email-based messaging", "FTP file transfer"], ans: 1 },
      { q: "What does '3 nines' (99.9%) availability mean in yearly downtime?", opts: ["About 5 minutes", "About 8.7 hours", "About 3.6 days", "About 36.5 days"], ans: 1 }
    ],
    challenge: "Design Instagram's mobile app architecture using the 4-step framework. Set a 35-minute timer. Write out: (1) Requirements — 5 functional, 5 non-functional. (2) High-level architecture diagram with all components. (3) Deep dive into the feed algorithm and image upload pipeline. (4) Back-of-envelope calculations for 1 billion users, discuss trade-offs for SQL vs NoSQL, caching strategy, and offline support. Bonus: How would you handle the 'stories' feature with 24-hour expiration?",
    resources: [
      { type: "article", title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", source: "GitHub" },
      { type: "video", title: "Mobile System Design Interview Guide", url: "https://www.youtube.com/results?search_query=mobile+system+design+interview", source: "YouTube" },
      { type: "article", title: "Grokking the System Design Interview", url: "https://www.designgurus.io/course/grokking-the-system-design-interview", source: "Design Gurus" },
      { type: "article", title: "Back-of-Envelope Estimation Cheat Sheet", url: "https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation", source: "ByteByteGo" }
    ],
    eli5: "Imagine you're building the biggest treehouse ever — one that thousands of kids can play in at the same time. You need to think about: How do kids get up there? (API) What if too many kids climb at once? (load balancing) What if it rains and they can't climb? (offline mode) Where do they store their toys? (database) How do they talk to each other between rooms? (real-time messaging) System design is planning all of this before building!",
    codeWalkthrough: [
      "Step 1 uses checkboxes — in a real interview, write these on the whiteboard as you discuss them with the interviewer",
      "The mobile-specific requirements section is your differentiator — most candidates forget offline support and battery optimization",
      "The high-level diagram shows data flow with arrows — label each connection type (REST, WebSocket, etc.)",
      "Local DB (SQLite) on the mobile side shows you think about the full stack, not just the server",
      "API design uses REST conventions with versioning (/v1/) — mention this shows you think about API evolution",
      "The fan-out strategy split (write for normal, read for celebrities) is a classic trade-off interviewers love",
      "Three-layer caching (device → CDN → Redis) shows depth of understanding about latency optimization",
      "Back-of-envelope calculations prove you can reason about scale — practice these until they're automatic",
      "The 'What I'd improve' section shows maturity — no design is perfect, and acknowledging that impresses interviewers"
    ],
    bugChallenge: {
      code: `# System Design: Chat App Architecture
Components:
- Mobile App connects directly to PostgreSQL database
- All messages stored in single database table
- Images stored in database as BLOBs
- No caching layer
- HTTP polling every 500ms for new messages
- Single server handling all traffic`,
      hint: "There are 6 major architectural problems with this design. Think about security, scalability, performance, storage, real-time communication, and reliability.",
      answer: "(1) Mobile app should NEVER connect directly to a database — needs an API gateway/backend for security and abstraction. (2) Single database table won't scale — need partitioning/sharding by conversation ID. (3) Images as BLOBs in DB is terrible — use object storage (S3) and store URLs in DB. (4) No caching means every read hits the database — add Redis for recent messages and device cache. (5) HTTP polling every 500ms wastes battery and bandwidth — use WebSockets for real-time with push notifications as fallback. (6) Single server is a single point of failure — need load balancer with multiple server instances."
    },
    difficulty: "advanced",
    prereqs: [7]
  },
{id:9,title:"Behavioral Interview: Stories That Land Offers",subtitle:"Turn Your Experience Into Compelling Narratives",analogy:"A behavioral interview is like a movie audition — the director (interviewer) wants to see you ACT out real scenes, not just read your resume. Your stories are your highlight reel. A great actor doesn't wing it — they rehearse their best scenes until they feel natural. Your story bank is your script library!",points:[{t:"The W-STAR Framework",d:"Go beyond basic STAR. Use W-STAR: What (the competency being tested), Situation (context and stakes), Task (your specific responsibility), Action (what YOU did step-by-step), Result (quantified outcome). Starting with 'What' helps you match the right story to the right question instantly."},{t:"Build a Story Bank of 8-10 Stories",d:"Prepare 8-10 polished stories that cover every behavioral category: leadership, conflict, failure, tight deadline, ambiguity, cross-team collaboration, mentoring, technical decision, customer impact, and innovation. Each story should be 2-3 minutes when told aloud. Practice until they flow naturally."},{t:"Map Stories to Common Categories",d:"Every behavioral question maps to a category: 'Tell me about a conflict' = Conflict Resolution, 'Tell me about a time you failed' = Growth Mindset, 'Tell me about leading a project' = Leadership. Map each of your stories to 2-3 categories so you always have the right story ready."},{t:"The 60-Second Rule for Situation Setup",d:"Interviewers lose interest if your setup takes too long. Spend no more than 60 seconds on the Situation and Task — the interviewer wants to hear what YOU did and what happened. Front-load the stakes: 'We were about to lose our biggest client' grabs attention instantly."},{t:"Handling Curveball Questions",d:"When you get an unexpected question, use the pivot technique: pause for 5 seconds, pick the closest story from your bank, and adapt it. It is okay to say 'Let me think about that for a moment.' Silence is better than rambling. If you truly have no example, describe how you WOULD handle it."},{t:"Show Senior-Level Thinking",d:"Senior engineers demonstrate: ownership ('I took responsibility for...'), mentoring ('I helped a junior dev...'), navigating ambiguity ('The requirements were unclear so I...'), and business impact ('This saved the company $X'). Even if you are mid-level, showing these signals sets you apart."},{t:"Quantify Every Result",d:"Vague results kill great stories. 'It went well' means nothing. Instead: 'Reduced deploy time from 45 min to 8 min (82% improvement)' or 'Onboarded 3 new team members who shipped features within their first sprint.' Numbers make your stories memorable and credible."},{t:"Practice the Amazon Leadership Principles Format",d:"Many top companies (not just Amazon) use leadership principle-style questions: Customer Obsession, Bias for Action, Dive Deep, Disagree and Commit. Prepare at least one story per principle. This framework covers 90% of behavioral questions at any FAANG-level company."},{t:"Body Language and Delivery",d:"How you tell the story matters as much as the content. Maintain eye contact (or look at the camera for virtual), speak with energy, use hand gestures naturally. Avoid filler words like 'um' and 'like'. Record yourself practicing — you will be surprised what you discover."}],whatIs:"Behavioral interviews assess your soft skills, decision-making, and past behavior using questions like 'Tell me about a time when...' Companies believe past behavior predicts future performance. The W-STAR framework (What, Situation, Task, Action, Result) helps you structure compelling stories that demonstrate exactly the competencies interviewers are evaluating.",realWorld:"Google, Amazon, Meta, and virtually every tech company include behavioral rounds. Amazon dedicates entire interview loops to Leadership Principles. Many candidates with strong technical skills get rejected because they cannot communicate their experiences effectively. A prepared story bank is the difference between 'maybe' and 'strong hire.'",code:`// === BEHAVIORAL STORY BANK TEMPLATE ===
// Copy this and fill in your own stories
// Goal: 8-10 stories covering all categories

const storyBank = {
  // Story 1: Leadership & Ownership
  story_1: {
    title: "Led migration from monolith to microservices",
    category: ["Leadership", "Technical Decision", "Ambiguity"],
    what: "Demonstrates ownership and technical leadership",
    situation: "Our monolith was causing 2-hour deploys and frequent outages. Team of 8 was frustrated. No clear migration plan existed.",
    task: "I volunteered to lead the migration strategy despite not being the most senior engineer.",
    action: [
      "Researched strangler fig pattern and presented proposal to CTO",
      "Created migration roadmap with 3 phases over 6 months",
      "Pair-programmed with each team member to extract first 3 services",
      "Set up monitoring dashboards to track migration progress",
    ],
    result: "Deploy time: 2 hours -> 8 minutes. Outages dropped 90%. Pattern adopted by 2 other teams. Promoted to senior within 6 months.",
    duration: "2.5 minutes when told aloud",
  },

  // Story 2: Conflict Resolution
  story_2: {
    title: "Disagreed with tech lead on architecture choice",
    category: ["Conflict", "Communication", "Disagree & Commit"],
    what: "Shows ability to handle disagreement professionally",
    situation: "// Fill in: What was the disagreement about?",
    task: "// Fill in: What was your role?",
    action: [
      "// Step 1: How did you approach the conversation?",
      "// Step 2: What data or evidence did you present?",
      "// Step 3: How did you find common ground?",
    ],
    result: "// Quantified outcome + relationship impact",
    duration: "2 minutes when told aloud",
  },

  // Story 3: Failure & Growth
  story_3: {
    title: "Shipped a bug that caused data loss",
    category: ["Failure", "Growth Mindset", "Customer Obsession"],
    what: "// What competency does this demonstrate?",
    situation: "// What happened? What were the stakes?",
    task: "// What was your responsibility?",
    action: ["// How did you fix it?", "// What did you learn?", "// What process did you change?"],
    result: "// Quantified improvement + lessons learned",
  },

  // Story 4: Tight Deadline
  story_4: {
    title: "Delivered feature in 2 weeks instead of planned 6",
    category: ["Deadline", "Bias for Action", "Deliver Results"],
    what: "// ...",
    situation: "// ...",
    task: "// ...",
    action: ["// ...", "// ...", "// ..."],
    result: "// ...",
  },

  // Story 5: Mentoring
  story_5: {
    title: "Onboarded 3 junior developers",
    category: ["Mentoring", "Leadership", "Team Building"],
    what: "// ...",
    situation: "// ...",
    task: "// ...",
    action: ["// ...", "// ...", "// ..."],
    result: "// ...",
  },
};

// === CATEGORY CHECKLIST ===
// Make sure you have at least 1 story for each:
const categories = [
  "Leadership / Ownership",        // "Tell me about leading a project"
  "Conflict Resolution",           // "Tell me about a disagreement"
  "Failure / Growth",              // "Tell me about a time you failed"
  "Tight Deadline / Pressure",     // "Tell me about working under pressure"
  "Ambiguity / No Clear Path",     // "Tell me about unclear requirements"
  "Cross-Team Collaboration",      // "Tell me about working with other teams"
  "Mentoring / Helping Others",    // "Tell me about helping a teammate grow"
  "Technical Decision / Tradeoff", // "Tell me about a tough technical choice"
  "Customer / User Impact",        // "Tell me about improving user experience"
  "Innovation / Process Improvement", // "Tell me about improving a process"
];

// === QUICK REFERENCE: COMMON QUESTIONS ===
const commonQuestions = [
  "Tell me about yourself (2-min pitch, NOT your resume)",
  "Why do you want to work here? (research the company!)",
  "Tell me about a time you disagreed with your manager",
  "Describe a project you are most proud of",
  "Tell me about a time you failed",
  "How do you handle tight deadlines?",
  "Tell me about a time you had to learn something quickly",
  "Describe a situation where you went above and beyond",
  "Tell me about a time you received difficult feedback",
  "Why are you leaving your current role?",
];`,funFact:"Amazon interviewers are trained to ask 'Tell me more' and 'What was YOUR specific contribution?' to dig past rehearsed surface answers. They call it the 'peeling the onion' technique — they keep asking follow-ups until they get to the real story. This is why vague stories fall apart but well-prepared ones shine!",quiz:[{q:"What does the 'W' in W-STAR stand for?",opts:["Win — the outcome you achieved","What — the competency being tested","Work — the work environment","Why — the reason you took action"],ans:1},{q:"How many prepared stories should you have in your story bank?",opts:["2-3 stories total","Exactly 5","8-10 stories covering all categories","One story per company you apply to"],ans:2},{q:"What is the 60-second rule in behavioral interviews?",opts:["You should answer every question in 60 seconds","Spend no more than 60 seconds on the Situation and Task setup","Wait 60 seconds before answering","The interview should last exactly 60 minutes"],ans:1},{q:"What should you do when you get an unexpected curveball question?",opts:["Say you do not have an example and move on","Make up a fake story on the spot","Pause, pick the closest story from your bank, and adapt it","Ask the interviewer to skip the question"],ans:2},{q:"Which of these shows senior-level thinking in a behavioral answer?",opts:["Describing only your individual coding contributions","Demonstrating ownership, mentoring, and navigating ambiguity","Talking about how many hours you worked","Listing all the technologies you used"],ans:2},{q:"Why is 'It went well' a bad result statement?",opts:["It is too short","It is grammatically incorrect","It lacks quantified impact — numbers make stories credible","It is too positive"],ans:2},{q:"What technique do Amazon interviewers use to dig deeper into your stories?",opts:["Speed round — rapid fire questions","Peeling the onion — asking follow-ups like 'Tell me more'","Silent treatment — waiting for you to keep talking","Trick questions — trying to confuse you"],ans:1}],challenge:"Build your personal story bank: Write out 3 complete W-STAR stories covering Leadership, Conflict, and Failure. For each story, time yourself telling it aloud — aim for 2-3 minutes. Then practice with a friend or record yourself on video. Review and refine until each story flows naturally without notes.",resources:[{type:"article",title:"Amazon Leadership Principles Interview Guide",url:"https://www.aboutamazon.com/about-us/leadership-principles",source:"Amazon"},{type:"video",title:"How to Answer Behavioral Interview Questions",url:"https://www.youtube.com/watch?v=PJKYqLP6MRE",source:"Jeff Su"},{type:"article",title:"The STAR Method: Complete Guide",url:"https://www.themuse.com/advice/star-interview-method",source:"The Muse"},{type:"article",title:"Top 30 Behavioral Interview Questions",url:"https://www.techinterviewhandbook.org/behavioral-interview/",source:"Tech Interview Handbook"}],eli5:"Imagine your teacher asks 'Tell me about a time you were a good friend.' You would not just say 'I am nice.' You would tell a story: 'My friend was sad because... so I did... and then they felt better!' That is exactly what a behavioral interview is — telling real stories about things you did, with a beginning, middle, and happy ending.",codeWalkthrough:["Comment header for the story bank template","Comment explaining to copy and customize","Comment: goal is 8-10 stories","Opening the storyBank object","","Comment for Story 1 category","Opening story_1 object with a descriptive title","This story maps to 3 categories — Leadership, Technical Decision, and Ambiguity","The 'what' field identifies the competency being demonstrated","Situation: sets the scene with specific context and stakes (2-hour deploys, outages)","Task: what YOU were specifically responsible for — note the ownership signal","Opening the action array — these are YOUR specific steps","Action step 1: researched and proposed a technical solution","Action step 2: created a structured plan with timeline","Action step 3: hands-on pair programming to execute","Action step 4: set up monitoring for accountability","Closing the action array","Result: quantified outcomes — deploy time, outages, team adoption, and career impact","How long this story takes to tell aloud — aim for 2-3 minutes","Closing story_1","","Comment for Story 2 — Conflict Resolution","Opening story_2 with title","Maps to Conflict, Communication, and Disagree & Commit categories","Template prompts for what, situation, task","Template prompt for situation details","Template prompt for your role","Opening the action array with template prompts","Step 1 template","Step 2 template","Step 3 template","Closing action array","Template for quantified result","Duration estimate","Closing story_2","","Comment for Story 3 — Failure and Growth","Opening story_3 with title about a real failure","This maps to Failure, Growth Mindset, and Customer Obsession","Template fields to fill in","","","Action templates","","","Result template","Closing story_3","","Comment for Story 4 — Tight Deadline","Full template structure","","","","","","","","","Comment for Story 5 — Mentoring","Full template structure","","","","","","","","Closing storyBank","","Comment header for category checklist","Opening categories array","Each category includes the matching interview question","Conflict resolution category","Failure and growth category","Deadline and pressure category","Ambiguity category","Cross-team collaboration category","Mentoring category","Technical decision category","Customer impact category","Innovation category","Closing categories array","","Comment header for common questions quick reference","Opening commonQuestions array","The classic opening question — prepare a 2-minute pitch","Research-based question — shows genuine interest","Conflict with authority question","Achievement and pride question","Failure and learning question","Pressure handling question","Learning agility question","Going above and beyond question","Feedback receptiveness question","Transition motivation question","Closing commonQuestions array"],bugChallenge:{code:`// Behavioral answer attempt:
// Q: "Tell me about a time you resolved a conflict"
//
// "We had a disagreement on the team about which
// database to use. It was resolved and we moved on.
// The project was successful."
//
// What is wrong with this answer?`,hint:"Think about which parts of the W-STAR framework are missing...",answer:"This answer is missing almost everything: no specific Situation (who, what, when), no Task (what was YOUR role), no Action (what did YOU specifically do to resolve it), and no quantified Result. A better answer: 'On the payments team [S], I needed to align the backend and frontend leads [T], so I organized a comparison matrix and facilitated a 30-min decision meeting [A], which led us to choose PostgreSQL and ship 2 weeks early [R].'"},difficulty:"intermediate",prereqs:[7]},
{id:10,title:"Resume That Passes ATS & Impresses Humans",subtitle:"Your 6-Second First Impression",analogy:"Your resume is like a movie trailer — a recruiter spends only 6 seconds on the first scan, just like you decide whether to watch a movie from its trailer. The ATS (Applicant Tracking System) is the bouncer at the club door. If your resume does not match the dress code (keywords), you never get inside, no matter how talented you are.",points:[{t:"ATS-Friendly Formatting",d:"Applicant Tracking Systems parse your resume as plain text. Avoid tables, columns, graphics, headers/footers, and text boxes — ATS cannot read them. Use a single-column layout with standard section headers: Experience, Education, Skills, Projects. Save as PDF but test by copy-pasting into Notepad — if it reads correctly, ATS can parse it."},{t:"The Power Header",d:"Your header should include: Full Name, Target Title (e.g., 'Full-Stack Developer'), Location (City, State or 'Remote'), Email, Phone, LinkedIn URL, GitHub URL, and Portfolio link. Skip the photo. Skip 'References available upon request.' Every character must earn its place."},{t:"Quantify Impact With Numbers",d:"Transform every bullet from responsibility to achievement. Bad: 'Worked on the payments API.' Good: 'Built payments API handling 50K transactions/day, reducing checkout failures by 34%.' Use the formula: Action Verb + What You Did + Quantified Result. Numbers are recruiter magnets."},{t:"Tailor Per Job Posting",d:"Read the job description, highlight the key requirements and technologies, then mirror those exact keywords in your resume. If they say 'React' do not write 'ReactJS'. If they say 'CI/CD' make sure those letters appear. Keep a master resume and create tailored versions for each application."},{t:"The One-Page Rule",d:"Unless you have 10+ years of experience, keep it to one page. Recruiters spend 6-7 seconds on initial screening. A two-page resume from a junior developer signals poor prioritization. Cut ruthless: if a bullet point does not make you look hireable, delete it."},{t:"Strong Action Verbs",d:"Start every bullet with a powerful verb: Built, Designed, Led, Architected, Reduced, Automated, Migrated, Optimized, Implemented, Shipped. Avoid weak verbs: Helped, Assisted, Participated, Was responsible for. The verb sets the tone — 'Built' sounds like ownership, 'Helped' sounds like a bystander."},{t:"Skills Section Strategy",d:"List technical skills in categories: Languages (TypeScript, Python), Frameworks (React, NestJS, Next.js), Tools (Docker, AWS, PostgreSQL), Practices (CI/CD, TDD, Agile). Match the job posting order. Put your strongest and most relevant skills first. Do not list soft skills here — demonstrate them in your bullets."},{t:"Projects Section for Career Changers",d:"No experience? Your projects section IS your experience. For each project: Name, Tech Stack, 2-3 bullet points with quantified results. 'Built a real-time chat app with React, Socket.io, and PostgreSQL. Supports 100 concurrent users with less than 200ms latency.' Treat projects like jobs — they prove you can build."},{t:"Education and Certifications",d:"Put Education after Experience (unless you are a new grad). Include degree, university, graduation year. Add relevant certifications: AWS Certified, Google Cloud, Meta Front-End. For bootcamp grads, list the bootcamp. GPA only if above 3.5 and you graduated within 2 years."}],whatIs:"Your resume is a marketing document — not a biography. Its only job is to get you an interview. It must pass two gates: the ATS (software that filters resumes by keywords) and the human recruiter (who spends 6 seconds scanning). A great resume uses ATS-friendly formatting, quantified achievements, and tailored keywords to pass both gates consistently.",realWorld:"Studies show that 75% of resumes are rejected by ATS before a human ever sees them. Recruiters at large companies receive 250+ applications per role. The average initial resume scan lasts 6-7 seconds. Using the right format and keywords can double your interview callback rate overnight.",code:`// === DEVELOPER RESUME TEMPLATE (ATS-FRIENDLY) ===
// Copy this structure and fill in your details
// Save as .md then export to PDF, or use in a simple template

const resumeTemplate = \`
JANE DOE
Full-Stack Developer | Remote | jane@email.com
(555) 123-4567 | linkedin.com/in/janedoe | github.com/janedoe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SKILLS
Languages:    TypeScript, JavaScript, Python, SQL
Frameworks:   React, Next.js, NestJS, Express, Tailwind CSS
Databases:    PostgreSQL, MongoDB, Redis
Tools:        Docker, AWS (EC2, S3, Lambda), Git, GitHub Actions
Practices:    CI/CD, REST APIs, GraphQL, TDD, Agile/Scrum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE

Senior Full-Stack Developer | Acme Corp | Jan 2022 - Present
- Built payments microservice handling 50K transactions/day,
  reducing checkout failures by 34%
- Led migration from REST to GraphQL, cutting API response
  times by 60% and reducing frontend data-fetching code by 40%
- Mentored 3 junior developers through code reviews and
  pair programming; all promoted within 12 months
- Implemented CI/CD pipeline with GitHub Actions, reducing
  deploy time from 45 minutes to 8 minutes

Full-Stack Developer | StartupXYZ | Jun 2020 - Dec 2021
- Developed React dashboard used by 2,000+ daily active users
  with 99.9% uptime over 18 months
- Designed PostgreSQL schema supporting 10M+ rows with query
  times under 50ms using proper indexing
- Automated testing pipeline achieving 85% code coverage,
  catching 40+ bugs before production

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECTS

Real-Time Chat App | React, Socket.io, NestJS, PostgreSQL
- Built full-stack chat supporting 100 concurrent users with
  <200ms message delivery latency
- Implemented JWT authentication with refresh token rotation

AI Code Reviewer | Python, OpenAI API, GitHub Actions
- Created GitHub Action that auto-reviews PRs using GPT-4,
  adopted by 3 open-source projects (500+ stars)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EDUCATION
B.S. Computer Science | State University | 2020
AWS Certified Developer - Associate | 2023
\`;

// === BULLET POINT FORMULA ===
// [Action Verb] + [What You Did] + [Quantified Result]

const bulletFormulas = [
  "Built [feature] that [metric], resulting in [outcome]",
  "Reduced [metric] from [X] to [Y] by [how]",
  "Led [initiative] across [N] teams, delivering [result]",
  "Automated [process], saving [N] hours/week",
  "Migrated [system] from [old] to [new], improving [metric] by [X%]",
  "Designed [system] supporting [N] users with [performance metric]",
  "Implemented [solution] that [business impact]",
  "Mentored [N] developers, resulting in [outcome]",
];

// === POWER VERBS (use these, not weak verbs) ===
const strongVerbs = [
  "Built", "Designed", "Architected", "Led", "Shipped",
  "Optimized", "Reduced", "Automated", "Migrated", "Scaled",
  "Implemented", "Refactored", "Mentored", "Launched", "Created",
];

const weakVerbs = [
  "Helped", "Assisted", "Participated in", "Was responsible for",
  "Worked on", "Handled", "Dealt with", "Used", "Did",
];`,funFact:"A study by Ladders Inc. found that recruiters spend an average of 7.4 seconds on an initial resume scan. In that time, they look at your name, current title, current company, start and end dates, previous title and company, and education. Everything else is bonus. This is why your header and most recent experience must be perfect — they are literally the only things most recruiters read on the first pass!",quiz:[{q:"Why should you avoid tables and graphics in your resume?",opts:["They make the file too large","ATS software cannot parse them, so your resume gets rejected","Recruiters find them unprofessional","They do not print well"],ans:1},{q:"What is the correct formula for resume bullet points?",opts:["Responsibility + Technology Used","Action Verb + What You Did + Quantified Result","Date + Task + Team Size","Job Title + Duration + Company Name"],ans:1},{q:"When should a developer's resume be longer than one page?",opts:["When you have more than 3 projects","When you have 10+ years of experience","When you know many programming languages","Always — more detail is better"],ans:1},{q:"What is the best way to tailor your resume for a specific job?",opts:["Rewrite your resume from scratch for every application","Mirror the exact keywords and technologies from the job description","Add a paragraph explaining why you want the job","Change your job titles to match what they are looking for"],ans:1},{q:"How can you test if your resume is ATS-friendly?",opts:["Send it to 100 companies and see how many respond","Copy-paste it into Notepad — if it reads correctly, ATS can parse it","Use a colored template — ATS prefers colorful resumes","Add as many keywords as possible in white text"],ans:1},{q:"What should career changers focus on in their resume?",opts:["Their previous unrelated work experience","A detailed objective statement","The Projects section with quantified results","A list of online courses completed"],ans:2},{q:"Which is a stronger bullet point?",opts:["Worked on the frontend team","Helped build user interfaces","Built React dashboard used by 2,000+ daily active users with 99.9% uptime","Was responsible for frontend development tasks"],ans:2}],challenge:"Create your own ATS-friendly resume using the template above. Write at least 4 bullet points using the Action Verb + What + Quantified Result formula. Then test it: copy-paste your PDF into Notepad and check if all the text reads correctly. Share it with a friend and ask them to scan it for 7 seconds — can they tell what you do and why you are impressive?",resources:[{type:"article",title:"How to Write a Developer Resume That Gets Interviews",url:"https://www.techinterviewhandbook.org/resume/",source:"Tech Interview Handbook"},{type:"video",title:"Resume Tips for Software Engineers",url:"https://www.youtube.com/watch?v=aKjsy-b00QM",source:"Clement Mihailescu"},{type:"article",title:"ATS Resume Checker — Free Tool",url:"https://www.jobscan.co/",source:"Jobscan"},{type:"article",title:"Harvard Resume Template",url:"https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/",source:"Harvard Career Services"}],eli5:"Imagine you are making a poster for a lemonade stand. If you write too much, nobody stops to read it. If you write 'Best Lemonade — 100 cups sold today!' people stop because it is short and impressive. Your resume is like that poster — keep it short, make it impressive with numbers, and make sure the robot scanner (ATS) can read every word.",codeWalkthrough:["Comment header: this is an ATS-friendly developer resume template","Instruction to copy and customize","Instruction on export format","Opening the template string","","Full name — large and clear at the top","Contact line: title, location, email","Phone, LinkedIn, GitHub — all on one line","","Section divider","","SKILLS section header","Languages listed by proficiency and relevance","Frameworks grouped together","Databases and caching tools","DevOps and cloud tools","Development practices and methodologies","","Section divider","","EXPERIENCE section header","","Job title, company, and date range on one line","Bullet 1: Built + what + quantified result (50K transactions, 34% reduction)","Continuation of bullet 1","Bullet 2: Led + migration + quantified performance improvement","Continuation of bullet 2","Bullet 3: Mentored + number of people + their outcome (promoted)","Continuation of bullet 3","Bullet 4: Implemented + tool + quantified time savings","Continuation of bullet 4","","Previous role with title, company, and dates","Bullet 1: Developed + what + user count + uptime metric","Continuation of bullet 1","Bullet 2: Designed + system + scale + performance metric","Continuation of bullet 2","Bullet 3: Automated + what + coverage metric + bugs caught","Continuation of bullet 3","","Section divider","","PROJECTS section header","","Project name with full tech stack listed","Bullet 1: scale and performance metrics","Continuation of bullet 1","Bullet 2: security feature implemented","","Second project with tech stack","Bullet 1: what it does + social proof (stars, adoption)","Continuation of bullet 1","","Section divider","","EDUCATION section header","Degree, university, graduation year","Certification with year","Closing the template string","","Comment: bullet point formula reference","Explanation of the formula pattern","","Opening the formula examples array","Feature + metric + outcome pattern","Reduction pattern with before/after numbers","Leadership pattern with team scope","Automation pattern with time savings","Migration pattern with improvement percentage","System design pattern with scale metrics","Implementation pattern with business impact","Mentoring pattern with developmental outcome","Closing the array","","Comment: power verbs header","Opening strong verbs array","Row 1 of strong action verbs","Row 2 of strong action verbs","Row 3 of strong action verbs","Closing array","","Comment: weak verbs to avoid","Opening weak verbs array","These verbs signal passivity — avoid them in resumes","Closing array"],bugChallenge:{code:`// Resume bullet point review:
// Which of these bullet points has problems?
//
// 1. "Responsible for working on the backend"
// 2. "Built REST API serving 10K requests/min with 99.9% uptime"
// 3. "Helped the team with various frontend tasks"
// 4. "Used React and Node.js on daily basis"
//
// How would you fix the bad ones?`,hint:"Look for weak verbs, missing quantified results, and vague descriptions...",answer:"Bullets 1, 3, and 4 are all weak. #1 uses passive 'Responsible for' with no result. Fix: 'Architected NestJS backend serving 5K daily users with <100ms response times.' #3 uses 'Helped' with vague scope. Fix: 'Built 12 React components for the design system, reducing UI development time by 30%.' #4 just lists tools with no achievement. Fix: 'Developed React + Node.js dashboard processing 1M+ data points with real-time WebSocket updates.'"},difficulty:"beginner",prereqs:[]},
{id:11,title:"LinkedIn Optimization for Developers",subtitle:"Turn Your Profile Into a Recruiter Magnet",analogy:"Your LinkedIn profile is like a storefront window — recruiters walk by thousands of profiles every day. If your window display (headline, banner, about section) is boring or empty, they keep walking. But if it showcases exactly what they are looking for with eye-catching displays, they come inside. Your profile works 24/7 even when you are asleep!",points:[{t:"The Headline Formula",d:"Your headline is the most searchable field on LinkedIn. Do not just put your job title. Use this formula: [Role] | [Key Technologies] | [Value Proposition]. Example: 'Full-Stack Developer | React, TypeScript, NestJS | Building scalable web apps that users love.' Recruiters search by keywords — pack your headline with the right ones."},{t:"About Section That Converts",d:"Your About section should follow a 3-part structure: Hook (what you are passionate about), Proof (your key achievements with numbers), and CTA (what you are looking for). Write in first person. Keep it under 300 words. Include keywords recruiters search for. End with 'Open to opportunities in [X]. Best way to reach me: [email].'"},{ t:"Profile Photo and Banner",d:"Profiles with photos get 21x more views. Use a professional headshot with good lighting and a clean background. Your banner image is free real estate — use it to showcase your tech stack, personal brand, or a tagline like 'Building the future with TypeScript and React.' Free tools: Canva for banners, remove.bg for backgrounds."},{t:"Experience Section Optimization",d:"Mirror your resume but expand on it. Each role should have 3-5 bullets with quantified achievements. Add media: link to the product, a demo video, or a blog post about the project. Tag the technologies used. Rich experience sections signal to both recruiters and the LinkedIn algorithm that your profile is complete and valuable."},{t:"Content Strategy: Post 2-3 Times Per Week",d:"Posting consistently grows your network exponentially. Share: what you learned today, a coding tip, a project update, a career reflection, or an industry opinion. The LinkedIn algorithm favors text posts and carousels over link shares. Aim for 2-3 posts per week. Engagement in the first hour matters most — post when your network is online."},{t:"Engage Strategically With Recruiters",d:"When a recruiter messages you, always respond — even if you are not interested. Say 'Thanks for reaching out. I am not actively looking right now, but I would love to stay connected for future opportunities. Here is what I am looking for when the time comes: [criteria].' This keeps the door open. Recruiters remember people who respond professionally."},{t:"Skills, Endorsements, and Recommendations",d:"Add your top 50 skills (LinkedIn allows it) with the most relevant ones pinned to the top 3 spots. Ask 3-5 colleagues for recommendations — specifically ask them to mention a project you worked on together. Profiles with 5+ skills get 17x more profile views. Endorsements from others boost your search ranking."},{t:"Featured Section and Custom URL",d:"Use the Featured section to showcase your best work: a portfolio link, a popular blog post, a project demo, or a conference talk. Customize your LinkedIn URL to linkedin.com/in/yourname (not the default random string). This looks professional on resumes and business cards and is easier for people to find you."},{t:"Connection Strategy",d:"Aim for 500+ connections — this unlocks 'Social selling index' benefits and increases your visibility. Connect with: coworkers, bootcamp peers, conference attendees, people whose content you enjoy, and recruiters at target companies. Always send a personalized note with connection requests — acceptance rates jump from 30% to 70%."}],whatIs:"LinkedIn is the primary platform where tech recruiters find candidates. An optimized profile acts as a passive job search engine — recruiters find YOU instead of you chasing jobs. The key elements are: a keyword-rich headline, a compelling About section, quantified experience, regular content posting, and strategic networking. Think of it as your professional landing page that works around the clock.",realWorld:"LinkedIn reports that users with complete profiles are 40x more likely to receive opportunities. Over 87% of recruiters use LinkedIn as their primary sourcing tool. Developers who post regularly report receiving 3-5x more recruiter messages. A strong LinkedIn presence can eliminate the need for cold applications entirely — offers come to you.",code:`// === LINKEDIN OPTIMIZATION TEMPLATES ===
// Copy and customize these for your profile

// --- HEADLINE FORMULA ---
// [Role] | [Key Technologies] | [Value Proposition]
const headlineExamples = [
  "Full-Stack Developer | React, TypeScript, NestJS | Building scalable web apps",
  "Frontend Engineer | React, Next.js, Tailwind | Crafting beautiful user experiences",
  "Backend Developer | Node.js, PostgreSQL, AWS | Designing APIs that scale to millions",
  "Software Engineer | Python, TypeScript, Docker | Turning complex problems into simple solutions",
  "Mobile Developer | React Native, TypeScript | Shipping cross-platform apps users love",
];

// --- ABOUT SECTION TEMPLATE ---
const aboutTemplate = \`
I build [type of software] that [value you deliver].

Over the past [N] years, I have:
-> Built [notable project] used by [N]+ users
-> Reduced [metric] by [X]% at [Company]
-> Led teams of [N] to deliver [outcome]
-> Contributed to [open source / community]

Tech I work with daily:
Frontend: React, TypeScript, Next.js, Tailwind CSS
Backend: NestJS, Node.js, PostgreSQL, Redis
DevOps: Docker, AWS, GitHub Actions, CI/CD

Currently: [What you are doing now]
Looking for: [What you want — be specific!]

Let us connect! Best way to reach me:
-> Email: your@email.com
-> Portfolio: yoursite.com
\`;

// --- POST TEMPLATES ---
const postTemplates = {
  learningPost: \`
Today I learned about [topic] and it changed how I think about [area].

Here is what surprised me:

1. [Key insight with brief explanation]
2. [Key insight with brief explanation]
3. [Key insight with brief explanation]

The biggest takeaway: [one-line summary]

What is your experience with [topic]?

#webdevelopment #typescript #programming
\`,

  projectUpdate: \`
I just shipped [project name] and here is what I learned:

The problem: [What problem does it solve?]
The stack: [Technologies used]
The result: [Quantified outcome]

The hardest part was [challenge] because [why].
I solved it by [approach].

If you are facing a similar challenge, here is my advice:
[Actionable tip]

Link in comments (LinkedIn prefers no links in posts).

#buildinpublic #webdev #javascript
\`,

  connectionRequest: \`
Hi [Name],

I have been following your posts about [topic] and really
enjoyed your recent take on [specific post/topic].

I am a [your role] working with [your tech stack] and would
love to connect and learn from your experience in [their area].

Looking forward to connecting!
[Your name]
\`,

  recruiterResponse: \`
Hi [Recruiter Name],

Thanks so much for reaching out! I appreciate you thinking of me.

[If interested:]
This role looks really interesting. I would love to learn more.
I am available for a quick call this week — how about [day/time]?

[If not interested now:]
I am not actively looking right now, but I would love to stay
connected for future opportunities. Here is what I look for:
- Role: [Senior Full-Stack / Backend / etc.]
- Tech: [React, TypeScript, NestJS, etc.]
- Type: [Remote / Hybrid in City]
- Comp: [\$X+ base]

Thanks again, and let us stay in touch!
[Your name]
\`,
};`,funFact:"LinkedIn's algorithm gives new posts a 'test audience' of about 8-10% of your network in the first hour. If those people engage (like, comment, share), the post gets pushed to a wider audience. This means the first hour after posting is critical — which is why posting when your network is most active (typically Tuesday-Thursday, 8-10 AM in your target timezone) dramatically increases your reach!",quiz:[{q:"What is the most searchable field on your LinkedIn profile?",opts:["Your About section","Your headline","Your job title in Experience","Your Skills section"],ans:1},{q:"What is the recommended headline formula for developers?",opts:["Just your current job title","Role + Key Technologies + Value Proposition","Company Name + Years of Experience","A motivational quote"],ans:1},{q:"How often should you post on LinkedIn for optimal growth?",opts:["Once a month","Once a week","2-3 times per week","Every day, multiple times"],ans:2},{q:"What should you do when a recruiter messages you about a role you are not interested in?",opts:["Ignore the message","Respond politely, stay connected, and share your criteria for future roles","Tell them you are not interested and block them","Forward the message to a friend"],ans:1},{q:"What type of content does the LinkedIn algorithm favor most?",opts:["Links to external articles","Text posts and carousels","Video content only","Reshares of other people's posts"],ans:1},{q:"How many connections should you aim for to unlock LinkedIn visibility benefits?",opts:["50+","100+","500+","10,000+"],ans:2},{q:"What increases connection request acceptance rate from 30% to 70%?",opts:["Having a premium account","Sending a personalized note with the request","Having more followers than them","Connecting from a mobile device"],ans:1}],challenge:"Optimize your LinkedIn profile right now: (1) Rewrite your headline using the formula. (2) Write a new About section using the 3-part template (Hook, Proof, CTA). (3) Update your 3 most recent Experience bullets with quantified achievements. (4) Write and publish one post using the learning post template. Track your profile views for the next week — you should see a noticeable increase.",resources:[{type:"article",title:"LinkedIn Profile Tips for Developers",url:"https://www.techinterviewhandbook.org/resume/",source:"Tech Interview Handbook"},{type:"video",title:"How to Optimize Your LinkedIn Profile",url:"https://www.youtube.com/watch?v=BcfGWgSKN8c",source:"Jeff Su"},{type:"article",title:"LinkedIn Algorithm: How It Works in 2024",url:"https://www.hootsuite.com/resources/linkedin-algorithm",source:"Hootsuite"},{type:"article",title:"Developer Personal Branding Guide",url:"https://www.freecodecamp.org/news/personal-branding-for-developers/",source:"freeCodeCamp"}],eli5:"Imagine you have a really cool lemonade stand, but it is hidden behind a tall fence where nobody can see it. LinkedIn is like moving your stand to the busiest street in town with a big colorful sign that says exactly what makes your lemonade special. The better your sign, the more people stop by — and some of those people want to hire you to make lemonade for THEIR company!",codeWalkthrough:["Comment header for LinkedIn templates","Instruction to copy and customize","","Comment: headline formula explanation","Format pattern for headlines","Opening the examples array","Full-stack developer headline example with technologies and value","Frontend engineer headline with specialization","Backend developer headline emphasizing scale","General software engineer headline","Mobile developer headline","Closing the array","","Comment: about section template","Opening the template string","Opening hook line — what you build and the value","","Experience section with quantified achievements","Built something with user count","Reduced a metric with percentage","Led a team with outcome","Community contribution","","Tech stack section header","Frontend technologies listed","Backend technologies listed","DevOps tools listed","","Current status","What you are looking for — be specific","","Contact information call-to-action","Email address","Portfolio link","Closing the template","","Comment: post templates","Opening postTemplates object","Learning post template key","Opening the template","Topic and impact hook","","Numbered insights structure","First key insight","Second key insight","Third key insight","","One-line takeaway summary","","Engagement question to drive comments","","Relevant hashtags","Closing the learning post template","","Project update post template key","Opening the template","Project name and lesson hook","","Problem statement","Tech stack used","Quantified result","","Challenge and reason","Solution approach","","Actionable advice for readers","","Note about links in comments (algorithm tip)","","Hashtags","Closing the project update template","","Connection request template key","Opening the template","Greeting with name","","Reference to their content showing genuine interest","Specific post or topic reference","","Your introduction with role and stack","Reason for connecting","","Closing","Your name","Closing the connection request template","","Recruiter response template key","Opening the template","Greeting","","Thank you opening","","If interested path","Express interest","Suggest specific availability","","If not interested path","Polite decline with future door open","Your criteria list","Role preference","Technology preference","Work arrangement preference","Compensation expectation","","Closing","Your name","Closing the recruiter response template","Closing the postTemplates object"],bugChallenge:{code:`// LinkedIn Headline Review:
// Which headline will get the most recruiter attention?
//
// A: "Software Developer at TechCorp"
// B: "Full-Stack Developer | React, TypeScript, Node.js |
//     Building scalable apps for 100K+ users"
// C: "Passionate coder who loves to learn new things"
// D: "Looking for new opportunities"
//
// Why are the others worse?`,hint:"Think about what recruiters actually search for on LinkedIn...",answer:"B is the best headline. A only states a generic title — recruiters cannot tell what technologies you use. C has zero searchable keywords — 'passionate coder' matches no recruiter searches. D signals desperation and contains no useful information. B works because it includes: specific role (Full-Stack Developer), searchable technologies (React, TypeScript, Node.js), and a value proposition with social proof (100K+ users). Recruiters search by technology keywords, so packing them into your headline makes you discoverable."},difficulty:"beginner",prereqs:[10]},
{id:12,title:"Cover Letters, Follow-ups & Referrals",subtitle:"The Hidden Channels That Actually Get You Hired",analogy:"If your resume is your movie trailer, the cover letter is the director's personal note saying 'You need to see this film, and here is exactly why.' Follow-up emails are like a friendly wave across the room reminding someone you exist. And referrals? Those are VIP backstage passes — they skip you past 90% of the line because someone inside already vouches for you.",points:[{t:"The 3-Paragraph Cover Letter Formula",d:"Paragraph 1 — Hook: Name the role + something specific about the company that excites you (NOT 'I am writing to apply'). Paragraph 2 — Proof: Your 2-3 most relevant achievements with numbers that match THEIR requirements. Paragraph 3 — Close: Enthusiasm + call to action ('I would love to discuss how my experience with [X] can help [Company] achieve [Y]'). Keep the entire letter under 250 words."},{t:"Research Before You Write",d:"Spend 10 minutes researching the company before writing. Check their blog, recent product launches, funding rounds, or engineering blog posts. Reference something specific: 'I was impressed by your recent migration to Kubernetes detailed in your engineering blog.' This signals genuine interest and separates you from the 95% who send generic letters."},{t:"Follow-Up Email Timing",d:"Send a follow-up 5-7 business days after applying if you have not heard back. Keep it short (3-4 sentences): reference your application, add one new piece of value (a relevant project or article), and ask about timeline. If no response after the follow-up, send one final check-in 2 weeks later. After that, move on — do not become a pest."},{t:"The Warm Follow-Up After an Interview",d:"Send a thank-you email within 24 hours of every interview. Reference a specific topic discussed: 'I really enjoyed our conversation about scaling the recommendation engine.' Add something you forgot to mention or a link to relevant work. Address each interviewer individually with personalized notes — not the same generic message to everyone."},{t:"How to Ask for Referrals Properly",d:"Referrals are the number one way people get hired — referred candidates are 4x more likely to get an offer. Do NOT ask strangers 'Can you refer me?' Instead: build a genuine connection first, explain why you are interested in their company specifically, share your resume, and make it easy for them by providing a 2-sentence summary they can forward to their recruiter."},{t:"The Referral Request Framework",d:"Step 1: Connect and engage with their content for 2-4 weeks. Step 2: Send a warm message: 'I have been following your work at [Company] and I am really interested in the [Role]. Would you be open to referring me? I have attached my resume and a quick summary.' Step 3: Provide a 'referral blurb' they can copy-paste to their recruiter. Make it effortless for them."},{t:"When NOT to Send a Cover Letter",d:"Skip the cover letter if: the application does not ask for one, you are applying through a quick-apply button, or the company culture is very informal (startups often skip them). Always send one if: the application has a cover letter field, you are applying to a role that requires communication skills, or you have a specific connection to the company."},{t:"Tracking Your Outreach",d:"Use a spreadsheet or tool like Notion to track every application, follow-up, and referral request. Columns: Company, Role, Date Applied, Contact Person, Follow-Up Date, Referral Status, Response, Next Step. Without tracking, you will forget to follow up — and follow-ups are where most offers actually come from."}],whatIs:"Cover letters, follow-up emails, and referral requests are the 'hidden channels' of job searching. While most candidates just click 'Apply' and wait, the ones who get hired send targeted cover letters that show genuine interest, follow up strategically to stay top-of-mind, and leverage referrals to bypass the applicant pile entirely. These communication skills are force multipliers for your job search.",realWorld:"Internal data from multiple companies shows that referred candidates have a 40-60% higher chance of getting an interview compared to cold applications. A CareerBuilder study found that 22% of hiring managers said a lack of follow-up was a reason they passed on a candidate. At companies like Google, over 50% of hires come through referrals. These hidden channels are where the real hiring happens.",code:`// === COVER LETTER, FOLLOW-UP & REFERRAL TEMPLATES ===

// --- 3-PARAGRAPH COVER LETTER ---
const coverLetterTemplate = \`
Dear [Hiring Manager / Team Name],

[HOOK - 2 sentences] I am excited to apply for the [Role]
at [Company]. Your recent [specific thing: blog post, product
launch, funding round] on [topic] resonated with me because
[genuine reason tied to your experience].

[PROOF - 3-4 sentences] In my current role at [Company], I
[achievement #1 with numbers]. I also [achievement #2 with
numbers that matches their job requirements]. I am particularly
drawn to this role because [specific requirement from JD] aligns
directly with my experience in [your relevant skill].

[CLOSE - 2 sentences] I would love to discuss how my experience
with [technology/skill] can help [Company] [their goal]. I am
available for a conversation at your convenience and look forward
to hearing from you.

Best regards,
[Your Name]
[Email] | [Phone] | [LinkedIn] | [Portfolio]
\`;

// --- FOLLOW-UP EMAIL (5-7 days after applying) ---
const followUpTemplate = \`
Subject: Following up — [Role] Application | [Your Name]

Hi [Recruiter/Hiring Manager Name],

I recently applied for the [Role] position and wanted to
follow up to express my continued interest. Since applying,
I [completed a relevant project / published an article about
a related topic / earned a certification] that I believe
further demonstrates my fit for this role.

I have attached [my updated resume / a link to the project]
for your reference. Would you be able to share an update
on the timeline for this position?

Thank you for your time!
[Your Name]
\`;

// --- POST-INTERVIEW THANK YOU (within 24 hours) ---
const thankYouTemplate = \`
Subject: Thank you — [Role] Interview

Hi [Interviewer First Name],

Thank you for taking the time to speak with me today about
the [Role] position. I especially enjoyed our conversation
about [specific topic discussed — e.g., "the challenges of
scaling the notification system"].

It reinforced my excitement about the opportunity. One thing
I wanted to add that I did not mention during our conversation:
[brief additional relevant experience or insight].

I am very enthusiastic about the possibility of joining
[Company] and contributing to [specific team goal]. Please
do not hesitate to reach out if you need any additional
information.

Best regards,
[Your Name]
\`;

// --- REFERRAL REQUEST MESSAGE ---
const referralRequestTemplate = \`
Hi [Name],

I hope you are doing well! I have been following your posts
about [topic] at [Company] and really admire the work your
team is doing on [specific project/product].

I am very interested in the [Role] position that is currently
open. Given your experience there, would you be open to
referring me? I believe my background in [key skill] and
experience with [relevant achievement] would be a strong fit.

To make it easy, here is a quick summary you can share with
your recruiting team:

"[Your Name] is a [Role] with [N] years of experience in
[key technologies]. They recently [top achievement with
numbers]. They are interested in the [Role] role."

I have also attached my resume. No pressure at all — I
completely understand if it is not possible. Either way,
I appreciate your time!

Best,
[Your Name]
\`;

// --- OUTREACH TRACKING TEMPLATE ---
const trackingColumns = [
  "Company",
  "Role",
  "Date Applied",
  "Application Method (Direct / Referral / Recruiter)",
  "Contact Person",
  "Contact Email",
  "Cover Letter Sent (Y/N)",
  "Follow-Up #1 Date",
  "Follow-Up #2 Date",
  "Referral Requested (Y/N)",
  "Referral Person",
  "Response Received (Y/N)",
  "Interview Scheduled",
  "Status (Applied / Interviewing / Offer / Rejected)",
  "Notes",
];`,funFact:"Google's internal data once revealed that employee referrals accounted for over 50% of their hires, despite referrals making up less than 10% of total applications. This means a referred candidate was roughly 10x more likely to get hired than someone who applied cold through the careers page. The reason is trust — when an employee puts their reputation on the line to recommend someone, the hiring team pays attention.",quiz:[{q:"What should the first paragraph of a cover letter contain?",opts:["Your full work history","A hook naming the role and something specific about the company","A list of your technical skills","Your salary expectations"],ans:1},{q:"How long should you wait before sending a follow-up after applying?",opts:["24 hours","2-3 business days","5-7 business days","30 days"],ans:2},{q:"When should you send a thank-you email after an interview?",opts:["Within 1 week","Within 24 hours","Only if they send one first","After you receive the offer"],ans:1},{q:"What makes a referral request most likely to succeed?",opts:["Asking a stranger on LinkedIn to refer you immediately","Building a genuine connection first and providing a copy-paste referral blurb","Offering to pay them for the referral","Sending your resume to every employee at the company"],ans:1},{q:"How many follow-up emails should you send maximum after applying?",opts:["None — following up is annoying","1 follow-up, then give up","2 maximum — one at 5-7 days, one final check at 2 weeks","Follow up every day until they respond"],ans:2},{q:"What should you include in a post-interview thank-you email?",opts:["Just 'Thanks for the interview'","A specific topic from the conversation plus additional relevant experience","Your salary requirements","Questions you forgot to ask"],ans:1},{q:"Referred candidates are how much more likely to get an offer compared to cold applicants?",opts:["About the same","2x more likely","4x more likely","Only slightly more"],ans:2}],challenge:"Write three real emails right now: (1) A cover letter for a job posting you are interested in — use the 3-paragraph formula and reference something specific about the company. (2) A follow-up email template ready to send 5-7 days after your next application. (3) Identify one person at a company you admire and draft a referral request message using the framework. Bonus: Set up a tracking spreadsheet with the columns listed in the template.",resources:[{type:"article",title:"How to Write a Cover Letter That Gets Interviews",url:"https://hbr.org/2022/05/how-to-write-a-cover-letter-that-sounds-like-you",source:"Harvard Business Review"},{type:"video",title:"Follow-Up Email After Interview",url:"https://www.youtube.com/watch?v=1Iu2MqJLmMw",source:"Jeff Su"},{type:"article",title:"How to Ask for a Referral",url:"https://www.themuse.com/advice/how-to-ask-for-a-referral-to-get-a-job",source:"The Muse"},{type:"article",title:"The Art of the Follow-Up",url:"https://www.indeed.com/career-advice/finding-a-job/how-to-follow-up-on-a-job-application",source:"Indeed"}],eli5:"Imagine you want to join a new friend group at school. You could just stand at the edge and hope they notice you (that is applying online). Or you could write a nice note saying why you think they are cool and ask to play (that is a cover letter). If they do not answer, you could wave and smile the next day (that is a follow-up). But the BEST way? Have a friend who is already in the group say 'Hey, this person is really fun, let them join!' That is a referral — and it works almost every time.",codeWalkthrough:["Comment header for all templates in this lesson","","Comment: cover letter section","Opening the cover letter template string","","Greeting with hiring manager name or team","","Hook paragraph: name the specific role","Reference something specific about the company","Connect it to your genuine interest","","Proof paragraph: your current role and company","First quantified achievement","Second achievement matching their job requirements","Connecting their specific requirement to your experience","","Close paragraph: propose value and call to action","Express availability","","Sign-off","Contact information line","Closing the template","","Comment: follow-up email section","Opening the follow-up template","Subject line formula: clear and specific","","Greeting","","Reference your application","Add new value since applying","","Attach supporting material","Ask about timeline politely","","Thank you and sign-off","Closing the template","","Comment: post-interview thank you section","Opening the template","Subject line","","Greeting with first name (personal touch)","","Thank them and reference the specific role","Mention a specific conversation topic — shows you listened","","Connect it to your enthusiasm","Add something you did not mention in the interview","","Express enthusiasm about joining","Offer to provide additional information","","Sign-off","Closing the template","","Comment: referral request section","Opening the template","","Friendly opening","Reference their content — shows genuine connection","","Express interest in the specific open role","Ask for the referral with context","Explain why you are a fit","","Provide a ready-to-forward blurb","The blurb with your info filled in","","Mention attached resume","No pressure closing — respect their position","","Sign-off","Closing the template","","Comment: tracking spreadsheet section","Opening the tracking columns array","Company name column","Role column","Application date","How you applied","Contact person at company","Their email","Whether cover letter was sent","First follow-up date","Second follow-up date","Whether referral was requested","Who referred you","Whether you got a response","Interview date","Current status","Additional notes","Closing the array"],bugChallenge:{code:`// Cover letter opening paragraph:
//
// "Dear Hiring Manager,
//
// I am writing to express my interest in the Software
// Engineer position. I have many years of experience and
// I think I would be a good fit for your company. I am a
// hard worker and a team player."
//
// What is wrong with this opening?`,hint:"Think about specificity, the hook formula, and what makes this different from 1000 other applications...",answer:"Everything about this is generic and could apply to any company and any role. Problems: (1) 'I am writing to express my interest' is the most overused opener — it wastes precious first-impression words. (2) No specific company name or role details. (3) 'Many years of experience' has no numbers. (4) 'Good fit for your company' shows zero research. (5) 'Hard worker and team player' are meaningless cliches. Fix: 'I am excited to apply for the Full-Stack Engineer role at Stripe. Your recent blog post on scaling payment processing to handle Black Friday traffic resonated with me — I built a similar high-throughput system handling 50K transactions/day at my current role.'"},difficulty:"intermediate",prereqs:[10,11]},
{id:13,title:"Job Application Strategy: Volume + Quality",subtitle:"The System That Turns Searching Into Finding",analogy:"Job searching without a system is like fishing without a plan — you randomly cast your line and hope for the best. A strategic job search is like a commercial fishing operation: you know WHERE the fish are (best job boards), you have the right BAIT (tailored resume), you fish at the right TIMES (daily routine), and you track every catch (application tracker). Volume plus quality equals offers.",points:[{t:"The Daily Routine: 5-10 Targeted Applications",d:"Treat your job search like a job. Block 2-3 hours each morning for applications. Target 5-10 quality applications per day — not 50 spray-and-pray submissions. Each application should be tailored: adjusted resume keywords, optional cover letter for top choices, and a quick LinkedIn check to see if you have any connections at the company."},{t:"Best Job Boards for Developers",d:"Primary: LinkedIn Jobs, Indeed, Glassdoor. Developer-specific: Wellfound (startups), Otta (curated), Hired (reverse recruiting), Triplebyte, StackOverflow Jobs, RemoteOK, WeWorkRemotely, HackerNews 'Who is Hiring' monthly thread. Company career pages directly. Do not rely on one board — cast a wide net but with targeted bait."},{t:"Application Tracking Spreadsheet",d:"Track every application in a spreadsheet with columns: Date, Company, Role, Source, Resume Version, Cover Letter (Y/N), Referral (Y/N), Status (Applied/Phone Screen/Interview/Offer/Rejected), Follow-Up Date, Notes. Review weekly to spot patterns: which sources get the most callbacks? Which resume version performs best? Data drives better decisions."},{t:"Apply Even If You Do Not Meet All Requirements",d:"Job descriptions are wish lists, not checklists. If you meet 60-70% of the requirements, apply. Studies show men apply when they meet 60% of qualifications while women apply only at 100%. Companies expect to train on 20-30% of the role. The worst they can say is no — and you lose nothing by trying."},{t:"The Quality Application Checklist",d:"For each application: (1) Read the full job description. (2) Highlight 5-7 key requirements. (3) Adjust resume keywords to match. (4) Check LinkedIn for connections at the company. (5) Write a 2-sentence cover letter intro if the role is a top choice. (6) Submit and log in your tracker. This takes 15-20 minutes per app but dramatically increases callback rates."},{t:"Timing Your Applications",d:"Apply within the first 48 hours of a posting — applications submitted in the first two days get 2x more views. Monday and Tuesday mornings are optimal. Avoid applying late Friday or weekends when your application sits unseen. Set up job alerts on LinkedIn and Indeed to get notified of new postings immediately."},{t:"The 80/20 Rule of Job Applications",d:"80% of your effort should go toward 20% of opportunities — the roles you genuinely want and are qualified for. For these top-tier roles: tailor your resume, write a cover letter, seek referrals, and follow up. The remaining 80% of applications can use your standard resume with minor keyword tweaks. Prioritize ruthlessly."},{t:"Managing Rejection and Maintaining Momentum",d:"Expect a 5-15% callback rate even with excellent applications. If you apply to 100 jobs, 5-15 phone screens is normal. Rejection is not personal — it is a numbers game. Track your metrics: if your callback rate drops below 5%, revisit your resume. If you pass phone screens but fail onsites, practice interviewing. Data tells you where to improve."},{t:"Batch Processing for Efficiency",d:"Group similar tasks together: Monday morning = find 20 new roles. Monday-Wednesday = apply to 5-10 daily. Thursday = follow up on all pending applications. Friday = review tracker, update strategy, rest. Batching prevents the exhausting context-switching of researching, applying, and following up simultaneously."}],whatIs:"A strategic job application system combines volume (enough applications to generate callbacks) with quality (tailored applications that stand out). The key components are: a daily routine, multi-platform sourcing, an application tracker, and a data-driven feedback loop that helps you improve over time. Most people either apply to too few roles or spray-and-pray — the winning strategy is targeted volume.",realWorld:"Research from Talent Works found that applying within the first 48 hours of a job posting gives you a 2x higher chance of getting a response. The average job search takes 3-6 months, with successful candidates typically applying to 100-200 positions before landing an offer. However, candidates with a systematic approach — tracking, tailoring, and follow-ups — can cut that timeline in half.",code:`// === JOB APPLICATION STRATEGY SYSTEM ===

// --- APPLICATION TRACKER TEMPLATE ---
// Use this in Google Sheets, Notion, or any spreadsheet

const trackerColumns = {
  date: "2024-01-15",
  company: "Stripe",
  role: "Senior Full-Stack Engineer",
  source: "LinkedIn",
  jobUrl: "https://stripe.com/jobs/12345",
  resumeVersion: "v3-fullstack-fintech",
  coverLetter: "Yes",
  referral: "Yes - via Sarah Chen (engineer)",
  status: "Phone Screen Scheduled",
  appliedDate: "2024-01-15",
  followUp1: "2024-01-22",
  followUp2: "2024-02-05",
  interviewDate: "2024-01-25",
  notes: "Focused on payments experience in resume",
  result: "Pending",
};

// --- DAILY ROUTINE CHECKLIST ---
const dailyRoutine = \`
MORNING BLOCK (2-3 hours, before 11 AM):

[ ] Check job alerts (LinkedIn, Indeed, Wellfound)
    -> Star/save 5-10 promising roles
[ ] Review today's target companies
    -> Quick research: product, tech stack, recent news
[ ] Apply to 5-10 roles
    -> Tailor resume keywords per job description
    -> Cover letter for top 2-3 choices
    -> Check LinkedIn for connections (request referral)
[ ] Log every application in tracker

AFTERNOON BLOCK (30-60 minutes):

[ ] Follow up on applications from 5-7 days ago
[ ] Respond to any recruiter messages
[ ] Send 2-3 LinkedIn connection requests to people
    at target companies (with personalized notes)
[ ] Update any pending application statuses

WEEKLY REVIEW (Friday, 30 minutes):

[ ] Review tracker: how many apps sent this week?
[ ] Calculate callback rate: responses / applications
[ ] Identify patterns: which sources get most callbacks?
[ ] Adjust strategy: change resume version? New boards?
[ ] Plan next week's target companies and roles
\`;

// --- BEST JOB BOARDS FOR DEVELOPERS ---
const jobBoards = {
  general: [
    { name: "LinkedIn Jobs", url: "linkedin.com/jobs", notes: "Set alerts, Easy Apply" },
    { name: "Indeed", url: "indeed.com", notes: "Largest board, good for volume" },
    { name: "Glassdoor", url: "glassdoor.com", notes: "Salary data + reviews" },
  ],
  developerSpecific: [
    { name: "Wellfound", url: "wellfound.com", notes: "Startups, equity info shown" },
    { name: "Otta", url: "otta.com", notes: "Curated matches, great UX" },
    { name: "Hired", url: "hired.com", notes: "Reverse recruiting — companies apply to YOU" },
    { name: "StackOverflow Jobs", url: "stackoverflow.com/jobs", notes: "Dev-focused" },
    { name: "HN Who Is Hiring", url: "news.ycombinator.com", notes: "Monthly thread, 1st of month" },
  ],
  remote: [
    { name: "RemoteOK", url: "remoteok.com", notes: "Remote-only roles" },
    { name: "WeWorkRemotely", url: "weworkremotely.com", notes: "Established remote board" },
    { name: "FlexJobs", url: "flexjobs.com", notes: "Verified remote + flexible roles" },
  ],
  directApply: [
    { name: "Company career pages", notes: "Always check directly — some roles only posted here" },
    { name: "GitHub Jobs", notes: "Check company repos for 'We are hiring' in README" },
  ],
};

// --- WEEKLY METRICS DASHBOARD ---
const weeklyMetrics = \`
WEEK OF: [Date]

Applications Sent:     ___  (target: 25-50/week)
Callbacks Received:    ___  (healthy: 5-15%)
Phone Screens:         ___
Technical Interviews:  ___
Onsites/Finals:        ___
Offers:               ___

CONVERSION FUNNEL:
Applications -> Callbacks:    ___%
Callbacks -> Phone Screens:   ___%
Phone Screens -> Onsites:     ___%
Onsites -> Offers:            ___%

INSIGHTS THIS WEEK:
- Best source: _______________
- Best resume version: _______________
- Common rejection reason: _______________
- Action item: _______________
\`;`,funFact:"A study by Talent Works analyzed over 4 million job applications and found that your chances of getting a callback are highest when you apply within the first 96 hours of a posting. After that, your application competes with hundreds or thousands of others and callback rates drop by over 50%. This is why daily monitoring of job boards and setting up alerts is not optional — it is the single biggest tactical advantage in job searching.",quiz:[{q:"How many targeted applications per day is the recommended sweet spot?",opts:["1-2 very carefully crafted applications","5-10 tailored applications","50+ applications using Easy Apply","As many as humanly possible"],ans:1},{q:"When is the best time to apply for a new job posting?",opts:["Within the first 48 hours of posting","After the posting has been up for 2 weeks","On Friday evenings when there is less competition","It does not matter when you apply"],ans:0},{q:"What should you do if you meet only 60-70% of a job's requirements?",opts:["Do not apply — you are not qualified","Wait until you learn the missing skills","Apply anyway — job descriptions are wish lists, not checklists","Email the hiring manager asking if you should apply"],ans:2},{q:"What is a healthy callback rate for job applications?",opts:["50-75%","25-50%","5-15%","1-2%"],ans:2},{q:"What does the 80/20 rule mean for job applications?",opts:["Apply to 80 jobs and get 20 interviews","80% of effort should go toward 20% of opportunities that are your top choices","Spend 80% of time on LinkedIn and 20% on other boards","80% of jobs are found through networking, 20% through applications"],ans:1},{q:"What should you do during your Friday weekly review?",opts:["Apply to 20 more jobs","Review your tracker, calculate callback rates, and adjust strategy","Take the day completely off from job searching","Update your LinkedIn profile"],ans:1},{q:"Which is NOT a developer-specific job board?",opts:["Wellfound","Indeed","Hired","HackerNews Who Is Hiring"],ans:1}],challenge:"Set up your job search system right now: (1) Create an application tracker spreadsheet with all the columns listed above. (2) Sign up for 3 job boards from the list and set up job alerts for your target role. (3) Block out 2-3 hours on your calendar tomorrow morning and follow the daily routine checklist for one full day. (4) At the end of the week, fill in the weekly metrics dashboard. This system will be the foundation of your entire job search.",resources:[{type:"article",title:"How to Structure Your Job Search",url:"https://www.indeed.com/career-advice/finding-a-job/job-search-strategy",source:"Indeed"},{type:"video",title:"Job Search Strategy That Actually Works",url:"https://www.youtube.com/watch?v=pJiUakBQ188",source:"Ali Abdaal"},{type:"article",title:"Best Job Boards for Developers in 2024",url:"https://www.freecodecamp.org/news/best-job-boards-for-developers/",source:"freeCodeCamp"},{type:"article",title:"The 2-Hour Job Search Method",url:"https://2hourjobsearch.com/",source:"Steve Dalton"}],eli5:"Imagine you want to sell lemonade in your neighborhood. You could set up one stand on a random street and hope someone walks by. Or you could set up stands on the 5 busiest streets, make signs that match what each neighborhood likes, keep track of which streets sell the most, and adjust your recipe based on feedback. That second approach is a job search strategy — you are everywhere the buyers are, with the right message, tracking what works!",codeWalkthrough:["Comment header for the job application strategy system","","Comment: application tracker template","Instruction on where to use it","","Opening the tracker object as an example entry","Date of application","Company name","Specific role title","Where you found the listing","Direct link to the job posting","Which version of your resume you used","Whether you sent a cover letter","Whether you had a referral and who","Current status in the pipeline","When you submitted","First follow-up date (5-7 days later)","Second follow-up date (2 weeks later)","Interview date if scheduled","Notes about your strategy for this application","Final result","Closing the tracker object","","Comment: daily routine checklist","Opening the routine template","","Morning block header with time guidance","","Check job alerts step","Save promising roles","Research target companies step","Quick research substeps","Apply to roles step","Tailor resume substep","Cover letter for top choices substep","Check for referral connections substep","Log everything in tracker","","Afternoon block header","","Follow up on older applications","Respond to recruiter messages","LinkedIn networking step","Personalized connection notes","Update application statuses","","Weekly review header","Review tracker stats","Calculate callback rate","Identify successful patterns","Adjust strategy based on data","Plan for next week","Closing the routine template","","Comment: job boards list","Opening the boards object","General boards category","LinkedIn with notes about alerts","Indeed with volume note","Glassdoor with salary data note","Closing general category","Developer-specific boards","Wellfound for startups","Otta for curated matching","Hired for reverse recruiting","StackOverflow for developer focus","HackerNews monthly hiring thread","Closing developer-specific","Remote boards category","RemoteOK for remote-only","WeWorkRemotely","FlexJobs for verified roles","Closing remote category","Direct application channels","Company career pages tip","GitHub repos hiring tip","Closing direct apply and boards object","","Comment: weekly metrics dashboard","Opening the metrics template","Week date header","","Applications sent with target","Callbacks with healthy range","Phone screens count","Technical interviews count","Onsites/finals count","Offers count","","Conversion funnel header","Applications to callbacks rate","Callbacks to phone screens rate","Phone screens to onsites rate","Onsites to offers rate","","Weekly insights section","Best source this week","Best performing resume version","Most common rejection reason","Action item for improvement","Closing the metrics template"],bugChallenge:{code:`// Job search strategy review:
//
// "I have been applying to 3-4 jobs per week on LinkedIn
// for the past 4 months. I am using the same resume for
// every application and I have not heard back from most
// companies. I do not track my applications so I am not
// sure which ones I have followed up on."
//
// What is wrong with this approach?`,hint:"Compare this to the recommended daily routine and think about volume, quality, and tracking...",answer:"Multiple problems: (1) Volume is way too low — 3-4/week should be 5-10/DAY (25-50/week). (2) Using the same resume for every application means no keyword tailoring, so ATS filters you out. (3) Only using LinkedIn — should be on 3-5 platforms. (4) No tracking means no follow-ups, no data on what works, and no ability to improve. (5) Four months without results should have triggered a strategy review weeks ago. Fix: Set up a tracker, tailor resumes, increase volume to 5-10/day, diversify platforms, and follow up on every application after 5-7 days."},difficulty:"beginner",prereqs:[]},
{id:14,title:"Networking, Recruiters & Developer Brand",subtitle:"Build a Reputation That Opens Doors",analogy:"Your developer brand is like your reputation in a small town — once people know you as 'the person who knows React really well' or 'the one who writes great technical posts,' opportunities find you instead of you chasing them. Networking is not schmoozing at cocktail parties — it is planting seeds by being genuinely helpful. Recruiters are the matchmakers of the tech world — learn to work with them effectively.",points:[{t:"Cold Outreach That Actually Works",d:"Most cold messages fail because they ask before giving. The formula that works: (1) Specific compliment on their work, (2) Brief intro (one sentence about you), (3) Small, specific ask — not 'Can you get me a job?' but 'Would you have 15 minutes to share your experience transitioning to [Company]?' People love talking about themselves. Lead with genuine curiosity, not desperation."},{t:"Developer Communities Where Real Connections Happen",d:"Join communities where developers actually hang out: Discord servers (Reactiflux, TypeScript Community, various framework servers), Twitter/X for tech discussions, Reddit (r/cscareerquestions, r/webdev), local meetups (Meetup.com), Dev.to and Hashnode for blogging, GitHub for open source contributions. Show up consistently, help others, and connections form naturally."},{t:"Working With Recruiters: Agency vs In-House",d:"In-house recruiters work for one company — they know the culture deeply and have direct hiring influence. Agency recruiters represent multiple companies — they have broader market reach but may push roles for commission. Both are valuable. Be transparent about your expectations, timeline, and salary range. Never ghost a recruiter — the tech world is small."},{t:"Building in Public: Your Secret Weapon",d:"Share your learning journey publicly: tweet what you built today, post a LinkedIn update about a problem you solved, write a blog post explaining a concept. Building in public does three things: establishes credibility, attracts like-minded people, and creates searchable proof of your skills that hiring managers can find. Consistency matters more than perfection."},{t:"The Informational Interview",d:"Ask people at target companies for 20-minute informational interviews — not to ask for a job, but to learn about their experience. Questions: 'What does a typical day look like?' 'What do you wish you knew before joining?' 'What skills does the team value most?' These conversations often lead to referrals organically because you demonstrated genuine interest."},{t:"Open Source Contributions as Networking",d:"Contributing to open source projects is networking disguised as coding. When you submit PRs, participate in issues, and engage with maintainers, you build real relationships with developers who can vouch for your skills. Start small: fix typos in docs, then tackle 'good first issue' labels. Your GitHub activity becomes a living portfolio."},{t:"Twitter/X Strategy for Developers",d:"Follow and engage with 50-100 developers, tech leads, and engineering managers in your target area. Reply thoughtfully to their tweets (not just 'Great post!'). Share your own insights 3-5 times per week. Developers who are active on Twitter/X report receiving more inbound opportunities than those who rely solely on LinkedIn."},{t:"Conference and Meetup Networking",d:"Attend 1-2 tech events per month (virtual or in-person). Do not just sit in the audience — ask questions during Q&A, introduce yourself to speakers, and join the event's Slack or Discord. Follow up within 48 hours with a LinkedIn connection and a personal note. The ROI of one meaningful conference connection can outweigh 100 cold applications."},{t:"Managing Your Developer Reputation Online",d:"Google yourself. What shows up? Your LinkedIn, GitHub, blog, and social profiles should all tell a consistent story about who you are and what you build. Remove or clean up anything unprofessional. Add a personal website (even a simple one-page site) that aggregates your best work. When a hiring manager searches your name — and they will — make sure they like what they find."}],whatIs:"Developer networking is the practice of building genuine professional relationships through communities, content creation, events, and strategic outreach. Combined with a strong developer brand (your public reputation built through code, content, and community), networking creates a 'pull' system where opportunities come to you. Working effectively with recruiters adds a 'push' channel. Together, they form a comprehensive relationship-driven job search strategy.",realWorld:"LinkedIn data shows that 85% of jobs are filled through networking. Stack Overflow's developer survey found that 26% of developers found their current job through a friend or former colleague. Twitter/X has become a major hiring channel in tech — developers like Dan Abramov, Cassidy Williams, and countless others built careers partly through active online presence. The tech industry is surprisingly small — your reputation follows you.",code:`// === NETWORKING & DEVELOPER BRAND TEMPLATES ===

// --- COLD OUTREACH MESSAGE (LinkedIn/Email) ---
const coldOutreachTemplates = {
  informationalInterview: \`
Hi [Name],

I came across your talk at [Conference] about [topic] and
found your approach to [specific point] really insightful.

I am a [your role] currently focused on [your area] and I am
exploring opportunities in [their field/company]. Would you
have 15-20 minutes for a virtual coffee chat? I would love
to hear about your experience at [Company].

Completely understand if you are too busy — either way,
thanks for the great content you share!

[Your Name]
\`,

  openSourceIntro: \`
Hi [Maintainer Name],

I have been using [Project] in my work and I would love to
contribute. I noticed [specific issue or area for improvement]
and I think I could help with [specific contribution].

Would it be helpful if I submitted a PR for [specific task]?
Happy to follow any contribution guidelines you have.

Thanks for maintaining such a great project!
[Your Name]
\`,

  postConferenceFollowUp: \`
Hi [Name],

Great meeting you at [Event] yesterday! I really enjoyed our
conversation about [specific topic discussed].

As I mentioned, I have been working on [relevant project/skill]
and I would love to stay connected. [Optional: Here is the
resource/link I mentioned during our chat: URL]

Looking forward to staying in touch!
[Your Name]
\`,
};

// --- DEVELOPER BRAND CHECKLIST ---
const brandChecklist = \`
ONLINE PRESENCE AUDIT:

[ ] Google your name — what shows up on page 1?
[ ] LinkedIn profile fully optimized (see Lesson 11)
[ ] GitHub profile has pinned repos with READMEs
[ ] GitHub contribution graph is active (green squares)
[ ] Personal website/portfolio (even 1 page is enough)
[ ] Twitter/X profile with developer-focused bio
[ ] Dev.to or Hashnode blog (optional but powerful)
[ ] Consistent professional photo across platforms
[ ] All profiles tell the same story about who you are

CONTENT STRATEGY (pick 1-2 platforms):

[ ] Week 1-2: Lurk and learn the community norms
[ ] Week 3-4: Start engaging (replies, comments)
[ ] Month 2: Share your first piece of content
[ ] Ongoing: 2-3 posts per week minimum
[ ] Track: which topics get the most engagement?

NETWORKING GOALS:

[ ] Join 2-3 developer Discord/Slack communities
[ ] Attend 1 virtual/local meetup per month
[ ] Send 5 personalized connection requests per week
[ ] Schedule 2 informational interviews per month
[ ] Contribute to 1 open source project
\`;

// --- RECRUITER RELATIONSHIP MANAGEMENT ---
const recruiterTips = {
  inHouseRecruiter: {
    who: "Works directly for one company",
    pros: "Deep knowledge of culture, direct hiring influence, no commission pressure",
    approach: "Be specific about your interest in THEIR company. Ask detailed questions about team structure and engineering culture.",
    template: \`
Hi [Recruiter Name],

I am very interested in the [Role] at [Company]. I have been
following [Company]'s work on [specific product/initiative]
and I believe my experience with [relevant skill] aligns well.

Could we schedule a brief call to discuss the role and team?

Best,
[Your Name]
\`,
  },

  agencyRecruiter: {
    who: "Represents multiple companies, earns commission on placements",
    pros: "Broad market access, salary negotiation help, multiple opportunities",
    approach: "Be transparent about your requirements upfront. They work faster when they know exactly what you want.",
    template: \`
Hi [Recruiter Name],

Thanks for reaching out. Here is what I am looking for to
make our conversations efficient:

- Role: [Senior Full-Stack / Backend / Frontend]
- Tech: [React, TypeScript, Node.js, etc.]
- Type: [Remote / Hybrid / On-site in City]
- Salary: [\$X minimum base]
- Timeline: [Actively looking / Open to the right opportunity]
- Deal-breakers: [List any non-negotiables]

Happy to chat further about roles that match these criteria!

Best,
[Your Name]
\`,
  },
};`,funFact:"Reid Hoffman, co-founder of LinkedIn, said 'Your network is your net worth.' Data backs this up: a study by the Adler Group found that 85% of all jobs are filled through networking, and referred candidates have a 46% retention rate after one year compared to 33% for job board hires. The strongest networks are built not by asking for favors, but by consistently providing value to others first — a concept known as 'give first' networking.",quiz:[{q:"What is the most effective formula for cold outreach?",opts:["Ask for a job directly and attach your resume","Specific compliment + brief intro + small specific ask","Send a long message about your entire career history","Connect and immediately message about open positions"],ans:1},{q:"What is the difference between an in-house recruiter and an agency recruiter?",opts:["There is no difference","In-house works for one company, agency represents multiple companies for commission","In-house is more expensive, agency is free","Agency recruiters only work with senior candidates"],ans:1},{q:"What percentage of jobs are reportedly filled through networking?",opts:["25%","50%","85%","95%"],ans:2},{q:"What does 'building in public' mean for developers?",opts:["Writing code in a public park","Sharing your learning journey and projects publicly online","Making all your code open source","Streaming your coding sessions 24/7"],ans:1},{q:"What is an informational interview?",opts:["A formal job interview","A 15-20 minute conversation to learn about someone's experience, not to ask for a job","A technical coding assessment","A group interview panel"],ans:1},{q:"How should you network at conferences and meetups?",opts:["Sit quietly in the back and leave immediately after","Hand out business cards to everyone you see","Ask questions during Q&A, talk to speakers, and follow up within 48 hours with a personalized connection","Only attend if you are a speaker"],ans:2},{q:"Why is open source contribution considered a form of networking?",opts:["You get paid for contributions","It builds real relationships with developers who can vouch for your skills","Maintainers are required to hire contributors","It replaces the need for a resume"],ans:1}],challenge:"Take three networking actions this week: (1) Join one new developer community (Discord server, local meetup, or Twitter/X community) and introduce yourself. (2) Send one cold outreach message to someone at a company you admire using the informational interview template. (3) Make one public post — a tweet about what you learned today, a LinkedIn post about a project, or a Dev.to article. Track the responses and connections that result from each action.",resources:[{type:"article",title:"Networking for Software Developers",url:"https://www.freecodecamp.org/news/networking-for-developers-11-tips/",source:"freeCodeCamp"},{type:"video",title:"How to Network in Tech",url:"https://www.youtube.com/watch?v=8wRi06kFScE",source:"Mayuko"},{type:"article",title:"Building Your Developer Brand",url:"https://dev.to/swyx/marketing-yourself-without-being-sleazy-4a6g",source:"Dev.to (swyx)"},{type:"article",title:"How to Get Started with Open Source",url:"https://opensource.guide/how-to-contribute/",source:"GitHub Open Source Guide"}],eli5:"Imagine you just moved to a new school. You could sit alone and wait for someone to talk to you. Or you could join a club, help other kids with homework, show your cool art project at show-and-tell, and chat with the teacher after class. Soon everyone knows your name and when they need someone for their team, they think of you first. That is networking — being helpful and visible until people naturally want to work with you!",codeWalkthrough:["Comment header for networking templates","","Comment: cold outreach message templates","Opening the templates object","Informational interview template key","Opening the template","","Greeting with their name","","Reference their specific work — shows genuine interest","Mention a specific point from their content","","Your brief introduction — keep to one sentence","The specific small ask — 15-20 minutes, not a job","What you want to discuss — their experience","","Polite out — never pressure people","Acknowledge their content regardless","","Your name sign-off","Closing the informational interview template","","Open source contribution intro template key","Opening the template","","Greeting with maintainer name","","Mention you actually use the project (credibility)","Identify specific area you can help with","","Propose a specific contribution","Respect existing contribution guidelines","","Thank them for their work","Your name","Closing the open source template","","Post-conference follow-up template key","Opening the template","","Greeting referencing where you met","Specific conversation topic from the event","","Reference relevant work you discussed","Optional resource sharing","","Closing","Your name","Closing the follow-up template","Closing templates object","","Comment: developer brand checklist","Opening the checklist template","","Online presence audit header","","Google yourself step","LinkedIn optimization check","GitHub pinned repos with documentation","GitHub activity graph","Personal website check","Twitter profile check","Blog platform check","Consistent photo across platforms","Consistent story across profiles","","Content strategy header","","Weeks 1-2: observe community norms","Weeks 3-4: begin engaging","Month 2: publish first content","Ongoing posting cadence","Track engagement metrics","","Networking goals header","","Join developer communities","Attend regular meetups","Send connection requests weekly","Schedule informational interviews","Contribute to open source","Closing the checklist template","","Comment: recruiter relationship management","Opening recruiter tips object","In-house recruiter section","Who they are","Pros of working with them","How to approach them","Template for in-house recruiters","Greeting","","Express specific interest in their company","Reference specific product or initiative","","Request a call","","Sign-off","Closing the template","Closing in-house section","","Agency recruiter section","Who they are","Pros of working with them","How to approach them","Template for agency recruiters","Greeting","","Provide clear requirements upfront","","Role preference","Tech stack preference","Work arrangement preference","Salary minimum","Timeline and urgency","Non-negotiable items","","Willingness to chat about matching roles","","Sign-off","Closing the template","Closing agency section","Closing recruiter tips object"],bugChallenge:{code:`// Networking message review:
//
// "Hey! I saw you work at Google. I am looking for a job
// and I was wondering if you could refer me? I am a
// developer with experience in React. Here is my resume.
// Thanks!"
//
// What is wrong with this message?`,hint:"Think about the cold outreach formula: compliment + intro + small ask...",answer:"Multiple problems: (1) No specific compliment or reference to their work — feels generic and mass-sent. (2) Opens with an immediate big ask (referral) with zero relationship built. (3) 'I am a developer with experience in React' is incredibly vague — what have you built? (4) Attaching a resume to a first message feels transactional. (5) No mention of a specific role or why Google specifically. Fix: 'Hi [Name], I read your blog post about [topic] at Google and found it really insightful. I am a full-stack developer who built [specific project] with React and TypeScript. I noticed the [Specific Role] opening and it aligns with my experience. Would you have 15 minutes to share what it is like working on [their team]?' Build the relationship first, and the referral comes naturally."},difficulty:"intermediate",prereqs:[11,13]},
{id:15,title:"Salary Negotiation & Accepting the Right Offer",subtitle:"Turn an Offer Into the Compensation You Deserve",analogy:"Salary negotiation is like buying a car — the sticker price is never the final price. The dealership (employer) has a budget range, and the first offer is almost always the bottom of that range. They EXPECT you to negotiate. Not negotiating is like paying full sticker price while the person next to you drives away in the same car for 15% less. Every dollar you negotiate in base salary compounds for your entire career.",points:[{t:"Research Market Rates Before Everything",d:"Know your worth before any conversation starts. Use Levels.fyi (best for tech), Glassdoor, LinkedIn Salary, Payscale, and Blind for real compensation data. Filter by: role, level, location, and company size. Have three numbers ready: your target (what you want), your floor (the minimum you will accept), and your reach (the best case scenario). Data is your leverage."},{t:"Never Give a Number First",d:"When asked 'What are your salary expectations?' deflect: 'I would love to understand the full scope of the role and the compensation range you have budgeted.' If they insist, give a range based on your research: 'Based on my research for this level and location, I would expect something in the range of $X to $Y. But I am flexible depending on the total compensation package.' Let them anchor first whenever possible."},{t:"The Total Compensation Framework",d:"Base salary is just one piece. Negotiate the full package: base salary, annual bonus (percentage and target), equity/RSUs (shares, vesting schedule, cliff), signing bonus, relocation assistance, remote work flexibility, PTO days, professional development budget, title, and start date. Sometimes a company cannot move on base but can add $20K in signing bonus or extra equity."},{t:"The Counter-Offer Script",d:"When you receive an offer: (1) Express genuine excitement — 'I am really thrilled about this opportunity.' (2) Ask for time — 'I would love a few days to review the full package.' (3) Come back with your counter: 'Based on my research and competing offers, I was hoping for a base closer to $X. Is there flexibility there?' Always negotiate via email so you have a paper trail and time to think."},{t:"Negotiating Beyond Base Salary",d:"If they say base salary is firm, negotiate these: signing bonus ($5K-30K is common), equity refresh schedule, annual bonus target, remote work days, PTO (ask for 5 extra days), professional development budget ($2K-5K/year), title upgrade (Senior vs Mid — affects future salary), equipment budget, or a guaranteed performance review at 6 months with a raise tied to it."},{t:"Red Flags in Job Offers",d:"Watch for: exploding offers (must decide in 24 hours — push back), below-market compensation with promises of future raises, vague equity terms, no written offer letter, unwillingness to negotiate anything, high turnover mentioned in interviews, unrealistic expectations for the role, and mandatory non-competes that limit your future options. Trust your gut — if it feels wrong, it probably is."},{t:"Evaluating Multiple Offers",d:"Create a scoring matrix: Rate each offer on a 1-10 scale across categories: base compensation, equity upside, team and manager quality, growth opportunities, work-life balance, technology stack, company trajectory, remote flexibility, and commute. Weight each category by importance to YOU. The highest-paying offer is not always the best offer."},{t:"The Leverage of Competing Offers",d:"Nothing strengthens your negotiation position like a competing offer. Even if you prefer Company A, telling them 'I have received a competitive offer from Company B at $X' creates urgency and justifies your counter. Never lie about having an offer you do not have — but do try to align your interview timelines so offers arrive close together."},{t:"When and How to Accept",d:"Once you have negotiated and are satisfied: (1) Get EVERYTHING in writing — offer letter with base, bonus, equity, start date, title, and any special terms. (2) Sign and return promptly. (3) Decline other offers graciously — 'I have decided to go in another direction, but I truly appreciate the opportunity and hope to cross paths again.' (4) Never renege on an accepted offer unless circumstances are extreme."}],whatIs:"Salary negotiation is the process of advocating for fair compensation after receiving a job offer. It involves researching market rates, understanding the full compensation package (base, bonus, equity, benefits), countering the initial offer strategically, and evaluating the total value of the opportunity. Most candidates leave $5,000-$20,000 on the table by not negotiating. Negotiation is expected, professional, and a skill that compounds over your entire career.",realWorld:"A study by Salary.com found that not negotiating your starting salary can cost you over $1 million in lifetime earnings due to the compounding effect of raises on a higher base. Hiring managers at companies like Google, Microsoft, and Amazon have publicly stated they EXPECT candidates to negotiate and budget for it. LinkedIn data shows that 39% of workers are afraid to negotiate, but 85% of those who do negotiate receive at least some improvement to the initial offer.",code:`// === SALARY NEGOTIATION & OFFER EVALUATION TOOLKIT ===

// --- MARKET RESEARCH SOURCES ---
const researchSources = [
  { name: "Levels.fyi", url: "levels.fyi", best: "Tech company compensation data with level mapping" },
  { name: "Glassdoor", url: "glassdoor.com/Salaries", best: "Broad salary data + company reviews" },
  { name: "LinkedIn Salary", url: "linkedin.com/salary", best: "Role-based salary insights" },
  { name: "Payscale", url: "payscale.com", best: "Personalized salary reports" },
  { name: "Blind", url: "teamblind.com", best: "Anonymous verified compensation sharing" },
  { name: "Comprehensive.io", url: "comprehensive.io", best: "Startup equity calculator" },
];

// --- SALARY NEGOTIATION SCRIPTS ---
const negotiationScripts = {
  deflectSalaryQuestion: \`
"I would love to understand the full scope of the role
and the compensation range you have budgeted for this
position. I am flexible and want to make sure we find
a number that works for both of us."

If they insist:
"Based on my research on Levels.fyi and Glassdoor for
[Role] at [Level] in [Location], I would expect total
compensation in the range of \\\$[X] to \\\$[Y]. But I am
open to discussing the full package."
\`,

  receiveOffer: \`
"Thank you so much — I am genuinely excited about this
opportunity and the team. I would love to take a couple
of days to review the full compensation package
carefully. Could you send over the complete details
in writing? I will get back to you by [date, 2-3 days]."
\`,

  counterOffer: \`
"Thank you again for the offer — I am very excited about
joining [Company]. After reviewing the package and
considering [my research / competing offers / my current
compensation], I was hoping we could discuss adjusting
the base salary to \\\$[Target].

I believe this reflects my [N years of experience with
X technology] and the value I will bring to [specific
project or team goal]. Is there flexibility here?"
\`,

  ifBaseSalaryIsFirm: \`
"I understand the base salary is firm. Would it be
possible to explore other parts of the package?
Specifically, I would love to discuss:

- A signing bonus of \\\$[amount]
- Additional equity/RSUs
- [5 extra PTO days / remote flexibility / title upgrade]
- A 6-month performance review with a defined raise
  path tied to specific milestones"
\`,

  handleExplodingOffer: \`
"I appreciate the timeline, but I want to make a
thoughtful decision that leads to a long-term commitment.
Could we extend the deadline to [date, 1 week out]? I
want to give your offer the careful consideration it
deserves rather than rushing into a decision."
\`,
};

// --- OFFER COMPARISON TEMPLATE ---
const offerComparison = \`
                        | Company A    | Company B    | Company C
========================|==============|==============|=============
Base Salary             | \\\$___,___    | \\\$___,___    | \\\$___,___
Annual Bonus (target %) | ___%         | ___%         | ___%
Signing Bonus           | \\\$___,___    | \\\$___,___    | \\\$___,___
Equity (annual value)   | \\\$___,___    | \\\$___,___    | \\\$___,___
Vesting Schedule        | ___________  | ___________  | ___________
Total Comp (Year 1)     | \\\$___,___    | \\\$___,___    | \\\$___,___
Total Comp (Year 2-4)   | \\\$___,___    | \\\$___,___    | \\\$___,___
------------------------|--------------|--------------|-----------
PTO Days                | ___          | ___          | ___
Remote Policy           | ___________  | ___________  | ___________
Health Insurance        | ___________  | ___________  | ___________
401k Match              | ___%         | ___%         | ___%
Dev Budget              | \\\$_____      | \\\$_____      | \\\$_____
------------------------|--------------|--------------|-----------
SCORING (1-10):
Team & Manager          | ___/10       | ___/10       | ___/10
Growth Opportunity      | ___/10       | ___/10       | ___/10
Work-Life Balance       | ___/10       | ___/10       | ___/10
Tech Stack Excitement   | ___/10       | ___/10       | ___/10
Company Trajectory      | ___/10       | ___/10       | ___/10
Commute / Location      | ___/10       | ___/10       | ___/10
------------------------|--------------|--------------|-----------
TOTAL SCORE             | ___/60       | ___/60       | ___/60
TOTAL COMP (Year 1)     | \\\$___,___    | \\\$___,___    | \\\$___,___
DECISION                | ___________  | ___________  | ___________
\`;

// --- RED FLAGS CHECKLIST ---
const offerRedFlags = [
  "Exploding offer (must decide in 24-48 hours)",
  "No written offer letter — verbal only",
  "Vague equity terms ('we will figure it out later')",
  "Below-market base with promises of future raises",
  "Unwillingness to negotiate ANY part of the package",
  "Mandatory broad non-compete agreement",
  "High turnover mentioned by interviewers",
  "Manager seems disorganized or evasive about team",
  "Unrealistic job scope for the level/compensation",
  "The interview process felt rushed or chaotic",
  "Glassdoor reviews consistently mention same problems",
  "They pressure you to cancel other interviews",
];`,funFact:"Researchers at George Mason University found that a person who negotiates their starting salary by just $5,000 more will earn over $634,000 more over a 40-year career — assuming average annual raises of 5%. That is over half a million dollars from one conversation. And here is the kicker: most hiring managers have budget headroom of 10-20% above the initial offer. They literally budget for you to negotiate. Not negotiating is leaving YOUR money on their table!",quiz:[{q:"What should you do when asked 'What are your salary expectations?' early in the process?",opts:["Give your exact desired salary immediately","Deflect and ask about their budgeted range first","Say the lowest number you would accept","Refuse to discuss compensation entirely"],ans:1},{q:"Which website is considered the best for researching tech company compensation?",opts:["Indeed","Glassdoor","Levels.fyi","LinkedIn"],ans:2},{q:"What is an 'exploding offer'?",opts:["An offer that increases the longer you wait","An offer with an unreasonably short deadline to pressure you into deciding","An offer with a large signing bonus","An offer that comes with a celebration"],ans:1},{q:"If a company says base salary is firm, what should you negotiate next?",opts:["Nothing — accept the offer as-is","Walk away immediately","Signing bonus, equity, PTO, title, remote flexibility, or a 6-month raise guarantee","Ask them to call you back with a better offer"],ans:2},{q:"How much can not negotiating your starting salary cost over a 40-year career?",opts:["About $5,000","About $50,000","About $100,000","Over $600,000"],ans:3},{q:"What is the first thing you should do when you receive a job offer?",opts:["Accept it immediately before they change their mind","Express excitement and ask for 2-3 days to review the full package in writing","Start negotiating on the phone right away","Ask your friends what they think"],ans:1},{q:"Which is a red flag in a job offer?",opts:["A 4-year equity vesting schedule","A 2-week response deadline","An offer with no written documentation — verbal only","Being asked to complete a background check"],ans:2}],challenge:"Prepare your negotiation toolkit: (1) Research your target role on Levels.fyi and Glassdoor. Write down your three numbers: floor, target, and reach. (2) Practice the counter-offer script out loud 5 times until it feels natural — have a friend play the recruiter. (3) Create a blank offer comparison spreadsheet using the template above, ready to fill in when offers arrive. (4) Review the red flags checklist and decide which ones are absolute deal-breakers for you. Having this prepared BEFORE you need it is the key to negotiating from a position of calm confidence.",resources:[{type:"article",title:"Salary Negotiation Guide for Engineers",url:"https://www.levels.fyi/blog/how-to-negotiate-salary.html",source:"Levels.fyi"},{type:"video",title:"How to Negotiate Your Tech Salary",url:"https://www.youtube.com/watch?v=fyn0CKPuPlA",source:"Rahul Pandey"},{type:"article",title:"Ten Rules for Negotiating a Job Offer",url:"https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/",source:"Haseeb Qureshi"},{type:"article",title:"How Not to Bomb Your Offer Negotiation",url:"https://haseebq.com/how-not-to-bomb-your-offer-negotiation/",source:"Haseeb Qureshi"},{type:"article",title:"Comprehensive Equity Calculator",url:"https://comprehensive.io/",source:"Comprehensive.io"}],eli5:"Imagine you find a toy you really want at a garage sale. The sticker says $10. You know the same toy sells for $5-$8 at other garage sales. So you say 'Would you take $6?' and the seller says 'How about $7?' and you agree. You both end up happy! That is negotiation — both sides have a range, and you meet somewhere in the middle. If you just paid $10 without asking, you would have spent more than you needed to. Always ask — the worst they can say is no!",codeWalkthrough:["Comment header for the negotiation toolkit","","Comment: market research sources","Opening the sources array","Levels.fyi — best for tech compensation data","Glassdoor — broad salary data with company reviews","LinkedIn Salary — role-based insights","Payscale — personalized salary reports","Blind — anonymous verified compensation from real employees","Comprehensive.io — equity calculator for startups","Closing the sources array","","Comment: negotiation scripts","Opening the scripts object","Script for deflecting salary question","Opening the template","The primary deflection response","Express flexibility while redirecting to their range","","If-they-insist fallback","Reference specific research sources for credibility","Give a range based on data, not feelings","Express openness to full package discussion","Closing the template","","Script for receiving an offer","Opening the template","Express genuine excitement first","Ask for time to review (never decide on the spot)","Request written details","Set a specific follow-up date","Closing the template","","Script for counter-offering","Opening the template","Thank them and express excitement again","Reference research or competing offers as justification","State your target number clearly","","Connect your ask to the value you bring","Reference specific skills and experience","Ask about flexibility (open-ended, not demanding)","Closing the template","","Script for when base salary is firm","Opening the template","Acknowledge the constraint respectfully","Redirect to other package components","","Signing bonus ask","Additional equity ask","PTO, remote, or title ask","Performance-based raise path at 6 months","Closing the template","","Script for handling exploding offers","Opening the template","Acknowledge the timeline","Request extension with a reasonable reason","Frame it as wanting to make a committed decision","Closing the template","Closing the scripts object","","Comment: offer comparison template","Opening the comparison table","","Column headers for 3 companies","Separator line","Base salary row","Annual bonus row","Signing bonus row","Equity annual value row","Vesting schedule row","Year 1 total compensation","Years 2-4 total compensation","Separator","PTO days row","Remote policy row","Health insurance row","401k match row","Professional development budget row","Separator","","Scoring section header (1-10 scale)","Team and manager quality","Growth opportunity","Work-life balance","Tech stack excitement","Company trajectory","Commute and location","Separator","Total score out of 60","Total compensation Year 1","Final decision row","Closing the template","","Comment: red flags checklist","Opening the red flags array","Exploding offers with unreasonable deadlines","No written documentation","Vague equity promises","Below-market pay with future promises","Complete unwillingness to negotiate","Broad non-compete clauses","High turnover signals","Disorganized or evasive management","Unrealistic scope for the compensation level","Rushed or chaotic interview process","Consistent negative Glassdoor reviews","Pressure to cancel other interviews","Closing the red flags array"],bugChallenge:{code:`// Negotiation scenario review:
//
// Recruiter: "What are your salary expectations?"
//
// Candidate: "I currently make $90K so I would like at
// least $95K."
//
// What mistakes did the candidate make?`,hint:"Think about anchoring, revealing current salary, and research-based negotiation...",answer:"Three major mistakes: (1) Revealed current salary — this anchors the negotiation to your CURRENT pay instead of your MARKET VALUE. You might be worth $130K but just anchored at $90K. Many states/countries have made it illegal for employers to ask this for exactly this reason. (2) Asked for 'at least $95K' which is only a 5.5% increase — way below the typical 10-20% jump when changing companies. (3) Did not deflect or ask for their range first. Better response: 'I would love to understand the full compensation range budgeted for this role. Based on my research on Levels.fyi for this level and location, I would expect total compensation in the $120K-$140K range, but I am open to discussing the full package.'"},difficulty:"advanced",prereqs:[13,14]},
{
  id: 16,
  title: "AI-Assisted Development: Use AI Without Losing Your Edge",
  subtitle: "Master AI tools as a career accelerator — not a crutch that makes you unemployable",
  analogy: "AI coding tools are like a GPS for driving. If you always follow GPS blindly, you never learn the roads. One day the GPS loses signal, and you're lost in the middle of nowhere. But if you learned the roads first and use GPS to save time on routes you already know — now you're unstoppable. The developers who learned to code first and added AI second are the ones who drive confidently with or without signal.",
  points: [
    { t: "The AI Dependency Trap", d: "A hiring lead posted: 'Interviewed devs with 4-5 years experience. Most couldn't integrate a simple API without AI.' Your brain builds neural pathways through struggle — not through copying AI output. Every time you skip the thinking, you skip the learning. Six months of AI-assisted coding can leave you with zero months of actual skill growth." },
    { t: "What Hiring Managers Actually Test Now", d: "Companies added 'no AI' coding rounds specifically because too many candidates can't code without Copilot. They hand you a laptop with no internet, no extensions, just a blank editor. If you can't write a for loop, parse JSON, or handle an HTTP request from memory — you fail. Fundamentals aren't optional anymore, they're the entire filter." },
    { t: "Security Disasters With AI Tools", d: "Real incidents: Samsung engineers pasted proprietary chip source code into ChatGPT — Samsung banned the tool company-wide. Developers routinely paste .env files with production database credentials, API keys, and auth tokens into AI prompts. This data can end up in training datasets. One leaked AWS key can cost your company thousands in minutes." },
    { t: "The Right Way to Use AI", d: "The formula is: Learn it manually first, practice until it's boring, THEN use AI to go faster. AI should be your turbo boost, not your engine. Use AI to generate boilerplate you already understand, refactor code you could refactor yourself (just slower), and explore patterns you've already studied. If you can't review and critique the AI's output, you're not ready to use it." },
    { t: "What to NEVER Share With AI Tools", d: "Never paste: API keys, auth tokens, .env file contents, production database connection strings, customer PII (names, emails, payment info), proprietary business logic, internal architecture documents, SSH keys, certificates, or any credentials. Create sanitized examples instead — replace real values with placeholders like 'sk-xxxx' before prompting." },
    { t: "Building AI-Proof Skills", d: "These fundamentals survive any tool change: data structures and algorithms, system design thinking, debugging methodology (reading stack traces, using breakpoints), understanding HTTP and networking, database design, and reading documentation. AI tools will change every 6 months. Your fundamentals compound for 30 years." },
    { t: "The Interview AI Detector", d: "Interviewers spot AI-dependent devs instantly: you submit a perfect solution but can't explain why you used that approach. Your coding style is inconsistent — one function looks like ChatGPT, the next looks like a beginner. You freeze on follow-up questions like 'What if the input is null?' or 'How would you optimize this for 10x scale?' These gaps are career-ending in interviews." },
    { t: "Practice Routine For Real Skills", d: "Weekly 'no AI day' — code everything from scratch. Solve 2-3 LeetCode problems weekly without hints. Build one feature per month completely manually. Explain your code out loud (rubber duck debugging). Read open-source code for 30 minutes daily. These habits build the muscle memory that separates engineers from prompt operators." },
    { t: "AI Tools That Are Safe For Work", d: "Not all AI tools are equal on privacy. Enterprise tiers (GitHub Copilot Business, ChatGPT Enterprise) have data retention policies that prevent training on your code. Self-hosted models (Ollama + Code Llama) keep everything local. Always check: Does the tool train on my input? Where is data stored? Does my company allow it? When in doubt, don't paste it." },
    { t: "Your Career Insurance Policy", d: "AI will change dramatically every year, but fundamentals don't: HTTP protocols, database indexing, algorithm complexity, architecture patterns, testing strategies, version control. Developers who understand WHY code works — not just WHAT code to write — will always be in demand. Your deep understanding is the one thing AI can't replace." }
  ],
  whatIs: "AI-assisted development is using tools like GitHub Copilot, ChatGPT, Claude, and similar AI models to help you write, debug, and understand code faster. Used correctly, it's a career multiplier that lets experienced developers move at 2-3x speed. Used incorrectly, it's a career destroyer that creates developers who can't function independently — and hiring managers are catching on fast.",
  realWorld: "A senior engineer at a FAANG company shared that during recent interviews, candidates with 4-5 years of experience couldn't implement basic API integration without AI assistance. Samsung banned ChatGPT after engineers leaked proprietary semiconductor designs. Multiple companies have reported AWS bills in the thousands after developers accidentally shared production credentials with AI tools. The industry is now splitting into two groups: developers who use AI to amplify real skills, and those who use AI to mask the absence of skills.",
  code: `# === AI-ASSISTED DEVELOPMENT: THE SAFE CHECKLIST ===

# .gitignore — NEVER let these reach any AI tool or repo
# -------------------------------------------------------
.env
.env.local
.env.production
*.pem
*.key
credentials.json
service-account.json
secrets/
config/production.yaml

# SAFE to share with AI tools:
# -------------------------------------------------------
# - Public documentation and tutorials
# - Generic code patterns (sorting, routing, etc.)
# - Error messages (with sensitive data redacted)
# - Open-source library usage questions
# - Architecture concepts and design patterns

# NEVER share with AI tools:
# -------------------------------------------------------
# - API keys, tokens, secrets (e.g., sk-xxxx, ghp_xxxx)
# - .env files or any config with real credentials
# - Production database queries with real data
# - Customer PII (names, emails, payment info)
# - Internal proprietary business logic
# - Company architecture docs or internal APIs

# === FUNDAMENTALS SELF-TEST ===
# Can you do ALL of these without AI? Be honest.
# -------------------------------------------------------
# [ ] Write a function that reverses a string
# [ ] Implement a basic REST API endpoint
# [ ] Parse JSON and handle errors gracefully
# [ ] Write a SQL query with JOIN and WHERE
# [ ] Debug a null pointer exception from a stack trace
# [ ] Set up environment variables securely
# [ ] Explain Big O of your last three functions
# [ ] Write a unit test for a pure function
# [ ] Create a basic HTML form with validation
# [ ] Explain how HTTP status codes work (200, 401, 404, 500)

# === SAFE AI PROMPT TEMPLATE ===
# -------------------------------------------------------
# Instead of: "Fix my code: const API_KEY = 'sk-real-key-here'..."
# Do this:    "Fix my code: const API_KEY = process.env.API_KEY..."
#
# Instead of: "Query: SELECT * FROM users WHERE email='john@real.com'"
# Do this:    "Query: SELECT * FROM users WHERE email=\$\{placeholder\}"
#
# Instead of: *pastes entire .env file*
# Do this:    "My .env has DATABASE_URL, API_KEY, JWT_SECRET variables.
#              How should I load them in Node.js?"

# === WEEKLY PRACTICE ROUTINE ===
# -------------------------------------------------------
# Monday:    No-AI coding day — build a feature from scratch
# Tuesday:   2 LeetCode problems (no hints, no AI)
# Wednesday: Read open-source code (30 min)
# Thursday:  Explain yesterday's code to a rubber duck
# Friday:    AI-assisted day — use AI to refactor and optimize
# Saturday:  System design practice (whiteboard, no tools)
# Sunday:    Review and reflect — what did you actually learn?`,
  funFact: "A 2024 study by GitClear found that code churn (code written then quickly rewritten or deleted) increased by 39% after the widespread adoption of AI coding assistants — suggesting developers are accepting AI suggestions they don't fully understand and then having to fix them later. Meanwhile, Stack Overflow reported a 50% drop in questions, not because developers had fewer questions, but because they were asking AI instead — and often getting confidently wrong answers.",
  quiz: [
    { q: "A developer pastes their .env file into ChatGPT to debug a connection error. What's the PRIMARY risk?", opts: ["ChatGPT will give incorrect debugging advice", "The .env formatting might break in the chat", "Production credentials could end up in AI training data, exposing API keys and secrets", "The AI might change the environment variable names"], ans: 2 },
    { q: "A hiring manager says: 'The candidate solved the take-home perfectly but froze on follow-up questions.' What does this likely indicate?", opts: ["The candidate was nervous during the interview", "The candidate used AI for the take-home but doesn't understand the code", "The take-home was too easy compared to the interview", "The follow-up questions were unfair"], ans: 1 },
    { q: "What is the CORRECT order for using AI in your learning process?", opts: ["Use AI to learn the concept, then practice manually", "Learn manually first, practice until comfortable, then use AI to go faster", "Use AI and manual coding simultaneously from the start", "Let AI handle everything while you focus on system design"], ans: 1 },
    { q: "Why did Samsung ban ChatGPT for employees?", opts: ["ChatGPT was too slow for their development workflow", "Employees leaked proprietary semiconductor source code through prompts", "Samsung built their own competing AI product", "ChatGPT gave incorrect code suggestions too often"], ans: 1 },
    { q: "Which of these is SAFE to share with an AI coding assistant?", opts: ["Your production DATABASE_URL connection string", "A generic question about sorting algorithm Big O complexity", "Your company's internal API authentication flow with real tokens", "Customer email addresses to debug a notification feature"], ans: 1 },
    { q: "What's the best way to ask AI about code that contains secrets?", opts: ["Paste it quickly and delete the chat afterward", "Use the AI tool's 'private mode' setting", "Replace real credentials with placeholders before prompting", "Only use paid AI tiers since they're always private"], ans: 2 },
    { q: "Which skill is MOST 'AI-proof' for long-term career security?", opts: ["Memorizing syntax for a specific framework", "Understanding system design principles and debugging methodology", "Being fast at writing prompts for AI tools", "Knowing keyboard shortcuts for your IDE"], ans: 1 }
  ],
  challenge: "Take the Fundamentals Self-Test from the code example above — honestly, with no AI. For every item you cannot do, spend 30 minutes this week learning and practicing it manually. Then implement one 'No AI Day' this week: pick a real task at work or a personal project feature, disconnect Copilot, close ChatGPT, and build it from scratch. Write down every moment you wanted to reach for AI and what you did instead. This is your baseline for where you really stand.",
  resources: [
    { type: "article", title: "GitClear: Coding on Copilot — 2024 Data on AI Code Quality", url: "https://www.gitclear.com/coding_on_copilot_data_shows_ai_assistants_put_code_quality_at_risk", source: "GitClear" },
    { type: "article", title: "Samsung Bans ChatGPT After Confidential Code Leak", url: "https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak", source: "Bloomberg" },
    { type: "article", title: "The Dangers of AI-Assisted Development", url: "https://stackoverflow.blog/2023/12/26/developers-want-more-more-more-the-2024-results-from-stack-overflow-s-annual-developer-survey/", source: "Stack Overflow" },
    { type: "video", title: "Why AI Won't Replace Programmers (But Will Change What We Do)", url: "https://www.youtube.com/watch?v=RbGWS5MNvB8", source: "Fireship" }
  ],
  eli5: "Imagine you have a magic calculator that does all your math homework perfectly. You use it every day and get straight A's. Then one day, the teacher gives a test with no calculators allowed — and you can't even do basic addition. That's what happens when you let AI write all your code. The magic calculator is amazing AFTER you learn math. But if you skip learning math, you're just a kid who's really good at pressing buttons.",
  codeWalkthrough: [
    "Lines 1-10: The .gitignore section — these files contain secrets that must NEVER be committed to repos or pasted into AI tools. This is your first line of defense.",
    "Lines 12-16: SAFE items to share with AI — generic patterns, public docs, and redacted error messages. These carry no security risk.",
    "Lines 18-24: The NEVER share list — the most common items developers accidentally leak to AI tools. Memorize this list.",
    "Lines 26-37: The Fundamentals Self-Test — 10 core skills every developer should be able to do without AI assistance. Failing these means you have critical skill gaps.",
    "Lines 39-46: Safe AI Prompt Template — shows how to replace real credentials with placeholders before asking AI for help. This one habit prevents most security leaks.",
    "Lines 48-56: Weekly Practice Routine — a balanced schedule that builds real skills while still leveraging AI on designated days. The key is intentional separation between learning and productivity."
  ],
  bugChallenge: {
    code: `# Developer's "secure" AI workflow
# Step 1: Copy code to ask AI for help

prompt = """
Fix this database connection:

const db = connect({
  host: 'prod-db.company.internal',
  port: 5432,
  user: 'admin',
  password: 'Sup3rS3cret!@#',
  database: 'customers_prod'
})

Error: connection timeout after 30s
"""

# Step 2: Send to ChatGPT
# Step 3: Get fix and apply it
# Step 4: Delete the chat "for security"`,
    hint: "The developer thinks deleting the chat makes this safe. But what already happened to the credentials the moment they hit 'Send'?",
    answer: "The production database credentials (host, username, password, database name) were sent to an external AI service the moment the prompt was submitted. Deleting the chat does NOT remove data from the provider's servers or training pipelines. The correct approach: replace real credentials with placeholders (host: 'REDACTED', password: 'REDACTED') and describe the error generically. After this leak, the developer should immediately rotate the database password and audit access logs."
  },
  difficulty: "intermediate",
  prereqs: [4]
}
];