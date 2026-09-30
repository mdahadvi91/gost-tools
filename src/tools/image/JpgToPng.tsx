import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { useFileUpload } from "@hooks/useFileUpload";
import { readFileAsDataURL, loadImage, buildFileName } from "@lib/fileUtils";
import { canvasToBlob } from "@lib/canvasUtils";
import { downloadBlob } from "@lib/downloadUtils";
import { analytics } from "@lib/analytics";

export default function JpgToPng() {
  const { files, addFiles, clearFiles, firstFile, previewUrls } = useFileUpload();
  const [processing, setProcessing] = useState(false);
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
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");
      ctx.drawImage(img, 0, 0);
      const blob = await canvasToBlob(canvas, "image/png");
      setResultBlob(blob);
      setResultUrl(URL.createObjectURL(blob));
      analytics.conversionSuccess("jpg-to-png");
    } catch {
      analytics.conversionError("jpg-to-png");
    } finally {
      setProcessing(false);
    }
  }, [firstFile]);

  const download = useCallback(() => {
    if (!resultBlob || !firstFile) return;
    downloadBlob(resultBlob, buildFileName(firstFile.name, "-converted", "png"));
    analytics.fileDownload("jpg-to-png");
  }, [resultBlob, firstFile]);

  const reset = () => {
    clearFiles();
    setResultUrl(null);
    setResultBlob(null);
  };

  return (
    <ToolPage
      toolId="jpg-to-png"
      workspace={
        !firstFile ? (
          <UploadZone
            onFiles={addFiles}
            accept={{ "image/jpeg": [".jpg", ".jpeg"] }}
            hint="JPG or JPEG · up to 50 MB"
          />
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src={resultUrl ?? previewUrls[0]}
                alt="Preview"
                className="w-full max-h-[420px] object-contain"
              />
            </div>
            {!resultUrl && (
              <button
                type="button"
                onClick={convert}
                disabled={processing}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60"
              >
                {processing ? "Converting..." : "Convert to PNG"}
              </button>
            )}
          </div>
        )
      }
      preview={null}
      processing={processing}
      downloadPanel={
        resultBlob ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download PNG" />
            <button
              type="button"
              onClick={reset}
              className="w-full text-sm text-dark-textSecondary hover:text-white transition-colors"
            >
              Convert another file
            </button>
          </div>
        ) : null
      }
    />
  );
}