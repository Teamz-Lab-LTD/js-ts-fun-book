// config.js — Course Configuration
// Change these values to create a completely different learning course.
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'The JS & TS Fun Book',
  subtitle: 'From Zero to Fullstack Hero — NestJS + React Edition',
  shortTitle: 'JS & TS Fun Book',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://teamz-lab-ltd.github.io/js-ts-fun-book/',
  canonicalUrl: 'https://teamz-lab-ltd.github.io/js-ts-fun-book/the-js-ts-fun-book.html',
  ogImage: 'https://teamz-lab-ltd.github.io/js-ts-fun-book/og-image.png',

  // SEO
  description: 'Free interactive course: learn TypeScript, NestJS, React & fullstack development with {lessonCount} lessons, quizzes, and real-world code examples.',
  keywords: 'learn typescript, nestjs tutorial, react tutorial, fullstack development course',
  topics: ['TypeScript', 'JavaScript', 'NestJS', 'React', 'MongoDB', 'Docker', 'REST API', 'JWT Authentication', 'Prisma ORM', 'Redis', 'WebSockets'],
  educationalLevel: 'Beginner to Intermediate',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  topicMap: {
    'Fundamentals':[1,2],'TypeScript':[3,4,5,6,7,8,9,10,22],'Frontend':[11,12,13],
    'API & REST':[14],'NestJS':[15,16,17],'Database':[18,19],'Config':[20],
    'Security':[21],'Caching & Jobs':[23,24],'Services':[25,26,27],
    'Real-time':[28],'Testing':[29],'DevOps':[30,31,32],
    'Architecture':[33],'Integration':[34,35,36]
  },

  // Concept flow diagrams per lesson ID
  conceptFlows: {
    1:['JavaScript','+ Types','TypeScript','Safety'],
    2:['ESLint','Prettier','VSCode','Debug'],
    3:['let/const','Types','Arrays','Tuples'],
    4:['Object','Interface','Type Alias','Nested'],
    5:['function()','Arrow =>','Params','Return Type'],
    6:['export','import','Barrel','Dynamic'],
    7:['Union |','Type Guard','typeof','Narrowing'],
    8:['Class','Constructor','Methods','Inheritance'],
    9:['Promise','async','await','.then()'],
    10:['try','catch','throw','finally'],
    11:['JSX','Component','Props','State','Render'],
    12:['useState','fetch()','React Query','CORS'],
    13:['HTML/CSS','React','State Mgmt','Router'],
    14:['Endpoint','Method','Request','Response'],
    15:['Module','Controller','Service','NestJS'],
    16:['Module','Provider','Pipe','Interceptor'],
    17:['DTO','Validate','Transform','Reject/Accept'],
    18:['Document','Collection','MongoDB','Query'],
    19:['Schema','Migration','Prisma Client','Query'],
    20:['.env','ConfigModule','ConfigService','Secrets'],
    21:['Login','JWT Token','Guard','Protected'],
    22:['Generic<T>','Partial<T>','Pick<T>','Omit<T>'],
    23:['SET','GET','TTL','Redis Cache'],
    24:['Job','Queue','Worker','Bull Process'],
    25:['Template','SMTP','Send','Inbox'],
    26:['FCM','Token','Push','Device'],
    27:['Upload','S3 Bucket','URL','Download'],
    28:['Connect','Emit','Listen','Real-time'],
    29:['Unit Test','Integration','E2E','Coverage'],
    30:['Dockerfile','Build','Image','Container'],
    31:['git add','commit','push','PR','merge'],
    32:['Build','Test','Deploy','Monitor'],
    33:['Files','Monorepo','Shared Code','Apps'],
    34:['React DOM','React Native','Web','Mobile'],
    35:['Frontend','API','Backend','Database'],
    36:['Learn','Build','Ship','Grow']
  },

  // Spaced Repetition settings
  srs: {
    boxes: 5,               // Leitner box count
    intervals: [0, 1, 3, 7, 14], // Days between reviews per box (box 0 = immediate)
    reviewBatchSize: 10     // Max questions per review session
  },

  // XP rewards
  xp: {
    lessonComplete: 20,
    quizPerfect: 30,
    quizGood: 20,
    quizOk: 10,
    typingChallenge: 15,
    selfExplanation: 10,
    reviewCorrect: 5,
    mixedQuizComplete: 25
  },

  // Social sharing
  social: {
    hashtags: 'TypeScript,NestJS,React,WebDev,LearnToCode',
    tweetTemplate: 'Just found this amazing FREE interactive tutorial to learn TypeScript, NestJS & React! {lessonCount} lessons with quizzes and fun analogies.'
  },

  // Footer stats (auto-calculated if not set)
  footerTagline: 'Learn TypeScript, NestJS, React, MongoDB, Prisma, Docker, JWT Authentication, Redis, WebSockets & more — all in one place.'
};
