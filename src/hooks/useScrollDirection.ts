
import { useState, useEffect } from "react";
export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  return scrollDir;
}
