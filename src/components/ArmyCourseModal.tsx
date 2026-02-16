import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Wrench, GraduationCap, Users, Crown } from "lucide-react";

export type ArmyCourseType = "pma-long" | "tcc" | "dssc" | "ic" | "lcc";

interface Course {
  id: ArmyCourseType;
  name: string;
  fullName: string;
  icon: React.ElementType;
  description: string;
  subjects: string[];
  hasPhysicsMath: boolean;
}

const courses: Course[] = [
  {
    id: "pma-long",
    name: "PMA Long Course",
    fullName: "Regular Commission",
    icon: Shield,
    description: "FSc / Bachelor's → 2nd Lieutenant after 2 years at PMA Kakul",
    subjects: ["Intelligence - Verbal (~84-90)", "Intelligence - Non-Verbal (~64)", "English", "Mathematics", "Pak Studies", "Islamiat", "GK & Current Affairs"],
    hasPhysicsMath: false
  },
  {
    id: "tcc",
    name: "TCC",
    fullName: "Technical Cadet Course",
    icon: Wrench,
    description: "FSc Pre-Engineering → Join for BE degree first, then 1 year PMA",
    subjects: ["Intelligence - Verbal (~84-90)", "Intelligence - Non-Verbal (~64)", "English", "Physics", "Mathematics", "GK & Current Affairs"],
    hasPhysicsMath: true
  },
  {
    id: "dssc",
    name: "DSSC",
    fullName: "Direct Short Service Commission",
    icon: Crown,
    description: "Masters/BS in IT, Psychology, or Law → 6 months training",
    subjects: ["Intelligence - Verbal (~84-90)", "Intelligence - Non-Verbal (~64)", "English", "GK & Current Affairs", "Pak Studies", "Islamiat"],
    hasPhysicsMath: false
  },
  {
    id: "ic",
    name: "IC",
    fullName: "Integrated Course",
    icon: GraduationCap,
    description: "Graduate students (non-technical) → 6 months to 1 year PMA",
    subjects: ["Intelligence - Verbal (~84-90)", "Intelligence - Non-Verbal (~64)", "English", "Mathematics", "GK & Current Affairs", "Pak Studies"],
    hasPhysicsMath: false
  },
  {
    id: "lcc",
    name: "LCC",
    fullName: "Lady Cadet Course",
    icon: Users,
    description: "Female candidates with BS/MS → 6 months training",
    subjects: ["Intelligence - Verbal (~84-90)", "Intelligence - Non-Verbal (~64)", "English", "GK & Current Affairs", "Pak Studies", "Islamiat"],
    hasPhysicsMath: false
  }
];

interface ArmyCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: ArmyCourseType) => void;
}

const ArmyCourseModal = ({ isOpen, onClose, onSelectCourse }: ArmyCourseModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card rounded-2xl p-6 max-w-md w-full max-h-[85vh] overflow-y-auto border border-border"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Select Your Course</h3>
              <p className="text-sm text-muted-foreground">Pakistan Army - PMA Selection</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-3">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <motion.button
                  key={course.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onSelectCourse(course.id)}
                  className="w-full p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {course.name} <span className="text-xs text-muted-foreground font-normal">({course.fullName})</span>
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{course.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {course.subjects.map((subject, i) => (
                          <span 
                            key={i}
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              subject.includes("Physics") || subject.includes("Mathematics")
                                ? "bg-destructive/10 text-destructive font-semibold" 
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                      {course.hasPhysicsMath && (
                        <p className="text-xs text-destructive mt-1.5 font-medium">⚠️ TCC pattern similar to PAF CAE (heavy Physics & Math)</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground text-center">
              ⏱️ <strong className="text-foreground">Verbal:</strong> ~84-90 MCQs • 30 mins
              <br />
              <strong className="text-foreground">Non-Verbal:</strong> ~64 MCQs • 30 mins
              <br />
              <strong className="text-foreground">Academic:</strong> ~50 MCQs • 30 mins
              <br />
              📝 <strong className="text-foreground">Note:</strong> Army includes more GK than PAF
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArmyCourseModal;
