#!/usr/bin/env node

/**
 * Instagram Single-Image Poster via Graph API
 *
 * Posts question images to @medmaster_medat.
 * Format: Single image, A–D Umfrage, E in Kommentare.
 *
 * Usage:
 *   node scripts/post-instagram.mjs --day 1              # Post day 1
 *   node scripts/post-instagram.mjs --day 1 --dry        # Dry run
 *   node scripts/post-instagram.mjs --day 1,2,3          # Post multiple
 *
 * Env:
 *   IG_PAGE_TOKEN  - Page Access Token (from Graph API: page ID 990798194122764)
 *
 * Images must be deployed at medmaster.at/marketing/ first.
 */

const PAGE_TOKEN = process.env.IG_PAGE_TOKEN;
const IG_USER_ID = "17841446757059213";
const BASE_URL = "https://medmaster.at/marketing";
const API = "https://graph.facebook.com/v21.0";

const POSTS = [
  {
    day: 1,
    subject: "Biologie",
    image: "day-01-bio-question.png",
    question: "Welche Aussage über die Zellmembran trifft NICHT zu?",
  },
  {
    day: 2,
    subject: "Chemie",
    image: "day-02-chem-question.png",
    question: "Welche Bindung ist in Diamant vorherrschend?",
  },
  {
    day: 3,
    subject: "Physik",
    image: "day-03-phys-question.png",
    question: "Transformator: Verhältnis U₁/U₂ und N₁/N₂?",
  },
  {
    day: 4,
    subject: "Mathematik",
    image: "day-04-mathe-question.png",
    question: "200 Patienten, 80 Diabetes, 60 Hypertonie, 20 beide — wie viele mindestens eine?",
  },
  {
    day: 5,
    subject: "Biologie",
    image: "day-05-bio-question.png",
    question: "Welche Aussage zum Larynx (Kehlkopf) trifft NICHT zu?",
  },
  {
    day: 6,
    subject: "Chemie",
    image: "day-06-chem-question.png",
    question: "Welche Verbindung ist ein polares Molekül?",
  },
  {
    day: 7,
    subject: "Physik",
    image: "day-07-phys-question.png",
    question: "Welche Aussage zu ionisierender Strahlung ist richtig?",
  },
];

const SUBJECT_EMOJI = {
  Biologie: "🧬",
  Chemie: "⚗️",
  Physik: "⚡",
  Mathematik: "📐",
};

function buildCaption(post) {
  const emoji = SUBJECT_EMOJI[post.subject];
  return [
    `${emoji} MedAT-Frage: ${post.question}`,
    "",
    "Stimm ab: A–D in der Umfrage!",
    "Deine Antwort ist E? → Schreib\u2019s in die Kommentare! 💬",
    "",
    "🔗 Kostenlos üben: medmaster.at",
    `#MedAT #MedAT2026 #${post.subject} #Medizinstudium #BMS`,
  ].join("\n");
}

async function apiCall(url, params = {}) {
  const searchParams = new URLSearchParams({
    access_token: PAGE_TOKEN,
    ...params,
  });
  const res = await fetch(`${url}?${searchParams}`, { method: "POST" });
  const json = await res.json();
  if (json.error) throw new Error(`API Error: ${json.error.message}`);
  return json;
}

async function waitForMedia(containerId) {
  for (let i = 0; i < 30; i++) {
    const res = await fetch(
      `${API}/${containerId}?fields=status_code&access_token=${PAGE_TOKEN}`,
    );
    const json = await res.json();
    if (json.status_code === "FINISHED") return;
    if (json.status_code === "ERROR")
      throw new Error(`Media processing failed for ${containerId}`);
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error(`Timeout waiting for media ${containerId}`);
}

async function postImage(post, dry = false) {
  const caption = buildCaption(post);
  const imageUrl = `${BASE_URL}/${post.image}`;

  console.log(`\n📸 Day ${post.day} (${post.subject}): ${post.question}`);

  if (dry) {
    console.log("  [DRY RUN]");
    console.log(`  Image: ${imageUrl}`);
    console.log(`  Caption:\n${caption}\n`);
    return { id: "dry-run" };
  }

  console.log("  Creating media container...");
  const container = await apiCall(`${API}/${IG_USER_ID}/media`, {
    image_url: imageUrl,
    caption,
  });

  console.log("  Waiting for processing...");
  await waitForMedia(container.id);

  console.log("  Publishing...");
  const result = await apiCall(`${API}/${IG_USER_ID}/media_publish`, {
    creation_id: container.id,
  });

  console.log(`  ✅ Published! Post ID: ${result.id}`);
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry");
  const dayIdx = args.indexOf("--day");
  const dayArg = dayIdx >= 0 ? args[dayIdx + 1] : null;

  if (!PAGE_TOKEN) {
    console.error("❌ Set IG_PAGE_TOKEN environment variable first!");
    console.error('   export IG_PAGE_TOKEN="EAAU..."');
    process.exit(1);
  }

  if (!dayArg) {
    console.error("Usage: node scripts/post-instagram.mjs --day <1-7> [--dry]");
    console.error("       node scripts/post-instagram.mjs --day 1,2,3 [--dry]");
    process.exit(1);
  }

  const days = dayArg.split(",").map(Number);

  for (let i = 0; i < days.length; i++) {
    const post = POSTS.find((p) => p.day === days[i]);
    if (!post) {
      console.error(`Day ${days[i]} not found (valid: 1-7)`);
      process.exit(1);
    }
    await postImage(post, dry);

    if (!dry && i < days.length - 1) {
      console.log("  ⏳ Waiting 60s before next post...");
      await new Promise((r) => setTimeout(r, 60000));
    }
  }

  console.log("\n🎉 Done!");
}

main().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
