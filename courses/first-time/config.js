const COURSE_CONFIG = {
  title: 'First-Time Home Buying, Plainly Explained',
  subtitle: 'Who qualifies, which loan, how small the down payment can really be, and what a "grant" actually is — <strong>10 cited lessons</strong> before you talk to a lender',
  shortTitle: 'First-Time Buyer',
  org: 'Teamz Lab',
  orgUrl: 'https://teamzlab.com',
  orgFull: 'Teamz Lab LTD',
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=first-time',
  ogImage: 'https://learn.teamzlab.com/og-first-time.png',
  description: 'Free interactive course with {lessonCount} lessons on buying your first home in the US — who legally counts as a first-time buyer, how FHA, conventional 97, USDA and VA loans differ, what down payment you actually need, how down payment assistance and grants really work, what state Housing Finance Agency programs do, VA loans, mortgage credit certificates and the expired federal tax credit, how to compare lenders with a Loan Estimate, and what happens at closing. Every lesson cites its source (HUD, the IRS, the CFPB, VA, Fannie Mae, the Code of Federal Regulations). Educational only — not lending, tax or legal advice. No signup.',
  keywords: 'first time homebuyer, first time home buyer, first time home buyer programs, first time home buyer loans, first time home buyer grants, first time homeowners program, first time home buyer lenders, first time home buyer assistance programs, first time home buyer financing, first time buyer mortgage, first time home buyer down payment, first time home buyer down payment assistance, first time home buyer loans with zero down, va first time home buyer loan, va first time home buyer programs, first time homebuyer tax credit, first time home buyer credits, first time home buyer benefits, first time home buyer perks, first time home buyer qualifications, first time home buyer realtor, first time home grants, FHA loan, conventional 97, HomeReady, Home Possible, USDA loan, mortgage credit certificate, Loan Estimate, down payment assistance, housing finance agency',
  topics: [
    'Do You Even Qualify',
    'Which Loan',
    'The Down Payment',
    'Assistance & Grants',
    'State Programs',
    'Tax Credits & Perks',
    'Choosing A Lender',
    'Agent & Closing'
  ],
  educationalLevel: 'All Levels — Written for People Buying Their First Home',
  footerTagline: 'Educational only — not lending, tax or legal advice. Confirm every number with the HUD, IRS, VA or CFPB page named in the lesson, and with your own Loan Estimate.',
  thinkDeeperQ: 'Imagine you are three days from closing and a line on your Closing Disclosure is $4,800 higher than the Loan Estimate you were given. How would understanding <strong>{title}</strong> change what you do in that moment — and what you would have asked for weeks earlier?',
  topicMap: {
    'Do You Even Qualify': [1],
    'Which Loan': [2],
    'The Down Payment': [3],
    'Assistance & Grants': [4, 5],
    'State Programs': [6],
    'Tax Credits & Perks': [7, 8],
    'Choosing A Lender': [9],
    'Agent & Closing': [10]
  },
  conceptFlows: {
    1: ['"First-time" is a legal test, not a life story', 'The test is three years without owning a principal residence', 'Several exceptions let owners qualify anyway', 'Each program can add its own income and price limits'],
    2: ['Four loan families dominate first purchases', 'FHA trades a low credit bar for mortgage insurance', 'Conventional 97 keeps insurance cancellable', 'USDA and VA can reach zero down if you are eligible'],
    3: ['20% down is a myth, not a rule', 'Low down payment costs you mortgage insurance, not the loan', 'Closing costs are a separate pile of cash', 'Zero down exists but only through specific doors'],
    4: ['Down payment assistance is usually a second loan', 'Forgivable, deferred or repayable changes everything', 'It is administered locally, not federally', 'Layering DPA on top of a first mortgage has rules'],
    5: ['A true grant is money you never repay', 'HUD does not hand grants to individual buyers', 'Real grants come from HFAs, nonprofits and employers', 'If it has a lien and a clock, it is not a grant'],
    6: ['Every state runs a Housing Finance Agency', 'HFA loans are funded by bonds, so they carry limits', 'Income caps, price caps and buyer education are normal', 'Selling early can trigger federal recapture tax'],
    7: ['The 2008-2010 federal credit expired', 'A Mortgage Credit Certificate is the real credit', 'It cuts tax owed, not income taxed', 'You claim it every year with Form 8396'],
    8: ['Some perks are tax law, some are program perks', 'The IRA first-home exception is capped and lifetime', 'Seller concessions have hard limits by loan type', 'Free HUD-approved counseling exists nationwide'],
    9: ['Shop lenders, not just rates', 'The Loan Estimate is standardised so it can be compared', 'Rate-shopping inquiries collapse into one on your score', 'Some fees may not legally change at all'],
    10: ['Your agent is now hired in writing', 'Contingencies are your exit doors', 'Closing Disclosure lands three business days ahead', 'A home purchase has no three-day cancel right']
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
    hashtags: '#FirstTimeHomeBuyer #Mortgage #DownPayment #HomeBuying #TeamzLab',
    tweetTemplate: 'I am learning how first-time home buying actually works in the US — who qualifies, FHA vs conventional vs VA, down payment assistance, and what a "grant" really is. Free cited interactive course by Teamz Lab. No signup needed.'
  },
  branding: {
    trustStrip: 'We build data and analytics products for lending, property and finance companies. <strong>This free course is how we give back.</strong> Educational only — not lending, tax or legal advice.',
    trustStripCta: 'Need a data or analytics team? Talk to us',
    headerSubtitle: 'Understand First-Time Home Buying in ~8 min/lesson — Free, Cited, No Upsell | by',
    footerCtaTitle: 'Data & Analytics for Lending and Property',
    footerCtaDesc: 'Teamz Lab builds <strong style="color:var(--heading)">underwriting tools, eligibility engines, and borrower-facing calculators</strong> for lenders and property companies. We wrote this free course so an ordinary buyer can read a Loan Estimate — imagine what we can build for your product team.',
    services: [
      { name: 'Eligibility & Pricing Engines', desc: 'Rules engines that turn program guidelines, income caps and area limits into an answer a borrower can trust' },
      { name: 'Borrower-Facing Calculators', desc: 'Affordability, down payment and closing-cost tools that match the real disclosure a lender must issue' },
      { name: 'Underwriting & Document Pipelines', desc: 'Internal apps that collect, classify and validate borrower documents before an underwriter opens the file' },
      { name: 'Data Platforms', desc: 'Warehouses, ETL and reporting stacks for lending, property and finance teams' }
    ]
  }
};
