// config.js — Flutter & Dart Masterclass Course Configuration
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'Flutter & Dart Masterclass',
  subtitle: 'From Zero to Professional Flutter Developer — <strong>~10 min/lesson</strong> — Build Beautiful Apps Free | by Teamz Lab',
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
  description: 'Free interactive Flutter & Dart course: learn mobile app development by building real apps. {lessonCount} hands-on lessons, quizzes, code examples — from Class 5 student to professional Flutter developer. No signup required.',
  keywords: 'flutter tutorial for beginners, dart programming course, flutter course free, mobile app development tutorial, cross-platform app development, flutter widgets tutorial, bloc state management, clean architecture flutter, flutter firebase tutorial, learn flutter step by step, flutter for kids, flutter project based course, flutter dart interactive course, build flutter apps free',
  topics: ['Dart', 'Flutter', 'Widgets', 'State Management', 'BLoC Pattern', 'Clean Architecture', 'GoRouter', 'Dio HTTP', 'Hive Database', 'Firebase Auth', 'GetIt DI', 'REST API', 'JSON Serialization', 'Testing'],
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
    'Networking':             [42, 43, 44],
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
    38: ['DTO', 'DataSource', 'RepoImpl', 'API Call'],
    39: ['BLoC', 'Widget', 'Screen', 'View'],
    40: ['Register', 'Resolve', 'Singleton', 'Factory'],
    41: ['@injectable', '@singleton', 'Generate', 'Auto-wire'],
    42: ['HTTP', 'GET/POST', 'JSON', 'Response'],
    43: ['Dio', 'Interceptors', 'Headers', 'Timeout'],
    44: ['fromJson', 'toJson', 'json_serializable', 'DTO'],
    45: ['Hive', 'Box', 'Put/Get', 'Persist'],
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
    hashtags: 'Flutter,Dart,MobileApp,LearnToCode,CrossPlatform,FlutterDev,TeamzLab',
    tweetTemplate: 'Just found this FREE Flutter & Dart Masterclass — {lessonCount} interactive lessons to build beautiful mobile apps! From absolute beginner to pro. Zero signup.'
  },

  // Footer
  footerTagline: 'Learn Flutter, Dart, BLoC, Clean Architecture, GoRouter, Dio, Hive, Firebase, GetIt, Testing & more — build real professional mobile apps.'
};
