import { useEffect } from "react";

const APP_NAME = "MedMaster";

/**
 * Sets the document title for a page. Appends " | MedMaster" to the provided title.
 * Usage: usePageTitle("BMS – Biologie") → "BMS – Biologie | MedMaster"
 */
export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = pageTitle ? `${pageTitle} | ${APP_NAME}` : APP_NAME;
    return () => {
      document.title = prev;
    };
  }, [pageTitle]);
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
