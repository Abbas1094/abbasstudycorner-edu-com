// PAF Non-verbal patterns Q31-Q40 (Pattern matching & embedded figures from PDF pages 31-40)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Cross, Hexagon, Star, Pentagon, Arrow } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q31: Shape with shading rotation
const PQ31_S1 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 50 22 A 28 28 0 0 1 78 50 L 50 50 Z" fill="currentColor" /></>);
const PQ31_S2 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 78 50 A 28 28 0 0 1 50 78 L 50 50 Z" fill="currentColor" /></>);
const PQ31_S3 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 50 78 A 28 28 0 0 1 22 50 L 50 50 Z" fill="currentColor" /></>);
const PQ31_Answer = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 22 50 A 28 28 0 0 1 50 22 L 50 50 Z" fill="currentColor" /></>);
const PQ31_WrongA = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 50 22 A 28 28 0 0 1 78 50 L 50 50 Z" fill="currentColor" /></>);
const PQ31_WrongB = () => (<><Circle x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /></>);
const PQ31_WrongC = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><path d="M 50 22 A 28 28 0 0 0 22 50 L 50 50 Z" fill="currentColor" /></>);

// Q32: Double shape - inner shape changes
const PQ32_S1 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Circle x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_S2 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Triangle x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_S3 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Square x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_Answer = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Diamond x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_WrongA = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Pentagon x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_WrongB = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Star x={50} y={50} size={25} strokeWidth={2} /></>);
const PQ32_WrongC = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Hexagon x={50} y={50} size={25} strokeWidth={2} /></>);

// Q33: Dot pattern - triangular arrangement growing
const PQ33_S1 = () => (<><Dot x={50} y={50} size={10} fill="currentColor" /></>);
const PQ33_S2 = () => (<><Dot x={40} y={40} size={10} fill="currentColor" /><Dot x={60} y={40} size={10} fill="currentColor" /><Dot x={50} y={60} size={10} fill="currentColor" /></>);
const PQ33_S3 = () => (<><Dot x={30} y={30} size={9} fill="currentColor" /><Dot x={50} y={30} size={9} fill="currentColor" /><Dot x={70} y={30} size={9} fill="currentColor" /><Dot x={40} y={50} size={9} fill="currentColor" /><Dot x={60} y={50} size={9} fill="currentColor" /><Dot x={50} y={70} size={9} fill="currentColor" /></>);
const PQ33_Answer = () => (<><Dot x={20} y={25} size={8} fill="currentColor" /><Dot x={40} y={25} size={8} fill="currentColor" /><Dot x={60} y={25} size={8} fill="currentColor" /><Dot x={80} y={25} size={8} fill="currentColor" /><Dot x={30} y={42} size={8} fill="currentColor" /><Dot x={50} y={42} size={8} fill="currentColor" /><Dot x={70} y={42} size={8} fill="currentColor" /><Dot x={40} y={59} size={8} fill="currentColor" /><Dot x={60} y={59} size={8} fill="currentColor" /><Dot x={50} y={76} size={8} fill="currentColor" /></>);
const PQ33_WrongA = () => (<><Dot x={25} y={25} size={8} fill="currentColor" /><Dot x={50} y={25} size={8} fill="currentColor" /><Dot x={75} y={25} size={8} fill="currentColor" /><Dot x={25} y={50} size={8} fill="currentColor" /><Dot x={50} y={50} size={8} fill="currentColor" /><Dot x={75} y={50} size={8} fill="currentColor" /><Dot x={25} y={75} size={8} fill="currentColor" /><Dot x={50} y={75} size={8} fill="currentColor" /><Dot x={75} y={75} size={8} fill="currentColor" /></>);
const PQ33_WrongB = () => (<><Dot x={50} y={20} size={8} fill="currentColor" /><Dot x={30} y={40} size={8} fill="currentColor" /><Dot x={70} y={40} size={8} fill="currentColor" /><Dot x={50} y={60} size={8} fill="currentColor" /><Dot x={30} y={80} size={8} fill="currentColor" /><Dot x={70} y={80} size={8} fill="currentColor" /></>);
const PQ33_WrongC = () => (<><Dot x={30} y={30} size={10} fill="currentColor" /><Dot x={50} y={30} size={10} fill="currentColor" /><Dot x={70} y={30} size={10} fill="currentColor" /><Dot x={30} y={50} size={10} fill="currentColor" /><Dot x={70} y={50} size={10} fill="currentColor" /><Dot x={30} y={70} size={10} fill="currentColor" /><Dot x={50} y={70} size={10} fill="currentColor" /><Dot x={70} y={70} size={10} fill="currentColor" /></>);

// Q34: L-shape rotation
const PQ34_S1 = () => (<><rect x={20} y={20} width={20} height={60} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={40} y={60} width={40} height={20} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_S2 = () => (<><rect x={20} y={20} width={60} height={20} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={60} y={40} width={20} height={40} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_S3 = () => (<><rect x={20} y={20} width={40} height={20} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={40} y={20} width={20} height={60} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_Answer = () => (<><rect x={20} y={60} width={60} height={20} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={20} y={20} width={20} height={40} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_WrongA = () => (<><rect x={20} y={20} width={20} height={60} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={20} y={20} width={60} height={20} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_WrongB = () => (<><rect x={20} y={60} width={60} height={20} fill="none" stroke="currentColor" strokeWidth={2} /><rect x={60} y={20} width={20} height={40} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ34_WrongC = () => (<><rect x={30} y={30} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} /></>);

// Q35: Nested triangles pattern
const PQ35_S1 = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /></>);
const PQ35_S2 = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Triangle x={50} y={55} size={35} rotation={180} strokeWidth={2} /></>);
const PQ35_S3 = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Triangle x={50} y={55} size={35} rotation={180} strokeWidth={2} /><Triangle x={50} y={48} size={18} strokeWidth={2} /></>);
const PQ35_Answer = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Triangle x={50} y={55} size={35} rotation={180} strokeWidth={2} /><Triangle x={50} y={48} size={18} strokeWidth={2} /><Triangle x={50} y={52} size={8} rotation={180} strokeWidth={1.5} /></>);
const PQ35_WrongA = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Triangle x={50} y={50} size={35} strokeWidth={2} /><Triangle x={50} y={50} size={18} strokeWidth={2} /></>);
const PQ35_WrongB = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Triangle x={50} y={55} size={35} rotation={180} strokeWidth={2} /><Circle x={50} y={50} size={15} strokeWidth={2} /></>);
const PQ35_WrongC = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Square x={50} y={55} size={25} strokeWidth={2} /></>);

// Q36: Shape counting - overlapping shapes
const PQ36_S1 = () => (<><Circle x={40} y={40} size={35} strokeWidth={2} /><Circle x={60} y={60} size={35} strokeWidth={2} /></>);
const PQ36_S2 = () => (<><Circle x={35} y={35} size={30} strokeWidth={2} /><Circle x={50} y={50} size={30} strokeWidth={2} /><Circle x={65} y={65} size={30} strokeWidth={2} /></>);
const PQ36_S3 = () => (<><Circle x={30} y={30} size={25} strokeWidth={2} /><Circle x={43} y={43} size={25} strokeWidth={2} /><Circle x={56} y={56} size={25} strokeWidth={2} /><Circle x={69} y={69} size={25} strokeWidth={2} /></>);
const PQ36_Answer = () => (<><Circle x={26} y={26} size={22} strokeWidth={2} /><Circle x={38} y={38} size={22} strokeWidth={2} /><Circle x={50} y={50} size={22} strokeWidth={2} /><Circle x={62} y={62} size={22} strokeWidth={2} /><Circle x={74} y={74} size={22} strokeWidth={2} /></>);
const PQ36_WrongA = () => (<><Circle x={35} y={35} size={30} strokeWidth={2} /><Circle x={65} y={65} size={30} strokeWidth={2} /></>);
const PQ36_WrongB = () => (<><Circle x={50} y={50} size={60} strokeWidth={2} /><Circle x={50} y={50} size={40} strokeWidth={2} /><Circle x={50} y={50} size={20} strokeWidth={2} /></>);
const PQ36_WrongC = () => (<><Circle x={30} y={50} size={22} strokeWidth={2} /><Circle x={50} y={50} size={22} strokeWidth={2} /><Circle x={70} y={50} size={22} strokeWidth={2} /><Circle x={50} y={30} size={22} strokeWidth={2} /><Circle x={50} y={70} size={22} strokeWidth={2} /></>);

// Q37: Shape alternation with fill
const PQ37_S1 = () => (<><Square x={50} y={50} size={50} fill="currentColor" strokeWidth={2} /></>);
const PQ37_S2 = () => (<><Circle x={50} y={50} size={50} strokeWidth={2} /></>);
const PQ37_S3 = () => (<><Triangle x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /></>);
const PQ37_Answer = () => (<><Diamond x={50} y={50} size={50} strokeWidth={2} /></>);
const PQ37_WrongA = () => (<><Diamond x={50} y={50} size={50} fill="currentColor" strokeWidth={2} /></>);
const PQ37_WrongB = () => (<><Pentagon x={50} y={50} size={50} strokeWidth={2} /></>);
const PQ37_WrongC = () => (<><Square x={50} y={50} size={50} strokeWidth={2} /></>);

// Q38: Cross patterns with elements
const PQ38_S1 = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /></>);
const PQ38_S2 = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /><Dot x={70} y={30} size={8} fill="currentColor" /></>);
const PQ38_S3 = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /><Dot x={70} y={30} size={8} fill="currentColor" /><Dot x={70} y={70} size={8} fill="currentColor" /></>);
const PQ38_Answer = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /><Dot x={70} y={30} size={8} fill="currentColor" /><Dot x={70} y={70} size={8} fill="currentColor" /><Dot x={30} y={70} size={8} fill="currentColor" /></>);
const PQ38_WrongA = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ38_WrongB = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /><Dot x={70} y={70} size={8} fill="currentColor" /></>);
const PQ38_WrongC = () => (<><Cross x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /><Dot x={70} y={30} size={8} fill="currentColor" /><Dot x={70} y={70} size={8} fill="currentColor" /><Dot x={30} y={70} size={8} fill="currentColor" /><Dot x={50} y={50} size={8} fill="currentColor" /></>);

// Q39: Diamond with internal diagonal change
const PQ39_S1 = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /><line x1={50} y1={20} x2={50} y2={80} stroke="currentColor" strokeWidth={2} /></>);
const PQ39_S2 = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={2} /></>);
const PQ39_S3 = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /><line x1={50} y1={20} x2={50} y2={80} stroke="currentColor" strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={2} /></>);
const PQ39_Answer = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /></>);
const PQ39_WrongA = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /><line x1={35} y1={35} x2={65} y2={65} stroke="currentColor" strokeWidth={2} /></>);
const PQ39_WrongB = () => (<><Diamond x={50} y={50} size={60} strokeWidth={2} /><Cross x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ39_WrongC = () => (<><Diamond x={50} y={50} size={60} fill="currentColor" strokeWidth={2} /></>);

// Q40: Symmetry pattern
const PQ40_S1 = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Triangle x={35} y={40} size={25} strokeWidth={2} /><Circle x={65} y={40} size={20} strokeWidth={2} /><Square x={35} y={70} size={18} strokeWidth={2} /></>);
const PQ40_S2 = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Circle x={35} y={40} size={20} strokeWidth={2} /><Triangle x={65} y={40} size={25} strokeWidth={2} /><Square x={65} y={70} size={18} strokeWidth={2} /></>);
const PQ40_S3 = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Star x={35} y={40} size={25} strokeWidth={2} /><Diamond x={65} y={40} size={22} strokeWidth={2} /><Hexagon x={35} y={70} size={20} strokeWidth={2} /></>);
const PQ40_Answer = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Diamond x={35} y={40} size={22} strokeWidth={2} /><Star x={65} y={40} size={25} strokeWidth={2} /><Hexagon x={65} y={70} size={20} strokeWidth={2} /></>);
const PQ40_WrongA = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Star x={65} y={40} size={25} strokeWidth={2} /><Diamond x={35} y={40} size={22} strokeWidth={2} /><Hexagon x={35} y={70} size={20} strokeWidth={2} /></>);
const PQ40_WrongB = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Diamond x={35} y={40} size={22} strokeWidth={2} /><Star x={65} y={40} size={25} strokeWidth={2} /><Hexagon x={35} y={70} size={20} strokeWidth={2} /></>);
const PQ40_WrongC = () => (<><line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1} /><Star x={35} y={40} size={25} strokeWidth={2} /><Star x={65} y={40} size={25} strokeWidth={2} /></>);

export const pafPatterns31to40: MCQ[] = [
  { id: "paf-nv-q31", question: "Complete the pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "The filled quarter of the circle rotates 90° clockwise each step." },
  { id: "paf-nv-q32", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Inner shape changes: circle→triangle→square→diamond (following vertex count pattern)." },
  { id: "paf-nv-q33", question: "Complete the dot pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Triangular dot arrangement grows by one row each step: 1→3→6→10 dots." },
  { id: "paf-nv-q34", question: "What comes next in the rotation?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "L-shape rotates 90° clockwise each step." },
  { id: "paf-nv-q35", question: "Find the next in the series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Nested triangles alternate direction (up/down) and get progressively smaller inside." },
  { id: "paf-nv-q36", question: "Complete the series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Overlapping circles increase by 1 each step along the diagonal: 2→3→4→5." },
  { id: "paf-nv-q37", question: "What pattern comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shapes change (square→circle→triangle→diamond) and fill alternates (filled→empty→filled→empty)." },
  { id: "paf-nv-q38", question: "Complete the dot pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Dots fill the four corners of the cross one by one in clockwise order." },
  { id: "paf-nv-q39", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Lines cycle: vertical only → horizontal only → both → none (empty diamond)." },
  { id: "paf-nv-q40", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Mirror reflection across vertical line: shapes swap left↔right positions." },
];

export const pafPatternComponents31to40 = {
  PQ31: { sequence: [PQ31_S1, PQ31_S2, PQ31_S3], options: [PQ31_WrongA, PQ31_WrongB, PQ31_WrongC, PQ31_Answer] },
  PQ32: { sequence: [PQ32_S1, PQ32_S2, PQ32_S3], options: [PQ32_WrongA, PQ32_WrongB, PQ32_WrongC, PQ32_Answer] },
  PQ33: { sequence: [PQ33_S1, PQ33_S2, PQ33_S3], options: [PQ33_WrongA, PQ33_WrongB, PQ33_WrongC, PQ33_Answer] },
  PQ34: { sequence: [PQ34_S1, PQ34_S2, PQ34_S3], options: [PQ34_WrongA, PQ34_WrongB, PQ34_WrongC, PQ34_Answer] },
  PQ35: { sequence: [PQ35_S1, PQ35_S2, PQ35_S3], options: [PQ35_WrongA, PQ35_WrongB, PQ35_WrongC, PQ35_Answer] },
  PQ36: { sequence: [PQ36_S1, PQ36_S2, PQ36_S3], options: [PQ36_WrongA, PQ36_WrongB, PQ36_WrongC, PQ36_Answer] },
  PQ37: { sequence: [PQ37_S1, PQ37_S2, PQ37_S3], options: [PQ37_WrongA, PQ37_WrongB, PQ37_WrongC, PQ37_Answer] },
  PQ38: { sequence: [PQ38_S1, PQ38_S2, PQ38_S3], options: [PQ38_WrongA, PQ38_WrongB, PQ38_WrongC, PQ38_Answer] },
  PQ39: { sequence: [PQ39_S1, PQ39_S2, PQ39_S3], options: [PQ39_WrongA, PQ39_WrongB, PQ39_WrongC, PQ39_Answer] },
  PQ40: { sequence: [PQ40_S1, PQ40_S2, PQ40_S3], options: [PQ40_WrongA, PQ40_WrongB, PQ40_WrongC, PQ40_Answer] },
};
