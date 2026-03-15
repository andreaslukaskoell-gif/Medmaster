import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Listens for the Konami Code (↑↑↓↓←→←→BA) and dispatches a 'konami'
 * CustomEvent on window when the full sequence is entered.
 * Cleans up the event listener on unmount.
 */
export function useKonamiCode(): void {
  const progressRef = useRef<number>(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const expected = KONAMI_SEQUENCE[progressRef.current];
      if (e.key === expected) {
        progressRef.current += 1;
        if (progressRef.current === KONAMI_SEQUENCE.length) {
          progressRef.current = 0;
          window.dispatchEvent(new CustomEvent("konami"));
        }
      } else {
        // Reset, but check if the pressed key starts a new sequence
        progressRef.current = e.key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
