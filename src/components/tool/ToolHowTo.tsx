import { cn } from "@lib/cn";

interface HowToStep {
  step: number;
  title: string;
  description: string;
}

interface ToolHowToProps {
  steps: HowToStep[];
  className?: string;
}

export function ToolHowTo({ steps, className }: ToolHowToProps) {
  if (steps.length === 0) return null;

  return (
    <section className={cn("py-8", className)} aria-labelledby="howto-heading">
      <h2
        id="howto-heading"
        className="font-display text-h3 font-bold text-white mb-6"
      >
        How to use
      </h2>

      <ol className="space-y-4">
        {steps.map((s, index) => (
          <li key={s.step} className="flex gap-4">
            <div className="flex flex-col items-center shrink-0">
              <span
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center",
                  "bg-logo-gradient text-white text-sm font-bold",
                  "shadow-glow-violet"
                )}
                aria-hidden="true"
              >
                {s.step}
              </span>
              {index < steps.length - 1 && (
                <span
                  className="w-px flex-1 mt-2 bg-gradient-to-b from-white/20 to-transparent"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="pb-4 min-w-0">
              <h3 className="font-medium text-white text-base mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-dark-textSecondary leading-relaxed">
                {s.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}