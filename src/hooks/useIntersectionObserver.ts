
import { useState } from "react";
export function useIntersectionObserver() {
  const [isIntersecting] = useState(false);
  return { isIntersecting };
}
