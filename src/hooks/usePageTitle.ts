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
