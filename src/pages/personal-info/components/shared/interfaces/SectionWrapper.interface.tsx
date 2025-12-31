import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export interface SectionWrapperProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}