// PAF Non-verbal patterns Q1-Q10 (from PDF: Figure Analogies pages 1-7, Matrix pages 8-10)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Cross } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q1 (Page 1): Square grid with circle → filled square with white circle. Circle grid with square → ?
// Pattern: outline container with small shape → filled container with inverted small shape
const PQ1_S1 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={10} x2={50} y2={90} stroke="currentColor" strokeWidth={1.5} />
    <line x1={10} y1={50} x2={90} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <circle cx={72} cy={28} r={10} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ1_S2 = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <circle cx={50} cy={50} r={15} fill="white" stroke="white" strokeWidth={1} />
  </>
);
const PQ1_S3 = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={50} y1={12} x2={50} y2={88} stroke="currentColor" strokeWidth={1.5} />
    <line x1={12} y1={50} x2={88} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <rect x={60} y={60} width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ1_Answer = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={40} y={40} width={20} height={20} fill="white" stroke="white" strokeWidth={1} />
  </>
);
const PQ1_WrongA = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={40} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ1_WrongB = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ1_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="none" stroke="currentColor" strokeWidth={2} />
    <ellipse cx={50} cy={50} rx={15} ry={10} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q2 (Page 2): Filled triangle with circles → filled circle with white triangle. Trapezoid with squares → ?
const PQ2_S1 = () => (
  <>
    <polygon points="50,15 15,80 85,80" fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <circle cx={30} cy={25} r={5} fill="none" stroke="currentColor" strokeWidth={1.5} />
    <circle cx={25} cy={75} r={5} fill="none" stroke="currentColor" strokeWidth={1.5} />
    <circle cx={75} cy={75} r={5} fill="none" stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ2_S2 = () => (
  <>
    <circle cx={50} cy={50} r={38} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,30 30,70 70,70" fill="white" stroke="white" strokeWidth={1} />
  </>
);
const PQ2_S3 = () => (
  <>
    <polygon points="25,20 75,20 85,80 15,80" fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={30} y={25} width={8} height={8} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={25} width={8} height={8} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={50} y={75} width={8} height={8} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ2_Answer = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <polygon points="25,25 75,25 65,75 35,75" fill="white" stroke="white" strokeWidth={1} />
  </>
);
const PQ2_WrongA = () => (
  <>
    <polygon points="25,20 75,20 85,80 15,80" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ2_WrongB = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ2_WrongC = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="25,25 75,25 65,75 35,75" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);

// Q3 (Page 3): Shape arrangement analogy - shapes swap between inside/outside
const PQ3_S1 = () => (
  <>
    <Triangle x={30} y={30} size={30} strokeWidth={2} />
    <Cross x={70} y={30} size={25} strokeWidth={2} />
    <Square x={30} y={70} size={25} strokeWidth={2} />
    <Circle x={70} y={70} size={25} strokeWidth={2} />
  </>
);
const PQ3_S2 = () => (
  <>
    <Square x={35} y={50} size={45} strokeWidth={2} />
    <Cross x={35} y={50} size={20} strokeWidth={1.5} />
    <Circle x={70} y={50} size={35} strokeWidth={2} />
    <Triangle x={70} y={50} size={18} strokeWidth={1.5} />
  </>
);
const PQ3_S3 = () => (
  <>
    <Circle x={30} y={30} size={25} fill="currentColor" strokeWidth={2} />
    <Cross x={70} y={30} size={20} strokeWidth={2} />
    <Triangle x={30} y={70} size={28} rotation={180} strokeWidth={2} />
    <Square x={70} y={70} size={22} strokeWidth={2} />
  </>
);
const PQ3_Answer = () => (
  <>
    <Triangle x={35} y={50} size={40} rotation={180} strokeWidth={2} />
    <Cross x={35} y={50} size={16} strokeWidth={1.5} />
    <Square x={70} y={50} size={35} strokeWidth={2} />
    <circle cx={70} cy={50} r={10} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ3_WrongA = () => (
  <>
    <Triangle x={35} y={50} size={40} rotation={180} strokeWidth={2} />
    <Cross x={35} y={50} size={16} strokeWidth={1.5} />
    <Square x={70} y={50} size={35} strokeWidth={2} />
    <Circle x={70} y={50} size={15} strokeWidth={1.5} />
  </>
);
const PQ3_WrongB = () => (
  <>
    <Circle x={35} y={50} size={35} strokeWidth={2} />
    <Triangle x={35} y={50} size={18} strokeWidth={1.5} />
    <Square x={70} y={50} size={35} strokeWidth={2} />
    <Cross x={70} y={50} size={16} strokeWidth={1.5} />
  </>
);
const PQ3_WrongC = () => (
  <>
    <Triangle x={35} y={50} size={40} strokeWidth={2} />
    <Circle x={35} y={50} size={15} strokeWidth={1.5} />
    <Square x={70} y={50} size={35} strokeWidth={2} />
    <Cross x={70} y={50} size={16} strokeWidth={1.5} />
  </>
);

// Q4 (Page 4): Arrow direction reversal
const PQ4_S1 = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,20 95,25 85,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,45 95,50 85,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,70 5,75 15,80" fill="currentColor" />
  </>
);
const PQ4_S2 = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,20 5,25 15,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,45 5,50 15,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,70 95,75 85,80" fill="currentColor" />
  </>
);
const PQ4_S3 = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,20 95,25 85,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,45 5,50 15,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,70 95,75 85,80" fill="currentColor" />
  </>
);
const PQ4_Answer = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,20 5,25 15,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,45 95,50 85,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,70 5,75 15,80" fill="currentColor" />
  </>
);
const PQ4_WrongA = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,20 5,25 15,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,45 5,50 15,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,70 5,75 15,80" fill="currentColor" />
  </>
);
const PQ4_WrongB = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,20 95,25 85,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,45 95,50 85,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,70 95,75 85,80" fill="currentColor" />
  </>
);
const PQ4_WrongC = () => (
  <>
    <line x1={15} y1={25} x2={85} y2={25} stroke="currentColor" strokeWidth={2} />
    <polygon points="85,20 95,25 85,30" fill="currentColor" />
    <line x1={15} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,45 5,50 15,55" fill="currentColor" />
    <line x1={15} y1={75} x2={85} y2={75} stroke="currentColor" strokeWidth={2} />
    <polygon points="15,70 5,75 15,80" fill="currentColor" />
  </>
);

// Q5 (Page 5): Dots pattern → inverted triangle
const PQ5_S1 = () => (
  <>
    <Dot x={25} y={25} size={12} fill="currentColor" />
    <Dot x={75} y={25} size={12} fill="currentColor" />
    <Dot x={25} y={75} size={12} fill="currentColor" />
    <Dot x={75} y={75} size={12} fill="currentColor" />
  </>
);
const PQ5_S2 = () => (
  <>
    <Triangle x={50} y={50} size={60} rotation={180} strokeWidth={2} />
  </>
);
const PQ5_S3 = () => (
  <>
    <Dot x={50} y={20} size={12} fill="currentColor" />
    <Dot x={20} y={80} size={12} fill="currentColor" />
    <Dot x={80} y={80} size={12} fill="currentColor" />
  </>
);
const PQ5_Answer = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Triangle x={50} y={55} size={25} fill="currentColor" strokeWidth={1} />
  </>
);
const PQ5_WrongA = () => (
  <>
    <Triangle x={50} y={50} size={60} fill="currentColor" strokeWidth={2} />
  </>
);
const PQ5_WrongB = () => (
  <>
    <Square x={50} y={50} size={50} strokeWidth={2} />
    <Triangle x={50} y={50} size={30} strokeWidth={1.5} />
  </>
);
const PQ5_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={60} rotation={180} strokeWidth={2} />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);

// Q6 (Page 6): Nested squares with arrows - direction reversal
const PQ6_S1 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={25} y={25} width={50} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={38} y={38} width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="90,50 95,45 95,55" fill="currentColor" />
    <polygon points="50,10 45,5 55,5" fill="currentColor" />
    <polygon points="10,50 5,55 5,45" fill="currentColor" />
    <polygon points="50,90 55,95 45,95" fill="currentColor" />
  </>
);
const PQ6_S2 = () => (
  <>
    <rect x={10} y={10} width={80} height={80} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={25} y={25} width={50} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={38} y={38} width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="10,50 5,45 5,55" fill="currentColor" />
    <polygon points="50,90 45,95 55,95" fill="currentColor" />
    <polygon points="90,50 95,55 95,45" fill="currentColor" />
    <polygon points="50,10 55,5 45,5" fill="currentColor" />
  </>
);
const PQ6_S3 = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={30} y={30} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="85,50 90,45 90,55" fill="currentColor" />
    <polygon points="50,15 45,10 55,10" fill="currentColor" />
    <polygon points="15,50 10,55 10,45" fill="currentColor" />
    <polygon points="50,85 55,90 45,90" fill="currentColor" />
  </>
);
const PQ6_Answer = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={30} y={30} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="15,50 10,45 10,55" fill="currentColor" />
    <polygon points="50,85 45,90 55,90" fill="currentColor" />
    <polygon points="85,50 90,55 90,45" fill="currentColor" />
    <polygon points="50,15 55,10 45,10" fill="currentColor" />
  </>
);
const PQ6_WrongA = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="80,50 85,45 85,55" fill="currentColor" />
    <polygon points="20,50 15,55 15,45" fill="currentColor" />
  </>
);
const PQ6_WrongB = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={30} y={30} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="85,50 90,45 90,55" fill="currentColor" />
    <polygon points="50,15 45,10 55,10" fill="currentColor" />
  </>
);
const PQ6_WrongC = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={30} y={30} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="85,50 90,45 90,55" fill="currentColor" />
    <polygon points="50,15 45,10 55,10" fill="currentColor" />
    <polygon points="15,50 10,55 10,45" fill="currentColor" />
    <polygon points="50,85 55,90 45,90" fill="currentColor" />
  </>
);

// Q7 (Page 7): Grid with shading pattern (2×2 grid, shade arrangement)
const PQ7_S1 = () => (
  <>
    <rect x={10} y={10} width={40} height={40} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={50} y={10} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={10} y={50} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={50} y={50} width={40} height={40} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ7_S2 = () => (
  <>
    <rect x={10} y={10} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={30} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={50} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={70} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ7_S3 = () => (
  <>
    <rect x={10} y={10} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={50} y={10} width={40} height={40} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={10} y={50} width={40} height={40} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={50} y={50} width={40} height={40} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ7_Answer = () => (
  <>
    <rect x={10} y={10} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={30} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={50} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={70} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ7_WrongA = () => (
  <>
    <rect x={10} y={10} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={30} width={80} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={50} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={70} width={80} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ7_WrongB = () => (
  <>
    <rect x={10} y={10} width={20} height={80} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={30} y={10} width={20} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={50} y={10} width={20} height={80} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={70} y={10} width={20} height={80} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ7_WrongC = () => (
  <>
    <rect x={10} y={10} width={80} height={40} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={10} y={50} width={80} height={40} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);

// Q8 (Page 8): 3×3 matrix - shapes get more complex across row, different shapes per row
// Row1: Triangle, Triangle+line+circle, Line+circle; Row2: Rectangle+diagonal, Rect+cross+diag, Cross; Row3: Rect+curve, Rect+X, ?
const PQ8_S1 = () => (
  <>
    <Triangle x={50} y={40} size={50} strokeWidth={2} />
    <line x1={50} y1={65} x2={50} y2={15} stroke="currentColor" strokeWidth={2} />
    <circle cx={50} cy={18} r={6} fill="none" stroke="currentColor" strokeWidth={1.5} />
  </>
);
const PQ8_S2 = () => (
  <>
    <rect x={15} y={15} width={70} height={70} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={15} y1={85} x2={85} y2={15} stroke="currentColor" strokeWidth={2} />
    <Cross x={50} y={50} size={50} strokeWidth={1.5} />
  </>
);
const PQ8_S3 = () => (
  <>
    <rect x={15} y={20} width={70} height={60} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={15} y1={80} x2={85} y2={20} stroke="currentColor" strokeWidth={2} />
    <line x1={15} y1={20} x2={85} y2={80} stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ8_Answer = () => (
  <>
    <line x1={15} y1={15} x2={85} y2={85} stroke="currentColor" strokeWidth={2.5} />
    <line x1={85} y1={15} x2={15} y2={85} stroke="currentColor" strokeWidth={2.5} />
  </>
);
const PQ8_WrongA = () => (
  <>
    <line x1={15} y1={85} x2={85} y2={15} stroke="currentColor" strokeWidth={2.5} />
  </>
);
const PQ8_WrongB = () => (
  <>
    <Cross x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const PQ8_WrongC = () => (
  <>
    <line x1={15} y1={15} x2={85} y2={85} stroke="currentColor" strokeWidth={2.5} />
    <line x1={85} y1={15} x2={15} y2={85} stroke="currentColor" strokeWidth={2.5} />
    <path d="M 30 80 Q 50 50 70 80" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q9 (Page 9): 3×3 matrix with cross/star/diamond increasing complexity + ovals
const PQ9_S1 = () => (
  <>
    <Cross x={50} y={50} size={50} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} stroke="currentColor" strokeWidth={2} />
    <line x1={80} y1={20} x2={20} y2={80} stroke="currentColor" strokeWidth={2} />
  </>
);
const PQ9_S2 = () => (
  <>
    <Diamond x={50} y={50} size={60} strokeWidth={2} />
    <Diamond x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} />
    <line x1={50} y1={20} x2={50} y2={80} stroke="currentColor" strokeWidth={1.5} />
    <Dot x={25} y={25} size={8} fill="currentColor" />
    <Dot x={75} y={25} size={8} fill="currentColor" />
    <Dot x={25} y={75} size={8} fill="currentColor" />
    <Dot x={75} y={75} size={8} fill="currentColor" />
  </>
);
const PQ9_S3 = () => (
  <>
    <ellipse cx={35} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <ellipse cx={65} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <Cross x={50} y={50} size={30} strokeWidth={1.5} />
    <Dot x={50} y={25} size={6} fill="currentColor" />
    <Dot x={50} y={75} size={6} fill="currentColor" />
  </>
);
const PQ9_Answer = () => (
  <>
    <ellipse cx={35} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <ellipse cx={65} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={25} size={6} fill="currentColor" />
    <Dot x={50} y={75} size={6} fill="currentColor" />
  </>
);
const PQ9_WrongA = () => (
  <>
    <ellipse cx={35} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <ellipse cx={65} cy={50} rx={20} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={25} y={25} size={6} fill="currentColor" />
    <Dot x={75} y={25} size={6} fill="currentColor" />
    <Dot x={25} y={75} size={6} fill="currentColor" />
    <Dot x={75} y={75} size={6} fill="currentColor" />
  </>
);
const PQ9_WrongB = () => (
  <>
    <Cross x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const PQ9_WrongC = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={25} fill="none" stroke="currentColor" strokeWidth={2} />
    <Cross x={50} y={50} size={40} strokeWidth={1.5} />
  </>
);

// Q10 (Page 10): 3×3 matrix - filled oval on stem/line in different positions
const PQ10_S1 = () => (
  <>
    <ellipse cx={50} cy={40} rx={20} ry={12} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={52} x2={50} y2={80} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_S2 = () => (
  <>
    <ellipse cx={50} cy={50} rx={20} ry={12} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={70} y1={50} x2={90} y2={50} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_S3 = () => (
  <>
    <ellipse cx={50} cy={45} rx={18} ry={11} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={34} x2={50} y2={15} stroke="currentColor" strokeWidth={3} />
    <line x1={68} y1={45} x2={85} y2={45} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_Answer = () => (
  <>
    <ellipse cx={50} cy={50} rx={18} ry={11} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={61} x2={50} y2={80} stroke="currentColor" strokeWidth={3} />
    <line x1={68} y1={50} x2={85} y2={50} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_WrongA = () => (
  <>
    <ellipse cx={50} cy={50} rx={18} ry={11} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={39} x2={50} y2={20} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_WrongB = () => (
  <>
    <ellipse cx={50} cy={50} rx={18} ry={11} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={10} y1={50} x2={32} y2={50} stroke="currentColor" strokeWidth={3} />
    <line x1={68} y1={50} x2={90} y2={50} stroke="currentColor" strokeWidth={3} />
  </>
);
const PQ10_WrongC = () => (
  <>
    <ellipse cx={50} cy={50} rx={18} ry={11} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <line x1={50} y1={39} x2={50} y2={15} stroke="currentColor" strokeWidth={3} />
    <line x1={50} y1={61} x2={50} y2={85} stroke="currentColor" strokeWidth={3} />
  </>
);

export const pafPatterns1to10: MCQ[] = [
  { id: "paf-nv-q1", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Outline shape with small shape inside becomes filled shape with inverted (white) small shape." },
  { id: "paf-nv-q2", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Filled shape contains the inverted outline of the other shape in the pair." },
  { id: "paf-nv-q3", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shapes swap from outside arrangement to inside arrangement, maintaining their types." },
  { id: "paf-nv-q4", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "All arrow directions are reversed. Right becomes left and vice versa." },
  { id: "paf-nv-q5", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 0, explanation: "Dots form the vertices of a shape; the answer is that shape with additional fill detail." },
  { id: "paf-nv-q6", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow directions on nested squares are reversed - outward becomes inward and vice versa." },
  { id: "paf-nv-q7", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Diagonal checkerboard pattern converts to horizontal stripes with colors inverted." },
  { id: "paf-nv-q8", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Each row shows progressive simplification: the outer shape is removed, leaving only the internal lines." },
  { id: "paf-nv-q9", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 0, explanation: "Row pattern: shapes simplify while maintaining ovals and key decorative elements." },
  { id: "paf-nv-q10", question: "Find the missing pattern in the matrix:", options: ["A","B","C","D"], correctAnswer: 0, explanation: "The stem/line position rotates and accumulates: the answer combines bottom stem and right line." },
];

export const pafPatternComponents1to10 = {
  PQ1: { sequence: [PQ1_S1, PQ1_S2, PQ1_S3], options: [PQ1_WrongA, PQ1_WrongB, PQ1_WrongC, PQ1_Answer] },
  PQ2: { sequence: [PQ2_S1, PQ2_S2, PQ2_S3], options: [PQ2_WrongA, PQ2_WrongB, PQ2_WrongC, PQ2_Answer] },
  PQ3: { sequence: [PQ3_S1, PQ3_S2, PQ3_S3], options: [PQ3_WrongA, PQ3_WrongB, PQ3_WrongC, PQ3_Answer] },
  PQ4: { sequence: [PQ4_S1, PQ4_S2, PQ4_S3], options: [PQ4_WrongA, PQ4_WrongB, PQ4_WrongC, PQ4_Answer] },
  PQ5: { sequence: [PQ5_S1, PQ5_S2, PQ5_S3], options: [PQ5_Answer, PQ5_WrongA, PQ5_WrongB, PQ5_WrongC] },
  PQ6: { sequence: [PQ6_S1, PQ6_S2, PQ6_S3], options: [PQ6_WrongA, PQ6_WrongB, PQ6_WrongC, PQ6_Answer] },
  PQ7: { sequence: [PQ7_S1, PQ7_S2, PQ7_S3], options: [PQ7_WrongA, PQ7_WrongB, PQ7_WrongC, PQ7_Answer] },
  PQ8: { sequence: [PQ8_S1, PQ8_S2, PQ8_S3], options: [PQ8_WrongA, PQ8_WrongB, PQ8_WrongC, PQ8_Answer] },
  PQ9: { sequence: [PQ9_S1, PQ9_S2, PQ9_S3], options: [PQ9_Answer, PQ9_WrongA, PQ9_WrongB, PQ9_WrongC] },
  PQ10: { sequence: [PQ10_S1, PQ10_S2, PQ10_S3], options: [PQ10_Answer, PQ10_WrongA, PQ10_WrongB, PQ10_WrongC] },
};
