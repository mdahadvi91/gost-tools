import { useState, useMemo, type FormEvent } from "react";
import {
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@components/seo/SEO";
import { BreadcrumbSchema } from "@components/seo/BreadcrumbSchema";
import { ToolFAQ } from "@components/tool/ToolFAQ";
import { Divider } from "@components/common/Divider";
import { APP_CONFIG } from "@constants/config";
import { contactFaqs } from "@data/faqs";
import { isValidEmail, hasMinLength, hasMaxLength } from "@lib/validation";
import type { PageSEO } from "@lib/seo";
import { cn } from "@lib/cn";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const SUBJECTS = [
  { value: "general", label: "General question" },
  { value: "bug", label: "Report a bug" },
  { value: "feature", label: "Feature request" },
  { value: "partnership", label: "Business / partnership" },
];

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email us",
    value: APP_CONFIG.email,
    href: `mailto:${APP_CONFIG.email}`,
    accent: "text-aha-cyan",
  },
  {
    icon: Clock,
    title: "Response time",
    value: "24–48 hours",
    href: null,
    accent: "text-aha-mint",
  },
  {
    icon: MessageSquare,
    title: "Languages",
    value: "English · বাংলা",
    href: null,
    accent: "text-aha-violet",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const seo: PageSEO = useMemo(
    () => ({
      title: `Contact Us | ${APP_CONFIG.name}`,
      description:
        "Get in touch with AHADEX Tools. Questions, bug reports, feature requests, or business enquiries — we usually reply within 24–48 hours.",
      canonical: `${APP_CONFIG.url}/contact`,
      ogImage: "/images/og/default-og.jpg",
      ogType: "website",
      noIndex: false,
    }),
    []
  );

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!hasMinLength(form.name, 2)) {
      next.name = "Please enter your name (at least 2 characters).";
    } else if (!hasMaxLength(form.name, 60)) {
      next.name = "Name is too long (max 60 characters).";
    }

    if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!form.subject) {
      next.subject = "Please choose a subject.";
    }

    if (!hasMinLength(form.message, 20)) {
      next.message = "Message must be at least 20 characters.";
    } else if (!hasMaxLength(form.message, 1000)) {
      next.message = "Message is too long (max 1000 characters).";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    try {
      /*
       * Client-side-only build has no backend.
       * Compose a mailto: link as a fallback so the message still reaches us.
       * If VITE_CONTACT_FORM_ENDPOINT is set, swap this for a real POST.
       */
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        const subjectLine = `[${form.subject}] from ${form.name}`;
        const body = `${form.message}\n\n—\nReply to: ${form.email}`;
        const mailto = `mailto:${APP_CONFIG.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "general", message: "" });
    } catch {
      setErrors({
        message:
          "Something went wrong. Please email us directly at " +
          APP_CONFIG.email +
          ".",
      });
    } finally {
      setSending(false);
    }
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <>
      <SEO seo={seo} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* HERO */}
      <section className="py-8 lg:py-12 max-w-3xl">
        <h1 className="font-display text-h1 font-bold text-white tracking-tight">
          Contact us
        </h1>
        <p className="mt-3 text-base sm:text-lg text-dark-textSecondary leading-relaxed">
          Questions, feedback, bug reports, or partnership ideas — we read
          everything. Usually reply within 24–48 hours.
        </p>
      </section>

      {/* INFO CARDS */}
      <section
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        aria-label="Contact information"
      >
        {CONTACT_CARDS.map(({ icon: Icon, title, value, href, accent }) => {
          const content = (
            <>
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Icon
                  className={cn("w-5 h-5", accent)}
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-dark-textSecondary font-medium mb-1">
                {title}
              </p>
              <p className="text-sm font-medium text-white break-all">
                {value}
              </p>
            </>
          );

          return href ? (
            <a
              key={title}
              href={href}
              className="p-5 rounded-2xl bg-dark-surface border border-white/10 hover:border-aha-cyan/40 hover:shadow-glow-cyan transition-all duration-300"
            >
              {content}
            </a>
          ) : (
            <div
              key={title}
              className="p-5 rounded-2xl bg-dark-surface border border-white/10"
            >
              {content}
            </div>
          );
        })}
      </section>

      <Divider label="Send a message" />

      {/* FORM */}
      <section className="py-8 lg:py-12">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="p-8 rounded-2xl bg-aha-mint/5 border border-aha-mint/30 text-center"
                role="status"
              >
                <div className="w-14 h-14 rounded-full bg-aha-mint/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2
                    className="w-7 h-7 text-aha-mint"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-display text-xl font-bold text-white mb-2">
                  Message sent!
                </h2>
                <p className="text-sm text-dark-textSecondary mb-6">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-aha-cyan hover:text-aha-magenta transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Your name <span className="text-aha-coral">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    autoComplete="name"
                    maxLength={60}
                    className={cn(
                      "w-full h-11 px-4 rounded-xl",
                      "bg-white/5 border text-white",
                      "placeholder:text-dark-textSecondary/60",
                      "focus:outline-none transition-all duration-200",
                      errors.name
                        ? "border-aha-coral/60 focus:border-aha-coral focus:shadow-glow-coral"
                        : "border-white/10 focus:border-aha-cyan/50 focus:shadow-glow-cyan"
                    )}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-xs text-aha-coral flex items-center gap-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email <span className="text-aha-coral">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    autoComplete="email"
                    className={cn(
                      "w-full h-11 px-4 rounded-xl",
                      "bg-white/5 border text-white",
                      "placeholder:text-dark-textSecondary/60",
                      "focus:outline-none transition-all duration-200",
                      errors.email
                        ? "border-aha-coral/60 focus:border-aha-coral focus:shadow-glow-coral"
                        : "border-white/10 focus:border-aha-cyan/50 focus:shadow-glow-cyan"
                    )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-xs text-aha-coral flex items-center gap-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject <span className="text-aha-coral">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={cn(
                      "w-full h-11 px-4 rounded-xl",
                      "bg-white/5 border border-white/10 text-white",
                      "focus:outline-none focus:border-aha-cyan/50 focus:shadow-glow-cyan",
                      "transition-all duration-200",
                      "appearance-none cursor-pointer"
                    )}
                  >
                    {SUBJECTS.map((s) => (
                      <option
                        key={s.value}
                        value={s.value}
                        className="bg-dark-surface"
                      >
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message <span className="text-aha-coral">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    rows={6}
                    maxLength={1000}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl resize-y",
                      "bg-white/5 border text-white",
                      "placeholder:text-dark-textSecondary/60",
                      "focus:outline-none transition-all duration-200",
                      errors.message
                        ? "border-aha-coral/60 focus:border-aha-coral focus:shadow-glow-coral"
                        : "border-white/10 focus:border-aha-cyan/50 focus:shadow-glow-cyan"
                    )}
                    placeholder="How can we help?"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    {errors.message ? (
                      <p
                        id="message-error"
                        className="text-xs text-aha-coral flex items-center gap-1.5"
                      >
                        <AlertCircle
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-dark-textSecondary/60 font-mono">
                      {form.message.length} / 1000
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    "inline-flex items-center gap-2 h-12 px-6 rounded-xl",
                    "bg-logo-gradient text-white font-medium",
                    "shadow-glow-violet hover:opacity-90",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
                    "disabled:opacity-60 disabled:cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                >
                  {sending ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-xs text-dark-textSecondary/70">
                  Or email us directly at{" "}
                  <a
                    href={`mailto:${APP_CONFIG.email}`}
                    className="text-aha-cyan hover:underline"
                  >
                    {APP_CONFIG.email}
                  </a>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Divider variant="gradient" />

      {/* FAQ */}
      <ToolFAQ faqs={contactFaqs} />
    </>
  );
}