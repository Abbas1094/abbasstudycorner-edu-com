import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Clock, ChevronLeft, ChevronRight, CheckCircle2, 
  RotateCcw, Flag, Trophy, Home, EyeOff, Eye
} from "lucide-react";
import { shuffleArray } from "@/lib/shuffleUtils";
import { PracticeSubject } from "./CustomPracticeModal";

// Import Air Force data
import { MCQ } from "@/data/chemistryData";
import { airforceIntelligenceChapters, airforceIntelligenceExperienceMCQs } from "@/data/airforceIntelligenceData";
import { airforceEnglishChapters, airforceEnglishExperienceMCQs } from "@/data/airforceEnglishData";
import { airforcePhysicsChaptersComplete, airforcePhysicsExperienceMCQs } from "@/data/airforcePhysicsData";
import { airforceMathChaptersComplete, airforceMathExperienceMCQs } from "@/data/airforceMathData";

interface PracticeSection {
  name: string;
  questions: MCQ[];
  timeLimit: number;
}

interface SectionResult {
  name: string;
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  percentage: number;
}

interface CustomPracticeProps {
  subjects: PracticeSubject[];
  hideTimer: boolean;
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

// Subject configs
const SUBJECT_CONFIGS: Record<PracticeSubject, { name: string; count: number; time: number }> = {
  intelligence: { name: "Intelligence", count: 100, time: 40 * 60 },
  english: { name: "English", count: 50, time: 30 * 60 },
  physics: { name: "Physics", count: 40, time: 30 * 60 },
  math: { name: "Mathematics", count: 40, time: 30 * 60 },
};

// Generate practice sections based on selected subjects
const generatePracticeSections = (subjects: PracticeSubject[]): PracticeSection[] => {
  const allIntelligence = getAllMCQs(airforceIntelligenceChapters, airforceIntelligenceExperienceMCQs);
  const allEnglish = getAllMCQs(airforceEnglishChapters, airforceEnglishExperienceMCQs);
  const allPhysics = getAllMCQs(airforcePhysicsChaptersComplete, airforcePhysicsExperienceMCQs);
  const allMath = getAllMCQs(airforceMathChaptersComplete, airforceMathExperienceMCQs);

  const dataMap: Record<PracticeSubject, MCQ[]> = {
    intelligence: allIntelligence,
    english: allEnglish,
    physics: allPhysics,
    math: allMath,
  };

  return subjects.map(subject => ({
    name: SUBJECT_CONFIGS[subject].name,
    questions: getRandomMCQs(dataMap[subject], SUBJECT_CONFIGS[subject].count),
    timeLimit: SUBJECT_CONFIGS[subject].time,
  }));
};

// Calculate section result
const calculateSectionResult = (
  section: PracticeSection,
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
  };
};

const CustomPractice = ({ subjects, hideTimer: initialHideTimer, onBack }: CustomPracticeProps) => {
  const [practiceKey, setPracticeKey] = useState(0);
  const sections = useMemo(() => generatePracticeSections(subjects), [subjects, practiceKey]);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [sectionTimeLeft, setSectionTimeLeft] = useState(sections[0]?.timeLimit || 0);
  const [hideTimer, setHideTimer] = useState(initialHideTimer);
  const [isComplete, setIsComplete] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [completedResults, setCompletedResults] = useState<SectionResult[]>([]);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  const questionKey = `${currentSectionIndex}-${currentQuestionIndex}`;

  // Timer effect
  useEffect(() => {
    if (isComplete || hideTimer) return;

    const timer = setInterval(() => {
      setSectionTimeLeft(prev => {
        if (prev <= 1) {
          handleSectionSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSectionIndex, isComplete, hideTimer]);

  // Reset timer when section changes
  useEffect(() => {
    if (sections[currentSectionIndex]) {
      setSectionTimeLeft(sections[currentSectionIndex].timeLimit);
    }
  }, [currentSectionIndex, sections]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
  }, [currentQuestionIndex, currentSection?.questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleJumpToQuestion = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  // Submit current section
  const handleSectionSubmit = useCallback(() => {
    const result = calculateSectionResult(currentSection, currentSectionIndex, answers);
    setCompletedResults(prev => [...prev, result]);
    
    if (currentSectionIndex < sections.length - 1) {
      // Move to next section
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      // All sections complete
      setIsComplete(true);
    }
  }, [currentSection, currentSectionIndex, answers, sections.length]);

  const handleRetake = useCallback(() => {
    setPracticeKey(prev => prev + 1);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFlagged(new Set());
    setCompletedResults([]);
    setIsComplete(false);
    setShowReview(false);
  }, []);

  // Get wrong answers for review
  const getWrongAnswers = useCallback(() => {
    const wrongAnswers: { section: string; question: MCQ; userAnswer: number; questionIndex: number; sectionIndex: number }[] = [];
    
    sections.forEach((section, sectionIdx) => {
      section.questions.forEach((q, qIdx) => {
        const key = `${sectionIdx}-${qIdx}`;
        const userAnswer = answers[key];
        if (userAnswer !== null && userAnswer !== undefined && userAnswer !== q.correctAnswer) {
          wrongAnswers.push({
            section: section.name,
            question: q,
            userAnswer,
            questionIndex: qIdx,
            sectionIndex: sectionIdx,
          });
        }
      });
    });
    
    return wrongAnswers;
  }, [sections, answers]);

  // Results Screen
  if (isComplete) {
    const totalCorrect = completedResults.reduce((sum, r) => sum + r.correct, 0);
    const totalQuestions = completedResults.reduce((sum, r) => sum + r.total, 0);
    const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);
    const wrongAnswers = getWrongAnswers();

    if (showReview) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-gradient-navy"
        >
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container py-4 flex items-center justify-between">
              <h1 className="font-display text-xl font-bold text-foreground">Review Wrong Answers</h1>
              <button 
                onClick={() => setShowReview(false)}
                className="flex items-center gap-1 text-sm text-primary hover:text-gold-light transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Results
              </button>
            </div>
          </header>

          <main className="container py-6 pb-20 space-y-4">
            {wrongAnswers.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold text-foreground">Perfect Score!</h2>
                <p className="text-muted-foreground">You answered all questions correctly.</p>
              </div>
            ) : (
              wrongAnswers.map((item, idx) => (
                <div key={idx} className="bg-card p-4 rounded-xl border border-destructive/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-destructive/20 text-destructive text-xs rounded-full font-medium">
                      {item.section}
                    </span>
                    <span className="text-xs text-muted-foreground">Q{item.questionIndex + 1}</span>
                  </div>
                  <p className="font-medium text-foreground mb-3">{item.question.question}</p>
                  <div className="space-y-2">
                    {item.question.options.map((option, optIdx) => {
                      const isCorrect = optIdx === item.question.correctAnswer;
                      const isUserAnswer = optIdx === item.userAnswer;
                      
                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg border ${
                            isCorrect 
                              ? "bg-success/10 border-success/30" 
                              : isUserAnswer 
                                ? "bg-destructive/10 border-destructive/30"
                                : "bg-muted/30 border-border"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-6 h-6 rounded text-xs flex items-center justify-center font-medium ${
                              isCorrect ? "bg-success text-white" : isUserAnswer ? "bg-destructive text-white" : "bg-muted"
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className={`flex-1 ${isCorrect ? "text-success font-medium" : isUserAnswer ? "text-destructive" : "text-foreground"}`}>
                              {option}
                            </span>
                            {isCorrect && <span className="text-xs text-success">✓ Correct</span>}
                            {isUserAnswer && !isCorrect && <span className="text-xs text-destructive">✗ Your answer</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {item.question.explanation && (
                    <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs text-muted-foreground mb-1">Explanation:</p>
                      <p className="text-sm text-foreground">{item.question.explanation}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </main>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-navy"
      >
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="font-display text-xl font-bold text-foreground">Practice Results</h1>
          </div>
        </header>

        <main className="container py-6 pb-20">
          {/* Overall Score */}
          <div className="text-center mb-8">
            <div className={`w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg ${
              overallPercentage >= 50 
                ? "bg-gradient-to-br from-emerald-500 to-green-600" 
                : "bg-gradient-to-br from-amber-500 to-orange-600"
            }`}>
              <Trophy className="w-14 h-14 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">{overallPercentage}%</h2>
            <p className="text-muted-foreground">
              {totalCorrect} correct out of {totalQuestions}
            </p>
          </div>

          {/* Section-wise Results */}
          <div className="space-y-4 mb-8">
            <h3 className="font-display text-lg font-semibold text-foreground">Section Breakdown</h3>
            {completedResults.map((result, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border ${
                  result.percentage >= 50 
                    ? "bg-success/5 border-success/30" 
                    : "bg-destructive/5 border-destructive/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{result.name}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    result.percentage >= 50 
                      ? "bg-success/20 text-success" 
                      : "bg-destructive/20 text-destructive"
                  }`}>
                    {result.percentage}%
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="text-success">✓ {result.correct}</span>
                  <span className="text-destructive">✗ {result.wrong}</span>
                  <span className="text-muted-foreground">○ {result.total - result.attempted} skipped</span>
                </div>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all ${result.percentage >= 50 ? "bg-success" : "bg-destructive"}`}
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {wrongAnswers.length > 0 && (
              <button
                onClick={() => setShowReview(true)}
                className="w-full bg-primary/20 text-primary p-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                📝 Review {wrongAnswers.length} Wrong Answer{wrongAnswers.length > 1 ? 's' : ''}
              </button>
            )}
            <button
              onClick={handleRetake}
              className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Practice Again
            </button>
            <button
              onClick={onBack}
              className="w-full px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Home
            </button>
          </div>
        </main>
      </motion.div>
    );
  }

  if (!currentSection || !currentQuestion) {
    return null;
  }

  // Question count for current section
  const answeredInSection = currentSection.questions.filter((_, idx) => 
    answers[`${currentSectionIndex}-${idx}`] !== null && answers[`${currentSectionIndex}-${idx}`] !== undefined
  ).length;

  const isLowTime = sectionTimeLeft < 60 && !hideTimer;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-navy"
    >
      {/* Exam Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">{currentSection.name}</h1>
              <p className="text-xs text-muted-foreground">
                {sections.length > 1 ? `Section ${currentSectionIndex + 1} of ${sections.length}` : "Custom Practice"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHideTimer(!hideTimer)}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                {hideTimer ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-primary" />
                )}
              </button>
              {!hideTimer && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                  isLowTime ? "bg-destructive/20 text-destructive animate-pulse" : "bg-primary/20 text-primary"
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold text-lg">{formatTime(sectionTimeLeft)}</span>
                </div>
              )}
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
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[questionKey] === idx;
                
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
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 text-foreground">{option}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-primary" />}
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
              {currentSectionIndex < sections.length - 1 ? `Submit & Continue` : "Finish Practice"}
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomPractice;
