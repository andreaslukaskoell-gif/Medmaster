import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2 } from "lucide-react";
import { BadgeIcon } from "./BadgeIcon";
import { BADGE_DEFINITIONS } from "@/data/badges";
import type { BadgeTier } from "@/data/badges";
import { cn } from "@/lib/utils";
import { shareText, getBadgeShareText } from "@/lib/shareUtils";

interface BadgeUnlockModalProps {
  badgeId: string | null;
  onDismiss: () => void;
}

const MOTIVATIONAL_MESSAGES: Record<BadgeTier, string> = {
  bronze: "Kleiner Schritt, großer Fortschritt!",
  silver: "Du ziehst dein Ding durch – stark!",
  gold: "Absolute Spitzenklasse. So geht MedAT-Vorbereitung!",
};

export function BadgeUnlockModal({ badgeId, onDismiss }: BadgeUnlockModalProps) {
  const badge = badgeId ? BADGE_DEFINITIONS.find((b) => b.id === badgeId) : null;
  const visible = !!badge;
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible, onDismiss]);

  return (
    <AnimatePresence>
      {visible && badge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          onClick={onDismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="badge-unlock-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-md rounded-2xl overflow-hidden border border-white/20",
              "bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl",
              "ring-2 ring-primary-500/30"
            )}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 via-transparent to-violet-500/10 pointer-events-none" />
            <div className="relative p-8 text-center">
              <button
                type="button"
                onClick={onDismiss}
                className="absolute top-3 right-3 p-2 rounded-full text-slate-400 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ y: 8 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-4"
              >
                <BadgeIcon tier={badge.tier} earned size="lg" />
              </motion.div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-400 dark:text-primary-400 mb-1">
                Badge freigeschaltet
              </p>
              <h2 id="badge-unlock-title" className="text-xl font-bold text-white mb-2">
                {badge.name}
              </h2>
              <p className="text-slate-400 dark:text-slate-400 text-sm mb-4">{badge.description}</p>
              <p className="text-primary-300 dark:text-primary-400 text-sm font-medium">
                {MOTIVATIONAL_MESSAGES[badge.tier]}
              </p>
              <button
                type="button"
                onClick={async () => {
                  await shareText(getBadgeShareText(badge.name, badge.tier));
                  setShared(true);
                  setTimeout(() => setShared(false), 2000);
                }}
                className="mt-5 flex items-center gap-2 mx-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-sm transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {shared ? "Kopiert!" : "Teilen"}
              </button>
              <p className="text-xs text-slate-500 mt-3">Klicken oder Escape zum Schließen</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
