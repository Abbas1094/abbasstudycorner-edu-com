// PAF Non-verbal patterns Q41-Q50 (Visual reasoning & complex analogies from PDF pages 41-50)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Cross, Hexagon, Star, Pentagon, Arrow } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q41: Shape decomposition
const PQ41_S1 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><line x1={22} y1={22} x2={78} y2={78} stroke="currentColor" strokeWidth={2} /></>);
const PQ41_S2 = () => (<><Triangle x={50} y={50} size={55} strokeWidth={2} /><Triangle x={50} y={50} size={28} rotation={180} strokeWidth={2} /></>);
const PQ41_S3 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={22} y1={50} x2={78} y2={50} stroke="currentColor" strokeWidth={2} /></>);
const PQ41_Answer = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={50} y2={78} stroke="currentColor" strokeWidth={2} /></>);
const PQ41_WrongA = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /><line x1={22} y1={50} x2={78} y2={50} stroke="currentColor" strokeWidth={2} /></>);
const PQ41_WrongB = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /></>);
const PQ41_WrongC = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /><Cross x={50} y={50} size={35} strokeWidth={2} /></>);

// Q42: Pattern with symbols
const PQ42_S1 = () => (<><Triangle x={50} y={35} size={30} strokeWidth={2} /><Dot x={50} y={65} size={10} fill="currentColor" /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_S2 = () => (<><Square x={50} y={35} size={28} strokeWidth={2} /><Star x={50} y={65} size={22} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_S3 = () => (<><Pentagon x={50} y={35} size={28} strokeWidth={2} /><Cross x={50} y={65} size={20} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_Answer = () => (<><Hexagon x={50} y={35} size={28} strokeWidth={2} /><Diamond x={50} y={65} size={22} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_WrongA = () => (<><Circle x={50} y={35} size={28} strokeWidth={2} /><Triangle x={50} y={65} size={22} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_WrongB = () => (<><Hexagon x={50} y={35} size={28} strokeWidth={2} /><Star x={50} y={65} size={22} strokeWidth={2} /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ42_WrongC = () => (<><Hexagon x={50} y={35} size={28} strokeWidth={2} /><Dot x={50} y={65} size={10} fill="currentColor" /><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);

// Q43: Shape + fill inversion analogy (IS TO)
const PQ43_S1 = () => (<><Triangle x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /><Circle x={50} y={55} size={20} fill="white" stroke="white" strokeWidth={1} /></>);
const PQ43_S2 = () => (<><Circle x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /><Triangle x={50} y={50} size={28} fill="white" stroke="white" strokeWidth={1} /></>);
const PQ43_S3 = () => (<><Square x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /><Diamond x={50} y={50} size={28} fill="white" stroke="white" strokeWidth={1} /></>);
const PQ43_Answer = () => (<><Diamond x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /><Square x={50} y={50} size={25} fill="white" stroke="white" strokeWidth={1} /></>);
const PQ43_WrongA = () => (<><Diamond x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /></>);
const PQ43_WrongB = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /><Square x={50} y={50} size={25} fill="currentColor" strokeWidth={1} /></>);
const PQ43_WrongC = () => (<><Square x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /><Diamond x={50} y={50} size={28} fill="currentColor" strokeWidth={1} /></>);

// Q44: Complex shape analogy with multiple shapes
const PQ44_S1 = () => (<><Triangle x={50} y={30} size={25} strokeWidth={2} /><Cross x={25} y={50} size={15} strokeWidth={1.5} /><Circle x={75} y={50} size={15} strokeWidth={2} /><rect x={35} y={65} width={30} height={15} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ44_S2 = () => (<><rect x={35} y={20} width={30} height={15} fill="none" stroke="currentColor" strokeWidth={2} /><Triangle x={25} y={50} size={20} strokeWidth={2} /><Cross x={75} y={50} size={15} strokeWidth={1.5} /><Circle x={50} y={70} size={18} strokeWidth={2} /></>);
const PQ44_S3 = () => (<><Circle x={50} y={25} size={18} strokeWidth={2} /><rect x={15} y={42} width={25} height={15} fill="none" stroke="currentColor" strokeWidth={2} /><Triangle x={75} y={50} size={20} strokeWidth={2} /><Cross x={50} y={72} size={15} strokeWidth={1.5} /></>);
const PQ44_Answer = () => (<><Cross x={50} y={25} size={15} strokeWidth={1.5} /><Circle x={25} y={50} size={18} strokeWidth={2} /><rect x={60} y={42} width={25} height={15} fill="none" stroke="currentColor" strokeWidth={2} /><Triangle x={50} y={72} size={20} strokeWidth={2} /></>);
const PQ44_WrongA = () => (<><Triangle x={50} y={25} size={20} strokeWidth={2} /><Circle x={25} y={50} size={18} strokeWidth={2} /><Cross x={75} y={50} size={15} strokeWidth={1.5} /><rect x={35} y={65} width={30} height={15} fill="none" stroke="currentColor" strokeWidth={2} /></>);
const PQ44_WrongB = () => (<><Cross x={50} y={25} size={15} strokeWidth={1.5} /><rect x={15} y={42} width={25} height={15} fill="none" stroke="currentColor" strokeWidth={2} /><Circle x={75} y={50} size={18} strokeWidth={2} /><Triangle x={50} y={72} size={20} strokeWidth={2} /></>);
const PQ44_WrongC = () => (<><Circle x={50} y={25} size={18} strokeWidth={2} /><Cross x={25} y={50} size={15} strokeWidth={1.5} /><Triangle x={75} y={50} size={20} strokeWidth={2} /><rect x={35} y={65} width={30} height={15} fill="none" stroke="currentColor" strokeWidth={2} /></>);

// Q45: Growing pattern outward
const PQ45_S1 = () => (<><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_S2 = () => (<><Circle x={50} y={50} size={35} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_S3 = () => (<><Square x={50} y={50} size={50} strokeWidth={2} /><Circle x={50} y={50} size={35} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_Answer = () => (<><Diamond x={50} y={50} size={65} strokeWidth={2} /><Square x={50} y={50} size={50} strokeWidth={2} /><Circle x={50} y={50} size={35} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_WrongA = () => (<><Triangle x={50} y={50} size={65} strokeWidth={2} /><Square x={50} y={50} size={50} strokeWidth={2} /><Circle x={50} y={50} size={35} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_WrongB = () => (<><Circle x={50} y={50} size={65} strokeWidth={2} /><Circle x={50} y={50} size={50} strokeWidth={2} /><Circle x={50} y={50} size={35} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);
const PQ45_WrongC = () => (<><Diamond x={50} y={50} size={65} strokeWidth={2} /><Dot x={50} y={50} size={12} fill="currentColor" /></>);

// Q46: Reflection with change
const PQ46_S1 = () => (<><Triangle x={35} y={35} size={30} strokeWidth={2} /><Square x={65} y={65} size={25} fill="currentColor" strokeWidth={1} /></>);
const PQ46_S2 = () => (<><Square x={35} y={35} size={25} fill="currentColor" strokeWidth={1} /><Triangle x={65} y={65} size={30} strokeWidth={2} /></>);
const PQ46_S3 = () => (<><Circle x={35} y={35} size={30} strokeWidth={2} /><Diamond x={65} y={65} size={25} fill="currentColor" strokeWidth={1} /></>);
const PQ46_Answer = () => (<><Diamond x={35} y={35} size={25} fill="currentColor" strokeWidth={1} /><Circle x={65} y={65} size={30} strokeWidth={2} /></>);
const PQ46_WrongA = () => (<><Circle x={35} y={35} size={30} fill="currentColor" strokeWidth={1} /><Diamond x={65} y={65} size={25} strokeWidth={2} /></>);
const PQ46_WrongB = () => (<><Diamond x={35} y={35} size={25} strokeWidth={2} /><Circle x={65} y={65} size={30} fill="currentColor" strokeWidth={1} /></>);
const PQ46_WrongC = () => (<><Diamond x={50} y={50} size={35} fill="currentColor" strokeWidth={1} /></>);

// Q47: Shape with increasing sides and dot
const PQ47_S1 = () => (<><Triangle x={50} y={50} size={55} strokeWidth={2} /><Dot x={50} y={50} size={8} fill="currentColor" /></>);
const PQ47_S2 = () => (<><Square x={50} y={50} size={50} strokeWidth={2} /><Dot x={35} y={35} size={8} fill="currentColor" /><Dot x={65} y={65} size={8} fill="currentColor" /></>);
const PQ47_S3 = () => (<><Pentagon x={50} y={50} size={55} strokeWidth={2} /><Dot x={35} y={35} size={7} fill="currentColor" /><Dot x={65} y={35} size={7} fill="currentColor" /><Dot x={50} y={65} size={7} fill="currentColor" /></>);
const PQ47_Answer = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} /><Dot x={35} y={30} size={7} fill="currentColor" /><Dot x={65} y={30} size={7} fill="currentColor" /><Dot x={35} y={65} size={7} fill="currentColor" /><Dot x={65} y={65} size={7} fill="currentColor" /></>);
const PQ47_WrongA = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} /><Dot x={50} y={50} size={10} fill="currentColor" /></>);
const PQ47_WrongB = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} /><Dot x={35} y={35} size={7} fill="currentColor" /><Dot x={65} y={35} size={7} fill="currentColor" /><Dot x={50} y={65} size={7} fill="currentColor" /></>);
const PQ47_WrongC = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><Dot x={35} y={30} size={7} fill="currentColor" /><Dot x={65} y={30} size={7} fill="currentColor" /><Dot x={35} y={65} size={7} fill="currentColor" /><Dot x={65} y={65} size={7} fill="currentColor" /></>);

// Q48: Shape addition sequence
const PQ48_S1 = () => (<><Circle x={50} y={50} size={40} strokeWidth={2} /></>);
const PQ48_S2 = () => (<><Circle x={40} y={50} size={35} strokeWidth={2} /><Square x={68} y={50} size={25} strokeWidth={2} /></>);
const PQ48_S3 = () => (<><Circle x={30} y={50} size={30} strokeWidth={2} /><Square x={55} y={50} size={22} strokeWidth={2} /><Triangle x={78} y={50} size={22} strokeWidth={2} /></>);
const PQ48_Answer = () => (<><Circle x={22} y={50} size={25} strokeWidth={2} /><Square x={43} y={50} size={20} strokeWidth={2} /><Triangle x={62} y={50} size={20} strokeWidth={2} /><Diamond x={80} y={50} size={18} strokeWidth={2} /></>);
const PQ48_WrongA = () => (<><Circle x={22} y={50} size={25} strokeWidth={2} /><Circle x={43} y={50} size={20} strokeWidth={2} /><Circle x={62} y={50} size={20} strokeWidth={2} /><Circle x={80} y={50} size={18} strokeWidth={2} /></>);
const PQ48_WrongB = () => (<><Circle x={30} y={50} size={30} strokeWidth={2} /><Square x={55} y={50} size={22} strokeWidth={2} /><Triangle x={78} y={50} size={22} strokeWidth={2} /></>);
const PQ48_WrongC = () => (<><Diamond x={22} y={50} size={25} strokeWidth={2} /><Triangle x={43} y={50} size={20} strokeWidth={2} /><Square x={62} y={50} size={20} strokeWidth={2} /><Circle x={80} y={50} size={18} strokeWidth={2} /></>);

// Q49: Overlapping shapes with fill
const PQ49_S1 = () => (<><Circle x={40} y={50} size={45} strokeWidth={2} /><Circle x={60} y={50} size={45} strokeWidth={2} /></>);
const PQ49_S2 = () => (<><Circle x={40} y={50} size={45} fill="currentColor" strokeWidth={2} /><Circle x={60} y={50} size={45} strokeWidth={2} /></>);
const PQ49_S3 = () => (<><Circle x={40} y={50} size={45} fill="currentColor" strokeWidth={2} /><Circle x={60} y={50} size={45} fill="currentColor" strokeWidth={2} /></>);
const PQ49_Answer = () => (<><Circle x={40} y={50} size={45} strokeWidth={2} /><Circle x={60} y={50} size={45} fill="currentColor" strokeWidth={2} /></>);
const PQ49_WrongA = () => (<><Circle x={40} y={50} size={45} strokeWidth={2} /><Circle x={60} y={50} size={45} strokeWidth={2} /></>);
const PQ49_WrongB = () => (<><Circle x={50} y={50} size={55} fill="currentColor" strokeWidth={2} /></>);
const PQ49_WrongC = () => (<><Circle x={40} y={50} size={45} fill="currentColor" strokeWidth={2} /><Circle x={60} y={50} size={45} strokeWidth={2} /><Dot x={50} y={50} size={10} fill="white" /></>);

// Q50: Complex pattern - shapes at vertices
const PQ50_S1 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Circle x={22} y={22} size={12} strokeWidth={1.5} /><Triangle x={78} y={22} size={12} strokeWidth={1.5} /><Diamond x={22} y={78} size={12} strokeWidth={1.5} /><Star x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_S2 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Triangle x={22} y={22} size={12} strokeWidth={1.5} /><Diamond x={78} y={22} size={12} strokeWidth={1.5} /><Star x={22} y={78} size={12} strokeWidth={1.5} /><Circle x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_S3 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Diamond x={22} y={22} size={12} strokeWidth={1.5} /><Star x={78} y={22} size={12} strokeWidth={1.5} /><Circle x={22} y={78} size={12} strokeWidth={1.5} /><Triangle x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_Answer = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Star x={22} y={22} size={12} strokeWidth={1.5} /><Circle x={78} y={22} size={12} strokeWidth={1.5} /><Triangle x={22} y={78} size={12} strokeWidth={1.5} /><Diamond x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_WrongA = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Circle x={22} y={22} size={12} strokeWidth={1.5} /><Triangle x={78} y={22} size={12} strokeWidth={1.5} /><Star x={22} y={78} size={12} strokeWidth={1.5} /><Diamond x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_WrongB = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Star x={22} y={22} size={12} strokeWidth={1.5} /><Star x={78} y={22} size={12} strokeWidth={1.5} /><Star x={22} y={78} size={12} strokeWidth={1.5} /><Star x={78} y={78} size={12} strokeWidth={1.5} /></>);
const PQ50_WrongC = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Diamond x={22} y={22} size={12} strokeWidth={1.5} /><Circle x={78} y={22} size={12} strokeWidth={1.5} /><Triangle x={22} y={78} size={12} strokeWidth={1.5} /><Star x={78} y={78} size={12} strokeWidth={1.5} /></>);

export const pafPatterns41to50: MCQ[] = [
  { id: "paf-nv-q41", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Each shape is divided by its natural axis. Diamond is divided vertically." },
  { id: "paf-nv-q42", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Top shape gains sides (3→4→5→6), bottom shape changes in pattern (dot→star→cross→diamond)." },
  { id: "paf-nv-q43", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Filled outer shape contains white inner shape. The shapes swap roles in the answer." },
  { id: "paf-nv-q44", question: "Find the missing pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Four shapes rotate clockwise around four positions each step." },
  { id: "paf-nv-q45", question: "Complete the nesting series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Each step adds an outer shape: dot→circle+dot→square+circle+dot→diamond+square+circle+dot." },
  { id: "paf-nv-q46", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shapes swap positions and fill state: outline↔filled and top-left↔bottom-right." },
  { id: "paf-nv-q47", question: "What pattern comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shape sides increase (3→4→5→6) while dots increase (1→2→3→4)." },
  { id: "paf-nv-q48", question: "Complete the series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "A new shape is added to the right each step: circle→+square→+triangle→+diamond." },
  { id: "paf-nv-q49", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Fill alternates: both empty→left filled→both filled→right filled (cycling pattern)." },
  { id: "paf-nv-q50", question: "Complete the rotation pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Corner shapes rotate clockwise by one position each step." },
];

export const pafPatternComponents41to50 = {
  PQ41: { sequence: [PQ41_S1, PQ41_S2, PQ41_S3], options: [PQ41_WrongA, PQ41_WrongB, PQ41_WrongC, PQ41_Answer] },
  PQ42: { sequence: [PQ42_S1, PQ42_S2, PQ42_S3], options: [PQ42_WrongA, PQ42_WrongB, PQ42_WrongC, PQ42_Answer] },
  PQ43: { sequence: [PQ43_S1, PQ43_S2, PQ43_S3], options: [PQ43_WrongA, PQ43_WrongB, PQ43_WrongC, PQ43_Answer] },
  PQ44: { sequence: [PQ44_S1, PQ44_S2, PQ44_S3], options: [PQ44_WrongA, PQ44_WrongB, PQ44_WrongC, PQ44_Answer] },
  PQ45: { sequence: [PQ45_S1, PQ45_S2, PQ45_S3], options: [PQ45_WrongA, PQ45_WrongB, PQ45_WrongC, PQ45_Answer] },
  PQ46: { sequence: [PQ46_S1, PQ46_S2, PQ46_S3], options: [PQ46_WrongA, PQ46_WrongB, PQ46_WrongC, PQ46_Answer] },
  PQ47: { sequence: [PQ47_S1, PQ47_S2, PQ47_S3], options: [PQ47_WrongA, PQ47_WrongB, PQ47_WrongC, PQ47_Answer] },
  PQ48: { sequence: [PQ48_S1, PQ48_S2, PQ48_S3], options: [PQ48_WrongA, PQ48_WrongB, PQ48_WrongC, PQ48_Answer] },
  PQ49: { sequence: [PQ49_S1, PQ49_S2, PQ49_S3], options: [PQ49_WrongA, PQ49_WrongB, PQ49_WrongC, PQ49_Answer] },
  PQ50: { sequence: [PQ50_S1, PQ50_S2, PQ50_S3], options: [PQ50_WrongA, PQ50_WrongB, PQ50_WrongC, PQ50_Answer] },
};
