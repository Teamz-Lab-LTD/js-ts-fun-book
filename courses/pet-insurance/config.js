const COURSE_CONFIG = {
  title: 'Pet Insurance, Plainly Explained',
  subtitle: 'How pet insurance actually works, what it costs, and where the fine print bites — <strong>10 evidence-based lessons</strong> before you buy',
  shortTitle: 'Pet Insurance',
  org: 'Teamz Lab',
  orgUrl: 'https://teamzlab.com',
  orgFull: 'Teamz Lab LTD',
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=pet-insurance',
  ogImage: 'https://learn.teamzlab.com/og-pet-insurance.png',
  description: 'Free interactive course with {lessonCount} lessons on pet insurance — what a policy really covers, dog vs cat plans, how quotes are calculated, plan types, real average costs from the NAPHIA industry report, how to compare providers, and the pre-existing condition trap. Cites the NAPHIA State of the Industry report and the NAIC Pet Insurance Model Act. No signup.',
  keywords: 'pet insurance, pet insurance for dogs, pet insurance for cats, pet insurance plans, pet insurance quotes, pet insurance cost, pet insurance comparison, pet insurance how much, pet insurance pre existing conditions, pet insurance basics, how pet insurance works, is pet insurance worth it, pet insurance waiting period, pet insurance deductible, pet insurance reimbursement, accident and illness policy, wellness plan, nonprofit pet insurance, NAPHIA report, NAIC pet insurance model act',
  topics: [
    'What Pet Insurance Is',
    'Dogs & Cats',
    'Plans & Quotes',
    'Provider Types',
    'Real Cost & Value',
    'Pre-Existing Conditions'
  ],
  educationalLevel: 'All Levels — First-Time Pet Owners Welcome',
  footerTagline: 'Read the policy before the emergency, not during it.',
  thinkDeeperQ: 'Imagine your dog swallows a sock next week and the surgery quote is $4,800. How would understanding <strong>{title}</strong> change what you do in that moment — and what you would have signed up for months earlier?',
  topicMap: {
    'What Pet Insurance Is': [1],
    'Dogs & Cats': [2, 3],
    'Plans & Quotes': [4, 5],
    'Provider Types': [6],
    'Real Cost & Value': [7, 8, 9],
    'Pre-Existing Conditions': [10]
  },
  conceptFlows: {
    1: ['Vet bills can be $3k–$10k in one visit', 'You pay a monthly premium', 'Vet charges you, you file a claim', 'Insurer reimburses a percentage'],
    2: ['Dogs cost more to insure than cats', 'Breed and size shift the price', 'Common claims: cruciate tears, cancer, foreign body', 'Enroll young — before pre-existing kicks in'],
    3: ['Cats cost less on average', 'Kidney disease and dental are top claims', 'Indoor cats still get sick', 'Some policies exclude routine dental'],
    4: ['Accident-only = cheapest, narrowest', 'Accident + illness = the standard plan', 'Wellness = optional add-on for routine care', 'Compare on the same deductible/reimbursement/limit'],
    5: ['Quote asks species, breed, age, ZIP', 'Older pet = higher premium', 'Deductible ↑ → premium ↓', 'Reimbursement % changes payout, not eligibility'],
    6: ['Some brands are nonprofit-licensed', 'A commercial insurer actually underwrites', 'Check who pays the claim, not the logo', 'NAIC requires the underwriter be disclosed'],
    7: ['NAPHIA reports real US averages', 'Dog: ~$56/mo accident+illness', 'Cat: ~$32/mo accident+illness', 'Your quote will differ by breed and ZIP'],
    8: ['Compare on identical deductible/coverage/limit', 'Read the exclusions list first', 'Waiting periods vary by condition', 'Direct-pay to vet is rare'],
    9: ['Premium × 12 = annual cost', 'Add deductible before any payout', 'Reimbursement % caps payout', 'One big claim usually justifies years of premium'],
    10: ['Pre-existing = symptoms before coverage', 'Bilateral exclusions catch owners off-guard', 'Curable conditions may be re-covered after symptom-free period', 'Enrollment age is the single biggest lever']
  },
  srs: { boxes: 5, intervals: [0, 1, 3, 7, 14], reviewBatchSize: 10 },
  xp: {
    lessonComplete: 20,
    quizPerfect: 30,
    challengeComplete: 25,
    bugSolved: 25,
    flashcardMastered: 10,
    reviewComplete: 15
  },
  social: {
    hashtags: '#PetInsurance #DogHealth #CatHealth #PetOwners #TeamzLab',
    tweetTemplate: 'I am learning how pet insurance actually works — deductibles, reimbursement, pre-existing traps — free interactive course by Teamz Lab. No signup needed.'
  },
  branding: {
    trustStrip: 'We build data and analytics products for insurance and consumer finance companies. <strong>This free course is how we give back.</strong>',
    trustStripCta: 'Need a data or analytics team? Talk to us',
    headerSubtitle: 'Understand Pet Insurance in ~8 min/lesson — Free, Cited, No Upsell | by',
    footerCtaTitle: 'Data & Analytics for Consumer Finance',
    footerCtaDesc: 'Teamz Lab builds <strong style="color:var(--heading)">quote engines, claims analytics, and comparison tools</strong> for insurance and finance companies. We wrote this free course to help pet owners read a policy — imagine what we can build for your product team.',
    services: [
      { name: 'Quote & Rating Engines', desc: 'Backend systems that price policies from breed, ZIP, age, and risk history' },
      { name: 'Claims Analytics', desc: 'Fraud detection and reimbursement automation for insurers processing thousands of claims monthly' },
      { name: 'Comparison & Marketplace Sites', desc: 'Consumer-facing comparison tools with schema, SEO, and honest disclosure' },
      { name: 'Data Platforms', desc: 'Warehouses, dashboards, and reporting stacks for finance and insurance teams' }
    ]
  }
};
