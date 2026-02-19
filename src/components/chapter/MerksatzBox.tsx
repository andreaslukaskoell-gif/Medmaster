import { motion } from "framer-motion";

interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: {
    icon: "💡",
    label: "Merke",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-300 dark:border-amber-700",
    title: "text-amber-800 dark:text-amber-300",
    body: "text-amber-900 dark:text-amber-200",
  },
  altfragen: {
    icon: "🎯",
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-300 dark:border-red-700",
    title: "text-red-800 dark:text-red-300",
    body: "text-red-900 dark:text-red-200",
  },
  klinisch: {
    icon: "🏥",
    label: "Klinischer Bezug",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-300 dark:border-blue-700",
    title: "text-blue-800 dark:text-blue-300",
    body: "text-blue-900 dark:text-blue-200",
  },
  achtung: {
    icon: "⚠️",
    label: "Achtung",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-300 dark:border-orange-700",
    title: "text-orange-800 dark:text-orange-300",
    body: "text-orange-900 dark:text-orange-200",
  },
  tipp: {
    icon: "✨",
    label: "Tipp",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-300 dark:border-purple-700",
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
      className={`relative ${c.bg} backdrop-blur-sm border ${c.border} rounded-xl p-4 my-6 shadow-sm hover:shadow-md transition-shadow`}
    >
      <p className={`font-bold ${c.title} flex items-center gap-2`}>
        {c.icon} {c.label}
      </p>
      <p className={`${c.body} mt-1 text-sm leading-relaxed`} dangerouslySetInnerHTML={{ __html: text }} />
    </motion.div>
  );
}
