import { Link } from "react-router-dom";
import { cn } from "@lib/cn";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  linkTo?: string | null;
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { img: 28, text: "text-base" },
  md: { img: 36, text: "text-lg" },
  lg: { img: 48, text: "text-2xl" },
};

export function Logo({
  size = "md",
  showText = true,
  linkTo = "/",
  animated = true,
  className,
}: LogoProps) {
  const s = sizeMap[size];

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src="/images/logo/logo-icon-192.png"
        alt=""
        width={s.img}
        height={s.img}
        className={cn(
          "rounded-lg",
          animated && "animate-logo-pulse"
        )}
        aria-hidden="true"
      />
      {showText && (
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            s.text
          )}
        >
          AHADEX{" "}
          <span className="font-sans font-normal text-dark-textSecondary">
            Tools
          </span>
        </span>
      )}
    </span>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        aria-label="AHADEX Tools — Home"
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-love-rose rounded-lg"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

/* Default export for compatibility */
export default Logo;
