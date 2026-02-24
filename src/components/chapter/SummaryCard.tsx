import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bookmark, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type SummaryCardProps = {
  content: string;
  defaultOpen?: boolean;
  className?: string;
};

export function SummaryCard({ content, defaultOpen = true, className }: SummaryCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const trimmed = content?.trim();
  if (!trimmed) return null;

  return (
    <Card
      className={cn(
        "overflow-hidden border-l-4 border-l-[var(--success)] bg-[var(--card)] border border-[var(--border)]",
        className
      )}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <CardHeader className="pb-2 pt-5 px-5">
          <CollapsibleTrigger
            className={cn(
              "flex items-center gap-3 w-full text-left rounded-lg -my-2 py-2 -mx-1 px-1",
              "hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
            )}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--success)]/10">
              <Bookmark className="w-5 h-5 text-[var(--success)]" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Zusammenfassung (ultrakompakt)
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-0.5">Kompakt zum Wiederholen</p>
            </div>
            {open ? (
              <ChevronUp className="w-5 h-5 text-[var(--muted)] shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[var(--muted)] shrink-0" />
            )}
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="pt-0 px-5 pb-5">
            <div
              className={cn(
                "prose prose-slate dark:prose-invert prose-sm max-w-none",
                "text-[var(--text-secondary)] leading-relaxed",
                "prose-ul:my-2 prose-li:my-0.5 prose-p:my-1"
              )}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{trimmed}</ReactMarkdown>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
