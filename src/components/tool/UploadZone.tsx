import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileWarning } from "lucide-react";
import { cn } from "@lib/cn";
import { useSound } from "@components/decorative/SoundController";

interface UploadZoneProps {
  onFiles: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxSize?: number;
  multiple?: boolean;
  hint?: string;
  className?: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

export function UploadZone({
  onFiles,
  accept,
  maxSize = 20 * 1024 * 1024, // 20 MB
  multiple = false,
  hint,
  className,
}: UploadZoneProps) {
  const { play } = useSound();
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (accepted: File[], rejected: { errors: { code: string }[] }[]) => {
      setError(null);

      if (rejected.length > 0) {
        const first = rejected[0]?.errors[0]?.code;
        if (first === "file-too-large") {
          setError(`File is too large. Maximum size: ${formatBytes(maxSize)}`);
        } else if (first === "file-invalid-type") {
          setError("File type is not supported.");
        } else {
          setError("Could not accept the file.");
        }
        play("error");
        return;
      }

      if (accepted.length > 0) {
        play("success");
        onFiles(accepted);
      }
    },
    [maxSize, onFiles, play]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept,
      maxSize,
      multiple,
    });

  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className={cn(
          "relative flex flex-col items-center justify-center",
          "min-h-[220px] p-8 rounded-2xl cursor-pointer",
          "border-2 border-dashed transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
          isDragActive && !isDragReject
            ? "border-aha-cyan bg-aha-cyan/5 shadow-glow-cyan scale-[1.01]"
            : isDragReject
              ? "border-aha-coral bg-aha-coral/5"
              : "border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/5"
        )}
      >
        <input {...getInputProps()} aria-label="Upload files" />

        <motion.div
          animate={
            isDragActive
              ? { scale: 1.1, y: -4 }
              : { scale: 1, y: 0 }
          }
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4"
        >
          {isDragReject ? (
            <FileWarning
              className="w-7 h-7 text-aha-coral"
              aria-hidden="true"
            />
          ) : (
            <UploadCloud
              className={cn(
                "w-7 h-7 transition-colors",
                isDragActive ? "text-aha-cyan" : "text-white/70"
              )}
              aria-hidden="true"
            />
          )}
        </motion.div>

        <p className="font-display font-semibold text-base text-white mb-1">
          {isDragActive
            ? "Drop your file here"
            : multiple
              ? "Drop files here or click to browse"
              : "Drop your file here or click to browse"}
        </p>

        <p className="text-xs text-dark-textSecondary">
          {hint ?? `Maximum size: ${formatBytes(maxSize)}`}
        </p>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            role="alert"
            className="mt-3 text-sm text-aha-coral flex items-center gap-2"
          >
            <FileWarning className="w-4 h-4" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}