import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Shield, BookOpen, Trophy, Target, Users } from "lucide-react";
import MainSectionCard from "@/components/MainSectionCard";
import AcademicSection from "@/components/AcademicSection";
import ArmedForcesSection from "@/components/ArmedForcesSection";

type MainScreen = "home" | "academic" | "armed-forces";

const Index = () => {
  const [screen, setScreen] = useState<MainScreen>("home");

  if (screen === "academic") {
    return <AcademicSection onBack={() => setScreen("home")} />;
  }

  if (screen === "armed-forces") {
    return <ArmedForcesSection onBack={() => setScreen("home")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-gradient-gold">Abbas Study Corner</h1>
              <p className="text-xs text-muted-foreground">Academic & Armed Forces Preparation</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Hero Section */}
            <div className="text-center mb-10">
              <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4"
              >
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Complete Learning Platform</span>
              </motion.div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Welcome to </span>
                <span className="text-gradient-gold">Abbas Study Corner</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Your one-stop platform for academic excellence and armed forces test preparation
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: BookOpen, label: "Subjects", value: "20+" },
                { icon: Target, label: "MCQs", value: "2000+" },
                { icon: Users, label: "Students", value: "Active" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-card rounded-xl p-4 text-center border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Sections */}
            <h3 className="font-display text-xl font-semibold mb-6 text-foreground text-center">Choose Your Path</h3>
            <div className="space-y-5">
              <MainSectionCard
                icon={GraduationCap}
                title="Academic Studies"
                subtitle="Class 9 - 12"
                description="Complete preparation for board exams with pairing schemes, chapter notes, MCQs and resources"
                gradient="bg-gradient-to-r from-emerald-600 to-teal-700"
                onClick={() => setScreen("academic")}
              />
              <MainSectionCard
                icon={Shield}
                title="Armed Forces"
                subtitle="Navy, Air Force & PAF Inter Base"
                description="Comprehensive test preparation for Pakistan Navy and Air Force initial tests"
                gradient="bg-gradient-to-r from-[hsl(210,50%,25%)] to-[hsl(210,50%,40%)]"
                onClick={() => setScreen("armed-forces")}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
