import { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import { ToolPage } from "@components/tool/ToolPage";
import { DownloadButton } from "@components/tool/DownloadButton";
import { downloadDataURL } from "@lib/downloadUtils";

const FORMATS = ["CODE128", "CODE39", "EAN13", "EAN8", "UPC", "ITF", "MSI", "pharmacode"] as const;
type Format = (typeof FORMATS)[number];

export default function BarcodeGenerator() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [value, setValue] = useState("");
  const [format, setFormat] = useState<Format>("CODE128");
  const [showText, setShowText] = useState(true);
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(80);
  const [lineColor, setLineColor] = useState("#0A0B1E");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!value.trim() || !svgRef.current) return;
    try {
      JsBarcode(svgRef.current, value, {
        format,
        displayValue: showText,
        width,
        height,
        lineColor,
        background: "#FFFFFF",
        margin: 10,
      });
      setError("");
    } catch {
      setError(`Invalid value for ${format}`);
    }
  }, [value, format, showText, width, height, lineColor]);

  const download = () => {
    if (!svgRef.current) return;
    const svg = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width || 800;
      canvas.height = img.height || 300;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      downloadDataURL(canvas.toDataURL("image/png"), "barcode.png");
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <ToolPage
      toolId="barcode-generator"
      workspace={
        <div className="space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Value</span>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="123456789012" className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50" />
            {error && <p className="mt-2 text-xs text-aha-coral">{error}</p>}
          </label>

          {value && !error && (
            <div className="flex items-center justify-center p-6 rounded-2xl bg-white border border-white/10">
              <svg ref={svgRef} />
            </div>
          )}
        </div>
      }
      settingsPanel={
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Format</span>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white">
              {FORMATS.map((f) => <option key={f} value={f} className="bg-dark-surface">{f}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Bar width: {width}</span>
            <input type="range" min={1} max={4} step={0.5} value={width} onChange={(e) => setWidth(parseFloat(e.target.value))} className="w-full" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Height: {height}px</span>
            <input type="range" min={40} max={200} step={10} value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="w-full" />
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} />
            <span className="text-sm text-white">Show value below barcode</span>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-white mb-2 block">Bar color</span>
            <input type="color" value={lineColor} onChange={(e) => setLineColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
          </label>
        </div>
      }
      downloadPanel={
        value && !error ? <DownloadButton onDownload={download} label="Download PNG" /> : null
      }
    />
  );
}