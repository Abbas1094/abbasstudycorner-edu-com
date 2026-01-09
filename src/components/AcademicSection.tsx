import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, FileText, HelpCircle, FolderOpen, Calendar, ChevronRight } from "lucide-react";
import { academicClasses } from "@/data/academicData";
import { AcademicClass, AcademicSubject, AcademicChapter } from "@/types";
import ClassCard from "@/components/ClassCard";
import AcademicSubjectCard from "@/components/AcademicSubjectCard";
import PlaceholderMessage from "@/components/PlaceholderMessage";

type AcademicScreen = "classes" | "subjects" | "subject-content" | "chapter-content" | "chapter-mcqs";

interface AcademicSectionProps {
  onBack: () => void;
}

const AcademicSection = ({ onBack }: AcademicSectionProps) => {
  const [screen, setScreen] = useState<AcademicScreen>("classes");
  const [selectedClass, setSelectedClass] = useState<AcademicClass | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<AcademicSubject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<AcademicChapter | null>(null);

  const handleBack = () => {
    if (screen === "chapter-mcqs" || screen === "chapter-content") {
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
                {selectedClass.subjects.map((subject, i) => (
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
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Subject Content Menu */}
          {screen === "subject-content" && selectedSubject && (
            <motion.div
              key="subject-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{selectedSubject.icon}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{selectedSubject.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedClass?.name}</p>
                </div>
              </div>

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

                {/* Chapter-wise Content */}
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
                    <h3 className="font-display text-lg font-semibold text-foreground">📖 Chapter-Wise Content</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedSubject.chapters.map((chapter, i) => (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setSelectedChapter(chapter);
                          setScreen("chapter-content");
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-background transition-colors text-left group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          Ch {i + 1}: {chapter.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* MCQs Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-success" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">📝 MCQs Section</h3>
                  </div>
                  <PlaceholderMessage message="📌 MCQs will be added soon." />
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
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
                  transition={{ delay: 0.5 }}
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
          {screen === "chapter-content" && selectedChapter && (
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
                <button
                  onClick={() => setScreen("chapter-mcqs")}
                  className="w-full bg-gradient-gold text-primary-foreground p-4 rounded-xl font-semibold shadow-gold flex items-center justify-center gap-2"
                >
                  Practice MCQs
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Chapter MCQs */}
          {screen === "chapter-mcqs" && selectedChapter && (
            <motion.div
              key="chapter-mcqs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{selectedChapter.name} - MCQs</h2>
              <PlaceholderMessage message="📌 MCQs will be added soon." />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AcademicSection;
