import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 42, label: "Free tools" },
  { value: 6, label: "Categories" },
  { value: 0, suffix: "", label: "Files uploaded" },
  { value: 100, suffix: "%", label: "Private" },
];

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

function Counter({ to, suffix = "", duration = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, prefersReduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function StatsCounter({ className }: { className?: string }) {
  return (
    <section
      className={cn("py-10 sm:py-14", className)}
      aria-label="AHADEX Tools statistics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "p-6 rounded-2xl text-center",
              "bg-dark-surface border border-white/10"
            )}
          >
            <p className="font-display font-bold text-h2 bg-logo-gradient bg-clip-text text-transparent">
              <Counter to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-widest text-dark-textSecondary font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}