import { motion } from "framer-motion";

interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: {
    label: "Merke",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-400 dark:border-blue-600",
    title: "text-blue-800 dark:text-blue-300",
    body: "text-blue-900 dark:text-blue-200",
  },
  altfragen: {
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-400 dark:border-red-600",
    title: "text-red-800 dark:text-red-300",
    body: "text-red-900 dark:text-red-200",
  },
  klinisch: {
    label: "Klinischer Bezug",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-400 dark:border-amber-600",
    title: "text-amber-800 dark:text-amber-300",
    body: "text-amber-900 dark:text-amber-200",
  },
  achtung: {
    label: "Achtung",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-400 dark:border-orange-600",
    title: "text-orange-800 dark:text-orange-300",
    body: "text-orange-900 dark:text-orange-200",
  },
  tipp: {
    label: "Tipp",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-400 dark:border-purple-600",
    title: "text-purple-800 dark:text-purple-300",
    body: "text-purple-900 dark:text-purple-200",
  },
};

export function MerksatzBox({ text, type = "merke" }: MerksatzBoxProps) {
  const c = config[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${c.bg} border-l-4 ${c.border} pl-4 pr-4 py-3 my-5`}
    >
      <p className={`text-xs font-bold uppercase tracking-wider ${c.title} mb-1`}>{c.label}</p>
      <p
        className={`${c.body} text-sm leading-relaxed`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </motion.div>
  );
}
