// Non-verbal pattern quiz component for rendering SVG-based patterns
import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allNonVerbalMCQs, getPatternByNumber } from '@/data/nonVerbalPatterns';
import { PatternContainer } from '@/components/patterns/NonVerbalPattern';
import { shuffleArray } from '@/lib/shuffleUtils';

interface NonVerbalQuizProps {
  onBack: () => void;
  questionRange?: { start: number; end: number };
}

const NonVerbalQuiz = ({ onBack, questionRange }: NonVerbalQuizProps) => {
  // Get questions in range
  const questions = React.useMemo(() => {
    const start = questionRange?.start ?? 1;
    const end = questionRange?.end ?? 50;
    return allNonVerbalMCQs.slice(start - 1, end);
  }, [questionRange]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentIndex];
  const questionNumber = (questionRange?.start ?? 1) + currentIndex;
  const patternData = getPatternByNumber(questionNumber);

  // Shuffle options for current question
  const shuffledOptions = React.useMemo(() => {
    if (!patternData) return { options: [0, 1, 2, 3], correctAnswer: currentQuestion.correctAnswer };
    
    const indices = [0, 1, 2, 3];
    const shuffled = shuffleArray([...indices]);
    const newCorrectIndex = shuffled.indexOf(3); // Answer is always at index 3 in our data
    
    return {
      options: shuffled,
      correctAnswer: newCorrectIndex,
    };
  }, [currentIndex, patternData, currentQuestion.correctAnswer]);

  const handleOptionSelect = useCallback((optionIndex: number) => {
    if (showResult || answeredQuestions.has(currentIndex)) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    setAnsweredQuestions(prev => new Set(prev).add(currentIndex));
    
    if (optionIndex === shuffledOptions.correctAnswer) {
      setScore(prev => prev + 1);
    }
  }, [showResult, answeredQuestions, currentIndex, shuffledOptions.correctAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex]);

  const optionLabels = ['A', 'B', 'C', 'D'];

  if (!patternData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Pattern data not found for Q{questionNumber}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="text-sm text-muted-foreground">
            Q{currentIndex + 1} of {questions.length} | Score: {score}/{answeredQuestions.size}
          </div>
        </div>

        {/* Question */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Q{questionNumber}. {currentQuestion.question}
          </h2>

          {/* Pattern Sequence */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-6 p-4 bg-muted/30 rounded-lg">
            {patternData.sequence.map((Pattern, i) => (
              <React.Fragment key={i}>
                <PatternContainer size={80}>
                  <Pattern />
                </PatternContainer>
                {i < patternData.sequence.length - 1 && (
                  <span className="text-muted-foreground text-2xl">→</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-muted-foreground text-2xl">→</span>
            <PatternContainer size={80} isQuestion>
              <text x="50" y="55" textAnchor="middle" fontSize="30" fill="currentColor">?</text>
            </PatternContainer>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shuffledOptions.options.map((optionIdx, displayIdx) => {
              const Option = patternData.options[optionIdx];
              const isSelected = selectedOption === displayIdx;
              const isCorrect = displayIdx === shuffledOptions.correctAnswer;
              
              let borderClass = 'border-border hover:border-primary/50';
              if (showResult) {
                if (isCorrect) {
                  borderClass = 'border-green-500 bg-green-500/10';
                } else if (isSelected && !isCorrect) {
                  borderClass = 'border-red-500 bg-red-500/10';
                }
              } else if (isSelected) {
                borderClass = 'border-primary';
              }

              return (
                <button
                  key={displayIdx}
                  onClick={() => handleOptionSelect(displayIdx)}
                  disabled={showResult || answeredQuestions.has(currentIndex)}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${borderClass} ${
                    !showResult && !answeredQuestions.has(currentIndex) ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <PatternContainer size={70}>
                    <Option />
                  </PatternContainer>
                  <span className="text-sm font-medium text-muted-foreground">
                    {optionLabels[displayIdx]}
                  </span>
                  {showResult && isCorrect && (
                    <CheckCircle className="absolute top-1 right-1 w-5 h-5 text-green-500" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="absolute top-1 right-1 w-5 h-5 text-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && currentQuestion.explanation && (
            <div className={`mt-4 p-4 rounded-lg ${
              selectedOption === shuffledOptions.correctAnswer 
                ? 'bg-success/10 border border-success/30' 
                : 'bg-destructive/10 border border-destructive/30'
            }`}>
              <p className="text-sm text-foreground">
                <strong>Explanation:</strong> {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NonVerbalQuiz;
