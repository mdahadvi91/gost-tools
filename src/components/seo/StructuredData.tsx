import { useEffect } from "react";

interface StructuredDataProps {
  /** Unique id to avoid duplicate injections */
  id?: string;
  /** Any valid JSON-LD object */
  data: Record<string, unknown>;
}

export function StructuredData({
  id = "ahadex-structured-data",
  data,
}: StructuredDataProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [id, data]);

  return null;
}