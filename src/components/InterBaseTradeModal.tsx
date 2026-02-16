import { motion, AnimatePresence } from "framer-motion";
import { X, Plane, Shield, Wrench, Package, Award } from "lucide-react";

export type InterBaseTradeType = "gdp" | "cae" | "ae" | "ad" | "log";

interface Trade {
  id: InterBaseTradeType;
  name: string;
  fullName: string;
  icon: React.ElementType;
  description: string;
  subjects: string[];
  mathRequired: boolean;
}

const trades: Trade[] = [
  {
    id: "gdp",
    name: "GDP",
    fullName: "General Duty Pilot",
    icon: Plane,
    description: "Flying Branch - Pilot Training",
    subjects: ["Intelligence - Verbal (84)", "Intelligence - Non-Verbal (64)", "English (50-75)", "Physics (75)"],
    mathRequired: false
  },
  {
    id: "cae",
    name: "CAE",
    fullName: "Aeronautical Engineering",
    icon: Wrench,
    description: "Technical & Engineering Branch",
    subjects: ["Intelligence - Verbal (84)", "Intelligence - Non-Verbal (64)", "English (50-75)", "Physics (75)", "Mathematics (50-75)"],
    mathRequired: true
  },
  {
    id: "ae",
    name: "AE",
    fullName: "Aeronautical Engineering (Alt)",
    icon: Wrench,
    description: "Aerospace Engineering Branch",
    subjects: ["Intelligence - Verbal (84)", "Intelligence - Non-Verbal (64)", "English (50-75)", "Physics (75)"],
    mathRequired: false
  },
  {
    id: "ad",
    name: "AD",
    fullName: "Air Defense",
    icon: Shield,
    description: "Air Defense Operations",
    subjects: ["Intelligence - Verbal (84)", "Intelligence - Non-Verbal (64)", "English (50-75)", "Physics (75)"],
    mathRequired: false
  },
  {
    id: "log",
    name: "LOG",
    fullName: "Logistics",
    icon: Package,
    description: "Supply Chain & Logistics",
    subjects: ["Intelligence - Verbal (84)", "Intelligence - Non-Verbal (64)", "English (50-75)", "Physics (75)"],
    mathRequired: false
  }
];

interface InterBaseTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrade: (trade: InterBaseTradeType) => void;
}

const InterBaseTradeModal = ({ isOpen, onClose, onSelectTrade }: InterBaseTradeModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card rounded-2xl p-6 max-w-md w-full max-h-[85vh] overflow-y-auto border border-border"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Select Your Trade</h3>
              <p className="text-sm text-muted-foreground">PAF Inter Base - Commissioned Level</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-3">
            {trades.map((trade, idx) => {
              const Icon = trade.icon;
              return (
                <motion.button
                  key={trade.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onSelectTrade(trade.id)}
                  className="w-full p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {trade.name} <span className="text-xs text-muted-foreground font-normal">({trade.fullName})</span>
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{trade.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {trade.subjects.map((subject, i) => (
                          <span 
                            key={i}
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              subject.includes("Mathematics") 
                                ? "bg-destructive/10 text-destructive font-semibold" 
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                      {trade.mathRequired && (
                        <p className="text-xs text-destructive mt-1.5 font-medium">⚠️ Math is an eliminator for CAE</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground text-center">
              ⏱️ <strong className="text-foreground">Verbal:</strong> ~84 MCQs • 30 mins
              <br />
              <strong className="text-foreground">Non-Verbal:</strong> ~64 MCQs • 30 mins
              <br />
              <strong className="text-foreground">Academic:</strong> 50-75 MCQs per subject • 20-40 mins each
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InterBaseTradeModal;
