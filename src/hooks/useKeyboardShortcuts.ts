import { useEffect } from "react";

interface KeyboardShortcutOptions {
  /** Called when keys 1-5 are pressed. Index is 0-based. */
  onSelectOption?: (index: number) => void;
  /** Max number of options (default 5). Keys beyond this are ignored. */
  maxOptions?: number;
  /** Called when Enter is pressed */
  onConfirm?: () => void;
  /** Called when Space is pressed */
  onSpace?: () => void;
  /** Called when ArrowRight is pressed */
  onNext?: () => void;
  /** Called when ArrowLeft is pressed */
  onPrev?: () => void;
  /** Disable all shortcuts (e.g. when results are showing) */
  disabled?: boolean;
}

export function useKeyboardShortcuts({
  onSelectOption,
  maxOptions = 5,
  onConfirm,
  onSpace,
  onNext,
  onPrev,
  disabled = false,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    if (disabled) return;

    const handler = (e: KeyboardEvent) => {
      // Don't intercept when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toLowerCase();

      // Number keys 1-5 for option selection
      if (key >= "1" && key <= "5" && onSelectOption) {
        const idx = parseInt(key) - 1;
        if (idx < maxOptions) {
          onSelectOption(idx);
        }
        return;
      }

      if (key === "enter" && onConfirm) {
        e.preventDefault();
        onConfirm();
        return;
      }

      if (key === " " && onSpace) {
        e.preventDefault();
        onSpace();
        return;
      }

      if (key === "arrowright" && onNext) {
        onNext();
        return;
      }

      if (key === "arrowleft" && onPrev) {
        onPrev();
        return;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onSelectOption, maxOptions, onConfirm, onSpace, onNext, onPrev, disabled]);
}
