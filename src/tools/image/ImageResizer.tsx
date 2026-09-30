import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { useFileUpload } from "@hooks/useFileUpload";
import { readFileAsDataURL, loadImage, buildFileName } from "@lib/fileUtils";
import { canvasToBlob } from "@lib/canvasUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function ImageResizer() {
  const { addFiles, clearFiles, firstFile, previewUrls } = useFileUpload();
  const [processing, setProcessing] = useState(false);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [lockAspect, setLockAspect] = useState(true);
  const [originalRatio, setOriginalRatio] = useState(1);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const handleFiles = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    addFiles(files);
    const img = await loadImage(await readFileAsDataURL(f));
    setWidth(img.naturalWidth);
    setHeight(img.naturalHeight);
    setOriginalRatio(img.naturalWidth / img.naturalHeight);
    setResult(null);
  };

  const onWidthChange = (w: number) => {
    setWidth(w);
    if (lockAspect) setHeight(Math.round(w / originalRatio));
  };

  const onHeightChange = (h: number) => {
    setHeight(h);
    if (lockAspect) setWidth(Math.round(h * originalRatio));
  };

  const resize = useCallback(async () => {
    if (!firstFile) return;
    setProcessing(true);
    try {
      const img = await loadImage(await readFileAsDataURL(firstFile));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");
      ctx.drawImage(img, 0, 0, width, height);
      const blob = await canvasToBlob(canvas, "image/png");
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [firstFile, width, height]);

  const download = () => {
    if (!result || !firstFile) return;
    downloadBlob(result.blob, buildFileName(firstFile.name, `-${width}x${height}`, "png"));
  };

  const reset = () => {
    clearFiles();
    setResult(null);
  };

  return (
    <ToolPage
      toolId="image-resizer"
      workspace={
        !firstFile ? (
          <UploadZone onFiles={handleFiles} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} />
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={result?.url ?? previewUrls[0]} alt="Preview" className="w-full max-h-[420px] object-contain" />
            </div>
            {!result && (
              <button type="button" onClick={resize} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Resizing..." : `Resize to ${width}×${height}`}
              </button>
            )}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        firstFile && !result ? (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Width (px)</span>
              <input type="number" value={width} onChange={(e) => onWidthChange(parseInt(e.target.value) || 0)} min={1} max={10000} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Height (px)</span>
              <input type="number" value={height} onChange={(e) => onHeightChange(parseInt(e.target.value) || 0)} min={1} max={10000} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={lockAspect} onChange={(e) => setLockAspect(e.target.checked)} className="w-4 h-4 rounded" />
              <span className="text-sm text-white">Lock aspect ratio</span>
            </label>
          </div>
        ) : null
      }
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download resized" />
            <button type="button" onClick={reset} className="w-full text-sm text-dark-textSecondary hover:text-white">Resize another</button>
          </div>
        ) : null
      }
    />
  );
}