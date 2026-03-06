#!/usr/bin/env node
/** Upload rendered reel to Supabase Storage, then post to Instagram. Used by CI. */
import { readFileSync } from "node:fs";

const COMP = process.env.COMP;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const IG_TOKEN_RAW = process.env.IG_PAGE_TOKEN;

const FILE_MAP = {
  QuizChallenge: "quiz-challenge", TippDesTages: "tipp-des-tages",
  ZahlenfolgeChallenge: "zahlenfolge-challenge", WortRaetsel: "wort-raetsel",
  StatsUrgency: "stats-urgency", RichtigOderFalsch: "richtig-oder-falsch",
  ImplikationenChallenge: "implikationen-challenge", FigurenChallenge: "figuren-challenge",
};
const CAPTIONS = {
  QuizChallenge: "Schaffst du diese MedAT-Frage? 🧠\n\n98% antworten FALSCH — Kommentiere deinen Buchstaben!\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern für die Vorbereitung!\n\n📱 Gratis bis Ende März → medmaster.at\n\n#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien",
  TippDesTages: "Wusstest du das? 💡\n\nDie meisten wissen es NICHT!\n\n📩 Schick an jemanden der MedAT macht!\n🔖 Speichern für die Vorbereitung!\n\n📱 Gratis bis Ende März → medmaster.at\n\n#MedAT #MedAT2026 #Medizin #Lerntipps #BMS",
  ZahlenfolgeChallenge: "Findest du das Muster? 🔢\n\nKommentiere deine Lösung!\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern zum Üben!\n\n📱 KFF-Training gratis → medmaster.at\n\n#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung",
  WortRaetsel: "Welches Wort ergibt sich? 🔤\n\nKommentiere deine Lösung!\n\n📩 Wer aus deinen Freunden findet es?\n🔖 Speichern zum Üben!\n\n📱 Gratis bis Ende März → medmaster.at\n\n#MedAT #MedAT2026 #KFF #Wortflüssigkeit #BMS",
  StatsUrgency: "87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊\n\nWer ÜBEN kann, gewinnt.\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern als Reminder!\n\n📱 Gratis bis Ende März → medmaster.at\n\n#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps",
  RichtigOderFalsch: "Richtig oder Falsch? 3 MedAT-Aussagen 🧠\n\nKommentiere: 3/3, 2/3, 1/3 oder 0/3! 💬\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern für mehr Fragen!\n\n📱 Gratis testen → medmaster.at\n\n#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniInnsbruck",
  ImplikationenChallenge: "Welcher Schluss ist zwingend? 🧠\n\nKommentiere A–E!\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern zum Üben!\n\n📱 KFF-Training gratis → medmaster.at\n\n#MedAT #MedAT2026 #KFF #Implikationen #Logik",
  FigurenChallenge: "Welche Figur passt? 🧩\n\nKommentiere A–E!\n\n📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern zum Üben!\n\n📱 KFF-Training gratis → medmaster.at\n\n#MedAT #MedAT2026 #KFF #Figuren #Aufnahmeprüfung",
};

const IG_USER_ID = "17841446757059213";
const FB_PAGE_ID = "990798194122764";
const API = "https://graph.facebook.com/v21.0";

// 1. Upload to Supabase Storage
const fileName = `${Date.now()}-${FILE_MAP[COMP]}.mp4`;
const filePath = `marketing/reels/${FILE_MAP[COMP]}.mp4`;
const fileData = readFileSync(filePath);

await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
  method: "POST",
  headers: { Authorization: `Bearer ${ANON_KEY}`, apikey: ANON_KEY, "Content-Type": "application/json" },
  body: JSON.stringify({ id: "reels", name: "reels", public: true }),
}).catch(() => {});

const upRes = await fetch(`${SUPABASE_URL}/storage/v1/object/reels/${fileName}`, {
  method: "POST",
  headers: { Authorization: `Bearer ${ANON_KEY}`, apikey: ANON_KEY, "Content-Type": "video/mp4" },
  body: fileData,
});
if (!upRes.ok) { console.error("Upload failed:", await upRes.text()); process.exit(1); }
const videoUrl = `${SUPABASE_URL}/storage/v1/object/public/reels/${fileName}`;
console.log("Uploaded:", videoUrl);

// 2. Get page token
let token = IG_TOKEN_RAW;
try {
  const r = await fetch(`${API}/${FB_PAGE_ID}?fields=access_token&access_token=${token}`);
  const j = await r.json();
  if (j.access_token) token = j.access_token;
} catch {}

// 3. Create reel container
console.log("Creating container...");
const cRes = await fetch(`${API}/${IG_USER_ID}/media?` + new URLSearchParams({
  access_token: token, video_url: videoUrl, caption: CAPTIONS[COMP], media_type: "REELS", share_to_feed: "true",
}), { method: "POST" });
const container = await cRes.json();
if (container.error) { console.error(container.error.message); process.exit(1); }

// 4. Wait for processing
console.log("Processing...");
for (let i = 0; i < 60; i++) {
  const r = await fetch(`${API}/${container.id}?fields=status_code&access_token=${token}`);
  const s = await r.json();
  if (s.status_code === "FINISHED") break;
  if (s.status_code === "ERROR") { console.error("Processing failed"); process.exit(1); }
  await new Promise((r) => setTimeout(r, 3000));
}

// 5. Publish
console.log("Publishing...");
const pub = await fetch(`${API}/${IG_USER_ID}/media_publish?` + new URLSearchParams({
  access_token: token, creation_id: container.id,
}), { method: "POST" });
const result = await pub.json();
if (result.error) { console.error(result.error.message); process.exit(1); }
console.log("Published! Post ID:", result.id);
