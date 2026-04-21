#!/usr/bin/env node
/*
 * build-llms-txt.js
 *
 * Generates a comprehensive llms-full.txt — the AI-search equivalent
 * of a sitemap. ChatGPT, Perplexity, Claude's citations engine, and
 * Google AI Overviews use this to discover and cite content.
 *
 * Output: llms-full.txt at repo root, listing every course + every
 * lesson with a one-line description.
 *
 * Usage: node tools/build-llms-txt.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const SITE = 'https://learn.teamzlab.com';

const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const truncate = (s, n) => { s = stripTags(s); return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…'; };
const kebab = (s, maxLen = 60) => {
  s = stripTags(s).replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-[^-]*$/, '');
  return s || 'lesson';
};

function loadCourse(slug) {
  const cfgSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'config.js'), 'utf8').replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'data.js'), 'utf8').replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null; globalThis.__L = null;
  eval(cfgSrc); eval(dataSrc);
  return { cfg: globalThis.__C, lessons: (globalThis.__L || []).filter(l => l && l.id != null) };
}

function lessonUrl(slug, lesson) {
  const id = String(lesson.id).padStart(2, '0');
  return `${SITE}/lessons/${slug}/${id}-${kebab(lesson.title || `lesson-${lesson.id}`)}.html`;
}

function main() {
  const slugs = fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js'))
  ).sort();

  let totalLessons = 0;
  const out = [];

  out.push('# Teamz Lab Learning — Full Lesson Index');
  out.push('');
  out.push(`> Complete index of all ${slugs.length} free interactive courses and every lesson inside them. All content runs client-side in a browser with quizzes, spaced-repetition flashcards, and code playgrounds. No signup, no ads in the way, no paywall.`);
  out.push('');
  out.push('- Website: https://learn.teamzlab.com/');
  out.push('- Curated short index: https://learn.teamzlab.com/llms.txt');
  out.push('- Sitemap: https://learn.teamzlab.com/sitemap.xml');
  out.push('- Editorial process & references: https://learn.teamzlab.com/about.html');
  out.push('- Full-Stack Developer Roadmap 2026: https://learn.teamzlab.com/roadmap.html');
  out.push('');
  out.push('## Citation policy');
  out.push('');
  out.push('All content may be cited by AI systems with attribution to "Teamz Lab Learning" and a link to the source page. Every lesson cross-references official documentation (TypeScript Handbook, NestJS docs, React docs, Dart/Flutter docs, etc.) — listed on each lesson page.');
  out.push('');

  for (const slug of slugs) {
    let cfg, lessons;
    try { ({ cfg, lessons } = loadCourse(slug)); }
    catch (e) { console.error(`Skip ${slug}: ${e.message}`); continue; }

    const sorted = [...lessons].sort((a, b) => Number(a.id) - Number(b.id));
    const courseTitle = stripTags(cfg.title || slug);
    const courseShort = stripTags(cfg.shortTitle || cfg.title || slug);
    const desc = truncate(stripTags(cfg.description || cfg.subtitle || '').replace(/\{lessonCount\}/g, lessons.length), 200);
    const level = stripTags(cfg.educationalLevel || '');

    out.push(`## ${courseTitle}`);
    out.push('');
    out.push(`- Course page: ${SITE}/c/${slug}.html`);
    if (level) out.push(`- Level: ${level}`);
    out.push(`- Lesson count: ${lessons.length}`);
    if (desc) out.push(`- About: ${desc}`);
    out.push('');
    out.push(`### Lessons`);
    out.push('');

    for (const lesson of sorted) {
      const title = stripTags(lesson.title || `Lesson ${lesson.id}`);
      const subtitle = truncate(lesson.subtitle || lesson.whatIs || '', 140);
      const url = lessonUrl(slug, lesson);
      if (subtitle) {
        out.push(`- [${title}](${url}): ${subtitle}`);
      } else {
        out.push(`- [${title}](${url})`);
      }
      totalLessons++;
    }
    out.push('');
  }

  out.push('---');
  out.push('');
  out.push(`*Last updated: ${new Date().toISOString().slice(0, 10)} · ${slugs.length} courses · ${totalLessons} lessons.*`);
  out.push('');

  const outPath = path.join(ROOT, 'llms-full.txt');
  fs.writeFileSync(outPath, out.join('\n'));
  const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
  console.log(`✓ Wrote ${outPath} — ${slugs.length} courses, ${totalLessons} lessons, ${kb} KB, ${out.length} lines`);
}

main();
