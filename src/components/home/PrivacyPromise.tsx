import { ShieldCheck, Eye, Lock, Server, CheckCircle2 } from "lucide-react";
import { cn } from "@lib/cn";

const PROMISES = [
  {
    Icon: Eye,
    text: "No file content is ever read by our servers",
  },
  {
    Icon: Lock,
    text: "All processing happens inside your browser",
  },
  {
    Icon: Server,
    text: "No uploads, no storage, no logging of your files",
  },
  {
    Icon: CheckCircle2,
    text: "Works offline once the page loads",
  },
];

export function PrivacyPromise({ className }: { className?: string }) {
  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="privacy-heading"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "p-8 sm:p-12",
          "bg-gradient-to-br from-dark-surface via-dark-elevated to-dark-surface",
          "border border-white/10"
        )}
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-aha-mint/10 blur-[80px]"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: heading */}
          <div>
            <div className="w-14 h-14 rounded-2xl bg-aha-mint/10 border border-aha-mint/30 flex items-center justify-center mb-5">
              <ShieldCheck
                className="w-7 h-7 text-aha-mint"
                aria-hidden="true"
              />
            </div>

            <h2
              id="privacy-heading"
              className="font-display text-h2 font-bold text-white tracking-tight"
            >
              Your privacy comes first
            </h2>

            <p className="mt-4 text-dark-textSecondary leading-relaxed">
              Most tool sites upload your files to their servers. We don't.
              Every AHADEX tool processes data right inside your browser using
              modern web APIs. Your files never leave your device.
            </p>

            <a
              href="/privacy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-aha-mint hover:text-aha-cyan transition-colors"
            >
              Read our privacy policy
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right: promise list */}
          <ul className="space-y-3">
            {PROMISES.map(({ Icon, text }) => (
              <li
                key={text}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-2xl",
                  "bg-white/5 border border-white/10"
                )}
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-aha-mint/10 flex items-center justify-center">
                  <Icon
                    className="w-4 h-4 text-aha-mint"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm text-white/90 leading-relaxed pt-1">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}