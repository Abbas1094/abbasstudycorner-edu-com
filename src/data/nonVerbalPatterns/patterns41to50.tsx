// Non-verbal patterns Q41-Q50
import React from 'react';
import { Circle, Square, Triangle, Diamond, Line, Dot, Arrow, Star, Cross, Hexagon, Pentagon } from '@/components/patterns/PatternShapes';
import type { MCQ } from '@/types';

// Q41: Shape reflection horizontal
const Q41_Pattern1 = () => (
  <>
    <polygon points="25,30 45,30 45,70 25,50" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q41_Pattern2 = () => (
  <>
    <line x1={50} y1={20} x2={50} y2={80} strokeWidth={1} stroke="currentColor" strokeDasharray="4" />
  </>
);
const Q41_Pattern3 = () => (
  <>
    <text x={50} y={55} fontSize={24} fill="currentColor" textAnchor="middle">?</text>
  </>
);
const Q41_Answer = () => (
  <>
    <polygon points="75,30 55,30 55,70 75,50" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q41_WrongA = () => (
  <>
    <polygon points="25,30 45,30 45,70 25,50" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q41_WrongB = () => (
  <>
    <polygon points="35,25 55,25 55,75 35,55" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q41_WrongC = () => (
  <>
    <polygon points="75,70 55,70 55,30 75,50" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q42: Rotating flag pattern
const Q42_Pattern1 = () => (
  <>
    <line x1={30} y1={70} x2={30} y2={30} strokeWidth={3} stroke="currentColor" />
    <polygon points="30,30 60,40 30,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_Pattern2 = () => (
  <>
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={3} stroke="currentColor" />
    <polygon points="70,50 60,30 80,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_Pattern3 = () => (
  <>
    <line x1={70} y1={30} x2={70} y2={70} strokeWidth={3} stroke="currentColor" />
    <polygon points="70,70 40,60 70,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_Answer = () => (
  <>
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={3} stroke="currentColor" />
    <polygon points="30,50 40,70 20,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_WrongA = () => (
  <>
    <line x1={30} y1={70} x2={30} y2={30} strokeWidth={3} stroke="currentColor" />
    <polygon points="30,30 60,40 30,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_WrongB = () => (
  <>
    <line x1={50} y1={30} x2={50} y2={70} strokeWidth={3} stroke="currentColor" />
    <polygon points="50,70 30,60 50,50" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q42_WrongC = () => (
  <>
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={3} stroke="currentColor" />
  </>
);

// Q43: Matrix pattern - 3x3 grid completion
const Q43_Pattern1 = () => (
  <>
    <Circle x={25} y={25} size={20} strokeWidth={2} />
    <Circle x={50} y={25} size={20} strokeWidth={2} />
    <Circle x={75} y={25} size={20} strokeWidth={2} />
    <Circle x={25} y={50} size={20} strokeWidth={2} />
    <Circle x={50} y={50} size={20} strokeWidth={2} />
    <Square x={75} y={50} size={18} strokeWidth={2} />
    <Circle x={25} y={75} size={20} strokeWidth={2} />
    <Square x={50} y={75} size={18} strokeWidth={2} />
    <text x={75} y={80} fontSize={16} fill="currentColor" textAnchor="middle">?</text>
  </>
);
const Q43_Answer = () => (
  <>
    <Triangle x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q43_WrongA = () => (
  <>
    <Circle x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q43_WrongB = () => (
  <>
    <Square x={50} y={50} size={30} strokeWidth={2} />
  </>
);
const Q43_WrongC = () => (
  <>
    <Diamond x={50} y={50} size={30} strokeWidth={2} />
  </>
);

// Q44: Ladder pattern
const Q44_Pattern1 = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_Pattern2 = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={35} x2={70} y2={35} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={65} x2={70} y2={65} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_Pattern3 = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={30} x2={70} y2={30} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={70} x2={70} y2={70} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_Answer = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={27} x2={70} y2={27} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={42} x2={70} y2={42} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={57} x2={70} y2={57} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={72} x2={70} y2={72} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_WrongA = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_WrongB = () => (
  <>
    <line x1={30} y1={20} x2={30} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={70} y1={20} x2={70} y2={80} strokeWidth={2} stroke="currentColor" />
    <line x1={30} y1={50} x2={70} y2={50} strokeWidth={2} stroke="currentColor" />
  </>
);
const Q44_WrongC = () => (
  <>
    <rect x={30} y={20} width={40} height={60} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q45: Domino pattern
const Q45_Pattern1 = () => (
  <>
    <rect x={20} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={20} y1={50} x2={45} y2={50} strokeWidth={1} stroke="currentColor" />
    <line x1={55} y1={50} x2={80} y2={50} strokeWidth={1} stroke="currentColor" />
    <Dot x={32} y={37} size={6} fill="currentColor" />
    <Dot x={68} y={37} size={6} fill="currentColor" />
    <Dot x={68} y={63} size={6} fill="currentColor" />
  </>
);
const Q45_Pattern2 = () => (
  <>
    <rect x={20} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={20} y1={50} x2={45} y2={50} strokeWidth={1} stroke="currentColor" />
    <line x1={55} y1={50} x2={80} y2={50} strokeWidth={1} stroke="currentColor" />
    <Dot x={28} y={37} size={6} fill="currentColor" />
    <Dot x={38} y={37} size={6} fill="currentColor" />
    <Dot x={62} y={37} size={6} fill="currentColor" />
    <Dot x={72} y={37} size={6} fill="currentColor" />
    <Dot x={62} y={63} size={6} fill="currentColor" />
    <Dot x={72} y={63} size={6} fill="currentColor" />
  </>
);
const Q45_Pattern3 = () => (
  <>
    <rect x={20} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={20} y1={50} x2={45} y2={50} strokeWidth={1} stroke="currentColor" />
    <line x1={55} y1={50} x2={80} y2={50} strokeWidth={1} stroke="currentColor" />
    <Dot x={28} y={33} size={6} fill="currentColor" />
    <Dot x={38} y={33} size={6} fill="currentColor" />
    <Dot x={33} y={43} size={6} fill="currentColor" />
    <Dot x={62} y={33} size={6} fill="currentColor" />
    <Dot x={72} y={33} size={6} fill="currentColor" />
    <Dot x={67} y={43} size={6} fill="currentColor" />
    <Dot x={62} y={63} size={6} fill="currentColor" />
    <Dot x={72} y={63} size={6} fill="currentColor" />
    <Dot x={67} y={73} size={6} fill="currentColor" />
  </>
);
const Q45_Answer = () => (
  <>
    <rect x={20} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <line x1={20} y1={50} x2={45} y2={50} strokeWidth={1} stroke="currentColor" />
    <line x1={55} y1={50} x2={80} y2={50} strokeWidth={1} stroke="currentColor" />
    <Dot x={28} y={33} size={5} fill="currentColor" />
    <Dot x={38} y={33} size={5} fill="currentColor" />
    <Dot x={28} y={43} size={5} fill="currentColor" />
    <Dot x={38} y={43} size={5} fill="currentColor" />
    <Dot x={62} y={33} size={5} fill="currentColor" />
    <Dot x={72} y={33} size={5} fill="currentColor" />
    <Dot x={62} y={43} size={5} fill="currentColor" />
    <Dot x={72} y={43} size={5} fill="currentColor" />
    <Dot x={62} y={57} size={5} fill="currentColor" />
    <Dot x={72} y={57} size={5} fill="currentColor" />
    <Dot x={62} y={67} size={5} fill="currentColor" />
    <Dot x={72} y={67} size={5} fill="currentColor" />
  </>
);
const Q45_WrongA = () => (
  <>
    <rect x={25} y={25} width={50} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <Dot x={50} y={50} size={10} fill="currentColor" />
  </>
);
const Q45_WrongB = () => (
  <>
    <rect x={20} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
    <rect x={55} y={25} width={25} height={50} fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q45_WrongC = () => (
  <>
    <rect x={20} y={25} width={60} height={50} fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);

// Q46: Triangles with different orientations
const Q46_Pattern1 = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={0} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q46_Pattern2 = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={180} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q46_Pattern3 = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={180} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={180} strokeWidth={2} />
  </>
);
const Q46_Answer = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={0} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={180} strokeWidth={2} />
  </>
);
const Q46_WrongA = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={0} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={0} strokeWidth={2} />
  </>
);
const Q46_WrongB = () => (
  <>
    <Triangle x={30} y={50} size={35} rotation={180} strokeWidth={2} />
    <Triangle x={70} y={50} size={35} rotation={180} strokeWidth={2} />
  </>
);
const Q46_WrongC = () => (
  <>
    <Triangle x={50} y={50} size={50} rotation={0} strokeWidth={2} />
  </>
);

// Q47: Shape outline to filled alternating
const Q47_Pattern1 = () => <Pentagon x={50} y={50} size={50} strokeWidth={2} />;
const Q47_Pattern2 = () => <Pentagon x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />;
const Q47_Pattern3 = () => <Hexagon x={50} y={50} size={50} strokeWidth={2} />;
const Q47_Answer = () => <Hexagon x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />;
const Q47_WrongA = () => <Hexagon x={50} y={50} size={50} strokeWidth={2} />;
const Q47_WrongB = () => <Pentagon x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />;
const Q47_WrongC = () => <Circle x={50} y={50} size={50} fill="currentColor" strokeWidth={2} />;

// Q48: Checkerboard filling
const Q48_Pattern1 = () => (
  <>
    <rect x={20} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_Pattern2 = () => (
  <>
    <rect x={20} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_Pattern3 = () => (
  <>
    <rect x={20} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_Answer = () => (
  <>
    <rect x={20} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={20} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={40} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={60} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_WrongA = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_WrongB = () => (
  <>
    <rect x={20} y={20} width={60} height={60} fill="none" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q48_WrongC = () => (
  <>
    <rect x={20} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={20} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={40} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1} />
    <rect x={20} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={40} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
    <rect x={60} y={60} width={20} height={20} fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);

// Q49: Pie chart segments
const Q49_Pattern1 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 50 L 50 20 A 30 30 0 0 1 80 50 Z" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q49_Pattern2 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 50 L 50 20 A 30 30 0 0 1 50 80 Z" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q49_Pattern3 = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 50 L 50 20 A 30 30 0 1 1 20 50 Z" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q49_Answer = () => (
  <>
    <Circle x={50} y={50} size={60} fill="currentColor" strokeWidth={2} />
  </>
);
const Q49_WrongA = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 50 L 50 20 A 30 30 0 0 1 80 50 Z" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);
const Q49_WrongB = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
  </>
);
const Q49_WrongC = () => (
  <>
    <Circle x={50} y={50} size={60} strokeWidth={2} />
    <path d="M 50 50 L 50 20 A 30 30 0 0 1 50 80 Z" fill="currentColor" stroke="currentColor" strokeWidth={1} />
  </>
);

// Q50: Star with points adding
const Q50_Pattern1 = () => (
  <>
    <polygon points="50,20 58,44 85,44 64,58 72,85 50,68 28,85 36,58 15,44 42,44" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_Pattern2 = () => (
  <>
    <polygon points="50,15 57,38 82,38 63,52 70,78 50,62 30,78 37,52 18,38 43,38" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,30 54,42 68,42 57,50 61,64 50,55 39,64 43,50 32,42 46,42" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_Pattern3 = () => (
  <>
    <polygon points="50,12 56,35 80,35 62,48 68,72 50,58 32,72 38,48 20,35 44,35" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,25 54,38 68,38 58,46 62,60 50,52 38,60 42,46 32,38 46,38" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,35 52,42 60,42 54,47 56,55 50,50 44,55 46,47 40,42 48,42" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_Answer = () => (
  <>
    <polygon points="50,10 55,32 78,32 60,44 66,68 50,54 34,68 40,44 22,32 45,32" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,22 53,35 66,35 56,42 60,55 50,48 40,55 44,42 34,35 47,35" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,32 52,40 60,40 54,45 56,53 50,48 44,53 46,45 40,40 48,40" fill="none" stroke="currentColor" strokeWidth={2} />
    <polygon points="50,40 51,45 56,45 52,48 53,53 50,50 47,53 48,48 44,45 49,45" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_WrongA = () => (
  <>
    <polygon points="50,20 58,44 85,44 64,58 72,85 50,68 28,85 36,58 15,44 42,44" fill="none" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_WrongB = () => (
  <>
    <polygon points="50,20 58,44 85,44 64,58 72,85 50,68 28,85 36,58 15,44 42,44" fill="currentColor" stroke="currentColor" strokeWidth={2} />
  </>
);
const Q50_WrongC = () => (
  <>
    <Hexagon x={50} y={50} size={50} strokeWidth={2} />
    <Hexagon x={50} y={50} size={35} strokeWidth={2} />
    <Hexagon x={50} y={50} size={20} strokeWidth={2} />
  </>
);

// Export MCQ data
export const patterns41to50: MCQ[] = [
  {
    id: "nv-q41",
    question: "Find the mirror reflection:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The shape should be reflected horizontally across the mirror line.",
  },
  {
    id: "nv-q42",
    question: "What comes next in the sequence?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The flag rotates 90° clockwise each step.",
  },
  {
    id: "nv-q43",
    question: "Complete the matrix:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Following the pattern in the matrix, the missing shape should be a triangle.",
  },
  {
    id: "nv-q44",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The ladder gains one more rung each step: 1→2→3→4 rungs.",
  },
  {
    id: "nv-q45",
    question: "Complete the domino pattern:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Both top and bottom halves increase by 1 dot each step: (1,2)→(2,4)→(3,6)→(4,8).",
  },
  {
    id: "nv-q46",
    question: "What comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Triangles flip alternately: ↑↑→↓↑→↓↓→↑↓.",
  },
  {
    id: "nv-q47",
    question: "Find the next figure:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "Pattern alternates: outline pentagon, filled pentagon, outline hexagon, filled hexagon.",
  },
  {
    id: "nv-q48",
    question: "Complete the sequence:",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The checkerboard pattern inverts each step (black↔white squares swap).",
  },
  {
    id: "nv-q49",
    question: "Which figure comes next?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "The filled portion increases by 25% each step until fully filled.",
  },
  {
    id: "nv-q50",
    question: "What pattern completes the series?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 3,
    explanation: "An additional concentric star is added inside each step: 1→2→3→4 stars.",
  },
];

// Export pattern render functions
export const patternComponents41to50 = {
  Q41: { sequence: [Q41_Pattern1, Q41_Pattern2, Q41_Pattern3], options: [Q41_WrongA, Q41_WrongB, Q41_WrongC, Q41_Answer] },
  Q42: { sequence: [Q42_Pattern1, Q42_Pattern2, Q42_Pattern3], options: [Q42_WrongA, Q42_WrongB, Q42_WrongC, Q42_Answer] },
  Q43: { sequence: [Q43_Pattern1], options: [Q43_WrongA, Q43_WrongB, Q43_WrongC, Q43_Answer] },
  Q44: { sequence: [Q44_Pattern1, Q44_Pattern2, Q44_Pattern3], options: [Q44_WrongA, Q44_WrongB, Q44_WrongC, Q44_Answer] },
  Q45: { sequence: [Q45_Pattern1, Q45_Pattern2, Q45_Pattern3], options: [Q45_WrongA, Q45_WrongB, Q45_WrongC, Q45_Answer] },
  Q46: { sequence: [Q46_Pattern1, Q46_Pattern2, Q46_Pattern3], options: [Q46_WrongA, Q46_WrongB, Q46_WrongC, Q46_Answer] },
  Q47: { sequence: [Q47_Pattern1, Q47_Pattern2, Q47_Pattern3], options: [Q47_WrongA, Q47_WrongB, Q47_WrongC, Q47_Answer] },
  Q48: { sequence: [Q48_Pattern1, Q48_Pattern2, Q48_Pattern3], options: [Q48_WrongA, Q48_WrongB, Q48_WrongC, Q48_Answer] },
  Q49: { sequence: [Q49_Pattern1, Q49_Pattern2, Q49_Pattern3], options: [Q49_WrongA, Q49_WrongB, Q49_WrongC, Q49_Answer] },
  Q50: { sequence: [Q50_Pattern1, Q50_Pattern2, Q50_Pattern3], options: [Q50_WrongA, Q50_WrongB, Q50_WrongC, Q50_Answer] },
};
