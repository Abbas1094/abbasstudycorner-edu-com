// Missing Number / Figure type MCQs with SVG diagram components
// These are numerical reasoning puzzles where numbers are placed in geometric shapes
import React from 'react';

export interface MissingNumberMCQ {
  id: string;
  question: string;
  diagram: React.FC;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// ====== DIAGRAM COMPONENTS ======

// Q1: Three circles, each divided into 3 sectors. Pattern: top-left + top-right = bottom
const DiagramCircle3Sectors: React.FC = () => (
  <svg viewBox="0 0 420 140" className="w-full max-w-md">
    {[
      { cx: 60, nums: ['8', '14', '22'] },
      { cx: 210, nums: ['15', '10', '25'] },
      { cx: 360, nums: ['?', '11', '18'] },
    ].map((circle, ci) => (
      <g key={ci}>
        <circle cx={circle.cx} cy={70} r={55} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Horizontal line */}
        <line x1={circle.cx - 55} y1={70} x2={circle.cx + 55} y2={70} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        {/* Vertical line top half */}
        <line x1={circle.cx} y1={15} x2={circle.cx} y2={70} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        {/* Top-left number */}
        <text x={circle.cx - 22} y={50} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{circle.nums[0]}</text>
        {/* Top-right number */}
        <text x={circle.cx + 22} y={50} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{circle.nums[1]}</text>
        {/* Bottom number */}
        <text x={circle.cx} y={100} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{circle.nums[2]}</text>
      </g>
    ))}
  </svg>
);

// Q2: Triangles with numbers. Pattern: top = bottom-left × bottom-right
const DiagramTriangles: React.FC = () => (
  <svg viewBox="0 0 450 150" className="w-full max-w-md">
    {[
      { x: 10, nums: ['6', '3', '2'] },
      { x: 160, nums: ['20', '4', '5'] },
      { x: 310, nums: ['?', '7', '3'] },
    ].map((tri, ti) => (
      <g key={ti}>
        <polygon points={`${tri.x + 65},15 ${tri.x + 10},135 ${tri.x + 120},135`} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Inner horizontal line */}
        <line x1={tri.x + 37} y1={75} x2={tri.x + 93} y2={75} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        {/* Top number */}
        <text x={tri.x + 65} y={60} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{tri.nums[0]}</text>
        {/* Bottom-left */}
        <text x={tri.x + 45} y={115} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{tri.nums[1]}</text>
        {/* Bottom-right */}
        <text x={tri.x + 85} y={115} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{tri.nums[2]}</text>
        {/* Bottom center (product shown below) */}
        <text x={tri.x + 65} y={148} textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">{ti < 2 ? `${tri.nums[1]}×${tri.nums[2]}=${tri.nums[0]}` : ''}</text>
      </g>
    ))}
  </svg>
);

// Q3: Star of David (hexagram). Opposite regions sum to 35
const DiagramStarOfDavid: React.FC = () => {
  // 6 triangular points around a hexagon
  const cx = 120, cy = 110, r = 80;
  const nums = ['12', '?', '15', '23', '27', '20'];
  const angles = [-90, -30, 30, 90, 150, 210]; // degrees for each point
  
  return (
    <svg viewBox="0 0 240 220" className="w-full max-w-[240px]">
      {/* Two overlapping triangles */}
      <polygon points={`${cx},${cy - r} ${cx + r * 0.866},${cy + r * 0.5} ${cx - r * 0.866},${cy + r * 0.5}`}
        fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
      <polygon points={`${cx},${cy + r} ${cx + r * 0.866},${cy - r * 0.5} ${cx - r * 0.866},${cy - r * 0.5}`}
        fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {/* Numbers at each triangular point */}
      {nums.map((n, i) => {
        const angle = (angles[i] * Math.PI) / 180;
        const tx = cx + (r * 0.7) * Math.cos(angle);
        const ty = cy + (r * 0.7) * Math.sin(angle);
        return (
          <text key={i} x={tx} y={ty + 5} textAnchor="middle" fontSize="16"
            fill="hsl(var(--foreground))" fontWeight="bold">{n}</text>
        );
      })}
    </svg>
  );
};

// Q4: House shapes. Pattern: roof = (left + right + floor) / 4
const DiagramHouse: React.FC = () => (
  <svg viewBox="0 0 360 160" className="w-full max-w-sm">
    {[
      { x: 10, roof: '9', l: '12', r: '14', floor: '10' },
      { x: 190, roof: '?', l: '10', r: '16', floor: '14' },
    ].map((h, hi) => (
      <g key={hi}>
        {/* Roof triangle */}
        <polygon points={`${h.x + 70},10 ${h.x + 10},60 ${h.x + 130},60`}
          fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Body rectangle */}
        <rect x={h.x + 10} y={60} width={120} height={80} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Vertical divider */}
        <line x1={h.x + 70} y1={60} x2={h.x + 70} y2={140} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        {/* Roof circle */}
        <circle cx={h.x + 70} cy={15} r={14} fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <text x={h.x + 70} y={20} textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))" fontWeight="bold">{h.roof}</text>
        {/* Room numbers */}
        <text x={h.x + 40} y={105} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{h.l}</text>
        <text x={h.x + 100} y={105} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{h.r}</text>
        {/* Floor */}
        <text x={h.x + 70} y={155} textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))" fontWeight="bold">{h.floor}</text>
      </g>
    ))}
  </svg>
);

// Q5: Circle with 8 sectors. Opposite sectors sum to 50
const DiagramCircle8Sectors: React.FC = () => {
  const cx = 120, cy = 120, r = 90;
  const nums = ['5', '?', '20', '28', '45', '38', '30', '22'];
  
  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[240px]">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {/* 4 lines through center */}
      {[0, 45, 90, 135].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + r * Math.cos(rad)} y1={cy + r * Math.sin(rad)}
            x2={cx - r * Math.cos(rad)} y2={cy - r * Math.sin(rad)}
            stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        );
      })}
      {/* Numbers in each sector */}
      {nums.map((n, i) => {
        const angle = ((i * 45 + 22.5) * Math.PI) / 180;
        const tx = cx + 55 * Math.cos(angle);
        const ty = cy + 55 * Math.sin(angle);
        return (
          <text key={i} x={tx} y={ty + 5} textAnchor="middle" fontSize="14"
            fill="hsl(var(--foreground))" fontWeight="bold">{n}</text>
        );
      })}
    </svg>
  );
};

// Q6: 3×3 Grid. Pattern: Column3 = Column1 + Column2
const DiagramGrid3x3: React.FC = () => (
  <svg viewBox="0 0 200 160" className="w-full max-w-[200px]">
    {/* Grid lines */}
    {[0, 1, 2, 3].map(i => (
      <React.Fragment key={`h${i}`}>
        <line x1={20} y1={20 + i * 40} x2={180} y2={20 + i * 40} stroke="hsl(var(--foreground))" strokeWidth="2" />
      </React.Fragment>
    ))}
    {[0, 1, 2, 3].map(i => (
      <React.Fragment key={`v${i}`}>
        <line x1={20 + i * 53.3} y1={20} x2={20 + i * 53.3} y2={140} stroke="hsl(var(--foreground))" strokeWidth="2" />
      </React.Fragment>
    ))}
    {/* Numbers */}
    {[
      ['2', '7', '9'],
      ['3', '5', '8'],
      ['5', '12', '?'],
    ].map((row, ri) =>
      row.map((n, ci) => (
        <text key={`${ri}-${ci}`}
          x={46.65 + ci * 53.3} y={48 + ri * 40}
          textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{n}</text>
      ))
    )}
  </svg>
);

// Q7: Stick figures. Head = average of two hand values
const DiagramStickFigures: React.FC = () => (
  <svg viewBox="0 0 400 180" className="w-full max-w-md">
    {[
      { x: 20, head: '6', l: '7', r: '5' },
      { x: 150, head: '5', l: '4', r: '6' },
      { x: 280, head: '?', l: '3', r: '7' },
    ].map((fig, fi) => (
      <g key={fi}>
        {/* Head */}
        <circle cx={fig.x + 50} cy={30} r={18} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        <text x={fig.x + 50} y={35} textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))" fontWeight="bold">{fig.head}</text>
        {/* Body */}
        <line x1={fig.x + 50} y1={48} x2={fig.x + 50} y2={120} stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Arms */}
        <line x1={fig.x + 50} y1={70} x2={fig.x + 15} y2={90} stroke="hsl(var(--foreground))" strokeWidth="2" />
        <line x1={fig.x + 50} y1={70} x2={fig.x + 85} y2={90} stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Legs */}
        <line x1={fig.x + 50} y1={120} x2={fig.x + 25} y2={160} stroke="hsl(var(--foreground))" strokeWidth="2" />
        <line x1={fig.x + 50} y1={120} x2={fig.x + 75} y2={160} stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Hand values */}
        <g>
          <rect x={fig.x} y={82} width={24} height={20} rx={4} fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
          <text x={fig.x + 12} y={96} textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))" fontWeight="bold">{fig.l}</text>
        </g>
        <g>
          <rect x={fig.x + 76} y={82} width={24} height={20} rx={4} fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
          <text x={fig.x + 88} y={96} textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))" fontWeight="bold">{fig.r}</text>
        </g>
      </g>
    ))}
  </svg>
);

// Q8: Pentagon with numbers at vertices. Pattern: ×2+1
const DiagramPentagon: React.FC = () => {
  const cx = 120, cy = 110, r = 80;
  const nums = ['3', '7', '15', '31', '?'];
  const angles = [-90, -18, 54, 126, 198]; // pentagon vertices
  const points = angles.map(a => {
    const rad = (a * Math.PI) / 180;
    return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
  }).join(' ');
  
  return (
    <svg viewBox="0 0 240 220" className="w-full max-w-[240px]">
      <polygon points={points} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {nums.map((n, i) => {
        const rad = (angles[i] * Math.PI) / 180;
        const tx = cx + (r + 20) * Math.cos(rad);
        const ty = cy + (r + 20) * Math.sin(rad);
        return (
          <text key={i} x={tx} y={ty + 5} textAnchor="middle" fontSize="16"
            fill="hsl(var(--foreground))" fontWeight="bold">{n}</text>
        );
      })}
    </svg>
  );
};

// Q9: Diamond/Rhombus with center number. Center = sum of all sides / 2
const DiagramDiamond: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full max-w-sm">
    {[
      { x: 10, top: '4', r: '6', bottom: '8', l: '2', center: '10' },
      { x: 190, top: '3', r: '5', bottom: '7', l: '1', center: '?' },
    ].map((d, di) => (
      <g key={di}>
        <polygon points={`${d.x + 75},10 ${d.x + 145},90 ${d.x + 75},170 ${d.x + 5},90`}
          fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {/* Cross lines */}
        <line x1={d.x + 5} y1={90} x2={d.x + 145} y2={90} stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4" />
        <line x1={d.x + 75} y1={10} x2={d.x + 75} y2={170} stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4" />
        {/* Numbers */}
        <text x={d.x + 75} y={30} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{d.top}</text>
        <text x={d.x + 130} y={95} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{d.r}</text>
        <text x={d.x + 75} y={160} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{d.bottom}</text>
        <text x={d.x + 20} y={95} textAnchor="middle" fontSize="16" fill="hsl(var(--foreground))" fontWeight="bold">{d.l}</text>
        {/* Center */}
        <circle cx={d.x + 75} cy={90} r={16} fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <text x={d.x + 75} y={95} textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))" fontWeight="bold">{d.center}</text>
      </g>
    ))}
  </svg>
);

// Q10: Nested circles. Pattern: each divides by increasing factor
const DiagramNestedCircles: React.FC = () => (
  <svg viewBox="0 0 450 140" className="w-full max-w-md">
    {[
      { x: 10, outer: '48', mid: '24', inner: '12', label: '÷2' },
      { x: 160, outer: '54', mid: '18', inner: '6', label: '÷3' },
      { x: 310, outer: '64', mid: '16', inner: '?', label: '÷4' },
    ].map((s, si) => (
      <g key={si}>
        <circle cx={s.x + 65} cy={70} r={60} fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        <circle cx={s.x + 65} cy={70} r={40} fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <circle cx={s.x + 65} cy={70} r={20} fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <text x={s.x + 65} y={25} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))" fontWeight="bold">{s.outer}</text>
        <text x={s.x + 65} y={50} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))" fontWeight="bold">{s.mid}</text>
        <text x={s.x + 65} y={76} textAnchor="middle" fontSize="13" fill="hsl(var(--foreground))" fontWeight="bold">{s.inner}</text>
      </g>
    ))}
  </svg>
);

// ====== MCQ DATA ======
export const missingNumberMCQs: MissingNumberMCQ[] = [
  {
    id: 'mn-1',
    question: 'Insert the missing number:',
    diagram: DiagramCircle3Sectors,
    options: ['5', '7', '9', '12'],
    correctAnswer: 1,
    explanation: 'Pattern: Top-left + Top-right = Bottom. 8+14=22, 15+10=25, so ?+11=18, ?=7.',
  },
  {
    id: 'mn-2',
    question: 'State the value of ? in the following diagrams:',
    diagram: DiagramTriangles,
    options: ['15', '18', '21', '24'],
    correctAnswer: 2,
    explanation: 'Pattern: Top = Bottom-left × Bottom-right. 3×2=6, 4×5=20, so 7×3=21.',
  },
  {
    id: 'mn-3',
    question: 'Insert the missing number:',
    diagram: DiagramStarOfDavid,
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'Pattern: Opposite points of the star sum to 35. 12+23=35, 15+20=35, so ?+27=35, ?=8.',
  },
  {
    id: 'mn-4',
    question: 'Insert the missing number:',
    diagram: DiagramHouse,
    options: ['8', '10', '12', '14'],
    correctAnswer: 1,
    explanation: 'Pattern: Roof = (Left room + Right room + Floor) ÷ 4. (12+14+10)/4=9, so (10+16+14)/4=10.',
  },
  {
    id: 'mn-5',
    question: 'Insert the missing number:',
    diagram: DiagramCircle8Sectors,
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    explanation: 'Pattern: Opposite sectors sum to 50. 5+45=50, 20+30=50, 28+22=50, so ?+38=50, ?=12.',
  },
  {
    id: 'mn-6',
    question: 'Insert the missing number and figure:',
    diagram: DiagramGrid3x3,
    options: ['14', '15', '17', '19'],
    correctAnswer: 2,
    explanation: 'Pattern: Each row\'s third column = first + second. 2+7=9, 3+5=8, 5+12=17.',
  },
  {
    id: 'mn-7',
    question: 'Insert the missing number:',
    diagram: DiagramStickFigures,
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Pattern: Head = (Left hand + Right hand) ÷ 2. (7+5)/2=6, (4+6)/2=5, (3+7)/2=5.',
  },
  {
    id: 'mn-8',
    question: 'Insert the missing number:',
    diagram: DiagramPentagon,
    options: ['47', '55', '63', '71'],
    correctAnswer: 2,
    explanation: 'Pattern: Each number = previous × 2 + 1. 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63.',
  },
  {
    id: 'mn-9',
    question: 'Insert the missing number:',
    diagram: DiagramDiamond,
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'Pattern: Center = (Top + Right + Bottom + Left) ÷ 2. (4+6+8+2)/2=10, (3+5+7+1)/2=8.',
  },
  {
    id: 'mn-10',
    question: 'Insert the missing number:',
    diagram: DiagramNestedCircles,
    options: ['2', '4', '6', '8'],
    correctAnswer: 1,
    explanation: 'Pattern: Each set divides by increasing factor. 48÷2=24÷2=12, 54÷3=18÷3=6, 64÷4=16÷4=4.',
  },
];
