import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Clock, ChevronLeft, ChevronRight, CheckCircle2, 
  RotateCcw, Flag, XCircle, Trophy, Target, Home, Sparkles
} from "lucide-react";
import { shuffleArray } from "@/lib/shuffleUtils";
import { TradeType } from "./TradeSelectionModal";

// Import Air Force data
import { MCQ } from "@/data/chemistryData";
import { airforceIntelligenceChapters, airforceIntelligenceExperienceMCQs } from "@/data/airforceIntelligenceData";
import { airforceEnglishChapters, airforceEnglishExperienceMCQs } from "@/data/airforceEnglishData";
import { airforcePhysicsChaptersComplete, airforcePhysicsExperienceMCQs } from "@/data/airforcePhysicsData";
import { airforceMathChaptersComplete, airforceMathExperienceMCQs } from "@/data/airforceMathData";
import { airforceBiologyChapters, airforceBiologyExperienceMCQs } from "@/data/airforceBiologyData";
import { allPafNonVerbalMCQs } from "@/data/pafNonVerbalPatterns";

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

interface MockExamProps {
  trade: TradeType;
  onBack: () => void;
}

// Collect all MCQs from chapters
const getAllMCQs = (chapters: { mcqs: MCQ[] }[], experienceMCQs: MCQ[] = []): MCQ[] => {
  const chapterMCQs = chapters.flatMap(chapter => chapter.mcqs);
  return [...chapterMCQs, ...experienceMCQs];
};

// Get random subset of MCQs
const getRandomMCQs = (mcqs: MCQ[], count: number): MCQ[] => {
  const shuffled = shuffleArray(mcqs);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Generate exam sections based on trade
const generateExamSections = (trade: TradeType): ExamSection[] => {
  const allIntelligence = [...getAllMCQs(airforceIntelligenceChapters, airforceIntelligenceExperienceMCQs), ...allPafNonVerbalMCQs];
  const allEnglish = getAllMCQs(airforceEnglishChapters, airforceEnglishExperienceMCQs);
  const allPhysics = getAllMCQs(airforcePhysicsChaptersComplete, airforcePhysicsExperienceMCQs);
  const allMath = getAllMCQs(airforceMathChaptersComplete, airforceMathExperienceMCQs);
  const allBiology = getAllMCQs(airforceBiologyChapters, airforceBiologyExperienceMCQs);

  const baseSections: ExamSection[] = [
    {
      name: "Intelligence",
      questions: getRandomMCQs(allIntelligence, 100),
      timeLimit: 40 * 60,
      required: 100
    },
    {
      name: "English",
      questions: getRandomMCQs(allEnglish, 50),
      timeLimit: 30 * 60,
      required: 50
    }
  ];

  if (trade === "aerotrade") {
    return [
      ...baseSections,
      {
        name: "Physics",
        questions: getRandomMCQs(allPhysics, 40),
        timeLimit: 30 * 60,
        required: 40
      },
      {
        name: "Math",
        questions: getRandomMCQs(allMath, 40),
        timeLimit: 30 * 60,
        required: 40
      }
    ];
  }

  if (trade === "medical") {
    return [
      ...baseSections,
      {
        name: "Physics",
        questions: getRandomMCQs(allPhysics, 40),
        timeLimit: 30 * 60,
        required: 40
      },
      {
        name: "Biology",
        questions: getRandomMCQs(allBiology, 40),
        timeLimit: 30 * 60,
        required: 40
      }
    ];
  }

  return baseSections;
};

// Calculate section result
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

// ========== SUB-COMPONENTS ==========

// Section Pass Modal
const SectionPassModal = ({ 
  sectionName, 
  nextSectionName,
  onContinue 
}: { 
  sectionName: string; 
  nextSectionName: string;
  onContinue: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 mx-auto mb-4 flex items-center justify-center">
        <Sparkles className="w-10 h-10 text-white" />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Congratulations!
      </h2>
      <p className="text-success font-semibold mb-1">
        You passed {sectionName}!
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        Get ready for the next section: <strong className="text-foreground">{nextSectionName}</strong>
      </p>
      <button
        onClick={onContinue}
        className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
      >
        Continue to {nextSectionName}
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  </motion.div>
);

// Section Fail Screen
const SectionFailScreen = ({ 
  result, 
  onRetake, 
  onHome 
}: { 
  result: SectionResult; 
  onRetake: () => void; 
  onHome: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-navy"
  >
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-foreground">Exam Failed</h1>
      </div>
    </header>

    <main className="container py-8 pb-20">
      <div className="text-center mb-8">
        <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg bg-gradient-to-br from-red-500 to-rose-600">
          <XCircle className="w-14 h-14 text-white" />
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
          TEST FAILED
        </h2>
        <p className="text-muted-foreground mb-4">
          You did not pass the {result.name} section
        </p>
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-destructive/20 text-destructive">
          Required: 50% • Your Score: {result.percentage}%
        </div>
      </div>

      {/* Failed Section Result */}
      <div className="bg-destructive/5 border border-destructive/30 p-5 rounded-xl mb-8">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-foreground text-lg">{result.name}</h4>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-destructive/20 text-destructive">
            FAILED
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div className="bg-background/50 rounded-lg p-3">
            <p className="text-2xl font-bold text-foreground">{result.percentage}%</p>
            <p className="text-xs text-muted-foreground">Score</p>
          </div>
          <div className="bg-background/50 rounded-lg p-3">
            <p className="text-2xl font-bold text-success">{result.correct}</p>
            <p className="text-xs text-muted-foreground">Correct</p>
          </div>
          <div className="bg-background/50 rounded-lg p-3">
            <p className="text-2xl font-bold text-destructive">{result.wrong}</p>
            <p className="text-xs text-muted-foreground">Wrong</p>
          </div>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-destructive transition-all"
            style={{ width: `${result.percentage}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {result.total - result.attempted > 0 
            ? `${result.total - result.attempted} questions not attempted`
            : "All questions attempted"}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={onRetake}
          className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Exam
        </button>
        <button
          onClick={onHome}
          className="w-full px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </button>
      </div>
    </main>
  </motion.div>
);

// Final Success Screen (only shown when all sections passed)
const FinalSuccessScreen = ({ 
  results, 
  onRetake, 
  onHome 
}: { 
  results: SectionResult[]; 
  onRetake: () => void; 
  onHome: () => void;
}) => {
  const totalCorrect = results.reduce((sum, r) => sum + r.correct, 0);
  const totalQuestions = results.reduce((sum, r) => sum + r.total, 0);
  const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-navy"
    >
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-foreground">Exam Results</h1>
        </div>
      </header>

      <main className="container py-6 pb-20">
        {/* Overall Score */}
        <div className="text-center mb-8">
          <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg bg-gradient-to-br from-emerald-500 to-green-600">
            <Trophy className="w-14 h-14 text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-2">{overallPercentage}%</h2>
          <p className="text-muted-foreground">
            {totalCorrect} correct out of {totalQuestions}
          </p>
          <div className="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-semibold bg-success/20 text-success">
            ✓ ALL SECTIONS PASSED
          </div>
        </div>

        {/* Section-wise Results */}
        <div className="space-y-4 mb-8">
          <h3 className="font-display text-lg font-semibold text-foreground">Section Breakdown</h3>
          {results.map((result, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl border bg-success/5 border-success/30"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">{result.name}</h4>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                  PASS
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Score: <strong className="text-foreground">{result.percentage}%</strong></span>
                <span>•</span>
                <span className="text-success">✓ {result.correct}</span>
                <span className="text-destructive">✗ {result.wrong}</span>
                <span className="text-muted-foreground">○ {result.total - result.attempted} skipped</span>
              </div>
              <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-success transition-all"
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onRetake}
            className="flex-1 bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Exam
          </button>
          <button
            onClick={onHome}
            className="px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold"
          >
            Exit
          </button>
        </div>
      </main>
    </motion.div>
  );
};

// ========== MAIN COMPONENT ==========

const MockExam = ({ trade, onBack }: MockExamProps) => {
  // Generate exam sections once on mount
  const [examKey, setExamKey] = useState(0);
  const sections = useMemo(() => generateExamSections(trade), [trade, examKey]);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [sectionTimeLeft, setSectionTimeLeft] = useState(sections[0].timeLimit);
  
  // Sudden death states
  const [showPassModal, setShowPassModal] = useState(false);
  const [failedResult, setFailedResult] = useState<SectionResult | null>(null);
  const [completedResults, setCompletedResults] = useState<SectionResult[]>([]);
  const [isExamComplete, setIsExamComplete] = useState(false);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const questionKey = `${currentSectionIndex}-${currentQuestionIndex}`;

  const handleAnswer = useCallback((optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionKey]: optionIndex }));
  }, [questionKey]);

  const handleFlag = useCallback(() => {
    setFlagged(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionKey)) {
        newSet.delete(questionKey);
      } else {
        newSet.add(questionKey);
      }
      return newSet;
    });
  }, [questionKey]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, currentSection.questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleJumpToQuestion = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  // SUDDEN DEATH: Submit section and check pass/fail
  const handleSectionSubmit = useCallback(() => {
    const result = calculateSectionResult(currentSection, currentSectionIndex, answers);
    
    if (result.passed) {
      setCompletedResults(prev => [...prev, result]);
      
      if (currentSectionIndex < sections.length - 1) {
        setShowPassModal(true);
      } else {
        setCompletedResults(prev => [...prev, result]);
        setIsExamComplete(true);
      }
    } else {
      setFailedResult(result);
    }
  }, [currentSection, currentSectionIndex, answers, sections.length]);

  // Time-up handler: show result for what they attempted, pass them if ≥50%
  const handleTimeUp = useCallback(() => {
    const result = calculateSectionResult(currentSection, currentSectionIndex, answers);
    
    if (result.passed) {
      setCompletedResults(prev => [...prev, result]);
      
      if (currentSectionIndex < sections.length - 1) {
        setShowPassModal(true);
      } else {
        setCompletedResults(prev => [...prev, result]);
        setIsExamComplete(true);
      }
    } else {
      setFailedResult(result);
    }
  }, [currentSection, currentSectionIndex, answers, sections.length]);

  // Continue to next section after pass modal
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

  // Timer effect (placed after handleTimeUp to avoid block-scoped variable issue)
  useEffect(() => {
    if (isExamComplete || showPassModal || failedResult) return;

    const timer = setInterval(() => {
      setSectionTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSectionIndex, isExamComplete, showPassModal, failedResult, handleTimeUp]);

  // Reset timer when section changes
  useEffect(() => {
    setSectionTimeLeft(sections[currentSectionIndex].timeLimit);
  }, [currentSectionIndex, sections]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ========== RENDER SCREENS ==========

  // Failed screen
  if (failedResult) {
    return (
      <SectionFailScreen 
        result={failedResult} 
        onRetake={handleRetake} 
        onHome={onBack} 
      />
    );
  }

  // Final success screen
  if (isExamComplete) {
    return (
      <FinalSuccessScreen 
        results={completedResults} 
        onRetake={handleRetake} 
        onHome={onBack} 
      />
    );
  }

  // Question count for current section
  const answeredInSection = currentSection.questions.filter((_, idx) => 
    answers[`${currentSectionIndex}-${idx}`] !== null && answers[`${currentSectionIndex}-${idx}`] !== undefined
  ).length;

  const isLowTime = sectionTimeLeft < 60;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-navy"
    >
      {/* Pass Modal */}
      <AnimatePresence>
        {showPassModal && currentSectionIndex < sections.length - 1 && (
          <SectionPassModal
            sectionName={currentSection.name}
            nextSectionName={sections[currentSectionIndex + 1].name}
            onContinue={handleContinueToNextSection}
          />
        )}
      </AnimatePresence>

      {/* Exam Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">{currentSection.name}</h1>
              <p className="text-xs text-muted-foreground">
                Section {currentSectionIndex + 1} of {sections.length}
              </p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
              isLowTime ? "bg-destructive/20 text-destructive animate-pulse" : "bg-primary/20 text-primary"
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold text-lg">{formatTime(sectionTimeLeft)}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Q {currentQuestionIndex + 1}/{currentSection.questions.length}</span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / currentSection.questions.length) * 100}%` }}
              />
            </div>
            <span>{answeredInSection} answered</span>
          </div>
        </div>
      </header>

      <main className="container py-4 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={questionKey}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
          >
            {/* Question Card */}
            <div className="bg-card p-5 rounded-2xl border border-border mb-4">
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                  Q{currentQuestionIndex + 1}
                </span>
                <button
                  onClick={handleFlag}
                  className={`p-2 rounded-lg transition-colors ${
                    flagged.has(questionKey) 
                      ? "bg-amber-500/20 text-amber-500" 
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Flag className="w-4 h-4" />
                </button>
              </div>
              <p className="text-lg font-medium text-foreground">{currentQuestion.question}</p>
              {currentQuestion.questionImage && (
                <div className="mt-4 flex justify-center">
                  <img 
                    src={currentQuestion.questionImage} 
                    alt="Question visual" 
                    className="max-w-full max-h-64 rounded-lg border border-border object-contain"
                  />
                </div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[questionKey] === idx;
                const hasOptionImage = currentQuestion.optionImages && currentQuestion.optionImages[idx];
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected 
                        ? "bg-primary/20 border-primary" 
                        : "bg-card border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {hasOptionImage ? (
                        <img 
                          src={currentQuestion.optionImages![idx]} 
                          alt={`Option ${String.fromCharCode(65 + idx)}`}
                          className="max-h-16 rounded border border-border object-contain"
                        />
                      ) : (
                        <span className="flex-1 text-foreground">{option}</span>
                      )}
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Question Navigator */}
        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-2">Jump to question:</p>
          <div className="flex flex-wrap gap-2">
            {currentSection.questions.map((_, idx) => {
              const key = `${currentSectionIndex}-${idx}`;
              const isAnswered = answers[key] !== null && answers[key] !== undefined;
              const isFlagged = flagged.has(key);
              const isCurrent = idx === currentQuestionIndex;

              return (
                <button
                  key={idx}
                  onClick={() => handleJumpToQuestion(idx)}
                  className={`w-9 h-9 rounded-lg text-xs font-medium transition-all ${
                    isCurrent 
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background" 
                      : isAnswered 
                        ? "bg-success/20 text-success border border-success/30" 
                        : isFlagged 
                          ? "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border p-4">
        <div className="container flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="p-3 rounded-xl border border-border bg-card disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {currentQuestionIndex < currentSection.questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex-1 bg-gradient-gold text-primary-foreground p-3 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
            >
              Next Question
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSectionSubmit}
              className="flex-1 bg-success text-white p-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Submit {currentSection.name}
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MockExam;
