// ============================================================
// AHADEX Tools — Trust Pages Data
// Privacy, Terms, Disclaimer, Accessibility, Cookie Policy
// ============================================================

export interface TrustSection {
  heading: string;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  bullets?: string[];
}

export interface TrustPage {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: TrustSection[];
  contactEmail?: string;
}

export const CONTACT_EMAIL = "mdahadvi91@gmail.com";
export const LAST_UPDATED = "2025";

/* ============================================================
 * 1. PRIVACY POLICY
 * ============================================================ */

export const privacyPolicy: TrustPage = {
  slug: "privacy",
  title: "Privacy Policy",
  subtitle:
    "Your privacy matters. This page explains what we collect (almost nothing) and what we don't (almost everything).",
  lastUpdated: LAST_UPDATED,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      heading: "1. The short version",
      paragraphs: [
        "AHADEX Tools is designed to be privacy-first. The tools run entirely in your browser. Your files — images, PDFs, text, and any other content — are never uploaded to our servers, never stored, and never analysed.",
        "The only data we collect is anonymous analytics (page views, tool opens) and whatever is needed to serve advertising. You don't need to create an account, and we don't ask for personal information.",
      ],
    },
    {
      heading: "2. What we do NOT collect",
      bullets: [
        "The contents of any file you use with our tools.",
        "Your name, email, or phone number (unless you contact us).",
        "Your exact location.",
        "Payment information — we don't process payments.",
        "Passwords you generate or enter in any tool.",
      ],
    },
    {
      heading: "3. Local storage",
      paragraphs: [
        "We store a few small preferences in your browser's local storage:",
      ],
      bullets: [
        "Your preferred theme (light, dark, or system).",
        "Your preferred language (English, Bengali, or Arabic).",
        "Whether you've dismissed the Aha companion.",
        "Whether sound effects are enabled.",
      ],
      paragraphsAfter: [
        "This data never leaves your browser. You can clear it at any time from your browser settings.",
      ],
    },
    {
      heading: "4. Analytics",
      paragraphs: [
        "We use Google Analytics 4 to understand which pages are popular and how the site is being used. Analytics data is aggregated and anonymous. We do not send the contents of any file or text you enter into a tool.",
        "If you prefer, you can block analytics with any modern ad blocker or browser privacy extension. The tools will continue to work normally.",
      ],
    },
    {
      heading: "5. Advertising",
      paragraphs: [
        "The site may display advertising served by Google AdSense and its partners. These ads help keep AHADEX Tools free for everyone.",
        "Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalised advertising in your Google Ads Settings.",
        "We do not place ads on top of tool workspaces, download buttons, or anywhere that would confuse the user about what is an ad and what is a tool.",
      ],
    },
    {
      heading: "6. Third-party services",
      paragraphs: [
        "Aside from Google Analytics and Google AdSense, we do not use any third-party services that receive your data. Fonts are loaded from Google Fonts. If you prefer, you can block them — the site will still work, using system fonts.",
      ],
    },
    {
      heading: "7. Children's privacy",
      paragraphs: [
        "AHADEX Tools is suitable for general audiences. We do not knowingly collect personal information from anyone, including children under 13. If you believe a child has submitted personal information to us (for example, via the contact form), please email us and we'll delete it.",
      ],
    },
    {
      heading: "8. Your rights",
      paragraphs: [
        "You have the right to request access to any personal data we hold about you, to correct it, or to have it deleted. In practice, we hold almost no personal data — only what you send us through the contact form.",
        `To exercise any of these rights, email us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "9. Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The latest version will always be available on this page, with the 'Last updated' date at the top. Significant changes will be highlighted on the homepage.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: [
        `Questions about privacy? Email us at ${CONTACT_EMAIL}. We aim to respond within 48 hours.`,
      ],
    },
  ],
};

/* ============================================================
 * 2. TERMS OF SERVICE
 * ============================================================ */

export const termsOfService: TrustPage = {
  slug: "terms",
  title: "Terms of Service",
  subtitle: "The rules for using AHADEX Tools.",
  lastUpdated: LAST_UPDATED,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      heading: "1. Acceptance",
      paragraphs: [
        "By using AHADEX Tools ('the Service'), you agree to these Terms of Service. If you do not agree, please do not use the Service.",
      ],
    },
    {
      heading: "2. What the Service is",
      paragraphs: [
        "AHADEX Tools provides free, browser-based utilities for working with images, PDFs, text, QR codes, and other everyday tasks. All processing runs on your device.",
        "The Service is provided 'as-is' and 'as-available'. We do not guarantee that any specific tool will always be available, error-free, or produce a specific result.",
      ],
    },
    {
      heading: "3. Acceptable use",
      bullets: [
        "Do not use the Service for anything illegal or harmful.",
        "Do not upload or process content you don't have the rights to.",
        "Do not attempt to overload, scrape, or attack the Service.",
        "Do not remove or hide advertisements or copyright notices.",
        "Do not use automated scripts to abuse the Service.",
      ],
    },
    {
      heading: "4. Your content",
      paragraphs: [
        "Because every tool runs in your browser, we never receive your files or text. You retain full ownership of everything you process with the Service. We claim no rights over your content.",
      ],
    },
    {
      heading: "5. Intellectual property",
      paragraphs: [
        "The AHADEX Tools name, logo, website design, and underlying code are owned by AHADEX. You may not copy, redistribute, or create derivative works without permission.",
        "Outputs you create with the tools (converted images, generated QR codes, formatted text) belong entirely to you.",
      ],
    },
    {
      heading: "6. No warranty",
      paragraphs: [
        "The Service is provided without any warranty, express or implied. We do not guarantee accuracy of calculations, suitability for any particular purpose, or uninterrupted availability.",
        "Always keep backups of important files. Use the Service at your own risk.",
      ],
    },
    {
      heading: "7. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, AHADEX is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.",
      ],
    },
    {
      heading: "8. Advertising",
      paragraphs: [
        "The Service may display advertising to help cover hosting and development costs. Ads are labelled and never disguised as tool features or navigation.",
      ],
    },
    {
      heading: "9. Changes",
      paragraphs: [
        "We may update these terms at any time. Continued use of the Service after changes means you accept the updated terms.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: [
        `Questions about these terms? Email us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

/* ============================================================
 * 3. DISCLAIMER
 * ============================================================ */

export const disclaimer: TrustPage = {
  slug: "disclaimer",
  title: "Disclaimer",
  subtitle: "Important information about using AHADEX Tools.",
  lastUpdated: LAST_UPDATED,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      heading: "1. General information",
      paragraphs: [
        "The tools on AHADEX Tools are provided for general informational and practical use. While we do our best to ensure accuracy, we make no guarantees about the results produced by any tool.",
      ],
    },
    {
      heading: "2. Not professional advice",
      paragraphs: [
        "Calculators and information provided by the Service (including the BMI Calculator, Unit Converter, Percentage Calculator, Age Calculator, and Date Difference Calculator) are for general reference only.",
        "They are not a substitute for professional advice — medical, legal, financial, or otherwise. Always consult a qualified professional for important decisions.",
      ],
    },
    {
      heading: "3. File handling",
      paragraphs: [
        "All processing happens in your browser. We are not responsible for any corruption, loss, or unintended modification of your files.",
        "Always keep a backup of your original files. Never rely on a single tool to preserve critical data.",
      ],
    },
    {
      heading: "4. Third-party links",
      paragraphs: [
        "The Service may contain links to external websites (for example, our GitHub page or sponsor sites). We are not responsible for the content, policies, or practices of those sites.",
      ],
    },
    {
      heading: "5. Availability",
      paragraphs: [
        "We aim to keep the Service online 24/7, but we cannot guarantee uninterrupted access. Downtime may occur for maintenance, updates, or issues outside our control.",
      ],
    },
    {
      heading: "6. Contact",
      paragraphs: [
        `Spotted an error? Email us at ${CONTACT_EMAIL} and we'll fix it as soon as possible.`,
      ],
    },
  ],
};

/* ============================================================
 * 4. ACCESSIBILITY
 * ============================================================ */

export const accessibility: TrustPage = {
  slug: "accessibility",
  title: "Accessibility",
  subtitle:
    "Our commitment to making AHADEX Tools usable by everyone.",
  lastUpdated: LAST_UPDATED,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      heading: "1. Our commitment",
      paragraphs: [
        "We believe every tool should work for everyone — regardless of ability, device, or connection speed. We're actively working to make AHADEX Tools meet the Web Content Accessibility Guidelines (WCAG) 2.2 AA.",
      ],
    },
    {
      heading: "2. What we've done",
      bullets: [
        "Semantic HTML so screen readers can understand the page structure.",
        "Full keyboard navigation — every tool works without a mouse.",
        "Visible focus states on all interactive elements.",
        "ARIA labels and live regions on dynamic content.",
        "Respect for 'prefers-reduced-motion' — animations are reduced or disabled.",
        "Colour contrast tested to meet WCAG AA requirements.",
        "Touch targets at least 44×44 px on mobile.",
        "Tool workspaces sized to avoid horizontal scrolling.",
      ],
    },
    {
      heading: "3. Known limitations",
      bullets: [
        "Some decorative animations may still be distracting. If they are, enable 'prefers-reduced-motion' in your operating system.",
        "The Bengali and Arabic translations are works in progress.",
        "Complex tools (like Background Remover) may take longer on older devices.",
      ],
    },
    {
      heading: "4. Feedback",
      paragraphs: [
        "If you encounter an accessibility barrier, please let us know. We treat accessibility reports with priority — often fixing them within a few days.",
        `Email: ${CONTACT_EMAIL}`,
      ],
    },
    {
      heading: "5. Standards",
      paragraphs: [
        "We aim to conform to WCAG 2.2 Level AA. Where we don't yet meet a criterion, we document it above under 'Known limitations' and work to close the gap.",
      ],
    },
    {
      heading: "6. Assistive technology",
      paragraphs: [
        "The site has been tested with NVDA (Windows) and VoiceOver (iOS/macOS). If you use another screen reader and find issues, please let us know.",
      ],
    },
  ],
};

/* ============================================================
 * 5. COOKIE POLICY
 * ============================================================ */

export const cookiePolicy: TrustPage = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  subtitle: "How we use cookies and similar technologies.",
  lastUpdated: LAST_UPDATED,
  contactEmail: CONTACT_EMAIL,
  sections: [
    {
      heading: "1. What are cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device by websites you visit. They help sites remember your preferences and understand how you use them.",
      ],
    },
    {
      heading: "2. Cookies we use",
      bullets: [
        "Essential: None. AHADEX Tools does not require cookies to function — we use localStorage instead.",
        "Preferences: Stored in localStorage (theme, language, sound setting, dismissed notices). These never leave your browser.",
        "Analytics: Google Analytics 4 may set cookies to measure anonymous usage. You can block these without affecting the tools.",
        "Advertising: Google AdSense may set cookies to serve relevant ads. You can opt out via your Google Ads Settings.",
      ],
    },
    {
      heading: "3. Managing cookies",
      paragraphs: [
        "You can clear or block cookies from your browser settings at any time. Doing so will not affect the core functionality of any tool.",
        "To opt out of personalised ads from Google, visit: https://adssettings.google.com",
      ],
    },
    {
      heading: "4. Local storage",
      paragraphs: [
        "We primarily use localStorage (a modern alternative to cookies) to remember your theme, language, and preferences. Like cookies, this data stays entirely on your device.",
      ],
    },
    {
      heading: "5. Contact",
      paragraphs: [
        `Questions about cookies or this policy? Email us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

/* ============================================================
 * EXPORTS
 * ============================================================ */

export const trustPages: TrustPage[] = [
  privacyPolicy,
  termsOfService,
  disclaimer,
  accessibility,
  cookiePolicy,
];

export function getTrustPageBySlug(slug: string): TrustPage | undefined {
  return trustPages.find((p) => p.slug === slug);
}