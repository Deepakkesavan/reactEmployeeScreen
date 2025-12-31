import { motion } from "motion/react";
import { type Category } from "../interfaces/GoalsComponents.interface";

interface CategoryBreakdownProps {
  categories: Category[];
}

function CategoryBreakdown({ categories }: CategoryBreakdownProps) {
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-xl mb-2">Goal Breakdown by Category</h2>
        <p className="text-base-content/60 mb-4">Progress across different departments and focus areas</p>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-base-200/50"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{category.name}</h3>
                  <span className="text-lg font-bold text-primary">{category.percentage}%</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-base-content/60 mb-2">
                  <span>{category.total} goals</span>
                  <span>{category.completed} completed</span>
                  <span>{category.pending} pending</span>
                </div>
                <div className="w-full bg-base-300 rounded-full h-2">
                  <motion.div 
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${category.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBreakdown;