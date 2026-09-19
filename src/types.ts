/**
 * Types and interfaces for the CAT Prep Dashboard.
 */

export type SectionType = 'VARC' | 'DILR' | 'QA';

export type StatusType = 'Not started' | 'Learning' | 'Practicing' | 'Strong';

export interface QuestionAttempt {
  id: string;
  questionId: string;
  date: string;
  section: SectionType;
  topic?: string;
  difficulty?: string;
  isCorrect: boolean | null; // null if skipped or subjective without auto-eval
  timeTaken: number; // in seconds
  errorType?: ErrorType;
  isMarkedForReview: boolean;
  notes?: string;
}

export interface DailySyllabusItem {
  id: string;
  day: number;
  section: SectionType | 'General';
  topic: string;
  task: string;
  completed: boolean;
  notes: string;
  lastRevised?: string; // YYYY-MM-DD or empty
}

export interface PYPAttempt {
  id: string;
  year: number;
  slot: string; // "Slot 1", "Slot 2", "Slot 3", "N/A"
  section: SectionType | 'Full Test';
  status: 'Not started' | 'Attempted' | 'Re-attempt Planned';
  score?: number;
  accuracy?: number; // 0-100
  notes: string;
  reattemptDate: string; // YYYY-MM-DD or empty
}

export interface WeeklyStudyPlan {
  week: number;
  phase: 'Base building' | 'Topic coverage' | 'Accuracy improvement' | 'Mock test phase' | 'Final revision';
  theme: string;
  varcTarget: string;
  dilrTarget: string;
  qaTarget: string;
  mockTarget: string;
  notes: string;
  completed: boolean;
}

export interface MockTest {
  id: string;
  name: string;
  date: string;
  varcScore: number;
  dilrScore: number;
  qaScore: number;
  totalScore: number;
  percentileEstimate: number; // e.g. 98.5
  attempts: number;
  corrects: number;
  wrongs: number;
  timeWasted: number; // in minutes
  keyMistakes: string;
  nextAction: string;
}

export interface Formula {
  id: string;
  category: 'Arithmetic' | 'Algebra' | 'Geometry' | 'Number system' | 'Modern math';
  title: string;
  formulaText: string;
  explanation: string;
  revised: boolean;
  lastRevisedDate?: string;
}

export type ErrorType = 'concept gap' | 'calculation error' | 'misread' | 'poor selection' | 'time pressure';

export interface ErrorNotebookEntry {
  id: string;
  section: SectionType;
  topic: string;
  source: string; // e.g. "Mock 3 Q14", "PYP 2024 Slot 1 QA"
  errorType: ErrorType;
  whatWentWrong?: string;
  correctApproach: string;
  redoDate: string; // YYYY-MM-DD or empty
  status: 'pending' | 'redone' | 'mastered';
}

export interface MockQuestion {
  id: string;
  type: 'MCQ' | 'TITA';
  section: SectionType;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  instructions?: string;
  questionText: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  fasterMethod?: string;
  commonTrap?: string;
  nextRevision?: string;
  timeTarget: number; // in seconds
  tags: string[];
  year?: string;
}
