import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chapter } from "@/data/chemistryData";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";

interface QuizScreenProps {
  chapter: Chapter;
  onBack: () => void;
}

const QuizScreen = ({ chapter }: QuizScreenProps) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const mcq = chapter.mcqs[current];
  const isCorrect = selected === mcq.correctAnswer;
  const isAnswered = selected !== null;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    if (idx === mcq.correctAnswer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < chapter.mcqs.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const percentage = Math.round((score / chapter.mcqs.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center shadow-gold">
          <span className="text-3xl font-bold text-primary-foreground">{percentage}%</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Quiz Complete!</h2>
        <p className="text-muted-foreground mb-6">You scored {score} out of {chapter.mcqs.length}</p>
        <button onClick={() => { setCurrent(0); setSelected(null); setScore(0); setShowResult(false); }} className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-gold">
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">{chapter.name}</span>
        <span className="text-sm font-medium text-primary">{current + 1}/{chapter.mcqs.length}</span>
      </div>

      <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-gradient-gold" initial={{ width: 0 }} animate={{ width: `${((current + 1) / chapter.mcqs.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <div className="bg-card p-5 rounded-2xl border border-border mb-6">
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
                classes += "bg-success/20 border-success text-success";
              } else if (isSelected && !isCorrect) {
                classes += "bg-destructive/20 border-destructive text-destructive";
              } else {
                classes += "bg-card border-border opacity-50";
              }

              return (
                <motion.button key={idx} whileTap={{ scale: 0.98 }} onClick={() => handleSelect(idx)} className={classes}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + idx)}
                    </span>
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
              {current < chapter.mcqs.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizScreen;
