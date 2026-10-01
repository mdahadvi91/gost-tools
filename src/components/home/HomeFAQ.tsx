import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/cn";
import { homeFaqs } from "@data/faqs";

export function HomeFAQ({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="faq-heading"
          className="font-display text-h2 font-bold text-love-pearl tracking-tight"
        >
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-dark-textSecondary max-w-xl mx-auto">
          Everything you might want to know about AHADEX Tools.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-2">
        {homeFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={cn(
                "rounded-2xl border transition-all duration-300",
                isOpen
                  ? "bg-dark-surface border-love-rose/40 shadow-glow-rose"
                  : "bg-love-rose/[0.02] border-love-rose/15 hover:border-love-rose/30"
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="w-full flex items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-love-rose rounded-2xl"
              >
                <span className="font-medium text-love-pearl text-sm sm:text-base pr-2">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-love-blush/60"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-dark-textSecondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}