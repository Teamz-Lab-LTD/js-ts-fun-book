# Teamz Lab Learning Platform — Course Generation Research Prompt

> Use this prompt with ChatGPT Deep Research to generate a comprehensive course outline and Claude prompt for any new course on the Teamz Lab Learning Platform.

---

## 1. What Is This Project?

**Teamz Lab Learning** is a free, interactive, gamified learning platform built as a single-page static HTML application. It hosts multiple courses on a single rendering engine (`learn.html`) — each course is just a `config.js` + `data.js` file pair inside a `courses/` folder.

**Live URL**: https://learn.teamzlab.com
**Organization**: Teamz Lab LTD (software development company)

### Key Facts
- **Zero signup required** — anyone can start learning instantly
- **No build step** — pure static HTML/CSS/JS, deployed via GitHub Pages
- **Multi-course architecture** — one rendering engine, many course data files
- **Completely free** — no paywalls, no premium tiers, no locked content
- **8-language UI** — English, Bengali, Hindi, Spanish, Arabic, Portuguese, Indonesian, French
- **Mobile-responsive** — works on all devices, dark/light theme, RTL support

### Current Courses (as of March 2026)
| Course | Lessons | Focus |
|--------|---------|-------|
| Free Full-Stack Playbook | 49 | TypeScript, NestJS, React, MongoDB, Docker |
| Flutter & Dart Masterclass | 51 | Flutter, Dart, BLoC, Clean Architecture, Firebase |
| Competitive Programming: Zero to Hero | 30+ | C++, Algorithms, Data Structures, DP, Graphs |
| Flutter Interview Mastery | 77 | Senior Flutter interview prep |
| Android Interview Mastery | 83 | Senior Android/Kotlin interview prep |
| Career Launchpad | 16 | Portfolio, Resume, LeetCode, Job Hunt Strategy |
| IELTS Mastery | 58 | English grammar to Band 8+ across all 4 skills |

---

## 2. Why This Platform Is Best-in-Class

### No Barriers to Learning
- No account creation, no email, no credit card — just open and learn
- Works offline once loaded (localStorage persistence)
- No ads blocking content (minimal, non-intrusive ads only)

### Production-Quality UI/UX
- Professional dark/light theming with Teamz Lab brand (neon green `#D9FE06` accent)
- Poppins font family, smooth animations, polished micro-interactions
- Keyboard shortcuts for power users (arrows, Ctrl+K search, D dashboard, N notes, T theme)
- Full-text search across all lesson content
- Per-lesson rich text notes editor with export

### Comprehensive SEO
- JSON-LD structured data (Course schema, Organization schema, FAQ schema, ItemList)
- Open Graph + Twitter Card meta tags per course
- Canonical URLs, hreflang tags, robots.txt, XML sitemap
- Long-tail keyword optimization in config.js (30+ keywords per course)
- Google-friendly course descriptions with lesson counts auto-injected
- Firebase Analytics tracking 20+ event types for data-driven optimization

---

## 3. How Courses Are Organized

### Architecture
```
courses/
  course-slug/
    config.js    ← Course metadata, SEO, topic map, concept flows, SRS settings
    data.js      ← All lesson content (array of lesson objects)
```

The rendering engine (`learn.html`) reads the `?course=` URL parameter, loads the corresponding `config.js` and `data.js`, and renders everything dynamically.

### Course Config Structure (`config.js`)
```js
const COURSE_CONFIG = {
  title: 'Course Title',
  subtitle: 'Tagline with <strong>lesson count</strong>',
  shortTitle: 'Short Name',
  org: 'Teamz Lab',
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=SLUG',
  description: 'SEO description with {lessonCount} placeholder',
  keywords: 'comma, separated, long-tail, keywords, 30+',
  topics: ['Topic1', 'Topic2', ...],
  educationalLevel: 'Beginner to Advanced',
  topicMap: {
    'Topic Group Name': [lessonId1, lessonId2, ...],
    // ordered beginner → advanced
  },
  conceptFlows: {
    lessonId: ['Step1', 'Step2', 'Step3', 'Step4'],
    // 3-5 step visual concept flow per lesson
  },
  srs: { boxes: 5, intervals: [0, 1, 3, 7, 14], reviewBatchSize: 10 },
  xp: { lessonComplete: 20, quizPerfect: 30, ... },
  social: { hashtags: '...', tweetTemplate: '...' },
  footerTagline: 'Motivational one-liner'
};
```

### Lesson Data Structure (`data.js`)
Every single lesson follows this exact schema — **all fields are required**:

```js
{
  id: Number,                    // Sequential ID
  title: String,                 // Lesson title
  subtitle: String,              // Short subtitle
  analogy: String,               // Fun real-world analogy (2-4 sentences, relatable)
  points: [                      // 7-11 teaching points (these become flashcards)
    { t: String, d: String, code: String }  // title, description, code example
  ],
  whatIs: String,                // Technical summary paragraph
  realWorld: String,             // Why this matters in the real world
  code: String,                  // Main code example (multi-line, commented)
  funFact: String,               // Interesting/fun fact about the topic
  quiz: [                        // 3-5 quiz questions per lesson
    { q: String, opts: [String], ans: Number }  // question, 4 options, correct index
  ],
  challenge: String,             // Hands-on coding challenge prompt
  resources: [                   // 2-4 external learning resources
    { type: String, title: String, url: String, source: String }
  ],
  eli5: String,                  // Explain Like I'm 5 (simple analogy)
  codeWalkthrough: [String],     // Line-by-line explanation of the main code
  bugChallenge: {                // Spot-the-bug exercise
    code: String, hint: String, answer: String
  },
  difficulty: String,            // "beginner" | "intermediate" | "advanced"
  prereqs: [Number]              // Prerequisite lesson IDs
}
```

### Topic Organization Strategy
- Topics are grouped from **beginner → advanced** in `topicMap`
- Each topic group contains 2-6 lessons that build on each other
- Prerequisites (`prereqs`) create a skill tree — learners see which lessons unlock others
- Concept flows (`conceptFlows`) show a 3-5 step visual diagram per lesson

---

## 4. SEO Strategy

### Keyword Research Approach
- Target **long-tail keywords** (4-7 words) that match search intent
- Include year-specific keywords ("flutter interview questions 2026")
- Mix tutorial keywords ("nestjs tutorial for beginners") with problem keywords ("how to start competitive programming")
- Include comparison keywords ("javascript vs typescript")
- Target "free" and "no signup" keywords heavily — these are our differentiators

### On-Page SEO
- **Title tag**: Course name + key differentiator + lesson count
- **Meta description**: Free + interactive + lesson count + key topics + "no signup required"
- **Structured data**: Course schema with provider, educational level, price (free), language
- **Open Graph**: Optimized title (under 60 chars), description (under 200 chars), 1200x630 image
- **Canonical URL**: One canonical per course
- **Internal linking**: Courses link to each other via the landing page

### Content SEO
- Every lesson has 7-11 teaching points — each is a potential featured snippet answer
- `whatIs` field answers "What is X?" queries directly
- `eli5` field answers simplified queries
- FAQ schema markup for common questions
- Natural keyword integration in lesson content (not stuffed)

---

## 5. World-Class Teaching Methodology

The platform implements techniques used by the world's best educators and validated by cognitive science research.

### From Richard Feynman — "The Great Explainer"
- **ELI5 (Explain Like I'm 5)**: Every lesson has a `eli5` field — a dead-simple analogy that even a child could understand. Feynman believed if you can't explain it simply, you don't understand it.
- **Analogies First**: Every lesson opens with a fun real-world `analogy` before any technical content. This anchors abstract concepts to familiar experiences.
- **Building from First Principles**: Lessons start from "What is Programming?" and build up. Nothing is assumed.

### From Barbara Oakley — "Learning How to Learn"
- **Chunking**: Each lesson has 7-11 small `points` — bite-sized chunks that fit in working memory (Miller's Law: 7 +/- 2 items).
- **Interleaving**: The "Mixed Challenge" feature pulls quizzes from multiple lessons randomly — interleaved practice is 43% more effective than blocked practice (Rohrer & Taylor, 2007).
- **Diffuse Mode Thinking**: Fun facts, analogies, and ELI5s activate diffuse mode — letting the brain make connections subconsciously.

### From Benjamin Bloom — Mastery Learning
- **Prerequisites & Skill Trees**: Lessons have explicit `prereqs` — you can't skip ahead without mastering foundations. This mirrors Bloom's mastery learning where students must demonstrate competency before advancing.
- **Per-Lesson Quizzes**: Every lesson has 3-5 quizzes that test understanding, not memorization. This ensures mastery of each concept.

### From Hermann Ebbinghaus — Spaced Repetition
- **Leitner 5-Box SRS System**: Quiz questions move between 5 boxes based on correct/incorrect answers. Review intervals: immediate → 1 day → 3 days → 7 days → 14 days. This combats the forgetting curve — proven to improve long-term retention by 200-400%.
- **Flashcard Mode**: Teaching points become flippable flashcards with difficulty rating (Easy/Good/Hard) — feeding directly into the SRS algorithm.

### From Robert Bjork — Desirable Difficulties
- **Retrieval Practice**: Quizzes force active recall rather than passive re-reading. Active recall is 50% more effective than re-reading (Karpicke & Blunt, 2011).
- **Elaborative Interrogation**: "Think Deeper" prompts ask learners to explain WHY something works, not just WHAT it does. This deepens understanding by 2x (Dunlosky et al., 2013 meta-analysis).
- **Self-Explanation**: Text input fields where learners explain concepts in their own words — proven to improve transfer by 30% (Chi et al., 1989).
- **Confidence Rating**: Before answering quizzes, learners rate their confidence (Unsure/Somewhat/Very Sure) — this metacognitive awareness improves calibration and learning.

### From Jerome Bruner — Scaffolding & Discovery
- **Spot-the-Bug Challenges**: Every lesson has a `bugChallenge` — learners find and fix deliberate bugs. This is discovery learning — they construct understanding by debugging, not by being told the answer.
- **Code Walkthroughs**: Line-by-line explanations (`codeWalkthrough`) scaffold complex code, gradually removing support as concepts become familiar.
- **Typing Challenges**: Learners type out code examples for muscle memory — combining motor learning with cognitive learning.

### From B.F. Skinner — Reinforcement & Gamification
- **XP System**: Earn points for completing lessons, quizzes, challenges. 10 progression levels from "Newbie" to "Grandmaster" — variable ratio reinforcement keeps motivation high.
- **Achievement System**: Unlockable achievements with confetti animations and witty messages — intermittent reinforcement is the most addictive reward schedule.
- **Progress Tracking**: Visual progress bars per topic, donut chart dashboard, completion milestones with celebratory messages.
- **Point Reactions**: "Got It" / "Hard" / "Love" reactions on teaching points — micro-feedback loops.

### From Lev Vygotsky — Zone of Proximal Development
- **Difficulty Progression**: Lessons are tagged as "beginner", "intermediate", or "advanced" and ordered from simple to complex within each topic.
- **Hints Before Answers**: Bug challenges provide a `hint` before revealing the `answer` — scaffolding within the ZPD.
- **Multiple Representations**: Same concept taught via analogy, code, walkthrough, ELI5, quiz, and challenge — 6 different entry points for understanding.

### From John Sweller — Cognitive Load Theory
- **Clean UI**: One lesson visible at a time, no clutter, no distracting sidebars
- **Code + Explanation Together**: Code examples appear directly next to their explanations — eliminating split-attention effect
- **Progressive Disclosure**: ELI5, resources, and deep explanations are behind toggles — learners access them when ready, not all at once

---

## 6. Content Quality Standards

Every lesson must meet these quality bars:

### Analogy Quality
- Must be instantly relatable (cooking, sports, everyday life — not other tech concepts)
- Must map accurately to the technical concept (not just funny, but correct)
- 2-4 sentences, conversational tone, slightly humorous

### Teaching Points (7-11 per lesson)
- Each point teaches ONE concept with a clear title (`t`) and explanation (`d`)
- Each point includes a working code example (`code`)
- Points progress from simple to complex within the lesson
- Descriptions are 2-4 sentences — enough to understand, short enough for flashcards

### Code Examples
- Must be syntactically correct and runnable
- Include comments explaining key lines
- Use realistic variable names (not `foo`, `bar`)
- Show both the "what" and the "why" in comments

### Quiz Questions (3-5 per lesson)
- Test understanding, not memorization
- All 4 options must be plausible (no joke answers)
- Cover different teaching points from the lesson
- `ans` is the 0-indexed correct option (options get shuffled at render time)

### Bug Challenges
- Must contain exactly ONE realistic bug
- The bug should be something developers actually encounter
- Hint guides without giving away the answer
- Answer explains both the bug AND the fix

### Resources
- 2-4 per lesson: mix of official docs, video tutorials, articles
- Must be real, working URLs from reputable sources
- Include source name for credibility

---

## 7. How to Use This Prompt

### Step 1: Give This to ChatGPT Deep Research
Tell ChatGPT:

> "I'm building a new course for the Teamz Lab Learning Platform. Research the topic [YOUR TOPIC] deeply. Based on the platform architecture, teaching methodology, and quality standards described in this document, generate:
>
> 1. A comprehensive course outline with 30-80 lessons organized into topic groups (beginner → advanced)
> 2. Long-tail SEO keywords (30+) targeting search intent for this topic
> 3. The complete `config.js` file
> 4. A Claude prompt that will generate the full `data.js` file with all lessons following the exact schema
>
> The course should be the BEST free resource on the internet for this topic. Research what the top educators teach, what students struggle with most, and what existing courses miss."

### Step 2: Give the Generated Prompt to Claude
Take the Claude prompt that ChatGPT generates and use it with Claude to generate the actual lesson content (`data.js`). Claude will follow the exact schema and quality standards to produce production-ready lesson data.

### Step 3: Deploy
1. Create `courses/your-course-slug/config.js` and `courses/your-course-slug/data.js`
2. Add the course to `index.html` landing page
3. Update `sitemap.xml`
4. Deploy — the rendering engine handles everything else automatically

---

## 8. Platform Technical Details

### Rendering Engine Features (learn.html)
The rendering engine is ~3400+ lines and handles:
- Lesson rendering with all 6 content modes (points, code, walkthrough, quiz, challenge, bug)
- Flashcard flip animation with SRS difficulty rating
- Live JavaScript code playground (in-browser execution)
- Quiz system with seeded option shuffling (consistent across re-renders)
- Spaced Repetition Review (Leitner 5-box system with configurable intervals)
- Mixed Challenge (interleaved cross-lesson quizzes)
- Achievement system with confetti and custom messages
- XP system with 10 level titles
- Full-text search across all lesson content
- Per-lesson notes editor (rich text, copy/share, all-notes view)
- Dashboard with donut chart, topic progress, skill tree visualization
- Certificate generation with LinkedIn share
- 8-language UI with Google Translate integration
- Dark/light theme with CSS custom properties
- Arabic RTL support
- Firebase Analytics (production-only, 20+ event types)
- Social sharing (Twitter, LinkedIn, Facebook, WhatsApp, Reddit, copy link)
- Keyboard shortcuts
- LocalStorage persistence for all state
- Responsive design for all screen sizes

### Design System
- **Brand color**: Neon green `#D9FE06`
- **Font**: Poppins (Google Fonts) — weights 400, 500, 600, 700, 800
- **Code font**: Fira Code, Consolas, monospace
- **Dark mode default**: `--bg: #12151A`, `--surface: #1D1F25`, `--text: #FFFFFF`
- **Pill-shaped buttons**: `border-radius: 22px`
- **SVG icons only** — no emoji, icons use `stroke: currentColor` for theme compatibility

---

## 9. What Makes a Viral Course

Based on our experience with 7 courses reaching thousands of learners:

1. **Solve a real pain**: "I want to learn X but every course wants $200 and my email"
2. **Instant gratification**: First lesson should feel rewarding within 60 seconds
3. **Share-worthy moments**: Achievements, certificates, progress milestones — things people screenshot and share
4. **Complete journey**: From absolute zero to competent — no "Part 2 coming soon"
5. **Better than paid alternatives**: More content, better UX, better teaching — and it's free
6. **SEO-driven discovery**: People find individual lessons via Google, then explore the full course
7. **No friction**: No signup, no loading spinner, no paywall — just content
---

*This document is maintained by Teamz Lab LTD. Last updated: March 2026.*
