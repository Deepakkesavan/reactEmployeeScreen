import { type ReactNode } from "react";

export interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}
