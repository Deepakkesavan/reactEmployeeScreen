
import { motion } from "motion/react";
import { type StatsCardProps } from "../interfaces/Common.interface";

function AnimatedStatsCard({
  icon,
  label,
  value,
}: StatsCardProps) {

  return (
    <motion.div
      className="card bg-base-100 shadow-md border border-base-300 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className="card-body p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary">{icon}</div>
          <span className="text-sm text-base-content/70">{label}</span>
        </div>
        <div className="text-2xl font-bold text-primary">{value}</div>
      </div>
    </motion.div>
  );
}

export default AnimatedStatsCard;
