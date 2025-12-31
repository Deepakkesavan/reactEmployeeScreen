import { motion } from "motion/react";
import { type StatsCardProps } from "../interfaces/GoalsComponents.interface";

function StatsCard({ title, value, subtitle, icon: Icon, iconBg, isActive, onClick }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`card bg-base-100 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isActive ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-base-content/60 mb-1">{title}</h3>
            <p className="text-3xl font-bold text-base-content">{value}</p>
            <p className="text-sm text-base-content/60">{subtitle}</p>
          </div>
          <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StatsCard;