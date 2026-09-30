import { useState, useCallback, useRef } from "react";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { useFileUpload } from "@hooks/useFileUpload";
import { readFileAsDataURL, loadImage, buildFileName } from "@lib/fileUtils";
import { canvasToBlob } from "@lib/canvasUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function ImageCropper() {
  const { addFiles, clearFiles, firstFile, previewUrls } = useFileUpload();
  const [processing, setProcessing] = useState(false);
  const [crop, setCrop] = useState<Crop>({ unit: "%", x: 10, y: 10, width: 80, height: 80 });
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const cropImage = useCallback(async () => {
    if (!firstFile || !imgRef.current) return;
    setProcessing(true);
    try {
      const img = imgRef.current;
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;

      const canvas = document.createElement("canvas");
      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");

      ctx.drawImage(
        img,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const blob = await canvasToBlob(canvas, "image/png");
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [firstFile, crop]);

  const download = () => {
    if (!result || !firstFile) return;
    downloadBlob(result.blob, buildFileName(firstFile.name, "-cropped", "png"));
  };

  const reset = () => {
    clearFiles();
    setResult(null);
  };

  return (
    <ToolPage
      toolId="image-cropper"
      workspace={
        !firstFile ? (
          <UploadZone onFiles={addFiles} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} />
        ) : result ? (
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <img src={result.url} alt="Cropped" className="w-full max-h-[420px] object-contain" />
          </div>
        ) : (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
              <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                <img
                  ref={imgRef}
                  src={previewUrls[0]}
                  alt="Crop source"
                  onLoad={(e) => {
                    const el = e.currentTarget;
                    setCrop({
                      unit: "px",
                      x: el.width * 0.1,
                      y: el.height * 0.1,
                      width: el.width * 0.8,
                      height: el.height * 0.8,
                    });
                  }}
                  className="max-h-[500px] w-auto"
                />
              </ReactCrop>
            </div>
            <button type="button" onClick={cropImage} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
              {processing ? "Cropping..." : "Crop image"}
            </button>
          </div>
        )
      }
      processing={processing}
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download cropped" />
            <button type="button" onClick={() => setResult(null)} className="w-full text-sm text-dark-textSecondary hover:text-white">Crop again</button>
            <button type="button" onClick={reset} className="w-full text-sm text-dark-textSecondary hover:text-white">New image</button>
          </div>
        ) : null
      }
    />
  );
}