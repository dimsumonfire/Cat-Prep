import { MockQuestion } from "./types";

const p_elizabeth = `The British monarch, Elizabeth II, in a green dress and leprechaun hat daintily sipping a glass of Guinness through a straw would have been a most fantastic depiction anytime in her past 59-year reign. But on Wednesday a cartoon in London's Independent came close to reality... For the first time in a century, ever since her grandfather, George V, crossed the Irish Sea, a reigning British monarch has set foot on Ireland. That absence of a hundred years puts into relief the bloodshed, bitter enmity and mistrust that have marked Anglo-Irish relations...`;

const p_tiger = `"The lions had escaped, but the tiger was there. He was starving; one soldier tried to feed it and the other soldier shot and killed it..." In brief, that is the play's first scene. From there, the action bursts into a plethora of issues... On one level, it's a political drama about the war in Iraq... "Story- telling", he imparts, "can get boring if you're not dealing with the issues of life or death..."`;

const p_romanticism = `Ask anyone on the street: "what is Romanticism?" and you will certainly receive some kind of reply. Everyone claims to know the meaning of the word romantic... The philosophes were too objective - they chose to see human nature as something uniform. The philosophes had also attacked the Church because it blocked human reason. The Romantics attacked the Enlightenment because it blocked the free play of the emotions and creativity.`;

const p_fiction = `On the first page of the novel I am writing, I describe a horse - a gray mare named Mathilde... My point is that there is a huge difference between a mare, a pony and a filly. My Mathilde is long-legged, elegant, reliable, whereas a pony is tricky, often mean and tends to nip... English is a naming language; its power derives from nouns. "Art," Ken Kesey said, "is a lie in the service of truth," a statement which may appear to be contradictory but is not.`;

const p_fashion = `For as long as it has existed, fashion, being a language, has always been used as a means of communication. This very peculiar kind of communication takes place on two levels: an open one, and a hidden one. There is in fact an underlying fact, a creative value left to each individual that allows the transmission of ambiguous and equivocal messages... In the eternal ping-pong game between antithetical meanings, the motivating force for creativity within fashion is nearly always, or often, cultural.`;

export const VARC_PAST_2009_2018_B: MockQuestion[] = [
  // ================= RC ================= //
  {
    id: "q-varc-10-26", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_elizabeth,
    questionText: "Which of the following can be inferred from the passage? I. Relations between England and Ireland are cordial now. II. Both Irish and British have been making efforts to ease the tension between the two nations. III. The queen had chosen her attire to match Irish colours.",
    options: [
      "Only I",
      "II and III",
      "I and II",
      "None of the above"
    ],
    correctAnswer: "None of the above",
    explanation: "The passage notes 'fraught years' and 'deserted streets', suggesting relations aren't perfectly cordial yet, but making mutual efforts. However, the exact phrasing of the statements doesn't strictly align with absolute truth in the passage, making 'None' the best official answer.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-10-27", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_elizabeth,
    questionText: "How is the quote from Ulysses relevant to Britain and Ireland?",
    options: [
      "After years of conflict between Britain and Ireland, efforts are being made to resolve issues.",
      "After years of shared misfortune, Britain and Ireland are trying to make amends.",
      "Both Britain and Ireland have a tragic past that they are trying to recover from.",
      "Britain and Ireland have had bitter enmity and mistrust toward each other but that is now a thing of the past."
    ],
    correctAnswer: "After years of conflict between Britain and Ireland, efforts are being made to resolve issues.",
    explanation: "The quote is 'History is a nightmare from which I am trying to awake'. This indicates historical conflict from which both nations are making efforts to awake (resolve).",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-11-45", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_tiger,
    questionText: "It can be inferred that the purpose of the first paragraph is",
    options: [
      "to describe the real-life incident on which the play is based.",
      "to inform the reader about the first scene of the play.",
      "to arouse interest about the article.",
      "to set the tone for the rest of the article."
    ],
    correctAnswer: "to inform the reader about the first scene of the play.",
    explanation: "The first paragraph directly begins by describing the first scene of the play to establish context.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-12-54", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Hard",
    instructions: p_romanticism,
    questionText: "How does the author use the arguments of the philosophes and the Romantics attacking the church for different reasons to make a point regarding the Romantics' problem with the philosophes?",
    options: [
      "By mentioning how both opposed the same thing - the Church's treatment of human beings as being uniform.",
      "By talking about how both opposed the Church on different grounds, which in the end were quite similar.",
      "By quoting the views of the leaders of the Romantics and the philosophes and showing how they actually meant the same thing.",
      "By showing how one fought for logic and the other for sentiments thereby proving the Romantics' support of the spirit opposing dependence on rationality."
    ],
    correctAnswer: "By showing how one fought for logic and the other for sentiments thereby proving the Romantics' support of the spirit opposing dependence on rationality.",
    explanation: "The philosophes attacked the church because it blocked human reason. The Romantics attacked the Enlightenment (philosophes) because they blocked emotions, showing a clear distinction between the fight for logic vs. sentiment.",
    timeTarget: 120,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-12-62", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_fiction,
    questionText: "What does the author mean by saying 'English is a naming language'?",
    options: [
      "English is most conducive to indulge in name- calling.",
      "The main focus of English literature is names.",
      "The power of name-calling is immense in English.",
      "English is most suited to talking about different people."
    ],
    correctAnswer: "The main focus of English literature is names.",
    explanation: "The author means that English relies on specific nouns (names) for its power, separating a mare from a pony from a filly.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-14-90", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Hard",
    instructions: p_fashion,
    questionText: "According to the passage, which of the following statements correctly describes one of the levels of communication through fashion?",
    options: [
      "The open level leads to creative value which is easily understood by everyone but is shrouded by the transmission of ambiguous and equivocal messages.",
      "The close level leads to creative value left for the individual which needs to be properly aligned with the open level communication.",
      "The hidden level communicates creative value which can lead to transmission of ambiguous and equivocal messages.",
      "All of the above"
    ],
    correctAnswer: "The hidden level communicates creative value which can lead to transmission of ambiguous and equivocal messages.",
    explanation: "The passage explicitly notes that the 'hidden' level allows the 'transmission of ambiguous and equivocal messages'.",
    timeTarget: 120,
tags: ['VARC', 'Past Papers']
  },
  // ================= PARA SUMMARY ================= //
  {
    id: "q-varc-17-154", type: "MCQ", section: "VARC", topic: "Para Summary", difficulty: "Medium",
    questionText: "Both Socrates and Bacon were very good at asking useful questions. In fact, Socrates is largely credited with coming up with a way of asking questions, 'the Socratic method', which itself is at the core of the 'scientific method', popularised by Bacon. The Socratic method disproves arguments by finding exceptions to them...",
    options: [
      "Both Socrates and Bacon advocated clever questioning of the opponents to disprove their arguments and theories.",
      "Both Socrates and Bacon advocated challenging arguments and theories by observation and experimentation.",
      "Both Socrates and Bacon advocated confirming arguments and theories by finding exceptions.",
      "Both Socrates and Bacon advocated examining arguments and theories from both sides to prove them."
    ],
    correctAnswer: "Both Socrates and Bacon advocated confirming arguments and theories by finding exceptions.",
    explanation: "Finding exceptions to disprove arguments is the core connection stated for both methods.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  // ================= ODD SENTENCE ================= //
  {
    id: "q-varc-16-123", type: "TITA", section: "VARC", topic: "Odd Sentence Out", difficulty: "Medium",
    questionText: "Identify the odd one out:\n1. More and more land is being cleared for people to plant crops like cotton and tobacco, creating runoff downriver that silts up rivers and shrinks waterholes for Africa's remaining hippo population.\n2. Low-slung with big bellies, hippos appear awkward on land, but they are fast runners for their size...\n3. Male hippos regularly take over a length of riverbank to establish mating territory.\n4. With a name derived from the Greek words for 'river horse,' hippopotamuses are semiaquatic herbivores that live their lives in water...\n5. Sometimes, these squatting rights result in fierce battles, during which the males bellow loudly and bare their huge canine teeth.",
    options: [],
    correctAnswer: "1",
    explanation: "Sentences 2, 3, 4, 5 discuss hippopotamus physical characteristics, habitat routines, and mating battles. Sentence 1 discusses human agriculture threatening hippo habitats, which breaks the flow of the descriptive focus.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  }
];
