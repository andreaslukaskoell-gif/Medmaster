#!/usr/bin/env node
/**
 * Converts all JPG/PNG images in public/images/bms/ to WebP.
 * Keeps originals — adds .webp alongside each file.
 * Usage: node scripts/convert-to-webp.cjs
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIR = "public/images/bms";
const QUALITY = 80;
const MAX_WIDTH = 1200;

async function main() {
  const files = fs.readdirSync(DIR).filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(path.extname(f).toLowerCase())
  );

  let converted = 0;
  let skipped = 0;
  let totalSaved = 0;

  for (const file of files) {
    const src = path.join(DIR, file);
    const dest = path.join(DIR, path.basename(file, path.extname(file)) + ".webp");

    if (fs.existsSync(dest)) {
      skipped++;
      continue;
    }

    try {
      await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);

      const srcSize = fs.statSync(src).size;
      const destSize = fs.statSync(dest).size;
      const saved = srcSize - destSize;
      totalSaved += saved;
      converted++;

      const pct = Math.round((1 - destSize / srcSize) * 100);
      console.log(
        `  ${file} → ${path.basename(dest)} (${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB, -${pct}%)`
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
