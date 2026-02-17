// PAF Non-verbal patterns Q21-Q30 (Shape transformation & analogy from PDF pages 21-30)
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Cross, Hexagon, Star, Pentagon, Arrow } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q21: Mirror image - shape flips horizontally
const PQ21_S1 = () => (<><Triangle x={35} y={50} size={40} strokeWidth={2} /><Dot x={70} y={30} size={10} fill="currentColor" /></>);
const PQ21_S2 = () => (<><Triangle x={65} y={50} size={40} rotation={180} strokeWidth={2} /><Dot x={30} y={70} size={10} fill="currentColor" /></>);
const PQ21_S3 = () => (<><Square x={35} y={50} size={35} strokeWidth={2} /><Circle x={70} y={30} size={20} strokeWidth={2} /></>);
const PQ21_Answer = () => (<><Square x={65} y={50} size={35} strokeWidth={2} /><Circle x={30} y={70} size={20} strokeWidth={2} /></>);
const PQ21_WrongA = () => (<><Square x={35} y={50} size={35} strokeWidth={2} /><Circle x={30} y={70} size={20} strokeWidth={2} /></>);
const PQ21_WrongB = () => (<><Square x={65} y={50} size={35} strokeWidth={2} /><Circle x={70} y={30} size={20} strokeWidth={2} /></>);
const PQ21_WrongC = () => (<><Circle x={65} y={50} size={35} strokeWidth={2} /><Square x={30} y={70} size={20} strokeWidth={2} /></>);

// Q22: Shape + internal pattern analogy
const PQ22_S1 = () => (<><Triangle x={50} y={50} size={60} strokeWidth={2} /><line x1={50} y1={24} x2={25} y2={76} stroke="currentColor" strokeWidth={1.5} /><line x1={50} y1={24} x2={75} y2={76} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ22_S2 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><line x1={22} y1={22} x2={78} y2={22} stroke="currentColor" strokeWidth={1.5} /><line x1={22} y1={22} x2={22} y2={78} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ22_S3 = () => (<><Diamond x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={22} y2={50} stroke="currentColor" strokeWidth={1.5} /><line x1={50} y1={22} x2={78} y2={50} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ22_Answer = () => (<><Pentagon x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={25} y2={45} stroke="currentColor" strokeWidth={1.5} /><line x1={50} y1={22} x2={75} y2={45} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ22_WrongA = () => (<><Pentagon x={50} y={50} size={55} strokeWidth={2} /></>);
const PQ22_WrongB = () => (<><Hexagon x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={25} y2={45} stroke="currentColor" strokeWidth={1.5} /></>);
const PQ22_WrongC = () => (<><Pentagon x={50} y={50} size={55} strokeWidth={2} /><Cross x={50} y={50} size={30} strokeWidth={1.5} /></>);

// Q23: Concentric shapes alternating
const PQ23_S1 = () => (<><Circle x={50} y={50} size={60} strokeWidth={2} /><Square x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_S2 = () => (<><Square x={50} y={50} size={60} strokeWidth={2} /><Circle x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_S3 = () => (<><Circle x={50} y={50} size={60} strokeWidth={2} /><Triangle x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_Answer = () => (<><Triangle x={50} y={50} size={60} strokeWidth={2} /><Circle x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_WrongA = () => (<><Square x={50} y={50} size={60} strokeWidth={2} /><Triangle x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_WrongB = () => (<><Triangle x={50} y={50} size={60} strokeWidth={2} /><Square x={50} y={50} size={30} strokeWidth={2} /></>);
const PQ23_WrongC = () => (<><Circle x={50} y={50} size={60} strokeWidth={2} /><Circle x={50} y={50} size={30} strokeWidth={2} /></>);

// Q24: Shape with dots moving positions
const PQ24_S1 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /></>);
const PQ24_S2 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={70} y={30} size={8} fill="currentColor" /></>);
const PQ24_S3 = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={70} y={70} size={8} fill="currentColor" /></>);
const PQ24_Answer = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={70} size={8} fill="currentColor" /></>);
const PQ24_WrongA = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={50} y={50} size={8} fill="currentColor" /></>);
const PQ24_WrongB = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={30} y={30} size={8} fill="currentColor" /></>);
const PQ24_WrongC = () => (<><Square x={50} y={50} size={55} strokeWidth={2} /><Dot x={50} y={70} size={8} fill="currentColor" /></>);

// Q25: Increasing shape complexity (sides)
const PQ25_S1 = () => <Triangle x={50} y={50} size={55} strokeWidth={2} />;
const PQ25_S2 = () => <Square x={50} y={50} size={50} strokeWidth={2} />;
const PQ25_S3 = () => <Pentagon x={50} y={50} size={55} strokeWidth={2} />;
const PQ25_Answer = () => <Hexagon x={50} y={50} size={55} strokeWidth={2} />;
const PQ25_WrongA = () => <Circle x={50} y={50} size={55} strokeWidth={2} />;
const PQ25_WrongB = () => <Diamond x={50} y={50} size={55} strokeWidth={2} />;
const PQ25_WrongC = () => <Star x={50} y={50} size={55} strokeWidth={2} />;

// Q26: Rotation + fill pattern
const PQ26_S1 = () => (<><Triangle x={50} y={50} size={55} strokeWidth={2} /><Triangle x={50} y={65} size={20} fill="currentColor" strokeWidth={1} /></>);
const PQ26_S2 = () => (<><Triangle x={50} y={50} size={55} rotation={90} strokeWidth={2} /><Triangle x={40} y={50} size={20} rotation={90} fill="currentColor" strokeWidth={1} /></>);
const PQ26_S3 = () => (<><Triangle x={50} y={50} size={55} rotation={180} strokeWidth={2} /><Triangle x={50} y={35} size={20} rotation={180} fill="currentColor" strokeWidth={1} /></>);
const PQ26_Answer = () => (<><Triangle x={50} y={50} size={55} rotation={270} strokeWidth={2} /><Triangle x={60} y={50} size={20} rotation={270} fill="currentColor" strokeWidth={1} /></>);
const PQ26_WrongA = () => (<><Triangle x={50} y={50} size={55} rotation={270} strokeWidth={2} /></>);
const PQ26_WrongB = () => (<><Triangle x={50} y={50} size={55} strokeWidth={2} /><Triangle x={50} y={50} size={20} fill="currentColor" strokeWidth={1} /></>);
const PQ26_WrongC = () => (<><Triangle x={50} y={50} size={55} rotation={270} strokeWidth={2} /><Dot x={60} y={50} size={15} fill="currentColor" /></>);

// Q27: Grid pattern with alternating fills
const PQ27_S1 = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_S2 = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_S3 = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_Answer = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_WrongA = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_WrongB = () => (
  <>
    <rect x={15} y={15} width={70} height={50} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const PQ27_WrongC = () => (
  <>
    <rect x={15} y={15} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={15} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={15} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={25} height={25} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={65} y={40} width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);

// Q28: Overlapping shapes
const PQ28_S1 = () => (<><Circle x={40} y={50} size={40} strokeWidth={2} /><Square x={65} y={50} size={30} strokeWidth={2} /></>);
const PQ28_S2 = () => (<><Square x={40} y={50} size={35} strokeWidth={2} /><Circle x={65} y={50} size={30} strokeWidth={2} /></>);
const PQ28_S3 = () => (<><Triangle x={40} y={50} size={40} strokeWidth={2} /><Diamond x={65} y={50} size={30} strokeWidth={2} /></>);
const PQ28_Answer = () => (<><Diamond x={40} y={50} size={35} strokeWidth={2} /><Triangle x={65} y={50} size={35} strokeWidth={2} /></>);
const PQ28_WrongA = () => (<><Triangle x={40} y={50} size={40} strokeWidth={2} /><Circle x={65} y={50} size={30} strokeWidth={2} /></>);
const PQ28_WrongB = () => (<><Diamond x={40} y={50} size={35} strokeWidth={2} /><Diamond x={65} y={50} size={30} strokeWidth={2} /></>);
const PQ28_WrongC = () => (<><Circle x={40} y={50} size={40} strokeWidth={2} /><Triangle x={65} y={50} size={35} strokeWidth={2} /></>);

// Q29: Shape with lines - number of lines increasing
const PQ29_S1 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={50} y2={78} stroke="currentColor" strokeWidth={2} /></>);
const PQ29_S2 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={50} y2={78} stroke="currentColor" strokeWidth={2} /><line x1={22} y1={50} x2={78} y2={50} stroke="currentColor" strokeWidth={2} /></>);
const PQ29_S3 = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={50} y2={78} stroke="currentColor" strokeWidth={2} /><line x1={22} y1={50} x2={78} y2={50} stroke="currentColor" strokeWidth={2} /><line x1={30} y1={30} x2={70} y2={70} stroke="currentColor" strokeWidth={2} /></>);
const PQ29_Answer = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={50} y1={22} x2={50} y2={78} stroke="currentColor" strokeWidth={2} /><line x1={22} y1={50} x2={78} y2={50} stroke="currentColor" strokeWidth={2} /><line x1={30} y1={30} x2={70} y2={70} stroke="currentColor" strokeWidth={2} /><line x1={70} y1={30} x2={30} y2={70} stroke="currentColor" strokeWidth={2} /></>);
const PQ29_WrongA = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><line x1={30} y1={30} x2={70} y2={70} stroke="currentColor" strokeWidth={2} /></>);
const PQ29_WrongB = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><Cross x={50} y={50} size={40} strokeWidth={2} /></>);
const PQ29_WrongC = () => (<><Circle x={50} y={50} size={55} strokeWidth={2} /><Star x={50} y={50} size={35} strokeWidth={1.5} /></>);

// Q30: Arrow sequences - direction pattern
const PQ30_S1 = () => <Arrow x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const PQ30_S2 = () => <Arrow x={50} y={50} size={50} rotation={45} strokeWidth={2} />;
const PQ30_S3 = () => <Arrow x={50} y={50} size={50} rotation={90} strokeWidth={2} />;
const PQ30_Answer = () => <Arrow x={50} y={50} size={50} rotation={135} strokeWidth={2} />;
const PQ30_WrongA = () => <Arrow x={50} y={50} size={50} rotation={180} strokeWidth={2} />;
const PQ30_WrongB = () => <Arrow x={50} y={50} size={50} rotation={0} strokeWidth={2} />;
const PQ30_WrongC = () => <Arrow x={50} y={50} size={50} rotation={270} strokeWidth={2} />;

export const pafPatterns21to30: MCQ[] = [
  { id: "paf-nv-q21", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "The figure mirrors horizontally: shapes and dots swap to opposite positions." },
  { id: "paf-nv-q22", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Lines from vertex are added inside each shape. Pattern follows increasing sides." },
  { id: "paf-nv-q23", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Outer and inner shapes swap each step. Circle↔Square, then Circle↔Triangle, so Triangle↔Circle." },
  { id: "paf-nv-q24", question: "Complete the pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Dot moves clockwise around the corners of the square: TL→TR→BR→BL." },
  { id: "paf-nv-q25", question: "What shape comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Shapes increase in number of sides: 3→4→5→6 (triangle→square→pentagon→hexagon)." },
  { id: "paf-nv-q26", question: "Complete the series:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Triangle rotates 90° each step with filled inner triangle following the same rotation." },
  { id: "paf-nv-q27", question: "Find the missing grid pattern:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "The filled cells shift position following an alternating checkerboard inversion pattern." },
  { id: "paf-nv-q28", question: "A IS TO B AS C IS TO ?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "The two shapes swap positions: left becomes right and vice versa." },
  { id: "paf-nv-q29", question: "What comes next?", options: ["A","B","C","D"], correctAnswer: 3, explanation: "One line is added inside the circle each step. 1→2→3→4 dividing lines." },
  { id: "paf-nv-q30", question: "Complete the arrow sequence:", options: ["A","B","C","D"], correctAnswer: 3, explanation: "Arrow rotates 45° clockwise each step: 0°→45°→90°→135°." },
];

export const pafPatternComponents21to30 = {
  PQ21: { sequence: [PQ21_S1, PQ21_S2, PQ21_S3], options: [PQ21_WrongA, PQ21_WrongB, PQ21_WrongC, PQ21_Answer] },
  PQ22: { sequence: [PQ22_S1, PQ22_S2, PQ22_S3], options: [PQ22_WrongA, PQ22_WrongB, PQ22_WrongC, PQ22_Answer] },
  PQ23: { sequence: [PQ23_S1, PQ23_S2, PQ23_S3], options: [PQ23_WrongA, PQ23_WrongB, PQ23_WrongC, PQ23_Answer] },
  PQ24: { sequence: [PQ24_S1, PQ24_S2, PQ24_S3], options: [PQ24_WrongA, PQ24_WrongB, PQ24_WrongC, PQ24_Answer] },
  PQ25: { sequence: [PQ25_S1, PQ25_S2, PQ25_S3], options: [PQ25_WrongA, PQ25_WrongB, PQ25_WrongC, PQ25_Answer] },
  PQ26: { sequence: [PQ26_S1, PQ26_S2, PQ26_S3], options: [PQ26_WrongA, PQ26_WrongB, PQ26_WrongC, PQ26_Answer] },
  PQ27: { sequence: [PQ27_S1, PQ27_S2, PQ27_S3], options: [PQ27_WrongA, PQ27_WrongB, PQ27_WrongC, PQ27_Answer] },
  PQ28: { sequence: [PQ28_S1, PQ28_S2, PQ28_S3], options: [PQ28_WrongA, PQ28_WrongB, PQ28_WrongC, PQ28_Answer] },
  PQ29: { sequence: [PQ29_S1, PQ29_S2, PQ29_S3], options: [PQ29_WrongA, PQ29_WrongB, PQ29_WrongC, PQ29_Answer] },
  PQ30: { sequence: [PQ30_S1, PQ30_S2, PQ30_S3], options: [PQ30_WrongA, PQ30_WrongB, PQ30_WrongC, PQ30_Answer] },
};
