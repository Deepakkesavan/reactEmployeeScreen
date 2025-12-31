import { motion } from "motion/react";
import { type SectionWrapperProps } from './interfaces/SectionWrapper.interface';

export function SectionWrapper({
  title,
  icon: Icon,
  children,
}: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="bg-base-100 rounded-lg shadow-lg border border-base-300/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Icon className="text-base-content" size={20} />
            <h2 className="text-xl font-semibold text-base-content">{title}</h2>
          </div>

          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}