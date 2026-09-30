import { useState } from "react";
import EXIF from "exifr";
import { ToolPage } from "@components/tool/ToolPage";
import { UploadZone } from "@components/tool/UploadZone";
import { Card } from "@components/common/Card";

export default function ImageMetadataViewer() {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);

  const load = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setFile(f);
    setLoading(true);
    try {
      const data = await EXIF.parse(f);
      setMetadata(data ?? {});
    } catch {
      setMetadata({});
    } finally {
      setLoading(false);
    }
  };

  const entries = metadata ? Object.entries(metadata) : [];

  return (
    <ToolPage
      toolId="image-metadata-viewer"
      workspace={
        !file ? (
          <UploadZone onFiles={load} accept={{ "image/*": [".jpg", ".jpeg", ".png", ".tiff", ".heic"] }} />
        ) : loading ? (
          <p className="text-dark-textSecondary">Reading metadata...</p>
        ) : entries.length === 0 ? (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-white font-medium mb-1">No metadata found</p>
            <p className="text-sm text-dark-textSecondary">This image doesn't contain EXIF or other metadata.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map(([key, value]) => (
              <Card key={key} padding="sm" variant="glass">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                  <span className="font-mono text-aha-cyan shrink-0 sm:w-40">{key}</span>
                  <span className="text-white break-all">
                    {typeof value === "object" ? JSON.stringify(value) : String(value)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )
      }
    />
  );
}