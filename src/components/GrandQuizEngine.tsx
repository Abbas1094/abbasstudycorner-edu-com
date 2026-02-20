import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, RotateCcw, ChevronRight, CheckCircle2, XCircle,
  Lightbulb, ArrowLeft, Zap, Target, Clock, Star, AlertTriangle
} from "lucide-react";
import { MCQ, AcademicSubject } from "@/types";
import { shuffleArray } from "@/lib/shuffleUtils";
import { Progress } from "@/components/ui/progress";

interface GrandQuizEngineProps {
  subject: AcademicSubject;
  classId: string;
  onBack: () => void;
}

interface Answer {
  questionIndex: number;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  chapterName: string;
}

/** Picks 15–20 random MCQs spread across all chapters */
function buildGrandQuiz(subject: AcademicSubject): MCQ[] {
  const allMCQs: (MCQ & { _chapterName?: string })[] = [];

  subject.chapters.forEach((chapter) => {
    if (chapter.mcqs && chapter.mcqs.length > 0) {
      chapter.mcqs.forEach((mcq) => {
        allMCQs.push({ ...mcq, _chapterName: chapter.name });
      });
    }
  });

  if (allMCQs.length === 0) return [];

  const shuffled = shuffleArray(allMCQs);
  const target = Math.min(20, Math.max(15, Math.floor(shuffled.length * 0.3)));
  const count = Math.min(target, shuffled.length);
  return shuffled.slice(0, count);
}

const GrandQuizEngine = ({ subject, classId, onBack }: GrandQuizEngineProps) => {
  const grandMCQs = useMemo(() => buildGrandQuiz(subject), [subject.id]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const mcq = grandMCQs[current] as (MCQ & { _chapterName?: string }) | undefined;
  const isAnswered = selected !== null;

  const handleSelect = useCallback(
    (idx: number) => {
      if (selected !== null || !mcq) return;
      setSelected(idx);
      const correct = idx === mcq.correctAnswer;
      if (correct) setScore((s) => s + 1);
      setAnswers((prev) => [
        ...prev,
        {
          questionIndex: current,
          selectedAnswer: idx,
          correctAnswer: mcq.correctAnswer,
          isCorrect: correct,
          chapterName: (mcq as any)._chapterName || "",
        },
      ]);
    },
    [selected, mcq, current]
  );

  const handleNext = useCallback(() => {
    if (current < grandMCQs.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  }, [current, grandMCQs.length]);

  const handleRestart = useCallback(() => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  }, []);

  const mistakes = useMemo(() => answers.filter((a) => !a.isCorrect), [answers]);

  // ── No data state ──────────────────────────────────────────────────
  if (grandMCQs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-5">
          <AlertTriangle className="w-10 h-10 text-warning" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          Grand Quiz Data Coming Soon!
        </h3>
        <p className="text-muted-foreground max-w-xs mx-auto mb-2">
          Chapter MCQs for <strong className="text-foreground">{subject.name}</strong> haven't been added yet.
        </p>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-8">
          We're sourcing exact Punjab Textbook Board exercise questions for board-pattern accuracy.
        </p>
        <button
          onClick={onBack}
          className="flex items-center gap-2 mx-auto px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Subject
        </button>
      </motion.div>
    );
  }

  // ── Result Screen ──────────────────────────────────────────────────
  if (showResult) {
    const percentage = Math.round((score / grandMCQs.length) * 100);
    const passed = percentage >= 40;
    const grade =
      percentage >= 80 ? "Excellent" :
      percentage >= 60 ? "Good" :
      percentage >= 40 ? "Pass" : "Needs Work";
    const gradeColor =
      percentage >= 80 ? "from-emerald-500 to-teal-600" :
      percentage >= 60 ? "from-blue-500 to-cyan-600" :
      percentage >= 40 ? "from-amber-500 to-yellow-600" :
      "from-red-500 to-rose-600";

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-4">
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">Grand Quiz — Board Pattern</span>
          </div>
        </div>

        {/* Score Circle */}
        <div className="text-center mb-8">
          <div className={`w-32 h-32 rounded-full mx-auto mb-4 flex flex-col items-center justify-center shadow-xl bg-gradient-to-br ${gradeColor}`}>
            <span className="text-3xl font-bold text-white">{percentage}%</span>
            <span className="text-xs text-white/80 font-medium">{grade}</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
            {passed ? "🎉 Well Done!" : "📚 Keep Practicing!"}
          </h2>
          <p className="text-muted-foreground text-sm">{subject.name} — Grand Quiz</p>

          {passed && (
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mt-3">
              <Star className="w-4 h-4 fill-primary" />
              Board Pattern Cleared!
            </div>
          )}

          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-card px-3 py-3 rounded-xl border border-border text-center">
              <p className="text-xl font-bold text-foreground">{grandMCQs.length}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="bg-card px-3 py-3 rounded-xl border border-border text-center">
              <p className="text-xl font-bold text-success">{score}</p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
            <div className="bg-card px-3 py-3 rounded-xl border border-border text-center">
              <p className="text-xl font-bold text-destructive">{mistakes.length}</p>
              <p className="text-xs text-muted-foreground">Wrong</p>
            </div>
          </div>
        </div>

        {/* Mistakes Review */}
        {mistakes.length > 0 && (
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              Review Mistakes
            </h3>
            <div className="space-y-3">
              {mistakes.map((mistake, idx) => {
                const q = grandMCQs[mistake.questionIndex] as MCQ & { _chapterName?: string };
                return (
                  <div key={idx} className="bg-card p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {q._chapterName}
                      </span>
                      <span className="text-xs text-muted-foreground">Q{mistake.questionIndex + 1}</span>
                    </div>
                    <p className="font-medium text-foreground mb-3 text-sm">{q.question}</p>
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
                      {q.explanation && (
                        <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 border border-primary/30">
                          <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-primary font-medium">Explanation</p>
                            <p className="text-sm text-foreground">{q.explanation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleRestart}
            className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Grand Quiz
          </button>
          <button
            onClick={onBack}
            className="w-full bg-card border border-border text-foreground p-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Subject
          </button>
        </div>
      </motion.div>
    );
  }

  // ── Quiz Screen ────────────────────────────────────────────────────
  if (!mcq) return null;
  const progressPercent = ((current + 1) / grandMCQs.length) * 100;
  const isCorrect = selected === mcq.correctAnswer;

  return (
    <div>
      {/* Grand Quiz Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
          <Zap className="w-3 h-3 text-primary" />
          <span className="text-xs font-semibold text-primary">Grand Quiz</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Target className="w-3 h-3" />
            {score}/{current} Correct
          </span>
          <span className="text-sm font-bold text-primary">
            {current + 1}/{grandMCQs.length}
          </span>
        </div>
      </div>

      {/* Chapter Tag */}
      <div className="mb-3">
        <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
          📖 {(mcq as any)._chapterName}
        </span>
      </div>

      {/* Progress */}
      <Progress value={progressPercent} className="h-2 mb-6" />

      {/* Question & Options */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.15 }}
        >
          <div className="bg-card p-5 rounded-2xl border border-border mb-5">
            <p className="text-base font-medium text-foreground leading-relaxed">{mcq.question}</p>
          </div>

          <div className="space-y-3">
            {mcq.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === mcq.correctAnswer;
              let classes = "w-full p-4 rounded-xl border text-left transition-all duration-150 ";

              if (!isAnswered) {
                classes += "bg-card border-border hover:border-primary/50 active:scale-[0.98]";
              } else if (isCorrectOption) {
                classes += "bg-success/20 border-success";
              } else if (isSelected && !isCorrect) {
                classes += "bg-destructive/20 border-destructive";
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
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-foreground text-sm">{opt}</span>
                    {isAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />}
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
              className="w-full mt-5 bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
            >
              {current < grandMCQs.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GrandQuizEngine;
