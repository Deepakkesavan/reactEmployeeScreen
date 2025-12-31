
import { motion } from 'motion/react';
import { type DetailRowProps } from './interfaces/DetailRow.interface';

function DetailRow({ title, subtitle, value, actionText, onAction, delay = 0 }: DetailRowProps) {
  return (
    <motion.div 
      className="card bg-base-100 border border-base-300 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-base-content">{title}</h3>
            <p className="text-sm text-base-content/70">{subtitle}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="font-semibold text-base-content">{value}</span>
            {actionText && onAction && (
              <button 
                className="btn btn-ghost btn-sm text-primary"
                onClick={onAction}
              >
                {actionText}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailRow;