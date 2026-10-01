import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";

type Mode = "encode" | "decode";

export default function Base64Tool() {
  const toast = useToast();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [urlSafe, setUrlSafe] = useState(false);

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    try {
      if (mode === "encode") {
        // UTF-8 safe encode
        const bytes = new TextEncoder().encode(input);
        let binary = "";
        bytes.forEach((b) => { binary += String.fromCharCode(b); });
        let result = btoa(binary);
        if (urlSafe) result = result.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        return { output: result, error: "" };
      }
      // decode
      let normalized = input.trim();
      if (urlSafe) normalized = normalized.replace(/-/g, "+").replace(/_/g, "/");
      while (normalized.length % 4) normalized += "=";
      const binary = atob(normalized);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      const result = new TextDecoder().decode(bytes);
      return { output: result, error: "" };
    } catch {
      return { output: "", error: "Invalid input for " + mode };
    }
  }, [input, mode, urlSafe]);

  const handleCopy = async () => {
    if (await copyText(output)) toast.success("Copied");
  };

  return (
    <ToolPage
      toolId="base64-tool"
      workspace={
        <div className="space-y-5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode("encode")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "encode" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}
            >
              Encode
            </button>
            <button
              type="button"
              onClick={() => setMode("decode")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "decode" ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}
            >
              Decode
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Paste Base64 to decode..."}
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
                <p className="text-white break-all font-mono text-sm max-h-64 overflow-auto whitespace-pre-wrap">{output}</p>
              </div>
              <button type="button" onClick={handleCopy} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                Copy result
              </button>
            </div>
          )}
        </div>
      }
      settingsPanel={
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={urlSafe} onChange={(e) => setUrlSafe(e.target.checked)} />
          <span className="text-sm text-white">URL-safe mode</span>
        </label>
      }
    />
  );
}