const COURSE_CONFIG = {
  title: 'High-Yield Savings, Plainly Explained',
  subtitle: 'What "high yield" actually means, how APY is calculated, where the rate comes from, when a CD beats a savings account — <strong>10 cited lessons</strong> before you move a single dollar',
  shortTitle: 'High-Yield Savings',
  org: 'Teamz Lab',
  orgUrl: 'https://teamzlab.com',
  orgFull: 'Teamz Lab LTD',
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=high-yield',
  ogImage: 'https://learn.teamzlab.com/og-image.png',
  description: 'Free interactive course with {lessonCount} lessons on high-yield savings accounts, CDs and money market accounts in the US — what "high yield" legally is (and is not), how APY is defined and calculated under Regulation DD, how FDIC and NCUA insurance really work and what the $250,000 limit covers, where deposit rates come from and why they move, how a certificate of deposit differs from a savings account, how early withdrawal penalties are calculated, why online banks pay more, bank CDs vs brokered CDs, how interest is taxed on Form 1099-INT, and how to size an emergency fund. Every lesson cites its source (FDIC, NCUA, the CFPB, the Federal Reserve, the IRS, the Code of Federal Regulations). Educational only — not financial, tax or investment advice. No signup.',
  keywords: 'high yield savings account, high yield interest savings account, high yield savings, high yield savings account rates, high yield cd, high yield cd rates, high yield online savings account, high yield certificate of deposit, high yield interest savings, high yield savings account for emergency fund, high yield money market account, high yield savings account interest rate, high yield online banks, high yield savings account credit union, high yield savings account comparison, high yield savings account with no fees, APY, Regulation DD, Truth in Savings, FDIC insurance, NCUA share insurance, early withdrawal penalty, CD ladder, 1099-INT, emergency fund',
  topics: [
    'What It Actually Is',
    'How The Interest Works',
    'Is The Money Safe',
    'Rates & Why They Move',
    'CDs Explained',
    'Online Banks',
    'CD Types & Traps',
    'Taxes & Real Return',
    'Your Emergency Fund'
  ],
  educationalLevel: 'All Levels — Written for Ordinary Savers',
  footerTagline: 'Educational only — not financial, tax or investment advice. Every rate changes; confirm today\'s numbers and every term on the bank\'s own account disclosure and on the FDIC, NCUA, CFPB or IRS page named in the lesson.',
  thinkDeeperQ: 'Imagine you moved your emergency fund into a new account last month, and this month the bank quietly cut the rate by a full percentage point with no email. How would understanding <strong>{title}</strong> change what you do next — and what you would have checked before you opened it?',
  topicMap: {
    'What It Actually Is': [1],
    'How The Interest Works': [2],
    'Is The Money Safe': [3],
    'Rates & Why They Move': [4],
    'CDs Explained': [5, 6],
    'Online Banks': [7],
    'CD Types & Traps': [8],
    'Taxes & Real Return': [9],
    'Your Emergency Fund': [10]
  },
  conceptFlows: {
    1: ['"High yield" is marketing, not a product category', 'Underneath it is an ordinary deposit account', 'The rate is variable and can change any day', 'What makes it good is the rate plus the fee schedule'],
    2: ['Interest rate and APY are two different numbers', 'APY is defined by federal rule, so it is comparable', 'Compounding frequency matters far less than the rate', 'APY is a yearly figure, not a monthly one'],
    3: ['Deposit insurance is per depositor, per bank, per category', 'The standard limit is $250,000', 'Credit unions use NCUA, not FDIC', 'An app is not a bank — know who holds the deposit'],
    4: ['Deposit rates follow the Fed, loosely and late', 'The FDIC publishes a national average weekly', 'A variable rate needs no notice to fall', 'Compare APY, minimums and conditions together'],
    5: ['A CD trades access for a fixed rate', 'The term is a contract, not a suggestion', 'Breaking it costs a disclosed penalty', 'Savings wins on access, CDs win on certainty'],
    6: ['Longer term does not always mean higher rate', 'The penalty is stated in days of interest', 'A penalty can eat into principal', 'A ladder buys certainty without locking everything'],
    7: ['Online banks pay more because branches cost money', 'Insurance is identical if the charter is real', 'Money moves by ACH, which takes days', 'The trade-off is convenience, not safety'],
    8: ['A bank CD and a brokered CD are different animals', 'Callable means the bank can end it early', 'Insurance is counted per issuing bank', 'Brokered CDs are sold, not redeemed'],
    9: ['Interest is ordinary income in the year credited', 'A 1099-INT arrives at $10 or more', 'State tax changes the comparison', 'Real return is after tax and after inflation'],
    10: ['An emergency fund is sized in months of expenses', 'Access speed matters more than the last basis point', 'Keeping it at a separate bank adds friction on purpose', 'Never lock an emergency fund in a CD']
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
    hashtags: '#HighYieldSavings #APY #PersonalFinance #EmergencyFund #TeamzLab',
    tweetTemplate: 'I am learning how high-yield savings actually works — what APY really measures, what FDIC insurance covers, and when a CD beats a savings account. Free cited interactive course by Teamz Lab. No signup needed.'
  },
  branding: {
    trustStrip: 'We build data and analytics products for banking, lending and finance companies. <strong>This free course is how we give back.</strong> Educational only — not financial, tax or investment advice.',
    trustStripCta: 'Need a data or analytics team? Talk to us',
    headerSubtitle: 'Understand High-Yield Savings in ~8 min/lesson — Free, Cited, No Upsell | by',
    footerCtaTitle: 'Data & Analytics for Banking and Finance',
    footerCtaDesc: 'Teamz Lab builds <strong style="color:var(--heading)">rate engines, deposit dashboards, and customer-facing calculators</strong> for banks and fintech teams. We wrote this free course so an ordinary saver can read an account disclosure — imagine what we can build for your product team.',
    services: [
      { name: 'Rate & Product Engines', desc: 'Services that turn tiered rates, minimums and qualifying conditions into one number a customer can trust' },
      { name: 'Customer-Facing Calculators', desc: 'APY, compounding and early-withdrawal tools whose output matches the disclosure your compliance team signed off' },
      { name: 'Deposit & Treasury Dashboards', desc: 'Internal reporting on balances, rate sensitivity and cost of funds, built on your own warehouse' },
      { name: 'Data Platforms', desc: 'Warehouses, ETL and reporting stacks for banking, lending and finance teams' }
    ]
  }
};
