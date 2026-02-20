import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, FileText, HelpCircle, FolderOpen, Calendar, ChevronRight, Trophy, CheckCircle2, Zap } from "lucide-react";
import { academicClasses } from "@/data/academicData";
import { AcademicClass, AcademicSubject, AcademicChapter } from "@/types";
import ClassCard from "@/components/ClassCard";
import AcademicSubjectCard from "@/components/AcademicSubjectCard";
import PlaceholderMessage from "@/components/PlaceholderMessage";
import AcademicQuiz from "@/components/AcademicQuiz";
import GrandQuizEngine from "@/components/GrandQuizEngine";
import { isChapterCompleted, getChapterScore, getSubjectProgress } from "@/lib/academicProgress";

type AcademicScreen = "classes" | "subjects" | "subject-content" | "chapter-content" | "chapter-mcqs" | "grand-quiz";

interface AcademicSectionProps {
  onBack: () => void;
}

const AcademicSection = ({ onBack }: AcademicSectionProps) => {
  const [screen, setScreen] = useState<AcademicScreen>("classes");
  const [selectedClass, setSelectedClass] = useState<AcademicClass | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<AcademicSubject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<AcademicChapter | null>(null);

  const handleBack = () => {
    if (screen === "grand-quiz") {
      setScreen("subject-content");
    } else if (screen === "chapter-mcqs") {
      setScreen("subject-content");
      setSelectedChapter(null);
    } else if (screen === "chapter-content") {
      setScreen("subject-content");
      setSelectedChapter(null);
    } else if (screen === "subject-content") {
      setScreen("subjects");
      setSelectedSubject(null);
    } else if (screen === "subjects") {
      setScreen("classes");
      setSelectedClass(null);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">Academic Studies</h1>
              <p className="text-xs text-muted-foreground">
                {selectedClass ? selectedClass.name : "Class 9-12"}
                {selectedSubject && ` • ${selectedSubject.name}`}
              </p>
            </div>
          </div>
          <button 
            onClick={handleBack} 
            className="flex items-center gap-1 text-sm text-primary hover:text-gold-light transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </header>

      <main className="container py-6 pb-20">
        <AnimatePresence mode="wait">
          {/* Class Selection */}
          {screen === "classes" && (
            <motion.div 
              key="classes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Select Your Class</h2>
              <div className="space-y-4">
                {academicClasses.map((cls, i) => (
                  <ClassCard
                    key={cls.id}
                    name={cls.name}
                    subjectCount={cls.subjects.length}
                    onClick={() => {
                      setSelectedClass(cls);
                      setScreen("subjects");
                    }}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Subject Selection */}
          {screen === "subjects" && selectedClass && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{selectedClass.name} Subjects</h2>
              <div className="space-y-3">
                {selectedClass.subjects.map((subject, i) => {
                  const progress = getSubjectProgress(
                    selectedClass.id,
                    subject.id,
                    subject.chapters.map(c => c.id)
                  );
                  return (
                    <AcademicSubjectCard
                      key={subject.id}
                      name={subject.name}
                      icon={subject.icon}
                      chapterCount={subject.chapters.length}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setScreen("subject-content");
                      }}
                      delay={i * 0.05}
                      completedChapters={progress.completed}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Subject Content Menu */}
          {screen === "subject-content" && selectedSubject && selectedClass && (
            <motion.div
              key="subject-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedSubject.icon}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{selectedSubject.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedClass.name}</p>
                </div>
              </div>

              {/* ── Grand Quiz Button ── */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen("grand-quiz")}
                className="w-full mb-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 text-white font-semibold shadow-lg flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-display text-base font-bold">Grand Quiz MCQs</p>
                    <p className="text-xs text-white/80 font-normal">Board Pattern · 15–20 Random Questions</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="space-y-4">
                {/* Pairing Scheme */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">📑 Pairing Scheme</h3>
                  </div>
                  {selectedSubject.pairingScheme ? (
                    <p className="text-foreground">{selectedSubject.pairingScheme}</p>
                  ) : (
                    <PlaceholderMessage message="📌 Pairing scheme will be added soon." />
                  )}
                </motion.div>

                {/* Chapter-wise Content with MCQ buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-ocean" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">📖 Chapter-Wise Content & MCQs</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedSubject.chapters.map((chapter, i) => {
                      const completed = isChapterCompleted(selectedClass.id, selectedSubject.id, chapter.id);
                      const chapterScore = getChapterScore(selectedClass.id, selectedSubject.id, chapter.id);
                      const hasMCQs = chapter.mcqs && chapter.mcqs.length > 0;

                      return (
                        <div key={chapter.id} className="space-y-1">
                          {/* Chapter Notes Button */}
                          <button
                            onClick={() => {
                              setSelectedChapter(chapter);
                              setScreen("chapter-content");
                            }}
                            className="w-full flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-background transition-colors text-left group"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {completed && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                              <span className="text-foreground group-hover:text-primary transition-colors truncate">
                                Ch {i + 1}: {chapter.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {chapterScore && (
                                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                  Best: {chapterScore.bestPercentage}%
                                </span>
                              )}
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                            </div>
                          </button>

                          {/* MCQ Quiz Button */}
                          <button
                            onClick={() => {
                              setSelectedChapter(chapter);
                              setScreen("chapter-mcqs");
                            }}
                            className={`w-full flex items-center justify-between p-2.5 pl-8 rounded-lg text-left text-sm transition-colors ${
                              hasMCQs
                                ? "bg-primary/10 hover:bg-primary/20 text-primary"
                                : "bg-muted/30 text-muted-foreground"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <HelpCircle className="w-3.5 h-3.5" />
                              {hasMCQs ? `Practice MCQs (${chapter.mcqs!.length})` : "MCQs Coming Soon"}
                            </span>
                            {completed && (
                              <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                      <FolderOpen className="w-5 h-5 text-warning" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">📂 Books & Notes</h3>
                  </div>
                  {selectedSubject.resources && selectedSubject.resources.length > 0 ? (
                    <div className="space-y-2">
                      {selectedSubject.resources.map((resource) => (
                        <a
                          key={resource.id}
                          href={resource.driveLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors"
                        >
                          <span className="text-foreground">{resource.name}</span>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {resource.driveLink ? "View" : "Coming Soon"}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <PlaceholderMessage message="📌 Resources will be added soon." />
                  )}
                </motion.div>

                {/* Study Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">📅 Study Plan</h3>
                  </div>
                  <PlaceholderMessage message="📌 Study plan coming soon." />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Chapter Content */}
          {screen === "chapter-content" && selectedChapter && selectedClass && selectedSubject && (
            <motion.div
              key="chapter-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{selectedChapter.name}</h2>
              
              <div className="space-y-4">
                {/* Important Topics */}
                <div className="bg-card p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">📌 Important Topics</h3>
                  {selectedChapter.importantTopics && selectedChapter.importantTopics.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-foreground">
                      {selectedChapter.importantTopics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  ) : (
                    <PlaceholderMessage message="📌 Content will be updated soon." />
                  )}
                </div>

                {/* Key Concepts */}
                <div className="bg-card p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">💡 Key Concepts</h3>
                  {selectedChapter.keyConcepts && selectedChapter.keyConcepts.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-foreground">
                      {selectedChapter.keyConcepts.map((concept, i) => (
                        <li key={i}>{concept}</li>
                      ))}
                    </ul>
                  ) : (
                    <PlaceholderMessage message="📌 Content will be updated soon." />
                  )}
                </div>

                {/* Formulas */}
                <div className="bg-card p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">🔢 Important Formulas</h3>
                  {selectedChapter.formulas && selectedChapter.formulas.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-foreground font-mono text-sm">
                      {selectedChapter.formulas.map((formula, i) => (
                        <li key={i}>{formula}</li>
                      ))}
                    </ul>
                  ) : (
                    <PlaceholderMessage message="📌 Content will be updated soon." />
                  )}
                </div>

                {/* Short Notes */}
                <div className="bg-card p-5 rounded-2xl border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">📝 Short Notes</h3>
                  {selectedChapter.shortNotes ? (
                    <p className="text-foreground whitespace-pre-line">{selectedChapter.shortNotes}</p>
                  ) : (
                    <PlaceholderMessage message="📌 Content will be updated soon." />
                  )}
                </div>

                {/* Chapter MCQs Button */}
                {selectedChapter.mcqs && selectedChapter.mcqs.length > 0 && (
                  <button
                    onClick={() => setScreen("chapter-mcqs")}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
                  >
                    <HelpCircle className="w-5 h-5" />
                    Practice MCQs ({selectedChapter.mcqs.length} Questions)
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Chapter MCQs Quiz */}
          {screen === "chapter-mcqs" && selectedChapter && selectedClass && selectedSubject && (
            <motion.div
              key="chapter-mcqs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <AcademicQuiz
                mcqs={selectedChapter.mcqs || []}
                chapterName={selectedChapter.name}
                classId={selectedClass.id}
                subjectId={selectedSubject.id}
                chapterId={selectedChapter.id}
                onBack={() => {
                  setScreen("subject-content");
                  setSelectedChapter(null);
                }}
              />
            </motion.div>
          )}

          {/* Grand Quiz */}
          {screen === "grand-quiz" && selectedSubject && selectedClass && (
            <motion.div
              key="grand-quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <GrandQuizEngine
                subject={selectedSubject}
                classId={selectedClass.id}
                onBack={() => setScreen("subject-content")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AcademicSection;
