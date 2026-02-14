import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";

interface AcademicSubjectCardProps {
  name: string;
  icon: string;
  chapterCount: number;
  onClick: () => void;
  delay?: number;
  completedChapters?: number;
}

const AcademicSubjectCard = ({ name, icon, chapterCount, onClick, delay = 0, completedChapters = 0 }: AcademicSubjectCardProps) => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    onClick={onClick}
    className="w-full bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-all text-left group"
  >
    <div className="flex items-center gap-4">
      <span className="text-3xl">{icon}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h4>
        <p className="text-sm text-muted-foreground">
          {chapterCount} Chapters
          {completedChapters > 0 && (
            <span className="inline-flex items-center gap-1 ml-2 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              {completedChapters}/{chapterCount}
            </span>
          )}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
  </motion.button>
);

export default AcademicSubjectCard;
