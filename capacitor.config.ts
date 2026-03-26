import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "at.medmaster.app",
  appName: "MedMaster",
  webDir: "dist",
  // Server config for live reload during development
  // Uncomment the server block for local dev with `npx cap run ios/android`
  // server: {
  //   url: "http://YOUR_LOCAL_IP:5173",
  //   cleartext: true,
  // },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 2000,
      launchFadeOutDuration: 300,
      backgroundColor: "#fafaf8",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: false,
      splashImmersive: false,
    },
    StatusBar: {
      style: "LIGHT",
      backgroundColor: "#fafaf8",
    },
    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
    scheme: "MedMaster",
    backgroundColor: "#fafaf8",
    allowsLinkPreview: true,
    scrollEnabled: true,
    // WebView configuration for better performance
    limitsNavigationsToAppBoundDomains: false,
  },
  android: {
    backgroundColor: "#fafaf8",
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    // Minimum SDK 24 (Android 7.0) for broad compatibility
    minWebViewVersion: "80.0.0",
  },
};

export default config;
