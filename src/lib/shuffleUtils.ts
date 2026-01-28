// Utility functions for shuffling MCQs and options

// Generic MCQ type to support both string and number IDs
interface MCQBase {
  id: string | number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

/**
 * Fisher-Yates shuffle algorithm for arrays
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffles MCQ options and updates the correct answer index
 * Returns a new MCQ object with shuffled options
 */
export function shuffleMCQOptions<T extends MCQBase>(mcq: T): T {
  // Create array of options with their original indices
  const indexedOptions = mcq.options.map((opt, idx) => ({
    option: opt,
    originalIndex: idx
  }));
  
  // Shuffle the options
  const shuffledIndexedOptions = shuffleArray(indexedOptions);
  
  // Find new correct answer index
  const newCorrectAnswer = shuffledIndexedOptions.findIndex(
    item => item.originalIndex === mcq.correctAnswer
  );
  
  return {
    ...mcq,
    options: shuffledIndexedOptions.map(item => item.option),
    correctAnswer: newCorrectAnswer
  };
}

/**
 * Shuffles both the MCQs array and their options
 */
export function shuffleMCQs<T extends MCQBase>(mcqs: T[]): T[] {
  // First shuffle the order of questions
  const shuffledQuestions = shuffleArray(mcqs);
  
  // Then shuffle options for each question
  return shuffledQuestions.map(shuffleMCQOptions);
}
