import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { mergePdfs } from "@lib/pdfUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const merge = useCallback(async () => {
    if (files.length < 2) return;
    setProcessing(true);
    try {
      const bytes = await mergePdfs(files);
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [files]);

  const move = (index: number, dir: -1 | 1) => {
    const next = [...files];
    const target = index + dir;
    if (target < 0 || target >= files.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setFiles(next);
  };

  return (
    <ToolPage
      toolId="merge-pdf"
      workspace={
        files.length === 0 ? (
          <UploadZone onFiles={(f) => setFiles((p) => [...p, ...f])} accept={{ "application/pdf": [".pdf"] }} multiple hint="Select two or more PDF files" />
        ) : (
          <div className="space-y-3">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="w-8 h-8 rounded-lg bg-aha-violet/20 text-aha-violet flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span className="flex-1 text-sm text-white truncate">{f.name}</span>
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="w-7 h-7 rounded text-dark-textSecondary hover:text-white disabled:opacity-30" aria-label="Move up">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === files.length - 1} className="w-7 h-7 rounded text-dark-textSecondary hover:text-white disabled:opacity-30" aria-label="Move down">↓</button>
                <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))} className="w-7 h-7 rounded text-aha-coral hover:text-white" aria-label="Remove">×</button>
              </div>
            ))}
            {!result && (
              <button type="button" onClick={merge} disabled={processing || files.length < 2} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Merging..." : `Merge ${files.length} PDFs`}
              </button>
            )}
          </div>
        )
      }
      processing={processing}
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={() => downloadBlob(result.blob, "merged.pdf")} label="Download merged PDF" />
            <button type="button" onClick={() => { setFiles([]); setResult(null); }} className="w-full text-sm text-dark-textSecondary hover:text-white">Start over</button>
          </div>
        ) : null
      }
    />
  );
}