import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { DownloadButton } from "@components/tool/DownloadButton";
import { downloadText } from "@lib/downloadUtils";

type Delimiter = "," | ";" | "\t";

function flatten(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(out, flatten(v as Record<string, unknown>, key));
    } else if (Array.isArray(v)) {
      out[key] = v.join("; ");
    } else {
      out[key] = v === null || v === undefined ? "" : String(v);
    }
  }
  return out;
}

function escapeCsv(value: string, delimiter: string): string {
  if (value.includes(delimiter) || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export default function JsonToCsv() {
  const [input, setInput] = useState("");
  const [delimiter, setDelimiter] = useState<Delimiter>(",");
  const [error, setError] = useState("");

  const csv = useMemo(() => {
    if (!input.trim()) return "";
    setError("");
    try {
      const parsed = JSON.parse(input);
      const arr = Array.isArray(parsed) ? parsed : [parsed];
      if (arr.length === 0) return "";

      const flattened = arr.map((item) =>
        typeof item === "object" && item !== null ? flatten(item as Record<string, unknown>) : { value: String(item) }
      );

      const headers = Array.from(new Set(flattened.flatMap((row) => Object.keys(row))));
      const rows = [
        headers.map((h) => escapeCsv(h, delimiter)).join(delimiter),
        ...flattened.map((row) => headers.map((h) => escapeCsv(row[h] ?? "", delimiter)).join(delimiter)),
      ];
      return rows.join("\n");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      return "";
    }
  }, [input, delimiter]);

  return (
    <ToolPage
      toolId="json-to-csv"
      workspace={
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
            placeholder='Paste JSON array, e.g. [{"name":"Jane","age":30}]'
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y font-mono text-sm"
          />

          {error && (
            <div className="p-4 rounded-xl bg-aha-coral/10 border border-aha-coral/30">
              <p className="text-sm text-aha-coral font-mono">{error}</p>
            </div>
          )}

          {csv && !error && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-aha-mint/20 max-h-80 overflow-auto">
              <pre className="text-white font-mono text-xs whitespace-pre">{csv}</pre>
            </div>
          )}
        </div>
      }
      settingsPanel={
        <div>
          <span className="text-sm font-medium text-white mb-2 block">Delimiter</span>
          <div className="grid grid-cols-3 gap-2">
            {([",", ";", "\t"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDelimiter(d)}
                className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                  delimiter === d ? "bg-logo-gradient text-white" : "bg-white/5 text-dark-textSecondary border border-white/10"
                }`}
              >
                {d === "," ? "Comma" : d === ";" ? "Semicolon" : "Tab"}
              </button>
            ))}
          </div>
        </div>
      }
      downloadPanel={
        csv && !error ? (
          <DownloadButton onDownload={() => downloadText(csv, "data.csv", "text/csv;charset=utf-8")} label="Download CSV" />
        ) : null
      }
    />
  );
}