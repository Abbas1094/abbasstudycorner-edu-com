import { motion } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";

interface PlaceholderMessageProps {
  message?: string;
  icon?: "clock" | "alert";
}

const PlaceholderMessage = ({ 
  message = "📌 Content will be added soon.", 
  icon = "clock" 
}: PlaceholderMessageProps) => {
  const IconComponent = icon === "clock" ? Clock : AlertCircle;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 border border-border rounded-xl p-6 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
        <IconComponent className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{message}</p>
    </motion.div>
  );
};

export default PlaceholderMessage;
