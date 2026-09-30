import { useEffect, useMemo } from "react";
import { HeroSection } from "@components/home/HeroSection";
import { PopularTools } from "@components/home/PopularTools";
import { ToolsGrid } from "@components/home/ToolsGrid";
import { WhyAhadex } from "@components/home/WhyAhadex";
import { HowItWorks } from "@components/home/HowItWorks";
import { PrivacyPromise } from "@components/home/PrivacyPromise";
import { HomeFAQ } from "@components/home/HomeFAQ";
import { StatsCounter } from "@components/home/StatsCounter";
import { SEO } from "@components/seo/SEO";
import { FAQSchema } from "@components/seo/FAQSchema";
import { buildHomeSEO } from "@lib/seo";
import { homeFaqs } from "@data/faqs";
import { analytics } from "@lib/analytics";

export default function HomePage() {
  const seo = useMemo(() => buildHomeSEO(), []);

  useEffect(() => {
    analytics.trackPageView("/", "Home");
  }, []);

  return (
    <>
      <SEO seo={seo} />
      <FAQSchema faqs={homeFaqs} />

      <HeroSection />
      <PopularTools />
      <StatsCounter />
      <ToolsGrid />
      <HowItWorks />
      <WhyAhadex />
      <PrivacyPromise />
      <HomeFAQ />
    </>
  );
}