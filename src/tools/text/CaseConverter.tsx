import { useState } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";

type CaseType =
  | "upper" | "lower" | "title" | "sentence"
  | "camel" | "pascal" | "snake" | "kebab" | "constant";

const CASES: { id: CaseType; label: string }[] = [
  { id: "upper", label: "UPPERCASE" },
  { id: "lower", label: "lowercase" },
  { id: "title", label: "Title Case" },
  { id: "sentence", label: "Sentence case" },
  { id: "camel", label: "camelCase" },
  { id: "pascal", label: "PascalCase" },
  { id: "snake", label: "snake_case" },
  { id: "kebab", label: "kebab-case" },
  { id: "constant", label: "CONSTANT_CASE" },
];

function toWords(text: string): string[] {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

function convert(text: string, type: CaseType): string {
  switch (type) {
    case "upper": return text.toUpperCase();
    case "lower": return text.toLowerCase();
    case "title":
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case "sentence":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    case "camel": {
      const words = toWords(text);
      return words.map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))).join("");
    }
    case "pascal":
      return toWords(text).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    case "snake": return toWords(text).join("_");
    case "kebab": return toWords(text).join("-");
    case "constant": return toWords(text).join("_").toUpperCase();
  }
}

export default function CaseConverter() {
  const toast = useToast();
  const [text, setText] = useState("");
  const [active, setActive] = useState<CaseType>("upper");

  const output = convert(text, active);

  const handleCopy = async () => {
    if (await copyText(output)) toast.success("Copied");
    else toast.error("Copy failed");
  };

  return (
    <ToolPage
      toolId="case-converter"
      workspace={
        <div className="space-y-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            placeholder="Paste your text..."
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y"
          />

          <div className="flex flex-wrap gap-2">
            {CASES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  active === c.id
                    ? "bg-logo-gradient text-white"
                    : "bg-white/5 text-dark-textSecondary hover:text-white border border-white/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {text && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-aha-cyan/20">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-2">Result</p>
                <p className="text-white break-words whitespace-pre-wrap font-mono text-sm">{output}</p>
              </div>
              <button type="button" onClick={handleCopy} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                Copy result
              </button>
            </div>
          )}
        </div>
      }
    />
  );
}