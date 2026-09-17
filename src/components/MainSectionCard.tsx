import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface MainSectionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  /** Visual accent of the icon badge — gold for academic, ocean for forces */
  accent?: "gold" | "ocean";
  onClick: () => void;
}

const MainSectionCard = ({ icon: Icon, title, subtitle, description, accent = "gold", onClick }: MainSectionCardProps) => {
  const isGold = accent === "gold";

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group w-full bg-gradient-card p-5 sm:p-6 md:p-8 rounded-3xl text-left border border-border shadow-card transition-colors hover:border-primary/50 ${
        isGold ? "hover:shadow-gold" : "hover:shadow-ocean"
      }`}
    >
      <div className="flex items-start gap-4 md:gap-6">
        <div
          className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isGold ? "bg-gradient-gold shadow-gold" : "bg-gradient-ocean shadow-ocean"
          }`}
        >
          <Icon className={`w-7 h-7 md:w-10 md:h-10 ${isGold ? "text-primary-foreground" : "text-foreground"}`} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-[11px] md:text-sm font-semibold uppercase tracking-widest mb-1 ${isGold ? "text-primary" : "text-ocean-light"}`}>
            {subtitle}
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-heading mb-2">{title}</h3>
          <p className="text-sm md:text-base text-copy line-clamp-2">{description}</p>
        </div>
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0 mt-3" aria-hidden="true" />
      </div>
    </motion.button>
  );
};

export default MainSectionCard;
