// Combined export of all PAF-specific non-verbal patterns
export { pafPatterns1to10, pafPatternComponents1to10 } from './pafPatterns1to10';
export { pafPatterns11to20, pafPatternComponents11to20 } from './pafPatterns11to20';
export { pafPatterns21to30, pafPatternComponents21to30 } from './pafPatterns21to30';
export { pafPatterns31to40, pafPatternComponents31to40 } from './pafPatterns31to40';
export { pafPatterns41to50, pafPatternComponents41to50 } from './pafPatterns41to50';

import { pafPatterns1to10, pafPatternComponents1to10 } from './pafPatterns1to10';
import { pafPatterns11to20, pafPatternComponents11to20 } from './pafPatterns11to20';
import { pafPatterns21to30, pafPatternComponents21to30 } from './pafPatterns21to30';
import { pafPatterns31to40, pafPatternComponents31to40 } from './pafPatterns31to40';
import { pafPatterns41to50, pafPatternComponents41to50 } from './pafPatterns41to50';
import type { MCQ } from '@/types';

// All 50 PAF non-verbal MCQs combined
export const allPafNonVerbalMCQs: MCQ[] = [
  ...pafPatterns1to10,
  ...pafPatterns11to20,
  ...pafPatterns21to30,
  ...pafPatterns31to40,
  ...pafPatterns41to50,
];

// All PAF pattern components combined for rendering
export const allPafPatternComponents = {
  ...pafPatternComponents1to10,
  ...pafPatternComponents11to20,
  ...pafPatternComponents21to30,
  ...pafPatternComponents31to40,
  ...pafPatternComponents41to50,
};

// Helper to get PAF pattern component by question number
export const pafGetPatternByNumber = (questionNumber: number) => {
  const key = `PQ${questionNumber}` as keyof typeof allPafPatternComponents;
  return allPafPatternComponents[key];
};
