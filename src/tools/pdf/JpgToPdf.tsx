import { useState, useCallback } from "react";
import jsPDF from "jspdf";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { readFileAsDataURL, loadImage } from "@lib/fileUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function JpgToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [pageSize, setPageSize] = useState<"a4" | "letter" | "auto">("a4");
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const convert = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    try {
      const pdf = new jsPDF({
        unit: "pt",
        format: pageSize === "auto" ? "a4" : pageSize,
        orientation,
      });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < files.length; i++) {
        if (i > 0) pdf.addPage();
        const img = await loadImage(await readFileAsDataURL(files[i]));
        const ratio = Math.min(pw / img.naturalWidth, ph / img.naturalHeight);
        const w = img.naturalWidth * ratio;
        const h = img.naturalHeight * ratio;
        pdf.addImage(img, "JPEG", (pw - w) / 2, (ph - h) / 2, w, h);
      }

      const blob = pdf.output("blob");
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [files, pageSize, orientation]);

  return (
    <ToolPage
      toolId="jpg-to-pdf"
      workspace={
        files.length === 0 ? (
          <UploadZone onFiles={(f) => setFiles((p) => [...p, ...f])} accept={{ "image/jpeg": [".jpg", ".jpeg"] }} multiple hint="Select one or more JPG files" />
        ) : (
          <div className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {files.map((f, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 group">
                  <img src={URL.createObjectURL(f)} alt={f.name} className="w-full aspect-square object-cover" />
                  <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Remove">×</button>
                </div>
              ))}
            </div>
            {!result && (
              <button type="button" onClick={convert} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Creating PDF..." : `Create PDF (${files.length} page${files.length > 1 ? "s" : ""})`}
              </button>
            )}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        files.length > 0 && !result ? (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Page size</span>
              <select value={pageSize} onChange={(e) => setPageSize(e.target.value as typeof pageSize)} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white">
                <option value="a4" className="bg-dark-surface">A4</option>
                <option value="letter" className="bg-dark-surface">Letter</option>
                <option value="auto" className="bg-dark-surface">Auto</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Orientation</span>
              <select value={orientation} onChange={(e) => setOrientation(e.target.value as typeof orientation)} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white">
                <option value="portrait" className="bg-dark-surface">Portrait</option>
                <option value="landscape" className="bg-dark-surface">Landscape</option>
              </select>
            </label>
          </div>
        ) : null
      }
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={() => downloadBlob(result.blob, "ahadex-images.pdf")} label="Download PDF" />
            <button type="button" onClick={() => { setFiles([]); setResult(null); }} className="w-full text-sm text-dark-textSecondary hover:text-white">Start over</button>
          </div>
        ) : null
      }
    />
  );
}