import { useState, useCallback, useRef, useEffect } from "react";

interface UseFileUploadOptions {
  multiple?: boolean;
  maxSize?: number;
}

interface UseFileUploadReturn {
  files: File[];
  addFiles: (files: File[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
  previewUrls: string[];
  hasFiles: boolean;
  firstFile: File | null;
}

export function useFileUpload(
  options: UseFileUploadOptions = {}
): UseFileUploadReturn {
  const { multiple = false, maxSize } = options;
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const urlsRef = useRef<string[]>([]);

  // Cleanup old object URLs on unmount
  useEffect(() => {
    return () => {
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  // Regenerate preview URLs whenever files change
  useEffect(() => {
    // Revoke old URLs
    urlsRef.current.forEach((url) => URL.revokeObjectURL(url));

    const newUrls = files.map((file) => URL.createObjectURL(file));
    urlsRef.current = newUrls;
    setPreviewUrls(newUrls);
  }, [files]);

  const addFiles = useCallback(
    (incoming: File[]) => {
      let valid = incoming;

      if (maxSize) {
        valid = valid.filter((f) => f.size <= maxSize);
      }

      setFiles((prev) => {
        const next = multiple ? [...prev, ...valid] : valid.slice(0, 1);
        return next;
      });
    },
    [multiple, maxSize]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearFiles = useCallback(() => {
    urlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    urlsRef.current = [];
    setFiles([]);
    setPreviewUrls([]);
  }, []);

  return {
    files,
    addFiles,
    removeFile,
    clearFiles,
    previewUrls,
    hasFiles: files.length > 0,
    firstFile: files[0] ?? null,
  };
}