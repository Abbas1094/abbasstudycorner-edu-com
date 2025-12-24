import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MCQ } from "@/data/chemistryData";
import { CheckCircle2, XCircle, ChevronRight, Flame } from "lucide-react";

interface ExperienceQuizProps {
  mcqs: MCQ[];
  subject: string;
  onBack: () => void;
}

const ExperienceQuiz = ({ mcqs, subject }: ExperienceQuizProps) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const mcq = mcqs[current];
  const isCorrect = selected === mcq.correctAnswer;
  const isAnswered = selected !== null;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    if (idx === mcq.correctAnswer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < mcqs.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const percentage = Math.round((score / mcqs.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center shadow-gold">
          <span className="text-3xl font-bold text-primary-foreground">{percentage}%</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Experience Quiz Complete!</h2>
        <p className="text-muted-foreground mb-6">You scored {score} out of {mcqs.length}</p>
        <button onClick={() => { setCurrent(0); setSelected(null); setScore(0); setShowResult(false); }} className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-gold">
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-primary">Experience-Based • 2025 Pattern</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground capitalize">{subject}</span>
        <span className="text-sm font-medium text-primary">{current + 1}/{mcqs.length}</span>
      </div>

      <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-gradient-gold" animate={{ width: `${((current + 1) / mcqs.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-5 rounded-2xl border border-primary/30 mb-6">
            <span className="inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs rounded mb-2">🔹 Repeated / Experience Based</span>
            <p className="text-lg font-medium text-foreground">{mcq.question}</p>
          </div>

          <div className="space-y-3">
            {mcq.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === mcq.correctAnswer;
              let classes = "w-full p-4 rounded-xl border text-left transition-all ";
              
              if (!isAnswered) {
                classes += "bg-card border-border hover:border-primary/50";
              } else if (isCorrectOption) {
                classes += "bg-success/20 border-success";
              } else if (isSelected) {
                classes += "bg-destructive/20 border-destructive";
              } else {
                classes += "bg-card border-border opacity-50";
              }

              return (
                <motion.button key={idx} whileTap={{ scale: 0.98 }} onClick={() => handleSelect(idx)} className={classes}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium">{String.fromCharCode(65 + idx)}</span>
                    <span className="flex-1 text-foreground">{opt}</span>
                    {isAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onClick={handleNext} className="w-full mt-6 bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2">
              {current < mcqs.length - 1 ? "Next Question" : "See Results"} <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceQuiz;
