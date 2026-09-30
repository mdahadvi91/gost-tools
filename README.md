# AHADEX Tools

> 42 free, fast and privacy-first online tools for everyday digital tasks.

[![Live](https://img.shields.io/badge/live-ahadex.fun-4DD9FF)](https://ahadex.fun)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-4DD9FF)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-5B9BFF)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-C084FC)](https://vitejs.dev)

**Live:** [https://ahadex.fun](https://ahadex.fun)  
**Repository:** [https://github.com/mdahadvi91/gost-tools](https://github.com/mdahadvi91/gost-tools)  
**Contact:** mdahadvi91@gmail.com

---

## ✨ What is AHADEX Tools?

AHADEX Tools is a production-grade collection of **42 genuinely useful online tools** across 6 categories — Image, PDF, QR & Barcode, Text, Developer, and Calculators.

Every tool runs **entirely in your browser**. No file uploads. No accounts. No tracking of your content.

Built with care by an independent developer.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5.5 (strict) |
| Build tool | Vite 5 |
| Package manager | npm |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion + Lottie |
| Routing | React Router 6 |
| i18n | i18next (English, বাংলা, العربية) |
| Hosting | Cloudflare Pages |
| Analytics | Google Analytics 4 |
| Monetization | Google AdSense |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/mdahadvi91/gost-tools.git
cd gost-tools
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run build:analyze` | Build with source maps |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check only |
| `npm run type-check` | TypeScript validation |
| `npm run clean` | Remove build artifacts |
| `npm run clean:all` | Remove artifacts + node_modules |
| `npm run sitemap` | Generate sitemap.xml |
| `npm run validate` | Validate tool registry |

---

## 📁 Project Structure

```
gost-tools/
├── public/                  Static assets (favicons, logo, OG, lottie)
├── scripts/                 Build-time scripts
├── src/
│   ├── components/          UI components (7 folders)
│   ├── pages/               11 route pages
│   ├── tools/               42 tools across 6 categories
│   ├── data/                Tool registry + content
│   ├── lib/                 Utilities
│   ├── hooks/               Custom React hooks
│   ├── i18n/                Translations (en, bn, ar)
│   ├── styles/              Global CSS + design system
│   ├── contexts/            React contexts
│   ├── types/               TypeScript types
│   └── constants/           App constants
├── tests/                   Unit, integration, e2e
└── docs/                    Architecture & guides
```

See `docs/ARCHITECTURE.md` for full details.

---

## 🧩 Tools (42 total)

| Category | Count | Examples |
|---|---|---|
| **Image** | 12 | JPG to PNG, Image Compressor, Image Resizer, Background Remover |
| **PDF** | 8 | Merge PDF, Split PDF, Compress PDF, PDF to JPG |
| **QR & Barcode** | 8 | QR Generator, Wi-Fi QR, vCard QR, Barcode Generator |
| **Text** | 6 | Word Counter, Case Converter, JSON Formatter |
| **Developer** | 3 | URL Encoder, UUID Generator, Regex Tester |
| **Calculators** | 5 | Percentage, Age, Date Difference, Unit Converter |
| **Total** | **42** | |

---

## ➕ Adding a New Tool

1. Create `src/tools/<category>/NewTool.tsx`
2. Add entry to `src/data/tools.ts`
3. Add translations to `src/i18n/locales/*/tools.ts`
4. Add OG image to `public/images/og/tools/new-tool-og.jpg`
5. Run `npm run build` and `npm run validate`

The tool automatically appears in:
- Tools grid · Search · Sidebar · Category page
- Related tools · Sitemap · SEO metadata

---

## 🌍 Deployment (Cloudflare Pages)

| Setting | Value |
|---|---|
| Repository | `mdahadvi91/gost-tools` |
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 18 or higher |
| Package manager | npm |

**Domain:** `ahadex.fun` — DNS via Cloudflare, HTTPS mandatory.

**Environment variables** must be configured in the Cloudflare dashboard.

---

## 🔒 Privacy Principles

- No file uploads to servers
- No user accounts
- No tracking of file contents
- Analytics only for anonymous page views
- All processing happens in the browser

See `/privacy` on the live site for the full policy.

---

## 🎨 Design System

- **Brand Colors:** Cyan `#4DD9FF` → Blue `#5B9BFF` → Violet `#8B5CF6` → Magenta `#C084FC`
- **Fonts:** Clash Display (headings), Inter (body), Hind Siliguri (Bangla)
- **Animations:** Framer Motion + Lottie, respects `prefers-reduced-motion`
- **Themes:** Light, Dark, System
- **Layout:** Header + Left Sidebar + Main + Footer

---

## 📄 License

[MIT](LICENSE) © AHADEX

---

## 🤝 Contributing

This is primarily a personal project. For bug reports, tool requests, or business inquiries:

📧 **mdahadvi91@gmail.com**

---

## ✅ AdSense Compliance

This project is designed following Google AdSense program policies:

- Original, useful content on every page
- Clear navigation and trust pages
- No deceptive or misleading UI
- No excessive advertisements
- Functional tools (not empty shells)
- Fast loading, mobile-friendly
- Privacy policy, terms, disclaimer present

**Note:** Approval is not guaranteed by code — it depends on Google's review.

---

## 📊 Project Status

- ✅ Root configuration — complete
- 🚧 Source code — in progress
- 📅 Target launch: TBD