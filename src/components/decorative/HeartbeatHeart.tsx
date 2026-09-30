import { motion, type Variants } from "framer-motion";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

type Intensity = "calm" | "normal" | "excited";
type Size = "sm" | "md" | "lg";

interface HeartbeatHeartProps {
  size?: Size;
  intensity?: Intensity;
  color?: "coral" | "violet" | "cyan" | "gold";
  animated?: boolean;
  className?: string;
  ariaLabel?: string;
}

const sizeMap: Record<Size, number> = {
  sm: 16,
  md: 24,
  lg: 40,
};

const colorMap = {
  coral: { primary: "#FF5F8F", glow: "rgba(255, 95, 143, 0.45)" },
  violet: { primary: "#8B5CF6", glow: "rgba(139, 92, 246, 0.45)" },
  cyan: { primary: "#4DD9FF", glow: "rgba(77, 217, 255, 0.45)" },
  gold: { primary: "#FFB84D", glow: "rgba(255, 184, 77, 0.45)" },
};

const intensityTimings: Record<Intensity, number> = {
  calm: 1.8,
  normal: 1.2,
  excited: 0.75,
};

export function HeartbeatHeart({
  size = "md",
  intensity = "normal",
  color = "coral",
  animated = true,
  className,
  ariaLabel = "Heartbeat",
}: HeartbeatHeartProps) {
  const prefersReduced = useReducedMotion();
  const px = sizeMap[size];
  const { primary, glow } = colorMap[color];
  const duration = intensityTimings[intensity];

  const variants: Variants = {
    idle: { scale: 1 },
    beat: {
      scale: [1, 1.15, 1, 1.08, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.45, 0.6],
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex items-center justify-center", className)}
      role="img"
      aria-label={ariaLabel}
      variants={variants}
      animate={animated && !prefersReduced ? "beat" : "idle"}
      style={{ filter: `drop-shadow(0 0 ${px / 2}px ${glow})` }}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={primary}
        />
      </svg>
    </motion.span>
  );
}