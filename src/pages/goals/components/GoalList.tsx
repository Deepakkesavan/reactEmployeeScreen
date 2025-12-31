import { motion } from "motion/react";
import { CheckCircle, Clock } from "lucide-react";
import { type GoalListProps } from "../interfaces/GoalsComponents.interface";

function GoalList({ goals, type }: GoalListProps) {
  const Icon = type === 'completed' ? CheckCircle : Clock;
  const iconColor = type === 'completed' ? 'text-success' : 'text-warning';

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-xl mb-2">
          {type === 'completed' ? 'Completed Goals' : 'Pending Goals'}
        </h2>
        <p className="text-base-content/60 mb-4">
          {type === 'completed' 
            ? 'Recently achieved milestones and objectives'
            : 'Current objectives and upcoming milestones'
          }
        </p>
        <div className="space-y-3">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-lg bg-base-200/50"
            >
              <Icon className={`${iconColor} w-6 h-6`} />
              <div className="flex-1">
                <h3 className="font-medium">{goal.title}</h3>
                <p className="text-sm text-base-content/60">
                  {type === 'completed' ? `Completed: ${goal.date}` : `Due: ${goal.date}`}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`badge ${
                  goal.badge === 'High' ? 'badge-error' : 
                  goal.badge === 'Medium' ? 'badge-warning' : 'badge-primary'
                }`}>
                  {goal.badge}
                </div>
                {goal.status && <span className="text-sm text-base-content/60">{goal.status}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GoalList;