// Non-verbal patterns Q1-Q10
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon, QuestionMark } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q1: Curve progression - curves increasing from 1 to 4
const Q1_Pattern1 = () => (
  <>
    <path d="M 30 70 Q 50 30 70 70" fill="none" strokeWidth="2" />
  </>
);
const Q1_Pattern2 = () => (
  <>
    <path d="M 25 70 Q 40 35 55 70" fill="none" strokeWidth="2" />
    <path d="M 45 70 Q 60 35 75 70" fill="none" strokeWidth="2" />
  </>
);
const Q1_Pattern3 = () => (
  <>
    <path d="M 20 70 Q 32 40 44 70" fill="none" strokeWidth="2" />
    <path d="M 38 70 Q 50 40 62 70" fill="none" strokeWidth="2" />
    <path d="M 56 70 Q 68 40 80 70" fill="none" strokeWidth="2" />
  </>
);
const Q1_Answer = () => (
  <>
    <path d="M 15 70 Q 25 45 35 70" fill="none" strokeWidth="2" />
    <path d="M 30 70 Q 40 45 50 70" fill="none" strokeWidth="2" />
    <path d="M 45 70 Q 55 45 65 70" fill="none" strokeWidth="2" />
    <path d="M 60 70 Q 70 45 80 70" fill="none" strokeWidth="2" />
  </>
);
const Q1_WrongA = () => (
  <>
    <path d="M 30 30 Q 50 70 70 30" fill="none" strokeWidth="2" />
  </>
);
const Q1_WrongB = () => (
  <>
    <path d="M 20 70 Q 50 20 80 70" fill="none" strokeWidth="2" />
  </>
);
const Q1_WrongC = () => (
  <>
    <path d="M 15 70 Q 25 45 35 70" fill="none" strokeWidth="2" />
    <path d="M 45 70 Q 55 45 65 70" fill="none" strokeWidth="2" />
  </>
);

// Q2: Line rotation - line rotating clockwise
const Q2_Pattern1 = () => <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={3} />;
const Q2_Pattern2 = () => (
  <line x1={20} y1={50} x2={80} y2={50} strokeWidth={3} stroke="currentColor" />
);
const Q2_Pattern3 = () => (
  <line x1={25} y1={25} x2={75} y2={75} strokeWidth={3} stroke="currentColor" />
);
const Q2_Answer = () => (
  <line x1={75} y1={25} x2={25} y2={75} strokeWidth={3} stroke="currentColor" />
);
const Q2_WrongA = () => <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={3} />;
const Q2_WrongB = () => (
  <line x1={20} y1={50} x2={80} y2={50} strokeWidth={3} stroke="currentColor" />
);
const Q2_WrongC = () => (
  <>
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={3} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={3} stroke="currentColor" />
  </>
);

// Q3: Shapes in grid - pattern with shapes at different positions
const Q3_Pattern1 = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Square x={75} y={75} size={20} strokeWidth={2} />
  </>
);
const Q3_Pattern2 = () => (
  <>
    <Circle x={75} y={25} size={20} strokeWidth={2} />
    <Square x={25} y={75} size={20} strokeWidth={2} />
  </>
);
const Q3_Pattern3 = () => (
  <>
    <Circle x={25} y={75} size={20} strokeWidth={2} />
    <Square x={75} y={25} size={20} strokeWidth={2} />
  </>
);
const Q3_Answer = () => (
  <>
    <Circle x={75} y={75} size={20} strokeWidth={2} />
    <Square x={25} y={25} size={20} strokeWidth={2} />
  </>
);
const Q3_WrongA = () => (
  <>
    <Circle x={50} y={50} size={20} strokeWidth={2} />
    <Square x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q3_WrongB = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Circle x={75} y={75} size={20} strokeWidth={2} />
  </>
);
const Q3_WrongC = () => (
  <>
    <Square x={25} y={25} size={20} strokeWidth={2} />
    <Square x={75} y={75} size={20} strokeWidth={2} />
  </>
);

// Q4: Triangle with internal line rotating
const Q4_Pattern1 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={24} x2={50} y2={76} strokeWidth={2} />
  </>
);
const Q4_Pattern2 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={26} y1={76} x2={65} y2={40} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q4_Pattern3 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={74} y1={76} x2={35} y2={40} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q4_Answer = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={26} y1={76} x2={74} y2={76} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q4_WrongA = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q4_WrongB = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={55} size={15} strokeWidth={2} />
  </>
);
const Q4_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={24} x2={50} y2={76} strokeWidth={2} />
    <line x1={26} y1={76} x2={74} y2={76} strokeWidth={2} stroke="currentColor" />
  </>
);

// Q5: Increasing dots pattern
const Q5_Pattern1 = () => <Dot x={50} y={50} size={10} fill="currentColor" />;
const Q5_Pattern2 = () => (
  <>
    <Dot x={35} y={50} size={10} fill="currentColor" />
    <Dot x={65} y={50} size={10} fill="currentColor" />
  </>
);
const Q5_Pattern3 = () => (
  <>
    <Dot x={50} y={30} size={10} fill="currentColor" />
    <Dot x={30} y={65} size={10} fill="currentColor" />
    <Dot x={70} y={65} size={10} fill="currentColor" />
  </>
);
const Q5_Answer = () => (
  <>
    <Dot x={30} y={30} size={10} fill="currentColor" />
    <Dot x={70} y={30} size={10} fill="currentColor" />
    <Dot x={30} y={70} size={10} fill="currentColor" />
    <Dot x={70} y={70} size={10} fill="currentColor" />
  </>
);
const Q5_WrongA = () => (
  <>
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={50} y={30} size={10} fill="currentColor" />
    <Dot x={50} y={70} size={10} fill="currentColor" />
  </>
);
const Q5_WrongB = () => (
  <>
    <Dot x={25} y={50} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={75} y={50} size={10} fill="currentColor" />
    <Dot x={50} y={30} size={10} fill="currentColor" />
    <Dot x={50} y={70} size={10} fill="currentColor" />
  </>
);
const Q5_WrongC = () => (
  <>
    <Dot x={50} y={25} size={10} fill="currentColor" />
    <Dot x={30} y={50} size={10} fill="currentColor" />
    <Dot x={70} y={50} size={10} fill="currentColor" />
    <Dot x={50} y={75} size={10} fill="currentColor" />
  </>
);

// Q6: Square with increasing internal divisions
const Q6_Pattern1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q6_Pattern2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
  </>
);
const Q6_Pattern3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q6_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q6_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q6_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q6_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);

// Q7: Shape sequence - circle, square, triangle pattern
const Q7_Pattern1 = () => <Circle x={50} y={50} size={50} strokeWidth={2} />;
const Q7_Pattern2 = () => <Square x={50} y={50} size={45} strokeWidth={2} />;
const Q7_Pattern3 = () => <Triangle x={50} y={50} size={50} strokeWidth={2} />;
const Q7_Answer = () => <Circle x={50} y={50} size={50} strokeWidth={2} />;
const Q7_WrongA = () => <Square x={50} y={50} size={45} strokeWidth={2} />;
const Q7_WrongB = () => <Triangle x={50} y={50} size={50} strokeWidth={2} />;
const Q7_WrongC = () => <Diamond x={50} y={50} size={45} strokeWidth={2} />;

// Q8: Arrow rotation clockwise
const Q8_Pattern1 = () => <Arrow x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q8_Pattern2 = () => <Arrow x={50} y={50} size={50} rotation={90} strokeWidth={2} />;
const Q8_Pattern3 = () => <Arrow x={50} y={50} size={50} rotation={180} strokeWidth={2} />;
const Q8_Answer = () => <Arrow x={50} y={50} size={50} rotation={270} strokeWidth={2} />;
const Q8_WrongA = () => <Arrow x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q8_WrongB = () => <Arrow x={50} y={50} size={50} rotation={45} strokeWidth={2} />;
const Q8_WrongC = () => <Arrow x={50} y={50} size={50} rotation={180} strokeWidth={2} />;

// Q9: Nested shapes growing
const Q9_Pattern1 = () => <Circle x={50} y={50} size={25} strokeWidth={2} />;
const Q9_Pattern2 = () => (
  <>
    <Circle x={50} y={50} size={40} strokeWidth={2} />
    <Circle x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q9_Pattern3 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Circle x={50} y={50} size={35} strokeWidth={2} />
    <Circle x={50} y={50} size={15} strokeWidth={2} />
  </>
);
const Q9_Answer = () => (
  <>
    <Circle x={50} y={50} size={70} strokeWidth={2} />
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    <Circle x={50} y={50} size={10} strokeWidth={2} />
  </>
);
const Q9_WrongA = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Circle x={50} y={50} size={35} strokeWidth={2} />
  </>
);
const Q9_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Square x={50} y={50} size={40} strokeWidth={2} />
    <Square x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q9_WrongC = () => (
  <>
    <Circle x={50} y={50} size={70} strokeWidth={2} />
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    <Circle x={50} y={50} size={10} strokeWidth={2} />
    <Dot x={50} y={50} size={6} fill="currentColor" />
  </>
);

// Q10: Star with increasing points filled
const Q10_Pattern1 = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={27} size={6} fill="currentColor" />
  </>
);
const Q10_Pattern2 = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={27} size={6} fill="currentColor" />
    <Dot x={72} y={42} size={6} fill="currentColor" />
  </>
);
const Q10_Pattern3 = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={27} size={6} fill="currentColor" />
    <Dot x={72} y={42} size={6} fill="currentColor" />
    <Dot x={64} y={68} size={6} fill="currentColor" />
  </>
);
const Q10_Answer = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={27} size={6} fill="currentColor" />
    <Dot x={72} y={42} size={6} fill="currentColor" />
    <Dot x={64} y={68} size={6} fill="currentColor" />
    <Dot x={36} y={68} size={6} fill="currentColor" />
  </>
);
const Q10_WrongA = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={27} size={6} fill="currentColor" />
    <Dot x={64} y={68} size={6} fill="currentColor" />
  </>
);
const Q10_WrongB = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q10_WrongC = () => (
  <>
    <Star x={50} y={50} size={60} strokeWidth={2} fill="currentColor" />
  </>
);

// Export pattern data for MCQ structure
export const patterns1to10: MCQ[] = [
  {
    id: "nv-q1",
    question: "Complete the pattern sequence:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2, // Option C (4 curves)
    explanation: "The pattern shows curves increasing by 1 each step: 1→2→3→4 curves.",
  },
  {
    id: "nv-q2",
    question: "What comes next in the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (diagonal line)
    explanation: "The line rotates 45° clockwise each step: vertical→horizontal→diagonal(/)→diagonal(\\).",
  },
  {
    id: "nv-q3",
    question: "Find the missing pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D
    explanation: "Circle and square swap corners each step. The pattern shows them moving to opposite corners.",
  },
  {
    id: "nv-q4",
    question: "Complete the series:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (line at base)
    explanation: "The internal line rotates inside the triangle, ending at the base.",
  },
  {
    id: "nv-q5",
    question: "What pattern completes the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (4 dots in corners)
    explanation: "Dots increase by 1 each step: 1→2→3→4 dots forming geometric patterns.",
  },
  {
    id: "nv-q6",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (3 lines)
    explanation: "Each step adds a new division line to the square: 0→1→2→3 lines.",
  },
  {
    id: "nv-q7",
    question: "Which shape continues the pattern?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0, // Option A (circle - repeating)
    explanation: "The pattern repeats: Circle→Square→Triangle→Circle...",
  },
  {
    id: "nv-q8",
    question: "What comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (arrow pointing left)
    explanation: "The arrow rotates 90° clockwise each step: up→right→down→left.",
  },
  {
    id: "nv-q9",
    question: "Complete the pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (4 circles)
    explanation: "Concentric circles increase by 1 each step: 1→2→3→4 nested circles.",
  },
  {
    id: "nv-q10",
    question: "What figure completes the series?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3, // Option D (4 dots on star)
    explanation: "Dots on star points increase by 1 each step: 1→2→3→4 filled points.",
  },
];

// Export render functions for patterns
export const patternComponents1to10 = {
  Q1: { sequence: [Q1_Pattern1, Q1_Pattern2, Q1_Pattern3], options: [Q1_WrongA, Q1_WrongB, Q1_Answer, Q1_WrongC] },
  Q2: { sequence: [Q2_Pattern1, Q2_Pattern2, Q2_Pattern3], options: [Q2_WrongA, Q2_WrongB, Q2_WrongC, Q2_Answer] },
  Q3: { sequence: [Q3_Pattern1, Q3_Pattern2, Q3_Pattern3], options: [Q3_WrongA, Q3_WrongB, Q3_WrongC, Q3_Answer] },
  Q4: { sequence: [Q4_Pattern1, Q4_Pattern2, Q4_Pattern3], options: [Q4_WrongA, Q4_WrongB, Q4_WrongC, Q4_Answer] },
  Q5: { sequence: [Q5_Pattern1, Q5_Pattern2, Q5_Pattern3], options: [Q5_WrongA, Q5_WrongB, Q5_WrongC, Q5_Answer] },
  Q6: { sequence: [Q6_Pattern1, Q6_Pattern2, Q6_Pattern3], options: [Q6_WrongA, Q6_WrongB, Q6_WrongC, Q6_Answer] },
  Q7: { sequence: [Q7_Pattern1, Q7_Pattern2, Q7_Pattern3], options: [Q7_Answer, Q7_WrongA, Q7_WrongB, Q7_WrongC] },
  Q8: { sequence: [Q8_Pattern1, Q8_Pattern2, Q8_Pattern3], options: [Q8_WrongA, Q8_WrongB, Q8_WrongC, Q8_Answer] },
  Q9: { sequence: [Q9_Pattern1, Q9_Pattern2, Q9_Pattern3], options: [Q9_WrongA, Q9_WrongB, Q9_WrongC, Q9_Answer] },
  Q10: { sequence: [Q10_Pattern1, Q10_Pattern2, Q10_Pattern3], options: [Q10_WrongA, Q10_WrongB, Q10_WrongC, Q10_Answer] },
};
