import { useState } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { downloadBlob } from "@lib/downloadUtils";
import { buildFileName } from "@lib/fileUtils";

export default function BackgroundRemover() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const [progress, setProgress] = useState(0);

  const removeBackground = async () => {
    if (!file) return;
    setProcessing(true);
    setProgress(0);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const blob = await removeBackground(file, {
        progress: (key: string, current: number, total: number) => {
          if (total > 0) setProgress(Math.round((current / total) * 100));
        },
      });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch {
      // silent
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!result || !file) return;
    downloadBlob(result.blob, buildFileName(file.name, "-no-bg", "png"));
  };

  return (
    <ToolPage
      toolId="background-remover"
      workspace={
        !file ? (
          <div className="space-y-4">
            <UploadZone onFiles={(f) => setFile(f[0] ?? null)} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} />
            <p className="text-xs text-dark-textSecondary text-center">
              First load downloads an AI model (~10–30 MB). Runs entirely on your device.
            </p>
          </div>
        ) : result ? (
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{
            backgroundImage: "linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            backgroundColor: "#2a2a2a",
          }}>
            <img src={result.url} alt="Result" className="w-full max-h-[420px] object-contain" />
          </div>
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={URL.createObjectURL(file)} alt="Preview" className="w-full max-h-[420px] object-contain" />
            </div>
            {processing && progress > 0 && (
              <div className="space-y-2">
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-logo-gradient transition-all" style={{ width: `${progress}%` }} />
                </div>
                <p className="text-xs text-dark-textSecondary">{progress}% — processing on your device</p>
              </div>
            )}
            <button type="button" onClick={removeBackground} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
              {processing ? "Removing background..." : "Remove background"}
            </button>
          </div>
        )
      }
      processing={processing}
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download PNG" />
            <button type="button" onClick={() => { setFile(null); setResult(null); }} className="w-full text-sm text-dark-textSecondary hover:text-white">Try another</button>
          </div>
        ) : null
      }
    />
  );
}