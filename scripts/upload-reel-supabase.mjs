#!/usr/bin/env node
/**
 * Upload a rendered reel MP4 to Supabase Storage (public bucket)
 * and return the public URL for Instagram API.
 *
 * Usage:
 *   node scripts/upload-reel-supabase.mjs marketing/reels/quiz-challenge.mp4
 *
 * Env: VITE_SUPABASE_URL, SUPABASE_SERVICE_KEY
 */

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "reels";

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("❌ Set VITE_SUPABASE_URL and SUPABASE_SERVICE_KEY");
  process.exit(1);
}

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node scripts/upload-reel-supabase.mjs <path-to-mp4>");
  process.exit(1);
}

const fileName = `${Date.now()}-${basename(filePath)}`;
const fileData = readFileSync(filePath);

// Ensure bucket exists (ignore error if already exists)
await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: BUCKET, name: BUCKET, public: true }),
}).catch(() => {});

// Upload file
const uploadRes = await fetch(
  `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${fileName}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "video/mp4",
    },
    body: fileData,
  }
);

if (!uploadRes.ok) {
  const err = await uploadRes.text();
  console.error(`❌ Upload failed: ${err}`);
  process.exit(1);
}

const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${fileName}`;
console.log(publicUrl);
