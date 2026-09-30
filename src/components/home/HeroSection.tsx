import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";
import { HeroSearch } from "./HeroSearch";
import { Button } from "@components/common/Button";
import { HeartbeatHeart } from "@components/decorative/HeartbeatHeart";
import { useReducedMotion } from "@hooks/useReducedMotion";
import { cn } from "@lib/cn";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "py-16 sm:py-20 lg:py-28",
        className
      )}
      aria-labelledby="hero-heading"
    >
      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-aha-cyan/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-aha-violet/10 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-sm text-white/80">
            <Sparkles className="w-4 h-4 text-aha-cyan" aria-hidden="true" />
            <span>42 free tools · no sign-up · 100% private</span>
          </span>
        </motion.div>

        {/* Heartbeat heart */}
        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <HeartbeatHeart size="lg" intensity="normal" color="violet" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          id="hero-heading"
          className="font-display font-bold text-hero text-white tracking-tight"
        >
          <span className="bg-logo-gradient bg-clip-text text-transparent">
            AHADEX
          </span>{" "}
          <span className="text-white/90">Tools</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-lg sm:text-xl text-dark-textSecondary max-w-2xl mx-auto leading-relaxed"
        >
          Simple, fast and private online tools. Everything runs in your
          browser — no uploads, no accounts, no waiting.
        </motion.p>

        {/* Search */}
        <motion.div variants={itemVariants} className="mt-8 max-w-2xl mx-auto">
          <HeroSearch />
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            to="/tools"
            size="lg"
            leftIcon={<Zap className="w-4 h-4" aria-hidden="true" />}
          >
            Explore all tools
          </Button>
          <Button
            to="/about"
            size="lg"
            variant="secondary"
            leftIcon={<Shield className="w-4 h-4" aria-hidden="true" />}
          >
            Why AHADEX?
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-dark-textSecondary/80"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-aha-mint" />
            Runs in your browser
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-aha-cyan" />
            No file uploads
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-aha-violet" />
            Free forever
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}