#!/usr/bin/env node
/*
 * validate-course.js — guard the eval-loaded course sources.
 *
 * All three generators (build-landing-pages, build-lesson-pages, build-llms-txt) load a course by
 * eval'ing its config.js + data.js. One malformed file the nightly course-agent writes would crash
 * EVERY generator for ALL courses mid-build. This fails LOUD (exit 1) before that can happen.
 *
 * Two strictness levels:
 *   node tools/validate-course.js --all      LENIENT — runs in the nightly build chain. Only asks
 *                                             "does every course eval and have the basic shape?"
 *                                             Must pass on all existing courses (or it blocks the
 *                                             nightly), so it does NOT demand rich per-lesson fields.
 *   node tools/validate-course.js <slug>     STRICT — for a NEW agent-written course. Demands the
 *                                             full lesson shape (analogy, points, quiz, whatIs, eli5)
 *                                             so a thin/half-written pilot never ships.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');

function loadCourse(slug) {
  const cfgSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'config.js'), 'utf8')
    .replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'data.js'), 'utf8')
    .replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null; globalThis.__L = null;
  eval(cfgSrc); eval(dataSrc);
  const cfg = globalThis.__C, lessons = globalThis.__L;
  globalThis.__C = null; globalThis.__L = null;
  return { cfg, lessons };
}

// Returns an array of problem strings ([] = valid).
function validate(slug, strict) {
  const problems = [];
  let cfg, lessons;
  try {
    ({ cfg, lessons } = loadCourse(slug));
  } catch (e) {
    return [`eval failed: ${e.message}`];   // syntax error — the fatal one for the generators
  }
  if (!cfg || typeof cfg !== 'object') problems.push('no COURSE_CONFIG object');
  else if (!cfg.title) problems.push('config.title missing');
  if (!Array.isArray(lessons) || lessons.length === 0) { problems.push('LESSONS_DATA empty/not an array'); return problems; }

  const ids = new Set();
  lessons.forEach((l, i) => {
    if (!l || typeof l !== 'object') { problems.push(`lesson[${i}] not an object`); return; }
    if (l.id == null) problems.push(`lesson[${i}] has no id`);
    else if (ids.has(l.id)) problems.push(`duplicate lesson id ${l.id}`);
    else ids.add(l.id);
    if (!l.title) problems.push(`lesson ${l.id} has no title`);
    if (!Array.isArray(l.points)) problems.push(`lesson ${l.id} has no points[]`);
    if (strict) {
      if (!l.analogy) problems.push(`lesson ${l.id} missing analogy`);
      if (!Array.isArray(l.points) || l.points.length < 3) problems.push(`lesson ${l.id} needs >=3 points`);
      if (!Array.isArray(l.quiz) || l.quiz.length < 3) problems.push(`lesson ${l.id} needs >=3 quiz`);
      if (!l.whatIs) problems.push(`lesson ${l.id} missing whatIs`);
      if (!l.eli5) problems.push(`lesson ${l.id} missing eli5`);
    }
  });
  if (strict && lessons.length < 8) problems.push(`only ${lessons.length} lessons (a pilot needs >=8)`);
  // topicMap ids (if present) must reference real lessons
  if (cfg && cfg.topicMap && typeof cfg.topicMap === 'object') {
    for (const [cat, arr] of Object.entries(cfg.topicMap)) {
      for (const id of (Array.isArray(arr) ? arr : [])) if (!ids.has(id)) problems.push(`topicMap "${cat}" -> lesson ${id} does not exist`);
    }
  }
  return problems;
}

function listSlugs() {
  return fs.readdirSync(COURSES_DIR).filter(f =>
    fs.statSync(path.join(COURSES_DIR, f)).isDirectory() &&
    fs.existsSync(path.join(COURSES_DIR, f, 'config.js')) &&
    fs.existsSync(path.join(COURSES_DIR, f, 'data.js')));
}

function main() {
  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const slugs = all ? listSlugs() : args.filter(a => !a.startsWith('--'));
  if (!slugs.length) { console.error('usage: validate-course.js <slug> | --all'); process.exit(2); }

  let failed = 0;
  for (const slug of slugs) {
    const problems = validate(slug, !all);   // --all = lenient; single slug = strict
    if (problems.length) {
      failed++;
      console.error(`✗ ${slug}:`);
      problems.slice(0, 12).forEach(p => console.error(`    - ${p}`));
    } else {
      console.log(`✓ ${slug} (${all ? 'lenient' : 'strict'})`);
    }
  }
  if (failed) { console.error(`\nvalidate-course: ${failed}/${slugs.length} course(s) FAILED.`); process.exit(1); }
  console.log(`validate-course: all ${slugs.length} OK.`);
}

main();
