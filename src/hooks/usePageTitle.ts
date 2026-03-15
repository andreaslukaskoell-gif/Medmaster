import { useEffect } from "react";
import { useStore } from "@/store/useStore";

const APP_NAME = "MedMaster";

/**
 * Builds the base app title prefix based on streak state:
 * - Active streak > 0 → "🔥 MedMaster"
 * - Daily challenge not done → "● MedMaster"
 * - Otherwise → "MedMaster"
 */
function useAppTitlePrefix(): string {
  const streak = useStore((s) => s.streak);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  if (streak > 0 && hasActivityToday) {
    return `🔥 ${APP_NAME}`;
  }
  if (!hasActivityToday) {
    return `● ${APP_NAME}`;
  }
  return APP_NAME;
}

/**
 * Sets the document title for a page. Appends " | <prefix>" to the provided title,
 * where prefix reflects streak state (fire emoji for active streak, dot for pending activity).
 * Usage: usePageTitle("BMS – Biologie") → "BMS – Biologie | 🔥 MedMaster"
 */
export function usePageTitle(pageTitle?: string) {
  const prefix = useAppTitlePrefix();
  useEffect(() => {
    const prev = document.title;
    document.title = pageTitle ? `${pageTitle} | ${prefix}` : prefix;
    return () => {
      document.title = prev;
    };
  }, [pageTitle, prefix]);
}

/**
 * Adds <meta name="robots" content="noindex, nofollow"> to auth-gated pages.
 * Defense-in-depth alongside robots.txt.
 */
export function useNoIndex() {
  useEffect(() => {
    const tag = document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, nofollow");
    document.head.appendChild(tag);
    return () => {
      document.head.removeChild(tag);
    };
  }, []);
}
