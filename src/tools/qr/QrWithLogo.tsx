import { useState, useEffect, useRef, useCallback } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { DownloadButton } from "@components/tool/DownloadButton";
import { generateQRDataURL } from "@lib/qrUtils";
import { downloadDataURL } from "@lib/downloadUtils";
import { readFileAsDataURL, loadImage } from "@lib/fileUtils";

export default function QrWithLogo() {
  const [text, setText] = useState("");
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(22);
  const [result, setResult] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!text.trim()) { setResult(""); return; }
    (async () => {
      const qrDataUrl = await generateQRDataURL(text, {
        size: 800,
        errorCorrectionLevel: "H",
      });
      if (!logo) { setResult(qrDataUrl); return; }

      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 800;
      const ctx = canvas.getContext("2d")!;
      const qr = await loadImage(qrDataUrl);
      const logoImg = await loadImage(logo);
      ctx.drawImage(qr, 0, 0, 800, 800);

      const size = (logoSize / 100) * 800;
      const pad = size * 0.12;
      const x = (800 - size) / 2;
      const y = (800 - size) / 2;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(x - pad, y - pad, size + pad * 2, size + pad * 2);
      ctx.drawImage(logoImg, x, y, size, size);

      setResult(canvas.toDataURL("image/png"));
    })().catch(() => setResult(""));
  }, [text, logo, logoSize]);

  const handleLogo = useCallback(async (file: File) => {
    const url = await readFileAsDataURL(file);
    setLogo(url);
  }, []);

  return (
    <ToolPage
      toolId="qr-code-with-logo"
      workspace={
        <div className="space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">QR content</span>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} placeholder="https://ahadex.fun" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y" />
          </label>

          <div>
            <p className="text-sm font-medium text-white mb-2">Logo (optional)</p>
            <button type="button" onClick={() => fileRef.current?.click()} className="w-full p-6 rounded-2xl bg-white/5 border-2 border-dashed border-white/15 hover:border-aha-cyan/40 transition-colors text-white">
              {logo ? "Change logo" : "Upload logo (PNG recommended)"}
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleLogo(e.target.files[0])} className="hidden" />
          </div>

          {result && (
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <img src={result} alt="QR with logo" className="w-64 h-64 rounded-xl bg-white p-3" />
            </div>
          )}
        </div>
      }
      settingsPanel={
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Logo size: {logoSize}%</span>
            <input type="range" min={10} max={30} step={1} value={logoSize} onChange={(e) => setLogoSize(parseInt(e.target.value))} className="w-full" />
            <p className="text-xs text-dark-textSecondary mt-2">Keep under 30% to stay scannable</p>
          </label>
          {logo && (
            <button type="button" onClick={() => setLogo(null)} className="w-full text-sm text-aha-coral hover:text-white">
              Remove logo
            </button>
          )}
        </div>
      }
      downloadPanel={
        result ? <DownloadButton onDownload={() => downloadDataURL(result, "qr-with-logo.png")} label="Download PNG" /> : null
      }
    />
  );
}