import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Target, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { MedATSections } from "@/utils/parseMedATAndSummary";

const SECTION_ORDER: { key: keyof MedATSections; label: string }[] = [
  { key: "zentral", label: "Zentral prüfungsrelevant" },
  { key: "vertiefend", label: "Ergänzend vertiefend" },
  { key: "haeufigeFragen", label: "Häufige Fragen" },
  { key: "fallen", label: "Typische Prüfungsfallen / Verwechslungen" },
  { key: "zahlen", label: "Prüfungsrelevante Zahlen/Fakten" },
];

type MedATFocusCardProps = {
  sections: MedATSections;
  rawIntro?: string;
  defaultOpen?: boolean;
  className?: string;
};

export function MedATFocusCard({
  sections,
  rawIntro,
  defaultOpen = true,
  className,
}: MedATFocusCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasContent = SECTION_ORDER.some(({ key }) => sections[key]?.trim());

  if (!hasContent) return null;

  return (
    <Card
      className={cn(
        "overflow-hidden border-l-4 border-l-[var(--accent)] bg-[var(--card)] border border-[var(--border)]",
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
            <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--accent)]/10">
              <Target className="w-5 h-5 text-[var(--accent)]" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-[var(--text-primary)]">MedAT-Fokus</h2>
              {rawIntro && (
                <p className="text-sm text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                  Zur gezielten Prüfungsvorbereitung
                </p>
              )}
            </div>
            {open ? (
              <ChevronUp className="w-5 h-5 text-[var(--muted)] shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[var(--muted)] shrink-0" />
            )}
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="pt-0 px-5 pb-5 space-y-4">
            {SECTION_ORDER.map(({ key, label }) => {
              const value = sections[key as keyof MedATSections];
              if (!value?.trim()) return null;
              return (
                <div key={key} className="space-y-1.5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {label}
                  </h3>
                  <div
                    className={cn(
                      "prose prose-slate dark:prose-invert prose-sm max-w-none",
                      "text-[var(--text-secondary)] leading-relaxed"
                    )}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
