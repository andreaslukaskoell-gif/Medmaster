#!/usr/bin/env node
/**
 * MedMaster Instagram Auto-Poster
 *
 * Posts daily quiz cards to Instagram via the official Graph API.
 * Uploads the card PNG to a public URL first, then publishes.
 *
 * Setup (einmalig):
 *   1. Instagram-Account auf Business/Creator umstellen
 *   2. Facebook Page erstellen + mit IG verknüpfen
 *   3. Meta Developer App: https://developers.facebook.com/apps/
 *   4. Permissions: instagram_basic, instagram_content_publish, pages_show_list
 *   5. App Review einreichen
 *   6. Access Token generieren (Graph API Explorer oder Script)
 *
 * Env vars:
 *   IG_ACCESS_TOKEN   - Long-lived Instagram access token (60 Tage gültig)
 *   IG_USER_ID        - Instagram Business Account ID
 *   IMGBB_API_KEY     - (optional) imgBB API key für Bild-Upload
 *
 * Usage:
 *   node scripts/post-instagram.mjs                       # Post today's card
 *   node scripts/post-instagram.mjs --dry-run             # Preview without posting
 *   node scripts/post-instagram.mjs --subject biologie    # Force subject
 *   node scripts/post-instagram.mjs --image-url URL       # Use custom image URL
 *
 * Token holen (Graph API Explorer):
 *   1. https://developers.facebook.com/tools/explorer/
 *   2. App auswählen → Permissions: instagram_basic, instagram_content_publish
 *   3. "Generate Access Token" → Short-lived token kopieren
 *   4. Zu Long-lived tauschen:
 *      node scripts/refresh-ig-token.mjs --exchange SHORT_TOKEN
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const subjectIdx = args.indexOf("--subject");
const forceSubject = subjectIdx !== -1 ? args[subjectIdx + 1] : null;
const imageUrlIdx = args.indexOf("--image-url");
const customImageUrl = imageUrlIdx !== -1 ? args[imageUrlIdx + 1] : null;

const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;
const IG_USER_ID = process.env.IG_USER_ID;
const IMGBB_API_KEY = process.env.IMGBB_API_KEY;
const GRAPH_API_VERSION = "v21.0";
const GRAPH_API_BASE = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

// ── Subject config ────────────────────────────────────────────
const SUBJECT_EMOJIS = {
  biologie: "🧬",
  chemie: "⚗️",
  physik: "⚡",
  mathematik: "📊",
};

const SUBJECT_TAGS = {
  biologie: "#biologie #zellbiologie #genetik #humanbiologie",
  chemie: "#chemie #organischechemie #anorganischechemie #biochemie",
  physik: "#physik #mechanik #thermodynamik #optik",
  mathematik: "#mathematik #algebra #stochastik #analysis",
};

const SUBJECTS = ["biologie", "chemie", "physik", "mathematik"];
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

// ── Seeded random (same as other scripts) ─────────────────────
function dailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededPick(arr, seed) {
  let s = seed;
  s = (s * 1664525 + 1013904223) & 0x7fffffff;
  return arr[s % arr.length];
}

// ── Load questions ────────────────────────────────────────────
async function loadQuestions() {
  try {
    const mod = await import("tsx/esm/api");
    const bms = await mod.tsImport("../src/data/bms/index.ts", import.meta.url);
    return bms.allBmsQuestions;
  } catch {
    const bms = await import("../src/data/bms/index.ts");
    return bms.allBmsQuestions;
  }
}

// ── Pick today's question ─────────────────────────────────────
function pickDailyQuestion(questions, forceSubj) {
  const seed = dailySeed();
  const subject = forceSubj || SUBJECTS[seed % 4];
  const pool = questions.filter((q) => q.subject === subject);
  return seededPick(pool, seed);
}

// ── Generate caption ──────────────────────────────────────────
function generateCaption(q) {
  const emoji = SUBJECT_EMOJIS[q.subject];
  const label = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
  const tags = SUBJECT_TAGS[q.subject];
  const correctIdx = q.options.findIndex((o) => o.id === q.correctOptionId);
  const correctLabel = OPTION_LABELS[correctIdx];

  return [
    `${emoji} MedAT Tagesfrage — ${label}`,
    "",
    q.text,
    "",
    ...q.options.map((opt, i) => `${OPTION_LABELS[i]}) ${opt.text}`),
    "",
    "💡 Antwort: Wische zum nächsten Bild →",
    `(Oder schau in die Kommentare: ${correctLabel})`,
    "",
    "🎓 4.300+ Übungsfragen kostenlos auf medmaster.at",
    "Link in Bio!",
    "",
    "#medat #medizinstudium #aufnahmetest #medatübungsfragen",
    `#medatvorbereitung #medmaster ${tags}`,
    "#studieren #österreich #wien #graz #innsbruck #linz",
  ].join("\n");
}

// ── Upload image to public URL ────────────────────────────────
async function uploadToImgBB(imagePath) {
  if (!IMGBB_API_KEY) {
    throw new Error(
      "IMGBB_API_KEY not set. Get a free key at https://api.imgbb.com/ " +
      "or provide --image-url with a public URL."
    );
  }

  const imageData = readFileSync(imagePath);
  const base64 = imageData.toString("base64");

  const formData = new URLSearchParams();
  formData.append("key", IMGBB_API_KEY);
  formData.append("image", base64);
  formData.append("expiration", "86400"); // 24h (we only need it for the API call)

  const res = await fetch("https://api.imgbb.com/1/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`imgBB upload failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.data.url;
}

// ── Find today's card PNG ─────────────────────────────────────
function findTodaysCard(subject) {
  const date = new Date().toISOString().slice(0, 10);
  const cardsDir = resolve(ROOT, "marketing", "cards", date);

  // Find the question card for this subject
  const patterns = [
    resolve(cardsDir, `${subject}-01-question.png`),
    resolve(cardsDir, `${subject}-question.png`),
  ];

  for (const p of patterns) {
    if (existsSync(p)) return p;
  }

  return null;
}

// ── Instagram Graph API ───────────────────────────────────────
async function createMediaContainer(imageUrl, caption) {
  const params = new URLSearchParams({
    image_url: imageUrl,
    caption: caption,
    access_token: IG_ACCESS_TOKEN,
  });

  const res = await fetch(`${GRAPH_API_BASE}/${IG_USER_ID}/media`, {
    method: "POST",
    body: params,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Create container failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.id; // container/creation ID
}

async function publishMedia(containerId) {
  const params = new URLSearchParams({
    creation_id: containerId,
    access_token: IG_ACCESS_TOKEN,
  });

  const res = await fetch(`${GRAPH_API_BASE}/${IG_USER_ID}/media_publish`, {
    method: "POST",
    body: params,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Publish failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.id; // media ID
}

// Wait for container to be ready (can take a few seconds)
async function waitForContainer(containerId, maxWait = 30000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    const res = await fetch(
      `${GRAPH_API_BASE}/${containerId}?fields=status_code&access_token=${IG_ACCESS_TOKEN}`
    );
    const data = await res.json();

    if (data.status_code === "FINISHED") return true;
    if (data.status_code === "ERROR") {
      throw new Error(`Container error: ${JSON.stringify(data)}`);
    }

    // Wait 2s before checking again
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("Container processing timed out");
}

// ── Carousel (question + answer) ──────────────────────────────
async function createCarousel(questionUrl, answerUrl, caption) {
  // Step 1: Create child containers (no caption on children)
  const children = [];
  for (const url of [questionUrl, answerUrl]) {
    const params = new URLSearchParams({
      image_url: url,
      is_carousel_item: "true",
      access_token: IG_ACCESS_TOKEN,
    });

    const res = await fetch(`${GRAPH_API_BASE}/${IG_USER_ID}/media`, {
      method: "POST",
      body: params,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Carousel child failed (${res.status}): ${text}`);
    }

    const data = await res.json();
    children.push(data.id);
  }

  // Step 2: Create carousel container
  const params = new URLSearchParams({
    media_type: "CAROUSEL",
    caption: caption,
    access_token: IG_ACCESS_TOKEN,
  });
  // children must be comma-separated
  params.append("children", children.join(","));

  const res = await fetch(`${GRAPH_API_BASE}/${IG_USER_ID}/media`, {
    method: "POST",
    body: params,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Carousel container failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.id;
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  const questions = await loadQuestions();
  const q = pickDailyQuestion(questions, forceSubject);
  const caption = generateCaption(q);

  console.log(`📸 Instagram Post: ${q.id} (${q.subject})`);
  console.log(`   "${q.text.slice(0, 70)}..."`);

  if (isDryRun) {
    console.log("\n--- DRY RUN ---");
    console.log("\nCaption:");
    console.log(caption);
    console.log("\nTo actually post, set these env vars:");
    console.log("  IG_ACCESS_TOKEN  - from Graph API Explorer");
    console.log("  IG_USER_ID       - your Instagram Business Account ID");
    console.log("  IMGBB_API_KEY    - free key from api.imgbb.com");
    return;
  }

  if (!IG_ACCESS_TOKEN || !IG_USER_ID) {
    console.log("\n⚠️  Missing env vars. Showing preview:\n");
    console.log("Caption:");
    console.log(caption);
    console.log("\nRequired env vars:");
    console.log("  IG_ACCESS_TOKEN  - Long-lived token (60 Tage)");
    console.log("  IG_USER_ID       - Instagram Business Account ID");
    console.log("  IMGBB_API_KEY    - Für Bild-Upload (gratis: api.imgbb.com)");
    console.log("\nSetup-Anleitung: siehe Script-Header oder README");
    return;
  }

  // Find or use image URL
  let questionUrl = customImageUrl;
  let answerUrl = null;

  if (!questionUrl) {
    // Find today's generated cards
    const date = new Date().toISOString().slice(0, 10);
    const cardsDir = resolve(ROOT, "marketing", "cards", date);
    const subjectNum = SUBJECTS.indexOf(q.subject) + 1;

    const qCard = resolve(cardsDir, `${q.subject}-${String(subjectNum).padStart(2, "0")}-question.png`);
    const aCard = resolve(cardsDir, `${q.subject}-${String(subjectNum).padStart(2, "0")}-answer.png`);

    if (!existsSync(qCard)) {
      console.error(`❌ Card not found: ${qCard}`);
      console.error("   Run first: npx tsx scripts/generate-social-cards.mjs --all");
      process.exit(1);
    }

    console.log("📤 Uploading question card to imgBB...");
    questionUrl = await uploadToImgBB(qCard);
    console.log(`   → ${questionUrl}`);

    if (existsSync(aCard)) {
      console.log("📤 Uploading answer card to imgBB...");
      answerUrl = await uploadToImgBB(aCard);
      console.log(`   → ${answerUrl}`);
    }
  }

  // Post as carousel (question + answer) or single image
  let containerId;
  if (answerUrl) {
    console.log("📱 Creating carousel (Frage + Auflösung)...");
    containerId = await createCarousel(questionUrl, answerUrl, caption);
  } else {
    console.log("📱 Creating media container...");
    containerId = await createMediaContainer(questionUrl, caption);
  }

  console.log(`   Container ID: ${containerId}`);
  console.log("⏳ Waiting for processing...");
  await waitForContainer(containerId);

  console.log("🚀 Publishing...");
  const mediaId = await publishMedia(containerId);
  console.log(`✅ Published! Media ID: ${mediaId}`);
  console.log(`   https://www.instagram.com/p/${mediaId}/`);

  return { mediaId, questionId: q.id };
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
