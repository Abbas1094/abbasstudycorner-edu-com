// Non-verbal patterns Q71-Q80 (from Pro Genius Students PDFs)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q71: L-bracket rotating 90° CW each step (page 8, Q1 of Non_Verbal_by_pro_genius)
// Sequence: top-right corner → bottom-right → bottom-left → top-left
const Q71_Seq1 = () => (
  <>
    <path d="M 30 30 L 70 30 L 70 45" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="66,42 70,50 74,42" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_Seq2 = () => (
  <>
    <path d="M 70 30 L 70 70 L 55 70" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="58,66 50,70 58,74" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_Seq3 = () => (
  <>
    <path d="M 70 70 L 30 70 L 30 55" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="26,58 30,50 34,58" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_Answer = () => (
  <>
    <path d="M 30 70 L 30 30 L 45 30" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="42,26 50,30 42,34" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_WrongA = () => (
  <>
    <path d="M 30 30 L 70 30 L 70 45" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="66,42 70,50 74,42" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_WrongB = () => (
  <>
    <path d="M 30 30 L 30 70 L 45 70" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="42,66 50,70 42,74" fill="currentColor" stroke="currentColor" />
  </>
);
const Q71_WrongC = () => (
  <>
    <path d="M 70 30 L 30 30 L 30 45" fill="none" strokeWidth={3} stroke="currentColor" />
    <polygon points="26,42 30,50 34,42" fill="currentColor" stroke="currentColor" />
  </>
);

// Q72: Alternating filled/unfilled triangles in sequence (page 9, Q1)
// filled-down, unfilled-up, filled-down (inverted), unfilled-down → answer: filled-up-left pointing
const Q72_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 30 35 L 70 35 L 50 65 Z" fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q72_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 30 L 70 65 L 30 65 Z" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q72_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 30 65 L 70 65 L 50 35 Z" fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <path d="M 35 35 L 50 55 L 65 35 Z" fill="none" stroke="currentColor" strokeWidth={1.5} />
  </>
);
const Q72_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 30 L 70 65 L 30 65 Z" fill="none" stroke="currentColor" strokeWidth={2} />
    <path d="M 30 35 L 70 35 L 50 65 Z" fill="currentColor" stroke="currentColor" strokeWidth={1.5} />
  </>
);
const Q72_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 30 L 70 65 L 30 65 Z" fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q72_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 30 35 L 70 35 L 50 65 Z" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q72_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 30 L 70 65 L 30 65 Z" fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <path d="M 30 35 L 70 35 L 50 65 Z" fill="none" stroke="currentColor" strokeWidth={1.5} />
  </>
);

// Q73: Square with circle(top-left)+X(bottom-right) positions rotating CW (page 17, Q1)
const Q73_Seq1 = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <circle cx={35} cy={35} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <text x={65} y={70} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
  </>
);
const Q73_Seq2 = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <text x={65} y={40} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
    <circle cx={35} cy={65} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q73_Seq3 = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <text x={35} y={40} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
    <circle cx={65} cy={65} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q73_Answer = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <circle cx={65} cy={35} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <text x={35} y={70} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
  </>
);
const Q73_WrongA = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <circle cx={35} cy={35} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <text x={65} y={70} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
  </>
);
const Q73_WrongB = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <circle cx={50} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
    <text x={50} y={40} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
  </>
);
const Q73_WrongC = () => (
  <>
    <Square x={50} y={50} size={55} strokeWidth={2} />
    <text x={65} y={40} fontSize={16} textAnchor="middle" fill="currentColor" fontWeight="bold">×</text>
    <circle cx={65} cy={65} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q74: Outer shape changes (triangle→circle→inverted-tri→rectangle), inner shape mirrors (page 18, Q1)
const Q74_Seq1 = () => (
  <>
    <path d="M 50 20 L 80 70 L 20 70 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <circle cx={50} cy={55} r={10} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q74_Seq2 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 40 L 60 55 L 40 55 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q74_Seq3 = () => (
  <>
    <path d="M 50 75 L 80 30 L 20 30 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <Square x={50} y={42} size={20} strokeWidth={2} />
  </>
);
const Q74_Answer = () => (
  <>
    <rect x={20} y={25} width={60} height={50} fill="none" strokeWidth={2} stroke="currentColor" rx={3} />
    <path d="M 50 55 L 40 40 L 60 40 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q74_WrongA = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 40 L 60 55 L 40 55 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q74_WrongB = () => (
  <>
    <path d="M 50 20 L 80 70 L 20 70 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <path d="M 50 55 L 60 40 L 40 40 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q74_WrongC = () => (
  <>
    <rect x={20} y={25} width={60} height={50} fill="none" strokeWidth={2} stroke="currentColor" rx={3} />
    <circle cx={50} cy={50} r={12} fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);

// Q75: Shapes increasing complexity: pentagon→star→sunburst→filled-sunburst (page 18, Q2)
const Q75_Seq1 = () => (
  <path d="M 50 25 L 65 40 L 60 60 L 40 60 L 35 40 Z" fill="none" strokeWidth={2} stroke="currentColor" />
);
const Q75_Seq2 = () => (
  <>
    <Star x={50} y={50} size={45} strokeWidth={2} />
  </>
);
const Q75_Seq3 = () => {
  const spikes = 12;
  const outerR = 28, innerR = 18;
  const points = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }
  return <polygon points={points.join(' ')} fill="none" strokeWidth={1.5} stroke="currentColor" />;
};
const Q75_Answer = () => {
  const spikes = 12;
  const outerR = 28, innerR = 18;
  const points = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }
  return <polygon points={points.join(' ')} fill="currentColor" strokeWidth={1.5} stroke="currentColor" />;
};
const Q75_WrongA = () => (
  <path d="M 50 25 L 65 40 L 60 60 L 40 60 L 35 40 Z" fill="currentColor" strokeWidth={2} stroke="currentColor" />
);
const Q75_WrongB = () => (
  <>
    <Star x={50} y={50} size={45} strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="currentColor" />
  </>
);
const Q75_WrongC = () => {
  const spikes = 8;
  const outerR = 28, innerR = 20;
  const points = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }
  return <polygon points={points.join(' ')} fill="none" strokeWidth={1.5} stroke="currentColor" />;
};

// Q76: Circle-triangle alternation with inner shapes (page 6, Q2)
// Seq: circle(tri+oval inside) → oval(tri-filled+circle) → circle(tri-dot+tri-filled) → ?
const Q76_Seq1 = () => (
  <>
    <Circle x={50} y={40} size={35} strokeWidth={2} />
    <Triangle x={50} y={40} size={20} strokeWidth={1.5} />
    <Triangle x={50} y={70} size={30} strokeWidth={2} />
    <rect x={44} y={65} width={12} height={8} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q76_Seq2 = () => (
  <>
    <ellipse cx={50} cy={40} rx={20} ry={15} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={40} size={18} strokeWidth={1.5} />
    <ellipse cx={50} cy={70} rx={18} ry={10} fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={70} size={7} fill="currentColor" />
  </>
);
const Q76_Seq3 = () => (
  <>
    <Circle x={50} y={40} size={35} strokeWidth={2} />
    <Triangle x={50} y={40} size={18} strokeWidth={1.5} />
    <Dot x={50} y={40} size={5} fill="currentColor" />
    <Triangle x={50} y={70} size={30} strokeWidth={2} />
    <Dot x={50} y={70} size={7} fill="currentColor" />
  </>
);
const Q76_Answer = () => (
  <>
    <ellipse cx={50} cy={40} rx={20} ry={15} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={40} size={16} fill="currentColor" strokeWidth={1} />
    <Dot x={50} y={40} size={4} fill="hsl(var(--background))" />
    <ellipse cx={50} cy={70} rx={18} ry={10} fill="none" strokeWidth={2} stroke="currentColor" />
    <Triangle x={50} y={70} size={12} fill="currentColor" strokeWidth={1} />
  </>
);
const Q76_WrongA = () => (
  <>
    <Triangle x={50} y={50} size={50} strokeWidth={2} />
    <Circle x={50} y={55} size={20} strokeWidth={2} />
  </>
);
const Q76_WrongB = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Triangle x={50} y={50} size={30} fill="currentColor" strokeWidth={1} />
  </>
);
const Q76_WrongC = () => (
  <>
    <ellipse cx={50} cy={50} rx={25} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);

// Q77: Square with X-pattern, colored triangle section rotating CW (same as Q67 but different fill pattern)
// Seq: top-left → top-right → bottom-right → bottom-left colored with hatching
const Q77_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    {/* Hatching in top section */}
    {[25,30,35,40,45].map((x,i) => <line key={i} x1={x} y1={20} x2={x+15} y2={35} strokeWidth={0.8} stroke="currentColor" />)}
    <path d="M 20 20 L 50 50 L 80 20 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q77_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    {[60,65,70,75].map((x,i) => <line key={i} x1={x} y1={20+(x-50)} x2={x} y2={50} strokeWidth={0.8} stroke="currentColor" />)}
    <path d="M 80 20 L 50 50 L 80 80 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q77_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    {[25,30,35,40,45].map((x,i) => <line key={i} x1={x} y1={80} x2={x+15} y2={65} strokeWidth={0.8} stroke="currentColor" />)}
    <path d="M 80 80 L 50 50 L 20 80 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q77_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    {[25,30,35,40].map((y,i) => <line key={i} x1={20} y1={y} x2={20+(y-20)} y2={y+10} strokeWidth={0.8} stroke="currentColor" />)}
    <path d="M 20 20 L 50 50 L 20 80 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q77_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <path d="M 20 20 L 50 50 L 80 20 Z" fill="currentColor" />
    <path d="M 80 80 L 50 50 L 20 80 Z" fill="currentColor" />
  </>
);
const Q77_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
  </>
);
const Q77_WrongC = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={1.5} stroke="currentColor" />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1.5} stroke="currentColor" />
    {[25,30,35,40].map((y,i) => <line key={i} x1={20} y1={y} x2={50} y2={y} strokeWidth={0.8} stroke="currentColor" />)}
  </>
);

// Q78: Mirror image analogy (Non-verbal_Pro_Genius page 1) - horizontal flip
// Pattern: figure is to its mirror as X is to ?
const Q78_Seq1 = () => (
  <>
    <line x1={30} y1={30} x2={30} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={30} y1={35} x2={55} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={30} y1={50} x2={50} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={30} y1={65} x2={45} y2={65} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_Seq2 = () => (
  <>
    <line x1={70} y1={30} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={70} y1={35} x2={45} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={70} y1={50} x2={50} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={70} y1={65} x2={55} y2={65} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_Seq3 = () => (
  <>
    <line x1={35} y1={30} x2={35} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={35} y1={35} x2={60} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={35} y1={50} x2={65} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={60} y1={30} x2={60} y2={55} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_Answer = () => (
  <>
    <line x1={65} y1={30} x2={65} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={65} y1={35} x2={40} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={65} y1={50} x2={35} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={40} y1={30} x2={40} y2={55} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_WrongA = () => (
  <>
    <line x1={35} y1={30} x2={35} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={35} y1={65} x2={60} y2={65} strokeWidth={2.5} stroke="currentColor" />
    <line x1={35} y1={50} x2={65} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={60} y1={45} x2={60} y2={70} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_WrongB = () => (
  <>
    <line x1={65} y1={30} x2={65} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={65} y1={35} x2={40} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={65} y1={50} x2={35} y2={50} strokeWidth={2.5} stroke="currentColor" />
    <line x1={40} y1={45} x2={40} y2={70} strokeWidth={2.5} stroke="currentColor" />
  </>
);
const Q78_WrongC = () => (
  <>
    <line x1={50} y1={30} x2={50} y2={70} strokeWidth={3} stroke="currentColor" />
    <line x1={50} y1={35} x2={30} y2={35} strokeWidth={2.5} stroke="currentColor" />
    <line x1={50} y1={50} x2={70} y2={50} strokeWidth={2.5} stroke="currentColor" />
  </>
);

// Q79: Circles arrangement pattern (page 8, Q4) - circles increasing in grid
// 2×1 → 2×2 → 3×2 → 3×3
const Q79_Seq1 = () => (
  <>
    <Circle x={35} y={40} size={20} strokeWidth={2} />
    <Circle x={55} y={40} size={20} strokeWidth={2} />
  </>
);
const Q79_Seq2 = () => (
  <>
    <Circle x={35} y={35} size={18} strokeWidth={2} />
    <Circle x={55} y={35} size={18} strokeWidth={2} />
    <Circle x={35} y={55} size={18} strokeWidth={2} />
    <Circle x={55} y={55} size={18} strokeWidth={2} />
  </>
);
const Q79_Seq3 = () => (
  <>
    <Circle x={30} y={35} size={16} strokeWidth={2} />
    <Circle x={50} y={35} size={16} strokeWidth={2} />
    <Circle x={70} y={35} size={16} strokeWidth={2} />
    <Circle x={30} y={55} size={16} strokeWidth={2} />
    <Circle x={50} y={55} size={16} strokeWidth={2} />
    <Circle x={70} y={55} size={16} strokeWidth={2} />
  </>
);
const Q79_Answer = () => (
  <>
    <Circle x={30} y={30} size={14} strokeWidth={2} />
    <Circle x={50} y={30} size={14} strokeWidth={2} />
    <Circle x={70} y={30} size={14} strokeWidth={2} />
    <Circle x={30} y={50} size={14} strokeWidth={2} />
    <Circle x={50} y={50} size={14} strokeWidth={2} />
    <Circle x={70} y={50} size={14} strokeWidth={2} />
    <Circle x={30} y={70} size={14} strokeWidth={2} />
    <Circle x={50} y={70} size={14} strokeWidth={2} />
    <Circle x={70} y={70} size={14} strokeWidth={2} />
  </>
);
const Q79_WrongA = () => (
  <>
    <Circle x={30} y={35} size={16} strokeWidth={2} />
    <Circle x={50} y={35} size={16} strokeWidth={2} />
    <Circle x={70} y={35} size={16} strokeWidth={2} />
    <Circle x={30} y={55} size={16} strokeWidth={2} />
    <Circle x={50} y={55} size={16} strokeWidth={2} />
    <Circle x={70} y={55} size={16} strokeWidth={2} />
    <Dot x={50} y={75} size={8} fill="currentColor" />
  </>
);
const Q79_WrongB = () => (
  <>
    <Circle x={35} y={30} size={16} strokeWidth={2} />
    <Circle x={65} y={30} size={16} strokeWidth={2} />
    <Circle x={35} y={50} size={16} strokeWidth={2} />
    <Circle x={65} y={50} size={16} strokeWidth={2} />
    <Circle x={35} y={70} size={16} strokeWidth={2} />
    <Circle x={65} y={70} size={16} strokeWidth={2} />
  </>
);
const Q79_WrongC = () => (
  <>
    <Circle x={30} y={50} size={14} strokeWidth={2} />
    <Circle x={50} y={50} size={14} strokeWidth={2} />
    <Circle x={70} y={50} size={14} strokeWidth={2} />
    <Circle x={40} y={70} size={14} strokeWidth={2} />
    <Circle x={60} y={70} size={14} strokeWidth={2} />
  </>
);

// Q80: Shapes with cross-lines — circle+X, X alone, cross alone, then circle alone (simplification)
// Seq: sq+X+circle → sq+X → sq+cross → sq only (elements removing)
const Q80_Seq1 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <Circle x={50} y={50} size={25} strokeWidth={1.5} />
  </>
);
const Q80_Seq2 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={20} y1={20} x2={80} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={80} y1={20} x2={20} y2={80} strokeWidth={1.5} stroke="currentColor" />
  </>
);
const Q80_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1.5} stroke="currentColor" />
    <line x1={20} y1={50} x2={80} y2={50} strokeWidth={1.5} stroke="currentColor" />
  </>
);
const Q80_Answer = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q80_WrongA = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <Circle x={50} y={50} size={30} strokeWidth={1.5} />
  </>
);
const Q80_WrongB = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1.5} stroke="currentColor" />
  </>
);
const Q80_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
  </>
);

export const patterns71to80: MCQ[] = [
  { id: "nv-q71", question: "L-bracket with arrow rotates 90° clockwise each step. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "L-bracket rotates 90° CW: top-right→bottom-right→bottom-left→top-left." },
  { id: "nv-q72", question: "Triangles alternate filled/unfilled with overlapping. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Pattern alternates: filled-down, unfilled-up, both overlapping. Next: inverted overlap." },
  { id: "nv-q73", question: "Circle and × mark swap positions around square corners. What's next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Circle and × rotate CW around the square's corners." },
  { id: "nv-q74", question: "Outer shape changes (triangle→circle→inv.triangle→?), inner shape mirrors. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Outer: tri→circle→inv.tri→rectangle. Inner shape changes correspondingly." },
  { id: "nv-q75", question: "Shape complexity increases: pentagon→star→sunburst→? What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Sides/points increase and the final step fills the shape." },
  { id: "nv-q76", question: "Alternating circle/oval with triangle inner shapes. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Pattern: circle(tri)→oval(dot)→circle(tri+dot)→oval(filled-tri)." },
  { id: "nv-q77", question: "Hatched section in X-divided square rotates CW. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Hatched triangle section moves CW: top→right→bottom→left." },
  { id: "nv-q78", question: "Figure is to its mirror image. Which is the mirror of the given figure?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Mirror analogy: lines extending right flip to extend left, vertical bar swaps side." },
  { id: "nv-q79", question: "Circles increase in grid: 2→4→6→? What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Grid grows: 2×1→2×2→3×2→3×3 = 9 circles." },
  { id: "nv-q80", question: "Elements removed one by one from square (X+circle→X→cross→?). Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "One element removed each step. Finally just the square remains." },
];

export const patternComponents71to80 = {
  Q71: { sequence: [Q71_Seq1, Q71_Seq2, Q71_Seq3], options: [Q71_WrongA, Q71_WrongB, Q71_WrongC, Q71_Answer] },
  Q72: { sequence: [Q72_Seq1, Q72_Seq2, Q72_Seq3], options: [Q72_WrongA, Q72_WrongB, Q72_WrongC, Q72_Answer] },
  Q73: { sequence: [Q73_Seq1, Q73_Seq2, Q73_Seq3], options: [Q73_WrongA, Q73_WrongB, Q73_WrongC, Q73_Answer] },
  Q74: { sequence: [Q74_Seq1, Q74_Seq2, Q74_Seq3], options: [Q74_WrongA, Q74_WrongB, Q74_WrongC, Q74_Answer] },
  Q75: { sequence: [Q75_Seq1, Q75_Seq2, Q75_Seq3], options: [Q75_WrongA, Q75_WrongB, Q75_WrongC, Q75_Answer] },
  Q76: { sequence: [Q76_Seq1, Q76_Seq2, Q76_Seq3], options: [Q76_WrongA, Q76_WrongB, Q76_WrongC, Q76_Answer] },
  Q77: { sequence: [Q77_Seq1, Q77_Seq2, Q77_Seq3], options: [Q77_WrongA, Q77_WrongB, Q77_WrongC, Q77_Answer] },
  Q78: { sequence: [Q78_Seq1, Q78_Seq2, Q78_Seq3], options: [Q78_WrongA, Q78_WrongB, Q78_WrongC, Q78_Answer] },
  Q79: { sequence: [Q79_Seq1, Q79_Seq2, Q79_Seq3], options: [Q79_WrongA, Q79_WrongB, Q79_WrongC, Q79_Answer] },
  Q80: { sequence: [Q80_Seq1, Q80_Seq2, Q80_Seq3], options: [Q80_WrongA, Q80_WrongB, Q80_WrongC, Q80_Answer] },
};
