import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/cn";

interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  faqs: FAQItem[];
  className?: string;
}

export function ToolFAQ({ faqs, className }: ToolFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className={cn("py-8", className)} aria-labelledby="tool-faq-heading">
      <h2
        id="tool-faq-heading"
        className="font-display text-h3 font-bold text-white mb-6"
      >
        Frequently asked questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={cn(
                "rounded-2xl border transition-all duration-300",
                isOpen
                  ? "bg-dark-surface border-aha-cyan/30"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`tool-faq-panel-${index}`}
                id={`tool-faq-trigger-${index}`}
                className="w-full flex items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan rounded-2xl"
              >
                <span className="font-medium text-white text-sm sm:text-base pr-2">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-dark-textSecondary"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`tool-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`tool-faq-trigger-${index}`}
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