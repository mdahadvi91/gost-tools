import { Zap, Shield, Sparkles, Heart } from "lucide-react";
import { cn } from "@lib/cn";

interface Feature {
  Icon: typeof Zap;
  title: string;
  description: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    Icon: Zap,
    title: "Lightning fast",
    description:
      "Everything runs directly in your browser. No server round trips, no waiting.",
    accent: "text-aha-cyan",
  },
  {
    Icon: Shield,
    title: "Completely private",
    description:
      "Your files never leave your device. No uploads, no tracking, no storage.",
    accent: "text-aha-mint",
  },
  {
    Icon: Sparkles,
    title: "Beautifully simple",
    description:
      "Clean design, keyboard-friendly, works on every device. No learning curve.",
    accent: "text-aha-violet",
  },
  {
    Icon: Heart,
    title: "Free forever",
    description:
      "No sign-ups, no subscriptions, no paywalls. Just useful tools that work.",
    accent: "text-aha-coral",
  },
];

export function WhyAhadex({ className }: { className?: string }) {
  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="why-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="why-heading"
          className="font-display text-h2 font-bold text-white tracking-tight"
        >
          Why AHADEX Tools?
        </h2>
        <p className="mt-2 text-sm text-dark-textSecondary max-w-xl mx-auto">
          Built by a developer who was tired of slow, ad-heavy tool websites.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map(({ Icon, title, description, accent }) => (
          <div
            key={title}
            className={cn(
              "group p-6 rounded-2xl",
              "bg-dark-surface border border-white/10",
              "hover:border-aha-cyan/30 hover:shadow-glow-cyan",
              "transition-all duration-300"
            )}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Icon
                className={cn("w-6 h-6", accent)}
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display font-semibold text-base text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-dark-textSecondary leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}