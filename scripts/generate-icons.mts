#!/usr/bin/env npx tsx
/**
 * Generate all required app icons from the source SVG.
 *
 * Prerequisites:
 *   npm install sharp --save-dev
 *
 * Usage:
 *   npx tsx scripts/generate-icons.mts
 *
 * Generates:
 *   - iOS icons (AppIcon.appiconset contents)
 *   - Android adaptive icon (ic_launcher foreground)
 *   - PWA icons (various sizes)
 *   - Splash screen center logo
 */
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join } from "path";

// Sizes needed for iOS App Store
const IOS_SIZES = [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024];
// Sizes needed for Android
const ANDROID_SIZES = [
  { name: "mdpi", size: 48 },
  { name: "hdpi", size: 72 },
  { name: "xhdpi", size: 96 },
  { name: "xxhdpi", size: 144 },
  { name: "xxxhdpi", size: 192 },
];
// PWA icon sizes
const PWA_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

console.log(`
╔══════════════════════════════════════════════════════════════╗
║                  MedMaster Icon Generator                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  To generate all icons, you need:                            ║
║  1. Install sharp: npm install sharp --save-dev              ║
║  2. Provide a 1024x1024 source PNG at:                       ║
║     resources/icon-source.png                                ║
║                                                              ║
║  For now, this script generates the directory structure       ║
║  and Contents.json for iOS.                                  ║
╚══════════════════════════════════════════════════════════════╝
`);

// Create directory structure
const dirs = [
  "resources",
  "resources/ios",
  "resources/android",
  "resources/pwa",
];
for (const dir of dirs) {
  const p = join(process.cwd(), dir);
  if (!existsSync(p)) {
    mkdirSync(p, { recursive: true });
    console.log(`Created: ${dir}/`);
  }
}

// Generate iOS Contents.json for AppIcon.appiconset
const iosContentsJson = {
  images: [
    { size: "20x20", idiom: "iphone", scale: "2x", filename: "icon-40.png" },
    { size: "20x20", idiom: "iphone", scale: "3x", filename: "icon-60.png" },
    { size: "29x29", idiom: "iphone", scale: "2x", filename: "icon-58.png" },
    { size: "29x29", idiom: "iphone", scale: "3x", filename: "icon-87.png" },
    { size: "40x40", idiom: "iphone", scale: "2x", filename: "icon-80.png" },
    { size: "40x40", idiom: "iphone", scale: "3x", filename: "icon-120.png" },
    { size: "60x60", idiom: "iphone", scale: "2x", filename: "icon-120.png" },
    { size: "60x60", idiom: "iphone", scale: "3x", filename: "icon-180.png" },
    { size: "20x20", idiom: "ipad", scale: "1x", filename: "icon-20.png" },
    { size: "20x20", idiom: "ipad", scale: "2x", filename: "icon-40.png" },
    { size: "29x29", idiom: "ipad", scale: "1x", filename: "icon-29.png" },
    { size: "29x29", idiom: "ipad", scale: "2x", filename: "icon-58.png" },
    { size: "40x40", idiom: "ipad", scale: "1x", filename: "icon-40.png" },
    { size: "40x40", idiom: "ipad", scale: "2x", filename: "icon-80.png" },
    { size: "76x76", idiom: "ipad", scale: "1x", filename: "icon-76.png" },
    { size: "76x76", idiom: "ipad", scale: "2x", filename: "icon-152.png" },
    { size: "83.5x83.5", idiom: "ipad", scale: "2x", filename: "icon-167.png" },
    { size: "1024x1024", idiom: "ios-marketing", scale: "1x", filename: "icon-1024.png" },
  ],
  info: { version: 1, author: "MedMaster Icon Generator" },
};

const contentsPath = join(process.cwd(), "resources/ios/Contents.json");
writeFileSync(contentsPath, JSON.stringify(iosContentsJson, null, 2));
console.log("Created: resources/ios/Contents.json");

// Generate Android adaptive icon configuration
const androidIcLauncher = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
`;
writeFileSync(join(process.cwd(), "resources/android/ic_launcher.xml"), androidIcLauncher);

const androidColors = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#2d3a8c</color>
</resources>
`;
writeFileSync(join(process.cwd(), "resources/android/ic_launcher_colors.xml"), androidColors);
console.log("Created: resources/android/ic_launcher.xml + colors");

// Print instructions for manual icon generation
console.log(`
────────────────────────────────────────────────────────────
  NEXT STEPS — Icon Generation
────────────────────────────────────────────────────────────

  1. Create a 1024x1024 PNG icon and save it as:
     resources/icon-source.png

  2. Install sharp for automated resizing:
     npm install sharp --save-dev

  3. Run icon generation (or use an online tool):
     - https://www.appicon.co/ (drag & drop)
     - https://icon.kitchen/ (Material Design)
     - Figma: export at all required sizes

  4. Place generated icons:
     iOS:     ios/App/App/Assets.xcassets/AppIcon.appiconset/
     Android: android/app/src/main/res/mipmap-*/
     PWA:     public/icons/

  Required sizes:
    iOS:     ${IOS_SIZES.join(", ")} px
    Android: ${ANDROID_SIZES.map((s) => `${s.size}px (${s.name})`).join(", ")}
    PWA:     ${PWA_SIZES.join(", ")} px

────────────────────────────────────────────────────────────
`);
