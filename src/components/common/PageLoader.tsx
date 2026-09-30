import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-[9997] flex flex-col items-center justify-center bg-dark-bg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <Logo size="lg" showText={false} linkTo={null} />

        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-aha-cyan"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <p className="text-sm text-dark-textSecondary">Loading...</p>
      </motion.div>
    </div>
  );
}