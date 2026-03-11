// config.js — Flutter Interview Mastery Course Configuration
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'Flutter Interview Mastery: Zero to Senior in 68 Lessons',
  subtitle: 'Land Your Senior Flutter Role — <strong>68 Interview-Focused Lessons</strong> — Dart, BLoC, Architecture, Testing, System Design & Behavioral | Free, No Signup | by Teamz Lab',
  shortTitle: 'Flutter Interview Mastery',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=flutter-interview-mastery',
  ogImage: 'https://learn.teamzlab.com/og-flutter-interview.png',

  // SEO
  description: 'Free interactive Flutter interview preparation course with {lessonCount} lessons. Master Dart, BLoC, Clean Architecture, testing, platform channels, CI/CD, system design, DSA, and behavioral interviews. Built for mid-to-senior Flutter developers targeting remote roles. No signup required.',
  keywords: 'flutter interview questions 2026, flutter senior interview preparation, dart interview questions, flutter bloc interview, clean architecture flutter interview, flutter testing interview, flutter system design interview, flutter behavioral interview, flutter remote jobs, flutter developer career, flutter platform channels interview, flutter ci cd interview, flutter performance optimization, flutter offline first architecture, flutter state management interview, senior flutter developer preparation, flutter job preparation course free',
  topics: ['Dart Advanced', 'Flutter Widgets', 'BLoC/Cubit', 'Clean Architecture', 'Testing', 'CI/CD', 'Platform Channels', 'System Design', 'Performance', 'Firebase', 'Offline-First', 'Security', 'DSA', 'Behavioral Interview', 'Android Crossover', 'Flutter Web'],
  educationalLevel: 'Mid-Level to Senior',

  // Footer tagline
  footerTagline: 'Built to get you hired. Every lesson is an interview advantage.',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  topicMap: {
    'Dart Core & Async':         [1, 2, 3, 4, 5, 6, 7, 8, 9],
    'Flutter Rendering':         [10, 11, 12, 13],
    'Navigation & Forms':        [14, 15],
    'State Management':          [16, 17, 18, 19],
    'Architecture':              [20, 21, 22],
    'Networking & Data':         [23, 24, 25, 26, 27, 28],
    'Performance':               [29, 30],
    'Testing':                   [31, 32, 33, 34, 35, 36],
    'CI/CD & Release':           [37, 38],
    'Platform & Native':         [39, 40, 41, 42, 43, 44],
    'Security':                  [45],
    'Accessibility & i18n':      [46, 47],
    'Adaptive & Multi-Platform': [48, 49, 50, 51],
    'Advanced Networking':       [52, 53],
    'Monetization & Ops':        [54, 55],
    'System Design':             [56, 57, 58, 59],
    'CS & DSA':                  [60, 61, 62, 63],
    'Behavioral & Career':       [64, 65, 66, 67, 68]
  },

  // Concept flow diagrams per lesson ID (4 concepts each)
  conceptFlows: {
    1:  ['Types', 'Null Safety', 'final/const', 'late'],
    2:  ['List', 'Map', 'Set', 'Iterable'],
    3:  ['Future', 'async/await', 'Event Loop', 'Microtask'],
    4:  ['Stream', 'Controller', 'Broadcast', 'Operators'],
    5:  ['Isolate', 'compute()', 'SendPort', 'Concurrency'],
    6:  ['Generics', 'Extensions', 'Mixins', 'Typedefs'],
    7:  ['Records', 'Patterns', 'Sealed', 'Modifiers'],
    8:  ['try/catch', 'Result Type', 'Either', 'Defensive'],
    9:  ['OOP', 'SOLID', 'Composition', 'Inheritance'],
    10: ['Widget Tree', 'Element Tree', 'Render Tree', 'Build'],
    11: ['Stateless', 'Stateful', 'Lifecycle', 'setState'],
    12: ['BuildContext', 'Inherited', 'Keys', 'Rebuild'],
    13: ['Constraints', 'Flex', 'Expanded', 'Overflow'],
    14: ['Navigator', 'GoRouter', 'Deep Links', 'Guards'],
    15: ['Forms', 'Validation', 'Focus', 'Controllers'],
    16: ['setState', 'Provider', 'Riverpod', 'BLoC'],
    17: ['Cubit', 'State', 'Emit', 'Equatable'],
    18: ['BLoC', 'Events', 'Transitions', 'Effects'],
    19: ['Selectors', 'Scoping', 'Multi-BLoC', 'Testing'],
    20: ['Layers', 'Boundaries', 'Domain', 'Clean Arch'],
    21: ['Repository', 'Use Case', 'DI', 'Inversion'],
    22: ['MVVM', 'MVI', 'Clean', 'Tradeoffs'],
    23: ['Dio', 'Interceptors', 'Token Refresh', 'Retry'],
    24: ['WebSocket', 'Socket.IO', 'Reconnect', 'Real-time'],
    25: ['SharedPrefs', 'Hive', 'SQLite', 'Floor'],
    26: ['Offline-First', 'Sync', 'Conflict', 'Optimistic'],
    27: ['Firebase Auth', 'FCM', 'Crashlytics', 'Firestore'],
    28: ['Caching', 'Pagination', 'Lazy Load', 'Images'],
    29: ['DevTools', 'Frame Budget', 'Profiling', 'Rebuild'],
    30: ['Jank', 'Impeller', 'Shaders', 'Memory'],
    31: ['Unit', 'Widget', 'Integration', 'Strategy'],
    32: ['Mocks', 'Fakes', 'Stubs', 'Assertions'],
    33: ['BLoC Test', 'blocTest', 'States', 'Failures'],
    34: ['WidgetTester', 'pump', 'find', 'expect'],
    35: ['Integration', 'E2E', 'Device', 'Patrol'],
    36: ['Testability', 'Golden', 'Coverage', 'Patterns'],
    37: ['Pipeline', 'Artifacts', 'Secrets', 'Environments'],
    38: ['Flavors', 'Signing', 'Store Upload', 'Versioning'],
    39: ['MethodChannel', 'EventChannel', 'Pigeon', 'Bridge'],
    40: ['FFI', 'Native Lib', 'Binding', 'Platform'],
    41: ['Push', 'Background', 'Deep Links', 'Lifecycle'],
    42: ['Activity', 'Intent', 'Service', 'Receiver'],
    43: ['Coroutines', 'Flow', 'LiveData', 'Crossover'],
    44: ['Compose', 'Flutter', 'Tradeoffs', 'When Each'],
    45: ['JWT', 'Secure Storage', 'Biometrics', 'Encryption'],
    46: ['Semantics', 'Screen Reader', 'Focus', 'Tap Target'],
    47: ['i18n', 'l10n', 'RTL', 'Formatting'],
    48: ['Adaptive', 'Responsive', 'Foldable', 'Platform'],
    49: ['Flutter Web', 'Rendering', 'SEO', 'Constraints'],
    50: ['Wasm', 'Compilation', 'Performance', 'Deploy'],
    51: ['Desktop', 'macOS', 'Windows', 'Packaging'],
    52: ['GraphQL', 'REST', 'Pagination', 'Caching'],
    53: ['Firebase', 'Supabase', 'Custom', 'Compare'],
    54: ['IAP', 'Subscriptions', 'Ads', 'RevenueCat'],
    55: ['Logging', 'Analytics', 'Feature Flags', 'Crash'],
    56: ['Real-time App', 'Architecture', 'Scaling', 'Sync'],
    57: ['Fintech App', 'Security', 'Claims', 'Payment'],
    58: ['Offline App', 'Field Ops', 'Scale', 'Sync'],
    59: ['Debugging', 'Incidents', 'Root Cause', 'Triage'],
    60: ['Big-O', 'Memory', 'Stack/Heap', 'Networking'],
    61: ['Arrays', 'Strings', 'HashMap', 'Two Pointers'],
    62: ['Stack', 'Queue', 'LinkedList', 'Binary Search'],
    63: ['Trees', 'Graphs', 'BFS/DFS', 'Sliding Window'],
    64: ['W-STAR', 'Confidence', 'Concise', 'Pressure'],
    65: ['Projects', 'Decisions', 'Tradeoffs', 'Impact'],
    66: ['Leadership', 'Mentoring', 'Conflict', 'Ambiguity'],
    67: ['Salary', 'Negotiation', 'Remote', 'Relocation'],
    68: ['Technical', 'Architecture', 'Behavioral', 'Full Mock']
  },

  // SRS settings
  srsEnabled: true,
  srsBoxIntervals: [1, 3, 7, 14, 30],

  // XP rewards
  xpRewards: {
    lessonComplete: 100,
    quizCorrect: 20,
    quizPerfect: 50,
    challengeComplete: 75,
    bugFound: 40,
    flashcardReview: 10,
    streakBonus: 25
  }
};
