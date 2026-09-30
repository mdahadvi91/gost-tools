import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface PageTransitionProps {
  children: ReactNode;
}

const transitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 12,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  const variants = prefersReduced ? reducedMotionVariants : transitionVariants;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}