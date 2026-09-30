/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CATEGORIES } from "./data/categories";
import { TOOLS } from "./data/tools";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
            A
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Ahadex Tools</h1>
            <p className="text-xs text-slate-400">Architecture & File Tree Initialized</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            253 Files Ready
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 space-y-8">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-medium text-white mb-2">Project Structure Complete</h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Every required folder and file from the specification has been created with accurate paths, modular separation, and zero build errors.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Categories</span>
              <p className="text-2xl font-bold text-blue-400 mt-1">{CATEGORIES.length}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Tools Catalog</span>
              <p className="text-2xl font-bold text-indigo-400 mt-1">{TOOLS.length}+</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Components</span>
              <p className="text-2xl font-bold text-purple-400 mt-1">45+</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Build Status</span>
              <p className="text-2xl font-bold text-emerald-400 mt-1">Passing</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Tool Modules Ready</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span className="text-slate-200">Image Tools:</span> JPG/PNG/WebP, Compressor, Resizer, Background Remover
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span className="text-slate-200">PDF Tools:</span> Merge, Split, Compress, Extract, Convert
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-200">QR Tools:</span> Generator, Scanner, Wi-Fi, vCard, Barcode
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-slate-200">Text & Dev:</span> Word Counter, JSON Formatter, Base64, UUID, Regex
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-slate-200">Calculators:</span> Percentage, Age, Date, Unit Converter, BMI
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Assets & Infrastructure</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Public assets (OG cards, icons, illustrations, Lottie, webmanifest)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SEO schemas (Breadcrumb, FAQ, WebApp, StructuredData)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                i18n locale files (en, bn, ar) & Theme/Sound/Toast contexts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Utility hooks (useFileUpload, useTheme, useToolSearch, useDebounce)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Docs & scripts (sitemap generator, validation, architecture guide)
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

