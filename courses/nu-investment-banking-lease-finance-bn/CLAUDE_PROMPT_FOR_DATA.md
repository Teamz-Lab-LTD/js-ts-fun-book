# Claude Prompt — Generate data.js for NU Investment Banking & Lease Finance

> Paste this entire prompt into Claude to generate the complete `data.js` file.

---

You are generating the complete `data.js` file for a Teamz Lab Learning Platform course.

Output rule:
- Output valid JavaScript only
- Do not output markdown
- Do not output explanations before or after the code
- Final output must be a single JS file defining the lesson array, e.g.:
  const LESSONS_DATA = [ ... ];

Course identity:
- Course title: NU ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স মাস্টারি
- Language: Bangla (Bangladesh)
- Audience: National University Bangladesh Masters-level Finance & Banking students
- Target paper anchor: 312401 Investment Banking and Lease Finance
- Goal: A+-oriented concept mastery, smart revision, answer-writing confidence
- Tone: the best Bangla teacher for this paper — warm, clear, exam-smart, original, Bangladesh-rooted

IMPORTANT SCOPE RULE:
This is a Bangladesh university paper about investment banking + merchant banking + capital market intermediation + valuation basics + lease finance + Bangladesh institutional context.
Do NOT drift into generic Western "Wall Street career lifestyle / M&A analyst" content.
If global concepts are used, anchor them back to Bangladesh exam understanding.

SOURCE/ASSUMPTION CONTEXT TO RESPECT:
Treat the course as being built from the recurring public paper structure around:
- investment banking
- primary security market
- secondary market
- portfolio management
- portfolio analysis
- technical analysis
- security valuation
- lease financing
- investment banking structure in Bangladesh

Also keep Bangladesh institutional anchors visible where relevant:
- BSEC
- DSE / CSE
- CDBL
- ICB
- merchant bankers
- NBFI / lease finance ecosystem
- IPO fixed price vs book building
- underwriting
- issue management

WRITING QUALITY RULES:
- All learner-facing text must be in Bangla
- Bangla must feel natural, elegant, human, teacher-like
- Do NOT produce robotic translation
- Think in Bangla first
- Use English technical terms in parentheses only when helpful the first time
- No filler
- No textbook-dump tone
- No copyright copying
- Do not copy guidebooks
- Do not copy public notes
- Do not copy textbook wording
- Create original teaching language and original explanatory structure

PEDAGOGY RULES:
Every lesson must feel:
- crystal clear
- memorable
- exam useful
- confidence building
- locally relatable

Use:
- strong analogy-first teaching
- Bangladesh-specific examples whenever possible
- ELI5 that is genuinely simpler
- 7-11 teaching points
- 3-5 plausible quiz questions
- confusion removal
- answer-writing usefulness
- revision friendliness

VERY IMPORTANT:
The course should make a student feel:
"আমি গাইড না পড়েও আসল জিনিসটা বুঝে ফেলেছি — আর পরীক্ষায় কীভাবে লিখতে হবে তাও জানি।"

EXACT SCHEMA — EVERY LESSON MUST FOLLOW THIS EXACT SHAPE:
```js
{
  id: Number,
  title: String,
  subtitle: String,
  analogy: String,
  points: [
    { t: String, d: String, code: String }
  ],
  whatIs: String,
  realWorld: String,
  code: String,
  funFact: String,
  quiz: [
    { q: String, opts: [String], ans: Number }
  ],
  challenge: String,
  resources: [
    { type: String, title: String, url: String, source: String }
  ],
  eli5: String,
  codeWalkthrough: [String],
  bugChallenge: {
    code: String,
    hint: String,
    answer: String
  },
  difficulty: String,
  prereqs: [Number]
}
```

NON-CODING ADAPTATION RULES:
This is NOT a programming course.

So:
- `code` must NOT be programming code
- `points[].code` must also NOT be programming code

Instead, use these formats across different lessons:
1. worked example
2. answer skeleton
3. comparison chart
4. step framework
5. mini calculation / valuation walkthrough
6. case breakdown
7. institution-role map
8. exam answer outline

VARY these formats across lessons.
Do not make every lesson use the same format.

`codeWalkthrough` must explain that worked example / framework / comparison / case step by step.

`bugChallenge` must become a realistic "ভুল ধরো" exercise.
Use exactly one realistic mistake, such as:
- wrong classification
- wrong institution-role match
- wrong comparison
- wrong lease/loan decision
- wrong valuation reasoning
- wrong answer structure
- wrong understanding of primary vs secondary market
- wrong understanding of broker vs dealer
- wrong understanding of finance lease vs operating lease

`challenge` must become exam-style practice, such as:
- short note
- paragraph answer
- compare and contrast answer
- process explanation
- case-based answer
- Bangladesh-context analysis
- answer-structure practice

ELI5 RULE:
- `eli5` must be simpler than the main explanation
- it must not duplicate point description text
- it must not duplicate point title text
- it must sound like a very easy everyday explanation

ANALOGY RULE:
- every lesson needs an analogy
- analogy must be accurate and relatable
- use Bangladeshi everyday life when possible
- not childish
- not techy
- not repetitive
- examples can involve market shopping, renting a shop, buying a bus, leasing a machine, raising money for business expansion, etc.

QUIZ RULES:
- 3-5 questions per lesson
- 4 options each
- all options plausible
- test understanding, not rote memory
- cover different points from the lesson
- ans must be 0-indexed
- do not use joke options

RESOURCES RULES:
Use credible resources where possible.
Prefer official or reputable Bangladesh-relevant sources when relevant, such as:
- BSEC
- DSE
- CSE
- BMBA
- ICB
- IDLC
- official institution pages
- reputable educational references
Mix official docs with a few concept-learning resources.
All URLs must be real-looking and appropriate.

DIFFICULTY RULE:
Only use:
- "beginner"
- "intermediate"
- "advanced"

PREREQ RULE:
Use the exact prerequisite logic from the lesson plan below.
Do not invent random prereqs.
Keep the learning tree coherent.

USE THIS EXACT LESSON PLAN:

1. এই পেপারটা আসলে কী?
   beginner []
2. বিনিয়োগ ব্যাংকিংয়ের মৌলিক ধারণা
   beginner [1]
3. ইনভেস্টমেন্ট ব্যাংক, মার্চেন্ট ব্যাংক ও কমার্শিয়াল ব্যাংকের পার্থক্য
   beginner [1,2]
4. লিজ ফাইন্যান্সের ধারণা ও ব্যবসায়িক প্রয়োজন
   beginner [1]
5. ফাইন্যান্সিয়াল মার্কেট ও ক্যাপিটাল মার্কেটের গঠন
   beginner [2]
6. রিটার্ন, রিস্ক ও অ্যাসেট অ্যালোকেশন সহজভাবে
   beginner [5]
7. সিকিউরিটি মার্কেট ইনস্ট্রুমেন্টস: শেয়ার, বন্ড, মিউচুয়াল ফান্ড
   beginner [5]
8. প্রাইমারি মার্কেট বনাম সেকেন্ডারি মার্কেট
   beginner [5,7]
9. বাংলাদেশের ক্যাপিটাল মার্কেট প্রতিষ্ঠানসমূহের পরিচয়
   beginner [5,8]
10. ক্যাপিটাল ইস্যু ম্যানেজমেন্ট কীভাবে কাজ করে
    intermediate [8,9]
11. প্রসপেক্টাস ও ইনফরমেশন মেমোরেন্ডাম
    intermediate [10]
12. IPO: Fixed Price বনাম Book Building
    intermediate [10,11]
13. প্রাইভেট প্লেসমেন্ট, রাইটস ইস্যু ও পাবলিক ইস্যু
    intermediate [10,11]
14. আন্ডাররাইটিং: ধারণা, প্রকার, গুরুত্ব
    intermediate [10]
15. এক্সাম আন্সার ক্লিনিক: ইস্যু ম্যানেজমেন্ট প্রশ্ন কীভাবে লিখবে
    intermediate [10,11,12,13,14]
16. মার্চেন্ট ব্যাংকিংয়ের ফাংশনস
    intermediate [2,3,10]
17. ইস্যু ম্যানেজার, আন্ডাররাইটার, ব্রোকার, ডিলার — কে কী করে
    intermediate [14,16]
18. BSEC, DSE, CSE, CDBL, ICB — কার ভূমিকা কী
    intermediate [9,16]
19. ইনভেস্টর প্রোটেকশন, ইনসাইডার ট্রেডিং ও মার্কেট ডিসিপ্লিন
    intermediate [18]
20. বাংলাদেশ কনটেক্সট কেস লেসন: IPO থেকে লিস্টিং পর্যন্ত
    intermediate [10,12,18]
21. ডিলিং বনাম ব্রোকারিং
    intermediate [17]
22. ডিলার রিস্ক ও ইনভেন্টরি ফাইন্যান্সিং
    intermediate [21]
23. ব্রোকারেজ অ্যাবিউজ, কমপ্লায়েন্স ও সতর্কতা
    intermediate [19,21]
24. সিকিউরিটি মার্কেট ইনডিকেটরস কীভাবে পড়বে
    intermediate [21]
25. পোর্টফোলিও ম্যানেজমেন্টের পরিচয়
    intermediate [6,7]
26. Efficient Market ও Asset Pricing Basics
    intermediate [25]
27. Financial Statement Analysis for Investors
    intermediate [25]
28. Economic Analysis: অর্থনীতি থেকে বিনিয়োগ সিদ্ধান্ত
    intermediate [25]
29. Industry Analysis ও Company Analysis
    intermediate [27,28]
30. Technical Analysis: ধারণা, ব্যবহার, সীমাবদ্ধতা
    intermediate [24,25]
31. ভ্যালুয়েশন প্রসেসের ওভারভিউ
    intermediate [27,29]
32. Bond Fundamentals ও Yield Logic
    intermediate [31]
33. Bond Valuation Step by Step
    advanced [32]
34. Equity Valuation Basics for Exam Answers
    advanced [31,29]
35. লিজ ফাইন্যান্স: ধারণা, উদ্দেশ্য ও অর্থনৈতিক ভূমিকা
    beginner [4]
36. লিজের ধরনসমূহ
    intermediate [35]
37. Finance Lease বনাম Operating Lease
    intermediate [36]
38. Lease বনাম Term Loan বনাম Hire Purchase
    intermediate [35,36,37]
39. Lessee's Perspective: Lease Evaluation
    advanced [38]
40. Lease Finance-এর সুবিধা, সীমাবদ্ধতা, accounting/tax angle
    advanced [37,39]
41. Equipment Lease Financing ও Sale-and-Lease-Back
    advanced [39,40]
42. বাংলাদেশে লিজ ফাইন্যান্সের চর্চা ও NBFI উদাহরণ
    intermediate [35,36]
43. Confusion Clinic: কোন পরিস্থিতিতে lease, loan, না hire purchase?
    advanced [38,39,42]
44. Short Note Mastery: ২৫টি জরুরি টপিক
    intermediate [1,42]
45. Compare & Contrast Mastery: পরীক্ষার সেরা পার্থক্যগুলো
    intermediate [3,8,12,17,21,37,38]
46. Final Exam Drill: বড় প্রশ্ন, কাঠামো, সময় ব্যবস্থাপনা
    advanced [44,45]

MUST INCLUDE THESE PEDAGOGICAL TARGETS THROUGHOUT:
- confusion clinic moments
- short note usefulness
- compare-and-contrast strength
- Bangladesh capital market relevance
- Bangladesh lease finance relevance
- issue management / underwriting / IPO route clarity
- lease vs loan vs hire purchase clarity
- investment bank vs merchant bank vs commercial bank clarity
- answer-writing confidence

SPECIAL CONTENT REQUIREMENTS:
- For Bangladesh examples, naturally use situations like garments factory machinery, SME equipment, buses/trucks, diagnostic center equipment, agro-processing machinery, IPO process in Bangladesh, issue manager role, NBFI lease financing
- For valuation lessons, keep the math exam-friendly and understandable
- For revision lessons, make them highly compressive and memorable
- For final exam drill lesson, teach answer structure, time use, how much to write, and how to avoid common low-mark mistakes

VARIETY REQUIREMENT FOR `code` FIELD:
Ensure across the 46 lessons that:
- some lessons use comparison tables
- some use short answer structures
- some use process steps
- some use mini case analysis
- some use lease evaluation reasoning
- some use institutional maps
- some use valuation logic
- some use "how to answer in exam" structures

DO NOT:
- do not copy guidebooks
- do not copy public notes
- do not copy textbook wording
- do not produce robotic Bangla
- do not repeat the same analogy style in every lesson
- do not duplicate ELI5 with point descriptions
- do not over-expand into generic Western investment banking careers
- do not forget Bangladesh institutions and examples
- do not forget answer-writing usefulness
- do not forget confusion-buster lessons

OUTPUT STRATEGY:
If the full array is long, still output only valid JS.
Do not split into explanatory sections.
Do not omit any required field.
Do not leave placeholders like "add later".
Every lesson must be production-ready.
