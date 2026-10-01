import { useState, useMemo } from "react";
import { ToolPage } from "@components/tool/ToolPage";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = (text.match(/[.!?]+(?=\s|$)/g) || []).length;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime };
  }, [text]);

  const statsList = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "No spaces", value: stats.charsNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Read time", value: `${stats.readingTime} min` },
  ];

  return (
    <ToolPage
      toolId="word-counter"
      workspace={
        <div className="space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {statsList.map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="font-display font-bold text-2xl bg-logo-gradient bg-clip-text text-transparent">{s.value}</p>
                <p className="text-xs text-dark-textSecondary mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={12}
            placeholder="Paste or type your text here..."
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50 resize-y font-mono text-sm"
          />

          {text && (
            <button type="button" onClick={() => setText("")} className="text-sm text-dark-textSecondary hover:text-white">
              Clear text
            </button>
          )}
        </div>
      }
    />
  );
}