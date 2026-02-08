import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, BookOpen, Atom, Calculator, Play, Clock, EyeOff, Leaf } from "lucide-react";

export type PracticeSubject = "intelligence" | "english" | "physics" | "math" | "biology";

interface SubjectConfig {
  id: PracticeSubject;
  name: string;
  icon: typeof Brain;
  questionCount: number;
  timeLimit: number; // in minutes
  color: string;
}

const SUBJECTS: SubjectConfig[] = [
  { id: "intelligence", name: "Intelligence", icon: Brain, questionCount: 100, timeLimit: 40, color: "from-amber-500 to-orange-600" },
  { id: "english", name: "English", icon: BookOpen, questionCount: 50, timeLimit: 30, color: "from-indigo-500 to-violet-600" },
  { id: "physics", name: "Physics", icon: Atom, questionCount: 40, timeLimit: 30, color: "from-blue-500 to-cyan-600" },
  { id: "math", name: "Mathematics", icon: Calculator, questionCount: 40, timeLimit: 30, color: "from-purple-500 to-pink-600" },
  { id: "biology", name: "Biology", icon: Leaf, questionCount: 40, timeLimit: 30, color: "from-green-500 to-emerald-600" },
];

interface CustomPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (subjects: PracticeSubject[], hideTimer: boolean) => void;
}

const CustomPracticeModal = ({ isOpen, onClose, onStart }: CustomPracticeModalProps) => {
  const [selectedSubjects, setSelectedSubjects] = useState<Set<PracticeSubject>>(new Set());
  const [hideTimer, setHideTimer] = useState(false);

  const toggleSubject = (subject: PracticeSubject) => {
    setSelectedSubjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subject)) {
        newSet.delete(subject);
      } else {
        newSet.add(subject);
      }
      return newSet;
    });
  };

  const handleStart = () => {
    if (selectedSubjects.size > 0) {
      onStart(Array.from(selectedSubjects), hideTimer);
    }
  };

  const getTotalQuestions = () => {
    return SUBJECTS
      .filter(s => selectedSubjects.has(s.id))
      .reduce((sum, s) => sum + s.questionCount, 0);
  };

  const getTotalTime = () => {
    return SUBJECTS
      .filter(s => selectedSubjects.has(s.id))
      .reduce((sum, s) => sum + s.timeLimit, 0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Custom Practice</h2>
              <p className="text-sm text-muted-foreground">Select subjects to practice</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Subject Selection */}
          <div className="space-y-3 mb-6">
            {SUBJECTS.map((subject) => {
              const Icon = subject.icon;
              const isSelected = selectedSubjects.has(subject.id);
              
              return (
                <button
                  key={subject.id}
                  onClick={() => toggleSubject(subject.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected 
                      ? "border-primary bg-primary/10" 
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{subject.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {subject.questionCount} MCQs • {subject.timeLimit} mins
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected 
                        ? "border-primary bg-primary" 
                        : "border-muted-foreground"
                    }`}>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-primary-foreground rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Timer Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-xl mb-6">
            <div className="flex items-center gap-3">
              {hideTimer ? (
                <EyeOff className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Clock className="w-5 h-5 text-primary" />
              )}
              <div>
                <p className="font-medium text-foreground">Timer</p>
                <p className="text-xs text-muted-foreground">
                  {hideTimer ? "Timer hidden during practice" : "Countdown timer visible"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setHideTimer(!hideTimer)}
              className={`w-12 h-7 rounded-full transition-all relative ${
                hideTimer ? "bg-muted-foreground/30" : "bg-primary"
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all ${
                hideTimer ? "left-1" : "left-6"
              }`} />
            </button>
          </div>

          {/* Summary */}
          {selectedSubjects.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-primary/10 rounded-xl mb-6"
            >
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Questions:</span>
                <span className="font-semibold text-foreground">{getTotalQuestions()}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Total Time:</span>
                <span className="font-semibold text-foreground">{getTotalTime()} minutes</span>
              </div>
            </motion.div>
          )}

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={selectedSubjects.size === 0}
            className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-5 h-5" />
            Start Practice
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomPracticeModal;
