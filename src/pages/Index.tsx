import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Shield, BookOpen, Trophy, Target, Users, Brain, FileText, ClipboardList, Star, Phone, Mail, Sparkles, Zap, Award } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-navy flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
              <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-lg sm:text-2xl font-bold text-gradient-gold leading-tight">Abbas Study Corner</h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Academic & Armed Forces Preparation</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Hero Section */}
            <section className="container px-4 sm:px-6 pt-8 pb-6 sm:py-12 md:py-20 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Complete Learning Platform</span>
              </motion.div>

              <h2 className="font-display text-[1.75rem] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5">
                <span className="text-foreground">Prepare for Your </span>
                <span className="text-gradient-gold">PAF & Army</span>
                <br className="hidden sm:block" />
                <span className="text-foreground"> Entrance Exams</span>
              </h2>

              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-2">
                Comprehensive notes, mock tests, and AI-powered study tools.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12">
                {[
                  { icon: BookOpen, label: "Subjects", value: "20+" },
                  { icon: Target, label: "MCQs", value: "2000+" },
                  { icon: Users, label: "Students", value: "Active" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-gradient-card rounded-xl p-3 sm:p-4 text-center border border-border"
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1.5 sm:mb-2" />
                    <p className="text-lg sm:text-xl font-bold font-display text-foreground">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Choose Your Path */}
            <section className="container px-4 sm:px-6 pb-10 sm:pb-14">
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground text-center">Choose Your Path</h3>
              <div className="space-y-4 sm:space-y-5 max-w-2xl mx-auto">
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
                  subtitle="Navy, Air Force, PAF Inter Base & Army"
                  description="Comprehensive test preparation for Pakistan Navy and Air Force initial tests"
                  gradient="bg-gradient-to-r from-[hsl(210,50%,25%)] to-[hsl(210,50%,40%)]"
                  onClick={() => setScreen("armed-forces")}
                />
              </div>
            </section>

            {/* Features Grid */}
            <section className="container px-4 sm:px-6 pb-10 sm:pb-14">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-1.5 sm:mb-2 text-foreground">Our Study Tools</h3>
              <p className="text-muted-foreground text-center mb-6 sm:mb-8 text-xs sm:text-sm">Everything you need to ace your exams</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
                {[
                  { icon: Brain, title: "AI Note Generator", desc: "Generate concise, exam-focused notes from any chapter using AI. Study smarter, not harder." },
                  { icon: ClipboardList, title: "Mock Quizzes", desc: "Practice with realistic mock tests that mirror the actual PAF & Army entrance exams." },
                  { icon: FileText, title: "Past Paper Analysis", desc: "Access analyzed past papers with highlighted important topics and predicted questions." },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-gradient-card border border-border rounded-2xl p-5 sm:p-6 text-center hover:border-primary/40 transition-colors"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Student Success / Testimonials */}
            <section className="container px-4 sm:px-6 pb-10 sm:pb-14">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-1.5 sm:mb-2 text-foreground">Student Success</h3>
              <p className="text-muted-foreground text-center mb-6 sm:mb-8 text-xs sm:text-sm">Hear from students who cleared their initial tests</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
                {[
                  { name: "Ahmed R.", role: "PAF GD Pilot Selected", quote: "Abbas Study Corner's mock tests were almost identical to the real exam. I felt fully prepared on test day!" },
                  { name: "Bilal K.", role: "Pak Army PMA Cadet", quote: "The non-verbal intelligence SVGs helped me practice patterns I'd never seen before. Highly recommend!" },
                  { name: "Usman S.", role: "Navy Sailor Selected", quote: "Chapter-wise MCQs and detailed explanations made revision so much easier. Passed on my first attempt!" },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-gradient-card border border-border rounded-2xl p-5 sm:p-6"
                  >
                    <div className="flex gap-0.5 sm:gap-1 mb-2.5 sm:mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground italic mb-3 sm:mb-4 leading-relaxed">"{t.quote}"</p>
                    <p className="font-display font-bold text-foreground text-xs sm:text-sm">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-primary">{t.role}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/60 backdrop-blur-sm">
        <div className="container px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm sm:text-base">Abbas Study Corner</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Academic & Armed Forces Preparation</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <a href="tel:03110589176" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>0311-0589176</span>
              </a>
              <a href="mailto:mdabbbaass@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>mdabbbaass@gmail.com</span>
              </a>
            </div>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-4 sm:mt-6">© 2026 Abbas Study Corner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
