import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";

interface Options {
  trimLines: boolean;
  collapseSpaces: boolean;
  removeBlankLines: boolean;
  removeHtml: boolean;
  removeEmojis: boolean;
  removeNonAscii: boolean;
}

const DEFAULT_OPTS: Options = {
  trimLines: true,
  collapseSpaces: true,
  removeBlankLines: true,
  removeHtml: false,
  removeEmojis: false,
  removeNonAscii: false,
};

const LABELS: Record<keyof Options, string> = {
  trimLines: "Trim each line",
  collapseSpaces: "Collapse multiple spaces",
  removeBlankLines: "Remove blank lines",
  removeHtml: "Remove HTML tags",
  removeEmojis: "Remove emojis",
  removeNonAscii: "Remove non-ASCII characters",
};

export default function TextCleaner() {
  const toast = useToast();
  const [text, setText] = useState("");
  const [opts, setOpts] = useState<Options>(DEFAULT_OPTS);

  const cleaned = useMemo(() => {
    let out = text;
    if (opts.removeHtml) out = out.replace(/<[^>]*>/g, "");
    if (opts.removeEmojis) {
      out = out.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "");
    }
    if (opts.removeNonAscii) out = out.replace(/[^\x00-\x7F]/g, "");
    if (opts.collapseSpaces) out = out.replace(/[ \t]+/g, " ");
    if (opts.trimLines) out = out.split("\n").map((l) => l.trim()).join("\n");
    if (opts.removeBlankLines) out = out.replace(/\n{2,}/g, "\n");
    return out;
  }, [text, opts]);

  const toggle = (key: keyof Options) => setOpts((p) => ({ ...p, [key]: !p[key] }));

  const handleCopy = async () => {
    if (await copyText(cleaned)) toast.success("Copied");
  };

  return (
    <ToolPage
      toolId="text-cleaner"
      workspace={
        <div className="space-y-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            placeholder="Paste your messy text..."
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y"
          />

          <div className="grid sm:grid-cols-2 gap-2">
            {(Object.keys(LABELS) as (keyof Options)[]).map((key) => (
              <label key={key} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} />
                <span className="text-sm text-white">{LABELS[key]}</span>
              </label>
            ))}
          </div>

          {text && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-aha-cyan/20">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-2">Cleaned</p>
                <p className="text-white break-words whitespace-pre-wrap text-sm max-h-64 overflow-auto">{cleaned}</p>
              </div>
              <button type="button" onClick={handleCopy} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                Copy cleaned text
              </button>
            </div>
          )}
        </div>
      }
    />
  );
}