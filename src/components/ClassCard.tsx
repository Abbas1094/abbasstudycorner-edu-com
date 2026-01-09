import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ClassCardProps {
  name: string;
  subjectCount: number;
  onClick: () => void;
  delay?: number;
}

const classColors: Record<string, string> = {
  "Class 9": "from-emerald-500 to-teal-600",
  "Class 10": "from-blue-500 to-cyan-600",
  "Class 11": "from-purple-500 to-indigo-600",
  "Class 12": "from-rose-500 to-pink-600",
};

const ClassCard = ({ name, subjectCount, onClick, delay = 0 }: ClassCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full bg-gradient-to-r ${classColors[name] || "from-gray-500 to-gray-600"} p-5 rounded-2xl text-left shadow-lg`}
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-display text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-white/80">{subjectCount} Subjects Available</p>
      </div>
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  </motion.button>
);

export default ClassCard;
