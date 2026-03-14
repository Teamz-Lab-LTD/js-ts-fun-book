// config.js — Flutter & Dart Course Configuration
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'Free Flutter Course: Beginner to Professional',
  subtitle: 'Learn Flutter & Dart by Building Real Apps — <strong>51 Hands-On Lessons</strong> — BLoC, Clean Architecture, CRUD, Firebase & More | Free, No Signup | by Teamz Lab',
  shortTitle: 'Flutter & Dart',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=flutter-dart-masterclass',
  ogImage: 'https://learn.teamzlab.com/og-flutter.png',

  // SEO
  description: 'Free interactive Flutter & Dart course with {lessonCount} hands-on lessons. Learn mobile app development from scratch: Dart programming, widgets, BLoC state management, Clean Architecture, CRUD operations, REST APIs with Dio, Hive local storage, Firebase Auth, GoRouter navigation, GetIt dependency injection, and testing. Build real cross-platform apps. No signup required.',
  keywords: 'flutter course free, flutter tutorial for beginners, learn flutter 2026, dart programming tutorial, flutter app development course, flutter bloc tutorial, clean architecture flutter, flutter firebase tutorial, flutter crud app, flutter rest api tutorial, flutter hive database, flutter gorouter tutorial, flutter getit dependency injection, flutter for beginners free, cross-platform app development course, flutter project based learning, learn dart programming free, flutter state management tutorial, flutter testing tutorial, mobile app development free course, flutter repository pattern',
  topics: ['Dart', 'Flutter', 'Widgets', 'State Management', 'BLoC Pattern', 'Clean Architecture', 'Repository Pattern', 'CRUD Operations', 'GoRouter', 'Dio HTTP', 'REST API', 'Hive Database', 'Firebase Auth', 'GetIt DI', 'JSON Serialization', 'Error Handling', 'Testing'],
  educationalLevel: 'Absolute Beginner to Professional',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  topicMap: {
    'Getting Started':        [1, 2, 3, 4],
    'Dart Basics':            [5, 6, 7, 8, 9, 10, 11],
    'Dart Intermediate':      [12, 13, 14, 15],
    'Flutter Basics':         [16, 17, 18, 19, 20],
    'UI Building':            [21, 22, 23, 24, 25, 26],
    'Reusable UI':            [27, 28],
    'Navigation':             [29, 30, 31],
    'State Management':       [32, 33, 34, 35],
    'Architecture':           [36, 37, 38, 39],
    'Dependency Injection':   [40, 41],
    'Networking & CRUD':      [42, 43, 44],
    'Local Storage':          [45, 46],
    'Firebase':               [47, 48],
    'Professional Patterns':  [49, 50, 51]
  },

  // Concept flow diagrams per lesson ID (4 concepts each)
  conceptFlows: {
    1:  ['Idea', 'Instructions', 'Code', 'App'],
    2:  ['Dart', 'Flutter', 'Widgets', 'Beautiful Apps'],
    3:  ['Download', 'Install', 'flutter doctor', 'Ready!'],
    4:  ['Create', 'Edit', 'Hot Reload', 'Celebrate'],
    5:  ['var/final/const', 'int/double', 'String/bool', 'Type Safety'],
    6:  ['String', 'Interpolation', 'Methods', 'Numbers & Math'],
    7:  ['true/false', 'if/else', 'switch', 'Ternary ?:'],
    8:  ['List', 'Map', 'Set', 'Iterate'],
    9:  ['for loop', 'while', 'forEach', 'map/filter'],
    10: ['Parameters', 'Return', 'Arrow =>', 'First-class'],
    11: ['class', 'Properties', 'Methods', 'Objects'],
    12: ['Named {}', 'Required', 'Default', 'Factory'],
    13: ['extends', 'override', 'mixin', 'Polymorphism'],
    14: ['Nullable ?', 'Non-null !', 'Late', 'Sound Safety'],
    15: ['Future', 'async/await', 'Stream', 'Listen'],
    16: ['Widget Tree', 'Build()', 'Compose', 'Everything'],
    17: ['Stateless', 'build()', 'const', 'Immutable'],
    18: ['Stateful', 'setState()', 'Lifecycle', 'Rebuild'],
    19: ['MaterialApp', 'Scaffold', 'AppBar', 'Body'],
    20: ['Text', 'Icon', 'Image', 'Style'],
    21: ['ElevatedButton', 'TextButton', 'IconButton', 'onPressed'],
    22: ['Row', 'Column', 'MainAxis', 'CrossAxis'],
    23: ['Container', 'Padding', 'SizedBox', 'Decoration'],
    24: ['ListView', 'GridView', 'builder()', 'Scroll'],
    25: ['Stack', 'Positioned', 'Align', 'Overlay'],
    26: ['Form', 'TextField', 'Validate', 'Submit'],
    27: ['Extract', 'Parameters', 'Compose', 'Reuse'],
    28: ['ThemeData', 'Colors', 'TextTheme', 'Dark Mode'],
    29: ['push()', 'pop()', 'Navigator', 'Routes'],
    30: ['GoRouter', 'Paths', 'Params', 'Redirect'],
    31: ['Arguments', 'Query Params', 'Extra', 'Return Data'],
    32: ['UI State', 'App State', 'Rebuild', 'Reactive'],
    33: ['Event', 'BLoC', 'State', 'Emit'],
    34: ['BlocProvider', 'BlocBuilder', 'BlocListener', 'Multi'],
    35: ['safeEmit', 'Equatable', 'Transform', 'Advanced'],
    36: ['Domain', 'Data', 'Presentation', 'Infrastructure'],
    37: ['Entity', 'Use Case', 'Repository', 'Failure'],
    38: ['DTO', 'DataSource', 'RepoImpl', 'CRUD'],
    39: ['BLoC', 'Widget', 'Screen', 'View'],
    40: ['Register', 'Resolve', 'Singleton', 'Factory'],
    41: ['@injectable', '@singleton', 'Generate', 'Auto-wire'],
    42: ['Create', 'Read', 'Update', 'Delete'],
    43: ['Dio', 'Interceptors', 'Headers', 'Timeout'],
    44: ['fromJson', 'toJson', 'json_serializable', 'DTO'],
    45: ['Hive', 'Box', 'Put/Get', 'CRUD'],
    46: ['Access Token', 'Refresh', 'Expiry', 'Auto-refresh'],
    47: ['Firebase', 'Auth', 'Crashlytics', 'Remote Config'],
    48: ['Google Sign-In', 'Apple Sign-In', 'ID Token', 'Backend'],
    49: ['Result<T>', 'Failure', 'isSuccess', 'Handle Errors'],
    50: ['Unit Test', 'BLoC Test', 'Mocktail', 'Coverage'],
    51: ['Config', 'Build', 'Release', 'Publish']
  },

  // Spaced Repetition settings
  srs: {
    boxes: 5,
    intervals: [0, 1, 3, 7, 14],
    reviewBatchSize: 10
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
    hashtags: 'Flutter,Dart,FlutterDev,MobileApp,LearnFlutter,CrossPlatform,BLoC,CleanArchitecture,LearnToCode,TeamzLab',
    tweetTemplate: 'Just found this FREE Flutter & Dart course — {lessonCount} interactive lessons covering BLoC, Clean Architecture, Firebase, and more. Build real apps from scratch. No signup needed!'
  },

  // Footer
  footerTagline: 'Learn Flutter & Dart from scratch: widgets, BLoC state management, Clean Architecture, Repository Pattern, CRUD apps, REST APIs with Dio, Hive local storage, Firebase Auth, GoRouter, GetIt DI, testing & deployment — build production-ready cross-platform apps for free.',
  thinkDeeperQ: 'Imagine you\'re building a cross-platform mobile app (like a food delivery or chat app). Why would you need <strong>{title}</strong>? What would go wrong WITHOUT it?',

  // Branding & ebook promotion
  branding: {
    trustStrip: 'We build production Flutter & cross-platform apps for startups and enterprises. <strong>This free course is how we give back.</strong>',
    trustStripCta: 'Need a Flutter team? Talk to us',
    headerSubtitle: 'Learn Flutter & Dart by Building Real Apps — Free, Project-Based Training | by',
    ebookUrl: 'https://www.amazon.com/dp/B0GS1X86J1',
    ebookTitle: 'Get the Full Book',
    ebookSubtitle: 'Flutter App Development — the complete guide on Amazon',
    footerCtaTitle: 'Need a Flutter Team for Your App?',
    footerCtaDesc: 'Teamz Lab builds production mobile apps with <strong style="color:var(--heading)">Flutter, Dart, Firebase & Clean Architecture</strong>. We built this free course — imagine what we can build for your business.',
    services: [
      { name: 'Flutter App Development', desc: 'Production-grade cross-platform iOS & Android apps with BLoC, Clean Architecture & Firebase' },
      { name: 'Full-Stack Mobile + Backend', desc: 'End-to-end mobile solutions with NestJS/Node.js backends, REST APIs & real-time features' },
      { name: 'App Migration & Modernization', desc: 'Migrate native Android/iOS apps to Flutter or upgrade legacy Flutter codebases' },
      { name: 'AI Integration & Consulting', desc: 'Integrate AI capabilities into your mobile apps — chatbots, image recognition & intelligent features' }
    ]
  }
};
