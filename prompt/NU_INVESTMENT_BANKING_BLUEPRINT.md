# NU Investment Banking & Lease Finance — Course Blueprint

> Single reference document: Deep Research prompt + research output + config.js + Claude prompt for data.js
> Created: March 2026 | Pipeline: Deep Research → this doc → Claude → deploy

---

## Part 1 — Verification & Assumptions

### Verified
- NU public ecosystem shows **Masters (Regular)** and **On-Campus Masters Final** as active categories
- Public notice surface shows **mixed session labeling** (2022-2023, 2023-2024) — do not hardcode 2025-2026
- Public NU-aligned subject lists consistently map **312401 = Investment Banking and Lease Finance** under Finance & Banking
- Companion papers: 312403 Corporate Governance, 312405 International Financial Management, 312407 Corporate Finance, 312409 Monetary and Fiscal Policy, 312411 Financial Derivatives, elective slot, 312416 Term Paper, 312418 Viva-Voce
- Paper spine: Investment Banking → Primary/Secondary Markets → Portfolio → Analysis → Valuation → Lease Financing → BD Institutional Structure

### Not verified
- No current official unit-by-unit NU PDF for 312401 found publicly
- Course built from: official NU context + recurring public subject lists + BD-aligned outline + current BD market/regulatory sources

### Working assumption
- **312401** is stable anchor. Paper scope = BD-style investment/merchant banking + securities market + valuation basics + lease finance + BD institutional structure. Recheck session label before deploy.

---

## Part 2 — Course Positioning

| Field | Value |
|-------|-------|
| Title | NU ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স মাস্টারি |
| shortTitle | ইনভেস্টমেন্ট ব্যাংকিং |
| slug | `nu-investment-banking-lease-finance-bn` |
| Lessons | 46 |
| Audience | NU Masters Finance & Banking students |
| Lang | Bangla (forceLang: 'bn') |

---

## Part 3 — Exam Intelligence

### 25 High-yield short-note topics
1. বিনিয়োগ ব্যাংকিংয়ের ধারণা **[deep]**
2. মার্চেন্ট ব্যাংকিংয়ের কার্যাবলি **[deep]**
3. প্রাইমারি মার্কেট **[deep]**
4. সেকেন্ডারি মার্কেট **[deep]**
5. প্রসপেক্টাস
6. প্রাইভেট প্লেসমেন্ট
7. রাইটস ইস্যু
8. IPO
9. আন্ডাররাইটিং **[deep]**
10. ওপেন-এন্ড বনাম ক্লোজড-এন্ড মিউচুয়াল ফান্ড
11. ডিলিং বনাম ব্রোকারিং **[deep]**
12. ইফিশিয়েন্ট মার্কেট
13. পোর্টফোলিও ম্যানেজমেন্ট
14. টেকনিক্যাল অ্যানালাইসিস
15. বন্ড ইয়িল্ড
16. ইকুইটি ভ্যালুয়েশন
17. লিজের ধারণা **[deep]**
18. ফাইন্যান্স লিজ বনাম অপারেটিং লিজ **[deep]**
19. লিজ বনাম ঋণ **[deep]**
20. সেল-অ্যান্ড-লিজ-ব্যাক
21. বাংলাদেশে লিজ ফাইন্যান্সের চর্চা **[deep]**
22. BSEC-এর ভূমিকা
23. DSE-এর ভূমিকা
24. ICB-এর ভূমিকা
25. বিনিয়োগকারী সুরক্ষা

### 16 Must-know distinctions
1. investment bank vs merchant bank vs commercial bank
2. primary market vs secondary market
3. fixed price vs book building
4. prospectus vs information memorandum
5. rights issue vs public issue
6. private placement vs IPO
7. issue manager vs underwriter
8. broker vs dealer
9. open-end vs closed-end mutual fund
10. portfolio management vs portfolio analysis
11. fundamental analysis vs technical analysis
12. bond yield vs bond price
13. finance lease vs operating lease
14. lease vs debt finance
15. lease vs hire purchase
16. lessor vs lessee

### 14 Common student confusions
1. investment banking = only foreign M&A jobs
2. merchant banking and investment banking are always identical
3. BSEC, DSE, CSE, ICB all do the same job
4. IPO and underwriting are the same thing
5. broker and dealer are interchangeable
6. portfolio management and security valuation are identical
7. technical analysis is "guesswork only"
8. lease means installment purchase
9. finance lease and operating lease only differ in duration
10. lease is always cheaper than loan
11. bond price rise/fall and yield move same direction
12. rights issue and public issue target same investors
13. mutual fund and merchant bank are same institution
14. investor protection means only complaint handling

### 14 Bangladesh-specific example ideas
1. Gazipur garments factory leasing finishing machinery
2. Chattogram transport operator financing trucks/buses
3. Diagnostic center leasing ultrasound/X-ray machine
4. Rice mill taking equipment lease for modernization
5. SME workshop buying CNC/lathe equipment through lease
6. Bangladeshi issuer preparing IPO with issue manager
7. BSEC approval + DSE listing flow
8. Merchant banker arranging underwriting support
9. Listed company rights issue for expansion
10. ICB as institutional investor
11. NBFI-based equipment finance case
12. Office equipment lease for growing firm
13. Agri equipment lease for agro-processing
14. Sale-and-lease-back on commercial property/equipment

### 10 Memory hooks
1. **"ডি-ব্রো"** = Dealer নিজের জন্য, Broker অন্যের জন্য
2. **"ফো-অপ"** = Finance lease = ownership-type risk; Operating = use-focused
3. **"লিজ আগে ব্যবহার, ঋণে আগে টাকা"**
4. **"ইল্ড উল্টো, দাম সোজা নয়"** → bond price up, yield down
5. **"রাইটস আগে পুরনো শেয়ারহোল্ডার"**
6. **"বুক বিল্ডিং = বাজার চাহিদা দিয়ে দাম"**
7. **"প্রাইমারি = নতুন ইস্যু, সেকেন্ডারি = পুরনো শেয়ারের লেনদেন"**
8. **"ম্যানেজার ইস্যু সাজায়, আন্ডাররাইটার বিক্রি-ঝুঁকি নেয়"**
9. **"বি-ডি-আই-বি"** = BSEC, DSE, ICB, Broker/Bank roles
10. **"পি-প্রো-আ-লি"** = Primary, Prospectus, Placement, Public issue, Underwriting

### Deep mastery vs fast revision
**Must master deeply**: primary vs secondary market, issue management, underwriting, merchant banking functions, broker vs dealer, portfolio/fundamental/company analysis, bond/equity valuation basics, finance lease vs operating lease, lease vs loan vs hire purchase, BD institutional/regulatory structure

**Fast revision enough**: definitional short notes, open vs closed-end mutual fund, market indicator examples, technical-analysis tool names, brief institution profiles once core roles are clear

---

## Part 4 — Full 46-Lesson Outline

### Group 1 — ভিত্তি ও কোর্স ওরিয়েন্টেশন
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 1 | এই পেপারটা আসলে কী? | beginner | [] | concept | high |
| 2 | বিনিয়োগ ব্যাংকিংয়ের মৌলিক ধারণা | beginner | [1] | concept | high |
| 3 | ইনভেস্টমেন্ট ব্যাংক, মার্চেন্ট ব্যাংক ও কমার্শিয়াল ব্যাংকের পার্থক্য | beginner | [1,2] | comparison | high |
| 4 | লিজ ফাইন্যান্সের ধারণা ও ব্যবসায়িক প্রয়োজন | beginner | [1] | concept | high |

### Group 2 — সিকিউরিটিজ মার্কেটের ভিত্তি
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 5 | ফাইন্যান্সিয়াল মার্কেট ও ক্যাপিটাল মার্কেটের গঠন | beginner | [2] | concept | high |
| 6 | রিটার্ন, রিস্ক ও অ্যাসেট অ্যালোকেশন সহজভাবে | beginner | [5] | analysis | medium |
| 7 | সিকিউরিটি মার্কেট ইনস্ট্রুমেন্টস: শেয়ার, বন্ড, মিউচুয়াল ফান্ড | beginner | [5] | concept | high |
| 8 | প্রাইমারি মার্কেট বনাম সেকেন্ডারি মার্কেট | beginner | [5,7] | comparison | high |
| 9 | বাংলাদেশের ক্যাপিটাল মার্কেট প্রতিষ্ঠানসমূহের পরিচয় | beginner | [5,8] | bangladesh-context | high |

### Group 3 — প্রাইমারি মার্কেট ও ইস্যু ম্যানেজমেন্ট
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 10 | ক্যাপিটাল ইস্যু ম্যানেজমেন্ট কীভাবে কাজ করে | intermediate | [8,9] | process | high |
| 11 | প্রসপেক্টাস ও ইনফরমেশন মেমোরেন্ডাম | intermediate | [10] | process | high |
| 12 | IPO: Fixed Price বনাম Book Building | intermediate | [10,11] | comparison | high |
| 13 | প্রাইভেট প্লেসমেন্ট, রাইটস ইস্যু ও পাবলিক ইস্যু | intermediate | [10,11] | comparison | high |
| 14 | আন্ডাররাইটিং: ধারণা, প্রকার, গুরুত্ব | intermediate | [10] | concept | high |
| 15 | এক্সাম আন্সার ক্লিনিক: ইস্যু ম্যানেজমেন্ট প্রশ্ন কীভাবে লিখবে | intermediate | [10-14] | exam-drill | high |

### Group 4 — মার্চেন্ট ব্যাংকিং ও বাংলাদেশি প্রতিষ্ঠান
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 16 | মার্চেন্ট ব্যাংকিংয়ের ফাংশনস | intermediate | [2,3,10] | concept | high |
| 17 | ইস্যু ম্যানেজার, আন্ডাররাইটার, ব্রোকার, ডিলার — কে কী করে | intermediate | [14,16] | comparison | high |
| 18 | BSEC, DSE, CSE, CDBL, ICB — কার ভূমিকা কী | intermediate | [9,16] | regulation | high |
| 19 | ইনভেস্টর প্রোটেকশন, ইনসাইডার ট্রেডিং ও মার্কেট ডিসিপ্লিন | intermediate | [18] | regulation | high |
| 20 | বাংলাদেশ কনটেক্সট কেস লেসন: IPO থেকে লিস্টিং পর্যন্ত | intermediate | [10,12,18] | bangladesh-context | high |

### Group 5 — সেকেন্ডারি মার্কেট ও মার্কেট আচরণ
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 21 | ডিলিং বনাম ব্রোকারিং | intermediate | [17] | comparison | high |
| 22 | ডিলার রিস্ক ও ইনভেন্টরি ফাইন্যান্সিং | intermediate | [21] | analysis | medium |
| 23 | ব্রোকারেজ অ্যাবিউজ, কমপ্লায়েন্স ও সতর্কতা | intermediate | [19,21] | confusion-clinic | medium |
| 24 | সিকিউরিটি মার্কেট ইনডিকেটরস কীভাবে পড়বে | intermediate | [21] | analysis | supportive |

### Group 6 — পোর্টফোলিও, বিশ্লেষণ ও টেকনিক্যাল অ্যানালাইসিস
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 25 | পোর্টফোলিও ম্যানেজমেন্টের পরিচয় | intermediate | [6,7] | concept | high |
| 26 | Efficient Market ও Asset Pricing Basics | intermediate | [25] | concept | medium |
| 27 | Financial Statement Analysis for Investors | intermediate | [25] | analysis | high |
| 28 | Economic Analysis: অর্থনীতি থেকে বিনিয়োগ সিদ্ধান্ত | intermediate | [25] | analysis | medium |
| 29 | Industry Analysis ও Company Analysis | intermediate | [27,28] | analysis | high |
| 30 | Technical Analysis: ধারণা, ব্যবহার, সীমাবদ্ধতা | intermediate | [24,25] | analysis | medium |

### Group 7 — সিকিউরিটি ভ্যালুয়েশন
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 31 | ভ্যালুয়েশন প্রসেসের ওভারভিউ | intermediate | [27,29] | valuation | high |
| 32 | Bond Fundamentals ও Yield Logic | intermediate | [31] | valuation | high |
| 33 | Bond Valuation Step by Step | advanced | [32] | valuation | high |
| 34 | Equity Valuation Basics for Exam Answers | advanced | [31,29] | valuation | high |

### Group 8 — লিজ ফাইন্যান্সের ভিত্তি
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 35 | লিজ ফাইন্যান্স: ধারণা, উদ্দেশ্য ও অর্থনৈতিক ভূমিকা | beginner | [4] | concept | high |
| 36 | লিজের ধরনসমূহ | intermediate | [35] | concept | high |
| 37 | Finance Lease বনাম Operating Lease | intermediate | [36] | comparison | high |
| 38 | Lease বনাম Term Loan বনাম Hire Purchase | intermediate | [35,36,37] | comparison | high |
| 39 | Lessee's Perspective: Lease Evaluation | advanced | [38] | valuation | high |
| 40 | Lease Finance-এর সুবিধা, সীমাবদ্ধতা, accounting/tax angle | advanced | [37,39] | analysis | medium |

### Group 9 — বাংলাদেশে লিজ ফাইন্যান্স ও বাস্তব প্রয়োগ
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 41 | Equipment Lease Financing ও Sale-and-Lease-Back | advanced | [39,40] | process | high |
| 42 | বাংলাদেশে লিজ ফাইন্যান্সের চর্চা ও NBFI উদাহরণ | intermediate | [35,36] | bangladesh-context | high |
| 43 | Confusion Clinic: কোন পরিস্থিতিতে lease, loan, না hire purchase? | advanced | [38,39,42] | confusion-clinic | high |

### Group 10 — A+ রিভিশন ও পরীক্ষার কৌশল
| # | Title | Diff | Prereqs | Type | Yield |
|---|-------|------|---------|------|-------|
| 44 | Short Note Mastery: ২৫টি জরুরি টপিক | intermediate | [1,42] | short-note | high |
| 45 | Compare & Contrast Mastery: পরীক্ষার সেরা পার্থক্যগুলো | intermediate | [3,8,12,17,21,37,38] | revision | high |
| 46 | Final Exam Drill: বড় প্রশ্ন, কাঠামো, সময় ব্যবস্থাপনা | advanced | [44,45] | exam-drill | high |

### Sequencing rationale
- Lessons 1-9: remove fear, build vocabulary
- Lessons 10-20: biggest descriptive-exam scoring zone (issue management, merchant banking, BD institutions)
- Lessons 21-34: analysis/valuation spine students usually memorize badly
- Lessons 35-43: lease finance from "boring theory" to decision-making logic
- Lessons 44-46: convert content into A+-style writing behavior

---

## Part 5 — SEO Keywords (42)

nu investment banking and lease finance, 312401 investment banking and lease finance, investment banking and lease finance bangla, nu masters finance and banking 312401, national university investment banking and lease finance, investment banking and lease finance short note bangla, investment banking and lease finance suggestion, investment banking and lease finance mcq, investment banking and lease finance exam preparation, investment banking and lease finance A+ preparation, nu masters investment banking and lease finance bangla notes, investment banking and lease finance guide bangla, millennium publication 312401, investment banking and lease finance free course, no signup investment banking course bangla, মার্চেন্ট ব্যাংকিং বাংলা নোট, ইনভেস্টমেন্ট ব্যাংকিং বাংলা, লিজ ফাইন্যান্স বাংলা, ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স সাজেশন, ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স শর্ট নোট, ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স প্রশ্ন উত্তর, NU মাস্টার্স ফাইন্যান্স অ্যান্ড ব্যাংকিং 312401, NU মাস্টার্স ইনভেস্টমেন্ট ব্যাংকিং ও লিজ ফাইন্যান্স, মাস্টার্স ইনভেস্টমেন্ট ব্যাংকিং বাংলা, মার্চেন্ট ব্যাংকিং ও আন্ডাররাইটিং বাংলা, IPO fixed price vs book building bangla, primary vs secondary market bangla, lease vs loan vs hire purchase bangla, finance lease vs operating lease bangla, bond valuation bangla notes, equity valuation bangla for exam, portfolio management bangla nu, technical analysis bangla notes, BSEC DSE ICB bangla notes, Bangladesh capital market bangla course, Bangladesh lease finance examples, investment banking structure in Bangladesh, issue management bangla notes, underwriting bangla explanation, rights issue vs public issue bangla, prospectus bangla notes, bangla finance course free, national university masters bangla course no signup

---

## Part 6A — config.js (ready to deploy)

See: `courses/nu-investment-banking-lease-finance-bn/config.js`

## Part 6B — Claude Prompt for data.js

See: `courses/nu-investment-banking-lease-finance-bn/CLAUDE_PROMPT_FOR_DATA.md`

---

*Single reference for the entire course pipeline.*
