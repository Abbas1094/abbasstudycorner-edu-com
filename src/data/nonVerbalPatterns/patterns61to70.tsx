// Non-verbal patterns Q61-Q70 (from Pro Genius Students PDFs + Dogar's ISSB)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q61: Arrow in circle rotating 90° clockwise (right→down→left→up)
// From Pro Genius PDF page 1, Q1
const Q61_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={90} strokeWidth={2} />
    <Dot x={50} y={75} size={5} fill="currentColor" />
  </>
);
const Q61_Seq2 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={0} strokeWidth={2} />
    <Dot x={75} y={50} size={5} fill="currentColor" />
  </>
);
const Q61_Seq3 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={270} strokeWidth={2} />
    <Dot x={50} y={25} size={5} fill="currentColor" />
  </>
);
const Q61_Answer = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={180} strokeWidth={2} />
    <Dot x={25} y={50} size={5} fill="currentColor" />
  </>
);
const Q61_WrongA = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={90} strokeWidth={2} />
    <Dot x={25} y={50} size={5} fill="currentColor" />
  </>
);
const Q61_WrongB = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={180} strokeWidth={2} />
    <Dot x={75} y={50} size={5} fill="currentColor" />
  </>
);
const Q61_WrongC = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Arrow x={50} y={50} size={25} rotation={0} strokeWidth={2} />
    <Dot x={25} y={50} size={5} fill="currentColor" />
  </>
);

// Q62: Arrows increasing: 2→3→4→? (answer: 5 arrows pointing left)
// From Pro Genius PDF page 2, Q4
const makeArrows = (count: number, direction: string) => {
  const arrows = [];
  const spacing = 70 / (count + 1);
  for (let i = 0; i < count; i++) {
    const y = 20 + spacing * (i + 1);
    if (direction === 'up') {
      arrows.push(<polyline key={i} points={`40,${y+5} 50,${y-5} 60,${y+5}`} fill="none" strokeWidth={2} stroke="currentColor" />);
    } else if (direction === 'left') {
      arrows.push(<polyline key={i} points={`55,${y-5} 45,${y} 55,${y+5}`} fill="none" strokeWidth={2} stroke="currentColor" />);
      arrows.push(<line key={`l${i}`} x1={45} y1={y} x2={65} y2={y} strokeWidth={2} stroke="currentColor" />);
    }
  }
  return arrows;
};

const Q62_Seq1 = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={40} y={35} size={20} rotation={0} strokeWidth={2} />
    <Arrow x={60} y={55} size={20} rotation={0} strokeWidth={2} />
  </>
);
const Q62_Seq2 = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={35} y={30} size={15} rotation={90} strokeWidth={1.5} />
    <Arrow x={50} y={45} size={15} rotation={0} strokeWidth={1.5} />
    <Arrow x={65} y={60} size={15} rotation={0} strokeWidth={1.5} />
  </>
);
const Q62_Seq3 = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={30} y={28} size={12} rotation={180} strokeWidth={1.5} />
    <Arrow x={50} y={38} size={12} rotation={0} strokeWidth={1.5} />
    <Arrow x={70} y={48} size={12} rotation={0} strokeWidth={1.5} />
    <Arrow x={40} y={62} size={12} rotation={0} strokeWidth={1.5} />
  </>
);
const Q62_Answer = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={30} y={25} size={10} rotation={270} strokeWidth={1.5} />
    <Arrow x={50} y={35} size={10} rotation={270} strokeWidth={1.5} />
    <Arrow x={70} y={45} size={10} rotation={270} strokeWidth={1.5} />
    <Arrow x={40} y={55} size={10} rotation={270} strokeWidth={1.5} />
    <Arrow x={60} y={65} size={10} rotation={270} strokeWidth={1.5} />
  </>
);
const Q62_WrongA = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={30} size={15} rotation={0} strokeWidth={1.5} />
    <Arrow x={50} y={50} size={15} rotation={0} strokeWidth={1.5} />
    <Arrow x={50} y={70} size={15} rotation={0} strokeWidth={1.5} />
  </>
);
const Q62_WrongB = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={35} size={20} rotation={180} strokeWidth={2} />
    <Arrow x={50} y={55} size={20} rotation={180} strokeWidth={2} />
  </>
);
const Q62_WrongC = () => (
  <>
    <rect x={20} y={15} width={60} height={70} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={35} y={40} size={15} rotation={90} strokeWidth={1.5} />
    <Arrow x={55} y={40} size={15} rotation={270} strokeWidth={1.5} />
    <Arrow x={45} y={60} size={15} rotation={0} strokeWidth={1.5} />
    <Arrow x={65} y={60} size={15} rotation={180} strokeWidth={1.5} />
  </>
);

// Q63: Diagonal arrow in square rotating 90° clockwise
// From Pro Genius PDF page 5, Q1
const Q63_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={30} y1={70} x2={70} y2={30} strokeWidth={2} stroke="currentColor" />
    <polygon points="67,33 70,30 73,37" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={30} y1={30} x2={70} y2={70} strokeWidth={2} stroke="currentColor" />
    <polygon points="67,67 70,70 73,63" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={70} y1={30} x2={30} y2={70} strokeWidth={2} stroke="currentColor" />
    <polygon points="33,67 30,70 27,63" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={70} y1={70} x2={30} y2={30} strokeWidth={2} stroke="currentColor" />
    <polygon points="33,33 30,30 27,37" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={30} y1={70} x2={70} y2={30} strokeWidth={2} stroke="currentColor" />
    <polygon points="33,67 30,70 27,63" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={2} stroke="currentColor" />
    <polygon points="67,47 70,50 67,53" fill="currentColor" stroke="currentColor" />
  </>
);
const Q63_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={30} x2={50} y2={70} strokeWidth={2} stroke="currentColor" />
    <polygon points="47,33 50,30 53,33" fill="currentColor" stroke="currentColor" />
  </>
);

// Q64: Shapes alternating - large/small size pattern (rect→small rect→big rect with inner → small with inner)
// From Pro Genius PDF page 5, Q2
const Q64_Seq1 = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q64_Seq2 = () => (
  <>
    <rect x={30} y={30} width={40} height={40} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q64_Seq3 = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="none" strokeWidth={2} stroke="currentColor" />
    <rect x={35} y={35} width={30} height={30} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q64_Answer = () => (
  <>
    <Circle x={50} y={50} size={40} strokeWidth={2} />
  </>
);
const Q64_WrongA = () => (
  <>
    <rect x={30} y={30} width={40} height={40} fill="none" strokeWidth={2} stroke="currentColor" />
    <rect x={38} y={38} width={24} height={24} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q64_WrongB = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="none" strokeWidth={2} stroke="currentColor" />
    <Circle x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q64_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={50} size={30} strokeWidth={2} />
  </>
);

// Q65: Circle with X pattern - circle split with cross lines, sections alternately filled
// From Pro Genius PDF page 5, Q3
const Q65_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
    <path d="M 50 22 A 28 28 0 0 1 78 50 L 50 50 Z" fill="currentColor" />
  </>
);
const Q65_Seq2 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
    <path d="M 78 50 A 28 28 0 0 1 50 78 L 50 50 Z" fill="currentColor" />
  </>
);
const Q65_Seq3 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
    <path d="M 50 78 A 28 28 0 0 1 22 50 L 50 50 Z" fill="currentColor" />
  </>
);
const Q65_Answer = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
    <path d="M 22 50 A 28 28 0 0 1 50 22 L 50 50 Z" fill="currentColor" />
  </>
);
const Q65_WrongA = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
    <path d="M 50 22 A 28 28 0 0 1 78 50 L 50 50 Z" fill="currentColor" />
    <path d="M 50 78 A 28 28 0 0 1 22 50 L 50 50 Z" fill="currentColor" />
  </>
);
const Q65_WrongB = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={22} x2={50} y2={78} strokeWidth={2} stroke="currentColor" />
    <line x1={22} y1={50} x2={78} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q65_WrongC = () => (
  <>
    <circle cx={50} cy={50} r={27.5} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q66: Triangle with shapes inside - alternating triangle/circle with inner shape rotating
// From Pro Genius PDF page 6, Q2
const Q66_Seq1 = () => (
  <>
    <Circle x={50} y={35} size={30} strokeWidth={2} />
    <Triangle x={50} y={35} size={20} strokeWidth={2} />
    <Triangle x={50} y={70} size={35} strokeWidth={2} />
    <rect x={42} y={62} width={16} height={12} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q66_Seq2 = () => (
  <>
    <ellipse cx={50} cy={35} rx={18} ry={15} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={35} size={18} fill="currentColor" strokeWidth={1} />
    <ellipse cx={50} cy={70} rx={18} ry={12} fill="none" strokeWidth={2} stroke="currentColor" />
    <circle cx={50} cy={70} r={6} fill="currentColor" />
  </>
);
const Q66_Seq3 = () => (
  <>
    <Circle x={50} y={35} size={30} strokeWidth={2} />
    <Triangle x={50} y={35} size={18} strokeWidth={2} />
    <Dot x={50} y={35} size={8} fill="currentColor" />
    <Triangle x={50} y={70} size={35} strokeWidth={2} />
    <circle cx={50} cy={70} r={8} fill="currentColor" />
  </>
);
const Q66_Answer = () => (
  <>
    <ellipse cx={50} cy={35} rx={18} ry={15} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={35} size={15} fill="currentColor" strokeWidth={1} />
    <Dot x={50} y={35} size={5} fill="hsl(var(--background))" />
    <ellipse cx={50} cy={70} rx={18} ry={12} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={70} size={12} fill="currentColor" strokeWidth={1} />
  </>
);
const Q66_WrongA = () => (
  <>
    <Triangle x={50} y={40} size={50} strokeWidth={2} />
    <Circle x={50} y={45} size={20} strokeWidth={2} />
  </>
);
const Q66_WrongB = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Triangle x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q66_WrongC = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);

// Q67: X inside square with colored triangular section rotating
// From Pro Genius PDF page 6, Q3
const Q67_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 20 20 L 50 50 L 80 20 Z" fill="currentColor" />
  </>
);
const Q67_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 80 20 L 50 50 L 80 80 Z" fill="currentColor" />
  </>
);
const Q67_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 80 80 L 50 50 L 20 80 Z" fill="currentColor" />
  </>
);
const Q67_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 20 20 L 50 50 L 20 80 Z" fill="currentColor" />
  </>
);
const Q67_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 20 20 L 50 50 L 80 20 Z" fill="currentColor" />
    <path d="M 80 80 L 50 50 L 20 80 Z" fill="currentColor" />
  </>
);
const Q67_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
  </>
);
const Q67_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={1.5} stroke="currentColor" />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 20 20 L 50 20 L 50 50 L 20 50 Z" fill="currentColor" />
  </>
);

// Q68: Circles increasing + position of square changing
// From Non_Verbal_2 PDF Q4
const Q68_Seq1 = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Diamond x={70} y={30} size={12} strokeWidth={2} />
  </>
);
const Q68_Seq2 = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Dot x={30} y={50} size={8} />
    <rect x={44} y={44} width={12} height={12} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q68_Seq3 = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Dot x={30} y={50} size={8} />
    <Dot x={50} y={50} size={8} />
    <Diamond x={70} y={50} size={12} strokeWidth={2} />
  </>
);
const Q68_Answer = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Dot x={70} y={30} size={8} />
    <Dot x={30} y={50} size={8} />
    <Dot x={50} y={50} size={8} />
    <rect x={64} y={44} width={12} height={12} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q68_WrongA = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Dot x={70} y={30} size={8} />
    <Diamond x={30} y={50} size={12} strokeWidth={2} />
    <Dot x={50} y={50} size={8} />
  </>
);
const Q68_WrongB = () => (
  <>
    <Dot x={30} y={30} size={8} />
    <Dot x={50} y={30} size={8} />
    <Dot x={70} y={30} size={8} />
    <Dot x={30} y={50} size={8} />
    <Dot x={50} y={50} size={8} />
    <Dot x={70} y={50} size={8} />
  </>
);
const Q68_WrongC = () => (
  <>
    <Dot x={30} y={50} size={8} />
    <Dot x={50} y={50} size={8} />
    <Dot x={70} y={50} size={8} />
    <rect x={24} y={24} width={12} height={12} fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={30} size={8} />
  </>
);

// Q69: Inner/outer shape rotation - outer rotates 45° CW, inner shape shrinks
// From Non_Verbal_2 PDF Q5
const Q69_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 35 50 L 50 35 L 65 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} rotation={45} />
    <path d="M 50 35 L 65 50 L 50 65" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 35 50 L 50 65 L 65 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} rotation={45} />
    <path d="M 50 65 L 35 50 L 50 35" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 65 L 35 50 L 50 35" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} rotation={45} />
    <path d="M 35 50 L 50 35 L 65 50" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q69_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 35 L 65 50 L 50 65" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);

// Q70: Triangle with star inside - triangle flips, star moves to different corner
// From Pro Genius PDF page 6, Q1
const Q70_Seq1 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Star x={50} y={35} size={15} strokeWidth={1.5} />
    <line x1={30} y1={72} x2={70} y2={72} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q70_Seq2 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} rotation={90} />
    <Star x={60} y={50} size={15} strokeWidth={1.5} />
    <line x1={28} y1={30} x2={28} y2={70} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q70_Seq3 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} rotation={180} />
    <Star x={50} y={65} size={15} strokeWidth={1.5} />
    <line x1={30} y1={28} x2={70} y2={28} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q70_Answer = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} rotation={270} />
    <Star x={40} y={50} size={15} strokeWidth={1.5} />
    <line x1={72} y1={30} x2={72} y2={70} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q70_WrongA = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Star x={50} y={65} size={15} strokeWidth={1.5} />
  </>
);
const Q70_WrongB = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} rotation={270} />
    <Star x={60} y={50} size={15} strokeWidth={1.5} />
    <line x1={28} y1={30} x2={28} y2={70} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q70_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} rotation={180} />
    <Star x={40} y={50} size={15} strokeWidth={1.5} />
    <line x1={72} y1={30} x2={72} y2={70} strokeWidth={2} stroke="currentColor" />
  </>
);

export const patterns61to70: MCQ[] = [
  { id: "nv-q61", question: "Arrow rotates 90° clockwise in circle, dot follows opposite. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow: right→up→left→down. Dot moves to opposite side." },
  { id: "nv-q62", question: "Number of arrows increases by one each step. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrows increase: 2→3→4→5. Pattern adds one arrow each step." },
  { id: "nv-q63", question: "Diagonal arrow in square rotates 90° clockwise. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow direction: NE→SE→SW→NW (90° CW rotation each)." },
  { id: "nv-q64", question: "Shapes alternate between large and small with inner shape. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Pattern: large rect → small rect → large+inner → circle (shape change)." },
  { id: "nv-q65", question: "Filled quarter of circle rotates 90° clockwise. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Filled section: TR→BR→BL→TL (90° CW rotation)." },
  { id: "nv-q66", question: "Alternating shapes with inner elements. What completes the pattern?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Circle/oval with triangle/shapes inside alternate with increasing complexity." },
  { id: "nv-q67", question: "Filled triangle section of X rotates clockwise. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Filled section in X: top→right→bottom→left (90° CW)." },
  { id: "nv-q68", question: "Dots increase by one, diamond/square alternates position. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Dots: 2→3→4→5. Shape alternates between diamond and square." },
  { id: "nv-q69", question: "Outer square alternates 45° rotation, inner chevron rotates 90°. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Square: 0°→45°→0°→45°. Chevron rotates 90° CW each step." },
  { id: "nv-q70", question: "Triangle rotates 90° CW, star follows apex, line on opposite. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Triangle rotates 90° each step. Star stays at apex, line at base." },
];

export const patternComponents61to70 = {
  Q61: { sequence: [Q61_Seq1, Q61_Seq2, Q61_Seq3], options: [Q61_WrongA, Q61_WrongB, Q61_WrongC, Q61_Answer] },
  Q62: { sequence: [Q62_Seq1, Q62_Seq2, Q62_Seq3], options: [Q62_WrongA, Q62_WrongB, Q62_WrongC, Q62_Answer] },
  Q63: { sequence: [Q63_Seq1, Q63_Seq2, Q63_Seq3], options: [Q63_WrongA, Q63_WrongB, Q63_WrongC, Q63_Answer] },
  Q64: { sequence: [Q64_Seq1, Q64_Seq2, Q64_Seq3], options: [Q64_WrongA, Q64_WrongB, Q64_WrongC, Q64_Answer] },
  Q65: { sequence: [Q65_Seq1, Q65_Seq2, Q65_Seq3], options: [Q65_WrongA, Q65_WrongB, Q65_WrongC, Q65_Answer] },
  Q66: { sequence: [Q66_Seq1, Q66_Seq2, Q66_Seq3], options: [Q66_WrongA, Q66_WrongB, Q66_WrongC, Q66_Answer] },
  Q67: { sequence: [Q67_Seq1, Q67_Seq2, Q67_Seq3], options: [Q67_WrongA, Q67_WrongB, Q67_WrongC, Q67_Answer] },
  Q68: { sequence: [Q68_Seq1, Q68_Seq2, Q68_Seq3], options: [Q68_WrongA, Q68_WrongB, Q68_WrongC, Q68_Answer] },
  Q69: { sequence: [Q69_Seq1, Q69_Seq2, Q69_Seq3], options: [Q69_WrongA, Q69_WrongB, Q69_WrongC, Q69_Answer] },
  Q70: { sequence: [Q70_Seq1, Q70_Seq2, Q70_Seq3], options: [Q70_WrongA, Q70_WrongB, Q70_WrongC, Q70_Answer] },
};
