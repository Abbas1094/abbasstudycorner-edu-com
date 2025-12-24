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
    className={`w-full bg-gradient-to-r ${color} p-5 rounded-2xl text-left shadow-lg transition-shadow hover:shadow-xl`}
  >
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-white/80" />
    </div>
  </motion.button>
);

export default SubjectCard;
