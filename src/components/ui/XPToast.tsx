/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

type Toast = { id: number; amount: number };

let _toastId = 0;

export function showXPToast(amount: number): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("xp-toast", { detail: amount }));
}

export function XPToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((amount: number) => {
    const id = ++_toastId;
    setToasts((prev) => [...prev, { id, amount }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const amount = (e as CustomEvent<number>).detail;
      if (typeof amount === "number" && amount > 0) {
        addToast(amount);
      }
    };
    window.addEventListener("xp-toast", handler);
    return () => window.removeEventListener("xp-toast", handler);
  }, [addToast]);

  return (
    <div
      className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-[9999] flex flex-col gap-2 pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label="XP Benachrichtigungen"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="card-glass flex items-center gap-2 px-3 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 select-none"
          >
            <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" />+{toast.amount} XP
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
