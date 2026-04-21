#!/usr/bin/env node
/*
 * build-lesson-pages.js
 *
 * Generates one static HTML page per lesson across all courses, for
 * long-tail SEO. Each lesson becomes its own indexable URL so learners
 * searching for a specific topic ("what is a monorepo", "dart null
 * safety", "NestJS guards") can land directly on the matching lesson.
 *
 * URL pattern:  /lessons/<course-slug>/<lesson-id>-<kebab-title>.html
 *
 * Per-page output:
 *  - LearningResource + BreadcrumbList JSON-LD
 *  - Canonical to self
 *  - H1 + subtitle + difficulty badge
 *  - Analogy, what-is, real-world, points, code, walkthrough,
 *    bug challenge, ELI5, fun fact
 *  - Prev/next lesson + back-to-course navigation
 *  - Link to interactive version (learn.html?course=X&lesson=Y)
 *
 * Usage:
 *   node tools/build-lesson-pages.js                    # all lessons, all courses
 *   node tools/build-lesson-pages.js <slug>             # one course
 *   node tools/build-lesson-pages.js <slug> <id>        # one lesson (dry preview)
 *   node tools/build-lesson-pages.js --dry-run          # no file writes
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const OUT_DIR = path.join(ROOT, 'lessons');
const SITE = 'https://learn.teamzlab.com';
const TODAY = new Date().toISOString().slice(0, 10);

// ──────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const stripTags = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, '');
const escJSON = (s) => String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\r\n\t]+/g, ' ').trim();
const truncate = (s, n) => {
  s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
  if (s.length <= n) return s;
  let cut = s.slice(0, n - 1);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > n - 20) cut = cut.slice(0, lastSpace);
  return cut.replace(/[,;:—\-–\s]+$/, '').trim() + '…';
};
const isBengali = (s) => /[\u0980-\u09FF]/.test(String(s || ''));
const kebab = (s, maxLen = 60) => {
  s = stripTags(String(s || ''))
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-[^-]*$/, '');
  return s || 'lesson';
};

function loadCourse(slug) {
  const cfgPath = path.join(COURSES_DIR, slug, 'config.js');
  const dataPath = path.join(COURSES_DIR, slug, 'data.js');
  const cfgSrc = fs.readFileSync(cfgPath, 'utf8').replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(dataPath, 'utf8').replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null;
  globalThis.__L = null;
  try { eval(cfgSrc); } catch (e) { throw new Error(`config.js eval failed for ${slug}: ${e.message}`); }
  try { eval(dataSrc); } catch (e) { throw new Error(`data.js eval failed for ${slug}: ${e.message}`); }
  const cfg = globalThis.__C;
  const lessons = (globalThis.__L || []).filter(l => l && l.id != null);
  if (!cfg) throw new Error(`No COURSE_CONFIG in ${slug}/config.js`);
  globalThis.__C = null;
  globalThis.__L = null;
  return { cfg, lessons };
}

// ──────────────────────────────────────────────────────────
// Lesson URL helpers
// ──────────────────────────────────────────────────────────
function lessonFilename(lesson) {
  const id = String(lesson.id).padStart(2, '0');
  return `${id}-${kebab(lesson.title || `lesson-${lesson.id}`)}.html`;
}
function lessonUrl(slug, lesson) {
  return `${SITE}/lessons/${slug}/${lessonFilename(lesson)}`;
}

// ──────────────────────────────────────────────────────────
// Render a single lesson page
// ──────────────────────────────────────────────────────────
function renderLesson({ slug, cfg, lessons, lesson, prev, next, courseTitle, courseShort, lang }) {
  const lessonCount = lessons.length;
  const title = stripTags(lesson.title || `Lesson ${lesson.id}`);
  const subtitle = stripTags(lesson.subtitle || '');
  const analogy = stripTags(lesson.analogy || '');
  const whatIs = stripTags(lesson.whatIs || '');
  const realWorld = stripTags(lesson.realWorld || '');
  const funFact = stripTags(lesson.funFact || '');
  const eli5 = stripTags(lesson.eli5 || '');
  const challenge = stripTags(lesson.challenge || '');
  const points = Array.isArray(lesson.points) ? lesson.points : [];
  const code = String(lesson.code || '').trim();
  const walk = Array.isArray(lesson.codeWalkthrough) ? lesson.codeWalkthrough : [];
  const bug = lesson.bugChallenge || null;
  const difficulty = lesson.difficulty || '';
  const resources = Array.isArray(lesson.resources) ? lesson.resources : [];

  // Keyword-first title pattern: "{lesson topic} Tutorial — Free Lesson | Teamz Lab"
  // Captures "tutorial" / "free X tutorial" search patterns; keeps lesson title as primary
  // Fallback for Bengali: use localized suffix
  const isBn = lang === 'bn';
  const suffix = isBn ? ' | ফ্রি পাঠ — Teamz Lab' : ' | Free Tutorial — Teamz Lab';
  const pageTitle = truncate(title, 62 - suffix.length) + suffix;
  const metaDesc = truncate(whatIs || analogy || subtitle, 158);

  const interactiveUrl = `../../learn.html?course=${slug}&amp;lesson=${lesson.id}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": courseShort, "item": `${SITE}/c/${slug}.html` },
      { "@type": "ListItem", "position": 3, "name": title, "item": lessonUrl(slug, lesson) }
    ]
  };

  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": escJSON(title),
    "description": escJSON(metaDesc),
    "url": lessonUrl(slug, lesson),
    "inLanguage": lang,
    "learningResourceType": "Lesson",
    "educationalLevel": difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "Beginner to Intermediate",
    "isPartOf": {
      "@type": "Course",
      "name": escJSON(courseTitle),
      "url": `${SITE}/c/${slug}.html`
    },
    "provider": { "@type": "Organization", "name": "Teamz Lab", "url": "https://teamzlab.com" },
    "datePublished": "2025-03-01",
    "dateModified": TODAY,
    "position": lesson.id
  };

  // Points list (key teaching points)
  const pointsHtml = points.map(p => {
    const t = esc(stripTags(p.t || p.title || ''));
    const d = esc(stripTags(p.d || p.description || ''));
    return t ? `<li><strong>${t}</strong>${d ? ` — ${d}` : ''}</li>` : '';
  }).filter(Boolean).join('\n      ');

  // Code walkthrough
  const walkHtml = walk.map((step, i) => {
    return `<li><span class="walk-num">${i + 1}.</span> ${esc(stripTags(step))}</li>`;
  }).join('\n      ');

  // Resources
  const resourcesHtml = resources.map(r => {
    const t = esc(stripTags(r.title || r.url || ''));
    const u = esc(r.url || '#');
    const src = r.source ? ` <span class="res-source">(${esc(stripTags(r.source))})</span>` : '';
    return `<li><a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>${src}</li>`;
  }).join('\n      ');

  // Prev/next nav
  const prevHtml = prev
    ? `<a class="nav-prev" href="./${lessonFilename(prev)}" rel="prev">← ${esc(truncate(prev.title, 40))}</a>`
    : `<span class="nav-placeholder"></span>`;
  const nextHtml = next
    ? `<a class="nav-next" href="./${lessonFilename(next)}" rel="next">${esc(truncate(next.title, 40))} →</a>`
    : `<span class="nav-placeholder"></span>`;

  const labels = lang === 'bn' ? {
    home: 'হোম', openInteractive: 'ইন্টারঅ্যাক্টিভ ভার্সন খুলুন (কুইজ + চ্যালেঞ্জ)',
    analogy: 'বাস্তব জীবনের উদাহরণ', whatIs: 'কী এটি?', realWorld: 'বাস্তব প্রয়োগ',
    keyPoints: 'মূল পয়েন্টসমূহ', codeExample: 'কোড উদাহরণ', walkthrough: 'লাইন-বাই-লাইন ব্যাখ্যা',
    bugChallenge: 'বাগ খুঁজে বের করুন', eli5: 'একদম সহজ ভাষায়', funFact: 'মজার তথ্য',
    challenge: 'হ্যান্ডস-অন চ্যালেঞ্জ', resources: 'আরও রিসোর্স',
    lessonOf: 'পাঠ', lessonMeta: `পাঠ ${lesson.id} / ${lessonCount}`,
    difficulty: 'কঠিনতা', backToCourse: 'কোর্সে ফিরে যান'
  } : {
    home: 'Home', openInteractive: 'Open interactive version (quiz + challenge)',
    analogy: 'Real-world analogy', whatIs: 'What is it?', realWorld: 'Real-world relevance',
    keyPoints: 'Key points', codeExample: 'Code example', walkthrough: 'Line-by-line walkthrough',
    bugChallenge: 'Spot the bug', eli5: 'Explain like I\'m 5', funFact: 'Fun fact',
    challenge: 'Hands-on challenge', resources: 'More resources',
    lessonOf: 'Lesson', lessonMeta: `Lesson ${lesson.id} of ${lessonCount}`,
    difficulty: 'Difficulty', backToCourse: 'Back to course'
  };

  return `<!DOCTYPE html>
<html lang="${esc(lang)}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(metaDesc)}">
<meta name="author" content="Teamz Lab">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="date" content="${TODAY}">
<link rel="canonical" href="${lessonUrl(slug, lesson)}">
${prev ? `<link rel="prev" href="${SITE}/lessons/${slug}/${lessonFilename(prev)}">` : ''}
${next ? `<link rel="next" href="${SITE}/lessons/${slug}/${lessonFilename(next)}">` : ''}

<meta property="og:type" content="article">
<meta property="og:title" content="${esc(truncate(title, 90))}">
<meta property="og:description" content="${esc(metaDesc)}">
<meta property="og:image" content="${esc(cfg.ogImage && cfg.ogImage.startsWith('http') ? cfg.ogImage : `${SITE}/og-image.png`)}">
<meta property="og:url" content="${lessonUrl(slug, lesson)}">
<meta property="og:site_name" content="Teamz Lab Learning">
<meta property="og:locale" content="${lang === 'bn' ? 'bn_BD' : 'en_US'}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(truncate(title, 70))}">
<meta name="twitter:description" content="${esc(metaDesc)}">
<meta name="twitter:image" content="${esc(cfg.ogImage && cfg.ogImage.startsWith('http') ? cfg.ogImage : `${SITE}/og-image.png`)}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 229 180' fill='%23D9FE06'><path d='M103.64 0H0V53.18H103.64V0Z'/><path d='M228 53.1799H103.64V106.36H228V53.1799Z'/><path d='M158.84 106.37H103.64V177.59H158.83V106.37'/></svg>">

<script type="application/ld+json">
${JSON.stringify(learningResourceSchema, null, 2)}
</script>

<script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
</script>

<style>
:root{--bg:#F4F5F5;--surface:#FFFFFF;--text:#12151A;--text-muted:rgba(18,21,26,0.65);--border:#DDDDDD;--accent:#D9FE06;--accent-fg:#12151A;--font:'Poppins',sans-serif;--font-code:'Fira Code',Consolas,monospace;--text-h1:36px;--text-h2:28px;--text-h3:22px;--text-h4:19px;--text-lg:16px;--text-md:14px;--text-sm:12px;--text-xs:10px;--lh:165%}
html[data-theme="dark"]{--bg:#12151A;--surface:#1D1F25;--text:#FFFFFF;--text-muted:rgba(255,255,255,0.7);--border:rgba(255,255,255,0.15);--accent-fg:#FFFFFF}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--text);font-family:var(--font);font-size:var(--text-lg);line-height:var(--lh);-webkit-font-smoothing:antialiased}
a{color:var(--accent-fg);text-decoration:none}a:hover{text-decoration:underline}
.skip-link{position:absolute;left:50%;transform:translateX(-50%);top:-100%;background:var(--accent);color:#12151A;border-radius:0 0 10px 10px;padding:0.7rem 1rem;font-weight:700;z-index:200}.skip-link:focus{top:0}
.container{max-width:760px;margin:0 auto;padding:2.5rem 1.25rem 4rem}
.site-header{position:sticky;top:0;z-index:100;background:var(--bg);border-bottom:1px solid var(--border);padding:0.7rem 1.25rem}
.site-header__inner{max-width:760px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.teamz-logo{display:inline-flex;align-items:center;color:var(--text)}.teamz-logo:hover{color:var(--accent-fg);text-decoration:none}
.nav-link{color:var(--text-muted);font-size:var(--text-md);font-weight:500}.nav-link:hover{color:var(--accent-fg);text-decoration:none}
.theme-toggle{width:36px;height:36px;border:none;background:transparent;color:var(--text-muted);cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center}
.theme-toggle:hover{color:var(--text)}
.breadcrumb{font-size:var(--text-sm);color:var(--text-muted);margin-bottom:1rem}
.breadcrumb a{color:var(--text-muted)}.breadcrumb a:hover{color:var(--accent-fg)}
.breadcrumb span[aria-current]{color:var(--text)}
.lesson-meta{display:flex;gap:0.6rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap}
.badge{display:inline-block;padding:0.2rem 0.65rem;border-radius:22px;font-size:var(--text-xs);font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:var(--surface);border:1px solid var(--border)}
.badge.lesson-num{background:var(--accent);color:#12151A;border:1px solid var(--accent)}
.badge.diff-beginner{background:#d4edda;color:#155724;border:1px solid #c3e6cb}
.badge.diff-intermediate{background:#fff3cd;color:#856404;border:1px solid #ffeaa7}
.badge.diff-advanced{background:#f8d7da;color:#721c24;border:1px solid #f5c6cb}
html[data-theme="dark"] .badge{background:rgba(255,255,255,0.08);color:var(--text);border-color:rgba(255,255,255,0.15)}
html[data-theme="dark"] .badge.diff-beginner{background:rgba(40,167,69,0.2);color:#5fd778}
html[data-theme="dark"] .badge.diff-intermediate{background:rgba(255,193,7,0.2);color:#ffd666}
html[data-theme="dark"] .badge.diff-advanced{background:rgba(220,53,69,0.2);color:#ff7986}
h1.lesson-title{font-size:var(--text-h1);font-weight:800;line-height:1.2;margin-bottom:0.4rem}
.lesson-subtitle{font-size:var(--text-h4);color:var(--text-muted);font-weight:400;margin-bottom:1.8rem;line-height:1.4}
.cta-interactive{display:flex;align-items:center;gap:0.6rem;background:var(--accent);color:#12151A;border-radius:10px;padding:0.9rem 1.1rem;margin-bottom:2.5rem;font-weight:600;border:1px solid var(--accent);font-size:var(--text-md)}
.cta-interactive:hover{text-decoration:none;color:#12151A;transform:translateY(-1px);box-shadow:0 4px 12px rgba(217,254,6,0.35)}
.cta-interactive::before{content:'▶';margin-right:0.2rem}
.section{margin-bottom:2.2rem}
.section h2{font-size:var(--text-h2);font-weight:800;margin-bottom:0.8rem;line-height:1.25}
.section h2 .accent{color:var(--accent-fg)}
.section p{margin-bottom:0.8rem}
.section p:last-child{margin-bottom:0}
.analogy-box{background:var(--surface);border-left:3px solid var(--accent);border-radius:8px;padding:1.1rem 1.3rem;font-style:italic;color:var(--text)}
.points-list{list-style:none;display:grid;gap:0.8rem}
.points-list li{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;font-size:var(--text-md);line-height:var(--lh)}
.points-list li strong{color:var(--accent-fg);font-weight:700}
pre.code{background:#1D1F25;color:#E8EAED;border-radius:10px;padding:1.2rem;overflow-x:auto;font-family:var(--font-code);font-size:13px;line-height:1.55;margin-bottom:1rem;border:1px solid rgba(255,255,255,0.1)}
html[data-theme="dark"] pre.code{background:#0E1013}
.walkthrough{display:grid;gap:0.4rem;list-style:none}
.walkthrough li{font-size:var(--text-md);color:var(--text);padding:0.4rem 0.2rem;display:flex;gap:0.5rem}
.walk-num{color:var(--accent-fg);font-weight:700;flex-shrink:0;min-width:1.8rem}
.bug-challenge{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1.3rem}
.bug-challenge details{cursor:pointer}
.bug-challenge details summary{font-weight:600;color:var(--accent-fg);margin-bottom:0.5rem;padding-bottom:0.4rem;border-bottom:1px solid var(--border);list-style:none;display:flex;align-items:center;gap:0.5rem}
.bug-challenge details summary::before{content:'▶';font-size:0.8em;transition:transform 0.2s}
.bug-challenge details[open] summary::before{transform:rotate(90deg)}
.bug-challenge .hint{color:var(--text-muted);font-size:var(--text-md);margin-top:0.6rem;padding:0.6rem 0.9rem;background:var(--bg);border-radius:6px;border-left:2px solid var(--accent)}
.bug-challenge .answer{color:var(--text);font-size:var(--text-md);margin-top:0.6rem;padding:0.6rem 0.9rem;background:var(--bg);border-radius:6px;border-left:2px solid #28a745}
html[data-theme="dark"] .bug-challenge .answer{border-left-color:#5fd778}
.eli5-box{background:linear-gradient(135deg,rgba(217,254,6,0.08),rgba(217,254,6,0.02));border:1px solid var(--border);border-radius:10px;padding:1.1rem 1.3rem;font-size:var(--text-md);color:var(--text);line-height:var(--lh)}
.funfact-box{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:1rem 1.2rem;font-size:var(--text-md);color:var(--text-muted)}
.funfact-box::before{content:'💡 ';margin-right:0.2rem}
html[data-theme="dark"] .funfact-box::before{content:'';}
.challenge-box{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:1.1rem 1.3rem;font-size:var(--text-md)}
.resources-list{list-style:none;display:grid;gap:0.4rem}
.resources-list li{padding:0.5rem 0.7rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;font-size:var(--text-md)}
.res-source{color:var(--text-muted);font-size:var(--text-sm);margin-left:0.3rem}
.lesson-nav{display:flex;justify-content:space-between;gap:1rem;margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border)}
.nav-prev,.nav-next{flex:1;padding:1rem 1.2rem;background:var(--surface);border:1px solid var(--border);border-radius:10px;color:var(--text);font-weight:600;font-size:var(--text-md);line-height:1.4;display:block;max-width:45%}
.nav-prev{text-align:left}.nav-next{text-align:right;margin-left:auto}
.nav-prev:hover,.nav-next:hover{border-color:var(--accent-fg);color:var(--accent-fg);text-decoration:none;transform:translateY(-1px)}
.nav-placeholder{flex:1;max-width:45%}
.back-to-course{display:inline-block;margin-top:2rem;font-size:var(--text-md);color:var(--text-muted)}
.back-to-course:hover{color:var(--accent-fg)}
@media(max-width:640px){.container{padding:1.5rem 1rem 3rem}h1.lesson-title{font-size:28px}.section h2{font-size:22px}.cta-interactive{font-size:var(--text-sm)}.nav-prev,.nav-next{max-width:48%;padding:0.75rem 0.9rem}}
</style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to content</a>

<header class="site-header">
  <div class="site-header__inner">
    <a href="https://teamzlab.com/" target="_blank" rel="noopener noreferrer" class="teamz-logo" aria-label="Teamz Lab"><svg width="100" height="16" viewBox="0 0 229 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.64 0H0V53.18H103.64V0Z"/><path d="M228 53.1799H103.64V106.36H228V53.1799Z"/><path d="M158.84 106.37H103.64V177.59H158.83V106.37"/></svg></a>
    <nav style="display:flex;align-items:center;gap:0.8rem;">
      <a class="nav-link" href="/c/${esc(slug)}.html">${esc(courseShort)}</a>
      <a class="nav-link" href="/">${esc(labels.home)}</a>
      <button class="theme-toggle" type="button" aria-label="Toggle theme" onclick="toggleTheme()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></button>
    </nav>
  </div>
</header>

<main id="main-content" class="container">

<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/">${esc(labels.home)}</a> / <a href="/c/${esc(slug)}.html">${esc(courseShort)}</a> / <span aria-current="page">${esc(title)}</span>
</nav>

<div class="lesson-meta">
  <span class="badge lesson-num">${esc(labels.lessonMeta)}</span>
  ${difficulty ? `<span class="badge diff-${esc(difficulty)}">${esc(difficulty)}</span>` : ''}
</div>

<h1 class="lesson-title">${esc(title)}</h1>
${subtitle ? `<p class="lesson-subtitle">${esc(subtitle)}</p>` : ''}

<a class="cta-interactive" href="${interactiveUrl}">${esc(labels.openInteractive)}</a>

${analogy ? `<section class="section"><h2>${esc(labels.analogy)}</h2><div class="analogy-box">${esc(analogy)}</div></section>` : ''}

${whatIs ? `<section class="section"><h2>${esc(labels.whatIs)}</h2><p>${esc(whatIs)}</p></section>` : ''}

${realWorld ? `<section class="section"><h2>${esc(labels.realWorld)}</h2><p>${esc(realWorld)}</p></section>` : ''}

${pointsHtml ? `<section class="section"><h2>${esc(labels.keyPoints)}</h2><ul class="points-list">
      ${pointsHtml}
    </ul></section>` : ''}

${code ? `<section class="section"><h2>${esc(labels.codeExample)}</h2><pre class="code"><code>${esc(code)}</code></pre>${walkHtml ? `<h3 style="font-size:var(--text-h4);margin-top:1.4rem;margin-bottom:0.7rem;">${esc(labels.walkthrough)}</h3><ol class="walkthrough">
      ${walkHtml}
    </ol>` : ''}</section>` : ''}

${bug && bug.code ? `<section class="section"><h2>${esc(labels.bugChallenge)}</h2><div class="bug-challenge"><pre class="code"><code>${esc(bug.code)}</code></pre>${bug.hint ? `<details><summary>Need a hint?</summary><div class="hint">${esc(bug.hint)}</div></details>` : ''}${bug.answer ? `<details><summary>Show answer</summary><div class="answer">${esc(bug.answer)}</div></details>` : ''}</div></section>` : ''}

${eli5 ? `<section class="section"><h2>${esc(labels.eli5)}</h2><div class="eli5-box">${esc(eli5)}</div></section>` : ''}

${funFact ? `<section class="section"><h2>${esc(labels.funFact)}</h2><div class="funfact-box">${esc(funFact)}</div></section>` : ''}

${challenge ? `<section class="section"><h2>${esc(labels.challenge)}</h2><div class="challenge-box">${esc(challenge)}</div></section>` : ''}

${resourcesHtml ? `<section class="section"><h2>${esc(labels.resources)}</h2><ul class="resources-list">
      ${resourcesHtml}
    </ul></section>` : ''}

<a class="cta-interactive" href="${interactiveUrl}">${esc(labels.openInteractive)}</a>

<nav class="lesson-nav" aria-label="Lesson navigation">
  ${prevHtml}
  ${nextHtml}
</nav>

<a class="back-to-course" href="/c/${esc(slug)}.html">← ${esc(labels.backToCourse)}: ${esc(courseShort)}</a>

<footer style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);text-align:center;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--lh);">
  <p style="margin-bottom:0.5rem;">${isBn ? 'Teamz Lab-এর ইঞ্জিনিয়ারিং টিমের লেখা। সব পাঠ বিনামূল্যে।' : 'Written by the Teamz Lab engineering team. All lessons are free forever.'}</p>
  <p><a href="/about.html" style="color:var(--accent-fg);">${isBn ? 'আমাদের সম্পর্কে ও রেফারেন্স' : 'About &amp; references'}</a> &middot; <a href="/roadmap.html" style="color:var(--accent-fg);">${isBn ? 'পূর্ণাঙ্গ রোডম্যাপ' : 'Full-stack roadmap'}</a> &middot; <a href="/" style="color:var(--accent-fg);">${isBn ? 'সব ফ্রি কোর্স' : 'All courses'}</a></p>
</footer>

</main>

<script>
(function(){ const s = localStorage.getItem('theme'); if (s === 'dark') document.documentElement.setAttribute('data-theme','dark'); })();
function toggleTheme(){ const h = document.documentElement; const n = h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; if (n === 'dark') h.setAttribute('data-theme','dark'); else h.removeAttribute('data-theme'); localStorage.setItem('theme', n); }
</script>
</body>
</html>
`;
}

// ──────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const positional = args.filter(a => !a.startsWith('--'));
  const onlySlug = positional[0];
  const onlyId = positional[1] ? Number(positional[1]) : null;

  const allSlugs = fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js'))
  );

  const targets = onlySlug ? [onlySlug] : allSlugs;
  console.log(`Building lesson pages for ${targets.length} course(s)${dryRun ? ' (dry run)' : ''}`);

  let totalPages = 0;
  const allLessonUrls = [];

  for (const slug of targets) {
    let cfg, lessons;
    try {
      ({ cfg, lessons } = loadCourse(slug));
    } catch (e) {
      console.error(`  ✗ ${slug}: ${e.message}`);
      continue;
    }

    const courseTitle = stripTags(cfg.title || slug);
    const courseShort = stripTags(cfg.shortTitle || cfg.title || slug);
    const lang = isBengali(courseTitle) ? 'bn' : (cfg.lang || 'en');

    // Sort lessons by id for prev/next linking
    const sorted = [...lessons].sort((a, b) => Number(a.id) - Number(b.id));
    const lessonTargets = onlyId != null ? sorted.filter(l => Number(l.id) === onlyId) : sorted;

    if (lessonTargets.length === 0) {
      console.log(`  - ${slug}: no matching lessons`);
      continue;
    }

    const outCourseDir = path.join(OUT_DIR, slug);
    if (!dryRun) fs.mkdirSync(outCourseDir, { recursive: true });

    let courseCount = 0;
    for (const lesson of lessonTargets) {
      const idx = sorted.findIndex(l => l.id === lesson.id);
      const prev = idx > 0 ? sorted[idx - 1] : null;
      const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

      const html = renderLesson({
        slug, cfg, lessons: sorted, lesson, prev, next, courseTitle, courseShort, lang
      });
      const outPath = path.join(outCourseDir, lessonFilename(lesson));
      if (!dryRun) fs.writeFileSync(outPath, html);
      allLessonUrls.push(lessonUrl(slug, lesson).replace(SITE, ''));
      courseCount++;
    }
    console.log(`  ✓ ${slug}: ${courseCount} lesson page${courseCount === 1 ? '' : 's'}`);
    totalPages += courseCount;
  }

  console.log(`\nTotal: ${totalPages} lesson pages ${dryRun ? 'would be' : 'were'} generated.`);

  // Emit a lesson-urls.txt for sitemap generation convenience
  if (!dryRun && !onlyId) {
    const urlsFile = path.join(ROOT, 'tools', 'lesson-urls.txt');
    fs.writeFileSync(urlsFile, allLessonUrls.map(u => SITE + u).join('\n') + '\n');
    console.log(`URL list written to: tools/lesson-urls.txt (${allLessonUrls.length} URLs)`);
  }
}

main();
