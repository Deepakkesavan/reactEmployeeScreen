export interface Goal {
  title: string;
  date: string;
  badge: string;
  status?: string;
}

export interface Category {
  name: string;
  total: number;
  completed: number;
  pending: number;
  percentage: number;
}

export interface StatsCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  isActive: boolean;
  onClick: () => void;
}

export interface CircularProgressProps {
  percentage: number;
}

export interface GoalListProps {
  goals: Goal[];
  type: 'completed' | 'pending';
}