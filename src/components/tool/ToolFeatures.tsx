import { Check } from "lucide-react";
import { cn } from "@lib/cn";

interface ToolFeaturesProps {
  features: { title: string; description: string }[];
  className?: string;
}

export function ToolFeatures({ features, className }: ToolFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section className={cn("py-8", className)} aria-labelledby="features-heading">
      <h2
        id="features-heading"
        className="font-display text-h3 font-bold text-white mb-6"
      >
        Features
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <li
            key={feature.title}
            className={cn(
              "flex gap-3 p-4 rounded-2xl",
              "bg-white/[0.02] border border-white/10"
            )}
          >
            <span
              className="shrink-0 w-6 h-6 rounded-full bg-aha-mint/15 flex items-center justify-center mt-0.5"
              aria-hidden="true"
            >
              <Check className="w-3.5 h-3.5 text-aha-mint" />
            </span>
            <div className="min-w-0">
              <h3 className="font-medium text-white text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-textSecondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}