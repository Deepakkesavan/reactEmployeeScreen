import { type ReactNode } from "react";

export interface DashboardCard {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}