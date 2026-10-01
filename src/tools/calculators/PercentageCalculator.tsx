import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

type Mode = "of" | "is-what" | "change" | "original";

const MODES: { id: Mode; label: string }[] = [
  { id: "of", label: "X% of Y" },
  { id: "is-what", label: "X is what % of Y" },
  { id: "change", label: "% increase / decrease" },
  { id: "original", label: "Original value" },
];

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("of");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const { result, formula } = useMemo(() => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    if (isNaN(na) || isNaN(nb)) return { result: "", formula: "" };

    switch (mode) {
      case "of": {
        const r = (na / 100) * nb;
        return { result: r.toFixed(4).replace(/\.?0+$/, ""), formula: `${na}% × ${nb} = ${r}` };
      }
      case "is-what": {
        if (nb === 0) return { result: "", formula: "Cannot divide by zero" };
        const r = (na / nb) * 100;
        return { result: r.toFixed(4).replace(/\.?0+$/, "") + "%", formula: `(${na} ÷ ${nb}) × 100 = ${r}%` };
      }
      case "change": {
        if (na === 0) return { result: "", formula: "Original value cannot be zero" };
        const r = ((nb - na) / na) * 100;
        const sign = r >= 0 ? "+" : "";
        return { result: sign + r.toFixed(4).replace(/\.?0+$/, "") + "%", formula: `((${nb} − ${na}) ÷ ${na}) × 100 = ${r}%` };
      }
      case "original": {
        if (na === 100) return { result: "", formula: "Percentage cannot be 100" };
        const r = nb / (1 - na / 100);
        return { result: r.toFixed(4).replace(/\.?0+$/, ""), formula: `${nb} ÷ (1 − ${na}/100) = ${r}` };
      }
    }
  }, [mode, a, b]);

  const inputs = {
    of: { aLabel: "Percentage (%)", bLabel: "Of value" },
    "is-what": { aLabel: "Value X", bLabel: "Value Y" },
    change: { aLabel: "Original value", bLabel: "New value" },
    original: { aLabel: "Discount (%)", bLabel: "Final price" },
  }[mode];

  return (
    <ToolPage
      toolId="percentage-calculator"
      workspace={
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === m.id ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">{inputs.aLabel}</span>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="0"
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 text-lg"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">{inputs.bLabel}</span>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="0"
                className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 text-lg"
              />
            </label>
          </div>

          {result && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-aha-cyan/30 text-center">
              <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-2">Result</p>
              <p className="font-display font-bold text-3xl sm:text-4xl bg-logo-gradient bg-clip-text text-transparent break-all">
                {result}
              </p>
              {formula && <p className="mt-3 text-xs text-dark-textSecondary font-mono break-all">{formula}</p>}
            </div>
          )}
        </div>
      }
    />
  );
}