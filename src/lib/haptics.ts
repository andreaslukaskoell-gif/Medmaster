/**
 * Lightweight haptic feedback utility for mobile.
 * Uses native Capacitor Haptics when available, falls back to Vibration API.
 */
import { isNative } from "@/lib/native";

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
  if (isNative) {
    import("@capacitor/haptics").then(({ Haptics, ImpactStyle }) =>
      Haptics.impact({ style: ImpactStyle.Light })
    ).catch(() => {});
    return;
  }
  vibrate(12);
}

/** Medium tap — e.g. selecting an answer */
export function hapticMedium() {
  if (isNative) {
    import("@capacitor/haptics").then(({ Haptics, ImpactStyle }) =>
      Haptics.impact({ style: ImpactStyle.Medium })
    ).catch(() => {});
    return;
  }
  vibrate(25);
}

/** Success — e.g. correct answer */
export function hapticSuccess() {
  if (isNative) {
    import("@capacitor/haptics").then(({ Haptics, NotificationType }) =>
      Haptics.notification({ type: NotificationType.Success })
    ).catch(() => {});
    return;
  }
  vibrate([20, 60, 20]);
}

/** Error — e.g. wrong answer */
export function hapticError() {
  if (isNative) {
    import("@capacitor/haptics").then(({ Haptics, NotificationType }) =>
      Haptics.notification({ type: NotificationType.Error })
    ).catch(() => {});
    return;
  }
  vibrate(80);
}
