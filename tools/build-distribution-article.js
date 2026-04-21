#!/usr/bin/env node
/*
 * build-distribution-article.js
 *
 * Converts one lesson into a syndication-ready markdown article for
 * posting to Dev.to, Medium, Hashnode, Substack, Blogger, etc. via
 * teamz-company-automation/distribute/distribute.py.
 *
 * Canonical URL is set to the original lesson page on learn.teamzlab.com
 * (avoids duplicate-content penalties on syndication platforms).
 *
 * Usage:
 *   node tools/build-distribution-article.js <slug> <lesson-id> [priority]
 *   # Example:
 *   node tools/build-distribution-article.js js-ts-fun-book 15 high
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');
const OUT_DIR = path.join(ROOT, 'distribution');
const SITE = 'https://learn.teamzlab.com';

const kebab = (s, maxLen = 60) => {
  s = String(s || '').replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    .toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-[^-]*$/, '');
  return s || 'lesson';
};

function loadCourse(slug) {
  const cfgSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'config.js'), 'utf8').replace(/^\s*const\s+COURSE_CONFIG/m, 'globalThis.__C');
  const dataSrc = fs.readFileSync(path.join(COURSES_DIR, slug, 'data.js'), 'utf8').replace(/^\s*const\s+LESSONS_DATA/m, 'globalThis.__L');
  globalThis.__C = null; globalThis.__L = null;
  eval(cfgSrc); eval(dataSrc);
  return { cfg: globalThis.__C, lessons: globalThis.__L };
}

function lessonUrl(slug, lesson) {
  const id = String(lesson.id).padStart(2, '0');
  return `${SITE}/lessons/${slug}/${id}-${kebab(lesson.title || `lesson-${lesson.id}`)}.html`;
}

function yamlEscape(s) {
  s = String(s || '').replace(/"/g, '\\"').replace(/\n/g, ' ');
  return `"${s}"`;
}

function renderArticle({ slug, cfg, lesson, lessons, priority }) {
  const title = (lesson.title || `Lesson ${lesson.id}`).trim();
  const subtitle = (lesson.subtitle || '').trim();
  const analogy = (lesson.analogy || '').trim();
  const whatIs = (lesson.whatIs || '').trim();
  const realWorld = (lesson.realWorld || '').trim();
  const funFact = (lesson.funFact || '').trim();
  const eli5 = (lesson.eli5 || '').trim();
  const challenge = (lesson.challenge || '').trim();
  const points = Array.isArray(lesson.points) ? lesson.points : [];
  const code = String(lesson.code || '').trim();
  const walk = Array.isArray(lesson.codeWalkthrough) ? lesson.codeWalkthrough : [];
  const bug = lesson.bugChallenge || null;

  const courseTitle = (cfg.title || slug).replace(/<[^>]+>/g, '').trim();
  const courseUrl = `${SITE}/c/${slug}.html`;
  const canonical = lessonUrl(slug, lesson);

  // Slug + tags (SEO-ish)
  const articleSlug = `${kebab(title, 50)}-${slug}`;
  const topics = Array.isArray(cfg.topics) ? cfg.topics : [];
  const tagPool = [
    ...topics.slice(0, 3),
    'programming',
    'beginners',
    'tutorial',
    'learning'
  ]
    .map(t => t.toLowerCase().replace(/[^a-z0-9]/g, ''))
    .filter(Boolean);
  const tags = [...new Set(tagPool)].slice(0, 4);

  // SEO keywords (for draft tracking)
  const seoKeywords = [
    title.toLowerCase(),
    ...topics.slice(0, 3).map(t => t.toLowerCase()),
    `${title.toLowerCase()} tutorial`,
    `free ${title.toLowerCase()} course`
  ];

  // Meta description (snappy, for the frontmatter)
  const metaDesc = (whatIs || analogy || subtitle).slice(0, 158).replace(/\s+\S*$/, '') + '…';

  // Suggest 3 related lessons to cross-link to
  const relatedLessons = lessons
    .filter(l => l.id !== lesson.id)
    .slice(0, 3)
    .map(l => `- [${l.title}](${lessonUrl(slug, l)}) — ${(l.subtitle || '').slice(0, 80)}`)
    .join('\n');

  // Build the body
  const body = [];

  body.push(`> **TL;DR:** ${metaDesc}`);
  body.push('');

  if (analogy) {
    body.push(`## The analogy`);
    body.push('');
    body.push(`*${analogy}*`);
    body.push('');
  }

  if (whatIs) {
    body.push(`## What is it, really?`);
    body.push('');
    body.push(whatIs);
    body.push('');
  }

  if (realWorld) {
    body.push(`## Why it matters in the real world`);
    body.push('');
    body.push(realWorld);
    body.push('');
  }

  if (points.length) {
    body.push(`## The ${points.length} things you actually need to know`);
    body.push('');
    for (const p of points) {
      const t = (p.t || p.title || '').trim();
      const d = (p.d || p.description || '').trim();
      if (!t) continue;
      body.push(`**${t}** — ${d}`);
      body.push('');
    }
  }

  if (code) {
    body.push(`## Working code example`);
    body.push('');
    // Detect language from code hints — fallback to typescript
    const lang = /void main\(\)|class.*extends StatelessWidget/.test(code) ? 'dart'
      : /#include|std::|int main\(/.test(code) ? 'cpp'
      : /def \w+\(|import \w+/.test(code) ? 'python'
      : /interface |type \w+ =|: string\b|: number\b/.test(code) ? 'typescript'
      : /console\.log|const |let |function /.test(code) ? 'javascript'
      : '';
    body.push('```' + lang);
    body.push(code);
    body.push('```');
    body.push('');
    if (walk.length) {
      body.push(`**Line-by-line breakdown:**`);
      body.push('');
      walk.forEach((step, i) => body.push(`${i + 1}. ${step}`));
      body.push('');
    }
  }

  if (bug && bug.code) {
    body.push(`## Spot the bug`);
    body.push('');
    body.push('```');
    body.push(bug.code);
    body.push('```');
    body.push('');
    if (bug.hint) {
      body.push(`<details><summary>Hint</summary>\n\n${bug.hint}\n\n</details>`);
      body.push('');
    }
    if (bug.answer) {
      body.push(`<details><summary>Answer</summary>\n\n${bug.answer}\n\n</details>`);
      body.push('');
    }
  }

  if (eli5) {
    body.push(`## Explain it like I'm five`);
    body.push('');
    body.push(eli5);
    body.push('');
  }

  if (funFact) {
    body.push(`## Fun fact`);
    body.push('');
    body.push(funFact);
    body.push('');
  }

  if (challenge) {
    body.push(`## Try it yourself`);
    body.push('');
    body.push(challenge);
    body.push('');
  }

  // CTA block — THIS is where most of the backlinks to learn.teamzlab.com live
  body.push(`---`);
  body.push('');
  body.push(`## Want the interactive version?`);
  body.push('');
  body.push(`This article is lesson ${lesson.id} of [**${courseTitle}**](${courseUrl}) — a **free, interactive course** with quizzes, a code playground, spaced-repetition flashcards, and ${lessons.length - 1} more lessons. No signup required.`);
  body.push('');
  body.push(`- 📖 [Open this lesson with quizzes + code playground](${canonical})`);
  body.push(`- 🎓 [See the full ${lessons.length}-lesson curriculum](${courseUrl})`);
  body.push(`- 🏠 [All 16 free courses on Teamz Lab Learning](${SITE}/)`);
  body.push('');

  if (relatedLessons) {
    body.push(`## Related lessons from this course`);
    body.push('');
    body.push(relatedLessons);
    body.push('');
  }

  body.push(`---`);
  body.push('');
  body.push(`*Built by [Teamz Lab](https://teamzlab.com) — we build production mobile and web apps for clients worldwide. This free course is how we give back. ${courseTitle}'s [interactive version is here](${courseUrl}).*`);
  body.push('');

  // YAML frontmatter
  const frontmatter = [
    '---',
    `title: ${yamlEscape(title)}`,
    `slug: ${articleSlug}`,
    `canonical_url: ${canonical}`,
    `language: ${/[\u0980-\u09FF]/.test(title) ? 'bn' : 'en'}`,
    `tags: [${tags.map(t => `"${t}"`).join(', ')}]`,
    `description: ${yamlEscape(metaDesc)}`,
    `priority: ${priority || 'medium'}`,
    `series: ${yamlEscape(courseTitle)}`,
    `seo_keywords: [${seoKeywords.map(k => `"${k}"`).join(', ')}]`,
    `aso_keywords: []`,
    `competition: "medium"`,
    `source_lesson: ${lesson.id}`,
    `source_course: ${slug}`,
    '---',
    '',
  ].join('\n');

  return frontmatter + body.join('\n');
}

function main() {
  const [, , slug, lessonId, priority = 'medium'] = process.argv;
  if (!slug || !lessonId) {
    console.error('Usage: node tools/build-distribution-article.js <slug> <lesson-id> [priority]');
    process.exit(1);
  }

  const { cfg, lessons } = loadCourse(slug);
  const lesson = lessons.find(l => String(l.id) === String(lessonId));
  if (!lesson) {
    console.error(`Lesson ${lessonId} not found in course ${slug}`);
    process.exit(1);
  }

  const md = renderArticle({ slug, cfg, lesson, lessons, priority });

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, `${kebab(lesson.title, 50)}-${slug}.md`);
  fs.writeFileSync(outPath, md);
  console.log(`✓ Wrote ${outPath} (${Math.round(md.length / 1024)}kb, ${md.split('\n').length} lines)`);
}

main();
