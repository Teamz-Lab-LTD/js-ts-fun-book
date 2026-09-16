// The spaced-repetition scheduler inside learn.html.
//
// The site is one file on purpose, so these tests lift the four scheduler
// functions out of it by name and run them against injected globals. That
// is uglier than importing a module, and it is the only way to test this
// code without restructuring a site that has shipped fine for a year.
//
// It exists because the scheduler had a bug no reader would see: the due
// filter excluded the top box, so the longest interval was dead code and
// a card left the rotation for good after four correct answers. A spaced
// repetition system that stops repeating is just a quiz.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(here, '..', 'learn.html'), 'utf8');

const WANTED = [
  'getSrsIntervals',
  'promoteSrsCard',
  'demoteSrsCard',
  'getDueReviewCards',
];

function extract(name) {
  const start = source.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `learn.html no longer defines ${name}`);
  // Brace-match rather than regex: these bodies contain braces in strings.
  let depth = 0;
  let i = source.indexOf('{', start);
  const open = i;
  for (; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`unbalanced braces in ${name}`);
}

/// A sandbox holding just enough of learn.html for the scheduler to run.
function scheduler({ cards = {}, lessons = null, config = undefined } = {}) {
  const context = {
    srsCards: cards,
    COURSE_CONFIG: config,
    // Every key in `cards` gets a lesson + quiz so the due filter's
    // existence check passes unless a test deliberately removes one.
    L: lessons ?? Object.keys(cards).map(() => ({ quiz: [{ q: 'q' }] })),
    saveState() {},
  };
  vm.createContext(context);
  vm.runInContext(WANTED.map(extract).join('\n'), context);
  return context;
}

const card = (box, nextReview) => ({ box, nextReview, lastReview: 0 });

test('the default ladder reaches months, not a fortnight', () => {
  const s = scheduler();
  const intervals = s.getSrsIntervals();
  assert.ok(
    intervals[intervals.length - 1] >= 90,
    `longest interval is ${intervals[intervals.length - 1]} days — a card that `
    + 'never comes back after two weeks is not spaced repetition',
  );
  assert.equal(intervals.join(','), '0,1,3,7,14,30,90,180');
});

test('a card in the top box still comes back', () => {
  // The bug. `box < intervals.length - 1` retired anything that reached
  // the last box, so the longest interval never elapsed for anybody.
  const s = scheduler({ cards: { '0-0': card(7, Date.now() - 1000) } });
  const due = s.getDueReviewCards();
  assert.equal(due.length, 1, 'a card at the top of the ladder was dropped');
});

test('a card whose time has not come is not due', () => {
  const s = scheduler({ cards: { '0-0': card(2, Date.now() + 86400000) } });
  assert.equal(s.getDueReviewCards().length, 0);
});

test('promotion moves one box and schedules that box\'s interval', () => {
  const cards = { '0-0': card(0, 0) };
  const s = scheduler({ cards });
  s.promoteSrsCard('0-0');
  assert.equal(cards['0-0'].box, 1);
  const days = (cards['0-0'].nextReview - cards['0-0'].lastReview) / 86400000;
  assert.equal(Math.round(days), 1);
});

test('promotion stops at the top rather than running off the ladder', () => {
  const cards = { '0-0': card(7, 0) };
  const s = scheduler({ cards });
  s.promoteSrsCard('0-0');
  assert.equal(cards['0-0'].box, 7);
  assert.ok(Number.isFinite(cards['0-0'].nextReview));
});

test('a miss sends the card back to the start', () => {
  const cards = { '0-0': card(5, Date.now() + 999999) };
  const s = scheduler({ cards });
  s.demoteSrsCard('0-0');
  assert.equal(cards['0-0'].box, 0);
  assert.ok(cards['0-0'].nextReview <= Date.now());
});

test('a miss the learner was sure of is marked, and goes first', () => {
  // Hypercorrection: an error held with high confidence is the most
  // correctable state a learner can be in, so it should not wait behind
  // cards they already knew they were shaky on.
  const cards = {
    '0-0': card(0, Date.now() - 1000),
    '1-0': card(0, Date.now() - 1000),
  };
  const s = scheduler({
    cards,
    lessons: [{ quiz: [{ q: 'a' }] }, { quiz: [{ q: 'b' }] }],
  });
  s.demoteSrsCard('1-0', 'high');
  assert.equal(cards['1-0'].confidentMisses, 1);
  assert.equal(
    s.getDueReviewCards()[0].key,
    '1-0',
    'the card they were sure about should be the one they see first',
  );
});

test('an ordinary miss is not marked as a confident one', () => {
  const cards = { '0-0': card(0, 0) };
  const s = scheduler({ cards });
  s.demoteSrsCard('0-0', 'low');
  assert.ok(!cards['0-0'].confidentMisses);
  s.demoteSrsCard('0-0');
  assert.ok(!cards['0-0'].confidentMisses);
});

test('a card whose lesson has gone is skipped, not crashed on', () => {
  const s = scheduler({
    cards: { '9-9': card(0, Date.now() - 1000) },
    lessons: [],
  });
  assert.equal(s.getDueReviewCards().length, 0);
});

test('a course may still configure its own ladder', () => {
  const s = scheduler({ config: { srs: { intervals: [0, 2, 9] } } });
  assert.equal(s.getSrsIntervals().join(','), '0,2,9');
});

// The hand-off into Phosphor. Lifted the same way as the scheduler above.
const slugFn = (() => {
  const start = source.indexOf('function phosphorTopicSlug(');
  assert.notEqual(start, -1, 'learn.html no longer defines phosphorTopicSlug');
  let depth = 0;
  let i = source.indexOf('{', start);
  for (; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        const ctx = { encodeURIComponent };
        vm.createContext(ctx);
        vm.runInContext(source.slice(start, i + 1), ctx);
        return ctx.phosphorTopicSlug;
      }
    }
  }
  throw new Error('unbalanced braces in phosphorTopicSlug');
})();

test('the Phosphor slug rule matches the app, case by case', () => {
  // Duplicated verbatim in the Phosphor repo:
  //   test/core/router/topic_link_test.dart
  //   functions/test/topic_landing.test.js
  // A link that verifies, opens the app and studies the wrong thing is
  // worse than one that 404s, and only this table catches that.
  const AGREEMENT = [
    ["Newton's laws of motion", 'newtons-laws-of-motion'],
    ['Colour theory — for thumbnails!', 'colour-theory-for-thumbnails'],
    ['  spaced out  ', 'spaced-out'],
    ['!!!', ''],
  ];
  for (const [title, slug] of AGREEMENT) {
    assert.equal(decodeURIComponent(slugFn(title)), slug, `"${title}"`);
  }
});

test('a Bengali lesson title survives the slug', () => {
  const slug = slugFn('সালোকসংশ্লেষণ');
  assert.equal(decodeURIComponent(slug), 'সালোকসংশ্লেষণ');
  assert.notEqual(slug, '', 'a stripped slug would link every bn lesson to nothing');
});

test('a very long lesson title is cut without a trailing separator', () => {
  const title = 'Understanding the Android Activity and Fragment lifecycle in depth with examples';
  const slug = decodeURIComponent(slugFn(title));
  assert.ok(slug.length <= 80);
  assert.ok(!slug.endsWith('-'));
});
