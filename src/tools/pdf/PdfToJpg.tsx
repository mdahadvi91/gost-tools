import { useState } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { getPdfPageCount } from "@lib/pdfUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function PdfToJpg() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [dpi, setDpi] = useState(150);
  const [results, setResults] = useState<{ page: number; blob: Blob; url: string }[]>([]);

  const convert = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      const buf = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const scale = dpi / 72;
      const out: { page: number; blob: Blob; url: string }[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        const blob = await new Promise<Blob>((res) =>
          canvas.toBlob((b) => res(b!), "image/jpeg", 0.92)
        );
        out.push({ page: i, blob, url: URL.createObjectURL(blob) });
      }
      setResults(out);
    } catch {
      // silent
    } finally {
      setProcessing(false);
    }
  };

  return (
    <ToolPage
      toolId="pdf-to-jpg"
      workspace={
        !file ? (
          <UploadZone onFiles={(f) => setFile(f[0] ?? null)} accept={{ "application/pdf": [".pdf"] }} />
        ) : results.length === 0 ? (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-white font-medium">{file.name}</p>
            </div>
            <button type="button" onClick={convert} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
              {processing ? "Converting..." : "Convert to JPG"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map((r) => (
              <div key={r.page} className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <img src={r.url} alt={`Page ${r.page}`} className="w-full" />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Page {r.page}</div>
              </div>
            ))}
          </div>
        )
      }
      processing={processing}
      settingsPanel={
        file && results.length === 0 ? (
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">DPI: {dpi}</span>
            <input type="range" min={72} max={300} step={6} value={dpi} onChange={(e) => setDpi(parseInt(e.target.value))} className="w-full" />
            <p className="text-xs text-dark-textSecondary mt-2">72–150 screen · 300 print</p>
          </label>
        ) : null
      }
      downloadPanel={
        results.length > 0 ? (
          <div className="space-y-3">
            {results.map((r) => (
              <DownloadButton key={r.page} onDownload={() => downloadBlob(r.blob, `page-${r.page}.jpg`)} label={`Page ${r.page}`} />
            ))}
          </div>
        ) : null
      }
    />
  );
}