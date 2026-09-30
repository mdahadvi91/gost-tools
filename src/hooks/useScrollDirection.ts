import { useEffect, useState } from "react";

type Direction = "up" | "down";

export function useScrollDirection(threshold = 10): Direction {
  const [direction, setDirection] = useState<Direction>("down");
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setLastY(window.scrollY);

    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY;

      if (Math.abs(diff) < threshold) return;

      setDirection(diff > 0 ? "down" : "up");
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY, threshold]);

  return direction;
}