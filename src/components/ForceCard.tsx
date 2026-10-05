import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface ForceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradient: string;
  onClick: () => void;
  delay?: number;
}

const ForceCard = ({ icon: Icon, title, subtitle, gradient, onClick, delay = 0 }: ForceCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group w-full bg-gradient-card p-5 sm:p-6 rounded-2xl text-left border border-border shadow-card hover:border-primary/50 hover:shadow-gold transition-colors"
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${gradient} shadow-card flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-8 h-8 text-foreground" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-heading">{title}</h3>
        <p className="text-sm text-copy">{subtitle}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" aria-hidden="true" />
    </div>
  </motion.button>
);

export default ForceCard;
