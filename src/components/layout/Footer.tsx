import { Link } from "react-router-dom";
import { Github, Mail, Heart } from "lucide-react";
import { Logo } from "@components/common/Logo";
import { HeartbeatHeart } from "@components/decorative/HeartbeatHeart";
import { cn } from "@lib/cn";

interface FooterLink {
  label: string;
  to: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Tools",
    links: [
      { label: "All Tools", to: "/tools" },
      { label: "Image Tools", to: "/categories/image" },
      { label: "PDF Tools", to: "/categories/pdf" },
      { label: "QR & Barcode", to: "/categories/qr" },
      { label: "Text Tools", to: "/categories/text" },
      { label: "Developer Tools", to: "/categories/developer" },
      { label: "Calculators", to: "/categories/calculators" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "GitHub", to: "https://github.com/mdahadvi91/gost-tools", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Cookie Policy", to: "/cookie-policy" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
];

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative mt-24 border-t border-love-rose/15",
        "bg-gradient-to-b from-transparent via-love-rose/[0.02] to-love-rose/[0.05]",
        className
      )}
    >
      {/* Rose gold accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] bg-love-gradient opacity-50"
      />

      {/* Floating hearts decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]"
      >
        <span className="absolute top-12 left-[10%] text-5xl animate-float-heart" style={{ animationDelay: "0s" }}>💗</span>
        <span className="absolute top-24 right-[15%] text-4xl animate-float-heart" style={{ animationDelay: "2s" }}>🌸</span>
        <span className="absolute bottom-12 left-[20%] text-4xl animate-float-heart" style={{ animationDelay: "4s" }}>💕</span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo size="md" showText linkTo="/" />

            <p className="mt-5 max-w-sm text-sm text-dark-textSecondary leading-relaxed">
              Free, fast, and private online tools for everyday digital tasks.
              Everything runs in your browser — no uploads, no tracking.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/mdahadvi91/gost-tools"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-love-rose/8 border border-love-rose/20 flex items-center justify-center text-love-blush/70 hover:text-love-pearl hover:border-love-rose/40 hover:bg-love-rose/15 transition-all"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:mdahadvi91@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-love-rose/8 border border-love-rose/20 flex items-center justify-center text-love-blush/70 hover:text-love-pearl hover:border-love-rose/40 hover:bg-love-rose/15 transition-all"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-love-pearl mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-dark-textSecondary hover:text-love-rose transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-dark-textSecondary hover:text-love-rose transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-love-rose/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-love-blush/60 text-center sm:text-left">
            © {year} AHADEX Tools. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-love-blush/60">
            Made with
            <HeartbeatHeart size="sm" intensity="calm" color="rose" />
            for the web
          </div>
        </div>
      </div>
    </footer>
  );
}