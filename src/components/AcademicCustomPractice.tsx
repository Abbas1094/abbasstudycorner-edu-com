import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckSquare, Square, Shuffle, Play, BookOpen, Hash } from "lucide-react";
import { AcademicSubject, MCQ } from "@/types";
import { shuffleMCQs } from "@/lib/shuffleUtils";
import AcademicQuiz from "@/components/AcademicQuiz";

interface AcademicCustomPracticeProps {
  subject: AcademicSubject;
  classId: string;
  onBack: () => void;
}

const QUESTION_PRESETS = [10, 15, 20, 25, 30, 50];

const AcademicCustomPractice = ({ subject, classId, onBack }: AcademicCustomPracticeProps) => {
  const [selectedChapterIds, setSelectedChapterIds] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number | "all">(20);
  const [started, setStarted] = useState(false);

  // Only chapters that have MCQs
  const availableChapters = useMemo(
    () => subject.chapters.filter((ch) => ch.mcqs && ch.mcqs.length > 0),
    [subject.chapters]
  );

  const totalAvailable = useMemo(
    () =>
      availableChapters
        .filter((ch) => selectedChapterIds.includes(ch.id))
        .reduce((sum, ch) => sum + (ch.mcqs?.length || 0), 0),
    [availableChapters, selectedChapterIds]
  );

  const toggleChapter = (id: string) => {
    setSelectedChapterIds((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedChapterIds.length === availableChapters.length) {
      setSelectedChapterIds([]);
    } else {
      setSelectedChapterIds(availableChapters.map((ch) => ch.id));
    }
  };

  // Gather and shuffle MCQs from selected chapters
  const customMCQs = useMemo(() => {
    const pool: MCQ[] = [];
    for (const ch of availableChapters) {
      if (selectedChapterIds.includes(ch.id) && ch.mcqs) {
        pool.push(...ch.mcqs);
      }
    }
    const shuffled = shuffleMCQs(pool);
    if (questionCount === "all") return shuffled;
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }, [availableChapters, selectedChapterIds, questionCount]);

  if (started && customMCQs.length > 0) {
    return (
      <AcademicQuiz
        mcqs={customMCQs}
        chapterName={`Custom Practice · ${customMCQs.length} Qs`}
        classId={classId}
        subjectId={subject.id}
        chapterId="custom-practice"
        onBack={onBack}
      />
    );
  }

  const allSelected = selectedChapterIds.length === availableChapters.length;
  const canStart = selectedChapterIds.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Custom Practice</h2>
          <p className="text-xs text-muted-foreground">{subject.name} · Select chapters & question count</p>
        </div>
      </div>

      {/* Step 1 – Chapter Selection */}
      <div className="bg-card p-5 rounded-2xl border border-border mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            Select Chapters
          </h3>
          <button
            onClick={selectAll}
            className="text-xs text-primary font-medium hover:underline"
          >
            {allSelected ? "Deselect All" : "Select All"}
          </button>
        </div>

        <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
          {availableChapters.map((ch, i) => {
            const isSelected = selectedChapterIds.includes(ch.id);
            return (
              <button
                key={ch.id}
                onClick={() => toggleChapter(ch.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  isSelected
                    ? "bg-primary/15 border border-primary/40"
                    : "bg-background/50 border border-transparent hover:border-border"
                }`}
              >
                {isSelected ? (
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
                <span className="flex-1 text-sm text-foreground truncate">{ch.name}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">
                  {ch.mcqs?.length || 0} Qs
                </span>
              </button>
            );
          })}
        </div>

        {selectedChapterIds.length > 0 && (
          <p className="text-xs text-muted-foreground mt-3">
            {selectedChapterIds.length} chapter{selectedChapterIds.length > 1 ? "s" : ""} selected · {totalAvailable} MCQs available
          </p>
        )}
      </div>

      {/* Step 2 – Question Count */}
      {canStart && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card p-5 rounded-2xl border border-border mb-4"
        >
          <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 mb-3">
            <Hash className="w-4 h-4 text-primary" />
            How many questions?
          </h3>

          <div className="flex flex-wrap gap-2">
            {QUESTION_PRESETS.filter((n) => n <= totalAvailable).map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  questionCount === n
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-background/50 border border-border text-foreground hover:border-primary/40"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setQuestionCount("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                questionCount === "all"
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-background/50 border border-border text-foreground hover:border-primary/40"
              }`}
            >
              All ({totalAvailable})
            </button>
          </div>
        </motion.div>
      )}

      {/* Start Button */}
      {canStart && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setStarted(true)}
          className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
        >
          <Shuffle className="w-5 h-5" />
          Start Custom Practice ({questionCount === "all" ? totalAvailable : Math.min(questionCount, totalAvailable)} Qs)
          <Play className="w-4 h-4" />
        </motion.button>
      )}

      {!canStart && (
        <p className="text-center text-sm text-muted-foreground py-4">
          Select at least one chapter to begin
        </p>
      )}
    </motion.div>
  );
};

export default AcademicCustomPractice;
