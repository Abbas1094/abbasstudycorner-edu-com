// PAF Non-verbal patterns Q11-Q20 (Matrix & shape transformation from PDF pages 11-20)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Cross, Hexagon, Star } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q11 (Page 11): Shapes with "1/2" fraction - oval→hexagon→parallelogram
const PQ11_S1 = () => (
  <>
    <ellipse cx={50} cy={45} rx={30} ry={20} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={20} y1={45} x2={80} y2={45} stroke="currentColor" strokeWidth={1.5} />
    <text x={50} y={40} textAnchor="middle" fontSize={14} fill="currentColor">1</text>
    <text x={50} y={58} textAnchor="middle" fontSize={14} fill="currentColor">2</text>
  </>
);
const PQ11_S2 = () => (
  <>
    <Hexagon x={50} y={45} size={45} strokeWidth={2} />
    <line x1={28} y1={45} x2={72} y2={45} stroke="currentColor" strokeWidth={1.5} />
    <text x={50} y={40} textAnchor="middle" fontSize={14} fill="currentColor">1</text>
    <text x={50} y={58} textAnchor="middle" fontSize={14} fill="currentColor">2</text>
  </>
);
const PQ11_S3 = () => (
  <>
    <polygon points="25,25 80,25 75,70 20,70" fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={22} y1={48} x2={78} y2={48} stroke="currentColor" strokeWidth={1.5} />
    <text x={52} y={42} textAnchor="middle" fontSize={14} fill="currentColor">1</text>
    <text x={48} y={62} textAnchor="middle" fontSize={14} fill="currentColor">2</text>
  </>
);
const PQ11_Answer = () => (
  <>
    <polygon points="25,25 80,25 75,70 20,70" fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={22} y1={48} x2={78} y2={48} stroke="currentColor" strokeWidth={1.5} />
    <line x1={50} y1={25} x2={48} y2={70} stroke="currentColor" strokeWidth={1.5} />
    <text x={38} y={42} textAnchor="middle" fontSize={12} fill="currentColor">1</text>
    <text x={62} y={42} textAnchor="middle" fontSize={12} fill="currentColor">2</text>
  </>
);
const PQ11_WrongA = () => (
  <>
    <polygon points="25,25 80,25 75,70 20,70" fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={25} x2={48} y2={70} stroke="currentColor" strokeWidth={1.5} />
    <text x={38} y={50} textAnchor="middle" fontSize={12} fill="currentColor">1</text>
    <text x={62} y={50} textAnchor="middle" fontSize={12} fill="currentColor">2</text>
  </>
);
const PQ11_WrongB = () => (
  <>
    <polygon points="20,30 80,30 75,70 25,70" fill="none" stroke="currentColor" strokeWidth={2} />
    <path d="M 20 50 Q 50 30 80 50" fill="none" stroke="currentColor" strokeWidth={1.5} />
    <text x={50} y={45} textAnchor="middle" fontSize={14} fill="currentColor">1</text>
    <text x={50} y={63} textAnchor="middle" fontSize={14} fill="currentColor">2</text>
  </>
);
const PQ11_WrongC = () => (
  <>
    <polygon points="25,25 80,25 75,70 20,70" fill="none" stroke="currentColor" strokeWidth={2} />
    <text x={50} y={55} textAnchor="middle" fontSize={20} fill="currentColor">½</text>
  </>
);

// Q12 (Page 12): 3×3 matrix with curves getting simpler
const PQ12_S1 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <path d="M 30 30 Q 50 70 70 30" fill="none" stroke="currentColor" strokeWidth={2} />
    <path d="M 25 55 Q 50 25 75 55" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ12_S2 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={35} cy={50} r={15} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={65} cy={50} r={15} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ12_S3 = () => (
  <>
    <path d="M 30 50 Q 50 25 70 50" fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={30} y={50} size={8} fill="currentColor" />
    <Dot x={70} y={50} size={8} fill="currentColor" />
  </>
);
const PQ12_Answer = () => (
  <>
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const PQ12_WrongA = () => (
  <>
    <path d="M 30 50 Q 50 30 70 50" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ12_WrongB = () => (
  <>
    <path d="M 30 40 Q 50 60 70 40" fill="none" stroke="currentColor" strokeWidth={2} />
    <path d="M 30 60 Q 50 40 70 60" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ12_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={20} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="currentColor" />
  </>
);

// Q13: Matrix with lines/sticks rotating
const PQ13_S1 = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={80} y2={25} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_S2 = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={75} y2={75} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_S3 = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={20} y2={75} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_Answer = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={25} y2={25} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_WrongA = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={80} y2={75} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_WrongB = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={50} y2={20} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ13_WrongC = () => (
  <>
    <line x1={15} y1={15} x2={85} y2={85} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={50} x2={25} y2={50} stroke="currentColor" strokeWidth={3} />
  </>
);

// Q14: Shapes morphing - circle inside progressively complex
const PQ14_S1 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ14_S2 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ14_S3 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ14_Answer = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <line x1={75} y1={25} x2={25} y2={75} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ14_WrongA = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ14_WrongB = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Cross x={50} y={50} size={50} strokeWidth={1.5} />
  </>
);
const PQ14_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={50} cy={50} r={18} fill="none" stroke="currentColor" strokeWidth={1.5} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
  </>
);

// Q15: Star + circles growing pattern
const PQ15_S1 = () => (
  <>
    <Star x={30} y={50} size={30} strokeWidth={2} />
    <circle cx={60} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ15_S2 = () => (
  <>
    <Star x={25} y={50} size={30} strokeWidth={2} />
    <circle cx={52} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={72} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ15_S3 = () => (
  <>
    <Star x={22} y={50} size={28} strokeWidth={2} />
    <circle cx={46} cy={50} r={7} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={62} cy={50} r={7} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={78} cy={50} r={7} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ15_Answer = () => (
  <>
    <Square x={25} y={50} size={25} strokeWidth={2} />
    <rect x={40} y={42} width={12} height={16} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={42} width={12} height={16} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={70} y={42} width={12} height={16} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ15_WrongA = () => (
  <>
    <circle cx={25} cy={50} r={15} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={50} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={70} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <circle cx={85} cy={50} r={5} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ15_WrongB = () => (
  <>
    <Star x={50} y={50} size={40} strokeWidth={2} />
    <Square x={50} y={50} size={20} strokeWidth={1.5} />
  </>
);
const PQ15_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={12} fill="none" stroke="currentColor" strokeWidth={2} />
    <Square x={50} y={50} size={35} strokeWidth={2} />
  </>
);

// Q16: Lines/sticks with arrows pattern (from page 16 matrix)
const PQ16_S1 = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,15 45,25 55,25" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,50 25,45 25,55" fill="currentColor" />
    <polygon points="85,50 75,45 75,55" fill="currentColor" />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ16_S2 = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,15 45,25 55,25" fill="currentColor" />
    <polygon points="50,85 45,75 55,75" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,50 25,45 25,55" fill="currentColor" />
    <polygon points="85,50 75,45 75,55" fill="currentColor" />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ16_S3 = () => (
  <>
    <ellipse cx={40} cy={45} rx={12} ry={18} fill="none" stroke="currentColor" strokeWidth={2} />
    <ellipse cx={60} cy={55} rx={12} ry={18} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={40} y1={63} x2={40} y2={85} stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ16_Answer = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,50 25,45 25,55" fill="currentColor" />
    <polygon points="85,50 75,45 75,55" fill="currentColor" />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,15 45,25 55,25" fill="currentColor" />
    <polygon points="50,85 45,75 55,75" fill="currentColor" />
  </>
);
const PQ16_WrongA = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,50 25,45 25,55" fill="currentColor" />
    <polygon points="85,50 75,45 75,55" fill="currentColor" />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,15 45,25 55,25" fill="currentColor" />
  </>
);
const PQ16_WrongB = () => (
  <>
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,85 45,75 55,75" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,50 75,45 75,55" fill="currentColor" />
  </>
);
const PQ16_WrongC = () => (
  <>
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={2} />
    <polygon points="50,15 45,25 55,25" fill="currentColor" />
    <polygon points="50,85 45,75 55,75" fill="currentColor" />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={2} />
  </>
);

// Q17: Shape inside shape - rotation (pentagon & cross)
const PQ17_S1 = () => (
  <>
    <Triangle x={50} y={50} size={55} strokeWidth={2} />
    <Dot x={50} y={30} size={8} fill="currentColor" />
  </>
);
const PQ17_S2 = () => (
  <>
    <Square x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={30} size={8} fill="currentColor" />
    <Dot x={70} y={50} size={8} fill="currentColor" />
  </>
);
const PQ17_S3 = () => (
  <>
    <Hexagon x={50} y={50} size={55} strokeWidth={2} />
    <Dot x={50} y={25} size={7} fill="currentColor" />
    <Dot x={73} y={37} size={7} fill="currentColor" />
    <Dot x={73} y={63} size={7} fill="currentColor" />
  </>
);
const PQ17_Answer = () => (
  <>
    <circle cx={50} cy={50} r={30} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={20} size={7} fill="currentColor" />
    <Dot x={78} y={40} size={7} fill="currentColor" />
    <Dot x={70} y={72} size={7} fill="currentColor" />
    <Dot x={30} y={72} size={7} fill="currentColor" />
  </>
);
const PQ17_WrongA = () => (
  <>
    <circle cx={50} cy={50} r={30} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={20} size={7} fill="currentColor" />
    <Dot x={78} y={40} size={7} fill="currentColor" />
  </>
);
const PQ17_WrongB = () => (
  <>
    <Diamond x={50} y={50} size={55} strokeWidth={2} />
    <Dot x={50} y={25} size={7} fill="currentColor" />
    <Dot x={75} y={50} size={7} fill="currentColor" />
    <Dot x={50} y={75} size={7} fill="currentColor" />
  </>
);
const PQ17_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={30} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);

// Q18 (Page 18): Square with cross → circle with crosses in quadrants
const PQ18_S1 = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <Cross x={50} y={50} size={12} strokeWidth={1} />
  </>
);
const PQ18_S2 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={15} x2={50} y2={85} stroke="currentColor" strokeWidth={1.5} />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <Cross x={32} y={32} size={10} strokeWidth={1} />
    <Cross x={68} y={32} size={10} strokeWidth={1} />
    <Cross x={32} y={68} size={10} strokeWidth={1} />
    <Cross x={68} y={68} size={10} strokeWidth={1} />
  </>
);
const PQ18_S3 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={10} y1={10} x2={90} y2={90} stroke="currentColor" strokeWidth={1.5} />
    <line x1={90} y1={10} x2={10} y2={90} stroke="currentColor" strokeWidth={1.5} />
    <Cross x={50} y={30} size={10} strokeWidth={1} />
  </>
);
const PQ18_Answer = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <line x1={75} y1={25} x2={25} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <Cross x={50} y={25} size={10} strokeWidth={1} />
    <Cross x={75} y={50} size={10} strokeWidth={1} />
    <Cross x={50} y={75} size={10} strokeWidth={1} />
    <Cross x={25} y={50} size={10} strokeWidth={1} />
  </>
);
const PQ18_WrongA = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <line x1={75} y1={25} x2={25} y2={75} stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ18_WrongB = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={25} y1={25} x2={75} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <line x1={75} y1={25} x2={25} y2={75} stroke="currentColor" strokeWidth={1.5} />
    <Star x={30} y={30} size={15} strokeWidth={1} />
    <Star x={70} y={30} size={15} strokeWidth={1} />
    <Star x={50} y={70} size={15} strokeWidth={1} />
  </>
);
const PQ18_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Cross x={32} y={32} size={10} strokeWidth={1} />
    <Cross x={68} y={32} size={10} strokeWidth={1} />
    <Cross x={50} y={68} size={10} strokeWidth={1} />
  </>
);

// Q19: Circle rotation with triangle inside
const PQ19_S1 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} strokeWidth={2} />
  </>
);
const PQ19_S2 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} rotation={90} strokeWidth={2} />
  </>
);
const PQ19_S3 = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} rotation={180} strokeWidth={2} />
  </>
);
const PQ19_Answer = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} rotation={270} strokeWidth={2} />
  </>
);
const PQ19_WrongA = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} strokeWidth={2} />
  </>
);
const PQ19_WrongB = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Square x={50} y={50} size={30} rotation={45} strokeWidth={2} />
  </>
);
const PQ19_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={35} fill="none" stroke="currentColor" strokeWidth={2} />
    <Triangle x={50} y={50} size={35} rotation={45} strokeWidth={2} />
  </>
);

// Q20: Shape size progression
const PQ20_S1 = () => <Square x={50} y={50} size={20} strokeWidth={2} />;
const PQ20_S2 = () => <Square x={50} y={50} size={35} strokeWidth={2} />;
const PQ20_S3 = () => <Square x={50} y={50} size={50} strokeWidth={2} />;
const PQ20_Answer = () => <Square x={50} y={50} size={65} strokeWidth={2} />;
const PQ20_WrongA = () => <Square x={50} y={50} size={50} strokeWidth={2} />;
const PQ20_WrongB = () => <Square x={50} y={50} size={80} strokeWidth={2} />;
const PQ20_WrongC = () => <Circle x={50} y={50} size={65} strokeWidth={2} />;

export const pafPatterns11to20: MCQ[] = [
  { id: "paf-nv-q11", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "The fraction shape changes container (oval→hexagon→parallelogram), 3rd column adds a vertical division line." },
  { id: "paf-nv-q12", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Each row simplifies: complex curves → overlapping circles → dots. The pattern reduces to just a dot." },
  { id: "paf-nv-q13", question: "What comes next in the series?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Main line alternates vertical/horizontal. The branch rotates 90° clockwise each step." },
  { id: "paf-nv-q14", question: "Complete the pattern series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Each step adds one more dividing line to the circle: vertical → +horizontal → +diagonal → +other diagonal." },
  { id: "paf-nv-q15", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 0, explanation: "Row pattern: large shape + small circles increasing. Bottom row uses square + rectangles." },
  { id: "paf-nv-q16", question: "Find the missing pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrows point in all 4 directions symmetrically. The answer has both vertical and horizontal arrows." },
  { id: "paf-nv-q17", question: "What pattern completes the sequence?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shape sides increase (3→4→6→circle) while dots increase by 1 each step (1→2→3→4)." },
  { id: "paf-nv-q18", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shape changes from square to circle; dividing lines remain; small crosses move to the new sections created." },
  { id: "paf-nv-q19", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Triangle inside circle rotates 90° clockwise each step: 0°→90°→180°→270°." },
  { id: "paf-nv-q20", question: "Complete the size sequence:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Square grows by 15 units each step: 20→35→50→65." },
];

export const pafPatternComponents11to20 = {
  PQ11: { sequence: [PQ11_S1, PQ11_S2, PQ11_S3], options: [PQ11_WrongA, PQ11_WrongB, PQ11_WrongC, PQ11_Answer] },
  PQ12: { sequence: [PQ12_S1, PQ12_S2, PQ12_S3], options: [PQ12_WrongA, PQ12_WrongB, PQ12_WrongC, PQ12_Answer] },
  PQ13: { sequence: [PQ13_S1, PQ13_S2, PQ13_S3], options: [PQ13_WrongA, PQ13_WrongB, PQ13_WrongC, PQ13_Answer] },
  PQ14: { sequence: [PQ14_S1, PQ14_S2, PQ14_S3], options: [PQ14_WrongA, PQ14_WrongB, PQ14_WrongC, PQ14_Answer] },
  PQ15: { sequence: [PQ15_S1, PQ15_S2, PQ15_S3], options: [PQ15_Answer, PQ15_WrongA, PQ15_WrongB, PQ15_WrongC] },
  PQ16: { sequence: [PQ16_S1, PQ16_S2, PQ16_S3], options: [PQ16_WrongA, PQ16_WrongB, PQ16_WrongC, PQ16_Answer] },
  PQ17: { sequence: [PQ17_S1, PQ17_S2, PQ17_S3], options: [PQ17_WrongA, PQ17_WrongB, PQ17_WrongC, PQ17_Answer] },
  PQ18: { sequence: [PQ18_S1, PQ18_S2, PQ18_S3], options: [PQ18_WrongA, PQ18_WrongB, PQ18_WrongC, PQ18_Answer] },
  PQ19: { sequence: [PQ19_S1, PQ19_S2, PQ19_S3], options: [PQ19_WrongA, PQ19_WrongB, PQ19_WrongC, PQ19_Answer] },
  PQ20: { sequence: [PQ20_S1, PQ20_S2, PQ20_S3], options: [PQ20_WrongA, PQ20_WrongB, PQ20_WrongC, PQ20_Answer] },
};
