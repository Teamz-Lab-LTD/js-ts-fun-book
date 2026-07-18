#!/usr/bin/env node
/*
 * build-sitemap.js  (learn.teamzlab.com — host-local)
 *
 * Emits sitemap.xml listing THIS site's real pages: the homepage, about,
 * roadmap, every course landing (c/<slug>.html) and every lesson page
 * (lessons/<slug>/<id>-<kebab>.html).
 *
 * WHY THIS EXISTS: the shared teamz-company-automation/sh/build-sitemap.sh is
 * tools-shaped — it only finds nested "index.html" pages and hardcodes the
 * tool.teamzlab.com domain. Run against learn it produced a 5-URL sitemap
 * pointing at the WRONG property, and none of learn's 769 pages were ever in
 * it while robots.txt advertised it to Google nightly. This replaces it;
 * set TEAMZ_NIGHTLY_SITEMAP=0 so the shared one no longer overwrites this.
 *
 * lastmod is taken from the SOURCE git date (courses/<slug>/{config,data}.js),
 * NOT the generated HTML — the HTML is regenerated (and re-committed) every
 * night, so its own git/mtime date would always be "today" and cry wolf to
 * Google. A lesson's lastmod = when its course content actually last changed.
 *
 * Usage: node tools/build-sitemap.js [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const SITE = 'https://learn.teamzlab.com';
const TODAY = new Date().toISOString().slice(0, 10);

// git date (YYYY-MM-DD) of the most recent commit touching any of `files`; TODAY on failure.
function gitDate(files) {
  const list = (Array.isArray(files) ? files : [files]).filter(f => fs.existsSync(f));
  if (!list.length) return TODAY;
  try {
    const out = execSync(
      `git log -1 --format=%as -- ${list.map(f => `"${path.relative(ROOT, f)}"`).join(' ')}`,
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : TODAY;
  } catch { return TODAY; }
}

function listCourseSlugs() {
  if (!fs.existsSync(COURSES_DIR)) return [];
  return fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js'))
  );
}

function urlEntry(loc, lastmod, priority, changefreq) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
         `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const entries = [];

  // Root pages (only ones that actually exist). learn.html (the SPA) and 404.html are omitted.
  const roots = [
    { file: 'index.html',   loc: `${SITE}/`,             pri: '1.0', freq: 'daily' },
    { file: 'about.html',   loc: `${SITE}/about.html`,   pri: '0.4', freq: 'monthly' },
    { file: 'roadmap.html', loc: `${SITE}/roadmap.html`, pri: '0.4', freq: 'monthly' },
  ];
  for (const r of roots) {
    const abs = path.join(ROOT, r.file);
    if (fs.existsSync(abs)) entries.push(urlEntry(r.loc, gitDate(abs), r.pri, r.freq));
  }

  // Per course: the landing page + every lesson page, all stamped with the course's source date.
  let courses = 0, lessonCount = 0;
  for (const slug of listCourseSlugs()) {
    const srcDate = gitDate([
      path.join(COURSES_DIR, slug, 'config.js'),
      path.join(COURSES_DIR, slug, 'data.js'),
    ]);
    const landing = path.join(ROOT, 'c', `${slug}.html`);
    if (fs.existsSync(landing)) { entries.push(urlEntry(`${SITE}/c/${slug}.html`, srcDate, '0.8', 'weekly')); courses++; }
    const lessonDir = path.join(ROOT, 'lessons', slug);
    if (fs.existsSync(lessonDir)) {
      for (const f of fs.readdirSync(lessonDir).filter(f => f.endsWith('.html')).sort()) {
        entries.push(urlEntry(`${SITE}/lessons/${slug}/${f}`, srcDate, '0.6', 'monthly'));
        lessonCount++;
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join('\n') + `\n</urlset>\n`;

  console.log(`build-sitemap: ${entries.length} URLs (${courses} course landings, ${lessonCount} lessons, ${roots.length} root)`);
  if (dryRun) { console.log('(dry run — not written)'); return; }
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log(`Wrote sitemap.xml (${entries.length} URLs) at repo root.`);
}

main();
