#!/usr/bin/env node
/**
 * generate-voiceover-reel.mjs
 *
 * Generates a BMSExplainerVoiceover reel for a given BMS topic.
 * Pipeline: TTS (piper) → normalize (ffmpeg) → assemble → subtitles → copy images → update Root.tsx → render
 *
 * Usage:
 *   node scripts/generate-voiceover-reel.mjs --topic "DNA-Replikation"
 *   node scripts/generate-voiceover-reel.mjs --topic-json '{"topic":"DNA-Replikation",...}'
 *   node scripts/generate-voiceover-reel.mjs --list
 *   node scripts/generate-voiceover-reel.mjs --batch
 */
import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const VIDEO_DIR = resolve(ROOT, "video");
const VIDEO_PUBLIC = resolve(VIDEO_DIR, "public");
const BMS_IMAGES = resolve(ROOT, "public", "images", "bms");
const OUT_DIR = resolve(ROOT, "marketing", "reels");
const TMP_DIR = resolve(ROOT, ".tmp-voiceover");
const ROOT_TSX = resolve(VIDEO_DIR, "src", "Root.tsx");

const FPS = 30;

// ── TOPICS ──────────────────────────────────────────────────────────────────
const TOPICS = [
  {
    id: "dna-replikation",
    name: "DNA-Replikation",
    subject: "Biologie",
    hook: "Deine DNA kopiert sich\njede Sekunde.",
    topicTitle: "DNA-Replikation",
    images: ["bio-dna-replikation.jpg", "bio-dna-nukleotide.jpg", "bio-dna-makrostruktur.jpg"],
    script: [
      { text: "Jede Zelle in deinem Körper muss sich teilen.", pause: "short" },
      { text: "Aber wie kopiert sie vorher die gesamte DNA, ohne Fehler?", pause: "dramatic" },
      { text: "Genau das passiert bei der Replikation.", pause: "short" },
      { text: "Zuerst trennt die Helikase den Doppelstrang auf, wie einen Reißverschluss.", pause: "long" },
      { text: "Dann setzt die Primase einen kurzen RNA-Primer.", pause: "short" },
      { text: "Jetzt kommt die DNA-Polymerase drei und baut neue Basen an, immer von fünf Strich nach drei Strich.", pause: "long" },
      { text: "Der Leitstrang läuft durchgehend.", pause: "short" },
      { text: "Aber der Folgestrang wird in kleinen Stücken gebaut, den Okazaki-Fragmenten.", pause: "dramatic" },
      { text: "Die Polymerase eins ersetzt die Primer.", pause: "short" },
      { text: "Und die Ligase klebt alles zusammen.", pause: "long" },
      { text: "Das Ergebnis? Zwei identische DNA-Moleküle.", pause: "short" },
      { text: "Jeder neue Strang enthält einen alten und einen neuen Teil.", pause: "long" },
      { text: "Das nennt man semikonservativ.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "mitose",
    name: "Mitose",
    subject: "Biologie",
    hook: "Eine Zelle wird zu zweien.\nAber wie?",
    topicTitle: "Mitose",
    images: ["bio-mitose-phasen.jpg", "bio-zellzyklus.jpg", "bio-homologe-chromosomen.jpg"],
    script: [
      { text: "Stell dir vor, eine Zelle muss sich teilen.", pause: "short" },
      { text: "Aber die DNA ist meterlang, chaotisch im Kern verteilt.", pause: "long" },
      { text: "Wie bekommt man das sauber in zwei Hälften?", pause: "dramatic" },
      { text: "Dafür gibt es die Mitose.", pause: "short" },
      { text: "In der Prophase verdichtet sich die DNA zu sichtbaren Chromosomen.", pause: "long" },
      { text: "In der Metaphase reihen sie sich in der Mitte auf, an der Äquatorialebene.", pause: "long" },
      { text: "Dann die Anaphase: Die Schwesterchromatiden werden auseinandergezogen.", pause: "short" },
      { text: "Und in der Telophase bilden sich zwei neue Kerne.", pause: "long" },
      { text: "Zum Schluss teilt sich die Zelle, das ist die Zytokinese.", pause: "short" },
      { text: "Das Ergebnis: zwei genetisch identische Tochterzellen.", pause: "dramatic" },
      { text: "Identisch, nicht durchmischt.", pause: "short" },
      { text: "Die Eselsbrücke: Pro, Meta, Ana, Telo.", pause: "long" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "enzyme",
    name: "Enzyme",
    subject: "Chemie",
    hook: "Ohne Enzyme wärst du\nin Sekunden tot.",
    topicTitle: "Enzyme",
    images: ["ch-enzyme.jpg", "ch-enzymatische-reaktion.jpg", "ch-proteinstruktur.jpg"],
    script: [
      { text: "In deinem Körper laufen tausende Reaktionen pro Sekunde.", pause: "short" },
      { text: "Ohne Beschleunigung wäre jede einzelne viel zu langsam.", pause: "long" },
      { text: "Wie schafft der Körper das?", pause: "dramatic" },
      { text: "Mit Enzymen, biologischen Katalysatoren.", pause: "short" },
      { text: "Sie senken die Aktivierungsenergie, ohne selbst verbraucht zu werden.", pause: "long" },
      { text: "Jedes Enzym hat ein aktives Zentrum, wie ein Schloss.", pause: "short" },
      { text: "Nur das passende Substrat, der Schlüssel, wird gebunden.", pause: "long" },
      { text: "Das nennt man Substratspezifität.", pause: "short" },
      { text: "Temperatur, pH-Wert und Hemmstoffe beeinflussen die Aktivität.", pause: "dramatic" },
      { text: "Zu heiß? Das Enzym denaturiert, die Struktur geht kaputt.", pause: "long" },
      { text: "Kompetitive Hemmung blockiert das aktive Zentrum direkt.", pause: "short" },
      { text: "Allosterische Hemmung verändert die Form von außen.", pause: "long" },
      { text: "Enzyme beschleunigen, werden aber nie verbraucht. Das ist der Schlüssel.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "membrantransport",
    name: "Membrantransport",
    subject: "Biologie",
    hook: "Deine Zelle entscheidet,\nwas rein darf.",
    topicTitle: "Membrantransport",
    images: ["bio-diffusion.jpg", "bio-natrium-kalium-pumpe.jpg", "bio-osmose.jpg"],
    script: [
      { text: "Die Zellmembran ist nicht einfach eine Wand.", pause: "short" },
      { text: "Sie ist ein Türsteher, der genau kontrolliert, was rein und raus darf.", pause: "long" },
      { text: "Aber wie funktioniert das?", pause: "dramatic" },
      { text: "Kleine Moleküle wie Sauerstoff diffundieren einfach durch.", pause: "short" },
      { text: "Das ist passiver Transport, ohne Energie, bergab im Konzentrationsgefälle.", pause: "long" },
      { text: "Größere Moleküle brauchen Kanalproteine oder Carrier.", pause: "short" },
      { text: "Immer noch passiv, solange es bergab geht.", pause: "long" },
      { text: "Aber was, wenn die Zelle etwas gegen das Gefälle transportieren muss?", pause: "dramatic" },
      { text: "Dann braucht sie Energie. ATP.", pause: "short" },
      { text: "Das berühmteste Beispiel: die Natrium-Kalium-Pumpe.", pause: "long" },
      { text: "Drei Natrium raus, zwei Kalium rein, ein ATP verbraucht.", pause: "short" },
      { text: "Die einfache Regel: Passiv ist bergab, kostet nichts.", pause: "long" },
      { text: "Aktiv ist bergauf, kostet ATP.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "blutkreislauf",
    name: "Blutkreislauf",
    subject: "Biologie",
    hook: "Arterien führen sauerstoffreiches\nBlut. Oder?",
    topicTitle: "Blutkreislauf",
    images: [
      "bio-herz-kreislauf.jpg",
      "bio-herz-position.jpg",
      "bio-herz-oberflaeche.jpg",
      "bio-herzwand.jpg",
      "bio-herz-kreislauf.jpg",
    ],
    script: [
      { text: "Arterien führen sauerstoffreiches Blut. Oder?", pause: "short" },
      { text: "Im MedAT kostet dich genau dieser Satz Punkte.", pause: "dramatic" },
      { text: "Hier ist warum.", pause: "short" },
      { text: "Arterie bedeutet nur eins: Gefäß, das Blut vom Herzen wegtransportiert.", pause: "long" },
      { text: "Vene: Gefäß zum Herzen hin.", pause: "short" },
      { text: "Sauerstoff? Spielt für die Definition keine Rolle.", pause: "dramatic" },
      { text: "Und das ändert alles.", pause: "short" },
      { text: "Dein rechter Ventrikel drückt sauerstoffarmes Blut in die Lungenarterie.", pause: "long" },
      { text: "Ja, Arterie. Aber sauerstoffarm. Weil die Definition rein anatomisch ist.", pause: "dramatic" },
      { text: "In der Lunge passiert der Gasaustausch. CO2 raus, O2 rein.", pause: "long" },
      { text: "Zurück fließt das Blut über die Lungenvenen, jetzt sauerstoffreich, in den linken Vorhof.", pause: "long" },
      { text: "Das ist der kleine Kreislauf. Vom rechten Herz zur Lunge und zurück.", pause: "dramatic" },
      { text: "Der große Kreislauf startet links. Linker Ventrikel, Aorta, ganzer Körper.", pause: "long" },
      { text: "Zurück über die Hohlvenen ins rechte Herz.", pause: "long" },
      { text: "Eine Regel, die dir Punkte sichert: Arterie heißt weg vom Herzen. Nicht sauerstoffreich.", pause: "dramatic" },
      { text: "Merk dir das. Alle BMS-Themen aufbereitet auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "nervensystem",
    name: "Nervensystem",
    subject: "Biologie",
    hook: "Ein Signal rast mit\n400 km/h durch dich.",
    topicTitle: "Nervensystem",
    images: ["bio-neuron.jpg", "bio-synapse.jpg", "bio-myelinscheide.jpg"],
    script: [
      { text: "Du berührst eine heiße Herdplatte.", pause: "short" },
      { text: "In Millisekunden zieht deine Hand zurück, noch bevor du den Schmerz fühlst.", pause: "long" },
      { text: "Wie ist das möglich?", pause: "dramatic" },
      { text: "Nervenzellen, Neuronen, leiten elektrische Signale weiter.", pause: "short" },
      { text: "Am Dendriten kommt das Signal an.", pause: "short" },
      { text: "Am Axon wird es weitergeleitet, manchmal über einen Meter lang.", pause: "long" },
      { text: "Die Myelinscheide isoliert das Axon wie eine Gummischicht um ein Kabel.", pause: "short" },
      { text: "Dadurch springt das Signal von Schnürring zu Schnürring.", pause: "dramatic" },
      { text: "Das nennt man saltatorische Erregungsleitung, und es ist extrem schnell.", pause: "long" },
      { text: "An der Synapse wird das Signal chemisch übertragen.", pause: "short" },
      { text: "Neurotransmitter springen über den synaptischen Spalt zum nächsten Neuron.", pause: "long" },
      { text: "Elektrisch am Axon, chemisch an der Synapse.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "atmung",
    name: "Atmung",
    subject: "Biologie",
    hook: "Du atmest 20.000 Mal\nam Tag, ohne nachzudenken.",
    topicTitle: "Atmung",
    images: ["bio-atemwege.jpg", "bio-alveolen.jpg", "bio-lunge.jpg"],
    script: [
      { text: "Einatmen, ausatmen. Klingt simpel.", pause: "short" },
      { text: "Aber was passiert wirklich in deiner Lunge?", pause: "long" },
      { text: "Und warum ist das so prüfungsrelevant?", pause: "dramatic" },
      { text: "Die Luft strömt durch Nase, Rachen, Kehlkopf und Luftröhre nach unten.", pause: "long" },
      { text: "Die Luftröhre teilt sich in zwei Bronchien, dann immer feiner in Bronchiolen.", pause: "short" },
      { text: "Am Ende sitzen dreihundert Millionen Alveolen, winzige Lungenbläschen.", pause: "long" },
      { text: "Hier passiert der Gasaustausch.", pause: "dramatic" },
      { text: "Sauerstoff diffundiert durch die hauchdünne Wand ins Blut.", pause: "short" },
      { text: "CO2 geht den umgekehrten Weg, raus in die Atemluft.", pause: "long" },
      { text: "Das Zwerchfell zieht sich zusammen, der Brustkorb weitet sich, Luft strömt ein.", pause: "short" },
      { text: "Entspannt sich das Zwerchfell, wird die Luft wieder rausgedrückt.", pause: "long" },
      { text: "Alveolen sind der Ort des Gasaustausches, nicht die Bronchien.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "ph-wert",
    name: "pH-Wert",
    subject: "Chemie",
    hook: "Eine Stufe auf der pH-Skala\nist zehnmal so viel.",
    topicTitle: "pH-Wert",
    images: ["ch-ph-skala.jpg", "ch-loesungen.jpg", "ch-aminosaeure.jpg"],
    script: [
      { text: "pH sieben ist neutral. pH sechs ist sauer. Soweit, so klar.", pause: "short" },
      { text: "Aber wie viel saurer ist pH sechs als pH sieben?", pause: "long" },
      { text: "Nicht ein bisschen. Zehnmal so viel.", pause: "dramatic" },
      { text: "Der pH-Wert ist logarithmisch.", pause: "short" },
      { text: "pH gleich minus Logarithmus der Wasserstoffionen-Konzentration.", pause: "long" },
      { text: "Jede Stufe nach unten bedeutet zehnmal mehr H-Plus-Ionen.", pause: "short" },
      { text: "pH fünf ist also hundertmal saurer als pH sieben.", pause: "long" },
      { text: "Unter sieben ist sauer, über sieben ist basisch.", pause: "short" },
      { text: "Dein Blut hat pH sieben Komma vier. Selbst kleine Abweichungen sind gefährlich.", pause: "dramatic" },
      { text: "Deshalb hat der Körper Puffersysteme, zum Beispiel den Bicarbonat-Puffer.", pause: "long" },
      { text: "Er fängt überschüssige Säure ab und hält den pH stabil.", pause: "short" },
      { text: "Die Formel: pH gleich minus log von H-Plus. Jede Stufe ist Faktor zehn.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "osmose",
    name: "Osmose",
    subject: "Biologie",
    hook: "Wasser wandert von selbst\ndurch deine Zellen.",
    topicTitle: "Osmose",
    images: ["bio-osmose.jpg", "bio-zellmembran-bilayer.jpg", "bio-diffusion.jpg"],
    script: [
      { text: "Leg eine Traube in Zuckerwasser, und sie schrumpft.", pause: "short" },
      { text: "Leg sie in reines Wasser, und sie platzt fast.", pause: "long" },
      { text: "Warum passiert das?", pause: "dramatic" },
      { text: "Das ist Osmose.", pause: "short" },
      { text: "Wasser bewegt sich durch eine halbdurchlässige Membran.", pause: "long" },
      { text: "Immer von der Seite mit weniger gelösten Teilchen zur Seite mit mehr.", pause: "short" },
      { text: "Es will den Konzentrationsunterschied ausgleichen.", pause: "long" },
      { text: "In einer hypotonischen Lösung strömt Wasser in die Zelle, sie schwillt an.", pause: "dramatic" },
      { text: "In einer hypertonischen Lösung fließt Wasser raus, die Zelle schrumpft.", pause: "long" },
      { text: "In einer isotonischen Lösung bleibt alles im Gleichgewicht.", pause: "short" },
      { text: "Deshalb bekommt man im Krankenhaus isotonische Kochsalzlösung.", pause: "long" },
      { text: "Hypotonisch: Zelle schwillt. Hypertonisch: Zelle schrumpft. Isotonisch: Gleichgewicht.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
  {
    id: "niere",
    name: "Niere",
    subject: "Biologie",
    hook: "Deine Nieren filtern\n1.700 Liter Blut am Tag.",
    topicTitle: "Niere",
    images: ["bio-niere.jpg", "bio-nephron-blutfluss.jpg", "bio-harnblase.jpg"],
    script: [
      { text: "Dein Blut wird jeden Tag komplett gefiltert, fast sechzigmal.", pause: "short" },
      { text: "Aber wohin geht der ganze Abfall?", pause: "long" },
      { text: "Genau. In die Nieren.", pause: "dramatic" },
      { text: "Jede Niere enthält etwa eine Million Nephrone.", pause: "short" },
      { text: "Das Nephron ist die funktionelle Einheit der Niere.", pause: "long" },
      { text: "Zuerst wird das Blut im Glomerulus filtriert, ein Netz aus feinen Kapillaren.", pause: "long" },
      { text: "Dabei entsteht der Primärharn, etwa hundertachtzig Liter pro Tag.", pause: "short" },
      { text: "Das ist viel zu viel. Also wird im Tubulus das meiste zurückgeholt.", pause: "dramatic" },
      { text: "Wasser, Glucose, Aminosäuren, alles, was der Körper noch braucht.", pause: "long" },
      { text: "Am Ende bleiben nur ein bis zwei Liter Urin übrig.", pause: "short" },
      { text: "Die Niere reguliert auch den Blutdruck, über das Renin-Angiotensin-System.", pause: "long" },
      { text: "Glomerulus filtert, Tubulus holt zurück. Von hundertachtzig auf zwei Liter.", pause: "dramatic" },
      { text: "Merk dir das. Mehr auf mett, master, punkt, ah, teh.", pause: "long" },
    ],
  },
];

// Pause durations in seconds
const PAUSE_DURATIONS = {
  short: 0.25,
  long: 0.55,
  dramatic: 0.80,
};

// ── CLI parsing ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

function getArg(name) {
  const idx = args.indexOf(name);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(name);

if (hasFlag("--list")) {
  console.log("Available topics:\n");
  for (const t of TOPICS) {
    console.log(`  ${t.id.padEnd(20)} ${t.name} (${t.subject})`);
  }
  console.log(`\nTotal: ${TOPICS.length} topics`);
  process.exit(0);
}

if (hasFlag("--batch")) {
  console.log(`Batch mode: generating ${TOPICS.length} reels...\n`);
  for (const t of TOPICS) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Topic: ${t.name}`);
    console.log("=".repeat(60));
    try {
      await generateReel(t, `bms-${t.id}-voiceover.mp4`);
    } catch (err) {
      console.error(`FAILED: ${t.name} — ${err.message}`);
    }
  }
  console.log("\nBatch complete.");
  process.exit(0);
}

// Single topic mode
const topicJson = getArg("--topic-json");
const topicName = getArg("--topic");

let topic;
if (topicJson) {
  const cfg = JSON.parse(topicJson);
  topic = TOPICS.find((t) => t.id === cfg.topic || t.name === cfg.topic || t.id === cfg.id);
  if (!topic) {
    console.error(`Unknown topic: ${cfg.topic || cfg.id}`);
    process.exit(1);
  }
} else if (topicName) {
  topic = TOPICS.find(
    (t) => t.name.toLowerCase() === topicName.toLowerCase() || t.id === topicName.toLowerCase()
  );
  if (!topic) {
    console.error(`Unknown topic: "${topicName}". Use --list to see available topics.`);
    process.exit(1);
  }
} else {
  console.error("Usage: --topic <name> | --topic-json <json> | --list | --batch");
  process.exit(1);
}

await generateReel(topic, "bms-explainer-voiceover.mp4");

// ── Main pipeline ───────────────────────────────────────────────────────────
async function generateReel(topic, outputFilename) {
  console.log(`\nGenerating reel: ${topic.name} (${topic.subject})`);

  // Clean up tmp
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
  mkdirSync(TMP_DIR, { recursive: true });
  mkdirSync(VIDEO_PUBLIC, { recursive: true });
  mkdirSync(OUT_DIR, { recursive: true });

  // ── Step 1: Generate TTS per sentence ───────────────────────────────────
  console.log("  [1/7] Generating TTS per sentence...");
  const segmentFiles = [];
  for (let i = 0; i < topic.script.length; i++) {
    const sentence = topic.script[i].text;
    const outWav = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-raw.wav`);
    generateTTS(sentence, outWav);
    segmentFiles.push(outWav);
  }

  // ── Step 2: Normalize each segment ──────────────────────────────────────
  console.log("  [2/7] Normalizing audio segments...");
  const normalizedFiles = [];
  for (let i = 0; i < segmentFiles.length; i++) {
    const inFile = segmentFiles[i];
    const outFile = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-norm.wav`);
    normalizeAudio(inFile, outFile);
    normalizedFiles.push(outFile);
  }

  // ── Step 3: Measure durations ───────────────────────────────────────────
  console.log("  [3/7] Measuring segment durations...");
  const durations = normalizedFiles.map((f) => getAudioDuration(f));

  // ── Step 4: Assemble with strategic gaps ────────────────────────────────
  console.log("  [4/7] Assembling audio with strategic gaps...");
  const { assembledFile, subtitles, totalDuration, imageTimings } = assembleAudio(
    normalizedFiles,
    durations,
    topic
  );

  // ── Step 5: Add fade-out ────────────────────────────────────────────────
  console.log("  [5/7] Adding fade-out...");
  const voiceOnlyFile = resolve(VIDEO_PUBLIC, `${topic.id}-voice-only.wav`);
  addFadeOut(assembledFile, voiceOnlyFile, totalDuration);

  // ── Step 6: Copy images to video/public ─────────────────────────────────
  console.log("  [6/7] Copying images...");
  for (const img of topic.images) {
    const src = resolve(BMS_IMAGES, img);
    const dst = resolve(VIDEO_PUBLIC, img);
    if (existsSync(src)) {
      copyFileSync(src, dst);
      console.log(`    Copied ${img}`);
    } else {
      console.warn(`    WARNING: Image not found: ${src}`);
    }
  }

  // ── Step 7: Update Root.tsx and render ──────────────────────────────────
  console.log("  [7/7] Updating Root.tsx and rendering...");
  const totalFrames = Math.round(totalDuration * FPS);
  updateRootTsx(topic, subtitles, imageTimings, totalFrames, totalDuration);

  // Render
  execFileSync("node", [resolve(VIDEO_DIR, "render.mjs"), "--comp", "BMSExplainerVoiceover"], {
    cwd: ROOT,
    stdio: "inherit",
  });

  // Rename output if custom filename
  const defaultOut = resolve(OUT_DIR, "bms-explainer-voiceover.mp4");
  const targetOut = resolve(OUT_DIR, outputFilename);
  if (outputFilename !== "bms-explainer-voiceover.mp4" && existsSync(defaultOut)) {
    copyFileSync(defaultOut, targetOut);
    console.log(`  Copied to ${outputFilename}`);
  }

  // Cleanup tmp
  rmSync(TMP_DIR, { recursive: true, force: true });

  console.log(`\n  Done: marketing/reels/${outputFilename}`);
  console.log(`  Duration: ${totalDuration.toFixed(1)}s (${totalFrames} frames)`);
  console.log(`  Subtitles: ${subtitles.length} segments`);
}

// ── TTS via piper ───────────────────────────────────────────────────────────
function generateTTS(text, outputPath) {
  // Escape for Python string
  const escaped = text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");

  const pythonCode = `
import wave, struct, array
from piper import PiperVoice
from piper.config import SynthesisConfig

model_path = '${resolve(ROOT, "video", "tts-models", "de_DE-thorsten-medium.onnx")}'
voice = PiperVoice.load(model_path)

syn_config = SynthesisConfig(
    length_scale=1.18,
    noise_scale=0.3,
    noise_w_scale=0.3
)

text = '${escaped}'
audio_data = bytearray()
sample_rate = None

for chunk in voice.synthesize(text, syn_config=syn_config):
    audio_data.extend(chunk.audio_int16_bytes)
    if sample_rate is None:
        sample_rate = chunk.sample_rate

if sample_rate is None:
    sample_rate = 22050

# Apply volume scaling (0.85)
samples = array.array('h', bytes(audio_data))
scaled = array.array('h', [max(-32768, min(32767, int(s * 0.85))) for s in samples])

with wave.open('${outputPath}', 'w') as wf:
    wf.setnchannels(1)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    wf.writeframes(scaled.tobytes())
`;

  execFileSync("python3", ["-c", pythonCode], {
    cwd: ROOT,
    stdio: ["pipe", "pipe", "pipe"],
    timeout: 30000,
  });
}

// ── Audio normalization via ffmpeg (two-pass loudnorm) ──────────────────────
function normalizeAudio(inputPath, outputPath) {
  // First pass: measure loudness stats
  let measured_I = "-16";
  let measured_TP = "-3";
  let measured_LRA = "7";
  let measured_thresh = "-26";

  try {
    const result = execFileSync("ffmpeg", [
      "-i", inputPath,
      "-af", "loudnorm=I=-16:TP=-3:LRA=7:print_format=json",
      "-f", "null", "/dev/null",
    ], { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });

    // ffmpeg outputs loudnorm JSON to stderr (captured in pipe)
    // Try to extract from combined output
  } catch (err) {
    // ffmpeg exits non-zero sometimes but stderr has the stats
    const output = (err.stderr || "") + (err.stdout || "");
    const jsonMatch = output.match(/\{[\s\S]*?"input_i"[\s\S]*?\}/);
    if (jsonMatch) {
      try {
        const stats = JSON.parse(jsonMatch[0]);
        measured_I = stats.input_i || measured_I;
        measured_TP = stats.input_tp || measured_TP;
        measured_LRA = stats.input_lra || measured_LRA;
        measured_thresh = stats.input_thresh || measured_thresh;
      } catch {
        // Use defaults
      }
    }
  }

  // Second pass: apply normalization
  execFileSync("ffmpeg", [
    "-y", "-i", inputPath,
    "-af",
    `loudnorm=I=-16:TP=-3:LRA=7:measured_I=${measured_I}:measured_TP=${measured_TP}:measured_LRA=${measured_LRA}:measured_thresh=${measured_thresh}:linear=true`,
    "-ar", "22050", "-ac", "1",
    outputPath,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}

// ── Get audio duration ──────────────────────────────────────────────────────
function getAudioDuration(filePath) {
  const result = execFileSync("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "csv=p=0",
    filePath,
  ], { encoding: "utf-8", timeout: 5000 });
  return parseFloat(result.trim());
}

// ── Assemble segments with gaps ─────────────────────────────────────────────
function assembleAudio(normalizedFiles, durations, topic) {
  // Calculate timeline with pauses
  const timeline = [];
  let currentTime = 0;

  for (let i = 0; i < normalizedFiles.length; i++) {
    const startTime = currentTime;
    const endTime = startTime + durations[i];
    const pauseType = topic.script[i].pause;
    const pauseDuration = PAUSE_DURATIONS[pauseType] || 0.3;

    timeline.push({
      file: normalizedFiles[i],
      startTime,
      endTime,
      duration: durations[i],
      text: topic.script[i].text,
      pauseAfter: pauseDuration,
    });

    currentTime = endTime + pauseDuration;
  }

  const totalDuration = currentTime + 1.0; // +1s for fade-out

  // Build ffmpeg filter for concatenation with silence gaps
  const inputs = [];
  const filterParts = [];

  for (let i = 0; i < timeline.length; i++) {
    inputs.push("-i", timeline[i].file);
    filterParts.push(`[${i}:a]aresample=22050[s${i}]`);
  }

  // Generate silence segments and concat
  const concatParts = [];
  for (let i = 0; i < timeline.length; i++) {
    concatParts.push(`[s${i}]`);
    if (i < timeline.length - 1) {
      const silLabel = `sil${i}`;
      filterParts.push(
        `anullsrc=r=22050:cl=mono[${silLabel}_raw]`,
        `[${silLabel}_raw]atrim=0:${timeline[i].pauseAfter}[${silLabel}]`
      );
      concatParts.push(`[${silLabel}]`);
    }
  }

  // Add 1s tail silence for fade
  filterParts.push(
    `anullsrc=r=22050:cl=mono[tail_raw]`,
    `[tail_raw]atrim=0:1.0[tail]`
  );
  concatParts.push(`[tail]`);

  const nSegments = concatParts.length;
  filterParts.push(`${concatParts.join("")}concat=n=${nSegments}:v=0:a=1[out]`);

  const assembledFile = resolve(TMP_DIR, "assembled.wav");
  const filterComplex = filterParts.join(";");

  execFileSync("ffmpeg", [
    "-y",
    ...inputs,
    "-filter_complex", filterComplex,
    "-map", "[out]",
    "-ar", "22050", "-ac", "1",
    assembledFile,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 60000 });

  // Build subtitle timings from timeline
  const subtitles = timeline.map((seg) => {
    const startFrame = Math.round(seg.startTime * FPS);
    const endFrame = Math.round(seg.endTime * FPS);
    const displayText = formatSubtitle(seg.text);
    return { text: displayText, startFrame, endFrame };
  });

  // Build image timings: divide content time into equal parts for each image
  const contentStart = 90; // ~3s for hook at 30fps
  const contentEnd = Math.round(totalDuration * FPS);
  const segLength = Math.floor((contentEnd - contentStart) / topic.images.length);

  const imageTimings = topic.images.map((url, i) => ({
    url,
    startFrame: contentStart + i * segLength,
    endFrame: i === topic.images.length - 1 ? contentEnd : contentStart + (i + 1) * segLength,
  }));

  return { assembledFile, subtitles, totalDuration, imageTimings };
}

// ── Format subtitle for display (line breaks for long text) ─────────────────
function formatSubtitle(text) {
  if (text.length <= 35) return text;

  const mid = Math.floor(text.length / 2);
  let breakPoint = -1;
  const breakChars = [",", ".", ";", ":", "\u2013", "\u2014"];

  for (let offset = 0; offset < 15; offset++) {
    for (const c of breakChars) {
      if (mid + offset < text.length && text[mid + offset] === c) {
        breakPoint = mid + offset + 1;
        break;
      }
      if (mid - offset >= 0 && text[mid - offset] === c) {
        breakPoint = mid - offset + 1;
        break;
      }
    }
    if (breakPoint >= 0) break;
  }

  // Fall back to space near middle
  if (breakPoint < 0) {
    for (let offset = 0; offset < 15; offset++) {
      if (mid + offset < text.length && text[mid + offset] === " ") {
        breakPoint = mid + offset;
        break;
      }
      if (mid - offset >= 0 && text[mid - offset] === " ") {
        breakPoint = mid - offset;
        break;
      }
    }
  }

  if (breakPoint > 0 && breakPoint < text.length - 3) {
    return text.slice(0, breakPoint).trim() + "\n" + text.slice(breakPoint).trim();
  }
  return text;
}

// ── Add fade-out ────────────────────────────────────────────────────────────
function addFadeOut(inputPath, outputPath, totalDuration) {
  const fadeStart = Math.max(0, totalDuration - 1.5);
  execFileSync("ffmpeg", [
    "-y", "-i", inputPath,
    "-af", `afade=t=out:st=${fadeStart}:d=1.0`,
    "-ar", "22050", "-ac", "1",
    outputPath,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}

// ── Update Root.tsx defaultProps for BMSExplainerVoiceover ──────────────────
function updateRootTsx(topic, subtitles, imageTimings, totalFrames, totalDuration) {
  let rootContent = readFileSync(ROOT_TSX, "utf-8");

  // Build new defaultProps string
  const imagesStr = imageTimings
    .map(
      (img) =>
        `            { url: "${img.url}", startFrame: ${img.startFrame}, endFrame: ${img.endFrame} }`
    )
    .join(",\n");

  const subtitlesStr = subtitles
    .map((s) => {
      const escapedText = s.text.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
      return `            { text: "${escapedText}", startFrame: ${s.startFrame}, endFrame: ${s.endFrame} }`;
    })
    .join(",\n");

  // Replace the BMSExplainerVoiceover composition block using regex
  const compRegex =
    /(<Composition\s+id="BMSExplainerVoiceover"[\s\S]*?durationInFrames=\{)[\s\S]*?(\}\s+fps=\{FPS\}[\s\S]*?defaultProps=\{\{)[\s\S]*?(\}\}\s*\/>)/;

  const newDuration = `Math.round(${totalDuration.toFixed(1)} * FPS)`;
  const newProps = `
          subject: "${topic.subject}",
          hook: "${topic.hook.replace(/\n/g, "\\n")}",
          topicTitle: "${topic.topicTitle}",
          imageUrl: "${topic.images[0]}",
          audioSrc: "${topic.id}-voice-only.wav",
          images: [
${imagesStr}
          ],
          subtitles: [
${subtitlesStr}
          ],
        `;

  rootContent = rootContent.replace(
    compRegex,
    `$1${newDuration}$2${newProps}$3`
  );

  writeFileSync(ROOT_TSX, rootContent, "utf-8");
  console.log(`    Updated Root.tsx: ${totalFrames} frames, ${subtitles.length} subtitles`);
}
