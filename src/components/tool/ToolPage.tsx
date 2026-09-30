import { type ReactNode } from "react";
import { ToolHeader } from "./ToolHeader";
import { ToolFrame } from "./ToolFrame";
import { ToolControlPanel } from "./ToolControlPanel";
import { ToolSEOContent } from "./ToolSEOContent";
import { ToolFeatures } from "./ToolFeatures";
import { ToolHowTo } from "./ToolHowTo";
import { ToolFAQ } from "./ToolFAQ";
import { RelatedTools } from "./RelatedTools";
import { ToolPrivacyNote } from "./ToolPrivacyNote";
import { AdSlot } from "@components/ads/AdSlot";
import { Divider } from "@components/common/Divider";
import { getCategoryBySlug } from "@data/categories";
import { getToolById } from "@data/tools";
import { cn } from "@lib/cn";

interface ToolPageProps {
  /** Tool registry ID, e.g. "jpg-to-png" */
  toolId: string;

  /** Main work area — upload zone, textarea, inputs, etc. */
  workspace: ReactNode;

  /** Optional preview below input */
  preview?: ReactNode;

  /** Optional result block */
  result?: ReactNode;

  /** True while processing */
  processing?: boolean;

  /** Panel tabs — সব optional */
  settingsPanel?: ReactNode;
  downloadPanel?: ReactNode;

  /** Called when "Try again" is clicked in error state */
  onRetry?: () => void;

  className?: string;
}

/**
 * Master shell for every tool page.
 * Handles:
 *  - Header + breadcrumb
 *  - 2-layer Photo Frame
 *  - SEO intro + features + how-to + FAQ
 *  - Related tools + ad slots
 *  - Privacy note
 */
export function ToolPage({
  toolId,
  workspace,
  preview,
  result,
  processing = false,
  settingsPanel,
  downloadPanel,
  className,
}: ToolPageProps) {
  const tool = getToolById(toolId);

  if (!tool) {
    return (
      <div className="py-16 text-center">
        <p className="text-dark-textSecondary">
          Tool not found: {toolId}
        </p>
      </div>
    );
  }

  const category = getCategoryBySlug(tool.category);

  return (
    <article className={cn("pb-8", className)}>
      {/* Header */}
      <ToolHeader
        name={tool.name}
        category={
          category
            ? { slug: category.slug, name: category.name }
            : { slug: tool.category, name: tool.category }
        }
        subtitle={tool.description}
        popular={tool.popular}
        newTool={tool.newTool}
      />

      {/* Main frame */}
      <ToolFrame
        workspace={workspace}
        controlPanel={
          <ToolControlPanel
            settings={settingsPanel}
            download={downloadPanel}
            howto={
              <ToolHowTo steps={tool.howTo ?? []} />
            }
            related={
              <RelatedTools
                ids={tool.relatedTools ?? []}
                currentToolId={tool.id}
              />
            }
          />
        }
      />

      {/* Preview + Result (below frame for wide visibility) */}
      {(preview || result) && (
        <div className="mt-6 space-y-4">
          {preview}
          {result}
        </div>
      )}

      {/* Privacy note */}
      <div className="mt-8">
        <ToolPrivacyNote />
      </div>

      <Divider label="About this tool" />

      {/* SEO content */}
      <ToolSEOContent intro={tool.longDescription ?? tool.description} />

      {/* Features */}
      {tool.features && tool.features.length > 0 && (
        <ToolFeatures features={tool.features} />
      )}

      {/* Ad slot */}
      <AdSlot slot="in-article" className="my-8" />

      {/* How-to (also appears here for SEO + scannability) */}
      {tool.howTo && tool.howTo.length > 0 && (
        <ToolHowTo steps={tool.howTo} />
      )}

      {/* FAQ */}
      {tool.faq && tool.faq.length > 0 && (
        <ToolFAQ faqs={tool.faq} />
      )}

      {/* Related (bottom, full width) */}
      {tool.relatedTools && tool.relatedTools.length > 0 && (
        <RelatedTools
          ids={tool.relatedTools}
          currentToolId={tool.id}
        />
      )}
    </article>
  );
}