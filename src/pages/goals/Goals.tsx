import { useState } from "react";
import { motion } from "motion/react";
import { Target, Trophy, TrendingUp } from "lucide-react";
import {
  goalsData,
  completedGoals,
  pendingGoals,
  categoryBreakdown,
} from "./data/goalsData";
import StatsCard from "./components/StatsCard";
import GoalList from "./components/GoalList";
import CategoryBreakdown from "./components/CategoryBreakdown";
import CircularProgress from "./components/CircularProgress";
import { Flag } from "lucide-react";
import PageHeader from "@/components/common/page-header/PageHeader";

function Goals() {
  const [activeView, setActiveView] = useState<
    "completed" | "pending" | "breakdown" | null
  >(null);

  const statsCards = [
    {
      title: "Annual Target",
      value: `${goalsData.stats.annualTarget}%`,
      subtitle: "of goals achieved",
      icon: Target,
      iconBg: "bg-primary/10 text-primary",
      viewType: "breakdown" as const,
    },
    {
      title: "Completed Goals",
      value: goalsData.stats.completedGoals,
      subtitle: `out of ${goalsData.stats.totalGoals} goals`,
      icon: Trophy,
      iconBg: "bg-success/10 text-success",
      viewType: "completed" as const,
    },
    {
      title: "Pending Goals",
      value: goalsData.stats.pendingGoals,
      subtitle: "in progress",
      icon: TrendingUp,
      iconBg: "bg-warning/10 text-warning",
      viewType: "pending" as const,
    },
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case "completed":
        return <GoalList goals={completedGoals} type="completed" />;
      case "pending":
        return <GoalList goals={pendingGoals} type="pending" />;
      case "breakdown":
        return <CategoryBreakdown categories={categoryBreakdown} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <PageHeader icon={Flag} title="Goals Dashboard" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <StatsCard
            key={index}
            {...card}
            isActive={activeView === card.viewType}
            onClick={() => setActiveView(card.viewType)}
          />
        ))}
      </div>

      {activeView && (
        <motion.div
          key={activeView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          {renderActiveView()}
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card-body">
            <h2 className="card-title text-xl font-bold mb-2">
              Yearly Goals Progress
            </h2>
            <p className="text-base-content/60 mb-6">
              Monthly achievement percentage throughout the year
            </p>

            <div className="flex items-end justify-between h-48 md:h-64 px-2 md:px-4 overflow-x-auto">
              {goalsData.monthlyProgress.map((month, index) => (
                <div
                  key={month.month}
                  className="flex flex-col items-center min-w-0 flex-shrink-0"
                >
                  <motion.div
                    className="bg-primary rounded-t-sm w-4 md:w-8 mb-2"
                    initial={{ height: 0 }}
                    animate={{ height: `${(month.percentage / 100) * 180}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  <span className="text-xs text-base-content/60 whitespace-nowrap">
                    {month.month}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xs text-base-content/60 mt-2 px-4">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card-body">
            <h2 className="card-title text-xl font-bold mb-2">
              Overall Completion
            </h2>
            <p className="text-base-content/60 mb-6">Annual goal achievement</p>

            <div className="flex flex-col items-center">
              <CircularProgress percentage={goalsData.stats.annualTarget} />

              <div className="mt-6 w-full space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-base-content/60">Completed</span>
                  <span className="font-semibold">
                    {goalsData.stats.completedGoals} goals
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base-content/60">Remaining</span>
                  <span className="font-semibold">
                    {goalsData.stats.pendingGoals} goals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Goals;
