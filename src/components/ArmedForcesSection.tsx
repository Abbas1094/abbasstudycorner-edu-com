import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Anchor, Plane, ChevronRight, Brain, Globe, Beaker, Atom, Calculator, BookOpen, Flame, ClipboardCheck, Target, Leaf } from "lucide-react";
import ForceCard from "@/components/ForceCard";
import SubjectCard from "@/components/SubjectCard";
import ChapterList from "@/components/ChapterList";
import QuizScreen from "@/components/QuizScreen";
import ExperienceQuiz from "@/components/ExperienceQuiz";
import NonVerbalQuiz from "@/components/NonVerbalQuiz";
import PlaceholderMessage from "@/components/PlaceholderMessage";
import TradeSelectionModal, { TradeType } from "@/components/TradeSelectionModal";
import MockExam from "@/components/MockExam";
import CustomPracticeModal, { PracticeSubject } from "@/components/CustomPracticeModal";
import CustomPractice from "@/components/CustomPractice";

// Navy data imports
import { chemistryChapters, chemistryExperienceMCQs, chemistryToughMCQs } from "@/data/chemistryData";
import { physicsChapters, physicsExperienceMCQs, physicsToughMCQs } from "@/data/physicsData";
import { mathChapters, mathExperienceMCQs } from "@/data/mathData";
import { intelligenceChapters, intelligenceExperienceMCQs, intelligenceToughMCQs } from "@/data/intelligenceData";
import { gkChapters, gkExperienceMCQs, gkToughMCQs } from "@/data/generalKnowledgeData";

// Air Force data imports
import {
  airforceMathChaptersComplete,
  airforceMathExperienceMCQs
} from "@/data/airforceMathData";

// Air Force Physics (Complete 10 chapters, 300 MCQs with Notes)
import {
  airforcePhysicsChaptersComplete,
  airforcePhysicsExperienceMCQs,
  ChapterWithNotes
} from "@/data/airforcePhysicsData";

// Air Force Intelligence (Complete 10 chapters, 250+ MCQs)
import {
  airforceIntelligenceChapters,
  airforceIntelligenceExperienceMCQs
} from "@/data/airforceIntelligenceData";

// Air Force GK (Complete 7 chapters)
import {
  airforceGKChapters,
  airforceGKExperienceMCQs
} from "@/data/airforceGKData";

// Air Force English (Complete 5 chapters)
import {
  airforceEnglishChapters,
  airforceEnglishExperienceMCQs
} from "@/data/airforceEnglishData";

// Air Force Biology (8 chapters, 200 MCQs with Notes)
import {
  airforceBiologyChapters,
  airforceBiologyExperienceMCQs
} from "@/data/airforceBiologyData";

type ForceType = "navy" | "airforce";
type Screen = "forces" | "subjects" | "subject-menu" | "chapters" | "quiz" | "experience" | "tough" | "mock-exam" | "custom-practice";
type Subject = "chemistry" | "physics" | "math" | "intelligence" | "gk" | "english" | "biology";

interface ArmedForcesSectionProps {
  onBack: () => void;
}

const ArmedForcesSection = ({ onBack }: ArmedForcesSectionProps) => {
  const [screen, setScreen] = useState<Screen>("forces");
  const [selectedForce, setSelectedForce] = useState<ForceType | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<TradeType | null>(null);
  const [showCustomPracticeModal, setShowCustomPracticeModal] = useState(false);
  const [customPracticeSubjects, setCustomPracticeSubjects] = useState<PracticeSubject[]>([]);
  const [customPracticeHideTimer, setCustomPracticeHideTimer] = useState(false);

  // Navy data getters (existing)
  const getNavyChapters = () => {
    switch (selectedSubject) {
      case "chemistry": return chemistryChapters;
      case "physics": return physicsChapters;
      case "math": return mathChapters;
      case "intelligence": return intelligenceChapters;
      case "gk": return gkChapters;
      default: return [];
    }
  };

  const getNavyExperienceMCQs = () => {
    switch (selectedSubject) {
      case "chemistry": return chemistryExperienceMCQs;
      case "physics": return physicsExperienceMCQs;
      case "math": return mathExperienceMCQs;
      case "intelligence": return intelligenceExperienceMCQs;
      case "gk": return gkExperienceMCQs;
      default: return [];
    }
  };

  const getNavyToughMCQs = () => {
    switch (selectedSubject) {
      case "chemistry": return chemistryToughMCQs;
      case "physics": return physicsToughMCQs;
      case "intelligence": return intelligenceToughMCQs;
      case "gk": return gkToughMCQs;
      default: return [];
    }
  };

  // Air Force data getters
  const getAirForceChapters = () => {
    switch (selectedSubject) {
      case "intelligence": return airforceIntelligenceChapters;
      case "math": return airforceMathChaptersComplete;
      case "physics": return airforcePhysicsChaptersComplete;
      case "english": return airforceEnglishChapters;
      case "gk": return airforceGKChapters;
      case "biology": return airforceBiologyChapters;
      default: return [];
    }
  };

  const getChapters = () => {
    if (selectedForce === "navy") return getNavyChapters();
    return getAirForceChapters();
  };

  const getExperienceMCQs = () => {
    if (selectedForce === "navy") return getNavyExperienceMCQs();
    // Air Force experience MCQs per subject
    switch (selectedSubject) {
      case "physics": return airforcePhysicsExperienceMCQs;
      case "intelligence": return airforceIntelligenceExperienceMCQs;
      case "gk": return airforceGKExperienceMCQs;
      case "english": return airforceEnglishExperienceMCQs;
      case "math": return airforceMathExperienceMCQs;
      case "biology": return airforceBiologyExperienceMCQs;
      default: return [];
    }
  };

  const getToughMCQs = () => {
    if (selectedForce === "navy") return getNavyToughMCQs();
    return [];
  };

  const hasToughSection = () => getToughMCQs().length > 0;
  const hasExperienceSection = () => getExperienceMCQs().length > 0;

  const handleBack = () => {
    if (screen === "mock-exam") {
      setScreen("subjects");
      setSelectedTrade(null);
    } else if (screen === "custom-practice") {
      setScreen("subjects");
      setCustomPracticeSubjects([]);
    } else if (screen === "quiz" || screen === "experience" || screen === "tough") {
      setScreen("subject-menu");
      setSelectedChapter(null);
    } else if (screen === "chapters") {
      setScreen("subject-menu");
    } else if (screen === "subject-menu") {
      setScreen("subjects");
      setSelectedSubject(null);
    } else if (screen === "subjects") {
      setScreen("forces");
      setSelectedForce(null);
    } else {
      onBack();
    }
  };

  const handleTradeSelect = (trade: TradeType) => {
    setSelectedTrade(trade);
    setShowTradeModal(false);
    setScreen("mock-exam");
  };

  const handleCustomPracticeStart = (subjects: PracticeSubject[], hideTimer: boolean) => {
    setCustomPracticeSubjects(subjects);
    setCustomPracticeHideTimer(hideTimer);
    setShowCustomPracticeModal(false);
    setScreen("custom-practice");
  };

  const getForceTitle = () => {
    if (selectedForce === "navy") return "Pakistan Navy";
    if (selectedForce === "airforce") return "Pakistan Air Force";
    return "Armed Forces";
  };

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              selectedForce === "navy" 
                ? "bg-gradient-gold" 
                : selectedForce === "airforce" 
                  ? "bg-gradient-to-r from-sky-500 to-blue-600"
                  : "bg-gradient-to-r from-green-600 to-emerald-700"
            }`}>
              {selectedForce === "navy" ? (
                <Anchor className="w-6 h-6 text-primary-foreground" />
              ) : selectedForce === "airforce" ? (
                <Plane className="w-6 h-6 text-white" />
              ) : (
                <BookOpen className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">{getForceTitle()}</h1>
              <p className="text-xs text-muted-foreground">
                {selectedSubject ? `${selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)}` : "Test Preparation 2026"}
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
          {/* Force Selection */}
          {screen === "forces" && (
            <motion.div
              key="forces"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Select Branch</h2>
              <div className="space-y-4">
                <ForceCard
                  icon={Anchor}
                  title="Pakistan Navy"
                  subtitle="Complete Test Preparation"
                  gradient="bg-gradient-to-r from-[hsl(210,50%,20%)] to-[hsl(210,50%,35%)]"
                  onClick={() => {
                    setSelectedForce("navy");
                    setScreen("subjects");
                  }}
                  delay={0}
                />
                <ForceCard
                  icon={Plane}
                  title="Pakistan Air Force"
                  subtitle="Complete Test Preparation"
                  gradient="bg-gradient-to-r from-sky-600 to-blue-700"
                  onClick={() => {
                    setSelectedForce("airforce");
                    setScreen("subjects");
                  }}
                  delay={0.1}
                />
              </div>
            </motion.div>
          )}

          {/* Subject Selection */}
          {screen === "subjects" && selectedForce && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                {selectedForce === "airforce" ? "Choose Option" : "Choose Subject"}
              </h2>
              
              {/* Air Force Mock Exam Card */}
              {selectedForce === "airforce" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowTradeModal(true)}
                    className="w-full p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <ClipboardCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-white">🎯 Real Time Full Mock Exam</h3>
                        <p className="text-sm text-white/80">Complete test simulation with timer • All trades supported</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>

                  {/* Custom Practice Card */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowCustomPracticeModal(true)}
                    className="w-full p-5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg text-left mt-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-white">📝 Custom Subject Practice</h3>
                        <p className="text-sm text-white/80">Practice specific subjects • No fail blocking</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>
                </motion.div>
              )}

              <div className="grid gap-4">
                <SubjectCard 
                  icon={Brain} 
                  title="Intelligence" 
                  subtitle={selectedForce === "navy" ? "10 Chapters • 250+ MCQs" : "10 Chapters • 250+ MCQs"} 
                  color="from-amber-500 to-orange-600" 
                  onClick={() => { setSelectedSubject("intelligence"); setScreen("subject-menu"); }} 
                />
                <SubjectCard 
                  icon={Globe} 
                  title="General Knowledge" 
                  subtitle={selectedForce === "navy" ? "7 Chapters • 175+ MCQs" : "7 Chapters • 175+ MCQs"}
                  color="from-rose-500 to-red-600" 
                  onClick={() => { setSelectedSubject("gk"); setScreen("subject-menu"); }} 
                />
                {selectedForce === "navy" && (
                  <SubjectCard 
                    icon={Beaker} 
                    title="Chemistry" 
                    subtitle="10 Chapters • 300+ MCQs" 
                    color="from-emerald-500 to-teal-600" 
                    onClick={() => { setSelectedSubject("chemistry"); setScreen("subject-menu"); }} 
                  />
                )}
                <SubjectCard 
                  icon={Atom} 
                  title="Physics" 
                  subtitle={selectedForce === "navy" ? "10 Chapters • 250+ MCQs" : "10 Chapters • 300 MCQs"} 
                  color="from-blue-500 to-cyan-600" 
                  onClick={() => { setSelectedSubject("physics"); setScreen("subject-menu"); }} 
                />
                <SubjectCard 
                  icon={Calculator} 
                  title="Mathematics" 
                  subtitle={selectedForce === "navy" ? "10 Chapters • 250+ MCQs" : "15 Chapters • 450 MCQs"} 
                  color="from-purple-500 to-pink-600" 
                  onClick={() => { setSelectedSubject("math"); setScreen("subject-menu"); }} 
                />
                {selectedForce === "airforce" && (
                  <SubjectCard 
                    icon={BookOpen} 
                    title="English" 
                    subtitle="12 Chapters • 360 MCQs" 
                    color="from-indigo-500 to-violet-600" 
                    onClick={() => { setSelectedSubject("english"); setScreen("subject-menu"); }} 
                  />
                )}
                {selectedForce === "airforce" && (
                  <SubjectCard 
                    icon={Leaf} 
                    title="Biology" 
                    subtitle="8 Chapters • 200 MCQs" 
                    color="from-green-500 to-emerald-600" 
                    onClick={() => { setSelectedSubject("biology"); setScreen("subject-menu"); }} 
                  />
                )}
              </div>
            </motion.div>
          )}

          {/* Subject Menu */}
          {screen === "subject-menu" && selectedSubject && (
            <motion.div
              key="subject-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6 capitalize text-foreground">{selectedSubject}</h2>
              
              {/* Section A - Experience Based (Navy only, or placeholder for PAF) */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">SECTION A</span>
                  <span className="text-sm text-muted-foreground">Experience-Based MCQs</span>
                </div>
                {hasExperienceSection() ? (
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={() => setScreen("experience")} 
                    className="bg-gradient-gold p-5 rounded-2xl shadow-gold cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary-foreground">🔥 2026 Pattern MCQs</h3>
                        <p className="text-sm text-primary-foreground/80">Repeated & trending questions from recent tests</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </motion.div>
                ) : (
                  <PlaceholderMessage message={`📌 ${selectedForce === "airforce" ? "Air Force" : ""} Experience-based questions will be added soon.`} />
                )}
              </div>

              {/* Section B - Chapters */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-ocean/20 text-ocean text-xs font-bold rounded-full">SECTION B</span>
                  <span className="text-sm text-muted-foreground">Chapter-wise Practice</span>
                </div>
                <button 
                  onClick={() => setScreen("chapters")} 
                  className="w-full bg-gradient-ocean p-5 rounded-2xl shadow-ocean text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-accent-foreground">📚 All Chapters</h3>
                      <p className="text-sm text-accent-foreground/80">{getChapters().length} chapters available</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-accent-foreground" />
                  </div>
                </button>
              </div>

              {/* Section C - Tough Section (Navy only) */}
              {hasToughSection() && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full">SECTION C</span>
                    <span className="text-sm text-muted-foreground">Advanced Practice</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={() => setScreen("tough")} 
                    className="bg-gradient-to-r from-red-500 to-orange-600 p-5 rounded-2xl shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                          <Flame className="w-5 h-5" /> Tough Section
                        </h3>
                        <p className="text-sm text-white/80">Challenging questions for advanced preparation</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

          {/* Chapters */}
          {screen === "chapters" && selectedSubject && (
            <ChapterList 
              chapters={getChapters()} 
              onSelect={(id) => { 
                setSelectedChapter(id); 
                setScreen("quiz"); 
              }} 
            />
          )}

          {/* Quiz - use NonVerbalQuiz for af-int-11 chapter */}
          {screen === "quiz" && selectedChapter && (
            selectedChapter === "af-int-11" ? (
              <NonVerbalQuiz onBack={handleBack} />
            ) : (
              <QuizScreen 
                chapter={getChapters().find(c => c.id === selectedChapter)!} 
                onBack={handleBack} 
              />
            )
          )}

          {/* Experience Quiz */}
          {screen === "experience" && selectedSubject && (
            <ExperienceQuiz 
              mcqs={getExperienceMCQs()} 
              subject={selectedSubject} 
              onBack={handleBack} 
            />
          )}

          {/* Tough Quiz */}
          {screen === "tough" && selectedSubject && (
            <ExperienceQuiz 
              mcqs={getToughMCQs()} 
              subject={`${selectedSubject} - Tough`} 
              onBack={handleBack} 
            />
          )}

          {/* Mock Exam */}
          {screen === "mock-exam" && selectedTrade && (
            <MockExam 
              trade={selectedTrade} 
              onBack={handleBack} 
            />
          )}

          {/* Custom Practice */}
          {screen === "custom-practice" && customPracticeSubjects.length > 0 && (
            <CustomPractice 
              subjects={customPracticeSubjects} 
              hideTimer={customPracticeHideTimer}
              onBack={handleBack} 
            />
          )}
        </AnimatePresence>

        {/* Trade Selection Modal */}
        <TradeSelectionModal
          isOpen={showTradeModal}
          onClose={() => setShowTradeModal(false)}
          onSelectTrade={handleTradeSelect}
        />

        {/* Custom Practice Modal */}
        <CustomPracticeModal
          isOpen={showCustomPracticeModal}
          onClose={() => setShowCustomPracticeModal(false)}
          onStart={handleCustomPracticeStart}
        />
      </main>
    </div>
  );
};

export default ArmedForcesSection;
