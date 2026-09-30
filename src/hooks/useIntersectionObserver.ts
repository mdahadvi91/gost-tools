
import { useState } from "react";
export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  return { isIntersecting };
}
