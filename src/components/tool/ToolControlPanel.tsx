import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Download, BookOpen, Link2 } from "lucide-react";
import { cn } from "@lib/cn";

type TabId = "settings" | "download" | "howto" | "related";

interface ToolControlPanelProps {
  settings?: ReactNode;
  download?: ReactNode;
  howto?: ReactNode;
  related?: ReactNode;
  defaultTab?: TabId;
  className?: string;
}

const TABS: { id: TabId; label: string; Icon: typeof Settings2 }[] = [
  { id: "settings", label: "Options", Icon: Settings2 },
  { id: "download", label: "Save", Icon: Download },
  { id: "howto", label: "How to", Icon: BookOpen },
  { id: "related", label: "Related", Icon: Link2 },
];

export function ToolControlPanel({
  settings,
  download,
  howto,
  related,
  defaultTab = "settings",
  className,
}: ToolControlPanelProps) {
  const [active, setActive] = useState<TabId>(defaultTab);

  const panels: Record<TabId, ReactNode> = {
    settings,
    download,
    howto,
    related,
  };

  const availableTabs = TABS.filter((t) => panels[t.id]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Tool panel"
        className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-white/5 border border-white/10"
      >
        {availableTabs.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              onClick={() => setActive(id)}
              className={cn(
                "relative flex flex-col items-center gap-1 py-2.5 px-1 rounded-lg",
                "text-[10px] font-medium transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
                isActive
                  ? "text-white"
                  : "text-dark-textSecondary hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="tool-panel-tab"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute inset-0 rounded-lg bg-white/10"
                />
              )}
              <Icon className="w-4 h-4 relative z-10" aria-hidden="true" />
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Panel content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {panels[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}