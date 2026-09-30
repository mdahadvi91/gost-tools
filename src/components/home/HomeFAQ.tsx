import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/cn";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is AHADEX Tools really free?",
    answer:
      "Yes — every tool is 100% free with no hidden limits, no sign-ups, and no subscriptions. The site is supported by non-intrusive advertising.",
  },
  {
    question: "Are my files safe?",
    answer:
      "Absolutely. All tools run directly in your browser using modern web APIs. Your files are never uploaded to our servers, never stored, and never tracked.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account needed. Just open the site, pick a tool, and use it. Your theme and language preferences are stored locally in your browser.",
  },
  {
    question: "How many tools are available?",
    answer:
      "We currently offer 42 tools across six categories: Image, PDF, QR & Barcode, Text, Developer, and Calculators. More tools are added regularly.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — AHADEX Tools is fully responsive and works on phones, tablets, and desktops. All tools are touch-friendly.",
  },
  {
    question: "Is there an app?",
    answer:
      "You can install AHADEX Tools as a Progressive Web App (PWA) from your browser menu. It works offline for most tools.",
  },
];

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
          className="font-display text-h2 font-bold text-white tracking-tight"
        >
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-dark-textSecondary max-w-xl mx-auto">
          Everything you might want to know about AHADEX Tools.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-2">
        {FAQS.map((faq, index) => {
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
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
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