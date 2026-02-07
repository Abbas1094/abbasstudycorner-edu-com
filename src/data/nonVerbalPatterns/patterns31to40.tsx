// Non-verbal patterns Q31-Q40
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon, Pentagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q31: Plus sign moving in grid
const Q31_Pattern1 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={25} y1={20} x2={25} y2={40} strokeWidth={3} stroke="currentColor" />
    <line x1={15} y1={30} x2={35} y2={30} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_Pattern2 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={35} x2={50} y2={55} strokeWidth={3} stroke="currentColor" />
    <line x1={40} y1={45} x2={60} y2={45} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_Pattern3 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={75} y1={50} x2={75} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={65} y1={60} x2={85} y2={60} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_Answer = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={25} y1={60} x2={25} y2={80} strokeWidth={3} stroke="currentColor" />
    <line x1={15} y1={70} x2={35} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_WrongA = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={40} x2={50} y2={60} strokeWidth={3} stroke="currentColor" />
    <line x1={40} y1={50} x2={60} y2={50} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_WrongB = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <line x1={75} y1={20} x2={75} y2={40} strokeWidth={3} stroke="currentColor" />
    <line x1={65} y1={30} x2={85} y2={30} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q31_WrongC = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <Cross x={50} y={50} size={40} strokeWidth={3} />
  </>
);

// Q32: Shape with internal dots increasing
const Q32_Pattern1 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="currentColor" />
  </>
);
const Q32_Pattern2 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={40} y={50} size={8} fill="currentColor" />
    <Dot x={60} y={50} size={8} fill="currentColor" />
  </>
);
const Q32_Pattern3 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={35} size={8} fill="currentColor" />
    <Dot x={35} y={58} size={8} fill="currentColor" />
    <Dot x={65} y={58} size={8} fill="currentColor" />
  </>
);
const Q32_Answer = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={35} y={40} size={8} fill="currentColor" />
    <Dot x={65} y={40} size={8} fill="currentColor" />
    <Dot x={35} y={60} size={8} fill="currentColor" />
    <Dot x={65} y={60} size={8} fill="currentColor" />
  </>
);
const Q32_WrongA = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="currentColor" />
  </>
);
const Q32_WrongB = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={35} size={8} fill="currentColor" />
    <Dot x={50} y={65} size={8} fill="currentColor" />
  </>
);
const Q32_WrongC = () => (
  <>
    <Hexagon x={50} y={50} size={60} fill="currentColor" strokeWidth={2} />
  </>
);

// Q33: Spiral pattern increasing
const Q33_Pattern1 = () => (
  <>
    <path d="M 50 50 Q 50 40 60 40" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q33_Pattern2 = () => (
  <>
    <path d="M 50 50 Q 50 40 60 40 Q 70 40 70 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q33_Pattern3 = () => (
  <>
    <path d="M 50 50 Q 50 40 60 40 Q 70 40 70 50 Q 70 65 55 65" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q33_Answer = () => (
  <>
    <path d="M 50 50 Q 50 40 60 40 Q 70 40 70 50 Q 70 65 55 65 Q 35 65 35 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q33_WrongA = () => (
  <>
    <path d="M 50 50 Q 50 40 60 40" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q33_WrongB = () => (
  <>
    <Circle x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q33_WrongC = () => (
  <>
    <path d="M 30 50 L 70 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);

// Q34: Diamond with rotating line
const Q34_Pattern1 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={50} y1={25} x2={50} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_Pattern2 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={75} y1={50} x2={50} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_Pattern3 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={50} y1={75} x2={50} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_Answer = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={25} y1={50} x2={50} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_WrongA = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={50} y1={25} x2={50} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_WrongB = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <line x1={25} y1={25} x2={75} y2={75} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q34_WrongC = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
  </>
);

// Q35: Analogy pattern - A:B as C:?
const Q35_Pattern1 = () => (
  <>
    <Circle x={30} y={50} size={30} strokeWidth={2} />
    <text x={50} y={55} fontSize={20} fill="currentColor">:</text>
    <Circle x={70} y={50} size={30} fill="currentColor" strokeWidth={2} />
  </>
);
const Q35_Pattern2 = () => (
  <>
    <text x={30} y={55} fontSize={20} fill="currentColor">as</text>
  </>
);
const Q35_Pattern3 = () => (
  <>
    <Square x={30} y={50} size={30} strokeWidth={2} />
    <text x={50} y={55} fontSize={20} fill="currentColor">:</text>
    <text x={70} y={55} fontSize={24} fill="currentColor">?</text>
  </>
);
const Q35_Answer = () => (
  <>
    <Square x={50} y={50} size={40} fill="currentColor" strokeWidth={2} />
  </>
);
const Q35_WrongA = () => (
  <>
    <Square x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q35_WrongB = () => (
  <>
    <Circle x={50} y={50} size={40} fill="currentColor" strokeWidth={2} />
  </>
);
const Q35_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={40} fill="currentColor" strokeWidth={2} />
  </>
);

// Q36: Shape sides increasing
const Q36_Pattern1 = () => <Triangle x={50} y={50} size={50} strokeWidth={2} />;
const Q36_Pattern2 = () => <Square x={50} y={50} size={45} strokeWidth={2} />;
const Q36_Pattern3 = () => <Pentagon x={50} y={50} size={50} strokeWidth={2} />;
const Q36_Answer = () => <Hexagon x={50} y={50} size={50} strokeWidth={2} />;
const Q36_WrongA = () => <Triangle x={50} y={50} size={50} strokeWidth={2} />;
const Q36_WrongB = () => <Circle x={50} y={50} size={50} strokeWidth={2} />;
const Q36_WrongC = () => <Star x={50} y={50} size={50} strokeWidth={2} />;

// Q37: Bars pattern increasing
const Q37_Pattern1 = () => (
  <>
    <rect x={45} y={40} width={10} height={40} fill="currentColor" />
  </>
);
const Q37_Pattern2 = () => (
  <>
    <rect x={35} y={40} width={10} height={40} fill="currentColor" />
    <rect x={55} y={30} width={10} height={50} fill="currentColor" />
  </>
);
const Q37_Pattern3 = () => (
  <>
    <rect x={25} y={40} width={10} height={40} fill="currentColor" />
    <rect x={45} y={30} width={10} height={50} fill="currentColor" />
    <rect x={65} y={20} width={10} height={60} fill="currentColor" />
  </>
);
const Q37_Answer = () => (
  <>
    <rect x={15} y={40} width={10} height={40} fill="currentColor" />
    <rect x={35} y={30} width={10} height={50} fill="currentColor" />
    <rect x={55} y={20} width={10} height={60} fill="currentColor" />
    <rect x={75} y={10} width={10} height={70} fill="currentColor" />
  </>
);
const Q37_WrongA = () => (
  <>
    <rect x={45} y={40} width={10} height={40} fill="currentColor" />
  </>
);
const Q37_WrongB = () => (
  <>
    <rect x={25} y={20} width={50} height={60} fill="currentColor" />
  </>
);
const Q37_WrongC = () => (
  <>
    <rect x={15} y={60} width={10} height={20} fill="currentColor" />
    <rect x={35} y={50} width={10} height={30} fill="currentColor" />
    <rect x={55} y={40} width={10} height={40} fill="currentColor" />
    <rect x={75} y={30} width={10} height={50} fill="currentColor" />
  </>
);

// Q38: Circle with segments
const Q38_Pattern1 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q38_Pattern2 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q38_Pattern3 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
    <line x1={29} y1={29} x2={71} y2={71} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q38_Answer = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
    <line x1={29} y1={29} x2={71} y2={71} strokeWidth={2} stroke="currentColor" />
    <line x1={71} y1={29} x2={29} y2={71} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q38_WrongA = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q38_WrongB = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q38_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} fill="currentColor" strokeWidth={2} />
  </>
);

// Q39: Arrows pointing pattern
const Q39_Pattern1 = () => (
  <>
    <Arrow x={30} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q39_Pattern2 = () => (
  <>
    <Arrow x={25} y={50} size={30} rotation={0} strokeWidth={2} />
    <Arrow x={55} y={50} size={30} rotation={0} strokeWidth={2} />
  </>
);
const Q39_Pattern3 = () => (
  <>
    <Arrow x={20} y={50} size={25} rotation={0} strokeWidth={2} />
    <Arrow x={45} y={50} size={25} rotation={0} strokeWidth={2} />
    <Arrow x={70} y={50} size={25} rotation={0} strokeWidth={2} />
  </>
);
const Q39_Answer = () => (
  <>
    <Arrow x={15} y={50} size={20} rotation={0} strokeWidth={2} />
    <Arrow x={35} y={50} size={20} rotation={0} strokeWidth={2} />
    <Arrow x={55} y={50} size={20} rotation={0} strokeWidth={2} />
    <Arrow x={75} y={50} size={20} rotation={0} strokeWidth={2} />
  </>
);
const Q39_WrongA = () => (
  <>
    <Arrow x={50} y={50} size={50} rotation={0} strokeWidth={2} />
  </>
);
const Q39_WrongB = () => (
  <>
    <Arrow x={30} y={50} size={35} rotation={180} strokeWidth={2} />
    <Arrow x={70} y={50} size={35} rotation={180} strokeWidth={2} />
  </>
);
const Q39_WrongC = () => (
  <>
    <Arrow x={50} y={30} size={25} rotation={0} strokeWidth={2} />
    <Arrow x={50} y={70} size={25} rotation={180} strokeWidth={2} />
  </>
);

// Q40: X pattern with dots
const Q40_Pattern1 = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const Q40_Pattern2 = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={35} y={35} size={8} fill="currentColor" />
    <Dot x={65} y={65} size={8} fill="currentColor" />
  </>
);
const Q40_Pattern3 = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={35} y={35} size={8} fill="currentColor" />
    <Dot x={65} y={65} size={8} fill="currentColor" />
    <Dot x={65} y={35} size={8} fill="currentColor" />
    <Dot x={35} y={65} size={8} fill="currentColor" />
  </>
);
const Q40_Answer = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={35} y={35} size={8} fill="currentColor" />
    <Dot x={65} y={65} size={8} fill="currentColor" />
    <Dot x={65} y={35} size={8} fill="currentColor" />
    <Dot x={35} y={65} size={8} fill="currentColor" />
    <Dot x={24} y={24} size={6} fill="currentColor" />
    <Dot x={76} y={76} size={6} fill="currentColor" />
    <Dot x={76} y={24} size={6} fill="currentColor" />
    <Dot x={24} y={76} size={6} fill="currentColor" />
  </>
);
const Q40_WrongA = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q40_WrongB = () => (
  <>
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const Q40_WrongC = () => (
  <>
    <Cross x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);

// Export MCQ data
export const patterns31to40: MCQ[] = [
  {
    id: "nv-q31",
    question: "What comes next in the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The plus sign moves diagonally across the grid: top-left→center→bottom-right→bottom-left.",
  },
  {
    id: "nv-q32",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Dots inside the hexagon increase by 1 each step: 1→2→3→4 dots.",
  },
  {
    id: "nv-q33",
    question: "Complete the pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The spiral grows by adding another quarter turn each step.",
  },
  {
    id: "nv-q34",
    question: "Which figure continues the series?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The line inside the diamond rotates 90° clockwise: top→right→bottom→left.",
  },
  {
    id: "nv-q35",
    question: "Complete the analogy:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Empty circle is to filled circle as empty square is to filled square.",
  },
  {
    id: "nv-q36",
    question: "What comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Number of sides increases: 3→4→5→6 (triangle→square→pentagon→hexagon).",
  },
  {
    id: "nv-q37",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Bar count increases and heights grow progressively: 1→2→3→4 bars.",
  },
  {
    id: "nv-q38",
    question: "Complete the sequence:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "A new division line is added each step: 2→4→6→8 segments.",
  },
  {
    id: "nv-q39",
    question: "Which figure comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Number of arrows increases by 1 each step: 1→2→3→4 arrows.",
  },
  {
    id: "nv-q40",
    question: "What pattern comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Dots are added along the X lines, moving outward with each step.",
  },
];

// Export pattern render functions
export const patternComponents31to40 = {
  Q31: { sequence: [Q31_Pattern1, Q31_Pattern2, Q31_Pattern3], options: [Q31_WrongA, Q31_WrongB, Q31_WrongC, Q31_Answer] },
  Q32: { sequence: [Q32_Pattern1, Q32_Pattern2, Q32_Pattern3], options: [Q32_WrongA, Q32_WrongB, Q32_WrongC, Q32_Answer] },
  Q33: { sequence: [Q33_Pattern1, Q33_Pattern2, Q33_Pattern3], options: [Q33_WrongA, Q33_WrongB, Q33_WrongC, Q33_Answer] },
  Q34: { sequence: [Q34_Pattern1, Q34_Pattern2, Q34_Pattern3], options: [Q34_WrongA, Q34_WrongB, Q34_WrongC, Q34_Answer] },
  Q35: { sequence: [Q35_Pattern1, Q35_Pattern2, Q35_Pattern3], options: [Q35_WrongA, Q35_WrongB, Q35_WrongC, Q35_Answer] },
  Q36: { sequence: [Q36_Pattern1, Q36_Pattern2, Q36_Pattern3], options: [Q36_WrongA, Q36_WrongB, Q36_WrongC, Q36_Answer] },
  Q37: { sequence: [Q37_Pattern1, Q37_Pattern2, Q37_Pattern3], options: [Q37_WrongA, Q37_WrongB, Q37_WrongC, Q37_Answer] },
  Q38: { sequence: [Q38_Pattern1, Q38_Pattern2, Q38_Pattern3], options: [Q38_WrongA, Q38_WrongB, Q38_WrongC, Q38_Answer] },
  Q39: { sequence: [Q39_Pattern1, Q39_Pattern2, Q39_Pattern3], options: [Q39_WrongA, Q39_WrongB, Q39_WrongC, Q39_Answer] },
  Q40: { sequence: [Q40_Pattern1, Q40_Pattern2, Q40_Pattern3], options: [Q40_WrongA, Q40_WrongB, Q40_WrongC, Q40_Answer] },
};
