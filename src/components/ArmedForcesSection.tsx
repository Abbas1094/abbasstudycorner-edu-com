import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Anchor, Plane, ChevronRight, Brain, Globe, Beaker, Atom, Calculator, BookOpen, Flame, ClipboardCheck, Target, Leaf, Award, MessageSquare, Eye, Shield, ScrollText, Moon } from "lucide-react";
import ForceCard from "@/components/ForceCard";
import SubjectCard from "@/components/SubjectCard";
import ChapterList from "@/components/ChapterList";
import QuizScreen from "@/components/QuizScreen";
import ExperienceQuiz from "@/components/ExperienceQuiz";
import NonVerbalQuiz from "@/components/NonVerbalQuiz";
import MissingNumberQuiz from "@/components/MissingNumberQuiz";
import PatternGridQuiz from "@/components/PatternGridQuiz";
import { missingNumberMCQs } from "@/data/missingNumberData";
import { patternGridMCQs } from "@/data/patternGridData";
import PlaceholderMessage from "@/components/PlaceholderMessage";
import TradeSelectionModal, { TradeType } from "@/components/TradeSelectionModal";
import InterBaseTradeModal, { InterBaseTradeType } from "@/components/InterBaseTradeModal";
import ArmyCourseModal, { ArmyCourseType } from "@/components/ArmyCourseModal";
import MockExam from "@/components/MockExam";
import InterBaseMockExam from "@/components/InterBaseMockExam";
import ArmyMockExam from "@/components/ArmyMockExam";
import CustomPracticeModal, { PracticeSubject } from "@/components/CustomPracticeModal";
import CustomPractice from "@/components/CustomPractice";

// Navy data imports
import { chemistryChapters, chemistryExperienceMCQs, chemistryToughMCQs } from "@/data/chemistryData";
import { physicsChapters, physicsExperienceMCQs, physicsToughMCQs } from "@/data/physicsData";
import { mathChapters, mathExperienceMCQs } from "@/data/mathData";
import { intelligenceChapters, intelligenceExperienceMCQs, intelligenceToughMCQs } from "@/data/intelligenceData";
import { gkChapters, gkExperienceMCQs, gkToughMCQs } from "@/data/generalKnowledgeData";

// Air Force data imports
import { airforceMathChaptersComplete, airforceMathExperienceMCQs } from "@/data/airforceMathData";
import { airforcePhysicsChaptersComplete, airforcePhysicsExperienceMCQs, ChapterWithNotes } from "@/data/airforcePhysicsData";
import { airforceIntelligenceChapters, airforceIntelligenceExperienceMCQs, airforceNonVerbalChapters, airforceNonVerbalExperienceMCQs, afNvQuestionRanges } from "@/data/airforceIntelligenceData";
import { airforceGKChapters, airforceGKExperienceMCQs } from "@/data/airforceGKData";
import { airforceEnglishChapters, airforceEnglishExperienceMCQs } from "@/data/airforceEnglishData";
import { airforceBiologyChapters, airforceBiologyExperienceMCQs } from "@/data/airforceBiologyData";

// PAF Inter Base data imports
import {
  interBaseVerbalChapters, interBaseVerbalExperienceMCQs,
  interBaseNonVerbalChapters, interBaseNonVerbalExperienceMCQs,
  interBaseEnglishChapters, interBaseEnglishExperienceMCQs,
  interBasePhysicsChapters, interBasePhysicsExperienceMCQs,
  interBaseMathChapters, interBaseMathExperienceMCQs,
} from "@/data/pafInterBaseData";

// Pakistan Army data imports
import {
  armyVerbalChapters, armyVerbalExperienceMCQs,
  armyNonVerbalChapters, armyNonVerbalExperienceMCQs, armyNvQuestionRanges,
  armyEnglishChapters, armyEnglishExperienceMCQs,
  armyMathChapters, armyMathExperienceMCQs,
  armyPakStudiesChapters, armyPakStudiesExperienceMCQs,
  armyIslamiatChapters, armyIslamiatExperienceMCQs,
  armyGKChapters, armyGKExperienceMCQs,
  armyPhysicsChapters, armyPhysicsExperienceMCQs,
} from "@/data/pakArmyData";

type ForceType = "navy" | "airforce" | "paf-interbase" | "pak-army";
type Screen = "forces" | "subjects" | "subject-menu" | "chapters" | "quiz" | "experience" | "tough" | "mock-exam" | "custom-practice" | "ib-mock-exam" | "army-mock-exam";
type Subject = "chemistry" | "physics" | "math" | "intelligence" | "gk" | "english" | "biology" | "verbal-intelligence" | "nonverbal-intelligence" | "pak-studies" | "islamiat";

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
  const [showInterBaseTradeModal, setShowInterBaseTradeModal] = useState(false);
  const [selectedInterBaseTrade, setSelectedInterBaseTrade] = useState<InterBaseTradeType | null>(null);
  const [showArmyCourseModal, setShowArmyCourseModal] = useState(false);
  const [selectedArmyCourse, setSelectedArmyCourse] = useState<ArmyCourseType | null>(null);
  const [showCustomPracticeModal, setShowCustomPracticeModal] = useState(false);
  const [customPracticeSubjects, setCustomPracticeSubjects] = useState<PracticeSubject[]>([]);
  const [customPracticeHideTimer, setCustomPracticeHideTimer] = useState(false);

  // Navy data getters
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
      case "nonverbal-intelligence": return airforceNonVerbalChapters;
      case "math": return airforceMathChaptersComplete;
      case "physics": return airforcePhysicsChaptersComplete;
      case "english": return airforceEnglishChapters;
      case "gk": return airforceGKChapters;
      case "biology": return airforceBiologyChapters;
      default: return [];
    }
  };

  // Inter Base data getters
  const getInterBaseChapters = () => {
    switch (selectedSubject) {
      case "verbal-intelligence": return interBaseVerbalChapters;
      case "nonverbal-intelligence": return interBaseNonVerbalChapters;
      case "english": return interBaseEnglishChapters;
      case "physics": return interBasePhysicsChapters;
      case "math": return interBaseMathChapters;
      default: return [];
    }
  };

  // Army data getters
  const getArmyChapters = () => {
    switch (selectedSubject) {
      case "verbal-intelligence": return armyVerbalChapters;
      case "nonverbal-intelligence": return armyNonVerbalChapters;
      case "english": return armyEnglishChapters;
      case "math": return armyMathChapters;
      case "pak-studies": return armyPakStudiesChapters;
      case "islamiat": return armyIslamiatChapters;
      case "gk": return armyGKChapters;
      case "physics": return armyPhysicsChapters;
      default: return [];
    }
  };

  const getChapters = () => {
    if (selectedForce === "navy") return getNavyChapters();
    if (selectedForce === "paf-interbase") return getInterBaseChapters();
    if (selectedForce === "pak-army") return getArmyChapters();
    return getAirForceChapters();
  };

  const getExperienceMCQs = () => {
    if (selectedForce === "navy") return getNavyExperienceMCQs();
    if (selectedForce === "paf-interbase") {
      switch (selectedSubject) {
        case "verbal-intelligence": return interBaseVerbalExperienceMCQs;
        case "nonverbal-intelligence": return interBaseNonVerbalExperienceMCQs;
        case "english": return interBaseEnglishExperienceMCQs;
        case "physics": return interBasePhysicsExperienceMCQs;
        case "math": return interBaseMathExperienceMCQs;
        default: return [];
      }
    }
    if (selectedForce === "pak-army") {
      switch (selectedSubject) {
        case "verbal-intelligence": return armyVerbalExperienceMCQs;
        case "nonverbal-intelligence": return armyNonVerbalExperienceMCQs;
        case "english": return armyEnglishExperienceMCQs;
        case "math": return armyMathExperienceMCQs;
        case "pak-studies": return armyPakStudiesExperienceMCQs;
        case "islamiat": return armyIslamiatExperienceMCQs;
        case "gk": return armyGKExperienceMCQs;
        case "physics": return armyPhysicsExperienceMCQs;
        default: return [];
      }
    }
    // Air Force
    switch (selectedSubject) {
      case "physics": return airforcePhysicsExperienceMCQs;
      case "intelligence": return airforceIntelligenceExperienceMCQs;
      case "nonverbal-intelligence": return airforceNonVerbalExperienceMCQs;
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
    } else if (screen === "ib-mock-exam") {
      setScreen("subjects");
      setSelectedInterBaseTrade(null);
    } else if (screen === "army-mock-exam") {
      setScreen("subjects");
      setSelectedArmyCourse(null);
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

  const handleInterBaseTradeSelect = (trade: InterBaseTradeType) => {
    setSelectedInterBaseTrade(trade);
    setShowInterBaseTradeModal(false);
    setScreen("ib-mock-exam");
  };

  const handleArmyCourseSelect = (course: ArmyCourseType) => {
    setSelectedArmyCourse(course);
    setShowArmyCourseModal(false);
    setScreen("army-mock-exam");
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
    if (selectedForce === "paf-interbase") return "PAF Inter Base";
    if (selectedForce === "pak-army") return "Pakistan Army";
    return "Armed Forces";
  };

  const getSubjectDisplayName = () => {
    if (selectedSubject === "verbal-intelligence") return "Verbal Intelligence";
    if (selectedSubject === "nonverbal-intelligence") return "Non-Verbal Intelligence";
    if (selectedSubject === "pak-studies") return "Pak Studies";
    if (selectedSubject === "islamiat") return "Islamiat";
    return selectedSubject ? selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1) : "";
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
                  : selectedForce === "paf-interbase"
                    ? "bg-gradient-to-r from-indigo-500 to-blue-700"
                    : selectedForce === "pak-army"
                      ? "bg-gradient-to-r from-green-600 to-emerald-800"
                      : "bg-gradient-to-r from-green-600 to-emerald-700"
            }`}>
              {selectedForce === "navy" ? (
                <Anchor className="w-6 h-6 text-primary-foreground" />
              ) : selectedForce === "airforce" ? (
                <Plane className="w-6 h-6 text-white" />
              ) : selectedForce === "paf-interbase" ? (
                <Award className="w-6 h-6 text-white" />
              ) : selectedForce === "pak-army" ? (
                <Shield className="w-6 h-6 text-white" />
              ) : (
                <BookOpen className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">{getForceTitle()}</h1>
              <p className="text-xs text-muted-foreground">
                {selectedSubject ? getSubjectDisplayName() : "Test Preparation 2026"}
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
                  subtitle="Airmen Level • Complete Test Preparation"
                  gradient="bg-gradient-to-r from-sky-600 to-blue-700"
                  onClick={() => {
                    setSelectedForce("airforce");
                    setScreen("subjects");
                  }}
                  delay={0.1}
                />
                <ForceCard
                  icon={Award}
                  title="PAF Inter Base (GDP, CAE, AE, AD, LOG)"
                  subtitle="Commissioned Level • Officer Selection"
                  gradient="bg-gradient-to-r from-indigo-600 to-blue-800"
                  onClick={() => {
                    setSelectedForce("paf-interbase");
                    setScreen("subjects");
                  }}
                  delay={0.2}
                />
                <ForceCard
                  icon={Shield}
                  title="Pakistan Army (PMA)"
                  subtitle="PMA Long Course, TCC, DSSC, IC, LCC"
                  gradient="bg-gradient-to-r from-green-700 to-emerald-900"
                  onClick={() => {
                    setSelectedForce("pak-army");
                    setScreen("subjects");
                  }}
                  delay={0.3}
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
              
              {/* Air Force Mock Exam & Custom Practice Cards */}
              {selectedForce === "airforce" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
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

              {/* PAF Inter Base Mock Exam */}
              {selectedForce === "paf-interbase" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowInterBaseTradeModal(true)}
                    className="w-full p-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-700 shadow-lg text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <ClipboardCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-white">🎯 Full Mock Exam</h3>
                        <p className="text-sm text-white/80">Trade-wise simulation • GDP, CAE, AE, AD, LOG</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>
                </motion.div>
              )}

              {/* Pakistan Army Mock Exam */}
              {selectedForce === "pak-army" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowArmyCourseModal(true)}
                    className="w-full p-5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-800 shadow-lg text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <ClipboardCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-white">🎯 Full Mock Exam</h3>
                        <p className="text-sm text-white/80">Course-wise simulation • PMA, TCC, DSSC, IC, LCC</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>
                </motion.div>
              )}

              <div className="grid gap-4">
                {/* Pakistan Army subjects */}
                {selectedForce === "pak-army" && (
                  <>
                    <SubjectCard 
                      icon={MessageSquare} 
                      title="Verbal Intelligence" 
                      subtitle="10 Chapters • ~84-90 MCQs per test" 
                      color="from-amber-500 to-orange-600" 
                      onClick={() => { setSelectedSubject("verbal-intelligence"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Eye} 
                      title="Non-Verbal Intelligence" 
                      subtitle="8 Chapters • ~64 MCQs per test" 
                      color="from-rose-500 to-pink-600" 
                      onClick={() => { setSelectedSubject("nonverbal-intelligence"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={BookOpen} 
                      title="English" 
                      subtitle="10 Chapters • Academic MCQs" 
                      color="from-indigo-500 to-violet-600" 
                      onClick={() => { setSelectedSubject("english"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Calculator} 
                      title="Mathematics" 
                      subtitle="10 Chapters • All Courses" 
                      color="from-purple-500 to-pink-600" 
                      onClick={() => { setSelectedSubject("math"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={ScrollText} 
                      title="Pak Studies" 
                      subtitle="8 Chapters • Pakistan History & Geography" 
                      color="from-green-500 to-emerald-600" 
                      onClick={() => { setSelectedSubject("pak-studies"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Moon} 
                      title="Islamiat" 
                      subtitle="8 Chapters • Islamic Knowledge" 
                      color="from-teal-500 to-cyan-600" 
                      onClick={() => { setSelectedSubject("islamiat"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Globe} 
                      title="GK & Current Affairs" 
                      subtitle="8 Chapters • 40% of Academic Test" 
                      color="from-rose-500 to-red-600" 
                      onClick={() => { setSelectedSubject("gk"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Atom} 
                      title="Physics (TCC)" 
                      subtitle="12 Chapters • FSc Level • TCC Only" 
                      color="from-blue-500 to-cyan-600" 
                      onClick={() => { setSelectedSubject("physics"); setScreen("subject-menu"); }} 
                    />
                  </>
                )}

                {/* PAF Inter Base subjects */}
                {selectedForce === "paf-interbase" && (
                  <>
                    <SubjectCard 
                      icon={MessageSquare} 
                      title="Verbal Intelligence" 
                      subtitle="10 Chapters • ~84 MCQs per test" 
                      color="from-amber-500 to-orange-600" 
                      onClick={() => { setSelectedSubject("verbal-intelligence"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Eye} 
                      title="Non-Verbal Intelligence" 
                      subtitle="8 Chapters • ~64 MCQs per test" 
                      color="from-rose-500 to-pink-600" 
                      onClick={() => { setSelectedSubject("nonverbal-intelligence"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={BookOpen} 
                      title="English" 
                      subtitle="10 Chapters • 50-75 MCQs" 
                      color="from-indigo-500 to-violet-600" 
                      onClick={() => { setSelectedSubject("english"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Atom} 
                      title="Physics" 
                      subtitle="14 Chapters • FSc Part 1 & 2" 
                      color="from-blue-500 to-cyan-600" 
                      onClick={() => { setSelectedSubject("physics"); setScreen("subject-menu"); }} 
                    />
                    <SubjectCard 
                      icon={Calculator} 
                      title="Mathematics (CAE)" 
                      subtitle="12 Chapters • FSc Level • Eliminator" 
                      color="from-purple-500 to-pink-600" 
                      onClick={() => { setSelectedSubject("math"); setScreen("subject-menu"); }} 
                    />
                  </>
                )}

                {/* Navy & Air Force subjects */}
                {(selectedForce === "navy" || selectedForce === "airforce") && (
                  <>
                    <SubjectCard 
                      icon={Brain} 
                      title="Intelligence" 
                      subtitle={selectedForce === "navy" ? "10 Chapters • 250+ MCQs" : "10 Chapters • 250+ MCQs"} 
                      color="from-amber-500 to-orange-600" 
                      onClick={() => { setSelectedSubject("intelligence"); setScreen("subject-menu"); }} 
                    />
                    {selectedForce === "airforce" && (
                      <SubjectCard 
                        icon={Eye} 
                        title="Non-Verbal Intelligence" 
                        subtitle="5 Chapters • 50 SVG Pattern MCQs" 
                        color="from-rose-500 to-pink-600" 
                        onClick={() => { setSelectedSubject("nonverbal-intelligence"); setScreen("subject-menu"); }} 
                      />
                    )}
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
                  </>
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
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{getSubjectDisplayName()}</h2>
              
              {/* Section A - Experience Based */}
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
                  <PlaceholderMessage message={`📌 Experience-based questions will be added soon.`} />
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

          {/* Quiz */}
          {screen === "quiz" && selectedChapter && (
            selectedChapter.endsWith("-pg-1") ? (
              <PatternGridQuiz
                mcqs={patternGridMCQs}
                title="Pattern Grid (Design Test)"
                onBack={handleBack}
              />
            ) : selectedChapter.endsWith("-mn-1") ? (
              <MissingNumberQuiz
                mcqs={missingNumberMCQs}
                title="Missing Number (Figures)"
                onBack={handleBack}
              />
            ) : selectedChapter === "af-int-11" ? (
              <NonVerbalQuiz onBack={handleBack} source="paf" />
            ) : selectedChapter.startsWith("af-nv-") ? (
              <NonVerbalQuiz 
                onBack={handleBack} 
                questionRange={afNvQuestionRanges[selectedChapter]} 
                source="paf"
              />
            ) : selectedChapter.startsWith("army-nv-") ? (
              <NonVerbalQuiz 
                onBack={handleBack} 
                questionRange={armyNvQuestionRanges[selectedChapter]} 
                source="army"
              />
            ) : (
              <QuizScreen 
                chapter={getChapters().find(c => c.id === selectedChapter)!} 
                onBack={handleBack} 
              />
            )
          )}

          {/* Experience Quiz */}
          {screen === "experience" && selectedSubject && (
            selectedSubject === "nonverbal-intelligence" && selectedForce === "pak-army" ? (
              <NonVerbalQuiz 
                onBack={handleBack} 
                questionRange={{ start: 1, end: 50 }} 
                source="army"
              />
            ) : selectedSubject === "nonverbal-intelligence" && selectedForce === "airforce" ? (
              <NonVerbalQuiz 
                onBack={handleBack} 
                questionRange={{ start: 1, end: 50 }} 
                source="paf"
              />
            ) : (
              <ExperienceQuiz 
                mcqs={getExperienceMCQs()} 
                subject={getSubjectDisplayName()} 
                onBack={handleBack} 
              />
            )
          )}

          {/* Tough Quiz */}
          {screen === "tough" && selectedSubject && (
            <ExperienceQuiz 
              mcqs={getToughMCQs()} 
              subject={`${getSubjectDisplayName()} - Tough`} 
              onBack={handleBack} 
            />
          )}

          {/* Air Force Mock Exam */}
          {screen === "mock-exam" && selectedTrade && (
            <MockExam 
              trade={selectedTrade} 
              onBack={handleBack} 
            />
          )}

          {/* PAF Inter Base Mock Exam */}
          {screen === "ib-mock-exam" && selectedInterBaseTrade && (
            <InterBaseMockExam 
              trade={selectedInterBaseTrade} 
              onBack={handleBack} 
            />
          )}

          {/* Pakistan Army Mock Exam */}
          {screen === "army-mock-exam" && selectedArmyCourse && (
            <ArmyMockExam 
              course={selectedArmyCourse} 
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

        {/* Trade Selection Modal (Air Force) */}
        <TradeSelectionModal
          isOpen={showTradeModal}
          onClose={() => setShowTradeModal(false)}
          onSelectTrade={handleTradeSelect}
        />

        {/* Inter Base Trade Selection Modal */}
        <InterBaseTradeModal
          isOpen={showInterBaseTradeModal}
          onClose={() => setShowInterBaseTradeModal(false)}
          onSelectTrade={handleInterBaseTradeSelect}
        />

        {/* Army Course Selection Modal */}
        <ArmyCourseModal
          isOpen={showArmyCourseModal}
          onClose={() => setShowArmyCourseModal(false)}
          onSelectCourse={handleArmyCourseSelect}
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
