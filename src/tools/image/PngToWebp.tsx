import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { useFileUpload } from "@hooks/useFileUpload";
import { readFileAsDataURL, loadImage, buildFileName } from "@lib/fileUtils";
import { canvasToBlob } from "@lib/canvasUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function PngToWebp() {
  const { addFiles, clearFiles, firstFile, previewUrls } = useFileUpload();
  const [processing, setProcessing] = useState(false);
  const [quality, setQuality] = useState(0.85);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);

  const convert = useCallback(async () => {
    if (!firstFile) return;
    setProcessing(true);
    try {
      const dataUrl = await readFileAsDataURL(firstFile);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      const blob = await canvasToBlob(canvas, "image/webp", quality);
      setResultBlob(blob);
      setResultUrl(URL.createObjectURL(blob));
    } finally {
      setProcessing(false);
    }
  }, [firstFile, quality]);

  const download = () => {
    if (!resultBlob || !firstFile) return;
    downloadBlob(resultBlob, buildFileName(firstFile.name, "-converted", "webp"));
  };

  const reset = () => {
    clearFiles();
    setResultUrl(null);
    setResultBlob(null);
  };

  return (
    <ToolPage
      toolId="png-to-webp"
      workspace={
        !firstFile ? (
          <UploadZone onFiles={addFiles} accept={{ "image/png": [".png"] }} />
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={resultUrl ?? previewUrls[0]} alt="Preview" className="w-full max-h-[420px] object-contain" />
            </div>
            {!resultUrl && (
              <button type="button" onClick={convert} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Converting..." : "Convert to WebP"}
              </button>
            )}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        firstFile && !resultUrl ? (
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">
              Quality: {Math.round(quality * 100)}%
            </span>
            <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full" />
          </label>
        ) : null
      }
      downloadPanel={
        resultBlob ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download WebP" />
            <button type="button" onClick={reset} className="w-full text-sm text-dark-textSecondary hover:text-white">Convert another</button>
          </div>
        ) : null
      }
    />
  );
}