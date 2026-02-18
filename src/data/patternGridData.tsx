// Pattern Grid / Design Completion MCQs
// Large repeating pattern grids with a missing section — pick the correct piece
import React from 'react';

export interface PatternGridMCQ {
  id: string;
  question: string;
  grid: React.FC;
  options: React.FC[];
  correctAnswer: number;
  explanation: string;
}

type TileRenderer = (x: number, y: number, s: number) => React.ReactNode;

// ===== GRID BUILDERS =====
const buildGrid = (
  tile: TileRenderer, cols: number, rows: number, s: number,
  gC: number, gR: number, gW: number, gH: number
): React.FC => {
  const Grid = () => {
    const w = cols * s, h = rows * s;
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md">
        <rect x="0" y="0" width={w} height={h} fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="2" />
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => {
            if (c >= gC && c < gC + gW && r >= gR && r < gR + gH) return null;
            return <React.Fragment key={`${r}-${c}`}>{tile(c * s, r * s, s)}</React.Fragment>;
          })
        )}
        <rect x={gC * s} y={gR * s} width={gW * s} height={gH * s}
          fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6" />
        <text x={gC * s + gW * s / 2} y={gR * s + gH * s / 2 + 8}
          textAnchor="middle" fontSize="20" fill="hsl(var(--primary))" fontWeight="bold">?</text>
      </svg>
    );
  };
  Grid.displayName = 'PatternGrid';
  return Grid;
};

const buildOption = (tile: TileRenderer, cols: number, rows: number, s: number): React.FC => {
  const Opt = () => (
    <svg viewBox={`0 0 ${cols * s} ${rows * s}`} className="w-full">
      <rect x="0" y="0" width={cols * s} height={rows * s} fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <React.Fragment key={`${r}-${c}`}>{tile(c * s, r * s, s)}</React.Fragment>
        ))
      )}
    </svg>
  );
  Opt.displayName = 'PatternOption';
  return Opt;
};

const S = 40; // default tile size

// ===== TILE RENDERERS =====

// 1. Diagonal Split — top-left triangle filled
const diag_TL: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <polygon points={`${x},${y} ${x + s},${y} ${x},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
);
const diag_TR: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <polygon points={`${x},${y} ${x + s},${y} ${x + s},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
);
const diag_BL: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <polygon points={`${x},${y} ${x},${y + s} ${x + s},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
);
const diag_BR: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <polygon points={`${x + s},${y} ${x},${y + s} ${x + s},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
);

// 2. Quarter circle — arc in top-left corner
const arc_TL: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <path d={`M${x},${y} A${s},${s} 0 0,1 ${x + s},${y + s}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" /></g>
);
const arc_TR: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <path d={`M${x + s},${y} A${s},${s} 0 0,1 ${x},${y + s}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" /></g>
);
const arc_BL: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <path d={`M${x},${y + s} A${s},${s} 0 0,1 ${x + s},${y}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" /></g>
);
const arc_BR: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <path d={`M${x + s},${y + s} A${s},${s} 0 0,0 ${x},${y}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" /></g>
);

// 3. Pinwheel — alternating filled triangles around center
const pinwheel_A: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${x},${y} ${cx},${cy} ${x + s},${y}`} fill="hsl(var(--primary))" opacity="0.35" />
      <polygon points={`${x + s},${y + s} ${cx},${cy} ${x},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
  );
};
const pinwheel_B: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${x + s},${y} ${cx},${cy} ${x + s},${y + s}`} fill="hsl(var(--primary))" opacity="0.35" />
      <polygon points={`${x},${y + s} ${cx},${cy} ${x},${y}`} fill="hsl(var(--primary))" opacity="0.35" /></g>
  );
};

// 4. Hourglass vertical vs horizontal
const hourglass_V: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${x},${y} ${x + s},${y} ${cx},${cy}`} fill="hsl(var(--primary))" opacity="0.3" />
      <polygon points={`${x},${y + s} ${x + s},${y + s} ${cx},${cy}`} fill="hsl(var(--primary))" opacity="0.3" /></g>
  );
};
const hourglass_H: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${x},${y} ${x},${y + s} ${cx},${cy}`} fill="hsl(var(--primary))" opacity="0.3" />
      <polygon points={`${x + s},${y} ${x + s},${y + s} ${cx},${cy}`} fill="hsl(var(--primary))" opacity="0.3" /></g>
  );
};

// 5. Circle with dot — dot position varies
const circDot = (dotPos: 'tl' | 'tr' | 'bl' | 'br'): TileRenderer => (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.35;
  const dotOffsets = { tl: [-s / 4, -s / 4], tr: [s / 4, -s / 4], bl: [-s / 4, s / 4], br: [s / 4, s / 4] };
  const [dx, dy] = dotOffsets[dotPos];
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx={cx + dx} cy={cy + dy} r={3} fill="hsl(var(--primary))" /></g>
  );
};

// 6. Arrow pointing direction
const arrowTile = (dir: 'up' | 'right' | 'down' | 'left'): TileRenderer => (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, a = s * 0.3;
  const paths: Record<string, string> = {
    up: `M${cx},${cy - a} L${cx + a * 0.6},${cy + a * 0.3} L${cx},${cy} L${cx - a * 0.6},${cy + a * 0.3} Z`,
    right: `M${cx + a},${cy} L${cx - a * 0.3},${cy - a * 0.6} L${cx},${cy} L${cx - a * 0.3},${cy + a * 0.6} Z`,
    down: `M${cx},${cy + a} L${cx + a * 0.6},${cy - a * 0.3} L${cx},${cy} L${cx - a * 0.6},${cy - a * 0.3} Z`,
    left: `M${cx - a},${cy} L${cx + a * 0.3},${cy - a * 0.6} L${cx},${cy} L${cx + a * 0.3},${cy + a * 0.6} Z`,
  };
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <path d={paths[dir]} fill="hsl(var(--primary))" opacity="0.4" stroke="hsl(var(--foreground))" strokeWidth="0.5" /></g>
  );
};

// 7. Nested diamond — diamond with inner diamond
const diamond_A: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${cx},${y + 4} ${x + s - 4},${cy} ${cx},${y + s - 4} ${x + 4},${cy}`}
        fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <polygon points={`${cx},${cy - 8} ${cx + 8},${cy} ${cx},${cy + 8} ${cx - 8},${cy}`}
        fill="hsl(var(--primary))" opacity="0.3" /></g>
  );
};
const diamond_B: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <polygon points={`${cx},${y + 4} ${x + s - 4},${cy} ${cx},${y + s - 4} ${x + 4},${cy}`}
        fill="hsl(var(--primary))" opacity="0.3" />
      <polygon points={`${cx},${cy - 8} ${cx + 8},${cy} ${cx},${cy + 8} ${cx - 8},${cy}`}
        fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" /></g>
  );
};

// 8. Cross/Plus sign
const crossTile: TileRenderer = (x, y, s) => {
  const w = s * 0.3, cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <rect x={cx - w / 2} y={y + 3} width={w} height={s - 6} fill="hsl(var(--primary))" opacity="0.3" />
      <rect x={x + 3} y={cy - w / 2} width={s - 6} height={w} fill="hsl(var(--primary))" opacity="0.3" /></g>
  );
};
const xTile: TileRenderer = (x, y, s) => (
  <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
    <line x1={x + 4} y1={y + 4} x2={x + s - 4} y2={y + s - 4} stroke="hsl(var(--primary))" strokeWidth="2" />
    <line x1={x + s - 4} y1={y + 4} x2={x + 4} y2={y + s - 4} stroke="hsl(var(--primary))" strokeWidth="2" /></g>
);

// 9. Concentric circles (2 vs 3 rings)
const rings2: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={s * 0.4} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={s * 0.2} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" /></g>
  );
};
const rings3: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={s * 0.4} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={s * 0.27} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={s * 0.14} fill="hsl(var(--primary))" opacity="0.3" /></g>
  );
};

// 10. Leaf/petal — 4 petals, one pair filled
const petal_HFill: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.22;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <ellipse cx={cx} cy={cy - r} rx={r * 0.6} ry={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx} cy={cy + r} rx={r * 0.6} ry={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx - r} cy={cy} rx={r} ry={r * 0.6} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx + r} cy={cy} rx={r} ry={r * 0.6} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" /></g>
  );
};
const petal_VFill: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.22;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <ellipse cx={cx} cy={cy - r} rx={r * 0.6} ry={r} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx} cy={cy + r} rx={r * 0.6} ry={r} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx - r} cy={cy} rx={r} ry={r * 0.6} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx + r} cy={cy} rx={r} ry={r * 0.6} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" /></g>
  );
};
const petal_AllFill: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.22;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <ellipse cx={cx} cy={cy - r} rx={r * 0.6} ry={r} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx} cy={cy + r} rx={r * 0.6} ry={r} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx - r} cy={cy} rx={r} ry={r * 0.6} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx + r} cy={cy} rx={r} ry={r * 0.6} fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1.2" /></g>
  );
};
const petal_None: TileRenderer = (x, y, s) => {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.22;
  return (
    <g><rect x={x} y={y} width={s} height={s} fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
      <ellipse cx={cx} cy={cy - r} rx={r * 0.6} ry={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx} cy={cy + r} rx={r * 0.6} ry={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx - r} cy={cy} rx={r} ry={r * 0.6} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      <ellipse cx={cx + r} cy={cy} rx={r} ry={r * 0.6} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" /></g>
  );
};

// ===== MCQ DEFINITIONS =====
export const patternGridMCQs: PatternGridMCQ[] = [
  {
    id: 'pg-1',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(diag_TL, 6, 4, S, 4, 1, 2, 2),
    options: [
      buildOption(diag_TR, 2, 2, S),   // wrong: mirrored
      buildOption(diag_TL, 2, 2, S),   // correct
      buildOption(diag_BL, 2, 2, S),   // wrong: rotated
      buildOption(diag_BR, 2, 2, S),   // wrong: opposite
    ],
    correctAnswer: 1,
    explanation: 'The grid uses top-left diagonal fill. Only option B matches this orientation consistently.',
  },
  {
    id: 'pg-2',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(arc_TL, 6, 4, S, 2, 1, 2, 2),
    options: [
      buildOption(arc_BR, 2, 2, S),
      buildOption(arc_TR, 2, 2, S),
      buildOption(arc_BL, 2, 2, S),
      buildOption(arc_TL, 2, 2, S),   // correct
    ],
    correctAnswer: 3,
    explanation: 'The arc curves from top-left corner. Only option D has arcs curving from the same corner.',
  },
  {
    id: 'pg-3',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(pinwheel_A, 6, 4, S, 1, 2, 2, 2),
    options: [
      buildOption(pinwheel_A, 2, 2, S),   // correct
      buildOption(pinwheel_B, 2, 2, S),
      buildOption(hourglass_V, 2, 2, S),
      buildOption(hourglass_H, 2, 2, S),
    ],
    correctAnswer: 0,
    explanation: 'The pinwheel has top and bottom triangles filled. Option A matches this exact pattern.',
  },
  {
    id: 'pg-4',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(hourglass_V, 7, 4, S, 3, 1, 2, 2),
    options: [
      buildOption(hourglass_H, 2, 2, S),
      buildOption(pinwheel_A, 2, 2, S),
      buildOption(hourglass_V, 2, 2, S),   // correct
      buildOption(pinwheel_B, 2, 2, S),
    ],
    correctAnswer: 2,
    explanation: 'The hourglass pattern has triangles meeting at center vertically. Option C continues this pattern.',
  },
  {
    id: 'pg-5',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(circDot('tl'), 6, 4, S, 3, 0, 2, 2),
    options: [
      buildOption(circDot('br'), 2, 2, S),
      buildOption(circDot('tr'), 2, 2, S),
      buildOption(circDot('bl'), 2, 2, S),
      buildOption(circDot('tl'), 2, 2, S),   // correct
    ],
    correctAnswer: 3,
    explanation: 'Each cell has a circle with a dot in the top-left quadrant. Only option D has the dot in the correct position.',
  },
  {
    id: 'pg-6',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(arrowTile('right'), 6, 4, S, 0, 2, 3, 2),
    options: [
      buildOption(arrowTile('left'), 3, 2, S),
      buildOption(arrowTile('up'), 3, 2, S),
      buildOption(arrowTile('right'), 3, 2, S),   // correct
      buildOption(arrowTile('down'), 3, 2, S),
    ],
    correctAnswer: 2,
    explanation: 'All arrows point to the right. Option C is the only one with right-pointing arrows.',
  },
  {
    id: 'pg-7',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(diamond_A, 6, 4, S, 4, 2, 2, 2),
    options: [
      buildOption(diamond_B, 2, 2, S),
      buildOption(diamond_A, 2, 2, S),   // correct
      buildOption(crossTile, 2, 2, S),
      buildOption(xTile, 2, 2, S),
    ],
    correctAnswer: 1,
    explanation: 'The pattern shows outlined diamonds with filled inner diamonds. Option B matches — option A has the fill inverted.',
  },
  {
    id: 'pg-8',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(crossTile, 7, 5, S, 2, 1, 3, 2),
    options: [
      buildOption(xTile, 3, 2, S),
      buildOption(rings2, 3, 2, S),
      buildOption(crossTile, 3, 2, S),   // correct
      buildOption(diamond_A, 3, 2, S),
    ],
    correctAnswer: 2,
    explanation: 'The grid uses plus/cross shapes. Option C continues the same cross pattern.',
  },
  {
    id: 'pg-9',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(rings3, 6, 4, S, 1, 1, 2, 2),
    options: [
      buildOption(rings2, 2, 2, S),
      buildOption(rings3, 2, 2, S),   // correct
      buildOption(circDot('tl'), 2, 2, S),
      buildOption(crossTile, 2, 2, S),
    ],
    correctAnswer: 1,
    explanation: 'The pattern uses 3 concentric rings with a filled center. Option B has 3 rings — option A only has 2.',
  },
  {
    id: 'pg-10',
    question: 'Select the piece that completes the pattern:',
    grid: buildGrid(petal_HFill, 6, 4, S, 3, 1, 2, 2),
    options: [
      buildOption(petal_VFill, 2, 2, S),
      buildOption(petal_AllFill, 2, 2, S),
      buildOption(petal_None, 2, 2, S),
      buildOption(petal_HFill, 2, 2, S),   // correct
    ],
    correctAnswer: 3,
    explanation: 'The flower pattern has horizontal petals filled and vertical outlined. Only option D matches this fill pattern.',
  },
];
