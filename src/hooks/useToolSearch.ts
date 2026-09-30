
import { useState } from "react";
export function useToolSearch() {
  const [query, setQuery] = useState("");
  return { query, setQuery };
}
