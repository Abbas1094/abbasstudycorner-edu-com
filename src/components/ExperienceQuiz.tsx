import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MCQ } from "@/data/chemistryData";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Lightbulb } from "lucide-react";
import { generateSmartExplanation } from "@/lib/explanations";

interface ExperienceQuizProps {
  mcqs: MCQ[];
  subject: string;
  onBack: () => void;
}

interface Answer {
  questionIndex: number;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

const ExperienceQuiz = ({ mcqs, subject }: ExperienceQuizProps) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const mcq = mcqs[current];
  const isCorrect = selected === mcq.correctAnswer;
  const isAnswered = selected !== null;

  const handleSelect = useCallback((idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === mcq.correctAnswer;
    if (correct) setScore(s => s + 1);
    
    setAnswers(prev => [...prev, {
      questionIndex: current,
      selectedAnswer: idx,
      correctAnswer: mcq.correctAnswer,
      isCorrect: correct
    }]);
  }, [selected, mcq.correctAnswer, current]);

  const handleNext = useCallback(() => {
    if (current < mcqs.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  }, [current, mcqs.length]);

  const handleReset = useCallback(() => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  }, []);

  const mistakes = useMemo(() => answers.filter(a => !a.isCorrect), [answers]);

  const generateExplanation = (q: typeof mcq) => {
    if (q.explanation) return q.explanation;
    return generateSmartExplanation(q.question, q.options[q.correctAnswer], q.options);
  };

  if (showResult) {
    const percentage = Math.round((score / mcqs.length) * 100);
    return (
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
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Experience Quiz Complete!</h2>
          <p className="text-muted-foreground mb-4">You scored {score} out of {mcqs.length}</p>
          
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
                const q = mcqs[mistake.questionIndex];
                return (
                  <div 
                    key={idx} 
                    className="bg-card p-4 rounded-xl border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-2">Question {mistake.questionIndex + 1}</p>
                    <p className="font-medium text-foreground mb-3">{q.question}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-destructive/10 border border-destructive/30">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-destructive font-medium">Your Answer</p>
                          <p className="text-sm text-foreground">{q.options[mistake.selectedAnswer]}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-success/10 border border-success/30">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-success font-medium">Correct Answer</p>
                          <p className="text-sm text-foreground">{q.options[mistake.correctAnswer]}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30 mt-2">
                        <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-primary font-medium">Explanation</p>
                          <p className="text-sm text-foreground">{generateExplanation(q)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <button 
          onClick={handleReset} 
          className="w-full bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">{subject} - Experience</span>
        <span className="text-sm font-medium text-primary">{current + 1}/{mcqs.length}</span>
      </div>

      <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-gold transition-all duration-300 ease-out" 
          style={{ width: `${((current + 1) / mcqs.length) * 100}%` }} 
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={current} 
          initial={{ opacity: 0, x: 10 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.15 }}
        >
          <div className="bg-card p-5 rounded-2xl border border-border mb-6">
            <p className="text-lg font-medium text-foreground">{mcq.question}</p>
          </div>

          <div className="space-y-3">
            {mcq.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === mcq.correctAnswer;
              let classes = "w-full p-4 rounded-xl border text-left transition-all duration-150 ";
              
              if (!isAnswered) {
                classes += "bg-card border-border hover:border-primary/50 active:scale-[0.98]";
              } else if (isCorrectOption) {
                classes += "bg-success/20 border-success text-success";
              } else if (isSelected && !isCorrect) {
                classes += "bg-destructive/20 border-destructive text-destructive";
              } else {
                classes += "bg-card border-border opacity-50";
              }

              return (
                <button 
                  key={idx} 
                  onClick={() => handleSelect(idx)} 
                  className={classes}
                  disabled={isAnswered}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-foreground">{opt}</span>
                    {isAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.button 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.15 }}
              onClick={handleNext} 
              className="w-full mt-6 bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
            >
              {current < mcqs.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceQuiz;