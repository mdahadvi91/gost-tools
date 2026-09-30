import { lazy, Suspense } from "react";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

const Lottie = lazy(() => import("lottie-react"));

interface AnimatedIconProps {
  animationData: unknown;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function AnimatedIcon({
  animationData,
  size = 48,
  loop = true,
  autoplay = true,
  className,
  ariaLabel,
}: AnimatedIconProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} />}>
      <div
        className={cn("inline-flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        aria-label={ariaLabel}
        role={ariaLabel ? "img" : undefined}
      >
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: size, height: size }}
        />
      </div>
    </Suspense>
  );
}