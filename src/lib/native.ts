/**
 * Native bridge utilities for Capacitor.
 * Falls back gracefully to web APIs when running in browser.
 */
import { Capacitor } from "@capacitor/core";

/** True when running inside native iOS/Android shell */
export const isNative = Capacitor.isNativePlatform();
export const isIOS = Capacitor.getPlatform() === "ios";
export const isAndroid = Capacitor.getPlatform() === "android";

// ── Status Bar ──────────────────────────────────────────────────────────────

let StatusBar: typeof import("@capacitor/status-bar").StatusBar | null = null;

async function getStatusBar() {
  if (!isNative) return null;
  if (!StatusBar) {
    const mod = await import("@capacitor/status-bar");
    StatusBar = mod.StatusBar;
  }
  return StatusBar;
}

export async function setStatusBarLight() {
  const sb = await getStatusBar();
  if (!sb) return;
  await sb.setStyle({ style: (await import("@capacitor/status-bar")).Style.Light });
  await sb.setBackgroundColor({ color: "#fafaf8" });
}

export async function setStatusBarDark() {
  const sb = await getStatusBar();
  if (!sb) return;
  await sb.setStyle({ style: (await import("@capacitor/status-bar")).Style.Dark });
  await sb.setBackgroundColor({ color: "#141414" });
}

// ── Keyboard ────────────────────────────────────────────────────────────────

export async function hideKeyboard() {
  if (!isNative) return;
  const { Keyboard } = await import("@capacitor/keyboard");
  await Keyboard.hide();
}

// ── Haptics (native, stronger than Vibration API) ───────────────────────────

export async function nativeHapticLight() {
  if (!isNative) return;
  const { Haptics, ImpactStyle } = await import("@capacitor/haptics");
  await Haptics.impact({ style: ImpactStyle.Light });
}

export async function nativeHapticMedium() {
  if (!isNative) return;
  const { Haptics, ImpactStyle } = await import("@capacitor/haptics");
  await Haptics.impact({ style: ImpactStyle.Medium });
}

export async function nativeHapticSuccess() {
  if (!isNative) return;
  const { Haptics, NotificationType } = await import("@capacitor/haptics");
  await Haptics.notification({ type: NotificationType.Success });
}

export async function nativeHapticError() {
  if (!isNative) return;
  const { Haptics, NotificationType } = await import("@capacitor/haptics");
  await Haptics.notification({ type: NotificationType.Error });
}

// ── App lifecycle ───────────────────────────────────────────────────────────

export async function setupAppListeners(onResume?: () => void) {
  if (!isNative) return;
  const { App } = await import("@capacitor/app");

  // Handle back button on Android
  App.addListener("backButton", ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back();
    } else {
      App.exitApp();
    }
  });

  // Handle app resume (e.g., coming back from background)
  if (onResume) {
    App.addListener("appStateChange", ({ isActive }) => {
      if (isActive) onResume();
    });
  }
}

// ── Share ────────────────────────────────────────────────────────────────────

export async function nativeShare(options: { title: string; text: string; url?: string }) {
  if (!isNative) {
    // Fallback to web share API
    if (navigator.share) {
      await navigator.share(options);
    }
    return;
  }
  const { Share } = await import("@capacitor/share");
  await Share.share(options);
}

// ── Open external URL ───────────────────────────────────────────────────────

export async function openInBrowser(url: string) {
  if (!isNative) {
    window.open(url, "_blank");
    return;
  }
  const { Browser } = await import("@capacitor/browser");
  await Browser.open({ url });
}
