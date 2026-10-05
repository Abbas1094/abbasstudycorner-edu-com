import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

const SubjectCard = ({ icon: Icon, title, subtitle, color, onClick }: SubjectCardProps) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group w-full bg-gradient-card p-5 rounded-2xl text-left border border-border shadow-card hover:border-primary/50 hover:shadow-gold transition-colors"
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-7 h-7 text-foreground" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-heading">{title}</h3>
        <p className="text-sm text-copy">{subtitle}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" aria-hidden="true" />
    </div>
  </motion.button>
);

export default SubjectCard;
