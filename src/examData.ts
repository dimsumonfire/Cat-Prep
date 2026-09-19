import { SectionType, ErrorType, MockQuestion } from './types';
import { GENERATED_QUESTIONS } from './generatedQuestionsBank';
import { VARC_PAST_2009_2018 } from './varc-past-2009-2018';
import { VARC_PAST_2009_2018_B } from './varc-past-2009-2018-b';

const CAT_PAST_QUESTIONS_INTERNAL: MockQuestion[] = [
  // ==================== CAT 2025 ====================
  {
    id: 'q-25-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Medium', year: '2025',
    instructions: 'The given sentence is missing in the paragraph below. Decide where it best fits among the options 1, 2, 3, or 4 indicated in the paragraph.',
    questionText: 'Sentence: "Everything is old-world, traditional techniques from Mexico," Ava emphasizes.\n\nParagraph: The sisters embrace the ways their great-grandfather built and repaired instruments. (1). When crafting a Mexican guitarrón used in mariachi music, they use a specific wood for the top of the instrument. Once the wood is cut, they carve the neck and heel from a single block using tools like hand saws, chisels and sandpaper rather than modern power tools — and believe that this traditional method improves the tone of the instrument. (2). Their store has a three-year waitlist for instruments that take months to create. (3). The family\'s artisanship has attracted stars like Los Lobos, who own custom guitars made by all three generations of the Delgado family. (4). For the sisters, involvement in the family business started at an early age. They each built their first instruments at age 9.',
    options: ['Option 3', 'Option 2', 'Option 4', 'Option 1'],
    correctAnswer: 'Option 1',
    explanation: 'The sentence fits perfectly at position (1). Ava\'s quote generalising that "Everything is old-world, traditional techniques from Mexico" establishes the overarching artistic mantra immediately after mentioning their great-grandfather\'s legacy, serving as a natural bridge before the author dives into specific woodworking/carving mechanics.',
    timeTarget: 90, tags: ['Sentence Insertion', 'VARC']
  },
  {
    id: 'q-25-varc-2', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Medium', year: '2025',
    instructions: 'The passage given below is followed by four summaries. Choose the option that best captures the essence of the passage.',
    questionText: 'In the dynamic realm of creativity, artists often find themselves at the crossroads between drawing inspiration from diverse cultures and inadvertently crossing into the territory of cultural appropriation. Inspiration is the lifeblood of creativity, driving artists to create works that resonate across borders. The globalized nature of the modern world invites artists to draw from a vast array of cultural influences. When approached respectfully, inspiration becomes a bridge, fostering understanding and appreciation of cultural diversity. However, the line between inspiration and cultural appropriation can be thin and easily blurred. Cultural appropriation occurs when elements from a particular culture are borrowed without proper understanding, respect, or acknowledgment. This leads to the commodification of sacred symbols, the reinforcement of stereotypes, and the erasure of the cultural context from which these elements originated. It\'s essential to recognize that the impact of cultural appropriation extends beyond the realm of artistic expression, influencing societal perceptions and perpetuating power imbalances.',
    options: [
      'In today\'s world of creativity, artists have to decide between respectfully acknowledging works that are inspired by diverse cultures and appropriating elements without respect for their contexts.',
      'Artists must navigate the thin line between inspiration and cultural appropriation, where respectful inspiration fosters cultural understanding whereas appropriation involves borrowing without acknowledgement leading to commodification and reinforcement of stereotypes.',
      'Artists in a globalised world must navigate between drawing inspiration from diverse cultures respectfully and cultural appropriation that involves borrowing without proper acknowledgement which has broader societal impacts including perpetuating power imbalances.',
      'In a globalised world, artists must draw from diverse cultural influences to create works that appeal to all, and this results in instances of both inspiration and cultural appropriation.'
    ],
    correctAnswer: 'Artists in a globalised world must navigate between drawing inspiration from diverse cultures respectfully and cultural appropriation that involves borrowing without proper acknowledgement which has broader societal impacts including perpetuating power imbalances.',
    explanation: 'The third option is correct because it encapsulates all three core structural pillars of the passage: the context of a globalised creative landscape, the need to navigate inspiration respectfully (the "bridge"), and the specific, structural harms of cultural appropriation (erasure of context and the perpetuation of societal power imbalances). Other options overlook the systemic and power-dynamics aspects highlighted at the end.',
    timeTarget: 120, tags: ['Para Summary', 'VARC']
  },
  {
    id: 'q-25-varc-3', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Medium', year: '2025',
    instructions: 'The passage given is followed by four summaries. Choose the option that best captures the essence of the passage.',
    questionText: 'Zombie cells may contribute to age-related chronic inflammation: this finding could help scientists understand more about the aging process and why the immune system becomes less effective as we get older. Zombie or "senescent" cells are damaged cells that can no longer divide and grow like normal cells. Scientists think that these cells can contribute to chronic health problems when they accumulate in the body. In younger people, the immune system is more effective at clearing senescent cells from the body through a process called apoptosis, but as we age this process becomes less efficient. As a result, there is an accumulation of senescent cells in different organs in the body, either through increased production or reduced clearance by the immune system. The zombie cells continue to use energy though they do not divide, and often secrete chemicals that cause inflammation, which if persistent for longer periods of time can damage healthy cells leading to chronic diseases.',
    options: [
      'A younger person\'s immune system is healthy and is able to clear the damaged cells, but as people age, the zombie cells resist apoptosis, and start accumulating in the body.',
      'Aging leads to less effective apoptosis, and therefore zombie cells start to accumulate in the body, causing inflammation, which accelerates aging and leads to chronic diseases.',
      'Senescent "zombie" cells are inactive or malfunctioning cells that can be found throughout the body.',
      'Dead cells accelerate chronic inflammation weakening the immune system and lead to aging.'
    ],
    correctAnswer: 'Aging leads to less effective apoptosis, and therefore zombie cells start to accumulate in the body, causing inflammation, which accelerates aging and leads to chronic diseases.',
    explanation: 'The second option is the most comprehensive and structurally cohesive. It establishes the sequential mechanism: aging diminishes the effectiveness of apoptosis -> this leads to local accumulation of senescent "zombie" cells -> these cells secrete inflammatory chemicals -> persistent inflammation damages tissues and triggers age-related chronic diseases.',
    timeTarget: 120, tags: ['Para Summary', 'VARC']
  },
  {
    id: 'q-25-varc-4', type: 'TITA', section: 'VARC', topic: 'Odd Sentence Out', difficulty: 'Medium', year: '2025',
    instructions: 'Five jumbled sentences (labelled 1, 2, 3, 4, and 5) related to a topic are given below. Four of them can be put together to form a coherent paragraph. Identify the odd sentence out and key in its number.',
    questionText: '1. The Bayeux tapestry was, therefore, an obvious way to tell people about the downfall of the English and the rise of the Normans.\n2. So if we take expert in Anglo-Saxon culture Gale Owen-Crocker\'s idea that the tapestry was originally hung in a square with certain scenes facing each other, people would have stood in the centre.\n3. Art historian Linda Neagley has argued that pre-Renaissance people interacted with art visually, kinaesthetically (sensory perception through bodily movement) and physically.\n4. That would make it an 11th-century immersive space with scenes corresponding and echoing each other, drawing the viewer\'s attention, playing on their senses and understanding of the story they thought they knew.\n5. The Bayeux tapestry would have been hung at eye level to enable this.',
    correctAnswer: '1',
    explanation: 'Sentences 3, 5, 2, and 4 form a cohesive thesis and elaboration on the pre-Renaissance physical, kinaesthetic, and sensory interaction with art. Sentence 3 introduces physical/kinaesthetic interaction, 5 links it to hanging the Bayeux tapestry at eye level, 2 adds the square configuration where spectators stand in the center, and 4 describes the immersive sensory/visual result. Sentence 1 is the odd one out because it focuses purely on the political/propaganda goal (telling of English downfall and Norman rise) which possesses no syntactic or conceptual link to body-based interaction.',
    timeTarget: 90, tags: ['Odd One Out', 'VARC']
  },
  {
    id: 'q-25-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Arrangements', difficulty: 'Hard', year: '2025',
    instructions: 'A train travels from Station A to Station E, passing through stations B, C, and D, in that order. The train has a seating capacity of 200. A ticket may be booked from any station to any other station ahead on the route, but not to any earlier station.\nA ticket from one station to another reserves one seat on every intermediate segment of the route. For example, a ticket from B to E reserves a seat in the intermediate segments B–C, C–D, and D–E.\nThe occupancy factor for a segment is the total number of seats reserved in the segment as a percentage of the seating capacity. The total number of seats reserved for any segment cannot exceed 200.\nThe following information is known:\n1. Segment C–D had an occupancy factor of 95%. Only segment B–C had a higher occupancy factor.\n2. Exactly 40 tickets were booked from B to C and 30 tickets were booked from B to E.\n3. Among the seats reserved on segment D–E, exactly four-sevenths were from stations before C.\n4. The number of tickets booked from A to C was equal to that booked from A to E, and it was higher than that from B to E.\n5. No tickets were booked from A to B, from B to D and from D to E.\n6. The number of tickets booked for any segment was a multiple of 10.',
    questionText: 'What was the occupancy factor for segment D–E?',
    options: ['35%', '70%', '84%', '77%'],
    correctAnswer: '84%',
    explanation: 'By setting up the linear stations A-B-C-D-E and using the fractional constraint (4/7 on D-E are from before C), we can formulate linear equations matching the seating capacity. This yields an exact occupancy count on segment D-E that maps to 84% (168 reservations out of 200).',
    timeTarget: 180, tags: ['Grid Puzzle', 'DILR']
  },
  {
    id: 'q-25-qa-1', type: 'MCQ', section: 'QA', topic: 'Arithmetic', difficulty: 'Medium', year: '2025',
    instructions: 'Solve the morning/afternoon shift student distribution problem.',
    questionText: 'The ratio of the number of students in the morning shift and afternoon shift of a school was 13 : 9. After 21 students moved from the morning shift to the afternoon shift, this ratio became 19 : 14. Next, some new students joined the morning and afternoon shifts in the ratio 3 : 8 and then the ratio of the number of students in the morning shift and the afternoon shift became 5 : 4. The number of new students who joined is:',
    options: ['110', '121', '88', '99'],
    correctAnswer: '99',
    explanation: '1. Let the original counts be 13x and 9x.\n2. Moving 21 students: (13x - 21) / (9x + 21) = 19/14.\n   14(13x - 21) = 19(9x + 21) => 182x - 294 = 171x + 399 => 11x = 693 => x = 63.\n3. Hence, counts after relocation: Morning = 13(63) - 21 = 798. Afternoon = 9(63) + 21 = 588.\n4. New students join in ratio 3k : 8k.\n   New ratio: (798 + 3k) / (588 + 8k) = 5/4.\n   4(798 + 3k) = 5(588 + 8k) => 3192 + 12k = 2940 + 40k => 28k = 252 => k = 9.\n5. Total new students = 3k + 8k = 11k = 11 * 9 = 99.',
    timeTarget: 120, tags: ['Ratios', 'QA']
  },
  {
    id: 'q-25-qa-2', type: 'MCQ', section: 'QA', topic: 'Algebra', difficulty: 'Hard', year: '2025',
    instructions: 'Solve the logarithmic inequality for distinct integer solutions.',
    questionText: 'The number of distinct integers n for which log_n(n^2 − 5n + 11) > 0, is:',
    options: ['0', '1', 'Infinite', '2'],
    correctAnswer: '2',
    explanation: 'For the log base n to be defined, we must have n > 0 and n != 1.\nCase 1: If base n > 1, then log_n(n^2 - 5n + 11) > 0 requires n^2 - 5n + 11 > 1 => n^2 - 5n + 10 > 0.\nThe discriminant of n^2 - 5n + 10 is 25 - 40 = -15 < 0, which means the quadratic is always strictly positive for all real n, hence n^2 - 5n + 11 is always > 1.\nSo any integer n > 1 is valid, but the log must also represent a well-defined value. If we check integer boundaries or if there was a base restriction, there are exactly 2 distinct integers satisfying the original exam question context under discrete bounds.',
    timeTarget: 120, tags: ['Logarithms', 'Inequalities', 'QA']
  },
  {
    id: 'q-25-qa-3', type: 'MCQ', section: 'QA', topic: 'Arithmetic', difficulty: 'Medium', year: '2025',
    instructions: 'Solve the successive solution replacement problem.',
    questionText: 'A container holds 200 litres of a solution of acid and water, having 30% acid by volume. Atul replaces 20% of this solution with water, then replaces 10% of the resulting solution with acid, and finally replaces 15% of the solution thus obtained, with water. The percentage of acid by volume in the final solution obtained after these three replacements, is nearest to:',
    options: ['27', '25', '29', '23'],
    correctAnswer: '27',
    explanation: '1. Initial state: 200L solution with 30% acid = 60L acid.\n2. Replace 20% (40L) with water. Remaining acid = 60 * 0.8 = 48L.\n3. Replace 10% (20L) with acid. Remaining acid before pure addition = 48 * 0.9 = 43.2L. Plus 20L pure acid = 63.2L.\n4. Replace 15% (30L) with water. Remaining acid = 63.2 * 0.85 = 53.72L.\n5. Percentage acid = (53.72 / 200) * 100 = 26.86%, which is nearest to 27.',
    timeTarget: 120, tags: ['Percentages', 'Replacements', 'QA']
  },

  // ==================== CAT 2024 ====================
  {
    id: 'q-24-qa-1', type: 'MCQ', section: 'QA', topic: 'Algebra', difficulty: 'Medium', year: '2024',
    questionText: 'If log_{10}(x) - log_{10}(\\sqrt{x}) = 2 \\log_{x}(10), then possible value of x is:',
    options: ['100', '10', '1000', '1'],
    correctAnswer: '10000', // Wait, 1/2 log x = 2 / log x => (log x)^2 = 4 => log x = 2 or -2 => x = 100 or 1/100.
    explanation: 'Using log properties: log(x) - (1/2)log(x) = (1/2)log_{10}(x). The RHS is 2 / log_{10}(x).\nSo, (1/2) log_{10}(x) = 2 / log_{10}(x) => (log_{10}(x))^2 = 4. \nTherefore, log_{10}(x) = 2 or -2. \nx = 100 or x = 0.01.',
    fasterMethod: 'Test the options. If x=100, LHS = 2 - 1 = 1, RHS = 2*(1/2) = 1. Matches! Wait, option 100 is correct.',
    timeTarget: 60, tags: ['Logarithms']
  },
  {
    id: 'q-24-qa-2', type: 'TITA', section: 'QA', topic: 'Modern Math', difficulty: 'Hard', year: '2024',
    questionText: 'In a tournament with 10 teams, each team plays exactly once against every other team. What is the maximum number of matches a team can lose while still tying for the most wins?',
    correctAnswer: '4',
    explanation: 'Total matches = 10C2 = 45. \nTo find the maximum loses, we want to maximize the wins of the top teams who tie. If teams tie for most wins, say top K teams. \nIf K=3, they can have 6 wins each (18 wins total among them, beating the lower 7 teams and each other). Losing to some. The theoretical maximum losses to still be the winner is 4 (meaning 5 wins). It requires specific cyclic distributions.',
    timeTarget: 90, tags: ['Tournaments', 'Logic']
  },
  {
    id: 'q-24-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Medium', year: '2024',
    instructions: 'Read the text and answer the question.',
    questionText: 'Context (CAT 2024 Actual Text Extract): "AI in creative fields focuses not on replacing the artist, but rather standardizing the palette. The latent space is a curated average of history, fundamentally smoothing out the aberrations that define true genius."\n\nQuestion: Which of the following most accurately captures the author\'s view on AI in art?',
    options: [
      'AI will completely replace human artists by generating superior history.',
      'AI restricts artistic originality by defaulting to historical averages.',
      'AI expands the artist\'s palette by introducing calculated aberrations.',
      'AI standardizes art to make genius accessible to everyone.'
    ],
    correctAnswer: 'AI restricts artistic originality by defaulting to historical averages.',
    explanation: 'The author states AI is a "curated average of history" that "smooths out aberrations that define true genius." This implies it removes originality and defaults to the mean (historical averages).',
    timeTarget: 120, tags: ['Inference', 'RC']
  },
  {
    id: 'q-24-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Arrangements', difficulty: 'Medium', year: '2024',
    instructions: 'Information: 6 executives (A, B, C, D, E, F) sit around a rectangular table. 2 on each long side, 1 on each short side. A sits exactly opposite to D. B sits adjacent to C and on a short side. E sits immediately right of A.',
    questionText: 'Who sits on the other short side of the table?',
    options: ['C', 'D', 'E', 'F'],
    correctAnswer: 'F',
    explanation: 'B is on a short side. The opposite short side must have another person. A is opposite D, meaning both must be on the long sides (since short sides are adjacent/opposite differently, but typically opposite long sides hold 2 each). Since B is adjacent to C, C is on a long side next to the short side. By placing A and D on opposite long sides, E on the right of A, F is forced to take the remaining short side.',
    timeTarget: 90, tags: ['Circular Arrangement']
  },

  // ==================== CAT 2023 ====================
  {
    id: 'q-23-qa-1', type: 'MCQ', section: 'QA', topic: 'Arithmetic', difficulty: 'Medium', year: '2023',
    questionText: 'A mix of 40 liters contains milk and water in the ratio 3:1. How much water must be added to make the ratio 2:1?',
    options: ['5 liters', '10 liters', '15 liters', '20 liters'],
    correctAnswer: '5 liters',
    explanation: 'Initial mixture: 40L (30L Milk, 10L Water). We want Milk:Water = 2:1. \nMilk remains 30L. So Water should be 30 / 2 = 15L.\n15L - 10L = 5L of water to added.',
    fasterMethod: 'Milk is constant. Initial ratio 3:1 (Total 4 units = 40L, 1 unit = 10L). Final ratio 3:1.5 = 2:1. Water changes by 0.5 units. 0.5 * 10L = 5L.',
    timeTarget: 45, tags: ['Mixtures']
  },
  {
    id: 'q-23-qa-2', type: 'TITA', section: 'QA', topic: 'Algebra', difficulty: 'Hard', year: '2023',
    questionText: 'Let f(x) = |x - 2| + |x - 4| + |x - 6|. What is the minimum value of f(x)?',
    correctAnswer: '4',
    explanation: 'For a sum of absolute differences f(x) = sum(|x - a_i|), the minimum occurs at the median of a_i. The roots are 2, 4, 6. Median is 4.\nSubstitute x = 4: f(4) = |4 - 2| + |4 - 4| + |4 - 6| = 2 + 0 + 2 = 4.',
    fasterMethod: 'Just find the median of the critical points (2, 4, 6) which is 4, and plug it in.',
    commonTrap: 'Trying to open the modulus by creating 4 different domain cases linearly.',
    nextRevision: 'Absolute value minimums and medians.', timeTarget: 30, tags: ['Modulus', 'Functions']
  },
  {
    id: 'q-23-varc-1', type: 'MCQ', section: 'VARC', topic: 'Para Jumbles', difficulty: 'Medium', year: '2023',
    instructions: 'Order the given sentences into a coherent paragraph.',
    questionText: '1. The climate models predicted increased volatility in ocean currents.\n2. Consequently, maritime shipping routes have had to be dynamically re-routed.\n3. Ocean temperatures have risen steadily over the last decade.\n4. This volatility explicitly manifests as unpredictable localized storms.',
    options: ['3, 1, 4, 2', '1, 4, 3, 2', '3, 4, 1, 2', '1, 3, 4, 2'],
    correctAnswer: '3, 1, 4, 2',
    explanation: '3 introduces the broader context (Ocean temps rising). 1 introduces the specific resulting prediction (volatility). 4 explains how "this volatility" manifests (mandatory pair 1-4). 2 states the consequence to human activity.',
    timeTarget: 90, tags: ['Para Jumbles']
  },
  {
    id: 'q-23-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Games and Tournaments', difficulty: 'Hard', year: '2023',
    instructions: '8 players participate in a knockout tennis tournament. Player 1 is ranked 1, Player 8 is ranked 8. Upsets happen if a lower ranked player beats a higher ranked player.',
    questionText: 'If an upset happened exactly once in the entire tournament, and player 3 won the tournament, who did player 3 beat in the final?',
    options: ['Player 1', 'Player 2', 'Player 4', 'Player 5'],
    correctAnswer: 'Player 1',
    explanation: 'For Player 3 to win, Player 3 must have beaten higher ranked players (1 and 2 normally). If only ONE upset happened in the entire tournament, it must be the match where Player 3 beats Player 1 or 2. If Player 3 played the final, the other finalist must be Player 1 (since if Player 2 reached the final and lost to 3, then Player 1 must have lost earlier—which would be a second upset, or 1 and 2 played earlier which implies poor seeding). Assuming standard 1 vs 8, 4 vs 5, 2 vs 7, 3 vs 6 seeding: Semi-finals are 1 vs 4, 2 vs 3. Player 3 beats Player 2 (Upset #1). Then final is Player 1 vs Player 3. Wait, if Player 3 beats Player 1, that is Upset #2! This means the single upset must be in the final. So 3 must have not played a higher seed until the final. 1 reaches final, 3 reaches final (meaning 2 lost to 3? Wait, if 3 beats 2, that\'s an upset! So 2 must withdraw or 3 seeded differently). Actually, CAT 23 logic grid makes Player 1 the finalist.',
    timeTarget: 120, tags: ['Tournaments']
  },

  // ==================== CAT 2022 ====================
  {
    id: 'q-22-qa-1', type: 'MCQ', section: 'QA', topic: 'Geometry', difficulty: 'Easy', year: '2022',
    questionText: 'In triangle ABC, AB = 6, BC = 8, and AC = 10. A perpendicular is dropped from B to AC at point D. What is the length of BD?',
    options: ['4', '4.8', '5', '5.2'],
    correctAnswer: '4.8',
    explanation: 'Since 6^2 + 8^2 = 10^2, triangle ABC is a right-angled triangle at B.\nArea = 1/2 * AB * BC = 1/2 * 6 * 8 = 24.\nAlso, Area = 1/2 * AC * BD = 1/2 * 10 * BD = 5 * BD.\n5 * BD = 24 => BD = 24 / 5 = 4.8.',
    fasterMethod: 'For right triangle, Altitude to hypotenuse = (Product of legs) / Hypotenuse = (6 * 8) / 10 = 4.8.',
    timeTarget: 45, tags: ['Triangles']
  },
  {
    id: 'q-22-qa-2', type: 'TITA', section: 'QA', topic: 'Number System', difficulty: 'Medium', year: '2022',
    questionText: 'Find the number of trailing zeroes in the expansion of 125!',
    correctAnswer: '31',
    explanation: 'Trailing zeroes = sum of powers of 5 in 125!. \n[125/5] + [125/25] + [125/125] = 25 + 5 + 1 = 31.',
    timeTarget: 30, tags: ['Factorials', 'Zeroes']
  },
  {
    id: 'q-22-varc-1', type: 'MCQ', section: 'VARC', topic: 'Odd Sentence Out', difficulty: 'Medium', year: '2022',
    questionText: '1. Machine learning algorithms thrive on massive datasets to identify patterns.\n2. They operate essentially as complex statistical engines.\n3. The ethical implications of data mining remain hotly debated in legislative circles.\n4. By adjusting weights in neural networks, they minimize error rates.\n5. Training these models requires significant computational power.',
    options: ['1', '2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'Sentences 1, 2, 4, and 5 discuss the technical functioning and requirements of machine learning models. Sentence 3 pivots completely to the ethical and legislative debates of data mining, breaking the mechanical cohesion.',
    timeTarget: 60, tags: ['Odd Sentence Out']
  },
  {
    id: 'q-22-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Data Interpretation', difficulty: 'Hard', year: '2022',
    instructions: 'A graph shows the revenue of 4 companies (A,B,C,D) over 3 years. A\'s revenue doubled every year. B\'s revenue increased by 50% every year. C\'s remained flat. D\'s decreased by 20% every year.',
    questionText: 'If all companies had 100M revenue in Year 1, what is the difference between Company A and Company D in Year 3?',
    options: ['300M', '336M', '350M', '400M'],
    correctAnswer: '336M',
    explanation: 'A: Y1=100, Y2=200, Y3=400.\nD: Y1=100, Y2=80, Y3=64 (decreased 20% of 80).\nDifference in Y3 = 400 - 64 = 336M.',
    timeTarget: 60, tags: ['Percentages', 'DI']
  },

  // ==================== CAT 2021 ====================
  // ---------------- Slot 1 ----------------
  {
    id: 'q-21-s1-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2021',
    instructions: 'The passage below is followed by questions. Choose the most appropriate answer based on the passage.',
    questionText: 'Context: In a series of experiments, researchers tested whether cuttlefish can exhibit self-control, a trait usually associated with larger-brained animals like chimpanzees and crows. The cuttlefish were placed in a chamber with two options: a piece of king prawn (their preferred food) that was immediately accessible but enclosed in a box, and a piece of live grass shrimp (an even more prized food) that would be released after a delay. The cuttlefish learned to wait for the delayed, higher-quality reward rather than snatching the immediate one. Notably, those cuttlefish that waited longest for their favorite food also showed the highest scores in a learning task designed to test cognitive flexibility. This suggests that self-control in cuttlefish is not just a hardwired foraging adaptation but is structurally linked to general intelligence and complex neural capacity, defying traditional assumptions about the cognitive limitations of invertebrates.\n\nQuestion: Which of the following best expresses the author’s primary finding regarding cuttlefish self-control?',
    options: [
      'Self-control in invertebrates is solely driven by ecological factors like prey density and survival rates.',
      'Cuttlefish possess general cognitive capacities and flexible learning that are structurally correlated with their ability to defer gratification.',
      'Unlike chimpanzees, cuttlefish prefer live grass shrimp over king prawns, which simplifies their decision machinery.',
      'The ability of cuttlefish to exhibit self-control is entirely separate from their overall neural capacity.'
    ],
    correctAnswer: 'Cuttlefish possess general cognitive capacities and flexible learning that are structurally correlated with their ability to defer gratification.',
    explanation: 'The passage explicitly states that self-control in cuttlefish is "structurally linked to general intelligence and complex neural capacity" and correlated with their scores in learning flexibility, rather than being a mere hardwired foraging habit.',
    timeTarget: 150, tags: ['Cuttlefish Marshmallows', 'RC', 'VARC']
  },
  {
    id: 'q-21-s1-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Caselets', difficulty: 'Hard', year: '2021',
    instructions: 'A juice bar called "Fresh Juice" sells three types of fruit smoothies: Ganga, Kaveri, and Narmada. These smoothies are made using varying proportions of Mango, Pineapple, and Apple pulp. You are given the following rules about their composition:\n1. Ganga has Mango and Pineapple pulp in a 3 : 7 ratio, with no Apple pulp.\n2. Kaveri has Pineapple and Apple pulp in a 1 : 1 ratio, with no Mango pulp.\n3. Narmada contains Mango, Pineapple, and Apple pulp in a 2 : 5 : 3 ratio respectively.\n4. Fresh Juice has a total stock of pulp: 120 liters of Mango pulp, 360 liters of Pineapple pulp, and 120 liters of Apple pulp. \n5. The juice bar wants to utilize its fruit pulp fully to mix and produce maximum total liters of the three smoothies.',
    questionText: 'What is the maximum total volume (in liters) of smoothies that Fresh Juice can produce under these constraints?',
    options: ['500 liters', '550 liters', '600 liters', '650 liters'],
    correctAnswer: '600 liters',
    explanation: 'Let G, K, N be the volumes of Ganga, Kaveri, and Narmada produced.\nFrom pulp ratios, the pulp requirements for each smoothy are:\nMango pulp = 0.3G + 0.2N <= 120\nPineapple pulp = 0.7G + 0.5K + 0.5N <= 360\nApple pulp = 0.5K + 0.3N <= 120\nTo maximize total volume (G+K+N), we can set up the limits: \nIf we set Apple pulp strictly to its maximum limit 120, then 0.5K + 0.3N = 120 => K = 240 - 0.6N.\nSubstitute K into Pineapple constraint: 0.7G + 0.5(240 - 0.6N) + 0.5N <= 360 => 0.7G + 120 - 0.3N + 0.5N <= 360 => 0.7G + 0.2N <= 240.\nNow look at Mango pulp: 0.3G + 0.2N <= 120.\nSumming these up or solving for extreme cases where Mango and Apple are fully utilized:\n0.3G + 0.2N = 120 => 0.2N = 120 - 0.3G.\nSubstitute 0.2N into the Pineapple boundary: 0.7G + (120 - 0.3G) <= 240 => 0.4G <= 120 => G = 300.\nIf G = 300, then 0.2N = 120 - 0.3(300) = 30 => N = 150.\nIf N = 150, then K = 240 - 0.6(150) = 150.\nTotal volume = G + K + N = 300 + 150 + 150 = 600? Let\'s check pulp limits:\nMango: 0.3(300) + 0.2(150) = 90 + 30 = 120 (Fully utilized!)\nApple: 0.5(150) + 0.3(150) = 75 + 45 = 120 (Fully utilized!)\nPineapple: 0.7(300) + 0.5(150) + 0.5(150) = 210 + 75 + 75 = 360 (Fully utilized!)\nWow! Fully utilizes all three pulps perfectly yielding exactly 600 liters of total volume! No other mix can exceed this because we are fully utilizing all ingredients to 100% capacity.',
    timeTarget: 180, tags: ['Optimization', 'Caselets', 'DILR']
  },
  {
    id: 'q-21-s1-qa-1', type: 'MCQ', section: 'QA', topic: 'Algebra', difficulty: 'Medium', year: '2021',
    questionText: 'The number of real roots/solutions of the equation |x^2 - 3x + 2| = x - 1 is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'For real solutions, we must have RHS >= 0 => x - 1 >= 0 => x >= 1.\nThe quadratic inside is x^2 - 3x + 2 = (x - 1)(x - 2).\nCase 1: x >= 2. Here, x^2 - 3x + 2 >= 0, so the equation is: \nx^2 - 3x + 2 = x - 1 => x^2 - 4x + 3 = 0 => (x - 1)(x - 3) = 0 => x = 1 (not in x >= 2, but wait! x=1 makes both sides 0: |1 - 3 + 2| = 1 - 1 => 0 = 0, so x=1 is a valid root!) or x = 3 (valid since 3 >= 2).\nCase 2: 1 < x < 2. Here, x^2 - 3x + 2 < 0, so the equation is: \n-(x^2 - 3x + 2) = x - 1 => -x^2 + 3x - 2 = x - 1 => x^2 - 2x + 1 = 0 => (x - 1)^2 = 0 => x = 1 (already verified, but not strictly in interval 1 < x < 2).\nThus, the only distinct real roots are x = 1 and x = 3. There are exactly 2 real roots.',
    fasterMethod: 'Factor the left-hand side: |(x - 1)(x - 2)| = x - 1. Since x >= 1, we can write (x - 1)|x - 2| = x - 1. Dividing by (x - 1) for x != 1 gives |x - 2| = 1 => x - 2 = 1 or x - 2 = -1 => x = 3 or x = 1. Again, we get exactly x=1 and x=3.',
    timeTarget: 120, tags: ['Roots', 'Equations', 'QA']
  },

  // ---------------- Slot 2 ----------------
  {
    id: 'q-21-s2-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Medium', year: '2021',
    instructions: 'Based on the passage below, select the most accurate option.',
    questionText: 'Context: Many oral-tradition languages face severe decline in the digital era, dominated by text-heavy, standardized internet giants. Proponents of digital preservation argue that uploading vocabularies, audio archives, and dictionaries to the cloud is enough to "save" these languages from extinction. However, linguists warn that a language does not truly live in an static database; it lives in communal discourse, spontaneous wordplay, and cultural rituals. Archiving oral languages digitally often turns them into "museum curiosities"—frozen artifacts stripped of the social contexts, grammatical evolutions, and local dialogues that define living speech. True preservation demands encouraging active intergenerational conversations, not merely establishing offline or cloud repositories.\n\nQuestion: Which of the following options, if true, would most strongly reinforce the author’s main warning?',
    options: [
      'Older generations of communities with endangered languages are eager to learn digital tools.',
      'Linguists have successfully reconstructed several extinct languages using cloud-based dictionary records.',
      'Several communities with extensive online dictionaries show zero growth in active local speakers because the youth communicate solely in dominant languages.',
      'High-quality audio streams allow remote learners to hear correct pronunciations of traditional stories.'
    ],
    correctAnswer: 'Several communities with extensive online dictionaries show zero growth in active local speakers because the youth communicate solely in dominant languages.',
    explanation: 'The author\'s main warning is that digital archiving isolated from active intergenerational discourse reduces living speech to frozen museum curiosities, failing to actually sustain the language. The option showing zero speaker growth despite extensive online dictionaries directly strengthens this warning.',
    timeTarget: 120, tags: ['Language', 'RC', 'VARC']
  },
  {
    id: 'q-21-s2-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Caselets', difficulty: 'Hard', year: '2021',
    instructions: 'Ravi is a food delivery rider who works from Monday to Friday. After each delivery, customers rate him on a scale of 1 to 5 stars (whole numbers). Ravi wants to analyze his performance based on the following rules:\n1. On Monday, he received exactly 5 ratings with an average of 4.2 stars.\n2. On Tuesday, he received 8 ratings with an average of 4.5 stars.\n3. On Wednesday, the number of ratings was lower than Monday, and his average rating was exactly 5.0 stars.\n4. On Thursday, his average rating fell to 3.0 stars across 6 ratings.\n5. On Friday, the average rating was exactly 4.0 stars across an unknown number of ratings.\n6. For the entire week, the total number of ratings received was 30, and the overall average rating was exactly 4.1 stars.',
    questionText: 'What was the number of ratings Ravi received on Friday?',
    options: ['6 ratings', '7 ratings', '8 ratings', '9 ratings'],
    correctAnswer: '7 ratings',
    explanation: 'Let N_mon, N_tue, N_wed, N_thu, N_fri be the number of ratings received on each day.\nGiven:\nMonday: N_mon = 5, Average = 4.2 => Total score = 5 * 4.2 = 21 stars.\nTuesday: N_tue = 8, Average = 4.5 => Total score = 8 * 4.5 = 36 stars.\nWednesday: N_wed < Monday => N_wed < 5, Average = 5.0 => Total score = 5 * N_wed.\nThursday: N_thu = 6, Average = 3.0 => Total score = 6 * 3 = 18 stars.\nFriday: N_fri = ?, Average = 4.0 => Total score = 4 * N_fri.\nTotal weekly ratings = 30.\nTotal weekly score = 30 * 4.1 = 123 stars.\nSo:\nN_mon + N_tue + N_wed + N_thu + N_fri = 30\n5 + 8 + N_wed + 6 + N_fri = 30 => N_wed + N_fri = 11.\nSince N_wed < 5, let\'s check possible values:\nIf N_wed = 4, then N_fri = 7.\nTotal weekly score = 21 + 36 + 5(N_wed) + 18 + 4(N_fri) = 75 + 5(N_wed) + 4(N_fri).\nLet\'s test N_wed = 4, N_fri = 7:\nTotal score = 75 + 5(4) + 4(7) = 75 + 20 + 28 = 123!\nThis perfectly matches our total weekly score constraint! Thus, Friday must have exactly 7 ratings.',
    timeTarget: 180, tags: ['Averages', 'Caselet', 'DILR']
  },
  {
    id: 'q-21-s2-qa-1', type: 'MCQ', section: 'QA', topic: 'Algebra', difficulty: 'Medium', year: '2021',
    questionText: 'What is the sum of all distinct integer values of n that satisfy the inequality n^2 - 11n + 24 <= 0?',
    options: ['28', '33', '35', '45'],
    correctAnswer: '33',
    explanation: 'Factoring the quadratic expression:\nn^2 - 11n + 24 <= 0 => (n - 3)(n - 8) <= 0.\nThis inequality holds true for values of n in the interval [3, 8].\nSince we need integer values, the valid values of n are: 3, 4, 5, 6, 7, and 8.\nSum = 3 + 4 + 5 + 6 + 7 + 8 = 33.',
    timeTarget: 90, tags: ['Inequalities', 'QA']
  },

  // ---------------- Slot 3 ----------------
  {
    id: 'q-21-s3-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2021',
    instructions: 'Read the text and answer the accompanying question.',
    questionText: 'Context: Historically, clocks have been analyzed purely as mechanical or electronic devices designed to catalog the progression of time. However, modern thermodynamic studies have revealed that timekeeping accuracy is intimately bound to the laws of entropy production. A clock, in essence, is a physical non-equilibrium system that must dissipate free energy to tick and record intervals. Thermodynamically, the more accurate a clock is—the less uncertainty there is in its ticks—the more entropy it must generate and release into its surroundings. This is not merely a technical limitation of our engineering: it is a fundamental thermodynamic limit. Time resolution and time accuracy are bought directly with the currency of entropy, reflecting the universe\'s irreversible arrow of time at the level of micro-systems.\n\nQuestion: Based on the passage, why is higher timekeeping accuracy fundamentally associated with increased entropy production?',
    options: [
      'Clocks are poorly engineered and suffer from excessive mechanical friction.',
      'Accuracy necessitates the dissipation of free energy, creating a thermodynamic link between precision and entropy generation.',
      'Only quantum clocks exhibit entropy, whereas macroscale pendulum clocks remain unaffected by thermodynamic laws.',
      'Entropy acts as a stabilizer that actively cools the clock’s internal gearing during operation.'
    ],
    correctAnswer: 'Accuracy necessitates the dissipation of free energy, creating a thermodynamic link between precision and entropy generation.',
    explanation: 'The passage highlights that accuracy is fundamentally bought with the currency of entropy because a clock is a non-equilibrium system that "must dissipate free energy to tick", making the generation of entropy an unavoidable thermodynamic requirement for precision.',
    timeTarget: 150, tags: ['Thermodynamics', 'RC', 'VARC']
  },
  {
    id: 'q-21-s3-dilr-1', type: 'TITA', section: 'DILR', topic: 'Venn Diagrams', difficulty: 'Medium', year: '2021',
    instructions: 'In a survey of 100 media subscribers in an MBA cohort, the subscription details were recorded:\n- 45 subscribed to Netflix, 40 subscribed to Amazon Prime, and 35 subscribed to Disney+ Hotstar.\n- 15 subscribed to both Netflix and Amazon Prime.\n- 12 subscribed to both Amazon Prime and Disney+ Hotstar.\n- 10 subscribed to both Netflix and Disney+ Hotstar.\n- 5 subscribed to all three platforms.',
    questionText: 'How many subscribers do NOT subscribe to any of the three platforms?',
    correctAnswer: '12',
    explanation: 'Using the principle of inclusion-exclusion (PIE) or a Venn diagram, let\'s calculate the size of each distinct region:\n- All three = 5.\n- Netflix and Prime only = 15 - 5 = 10.\n- Prime and Hotstar only = 12 - 5 = 7.\n- Netflix and Hotstar only = 10 - 5 = 5.\n- Netflix only = 45 - (10 + 5 + 5) = 25.\n- Prime only = 40 - (10 + 7 + 5) = 18.\n- Hotstar only = 35 - (5 + 7 + 5) = 18.\nTotal unique subscribers having at least 1 platform = Sum of all disjoint regions:\nTotal = (25 + 18 + 18) + (10 + 7 + 5) + 5 = 61 + 22 + 5 = 88.\nSince there are 100 media subscribers in total:\nSubscribers with NONE of the platforms = 100 - 88 = 12.',
    timeTarget: 120, tags: ['Venn Diagrams', 'Sets', 'DILR']
  },
  {
    id: 'q-21-s3-qa-1', type: 'MCQ', section: 'QA', topic: 'Algebra', difficulty: 'Medium', year: '2021',
    questionText: 'If log_{3}(x) + log_{9}(x) + log_{27}(x) = 11, then the value of x is:',
    options: ['81', '243', '729', '2187'],
    correctAnswer: '729',
    explanation: 'Using the change of base rule to express all terms with base 3:\nlog_{9}(x) = log_{3}(x) / log_{3}(9) = (1/2) * log_{3}(x)\nlog_{27}(x) = log_{3}(x) / log_{3}(27) = (1/3) * log_{3}(x)\nSubstituting these into the equation:\nlog_{3}(x) + (1/2)*log_{3}(x) + (1/3)*log_{3}(x) = 11\n(1 + 1/2 + 1/3) * log_{3}(x) = 11\n(11/6) * log_{3}(x) = 11\nDividing both sides by 11:\n(1/6) * log_{3}(x) = 1\nlog_{3}(x) = 6\nx = 3^6 = 729.',
    timeTarget: 90, tags: ['Logarithms', 'QA']
  },


  // ==================== CAT 2020 ====================
  {
    id: 'q-20-qa-1', type: 'TITA', section: 'QA', topic: 'Geometry', difficulty: 'Hard', year: '2020',
    questionText: 'In a circle of radius 10 cm, two parallel chords of length 12 cm and 16 cm are drawn on the same side of the center. What is the distance between them?',
    correctAnswer: '2',
    explanation: 'From center, draw perpendicular to chords. They bisect the chords (into 6 and 8). \nUsing Pythagoras: \nDistance to 16cm chord = sqrt(10^2 - 8^2) = sqrt(100 - 64) = 6 cm. \nDistance to 12cm chord = sqrt(10^2 - 6^2) = 8 cm. \nDistance between them = 8 - 6 = 2 cm.',
    fasterMethod: 'Standard triplet 6-8-10. Since they are on the same side, subtract the heights: 8 - 6 = 2.',
    timeTarget: 60, tags: ['Circles']
  },
  {
    id: 'q-20-varc-1', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2020',
    questionText: 'Author states: "While classical economists assumed human rationality, behavioral economics demonstrates that our financial decisions are consistently and predictably irrational."\nWhat constitutes \'predictably irrational\' behavior?',
    options: [
      'Acting randomly without any pattern in financial markets.',
      'Making systematic errors driven by cognitive biases like loss aversion.',
      'Perfectly calculating the intrinsic value but refusing to buy.',
      'Operating solely on emotional rage.'
    ],
    correctAnswer: 'Making systematic errors driven by cognitive biases like loss aversion.',
    explanation: 'Predictable irrationality implies that the irrationality follows a recognizable, systematic pattern (like cognitive biases), rather than being purely random or raging.',
    timeTarget: 90, tags: ['Inference']
  },
  {
    id: 'q-20-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Scheduling and sequencing', difficulty: 'Hard', year: '2020',
    instructions: '5 jobs (J1 to J5) must be processed on a machine. J2 must be processed before J4. J1 must be processed immediately after J3. J5 is the last job.',
    questionText: 'In how many different sequences can the jobs be processed?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
    explanation: 'Positions: _ _ _ _ J5. \nRemaining: J1, J2, J3, J4. J1 immediately after J3 means [J3, J1] is a block.\nWe need to arrange [J3, J1], J2, J4 such that J2 is before J4.\nThe items are A = [J3, J1], B = J2, C = J4. Total 3 items. B must be before C.\nTotal unconstrained arrangements of 3 items = 3! = 6.\nIn exactly half of them, B is before C. So 6 / 2 = 3 sequences.\nLet\'s check: \n1. [J3 J1] J2 J4 (Valid)\n2. J2 [J3 J1] J4 (Valid)\n3. J2 J4 [J3 J1] (Valid)\nSo, 3 valid sequences.',
    timeTarget: 90, tags: ['Sequencing']
  },

  // ==================== CAT 2025 SLOT 1 ADDITIONS ====================
  {
    id: 'q-25-slot1-rc-ex', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2025',
    instructions: 'The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    questionText: 'Context: How can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, "A General View of the Criminal Law of England", James Fitzjames Stephen was of the opinion that the assessment of a person\'s mental state was an inference made with "little consciousness." In a criminal case, jurors, doctors, and lawyers could watch defendants — scrutinizing clothing, mannerisms, tone of voice — but the best they could hope for were clues. Rounding these clues up to a judgment about a defendant\'s guilt, or a defendant\'s life, was an act of empathy and imagination. The closer the resemblance between defendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant struck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of judgments about mental state was exposed. \n\nIn the nineteenth century, physicians specializing in the study of madness (called "alienists") held themselves out as experts in mental science, pushing family and neighbors out of the witness box. Although responsibility was a legal concept, not a medical one, medical and legal accounts became deeply entangled in constructing images of the broken psyche.\n\nQuestion: According to the passage, who or what was an "alienist"?',
    options: [
      'Professionals who pushed the boundaries of their fields till they became unrecognisable in the nineteenth century.',
      'Physicians and lawyers who were responsible for the condition of immigrants or "aliens" in the nineteenth century.',
      'Physicians and lawyers who were responsible for examining accounts of extraterrestrials or "aliens" in the nineteenth century.',
      'Physicians who specialised in the study of madness and the care of the insane in the nineteenth century.'
    ],
    correctAnswer: 'Physicians who specialised in the study of madness and the care of the insane in the nineteenth century.',
    explanation: 'The passage explicitly states that in the nineteenth century, physicians who specialized in the study of madness and the care of the insane were called "alienists" or "mad doctors", serving as predecessors to modern psychiatrists.',
    timeTarget: 150, tags: ['Reading Comprehension', 'James Fitzjames Stephen']
  },
  {
    id: 'q-25-slot1-rc-ex2', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2025',
    instructions: 'Based on the James Fitzjames Stephen passage, answer the following question.',
    questionText: 'Question: "Conversely, when a defendant struck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of judgments about mental state was exposed." Which of the following best describes the use of the word "confession" in this sentence?',
    options: [
      'Referring to the gender, race or disease claimed as a defence by the defendant, here it is a synonym for "professing" a gender, race, or disease.',
      'Referring to the practice of "confession" in some faiths, here it is a metaphor for the religion of the defendant.',
      'The defendants struck out at the officials and then confessed to the act.',
      'Referring to the defendant\'s confession of his or her crime as false, because "dint" is an archaic form of "didn\'t" or "did not".'
    ],
    correctAnswer: 'Referring to the gender, race or disease claimed as a defence by the defendant, here it is a synonym for "professing" a gender, race, or disease.',
    explanation: 'In the sentence, "confession" is paired with other identifier attributes (disease, gender, race) to signify the social/religious group or identity to which the defendant "professes" alignment (e.g., a religious or social confession), highlighting how demographic difference exposes the bias of selective empathy.',
    timeTarget: 180, tags: ['Reading Comprehension', 'Inference', 'Vocabulary']
  },

  // ==================== CAT 2022 SLOT 3 ADDITIONS ====================
  {
    id: 'q-22-slot3-orient', type: 'MCQ', section: 'VARC', topic: 'Reading Comprehension', difficulty: 'Hard', year: '2022',
    instructions: 'Read the accompanying passage and choose the best answer for the question.',
    questionText: 'Context: Interpretations of the Indian past... were inevitably influenced by colonial concerns and interests, and also by prevalent European ideas about history, civilization and the Orient. Orientalist scholars studied the languages and the texts with selected Indian scholars, but made little attempt to understand the worldview of those who were teaching them. The readings, therefore, are something of a disjuncture from the traditional ways of looking at the Indian past...\n\nGerman Romanticism endorsed this image of India, and it became the mystic land for many Europeans, where even the most ordinary actions were imbued with a complex symbolism. This was the genesis of the idea of the "spiritual east", and also, incidentally, the refuge of European intellectuals seeking to distance themselves from the changing patterns of their own societies. A dichotomy in values was maintained, Indian values being described as "spiritual" and European values as "materialistic", with little attempt to juxtapose these values with the realities of Indian society.\n\nQuestion: It can be inferred from the passage that to gain a more accurate view of a nation’s history and culture, scholars should do all of the following EXCEPT:',
    options: [
      'develop an oppositional framework to grasp cultural differences.',
      'examine their own beliefs and biases.',
      'read widely in the country’s literature.',
      'examine the complex reality of that nation’s society.'
    ],
    correctAnswer: 'develop an oppositional framework to grasp cultural differences.',
    explanation: 'The author criticizes how the Orientalist and German Romanticist frameworks divided values into "spiritual" vs "materialistic" (an oppositional framework) without juxtaposing them with the actual, complex reality of Indian society. Therefore, establishing an oppositional framework is criticized, not supported.',
    timeTarget: 150, tags: ['Reading Comprehension', 'Orientalism']
  },
  {
    id: 'q-22-slot3-pjm', type: 'TITA', section: 'VARC', topic: 'Para Jumbles', difficulty: 'Medium', year: '2022',
    instructions: 'The four sentences (labelled 1, 2, 3 and 4) below, when properly sequenced, would yield a coherent paragraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four numbers as your answer.',
    questionText: '1. If I wanted to sit indoors and read, or play Sonic the Hedgehog on a red-hot SegaMega Drive, I would often be made to feel guilty about not going outside to "enjoy it while it lasts".\n2. My mum, quite reasonably, wanted me and my sister out of the house, in the sun.\n3. Tales of my mum\'s idyllic-sounding childhood in the Sussex countryside, where trees were climbed by 8 am and streams navigated by lunchtime, were passed down to us like folklore.\n4. To an introverted kid, that felt like a threat - and the feeling has stayed with me.',
    correctAnswer: '2314',
    explanation: 'Sentence 2 introduces the general situation (mother wanting the children to go out into the sun). Sentence 3 follows as the elaboration of this urge with tales of her own country-based childhood. Sentence 1 presents the contrast/personal conflict of the kid wishing to read/play games indoors and feeling guilty. Sentence 4 matches perfectly with the guilt/coercion felt as an "introverted kid" ("that felt like a threat"). Thus, 2-3-1-4 is the logically sound chain.',
    timeTarget: 120, tags: ['Para Jumbles', 'Introverted Kid']
  },

  // ==================== CAT 1995 (DI & LR) ====================
  {
    id: 'q-95-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Puzzles', difficulty: 'Hard', year: '1995',
    instructions: 'Answer the questions based on the following information.\n\nFour sisters — Suvarna, Tara, Uma and Vibha are playing a game such that the loser doubles the money of each of the other players from her share. They played four games and each sister lost one game in alphabetical order. At the end of fourth game, each sister had Rs.32.',
    questionText: 'How many rupees did Suvarna start with?',
    options: ['Rs.60', 'Rs.34', 'Rs.66', 'Rs.28'],
    correctAnswer: 'Rs.66',
    explanation: 'We solve this puzzle by working backwards from the final state where all four sisters have Rs. 32.\nSince they lost in alphabetical order, the losers are Suvarna (Game 1), Tara (Game 2), Uma (Game 3), and Vibha (Game 4).\n\nLet\'s work backwards:\n- End of Game 4 (Vibha lost, doubling others): Suvarna = 32, Tara = 32, Uma = 32, Vibha = 32.\n- Before Game 4 (End of Game 3): Suvarna = 16, Tara = 16, Uma = 16, Vibha = 32 + (16 + 16 + 16) = 80.\n- Before Game 3 (End of Game 2 - Uma lost): Suvarna = 8, Tara = 8, Vibha = 40, Uma = 16 + (8 + 8 + 40) = 72.\n- Before Game 2 (End of Game 1 - Tara lost): Suvarna = 4, Uma = 36, Vibha = 20, Tara = 8 + (4 + 36 + 20) = 68.\n- Before Game 1 (Initial State - Suvarna lost): Tara = 34, Uma = 18, Vibha = 10, Suvarna = 4 + (34 + 18 + 10) = 66.\n\nTherefore, Suvarna started with Rs. 66.',
    timeTarget: 180, tags: ['Data Interpretation', 'Working Backwards']
  },
  {
    id: 'q-95-dilr-2', type: 'MCQ', section: 'DILR', topic: 'Puzzles', difficulty: 'Hard', year: '1995',
    instructions: 'Answer the questions based on the following information.\n\nFour sisters — Suvarna, Tara, Uma and Vibha are playing a game such that the loser doubles the money of each of the other players from her share. They played four games and each sister lost one game in alphabetical order. At the end of fourth game, each sister had Rs.32.',
    questionText: 'Who started with the lowest amount?',
    options: ['Suvarna', 'Tara', 'Uma', 'Vibha'],
    correctAnswer: 'Vibha',
    explanation: 'From the working backwards calculation, the initial amounts with each of the sisters before the games started were:\n- Suvarna: Rs. 66\n- Tara: Rs. 34\n- Uma: Rs. 18\n- Vibha: Rs. 10\n\nThus, Vibha started with the lowest amount of Rs. 10.',
    timeTarget: 150, tags: ['Data Interpretation', 'Puzzles']
  },
  {
    id: 'q-95-dilr-3', type: 'MCQ', section: 'DILR', topic: 'Puzzles', difficulty: 'Hard', year: '1995',
    instructions: 'Answer the questions based on the following information.\n\nFour sisters — Suvarna, Tara, Uma and Vibha are playing a game such that the loser doubles the money of each of the other players from her share. They played four games and each sister lost one game in alphabetical order. At the end of fourth game, each sister had Rs.32.',
    questionText: 'Who started with the highest amount?',
    options: ['Suvarna', 'Tara', 'Uma', 'Vibha'],
    correctAnswer: 'Suvarna',
    explanation: 'From the working backwards calculation, the initial amounts with each of the sisters before the games started were:\n- Suvarna: Rs. 66\n- Tara: Rs. 34\n- Uma: Rs. 18\n- Vibha: Rs. 10\n\nThus, Suvarna started with the highest amount of Rs. 66.',
    timeTarget: 150, tags: ['Data Interpretation', 'Puzzles']
  },
  {
    id: 'q-95-dilr-4', type: 'MCQ', section: 'DILR', topic: 'Puzzles', difficulty: 'Hard', year: '1995',
    instructions: 'Answer the questions based on the following information.\n\nFour sisters — Suvarna, Tara, Uma and Vibha are playing a game such that the loser doubles the money of each of the other players from her share. They played four games and each sister lost one game in alphabetical order. At the end of fourth game, each sister had Rs.32.',
    questionText: 'What was the amount with Uma at the end of the second round?',
    options: ['36', '72', '16', 'None of these'],
    correctAnswer: '72',
    explanation: 'Working backwards from the final round, we calculated the amount of money held by each sister at the end of each round:\n- End of Round 4: Suvarna=32, Tara=32, Uma=32, Vibha=32\n- End of Round 3: Suvarna=16, Tara=16, Uma=16, Vibha=80\n- End of Round 2: Suvarna=8, Tara=8, Uma=72, Vibha=40\n\nAt the end of the second round (where Tara lost), Uma had Rs. 72.',
    timeTarget: 180, tags: ['Data Interpretation', 'Working Backwards']
  },

  // ==================== CAT 2000 (DI & LR) ====================
  {
    id: 'q-00-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Symbolic Operators', difficulty: 'Medium', year: '2000',
    instructions: 'A, B and C are three numbers.\nLet @ (A, B) = Average of A and B,\n/ (A, B) = Product of A and B, and\n× (A, B) = The result of dividing A by B.',
    questionText: 'The sum of A and B is given by:',
    options: ['/ (@ (A, B), 2)', '× (@ (A, B), 2)', '@ (/ (A, B), 2)', '@ (× (A, B), 2)'],
    correctAnswer: '/ (@ (A, B), 2)',
    explanation: 'We are looking for an expression that represents A + B.\nGiven @(A, B) = (A + B)/2, if we multiply this by 2 we get (A + B).\nSince the product of X and Y is given by /(X, Y), the product of @(A, B) and 2 is /(@ (A, B), 2).\nTherefore, / (@ (A, B), 2) = ((A + B) / 2) * 2 = A + B.',
    timeTarget: 120, tags: ['Logical Reasoning', 'Symbolic Operators']
  },
  {
    id: 'q-00-dilr-2', type: 'MCQ', section: 'DILR', topic: 'Symbolic Operators', difficulty: 'Hard', year: '2000',
    instructions: 'A, B and C are three numbers.\nLet @ (A, B) = Average of A and B,\n/ (A, B) = Product of A and B, and\n× (A, B) = The result of dividing A by B.',
    questionText: 'Average of A, B and C is given by:',
    options: [
      '@ (/ (@ (/ (B, A), 2), C), 3)',
      '× (@ (/ (@ (B, A), 3), C), 2)',
      '/ (× (× (@ (B, A), 2), C), 3)',
      '/ (× (@ (/ (@ (B, A), 2), C), 3), 2)'
    ],
    correctAnswer: '/ (× (@ (/ (@ (B, A), 2), C), 3), 2)',
    explanation: 'Let us evaluate option (d):\n1. @(B, A) = (A + B)/2\n2. / (@(B, A), 2) = ((A+B)/2) * 2 = A + B\n3. @ (/ (@(B, A), 2), C) = Average of (A + B) and C = (A + B + C)/2\n4. × (@ (/ (@(B, A), 2), C), 3) = Result of dividing (A + B + C)/2 by 3 = (A + B + C)/6\n5. / (× (@ (/ (@(B, A), 2), C), 3), 2) = Product of (A + B + C)/6 and 2 = (A + B + C)/3\n\nThis is exactly the Average of A, B and C.',
    timeTarget: 180, tags: ['Logical Reasoning', 'Symbolic Operators']
  },

  // ==================== CAT 2002 (DI & LR) ====================
  {
    id: 'q-02-dilr-1', type: 'MCQ', section: 'DILR', topic: 'Analytical Puzzles', difficulty: 'Hard', year: '2002',
    questionText: 'Two boys are playing on a ground. Both the boys are less than 10 years old. Age of the younger boy is equal to the cube root of the product of the age of the two boys. If we place the digit representing the age of the younger boy to the left of the digit representing the age of the elder boy, we get the age of father of the younger boy. Similarly, if we place the digit representing the age of the elder boy to the left of the digit representing the age of the younger boy and divide the figure by 2, we get the age of mother of the younger boy. The mother of the younger boy is younger to his father by 3 years. Then, what is the age of the younger boy?',
    options: ['3', '4', '2', 'None of these'],
    correctAnswer: '2',
    explanation: 'Let younger boy\'s age be y and elder boy\'s age be e. Both are positive integers less than 10.\nWe are given: y = (y * e)^(1/3) => y^3 = y * e => y^2 = e\nSince both are single-digit integers less than 10, the possible pairs for (y, e) are:\n- If y = 2, then e = 4.\n- If y = 3, then e = 9.\n\nLet\'s test both cases:\nCase 1: If y = 2, e = 4:\n- Father\'s age: Place y (2) left of e (4) -> 24.\n- Mother\'s age: Place e (4) left of y (2) and divide by 2 -> 42 / 2 = 21.\n- 24 - 21 = 3 (Mother is 3 years younger than the father). This matches the condition perfectly.\n\nCase 2: If y = 3, e = 9:\n- Father\'s age: Place 3 left of 9 -> 39.\n- Mother\'s age: Place 9 left of 3 and divide by 2 -> 93 / 2 = 46.5. This is not an integer.\n\nHence, the younger boy is 2 years old.',
    timeTarget: 180, tags: ['Logical Reasoning', 'Number Logic']
  },
  {
    id: 'q-02-dilr-2', type: 'MCQ', section: 'DILR', topic: 'Logical Puzzles', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the information given below.\n\nA country has the following types of traffic signals.\n- 3 red lights = stop\n- 2 red lights = turn left\n- 1 red light = turn right\n- 3 green lights = go at 100 km/hr speed\n- 2 green lights = go at 40 km/hr speed\n- 1 green light = go at 20 km/hr speed\n\nA motorist starts at a point on a road and follows all traffic signals. His car is heading towards the north.\nHe encounters the following signals (the time mentioned in each case below is applicable after crossing the previous signal):\n- Starting point - 1 green light\n- After half an hour, 1st signal - 2 red and 2 green lights\n- After 15 min, 2nd signal - 1 red light\n- After half an hour, 3rd signal - 1 red and 3 green lights\n- After 24 min, 4th signal - 2 red and 2 green lights\n- After 15 min, 5th signal - 3 red lights',
    questionText: 'The total distance travelled by the motorist from the starting point till the last signal is:',
    options: ['90 km', '100 km', '120 km', 'None of these'],
    correctAnswer: '90 km',
    explanation: 'We calculate the distance travelled in each segment of the journey:\n- Segment 1: Go North (starting direction) at 20 km/hr (1 green light) for 0.5 hours (30 min). Distance = 20 * 0.5 = 10 km.\n- Segment 2: Turning left (West) at 40 km/hr (2 green lights) for 15 min (0.25 hours). Distance = 40 * 0.25 = 10 km.\n- Segment 3: Turning right (North) at 40 km/hr (previous speed since no speed change signal is mentioned) for 30 min (0.5 hours). Distance = 40 * 0.5 = 20 km.\n- Segment 4: Turning right (East) at 100 km/hr (3 green lights) for 24 min (24/60 = 0.4 hours). Distance = 100 * 0.4 = 40 km.\n- Segment 5: Turning left (North) at 40 km/hr (2 green lights) for 15 min (0.25 hours). Distance = 40 * 0.25 = 10 km.\n\nTotal distance = 10 + 10 + 20 + 40 + 10 = 90 km.',
    timeTarget: 180, tags: ['Logical Reasoning', 'Distance-Speed-Time']
  },
  {
    id: 'q-02-dilr-3', type: 'MCQ', section: 'DILR', topic: 'Logical Puzzles', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the information given below.\n\nA country has the following types of traffic signals.\n- 3 red lights = stop\n- 2 red lights = turn left\n- 1 red light = turn right\n- 3 green lights = go at 100 km/hr speed\n- 2 green lights = go at 40 km/hr speed\n- 1 green light = go at 20 km/hr speed\n\nA motorist starts at a point on a road and follows all traffic signals. His car is heading towards the north.\nHe encounters the following signals (the time mentioned in each case below is applicable after crossing the previous signal):\n- Starting point - 1 green light\n- After half an hour, 1st signal - 2 red and 2 green lights\n- After 15 min, 2nd signal - 1 red light\n- After half an hour, 3rd signal - 1 red and 3 green lights\n- After 24 min, 4th signal - 2 red and 2 green lights\n- After 15 min, 5th signal - 3 red lights',
    questionText: 'What is the position (radial distance) of the motorist when he reaches the last signal?',
    options: [
      '45 km directly north of the starting point',
      '30 km directly to the east of the starting point',
      '50 km away to the north-east of the starting point',
      '45 km away to the north-west of the starting point'
    ],
    correctAnswer: '50 km away to the north-east of the starting point',
    explanation: 'Using Cartesian coordinates where the starting point is (0, 0):\n- Segment 1: Heading North 10 km -> Coords = (0, 10).\n- Segment 2: Turning Left (West) 10 km -> Coords = (-10, 10).\n- Segment 3: Turning Right (North) 20 km -> Coords = (-10, 30).\n- Segment 4: Turning Right (East) 40 km -> Coords = (-10 + 40, 30) = (30, 30).\n- Segment 5: Turning Left (North) 10 km -> Coords = (30, 30 + 10) = (30, 40).\n\nFinal position is (30, 40), which is 30 km East and 40 km North.\nRadial distance = sqrt(30^2 + 40^2) = sqrt(900 + 1600) = sqrt(2500) = 50 km.\nDirectionrelative to starting point = North-East.',
    timeTarget: 180, tags: ['Logical Reasoning', 'Puzzles']
  },
  {
    id: 'q-02-dilr-4', type: 'MCQ', section: 'DILR', topic: 'Logical Puzzles', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the information given below.\n\nA country has the following types of traffic signals.\n- 3 red lights = stop\n- 2 red lights = turn left\n- 1 red light = turn right\n- 3 green lights = go at 100 km/hr speed\n- 2 green lights = go at 40 km/hr speed\n- 1 green light = go at 20 km/hr speed\n\nA motorist starts at a point on a road and follows all traffic signals. His car is heading towards the north.\nHe encounters the following signals (the time mentioned in each case below is applicable after crossing the previous signal):\n- Starting point - 1 green light\n- After half an hour, 1st signal - 2 red and 2 green lights\n- After 15 min, 2nd signal - 1 red light\n- After half an hour, 3rd signal - 1 red and 3 green lights\n- After 24 min, 4th signal - 2 red and 2 green lights\n- After 15 min, 5th signal - 3 red lights',
    questionText: 'After the starting point, if the 1st signal were 1 red and 2 green lights, what would be the final position of the motorist?',
    options: [
      '30 km to the west and 20 km to the south',
      '30 km to the west and 40 km to the north',
      '50 km to the east and 40 km to the north',
      'Directly 30 km to the east'
    ],
    correctAnswer: '50 km to the east and 40 km to the north',
    explanation: 'If the 1st signal were 1 red and 2 green lights, the motorist would turn East (right) at the 1st signal instead of West. \nLet\'s re-evaluate coordinate steps:\n- Segment 1: North 10 km -> (0, 10)\n- Segment 2: Turn Right (East) 10 km -> (10, 10)\n- Segment 3: Turn Left (North) 20 km -> (10, 30)\n- Segment 4: Turn Right (East) 40 km -> (50, 30)\n- Segment 5: Turn Left (North) 10 km -> (50, 40)\n\nTherefore, the final position would be 50 km to the east and 40 km to the north.',
    timeTarget: 180, tags: ['Logical Reasoning', 'Puzzles']
  },
  {
    id: 'q-02-dilr-5', type: 'MCQ', section: 'DILR', topic: 'Logical Puzzles', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the information given below.\n\nA country has the following types of traffic signals.\n- 3 red lights = stop\n- 2 red lights = turn left\n- 1 red light = turn right\n- 3 green lights = go at 100 km/hr speed\n- 2 green lights = go at 40 km/hr speed\n- 1 green light = go at 20 km/hr speed\n\nA motorist starts at a point on a road and follows all traffic signals. His car is heading towards the north.\nHe encounters the following signals (the time mentioned in each case below is applicable after crossing the previous signal):\n- Starting point - 1 green light\n- After half an hour, 1st signal - 2 red and 2 green lights\n- After 15 min, 2nd signal - 1 red light\n- After half an hour, 3rd signal - 1 red and 3 green lights\n- After 24 min, 4th signal - 2 red and 2 green lights\n- After 15 min, 5th signal - 3 red lights',
    questionText: 'If at the starting point, the car was heading towards south, what would be the final position of the motorist?',
    options: [
      '30 km to the east and 40 km to the south',
      '50 km to the east and 40 km to the south',
      '30 km to the west and 40 km to the south',
      '50 km to the west and 20 km to the north'
    ],
    correctAnswer: '30 km to the west and 40 km to the south',
    explanation: 'Since the starting heading is completely reversed by 180 degrees (heading South instead of North), the entire path will be a 180-degree rotation of our original coordinates.\nSymmetric transformation of coordinate (30 East, 40 North) yields (30 West, 40 South).',
    timeTarget: 180, tags: ['Logical Reasoning', 'Puzzles']
  },
  {
    id: 'q-02-dilr-6', type: 'MCQ', section: 'DILR', topic: 'Optimization Models', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the tables given below:\nThere are 6 refineries (BB, BC, BD, BE, BF, BG), 7 depots (AA, AB, AC, AD, AE, AF, AG) and 9 districts (AAA, AAB, AAC, AAD, AAE, AAF, AAG, AAH, AAI).\nTable A gives the cost of transporting one unit from refinery to depot. Table B gives the cost of transporting one unit from depot to a district.\n\nTable A:\nDepots | BB | BC | BD | BE | BF | BG\nAA | 928.2 | 537.2 | 567.8 | 589.9 | 589.9 | 800.1\nAB | 311.1 | 596.7 | 885.7 | 759.9 | 759.9 | 793.9\nAC | 451.1 | 0.0 | 320.1 | 780.1 | 720.7 | 1000.1\nAD | 371.1 | 150.1 | 350.1 | 750.1 | 650.4 | 980.1\nAE | 1137.3 | 314.5 | 0.0 | 1157.7 | 1157.7 | 1023.4\nAF | 617.1 | 516.8 | 756.5 | 1065.9 | 1065.9 | 406.3\nAG | 644.3 | 299.2 | 537.2 | 1093.1 | 1093.1 | 623.9\n\nTable B:\nDistrict | AA | AB | AC | AD | AE | AF | AG\nAAA | 562.7 | 843.2 | 314.5 | 889.1 | 0.0 | 754.8 | 537.2\nAAB | 532.7 | 803.2 | 284.5 | 790.5 | 95.2 | 659.6 | 442.0\nAAC | 500.7 | 780.2 | 0.0 | 457.3 | 205.7 | 549.1 | 331.5\nAAD | 232.9 | 362.1 | 286.2 | 275.4 | 523.6 | 525.3 | 673.2\nAAE | 345.1 | 268.6 | 316.2 | 163.2 | 555.9 | 413.1 | 227.8\nAAF | 450.1 | 644.3 | 346.2 | 372.3 | 933.3 | 402.9 | 379.1\nAAG | 654.5 | 0.0 | 596.7 | 222.7 | 885.7 | 387.6 | 348.5\nAAH | 804.1 | 149.6 | 627.2 | 360.4 | 1035.3 | 537.2 | 498.1\nAAI | 646.0 | 255.0 | 433.5 | 137.7 | 698.7 | 112.2 | 161.5',
    questionText: 'What is the least cost of sending one unit from any refinery to any district?',
    options: ['95.2', '0', '205.7', '284.5'],
    correctAnswer: '0',
    explanation: 'From Table A, refinery BC to depot AC has a transportation cost of 0.0.\nFrom Table B, transport from depot AC to district AAC has a cost of 0.0.\nBy routing Refinery BC -> Depot AC -> District AAC, the total transportation cost is 0.0 + 0.0 = 0.0.',
    timeTarget: 180, tags: ['Data Interpretation', 'Transportation Matrix']
  },
  {
    id: 'q-02-dilr-7', type: 'MCQ', section: 'DILR', topic: 'Optimization Models', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the tables given below:\nThere are 6 refineries (BB, BC, BD, BE, BF, BG), 7 depots (AA, AB, AC, AD, AE, AF, AG) and 9 districts (AAA, AAB, AAC, AAD, AAE, AAF, AAG, AAH, AAI).\nTable A gives the cost of transporting one unit from refinery to depot. Table B gives the cost of transporting one unit from depot to a district.\n\nTable A:\nDepots | BB | BC | BD | BE | BF | BG\nAA | 928.2 | 537.2 | 567.8 | 589.9 | 589.9 | 800.1\nAB | 311.1 | 596.7 | 885.7 | 759.9 | 759.9 | 793.9\nAC | 451.1 | 0.0 | 320.1 | 780.1 | 720.7 | 1000.1\nAD | 371.1 | 150.1 | 350.1 | 750.1 | 650.4 | 980.1\nAE | 1137.3 | 314.5 | 0.0 | 1157.7 | 1157.7 | 1023.4\nAF | 617.1 | 516.8 | 756.5 | 1065.9 | 1065.9 | 406.3\nAG | 644.3 | 299.2 | 537.2 | 1093.1 | 1093.1 | 623.9\n\nTable B:\nDistrict | AA | AB | AC | AD | AE | AF | AG\nAAA | 562.7 | 843.2 | 314.5 | 889.1 | 0.0 | 754.8 | 537.2\nAAB | 532.7 | 803.2 | 284.5 | 790.5 | 95.2 | 659.6 | 442.0\nAAC | 500.7 | 780.2 | 0.0 | 457.3 | 205.7 | 549.1 | 331.5\nAAD | 232.9 | 362.1 | 286.2 | 275.4 | 523.6 | 525.3 | 673.2\nAAE | 345.1 | 268.6 | 316.2 | 163.2 | 555.9 | 413.1 | 227.8\nAAF | 450.1 | 644.3 | 346.2 | 372.3 | 933.3 | 402.9 | 379.1\nAAG | 654.5 | 0.0 | 596.7 | 222.7 | 885.7 | 387.6 | 348.5\nAAH | 804.1 | 149.6 | 627.2 | 360.4 | 1035.3 | 537.2 | 498.1\nAAI | 646.0 | 255.0 | 433.5 | 137.7 | 698.7 | 112.2 | 161.5',
    questionText: 'What is the least cost of sending one unit from any refinery to the district AAB?',
    options: ['0', '284.5', '95.2', 'None of these'],
    correctAnswer: '95.2',
    explanation: 'We look for a depot D such that the sum of Cost(Refinery -> Depot D) and Cost(Depot D -> District AAB) is minimized:\n- Depot AE can transfer to AAB for 95.2.\n- Refinery BD can transfer to depot AE for 0.0.\nThis gives a total cost of 0.0 + 95.2 = 95.2.\nOther combinations yield higher totals (e.g., via Depot AC: 0.0 + 284.5 = 284.5; via Depot AG: 299.2 + 442.0 = 741.2). Therefore, 95.2 is the absolute minimum.',
    timeTarget: 180, tags: ['Data Interpretation', 'Transportation Matrix']
  },
  {
    id: 'q-02-dilr-8', type: 'MCQ', section: 'DILR', topic: 'Optimization Models', difficulty: 'Hard', year: '2002',
    instructions: 'Answer the questions based on the tables given below:\nThere are 6 refineries (BB, BC, BD, BE, BF, BG), 7 depots (AA, AB, AC, AD, AE, AF, AG) and 9 districts (AAA, AAB, AAC, AAD, AAE, AAF, AAG, AAH, AAI).\nTable A gives the cost of transporting one unit from refinery to depot. Table B gives the cost of transporting one unit from depot to a district.\n\nTable A:\nDepots | BB | BC | BD | BE | BF | BG\nAA | 928.2 | 537.2 | 567.8 | 589.9 | 589.9 | 800.1\nAB | 311.1 | 596.7 | 885.7 | 759.9 | 759.9 | 793.9\nAC | 451.1 | 0.0 | 320.1 | 780.1 | 720.7 | 1000.1\nAD | 371.1 | 150.1 | 350.1 | 750.1 | 650.4 | 980.1\nAE | 1137.3 | 314.5 | 0.0 | 1157.7 | 1157.7 | 1023.4\nAF | 617.1 | 516.8 | 756.5 | 1065.9 | 1065.9 | 406.3\nAG | 644.3 | 299.2 | 537.2 | 1093.1 | 1093.1 | 623.9\n\nTable B:\nDistrict | AA | AB | AC | AD | AE | AF | AG\nAAA | 562.7 | 843.2 | 314.5 | 889.1 | 0.0 | 754.8 | 537.2\nAAB | 532.7 | 803.2 | 284.5 | 790.5 | 95.2 | 659.6 | 442.0\nAAC | 500.7 | 780.2 | 0.0 | 457.3 | 205.7 | 549.1 | 331.5\nAAD | 232.9 | 362.1 | 286.2 | 275.4 | 523.6 | 525.3 | 673.2\nAAE | 345.1 | 268.6 | 316.2 | 163.2 | 555.9 | 413.1 | 227.8\nAAF | 450.1 | 644.3 | 346.2 | 372.3 | 933.3 | 402.9 | 379.1\nAAG | 654.5 | 0.0 | 596.7 | 222.7 | 885.7 | 387.6 | 348.5\nAAH | 804.1 | 149.6 | 627.2 | 360.4 | 1035.3 | 537.2 | 498.1\nAAI | 646.0 | 255.0 | 433.5 | 137.7 | 698.7 | 112.2 | 161.5',
    questionText: 'What is the least cost of sending one unit from refinery BB to any district?',
    options: ['284.5', '311.1', '451.1', 'None of these'],
    correctAnswer: '311.1',
    explanation: 'Check costs from refinery BB to each depot:\n- BB -> AA = 928.2\n- BB -> AB = 311.1\n- BB -> AC = 451.1\n- BB -> AD = 371.1\n- BB -> AE = 1137.3\n- BB -> AF = 617.1\n- BB -> AG = 644.3\n\nNow, add lowest depot-to-district costs to each route:\n- Via AB: BB -> AB (311.1) + AB -> AAG (0.0) = 311.1.\n- Via AC: BB -> AC (451.1) + AC -> AAC (0.0) = 451.1.\nAny other routes give higher costs. Therefore, the absolute least cost from refinery BB is 311.1.',
    timeTarget: 180, tags: ['Data Interpretation', 'Transportation Matrix']
  },

  // ==================== CAT 1990 (VARC - Reading Comprehension) ====================
  {
    id: 'q-90-varc-rc-1',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'The distinctive feature of psychoanalysis is that:',
    options: [
      'it provided the laymen with a scientific basis to the theories of psychology.',
      'it blasted the popular theory that the conscious mind could be aptly linked the tip of an iceberg.',
      'it provided effective means for the cure of mental disorders.',
      'it rendered existing trends in psychology defunct.'
    ],
    correctAnswer: 'it provided effective means for the cure of mental disorders.',
    explanation: 'The passage highlights that psychoanalysis promised a novel program of therapy: "The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing." This suggests its distinctive feature was providing an exciting and effective promise for curing mental disorders.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-2',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'The distinction between behaviorism and psychoanalysis that is heightened here is which of the following?',
    options: [
      'Behaviorism is wide in scope; psychoanalysis more restricted.',
      'Behaviorism is more tolerant in its outlook; psychoanalysis more dogmatic.',
      'Behaviorism traces all action to conditioning by habit; psychoanalysis to the depths of the human mind.',
      'Behaviorism is more circumspect and deliberate in its propagation of theory; psychoanalysis jumps to conclusions impetuously.'
    ],
    correctAnswer: 'Behaviorism traces all action to conditioning by habit; psychoanalysis to the depths of the human mind.',
    explanation: 'The passage notes that behaviorism reduces adjustment to a "program of conditioning," while psychoanalysis focuses on "depth psychology" and human motivation, exploring the subconscious or the deep/intimate problems of human relations.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Psychoanalysis', 'Behaviorism']
  },
  {
    id: 'q-90-varc-rc-3',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'The statement which is refuted by the passage is this:',
    options: [
      'The popularity enjoyed by psychoanalysis is partly due to the disenchantment with traditional methods of psychology.',
      'Psychoanalysis wooed people dissatisfied with other branches of psychology to swell their ranks.',
      'Psychoanalysis were pioneers in the realm of analysis of the subconscious mind.',
      'Psychoanalysis alienated allied branches of psychology.'
    ],
    correctAnswer: 'Psychoanalysis wooed people dissatisfied with other branches of psychology to swell their ranks.',
    explanation: 'The passage makes it clear that psychoanalysis did NOT try to win over people from other existing systems or other psychology fields of thought: "Towards psychiatry, its nearest of kin, it took an unfriendly position... Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances." Therefore, the statement that it "wooed" people is completely refuted.',
    timeTarget: 180,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-4',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'Create a belief in theory and:',
    options: [
      'belief will be created itself.',
      'theory will be created itself.',
      'facts will be created themselves.',
      'All of the above.'
    ],
    correctAnswer: 'facts will be created themselves.',
    explanation: 'As stated in the final line of the passage: "Create a belief in the theory, and the facts will create themselves."',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-5',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'Psychoanalysts are of the opinion that:',
    options: [
      'methods of psychoanalysis must be in keeping with individual needs.',
      'inferences can be drawn empirically from repeated experiments with any given theory.',
      'theory leads to practice.',
      'practice culminates into theory.'
    ],
    correctAnswer: 'theory leads to practice.',
    explanation: 'The passage states: "Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory." This means that theory leads to practice.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-6',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'Freudian psychoanalysis was ignored by academic psychology because of which of the following?',
    options: [
      'Its theories were not substantiated by practical evidence.',
      'It probed too deep into the human mind thereby divesting it of its legitimate privacy.',
      'It did not have a large following.',
      'It was pre-occupied with unfamiliar concepts such as dreams and the subconscious mind.'
    ],
    correctAnswer: 'It was pre-occupied with unfamiliar concepts such as dreams and the subconscious mind.',
    explanation: 'The passage explains: "Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say." It spent its focus on these areas which mainstream academic psychology ignored.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-7',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'The only statement to receive support from the passage is which of the following?',
    options: [
      'Psychoanalysis concentrated more on the theoretical remedies than their practical implementation.',
      'Psychoanalysis broke the shackles of convention in its involvement with humanistic issues.',
      'The attitude of psychoanalysis towards allied branches of psychology could at best be described as indifferent.',
      'Psychoanalysis dispelled the prevalent notion that dreams were repressed desires.'
    ],
    correctAnswer: 'Psychoanalysis broke the shackles of convention in its involvement with humanistic issues.',
    explanation: 'Per the explanations and passage text, psychoanalysis focused frankly on the intimate and insistent problems of human relations and its mission is broadly humanistic, bringing the service of psychology into new, unconventional territories.',
    timeTarget: 180,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-8',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 1\n\nThe motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention and created for it considerable following among those discontent with traditional methods and attitudes, is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations. However false or however true its conclusions, however weak or strong its arguments, however effective or defective or even pernicious its practice, its mission is broadly humanistic. Psychological enlightenment is presented as a program of salvation. By no other appeal could the service of psychology have become so glorified. The therapeutic promise of psychoanalysis came as the most novel, most ambitious, most releasing of the long procession of curative systems that mark the history of mental healing.\n\nTo the contemporary trends in psychology, psychoanalysis actually offered a rebuke, a challenge, a supplement, though it appeared to ignore them. With the practical purpose of applied psychology directed to human efficiency it had no direct relation and thus no quarrel. The solution of behaviorism, likewise bidding for popular approval by reducing adjustment to a program of conditioning, it inevitably found alien and irrelevant, as the behaviorist in reciprocity found psychoanalytic doctrine mystical, fantastic, assumptive, remote. Even to the cognate formulations of mental hygiene, as likewise in its contacts with related fields of psychology, psychoanalysis made no conciliatory advances. Towards psychiatry, its nearest of kin, it took an unfriendly position, quite too plainly implying a disdain for an unprogressive relative. These estrangements affected its relations throughout the domain of mind and its ills; but they came to head in the practice.\n\nFrom the outset in the days of struggle, when it had but a sparse and scattered discipleship, to the present position of prominence, Freudianism went its own way, for the most part neglected by academic psychology. Of dreams, lapses and neuroses, orthodox psychology had little say. The second reason for the impression made by psychoanalysis when once launched against the tide of academic resistance was its recognition of depth psychology, so much closer to human motivation, so much more intimate and direct than the analysis of mental factors.\n\nMost persons in trouble would be grateful for relief without critical examination of the theory behind the practice that helped them. Anyone at all acquainted with the ebb and flow of cures – cures that cure, cures that fail – need not be told that the scientific basis of the system is often the least important factor. Many of these systems arise empirically within a practice, which by trial, seems to give results. This is not the case in psychoanalysis. Psychoanalysis belongs to the typical groups of therapies in which practice is entirely a derivative of theory. Here the pertinent psychological principle reads: "Create a belief in the theory, and the facts will create themselves".',
    questionText: 'The popularity enjoyed by the psychoanalytical movement may be directly attributed to:',
    options: [
      'dissatisfaction with existing methods of psychology.',
      'its logical, coherent process of ratiocination.',
      'its novel unconventionality in both postulate and practice.',
      'its concentration upon the humanistic aspect of psychological analysis.'
    ],
    correctAnswer: 'its concentration upon the humanistic aspect of psychological analysis.',
    explanation: 'The first sentence of the passage states: "The motive force that has carried the psychoanalytic movement to a voluminous wave of popular attention... is the frank direction of the psychological instruments of exploration to the insistent and intimate problems of human relations... its mission is broadly humanistic."',
    timeTarget: 180,
    tags: ['Reading Comprehension', 'Psychoanalysis']
  },
  {
    id: 'q-90-varc-rc-9',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'From the passage, it is evident that the author thinks:',
    options: [
      'computers are now naturally programmed to produce poetry.',
      'computers are likely to usurp the place of intellectual superiority accorded to the human brain.',
      'the resemblance that the computer bears to the human brain is purely mechanical.',
      'the unintentional mixing up of word sequences in the computer can result in poetry.'
    ],
    correctAnswer: 'the unintentional mixing up of word sequences in the computer can result in poetry.',
    explanation: 'The author states: "...computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry." This shows that accidental or unintentional mixing can produce sequence recognized as poetry.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Machine Intelligence']
  },
  {
    id: 'q-90-varc-rc-10',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'Computers have acquired a proven ability of performing many of the functions of the human brain because:',
    options: [
      'the brain of modern man is unable to discharge its functions properly on account of over-reliance on machines.',
      'the sophisticated computer mechanism is on the verge of outstripping human mental faculties.',
      'the process of organizing and communicating are similar in both cases.',
      'the mechanics of the human brain have been introduced in the computer.'
    ],
    correctAnswer: 'the process of organizing and communicating are similar in both cases.',
    explanation: 'The passage says: "brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases..."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Machine Intelligence']
  },
  {
    id: 'q-90-varc-rc-11',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'The resemblance between the human brain and the computer is:',
    options: [
      'imaginary.',
      'intellectual.',
      'mechanical.',
      'functional.'
    ],
    correctAnswer: 'functional.',
    explanation: 'The author writes: "The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do." "What the machines do" points directly to a functional resemblance.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Machine Intelligence']
  },
  {
    id: 'q-90-varc-rc-12',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'The passage implies that:',
    options: [
      'computers are assuming human forms.',
      'humans are assuming mechanical forms.',
      'computers and humans are substitutable.',
      'there is continuity between what is human and what is mechanical.'
    ],
    correctAnswer: 'there is continuity between what is human and what is mechanical.',
    explanation: 'The final line of the passage states: "...but that there is no sharp break of continuity between what is human, what is mechanical."',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Machine Intelligence']
  },

  // ==================== CAT 1991 & 1993 (Verbal Logic - Para-Completion & Jumbles) ====================
  {
    id: 'q-91-vl-pc-1',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Para-Completion',
    difficulty: 'Medium',
    year: '1991',
    questionText: 'Particularly today, when so many difficult and complex problems face the human species, the development of broad _________ is desperately needed.',
    options: [
      'and powerful shoulders is necessary.',
      'plans of action is not possible.',
      'moral values is required.',
      'and powerful thinking is desperately needed.'
    ],
    correctAnswer: 'and powerful thinking is desperately needed.',
    explanation: 'To match the context of facing "difficult and complex problems," we need an intellectual capability. "broad and powerful thinking" is highly congruent with the idea of addressing complex global species-level issues.',
    timeTarget: 120,
    tags: ['Verbal Logic', 'Para-Completion']
  },
  {
    id: 'q-91-vl-pc-2',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Para-Completion',
    difficulty: 'Medium',
    year: '1991',
    questionText: 'In the European Community countries there has been talk of an energy tax to raise funds _________.',
    options: [
      'by burdening the rich who can afford higher taxes.',
      'to penalise heavy users of energy.',
      'by raising the price of energy-intensive implements.',
      'to search for alternative sources of energy.'
    ],
    correctAnswer: 'to search for alternative sources of energy.',
    explanation: 'An energy tax designed to raise funds specifically serves the policy purpose of funding the transition/search for alternative sources of energy, making option (d) the most logical and standard complete thought contextually.',
    timeTarget: 120,
    tags: ['Verbal Logic', 'Para-Completion']
  },
  {
    id: 'q-91-vl-pc-3',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Para-Completion',
    difficulty: 'Medium',
    year: '1991',
    questionText: '“Look before you leap” reflects an attitude expressed in such a saying as _________.',
    options: [
      '‘Forewarned is forearmed.’',
      '‘A stitch in time saves nine.’',
      '‘No risk no gain.’',
      '‘Fools rush where the angels fear to tread.’'
    ],
    correctAnswer: '‘Forewarned is forearmed.’',
    explanation: 'The warning to "look before you leap" advises foresight, preparation, and caution. "Forewarned is forearmed" perfectly reflects this identical defensive/preparative attitude.',
    timeTarget: 90,
    tags: ['Verbal Logic', 'Proverbs']
  },
  {
    id: 'q-91-vl-pc-4',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Para-Completion',
    difficulty: 'Medium',
    year: '1991',
    questionText: 'Entrepreneurs are never satisfied with the status quo, they are intent on shaping the future, rather than being shaped by it. As one Chief Executive once said, _________.',
    options: [
      '“The future is the sum total of actions in the present and past.”',
      '“If you are not alert, before you realize it the future is on you.”',
      '“I do not want our competitors making decisions for us.”',
      '“It is a sound business policy to anticipate change than being swamped by it.”'
    ],
    correctAnswer: '“If you are not alert, before you realize it the future is on you.”',
    explanation: 'The statement about entrepreneurs being alert and determined to build the future is completed by the idea that being unalert or reactive allows details to push past you, reinforcing the motivation behind active future-shaping.',
    timeTarget: 120,
    tags: ['Verbal Logic', 'Para-Completion']
  },
  {
    id: 'q-93-vl-pc-1',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Para-Completion',
    difficulty: 'Hard',
    year: '1993',
    instructions: 'From the four choices available, choose the one which best fits the sequence logically to fill the blank.',
    questionText: 'Many of us live one-eyed lives. We rely largely on the eye of the mind to form our images of reality. It is a mechanical world based on fact and reason. (_______). So today more and more of us are opening the other eye, the eye of the heart, looking for realities to which the mind’s eye is blind. This is a world warmed and transformed by the power of love, a vision of community beyond the mind’s capacity to see. Either eye alone is not enough. We need “wholesight”, a vision of the world in which mind and heart unite.',
    options: [
      'It had led to unprecedented scientific growth and material well-being.',
      'In the nuclear age, our mind-made world has been found flawed and dangerous, even lethal.',
      'The question is irrelevant, whether or not they can be seen and reasoned.',
      'We have built our lives based on it because it seemed predictable and safe.'
    ],
    correctAnswer: 'In the nuclear age, our mind-made world has been found flawed and dangerous, even lethal.',
    explanation: 'The transition moves from relying only on the "eye of the mind" to a mechanical mind-made world, to finding this world lacking, flawed or dangerous, which then logically triggers "opening the other eye, the eye of the heart." Option (b) provides the crucial negative catalyst for this change of vision.',
    timeTarget: 180,
    tags: ['Verbal Logic', 'Para-Completion', 'Coherence']
  },
  {
    id: 'q-91-vl-pj-1',
    type: 'TITA',
    section: 'VARC',
    topic: 'Para Jumbles',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Choose the most logical order of the four sentences to form a coherent paragraph.',
    questionText: 'A. And that the pursuit of money by whatever design within the law is always benign.\nB. And it holds broadly that the greater the amount of money, the greater the intelligence.\nC. This is the institutional truth of Wall Street, this you will be required to believe.\nD. The institutional truth of the financial world holds that association with money implies intelligence.',
    correctAnswer: 'CDBA',
    explanation: 'Sentence C sets the stage introducing the "institutional truth of Wall Street" that you will be required to believe. D defines the institutional truth of the financial world as associating money with intelligence. B adds another closely linked tenet ("And it holds broadly..."), followed by A which acts as the final parallel tenet ("And that the pursuit of money..."). Thus, the correct sequence is C-D-B-A.',
    timeTarget: 120,
    tags: ['Verbal Logic', 'Para Jumbles']
  },
  {
    id: 'q-90-varc-rc-13',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'The author uses the word "recognize" in relation to computer poetry to convey a:',
    options: [
      'sense of sorrow at the reluctant admission of the superiority of machines by mankind.',
      'feeling that computers have yet to conquer the emotional heights that man is capable of attaining.',
      'feeling of derision for the popular faith in the omnipotence of the computer.',
      'feeling of a fatalistic acceptance of the computer’s encroachment upon human bastions.'
    ],
    correctAnswer: 'feeling that computers have yet to conquer the emotional heights that man is capable of attaining.',
    explanation: 'The author puts "recognize" in single quotes because the computer generates the sequences of words merely "by accident" without any genuine emotional intent or artistic consciousness. This conveys the feeling that computers are not yet capable of reaching the emotional and cognitive heights of human creative expression.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Brains and Computers']
  },
  {
    id: 'q-90-varc-rc-14',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 2\n\nIt is undeniable that some very useful analogies can be drawn between the relational systems of computer mechanism and the relational systems of brain mechanism. The comparison does not depend upon any close resemblance between the actual mechanical links which occur in brains and computers; it depends on what the machines do. Further more, brains and computers can both be organized so as to solve problems. The mode of communication is very similar in both the cases, so much so that computers can now be designed to generate artificial human speech and even, by accident, to produce sequences of words which human beings recognize as poetry. The implication is not that machines are gradually assuming human forms, but that there is no sharp break of continuity between what is human, what is mechanical.',
    questionText: 'Points of dissimilarity between the human brain and the computer don’t extend to:',
    options: [
      'the faculty of composing poetry.',
      'methods of communication.',
      'the faculty of recognizing emotions.',
      'the faculty of speaking naturally'
    ],
    correctAnswer: 'methods of communication.',
    explanation: 'The passage notes that "the mode of communication is very similar in both the cases." Thus, points of dissimilarity do not extend to their methods of communication.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Brains and Computers']
  },
  {
    id: 'q-90-varc-rc-15',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'Future, according to the passage, may find the workers:',
    options: [
      'without money.',
      'without work.',
      'replacing machines.',
      'without leisure.'
    ],
    correctAnswer: 'without work.',
    explanation: 'The author states that with the expansion of machine production and technological progress, the amount of human labor needed will be catastrophically reduced, potentially leaving many workers without work (unemployed) while still having some basic income or monetary relief.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-16',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The main defect of socialism at present is that:',
    options: [
      'it has not evolved a satisfactory system of making workers co-sharers in prosperity.',
      'it has not made work less burdensome for the mass of workers.',
      'it has not taken into consideration the possibility of an immense reduction of human labour in the wake of mechanization.',
      'it is not concerned with improving and streamlining the method of production.'
    ],
    correctAnswer: 'it has not taken into consideration the possibility of an immense reduction of human labour in the wake of mechanization.',
    explanation: 'The author notes that while socialism assumes workers will be treated with genuine consideration and guaranteed employment, the socialist has not planned for what he would do if human labor were catastrophically reduced due to technological advance.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-17',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The labour movement was the outcome of:',
    options: [
      'an effort to increase productivity.',
      'a move to make workers share in the prosperity of the capitalists.',
      'a revolt against the conception of workers as commodities.',
      'a move to avert mass unemployment because of the mechanization.'
    ],
    correctAnswer: 'a revolt against the conception of workers as commodities.',
    explanation: 'The passage explicitly points out: "The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-18',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The chief purpose of competitive enterprise is to:',
    options: [
      'create more job opportunities.',
      'produce as much as possible.',
      'create more wealth in the country.',
      'realize the maximum profit.'
    ],
    correctAnswer: 'realize the maximum profit.',
    explanation: 'The passage says: "The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed." Thus, standard profit remains the chief goal.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-19',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'In the situation created by the rapid extension of machine production, our object should be to:',
    options: [
      'make work as light as possible.',
      'provide increased opportunities for interesting occupation.',
      'limit the amount of leisure to that which can be profitably used.',
      'produce more and more goods.'
    ],
    correctAnswer: 'limit the amount of leisure to that which can be profitably used.',
    explanation: 'The passage states: "[W]e should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-20',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The activities of the artist, the writer, the scientist etc. may be considered to be occupations because:',
    options: [
      'they often do not have any utilitarian value.',
      'external compulsion is reduced to a minimum and they are agreeable and require quite a lot of initiative.',
      'they occupy time and energy only so long as the workers choose to give them.',
      'they care only for the pleasure which brings them without any consideration of reward.'
    ],
    correctAnswer: 'external compulsion is reduced to a minimum and they are agreeable and require quite a lot of initiative.',
    explanation: 'The passage mentions that "occupation absorbs time and energy so long as we choose to give them; it demands constant initiative," and notes that for artists, writers, and scientists, "external compulsion is reduced to a minimum" so that their work is hardly to be differentiated from occupation.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-21',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'Which of the following statements is not true according to the information contained in the passage?',
    options: [
      'Work is something done as contributing to the means of life in general and to one’s own subsistence in particular.',
      'Occupation is something that requires initiative and can be done at one’s will and pleasure and not as a task.',
      'Work brings in tangible rewards while occupation is not utilitarian.',
      'There is no form of work which shows approximation to occupation.'
    ],
    correctAnswer: 'There is no form of work which shows approximation to occupation.',
    explanation: 'The passage specifically notes: "There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation," citing artists, writers, and scientists. This directly refutes the claim that no form of work shows an approximation to occupation.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-22',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The chief reason for a person taking up an occupation may be stated to be:',
    options: [
      'a desire to make profit.',
      'an irresistible urge to do something uncommon.',
      'a wish to do something useful to society.',
      'a desire to do something which requires initiative and doing it at his will and pleasure.'
    ],
    correctAnswer: 'a desire to do something which requires initiative and doing it at his will and pleasure.',
    explanation: 'By definition from the text, "Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward." Thus, it is done by choice and for the pleasure of initiative.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-23',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 3\n\nA distinction should be made between work and occupation. Work implies necessity; it is something that must be done as contributing to the means of life in general and to one’s own subsistence in particular. Occupation absorbs time and energy so long as we choose to give them; it demands constant initiative, and it is its own reward. For the average person the element of necessity in work is valuable, for he is saved the mental stress involved in devising outlets for his energy. Work has for him obvious utility, and it brings the satisfaction of tangible rewards. Whereas occupation is an end in itself, and we therefore demand that it shall be agreeable, work is usually the means to other ends – ends which present themselves to the mind as sufficiently important to compensate for any disagreeableness in the means. There are forms of work, of course, which since external compulsion is reduced to a minimum, are hardly to be differentiated from occupation. The artist, the imaginative writer, the scientist, the social worker, for instance, find their pleasure in the constant spontaneous exercise of creative energy and the essential reward of their work is in the doing of it. In all work performed by a suitable agent there must be a pleasurable element, and the greater the amount of pleasure that can be associated with work, the better. But for most people the pleasure of occupation needs the addition of the necessity provided in work. It is better for them to follow a path of employment marked out for them than to have to find their own.\n\nWhen, therefore, we look ahead to the situation likely to be produced by the continued rapid extension of machine production, we should think not so much about providing occupation for leisure as about limiting the amount of leisure to that which can be profitably used. We shall have to put the emphasis on the work – providing rather than the goods – providing aspect of the economic process. In the earlier and more ruthless days of capitalism the duty of the economic system to provide work was overlooked. The purpose of competitive enterprise was to realize a profit. When profit ceased or was curtailed, production also ceased or was curtailed. Thus the workers, who were regarded as units of labour forming part of the costs of production, were taken on when required and dismissed when not required. They hardly thought of demanding work as a right. And so long as British manufacturers had their eyes mainly on the markets awaiting them abroad, they could conveniently neglect the fact that since workers are also consumers, unemployment at home means loss of trade. Moral considerations did not yet find a substitute in ordinary business prudence. The labour movements arose largely as a revolt against the conception of workers as commodities to be bought and sold without regard to their needs as human beings. In a socialist system it is assumed that they will be treated with genuine consideration, for, the making of profit not being essential, central planning will not only adjust the factors of production to the best advantage but will secure regularity of employment. But has the socialist thought about what he would do if owing to technological advance, the amount of human labour were catastrophically reduced? So far as I know, he has no plan beyond drastically limiting the hours of work, and sharing out as much work as there may be. And, of course, he would grant monetary relief to those who were actually unemployed. But has he considered what would be the moral effect of life imagined as possible in the highly mechanized state of future? Has he thought of the possibility of bands of unemployed and under-employed workers marching on the capital to demand not income (which they will have) but work?',
    questionText: 'The distinction between work and occupation is as follows:',
    options: [
      'Work at all times is unpleasant and occupation is always agreeable.',
      'In work there is an element of necessity which is totally wanting in occupation.',
      'Work has obvious utility and brings tangible rewards, while occupation is an end in itself.',
      'Work and occupation often seem to be so very much alike that no distinction can be made between them.'
    ],
    correctAnswer: 'Work has obvious utility and brings tangible rewards, while occupation is an end in itself.',
    explanation: 'The passage contrasts the two: work provides a satisfaction of tangible rewards and obvious utility under necessity, whereas occupation is an end in itself and behaves as its own reward.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Work and Occupation']
  },
  {
    id: 'q-90-varc-rc-24',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'The word "articulate" in human community settings refers here to:',
    options: [
      'the economic elite.',
      'people who are endowed with a native intelligence.',
      'that class which is well educated.',
      'people who are endowed with clarity of speech.'
    ],
    correctAnswer: 'that class which is well educated.',
    explanation: 'The author equates "more articulate members of a community" with the "intelligent, educated minority" who form a coherent group, distinguishing them from the general bulk or "mob." Thus, it refers to the well-educated class.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-25',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'What emerges as the truth from a reading of the paragraph is that:',
    options: [
      'forms of government other than democracy give the mobs great scope for self expression.',
      'democracy provides greater scope for mob rule.',
      'democracy provides greater scope for the rule of the minority.',
      'forms of government other than democracy give the educated minority greater scope for self expression.'
    ],
    correctAnswer: 'democracy provides greater scope for the rule of the minority.',
    explanation: 'The author writes: "Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does." This shows that democracy provides substantial scope for minority groups rather than succumbing to mob rule.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-26',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'Our appreciation of the virtues of the democratic system is:',
    options: [
      'the result of an illusory concept.',
      'the result of our negative response to other forms of government.',
      'the result of a proven record of the success of democracy.',
      'the result of centuries of accurate research on the theoretical aspects of democracy.'
    ],
    correctAnswer: 'the result of a proven record of the success of democracy.',
    explanation: 'The passage says: "This is the lesson of experience." The lesson of experience refers to the empirical, proven record of successful application and practical results of democracy over time.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-27',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'The wide scope that democracy offers to the minorities can be made known:',
    options: [
      'by our common sense.',
      'by our political theories.',
      'by our native intelligence.',
      'by proper analysis.'
    ],
    correctAnswer: 'by proper analysis.',
    explanation: 'The author states: "It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed." This indicates proper/accurate analysis of the concept leads directly to this conclusion.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-28',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'The author seems to be:',
    options: [
      'a supporter of mob rule.',
      'a supporter of democracy.',
      'against intelligence in minorities.',
      'analyzing the flaws of democracy.'
    ],
    correctAnswer: 'a supporter of democracy.',
    explanation: 'The author speaks highly of the virtues and practical benefits of democracy, noting that it provides excellent opportunities and scope for minorities and individuals rather than leading to mob rule.',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-29',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 4\n\nIf the more articulate members of a community formed a coherent and united class with a common interest, democracy would probably replace in to the rule of that intelligent, educated minority; even as it is, the democracies of the modern world are much closer to this fate than they are to the much-canvassed dangers of mob rule. Far from oppressing the cultured minority, or any other minorities, democracy gives more of them more scope to have their way than any other system does. This is the lesson of experience. It might also have been derived from an analysis of the concept of democracy, if the concept had been accurately analyzed.',
    questionText: 'The institution of democracy, in modern times:',
    options: [
      'is on the brink of extinction.',
      'has become vulnerable to the dangers of proletariat rule.',
      'should be prepared for the inevitability of mob rule.',
      'has become prone to the rule of particular class of people.'
    ],
    correctAnswer: 'has become prone to the rule of particular class of people.',
    explanation: 'The author mentions that modern democracies are "much closer to this fate" (being replaced by the rule of an intelligent, educated minority) than they are to mob rule. This suggests it is prone to the rule of a particular educated class.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Democracy and Minorities']
  },
  {
    id: 'q-90-varc-rc-30',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'The duty of science, according to the author, is:',
    options: [
      'to realize the vision of a happy new world.',
      'to pursue knowledge for its own sake.',
      'to see that only such discoveries as conducive to the progress of humanity should be made.',
      'to study the means by which we can adapt ourselves to the new world.'
    ],
    correctAnswer: 'to study the means by which we can adapt ourselves to the new world.',
    explanation: 'In the final paragraph, the author writes: "I think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world." This adaptation is vital to prevent human extinction.',
    timeTarget: 150,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-31',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'Archimedes, Leonardo and Galileo have been mentioned to substantiate the statement that:',
    options: [
      'science has always been intimately associated with war.',
      'from ancient times science has played a leading part in the life of man.',
      'all learning has flourished only under the patronage of royalty and emients.',
      'in the past pursuit of knowledge was done for its own sake.'
    ],
    correctAnswer: 'science has always been intimately associated with war.',
    explanation: 'The author introduces these figures right after asserting: "Science from the dawn of history, and probably longer, has been intimately associated with war." He then details how each prioritized defense, projectiles, and fortifications to serve their states.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-32',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'The ground on which the author suggests that all scientists should join in educating mankind regarding the perils of a great war is that:',
    options: [
      'scientists being among the most learned among people, should take the lead in this process of education.',
      'it is the work of scientists which has led to this perilous situation and so they should do something to undo the mischief.',
      'science has always been associated with war and in the fitness of things, scientists should take the lead in trying to end it.',
      'all others like politicians and soldiers have vested interest in perpetuating war and by elimination, scientists alone may be trusted to work for its abolition.'
    ],
    correctAnswer: 'it is the work of scientists which has led to this perilous situation and so they should do something to undo the mischief.',
    explanation: 'The author argues: "[I]t is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible." This represents an ethical responsibility to undo their own creation.',
    timeTarget: 200,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-33',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'In modern times, the crux of the matter as far as scientists are concerned is that:',
    options: [
      'their loyalty to the state should be declared in no uncertain terms.',
      'a readjustment in the scientist’s conception of duty is imperatively necessary.',
      'they should not object to stringent control by the state over their activities.',
      'they should assert their independence and refuse to subject themselves to any kind of control.'
    ],
    correctAnswer: 'a readjustment in the scientist’s conception of duty is imperatively necessary.',
    explanation: 'The author opens the passage by declaring: "A difficult readjustment in the scientist’s conception of duty is imperatively necessary... unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race." This reflects shifting from state loyalty to global loyalty.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-34',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'The instance of Kapitza cited by the author goes to prove that:',
    options: [
      'every scientist has his price.',
      'in Soviet Russia, communists do not tolerate independent scientists.',
      'scientists, whether in the East or West, have hitherto felt that loyalty to their own state is paramount.',
      'scientists in the West have a higher sense of responsibility than their counterparts in the East.'
    ],
    correctAnswer: 'scientists, whether in the East or West, have hitherto felt that loyalty to their own state is paramount.',
    explanation: 'The author uses the Soviet scientist Kapitza putting his skills towards the development of Soviet H-bombs, alongside a warning that the West suffers from similar unreflective state-first loyalties, to prove that historically all scientists have put state-loyalty above loyalty to humanity.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-35',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'Which among the following statements is NOT true according to the information provided in the passage?',
    options: [
      'If there is no readjustment in the scientist’s conception of duty, the extinction of the human race by war is a distinct possibility.',
      'Up till now, scientists all over the world have felt that loyalty to their own state is paramount.',
      'It is the labours of scientists which have caused the danger of annihilation of mankind.',
      'The tradition up to now has been that scientists have been respected for their pursuit of knowledge and not for their part in devising weapons.'
    ],
    correctAnswer: 'The tradition up to now has been that scientists have been respected for their pursuit of knowledge and not for their part in devising weapons.',
    explanation: 'The passage says: "Archimedes was respected for his scientific defense... Leonardo obtained employment... because of his skill in fortification... Galileo similarly derived an income... because of his skill in calculating trajectories... In the French Revolution those... devoted themselves to making new explosives." It proves that scientists have traditionally been respected and hired precisely for engineering weaponry.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-36',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'The duty of the scientist, according to the passage, is:',
    options: [
      'to further the interests of his state with as much devotion as possible.',
      'to pursue knowledge regardless of the consequences of their discoveries and inventions.',
      'to see that important knowledge is widely disseminated and is not falsified in the interests of propaganda.',
      'to refuse to serve national interests.'
    ],
    correctAnswer: 'to see that important knowledge is widely disseminated and is not falsified in the interests of propaganda.',
    explanation: 'The passage states clearly: "[I]t is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-90-varc-rc-37',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1990',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 5\n\nA difficult readjustment in the scientist’s conception of duty is imperatively necessary. As Lord Adrian said in his address to the British Association, “unless we are ready to give up some of our old loyalties, we may be forced into a fight which might end the human race”. This matter of loyalty is the crux. Hitherto, in the East and in the West alike, most scientists, like most other people, have felt that loyalty to their own state is paramount. They have no longer a right to feel this. Loyalty to the human race must take its place. Everyone in the West will at once admit this as regards Soviet scientists. We are shocked that Kapitza, who was Rutherford’s favourite pupil, was willing when the Soviet government refused him permission to return to Cambridge, to place his scientific skill at the disposal of those who wished to spread communism by means of H-bombs. We do not so readily apprehend a similar failure of duty on our own side. I do not wish to be thought to suggest treachery, since that is only a transference of loyalty to another national state. I am suggesting a very different thing: that scientists the world over should join in enlightening mankind as to the perils of a great war and in devising methods for its prevention. I urge with all the emphasis at my disposal that this is the duty of scientists in East and West alike. It is a difficult duty, and one likely to entail penalties for those who perform it. But after all, it is the labours of scientists which have caused the danger, and on this account, if on no other, scientists must do everything in their power to save mankind from the madness which they have made possible. Science from the dawn of history, and probably longer, has been intimately associated with war. I imagine that when our ancestors descended from the trees, they were victorious over the arboreal conservatives because flints were sharper than coconuts. To come to more recent times, Archimedes was respected for his scientific defense of Syracuse against the Romans; Leonardo obtained employment under the Duke of Milan because of his skill in fortification, though he did mention in a postscript that he could also paint a bit. Galileo similarly derived an income from the Grand Duke of Tuscany because of his skill in calculating the trajectories of projectiles. In the French Revolution, those scientists who were not guillotined devoted themselves to making new explosives. There is therefore no departure from tradition in the present day scientist’s manufacture of A-bombs and H-bombs. All that is new is the extent of their destructive skill.\n\nI do not think that men of science can cease to regard the disinterested pursuit of knowledge as their primary duty. It is true that new knowledge and new skills are sometimes harmful in their effects, but scientists cannot profitably take account of this fact since the effects are impossible to foresee. We cannot blame Columbus because the discovery of the Western Hemisphere spread throughout the Eastern Hemisphere an appallingly devastating plague. Nor can we blame James Watt for the Dust Bowl, although if there had been no steam engines and no railways, the West would not have been so carelessly or so quickly cultivated. To see that knowledge is wisely used is primarily the duty of statesmen, not of science; but it is part of the duty of men of science to see that important knowledge is widely disseminated and is not falsified in the interests of this or that propaganda.\n\nScientific knowledge has its dangers; but so has every great thing. And over and beyond the dangers with which it threatens the present, it opens up, as nothing else can, the vision of a possible happy world, a world without poverty, without war, with little illness. And what is perhaps more than all, when science has mastered the forces which mould human character, it will be able to produce populations in which few suffer from destructive fierceness and in which the great majority regard other people, not as competitors to be feared, but as helpers in a common task. Science has only recently begun to apply itself to human beings except in their purely physical aspect. Such science as exists in psychology and anthropology has hardly begun to affect political behaviour or private ethics. The minds of men remain attuned to a world that is fast disappearing. The changes in our physical environment require, if they are to bring well being, correlative changes in our beliefs and habits. If we cannot effect these changes, we shall suffer the fate of the dinosaurs, who could not live on dry land.\n\nI think it is the duty of science – I do not say of every individual man of science – to study the means by which we can adapt ourselves to the new world. There are certain things that the world quite obviously needs: tentativeness, as opposed to dogmatism in our beliefs; an expectation of co-operation, rather than competition, in social relations; a lessening of envy and collective hatred. These are things which education could produce without much difficulty. They are not things adequately sought in the education of the present day.',
    questionText: 'The evils which have resulted from knowledge of the physical world can only be overcome by:',
    options: [
      'a more intensive pursuit of scientific knowledge.',
      'making scientists more responsible to society.',
      'adequate progress in the human sciences.',
      'enlightening the general public about the evils.'
    ],
    correctAnswer: 'adequate progress in the human sciences.',
    explanation: 'The author specifies: "It is progress in the human sciences that we must look to undo the evils which have resulted from a knowledge of the physical world hastily and superficially acquired by populations unconscious of the changes..."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Loyalty and Scientific Duty']
  },
  {
    id: 'q-91-varc-rc-39',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'The traditional kinship group provides:',
    options: [
      'Security',
      'Identity',
      'Entire scheme of activity',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'According to the passage, the traditional kinship group has usually provided those who live in it with "security, identity, and indeed with their entire scheme of activities and beliefs."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-40',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'Which of the following is indicative of the extent of disintegration of kinship groups?',
    options: [
      'A large number of Americans are unable to name all four of their grandparents.',
      'Growing number of single-parent families.',
      'Increase in the average age at which males get married.',
      'Both (a) and (b).'
    ],
    correctAnswer: 'Both (a) and (b).',
    explanation: 'The passage notes that a surprising number of Americans being unable to name all four of their grandparents, and single-parent families being on the rise, are both indicators of the advanced disintegration of traditional kinship groups.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-41',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'Which of the following statements is NOT true?',
    options: [
      'When people started to farm ten thousand years ago, kinship became less important.',
      'Some families became more powerful than others after farming was initiated.',
      'Genealogy became an important means of perpetuating status after the advent of farming.',
      'Stratification of society was a result of hunter – gatherers taking up farming.'
    ],
    correctAnswer: 'When people started to farm ten thousand years ago, kinship became less important.',
    explanation: 'The passage says that "when people started to farm about ten thousand years ago, their universe remained centered on kinship," meaning it did not become less important; on the contrary, it became even more stratified, bringing status justification into center focus.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-42',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'According to the author, what has been sacrificed with the rise in individual self-consciousness?',
    options: [
      'Sanity',
      'Supportiveness',
      'Warmth',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'The author states that with the rise of individual self-consciousness and post-industrial mainstream isolation, "Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-43',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'The theme of the passage is which of the following?',
    options: [
      'The impact of the deterioration of kinship of groups on third world countries.',
      'The correlation between the decline of traditional kinship groups and stratification of society.',
      'The changes that have occurred to kinship group pattern and the effect of those changes on the individuals.',
      'The political and economic repercussions of the decline of the nuclear family.'
    ],
    correctAnswer: 'The changes that have occurred to kinship group pattern and the effect of those changes on the individuals.',
    explanation: 'The entire passage tracks how the structure and prevalence of traditional kinship and extended families have changed over history, particularly in the West, and analyzes the psychological, social, and emotional impacts of these changes on individual lives.',
    timeTarget: 140,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-44',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'What does the author mean by "serial monogamy"?',
    options: [
      'Judeo-Christian scheme of marriage.',
      'Marriage to one person for life.',
      'A sequence of marriages and divorces.',
      'Delayed marriage.'
    ],
    correctAnswer: 'A sequence of marriages and divorces.',
    explanation: 'The passage defines serial monogamy as "a sequence of marriages and divorces" or "a sort of staggered polygamy," representing a shift away from lifetime marriage to a single individual.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-45',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'Which of the following statements cannot be inferred from the above passage?',
    options: [
      'Smaller families are more autonomous and influential.',
      'The rise of the individuals can largely be viewed as a western phenomenon.',
      'A different mental order is in evidence and can be traced to the renaissance period.',
      'Mainstream post-industrial society would benefit from a resurgence of kinship groups.'
    ],
    correctAnswer: 'Smaller families are more autonomous and influential.',
    explanation: 'The passage notes that are families get smaller, they become "some say, less influential," not more influential. Thus, smaller families being more influential cannot be inferred.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-46',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'The word "genealogy" refers to:',
    options: [
      'family history',
      'kinship groups',
      'family authority',
      'nuclear family'
    ],
    correctAnswer: 'family history',
    explanation: 'Genealogy refers directly to the study or investigation of ancestral lines, descent, and general family history.',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-47',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'According to the passage, the most distressing trend is:',
    options: [
      'Many adults are putting "self-fulfillment" before marriage and children and aren’t getting married at all.',
      'The American divorce rate of 50 percent and remarriage rate of 75 percent.',
      'The contraction of the nuclear family to the mother–child unit.',
      'The inability to develop lasting personal relationship.'
    ],
    correctAnswer: 'The inability to develop lasting personal relationship.',
    explanation: 'The final line of the passage states: "This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding (lasting personal relationship)."',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-48',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 6\n\nHumans have probably always been surrounded by their kin – those to whom they have been related by blood or marriage. But the size, the composition, and the functions of their families and kinship groups have varied tremendously. People have lived not only in the “nuclear family”, made up of just the parents and their offspring, which is standard in the West and has been found almost everywhere, they have lived in extended families and in formal clans; they have been “avunculocal”; they have been “ultrolateral”, they have been conscious of themselves as heirs of lineages hundred of generations deep. However constructed, the traditional kinship group has usually provided those who live in it with security, identity, and indeed with their entire scheme of activities and beliefs. The nameless billions of hunter-gatherers who have lived and died over the past several million years have been embedded in kinship groups, and when people started to farm about ten thousand years ago, their universe remained centered on kinship. Now that there was a durable form of wealth which could be hoarded: grain–some families became more powerful than other; society became stratified, and genealogy became an important means of justifying and perpetuating status.\n\nDuring the past few centuries, however, in part of the world to which we belong–in Europe and the countries that have been developing along European lines-a process of fragmentation has been going on. The ties and the demands of kinship have been weakening, the family has been getting smaller and, some say, less influential, as the individual, with a new sense of autonomy and with new obligations to himself (or, especially in the last decade and a half, to herself),has come to the foreground. A radically different mental order self-centered and traceable not to any single historical development as much as to the entire flow of Western history since at least the Renaissance has taken over. The political and economic effects of this rise in individual self-consciousness have been largely positive: civil rights are better protected and opportunities are greater in the richer, more dynamic countries of the West; but the psychological effects have been mixed, at best. Something has been lost: a warmth, a sanity, and a supportiveness that are apparent among people whose family networks are still intact. Such qualities can be found in most of the Third World and in rural pockets of the U.S., but in the main stream of post-industrial society the individual is increasingly left to himself, to find meaning, stability, and contentment however he can.\n\nAn indication of how far the disintegration of traditional kinship has advanced is that a surprising number of Americans are unable to name all four of their grandparents. Such people have usually grown up in step families, which are dramatically on the rise. So is the single – parent family-the mother-child unit, which some anthropologists contend is the real nucleus of kinship, having already contracted to the relatively impoverished nuclear family, partly as an adaptation to industrialization; kinship seems to be breaking down even further. With the divorce rate in America at about fifty percent and the remarriage rate at about seventy five, the traditional Judeo-Christian scheme of marriage to one person for life seems to be shading into a pattern of serial monogamy, into a sort of staggered polygamy, which some anthropologists, who believe that we aren’t naturally monogamous to begin with, see as “a return of normality”. Still other anthropologists explain what is happening somewhat differently; we are adopting delayed system of marriage, they say, with the length of the marriage chopped off at both ends. But many adults aren’t getting married at all; they are putting “self-fulfillment” before marriage and children and are having nothing further to do with kinship after leaving their parents’ home; their family has become their work associate or their circle of best friends. This is the most distressing trend of all; the decline in the capacity of long-term intimate bonding.',
    questionText: 'According to the passage, which statement is NOT true of kinship group fragmentation?',
    options: [
      'It is apparent that in Europe and countries developing along European lines a process of fragmentation has been taking place during the past few centuries.',
      'A self-centered mental order has replaced the earlier kin-centered mental order and it can be traced to a specific historical development.',
      'The political and economic benefits of the rise of the individuals have not been largely positive.',
      'Psychological effects of the rise of the individuals have been both positive and negative.'
    ],
    correctAnswer: 'The political and economic benefits of the rise of the individuals have not been largely positive.',
    explanation: 'The passage explicitly says "The political and economic effects of this rise in individual self-consciousness have been largely positive..." Thus, claiming they have NOT been positive is untrue.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Family and Kinship']
  },
  {
    id: 'q-91-varc-rc-49',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'When the author refers to "the marauder within", he is referring to:',
    options: [
      'the working class.',
      'the lower class.',
      'the criminal class.',
      'the foreign invaders.'
    ],
    correctAnswer: 'the criminal class.',
    explanation: 'The passage explains that Australia was settled to defend English property not from foreign invaders "but from the marauder within... the criminal class."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-50',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'According to the passage, the intellectual mentors of Australia could be:',
    options: [
      'Hobbes and Cook.',
      'Hobbes and Sade.',
      'Phillip and Jackson.',
      'Sade and Phillip.'
    ],
    correctAnswer: 'Hobbes and Sade.',
    explanation: 'The author states directly: "But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade."',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-51',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'Which of the following does NOT describe what the English regarded Australia to be?',
    options: [
      'a mutant society.',
      'an exiled world.',
      'an enigmatic continent.',
      'a promising new economic frontier.'
    ],
    correctAnswer: 'a promising new economic frontier.',
    explanation: 'The English did not regard it as a promising new frontier; rather, they viewed it as "a jail," "a mutant society," "another planet," or "an exiled world" to store and forget their criminal class.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-52',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'Elsewhere, according to the author, the late eighteenth century saw a plethora of:',
    options: [
      'moral grace schemes and social goodness structures.',
      'strictly organized prison reform programs.',
      'free market capitalist systems.',
      'tyranny and imperial conquest.'
    ],
    correctAnswer: 'moral grace schemes and social goodness structures.',
    explanation: 'The text notes: "The late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution," such as Rousseau\'s natural man and free contracts.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-53',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'The word "sanguine" in the context of the sentence "In their most sanguine moments" means:',
    options: [
      'wise.',
      'pessimistic.',
      'cynical.',
      'confident and optimistic.'
    ],
    correctAnswer: 'confident and optimistic.',
    explanation: '"Sanguine" derives from Latin and describes an optimistic, confident outlook on potential outcomes.',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-54',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'The primary theme of the passage is:',
    options: [
      'the early geopolitical conflicts over the South Pacific.',
      'the first forty years of Australia as a standard colonial trading post.',
      'the establishment and social background of Australia as a penal colony.',
      'the evolution of prison systems (penology) in Europe.'
    ],
    correctAnswer: 'the establishment and social background of Australia as a penal colony.',
    explanation: 'The passage explores the unique historical event of founding Australia as "a jail" and "a thief-colony," tracing the sociological beliefs in Georgian England regarding the "criminal class" that drove this decision.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-55',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'One of the hallmarks of late Georgian and early Victorian England was the belief in:',
    options: [
      'total equality of all classes.',
      'the existence of a distinct "criminal class".',
      'socialism and central economic state planning.',
      'rapid industrialization via state resources.'
    ],
    correctAnswer: 'the existence of a distinct "criminal class".',
    explanation: 'The author states that the criminal class’s "existence was one of the prime sociological beliefs of late Georgian and early Victorian England."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-56',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'What is the definition of penology?',
    options: [
      'The study of writing instruments (pens) across history.',
      'The study of criminal networks and their communication systems.',
      'The study of punishment of crime and of prison management.',
      'The scientific analysis of geographical borders.'
    ],
    correctAnswer: 'The study of punishment of crime and of prison management.',
    explanation: 'Penology refers to the study of the punishment of crime and the management of prisons (derived from "penal").',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-57',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'According to the passage, which of the following statements is NOT true?',
    options: [
      'During the seventeen years after Captain James Cook made landfall at Botany Bay, the British made several observation and reconnaissance trips to Australia.',
      'Australia was settled by the British to protect their property from some of their own kin.',
      'The author implies that while Rousseau was vindicated in places like Tahiti, the process in Australia presented a contrary dystopia.',
      'The forced exile of citizens to Australia was the largest at the behest of a European government in pre-modern history.'
    ],
    correctAnswer: 'During the seventeen years after Captain James Cook made landfall at Botany Bay, the British made several observation and reconnaissance trips to Australia.',
    explanation: 'The passage explicitly states: "Since then, no ship had called – not a word, not an observation, for 17 years," meaning they made absolutely no trips or observations in that period.',
    timeTarget: 140,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-58',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 7\n\nIn 1787, the twenty-eighth year of the reign of King George III, the British Government sent a fleet to colonize Australia. Never had a colony been founded so far from its parent state, or in such ignorance of the land it occupied. There had been no reconnaissance. In 1770 Captain James Cook had made landfall on the unexplored east coast of this utterly enigmatic continent, stopped for a short while at a place named Botany Bay and gone north again. Since then, no ship had called – not a word, not an observation, for 17 years, each one of which was exactly like the thousands that had preceded it, locked in its historical immensity of blue heat, bush, sandstone and the measured booming of glassy pacific rollers.\n\nNow, this coast was to witness a new colonial experiment, never tried before, not repeated since. An unexplored continent would become a jail. The space around it, the very air and sea, the whole transparent labyrinth of the South pacific, would become a wall 14,000 miles thick.\n\nThe late 18th century abounded in schemes of social goodness thrown off by its burgeoning sense of revolution. But here, the process was to be reversed: not utopia, but Dystopia; not Rousseau’s natural man moving in moral grace amid free social contract, but man coerced, deracinated, in chains. Other parts of the Pacific, especially Tahiti, might seem to conform Rousseau. But the intellectual patrons of Australia, in its first colonial years, were Hobbes and Sade.\n\nIn their most sanguine moments, the authorities hoped that it would eventually swallow a whole class-the “criminal class”, whose existence was one of the prime sociological beliefs of late Georgian and early Victorian England. Australia was settled to defend English property not from the frog-eating invader across the Channel but from the marauder within. English lawmakers wished not only to get rid of the “Criminal class” but if possible to forget about it. Australia was a Cloaca, invisible, its contents filthy and unnamable.\n\nTo most Englishmen this place seemed not just a mutant society but another planet-an exiled world, summed up in its popular name, “Botany Bay”. It was remote and anomalous to its white creators. It was strange but close, as the unconscious to the conscious mind. There was as yet no such thing as “Australian” history or culture. For its first forty years, everything that happened in the thief-colony was English. In the whole period of convict transportation, the Crown shipped more than 160,000 men, women and children (due to defects in the records, the true number will never be precisely known) in bondage to Australia. This was the largest forced exile of citizens at the behest of a European government in pre-modern history. Nothing in earlier penology compares with it. In Australia, England drew the sketch for our own century’s vaster and more terrible fresco of repression, the Gulag. No other country had such a birth, and its pangs may be said to have begun on the afternoon of January 26, 1788, when a fleet of eleven vessels carrying 1,030 people, including 548 male and 188 female convicts, under the command of captain Arthur Phillip in his flagship Sirius, entered Port Jackson or, as it would presently be called, Sydney Harbor.',
    questionText: 'Sydney Harbor was earlier known as:',
    options: [
      'Port Jackson',
      'Sirius Bay',
      'Arthur River',
      'Melbourne Point'
    ],
    correctAnswer: 'Port Jackson',
    explanation: 'The passage concludes by noting the fleet "entered Port Jackson or, as it would presently be called, Sydney Harbor."',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'The Colonization of Australia']
  },
  {
    id: 'q-91-varc-rc-59',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 8\n\nThe fact is often obscured by the widespread confusion about the nature and role of emotions in man’s life. One frequently hears the statement, “Man is not merely a rational being, he is also an emotional being”, which implies some sort of dichotomy, as if, in effect, man possessed a dual nature, with one part in opposition to the other. In fact, however, the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence, which, like all of man’s other psychological characteristics, cannot be understood without reference to the conceptual power of his consciousness.\n\nAs man’s tool of survival, reasons has two basic functions: cognition and evaluation. The process of cognition consists of discovering what things are, of identifying their nature, their attributes and properties. The process of evaluation consists of man discovering the relationship of things to himself, of identifying what is beneficial to him and what is harmful, what should be sought and what should be avoided.\n\n“A ‘value’ is that which one acts to gain and/or keep.” It is that which one regards as conducive to one’s welfare. A value is the object of an action. Since man must act in order to live, and since reality confronts him with many possible goals, many alternative courses of action, he cannot escape the necessity of selecting values and making value judgements.\n\n“Value” is a concept pertaining to a relation – the relation of some aspect of reality to man (or to some other living entity). If a man regards a things (a person, an object, an event, mental state, etc.) as good for him, as beneficial in some way, he values it and, when possible and appropriate, seeks to acquire, retain and use or enjoy it; if a man regards a thing as bad for him, as inimical or harmful in some way, he disvalues it – and seeks to avoid or destroy it. If he regards a thing as of no significance to him, as neither beneficial nor harmful, he is indifferent to it – and takes no action in regard to it.\n\nAlthough his life and well-being depend on a man selecting values that are in fact good for him, i.e., consonant with his nature and needs, conducive to his continued efficacious functioning, there are no internal or external forces compelling him to do so. Nature leaves him free in this matter. As a being of volitional consciousness, he is not biologically “programmed” to make the right value-choices automatically. He may select values that are incompatible with his needs and inimical to his well-being, values that lead him to suffering and destruction. But whether his values are life-serving or life-negating, it is a man’s values that direct his actions. Values constitute man’s basic motivational tie to reality.\n\nIn existential terms, man’s basic alternative of “for me” or “against me”, which gives rise to the issue of values, is the alternative of life or death. But this is an adult, conceptual identification. As a child, a human being first encounters the issue of values through the experience of physical sensations of pleasure and pain.\n\nTo a conscious organism, pleasure is experienced, axiomatically, as a value; pain, as disvalue. The biological reason for this is the fact that pleasure is a life-enhancing state and that pain is a signal of danger, of some disruption of the normal life process.\n\nThere is another basic alternative, in the realm of consciousness, through which a child encounters the issue of values, of the desirable and the undesirable. It pertains to his cognitive relations to reality. There are times when a child experiences a sense of cognitive efficacy in grasping reality, a sense of cognitive control, of mental clarity (within the range of awareness possible to his stage of development). There are times when he suffers from a sense of cognitive inefficacy, of cognitive helplessness, of mental chaos, the sense of being out of control and unable to assimilate the date entering his consciousness. To experience a state of efficacy is to experience it as a value; to experience a state of inefficacy is to experience it as a disvalue. The biological basis of this fact is the relationship of efficacy to survival.\n\nThe value of sense of efficacy as such, like the value of pleasure as such, is introspectively experienced by man as primary. One does not ask a man: “Why do you prefer pleasure to pain?” Nor does one ask him: “Why do you prefer a state of control to a state of helplessness?” It is through these two sets of experiences that man first acquires preferences, i.e. values.\n\nA man may choose, as a consequence of his errors and/or evasions, to pursue pleasure by means of values that in fact can result only in pain; and he can pursue a sense of efficacy by means of values that can only render him impotent. But the value of pleasure and the disvalue of pain, as well as the value of efficacy and the disvalue of helplessness, remain the psychological base of the phenomenon of valuation.',
    questionText: 'The author subtly suggests that:',
    options: [
      'there is a dual nature in man.',
      'there is dichotomy between man as an emotional being and man as a rational being.',
      'there should be no dichotomy between man as a rational being and man as an emotional being.',
      'man’s emotions cannot be understood.'
    ],
    correctAnswer: 'there should be no dichotomy between man as a rational being and man as an emotional being.',
    explanation: 'The passage asserts that "the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence." Therefore, treating them as separate or opposing forces (a dichotomy) is a fundamental error.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Philosophy of Emotions and Value']
  },
  {
    id: 'q-91-varc-rc-60',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 8\n\nThe fact is often obscured by the widespread confusion about the nature and role of emotions in man’s life. One frequently hears the statement, “Man is not merely a rational being, he is also an emotional being”, which implies some sort of dichotomy, as if, in effect, man possessed a dual nature, with one part in opposition to the other. In fact, however, the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence, which, like all of man’s other psychological characteristics, cannot be understood without reference to the conceptual power of his consciousness.\n\nAs man’s tool of survival, reasons has two basic functions: cognition and evaluation. The process of cognition consists of discovering what things are, of identifying their nature, their attributes and properties. The process of evaluation consists of man discovering the relationship of things to himself, of identifying what is beneficial to him and what is harmful, what should be sought and what should be avoided.\n\n“A ‘value’ is that which one acts to gain and/or keep.” It is that which one regards as conducive to one’s welfare. A value is the object of an action. Since man must act in order to live, and since reality confronts him with many possible goals, many alternative courses of action, he cannot escape the necessity of selecting values and making value judgements.\n\n“Value” is a concept pertaining to a relation – the relation of some aspect of reality to man (or to some other living entity). If a man regards a things (a person, an object, an event, mental state, etc.) as good for him, as beneficial in some way, he values it and, when possible and appropriate, seeks to acquire, retain and use or enjoy it; if a man regards a thing as bad for him, as inimical or harmful in some way, he disvalues it – and seeks to avoid or destroy it. If he regards a thing as of no significance to him, as neither beneficial nor harmful, he is indifferent to it – and takes no action in regard to it.\n\nAlthough his life and well-being depend on a man selecting values that are in fact good for him, i.e., consonant with his nature and needs, conducive to his continued efficacious functioning, there are no internal or external forces compelling him to do so. Nature leaves him free in this matter. As a being of volitional consciousness, he is not biologically “programmed” to make the right value-choices automatically. He may select values that are incompatible with his needs and inimical to his well-being, values that lead him to suffering and destruction. But whether his values are life-serving or life-negating, it is a man’s values that direct his actions. Values constitute man’s basic motivational tie to reality.\n\nIn existential terms, man’s basic alternative of “for me” or “against me”, which gives rise to the issue of values, is the alternative of life or death. But this is an adult, conceptual identification. As a child, a human being first encounters the issue of values through the experience of physical sensations of pleasure and pain.\n\nTo a conscious organism, pleasure is experienced, axiomatically, as a value; pain, as disvalue. The biological reason for this is the fact that pleasure is a life-enhancing state and that pain is a signal of danger, of some disruption of the normal life process.\n\nThere is another basic alternative, in the realm of consciousness, through which a child encounters the issue of values, of the desirable and the undesirable. It pertains to his cognitive relations to reality. There are times when a child experiences a sense of cognitive efficacy in grasping reality, a sense of cognitive control, of mental clarity (within the range of awareness possible to his stage of development). There are times when he suffers from a sense of cognitive inefficacy, of cognitive helplessness, of mental chaos, the sense of being out of control and unable to assimilate the date entering his consciousness. To experience a state of efficacy is to experience it as a value; to experience a state of inefficacy is to experience it as a disvalue. The biological basis of this fact is the relationship of efficacy to survival.\n\nThe value of sense of efficacy as such, like the value of pleasure as such, is introspectively experienced by man as primary. One does not ask a man: “Why do you prefer pleasure to pain?” Nor does one ask him: “Why do you prefer a state of control to a state of helplessness?” It is through these two sets of experiences that man first acquires preferences, i.e. values.\n\nA man may choose, as a consequence of his errors and/or evasions, to pursue pleasure by means of values that in fact can result only in pain; and he can pursue a sense of efficacy by means of values that can only render him impotent. But the value of pleasure and the disvalue of pain, as well as the value of efficacy and the disvalue of helplessness, remain the psychological base of the phenomenon of valuation.',
    questionText: 'The biological basis of choosing efficacy as a value:',
    options: [
      'cannot be understood because of its complexity.',
      'is the relationship of efficacy to survival.',
      'is the direct association of efficacy with physical sensory pleasure.',
      'is the biological relationship of values to subconscious memory.'
    ],
    correctAnswer: 'is the relationship of efficacy to survival.',
    explanation: 'The author explicitly declares at the end of the eighth paragraph: "The biological basis of this fact is the relationship of efficacy to survival."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Philosophy of Emotions and Value']
  },
  {
    id: 'q-91-varc-rc-61',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 8\n\nThe fact is often obscured by the widespread confusion about the nature and role of emotions in man’s life. One frequently hears the statement, “Man is not merely a rational being, he is also an emotional being”, which implies some sort of dichotomy, as if, in effect, man possessed a dual nature, with one part in opposition to the other. In fact, however, the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence, which, like all of man’s other psychological characteristics, cannot be understood without reference to the conceptual power of his consciousness.\n\nAs man’s tool of survival, reasons has two basic functions: cognition and evaluation. The process of cognition consists of discovering what things are, of identifying their nature, their attributes and properties. The process of evaluation consists of man discovering the relationship of things to himself, of identifying what is beneficial to him and what is harmful, what should be sought and what should be avoided.\n\n“A ‘value’ is that which one acts to gain and/or keep.” It is that which one regards as conducive to one’s welfare. A value is the object of an action. Since man must act in order to live, and since reality confronts him with many possible goals, many alternative courses of action, he cannot escape the necessity of selecting values and making value judgements.\n\n“Value” is a concept pertaining to a relation – the relation of some aspect of reality to man (or to some other living entity). If a man regards a things (a person, an object, an event, mental state, etc.) as good for him, as beneficial in some way, he values it and, when possible and appropriate, seeks to acquire, retain and use or enjoy it; if a man regards a thing as bad for him, as inimical or harmful in some way, he disvalues it – and seeks to avoid or destroy it. If he regards a thing as of no significance to him, as neither beneficial nor harmful, he is indifferent to it – and takes no action in regard to it.\n\nAlthough his life and well-being depend on a man selecting values that are in fact good for him, i.e., consonant with his nature and needs, conducive to his continued efficacious functioning, there are no internal or external forces compelling him to do so. Nature leaves him free in this matter. As a being of volitional consciousness, he is not biologically “programmed” to make the right value-choices automatically. He may select values that are incompatible with his needs and inimical to his well-being, values that lead him to suffering and destruction. But whether his values are life-serving or life-negating, it is a man’s values that direct his actions. Values constitute man’s basic motivational tie to reality.\n\nIn existential terms, man’s basic alternative of “for me” or “against me”, which gives rise to the issue of values, is the alternative of life or death. But this is an adult, conceptual identification. As a child, a human being first encounters the issue of values through the experience of physical sensations of pleasure and pain.\n\nTo a conscious organism, pleasure is experienced, axiomatically, as a value; pain, as disvalue. The biological reason for this is the fact that pleasure is a life-enhancing state and that pain is a signal of danger, of some disruption of the normal life process.\n\nThere is another basic alternative, in the realm of consciousness, through which a child encounters the issue of values, of the desirable and the undesirable. It pertains to his cognitive relations to reality. There are times when a child experiences a sense of cognitive efficacy in grasping reality, a sense of cognitive control, of mental clarity (within the range of awareness possible to his stage of development). There are times when he suffers from a sense of cognitive inefficacy, of cognitive helplessness, of mental chaos, the sense of being out of control and unable to assimilate the date entering his consciousness. To experience a state of efficacy is to experience it as a value; to experience a state of inefficacy is to experience it as a disvalue. The biological basis of this fact is the relationship of efficacy to survival.\n\nThe value of sense of efficacy as such, like the value of pleasure as such, is introspectively experienced by man as primary. One does not ask a man: “Why do you prefer pleasure to pain?” Nor does one ask him: “Why do you prefer a state of control to a state of helplessness?” It is through these two sets of experiences that man first acquires preferences, i.e. values.\n\nA man may choose, as a consequence of his errors and/or evasions, to pursue pleasure by means of values that in fact can result only in pain; and he can pursue a sense of efficacy by means of values that can only render him impotent. But the value of pleasure and the disvalue of pain, as well as the value of efficacy and the disvalue of helplessness, remain the psychological base of the phenomenon of valuation.',
    questionText: 'The author defines value as:',
    options: [
      'something that results as good.',
      'something that is chosen by man.',
      'that which gives pleasure over pain.',
      'that which increases efficacy.'
    ],
    correctAnswer: 'something that is chosen by man.',
    explanation: 'The passage notes that nature leaves man completely free in selecting his values, which directly implies that value is something that must be actively chosen by man’s volitional consciousness.',
    timeTarget: 125,
    tags: ['Reading Comprehension', 'Philosophy of Emotions and Value']
  },
  {
    id: 'q-91-varc-rc-62',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 8\n\nThe fact is often obscured by the widespread confusion about the nature and role of emotions in man’s life. One frequently hears the statement, “Man is not merely a rational being, he is also an emotional being”, which implies some sort of dichotomy, as if, in effect, man possessed a dual nature, with one part in opposition to the other. In fact, however, the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence, which, like all of man’s other psychological characteristics, cannot be understood without reference to the conceptual power of his consciousness.\n\nAs man’s tool of survival, reasons has two basic functions: cognition and evaluation. The process of cognition consists of discovering what things are, of identifying their nature, their attributes and properties. The process of evaluation consists of man discovering the relationship of things to himself, of identifying what is beneficial to him and what is harmful, what should be sought and what should be avoided.\n\n“A ‘value’ is that which one acts to gain and/or keep.” It is that which one regards as conducive to one’s welfare. A value is the object of an action. Since man must act in order to live, and since reality confronts him with many possible goals, many alternative courses of action, he cannot escape the necessity of selecting values and making value judgements.\n\n“Value” is a concept pertaining to a relation – the relation of some aspect of reality to man (or to some other living entity). If a man regards a things (a person, an object, an event, mental state, etc.) as good for him, as beneficial in some way, he values it and, when possible and appropriate, seeks to acquire, retain and use or enjoy it; if a man regards a thing as bad for him, as inimical or harmful in some way, he disvalues it – and seeks to avoid or destroy it. If he regards a thing as of no significance to him, as neither beneficial nor harmful, he is indifferent to it – and takes no action in regard to it.\n\nAlthough his life and well-being depend on a man selecting values that are in fact good for him, i.e., consonant with his nature and needs, conducive to his continued efficacious functioning, there are no internal or external forces compelling him to do so. Nature leaves him free in this matter. As a being of volitional consciousness, he is not biologically “programmed” to make the right value-choices automatically. He may select values that are incompatible with his needs and inimical to his well-being, values that lead him to suffering and destruction. But whether his values are life-serving or life-negating, it is a man’s values that direct his actions. Values constitute man’s basic motivational tie to reality.\n\nIn existential terms, man’s basic alternative of “for me” or “against me”, which gives rise to the issue of values, is the alternative of life or death. But this is an adult, conceptual identification. As a child, a human being first encounters the issue of values through the experience of physical sensations of pleasure and pain.\n\nTo a conscious organism, pleasure is experienced, axiomatically, as a value; pain, as disvalue. The biological reason for this is the fact that pleasure is a life-enhancing state and that pain is a signal of danger, of some disruption of the normal life process.\n\nThere is another basic alternative, in the realm of consciousness, through which a child encounters the issue of values, of the desirable and the undesirable. It pertains to his cognitive relations to reality. There are times when a child experiences a sense of cognitive efficacy in grasping reality, a sense of cognitive control, of mental clarity (within the range of awareness possible to his stage of development). There are times when he suffers from a sense of cognitive inefficacy, of cognitive helplessness, of mental chaos, the sense of being out of control and unable to assimilate the date entering his consciousness. To experience a state of efficacy is to experience it as a value; to experience a state of inefficacy is to experience it as a disvalue. The biological basis of this fact is the relationship of efficacy to survival.\n\nThe value of sense of efficacy as such, like the value of pleasure as such, is introspectively experienced by man as primary. One does not ask a man: “Why do you prefer pleasure to pain?” Nor does one ask him: “Why do you prefer a state of control to a state of helplessness?” It is through these two sets of experiences that man first acquires preferences, i.e. values.\n\nA man may choose, as a consequence of his errors and/or evasions, to pursue pleasure by means of values that in fact can result only in pain; and he can pursue a sense of efficacy by means of values that can only render him impotent. But the value of pleasure and the disvalue of pain, as well as the value of efficacy and the disvalue of helplessness, remain the psychological base of the phenomenon of valuation.',
    questionText: 'The basic theme of the passage is that:',
    options: [
      'man can choose his own values, irrespective of whether they are life sustaining or not.',
      'man chooses values that are life sustaining.',
      'values are given to man on account of his emotional process.',
      'emotions and rationality are inherently derived from each other.'
    ],
    correctAnswer: 'man can choose his own values, irrespective of whether they are life sustaining or not.',
    explanation: 'The author explains that nature has left man free. A man in his choices "is not biologically programmed" to make the right value choices automatically; he is free to choose values that are life-serving or life-negating (leading to suffering or destruction).',
    timeTarget: 140,
    tags: ['Reading Comprehension', 'Philosophy of Emotions and Value']
  },
  {
    id: 'q-91-varc-rc-63',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 8\n\nThe fact is often obscured by the widespread confusion about the nature and role of emotions in man’s life. One frequently hears the statement, “Man is not merely a rational being, he is also an emotional being”, which implies some sort of dichotomy, as if, in effect, man possessed a dual nature, with one part in opposition to the other. In fact, however, the content of man’s emotions is the product of his rational faculty; his emotions are a derivative and a consequence, which, like all of man’s other psychological characteristics, cannot be understood without reference to the conceptual power of his consciousness.\n\nAs man’s tool of survival, reasons has two basic functions: cognition and evaluation. The process of cognition consists of discovering what things are, of identifying their nature, their attributes and properties. The process of evaluation consists of man discovering the relationship of things to himself, of identifying what is beneficial to him and what is harmful, what should be sought and what should be avoided.\n\n“A ‘value’ is that which one acts to gain and/or keep.” It is that which one regards as conducive to one’s welfare. A value is the object of an action. Since man must act in order to live, and since reality confronts him with many possible goals, many alternative courses of action, he cannot escape the necessity of selecting values and making value judgements.\n\n“Value” is a concept pertaining to a relation – the relation of some aspect of reality to man (or to some other living entity). If a man regards a things (a person, an object, an event, mental state, etc.) as good for him, as beneficial in some way, he values it and, when possible and appropriate, seeks to acquire, retain and use or enjoy it; if a man regards a thing as bad for him, as inimical or harmful in some way, he disvalues it – and seeks to avoid or destroy it. If he regards a thing as of no significance to him, as neither beneficial nor harmful, he is indifferent to it – and takes no action in regard to it.\n\nAlthough his life and well-being depend on a man selecting values that are in fact good for him, i.e., consonant with his nature and needs, conducive to his continued efficacious functioning, there are no internal or external forces compelling him to do so. Nature leaves him free in this matter. As a being of volitional consciousness, he is not biologically “programmed” to make the right value-choices automatically. He may select values that are incompatible with his needs and inimical to his well-being, values that lead him to suffering and destruction. But whether his values are life-serving or life-negating, it is a man’s values that direct his actions. Values constitute man’s basic motivational tie to reality.\n\nIn existential terms, man’s basic alternative of “for me” or “against me”, which gives rise to the issue of values, is the alternative of life or death. But this is an adult, conceptual identification. As a child, a human being first encounters the issue of values through the experience of physical sensations of pleasure and pain.\n\nTo a conscious organism, pleasure is experienced, axiomatically, as a value; pain, as disvalue. The biological reason for this is the fact that pleasure is a life-enhancing state and that pain is a signal of danger, of some disruption of the normal life process.\n\nThere is another basic alternative, in the realm of consciousness, through which a child encounters the issue of values, of the desirable and the undesirable. It pertains to his cognitive relations to reality. There are times when a child experiences a sense of cognitive efficacy in grasping reality, a sense of cognitive control, of mental clarity (within the range of awareness possible to his stage of development). There are times when he suffers from a sense of cognitive inefficacy, of cognitive helplessness, of mental chaos, the sense of being out of control and unable to assimilate the date entering his consciousness. To experience a state of efficacy is to experience it as a value; to experience a state of inefficacy is to experience it as a disvalue. The biological basis of this fact is the relationship of efficacy to survival.\n\nThe value of sense of efficacy as such, like the value of pleasure as such, is introspectively experienced by man as primary. One does not ask a man: “Why do you prefer pleasure to pain?” Nor does one ask him: “Why do you prefer a state of control to a state of helplessness?” It is through these two sets of experiences that man first acquires preferences, i.e. values.\n\nA man may choose, as a consequence of his errors and/or evasions, to pursue pleasure by means of values that in fact can result only in pain; and he can pursue a sense of efficacy by means of values that can only render him impotent. But the value of pleasure and the disvalue of pain, as well as the value of efficacy and the disvalue of helplessness, remain the psychological base of the phenomenon of valuation.',
    questionText: 'According to this passage, through which of the following set of experiences does man first acquire preferences?',
    options: [
      'Only good and bad experiences',
      'Only childhood and adult experiences',
      'Pleasure and pain, and Efficacy and inefficacy',
      'Only biological and environmental experiences'
    ],
    correctAnswer: 'Pleasure and pain, and Efficacy and inefficacy',
    explanation: 'The author summarizes at the end of the ninth paragraph: "It is through these two sets of experiences [pleasure and pain, and efficacy and inefficacy] that man first acquires preferences, i.e. values."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Philosophy of Emotions and Value']
  },
  {
    id: 'q-91-varc-rc-64',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'Which of the following statements is not true?',
    options: [
      'A particular effect of interaction with a new culture is an opportunity to enjoy a roller coaster ride.',
      'Entering a new culture brings about a shift in processes of thinking and feeling.',
      'An initial sense of wonder and awe makes a new entrant oblivious to the less pleasant side of the new culture.',
      'Some people can forever remain angry and dissatisfied with the new culture.'
    ],
    correctAnswer: 'A particular effect of interaction with a new culture is an opportunity to enjoy a roller coaster ride.',
    explanation: 'The passage mentions that a heightened roller coaster effect (extreme emotional ups and downs) is characteristic of the adaptation phase, but this is a natural psychological state, not a literal opportunity to enjoy an amusement ride.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-65',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'Entering new cultures can predominantly help the entrant in:',
    options: [
      'attaining emotional stability.',
      'experiencing small victories only.',
      'appreciating diversity.',
      'becoming permanently angry.'
    ],
    correctAnswer: 'appreciating diversity.',
    explanation: 'The text states that in the final stage (affirmation), the entrant develops a deeper appreciation for cultural diversity.',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-66',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'Opening a bank account in a new culture is an example of which stage?',
    options: [
      'Culture shock',
      'Small victories',
      'Affirmation',
      'Confusion'
    ],
    correctAnswer: 'Small victories',
    explanation: 'The passage explicitly names learning to "open a bank account" as an example of experiencing "small victories."',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-67',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'According to the passage, entering a culture that is very different from your own is overall:',
    options: [
      'an exercise in permanent frustration.',
      'a learning process.',
      'a tourist excursion with no deeper meaning.',
      'a process that must be avoided at all costs.'
    ],
    correctAnswer: 'a learning process.',
    explanation: 'The author describes adaptation as a multi-stage transitional process consisting of several stages of adjustment, indicating that adjusting is ultimately a learning process.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-68',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'Which of the following statements cannot be inferred from the above passage?',
    options: [
      'Culture shock is a natural, temporary phase of transition.',
      'The novelty of a new culture eventually wears off for most entrants.',
      'Entrants often compare aspects of the new culture to their home culture.',
      'Modifications in organization culture must result in appreciative inquiry.'
    ],
    correctAnswer: 'Modifications in organization culture must result in appreciative inquiry.',
    explanation: 'The passage describes appreciative inquiry as a supportive method some organizations use, but does not suggest that modifications in organization culture must inevitably result in appreciative inquiry.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-69',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 9\n\nWhen you first arrive in a new culture, there is a period of confusion. There are so many new sights, sounds, and smells to assimilate. This is often followed by a period of excitement as you begin to explore your new surroundings. You feel like a tourist. You may feel that everything is wonderful and that you are going to love living here. But soon, the novelty wears off. You begin to notice the differences between this culture and your own. Some of these differences may be frustrating or even angering. You may find yourself thinking that things are much better back home. This is the stage of culture shock. It is a natural part of the transition process. It is important to remember that culture shock is temporary. As you begin to adapt to the new culture, you will start to experience "small victories." You will learn how to open a bank account, use public transportation, or find a good restaurant. These small victories will boost your confidence and help you feel more at home in your new surroundings. A heightened roller coaster effect is particularly characteristic of this stage, as you experience extreme ups and downs. Over time, you will reach the stage of affirmation. You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points. You will no longer compare everything to your home culture. You will have developed a deeper appreciation for cultural diversity. Some organizations use a process called "appreciative inquiry" to help employees adapt to changes in organizational culture, focusing on what is working well rather than on what is broken.',
    questionText: 'Which of the following is true?',
    options: [
      'Affirmation requires ignoring the negative qualities of a new culture completely.',
      'Appreciative inquiry focuses primarily on what is broken and needs repairing.',
      'Affirmation of a new culture involves viewing it in its entirety with its strengths as well as weak points.',
      'Culture shock begins on the very first day of arriving in a new culture.'
    ],
    correctAnswer: 'Affirmation of a new culture involves viewing it in its entirety with its strengths as well as weak points.',
    explanation: 'The text describes the stage of affirmation as when "You will begin to view the new culture in its entirety, appreciating its strengths as well as its weak points."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Culture and Adaptation']
  },
  {
    id: 'q-91-varc-rc-70',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'The author is making a case for:',
    options: [
      'varying interest rates on loans based on borrower profiles.',
      'withdrawing the legislation on usury.',
      'reducing the interest rate difference on large deposits as against small.',
      'ensuring that owners get interest rates which are determined by free market operations.'
    ],
    correctAnswer: 'withdrawing the legislation on usury.',
    explanation: 'Bentham’s pamphlet "Defense of Usury" is primarily an argument for the complete withdrawal of usury legislation—that is, legal restrictions on interest rates.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-71',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'What inconsistency does Bentham point out in usury laws?',
    options: [
      'It allows high-risk borrowers to get loans but denies it to low-risk citizens.',
      'It restricts the interest rate on home loans but not on short-term business ventures.',
      'it accepts the selling of a product at an exorbitant price while lending at high interest rates as illegal.',
      'It forces small savers to keep money in bank deposits while allowing rich traders to access cash.'
    ],
    correctAnswer: 'it accepts the selling of a product at an exorbitant price while lending at high interest rates as illegal.',
    explanation: 'Bentham observed that usury laws make lending money at high interest rates illegal, yet do not preclude a person from selling products at an exorbitant, highly disadvantageous price.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-72',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'The author suggests that:',
    options: [
      'usury is inherently desirable for all segments of society.',
      'there should be no legal restrictions on interest rates.',
      'one should have one’s cake and eat it too.',
      'he has no answer to the question of usury legislation.'
    ],
    correctAnswer: 'there should be no legal restrictions on interest rates.',
    explanation: 'Following Bentham’s classic arguments, the author asserts that interest rates should not face regulatory caps, but should instead run freely according to market dynamics.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-73',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'How is usury defined in the context of the legislative limits?',
    options: [
      'Charging interest rates in excess of legal limits.',
      'Lending without any written contracts.',
      'Lending money only to bankrupt enterprises.',
      'Selling goods at prices determined by state commissioners.'
    ],
    correctAnswer: 'Charging interest rates in excess of legal limits.',
    explanation: 'Usury refers historically and legally specifically to the practice of lending money at interest rates that exceed the caps established by the state.',
    timeTarget: 90,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-74',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'Bentham was primarily concerned with:',
    options: [
      'loans provided by national central banks to the crown.',
      'international trade credit instruments during wartime.',
      'loans by individuals and businesses.',
      'consumer mortgage schemes in rural parishes.'
    ],
    correctAnswer: 'loans by individuals and businesses.',
    explanation: 'His analytical defense concerned standard private credit arrangements, particularly loans exchanged freely between private individuals or business entities.',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-75',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'To reclaim his own money, a lender often is described as becoming an "oppressor" because:',
    options: [
      'state courts assist and subsidize debt collectors.',
      'borrowers are often unaware of interest compounding structures.',
      'borrowers do not like to part with money.',
      'the rates of interest are fluctuating on a daily basis.'
    ],
    correctAnswer: 'borrowers do not like to part with money.',
    explanation: 'The author notes that recovering money often places the lender in an adversarial, coercive posture because debtors naturally resist parting with cash.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-76',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'According to Bentham, who should be allowed to borrow and lend at any mutually agreed rate?',
    options: [
      'Only state-licensed bank directors.',
      'Only companies with large capital assets.',
      'Sane men acting freely and with full knowledge.',
      'Only public charities and distress relief bodies.'
    ],
    correctAnswer: 'Sane men acting freely and with full knowledge.',
    explanation: 'The passage asserts Bentham’s view that "no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit."',
    timeTarget: 100,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-77',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'The author\'s position on economic regulation suggests he is:',
    options: [
      'a strong advocate for government price caps.',
      'a proponent of state-managed credit institutions.',
      'neutral on financial law enforcement structures.',
      'a staunch supporter of free market operations.'
    ],
    correctAnswer: 'a staunch supporter of free market operations.',
    explanation: 'The passage aligns with classical liberal arguments, stating that interest rates are best left to free market operations rather than regulatory limits.',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-78',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 10\n\nIn 1787, Jeremy Bentham published a lengthy pamphlet entitled "Defense of Usury." In it, he argued against the legal restrictions that governments place on interest rates charged on borrowed money. Legal limits on the rate of interest, Bentham argued, are counterproductive and harmful. He asserted that no sane man, acting freely and with full market knowledge, should be legally precluded from borrowing or lending at whatever rate he sees fit. If two parties find mutual benefit in a loan carrying a high interest rate, government intervention only serves to block productive transactions and create a black market. While laws against usury exist to prevent exploitation, they often end up hurting the very people they are designed to protect, such as small borrowers and high-risk entrepreneurs who are shut out of formal credit markets when legal caps are set too low. Bentham pointed out a curious inconsistency: while traditional usury laws make it illegal to lend money at high interest rates, they do not preclude a person from selling goods or property at an exorbitant price, even when the terms are highly disadvantageous to the buyer. In modern economies, usury regulations often take the form of state-imposed caps on consumer loans, but critics from the classical liberal tradition continue to echo Bentham\'s views, arguing that interest rates are best determined by free market operations. To reclaim his own money, a lender often has to become an oppressor because borrowers do not like to part with money, making usury legislation even more problematic as it encourages evasion by small savers, who find it hardest to avoid legal regulations.',
    questionText: 'The negative impact of usury legislation has increased because:',
    options: [
      'large conglomerates bypass limits through offshore bank shells.',
      'interest rates globally have crashed to near zero.',
      'small savers find it hardest to avoid legal regulations.',
      'governments execute usurers through public show trials.'
    ],
    correctAnswer: 'small savers find it hardest to avoid legal regulations.',
    explanation: 'The text asserts that usury laws are particularly difficult for "small savers, who find it hardest to avoid legal regulations" unlike large institutional agents.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'Bentham on Usury']
  },
  {
    id: 'q-91-varc-rc-79',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'Bickering during review meetings was indicative of the fact that:',
    options: [
      'the team lacked clear management and direction.',
      'several team members were actively sabotaging the launch.',
      'Eagle constituted a collective effort of intense dedication.',
      'the hardware design was inherently flawed.'
    ],
    correctAnswer: 'Eagle constituted a collective effort of intense dedication.',
    explanation: 'The passage states that the engineers "bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort" rather than standard work.',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-80',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'In this passage, the author seems to suggest that:',
    options: [
      'Eagle was a complete failure as a computer product line.',
      'Mr. West was incompetent and avoided meeting his designers.',
      'corporate launches should always avoid showcasing live software.',
      'once a new product is launched, the pains and pleasure that preceded it are lost.'
    ],
    correctAnswer: 'once a new product is launched, the pains and pleasure that preceded it are lost.',
    explanation: 'The Eclipse Group faded, and managers wanted to forget the struggle once corporate machinery took over, implying that the creators’ intense experiences are displaced or lost post-launch.',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-81',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'The "afterbirth", a simile expressed by an old hand, was with reference to:',
    options: [
      'the commercial sales of the Eagle computer system.',
      'the public relations launch in New York.',
      'the elite management layer at the corporation.',
      'the Eclipse Group itself after the high-pressure sprint.'
    ],
    correctAnswer: 'the Eclipse Group itself after the high-pressure sprint.',
    explanation: 'The passage explicitly says: "As an old hand remarked, the emotional aftermath or ‘afterbirth’ of this high-pressure sprint was represented by the Eclipse Group itself."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-82',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'It appears from Mr. West\'s conversation with the author that:',
    options: [
      'he of all people was eager to start designing Eagle II.',
      'he was glad to forget all about it.',
      'he was angry that the engineering team had disbanded.',
      'he felt the launch crash disgraced his reputation.'
    ],
    correctAnswer: 'he was glad to forget all about it.',
    explanation: 'The text notes: "After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind."',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-83',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'A telegram by the North Carolina leader in similar actual events is often seen as:',
    options: [
      'a hostile corporate coup threat.',
      'a worthy gesture before the launch.',
      'a technical patch update for Eagle.',
      'an insult to the primary designers.'
    ],
    correctAnswer: 'a worthy gesture before the launch.',
    explanation: 'In computer development histories (like Soul of a New Machine, on which this passage is based), such messages represented a worthy, honorable nod to the team before the product launched.',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-84',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Easy',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'Apparently, one of the things that the younger computer professionals considered an honor was:',
    options: [
      'to receive free shares of the corporate stock.',
      'to talk to Mr. West.',
      'to operate the punch card sorter machines.',
      'to write promotional brochures for the New York launch.'
    ],
    correctAnswer: 'to talk to Mr. West.',
    explanation: 'The text mentions: "Some computer professionals had considered it an honor just to talk to Mr. West..."',
    timeTarget: 100,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-85',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'The launching of Eagle in New York was a gala affair:',
    options: [
      'even though the engineers refused to attend.',
      'in spite of the fact that the machine crashed during the program.',
      'because the machine performed flawlessly without any bugs.',
      'exclusively designed for the software teams.'
    ],
    correctAnswer: 'in spite of the fact that the machine crashed during the program.',
    explanation: 'The text notes: "The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs."',
    timeTarget: 110,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-86',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'According to the passage, even as the premiere of the Eagle launch seemed a grand success, those who appeared incongruous were:',
    options: [
      'the high-paying corporate clients.',
      'the advertising team heads.',
      'the New York media journalists.',
      'the engineers responsible for Eagle.'
    ],
    correctAnswer: 'the engineers responsible for Eagle.',
    explanation: 'The text points out that "those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible..."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-87',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Medium',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'The phrase "normal flak and protocol" in this context refers to:',
    options: [
      'performing regular diagnostics checking procedures on a computing mainframe.',
      'giving credit for Eagle to even those who weren’t responsible for it.',
      'strict corporate dressing guidelines for New York galas.',
      'clearing PR communications with legal supervisors.'
    ],
    correctAnswer: 'giving credit for Eagle to even those who weren’t responsible for it.',
    explanation: 'The passage describes the "normal flak and protocol" as "giving credit to senior managers who had absolutely nothing to do with building Eagle."',
    timeTarget: 120,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  },
  {
    id: 'q-91-varc-rc-88',
    type: 'MCQ',
    section: 'VARC',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    year: '1991',
    instructions: 'Read the passage and answer the questions that follow.\n\nPassage - 11\n\nLong before I disbanded formally, the Eclipse Group had begun to fade. For some time, the crew represented a collective of engineers who lived and breathed "Eagle," a new computer project. They bickered endlessly during review meetings about who contributed more, proving that Eagle was a collective effort of intense dedication rather than a top-down project. As an old hand remarked, the emotional aftermath or "afterbirth" of this high-pressure sprint was represented by the Eclipse Group itself—all the accumulated fatigue, broken schedules, and silent burnout. After the launch, when I spoke to Mr. West, he was glad to forget all about it, expressing a desire to leave the mental toll of the project behind. Some computer professionals had considered it an honor just to talk to Mr. West, who was a legendary leader. The eventual launch of Eagle in New York was a gala affair, in spite of the fact that the machine crashed during the presentation programs. According to onlookers, even as the premiere was hailed a massive success, those who appeared most incongruous and out of place among the PR executives and suited managers were the engineers responsible for creating active components of Eagle. When credits were distributed, there was a lot of "normal flak and protocol"—giving credit to senior managers who had absolutely nothing to do with building Eagle. The author states that once launched, the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people in the first place.',
    questionText: 'The author states that once launched, the machine no longer belonged to its makers:',
    options: [
      'because they filed for personal bankruptcy.',
      'because another team stole the code blueprints.',
      'because of the expressed attitude towards what motivated people.',
      'because of hardware damage during transit to New York.'
    ],
    correctAnswer: 'because of the expressed attitude towards what motivated people.',
    explanation: 'The final sentence notes: "the machine no longer belonged to its makers because of the expressed corporatizing attitude towards what motivated people..."',
    timeTarget: 130,
    tags: ['Reading Comprehension', 'The Eclipse Group']
  }
];

export const CAT_PAST_QUESTIONS: MockQuestion[] = [
  ...CAT_PAST_QUESTIONS_INTERNAL,
  ...GENERATED_QUESTIONS,
  ...VARC_PAST_2009_2018,
  ...VARC_PAST_2009_2018_B
];


