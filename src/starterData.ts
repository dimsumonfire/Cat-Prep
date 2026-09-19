import { DailySyllabusItem, PYPAttempt, WeeklyStudyPlan, MockTest, Formula, ErrorNotebookEntry } from './types';

export const STARTER_DAILY_SYLLABUS: DailySyllabusItem[] = [
  { id: 'day-1', day: 1, section: 'VARC', topic: 'Reading Comprehension', task: 'Read 2 long RC passages from diverse sources, focus on identifying main ideas and underlying arguments.', completed: true, notes: 'Completed 2 passages on sociology. Got 6/8 correct.' },
  { id: 'day-2', day: 2, section: 'QA', topic: 'Percentages', task: 'Review fraction-to-decimal grids and solve 15 percentage multiplier problems.', completed: true, notes: 'Memorized reciprocals up to 1/20. Solved basic calculation assignments.' },
  { id: 'day-3', day: 3, section: 'DILR', topic: 'Linear Arrangements', task: 'Understand base linear arrangement constraints and direction parameters; solve 3 sets.', completed: true, notes: 'Circular is still tough, linear row matching is solid.' },
  { id: 'day-4', day: 4, section: 'QA', topic: 'Ratio & Proportion', task: 'Practice 15 direct and inverse ratio equations, including mixtures proportionalities.', completed: true, notes: 'Good grasp. Standard shortcuts are working well.' },
  { id: 'day-5', day: 5, section: 'VARC', topic: 'Reading Comprehension', task: 'Read 2 philosophy/history essays. Practice speed-reading and highlighting transition signals.', completed: false, notes: '' },
  { id: 'day-6', day: 6, section: 'QA', topic: 'Profit, Loss & Discount', task: 'Study markup ratios, cost/selling price maps, and solve 10 standard problems.', completed: false, notes: '' },
  { id: 'day-7', day: 7, section: 'DILR', topic: 'Tables & Calculations', task: 'Practice rapid tabular division estimates and percentage market share partitions.', completed: false, notes: '' },
  { id: 'day-8', day: 8, section: 'QA', topic: 'Simple & Compound Interest', task: 'Memorize SI/CI equations, quarterly interest compounders, and double/triple timeline shortcuts.', completed: false, notes: '' },
  { id: 'day-9', day: 9, section: 'VARC', topic: 'Para Summary', task: 'Solve 10 paragraph summarization questions; focus on eliminating extreme options.', completed: false, notes: '' },
  { id: 'day-10', day: 10, section: 'QA', topic: 'Profit, Loss & Discount', task: 'Master dishonest dealer scenarios and successive compounding discount problems.', completed: false, notes: '' },
  { id: 'day-11', day: 11, section: 'DILR', topic: 'Circular Arrangements', task: 'Understand facing-in vs facing-out seating variables; attempt 3 previous paper sets.', completed: false, notes: '' },
  { id: 'day-12', day: 12, section: 'QA', topic: 'Averages', task: 'Learn weighted averages formulas and standard deviation shortcuts to save time in QA.', completed: false, notes: '' },
  { id: 'day-13', day: 13, section: 'VARC', topic: 'Para Jumbles', task: 'Practice 10 parajumble questions; identify starter sentences and coherence bridges.', completed: false, notes: '' },
  { id: 'day-14', day: 14, section: 'QA', topic: 'Mixtures & Alligations', task: 'Practice 12 diagrammatic alligation problems and liquid volume replacement replacements.', completed: false, notes: '' },
  { id: 'day-15', day: 15, section: 'DILR', topic: 'Bar Graphs', task: 'Deconstruct complex multi-variable bar charts; practice matching dynamic legends.', completed: false, notes: '' },
  { id: 'day-16', day: 16, section: 'QA', topic: 'Linear Equations', task: 'Solve systems of simple equations with whole integer constraints and ages puzzles.', completed: false, notes: '' },
  { id: 'day-17', day: 17, section: 'VARC', topic: 'Reading Comprehension', task: 'Time-bound RC drill: Complete 3 timed CAT passages in exactly 30 minutes.', completed: false, notes: '' },
  { id: 'day-18', day: 18, section: 'QA', topic: 'Quadratic Equations', task: 'Revise discriminant properties, sum/product of quadratic roots, and parabolic graph plotting.', completed: false, notes: '' },
  { id: 'day-19', day: 19, section: 'DILR', topic: 'Line Graphs', task: 'Evaluate tabular line charts representing composite index parameters & growth indicators.', completed: false, notes: '' },
  { id: 'day-20', day: 20, section: 'General', topic: 'Diagnostic Mock', task: 'Take a short, timed 40-minute sectional mock of DILR or QA; audit mistakes.', completed: false, notes: '' },
  { id: 'day-21', day: 21, section: 'VARC', topic: 'Odd Sentence Out', task: 'Practice 10 odd-one-out incoherent sentence identifiers; locate transition barriers.', completed: false, notes: '' },
  { id: 'day-22', day: 22, section: 'QA', topic: 'Inequalities', task: 'Solve modulus inequalities and plot polynomial signs using the standard wavy-curve method.', completed: false, notes: '' },
  { id: 'day-23', day: 23, section: 'DILR', topic: 'Venn Diagrams', task: 'Examine 3-set Venn diagrams formulas, intersections boundaries, and standard overlap regions.', completed: false, notes: '' },
  { id: 'day-24', day: 24, section: 'QA', topic: 'Progressions', task: 'Solve ten arithmetic progression (AP) sequences; master general terms differences.', completed: false, notes: '' },
  { id: 'day-25', day: 25, section: 'VARC', topic: 'Inference Questions', task: 'Examine 10 questions relying on authorial subtext, bias, and passage extrapolation bounds.', completed: false, notes: '' },
  { id: 'day-26', day: 26, section: 'QA', topic: 'Progressions', task: 'Develop GP series formulas, AM-GM inequalities constraints, and infinite series sum.', completed: false, notes: '' },
  { id: 'day-27', day: 27, section: 'DILR', topic: 'Venn Diagrams', task: 'Tackle advanced max/min elements overlaps for 3-circle and 4-circle Venn diagrams.', completed: false, notes: '' },
  { id: 'day-28', day: 28, section: 'QA', topic: 'Time, Speed, Distance', task: 'Solve basic TSD equations: relative speeds, average metrics, and fractional speed variables.', completed: false, notes: '' },
  { id: 'day-29', day: 29, section: 'VARC', topic: 'Reading Comprehension', task: 'Read 2 dense technology and philosophy essays; map author argument layout.', completed: false, notes: '' },
  { id: 'day-30', day: 30, section: 'QA', topic: 'Time & Work', task: 'Learn work efficiency reciprocals, pipe/leak ratios, and alternate day rosters equations.', completed: false, notes: '' },
  { id: 'day-31', day: 31, section: 'DILR', topic: 'Games & Tournaments', task: 'Deconstruct knockout configurations, bracket seeding properties, and upset outcomes.', completed: false, notes: '' },
  { id: 'day-32', day: 32, section: 'QA', topic: 'Time, Speed, Distance', task: 'Master circular tracks meeting criteria, trains crossing timelines, and escalators algebra.', completed: false, notes: '' },
  { id: 'day-33', day: 33, section: 'VARC', topic: 'Para Jumbles', task: 'Solve 10 TITA (Type-In-The-Answer) parajumbles under tight exam-like pacing checklists.', completed: false, notes: '' },
  { id: 'day-34', day: 34, section: 'QA', topic: 'Logarithms', task: 'Acknowledge logarithmic rules: change of base rules, nested variables expansion.', completed: false, notes: '' },
  { id: 'day-35', day: 35, section: 'DILR', topic: 'Games & Tournaments', task: 'Practice round-robin league formats, tournament goal metrics, and score sheets combinations.', completed: false, notes: '' },
  { id: 'day-36', day: 36, section: 'QA', topic: 'Logarithms', task: 'Tackle logarithmic quadratic bounds equations and functions intersection rules.', completed: false, notes: '' },
  { id: 'day-37', day: 37, section: 'VARC', topic: 'Para Completion', task: 'Study coherence signals; solve 10 sentence placement/completion questions.', completed: false, notes: '' },
  { id: 'day-38', day: 38, section: 'QA', topic: 'Arithmetic Revision', task: 'Set timed drill of 15 Arithmetic section questions selected from past original CATs.', completed: false, notes: '' },
  { id: 'day-39', day: 39, section: 'DILR', topic: 'Selection & Distribution', task: 'Solve conditional logic matrix problems to establish distribution structures.', completed: false, notes: '' },
  { id: 'day-40', day: 40, section: 'General', topic: 'Midterm Review', task: 'Identify weak areas; solve 15 medium-level topics in your custom error notebooks.', completed: false, notes: '' },
  { id: 'day-41', day: 41, section: 'VARC', topic: 'Tone & Purpose', task: 'Identify authorial tone differences (descriptive, biased, skeptical, critical, objective).', completed: false, notes: '' },
  { id: 'day-42', day: 42, section: 'QA', topic: 'Geometry', task: 'Practice Similarity of Triangles, Thales theorem, and basic trigonometry setups.', completed: false, notes: '' },
  { id: 'day-43', day: 43, section: 'DILR', topic: 'Routes & Networks', task: 'Review maximum flow network structures, routes bottleneck nodes, and pathing bounds.', completed: false, notes: '' },
  { id: 'day-44', day: 44, section: 'QA', topic: 'Geometry', task: 'Review Circles chords intersection rules, tangent lengths, and circumcircle geometry.', completed: false, notes: '' },
  { id: 'day-45', day: 45, section: 'VARC', topic: 'Reading Comprehension', task: 'Attempt 4 mixed genus complex passages in precisely 40-minute simulated boundaries.', completed: false, notes: '' },
  { id: 'day-46', day: 46, section: 'QA', topic: 'Mensuration', task: 'Revise surface area and volume equations for cubes, regular cylinders, pyramids, and cones.', completed: false, notes: '' },
  { id: 'day-47', day: 47, section: 'DILR', topic: 'Mixed Charts', task: 'Tackle problems using dual visual charts (Pie+Bar, Table+Graph) under 10-min checkpoints.', completed: false, notes: '' },
  { id: 'day-48', day: 48, section: 'QA', topic: 'Number System', task: 'Determine prime factorization maps, count total divisors, and solve last-digit cyclicity.', completed: false, notes: '' },
  { id: 'day-49', day: 49, section: 'VARC', topic: 'Verbal Ability', task: 'Speed-drill: Solve 8 VA questions (PJ, PS, OO) in under 12 minutes total.', completed: false, notes: '' },
  { id: 'day-50', day: 50, section: 'QA', topic: 'Number System', task: 'Apply Euler\'s Totient Function and Euler theorem shortcuts to solve difficult remainders properties.', completed: false, notes: '' },
  { id: 'day-51', day: 51, section: 'DILR', topic: 'Binary Logic', task: 'Study Truth-Tellers, Liars & Alternators; practice mapping logical consistency arrays.', completed: false, notes: '' },
  { id: 'day-52', day: 52, section: 'QA', topic: 'Permutations & Combinations', task: 'Apply the standard partition formula, circular seatings, and identical objects rules.', completed: false, notes: '' },
  { id: 'day-53', day: 53, section: 'VARC', topic: 'Reading Comprehension', task: 'Solve 3 advanced philosophical passages from historical archives with minimal glossary help.', completed: false, notes: '' },
  { id: 'day-54', day: 54, section: 'QA', topic: 'Probability', task: 'Calculate conditional probabilities, Bayes theorem branches, and binomial chances outlines.', completed: false, notes: '' },
  { id: 'day-55', day: 55, section: 'DILR', topic: 'Matrix Arrangement', task: 'Tackle 3 complex matrix arrangement sets with 4+ attributes under real sectional pressures.', completed: false, notes: '' },
  { id: 'day-56', day: 56, section: 'QA', topic: 'Formula Vault', task: 'Do a complete sweep of properties: log series, arithmetic progressions, cyclicity multipliers.', completed: false, notes: '' },
  { id: 'day-57', day: 57, section: 'General', topic: 'Past Paper Mock', task: 'Attempt any one slot of the past original CAT papers as a mock exam; review details.', completed: false, notes: '' },
  { id: 'day-58', day: 58, section: 'General', topic: 'Error Review', task: 'Redo 12 previously flagged equations inside your active Error Notebook.', completed: false, notes: '' },
  { id: 'day-59', day: 59, section: 'General', topic: 'Skip Strategy Guide', task: 'Establish checklist criteria to immediately reject sets: formulate lists of trigger items.', completed: false, notes: '' },
  { id: 'day-60', day: 60, section: 'General', topic: 'Ultimate Calm', task: 'Examine center directions, print exam card, keep identity sheets ready, rest completely.', completed: false, notes: '' }
];

export const STARTER_PYP_ATTEMPTS: PYPAttempt[] = [
  // 2025
  { id: 'pyp-2025-s1', year: 2025, slot: 'Slot 1', section: 'Full Test', status: 'Re-attempt Planned', notes: 'Very hard algebra section. Intended to re-attempt as sectional in Oct.', reattemptDate: '2026-10-12' },
  { id: 'pyp-2025-s2', year: 2025, slot: 'Slot 2', section: 'DILR', status: 'Not started', notes: 'Heard the matrix arrangement set was highly creative.', reattemptDate: '' },
  { id: 'pyp-2025-s3', year: 2025, slot: 'Slot 3', section: 'Full Test', status: 'Attempted', score: 68, accuracy: 78, notes: 'Initial attempt under strict exam timing. VARC was relatively high, QA scaling was low.', reattemptDate: '' },
  
  // 2024
  { id: 'pyp-2024-s1', year: 2024, slot: 'Slot 1', section: 'Full Test', status: 'Attempted', score: 78, accuracy: 82, notes: 'Felt confident. Solved 2 full DILR sets perfectly. Quant arithmetic was smooth.', reattemptDate: '' },
  { id: 'pyp-2024-s2', year: 2024, slot: 'Slot 2', section: 'Full Test', status: 'Attempted', score: 72, accuracy: 75, notes: 'Took too much time in RC read, leaving 3 questions unattempted.', reattemptDate: '' },
  { id: 'pyp-2024-s3', year: 2024, slot: 'Slot 3', section: 'QA', status: 'Attempted', score: 32, accuracy: 90, notes: 'Sectional format only. Strong accuracy, but slow question selection.', reattemptDate: '' },
  
  // 2023
  { id: 'pyp-2023-s1', year: 2023, slot: 'Slot 1', section: 'Full Test', status: 'Attempted', score: 82, accuracy: 88, notes: 'Excellent accuracy. VARC summary was clean, DILR tables set was completely conceptual.', reattemptDate: '' },
  { id: 'pyp-2023-s2', year: 2023, slot: 'Slot 2', section: 'Full Test', status: 'Not started', notes: 'Aiming to solve as a mock in September.', reattemptDate: '' },
  { id: 'pyp-2023-s3', year: 2023, slot: 'Slot 3', section: 'Full Test', status: 'Re-attempt Planned', score: 62, accuracy: 71, notes: 'Rough score. Stuck in a Games set. Needs a full revision of tournament tables.', reattemptDate: '2026-09-05' },

  // Older years defaults
  { id: 'pyp-2022-s1', year: 2022, slot: 'Slot 1', section: 'Full Test', status: 'Attempted', score: 85, accuracy: 85, notes: 'Decent VARC, Quant was moderately standard.', reattemptDate: '' },
  { id: 'pyp-2022-s2', year: 2022, slot: 'Slot 2', section: 'Full Test', status: 'Not started', notes: 'Save for later revision.', reattemptDate: '' },
  { id: 'pyp-2022-s3', year: 2022, slot: 'Slot 3', section: 'Full Test', status: 'Not started', notes: 'Save for late mocks.', reattemptDate: '' },
  { id: 'pyp-2021-s1', year: 2021, slot: 'Slot 1', section: 'Full Test', status: 'Not started', notes: '', reattemptDate: '' },
  { id: 'pyp-2020-s1', year: 2020, slot: 'Slot 1', section: 'Full Test', status: 'Not started', notes: '', reattemptDate: '' },
  { id: 'pyp-2019-s1', year: 2019, slot: 'Slot 1', section: 'Full Test', status: 'Not started', notes: '', reattemptDate: '' },
  { id: 'pyp-2018-s1', year: 2018, slot: 'Slot 1', section: 'Full Test', status: 'Not started', notes: '', reattemptDate: '' },
  { id: 'pyp-2017-s1', year: 2017, slot: 'Slot 1', section: 'Full Test', status: 'Not started', notes: '', reattemptDate: '' },
];

export const STARTER_MOCKS: MockTest[] = [
  {
    id: 'mock-1',
    name: 'Prime CAT Mock #1',
    date: '2026-03-15',
    varcScore: 24,
    dilrScore: 12,
    qaScore: 18,
    totalScore: 54,
    percentileEstimate: 88.5,
    attempts: 32,
    corrects: 20,
    wrongs: 12,
    timeWasted: 15,
    keyMistakes: 'Stuck on a circular arrangement set for 18 minutes, resulting in zero attempts for other sets.',
    nextAction: 'Strictly apply the 5-minute selector rule: if no clue of grid mapping in 5m, abort the set.'
  },
  {
    id: 'mock-2',
    name: 'AIMS National CAT #04',
    date: '2026-04-10',
    varcScore: 30,
    dilrScore: 18,
    qaScore: 21,
    totalScore: 69,
    percentileEstimate: 94.2,
    attempts: 35,
    corrects: 25,
    wrongs: 10,
    timeWasted: 9,
    keyMistakes: 'Poor accuracy in VARC Inference questions. Concept gaps in Quadratic Equation maximum limit models.',
    nextAction: 'Practice 20 modulus inequality questions and take 3 contextual VARC timed quizzes.'
  },
  {
    id: 'mock-3',
    name: 'Prime CAT Mock #4',
    date: '2026-05-18',
    varcScore: 39,
    dilrScore: 24,
    qaScore: 30,
    totalScore: 93,
    percentileEstimate: 98.6,
    attempts: 42,
    corrects: 33,
    wrongs: 9,
    timeWasted: 4,
    keyMistakes: '2 translation/reading errors in Quant (misread speed ratio), 1 silly calculation mistake on a simple AP question.',
    nextAction: 'Read the final line of Quant questions twice to confirm exactly what is asked (e.g. radius vs diameter, ratio of A:B vs B:A).'
  }
];

export const STARTER_FORMULAS: Formula[] = [
  // Arithmetic
  {
    id: 'form-1',
    category: 'Arithmetic',
    title: 'Relative Speed of Two Moving Objects',
    formulaText: 'Opposite Direction: S_rel = S_A + S_B\nSame Direction: S_rel = |S_A - S_B|',
    explanation: 'Used extensively in trains, streams, and tracking problems. Remember: convert units consistently (1 km/hr = 5/18 m/s).',
    revised: true,
    lastRevisedDate: '2026-05-24'
  },
  {
    id: 'form-2',
    category: 'Arithmetic',
    title: 'Compound Interest with Intermittent compounding',
    formulaText: 'A = P * (1 + r / (n * 100))^(n * t)',
    explanation: 'Where n is the frequency of compounding per year. For continuous compounding: A = P * e^(r*t/100). For simple multipliers, recall that rate effects compound exponentially.',
    revised: false
  },
  {
    id: 'form-3',
    category: 'Arithmetic',
    title: 'Circular Track - Meeting Points',
    formulaText: 'From starting point: LCM(Distance / S1, Distance / S2)\nAnywhere on track: Times met before start met = Circumference / Rel Speed',
    explanation: 'To meet at starting point, we use LCM of individual times. To meet anywhere on track, we divide total distance by relative speed.',
    revised: true,
    lastRevisedDate: '2026-05-25'
  },

  // Algebra
  {
    id: 'form-4',
    category: 'Algebra',
    title: 'Sum of Infinite Geometric Progression',
    formulaText: 'S_infinite = a / (1 - r),  where |r| < 1',
    explanation: 'Crucial for bouncing ball problems and infinite series models. If r is positive/negative bounds, double check that convergence criteria is satisfied.',
    revised: true,
    lastRevisedDate: '2026-05-20'
  },
  {
    id: 'form-5',
    category: 'Algebra',
    title: 'Product and Sum of Quadratic Roots',
    formulaText: 'ax^2 + bx + c = 0 \nSum = -b/a, Product = c/a',
    explanation: 'Difference of roots = sqrt(b^2 - 4ac) / |a|. If roots are reciprocal, a = c. If roots are equal, b^2 = 4ac.',
    revised: true,
    lastRevisedDate: '2026-05-22'
  },
  {
    id: 'form-6',
    category: 'Algebra',
    title: 'Logarithmic Properties',
    formulaText: 'log_a(x * y) = log_a(x) + log_a(y) \nlog_a(x / y) = log_a(x) - log_a(y) \nlog_a(b) = log_c(b) / log_c(a)',
    explanation: 'Essential basic property: log base swap: log_a(b) = 1 / log_b(a). Base MUST be strictly positive and not equal to 1.',
    revised: false
  },

  // Geometry
  {
    id: 'form-7',
    category: 'Geometry',
    title: 'Apollonius Theorem',
    formulaText: 'AB^2 + AC^2 = 2 * (AD^2 + BD^2), where AD is the median to BC.',
    explanation: 'Relates lengths of sides of a triangle to its median length. Excellent for quick geometry calculations.',
    revised: false
  },
  {
    id: 'form-8',
    category: 'Geometry',
    title: 'Regular Hexagon Key Formulas',
    formulaText: 'Area = 6 * (sqrt(3)/4 * s^2) = (3 * sqrt(3) / 2) * s^2\nLongest Diagonal = 2s, Shortest Diagonal = s * sqrt(3)',
    explanation: 'Formed of 6 identical equilateral triangles. Very common in CAT geometry for partition and pathing queries.',
    revised: true,
    lastRevisedDate: '2026-05-23'
  },

  // Number system
  {
    id: 'form-9',
    category: 'Number system',
    title: 'Euler\'s Totient Function (Number of Coprimes)',
    formulaText: 'Phi(N) = N * (1 - 1/p_1) * (1 - 1/p_2) * ... where p_i are prime factors.',
    explanation: 'Used for finding remainders. Euler\'s theorem states a^Phi(N) % N = 1 if a and N are coprime. Very fast remainder shortcut.',
    revised: true,
    lastRevisedDate: '2026-05-18'
  },
  {
    id: 'form-10',
    category: 'Number system',
    title: 'Total and Sum of Factors',
    formulaText: 'For N = p_1^a * p_2^b: \nTotal Factors = (a + 1) * (b + 1)\nSum of Factors = [ (p_1^(a+1) - 1)/(p_1-1) ] * [ (p_2^(b+1) - 1)/(p_2-1) ]',
    explanation: 'Perfect squares have an odd number of factors. Standard shortcut is to write N as product of prime bases.',
    revised: false
  },

  // Modern math
  {
    id: 'form-11',
    category: 'Modern math',
    title: 'Circular Permutations',
    formulaText: 'Arranging n distinct objects = (n - 1)!\nArranging identical items (garland/necklace) = (n - 1)! / 2',
    explanation: 'No absolute starting position unless one item is fixed. Used in seating tables and decorative math problems.',
    revised: false
  },
  {
    id: 'form-12',
    category: 'Modern math',
    title: 'Set Theory: Intersection of 3 Sets',
    formulaText: 'A U B U C = A + B + C - (AnB + BnC + CnA) + (AnBnC)',
    explanation: 'Basis for advanced DILR Venn diagram grids. Focus heavily on regions denoting "Exactly One", "Exactly Two", or "At least Two".',
    revised: true,
    lastRevisedDate: '2026-05-25'
  }
];

export const STARTER_ERRORS: ErrorNotebookEntry[] = [
  {
    id: 'err-1',
    section: 'QA',
    topic: 'Logarithms',
    source: 'Mock 2 Q11',
    errorType: 'concept gap',
    correctApproach: 'Forgot that inputs inside logs must be strictly positive. Hence missed validating x - 4 > 0 parameter boundary.',
    redoDate: '2026-06-02',
    status: 'pending'
  },
  {
    id: 'err-2',
    section: 'DILR',
    topic: 'Venn diagrams',
    source: 'PYP 2023 Slot 3',
    errorType: 'misread',
    correctApproach: 'Misread "only Coffee" as "Coffee". This added extra variables and contaminated the entire 3-circle overlapping loop.',
    redoDate: '2026-05-26',
    status: 'redone'
  },
  {
    id: 'err-3',
    section: 'QA',
    topic: 'Time, speed, distance',
    source: 'Mock 1 Q21',
    errorType: 'calculation error',
    correctApproach: 'Wrote 5/18 as 18/5, leading to fractional speeds. Redo was perfect. Always double check conversion factors immediately.',
    redoDate: '2026-05-24',
    status: 'mastered'
  }
];

export const STARTER_WEEKLY_PLAN: WeeklyStudyPlan[] = [
  {
    week: 1,
    phase: 'Base building',
    theme: 'Diagnostic Mock & Fundamentals',
    varcTarget: 'Diagnostic VARC analysis. Start reading 2 long editorial articles daily.',
    dilrTarget: 'Basic linear arrangements. Table calculations & percentage translation.',
    qaTarget: 'Percentages, simple fractions to decimals tables, ratio concepts.',
    mockTarget: 'Take a diagnostic self-assessment mock test to find primary weak links.',
    notes: 'Objective is to get used to sitting in front of a monitor for 120 minutes.',
    completed: true
  },
  {
    week: 2,
    phase: 'Base building',
    theme: 'Calculations & Simple Linear Setup',
    varcTarget: 'Identify central theme in short paragraphs. Read articles on art & history.',
    dilrTarget: 'Circular arrangements and direct multi-parameter matrix sets.',
    qaTarget: 'Profit, loss, discounts, markups, successive discount shortcuts.',
    mockTarget: 'Review the base diagnostic mock parameters carefully.',
    notes: 'Focus purely on working without an calculator; practice speedy mental additions.',
    completed: true
  },
  {
    week: 3,
    phase: 'Base building',
    theme: 'Arithmetic Core & Logic Basics',
    varcTarget: 'Practice 10 simple odd sentence out questions. Read scientific case journals.',
    dilrTarget: 'Simple bar and line graphs. Practice trend identification.',
    qaTarget: 'Simple and Compound interest basic formulae & annual vs semi-annual compounding.',
    mockTarget: '1 custom VARC timed sectional test.',
    notes: 'Formulate a revision guide for percentages and multipliers.',
    completed: true
  },
  {
    week: 4,
    phase: 'Base building',
    theme: 'Base Phase Review',
    varcTarget: 'Para summaries - matching core definitions. Read economic newspapers.',
    dilrTarget: 'Solve 10 standard arrangement sets from previous year CAT papers.',
    qaTarget: 'Averages and mixtures foundations. Alligation cross diagram rule.',
    mockTarget: 'Take a full-length section-timed mock test.',
    notes: 'Assess improvements compared to the Diagnostic Test of Week 1.',
    completed: true
  },
  {
    week: 5,
    phase: 'Topic coverage',
    theme: 'Algebra Kick-off & Venn Diagrams',
    varcTarget: 'RC strategies - tone recognition. Daily 2 passages of diverse genres.',
    dilrTarget: 'Venn Diagrams - covering the 3-set standard equations.',
    qaTarget: 'Linear equations solutions, integer constraints, mixtures and alligations.',
    mockTarget: '1 sectional test of DILR.',
    notes: 'Set theory overlaps with QA, so cover variables carefully.',
    completed: false
  },
  {
    week: 6,
    phase: 'Topic coverage',
    theme: 'Quadratic Curves & Logic Grid Sets',
    varcTarget: 'Para jumbles strategy. Daily 10 puzzles without options (TITA).',
    dilrTarget: 'Caselets translation. Practice turning long word sets into grids.',
    qaTarget: 'Quadratic equations, discriminant analysis, plotting minimal/maximal boundaries on parabolas.',
    mockTarget: '1 sectional test of QA.',
    notes: 'Focus on speed of typing in standard TITA solutions for Para Jumbles.',
    completed: false
  },
  {
    week: 7,
    phase: 'Topic coverage',
    theme: 'Inequalities & Advanced Charts',
    varcTarget: 'Inference questions training. Eliminate options that extrapolate.',
    dilrTarget: 'Pie charts combined with table distributions.',
    qaTarget: 'Linear inequalities, modulus constraints, wavy curve plotting method.',
    mockTarget: 'Full Mock Test #2.',
    notes: 'Note calculation details. Start tracking silly errors.',
    completed: false
  },
  {
    week: 8,
    phase: 'Topic coverage',
    theme: 'Functions & Games and Tournaments',
    varcTarget: 'Author\'s purpose questions. Read philosophy and history essays.',
    dilrTarget: 'Games and Tournaments - understanding structural logic and seeding.',
    qaTarget: 'Functions - domain, range, composite definitions, symmetric behaviors.',
    mockTarget: '1 full mock review notebook creation.',
    notes: 'Tournaments can be extremely tricky. Learn standard brackets of 128/64 players.',
    completed: false
  },
  {
    week: 9,
    phase: 'Accuracy improvement',
    theme: 'Logs, Progressions & Logic Chains',
    varcTarget: 'Time-bound RC blocks. Solve 4 RCs in 40 minutes with high focus.',
    dilrTarget: 'Binary logic basics - truth tellers, liars, and alternators.',
    qaTarget: 'Logarithms rules and series. Progressions (AP, GP, HP) and AM-GM inequality constraints.',
    mockTarget: 'DILR Time-bound sectional assessment.',
    notes: 'Review how many times you guessed blindly in VARC. Stop guessing!',
    completed: false
  },
  {
    week: 10,
    phase: 'Accuracy improvement',
    theme: 'Geometry Foundations',
    varcTarget: 'Solve 15 para completion questions. Focus on sentence flow markers.',
    dilrTarget: 'Scheduling & sequencing matrix setups.',
    qaTarget: 'Geometry lines, similarity of triangles, Cyclic quadrilaterals rules.',
    mockTarget: 'Full Length CAT Mock #3.',
    notes: 'Geometry represents 15-20% of QA. Make detailed visual flashcards.',
    completed: false
  },
  {
    week: 11,
    phase: 'Accuracy improvement',
    theme: 'Mensuration and 3D Shapes',
    varcTarget: 'RC summary exercises. Pick complex paragraphs from Aeon and summarize in 1 line.',
    dilrTarget: 'Routes and networks. Maximum flow, minimum cut concepts.',
    qaTarget: 'Mensuration - prism, pyramids, cones, cylinders, sphere and regular polyhedron.',
    mockTarget: 'QA sectional test on Geometry.',
    notes: 'Mensuration formulas are static; memorizing coordinates is important.',
    completed: false
  },
  {
    week: 12,
    phase: 'Accuracy improvement',
    theme: 'Number System Core',
    varcTarget: 'Vocabulary exercises in RC context. Focus on ambiguous terms.',
    dilrTarget: 'Selection and distribution combinations logic sets.',
    qaTarget: 'Number system - cyclicity, unit digit coordinates, number of factors.',
    mockTarget: 'Full Length CAT Mock #4.',
    notes: 'Number system has massive theory. Keep focus on highly recurring types only.',
    completed: false
  },
  {
    week: 13,
    phase: 'Accuracy improvement',
    theme: 'Remainder Theorems & Multi-Charts',
    varcTarget: 'Mixed VARC practice: 4 RCs + 4 Verbal Ability tasks in exact 40m.',
    dilrTarget: 'DILR Mixed charts - handling complex percentages across line graphs & tables.',
    qaTarget: 'Euler totient theorem, Fermat remainders, Chinese remainder concepts.',
    mockTarget: '1 VARC sectional + 1 QA sectional test.',
    notes: 'Learn when to leave difficult remainder questions in the first 2 minutes of QA.',
    completed: false
  },
  {
    week: 14,
    phase: 'Accuracy improvement',
    theme: 'Permutations & Probability Base',
    varcTarget: 'Inference and tone drill. Complete 20 practice questions.',
    dilrTarget: 'Review the top 10 toughest DILR sets solved in previous mocks.',
    qaTarget: 'Permutation & Combination (P&C) - identical item formula, grid routes, basic probability.',
    mockTarget: 'Full Length Mock #5.',
    notes: 'This marks the end of accuracy improvement phase. Assess section strength.',
    completed: false
  },
  {
    week: 15,
    phase: 'Mock test phase',
    theme: 'Mock Ingress - Time Division',
    varcTarget: 'Analyze the order of attempts in mock. Try RC-first vs VA-first approaches.',
    dilrTarget: 'Practice selecting sets. Give 5 mins to read all 4 sets, then rank them.',
    qaTarget: 'Practice skipping on first sight: separate QA questions into Round 1 and Round 2.',
    mockTarget: 'Full Mock #6 on Saturday, analysis on Sunday.',
    notes: 'Mock frequency rises to 1 full test a week with comprehensive 4-hour review.',
    completed: false
  },
  {
    week: 16,
    phase: 'Mock test phase',
    theme: 'Round 1 & 2 Execution',
    varcTarget: 'Maintain 90%+ accuracy in Para Summary and odd-sentence out.',
    dilrTarget: 'Venn diagrams 4-set practice. Logical reasoning drills.',
    qaTarget: 'Algebra and Arithmetic mixed speed tests.',
    mockTarget: 'Full Mock #7 and sectional reviews.',
    notes: 'Keep logging incorrect entries in the error notebook immediately.',
    completed: false
  },
  {
    week: 17,
    phase: 'Mock test phase',
    theme: 'Set Selection in DILR',
    varcTarget: 'Read quick essays on psychology and technology. Practice speed pacing.',
    dilrTarget: 'Games & Tournaments advanced variables. Games with bets or scores.',
    qaTarget: 'Modern Math review: AP-GP-HP overlaps, Venn diagrams QA, Set overlapping.',
    mockTarget: 'Full Mock #8.',
    notes: 'Are you leaving tough sets? DILR is about getting 2 sets fully right for a 99% percentile.',
    completed: false
  },
  {
    week: 18,
    phase: 'Mock test phase',
    theme: 'Previous Year Paper Mocking',
    varcTarget: 'Read articles outlining differing points of view. Identify authors sub-text.',
    dilrTarget: 'Circular tables with blood relations (extremely high logical complexity).',
    qaTarget: 'Geometry Coordinate systems & equilateral patterns.',
    mockTarget: 'Solve CAT 2024 Slot 1 as a live, timed simulated test.',
    notes: 'Compare your score with actual 2024 scale matrices.',
    completed: false
  },
  {
    week: 19,
    phase: 'Mock test phase',
    theme: 'Pacing Strategy Stabilization',
    varcTarget: 'Aim for a 3-RC attempt + 6-VA attempt limit, yielding optimal balance.',
    dilrTarget: 'Speed drill: complete an easy/medium table set inside 9 minutes.',
    qaTarget: 'Calculations review. Practice finding integer solutions for line boundaries.',
    mockTarget: 'Full Mock #9 and detailed analysis.',
    notes: 'Work exp and category documents check. Keep your physical certificate ready.',
    completed: false
  },
  {
    week: 20,
    phase: 'Mock test phase',
    theme: 'Stress Management',
    varcTarget: 'Do not panic on obscure jargon. Ignore difficult phrasing, focus on core logic.',
    dilrTarget: 'Practice 10 random sets using tables and data graphs from old CATs.',
    qaTarget: 'Quick review of all arithmetic formulas.',
    mockTarget: 'Full Mock #10 (The peak test).',
    notes: 'Simulate exact exam timings (Slot 1: 8:30 AM, Slot 2: 12:30 PM, Slot 3: 4:30 PM).',
    completed: false
  },
  {
    week: 21,
    phase: 'Final revision',
    theme: 'Weak Spot Sealing',
    varcTarget: 'Review tone files and author purpose charts. Steady reading pace.',
    dilrTarget: 'Revise 25 standard logical reasoning frameworks.',
    qaTarget: 'Solve 10 questions of each QA chapter, focusing solely on simple/medium levels.',
    mockTarget: 'CAT 2025 Slot 3 timed Paper revision.',
    notes: 'Do not start any brand new heavy high-concept topic here.',
    completed: false
  },
  {
    week: 22,
    phase: 'Final revision',
    theme: 'Error Notebook Deep Study',
    varcTarget: 'VA shortcuts and mandatory pair identifiers final run.',
    dilrTarget: 'Review the past 10 mock analysis sheets. Focus on the reason for wrong answers.',
    qaTarget: 'Identify mistakes made in mock test geometry & numbers. Retry those problems.',
    mockTarget: 'Final calm sectional tests (No heavy full-length mocks here).',
    notes: 'Avoid mock score disappointment. Focus purely on strategy.',
    completed: false
  },
  {
    week: 23,
    phase: 'Final revision',
    theme: 'Short Formula Run',
    varcTarget: 'Unseen short RCs reading practice for 20 minutes a day.',
    dilrTarget: 'Venn diagrams 3-set and 4-set formulas & maximum/minimum distribution.',
    qaTarget: 'Formula sheet thorough revision daily.',
    mockTarget: '1 very light CAT sectional to keep brains active.',
    notes: 'Logistics check: Print printout card, verify Google Maps route of test center.',
    completed: false
  },
  {
    week: 24,
    phase: 'Final revision',
    theme: 'The Exam Week Calm',
    varcTarget: 'No heavy reading on the last 3 days. Light editorials only.',
    dilrTarget: 'Zero exhaustive sets. Light review of simple puzzles.',
    qaTarget: 'Final review of standard values (squares up to 30, reciprocals up to 20, prime list).',
    mockTarget: 'None! Rest completely. Keep brain hydrated.',
    notes: 'Check list of things to carry. Get a full 8-hour sleep. You have done the work! Good luck.',
    completed: false
  }
];
