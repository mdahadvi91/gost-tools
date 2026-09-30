import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface ToolFrameProps {
  workspace: ReactNode;
  controlPanel: ReactNode;
  className?: string;
}

export function ToolFrame({
  workspace,
  controlPanel,
  className,
}: ToolFrameProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={cn(
        "relative rounded-3xl overflow-hidden",
        "bg-white/[0.02] border border-white/10",
        "backdrop-blur-xl",
        className
      )}
    >
      {/* Decorative top gradient bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-logo-gradient"
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-aha-violet/10 blur-[80px] pointer-events-none"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_340px]">
        {/* Layer 1: Workspace */}
        <div className="p-5 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 min-w-0">
          {workspace}
        </div>

        {/* Layer 2: Control panel */}
        <aside
          className="lg:sticky lg:top-[88px] lg:max-h-[calc(100vh-88px)] lg:overflow-y-auto p-5 sm:p-6"
          aria-label="Tool controls"
        >
          {controlPanel}
        </aside>
      </div>
    </motion.div>
  );
}