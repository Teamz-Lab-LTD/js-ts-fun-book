#!/usr/bin/env node
/*
 * build-homepage.js  (learn.teamzlab.com — host-local)
 *
 * The homepage course grid + course ItemList JSON-LD were hardcoded, while every other surface
 * (c/, lessons/, llms-full.txt, sitemap) is generated from courses/. A course the nightly creates
 * would therefore appear everywhere EXCEPT the homepage. This closes that gap WITHOUT touching the
 * 16 hand-crafted cards:
 *
 *   - CARDS: build-homepage OWNS the region between <!-- BEGIN:GEN-COURSE-CARDS --> and
 *     <!-- END:GEN-COURSE-CARDS --> and rewrites it every run with a card (NEW badge) for each
 *     course present in courses/ but not already hand-linked on the page. Region is fully owned →
 *     idempotent, no duplicates, hand cards never touched. Empty region when nothing is missing.
 *   - ITEMLIST: the "Interactive Coding Courses" itemListElement is rebuilt deterministically:
 *     existing entries kept in order (dropping any whose course dir no longer exists — self-heal),
 *     missing courses appended, positions renumbered. With all courses present the output is
 *     byte-identical to the input (the golden-diff test for a safe first run).
 *
 * Fails hard (exit 1) if a marker or the ItemList is missing — never writes a half-spliced page.
 * Usage: node tools/build-homepage.js [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const INDEX = path.join(ROOT, 'index.html');
const SITE = 'https://learn.teamzlab.com';
const CARD_BEGIN = '<!-- BEGIN:GEN-COURSE-CARDS -->';
const CARD_END = '<!-- END:GEN-COURSE-CARDS -->';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, '').trim();
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const slugFromUrl = (u) => { const m = /\/c\/([^."/]+)\.html/.exec(u || ''); return m ? m[1] : null; };

function loadCourse(slug) {
  const cfgSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'config.js'), 'utf8')
    .replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'data.js'), 'utf8')
    .replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null; globalThis.__L = null;
  eval(cfgSrc); eval(dataSrc);
  const cfg = globalThis.__C, lessons = (globalThis.__L || []).filter(l => l && l.id != null);
  globalThis.__C = null; globalThis.__L = null;
  if (!cfg) throw new Error(`No COURSE_CONFIG in ${slug}`);
  return { cfg, lessons };
}

function listSlugs() {
  return fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js')));
}

function courseTitle(slug) { try { return stripTags(loadCourse(slug).cfg.title) || slug; } catch { return slug; } }

function renderCard(slug) {
  const { cfg, lessons } = loadCourse(slug);
  const title = stripTags(cfg.title) || slug;
  const subtitle = stripTags(cfg.subtitle || cfg.description || '');
  const quizzes = lessons.reduce((n, l) => n + (Array.isArray(l.quiz) ? l.quiz.length : (l.quiz ? 1 : 0)), 0);
  const points = lessons.reduce((n, l) => n + (Array.isArray(l.points) ? l.points.length : 0), 0);
  const langs = (cfg.forceLang || cfg.defaultLang) ? 1 : 8;
  const tags = (Array.isArray(cfg.topics) ? cfg.topics : []).slice(0, 10);
  const tagHtml = ['Free', 'No Signup', ...tags].map(t => `        <span class="tag">${esc(t)}</span>`).join('\n');
  return `    <a class="course-card" data-generated="1" href="c/${esc(slug)}.html" aria-label="Open ${esc(title)} course">
      <span class="badge">NEW</span>
      <h2>${esc(title)}</h2>
      <div class="subtitle">${esc(subtitle)}</div>
      <div class="stats">
        <div class="stat"><span class="stat-num">${lessons.length}</span><span class="stat-label">Lessons</span></div>
        <div class="stat"><span class="stat-num">${quizzes}</span><span class="stat-label">Quizzes</span></div>
        <div class="stat"><span class="stat-num">${points}</span><span class="stat-label">Teaching Points</span></div>
        <div class="stat"><span class="stat-num">${langs}</span><span class="stat-label">Languages</span></div>
      </div>
      <div class="tags">
${tagHtml}
      </div>
    </a>`;
}

// Rebuild the itemListElement body of the "Interactive Coding Courses" ItemList in place.
function rebuildItemList(html, allSlugs) {
  const anchor = html.search(/"@type":\s*"ItemList"[\s\S]*?"name":\s*"Interactive Coding Courses"/);
  if (anchor === -1) throw new Error('build-homepage: "Interactive Coding Courses" ItemList not found.');
  const arrKey = html.indexOf('"itemListElement"', anchor);
  const open = html.indexOf('[', arrKey);
  const close = html.indexOf('\n  ]', open);   // array closes with a 2-space-indented ]
  if (arrKey === -1 || open === -1 || close === -1)
    throw new Error('build-homepage: could not bound the ItemList array.');

  const body = html.slice(open + 1, close);
  // Existing entries, in order: capture name + url.
  const existing = [...body.matchAll(/\{[\s\S]*?"name":\s*("(?:[^"\\]|\\.)*")[\s\S]*?"url":\s*"([^"]+)"[\s\S]*?\}/g)]
    .map(m => ({ name: JSON.parse(m[1]), url: m[2], slug: slugFromUrl(m[2]) }));
  // Keep only courses that still exist (self-heal deletions), preserving order.
  const kept = existing.filter(e => e.slug && allSlugs.includes(e.slug));
  const listed = new Set(kept.map(e => e.slug));
  // Append any course not yet listed (grid order is applied by the caller before this runs).
  for (const slug of allSlugs) if (!listed.has(slug)) kept.push({ name: courseTitle(slug), url: `${SITE}/c/${slug}.html`, slug });

  const rebuilt = kept.map((e, i) =>
    `\n    {\n      "@type":"ListItem",\n      "position":${i + 1},\n      "name":${JSON.stringify(e.name)},\n      "url":"${e.url}"\n    }`
  ).join(',');
  return html.slice(0, open + 1) + rebuilt + html.slice(close);
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  let html = fs.readFileSync(INDEX, 'utf8');

  const regionRe = new RegExp(reEsc(CARD_BEGIN) + '[\\s\\S]*?' + reEsc(CARD_END));
  if (!regionRe.test(html))
    throw new Error(`build-homepage: ${CARD_BEGIN} … ${CARD_END} region not found in index.html — refusing to guess.`);

  const allSlugs = listSlugs();

  // Hand-linked slugs = course-cards OUTSIDE the owned region (blank the region to find them).
  const htmlHandOnly = html.replace(regionRe, CARD_BEGIN + CARD_END);
  const handSlugs = [...htmlHandOnly.matchAll(/class="course-card"[^>]*href="c\/([^."]+)\.html"/g)].map(m => m[1]);
  const missing = allSlugs.filter(s => !handSlugs.includes(s));

  // 1) Rewrite the owned card region (idempotent).
  const cards = missing.length ? `\n${missing.map(renderCard).join('\n\n')}\n    ` : '';
  html = html.replace(regionRe, `${CARD_BEGIN}${cards}${CARD_END}`);

  // 2) Rebuild the ItemList (missing courses now appear as cards, so they list after hand courses).
  html = rebuildItemList(html, [...handSlugs, ...missing.filter(s => !handSlugs.includes(s))]);

  console.log(`build-homepage: ${allSlugs.length} courses, ${missing.length} generated card(s).`);
  if (dryRun) { console.log('(dry run — not written)'); return; }
  fs.writeFileSync(INDEX, html);
  console.log('index.html written.');
}

main();
