/*
 * head-snippets.js — single source of truth for GA4 + AdSense markup, injected by
 * build-lesson-pages.js and build-landing-pages.js so ALL 763 SEO pages carry both.
 *
 * Before this, GA4 and AdSense lived only on index.html + learn.html — the 747 lesson pages
 * (where every scrap of organic traffic actually lands) earned nothing and were unmeasured.
 *
 * Two independent things ship here:
 *   1. headSnippets()  — GA4 gtag + the deferred AdSense loader. On EVERY page, always. This
 *      alone makes traffic measurable and lets the owner switch on AdSense Auto Ads from the
 *      dashboard for instant revenue with zero code change.
 *   2. inArticleAd()   — explicit in-article <ins> units. These render ONLY once a real slot id
 *      is set in AD_SLOTS (create the units in AdSense > Ads > By ad unit > In-article). Until
 *      then they render nothing, so pages never fire broken ad requests.
 */
const GA4_ID = 'G-BM660RZSGF';
const ADS_CLIENT = 'ca-pub-7088022825081956';

// Fill these from the AdSense UI to turn on controlled in-article units. Empty = off (Auto Ads
// via the loader still works). Owner: create 3 In-article units, paste their data-ad-slot ids.
const AD_SLOTS = {
  lessonTop: '',      // after a lesson's intro (whatIs)
  lessonBottom: '',   // before a lesson's prev/next nav
  landing: '',        // after a course landing's curriculum
};

// Courses that earn nothing and are held back from Google's site-wide quality view.
// A 90-day GSC audit on 2026-07-19 found 719 of 747 lessons (96.3%) took ZERO clicks, and 8 whole
// courses — 286 pages, 38% of the site — took zero between them. Google assesses low-value content
// at SITE level, so those pages drag every good page down with them. noindex (not deletion) is the
// reversible fix: the files stay, the lessons stay readable, they simply stop counting against the
// site. Remove a slug from data/noindex-courses.json and the next build indexes it again.
let _noindex = null;
function noindexSlugs() {
  if (_noindex) return _noindex;
  try {
    const p = require('path').join(__dirname, '..', '..', 'data', 'noindex-courses.json');
    _noindex = new Set(JSON.parse(require('fs').readFileSync(p, 'utf8')).slugs || []);
  } catch (e) {
    _noindex = new Set();   // missing/corrupt list must never silently noindex the whole site
  }
  return _noindex;
}

// "follow", not "none": the links out of these pages still pass through to the courses that DO work.
function robotsMeta(slug) {
  return noindexSlugs().has(slug)
    ? '<meta name="robots" content="noindex,follow">'
    : '';
}

function ga4Snippet() {
  return `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');</script>`;
}

function adsenseLoader() {
  // Deferred loader copied verbatim in behaviour from index.html: hold adsbygoogle.js until
  // after LCP (requestIdleCallback) so ads never regress Core Web Vitals on content pages.
  return `<link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin>
<script>
(function(){function loadAds(){var s=document.createElement('script');s.async=true;s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}';s.crossOrigin='anonymous';document.head.appendChild(s);}
if('requestIdleCallback' in window){window.addEventListener('load',function(){requestIdleCallback(loadAds,{timeout:3000});});}else{window.addEventListener('load',function(){setTimeout(loadAds,1500);});}})();
</script>`;
}

// Everything that belongs in <head>, on every generated page.
// GA4 + the ad loader always ship — a noindexed page still has readers, and we still want it
// measured and monetised; it is only held back from Google's INDEX, not from the site.
function headSnippets(slug) {
  const robots = robotsMeta(slug);
  return (robots ? robots + '\n' : '') + ga4Snippet() + '\n' + adsenseLoader();
}

// Responsive in-article ad. Returns '' (nothing) when the slot is not yet configured.
function inArticleAd(slotKey) {
  const slot = AD_SLOTS[slotKey];
  if (!slot) return '';
  return `<div class="ad-inarticle" style="margin:2rem 0;text-align:center">
<ins class="adsbygoogle" style="display:block;text-align:center" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="${ADS_CLIENT}" data-ad-slot="${slot}"></ins>
<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
</div>`;
}

module.exports = { GA4_ID, ADS_CLIENT, AD_SLOTS, ga4Snippet, adsenseLoader, headSnippets, inArticleAd, robotsMeta, noindexSlugs };
