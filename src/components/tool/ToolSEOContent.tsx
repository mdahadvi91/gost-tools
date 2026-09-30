import { type ReactNode } from "react";
import { cn } from "@lib/cn";

interface ToolSEOContentProps {
  intro: string;
  children?: ReactNode;
  className?: string;
}

export function ToolSEOContent({
  intro,
  children,
  className,
}: ToolSEOContentProps) {
  return (
    <section
      className={cn("prose-invert max-w-none", className)}
      aria-label="About this tool"
    >
      <p className="text-base text-dark-textSecondary leading-relaxed">
        {intro}
      </p>
      {children}
    </section>
  );
}