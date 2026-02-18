// Combined export of all non-verbal patterns
export { patterns1to10, patternComponents1to10 } from './patterns1to10';
export { patterns11to20, patternComponents11to20 } from './patterns11to20';
export { patterns21to30, patternComponents21to30 } from './patterns21to30';
export { patterns31to40, patternComponents31to40 } from './patterns31to40';
export { patterns41to50, patternComponents41to50 } from './patterns41to50';
export { patterns51to60, patternComponents51to60 } from './patterns51to60';
export { patterns61to70, patternComponents61to70 } from './patterns61to70';

import { patterns1to10, patternComponents1to10 } from './patterns1to10';
import { patterns11to20, patternComponents11to20 } from './patterns11to20';
import { patterns21to30, patternComponents21to30 } from './patterns21to30';
import { patterns31to40, patternComponents31to40 } from './patterns31to40';
import { patterns41to50, patternComponents41to50 } from './patterns41to50';
import { patterns51to60, patternComponents51to60 } from './patterns51to60';
import { patterns61to70, patternComponents61to70 } from './patterns61to70';
import type { MCQ } from '@/types';

// All non-verbal MCQs combined
export const allNonVerbalMCQs: MCQ[] = [
  ...patterns1to10,
  ...patterns11to20,
  ...patterns21to30,
  ...patterns31to40,
  ...patterns41to50,
  ...patterns51to60,
  ...patterns61to70,
];

// All pattern components combined for rendering
export const allPatternComponents = {
  ...patternComponents1to10,
  ...patternComponents11to20,
  ...patternComponents21to30,
  ...patternComponents31to40,
  ...patternComponents41to50,
  ...patternComponents51to60,
  ...patternComponents61to70,
};

// Helper to get pattern component by question number
export const getPatternByNumber = (questionNumber: number) => {
  const key = `Q${questionNumber}` as keyof typeof allPatternComponents;
  return allPatternComponents[key];
};
