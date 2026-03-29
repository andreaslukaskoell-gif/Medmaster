#!/usr/bin/env node
/**
 * Converts all JPG/PNG images in public/images/bms/ to WebP.
 * Keeps originals — adds .webp alongside each file.
 * Usage: node scripts/convert-to-webp.mjs
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { readdirSync, existsSync, statSync } from "fs";
import { join, extname, basename } from "path";

const DIR = "public/images/bms";
const QUALITY = 80;
const MAX_WIDTH = 1200;

async function main() {
  // Dynamic import sharp
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.log("Installing sharp...");
    const { execSync } = await import("child_process");
    execSync("npm install --no-save sharp", { stdio: "inherit" });
    sharp = (await import("sharp")).default;
  }

  const files = readdirSync(DIR).filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())
  );

  let converted = 0;
  let skipped = 0;
  let totalSaved = 0;

  for (const file of files) {
    const src = join(DIR, file);
    const dest = join(DIR, basename(file, extname(file)) + ".webp");

    if (existsSync(dest)) {
      skipped++;
      continue;
    }

    try {
      await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);

      const srcSize = statSync(src).size;
      const destSize = statSync(dest).size;
      const saved = srcSize - destSize;
      totalSaved += saved;
      converted++;

      const pct = Math.round((1 - destSize / srcSize) * 100);
      console.log(
        `  ${file} → ${basename(dest)} (${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB, -${pct}%)`
      );
    } catch (err) {
      console.error(`  ${file}: ${err.message}`);
    }
  }

  console.log(
    `\nDone: ${converted} converted, ${skipped} skipped, ${(totalSaved / 1024 / 1024).toFixed(1)}MB saved`
  );
}

main();
