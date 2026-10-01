import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";
import { downloadText } from "@lib/downloadUtils";

function makeUuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  // Fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGenerator() {
  const toast = useToast();
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [list, setList] = useState<string[]>(() => Array.from({ length: 5 }, makeUuid));

  const generate = useCallback(() => {
    const items = Array.from({ length: count }, makeUuid);
    setList(items);
  }, [count]);

  const display = uppercase ? list.map((u) => u.toUpperCase()) : list;
  const joined = display.join("\n");

  const handleCopy = async () => {
    if (await copyText(joined)) toast.success(`${display.length} UUIDs copied`);
  };

  return (
    <ToolPage
      toolId="uuid-generator"
      workspace={
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-aha-cyan/20 max-h-96 overflow-auto">
            <div className="space-y-1.5 font-mono text-sm">
              {display.map((uuid, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-dark-textSecondary text-xs w-6 shrink-0">{i + 1}.</span>
                  <span className="text-white break-all">{uuid}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={generate} className="flex-1 min-w-[180px] h-11 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet">
              Generate {count} new
            </button>
            <button type="button" onClick={handleCopy} className="flex-1 min-w-[180px] h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
              Copy all
            </button>
          </div>
        </div>
      }
      settingsPanel={
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Count: {count}</span>
            <input type="range" min={1} max={100} step={1} value={count} onChange={(e) => setCount(parseInt(e.target.value))} className="w-full" />
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
            <span className="text-sm text-white">Uppercase</span>
          </label>
        </div>
      }
      downloadPanel={
        list.length > 0 ? (
          <button type="button" onClick={() => downloadText(joined, "uuids.txt")} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
            Download as .txt
          </button>
        ) : null
      }
    />
  );
}