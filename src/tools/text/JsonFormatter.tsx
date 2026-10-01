import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";

type Mode = "format" | "minify";

export default function JsonFormatter() {
  const toast = useToast();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("format");
  const [indent, setIndent] = useState(2);

  const { output, error } = useMemo(() => {
    if (!input.trim()) return { output: "", error: "" };
    try {
      const parsed = JSON.parse(input);
      const out = mode === "format" ? JSON.stringify(parsed, null, indent) : JSON.stringify(parsed);
      return { output: out, error: "" };
    } catch (e) {
      return { output: "", error: e instanceof Error ? e.message : "Invalid JSON" };
    }
  }, [input, mode, indent]);

  const handleCopy = async () => {
    if (await copyText(output)) toast.success("Copied");
  };

  return (
    <ToolPage
      toolId="json-formatter"
      workspace={
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMode("format")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === "format" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"
              }`}
            >
              Format
            </button>
            <button
              type="button"
              onClick={() => setMode("minify")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === "minify" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"
              }`}
            >
              Minify
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
            placeholder='Paste JSON here, e.g. {"name":"Jane"}'
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y font-mono text-sm"
          />

          {error && (
            <div className="p-4 rounded-xl bg-aha-coral/10 border border-aha-coral/30">
              <p className="text-sm text-aha-coral font-mono">{error}</p>
            </div>
          )}

          {output && !error && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-aha-mint/20 max-h-96 overflow-auto">
                <pre className="text-white font-mono text-sm whitespace-pre">{output}</pre>
              </div>
              <button type="button" onClick={handleCopy} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                Copy result
              </button>
            </div>
          )}
        </div>
      }
      settingsPanel={
        mode === "format" ? (
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Indent: {indent} spaces</span>
            <input type="range" min={2} max={8} step={2} value={indent} onChange={(e) => setIndent(parseInt(e.target.value))} className="w-full" />
          </label>
        ) : null
      }
    />
  );
}