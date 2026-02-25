/**
 * Fokusmodus für die Kapitelansicht: Sidebar aus, TopBar minimal, nur Content + TOC.
 * Zustand persistent in localStorage.
 */

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "medmaster-focus-mode";

function readStored(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw === "true";
  } catch {
    return false;
  }
}

export function useFocusMode() {
  const [isFocusMode, setFocusModeState] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFocusModeState(readStored()), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(STORAGE_KEY, String(isFocusMode));
    } catch {
      /* ignore */
    }
  }, [isFocusMode]);

  const setFocusMode = useCallback((value: boolean) => {
    setFocusModeState(value);
  }, []);

  const toggleFocusMode = useCallback(() => {
    setFocusModeState((prev) => !prev);
  }, []);

  return { isFocusMode, setFocusMode, toggleFocusMode };
}
