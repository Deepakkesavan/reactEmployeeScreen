import type { MotionProps } from "framer-motion";
import { type ReactNode } from "react";
export interface PageTransitionProps extends MotionProps {
  variant?: "fadeUp" | "slideRight" | "zoomIn";

  children: ReactNode;
}
