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
const { headSnippets, inArticleAd } = require('./lib/head-snippets');

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
${headSnippets(slug)}
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' fill='%23D9FE06'><rect x='0' y='0' width='200' height='200' opacity='.6'/><rect x='200' y='0' width='200' height='400'/><rect x='400' y='200' width='200' height='200' opacity='.6'/></svg>">

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
    <a href="https://teamzlab.com/" target="_blank" rel="noopener noreferrer" class="teamz-logo" aria-label="Teamz Lab"><svg width="100" height="16" viewBox="0 0 2445 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" opacity=".6"/><rect x="200" y="0" width="200" height="400"/><rect x="400" y="200" width="200" height="200" opacity=".6"/><g transform="translate(664,0) scale(0.5)"><g transform="translate(0,800) scale(0.1,-0.1)"><path d="M0 5875 l0 -525 720 0 720 0 0 -1875 0 -1875 643 2 642 3 3 1873 2 1872 720 0 720 0 2 521 c2 286 1 523 -1 525 -2 2 -942 4 -2088 4 l-2083 0 0 -525z"/><path d="M4400 4000 l0 -2400 1723 2 1722 3 0 520 0 520 -1070 5 -1070 5 0 410 0 410 988 3 987 2 0 520 0 520 -987 2 -988 3 0 410 0 410 1075 5 1075 5 3 523 2 522 -1730 0 -1730 0 0 -2400z"/><path d="M9623 6278 c-22 -68 -82 -251 -133 -408 -51 -157 -204 -620 -340 -1030 -136 -410 -289 -873 -340 -1030 -51 -157 -205 -622 -341 -1035 -137 -412 -276 -835 -310 -940 -34 -104 -65 -198 -70 -207 -5 -10 -9 -20 -9 -23 0 -3 316 -4 703 -3 l702 3 37 115 c20 63 50 162 68 220 60 201 92 306 119 395 16 50 34 111 41 138 l13 47 787 0 c618 0 790 -3 797 -12 5 -7 15 -33 22 -58 15 -55 63 -212 100 -335 16 -49 34 -110 41 -135 7 -25 21 -72 32 -105 10 -33 22 -73 27 -90 5 -16 19 -65 32 -107 l24 -78 696 0 c383 0 698 3 702 6 3 3 -1 24 -9 47 -26 77 -533 1608 -614 1857 -44 135 -192 583 -328 995 -137 413 -290 876 -340 1030 -51 154 -135 412 -189 573 l-96 292 -892 0 -891 0 -41 -122z m962 -1238 c7 -19 18 -55 25 -80 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 25 -85 41 -135 15 -49 42 -137 59 -195 17 -58 44 -145 59 -195 16 -49 34 -110 41 -135 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 24 -78 37 -118 12 -40 23 -75 23 -77 0 -3 -223 -5 -495 -5 -272 0 -495 2 -495 5 0 2 4 14 9 27 5 13 18 55 30 93 11 39 39 131 61 205 23 74 54 178 69 230 16 52 43 141 60 198 17 56 45 148 62 205 17 56 44 145 60 197 15 52 46 154 68 225 23 72 41 136 41 143 0 24 21 53 37 50 8 -2 21 -19 28 -38z"/><path d="M13230 4000 l0 -2400 635 0 635 0 0 1388 c0 857 4 1393 10 1402 8 13 11 13 24 0 8 -8 63 -139 121 -290 134 -345 190 -489 355 -915 142 -366 173 -447 389 -1005 78 -201 157 -403 175 -450 l34 -85 382 -3 c355 -2 384 -1 396 15 7 10 14 24 14 31 0 7 8 31 19 55 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 47 19 53 0 10 5 23 28 67 7 13 12 27 12 33 0 6 8 29 19 53 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 46 19 51 0 5 9 27 20 50 11 22 20 46 20 52 0 5 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 48 19 53 0 6 9 30 20 52 11 23 20 45 20 50 0 5 8 27 19 51 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 9 29 19 53 10 23 30 71 44 107 53 139 52 182 57 -1320 l5 -1385 638 -3 637 -2 0 2400 0 2400 -810 0 -810 0 -20 -42 c-11 -23 -20 -45 -20 -50 0 -5 -9 -28 -20 -53 -11 -25 -29 -65 -40 -90 -11 -25 -20 -51 -20 -58 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -18 -44 -30 -70 -12 -26 -21 -51 -21 -56 0 -8 -33 -82 -50 -114 -6 -10 -10 -22 -10 -28 0 -6 -9 -30 -20 -55 -11 -25 -29 -65 -40 -90 -11 -25 -20 -51 -20 -58 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -18 -44 -30 -70 -12 -26 -21 -51 -21 -56 0 -8 -33 -82 -50 -114 -6 -10 -10 -22 -10 -28 0 -6 -10 -32 -21 -58 -12 -26 -30 -66 -40 -89 -11 -24 -19 -49 -19 -56 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -16 -39 -24 -58 -8 -19 -28 -66 -43 -105 -15 -38 -31 -74 -35 -79 -5 -6 -9 -16 -9 -23 0 -7 -9 -33 -20 -58 -11 -25 -29 -65 -40 -90 -11 -25 -20 -48 -20 -53 0 -5 -9 -27 -21 -51 -17 -36 -24 -42 -47 -39 -29 3 -19 -18 -282 623 -56 138 -133 324 -170 415 -37 91 -109 266 -160 390 -51 124 -123 299 -160 390 -37 91 -114 278 -170 415 -56 138 -124 302 -150 365 l-48 115 -811 3 -811 2 0 -2400z"/><path d="M19142 5878 l3 -523 1123 -3 c617 -1 1122 -6 1122 -10 0 -10 -28 -50 -57 -82 -13 -14 -23 -28 -23 -31 0 -3 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -41 0 -4 -6 -13 -13 -20 -7 -7 -24 -29 -37 -48 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -30 -41 -36 -47 -7 -7 -22 -28 -33 -47 -21 -33 -21 -43 -19 -387 l3 -354 1958 -3 1957 -2 -2 522 -3 523 -1122 3 c-618 1 -1123 6 -1123 10 0 5 8 17 18 28 10 10 28 35 42 54 13 19 27 37 30 40 3 3 17 21 30 40 13 19 30 41 37 48 7 7 13 16 13 20 0 4 14 22 30 41 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 37 30 40 0 3 10 18 23 31 12 14 33 41 47 60 13 19 28 40 32 45 5 6 359 478 788 1050 l780 1040 0 363 0 362 -1960 0 -1960 0 2 -522z"/><path d="M24575 6388 c-3 -7 -4 -1086 -3 -2398 l3 -2385 1363 -3 1362 -2 -2 197 -3 198 -1142 3 -1143 2 0 2200 0 2200 -215 0 c-163 0 -217 -3 -220 -12z"/><path d="M29609 6373 c-33 -82 -58 -150 -75 -203 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -20 -56 -26 -70 -19 -45 -26 -64 -48 -130 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -76 -32 -90 -20 -47 -27 -65 -48 -130 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -22 -66 -35 -101 -51 -132 -5 -10 -9 -27 -9 -38 0 -20 5 -20 226 -18 l226 3 15 45 c7 25 18 54 23 65 16 38 42 110 66 185 14 41 29 84 33 95 17 39 43 111 71 195 28 84 54 156 71 195 4 11 19 54 33 95 24 75 50 147 66 185 5 11 23 63 40 115 17 52 35 104 40 115 5 11 19 48 32 83 l23 62 1006 0 1007 0 10 -27 c5 -16 22 -59 37 -98 15 -38 40 -108 55 -155 16 -47 38 -110 49 -140 44 -123 103 -287 111 -310 5 -14 31 -89 59 -167 179 -503 183 -515 187 -530 3 -10 58 -13 235 -13 181 0 230 3 226 13 -2 6 -19 53 -37 102 -17 50 -50 140 -72 200 -22 61 -57 157 -78 215 -21 58 -57 157 -80 220 -23 63 -60 165 -82 225 -22 61 -58 160 -80 220 -22 61 -58 160 -80 220 -22 61 -58 160 -80 220 -22 61 -57 157 -78 215 -49 134 -107 294 -160 440 -23 63 -59 162 -80 220 -21 58 -57 157 -80 220 -23 63 -60 165 -82 225 -22 61 -58 160 -80 220 -22 61 -57 157 -78 215 -21 58 -57 157 -80 220 -23 63 -59 162 -80 220 -49 134 -107 294 -160 440 -23 63 -60 162 -81 220 -21 58 -55 151 -75 208 l-38 102 -233 0 -233 0 -11 -27z m259 -555 c5 -7 21 -47 35 -88 15 -41 45 -127 67 -190 23 -63 46 -126 50 -140 5 -14 22 -63 40 -110 17 -47 49 -134 70 -195 21 -60 62 -175 90 -255 28 -80 69 -194 90 -255 22 -60 49 -137 61 -170 12 -33 44 -123 71 -200 27 -77 71 -201 98 -275 26 -74 71 -200 100 -280 28 -80 54 -154 57 -165 3 -11 10 -25 14 -31 5 -6 6 -14 2 -17 -11 -11 -1723 -8 -1723 3 0 9 22 72 40 115 5 11 23 63 40 115 17 52 35 104 40 115 4 11 11 29 15 40 4 11 30 83 57 160 60 168 143 402 153 430 4 11 11 29 15 40 5 11 23 63 40 115 17 52 35 104 40 115 16 38 42 110 66 185 14 41 29 84 33 95 17 39 43 111 71 195 27 83 53 155 70 195 5 11 23 63 40 115 17 52 36 106 42 120 21 49 27 66 49 135 23 71 36 95 49 95 4 0 12 -6 18 -12z"/><path d="M32390 4000 l0 -2400 930 0 c1025 0 1094 3 1340 61 319 76 589 253 748 492 45 67 57 90 96 180 22 50 53 147 65 202 6 28 15 71 21 97 25 114 8 464 -29 608 -57 225 -217 476 -378 596 -21 16 -44 35 -51 41 -16 16 -112 71 -172 100 -63 30 -153 59 -232 74 -54 10 -68 16 -68 31 0 10 6 18 13 18 19 0 166 61 231 96 32 17 86 51 119 75 60 44 187 166 187 180 0 4 6 14 13 21 17 18 69 106 90 151 46 101 47 103 77 227 55 227 29 569 -60 790 -30 76 -107 222 -128 246 -10 10 -24 28 -32 40 -29 41 -96 110 -150 154 -30 25 -57 48 -60 51 -8 11 -162 103 -202 122 -137 62 -214 86 -378 116 -153 28 -259 31 -1107 31 l-883 0 0 -2400z m1870 1991 c80 -18 202 -50 225 -60 124 -52 191 -95 271 -175 94 -94 165 -206 199 -316 56 -179 58 -387 6 -570 -20 -72 -25 -85 -56 -149 -101 -206 -282 -361 -507 -435 -157 -51 -157 -51 -883 -51 l-680 0 -3 875 c-1 481 0 881 3 889 4 11 117 13 688 9 483 -4 698 -9 737 -17z m53 -2160 c23 -5 69 -15 102 -21 80 -16 115 -28 225 -78 36 -17 131 -73 140 -82 3 -3 21 -17 40 -30 92 -64 196 -190 260 -315 75 -147 101 -262 101 -445 1 -204 -33 -320 -137 -475 -111 -165 -285 -284 -499 -340 -159 -42 -211 -45 -977 -45 l-738 0 0 920 0 920 721 0 c400 0 739 -4 762 -9z"/></g></g></svg></a>
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

${inArticleAd('lessonTop')}

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

${inArticleAd('lessonBottom')}

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

  // Emit a lesson-urls.txt for sitemap generation convenience.
  // Only on a FULL build. allLessonUrls holds just the slugs we were asked to build, so a
  // single-slug run (`build-lesson-pages.js pet-insurance`, which is what the nightly course
  // agent issues) would overwrite the site-wide list with that one course's 10 URLs — it cut
  // 747 lines to 10 the first time a pilot was created. Nothing reads this file today, so the
  // damage was cosmetic, but it left the file modified, and it is not a declared nightly
  // artifact: the dirty-guard then skipped content, build, deploy AND push on every
  // subsequent night while still exiting 0.
  if (!dryRun && !onlyId && !onlySlug) {
    const urlsFile = path.join(ROOT, 'tools', 'lesson-urls.txt');
    fs.writeFileSync(urlsFile, allLessonUrls.map(u => SITE + u).join('\n') + '\n');
    console.log(`URL list written to: tools/lesson-urls.txt (${allLessonUrls.length} URLs)`);
  }
}

main();
