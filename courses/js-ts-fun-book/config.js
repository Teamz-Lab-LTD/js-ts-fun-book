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
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=js-ts-fun-book',
  ogImage: 'https://learn.teamzlab.com/og-image.png',

  // SEO
  description: 'Free interactive, project-based playbook: learn TypeScript, NestJS, and React by building real apps. {lessonCount} hands-on lessons, quizzes, code playground — no signup required.',
  keywords: 'interactive typescript course, nestjs tutorial for beginners, nestjs course no signup, project based full stack course, react nestjs tutorial, fullstack roadmap with quizzes, free coding bootcamp no signup, learn nestjs by building api, typescript react nestjs course free, gamified coding course, full stack developer roadmap, build real apps from scratch, learn typescript free 2026, nestjs crash course, typescript for beginners, free full stack course online, nestjs mongodb tutorial, react typescript tutorial free, rest api tutorial nestjs, jwt authentication tutorial, prisma orm tutorial, redis caching tutorial, websockets tutorial nestjs, docker for beginners, nestjs guards middleware, backend development course free, frontend backend tutorial, coding course with quizzes, learn programming free no signup',
  topics: ['TypeScript', 'JavaScript', 'NestJS', 'React', 'MongoDB', 'Docker', 'REST API', 'JWT Authentication', 'Prisma ORM', 'Redis', 'WebSockets', 'NestJS CRUD', 'NestJS Guards', 'NestJS Middleware'],
  educationalLevel: 'Beginner to Intermediate',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  // Topic categories ordered from beginner → advanced
  topicMap: {
    'Getting Started':[37,38,39,40],
    'Fundamentals':[1],
    'TypeScript Basics':[3,4,5,6,7,2],
    'TypeScript Advanced':[8,9,10,22],
    'Frontend':[11,12,13],
    'API & REST':[14],
    'Security':[21],
    'NestJS':[15,41,42,43,16,17,44,45,46,47],
    'Database':[18,19,49],
    'Config':[20],
    'Caching & Jobs':[23,24],
    'Services':[25,26,27],
    'Real-time':[28],
    'Testing':[29],
    'DevOps':[30,31,32],
    'Architecture':[33],
    'Integration':[34,35,36],
    'Projects':[48]
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
    40:['Write','Run','Debug','Celebrate'],
    41:['CLI','Scaffold','Structure','Run'],
    42:['@Controller','@Get/@Post','@Param','@Body'],
    43:['@Injectable','Constructor','Providers','Singleton'],
    44:['Middleware','next()','Interceptor','RxJS pipe'],
    45:['Guard','canActivate','@Roles','@CurrentUser'],
    46:['throw Error','@Catch','Filter','Response'],
    47:['Create','Read','Update','Delete'],
    48:['Schema','Auth','CRUD','Filter','Deploy'],
    49:['1:1','1:N','M:N','Foreign Key','Query']
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
  footerTagline: 'Learn TypeScript, NestJS, React, MongoDB, Prisma, Docker, JWT Authentication, Redis, WebSockets & more — all in one place.',
  thinkDeeperQ: 'Imagine you\'re building a real app (like Instagram or a to-do list). Why would you need <strong>{title}</strong>? What problems would you face WITHOUT it?',

  // Branding & ebook promotion
  branding: {
    trustStrip: 'We build production-grade web & mobile apps with TypeScript, NestJS, React & Flutter. <strong>This free course is how we give back.</strong>',
    trustStripCta: 'Need a full-stack team? Talk to us',
    headerSubtitle: 'From Idea to Deployed App — Free, Project-Based Full-Stack Training | by',
    ebookUrl: 'https://www.amazon.com/dp/B0GS3GSJ5V',
    ebookTitle: 'Get the Full Book',
    ebookSubtitle: 'Zero to Advanced Web Dev — the complete guide on Amazon',
    footerCtaTitle: 'Need a Full-Stack Team for Your Product?',
    footerCtaDesc: 'Teamz Lab builds production web apps, mobile apps, and SaaS platforms with <strong style="color:var(--heading)">TypeScript, NestJS, React & Flutter</strong>. We built this free course — imagine what we can build for your business.',
    services: [
      { name: 'Full-Stack Web Apps', desc: 'Production-grade TypeScript + NestJS + React applications with scalable architecture' },
      { name: 'Mobile App Development', desc: 'Cross-platform Flutter & React Native apps for iOS and Android' },
      { name: 'SaaS & API Development', desc: 'Custom SaaS platforms, REST/GraphQL APIs, and microservices architecture' },
      { name: 'AI Integration & Consulting', desc: 'Integrate AI capabilities into your existing products — chatbots, automation, and intelligent features' }
    ]
  }
};
