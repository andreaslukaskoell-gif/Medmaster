import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

/**
 * Shows a banner when the service worker detects a new version.
 * Listens for SW_UPDATED message from sw.js.
 */
export function UpdateBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const handler = (event: MessageEvent) => {
      if (event.data?.type === "SW_UPDATED") {
        setShow(true);
      }
    };

    navigator.serviceWorker.addEventListener("message", handler);
    return () => navigator.serviceWorker.removeEventListener("message", handler);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--accent)] text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 safe-area-pt">
      <RefreshCw className="w-4 h-4" />
      <span>Neue Version verfügbar</span>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="underline font-semibold ml-1"
      >
        Jetzt aktualisieren
      </button>
    </div>
  );
}
