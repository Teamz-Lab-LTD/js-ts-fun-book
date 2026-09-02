#!/usr/bin/env node
/*
 * build-landing-pages.js
 *
 * Reads every courses/<slug>/config.js + data.js and emits c/<slug>.html
 * as a full SEO landing page (Course + BreadcrumbList + FAQPage JSON-LD,
 * canonical to self, TL;DR for AI citability, full lesson outline from
 * config.topicMap, related-courses internal linking).
 *
 * Usage:
 *   node tools/build-landing-pages.js                 # all courses
 *   node tools/build-landing-pages.js <slug>          # one course
 *   node tools/build-landing-pages.js --dry-run       # preview without writing
 */

const fs = require('fs');
const path = require('path');
const { headSnippets, inArticleAd } = require('./lib/head-snippets');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const OUT_DIR = path.join(ROOT, 'c');
const SITE = 'https://learn.teamzlab.com';
const TODAY = new Date().toISOString().slice(0, 10);

// ──────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────
const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, '');
const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const escJSON = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
const truncate = (s, n) => {
  s = String(s || '').replace(/\s+/g, ' ').trim();
  if (s.length <= n) return s;
  // Cut at last space before limit; if no space found in last 20 chars, hard cut.
  let cut = s.slice(0, n - 1);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > n - 20) cut = cut.slice(0, lastSpace);
  return cut.replace(/[,;:—\-–\s]+$/, '').trim() + '…';
};
const isBengali = (s) => /[\u0980-\u09FF]/.test(String(s || ''));
const kebab = (s, maxLen = 60) => {
  s = String(s || '').replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-[^-]*$/, '');
  return s || 'lesson';
};
const lessonStaticUrl = (slug, lesson) => {
  const id = String(lesson.id).padStart(2, '0');
  return `../lessons/${slug}/${id}-${kebab(stripTags(lesson.title || `lesson-${lesson.id}`))}.html`;
};

// Wikipedia / authoritative sameAs for common tech/topic entities.
// Used on Course JSON-LD `about` for AI-search entity linking.
const ENTITY_SAMEAS = {
  'TypeScript': 'https://en.wikipedia.org/wiki/TypeScript',
  'JavaScript': 'https://en.wikipedia.org/wiki/JavaScript',
  'NestJS': 'https://docs.nestjs.com/',
  'Node.js': 'https://en.wikipedia.org/wiki/Node.js',
  'React': 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
  'Flutter': 'https://en.wikipedia.org/wiki/Flutter_(software)',
  'Dart': 'https://en.wikipedia.org/wiki/Dart_(programming_language)',
  'Kotlin': 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)',
  'Android': 'https://en.wikipedia.org/wiki/Android_(operating_system)',
  'MongoDB': 'https://en.wikipedia.org/wiki/MongoDB',
  'PostgreSQL': 'https://en.wikipedia.org/wiki/PostgreSQL',
  'Docker': 'https://en.wikipedia.org/wiki/Docker_(software)',
  'Git': 'https://en.wikipedia.org/wiki/Git',
  'Redis': 'https://en.wikipedia.org/wiki/Redis',
  'JWT Authentication': 'https://en.wikipedia.org/wiki/JSON_Web_Token',
  'JSON Web Token': 'https://en.wikipedia.org/wiki/JSON_Web_Token',
  'REST API': 'https://en.wikipedia.org/wiki/Representational_state_transfer',
  'WebSockets': 'https://en.wikipedia.org/wiki/WebSocket',
  'Prisma ORM': 'https://www.prisma.io/',
  'GraphQL': 'https://en.wikipedia.org/wiki/GraphQL',
  'Firebase': 'https://en.wikipedia.org/wiki/Firebase',
  'AWS S3': 'https://en.wikipedia.org/wiki/Amazon_S3',
  'IELTS': 'https://en.wikipedia.org/wiki/IELTS',
  'C++': 'https://en.wikipedia.org/wiki/C%2B%2B',
  'Competitive programming': 'https://en.wikipedia.org/wiki/Competitive_programming',
  'Jetpack Compose': 'https://en.wikipedia.org/wiki/Jetpack_Compose',
  'BLoC': 'https://bloclibrary.dev/',
  'Clean Architecture': 'https://en.wikipedia.org/wiki/Robert_C._Martin',
  'Microprocessor': 'https://en.wikipedia.org/wiki/Microprocessor'
};

function loadCourse(slug) {
  const cfgPath = path.join(COURSES_DIR, slug, 'config.js');
  const dataPath = path.join(COURSES_DIR, slug, 'data.js');
  const sandbox = { COURSE_CONFIG: null, LESSONS_DATA: null };

  // Run both files in a fresh VM-like scope. Eval with a wrapper that
  // captures `const COURSE_CONFIG` / `const LESSONS_DATA` into `sandbox`.
  const cfgSrc = fs.readFileSync(cfgPath, 'utf8').replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(dataPath, 'utf8').replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null;
  globalThis.__L = null;
  try { eval(cfgSrc); } catch (e) { throw new Error(`config.js eval failed for ${slug}: ${e.message}`); }
  try { eval(dataSrc); } catch (e) { throw new Error(`data.js eval failed for ${slug}: ${e.message}`); }
  if (!globalThis.__C) throw new Error(`No COURSE_CONFIG in ${slug}/config.js`);
  if (!Array.isArray(globalThis.__L)) throw new Error(`No LESSONS_DATA array in ${slug}/data.js`);
  const cfg = globalThis.__C;
  const lessons = globalThis.__L;
  globalThis.__C = null;
  globalThis.__L = null;
  return { cfg, lessons };
}

// Map lessons by id for quick lookup
function lessonIndex(lessons) {
  const idx = {};
  for (const l of lessons) if (l && l.id != null) idx[String(l.id)] = l;
  return idx;
}

// ──────────────────────────────────────────────────────────
// Page metadata derivation
// ──────────────────────────────────────────────────────────
function deriveMeta(slug, cfg, lessons) {
  const lessonCount = lessons.length;
  const fullTitle = stripTags(cfg.title || slug);
  const shortTitle = stripTags(cfg.shortTitle || cfg.title || slug);
  const subtitle = stripTags(cfg.subtitle || '');
  const description = (cfg.description || '').replace(/\{lessonCount\}/g, lessonCount);
  const topics = Array.isArray(cfg.topics) ? cfg.topics : [];
  const level = cfg.educationalLevel || 'Beginner to Intermediate';

  // Page <title>: keep under 62 chars. Include lesson count if room.
  const suffix = ' | Teamz Lab';
  const lessonTag = ` — ${lessonCount} Lessons`;
  const isBn = isBengali(fullTitle);
  const lessonTagBn = ` — ${lessonCount}টি পাঠ`;
  let pageTitle;
  const tag = isBn ? lessonTagBn : lessonTag;
  if ((fullTitle + tag + suffix).length <= 62) pageTitle = fullTitle + tag + suffix;
  else if ((fullTitle + suffix).length <= 62) pageTitle = fullTitle + suffix;
  else pageTitle = truncate(fullTitle, 62 - suffix.length) + suffix;

  // Meta description: keep 120-160 chars
  let metaDesc = stripTags(description || subtitle || fullTitle);
  metaDesc = truncate(metaDesc.replace(/\s+/g, ' ').trim(), 158);

  // Language detection
  const lang = isBengali(fullTitle + ' ' + subtitle) ? 'bn' : (cfg.lang || 'en');

  // Canonical / OG
  const canonical = `${SITE}/c/${slug}.html`;
  const ogImage = cfg.ogImage && cfg.ogImage.startsWith('http')
    ? cfg.ogImage
    : `${SITE}/og-image.png`;

  return {
    slug, lessonCount, fullTitle, shortTitle, subtitle, description,
    topics, level, pageTitle, metaDesc, lang, canonical, ogImage
  };
}

// ──────────────────────────────────────────────────────────
// Curriculum block from topicMap
// ──────────────────────────────────────────────────────────
function renderCurriculum(slug, cfg, lessons) {
  const idx = lessonIndex(lessons);
  const topicMap = cfg.topicMap || {};
  const topicNames = Object.keys(topicMap);
  if (topicNames.length === 0) {
    // Fallback: list lessons in order
    const items = lessons.map(l => {
      const t = esc(stripTags(l.title || `Lesson ${l.id}`));
      return `<li><a href="${lessonStaticUrl(slug, l)}"><span class="lesson-num">${esc(l.id)}</span><span class="lesson-title">${t}</span></a></li>`;
    }).join('\n        ');
    return `<div class="topic-block"><h3>Course lessons</h3><ol class="lesson-list">\n        ${items}\n      </ol></div>`;
  }
  return topicNames.map((topicName, i) => {
    const ids = topicMap[topicName] || [];
    const items = ids.map(id => {
      const l = idx[String(id)];
      if (!l) return '';
      const t = esc(stripTags(l.title || `Lesson ${id}`));
      return `<li><a href="${lessonStaticUrl(slug, l)}"><span class="lesson-num">${esc(id)}</span><span class="lesson-title">${t}</span></a></li>`;
    }).filter(Boolean).join('\n        ');
    if (!items) return '';
    return `<div class="topic-block">
      <h3>${i + 1}. ${esc(topicName)} <span class="topic-meta">(${ids.length} lesson${ids.length === 1 ? '' : 's'})</span></h3>
      <ol class="lesson-list">
        ${items}
      </ol>
    </div>`;
  }).filter(Boolean).join('\n\n    ');
}

// ──────────────────────────────────────────────────────────
// Related courses (picks 4 non-self courses)
// ──────────────────────────────────────────────────────────
function renderRelated(currentSlug, allMeta) {
  // Priority: ranking winners + high-demand + same-language
  const priority = [
    'class-9-math-bangla', 'flutter-dart-masterclass',
    'flutter-interview-mastery', 'android-interview-mastery',
    'js-ts-fun-book', 'ielts-mastery', 'career-launchpad'
  ];
  const pool = priority
    .filter(s => s !== currentSlug && allMeta[s])
    .slice(0, 4);
  if (pool.length < 4) {
    for (const m of Object.values(allMeta)) {
      if (m.slug !== currentSlug && !pool.includes(m.slug)) pool.push(m.slug);
      if (pool.length === 4) break;
    }
  }
  return pool.map(s => {
    const m = allMeta[s];
    return `<div class="feature-card"><h3><a href="/c/${esc(s)}.html">${esc(m.shortTitle)}</a></h3><p>${esc(truncate(stripTags(m.subtitle || m.description), 120))}</p></div>`;
  }).join('\n    ');
}

// ──────────────────────────────────────────────────────────
// Generic FAQ — works for any free course
// ──────────────────────────────────────────────────────────
function genericFAQ(lang) {
  if (lang === 'bn') {
    return [
      { q: 'এই কোর্সটি কি সত্যিই ফ্রি?', a: 'হ্যাঁ — ১০০% ফ্রি। কোনো সাইনআপ, ক্রেডিট কার্ড বা ইমেইল দরকার নেই। সব পাঠ, কুইজ ও সার্টিফিকেট সম্পূর্ণ ফ্রি।' },
      { q: 'কিছু ইনস্টল করতে হবে?', a: 'না। পুরো কোর্স ব্রাউজারে চলে — ফোন, ট্যাবলেট বা কম্পিউটার থেকে।' },
      { q: 'কোর্সটি শেষ করতে কতদিন লাগবে?', a: 'প্রতিটি পাঠ ১০ মিনিটের মতো। প্রতিদিন ১টি করে পাঠ করলে ১-২ মাসে শেষ।' },
      { q: 'কোনো সার্টিফিকেট পাব?', a: 'হ্যাঁ। সব পাঠ শেষ হলে আপনার নামে একটি সার্টিফিকেট তৈরি হবে যা LinkedIn এ শেয়ার করতে পারবেন।' }
    ];
  }
  return [
    { q: 'Is this course really free?', a: 'Yes — 100% free. No signup, no credit card, no email required. All lessons, quizzes, and certificate of completion are free forever.' },
    { q: 'Do I need to install anything?', a: 'No. The entire course runs in your browser on phone, tablet, or laptop. No downloads, no accounts.' },
    { q: 'How long does the course take?', a: 'About 10 minutes per lesson. One lesson per day takes about 1-2 months total. Many learners finish in 2-3 weeks by doing multiple lessons per sitting.' },
    { q: 'Will I get a certificate?', a: 'Yes. After completing all lessons, generate a personalized certificate with your name and share it on LinkedIn. Not accredited, but signals commitment to recruiters.' },
    { q: 'Do I need prior experience?', a: 'No. Every course is designed for complete beginners. Each lesson starts with a plain-English analogy before any technical concepts.' },
    { q: 'How is this different from YouTube tutorials?', a: 'Three things: interactive — quizzes and hands-on challenges after every lesson; structured — a deliberate learning path, not random videos; gamified — XP, streaks, spaced repetition so knowledge actually sticks.' }
  ];
}

// ──────────────────────────────────────────────────────────
// Page template
// ──────────────────────────────────────────────────────────
function renderPage(slug, cfg, lessons, allMeta) {
  const m = allMeta[slug];
  const curriculum = renderCurriculum(slug, cfg, lessons);
  const related = renderRelated(slug, allMeta);
  const faq = genericFAQ(m.lang);
  const lessonUrl = `../learn.html?course=${slug}`;

  const aboutEntities = (m.topics || []).slice(0, 10).map(t => {
    const obj = { "@type": "Thing", "name": t };
    if (ENTITY_SAMEAS[t]) obj.sameAs = ENTITY_SAMEAS[t];
    return obj;
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": escJSON(m.fullTitle),
    "description": escJSON(m.metaDesc),
    "url": m.canonical,
    "image": m.ogImage,
    "inLanguage": m.lang,
    "educationalLevel": escJSON(m.level),
    "teaches": m.topics.slice(0, 12),
    "provider": { "@type": "Organization", "name": "Teamz Lab", "url": "https://teamzlab.com" },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "category": "Free" },
    "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Online", "inLanguage": m.lang },
    "numberOfLessons": m.lessonCount,
    "datePublished": "2025-03-01",
    "dateModified": TODAY,
    "about": aboutEntities,
    "author": { "@type": "Organization", "name": "Teamz Lab", "url": "https://teamzlab.com", "sameAs": ["https://github.com/Teamz-Lab-LTD"] }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": m.shortTitle, "item": m.canonical }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  const topicGrid = m.topics.slice(0, 16).map(t => `<div class="topic-item">${esc(t)}</div>`).join('\n    ');

  const tldr = m.lang === 'bn'
    ? `<strong>সারসংক্ষেপ:</strong> ${esc(m.lessonCount)}টি ইন্টারেক্টিভ পাঠের ফ্রি কোর্স। ব্রাউজারে চলে, সাইনআপ ছাড়া। কুইজ, ফ্ল্যাশকার্ড ও স্পেসড রিপিটিশন।`
    : `<strong>TL;DR:</strong> A free, interactive ${m.lessonCount}-lesson course that runs entirely in your browser. No signup, no ads. Covers ${m.topics.slice(0, 4).map(esc).join(', ')}${m.topics.length > 4 ? ', and more' : ''}. Authored by Teamz Lab, a software studio that ships production apps.`;

  return `<!DOCTYPE html>
<html lang="${esc(m.lang)}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(m.pageTitle)}</title>
<meta name="description" content="${esc(m.metaDesc)}">
<meta name="author" content="Teamz Lab">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="date" content="${TODAY}">
<meta name="last-modified" content="${TODAY}">
<link rel="canonical" href="${m.canonical}">
<link rel="alternate" hreflang="${esc(m.lang)}" href="${m.canonical}">
<link rel="alternate" hreflang="x-default" href="${m.canonical}">

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(truncate(m.fullTitle, 90))}">
<meta property="og:description" content="${esc(m.metaDesc)}">
<meta property="og:image" content="${esc(m.ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(truncate(m.fullTitle, 90))}">
<meta property="og:url" content="${m.canonical}">
<meta property="og:site_name" content="Teamz Lab Learning">
<meta property="og:locale" content="${m.lang === 'bn' ? 'bn_BD' : 'en_US'}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(truncate(m.fullTitle, 70))}">
<meta name="twitter:description" content="${esc(m.metaDesc)}">
<meta name="twitter:image" content="${esc(m.ogImage)}">
<meta name="twitter:site" content="@TeamzLab">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
${headSnippets(slug)}
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' fill='%23D9FE06'><rect x='0' y='0' width='200' height='200' opacity='.6'/><rect x='200' y='0' width='200' height='400'/><rect x='400' y='200' width='200' height='200' opacity='.6'/></svg>">

<script type="application/ld+json">
${JSON.stringify(courseSchema, null, 2).replace(/"teaches":\s*\[[^\]]*\]/, `"teaches": [${m.topics.slice(0, 12).map(t => `"${escJSON(t)}"`).join(', ')}]`)}
</script>

<script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
</script>

<script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
</script>

<style>
:root{--bg:#F4F5F5;--surface:#FFFFFF;--text:#12151A;--text-muted:rgba(18,21,26,0.65);--border:#DDDDDD;--accent:#D9FE06;--accent-fg:#12151A;--font:'Poppins',sans-serif;--text-h1:40px;--text-h2:32px;--text-h3:28px;--text-h4:24px;--text-h5:20px;--text-h6:18px;--text-lg:16px;--text-md:14px;--text-sm:12px;--text-xs:10px;--lh:150%}
html[data-theme="dark"]{--bg:#12151A;--surface:#1D1F25;--text:#FFFFFF;--text-muted:rgba(255,255,255,0.7);--border:rgba(255,255,255,0.15);--accent-fg:#FFFFFF}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--text);font-family:var(--font);font-size:var(--text-lg);line-height:var(--lh);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:var(--accent-fg);text-decoration:none}a:hover{text-decoration:underline}
.skip-link{position:absolute;left:50%;transform:translateX(-50%);top:-100%;background:var(--accent);color:#12151A;border-radius:0 0 10px 10px;padding:0.7rem 1rem;font-weight:700;z-index:200}.skip-link:focus{top:0}
.container{max-width:960px;margin:0 auto;padding:3rem 1.5rem}
.site-header{position:sticky;top:0;z-index:100;background:var(--bg);border-bottom:1px solid var(--border);padding:0.7rem 1.5rem}
.site-header__inner{max-width:960px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.teamz-logo{display:inline-flex;align-items:center;color:var(--text)}.teamz-logo:hover{color:var(--accent-fg);text-decoration:none}
.nav-actions{display:flex;align-items:center;gap:0.8rem}
.nav-link{color:var(--text-muted);font-size:var(--text-md);font-weight:500}.nav-link:hover{color:var(--accent-fg);text-decoration:none}
.theme-toggle{width:36px;height:36px;border:none;background:transparent;color:var(--text-muted);cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center}.theme-toggle:hover{color:var(--text)}.theme-toggle svg{width:20px;height:20px}
.breadcrumb{font-size:var(--text-sm);color:var(--text-muted);margin-bottom:1.5rem}.breadcrumb a{color:var(--text-muted)}.breadcrumb a:hover{color:var(--accent-fg)}.breadcrumb span[aria-current]{color:var(--text)}
.tldr{background:var(--surface);border-left:3px solid var(--accent);border-radius:8px;padding:1rem 1.2rem;margin:0 auto 1.5rem;max-width:720px;font-size:var(--text-md);line-height:var(--lh)}.tldr strong{color:var(--accent-fg)}
.updated-line{text-align:center;font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem}
.hero{text-align:center;padding:1rem 0 2.5rem}
.hero .badge-row{display:flex;gap:0.5rem;justify-content:center;margin-bottom:1.2rem;flex-wrap:wrap}
.badge{display:inline-block;padding:0.25rem 0.7rem;border-radius:22px;font-size:var(--text-xs);font-weight:700;letter-spacing:0.5px;text-transform:uppercase}.badge.free{background:var(--accent);color:#12151A}.badge.level{background:var(--surface);color:var(--text);border:1px solid var(--border)}
.hero h1{font-size:var(--text-h1);font-weight:800;line-height:1.2;margin-bottom:0.8rem;max-width:780px;margin-left:auto;margin-right:auto}.hero h1 .accent{color:var(--accent-fg)}
.hero .lede{font-size:var(--text-h6);color:var(--text-muted);max-width:660px;margin:0 auto 1.8rem;line-height:var(--lh)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;max-width:720px;margin:0 auto 2rem}
.stat{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1rem}
.stat-num{font-size:var(--text-h3);font-weight:800;color:var(--accent-fg);display:block;line-height:1.1}
.stat-label{font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-top:0.3rem}
.cta-row{display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap;margin-top:0.5rem}
.btn{display:inline-block;padding:12px 22px;height:48px;border-radius:24px;font-weight:700;font-size:var(--text-lg);transition:transform 0.2s,box-shadow 0.2s}
.btn--primary{background:var(--accent);color:#12151A;border:1px solid var(--accent)}.btn--primary:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(217,254,6,0.35);text-decoration:none}
.btn--ghost{background:transparent;color:var(--text);border:1px solid var(--border)}.btn--ghost:hover{border-color:var(--accent-fg);color:var(--accent-fg);text-decoration:none}
section{margin-top:3rem}
section h2{font-size:var(--text-h3);font-weight:800;margin-bottom:0.4rem;line-height:1.2}section h2 .accent{color:var(--accent-fg)}
section .section-lede{color:var(--text-muted);font-size:var(--text-md);margin-bottom:1.5rem;max-width:680px;line-height:var(--lh)}
.topic-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0.6rem}
.topic-item{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:0.9rem 1rem;font-size:var(--text-md);font-weight:600;display:flex;align-items:center;gap:0.5rem}
.topic-item::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent-fg);display:inline-block}
.topics{display:grid;gap:1.2rem}
.topic-block{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:1.5rem}
.topic-block h3{font-size:var(--text-h5);font-weight:700;margin-bottom:0.3rem}
.topic-block .topic-meta{font-size:var(--text-sm);color:var(--text-muted);margin-bottom:1rem}
.lesson-list{list-style:none;display:grid;gap:0.4rem}
.lesson-list li{padding:0;border-radius:8px;border:1px solid transparent;transition:background 0.15s,border-color 0.15s}
.lesson-list li:hover{background:var(--bg);border-color:var(--border)}
.lesson-list a{color:var(--text);display:flex;gap:0.7rem;width:100%;align-items:baseline;padding:0.55rem 0.7rem}.lesson-list a:hover{color:var(--accent-fg);text-decoration:none}
.lesson-num{flex-shrink:0;width:32px;font-variant-numeric:tabular-nums;font-weight:700;color:var(--accent-fg);font-size:var(--text-sm)}
.lesson-title{font-size:var(--text-md);line-height:1.4}
.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.feature-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.3rem}
.feature-card h3{font-size:var(--text-lg);font-weight:700;margin-bottom:0.3rem;color:var(--accent-fg)}
.feature-card p{font-size:var(--text-sm);color:var(--text-muted)}
.faq-grid{display:grid;gap:0.7rem}
.faq-item{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.3rem}
.faq-item h3{font-size:var(--text-md);font-weight:700;margin-bottom:0.35rem;color:var(--text)}
.faq-item p{font-size:var(--text-sm);color:var(--text-muted);line-height:var(--lh)}
.footer{margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border);text-align:center;color:var(--text-muted);font-size:var(--text-sm)}
.footer a{color:var(--accent-fg)}.footer p{margin-bottom:0.5rem}
@media(max-width:640px){.container{padding:2rem 1rem}.hero h1{font-size:var(--text-h3)}.hero .lede{font-size:var(--text-lg)}section h2{font-size:var(--text-h4)}.topic-block{padding:1.2rem}}
</style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to content</a>

<header class="site-header">
  <div class="site-header__inner">
    <a href="https://teamzlab.com/" target="_blank" rel="noopener noreferrer" class="teamz-logo" aria-label="Teamz Lab"><svg width="110" height="18" viewBox="0 0 2445 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" opacity=".6"/><rect x="200" y="0" width="200" height="400"/><rect x="400" y="200" width="200" height="200" opacity=".6"/><g transform="translate(664,0) scale(0.5)"><g transform="translate(0,800) scale(0.1,-0.1)"><path d="M0 5875 l0 -525 720 0 720 0 0 -1875 0 -1875 643 2 642 3 3 1873 2 1872 720 0 720 0 2 521 c2 286 1 523 -1 525 -2 2 -942 4 -2088 4 l-2083 0 0 -525z"/><path d="M4400 4000 l0 -2400 1723 2 1722 3 0 520 0 520 -1070 5 -1070 5 0 410 0 410 988 3 987 2 0 520 0 520 -987 2 -988 3 0 410 0 410 1075 5 1075 5 3 523 2 522 -1730 0 -1730 0 0 -2400z"/><path d="M9623 6278 c-22 -68 -82 -251 -133 -408 -51 -157 -204 -620 -340 -1030 -136 -410 -289 -873 -340 -1030 -51 -157 -205 -622 -341 -1035 -137 -412 -276 -835 -310 -940 -34 -104 -65 -198 -70 -207 -5 -10 -9 -20 -9 -23 0 -3 316 -4 703 -3 l702 3 37 115 c20 63 50 162 68 220 60 201 92 306 119 395 16 50 34 111 41 138 l13 47 787 0 c618 0 790 -3 797 -12 5 -7 15 -33 22 -58 15 -55 63 -212 100 -335 16 -49 34 -110 41 -135 7 -25 21 -72 32 -105 10 -33 22 -73 27 -90 5 -16 19 -65 32 -107 l24 -78 696 0 c383 0 698 3 702 6 3 3 -1 24 -9 47 -26 77 -533 1608 -614 1857 -44 135 -192 583 -328 995 -137 413 -290 876 -340 1030 -51 154 -135 412 -189 573 l-96 292 -892 0 -891 0 -41 -122z m962 -1238 c7 -19 18 -55 25 -80 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 25 -85 41 -135 15 -49 42 -137 59 -195 17 -58 44 -145 59 -195 16 -49 34 -110 41 -135 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 20 -70 30 -100 10 -30 23 -75 30 -100 7 -25 24 -78 37 -118 12 -40 23 -75 23 -77 0 -3 -223 -5 -495 -5 -272 0 -495 2 -495 5 0 2 4 14 9 27 5 13 18 55 30 93 11 39 39 131 61 205 23 74 54 178 69 230 16 52 43 141 60 198 17 56 45 148 62 205 17 56 44 145 60 197 15 52 46 154 68 225 23 72 41 136 41 143 0 24 21 53 37 50 8 -2 21 -19 28 -38z"/><path d="M13230 4000 l0 -2400 635 0 635 0 0 1388 c0 857 4 1393 10 1402 8 13 11 13 24 0 8 -8 63 -139 121 -290 134 -345 190 -489 355 -915 142 -366 173 -447 389 -1005 78 -201 157 -403 175 -450 l34 -85 382 -3 c355 -2 384 -1 396 15 7 10 14 24 14 31 0 7 8 31 19 55 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 47 19 53 0 10 5 23 28 67 7 13 12 27 12 33 0 6 8 29 19 53 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 46 19 51 0 5 9 27 20 50 11 22 20 46 20 52 0 5 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 8 29 19 53 10 23 33 80 51 127 18 47 41 104 51 127 11 24 19 48 19 53 0 6 9 30 20 52 11 23 20 45 20 50 0 5 8 27 19 51 10 23 24 58 31 77 7 19 21 54 31 77 11 24 19 47 19 53 0 6 5 19 10 30 6 11 15 29 20 40 6 11 10 24 10 30 0 6 9 29 19 53 10 23 30 71 44 107 53 139 52 182 57 -1320 l5 -1385 638 -3 637 -2 0 2400 0 2400 -810 0 -810 0 -20 -42 c-11 -23 -20 -45 -20 -50 0 -5 -9 -28 -20 -53 -11 -25 -29 -65 -40 -90 -11 -25 -20 -51 -20 -58 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -18 -44 -30 -70 -12 -26 -21 -51 -21 -56 0 -8 -33 -82 -50 -114 -6 -10 -10 -22 -10 -28 0 -6 -9 -30 -20 -55 -11 -25 -29 -65 -40 -90 -11 -25 -20 -51 -20 -58 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -18 -44 -30 -70 -12 -26 -21 -51 -21 -56 0 -8 -33 -82 -50 -114 -6 -10 -10 -22 -10 -28 0 -6 -10 -32 -21 -58 -12 -26 -30 -66 -40 -89 -11 -24 -19 -49 -19 -56 0 -7 -4 -17 -9 -23 -4 -5 -20 -40 -35 -79 -15 -38 -35 -86 -43 -105 -8 -19 -19 -45 -24 -57 -5 -13 -13 -33 -18 -45 -5 -13 -16 -39 -24 -58 -8 -19 -28 -66 -43 -105 -15 -38 -31 -74 -35 -79 -5 -6 -9 -16 -9 -23 0 -7 -9 -33 -20 -58 -11 -25 -29 -65 -40 -90 -11 -25 -20 -48 -20 -53 0 -5 -9 -27 -21 -51 -17 -36 -24 -42 -47 -39 -29 3 -19 -18 -282 623 -56 138 -133 324 -170 415 -37 91 -109 266 -160 390 -51 124 -123 299 -160 390 -37 91 -114 278 -170 415 -56 138 -124 302 -150 365 l-48 115 -811 3 -811 2 0 -2400z"/><path d="M19142 5878 l3 -523 1123 -3 c617 -1 1122 -6 1122 -10 0 -10 -28 -50 -57 -82 -13 -14 -23 -28 -23 -31 0 -3 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -40 0 -4 -13 -22 -30 -40 -16 -19 -30 -37 -30 -41 0 -4 -6 -13 -13 -20 -7 -7 -24 -29 -37 -48 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -27 -37 -30 -40 -3 -3 -17 -21 -30 -40 -13 -19 -30 -41 -36 -47 -7 -7 -22 -28 -33 -47 -21 -33 -21 -43 -19 -387 l3 -354 1958 -3 1957 -2 -2 522 -3 523 -1122 3 c-618 1 -1123 6 -1123 10 0 5 8 17 18 28 10 10 28 35 42 54 13 19 27 37 30 40 3 3 17 21 30 40 13 19 30 41 37 48 7 7 13 16 13 20 0 4 14 22 30 41 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 36 30 40 0 3 14 21 30 40 17 18 30 37 30 40 0 3 10 18 23 31 12 14 33 41 47 60 13 19 28 40 32 45 5 6 359 478 788 1050 l780 1040 0 363 0 362 -1960 0 -1960 0 2 -522z"/><path d="M24575 6388 c-3 -7 -4 -1086 -3 -2398 l3 -2385 1363 -3 1362 -2 -2 197 -3 198 -1142 3 -1143 2 0 2200 0 2200 -215 0 c-163 0 -217 -3 -220 -12z"/><path d="M29609 6373 c-33 -82 -58 -150 -75 -203 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -19 -54 -24 -65 -14 -34 -41 -108 -56 -155 -8 -25 -20 -56 -26 -70 -19 -45 -26 -64 -48 -130 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -21 -65 -28 -83 -48 -130 -6 -14 -20 -54 -32 -90 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -12 -36 -26 -76 -32 -90 -20 -47 -27 -65 -48 -130 -12 -36 -26 -75 -31 -87 -5 -13 -13 -33 -18 -45 -5 -13 -19 -52 -31 -88 -22 -66 -35 -101 -51 -132 -5 -10 -9 -27 -9 -38 0 -20 5 -20 226 -18 l226 3 15 45 c7 25 18 54 23 65 16 38 42 110 66 185 14 41 29 84 33 95 17 39 43 111 71 195 28 84 54 156 71 195 4 11 19 54 33 95 24 75 50 147 66 185 5 11 23 63 40 115 17 52 35 104 40 115 5 11 19 48 32 83 l23 62 1006 0 1007 0 10 -27 c5 -16 22 -59 37 -98 15 -38 40 -108 55 -155 16 -47 38 -110 49 -140 44 -123 103 -287 111 -310 5 -14 31 -89 59 -167 179 -503 183 -515 187 -530 3 -10 58 -13 235 -13 181 0 230 3 226 13 -2 6 -19 53 -37 102 -17 50 -50 140 -72 200 -22 61 -57 157 -78 215 -21 58 -57 157 -80 220 -23 63 -60 165 -82 225 -22 61 -58 160 -80 220 -22 61 -58 160 -80 220 -22 61 -58 160 -80 220 -22 61 -57 157 -78 215 -49 134 -107 294 -160 440 -23 63 -59 162 -80 220 -21 58 -57 157 -80 220 -23 63 -60 165 -82 225 -22 61 -58 160 -80 220 -22 61 -57 157 -78 215 -21 58 -57 157 -80 220 -23 63 -59 162 -80 220 -49 134 -107 294 -160 440 -23 63 -60 162 -81 220 -21 58 -55 151 -75 208 l-38 102 -233 0 -233 0 -11 -27z m259 -555 c5 -7 21 -47 35 -88 15 -41 45 -127 67 -190 23 -63 46 -126 50 -140 5 -14 22 -63 40 -110 17 -47 49 -134 70 -195 21 -60 62 -175 90 -255 28 -80 69 -194 90 -255 22 -60 49 -137 61 -170 12 -33 44 -123 71 -200 27 -77 71 -201 98 -275 26 -74 71 -200 100 -280 28 -80 54 -154 57 -165 3 -11 10 -25 14 -31 5 -6 6 -14 2 -17 -11 -11 -1723 -8 -1723 3 0 9 22 72 40 115 5 11 23 63 40 115 17 52 35 104 40 115 4 11 11 29 15 40 4 11 30 83 57 160 60 168 143 402 153 430 4 11 11 29 15 40 5 11 23 63 40 115 17 52 35 104 40 115 16 38 42 110 66 185 14 41 29 84 33 95 17 39 43 111 71 195 27 83 53 155 70 195 5 11 23 63 40 115 17 52 36 106 42 120 21 49 27 66 49 135 23 71 36 95 49 95 4 0 12 -6 18 -12z"/><path d="M32390 4000 l0 -2400 930 0 c1025 0 1094 3 1340 61 319 76 589 253 748 492 45 67 57 90 96 180 22 50 53 147 65 202 6 28 15 71 21 97 25 114 8 464 -29 608 -57 225 -217 476 -378 596 -21 16 -44 35 -51 41 -16 16 -112 71 -172 100 -63 30 -153 59 -232 74 -54 10 -68 16 -68 31 0 10 6 18 13 18 19 0 166 61 231 96 32 17 86 51 119 75 60 44 187 166 187 180 0 4 6 14 13 21 17 18 69 106 90 151 46 101 47 103 77 227 55 227 29 569 -60 790 -30 76 -107 222 -128 246 -10 10 -24 28 -32 40 -29 41 -96 110 -150 154 -30 25 -57 48 -60 51 -8 11 -162 103 -202 122 -137 62 -214 86 -378 116 -153 28 -259 31 -1107 31 l-883 0 0 -2400z m1870 1991 c80 -18 202 -50 225 -60 124 -52 191 -95 271 -175 94 -94 165 -206 199 -316 56 -179 58 -387 6 -570 -20 -72 -25 -85 -56 -149 -101 -206 -282 -361 -507 -435 -157 -51 -157 -51 -883 -51 l-680 0 -3 875 c-1 481 0 881 3 889 4 11 117 13 688 9 483 -4 698 -9 737 -17z m53 -2160 c23 -5 69 -15 102 -21 80 -16 115 -28 225 -78 36 -17 131 -73 140 -82 3 -3 21 -17 40 -30 92 -64 196 -190 260 -315 75 -147 101 -262 101 -445 1 -204 -33 -320 -137 -475 -111 -165 -285 -284 -499 -340 -159 -42 -211 -45 -977 -45 l-738 0 0 920 0 920 721 0 c400 0 739 -4 762 -9z"/></g></g></svg></a>
    <nav class="nav-actions">
      <a class="nav-link" href="/">${m.lang === 'bn' ? 'সব কোর্স' : 'All Courses'}</a>
      <a class="nav-link" href="https://teamzlab.com" target="_blank" rel="noopener">${m.lang === 'bn' ? 'Teamz Lab এ যোগাযোগ' : 'Hire Teamz Lab'}</a>
      <button class="theme-toggle" type="button" aria-label="Toggle theme" onclick="toggleTheme()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></button>
    </nav>
  </div>
</header>

<main id="main-content" class="container">

<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/">${m.lang === 'bn' ? 'হোম' : 'Home'}</a> / <span aria-current="page">${esc(m.shortTitle)}</span>
</nav>

<section class="hero">
  <p class="updated-line">${m.lang === 'bn' ? 'আপডেট এপ্রিল ২০২৬' : 'Updated April 2026'}</p>
  <div class="badge-row">
    <span class="badge free">${m.lang === 'bn' ? '১০০% ফ্রি' : '100% Free'}</span>
    <span class="badge level">${esc(truncate(m.level, 32))}</span>
    <span class="badge level">${m.lang === 'bn' ? 'সাইনআপ ছাড়া' : 'No Signup'}</span>
  </div>
  <h1>${esc(m.fullTitle)}</h1>
  ${m.subtitle ? `<p class="lede">${esc(m.subtitle)}</p>` : ''}
  <aside class="tldr" aria-label="TL;DR summary">${tldr}</aside>

  <div class="stats">
    <div class="stat"><span class="stat-num">${m.lessonCount}</span><span class="stat-label">${m.lang === 'bn' ? 'পাঠ' : 'Lessons'}</span></div>
    <div class="stat"><span class="stat-num">~10 min</span><span class="stat-label">${m.lang === 'bn' ? 'প্রতি পাঠ' : 'Per Lesson'}</span></div>
    <div class="stat"><span class="stat-num">$0</span><span class="stat-label">${m.lang === 'bn' ? 'চিরকাল' : 'Forever'}</span></div>
    <div class="stat"><span class="stat-num">${Object.keys(cfg.topicMap || {}).length || m.topics.length}</span><span class="stat-label">${m.lang === 'bn' ? 'টপিক' : 'Topics'}</span></div>
  </div>

  <div class="cta-row">
    <a class="btn btn--primary" href="${esc(lessonUrl)}">${m.lang === 'bn' ? 'এখন শুরু করুন — ফ্রি' : 'Start Lesson 1 — Free'}</a>
    <a class="btn btn--ghost" href="#curriculum">${m.lang === 'bn' ? 'পাঠ তালিকা' : 'See Curriculum'}</a>
  </div>
</section>

${m.topics.length ? `<section id="what-youll-learn">
  <h2>${m.lang === 'bn' ? 'আপনি যা শিখবেন' : 'What you\'ll learn'}</h2>
  <div class="topic-grid">
    ${topicGrid}
  </div>
</section>` : ''}

<section id="curriculum">
  <h2>${m.lang === 'bn' ? 'সম্পূর্ণ পাঠ তালিকা' : 'Full curriculum'}</h2>
  <p class="section-lede">${m.lang === 'bn' ? `${m.lessonCount}টি পাঠ, টপিক অনুসারে সাজানো। যেকোনো পাঠে ক্লিক করে শুরু করুন।` : `${m.lessonCount} lessons organized by topic. Click any lesson to jump straight in.`}</p>
  <div class="topics">
    ${curriculum}
  </div>
  <div class="cta-row" style="margin-top:2rem;">
    <a class="btn btn--primary" href="${esc(lessonUrl)}">${m.lang === 'bn' ? 'কোর্স শুরু করুন — ফ্রি' : 'Start the Course — Free'}</a>
  </div>
</section>

${inArticleAd('landing')}

<section id="related-courses">
  <h2>${m.lang === 'bn' ? 'সম্পর্কিত ফ্রি কোর্স' : 'Related free courses'}</h2>
  <div class="feature-grid">
    ${related}
  </div>
</section>

<section id="faq">
  <h2>${m.lang === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন' : 'Frequently asked questions'}</h2>
  <div class="faq-grid">
    ${faq.map(f => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('\n    ')}
  </div>
</section>

<footer class="footer">
  <p>${m.lang === 'bn' ? 'তৈরি করেছে' : 'Built by'} <a href="https://teamzlab.com" target="_blank" rel="noopener">Teamz Lab</a> &mdash; ${m.lang === 'bn' ? 'আমরা বিশ্বব্যাপী ক্লায়েন্টদের জন্য মোবাইল ও ওয়েব অ্যাপ তৈরি করি।' : 'we build production mobile and web apps for clients worldwide. This free course is how we give back.'}</p>
  <p><a href="/">${m.lang === 'bn' ? 'সব ফ্রি কোর্স' : 'All free courses'}</a> &middot; <a href="https://teamzlab.com" target="_blank" rel="noopener">${m.lang === 'bn' ? 'Teamz Lab কে হায়ার করুন' : 'Hire Teamz Lab'}</a> &middot; <a href="https://github.com/Teamz-Lab-LTD" target="_blank" rel="noopener">GitHub</a></p>
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
  const only = args.filter(a => !a.startsWith('--'));

  const allSlugs = fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js'))
  );

  const targets = only.length ? only : allSlugs;

  // Load all configs first (needed for cross-linking in renderRelated)
  console.log(`Loading ${allSlugs.length} course configs…`);
  const allMeta = {};
  const allCache = {};
  for (const slug of allSlugs) {
    try {
      const { cfg, lessons } = loadCourse(slug);
      allMeta[slug] = deriveMeta(slug, cfg, lessons);
      allCache[slug] = { cfg, lessons };
    } catch (e) {
      console.error(`  ✗ ${slug}: ${e.message}`);
    }
  }

  console.log(`\nGenerating ${targets.length} landing page(s)${dryRun ? ' (dry run)' : ''}:`);
  if (!dryRun && !fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0, fail = 0;
  for (const slug of targets) {
    try {
      const { cfg, lessons } = allCache[slug] || loadCourse(slug);
      const html = renderPage(slug, cfg, lessons, allMeta);
      const outPath = path.join(OUT_DIR, `${slug}.html`);
      if (!dryRun) fs.writeFileSync(outPath, html);
      console.log(`  ✓ ${slug}  (${lessons.length} lessons, ${(html.length / 1024).toFixed(1)}kb)`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${slug}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} succeeded, ${fail} failed.`);
}

main();
