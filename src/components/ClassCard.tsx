import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ClassCardProps {
  name: string;
  subjectCount: number;
  onClick: () => void;
  delay?: number;
}

const ClassCard = ({ name, subjectCount, onClick, delay = 0 }: ClassCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="w-full bg-gradient-card border border-border hover:border-primary/50 p-5 rounded-2xl text-left shadow-card hover:shadow-gold transition-colors"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-display text-2xl font-bold text-heading">{name}</h3>
        <p className="text-sm text-copy">{subjectCount} Subjects Available</p>
      </div>
      <div className="w-12 h-12 rounded-xl bg-gradient-gold shadow-gold flex items-center justify-center">
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </div>
    </div>
  </motion.button>
);

export default ClassCard;
