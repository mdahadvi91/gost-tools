import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";

type Mode = "encode" | "decode";
type Method = "component" | "uri";

export default function UrlEncoder() {
  const toast = useToast();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [method, setMethod] = useState<Method>("component");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    try {
      if (mode === "encode") {
        return { output: method === "component" ? encodeURIComponent(input) : encodeURI(input), error: "" };
      }
      return { output: method === "component" ? decodeURIComponent(input) : decodeURI(input), error: "" };
    } catch {
      return { output: "", error: "Invalid input for " + mode };
    }
  }, [input, mode, method]);

  const handleCopy = async () => {
    if (await copyText(output)) toast.success("Copied");
  };

  return (
    <ToolPage
      toolId="url-encoder"
      workspace={
        <div className="space-y-5">
          <div className="flex gap-2">
            <button type="button" onClick={() => setMode("encode")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "encode" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}>
              Encode
            </button>
            <button type="button" onClick={() => setMode("decode")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "decode" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}>
              Decode
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            placeholder={mode === "encode" ? "Enter text or URL to encode..." : "Paste encoded string..."}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y font-mono text-sm"
          />

          {error && (
            <div className="p-4 rounded-xl bg-aha-coral/10 border border-aha-coral/30">
              <p className="text-sm text-aha-coral">{error}</p>
            </div>
          )}

          {output && !error && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-aha-cyan/20">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-2">Result</p>
                <p className="text-white break-all font-mono text-sm">{output}</p>
              </div>
              <button type="button" onClick={handleCopy} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                Copy result
              </button>
            </div>
          )}
        </div>
      }
      settingsPanel={
        <div>
          <span className="text-sm font-medium text-white mb-2 block">Method</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMethod("component")}
              className={`py-2 rounded-lg text-sm font-medium ${method === "component" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}
            >
              Component
            </button>
            <button
              type="button"
              onClick={() => setMethod("uri")}
              className={`py-2 rounded-lg text-sm font-medium ${method === "uri" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}
            >
              Whole URL
            </button>
          </div>
          <p className="mt-3 text-xs text-dark-textSecondary leading-relaxed">
            Component encodes everything (good for values). Whole URL keeps structure characters (?, &, /).
          </p>
        </div>
      }
    />
  );
}