// Non-verbal patterns Q51-Q60 (from Pro Genius Students PDF + Dogar's ISSB)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q51: Circle with decreasing lines radiating out (9→8→7→6, next=5)
// From Non_Verbal_2, Q1: Lines emerging from circle decrease by one
const Q51_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,40,80,120,160,200,240,280,320].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
const Q51_Seq2 = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,45,90,135,180,225,270,315].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
const Q51_Seq3 = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,51,103,154,206,257,309].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
// Answer: 6 lines
const Q51_Answer = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,60,120,180,240,300].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
const Q51_WrongA = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,36,72,108,144,180,216,252,288,324].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
const Q51_WrongB = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,72,144,216,288].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);
const Q51_WrongC = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
    {[0,90,180,270].map((a,i) => {
      const rad = (a * Math.PI) / 180;
      return <line key={i} x1={50+15*Math.cos(rad)} y1={50+15*Math.sin(rad)} x2={50+35*Math.cos(rad)} y2={50+35*Math.sin(rad)} strokeWidth={1.5} stroke="currentColor" />;
    })}
  </>
);

// Q52: Angle opening wider each step (chevron > getting flatter → straight line)
const Q52_Seq1 = () => <path d="M 30 30 L 50 50 L 30 70" fill="none" strokeWidth={3} />;
const Q52_Seq2 = () => <path d="M 25 35 L 55 50 L 25 65" fill="none" strokeWidth={3} />;
const Q52_Seq3 = () => <path d="M 20 40 L 60 50 L 20 60" fill="none" strokeWidth={3} />;
const Q52_Answer = () => <line x1={20} y1={50} x2={80} y2={50} strokeWidth={3} stroke="currentColor" />;
const Q52_WrongA = () => <path d="M 70 30 L 50 50 L 70 70" fill="none" strokeWidth={3} />;
const Q52_WrongB = () => <path d="M 30 30 L 50 50 L 70 30" fill="none" strokeWidth={3} />;
const Q52_WrongC = () => <line x1={50} y1={20} x2={50} y2={80} strokeWidth={3} stroke="currentColor" />;

// Q53: Square with dot moving clockwise (TL→TR→BR→BL)
const Q53_Seq1 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={35} y={35} size={6} fill="currentColor" />
  </>
);
const Q53_Seq2 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={65} y={35} size={6} fill="currentColor" />
  </>
);
const Q53_Seq3 = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={65} y={65} size={6} fill="currentColor" />
  </>
);
const Q53_Answer = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={35} y={65} size={6} fill="currentColor" />
  </>
);
const Q53_WrongA = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={50} y={50} size={6} fill="currentColor" />
  </>
);
const Q53_WrongB = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={35} y={35} size={6} fill="currentColor" />
  </>
);
const Q53_WrongC = () => (
  <>
    <Diamond x={50} y={50} size={50} strokeWidth={2} />
    <Dot x={65} y={35} size={6} fill="currentColor" />
  </>
);

// Q54: Outer shape sides increase (circle→triangle→square→pentagon), inner shape decreases
const Q54_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <Square x={50} y={50} size={25} strokeWidth={2} />
  </>
);
const Q54_Seq2 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 40 L 58 55 L 42 55 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q54_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={40} y1={50} x2={60} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q54_Answer = () => (
  <>
    <path d="M 50 20 L 78 38 L 68 72 L 32 72 L 22 38 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={5} fill="currentColor" />
  </>
);
const Q54_WrongA = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <Square x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q54_WrongB = () => (
  <>
    <path d="M 50 20 L 78 38 L 68 72 L 32 72 L 22 38 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <Square x={50} y={50} size={20} strokeWidth={2} />
  </>
);
const Q54_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={50} size={5} fill="currentColor" />
  </>
);

// Q55: Arrow in circle rotating 45° each step + dot rotating opposite
const Q55_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={50} y2={25} strokeWidth={2} stroke="currentColor" />
    <polygon points="46,28 50,20 54,28" fill="currentColor" stroke="currentColor" />
    <Dot x={50} y={70} size={5} fill="currentColor" />
  </>
);
const Q55_Seq2 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={68} y2={32} strokeWidth={2} stroke="currentColor" />
    <polygon points="64,29 72,28 68,36" fill="currentColor" stroke="currentColor" />
    <Dot x={32} y={68} size={5} fill="currentColor" />
  </>
);
const Q55_Seq3 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={75} y2={50} strokeWidth={2} stroke="currentColor" />
    <polygon points="72,46 80,50 72,54" fill="currentColor" stroke="currentColor" />
    <Dot x={30} y={50} size={5} fill="currentColor" />
  </>
);
const Q55_Answer = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={68} y2={68} strokeWidth={2} stroke="currentColor" />
    <polygon points="64,72 72,72 72,64" fill="currentColor" stroke="currentColor" />
    <Dot x={32} y={32} size={5} fill="currentColor" />
  </>
);
const Q55_WrongA = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={50} y2={75} strokeWidth={2} stroke="currentColor" />
    <polygon points="46,72 50,80 54,72" fill="currentColor" stroke="currentColor" />
    <Dot x={50} y={30} size={5} fill="currentColor" />
  </>
);
const Q55_WrongB = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={68} y2={68} strokeWidth={2} stroke="currentColor" />
    <polygon points="64,72 72,72 72,64" fill="currentColor" stroke="currentColor" />
    <Dot x={68} y={32} size={5} fill="currentColor" />
  </>
);
const Q55_WrongC = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <line x1={50} y1={50} x2={32} y2={68} strokeWidth={2} stroke="currentColor" />
    <polygon points="28,72 36,72 36,64" fill="currentColor" stroke="currentColor" />
    <Dot x={68} y={32} size={5} fill="currentColor" />
  </>
);

// Q56: L-shape rotating 45° anticlockwise + line added alternately
const Q56_Seq1 = () => <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} />;
const Q56_Seq2 = () => (
  <>
    <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-45 50 50)" />
    <line x1={45} y1={25} x2={45} y2={35} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q56_Seq3 = () => (
  <>
    <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-90 50 50)" />
    <line x1={45} y1={25} x2={45} y2={35} strokeWidth={2} stroke="currentColor" />
    <line x1={55} y1={75} x2={55} y2={65} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q56_Answer = () => (
  <>
    <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-135 50 50)" />
    <line x1={45} y1={25} x2={45} y2={35} strokeWidth={2} stroke="currentColor" />
    <line x1={55} y1={75} x2={55} y2={65} strokeWidth={2} stroke="currentColor" />
    <line x1={25} y1={45} x2={35} y2={45} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q56_WrongA = () => <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-135 50 50)" />;
const Q56_WrongB = () => (
  <>
    <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-180 50 50)" />
    <line x1={45} y1={25} x2={45} y2={35} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q56_WrongC = () => (
  <>
    <path d="M 30 30 L 30 70 L 60 70" fill="none" strokeWidth={3} transform="rotate(-90 50 50)" />
    <line x1={55} y1={75} x2={55} y2={65} strokeWidth={2} stroke="currentColor" />
  </>
);

// Q57: Outer sides increase, inner sides decrease (circle/5-gon, tri/tri, sq/line, pent/dot)
const Q57_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 35 L 60 48 L 56 60 L 44 60 L 40 48 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q57_Seq2 = () => (
  <>
    <Triangle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 40 L 58 55 L 42 55 Z" fill="none" strokeWidth={2} stroke="currentColor" />
  </>
);
const Q57_Seq3 = () => (
  <>
    <Square x={50} y={50} size={60} strokeWidth={2} />
    <line x1={40} y1={50} x2={60} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q57_Answer = () => (
  <>
    <path d="M 50 20 L 78 38 L 68 72 L 32 72 L 22 38 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <Dot x={50} y={50} size={6} fill="currentColor" />
  </>
);
const Q57_WrongA = () => (
  <>
    <Hexagon x={50} y={50} size={60} strokeWidth={2} />
    <line x1={40} y1={50} x2={60} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q57_WrongB = () => (
  <>
    <path d="M 50 20 L 78 38 L 68 72 L 32 72 L 22 38 Z" fill="none" strokeWidth={2} stroke="currentColor" />
    <line x1={40} y1={50} x2={60} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q57_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <Dot x={50} y={50} size={6} fill="currentColor" />
  </>
);

// Q58: Arrow-in-oval rotating (right→up→left→down)
const Q58_Seq1 = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={90} strokeWidth={2} />
  </>
);
const Q58_Seq2 = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={0} strokeWidth={2} />
  </>
);
const Q58_Seq3 = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={270} strokeWidth={2} />
  </>
);
const Q58_Answer = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={180} strokeWidth={2} />
  </>
);
const Q58_WrongA = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={90} strokeWidth={2} />
  </>
);
const Q58_WrongB = () => (
  <>
    <ellipse cx={50} cy={50} rx={20} ry={30} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={180} strokeWidth={2} />
  </>
);
const Q58_WrongC = () => (
  <>
    <ellipse cx={50} cy={50} rx={30} ry={20} fill="none" strokeWidth={2} stroke="currentColor" />
    <Arrow x={50} y={50} size={25} rotation={45} strokeWidth={2} />
  </>
);

// Q59: Hexagon with lines disappearing (6→4→3→2 lines)
const drawHexLines = (count: number) => {
  const angles = [0, 60, 120, 180, 240, 300].slice(0, count);
  return angles.map((a, i) => {
    const rad = (a * Math.PI) / 180;
    return <line key={i} x1={50} y1={50} x2={50+25*Math.cos(rad)} y2={50+25*Math.sin(rad)} strokeWidth={2} stroke="currentColor" />;
  });
};
const Q59_Seq1 = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(6)}</>);
const Q59_Seq2 = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(5)}</>);
const Q59_Seq3 = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(4)}</>);
const Q59_Answer = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(3)}</>);
const Q59_WrongA = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(2)}</>);
const Q59_WrongB = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(6)}</>);
const Q59_WrongC = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} />{drawHexLines(1)}</>);

// Q60: Square inside circle, both alternately filled/empty
const Q60_Seq1 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q60_Seq2 = () => (
  <>
    <circle cx={50} cy={50} r={27.5} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="none" stroke="hsl(var(--background))" strokeWidth={2} />
  </>
);
const Q60_Seq3 = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="hsl(var(--background))" />
  </>
);
const Q60_Answer = () => (
  <>
    <circle cx={50} cy={50} r={27.5} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="none" stroke="hsl(var(--background))" strokeWidth={2} />
    <Dot x={50} y={50} size={8} fill="hsl(var(--background))" />
  </>
);
const Q60_WrongA = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q60_WrongB = () => (
  <>
    <circle cx={50} cy={50} r={27.5} fill="currentColor" stroke="currentColor" strokeWidth={2} />
    <rect x={35} y={35} width={30} height={30} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q60_WrongC = () => (
  <>
    <Circle x={50} y={50} size={55} strokeWidth={2} />
    <Square x={50} y={50} size={30} strokeWidth={2} />
  </>
);

export const patterns51to60: MCQ[] = [
  { id: "nv-q51", question: "Lines from circle decrease by one each step. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Lines decrease: 9→8→7→6. Next has 6 lines." },
  { id: "nv-q52", question: "The angle is opening wider. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Chevron angle increases until it becomes a straight line." },
  { id: "nv-q53", question: "Dot moves clockwise inside the diamond. What's next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Dot position: TL→TR→BR→BL (clockwise)." },
  { id: "nv-q54", question: "Outer shape gains sides, inner shape loses sides. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Outer: circle(0)→tri(3)→sq(4)→pent(5). Inner: sq(4)→tri(3)→line(2)→dot(1)." },
  { id: "nv-q55", question: "Arrow rotates 45° clockwise, dot moves opposite. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow rotates 45° CW each step. Dot moves to opposite position." },
  { id: "nv-q56", question: "L-shape rotates 45° anticlockwise, lines added alternately. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "L rotates 45° ACW. Lines added to top, bottom, then sides alternately." },
  { id: "nv-q57", question: "Outer sides increase by 1, inner element reduces. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Outer: circle→triangle→square→pentagon. Inner: pentagon→triangle→line→dot." },
  { id: "nv-q58", question: "Arrow inside oval rotates 90° anticlockwise. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow rotates 90° ACW: right→up→left→down." },
  { id: "nv-q59", question: "Lines inside hexagon decrease by one. What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Hexagon internal lines: 6→5→4→3." },
  { id: "nv-q60", question: "Circle and square alternate fill pattern. Next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Fill alternates between circle and square with progressive dot addition." },
];

export const patternComponents51to60 = {
  Q51: { sequence: [Q51_Seq1, Q51_Seq2, Q51_Seq3], options: [Q51_WrongA, Q51_WrongB, Q51_WrongC, Q51_Answer] },
  Q52: { sequence: [Q52_Seq1, Q52_Seq2, Q52_Seq3], options: [Q52_WrongA, Q52_WrongB, Q52_WrongC, Q52_Answer] },
  Q53: { sequence: [Q53_Seq1, Q53_Seq2, Q53_Seq3], options: [Q53_WrongA, Q53_WrongB, Q53_WrongC, Q53_Answer] },
  Q54: { sequence: [Q54_Seq1, Q54_Seq2, Q54_Seq3], options: [Q54_WrongA, Q54_WrongB, Q54_WrongC, Q54_Answer] },
  Q55: { sequence: [Q55_Seq1, Q55_Seq2, Q55_Seq3], options: [Q55_WrongA, Q55_WrongB, Q55_WrongC, Q55_Answer] },
  Q56: { sequence: [Q56_Seq1, Q56_Seq2, Q56_Seq3], options: [Q56_WrongA, Q56_WrongB, Q56_WrongC, Q56_Answer] },
  Q57: { sequence: [Q57_Seq1, Q57_Seq2, Q57_Seq3], options: [Q57_WrongA, Q57_WrongB, Q57_WrongC, Q57_Answer] },
  Q58: { sequence: [Q58_Seq1, Q58_Seq2, Q58_Seq3], options: [Q58_WrongA, Q58_WrongB, Q58_WrongC, Q58_Answer] },
  Q59: { sequence: [Q59_Seq1, Q59_Seq2, Q59_Seq3], options: [Q59_WrongA, Q59_WrongB, Q59_WrongC, Q59_Answer] },
  Q60: { sequence: [Q60_Seq1, Q60_Seq2, Q60_Seq3], options: [Q60_WrongA, Q60_WrongB, Q60_WrongC, Q60_Answer] },
};
