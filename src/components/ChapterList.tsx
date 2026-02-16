import { motion } from "framer-motion";
import { Chapter } from "@/data/chemistryData";

interface ChapterListProps {
  chapters: Chapter[];
  onSelect: (id: string) => void;
}

const ChapterList = ({ chapters, onSelect }: ChapterListProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
    <h2 className="font-display text-xl font-bold mb-4 text-foreground">Select Chapter</h2>
    {chapters.map((chapter, i) => (
      <motion.button
        key={chapter.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.05 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => onSelect(chapter.id)}
        className="w-full bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-all text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{chapter.icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{chapter.name}</h4>
            <p className="text-sm text-muted-foreground truncate">{chapter.description}</p>
          </div>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium whitespace-nowrap">{chapter.mcqs?.length || 0} MCQs</span>
        </div>
      </motion.button>
    ))}
  </motion.div>
);

export default ChapterList;
