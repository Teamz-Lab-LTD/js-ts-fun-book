// config.js — Competitive Programming: Zero to Hero — Course Configuration
// The world's most beginner-friendly competitive programming course.
// Designed so anyone — kids, students, career switchers, self-learners — can go from absolute zero to contest-ready.

const COURSE_CONFIG = {
  // Course identity
  title: 'Competitive Programming: Zero to Hero',
  subtitle: 'The Easiest CP Course Ever Made — <strong>~8 min/lesson</strong> — From "What is Code?" to Contest Winner | by Teamz Lab',
  shortTitle: 'CP Zero to Hero',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=cp-kids',
  ogImage: 'https://learn.teamzlab.com/og-image.png',

  // SEO — heavily optimized for search intent across all skill levels
  description: 'The world\'s easiest free competitive programming course. {lessonCount} interactive lessons — learn C++, algorithms, data structures, sorting, searching, greedy, recursion, dynamic programming, graphs, BFS, DFS, bit manipulation, sieve of eratosthenes, combinatorics & contest strategy from absolute zero to advanced. Explained so simply that even a 10-year-old can master it. Quizzes, code playground, spaced repetition — no signup required.',
  keywords: 'competitive programming course free, learn competitive programming from scratch, competitive programming for beginners, cp tutorial zero to hero, c++ competitive programming, algorithm course for beginners, codeforces tutorial, competitive programming roadmap, free algorithm course no signup, data structures and algorithms easy, learn sorting searching greedy recursion, competitive programming for kids, best competitive programming course, interactive coding course free, problem solving course, ICPC preparation, IOI training, USACO beginner guide, competitive programming step by step, how to start competitive programming, cp roadmap 2025 2026, easy algorithm tutorial, beginner friendly cp course, programming contest preparation, competitive coding for students, learn algorithms with examples, c++ for competitive programming, online judge tutorial, competitive programming practice, gamified algorithm course, dynamic programming tutorial easy, dp for beginners, graph algorithms beginner, bfs dfs tutorial, bit manipulation competitive programming, learn dp from scratch, graph theory easy course, coin change problem tutorial, fibonacci dynamic programming, sieve of eratosthenes tutorial, combinatorics for beginners, permutations combinations cp, nCr nPr competitive programming, prime numbers algorithm, pascal triangle tutorial',
  topics: ['C++ Fundamentals', 'Input/Output', 'Conditionals', 'Loops', 'Arrays', 'Strings', 'Functions', 'Sorting Algorithms', 'Binary Search', 'Math for CP', 'Number Theory', 'Sieve of Eratosthenes', 'Greedy Algorithms', 'Recursion', 'Stacks & Queues', 'Two Pointers', 'Prefix Sums', 'Frequency Counting', 'Time Complexity', 'Contest Strategy', 'Debugging', 'Dynamic Programming', 'Graph Algorithms', 'BFS & DFS', 'Bit Manipulation', 'Combinatorics'],
  educationalLevel: 'Absolute Beginner to Advanced',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  // Ordered from absolute beginner -> contest-ready
  topicMap: {
    'Welcome & Setup': [1, 2, 3],
    'C++ Basics': [4, 5, 6, 7],
    'Decisions & Logic': [8, 9, 10],
    'Loops & Patterns': [11, 12, 13],
    'Arrays & Lists': [14, 15, 16],
    'Strings & Text': [17, 18],
    'Functions': [19, 20],
    'Math & Number Theory': [21, 22, 23, 46],
    'Sorting & Searching': [24, 25, 26],
    'Problem Solving Patterns': [27, 28, 29],
    'Greedy Algorithms': [30, 31],
    'Recursion': [32, 33],
    'Data Structures': [34, 35],
    'Dynamic Programming': [41, 42],
    'Graph Algorithms': [43, 44],
    'Bit Manipulation': [45],
    'Combinatorics': [47],
    'Contest Mastery': [36, 37, 38, 39, 40, 48]
  },

  // Concept flow diagrams per lesson ID
  conceptFlows: {
    1: ['Problem', 'Think', 'Code', 'Win!'],
    2: ['Install', 'Write', 'Compile', 'Run'],
    3: ['Read Problem', 'Input', 'Solve', 'Output'],
    4: ['int', 'char', 'string', 'bool'],
    5: ['cin', 'Process', 'cout', 'Done!'],
    6: ['+', '-', '*', '/', '%'],
    7: ['int', 'long long', 'double', 'bool'],
    8: ['if', 'else', 'Check', 'Act'],
    9: ['if', 'else if', 'else', 'Done'],
    10: ['&&', '||', '!', 'Result'],
    11: ['Start', 'Check', 'Loop Body', 'End'],
    12: ['i=0', 'i<n', 'Do Stuff', 'i++'],
    13: ['Outer Loop', 'Inner Loop', 'Pattern', 'Print'],
    14: ['Box 0', 'Box 1', 'Box 2', '...Box N'],
    15: ['Read', 'Store', 'Process', 'Output'],
    16: ['Find Min', 'Find Max', 'Sum', 'Average'],
    17: ['char', 'string', 'length()', 'compare'],
    18: ['Read', 'Check Each', 'Count', 'Answer'],
    19: ['Name It', 'Input', 'Process', 'Return'],
    20: ['Big Problem', 'Break Down', 'Functions', 'Combine'],
    21: ['GCD', 'LCM', 'Prime', 'Factorize'],
    22: ['Count Digits', 'Sum Digits', 'Reverse', 'Palindrome'],
    23: ['Power', 'Modulo', 'Fibonacci', 'Fast Math'],
    24: ['Unsorted', 'Compare', 'Swap', 'Sorted!'],
    25: ['Sorted Array', 'Middle', 'Left/Right', 'Found!'],
    26: ['sort()', 'lower_bound', 'upper_bound', 'Done'],
    27: ['Frequency', 'Count', 'Map', 'Answer'],
    28: ['Left Ptr', 'Right Ptr', 'Move', 'Meet!'],
    29: ['Prefix', 'Sum Array', 'Range Query', 'O(1)!'],
    30: ['Sort', 'Pick Best', 'Repeat', 'Optimal!'],
    31: ['Coins', 'Activities', 'Schedule', 'Maximum!'],
    32: ['Base Case', 'Smaller Input', 'Call Self', 'Build Up'],
    33: ['Factorial', 'Fibonacci', 'Power', 'Tower of Hanoi'],
    34: ['Push', 'Pop', 'Top/Peek', 'Stack!'],
    35: ['Enqueue', 'Dequeue', 'Front', 'Queue!'],
    36: ['Read Carefully', 'Plan', 'Code', 'Test'],
    37: ['Easy (A/B)', 'Medium (C)', 'Hard (D+)', 'Practice!'],
    38: ['Print Debug', 'Edge Cases', 'Fix', 'AC!'],
    39: ['O(n)', 'O(n log n)', 'O(n^2)', 'Choose Wisely'],
    40: ['Learn', 'Practice Daily', 'Compete', 'Champion!'],
    41: ['Overlap', 'Memo/Table', 'Build Up', 'Optimal!'],
    42: ['Stairs', 'Coins', 'States', 'DP Master!'],
    43: ['Nodes', 'Edges', 'Connect', 'Graph!'],
    44: ['BFS Queue', 'DFS Stack', 'Explore', 'Found!'],
    45: ['0 and 1', 'AND/OR/XOR', 'Shift', 'Bit Trick!'],
    46: ['2,3,5...', 'Cross Out', 'Sieve', 'All Primes!'],
    47: ['Pick r', 'Order?', 'nPr/nCr', 'Count!'],
    48: ['All Tools', 'Which One?', 'Practice', 'Champion!']
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
    hashtags: 'CompetitiveProgramming,CPZeroToHero,LearnAlgorithms,Codeforces,CodingForBeginners,FreeCourse,ProblemSolving,ICPC,IOI',
    tweetTemplate: 'Just found the EASIEST competitive programming course ever — {lessonCount} free interactive lessons from absolute zero to contest-ready! C++, algorithms, greedy, recursion, all explained so simply. No signup needed!'
  },

  // Footer stats
  footerTagline: 'Master C++, Algorithms, Sorting, Binary Search, Greedy, Recursion, Dynamic Programming, Graphs, BFS, DFS, Bit Manipulation, Sieve, Combinatorics, Stacks, Queues, Two Pointers, Prefix Sums & Contest Strategy — explained so simply that anyone can learn. The world\'s most beginner-friendly competitive programming course.'
};
