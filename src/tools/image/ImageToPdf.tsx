import { useState, useCallback } from "react";
import jsPDF from "jspdf";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { readFileAsDataURL, loadImage, buildFileName } from "@lib/fileUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function ImageToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [pageSize, setPageSize] = useState<"a4" | "letter" | "auto">("a4");
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const addFiles = (incoming: File[]) => {
    setFiles((prev) => [...prev, ...incoming]);
    setResult(null);
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const convert = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    try {
      const pdf = new jsPDF({ unit: "pt", format: pageSize === "auto" ? "a4" : pageSize });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < files.length; i++) {
        if (i > 0) pdf.addPage();
        const img = await loadImage(await readFileAsDataURL(files[i]));
        const ratio = Math.min(pageWidth / img.naturalWidth, pageHeight / img.naturalHeight);
        const w = img.naturalWidth * ratio;
        const h = img.naturalHeight * ratio;
        const x = (pageWidth - w) / 2;
        const y = (pageHeight - h) / 2;
        pdf.addImage(img, "JPEG", x, y, w, h);
      }

      const blob = pdf.output("blob");
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [files, pageSize]);

  const download = () => {
    if (!result) return;
    downloadBlob(result.blob, "ahadex-images.pdf");
  };

  const reset = () => {
    setFiles([]);
    setResult(null);
  };

  return (
    <ToolPage
      toolId="image-to-pdf"
      workspace={
        files.length === 0 ? (
          <UploadZone onFiles={addFiles} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} multiple hint="Select one or more images" />
        ) : (
          <div className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {files.map((f, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 group">
                  <img src={URL.createObjectURL(f)} alt={f.name} className="w-full aspect-square object-cover" />
                  <button type="button" onClick={() => removeFile(i)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 backdrop-blur text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Remove">×</button>
                  <p className="absolute bottom-2 left-2 right-2 text-[10px] text-white truncate bg-black/60 backdrop-blur px-2 py-1 rounded">{f.name}</p>
                </div>
              ))}
            </div>
            {!result && (
              <button type="button" onClick={convert} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Creating PDF..." : `Create PDF (${files.length} page${files.length > 1 ? "s" : ""})`}
              </button>
            )}
            {result && (
              <div className="p-4 rounded-xl bg-aha-mint/10 border border-aha-mint/30">
                <p className="text-sm text-aha-mint">✅ PDF ready — {files.length} page{files.length > 1 ? "s" : ""}</p>
              </div>
            )}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        files.length > 0 && !result ? (
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Page size</span>
            <select value={pageSize} onChange={(e) => setPageSize(e.target.value as typeof pageSize)} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-aha-cyan/50">
              <option value="a4" className="bg-dark-surface">A4</option>
              <option value="letter" className="bg-dark-surface">Letter</option>
              <option value="auto" className="bg-dark-surface">Auto</option>
            </select>
          </label>
        ) : null
      }
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={download} label="Download PDF" />
            <button type="button" onClick={reset} className="w-full text-sm text-dark-textSecondary hover:text-white">Start over</button>
          </div>
        ) : null
      }
    />
  );
}