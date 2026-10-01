import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, Upload, X, Copy, ExternalLink } from "lucide-react";
import { ToolPage } from "@components/tool/ToolPage";
import { useToast } from "@components/common/Toast";
import { copyText } from "@lib/clipboardUtils";
import { cn } from "@lib/cn";

export default function QrCodeScanner() {
  const toast = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setScanning(false);
  }, []);

  useEffect(() => () => stopCamera(), [stopCamera]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      setScanning(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 100);
    } catch {
      toast.error("Camera permission denied");
    }
  };

  const handleFile = async (file: File) => {
    try {
      const { default: jsQR } = await import("jsqr");
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        setResult(code.data);
        toast.success("QR decoded!");
      } else {
        toast.error("No QR code found");
      }
      URL.revokeObjectURL(img.src);
    } catch {
      toast.error("Could not process image");
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    if (await copyText(result)) toast.success("Copied");
  };

  const isUrl = result && /^https?:\/\//i.test(result);

  return (
    <ToolPage
      toolId="qr-code-scanner"
      workspace={
        <div className="space-y-5">
          {!result && !scanning && (
            <div className="grid sm:grid-cols-2 gap-4">
              <button type="button" onClick={startCamera} className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white/5 border-2 border-dashed border-white/15 hover:border-aha-cyan/40 transition-colors">
                <Camera className="w-10 h-10 text-aha-cyan" aria-hidden="true" />
                <span className="text-white font-medium">Use camera</span>
              </button>
              <button type="button" onClick={() => fileRef.current?.click()} className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white/5 border-2 border-dashed border-white/15 hover:border-aha-cyan/40 transition-colors">
                <Upload className="w-10 h-10 text-aha-violet" aria-hidden="true" />
                <span className="text-white font-medium">Upload image</span>
              </button>
              <input ref={fileRef} type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} className="hidden" />
            </div>
          )}

          {scanning && (
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-square max-w-md mx-auto">
              <video ref={videoRef} playsInline className="w-full h-full object-cover" />
              <button type="button" onClick={stopCamera} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 backdrop-blur flex items-center justify-center text-white">
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-56 h-56 border-2 border-aha-cyan rounded-2xl shadow-glow-cyan" />
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-4 p-6 rounded-2xl bg-aha-mint/5 border border-aha-mint/30">
              <p className="text-xs uppercase tracking-widest text-aha-mint font-semibold">QR content</p>
              <p className="text-white break-all font-mono text-sm">{result}</p>
            </div>
          )}
        </div>
      }
      downloadPanel={
        result ? (
          <div className="space-y-3">
            <button type="button" onClick={handleCopy} className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
              <Copy className="w-4 h-4" aria-hidden="true" /> Copy text
            </button>
            {isUrl && (
              <a href={result} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-logo-gradient text-white font-medium">
                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Open link
              </a>
            )}
            <button type="button" onClick={() => setResult(null)} className={cn("w-full text-sm text-dark-textSecondary hover:text-white")}>
              Scan another
            </button>
          </div>
        ) : null
      }
    />
  );
}