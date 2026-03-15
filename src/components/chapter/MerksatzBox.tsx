import { cn } from "@/lib/utils";
import { sanitizeHtml } from "@/lib/security";

interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: {
    label: "Merke",
    bg: "bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10",
    border: "border-l-4 border-[var(--accent)]",
    title: "text-[var(--accent)]",
    body: "text-[var(--text-primary)]",
  },
  altfragen: {
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/15",
    border: "border-l-4 border-l-red-500",
    title: "text-red-700 dark:text-red-300",
    body: "text-[var(--text-primary)]",
  },
  klinisch: {
    label: "Klinischer Bezug",
    bg: "bg-amber-50 dark:bg-amber-900/15",
    border: "border-l-4 border-l-amber-500",
    title: "text-amber-700 dark:text-amber-300",
    body: "text-[var(--text-primary)]",
  },
  achtung: {
    label: "Achtung",
    bg: "bg-orange-50 dark:bg-orange-900/15",
    border: "border-l-4 border-l-orange-500",
    title: "text-orange-700 dark:text-orange-300",
    body: "text-[var(--text-primary)]",
  },
  tipp: {
    label: "Tipp",
    bg: "bg-purple-50 dark:bg-purple-900/15",
    border: "border-l-4 border-l-purple-500",
    title: "text-purple-700 dark:text-purple-300",
    body: "text-[var(--text-primary)]",
  },
};

export function MerksatzBox({ text, type = "merke" }: MerksatzBoxProps) {
  const c = config[type];
  return (
    <div className={cn("content-callout rounded-r-lg pl-5 pr-5 py-4 my-6", c.bg, c.border)}>
      <p className={cn("text-[13px] font-semibold uppercase tracking-wider mb-1.5", c.title)}>
        {c.label}
      </p>
      {/* Content is from our own chapter data files (not user input) — safe to render as HTML */}
      <p
        className={cn("text-sm leading-relaxed", c.body)}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }}
      />
    </div>
  );
}
