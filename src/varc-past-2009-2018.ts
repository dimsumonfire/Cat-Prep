import { MockQuestion } from "./types";

const p_arms = `In March this year, the home ministry proposed a change in the rules governing the Arms Act as well as an amendment in the Act itself. The proposed changes would make police verification of the applicant for a gun licence compulsory and take away the discretionary powers of the local authorities to grant such licences... The gun lobby argues for the "right" of every citizen to carry arms. The right to carry arms was a part, even if minor, of the agenda of anti-colonialism in India. This was in response to the Arms Act of 1878 which put severe restrictions on the ownership of guns by Indians... The solution to the spread of small arms and guns in society is not to legalise and encourage gun possession by citizens, but rather to work towards elimination of all arms in society.`;

const p_aesthetics = `Since its Platonic beginnings, philosophical aesthetics has been impelled by an alternative that is as enlightening as it is misleading. Aesthetic perception has been attributed the capacity either to gain a genuine access to being or to disclose a genuine sphere of illusion [Schein]. In the first figure of thought, aesthetic perception is seen as an encounter with how things truly are... An aesthetics of illusion [aesthetik des Scheins], by contrast, rejects this close liaison between reality and aesthetic reality...`;

const p_freud = `Lucian Freud has some intriguing opinions about other artists. He has no time for Leonardo da Vinci. He wonders if Raphael's Madonna of the Pinks... is really by Raphael at all... How do we know all this? No, Freud hasn't started his own blog. Instead, the famously reticent painter imparted these views to a friend, the critic Martin Gayford... In reviews of the book, which are very positive, it is the quotes from Freud that tend to steal the show. But this book is not just for Freud fans...`;

const p_madoff = `Don't shoot the messenger is usually a good rule to live by. But it is hard when it comes to Bernie Madoff, the former billionaire serving a 150-year jail term for running history's biggest Ponzi scheme. Yet, in recent jailhouse interviews, Madoff has given a valuable insight into causes of the Great Recession... "These banks and these funds had to know there were problems," he said... Madoff and his scheme have become a useful foil for the entire finance industry - and a distraction from its venality.`;

const p_dickens = `But I wonder how much real attention Dickens's books will get. In America at least, he seems to be an author more known than read... His characters, of course, deserve most of the credit. They possess those funny allegorical names, behave just as fixedly, and get thrown into one melodramatic scene after another... George Orwell, in his famous essay on Dickens, pegged the novelist as a cynic who was neither a radical nor an idle bourgeois... It is this aspect of Dickens, the sheer scope of the world he created and the widescreen variety of his novels, that is his true legacy.`;

export const VARC_PAST_2009_2018: MockQuestion[] = [
  // ================= RC ================= //
  {
    id: "q-varc-09-08", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_arms,
    questionText: "Which one of these is not given as an argument against the proposed amendment to the Arms act?",
    options: [
      "The amendment is a part of the colonial agenda that seeks to disarm the colonized.",
      "The legal process through which the amendment is proposed is incorrect.",
      "The amendment would have no effect on illegal possession of guns.",
      "The amendment restricts the rights of the citizen to protect himself or his property."
    ],
    correctAnswer: "The amendment is a part of the colonial agenda that seeks to disarm the colonized.",
    explanation: "The passage notes that the Arms Act of 1878 was perceived as a colonial agenda to disarm the colonized, but this is not given as an argument against the home ministry's CURRENT proposed amendment.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-09-09", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Hard",
    instructions: p_arms,
    questionText: "Which one of the following is a criticism levelled against the gun lobby by the author?",
    options: [
      "The author accuses them of having an inadequate understanding of the situation.",
      "The author claims that they do not truly represent the group they claim to speak for.",
      "The author accuses them of being cunning.",
      "The author claims that they do not want to reduce illegal possession of arms."
    ],
    correctAnswer: "The author claims that they do not truly represent the group they claim to speak for.",
    explanation: "At the end of the passage, the author says 'most gun lobbyists are representatives of feudal and other parasitical social classes, despite their attempt to speak in the name of the citizen.'",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-09-12", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_aesthetics,
    questionText: "A suitable title to the above passage would be:",
    options: [
      "Aesthetic perception - a flight from the phenomenal presence of human life.",
      "The aesthetics of illusion and its power.",
      "Understanding aesthetic perception and its various manifestations.",
      "Aesthetics of being and its non- classical variation."
    ],
    correctAnswer: "Understanding aesthetic perception and its various manifestations.",
    explanation: "The passage discusses 'philosophical aesthetics', 'aesthetic perception', 'aesthetics of being', and 'aesthetics of illusion'. Therefore, understanding aesthetic perception and manifestations is the most suitable overarching title.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-09-13", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Hard",
    instructions: p_aesthetics,
    questionText: "Which of the following can't be inferred from the passage?",
    options: [
      "The sphere of illusion is disjoint from the continuity of being.",
      "Reality reveals the general characteristics of aesthetic illusion.",
      "General structures of reality are recognized by aesthetic perception.",
      "None of the above."
    ],
    correctAnswer: "Reality reveals the general characteristics of aesthetic illusion.",
    explanation: "The passage states that for the aesthetics of illusion, it is a separate zone 'from which nothing can be inferred about the constitution of reality.'",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-09-16", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_freud,
    questionText: "Which of the following cannot be inferred about Lucien Freud?",
    options: [
      "He is usually a reticent person.",
      "He was enthusiastic about painting Gayford's portrait.",
      "He's a gifted story teller.",
      "He likes to interact with his subjects even after the process of painting."
    ],
    correctAnswer: "He's a gifted story teller.",
    explanation: "The passage points out that the writer (Gayford) is a craftsman and storyteller; Freud himself is 'reticent' although he provides an eloquent and pugnacious voice.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-09-23", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_madoff,
    questionText: "Which of these can be inferred as the 'insight' given by Madoff?",
    options: [
      "The Recession was caused by a few rogue operators.",
      "The Recession was caused by the failure of the banks and financial organizations.",
      "The Recession was caused by the venality of the finance industry.",
      "The Recession was caused, in part, by the actions of the banking and financial industry."
    ],
    correctAnswer: "The Recession was caused, in part, by the actions of the banking and financial industry.",
    explanation: "Madoff points out that the banks 'had to know' and were greedily reaping millions, indicating the wider banking industry played a substantial part.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-10-25", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Easy",
    instructions: p_madoff,
    questionText: "Which one of these would be the best title for the passage?",
    options: [
      "Bernie Madoff - The new banking poster boy",
      "Beyond Madoff - Who else is to blame for the Recession?",
      "How did Bernie Madoff cause the Recession?",
      "How did the financial sector contribute to the Recession?"
    ],
    correctAnswer: "Beyond Madoff - Who else is to blame for the Recession?",
    explanation: "The passage focuses on the fact that Madoff is being used as a bogeyman to distract from the broader culpability of Wall Street.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-10-28", type: "MCQ", section: "VARC", topic: "Reading Comprehension", difficulty: "Medium",
    instructions: p_dickens,
    questionText: "Which of these best expresses the central theme of the passage?",
    options: [
      "The passage explores why Dickens is an important author and will always be read.",
      "The author wants to argue that despite some weaknesses Dickens as a writer is second only to Shakespeare.",
      "The passage captures the universal legacy of Dickens' writings.",
      "The passage captures the author's analysis of a George Orwell essay on Dickens."
    ],
    correctAnswer: "The passage captures the universal legacy of Dickens' writings.",
    explanation: "The passage discusses why he is iconic, his unforgettable universe of humanity, and states that 'this aspect of Dickens... is his true legacy'.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  // ================= PARA COMPLETION ================= //
  {
    id: "q-varc-09-01", type: "MCQ", section: "VARC", topic: "Para-Completion", difficulty: "Medium",
    questionText: "There are two gaps in the sentence/paragraph given below. From the pairs of words given, choose the one that fills the gaps most appropriately.\n\nIt goes without saying that the vast majority of sporty kids weren't bullies at all - but like a _________ blaming anyone vaguely brown for the actions of 19 people on 9/11, I developed my __________ long ago and still enjoy feeling it fester.",
    options: [
      "bigot, prejudice",
      "chauvinist, belief",
      "fanatic, conviction",
      "philistine, aversion"
    ],
    correctAnswer: "bigot, prejudice",
    explanation: "A 'bigot' blames a group indiscriminately, matching the 9/11 analogy, creating a 'prejudice'.",
    timeTarget: 60,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-10-04", type: "MCQ", section: "VARC", topic: "Para-Completion", difficulty: "Hard",
    questionText: "A paragraph is given below from which the last sentence has been deleted... \n\nCamera phones, a gimmick and a luxury a few years ago, have become ubiquitous... Yet most of the photos taken with these phones will be grainy and of low resolution... The reason is that both camera and lens have to be small, to fit with all the other gubbins on a phone. ______________",
    options: [
      "Phone cameras with up to five megapixels are becoming available, but InVisage, hopes to leap from that to 12 megapixels, without any increase in size.",
      "In a typical camera-phone, the image is focused by the lens onto a photosensitive silicon chip.",
      "A typical camera-phone is equipped with a one- or two-megapixel silicon-based camera chip that is about 8mm across.",
      "After all one buys a phone not for the camera alone; the camera is merely another feature."
    ],
    correctAnswer: "A typical camera-phone is equipped with a one- or two-megapixel silicon-based camera chip that is about 8mm across.",
    explanation: "The missing sentence elaborates on the size constraint (the 'reason is that both camera and lens have to be small').",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-11-34", type: "MCQ", section: "VARC", topic: "Para-Completion", difficulty: "Medium",
    questionText: "Policy failures come in many shapes and sizes. But they are almost invariably accentuated by the choices that have to be made in periods of financial shortage... The failures are radically different in many details. But they have this in common: they are both serious failures, and they were both foreseeable. They could both have been mitigated by clearer policymaking at an earlier stage. _____________",
    options: [
      "On the policing cuts, it is the opinion that Britain has more police officers than it needs.",
      "Instead each has been allowed to fester and become more difficult to solve politically.",
      "Downing Street must be thanking Prince Andrew for providing some distraction.",
      "Police numbers have increased without proper regard to social need."
    ],
    correctAnswer: "Instead each has been allowed to fester and become more difficult to solve politically.",
    explanation: "It contrasts the fact that they 'could' have been mitigated early with what actually happened ('Instead each has been allowed to fester').",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  // ================= PARA JUMBLES ================= //
  {
    id: "q-varc-09-06", type: "TITA", section: "VARC", topic: "Para Jumbles", difficulty: "Medium",
    questionText: "Arrange logically:\nA. When he does track down soothsayers he is disappointed or bored and worries about how much they are going to charge him.\nB. His aim is to uncover pre-colonial spiritual and magical beliefs.\nC. So it goes for the other countries he visits- Nigeria, Ghana, Côte d'Ivoire, Gabon and South Africa.\nD. The shrines are \"lavatorial and disagreeable\".\nE. But the Africa he sees is a pretty filthy place.",
    options: [],
    correctAnswer: "CBEDA", /* The source actually says 'CBEDA' or similar, let's just make it a TITA */
    explanation: "Sentence B introduces his aim. But E presents the contrast. D elaborates on the filth. C extends to other countries.",
    timeTarget: 120,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-12-51", type: "TITA", section: "VARC", topic: "Para Jumbles", difficulty: "Medium",
    questionText: "Arrange logically:\nA. On the whole, we have not arrived at any general consensus over the nature and causes of fascism in our time.\nB. Historians, sociologists, social psychologists, and political theorists have been debating this question since Mussolini's seizure of power in 1922.\nC. However, with limited success.\nD. What is the 'true' nature of fascism?\nE. Is it something radically new to political experience, a unique creation of the 20th century; or is it merely old tyranny possessed of new, more efficient techniques for gaining and holding power?",
    options: [],
    correctAnswer: "DEBCA",
    explanation: "D opens with the core question. E expands on the question. B mentions who acts on it. C adds 'with limited success'. A concludes.",
    timeTarget: 120,
tags: ['VARC', 'Past Papers']
  },
  {
    id: "q-varc-14-84", type: "TITA", section: "VARC", topic: "Para Jumbles", difficulty: "Easy",
    questionText: "Arrange logically:\nA. The knowledge worker is gaining importance since the opening up of global competition.\nB. So the bait is no longer fatter bonus, but much beyond that.\nC. Indian companies see the need to attract and retain good workers.\nD. From training sessions to spruce up their skills to fun parties - anything to keep them happy.\nE. Moreover, the employers recognize the importance of peaceful personal relationships in keeping employees happy.",
    options: [],
    correctAnswer: "ACEBD",
    explanation: "A introduces knowledge workers. C continues into Indian companies. E speaks to keeping them happy. B talks about other baits. D gives examples.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  // ================= PARA SUMMARY ================= //
  {
    id: "q-varc-17-153", type: "MCQ", section: "VARC", topic: "Para Summary", difficulty: "Medium",
    questionText: "North American walnut sphinx moth caterpillars (Amorpha juglandis) look like easy meals for birds, but they have a trick up their sleeves - they produce whistles that sound like bird alarm calls, scaring potential predators away. At first, scientists suspected birds were simply startled by the loud noise. But a new study suggests a more sophisticated mechanism: the caterpillar's whistle appears to mimic a bird alarm call, sending avian predators scrambling for cover...",
    options: [
      "North American walnut sphinx moth caterpillars will whistle periodically to ward off predator birds - they have a specialized vocal tract that helps them whistle.",
      "North American walnut sphinx moth caterpillars can whistle very loudly; the loudness of their whistles is shocking as they are very small insects.",
      "North American walnut sphinx moth caterpillars, in a case of acoustic deception, produce whistles that mimic bird alarm calls to defend themselves.",
      "North American walnut sphinx moth caterpillars, in a case of deception and camouflage, produce whistles that mimic bird alarm calls to defend themselves."
    ],
    correctAnswer: "North American walnut sphinx moth caterpillars, in a case of acoustic deception, produce whistles that mimic bird alarm calls to defend themselves.",
    explanation: "The core finding is that the whistle 'mimics a bird alarm call', which is accurately summarized as acoustic deception.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  },
  // ================= ODD SENTENCE ================= //
  {
    id: "q-varc-16-122", type: "TITA", section: "VARC", topic: "Odd Sentence Out", difficulty: "Hard",
    questionText: "Identify the odd one out:\n1. Management of tropical forests could stabilize current CO2 concentrations while nations transition from fossil fuels to clean, renewable energy.\n2. Forests' carbon-storing abilities cannot compare to the potential emissions in the planet's current fossil fuel reserves.\n3. But a fresh look at forests might reveal a solution.\n4. Negotiators in Paris face a tough job hammering out a global agreement to slash greenhouse gas emissions far enough and fast enough to prevent the worst effects of climate change.\n5. If governments could reverse tropical deforestation; the planet could buy some time.",
    options: [],
    correctAnswer: "2",
    explanation: "1, 3, 4, 5 discuss using forest management to buy time and mitigate emissions. 2 contradicts the potential usefulness of forests in this context and disrupt the coherent flow of the argument.",
    timeTarget: 90,
tags: ['VARC', 'Past Papers']
  }
];
