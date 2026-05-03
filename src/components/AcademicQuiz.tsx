import { useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Lightbulb, ArrowLeft, Timer, Trophy, AlertTriangle, BookOpen, X } from "lucide-react";
import { MCQ } from "@/types";
import { shuffleMCQs } from "@/lib/shuffleUtils";
import { saveChapterScore, ChapterScore } from "@/lib/academicProgress";
import { Progress } from "@/components/ui/progress";

const formatNoteWithBold = (note: string): ReactNode => {
  const parts = note.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-primary">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

interface AcademicQuizProps {
  mcqs: MCQ[];
  chapterName: string;
  classId: string;
  subjectId: string;
  chapterId: string;
  onBack: () => void;
  enableTimer?: boolean;
  timePerQuestion?: number;
  notes?: string[];
}

interface Answer {
  questionIndex: number;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

const AcademicQuiz = ({
  mcqs,
  chapterName,
  classId,
  subjectId,
  chapterId,
  onBack,
  enableTimer = false,
  timePerQuestion = 30,
  notes,
}: AcademicQuizProps) => {
  const [showNotes, setShowNotes] = useState(false);
  const shuffledMCQs = useMemo(() => {
    const shuffled = shuffleMCQs(mcqs);
    // For mixed practice chapters, limit to 30 random MCQs
    if ((chapterId === "part-a-mixed" || chapterId === "part-d-mixed") && shuffled.length > 30) {
      return shuffled.slice(0, 30);
    }
    return shuffled;
  }, [mcqs, chapterId]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [savedResult, setSavedResult] = useState<ChapterScore | null>(null);

  // Timer state
  const totalTime = enableTimer ? shuffledMCQs.length * timePerQuestion : 0;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  const mcq = shuffledMCQs[current];
  const isAnswered = selected !== null;

  const handleSelect = useCallback(
    (idx: number) => {
      if (selected !== null) return;
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
        },
      ]);
    },
    [selected, mcq?.correctAnswer, current]
  );

  const handleFinish = useCallback(() => {
    const result = saveChapterScore(classId, subjectId, chapterId, score, shuffledMCQs.length);
    setSavedResult(result);
    setShowResult(true);
  }, [classId, subjectId, chapterId, score, shuffledMCQs.length]);

  const handleNext = useCallback(() => {
    if (current < shuffledMCQs.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      handleFinish();
    }
  }, [current, shuffledMCQs.length, handleFinish]);

  const handleRestart = useCallback(() => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
    setSavedResult(null);
    if (enableTimer) setTimeLeft(totalTime);
  }, [enableTimer, totalTime]);

  // Timer effect
  useEffect(() => {
    if (!enableTimer || showResult) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [enableTimer, showResult]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (enableTimer && timeLeft === 0 && !showResult) {
      handleFinish();
    }
  }, [timeLeft, enableTimer, showResult, handleFinish]);

  const mistakes = useMemo(() => answers.filter((a) => !a.isCorrect), [answers]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (shuffledMCQs.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="w-12 h-12 text-warning mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-foreground mb-2">No MCQs Available</h3>
        <p className="text-muted-foreground mb-6">MCQs for this chapter will be added soon. Only exact Punjab Textbook Board exercise MCQs will be included.</p>
        <button onClick={onBack} className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Chapters
        </button>
      </div>
    );
  }

  // ===== RESULTS SCREEN =====
  if (showResult) {
    const percentage = Math.round((score / shuffledMCQs.length) * 100);
    const passed = percentage >= 50;

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-4">
        {/* Score Circle */}
        <div className="text-center mb-8">
          <div
            className={`w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg ${
              passed ? "bg-gradient-to-br from-emerald-500 to-teal-600" : "bg-gradient-to-br from-red-500 to-rose-600"
            }`}
          >
            <span className="text-3xl font-bold text-white">{percentage}%</span>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
            {passed ? "🎉 Passed!" : "😔 Not Passed"}
          </h2>
          <p className="text-muted-foreground text-sm mb-1">{chapterName}</p>

          {passed && (
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mt-2">
              <Trophy className="w-4 h-4" />
              Chapter Completed
            </div>
          )}

          <div className="flex gap-3 justify-center mt-4">
            <div className="bg-card px-4 py-2 rounded-xl border border-border text-center">
              <p className="text-lg font-bold text-foreground">{shuffledMCQs.length}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="bg-card px-4 py-2 rounded-xl border border-border text-center">
              <p className="text-lg font-bold text-success">{score}</p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
            <div className="bg-card px-4 py-2 rounded-xl border border-border text-center">
              <p className="text-lg font-bold text-destructive">{mistakes.length}</p>
              <p className="text-xs text-muted-foreground">Wrong</p>
            </div>
          </div>

          {savedResult && savedResult.attempts > 1 && (
            <p className="text-xs text-muted-foreground mt-3">
              Attempt #{savedResult.attempts} • Best Score: {savedResult.bestPercentage}%
            </p>
          )}
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
                const q = shuffledMCQs[mistake.questionIndex];
                return (
                  <div key={idx} className="bg-card p-4 rounded-xl border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Q{mistake.questionIndex + 1}</p>
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
            className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Restart Quiz
          </button>
          <button
            onClick={onBack}
            className="w-full bg-card border border-border text-foreground p-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Chapters
          </button>
        </div>
      </motion.div>
    );
  }

  // ===== QUIZ SCREEN =====
  const progressPercent = ((current + 1) / shuffledMCQs.length) * 100;

  return (
    <div>
      {/* Notes Modal */}
      <AnimatePresence>
        {showNotes && notes && notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setShowNotes(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-border"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Quick Notes
                </h3>
                <button onClick={() => setShowNotes(false)} className="p-2 rounded-full hover:bg-muted transition-colors">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-3">
                {notes.map((note, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground">
                    {formatNoteWithBold(note)}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Info */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-muted-foreground truncate max-w-[45%]">{chapterName}</p>
        <div className="flex items-center gap-3">
          {notes && notes.length > 0 && (
            <button
              onClick={() => setShowNotes(true)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Notes
            </button>
          )}
          {enableTimer && (
            <span className={`text-sm font-mono font-medium flex items-center gap-1 ${timeLeft < 60 ? "text-destructive" : "text-muted-foreground"}`}>
              <Timer className="w-3.5 h-3.5" />
              {formatTime(timeLeft)}
            </span>
          )}
          <span className="text-sm font-medium text-primary">
            {current + 1}/{shuffledMCQs.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress value={progressPercent} className="h-2 mb-6" />

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.15 }}>
          <div className="bg-card p-5 rounded-2xl border border-border mb-5">
            {(mcq as any).isExcluded && (
              <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-destructive/15 border border-destructive/40 text-destructive text-[11px] font-semibold">
                🔴 Excluded in Smart Syllabus (ALP) — Not in Exam
              </div>
            )}
            <p className="text-lg font-medium text-foreground">{mcq.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {mcq.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === mcq.correctAnswer;
              let classes = "w-full p-4 rounded-xl border text-left transition-all duration-150 ";

              if (!isAnswered) {
                classes += "bg-card border-border hover:border-primary/50 active:scale-[0.98]";
              } else if (isCorrectOption) {
                classes += "bg-success/20 border-success";
              } else if (isSelected) {
                classes += "bg-destructive/20 border-destructive";
              } else {
                classes += "bg-card border-border opacity-50";
              }

              return (
                <button key={idx} onClick={() => handleSelect(idx)} className={classes} disabled={isAnswered}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-foreground text-sm">{opt}</span>
                    {isAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />}
                    {isAnswered && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next Button - only appears after selecting */}
          {isAnswered && (
            <motion.button
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              onClick={handleNext}
              className="w-full mt-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              {current < shuffledMCQs.length - 1 ? "Next Question" : "See Results"}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AcademicQuiz;
