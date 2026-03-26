/**
 * Lightweight haptic feedback utility for mobile.
 * Uses the Vibration API where supported, no-ops silently otherwise.
 */

function vibrate(pattern: number | number[]) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Silently ignore — some browsers block vibrate in certain contexts
    }
  }
}

/** Light tap — e.g. navigation, button press */
export function hapticLight() {
  vibrate(12);
}

/** Medium tap — e.g. selecting an answer */
export function hapticMedium() {
  vibrate(25);
}

/** Success — e.g. correct answer */
export function hapticSuccess() {
  vibrate([20, 60, 20]);
}

/** Error — e.g. wrong answer */
export function hapticError() {
  vibrate(80);
}
