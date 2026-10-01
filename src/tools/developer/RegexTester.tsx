import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

type Flag = "g" | "i" | "m" | "s" | "u";
const FLAGS: Flag[] = ["g", "i", "m", "s", "u"];

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState<Set<Flag>>(new Set(["g"]));
  const [text, setText] = useState("");
  const [replaceWith, setReplaceWith] = useState("");
  const [showReplace, setShowReplace] = useState(false);

  const { matches, error, replaced } = useMemo(() => {
    if (!pattern) return { matches: [], error: "", replaced: "" };
    try {
      const flagStr = Array.from(flags).join("");
      const re = new RegExp(pattern, flagStr);
      const found: { value: string; index: number; groups: Record<string, string> }[] = [];
      let m: RegExpExecArray | null;
      if (flags.has("g")) {
        while ((m = re.exec(text)) !== null) {
          if (m.index === re.lastIndex) re.lastIndex++;
          found.push({ value: m[0], index: m.index, groups: { ...m.groups } as Record<string, string> });
          if (found.length > 1000) break;
        }
      } else {
        m = re.exec(text);
        if (m) found.push({ value: m[0], index: m.index, groups: { ...m.groups } as Record<string, string> });
      }
      let rep = "";
      if (showReplace) {
        const re2 = new RegExp(pattern, flagStr.includes("g") ? flagStr : flagStr + "g");
        rep = text.replace(re2, replaceWith);
      }
      return { matches: found, error: "", replaced: rep };
    } catch (e) {
      return { matches: [], error: e instanceof Error ? e.message : "Invalid regex", replaced: "" };
    }
  }, [pattern, flags, text, replaceWith, showReplace]);

  const toggleFlag = (f: Flag) => {
    setFlags((p) => {
      const next = new Set(p);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      return next;
    });
  };

  return (
    <ToolPage
      toolId="regex-tester"
      workspace={
        <div className="space-y-5">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 font-mono">
            <span className="text-aha-cyan">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="\\d+"
              className="flex-1 bg-transparent text-white outline-none placeholder:text-dark-textSecondary/60"
            />
            <span className="text-aha-cyan">/{Array.from(flags).join("")}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FLAGS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => toggleFlag(f)}
                className={`w-9 h-9 rounded-lg text-sm font-mono font-medium ${flags.has(f) ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"}`}
              >
                {f}
              </button>
            ))}
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-aha-coral/10 border border-aha-coral/30">
              <p className="text-sm text-aha-coral">{error}</p>
            </div>
          )}

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            placeholder="Test text here..."
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y font-mono text-sm"
          />

          {showReplace && (
            <input
              type="text"
              value={replaceWith}
              onChange={(e) => setReplaceWith(e.target.value)}
              placeholder="Replacement..."
              className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 font-mono text-sm"
            />
          )}

          {!error && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-aha-cyan/20">
                <p className="text-xs uppercase tracking-widest text-aha-cyan font-semibold mb-2">
                  {matches.length} match{matches.length === 1 ? "" : "es"}
                </p>
                <div className="space-y-1.5 font-mono text-xs">
                  {matches.map((m, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-dark-textSecondary w-12 shrink-0">@{m.index}</span>
                      <span className="text-white break-all">{m.value || "(empty)"}</span>
                    </div>
                  ))}
                  {matches.length === 0 && <p className="text-dark-textSecondary">No matches</p>}
                </div>
              </div>

              {showReplace && replaced && (
                <div className="p-4 rounded-xl bg-aha-mint/5 border border-aha-mint/20">
                  <p className="text-xs uppercase tracking-widest text-aha-mint font-semibold mb-2">After replace</p>
                  <pre className="text-white font-mono text-xs whitespace-pre-wrap">{replaced}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      }
      settingsPanel={
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={showReplace} onChange={(e) => setShowReplace(e.target.checked)} />
          <span className="text-sm text-white">Replace mode</span>
        </label>
      }
    />
  );
}