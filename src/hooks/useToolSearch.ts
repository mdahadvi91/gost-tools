import { useMemo } from "react";
import { tools } from "@data/tools";
import type { Tool } from "@types/tool";

export function useToolSearch(
  query: string,
  category: string = "all"
): Tool[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        category === "all" || tool.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        tool.name,
        tool.description,
        tool.category,
        ...tool.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, category]);
}