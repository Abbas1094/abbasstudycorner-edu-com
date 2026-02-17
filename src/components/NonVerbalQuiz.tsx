// Non-verbal pattern quiz component for rendering SVG-based patterns
import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allNonVerbalMCQs, getPatternByNumber } from '@/data/nonVerbalPatterns';
import { PatternContainer } from '@/components/patterns/NonVerbalPattern';
import { shuffleArray } from '@/lib/shuffleUtils';
import { motion } from 'framer-motion';

interface NonVerbalQuizProps {
  onBack: () => void;
  questionRange?: { start: number; end: number };
}

interface AnswerRecord {
  questionIndex: number;
  selectedOption: number;
  correctOption: number;
  isCorrect: boolean;
}

const NonVerbalQuiz = ({ onBack, questionRange }: NonVerbalQuizProps) => {
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
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const questionNumber = (questionRange?.start ?? 1) + currentIndex;
  const patternData = getPatternByNumber(questionNumber);

  const shuffledOptions = React.useMemo(() => {
    if (!patternData) return { options: [0, 1, 2, 3], correctAnswer: currentQuestion.correctAnswer };
    
    const indices = [0, 1, 2, 3];
    const shuffled = shuffleArray([...indices]);
    const newCorrectIndex = shuffled.indexOf(3);
    
    return { options: shuffled, correctAnswer: newCorrectIndex };
  }, [currentIndex, patternData, currentQuestion.correctAnswer]);

  const handleOptionSelect = useCallback((optionIndex: number) => {
    if (showResult || answeredQuestions.has(currentIndex)) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    setAnsweredQuestions(prev => new Set(prev).add(currentIndex));
    
    const isCorrect = optionIndex === shuffledOptions.correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);

    setAnswers(prev => [...prev, {
      questionIndex: currentIndex,
      selectedOption: optionIndex,
      correctOption: shuffledOptions.correctAnswer,
      isCorrect,
    }]);
  }, [showResult, answeredQuestions, currentIndex, shuffledOptions.correctAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setShowFinalResult(true);
    }
  }, [currentIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setAnswers([]);
    setShowFinalResult(false);
  }, []);

  const optionLabels = ['A', 'B', 'C', 'D'];
  const mistakes = React.useMemo(() => answers.filter(a => !a.isCorrect), [answers]);

  if (!patternData && !showFinalResult) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Pattern data not found for Q{questionNumber}</p>
      </div>
    );
  }

  // ============= RESULTS SCREEN =============
  if (showFinalResult) {
    const totalAnswered = answeredQuestions.size;
    const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="py-6"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center shadow-gold">
                <span className="text-3xl font-bold text-primary-foreground">{percentage}%</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Non-Verbal Quiz Complete!</h2>
              <p className="text-muted-foreground mb-4">You scored {score} out of {totalAnswered}</p>

              <div className="flex gap-2 justify-center mb-2">
                <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                  ✓ {score} Correct
                </span>
                <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium">
                  ✗ {mistakes.length} Wrong
                </span>
              </div>
            </div>

            {mistakes.length > 0 && (
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  Review Your Mistakes
                </h3>
                <div className="space-y-4">
                  {mistakes.map((mistake, idx) => {
                    const q = questions[mistake.questionIndex];
                    const qNum = (questionRange?.start ?? 1) + mistake.questionIndex;
                    const pd = getPatternByNumber(qNum);

                    return (
                      <div key={idx} className="bg-card p-4 rounded-xl border border-border">
                        <p className="text-sm text-muted-foreground mb-2">Question {qNum}</p>
                        <p className="font-medium text-foreground mb-3">{q.question}</p>

                        {pd && (
                          <div className="flex items-center gap-2 flex-wrap mb-3 p-3 bg-muted/30 rounded-lg">
                            {pd.sequence.map((Pattern, i) => (
                              <PatternContainer key={i} size={50}>
                                <Pattern />
                              </PatternContainer>
                            ))}
                            <span className="text-muted-foreground">→ ?</span>
                          </div>
                        )}

                        {q.explanation && (
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                            <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-primary font-medium">Explanation</p>
                              <p className="text-sm text-foreground">{q.explanation}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={onBack}
                className="flex-1 bg-card border border-border text-foreground px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============= QUIZ SCREEN =============
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

        {/* Progress bar */}
        <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-gold transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Q{questionNumber}. {currentQuestion.question}
          </h2>

          {/* Pattern Sequence */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-6 p-4 bg-muted/30 rounded-lg">
            {patternData!.sequence.map((Pattern, i) => (
              <React.Fragment key={i}>
                <PatternContainer size={80}>
                  <Pattern />
                </PatternContainer>
                {i < patternData!.sequence.length - 1 && (
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
              const Option = patternData!.options[optionIdx];
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
          {showResult || answeredQuestions.has(currentIndex) ? (
            <Button onClick={handleNext}>
              {currentIndex === questions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button disabled>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonVerbalQuiz;
