import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, BookOpen, Beaker, Calculator, Atom, ChevronRight, Star, Trophy, Target } from "lucide-react";
import { chemistryChapters, chemistryExperienceMCQs } from "@/data/chemistryData";
import { physicsChapters, physicsExperienceMCQs } from "@/data/physicsData";
import { mathChapters, mathExperienceMCQs } from "@/data/mathData";
import SubjectCard from "@/components/SubjectCard";
import ChapterList from "@/components/ChapterList";
import QuizScreen from "@/components/QuizScreen";
import ExperienceQuiz from "@/components/ExperienceQuiz";

type Screen = "home" | "subject" | "chapters" | "quiz" | "experience";
type Subject = "chemistry" | "physics" | "math";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const getChapters = () => {
    switch (selectedSubject) {
      case "chemistry": return chemistryChapters;
      case "physics": return physicsChapters;
      case "math": return mathChapters;
      default: return [];
    }
  };

  const getExperienceMCQs = () => {
    switch (selectedSubject) {
      case "chemistry": return chemistryExperienceMCQs;
      case "physics": return physicsExperienceMCQs;
      case "math": return mathExperienceMCQs;
      default: return [];
    }
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setScreen("subject");
  };

  const handleBack = () => {
    if (screen === "quiz" || screen === "experience") setScreen("chapters");
    else if (screen === "chapters") setScreen("subject");
    else if (screen === "subject") setScreen("home");
  };

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3" onClick={() => { setScreen("home"); setSelectedSubject(null); }}>
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold cursor-pointer">
              <Anchor className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="cursor-pointer">
              <h1 className="font-display text-xl font-bold text-gradient-gold">NAVY TEST PREP</h1>
              <p className="text-xs text-muted-foreground">2025 Pattern</p>
            </div>
          </div>
          {screen !== "home" && (
            <button onClick={handleBack} className="text-sm text-primary hover:text-gold-light transition-colors font-medium">
              ← Back
            </button>
          )}
        </div>
      </header>

      <main className="container py-6 pb-20">
        <AnimatePresence mode="wait">
          {screen === "home" && (
            <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {/* Hero Section */}
              <div className="text-center mb-10">
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">2025 Latest Pattern</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">Pakistan </span>
                  <span className="text-gradient-gold">Navy</span>
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">Complete preparation for DEPN, PN Cadet & Sailor initial tests with experience-based MCQs</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[{ icon: Trophy, label: "Chapters", value: "30+" }, { icon: Target, label: "MCQs", value: "750+" }, { icon: BookOpen, label: "Experience", value: "Based" }].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gradient-card rounded-xl p-4 text-center border border-border">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Subject Cards */}
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Choose Subject</h3>
              <div className="grid gap-4">
                <SubjectCard icon={Beaker} title="Chemistry" subtitle="16 Chapters • 400+ MCQs" color="from-emerald-500 to-teal-600" onClick={() => handleSubjectSelect("chemistry")} />
                <SubjectCard icon={Atom} title="Physics" subtitle="10 Chapters • 250+ MCQs" color="from-blue-500 to-cyan-600" onClick={() => handleSubjectSelect("physics")} />
                <SubjectCard icon={Calculator} title="Mathematics" subtitle="10 Chapters • 250+ MCQs" color="from-purple-500 to-pink-600" onClick={() => handleSubjectSelect("math")} />
              </div>
            </motion.div>
          )}

          {screen === "subject" && selectedSubject && (
            <motion.div key="subject" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl font-bold mb-6 capitalize text-foreground">{selectedSubject}</h2>
              
              {/* Section A - Experience Based */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">SECTION A</span>
                  <span className="text-sm text-muted-foreground">Experience-Based MCQs</span>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setScreen("experience"); }} className="bg-gradient-gold p-5 rounded-2xl shadow-gold cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-primary-foreground">🔥 2025 Pattern MCQs</h3>
                      <p className="text-sm text-primary-foreground/80">Repeated & trending questions from recent tests</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Section B - Chapters */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-ocean/20 text-ocean text-xs font-bold rounded-full">SECTION B</span>
                <span className="text-sm text-muted-foreground">Chapter-wise Practice</span>
              </div>
              <button onClick={() => setScreen("chapters")} className="w-full bg-gradient-ocean p-5 rounded-2xl shadow-ocean text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-accent-foreground">📚 All Chapters</h3>
                    <p className="text-sm text-accent-foreground/80">{getChapters().length} chapters • 25 MCQs each</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-accent-foreground" />
                </div>
              </button>
            </motion.div>
          )}

          {screen === "chapters" && selectedSubject && (
            <ChapterList chapters={getChapters()} onSelect={(id) => { setSelectedChapter(id); setScreen("quiz"); }} />
          )}

          {screen === "quiz" && selectedChapter && (
            <QuizScreen chapter={getChapters().find(c => c.id === selectedChapter)!} onBack={handleBack} />
          )}

          {screen === "experience" && selectedSubject && (
            <ExperienceQuiz mcqs={getExperienceMCQs()} subject={selectedSubject} onBack={handleBack} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
