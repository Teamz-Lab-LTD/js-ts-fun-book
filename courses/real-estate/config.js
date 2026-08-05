const COURSE_CONFIG = {
  title: 'Real Estate, Plainly Explained',
  subtitle: 'Appraisals, entities, REITs, rentals and the tax bills nobody warns you about — <strong>10 cited lessons</strong> before you sign anything',
  shortTitle: 'Real Estate',
  org: 'Teamz Lab',
  orgUrl: 'https://teamzlab.com',
  orgFull: 'Teamz Lab LTD',
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=real-estate',
  ogImage: 'https://learn.teamzlab.com/og-real-estate.png',
  description: 'Free interactive course with {lessonCount} lessons on US real estate fundamentals — what an appraiser actually does, holding property in an LLC or corporation, how REITs work, capital gains tax on a sale, what a real estate CPA is for, writing an investor or agent business plan, rental income and expenses, property taxes, and transfer tax at closing. Every lesson cites its source (IRS publications, the Internal Revenue Code, USPAP, HUD, NAR). Educational only — not tax or legal advice. No signup.',
  keywords: 'real estate, real estate investing, real estate appraisers, real estate appraisal, real estate investment corporation, real estate llc formation, real estate income trust, REIT, real estate trust, real estate gains tax, real estate capital gains tax, capital gains exclusion, real estate cpa, real estate professional tax benefits, real estate business plan, real estate agent business plan, real estate rentals, rental property taxes, real estate taxes, property tax, real estate transfer tax, deed tax, closing costs, section 121, section 1031, depreciation 27.5 years',
  topics: [
    'How Value Is Set',
    'How You Hold It',
    'Taxes On A Sale',
    'Your Tax Team',
    'Business Plans',
    'Rental Income',
    'Taxes While You Own'
  ],
  educationalLevel: 'All Levels — First-Time Buyers and New Investors Welcome',
  footerTagline: 'Educational only — not tax, legal or investment advice. Confirm every number with the IRS publication or state office named in the lesson.',
  thinkDeeperQ: 'Imagine you are 10 days from closing on a property and a number on the settlement statement is $9,000 higher than you budgeted. How would understanding <strong>{title}</strong> change what you do in that moment — and what you would have checked weeks earlier?',
  topicMap: {
    'How Value Is Set': [1],
    'How You Hold It': [2, 3],
    'Taxes On A Sale': [4],
    'Your Tax Team': [5],
    'Business Plans': [6, 8],
    'Rental Income': [7],
    'Taxes While You Own': [9, 10]
  },
  conceptFlows: {
    1: ['Lender needs an independent opinion of value', 'Appraiser inspects and pulls comparable sales', 'Three approaches: sales comparison, cost, income', 'Lender lends against the LOWER of price or appraised value'],
    2: ['An entity is a liability wrapper, not a tax trick', 'LLC is the default choice for rentals', 'A C corporation adds a second layer of tax', 'Formation is state law — taxation is federal law'],
    3: ['A REIT is a company that owns income-producing real estate', 'It must pay out at least 90% of taxable income', 'You buy shares, not a building', 'Listed vs non-traded changes liquidity and fees'],
    4: ['Gain = net sale price minus adjusted basis', 'Held over a year = long-term rates', 'Your main home may exclude $250k / $500k', 'Depreciation you took gets recaptured'],
    5: ['A CPA is a licensed, exam-tested professional', 'Real estate CPAs work on basis, depreciation and entity choice', 'Real estate professional status has a 750-hour test', 'Bring records, not a shoebox, in January'],
    6: ['State the strategy in one sentence', 'Define the buy box: market, price, property type', 'Model the numbers before you shop', 'Write the exit and the risk plan'],
    7: ['Rent minus operating expenses = NOI', 'Mortgage payment comes out after NOI', 'Depreciation is a paper expense over 27.5 years', 'Losses may be limited by passive activity rules'],
    8: ['Lead source is the whole plan', 'Commission is split before you see it', 'Written buyer agreements are required since Aug 17 2024', 'Track cost per lead, not gross volume'],
    9: ['Property tax = assessed value x mill rate', 'Assessment is not market value', 'You can appeal an assessment', 'Deduction is capped and needs itemizing'],
    10: ['A one-time tax on the transfer of the deed', 'Rate is set by state, county and city', 'Custom decides who pays, contract decides finally', 'Some states charge nothing at all']
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
    hashtags: '#RealEstate #RealEstateInvesting #REIT #PropertyTax #TeamzLab',
    tweetTemplate: 'I am learning how US real estate actually works — appraisals, LLCs, REITs, capital gains and transfer tax — free cited interactive course by Teamz Lab. No signup needed.'
  },
  branding: {
    trustStrip: 'We build data and analytics products for property, lending and finance companies. <strong>This free course is how we give back.</strong> Educational only — not tax or legal advice.',
    trustStripCta: 'Need a data or analytics team? Talk to us',
    headerSubtitle: 'Understand Real Estate in ~8 min/lesson — Free, Cited, No Upsell | by',
    footerCtaTitle: 'Data & Analytics for Property and Finance',
    footerCtaDesc: 'Teamz Lab builds <strong style="color:var(--heading)">valuation models, rent-roll analytics, and underwriting tools</strong> for property and lending companies. We wrote this free course to help ordinary buyers read a settlement statement — imagine what we can build for your product team.',
    services: [
      { name: 'Valuation & AVM Pipelines', desc: 'Comparable-sales ingestion, cleaning, and automated value models with auditable inputs' },
      { name: 'Rent Roll & Portfolio Analytics', desc: 'Dashboards that turn leases, expenses and NOI into decisions a partner can defend' },
      { name: 'Underwriting & Deal Tools', desc: 'Internal apps that model cash flow, debt service and exit scenarios for acquisitions teams' },
      { name: 'Data Platforms', desc: 'Warehouses, ETL, and reporting stacks for property, lending and finance teams' }
    ]
  }
};
