// config.js — Course Configuration
// Change these values to create a completely different learning course.
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'Free Full-Stack Playbook',
  subtitle: 'From Idea to Deployed App — <strong>~10 min/lesson</strong> — Learn to Build Real Apps Free | by Teamz Lab',
  shortTitle: 'Full-Stack Playbook',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://teamz-lab-ltd.github.io/teamz-lab-learning/',
  canonicalUrl: 'https://teamz-lab-ltd.github.io/teamz-lab-learning/learn.html?course=js-ts-fun-book',
  ogImage: 'https://teamz-lab-ltd.github.io/teamz-lab-learning/og-image.png',

  // SEO
  description: 'Free interactive playbook: learn to build real apps with TypeScript, React, NestJS, AI & more. {lessonCount} hands-on lessons, quizzes, code playground — no signup required.',
  keywords: 'free full stack playbook, learn to build apps 2026, typescript tutorial free, nestjs tutorial, react tutorial, fullstack developer roadmap, learn to code free, free coding bootcamp no signup, AI app development, build real apps from scratch',
  topics: ['TypeScript', 'JavaScript', 'NestJS', 'React', 'MongoDB', 'Docker', 'REST API', 'JWT Authentication', 'Prisma ORM', 'Redis', 'WebSockets'],
  educationalLevel: 'Beginner to Intermediate',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  // Topic categories ordered from beginner → advanced
  topicMap: {
    'Getting Started':[37,38,39,40],
    'Fundamentals':[1,2],
    'TypeScript Basics':[3,4,5,6,7],
    'TypeScript Advanced':[8,9,10,22],
    'Frontend':[11,12,13],
    'API & REST':[14],
    'NestJS':[15,16,17],
    'Database':[18,19],
    'Config':[20],
    'Security':[21],
    'Caching & Jobs':[23,24],
    'Services':[25,26,27],
    'Real-time':[28],
    'Testing':[29],
    'DevOps':[30,31,32],
    'Architecture':[33],
    'Integration':[34,35,36]
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
    36:['Learn','Build','Ship','Grow'],
    37:['Idea','Instructions','Code','Run'],
    38:['VS Code','Node.js','Terminal','npm'],
    39:['Browser','Request','Server','Response'],
    40:['Write','Run','Debug','Celebrate']
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
    hashtags: 'FullStackPlaybook,TypeScript,NestJS,React,LearnToCode,WebDev2026',
    tweetTemplate: 'Just found this FREE Full-Stack Playbook — {lessonCount} interactive lessons to build real apps with TypeScript, React & NestJS! Quizzes, code playground, and zero signup.'
  },

  // Footer stats (auto-calculated if not set)
  footerTagline: 'Learn TypeScript, NestJS, React, MongoDB, Prisma, Docker, JWT Authentication, Redis, WebSockets & more — all in one place.'
};
