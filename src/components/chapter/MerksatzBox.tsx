import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: {
    label: "Merke",
    bg: "bg-[var(--surface)]",
    border: "border-l-4 border-[var(--accent)]",
    title: "text-[var(--accent)]",
    body: "text-[var(--text-primary)]",
  },
  altfragen: {
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/15",
    border: "border-l-4 border-l-red-500",
    title: "text-red-700 dark:text-red-300",
    body: "text-red-900 dark:text-red-100",
  },
  klinisch: {
    label: "Klinischer Bezug",
    bg: "bg-amber-50 dark:bg-amber-900/15",
    border: "border-l-4 border-l-amber-500",
    title: "text-amber-800 dark:text-amber-300",
    body: "text-amber-900 dark:text-amber-100",
  },
  achtung: {
    label: "Achtung",
    bg: "bg-orange-50 dark:bg-orange-900/15",
    border: "border-l-4 border-l-orange-500",
    title: "text-orange-800 dark:text-orange-300",
    body: "text-orange-900 dark:text-orange-100",
  },
  tipp: {
    label: "Tipp",
    bg: "bg-purple-50 dark:bg-purple-900/15",
    border: "border-l-4 border-l-purple-500",
    title: "text-purple-700 dark:text-purple-300",
    body: "text-purple-900 dark:text-purple-100",
  },
};

export function MerksatzBox({ text, type = "merke" }: MerksatzBoxProps) {
  const c = config[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "content-callout rounded-r-[var(--radius)] border-l-4 pl-4 pr-4 py-3 my-5",
        c.bg,
        c.border
      )}
    >
      <p className={cn("text-xs font-semibold uppercase tracking-wider mb-1", c.title)}>
        {c.label}
      </p>
      <p
        className={cn("text-sm leading-relaxed", c.body)}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </motion.div>
  );
}
