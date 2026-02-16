import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Clock, ChevronLeft, ChevronRight, CheckCircle2, 
  RotateCcw, Flag, XCircle, Trophy, Target, Home, Sparkles
} from "lucide-react";
import { shuffleArray } from "@/lib/shuffleUtils";
import { InterBaseTradeType } from "./InterBaseTradeModal";
import { MCQ } from "@/data/chemistryData";

// Import Inter Base data
import {
  interBaseVerbalChapters, interBaseVerbalExperienceMCQs,
  interBaseNonVerbalChapters, interBaseNonVerbalExperienceMCQs,
  interBaseEnglishChapters, interBaseEnglishExperienceMCQs,
  interBasePhysicsChapters, interBasePhysicsExperienceMCQs,
  interBaseMathChapters, interBaseMathExperienceMCQs,
} from "@/data/pafInterBaseData";

interface ExamSection {
  name: string;
  questions: MCQ[];
  timeLimit: number;
  required: number;
}

interface SectionResult {
  name: string;
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  percentage: number;
  passed: boolean;
}

interface InterBaseMockExamProps {
  trade: InterBaseTradeType;
  onBack: () => void;
}

const getAllMCQs = (chapters: { mcqs: MCQ[] }[], experienceMCQs: MCQ[] = []): MCQ[] => {
  const chapterMCQs = chapters.flatMap(chapter => chapter.mcqs);
  return [...chapterMCQs, ...experienceMCQs];
};

const getRandomMCQs = (mcqs: MCQ[], count: number): MCQ[] => {
  const shuffled = shuffleArray(mcqs);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

const generateExamSections = (trade: InterBaseTradeType): ExamSection[] => {
  const allVerbal = getAllMCQs(interBaseVerbalChapters, interBaseVerbalExperienceMCQs);
  const allNonVerbal = getAllMCQs(interBaseNonVerbalChapters, interBaseNonVerbalExperienceMCQs);
  const allEnglish = getAllMCQs(interBaseEnglishChapters, interBaseEnglishExperienceMCQs);
  const allPhysics = getAllMCQs(interBasePhysicsChapters, interBasePhysicsExperienceMCQs);
  const allMath = getAllMCQs(interBaseMathChapters, interBaseMathExperienceMCQs);

  const sections: ExamSection[] = [
    {
      name: "Verbal Intelligence",
      questions: getRandomMCQs(allVerbal, 84),
      timeLimit: 30 * 60,
      required: 84
    },
    {
      name: "Non-Verbal Intelligence",
      questions: getRandomMCQs(allNonVerbal, 64),
      timeLimit: 30 * 60,
      required: 64
    },
    {
      name: "English",
      questions: getRandomMCQs(allEnglish, 75),
      timeLimit: 30 * 60,
      required: 75
    },
    {
      name: "Physics",
      questions: getRandomMCQs(allPhysics, 75),
      timeLimit: 40 * 60,
      required: 75
    }
  ];

  // CAE gets Math as an additional eliminator section
  if (trade === "cae") {
    sections.push({
      name: "Mathematics (Eliminator)",
      questions: getRandomMCQs(allMath, 75),
      timeLimit: 40 * 60,
      required: 75
    });
  }

  return sections;
};

const calculateSectionResult = (
  section: ExamSection,
  sectionIdx: number,
  answers: Record<string, number | null>
): SectionResult => {
  let correct = 0;
  let attempted = 0;
  
  section.questions.forEach((q, qIdx) => {
    const key = `${sectionIdx}-${qIdx}`;
    if (answers[key] !== null && answers[key] !== undefined) {
      attempted++;
      if (answers[key] === q.correctAnswer) {
        correct++;
      }
    }
  });

  const percentage = section.questions.length > 0 
    ? Math.round((correct / section.questions.length) * 100) 
    : 0;
  
  return {
    name: section.name,
    total: section.questions.length,
    attempted,
    correct,
    wrong: attempted - correct,
    percentage,
    passed: percentage >= 50
  };
};

const InterBaseMockExam = ({ trade, onBack }: InterBaseMockExamProps) => {
  const [examKey, setExamKey] = useState(0);
  const sections = useMemo(() => generateExamSections(trade), [trade, examKey]);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [sectionTimeLeft, setSectionTimeLeft] = useState(sections[0]?.timeLimit || 0);
  
  const [showPassModal, setShowPassModal] = useState(false);
  const [failedResult, setFailedResult] = useState<SectionResult | null>(null);
  const [completedResults, setCompletedResults] = useState<SectionResult[]>([]);
  const [isExamComplete, setIsExamComplete] = useState(false);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  const questionKey = `${currentSectionIndex}-${currentQuestionIndex}`;

  // Check if there are any MCQs at all
  const totalMCQs = sections.reduce((sum, s) => sum + s.questions.length, 0);

  const handleAnswer = useCallback((optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionKey]: optionIndex }));
  }, [questionKey]);

  const handleFlag = useCallback(() => {
    setFlagged(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionKey)) newSet.delete(questionKey);
      else newSet.add(questionKey);
      return newSet;
    });
  }, [questionKey]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, currentSection?.questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
  }, [currentQuestionIndex]);

  const handleSectionSubmit = useCallback(() => {
    const result = calculateSectionResult(currentSection, currentSectionIndex, answers);
    
    if (result.passed) {
      setCompletedResults(prev => [...prev, result]);
      if (currentSectionIndex < sections.length - 1) {
        setShowPassModal(true);
      } else {
        setIsExamComplete(true);
      }
    } else {
      setFailedResult(result);
    }
  }, [currentSection, currentSectionIndex, answers, sections.length]);

  const handleTimeUp = useCallback(() => {
    const result = calculateSectionResult(currentSection, currentSectionIndex, answers);
    if (result.passed) {
      setCompletedResults(prev => [...prev, result]);
      if (currentSectionIndex < sections.length - 1) setShowPassModal(true);
      else setIsExamComplete(true);
    } else {
      setFailedResult(result);
    }
  }, [currentSection, currentSectionIndex, answers, sections.length]);

  const handleContinueToNextSection = useCallback(() => {
    setShowPassModal(false);
    setCurrentSectionIndex(prev => prev + 1);
    setCurrentQuestionIndex(0);
  }, []);

  const handleRetake = useCallback(() => {
    setExamKey(prev => prev + 1);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFlagged(new Set());
    setCompletedResults([]);
    setFailedResult(null);
    setShowPassModal(false);
    setIsExamComplete(false);
  }, []);

  useEffect(() => {
    if (isExamComplete || showPassModal || failedResult) return;
    const timer = setInterval(() => {
      setSectionTimeLeft(prev => {
        if (prev <= 1) { handleTimeUp(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamComplete, showPassModal, failedResult, handleTimeUp]);

  useEffect(() => {
    if (sections[currentSectionIndex]) {
      setSectionTimeLeft(sections[currentSectionIndex].timeLimit);
    }
  }, [currentSectionIndex, sections]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // No MCQs available
  if (totalMCQs === 0) {
    return (
      <div className="min-h-screen bg-gradient-navy">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="font-display text-xl font-bold text-foreground">Mock Exam</h1>
            <button onClick={onBack} className="flex items-center gap-1 text-sm text-primary hover:text-gold-light transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </div>
        </header>
        <main className="container py-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Target className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Coming Soon</h2>
            <p className="text-muted-foreground">MCQs are being prepared. The mock exam will be available once questions are added.</p>
            <button onClick={onBack} className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold">
              Go Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Failed screen
  if (failedResult) {
    return (
      <div className="min-h-screen bg-gradient-navy">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container py-4"><h1 className="font-display text-xl font-bold text-foreground">Exam Failed</h1></div>
        </header>
        <main className="container py-8 pb-20">
          <div className="text-center mb-8">
            <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg bg-gradient-to-br from-red-500 to-rose-600">
              <XCircle className="w-14 h-14 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">NOT RECOMMENDED</h2>
            <p className="text-muted-foreground mb-4">You did not pass the {failedResult.name} section</p>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-destructive/20 text-destructive">
              Required: 50% • Your Score: {failedResult.percentage}%
            </div>
          </div>
          <div className="bg-destructive/5 border border-destructive/30 p-5 rounded-xl mb-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground text-lg">{failedResult.name}</h4>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-destructive/20 text-destructive">FAILED</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-background/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-foreground">{failedResult.percentage}%</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
              <div className="bg-background/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-success">{failedResult.correct}</p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div className="bg-background/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-destructive">{failedResult.wrong}</p>
                <p className="text-xs text-muted-foreground">Wrong</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button onClick={handleRetake} className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2">
              <RotateCcw className="w-5 h-5" /> Retake Exam
            </button>
            <button onClick={onBack} className="w-full px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold flex items-center justify-center gap-2">
              <Home className="w-5 h-5" /> Return to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Final success
  if (isExamComplete) {
    const allResults = completedResults;
    const totalCorrect = allResults.reduce((sum, r) => sum + r.correct, 0);
    const totalQuestions = allResults.reduce((sum, r) => sum + r.total, 0);
    const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    return (
      <div className="min-h-screen bg-gradient-navy">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container py-4"><h1 className="font-display text-xl font-bold text-foreground">Exam Results</h1></div>
        </header>
        <main className="container py-6 pb-20">
          <div className="text-center mb-8">
            <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg bg-gradient-to-br from-emerald-500 to-green-600">
              <Trophy className="w-14 h-14 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">QUALIFIED ✓</h2>
            <p className="text-lg font-semibold text-foreground">{overallPercentage}%</p>
            <p className="text-muted-foreground">{totalCorrect} correct out of {totalQuestions}</p>
            <div className="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-semibold bg-success/20 text-success">
              ✓ ALL SECTIONS PASSED
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <h3 className="font-display text-lg font-semibold text-foreground">Section Breakdown</h3>
            {allResults.map((result, idx) => (
              <div key={idx} className="p-4 rounded-xl border bg-success/5 border-success/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{result.name}</h4>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">PASS</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Score: <strong className="text-foreground">{result.percentage}%</strong></span>
                  <span>•</span>
                  <span className="text-success">✓ {result.correct}</span>
                  <span className="text-destructive">✗ {result.wrong}</span>
                  <span className="text-muted-foreground">○ {result.total - result.attempted} skipped</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={handleRetake} className="flex-1 bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2">
              <RotateCcw className="w-5 h-5" /> Retake
            </button>
            <button onClick={onBack} className="px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold">Exit</button>
          </div>
        </main>
      </div>
    );
  }

  // Pass modal
  if (showPassModal && currentSectionIndex < sections.length - 1) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 0.5 }} className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 mx-auto mb-4 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Congratulations!</h2>
          <p className="text-success font-semibold mb-1">You passed {currentSection.name}!</p>
          <p className="text-muted-foreground text-sm mb-6">Get ready: <strong className="text-foreground">{sections[currentSectionIndex + 1].name}</strong></p>
          <button onClick={handleContinueToNextSection} className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2">
            Continue <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    );
  }

  if (!currentQuestion) return null;

  // Main exam UI
  return (
    <div className="min-h-screen bg-gradient-navy">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-bold rounded-full">
                {currentSection.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentSectionIndex + 1}/{sections.length}
              </span>
            </div>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-mono font-bold ${
              sectionTimeLeft < 60 ? "bg-destructive/20 text-destructive animate-pulse" : "bg-muted text-foreground"
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(sectionTimeLeft)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Q {currentQuestionIndex + 1} of {currentSection.questions.length}
            </span>
            <div className="flex gap-1">
              {currentSection.questions.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentQuestionIndex(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    i === currentQuestionIndex
                      ? "bg-primary w-4"
                      : answers[`${currentSectionIndex}-${i}`] !== undefined
                        ? "bg-success"
                        : flagged.has(`${currentSectionIndex}-${i}`)
                          ? "bg-amber-500"
                          : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={questionKey}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <p className="text-xs text-muted-foreground mb-2">Question {currentQuestionIndex + 1}</p>
              <p className="text-foreground font-medium leading-relaxed">{currentQuestion.question}</p>
              {currentQuestion.questionImage && (
                <img src={currentQuestion.questionImage} alt="Question" className="mt-3 rounded-lg max-w-full" />
              )}
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[questionKey] === idx;
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className={`${isSelected ? "text-foreground font-medium" : "text-foreground"}`}>{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border p-4">
        <div className="container flex items-center justify-between">
          <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="p-3 rounded-xl border border-border bg-card disabled:opacity-30">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={handleFlag} className={`p-3 rounded-xl border ${flagged.has(questionKey) ? "border-amber-500 bg-amber-500/10" : "border-border bg-card"}`}>
            <Flag className={`w-5 h-5 ${flagged.has(questionKey) ? "text-amber-500" : "text-muted-foreground"}`} />
          </button>
          {currentQuestionIndex === currentSection.questions.length - 1 ? (
            <button onClick={handleSectionSubmit} className="px-6 py-3 bg-gradient-gold text-primary-foreground rounded-xl font-semibold shadow-gold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Submit
            </button>
          ) : (
            <button onClick={handleNext} className="p-3 rounded-xl border border-border bg-card">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterBaseMockExam;
