// Non-verbal patterns Q21-Q30
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon, Pentagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q21: Grid with shapes filling in
const Q21_Pattern1 = () => (
  <>
    <rect x={10} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
  </>
);
const Q21_Pattern2 = () => (
  <>
    <rect x={10} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
    <Circle x={51} y={51} size={18} strokeWidth={2} />
  </>
);
const Q21_Pattern3 = () => (
  <>
    <rect x={10} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
    <Circle x={51} y={51} size={18} strokeWidth={2} />
    <Circle x={79} y={79} size={18} strokeWidth={2} />
  </>
);
const Q21_Answer = () => (
  <>
    <rect x={10} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={38} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={38} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={66} y={66} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
    <Circle x={51} y={51} size={18} strokeWidth={2} />
    <Circle x={79} y={79} size={18} strokeWidth={2} />
    <Circle x={79} y={23} size={18} strokeWidth={2} />
  </>
);
const Q21_WrongA = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q21_WrongB = () => (
  <>
    <rect x={10} y={10} width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
    <Circle x={23} y={51} size={18} strokeWidth={2} />
  </>
);
const Q21_WrongC = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <Circle x={23} y={23} size={18} strokeWidth={2} />
    <Circle x={77} y={77} size={18} strokeWidth={2} />
  </>
);

// Q22: Mirror reflection pattern
const Q22_Pattern1 = () => (
  <>
    <Triangle x={35} y={50} size={40} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_Pattern2 = () => (
  <>
    <Square x={35} y={50} size={30} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_Pattern3 = () => (
  <>
    <Pentagon x={35} y={50} size={35} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_Answer = () => (
  <>
    <Pentagon x={65} y={50} size={35} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_WrongA = () => (
  <>
    <Pentagon x={35} y={50} size={35} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_WrongB = () => (
  <>
    <Pentagon x={65} y={50} size={35} rotation={180} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q22_WrongC = () => (
  <>
    <Hexagon x={65} y={50} size={35} rotation={0} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);

// Q23: Overlapping circles pattern
const Q23_Pattern1 = () => (
  <>
    <Circle x={35} y={50} size={40} strokeWidth={2} />
    <Circle x={65} y={50} size={40} strokeWidth={2} />
  </>
);
const Q23_Pattern2 = () => (
  <>
    <Circle x={30} y={40} size={35} strokeWidth={2} />
    <Circle x={50} y={60} size={35} strokeWidth={2} />
    <Circle x={70} y={40} size={35} strokeWidth={2} />
  </>
);
const Q23_Pattern3 = () => (
  <>
    <Circle x={25} y={35} size={30} strokeWidth={2} />
    <Circle x={50} y={35} size={30} strokeWidth={2} />
    <Circle x={75} y={35} size={30} strokeWidth={2} />
    <Circle x={37} y={65} size={30} strokeWidth={2} />
    <Circle x={63} y={65} size={30} strokeWidth={2} />
  </>
);
const Q23_Answer = () => (
  <>
    <Circle x={25} y={30} size={25} strokeWidth={2} />
    <Circle x={50} y={30} size={25} strokeWidth={2} />
    <Circle x={75} y={30} size={25} strokeWidth={2} />
    <Circle x={37} y={55} size={25} strokeWidth={2} />
    <Circle x={63} y={55} size={25} strokeWidth={2} />
    <Circle x={50} y={80} size={25} strokeWidth={2} />
  </>
);
const Q23_WrongA = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q23_WrongB = () => (
  <>
    <Circle x={35} y={50} size={40} strokeWidth={2} />
    <Circle x={65} y={50} size={40} strokeWidth={2} />
  </>
);
const Q23_WrongC = () => (
  <>
    <Circle x={25} y={25} size={25} strokeWidth={2} />
    <Circle x={75} y={25} size={25} strokeWidth={2} />
    <Circle x={25} y={75} size={25} strokeWidth={2} />
    <Circle x={75} y={75} size={25} strokeWidth={2} />
  </>
);

// Q24: Shape with alternating fills
const Q24_Pattern1 = () => (
  <>
    <Square x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />
  </>
);
const Q24_Pattern2 = () => (
  <>
    <Square x={50} y={50} size={50} fill="none" strokeWidth={2} />
  </>
);
const Q24_Pattern3 = () => (
  <>
    <Square x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />
  </>
);
const Q24_Answer = () => (
  <>
    <Square x={50} y={50} size={50} fill="none" strokeWidth={2} />
  </>
);
const Q24_WrongA = () => (
  <>
    <Square x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />
  </>
);
const Q24_WrongB = () => (
  <>
    <Circle x={50} y={50} size={50} fill="none" strokeWidth={2} />
  </>
);
const Q24_WrongC = () => (
  <>
    <Square x={50} y={50} size={30} fill="none" strokeWidth={2} />
  </>
);

// Q25: Clock-like hands rotating
const Q25_Pattern1 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={50} y2={25} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_Pattern2 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={72} y2={38} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_Pattern3 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={75} y2={50} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_Answer = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={72} y2={62} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_WrongA = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={50} y2={25} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_WrongB = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={50} y2={75} strokeWidth={3} stroke="currentColor" />
  </>
);
const Q25_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={50} x2={25} y2={50} strokeWidth={3} stroke="currentColor" />
  </>
);

// Q26: Zigzag pattern increasing
const Q26_Pattern1 = () => (
  <>
    <polyline points="20,70 35,30 50,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_Pattern2 = () => (
  <>
    <polyline points="15,70 27,30 39,70 51,30 63,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_Pattern3 = () => (
  <>
    <polyline points="10,70 20,30 30,70 40,30 50,70 60,30 70,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_Answer = () => (
  <>
    <polyline points="8,70 16,30 24,70 32,30 40,70 48,30 56,70 64,30 72,70 80,30 88,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_WrongA = () => (
  <>
    <polyline points="20,70 35,30 50,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_WrongB = () => (
  <>
    <line x1={20} y1={70} x2={80} y2={30} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q26_WrongC = () => (
  <>
    <polyline points="20,50 40,30 60,50 80,70" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);

// Q27: Nested squares rotating
const Q27_Pattern1 = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q27_Pattern2 = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={15} strokeWidth={2} />
  </>
);
const Q27_Pattern3 = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={30} strokeWidth={2} />
  </>
);
const Q27_Answer = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={45} strokeWidth={2} />
  </>
);
const Q27_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q27_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} rotation={45} strokeWidth={2} />
    <Square x={50} y={50} size={35} rotation={45} strokeWidth={2} />
  </>
);
const Q27_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} rotation={0} strokeWidth={2} />
    <Circle x={50} y={50} size={35} strokeWidth={2} />
  </>
);

// Q28: T-shape rotating
const Q28_Pattern1 = () => (
  <>
    <line x1={20} y1={30} x2={80} y2={30} strokeWidth={4} stroke="currentColor" />
    <line x1={50} y1={30} x2={50} y2={75} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_Pattern2 = () => (
  <>
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={4} stroke="currentColor" />
    <line x1={25} y1={50} x2={70} y2={50} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_Pattern3 = () => (
  <>
    <line x1={20} y1={70} x2={80} y2={70} strokeWidth={4} stroke="currentColor" />
    <line x1={50} y1={25} x2={50} y2={70} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_Answer = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={4} stroke="currentColor" />
    <line x1={30} y1={50} x2={75} y2={50} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_WrongA = () => (
  <>
    <line x1={20} y1={30} x2={80} y2={30} strokeWidth={4} stroke="currentColor" />
    <line x1={50} y1={30} x2={50} y2={75} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_WrongB = () => (
  <>
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={4} stroke="currentColor" />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={4} stroke="currentColor" />
  </>
);
const Q28_WrongC = () => (
  <>
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={4} stroke="currentColor" />
  </>
);

// Q29: Shapes in corners pattern
const Q29_Pattern1 = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Square x={75} y={25} size={18} strokeWidth={2} />
    <Triangle x={25} y={75} size={20} strokeWidth={2} />
    <Diamond x={75} y={75} size={18} strokeWidth={2} />
  </>
);
const Q29_Pattern2 = () => (
  <>
    <Square x={25} y={25} size={18} strokeWidth={2} />
    <Triangle x={75} y={25} size={20} strokeWidth={2} />
    <Diamond x={25} y={75} size={18} strokeWidth={2} />
    <Circle x={75} y={75} size={20} strokeWidth={2} />
  </>
);
const Q29_Pattern3 = () => (
  <>
    <Triangle x={25} y={25} size={20} strokeWidth={2} />
    <Diamond x={75} y={25} size={18} strokeWidth={2} />
    <Circle x={25} y={75} size={20} strokeWidth={2} />
    <Square x={75} y={75} size={18} strokeWidth={2} />
  </>
);
const Q29_Answer = () => (
  <>
    <Diamond x={25} y={25} size={18} strokeWidth={2} />
    <Circle x={75} y={25} size={20} strokeWidth={2} />
    <Square x={25} y={75} size={18} strokeWidth={2} />
    <Triangle x={75} y={75} size={20} strokeWidth={2} />
  </>
);
const Q29_WrongA = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Square x={75} y={25} size={18} strokeWidth={2} />
    <Triangle x={25} y={75} size={20} strokeWidth={2} />
    <Diamond x={75} y={75} size={18} strokeWidth={2} />
  </>
);
const Q29_WrongB = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Circle x={75} y={25} size={20} strokeWidth={2} />
    <Circle x={25} y={75} size={20} strokeWidth={2} />
    <Circle x={75} y={75} size={20} strokeWidth={2} />
  </>
);
const Q29_WrongC = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
  </>
);

// Q30: Wave amplitude increasing
const Q30_Pattern1 = () => (
  <>
    <path d="M 10 50 Q 25 45 40 50 Q 55 55 70 50 Q 85 45 100 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_Pattern2 = () => (
  <>
    <path d="M 10 50 Q 25 40 40 50 Q 55 60 70 50 Q 85 40 100 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_Pattern3 = () => (
  <>
    <path d="M 10 50 Q 25 30 40 50 Q 55 70 70 50 Q 85 30 100 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_Answer = () => (
  <>
    <path d="M 10 50 Q 25 20 40 50 Q 55 80 70 50 Q 85 20 100 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_WrongA = () => (
  <>
    <path d="M 10 50 Q 25 45 40 50 Q 55 55 70 50 Q 85 45 100 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_WrongB = () => (
  <>
    <line x1={10} y1={50} x2={90} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q30_WrongC = () => (
  <>
    <path d="M 10 30 Q 50 70 90 30" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);

// Export MCQ data
export const patterns21to30: MCQ[] = [
  {
    id: "nv-q21",
    question: "What comes next in the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Circles fill in along the diagonal, then continue to the next corner.",
  },
  {
    id: "nv-q22",
    question: "Find the mirror reflection:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The shape on the left should appear on the right side of the mirror line.",
  },
  {
    id: "nv-q23",
    question: "Complete the pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Circles form a triangular pattern, adding one more row each step.",
  },
  {
    id: "nv-q24",
    question: "Which figure continues the series?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The square alternates between filled and empty: filled→empty→filled→empty.",
  },
  {
    id: "nv-q25",
    question: "What comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The clock hand rotates 45° clockwise each step.",
  },
  {
    id: "nv-q26",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The zigzag pattern adds 2 more peaks each step: 1→2→3→4 peaks.",
  },
  {
    id: "nv-q27",
    question: "Complete the sequence:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The inner square rotates 15° clockwise each step: 0°→15°→30°→45°.",
  },
  {
    id: "nv-q28",
    question: "Which figure comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The T-shape rotates 90° clockwise each step.",
  },
  {
    id: "nv-q29",
    question: "What pattern comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Each shape rotates clockwise to the next corner position.",
  },
  {
    id: "nv-q30",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The wave amplitude increases by 10 units each step.",
  },
];

// Export pattern render functions
export const patternComponents21to30 = {
  Q21: { sequence: [Q21_Pattern1, Q21_Pattern2, Q21_Pattern3], options: [Q21_WrongA, Q21_WrongB, Q21_WrongC, Q21_Answer] },
  Q22: { sequence: [Q22_Pattern1, Q22_Pattern2, Q22_Pattern3], options: [Q22_WrongA, Q22_WrongB, Q22_WrongC, Q22_Answer] },
  Q23: { sequence: [Q23_Pattern1, Q23_Pattern2, Q23_Pattern3], options: [Q23_WrongA, Q23_WrongB, Q23_WrongC, Q23_Answer] },
  Q24: { sequence: [Q24_Pattern1, Q24_Pattern2, Q24_Pattern3], options: [Q24_WrongA, Q24_WrongB, Q24_WrongC, Q24_Answer] },
  Q25: { sequence: [Q25_Pattern1, Q25_Pattern2, Q25_Pattern3], options: [Q25_WrongA, Q25_WrongB, Q25_WrongC, Q25_Answer] },
  Q26: { sequence: [Q26_Pattern1, Q26_Pattern2, Q26_Pattern3], options: [Q26_WrongA, Q26_WrongB, Q26_WrongC, Q26_Answer] },
  Q27: { sequence: [Q27_Pattern1, Q27_Pattern2, Q27_Pattern3], options: [Q27_WrongA, Q27_WrongB, Q27_WrongC, Q27_Answer] },
  Q28: { sequence: [Q28_Pattern1, Q28_Pattern2, Q28_Pattern3], options: [Q28_WrongA, Q28_WrongB, Q28_WrongC, Q28_Answer] },
  Q29: { sequence: [Q29_Pattern1, Q29_Pattern2, Q29_Pattern3], options: [Q29_WrongA, Q29_WrongB, Q29_WrongC, Q29_Answer] },
  Q30: { sequence: [Q30_Pattern1, Q30_Pattern2, Q30_Pattern3], options: [Q30_WrongA, Q30_WrongB, Q30_WrongC, Q30_Answer] },
};
