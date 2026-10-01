import { SearchX } from "lucide-react";
import { Button } from "@components/common/Button";

interface EmptySearchStateProps {
  query?: string;
  onClear?: () => void;
}

export function EmptySearchState({
  query,
  onClear,
}: EmptySearchStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center text-center py-16 px-4"
    >
      <div className="w-20 h-20 rounded-2xl bg-love-rose/8 border border-love-rose/20 flex items-center justify-center mb-6">
        <SearchX
          className="w-10 h-10 text-love-blush/60"
          aria-hidden="true"
        />
      </div>

      <h3 className="font-display text-xl font-semibold text-love-pearl mb-2">
        No tools found
      </h3>

      <p className="text-sm text-dark-textSecondary max-w-sm mb-6">
        {query
          ? `No results for "${query}". Try a different keyword or browse all tools.`
          : "No tools match your filter. Try a different category."}
      </p>

      {onClear && (
        <Button variant="secondary" onClick={onClear}>
          Clear filters
        </Button>
      )}
    </div>
  );
}