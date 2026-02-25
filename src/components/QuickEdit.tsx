import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUICKEDIT_STORAGE_PREFIX = "medmaster-quickedit-";

export interface QuickEditProps<T extends object> {
  /** Daten, die als JSON bearbeitet werden (z. B. Unterkapitel-Objekt). */
  data: T;
  /** Eindeutige ID für lokales Speichern (z. B. Unterkapitel-ID). */
  storageKey: string;
  /** Nur im Development-Modus anzeigen. */
  devOnly?: boolean;
  /** Optionale Beschriftung für den Button-Tooltip. */
  label?: string;
}

export function QuickEdit<T extends object>({
  data,
  storageKey,
  devOnly = true,
  label = "Inhalt bearbeiten",
}: QuickEditProps<T>) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const isDev = import.meta.env.DEV;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) setText(JSON.stringify(data, null, 2));
  }, [open, data]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  if (devOnly && !isDev) return null;

  const handleSave = () => {
    try {
      const parsed = JSON.parse(text) as T;
      const key = `${QUICKEDIT_STORAGE_PREFIX}${storageKey}`;
      localStorage.setItem(key, JSON.stringify(parsed));
      console.log("--- Quick-Edit: JSON für Datendatei (Kopie in Konsole) ---");
      console.log(JSON.stringify(parsed, null, 2));
      console.log("--- Ende ---");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("[QuickEdit] Ungültiges JSON:", e);
      alert("Ungültiges JSON. Bitte Syntax prüfen.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        title={label}
        aria-label={label}
      >
        <Pencil className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-slate-200/80 dark:border-slate-700/50 shadow-xl card-glass overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/80 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-midnight dark:text-slate-100">
                  Quick-Edit
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 min-h-0 p-4">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-[50vh] min-h-[200px] p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-sm font-mono text-midnight dark:text-slate-100 placeholder:text-slate-400 resize-y focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="JSON …"
                  spellCheck={false}
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-200/80 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/30">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Speichert lokal &amp; gibt JSON in der Konsole aus (zum Kopieren in die
                  Datendatei).
                </span>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClose}
                    className="border-slate-200 dark:border-slate-700"
                  >
                    Abbrechen
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleSave}
                    className="bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1.5" />
                        In Konsole ausgegeben
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1.5" />
                        Speichern &amp; Konsole
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
