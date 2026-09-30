import { motion } from "framer-motion";
import { ToolCard } from "@components/home/ToolCard";
import { tools } from "@data/tools";
import { cn } from "@lib/cn";

interface RelatedToolsProps {
  ids: string[];
  currentToolId: string;
  className?: string;
}

export function RelatedTools({
  ids,
  currentToolId,
  className,
}: RelatedToolsProps) {
  const related = ids
    .filter((id) => id !== currentToolId)
    .map((id) => tools.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section
      className={cn("py-8", className)}
      aria-labelledby="related-heading"
    >
      <h2
        id="related-heading"
        className="font-display text-h3 font-bold text-white mb-6"
      >
        Related tools
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {related.map((tool) => (
          <motion.div
            key={tool.id}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <ToolCard
              tool={{
                id: tool.id,
                name: tool.name,
                description: tool.description,
                path: tool.path,
                category: tool.category,
                icon: tool.icon,
                popular: tool.popular,
                newTool: tool.newTool,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}