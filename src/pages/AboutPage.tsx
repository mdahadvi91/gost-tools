import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Heart,
  Sparkles,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@components/seo/SEO";
import { BreadcrumbSchema } from "@components/seo/BreadcrumbSchema";
import { Logo } from "@components/common/Logo";
import { Button } from "@components/common/Button";
import { HeartbeatHeart } from "@components/decorative/HeartbeatHeart";
import { Divider } from "@components/common/Divider";
import { about, type AboutValue } from "@data/about";
import { APP_CONFIG } from "@constants/config";
import type { PageSEO } from "@lib/seo";

const VALUE_ICONS: Record<
  AboutValue["icon"],
  typeof ShieldCheck
> = {
  shield: ShieldCheck,
  zap: Zap,
  heart: Heart,
  sparkles: Sparkles,
};

export default function AboutPage() {
  const seo: PageSEO = useMemo(
    () => ({
      title: "About — One developer, one big dream | AHADEX Tools",
      description:
        "The story behind AHADEX Tools — why we built 42 free, privacy-first online tools that run entirely in your browser.",
      canonical: `${APP_CONFIG.url}/about`,
      ogImage: "/images/og/about-og.jpg",
      ogType: "website",
      noIndex: false,
    }),
    []
  );

  return (
    <>
      <SEO seo={seo} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      {/* HERO */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-sm text-white/80 mb-6">
            <HeartbeatHeart size="sm" intensity="calm" color="coral" />
            <span>Since 2025</span>
          </div>

          <h1 className="font-display text-hero font-bold text-white tracking-tight">
            {about.hero.title}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-dark-textSecondary max-w-2xl leading-relaxed">
            {about.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              to="/tools"
              leftIcon={<Sparkles className="w-4 h-4" aria-hidden="true" />}
            >
              Explore the tools
            </Button>
            <Button
              href={`mailto:${APP_CONFIG.email}`}
              variant="secondary"
              leftIcon={<Mail className="w-4 h-4" aria-hidden="true" />}
            >
              Say hello
            </Button>
          </div>
        </div>
      </section>

      <Divider variant="gradient" />

      {/* STORY */}
      <section className="py-12 lg:py-16" aria-labelledby="story-heading">
        <h2
          id="story-heading"
          className="font-display text-h2 font-bold text-white tracking-tight mb-6"
        >
          {about.story.title}
        </h2>

        <div className="max-w-3xl space-y-5">
          {about.story.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-lg text-white leading-relaxed"
                  : "text-base text-dark-textSecondary leading-relaxed"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section
        className="py-12 lg:py-16"
        aria-labelledby="mission-heading"
      >
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-dark-surface via-dark-elevated to-dark-surface border border-white/10">
          <h2
            id="mission-heading"
            className="font-display text-h2 font-bold text-white tracking-tight mb-4"
          >
            {about.mission.title}
          </h2>

          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-8">
            {about.mission.statement}
          </p>

          <ul className="space-y-3 max-w-2xl">
            {about.mission.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm text-dark-textSecondary"
              >
                <span
                  className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-aha-cyan"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 lg:py-16" aria-labelledby="values-heading">
        <h2
          id="values-heading"
          className="font-display text-h2 font-bold text-white tracking-tight mb-10 text-center"
        >
          What we stand for
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.values.map((value) => {
            const Icon = VALUE_ICONS[value.icon];
            return (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-dark-surface border border-white/10 hover:border-aha-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon
                    className="w-6 h-6 text-aha-cyan"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-dark-textSecondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Divider label="Behind the scenes" />

      {/* TECH */}
      <section className="py-12 lg:py-16" aria-labelledby="tech-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2
              id="tech-heading"
              className="font-display text-h2 font-bold text-white tracking-tight mb-4"
            >
              {about.tech.title}
            </h2>
            <p className="text-base text-dark-textSecondary leading-relaxed mb-6">
              {about.tech.description}
            </p>

            <ul className="space-y-2">
              {about.tech.stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/85"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-aha-violet"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Code card */}
          <div className="rounded-2xl overflow-hidden bg-dark-surface border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-aha-coral/70" />
              <span className="w-3 h-3 rounded-full bg-aha-gold/70" />
              <span className="w-3 h-3 rounded-full bg-aha-mint/70" />
              <span className="ml-2 text-xs text-dark-textSecondary font-mono">
                ahadex.config.ts
              </span>
            </div>
            <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-dark-textSecondary">
                <span className="text-aha-violet">export const</span>{" "}
                <span className="text-aha-cyan">ahadex</span> = {"{"}
                {"\n"}  name: <span className="text-aha-mint">"AHADEX Tools"</span>,
                {"\n"}  tools: <span className="text-aha-gold">42</span>,
                {"\n"}  private: <span className="text-aha-gold">true</span>,
                {"\n"}  free: <span className="text-aha-gold">true</span>,
                {"\n"}  tracking: <span className="text-aha-gold">false</span>,
                {"\n"}  uploads: <span className="text-aha-gold">0</span>,
                {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="py-12 lg:py-16" aria-labelledby="future-heading">
        <div className="rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10">
          <h2
            id="future-heading"
            className="font-display text-h2 font-bold text-white tracking-tight mb-3"
          >
            {about.future.title}
          </h2>
          <p className="text-base text-dark-textSecondary leading-relaxed mb-6 max-w-2xl">
            {about.future.description}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {about.future.plans.map((plan) => (
              <li
                key={plan}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <ArrowRight
                  className="w-4 h-4 text-aha-cyan shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/90 leading-relaxed">
                  {plan}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <Logo size="lg" showText={false} linkTo={null} />

        <h2 className="mt-6 font-display text-h2 font-bold text-white tracking-tight">
          {about.cta.title}
        </h2>
        <p className="mt-3 text-base text-dark-textSecondary max-w-xl mx-auto">
          {about.cta.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            to="/contact"
            leftIcon={<Mail className="w-4 h-4" aria-hidden="true" />}
          >
            Contact us
          </Button>
          <Button
            href={APP_CONFIG.github}
            variant="secondary"
            leftIcon={<Github className="w-4 h-4" aria-hidden="true" />}
          >
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-xs text-dark-textSecondary/60">
          <Link
            to="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          {" · "}
          <Link
            to="/terms"
            className="hover:text-white transition-colors"
          >
            Terms
          </Link>
          {" · "}
          <Link
            to="/accessibility"
            className="hover:text-white transition-colors"
          >
            Accessibility
          </Link>
        </p>
      </section>
    </>
  );
}