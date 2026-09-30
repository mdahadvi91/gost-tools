import { Search, MousePointerClick, Download } from "lucide-react";
import { cn } from "@lib/cn";

interface Step {
  number: string;
  Icon: typeof Search;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    Icon: Search,
    title: "Find your tool",
    description:
      "Search or browse by category to find exactly what you need.",
  },
  {
    number: "02",
    Icon: MousePointerClick,
    title: "Use it instantly",
    description:
      "Upload or type. Everything processes right in your browser.",
  },
  {
    number: "03",
    Icon: Download,
    title: "Download the result",
    description:
      "One click to save. Your file never touched a server.",
  },
];

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="how-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="how-heading"
          className="font-display text-h2 font-bold text-white tracking-tight"
        >
          How it works
        </h2>
        <p className="mt-2 text-sm text-dark-textSecondary max-w-xl mx-auto">
          Three simple steps. No accounts, no setup.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {STEPS.map((step, index) => {
          const { Icon } = step;
          return (
            <div key={step.number} className="relative">
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-1rem] h-px bg-gradient-to-r from-white/10 via-aha-cyan/30 to-transparent"
                />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-logo-gradient flex items-center justify-center shadow-glow-violet">
                    <Icon
                      className="w-7 h-7 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-elevated border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-aha-cyan"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-textSecondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}