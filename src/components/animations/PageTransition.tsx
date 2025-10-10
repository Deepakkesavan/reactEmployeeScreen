"use client";

import { motion } from "framer-motion";
import {type PageTransitionProps } from "@/components/animations/animation.interface";


function PageTransition({
  variant = "fadeUp",
  children,
  ...motionProps
}: PageTransitionProps) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const selected = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      initial={selected.initial}
      animate={selected.animate}
      exit={selected.exit}
      transition={selected.transition}
      className="w-full h-full"
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
