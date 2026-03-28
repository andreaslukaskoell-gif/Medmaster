import { useEffect, useState } from "react";
import { X } from "lucide-react";

const shortcuts = [
  { keys: ["\u2190", "\u2192"], description: "Vorheriges / N\u00e4chstes Unterkapitel" },
  { keys: ["R"], description: "Quick Review Modus" },
  { keys: ["\u2318", "K"], description: "Suche \u00f6ffnen" },
  { keys: ["?"], description: "Tastaturk\u00fcrzel anzeigen" },
  { keys: ["Esc"], description: "Men\u00fc / Dialog schlie\u00dfen" },
];

export function KeyboardShortcutsOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[300] bg-black/30 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed inset-0 z-[301] flex items-center justify-center p-8"
        onClick={() => setOpen(false)}
      >
        <div
          className="card-glass p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Tastaturk&uuml;rzel</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {shortcuts.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <span className="text-sm text-[var(--text-secondary)]">{s.description}</span>
                <div className="flex items-center gap-1">
                  {s.keys.map((key, j) => (
                    <span key={j}>
                      {j > 0 && <span className="text-[var(--muted)] mx-0.5 text-xs">+</span>}
                      <kbd className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 text-xs font-medium text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-sm">
                        {key}
                      </kbd>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-6 text-center">
            Dr&uuml;cke{" "}
            <kbd className="px-1.5 py-0.5 text-[10px] bg-[var(--surface)] border border-[var(--border)] rounded">
              ?
            </kbd>{" "}
            zum Schlie&szlig;en
          </p>
        </div>
      </div>
    </>
  );
}
