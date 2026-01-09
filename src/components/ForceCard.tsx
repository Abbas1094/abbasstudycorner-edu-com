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
    className={`w-full ${gradient} p-6 rounded-2xl text-left shadow-lg border border-white/10`}
  >
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-white/70" />
    </div>
  </motion.button>
);

export default ForceCard;
