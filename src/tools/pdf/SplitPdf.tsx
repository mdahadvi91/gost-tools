import { useState, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { DownloadButton } from "@components/tool/DownloadButton";
import { splitPdf, getPdfPageCount, parsePageRanges } from "@lib/pdfUtils";
import { downloadBlob } from "@lib/downloadUtils";

export default function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [rangeInput, setRangeInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  const handleFile = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setFile(f);
    try {
      const count = await getPdfPageCount(f);
      setPageCount(count);
      setRangeInput(`1-${count}`);
    } catch {
      setPageCount(0);
    }
  };

  const split = useCallback(async () => {
    if (!file || !rangeInput) return;
    setProcessing(true);
    try {
      const indices = parsePageRanges(rangeInput, pageCount);
      if (indices.length === 0) return;
      const bytes = await splitPdf(file, indices);
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } finally {
      setProcessing(false);
    }
  }, [file, rangeInput, pageCount]);

  return (
    <ToolPage
      toolId="split-pdf"
      workspace={
        !file ? (
          <UploadZone onFiles={handleFile} accept={{ "application/pdf": [".pdf"] }} hint="PDF file · up to 100 MB" />
        ) : (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-white font-medium mb-1">{file.name}</p>
              <p className="text-xs text-dark-textSecondary">{pageCount} pages detected</p>
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">Pages to extract</label>
              <input type="text" value={rangeInput} onChange={(e) => setRangeInput(e.target.value)} placeholder="e.g. 1-3,7,10-12" className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50" />
              <p className="mt-2 text-xs text-dark-textSecondary">Use commas and dashes: 1-3,7,10-12</p>
            </div>
            {!result && (
              <button type="button" onClick={split} disabled={processing} className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-logo-gradient text-white font-medium shadow-glow-violet disabled:opacity-60">
                {processing ? "Splitting..." : "Extract pages"}
              </button>
            )}
          </div>
        )
      }
      processing={processing}
      downloadPanel={
        result ? (
          <div className="space-y-4">
            <DownloadButton onDownload={() => downloadBlob(result.blob, "extracted.pdf")} label="Download PDF" />
            <button type="button" onClick={() => { setFile(null); setResult(null); }} className="w-full text-sm text-dark-textSecondary hover:text-white">Try another</button>
          </div>
        ) : null
      }
    />
  );
}