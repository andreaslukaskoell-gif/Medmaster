import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { trackEvent } from "@/lib/analyticsTracker";

const DISMISSED_KEY = "mm_floating_cta_dismissed";

const PUBLIC_PATHS = [
  "/",
  "/blog",
  "/faq",
  "/medat-guide",
  "/medat-countdown",
  "/medat-punkte-rechner",
  "/medat-uebungsfragen",
  "/medat-kff-ueben",
  "/bms-stichwortliste-2026",
  "/challenge",
  "/lp/medat",
  "/lp/bms",
];

function isPublicPage(pathname: string): boolean {
  if (PUBLIC_PATHS.includes(pathname)) return true;
  if (pathname.startsWith("/blog/")) return true;
  if (pathname.startsWith("/medat-") && pathname.endsWith("-fragen")) return true;
  return false;
}

export function FloatingCTA() {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(DISMISSED_KEY) === "1");

  useEffect(() => {
    if (loading || user || dismissed) return;
    if (pathname === "/login" || !isPublicPage(pathname)) return;

    function onScroll() {
      const scrollPct =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPct >= 0.5);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check immediately in case already scrolled
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, user, dismissed, pathname]);

  // Hide for authenticated users or non-public pages
  if (loading || user || dismissed) return null;
  if (pathname === "/login" || !isPublicPage(pathname)) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-[900] flex items-center gap-2"
        >
          <Link
            to="/login"
            onClick={() => trackEvent("floating_cta_click")}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--accent)" }}
          >
            Kostenlos testen
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => {
              sessionStorage.setItem(DISMISSED_KEY, "1");
              setDismissed(true);
              setVisible(false);
            }}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--card)] text-[var(--muted)] shadow-md hover:text-[var(--text-primary)] transition-colors"
            aria-label="Schliessen"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
