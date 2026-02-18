/**
 * Zentrale Sidebar-Layout-Werte: eine Stelle für Breite und Main-Offset.
 * Bei Änderung hier passen AppShell und Sidebar zusammen.
 */
export const SIDEBAR_MAIN_ML = "lg:ml-68" as const;
export const SIDEBAR_PANEL_WIDTH = "w-72 max-w-[85vw] lg:w-64" as const;
export const SIDEBAR_LG_POSITION =
  "lg:left-4 lg:top-4 lg:bottom-4 lg:h-[calc(100vh-2rem)] lg:rounded-2xl lg:shadow-xl lg:border lg:border-slate-200 dark:lg:border-white/10 lg:translate-x-0" as const;
