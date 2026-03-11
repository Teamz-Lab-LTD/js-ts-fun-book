// config.js — IELTS Mastery Course Configuration
// The HTML engine reads this config to render everything.

const COURSE_CONFIG = {
  // Course identity
  title: 'IELTS Mastery: Basic English to Band 8+ in 58 Lessons',
  subtitle: 'Your Complete IELTS Journey — <strong>58 Comprehensive Lessons</strong> — Grammar, Vocabulary, Reading, Writing, Listening, Speaking & Test Strategy | Basic to Advanced | Free, No Signup | by Teamz Lab',
  shortTitle: 'IELTS Mastery',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=ielts-mastery',
  ogImage: 'https://learn.teamzlab.com/og-ielts-mastery.png',

  // SEO
  description: 'Free interactive IELTS preparation course with 58 lessons. Master all four skills — Reading, Writing, Listening, and Speaking — from basic English grammar to Band 8+ strategies. Covers Academic & General Training, vocabulary building, essay writing, and test-day tactics. No signup required.',
  keywords: 'ielts preparation free 2026, ielts band 7 preparation, ielts reading strategies, ielts writing task 1 task 2, ielts speaking practice, ielts listening tips, ielts vocabulary, ielts grammar, ielts academic preparation, ielts general training, ielts band 8 tips, ielts free course online, ielts test strategy, english grammar for ielts, ielts essay writing, ielts cue card topics 2026, ielts preparation bangladesh',
  topics: ['Grammar', 'Vocabulary', 'Reading', 'Writing Task 1', 'Writing Task 2', 'Listening', 'Speaking', 'Pronunciation', 'Paraphrasing', 'Test Strategy', 'Band 7+', 'Band 8+', 'Academic', 'General Training'],
  educationalLevel: 'Basic to Advanced',

  // Footer tagline
  footerTagline: 'From basic English to Band 8+. Every lesson brings you closer to your dream score.',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  topicMap: {
    'Foundation English':        [1, 2, 3, 4, 5, 6, 7, 8],
    'IELTS Overview':            [9, 10],
    'Reading Skills':            [11, 12, 13, 14, 15, 16, 17, 18],
    'Writing Task 1':            [19, 20, 21, 22, 23],
    'Writing Task 2':            [24, 25, 26, 27, 28, 29],
    'Listening Skills':          [30, 31, 32, 33, 34, 35, 36],
    'Speaking Skills':           [37, 38, 39, 40, 41, 42, 43, 44],
    'Advanced English':          [45, 46, 47, 48, 49, 50],
    'Test Strategy & Mock':      [51, 52, 53, 54, 55, 56, 57, 58]
  },

  // Concept flow diagrams per lesson ID (4 concepts each)
  conceptFlows: {
    // Foundation English (1-8)
    1:  ['Nouns', 'Verbs', 'Adjectives', 'Adverbs'],
    2:  ['Simple', 'Compound', 'Complex', 'Compound-Complex'],
    3:  ['Past', 'Present', 'Future', 'Perfect'],
    4:  ['Articles', 'Prepositions', 'Conjunctions', 'Connectors'],
    5:  ['AWL', 'Collocations', 'Synonyms', 'Context Clues'],
    6:  ['Commas', 'Semicolons', 'Apostrophes', 'Common Errors'],
    7:  ['Subject-Verb', 'Pronoun', 'Parallelism', 'Modifiers'],
    8:  ['Formal', 'Semi-Formal', 'Informal', 'Academic'],

    // IELTS Overview (9-10)
    9:  ['Format', 'Scoring', 'Academic vs GT', 'Registration'],
    10: ['Band Descriptors', 'Examiner Criteria', 'Common Myths', 'Score Targets'],

    // Reading (11-18)
    11: ['Skimming', 'Scanning', 'Keywords', 'Time Split'],
    12: ['True/False/NG', 'Yes/No/NG', 'Logic', 'Traps'],
    13: ['Headings', 'Matching Info', 'Paragraphs', 'Strategy'],
    14: ['Multiple Choice', 'Summary', 'Completion', 'Approach'],
    15: ['Sentence Completion', 'Short Answer', 'Word Limit', 'Grammar Fit'],
    16: ['Diagrams', 'Flow Charts', 'Labels', 'Sequence'],
    17: ['Speed Reading', 'Time Management', '20-Min Rule', 'Prioritize'],
    18: ['Band 7+ Reading', 'Inference', 'Paraphrase', 'Difficult Texts'],

    // Writing Task 1 (19-23)
    19: ['Line Charts', 'Bar Charts', 'Pie Charts', 'Overview'],
    20: ['Tables', 'Maps', 'Process', 'Diagrams'],
    21: ['Compare', 'Contrast', 'Trends', 'Data Language'],
    22: ['GT Letter', 'Formal', 'Semi-Formal', 'Informal'],
    23: ['Task 1 Band 7+', 'Cohesion', 'Vocabulary', 'Accuracy'],

    // Writing Task 2 (24-29)
    24: ['Opinion', 'Discussion', 'Problem-Solution', 'Two-Part'],
    25: ['Thesis', 'Hook', 'Roadmap', 'Paraphrase'],
    26: ['Topic Sentence', 'Evidence', 'Explanation', 'Link'],
    27: ['Conclusion', 'Summary', 'Final Thought', 'No New Ideas'],
    28: ['Coherence', 'Cohesion', 'Paragraphing', 'Linking Words'],
    29: ['Band 7+ Writing', 'Complex Grammar', 'Lexical Range', 'Accuracy'],

    // Listening (30-36)
    30: ['Section 1', 'Section 2', 'Prediction', 'Keywords'],
    31: ['Section 3', 'Section 4', 'Academic', 'Lecture'],
    32: ['Form Fill', 'Note Complete', 'Table Fill', 'Spelling'],
    33: ['MCQ', 'Matching', 'Distractors', 'Elimination'],
    34: ['Map Label', 'Diagram', 'Directions', 'Spatial'],
    35: ['Numbers', 'Spelling', 'Traps', 'Signpost Words'],
    36: ['Band 7+ Listening', 'Speed', 'Accent', 'Practice Plan'],

    // Speaking (37-44)
    37: ['Part 1', 'Familiar Topics', 'Fluency', 'Natural'],
    38: ['Part 2', 'Cue Card', '2-Min Talk', 'Structure'],
    39: ['Part 3', 'Discussion', 'Abstract', 'Depth'],
    40: ['Fluency', 'Coherence', 'Fillers', 'Self-Correction'],
    41: ['Vocabulary Range', 'Collocations', 'Idioms', 'Topic Words'],
    42: ['Grammar Range', 'Complex Sentences', 'Accuracy', 'Variety'],
    43: ['Pronunciation', 'Intonation', 'Stress', 'Connected Speech'],
    44: ['Band 7+ Speaking', 'Confidence', 'Examples', 'Opinion'],

    // Advanced English (45-50)
    45: ['Conditionals', 'Passives', 'Inversions', 'Cleft'],
    46: ['Advanced Collocations', 'Idioms', 'Less Common Vocab', 'Register'],
    47: ['Paraphrasing', 'Synonyms', 'Restructuring', 'Precision'],
    48: ['Critical Thinking', 'Arguments', 'Evidence', 'Logic'],
    49: ['Error Correction', 'Common Mistakes', 'Band Killers', 'Self-Edit'],
    50: ['Academic Writing Style', 'Hedging', 'Nominalisation', 'Formality'],

    // Test Strategy & Mock (51-58)
    51: ['Study Plan', '30-Day', '60-Day', '90-Day'],
    52: ['Reading Mock', 'Timed', 'Review', 'Score'],
    53: ['Writing Mock', 'Task 1', 'Task 2', 'Self-Assess'],
    54: ['Listening Mock', 'Full Test', 'Review', 'Score'],
    55: ['Speaking Mock', 'Record', 'Review', 'Improve'],
    56: ['Weak Areas', 'Targeted Practice', 'Plateau', 'Breakthrough'],
    57: ['Test Day', 'Timing', 'Stress', 'Checklist'],
    58: ['Post-Test', 'Remark', 'Retake', 'Next Steps']
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
