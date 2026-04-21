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
      return `<li><a href="../learn.html?course=${esc(slug)}&amp;lesson=${esc(l.id)}"><span class="lesson-num">${esc(l.id)}</span><span class="lesson-title">${t}</span></a></li>`;
    }).join('\n        ');
    return `<div class="topic-block"><h3>Course lessons</h3><ol class="lesson-list">\n        ${items}\n      </ol></div>`;
  }
  return topicNames.map((topicName, i) => {
    const ids = topicMap[topicName] || [];
    const items = ids.map(id => {
      const l = idx[String(id)];
      if (!l) return '';
      const t = esc(stripTags(l.title || `Lesson ${id}`));
      return `<li><a href="../learn.html?course=${esc(slug)}&amp;lesson=${esc(id)}"><span class="lesson-num">${esc(id)}</span><span class="lesson-title">${t}</span></a></li>`;
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
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 229 180' fill='%23D9FE06'><path d='M103.64 0H0V53.18H103.64V0Z'/><path d='M228 53.1799H103.64V106.36H228V53.1799Z'/><path d='M158.84 106.37H103.64V177.59H158.83V106.37'/></svg>">

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
    <a href="https://teamzlab.com/" target="_blank" rel="noopener noreferrer" class="teamz-logo" aria-label="Teamz Lab"><svg width="110" height="18" viewBox="0 0 229 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.64 0H0V53.18H103.64V0Z"/><path d="M228 53.1799H103.64V106.36H228V53.1799Z"/><path d="M158.84 106.37H103.64V177.59H158.83V106.37"/></svg></a>
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
