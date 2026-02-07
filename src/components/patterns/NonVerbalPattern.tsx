// Component wrapper for displaying non-verbal pattern questions
import React from 'react';

export interface PatternOption {
  id: string;
  render: () => React.ReactNode;
}

export interface NonVerbalPatternProps {
  questionNumber: number;
  questionPattern: React.ReactNode;
  options: PatternOption[];
  correctAnswer: number; // 0-3 for A-D
}

export const PatternContainer = ({ 
  children, 
  size = 80,
  label,
  isQuestion = false,
}: { 
  children: React.ReactNode; 
  size?: number;
  label?: string;
  isQuestion?: boolean;
}) => (
  <div className="flex flex-col items-center gap-1">
    <svg 
      viewBox="0 0 100 100" 
      className={`border-2 ${isQuestion ? 'border-primary bg-primary/5' : 'border-border bg-card'} rounded`}
      style={{ width: size, height: size }}
    >
      <g stroke="hsl(var(--foreground))" fill="none">
        {children}
      </g>
    </svg>
    {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
  </div>
);

export const SequenceRow = ({ children, gap = 2 }: { children: React.ReactNode; gap?: number }) => (
  <div className={`flex items-center justify-center gap-${gap}`}>
    {children}
  </div>
);

export const PatternSequence = ({
  patterns,
  size = 70,
  showArrows = false,
}: {
  patterns: React.ReactNode[];
  size?: number;
  showArrows?: boolean;
}) => (
  <div className="flex items-center gap-2 flex-wrap justify-center">
    {patterns.map((pattern, i) => (
      <React.Fragment key={i}>
        <PatternContainer size={size}>{pattern}</PatternContainer>
        {showArrows && i < patterns.length - 1 && (
          <span className="text-muted-foreground text-xl">→</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

export const OptionsGrid = ({
  options,
  size = 70,
}: {
  options: { label: string; pattern: React.ReactNode }[];
  size?: number;
}) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {options.map((opt, i) => (
      <PatternContainer key={i} size={size} label={opt.label}>
        {opt.pattern}
      </PatternContainer>
    ))}
  </div>
);
