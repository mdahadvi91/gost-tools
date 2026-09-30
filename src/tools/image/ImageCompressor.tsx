import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { formatBytes } from "@lib/formatUtils";
import { downloadBlob } from "@lib/downloadUtils";
import { buildFileName } from "@lib/fileUtils";

export default function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [quality, setQuality] = useState(0.7);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const addFile = (files: File[]) => setFile(files[0] ?? null);

  const compress = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const compressed = await imageCompression(file, {
        maxSizeMB: 2,
        initialQuality: quality,
        useWebWorker: true,
      });
      setResult({ blob: compressed, url: URL.createObjectURL(compressed) });
    } finally {
      setProcessing(false);
    }
  }, [file, quality]);

  const download = () => {
    if (!result || !file) return;
    const ext = file.name.split(".").pop() ?? "jpg";
    downloadBlob(result.blob, buildFileName(file.name, "-compressed", ext));
  };

  const reset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <ToolPage
      toolId="image-compressor"
      workspace={
        !file ? (
          <UploadZone onFiles={addFile} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} hint="JPG, PNG, or WebP" />
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={result?.url ?? URL.createObjectURL(file)} alt="Preview" className="w-full max-h-[420px] object-contain" />
            </div>
            {!result ? (
              <button type="button" onClick={compress} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Compressing..." : "Compress image"}
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
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">
              Quality: {Math.round(quality * 100)}%
            </span>
            <input type="range" min={0.2} max={1} step={0.05} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full" />
            <p className="text-xs text-dark-textSecondary mt-2">Lower quality = smaller file.</p>
          </label>
        ) : null
      }
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download compressed" />
            <button type="button" onClick={reset} className="w-full text-sm text-dark-textSecondary hover:text-white">Compress another</button>
          </div>
        ) : null
      }
    />
  );
}