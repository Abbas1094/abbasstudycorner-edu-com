// Shared types for the app

export interface MCQ {
  id: string;
  question: string;
  questionImage?: string; // URL or path to question image (for non-verbal patterns)
  options: string[];
  optionImages?: string[]; // URLs or paths for pictorial options
  correctAnswer: number;
  explanation?: string;
  isExcluded?: boolean; // Marked excluded by Smart Syllabus (ALP) — show red badge
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  icon: string;
  mcqs: MCQ[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  chapters: Chapter[];
  experienceMCQs?: MCQ[];
  toughMCQs?: MCQ[];
}

export interface AcademicClass {
  id: string;
  name: string;
  subjects: AcademicSubject[];
}

export interface AcademicSubject {
  id: string;
  name: string;
  icon: string;
  pairingScheme?: string;
  chapters: AcademicChapter[];
  mcqs?: MCQ[];
  resources?: Resource[];
  studyPlan?: string;
}

export interface AcademicChapter {
  id: string;
  name: string;
  importantTopics?: string[];
  keyConcepts?: string[];
  formulas?: string[];
  shortNotes?: string;
  mcqs?: MCQ[];
  outsideExerciseMCQs?: MCQ[];
  notes?: string[];
}

export interface Resource {
  id: string;
  name: string;
  type: 'book' | 'notes' | 'past-paper';
  driveLink?: string;
}
