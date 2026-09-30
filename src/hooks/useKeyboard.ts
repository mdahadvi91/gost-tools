import { useEffect } from "react";

interface KeyboardOptions {
  /** Fire even when the user is typing in an input/textarea */
  allowInInput?: boolean;
}

export function useKeyboard(
  key: string,
  handler: (e: KeyboardEvent) => void,
  options: KeyboardOptions = {}
) {
  const { allowInInput = false } = options;

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (!allowInInput) {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName?.toLowerCase();
        if (
          tag === "input" ||
          tag === "textarea" ||
          tag === "select" ||
          target?.isContentEditable
        ) {
          return;
        }
      }

      if (e.key.toLowerCase() === key.toLowerCase()) {
        handler(e);
      }
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [key, handler, allowInInput]);
}