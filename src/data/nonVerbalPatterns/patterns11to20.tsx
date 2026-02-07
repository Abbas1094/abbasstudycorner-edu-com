// Non-verbal patterns Q11-Q20
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon, Pentagon, QuestionMark } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q11: Diamond rotating with dots
const Q11_Pattern1 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={25} size={6} fill="currentColor" />
  </>
);
const Q11_Pattern2 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={75} y={50} size={6} fill="currentColor" />
  </>
);
const Q11_Pattern3 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={75} size={6} fill="currentColor" />
  </>
);
const Q11_Answer = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={25} y={50} size={6} fill="currentColor" />
  </>
);
const Q11_WrongA = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={25} size={6} fill="currentColor" />
  </>
);
const Q11_WrongB = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={50} size={6} fill="currentColor" />
  </>
);
const Q11_WrongC = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
  </>
);

// Q12: Cross rotating
const Q12_Pattern1 = () => <Cross x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q12_Pattern2 = () => <Cross x={50} y={50} size={50} rotation={15} strokeWidth={2} />;
const Q12_Pattern3 = () => <Cross x={50} y={50} size={50} rotation={30} strokeWidth={2} />;
const Q12_Answer = () => <Cross x={50} y={50} size={50} rotation={45} strokeWidth={2} />;
const Q12_WrongA = () => <Cross x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q12_WrongB = () => <Cross x={50} y={50} size={50} rotation={60} strokeWidth={2} />;
const Q12_WrongC = () => <Cross x={50} y={50} size={50} rotation={90} strokeWidth={2} />;

// Q13: Hexagon with lines adding
const Q13_Pattern1 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
  </>
);
const Q13_Pattern2 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={24} y1={35} x2={76} y2={65} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q13_Pattern3 = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={24} y1={35} x2={76} y2={65} strokeWidth={2} stroke="currentColor" />
    <line x1={24} y1={65} x2={76} y2={35} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q13_Answer = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={24} y1={35} x2={76} y2={65} strokeWidth={2} stroke="currentColor" />
    <line x1={24} y1={65} x2={76} y2={35} strokeWidth={2} stroke="currentColor" />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q13_WrongA = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q13_WrongB = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Line x1={50} y1={20} x2={50} y2={80} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q13_WrongC = () => (
  <>
    <Hexagon x={50} y={50} size={60} fill="currentColor" strokeWidth={2} />
  </>
);

// Q14: Shape size decreasing in sequence
const Q14_Pattern1 = () => <Square x={50} y={50} size={60} strokeWidth={2} />;
const Q14_Pattern2 = () => <Square x={50} y={50} size={45} strokeWidth={2} />;
const Q14_Pattern3 = () => <Square x={50} y={50} size={30} strokeWidth={2} />;
const Q14_Answer = () => <Square x={50} y={50} size={15} strokeWidth={2} />;
const Q14_WrongA = () => <Square x={50} y={50} size={60} strokeWidth={2} />;
const Q14_WrongB = () => <Square x={50} y={50} size={25} strokeWidth={2} />;
const Q14_WrongC = () => <Circle x={50} y={50} size={15} strokeWidth={2} />;

// Q15: Pentagon with internal shape changing
const Q15_Pattern1 = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q15_Pattern2 = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Square x={50} y={50} size={18} strokeWidth={2} />
  </>
);
const Q15_Pattern3 = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Triangle x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q15_Answer = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Diamond x={50} y={50} size={18} strokeWidth={2} />
  </>
);
const Q15_WrongA = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q15_WrongB = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
    <Pentagon x={50} y={50} size={25} strokeWidth={2} />
  </>
);
const Q15_WrongC = () => (
  <>
    <Pentagon x={50} y={50} size={60} strokeWidth={2} />
  </>
);

// Q16: Two shapes swapping positions
const Q16_Pattern1 = () => (
  <>
    <Circle x={30} y={50} size={30} strokeWidth={2} />
    <Triangle x={70} y={50} size={30} strokeWidth={2} />
  </>
);
const Q16_Pattern2 = () => (
  <>
    <Triangle x={30} y={50} size={30} strokeWidth={2} />
    <Circle x={70} y={50} size={30} strokeWidth={2} />
  </>
);
const Q16_Pattern3 = () => (
  <>
    <Circle x={30} y={50} size={30} strokeWidth={2} />
    <Triangle x={70} y={50} size={30} strokeWidth={2} />
  </>
);
const Q16_Answer = () => (
  <>
    <Triangle x={30} y={50} size={30} strokeWidth={2} />
    <Circle x={70} y={50} size={30} strokeWidth={2} />
  </>
);
const Q16_WrongA = () => (
  <>
    <Circle x={30} y={50} size={30} strokeWidth={2} />
    <Triangle x={70} y={50} size={30} strokeWidth={2} />
  </>
);
const Q16_WrongB = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    <Triangle x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q16_WrongC = () => (
  <>
    <Square x={30} y={50} size={30} strokeWidth={2} />
    <Diamond x={70} y={50} size={30} strokeWidth={2} />
  </>
);

// Q17: L-shape rotating
const Q17_Pattern1 = () => (
  <>
    <line x1={30} y1={30} x2={30} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={30} y1={70} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_Pattern2 = () => (
  <>
    <line x1={30} y1={30} x2={70} y2={30} strokeWidth={3} stroke="currentColor" />
    <line x1={30} y1={30} x2={30} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_Pattern3 = () => (
  <>
    <line x1={30} y1={30} x2={70} y2={30} strokeWidth={3} stroke="currentColor" />
    <line x1={70} y1={30} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_Answer = () => (
  <>
    <line x1={30} y1={70} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={70} y1={30} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_WrongA = () => (
  <>
    <line x1={30} y1={30} x2={30} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={30} y1={70} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_WrongB = () => (
  <>
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={3} stroke="currentColor" />
    <line x1={50} y1={30} x2={50} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q17_WrongC = () => (
  <>
    <line x1={30} y1={30} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
  </>
);

// Q18: Shape with shading pattern
const Q18_Pattern1 = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <path d="M 25 50 A 25 25 0 0 1 75 50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q18_Pattern2 = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <path d="M 50 25 A 25 25 0 0 1 50 75" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q18_Pattern3 = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <path d="M 75 50 A 25 25 0 0 1 25 50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q18_Answer = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <path d="M 50 75 A 25 25 0 0 1 50 25" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q18_WrongA = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
    <path d="M 25 50 A 25 25 0 0 1 75 50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q18_WrongB = () => (
  <>
    <Circle x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />
  </>
);
const Q18_WrongC = () => (
  <>
    <Circle x={50} y={50} size={50} strokeWidth={2} />
  </>
);

// Q19: Dots in pattern - diagonal
const Q19_Pattern1 = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
  </>
);
const Q19_Pattern2 = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const Q19_Pattern3 = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={75} y={75} size={10} fill="currentColor" />
  </>
);
const Q19_Answer = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={75} y={75} size={10} fill="currentColor" />
    <Dot x={25} y={75} size={10} fill="currentColor" />
  </>
);
const Q19_WrongA = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={75} y={75} size={10} fill="currentColor" />
    <Dot x={75} y={25} size={10} fill="currentColor" />
  </>
);
const Q19_WrongB = () => (
  <>
    <Dot x={50} y={25} size={10} fill="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
    <Dot x={50} y={75} size={10} fill="currentColor" />
  </>
);
const Q19_WrongC = () => (
  <>
    <Dot x={25} y={25} size={10} fill="currentColor" />
    <Dot x={75} y={75} size={10} fill="currentColor" />
  </>
);

// Q20: Triangle orientation flip
const Q20_Pattern1 = () => <Triangle x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q20_Pattern2 = () => <Triangle x={50} y={50} size={50} rotation={180} strokeWidth={2} />;
const Q20_Pattern3 = () => <Triangle x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q20_Answer = () => <Triangle x={50} y={50} size={50} rotation={180} strokeWidth={2} />;
const Q20_WrongA = () => <Triangle x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const Q20_WrongB = () => <Triangle x={50} y={50} size={50} rotation={90} strokeWidth={2} />;
const Q20_WrongC = () => <Triangle x={50} y={50} size={50} rotation={270} strokeWidth={2} />;

// Export MCQ data
export const patterns11to20: MCQ[] = [
  {
    id: "nv-q11",
    question: "What comes next in the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The dot rotates clockwise around the diamond corners: top→right→bottom→left.",
  },
  {
    id: "nv-q12",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The cross rotates 15° clockwise each step: 0°→15°→30°→45°.",
  },
  {
    id: "nv-q13",
    question: "Complete the pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "A new line is added inside the hexagon each step, creating more divisions.",
  },
  {
    id: "nv-q14",
    question: "Which figure continues the series?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The square decreases in size by 15 units each step: 60→45→30→15.",
  },
  {
    id: "nv-q15",
    question: "What comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The inner shape changes: circle→square→triangle→diamond (reducing sides then different shape).",
  },
  {
    id: "nv-q16",
    question: "Find the missing pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The circle and triangle swap positions alternately. Pattern repeats with swap.",
  },
  {
    id: "nv-q17",
    question: "Complete the sequence:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The L-shape rotates 90° clockwise each step.",
  },
  {
    id: "nv-q18",
    question: "Which figure completes the pattern?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The shaded half of the circle rotates 90° clockwise each step.",
  },
  {
    id: "nv-q19",
    question: "What pattern comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Dots are added following a pattern: diagonal line then corner addition.",
  },
  {
    id: "nv-q20",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The triangle flips (rotates 180°) alternately: up→down→up→down.",
  },
];

// Export pattern render functions
export const patternComponents11to20 = {
  Q11: { sequence: [Q11_Pattern1, Q11_Pattern2, Q11_Pattern3], options: [Q11_WrongA, Q11_WrongB, Q11_WrongC, Q11_Answer] },
  Q12: { sequence: [Q12_Pattern1, Q12_Pattern2, Q12_Pattern3], options: [Q12_WrongA, Q12_WrongB, Q12_WrongC, Q12_Answer] },
  Q13: { sequence: [Q13_Pattern1, Q13_Pattern2, Q13_Pattern3], options: [Q13_WrongA, Q13_WrongB, Q13_WrongC, Q13_Answer] },
  Q14: { sequence: [Q14_Pattern1, Q14_Pattern2, Q14_Pattern3], options: [Q14_WrongA, Q14_WrongB, Q14_WrongC, Q14_Answer] },
  Q15: { sequence: [Q15_Pattern1, Q15_Pattern2, Q15_Pattern3], options: [Q15_WrongA, Q15_WrongB, Q15_WrongC, Q15_Answer] },
  Q16: { sequence: [Q16_Pattern1, Q16_Pattern2, Q16_Pattern3], options: [Q16_WrongA, Q16_WrongB, Q16_WrongC, Q16_Answer] },
  Q17: { sequence: [Q17_Pattern1, Q17_Pattern2, Q17_Pattern3], options: [Q17_WrongA, Q17_WrongB, Q17_WrongC, Q17_Answer] },
  Q18: { sequence: [Q18_Pattern1, Q18_Pattern2, Q18_Pattern3], options: [Q18_WrongA, Q18_WrongB, Q18_WrongC, Q18_Answer] },
  Q19: { sequence: [Q19_Pattern1, Q19_Pattern2, Q19_Pattern3], options: [Q19_WrongA, Q19_WrongB, Q19_WrongC, Q19_Answer] },
  Q20: { sequence: [Q20_Pattern1, Q20_Pattern2, Q20_Pattern3], options: [Q20_WrongA, Q20_WrongB, Q20_WrongC, Q20_Answer] },
};
