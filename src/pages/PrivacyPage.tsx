import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Mail, Calendar, ShieldCheck } from "lucide-react";
import { SEO } from "@components/seo/SEO";
import { BreadcrumbSchema } from "@components/seo/BreadcrumbSchema";
import { Divider } from "@components/common/Divider";
import { APP_CONFIG } from "@constants/config";
import { TITLE_TEMPLATES } from "@constants/seo";
import { privacyPolicy } from "@data/trustPages";
import type { PageSEO } from "@lib/seo";

export default function PrivacyPage() {
  const page = privacyPolicy;

  const seo: PageSEO = useMemo(
    () => ({
      title: TITLE_TEMPLATES.privacy,
      description: page.subtitle,
      canonical: `${APP_CONFIG.url}/privacy`,
      ogImage: "/images/og/default-og.jpg",
      ogType: "article",
      noIndex: false,
    }),
    [page.subtitle]
  );

  return (
    <>
      <SEO seo={seo} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ]}
      />

      <section className="py-8 lg:py-12 max-w-3xl">
        <div className="w-12 h-12 rounded-xl bg-aha-cyan/10 border border-aha-cyan/30 flex items-center justify-center mb-5">
          <ShieldCheck className="w-6 h-6 text-aha-cyan" aria-hidden="true" />
        </div>

        <h1 className="font-display text-h1 font-bold text-white tracking-tight">
          {page.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-dark-textSecondary leading-relaxed">
          {page.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-dark-textSecondary/80">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            Last updated: {page.lastUpdated}
          </span>
          <a
            href={`mailto:${page.contactEmail}`}
            className="inline-flex items-center gap-1.5 hover:text-aha-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            {page.contactEmail}
          </a>
        </div>
      </section>

      <Divider variant="gradient" />

      <article className="py-8 lg:py-12 max-w-3xl space-y-10">
        {page.sections.map((section, index) => (
          <section key={index}>
            <h2 className="font-display text-h3 font-semibold text-white tracking-tight mb-4">
              {section.heading}
            </h2>

            {section.paragraphs?.map((p, pi) => (
              <p
                key={pi}
                className="text-base text-dark-textSecondary leading-relaxed mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-3 space-y-2.5">
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-3 text-base text-dark-textSecondary leading-relaxed"
                  >
                    <span
                      className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-aha-cyan"
                      aria-hidden="true"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.paragraphsAfter?.map((p, pai) => (
              <p
                key={pai}
                className="mt-3 text-base text-dark-textSecondary leading-relaxed"
              >
                {p}
              </p>
            ))}
          </section>
        ))}

        <Divider className="my-10" />

        <nav
          aria-label="Related legal pages"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          <Link to="/terms" className="text-dark-textSecondary hover:text-white transition-colors">
            Terms
          </Link>
          <Link to="/disclaimer" className="text-dark-textSecondary hover:text-white transition-colors">
            Disclaimer
          </Link>
          <Link to="/cookie-policy" className="text-dark-textSecondary hover:text-white transition-colors">
            Cookie Policy
          </Link>
          <Link to="/accessibility" className="text-dark-textSecondary hover:text-white transition-colors">
            Accessibility
          </Link>
          <Link to="/contact" className="text-aha-cyan hover:text-aha-magenta transition-colors font-medium">
            Contact us →
          </Link>
        </nav>
      </article>
    </>
  );
}