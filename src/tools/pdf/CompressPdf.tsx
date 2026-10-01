import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { readFileAsArrayBuffer } from "@lib/fileUtils";
import { downloadBlob } from "@lib/downloadUtils";
import { formatBytes } from "@lib/formatUtils";

export default function CompressPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [level, setLevel] = useState<"low" | "medium" | "high">("medium");
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const compress = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const buf = await readFileAsArrayBuffer(file);
      const pdf = await PDFDocument.load(buf, { ignoreEncryption: true });
      const bytes = await pdf.save({
        useObjectStreams: level === "high",
        addDefaultPage: false,
      });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch {
      // silent
    } finally {
      setProcessing(false);
    }
  };

  return (
    <ToolPage
      toolId="compress-pdf"
      workspace={
        !file ? (
          <UploadZone onFiles={(f) => setFile(f[0] ?? null)} accept={{ "application/pdf": [".pdf"] }} hint="PDF file · up to 100 MB" />
        ) : (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-white font-medium mb-1">{file.name}</p>
              <p className="text-xs text-dark-textSecondary">{formatBytes(file.size)}</p>
            </div>
            {!result ? (
              <button type="button" onClick={compress} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Compressing..." : "Compress PDF"}
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-xs text-dark-textSecondary mb-1">Original</p>
                  <p className="font-mono text-white text-sm">{formatBytes(file.size)}</p>
                </div>
                <div className="p-4 rounded-xl bg-aha-mint/10 border border-aha-mint/30 text-center">
                  <p className="text-xs text-aha-mint mb-1">Compressed</p>
                  <p className="font-mono text-white text-sm">{formatBytes(result.blob.size)}</p>
                </div>
              </div>
            )}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        file && !result ? (
          <div className="space-y-3">
            <span className="text-sm font-medium text-white block">Compression level</span>
            {(["low", "medium", "high"] as const).map((l) => (
              <label key={l} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                <input type="radio" checked={level === l} onChange={() => setLevel(l)} />
                <span className="text-sm text-white capitalize">{l}</span>
              </label>
            ))}
          </div>
        ) : null
      }
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={() => downloadBlob(result.blob, "compressed.pdf")} label="Download compressed" />
            <button type="button" onClick={() => { setFile(null); setResult(null); }} className="w-full text-sm text-dark-textSecondary hover:text-white">Try another</button>
          </div>
        ) : null
      }
    />
  );
}