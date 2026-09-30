import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@hooks/useReducedMotion";
import { cn } from "@lib/cn";

interface AnimatedBackButtonProps {
  fallbackTo?: string;
  label?: string;
  className?: string;
}

export function AnimatedBackButton({
  fallbackTo = "/",
  label = "Back",
  className,
}: AnimatedBackButtonProps) {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const handleClick = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackTo);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={prefersReduced ? undefined : { x: -4 }}
      whileTap={prefersReduced ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-lg",
        "text-sm font-medium text-dark-textSecondary",
        "hover:text-white hover:bg-white/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
        "transition-colors duration-200",
        className
      )}
      aria-label={`Go ${label.toLowerCase()}`}
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      {label}
    </motion.button>
  );
}