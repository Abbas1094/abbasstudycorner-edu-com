import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface MainSectionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  onClick: () => void;
}

const MainSectionCard = ({ icon: Icon, title, subtitle, description, gradient, onClick }: MainSectionCardProps) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full ${gradient} p-6 md:p-8 rounded-3xl text-left shadow-lg transition-shadow hover:shadow-2xl border border-white/10`}
  >
    <div className="flex items-start gap-4 md:gap-6">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wide mb-1">{subtitle}</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-white/80 line-clamp-2">{description}</p>
      </div>
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white/70 flex-shrink-0 mt-4" />
    </div>
  </motion.button>
);

export default MainSectionCard;
