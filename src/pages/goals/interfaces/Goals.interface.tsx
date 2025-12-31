export interface GoalStats {
  annualTarget: number;
  completedGoals: number;
  totalGoals: number;
  pendingGoals: number;
}

export interface MonthlyProgress {
  month: string;
  percentage: number;
}

export interface GoalsData {
  stats: GoalStats;
  monthlyProgress: MonthlyProgress[];
}