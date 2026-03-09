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
// ── Caption rotation system ──────────────────────────────────
// Multiple variants per reel type → random selection each post
// Prevents audience fatigue from seeing the same caption daily

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const CTA_BLOCKS = [
  "📩 Schick an deinen MedAT-Lernpartner!\n🔖 Speichern für die Vorbereitung!",
  "📩 Markiere jemanden der MedAT macht!\n🔖 Speichern & später nochmal anschauen!",
  "📩 Teilen mit deiner Lerngruppe!\n🔖 Speichern für die Wiederholung!",
];

const FOOTER = "\n\n📱 Gratis bis Ende März → medmaster.at";

function caption(hooks, hashtags) {
  const hook = pick(hooks);
  const cta = pick(CTA_BLOCKS);
  return `${hook}\n\n${cta}${FOOTER}\n\n${hashtags}`;
}

const CAPTIONS_FN = {
  QuizChallenge: () => caption([
    "Schaffst du diese MedAT-Frage? 🧠\n\n98% antworten FALSCH — Kommentiere deinen Buchstaben!",
    "Diese BMS-Frage kostet die meisten 1 Punkt. 🧠\n\nKommentiere A–E bevor du die Lösung siehst!",
    "Hier verlieren die meisten ihren Studienplatz. 🧠\n\nWelche Antwort wählst du? Kommentiere!",
    "Traust du dich? Eine MedAT-Frage, 5 Optionen, 1 richtig. 🧠\n\nKommentiere deinen Buchstaben!",
    "So sieht eine echte BMS-Frage aus. 🧠\n\nWürdest du den Punkt holen? Kommentiere A–E!",
  ], "#MedAT #MedAT2026 #Medizinstudium #BMS #MedUniWien"),

  TippDesTages: () => caption([
    "Wusstest du das? 💡\n\nDie meisten MedAT-Bewerber wissen es NICHT!",
    "Diesen Fakt vergessen 90% in der Prüfung. 💡\n\nSpeichere ihn dir JETZT!",
    "1 Fakt, der dir im MedAT Punkte bringt. 💡\n\nDie wenigsten kennen ihn.",
    "Hättest du das gewusst? 💡\n\nGenau sowas kommt im BMS-Teil dran.",
    "Merke dir DAS für den MedAT. 💡\n\nEin Detail, das den Unterschied macht.",
  ], "#MedAT #MedAT2026 #Medizin #Lerntipps #BMS"),

  ZahlenfolgeChallenge: () => caption([
    "Findest du das Muster? 🔢\n\nKommentiere deine Lösung BEVOR du die Auflösung siehst!",
    "KFF-Zahlenfolge: Erkennst du die Regel? 🔢\n\nKommentiere die nächste Zahl!",
    "Diese Zahlenfolge ist im MedAT dran. 🔢\n\nSchaffst du sie unter 30 Sekunden?",
    "Zahlenfolgen = geschenkte Punkte im KFF. 🔢\n\nAber nur wenn du das Muster siehst!",
    "90% brauchen zu lange für diese Zahlenfolge. 🔢\n\nWie schnell findest du die Regel?",
  ], "#MedAT #MedAT2026 #KFF #Zahlenfolgen #Aufnahmeprüfung"),

  WortRaetsel: () => caption([
    "Welches Wort ergibt sich? 🔤\n\nKommentiere deine Lösung!",
    "Ein Wort, 5 Buchstaben, wenige Sekunden Zeit. 🔤\n\nSchaffst du es?",
    "Wortflüssigkeit trainieren = KFF-Punkte sichern. 🔤\n\nFindest du das Wort?",
    "Wie schnell findest du das richtige Wort? 🔤\n\nDie meisten brauchen über 30 Sekunden.",
    "KFF-Wortflüssigkeit: Eines der Wörter passt. 🔤\n\nKommentiere es!",
  ], "#MedAT #MedAT2026 #KFF #Wortflüssigkeit #Aufnahmeprüfung"),

  StatsUrgency: () => caption([
    "87% fallen beim MedAT durch. Gehörst du zu den 13%? 📊\n\nWer ÜBEN kann, gewinnt.",
    "16.000 Bewerber. 1.850 Plätze. Deine Vorbereitung entscheidet. 📊",
    "Noch ~12 Wochen bis zum MedAT. Was hast du schon geschafft? 📊",
    "Die Top 13% machen eine Sache anders: Sie üben GEZIELT. 📊",
    "Jeder 8. bekommt einen Platz. Die anderen 7 haben zu wenig geübt. 📊",
  ], "#MedAT #MedAT2026 #Aufnahmeprüfung #Medizin #Lerntipps"),

  RichtigOderFalsch: () => caption([
    "Richtig oder Falsch? 3 MedAT-Aussagen 🧠\n\nKommentiere: 3/3, 2/3, 1/3 oder 0/3!",
    "3 Aussagen aus dem BMS. Wie viele kannst du? 🧠\n\nKommentiere dein Ergebnis!",
    "Teste dein BMS-Wissen: 3 Aussagen, richtig oder falsch? 🧠\n\nKommentiere deine Punktzahl!",
    "Die meisten schaffen nur 1/3. Und du? 🧠\n\nKommentiere ehrlich!",
    "Richtig oder Falsch — klingt einfach, oder? 🧠\n\nProbier's und kommentiere dein Ergebnis!",
  ], "#MedAT #MedAT2026 #BMS #Prüfungsvorbereitung #MedUniWien"),

  ImplikationenChallenge: () => caption([
    "Welcher Schluss ist zwingend? 🧠\n\nKommentiere A–E!",
    "Logisches Denken im MedAT: Erkennst du den Schluss? 🧠\n\nKommentiere!",
    "Implikationen = der schwerste KFF-Untertest. 🧠\n\nSchaffst du diese Aufgabe?",
    "2 Prämissen, 5 Optionen, 1 zwingende Schlussfolgerung. 🧠\n\nWelche ist es?",
    "Hier scheitern die meisten im KFF. 🧠\n\nKommentiere deinen Buchstaben!",
  ], "#MedAT #MedAT2026 #KFF #Implikationen #Logik"),

  FigurenChallenge: () => caption([
    "Welche Figur passt? 🧩\n\nKommentiere A–E!",
    "Figuren zusammensetzen: Siehst du es auf den ersten Blick? 🧩\n\nKommentiere!",
    "KFF-Figuren — einfach, wenn man's sieht. Schwer, wenn nicht. 🧩",
    "2 Teile, 1 richtige Figur. Welche? 🧩\n\nKommentiere A–E!",
    "Räumliches Denken im MedAT. 🧩\n\nFindest du die richtige Kombination?",
  ], "#MedAT #MedAT2026 #KFF #Figuren #Aufnahmeprüfung"),
};

// Generate caption for this run
const CAPTIONS = Object.fromEntries(
  Object.entries(CAPTIONS_FN).map(([k, fn]) => [k, fn()])
);

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
