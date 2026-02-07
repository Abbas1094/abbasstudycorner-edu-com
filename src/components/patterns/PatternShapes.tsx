// Reusable SVG shape primitives for non-verbal patterns
import React from 'react';

interface ShapeProps {
  x?: number;
  y?: number;
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  rotation?: number;
}

// Basic shapes
export const Circle = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2 }: ShapeProps) => (
  <circle cx={x} cy={y} r={size / 2} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
);

export const Square = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => (
  <rect 
    x={x - size/2} 
    y={y - size/2} 
    width={size} 
    height={size} 
    fill={fill} 
    stroke={stroke} 
    strokeWidth={strokeWidth}
    transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
  />
);

export const Triangle = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const h = size * 0.866; // height of equilateral triangle
  const points = `${x},${y - h/2} ${x - size/2},${y + h/2} ${x + size/2},${y + h/2}`;
  return (
    <polygon 
      points={points} 
      fill={fill} 
      stroke={stroke} 
      strokeWidth={strokeWidth}
      transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
    />
  );
};

export const Diamond = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2 }: ShapeProps) => {
  const points = `${x},${y - size/2} ${x + size/2},${y} ${x},${y + size/2} ${x - size/2},${y}`;
  return <polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
};

export const Pentagon = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const r = size / 2;
  const points = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180;
    return `${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`;
  }).join(' ');
  return (
    <polygon 
      points={points} 
      fill={fill} 
      stroke={stroke} 
      strokeWidth={strokeWidth}
      transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
    />
  );
};

export const Hexagon = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const r = size / 2;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 30) * Math.PI / 180;
    return `${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`;
  }).join(' ');
  return (
    <polygon 
      points={points} 
      fill={fill} 
      stroke={stroke} 
      strokeWidth={strokeWidth}
      transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
    />
  );
};

export const Star = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const outer = size / 2;
  const inner = outer * 0.4;
  const points = Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const angle = (i * 36 - 90) * Math.PI / 180;
    return `${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`;
  }).join(' ');
  return (
    <polygon 
      points={points} 
      fill={fill} 
      stroke={stroke} 
      strokeWidth={strokeWidth}
      transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
    />
  );
};

export const Cross = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const arm = size / 3;
  return (
    <g transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}>
      <rect x={x - arm/2} y={y - size/2} width={arm} height={size} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      <rect x={x - size/2} y={y - arm/2} width={size} height={arm} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  );
};

export const Arrow = ({ x = 50, y = 50, size = 40, fill = "none", stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => {
  const headSize = size * 0.4;
  return (
    <g transform={`rotate(${rotation} ${x} ${y})`}>
      <line x1={x} y1={y + size/2} x2={x} y2={y - size/2} stroke={stroke} strokeWidth={strokeWidth} />
      <polyline 
        points={`${x - headSize/2},${y - size/2 + headSize} ${x},${y - size/2} ${x + headSize/2},${y - size/2 + headSize}`}
        fill="none" 
        stroke={stroke} 
        strokeWidth={strokeWidth}
      />
    </g>
  );
};

// Lines and curves
export const Line = ({ x1 = 20, y1 = 20, x2 = 80, y2 = 80, stroke = "currentColor", strokeWidth = 2 }: { x1?: number; y1?: number; x2?: number; y2?: number; stroke?: string; strokeWidth?: number }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />
);

export const Curve = ({ x = 50, y = 50, size = 40, stroke = "currentColor", strokeWidth = 2, rotation = 0 }: ShapeProps) => (
  <path 
    d={`M ${x - size/2} ${y} Q ${x} ${y - size/2} ${x + size/2} ${y}`}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    transform={rotation ? `rotate(${rotation} ${x} ${y})` : undefined}
  />
);

// Dots
export const Dot = ({ x = 50, y = 50, size = 8, fill = "currentColor" }: ShapeProps) => (
  <circle cx={x} cy={y} r={size / 2} fill={fill} />
);

// Grid helper
export const Grid = ({ size = 100, divisions = 3, stroke = "#ddd", strokeWidth = 1 }: { size?: number; divisions?: number; stroke?: string; strokeWidth?: number }) => {
  const step = size / divisions;
  return (
    <g>
      {Array.from({ length: divisions + 1 }, (_, i) => (
        <React.Fragment key={i}>
          <line x1={0} y1={i * step} x2={size} y2={i * step} stroke={stroke} strokeWidth={strokeWidth} />
          <line x1={i * step} y1={0} x2={i * step} y2={size} stroke={stroke} strokeWidth={strokeWidth} />
        </React.Fragment>
      ))}
    </g>
  );
};

// Pattern box wrapper
export const PatternBox = ({ children, size = 100, className = "" }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg 
    viewBox={`0 0 ${size} ${size}`} 
    className={`border-2 border-border bg-card ${className}`}
    style={{ width: size, height: size }}
  >
    {children}
  </svg>
);

// Question mark for missing pattern
export const QuestionMark = ({ x = 50, y = 50, size = 30 }: ShapeProps) => (
  <text 
    x={x} 
    y={y} 
    textAnchor="middle" 
    dominantBaseline="central" 
    fontSize={size} 
    fontWeight="bold"
    fill="currentColor"
  >
    ?
  </text>
);
