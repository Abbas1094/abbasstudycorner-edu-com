import { motion, AnimatePresence } from "framer-motion";
import { X, Plane, Shield, Car, Flame, Dumbbell } from "lucide-react";

export type TradeType = "aerotrade" | "aerosport" | "security" | "mtd" | "firefighter";

interface Trade {
  id: TradeType;
  name: string;
  icon: React.ElementType;
  description: string;
  subjects: string[];
}

const trades: Trade[] = [
  {
    id: "aerotrade",
    name: "Aerotrade",
    icon: Plane,
    description: "Technical & Engineering Branch",
    subjects: ["Intelligence (100)", "English (50)", "Physics (40)", "Math (40)"]
  },
  {
    id: "aerosport",
    name: "Aerosport",
    icon: Dumbbell,
    description: "Sports & Physical Training",
    subjects: ["Intelligence (100)", "English (50)"]
  },
  {
    id: "security",
    name: "PF & DI (Security)",
    icon: Shield,
    description: "Police Force & Defense Installation",
    subjects: ["Intelligence (100)", "English (50)"]
  },
  {
    id: "mtd",
    name: "MTD (Driver)",
    icon: Car,
    description: "Motor Transport Driver",
    subjects: ["Intelligence (100)", "English (50)"]
  },
  {
    id: "firefighter",
    name: "Firefighter",
    icon: Flame,
    description: "Fire Fighting Branch",
    subjects: ["Intelligence (100)", "English (50)"]
  }
];

interface TradeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrade: (trade: TradeType) => void;
}

const TradeSelectionModal = ({ isOpen, onClose, onSelectTrade }: TradeSelectionModalProps) => {
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
              <p className="text-sm text-muted-foreground">Choose your exam pattern</p>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {trade.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{trade.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {trade.subjects.map((subject, i) => (
                          <span 
                            key={i}
                            className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground text-center">
              ⏱️ <strong className="text-foreground">Aerotrade:</strong> 230 MCQs • ~130 mins
              <br />
              <strong className="text-foreground">Others:</strong> 150 MCQs • ~70 mins
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TradeSelectionModal;
