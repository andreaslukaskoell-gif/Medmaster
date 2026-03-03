#!/usr/bin/env node
/**
 * MedMaster Multi-Platform Traffic Generator
 *
 * Generates ready-to-copy-paste posts for:
 *   - Reddit (r/medizinstudium, r/Austria, r/MedAT)
 *   - Facebook Groups (MedAT-Vorbereitung, MedGurus, MEDBREAKER)
 *   - Discord Servers (MedAT communities)
 *   - WhatsApp / Telegram Groups
 *   - Forum Posts (studymed.at, medat-forum)
 *
 * Output: marketing/posts/YYYY-MM-DD/ with .md files per platform
 *
 * Usage:
 *   node scripts/generate-traffic-posts.mjs
 *   node scripts/generate-traffic-posts.mjs --with-quiz   # Include daily quiz question
 */

import { mkdirSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const today = new Date();
const DATE = today.toISOString().slice(0, 10);
const MONTH_NAMES = [
  "Jänner", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];
const MONTH = MONTH_NAMES[today.getMonth()];
const YEAR = today.getFullYear();

// MedAT is typically in July
const medatDate = new Date(YEAR, 6, 4); // approximate
const daysUntilMedAT = Math.max(
  0,
  Math.ceil((medatDate - today) / (1000 * 60 * 60 * 24))
);
const countdown =
  daysUntilMedAT > 0
    ? `Noch ${daysUntilMedAT} Tage bis zum MedAT ${YEAR}!`
    : `MedAT ${YEAR} steht vor der Tür!`;

const URL = "https://medmaster.at";
const REG_URL = `${URL}/register`;
const BIO_URL = `${URL}/medat-biologie-fragen`;
const CHEM_URL = `${URL}/medat-chemie-fragen`;
const PHYS_URL = `${URL}/medat-physik-fragen`;
const MATH_URL = `${URL}/medat-mathematik-fragen`;

const STATS = {
  questions: "4.300+",
  chapters: "174",
  subjects: "4 Fächer (Bio, Chemie, Physik, Mathe)",
  kff: "KFF mit Generator-System",
  tv: "10 Textverständnis-Sets",
  sek: "100 SEK-Aufgaben",
};

const OUT_DIR = resolve(ROOT, "marketing", "posts", DATE);
mkdirSync(OUT_DIR, { recursive: true });

// Check if cards exist for today
const cardsDir = resolve(ROOT, "marketing", "cards", DATE);
const hasCards = existsSync(cardsDir) && readdirSync(cardsDir).length > 0;

// ── Post Templates ──────────────────────────────────────────────

const posts = {};

// ── 1. REDDIT POSTS ─────────────────────────────────────────────

posts["reddit-medat-vorbereitung.md"] = `# Reddit Post — r/MedAT / r/medizinstudium / r/Austria

## Titel (wähle einen):

**Option A (Value-First):**
> Gratis MedAT-Übungsplattform mit ${STATS.questions} Fragen — alle BMS-Fächer + KFF + TV + SEK

**Option B (Community-Frage):**
> Wie bereitet ihr euch auf den BMS-Teil vor? Hab eine Lernplattform gebaut

**Option C (Countdown):**
> ${countdown} — Gratis MedAT-Übungsplattform gestartet

---

## Post-Text:

Hey zusammen!

Ich bereite mich selbst auf den MedAT vor und hab dabei eine Lernplattform gebaut, die jetzt gratis verfügbar ist: **MedMaster** (${URL})

Was drin ist:
- **${STATS.questions} BMS-Übungsfragen** (Bio, Chemie, Physik, Mathe) — alle mit Erklärungen
- **${STATS.chapters} Lernkapitel** nach offizieller Stichwortliste
- **KFF-Training** mit automatisch generierten Aufgaben (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren zusammensetzen, Gedächtnis & Merkfähigkeit)
- **Textverständnis** (${STATS.tv})
- **SEK** (${STATS.sek} — Emotionen erkennen, regulieren, Entscheidungen)
- **Prüfungssimulation** unter echten Zeitbedingungen

Aktuell ist alles **komplett gratis** — ich will einfach, dass möglichst viele davon profitieren.

Falls ihr es ausprobiert, freue ich mich über Feedback! Was fehlt euch bei der Vorbereitung?

Link: ${URL}

---

## Subreddits zum Posten:
- r/medizinstudium
- r/Austria (Flair: Bildung/Studium)
- r/MedAT (falls aktiv)
- r/de (evtl. mit deutschem Fokus)
- r/StudierenInOesterreich

## Upvote-Tipp:
Reddit belohnt Posts die eine Frage stellen. "Wie bereitet ihr euch vor?" → Engagement → Sichtbarkeit.
`;

posts["reddit-quiz-post.md"] = `# Reddit Post — Tägliches Quiz (Engagement-Format)

## Titel:
> MedAT-Übungsfrage des Tages — Könnt ihr sie lösen? 🧬

## Post-Text:

${countdown}

**Tägliche MedAT-Übungsfrage:**

Welches der folgenden Organellen ist NICHT membranumschlossen?

A) Mitochondrium
B) Ribosom
C) Endoplasmatisches Retikulum
D) Golgi-Apparat
E) Lysosom

> Antwort + Erklärung gibt's auf ${URL} — dort findet ihr ${STATS.questions} weitere Übungsfragen für alle BMS-Fächer, komplett gratis.

Wer macht mit? Schreibt eure Antwort in die Kommentare! 👇

---

## Spoiler-Antwort (als Kommentar posten):

>!Richtig ist **B) Ribosom** — Ribosomen sind nicht von einer Membran umgeben. Sie bestehen aus rRNA und Proteinen und liegen frei im Cytoplasma oder auf dem rauen ER.!<

## Posting-Strategie:
- 1x pro Tag posten, verschiedene Fächer rotieren
- Antwort erst nach 2h als Spoiler-Kommentar
- "Mehr Fragen auf medmaster.at" am Ende
`;

// ── 2. FACEBOOK GROUPS ──────────────────────────────────────────

posts["facebook-gruppen.md"] = `# Facebook-Gruppen Posts

## Ziel-Gruppen:
1. **MedAT Vorbereitung 2025/2026** (~5.000+ Mitglieder)
2. **MedAT Aufnahmeprüfung** (~3.000+)
3. **Medizinstudium Österreich** (~8.000+)
4. **MedGurus Community**
5. **MEDBREAKER MedAT Community**
6. **Vorbereitung MedAT & HAM-Nat**
7. **MedAT Erfahrungen & Tipps**

---

## Post-Variante 1 (Soft-Sell / Value):

${countdown} 📚

Ich hab für meine eigene MedAT-Vorbereitung eine Lernplattform programmiert und stelle sie jetzt gratis zur Verfügung:

✅ ${STATS.questions} BMS-Übungsfragen mit Erklärungen
✅ Alle 4 Bereiche: BMS, KFF, TV, SEK
✅ ${STATS.chapters} Lernkapitel nach offizieller Stichwortliste
✅ Prüfungssimulation mit Timer
✅ KFF-Generator (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren)

Komplett kostenlos, kein Haken: ${URL}

Was nutzt ihr zur Vorbereitung? Bin gespannt auf eure Erfahrungen! 💬

---

## Post-Variante 2 (Quiz / Engagement):

🧪 **MedAT-Frage des Tages:**

Welches Element hat die höchste Elektronegativität?
A) Sauerstoff
B) Fluor
C) Chlor
D) Stickstoff
E) Brom

Schreibt eure Antwort in die Kommentare! 👇
Auflösung + ${STATS.questions} weitere Fragen: ${URL}

---

## Post-Variante 3 (Erfahrungsbericht):

Hat jemand Tipps für die BMS-Vorbereitung? Ich hab letztes Jahr angefangen, eine Lernplattform zu bauen, weil mir die existierenden Tools zu teuer oder unvollständig waren.

Mittlerweile hat MedMaster über ${STATS.questions} Fragen und deckt alle 4 MedAT-Bereiche ab. Aktuell gratis verfügbar.

Was sind eure Must-Haves bei der Vorbereitung? Welche Ressourcen nutzt ihr? 🤔

${URL}
`;

// ── 3. DISCORD SERVERS ──────────────────────────────────────────

posts["discord-servers.md"] = `# Discord Server Posts

## Ziel-Server:
1. **MEDBREAKER Discord** — größte MedAT-Community
2. **MedGurus Discord** — Kursanbieter-Community
3. **Medizinstudium DE/AT** — allgemein
4. **Studium Österreich** — breitere Zielgruppe

---

## Nachricht (für #ressourcen / #tools / #allgemein):

Hey! 👋

Falls ihr nach MedAT-Übungsmaterial sucht — ich hab eine Lernplattform gebaut, die gerade **komplett gratis** ist:

**MedMaster** — ${URL}

Was drin ist:
🔬 ${STATS.questions} BMS-Fragen (Bio, Chemie, Physik, Mathe)
📖 ${STATS.chapters} Lernkapitel
🧩 KFF mit Generator (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren, Merkfähigkeit)
📝 Textverständnis (10 Sets) + SEK (100 Aufgaben)
⏱️ Prüfungssimulation mit Timer

Feedback ist willkommen! Was fehlt euch bei der Vorbereitung?

---

## Tägliche Quiz-Nachricht (für #tägliche-frage o.ä.):

📚 **MedAT-Frage des Tages** — ${DATE}

${countdown}

Heute aus **Biologie**:

> Welche Aussage über die Mitose ist **falsch**?
> A) Die Chromosomen kondensieren in der Prophase
> B) Die Kernhülle löst sich in der Prometaphase auf
> C) Der Spindelapparat bildet sich in der Metaphase
> D) Die Chromatiden trennen sich in der Anaphase
> E) In der Telophase erfolgt die Zellteilung (Cytokinese)

Antwort in 2h! Mehr Fragen: ${URL} 🧬
`;

// ── 4. WHATSAPP / TELEGRAM ──────────────────────────────────────

posts["whatsapp-telegram.md"] = `# WhatsApp / Telegram Nachrichten

## Für MedAT-Lerngruppen:

---

### Nachricht 1 (Kurz & Direkt):

Hey! Kennt ihr schon MedMaster? Gratis MedAT-Übungsplattform mit über 4.300 Fragen:
${URL}

Hat BMS, KFF, TV und SEK — alles in einer App. Gerade kostenlos zum Launch! 🎉

---

### Nachricht 2 (Mit Quiz):

🧬 MedAT-Frage: Welches Vitamin ist wasserlöslich?
A) Vitamin A
B) Vitamin D
C) Vitamin C
D) Vitamin E
E) Vitamin K

Antwort + 4.300 weitere Fragen: ${URL}

---

### Nachricht 3 (Countdown):

${countdown} ⏰

Gratis Übungsplattform gefunden:
✅ ${STATS.questions} Fragen
✅ Alle 4 Bereiche
✅ Prüfungssimulation
✅ KFF-Generator

${URL} — probiert's aus!

---

## WhatsApp Status / Telegram Channel Post:

${countdown} 📚

MedMaster — Gratis MedAT-Vorbereitung
${STATS.questions} Fragen | ${STATS.chapters} Kapitel | BMS + KFF + TV + SEK

👉 ${URL}
`;

// ── 5. FORUM POSTS ──────────────────────────────────────────────

posts["forum-studymed.md"] = `# Forum Posts — studymed.at / medat-forum.at / medizinertest.de

## Titel:
> Gratis MedAT-Übungsplattform — ${STATS.questions} Fragen, alle Bereiche

## Post:

Hallo zusammen,

ich möchte euch auf eine neue MedAT-Übungsplattform aufmerksam machen, die ich entwickelt habe und die aktuell kostenlos nutzbar ist.

**MedMaster** (${URL}) bietet:

**BMS (Basiskenntnistest):**
- Über ${STATS.questions} Übungsfragen in allen 4 Fächern
- ${STATS.chapters} Lernkapitel nach offizieller Stichwortliste
- Ausführliche Erklärungen zu jeder Frage
- 3 Schwierigkeitsstufen + Fragetypen A, K und M

**KFF (Kognitive Fähigkeiten & Fertigkeiten):**
- Zahlenfolgen, Implikationen erkennen, Wortflüssigkeit
- Figuren zusammensetzen, Gedächtnis & Merkfähigkeit
- Automatische Aufgabengenerierung für unbegrenztes Üben

**TV (Textverständnis):**
- 10 vollständige Text-Sets mit je 12 Fragen

**SEK (Soziales Entscheiden & Emotionen):**
- 100 Aufgaben (Emotionen erkennen, regulieren, Entscheidungen treffen)

**Prüfungssimulation:**
- Unter echten Zeitbedingungen mit Timer und Auswertung

Aktuell läuft eine Launch-Aktion — alles ist komplett gratis verfügbar.

Ich freue mich über Rückmeldungen und Verbesserungsvorschläge!

Link: ${URL}

Viel Erfolg bei der Vorbereitung! 💪

---

## Relevante Foren:
1. studymed.at — Forum
2. medat-forum.at (falls aktiv)
3. medizinertest.de — MedAT-Bereich
4. gutefrage.net — MedAT-Tags
5. studium.at — Forum
`;

// ── 6. INSTAGRAM BIO + CAPTIONS ─────────────────────────────────

posts["instagram-captions.md"] = `# Instagram Captions (für die generierten Cards)

## Bio-Text:
🎓 MedAT-Vorbereitung | Gratis
📚 ${STATS.questions} Fragen | BMS + KFF + TV + SEK
🔗 medmaster.at

---

## Caption für Question-Card:

📚 MedAT-Frage des Tages!

${countdown} ⏰

Teste dein Wissen — Antwort kommt in 2h!

Alle Fragen gratis auf medmaster.at 👆 (Link in Bio)

#MedAT #MedAT2026 #Medizinstudium #BMS #Aufnahmeprüfung #Medizin #StudierenInÖsterreich #MedUniWien #MedUniGraz #MedUniInnsbruck #JKU #MedizinAufnahmetest #Prüfungsvorbereitung #GratisLernen #Biologie #Chemie #Physik #Mathematik

---

## Caption für Answer-Card:

✅ Auflösung!

Die richtige Antwort ist [X] — Erklärung auf dem Bild!

${STATS.questions} weitere Fragen: Link in Bio 👆

Welches Fach ist euer Angstfach? Schreibt's in die Kommentare! 👇

#MedAT #MedAT2026 #Medizinstudium #BMS #Aufnahmeprüfung #Lerntipps

---

## Story-Templates (täglich rotieren):

**Story 1 — Poll:**
Frage: "Wie weit seid ihr mit der MedAT-Vorbereitung?"
📊 Gerade erst angefangen / Mittendrin / Fast fertig / Noch nicht 😅

**Story 2 — Quiz:**
Frage: [BMS-Frage]
✅ / ❌ Sticker

**Story 3 — Countdown:**
${countdown}
Sticker: Countdown bis MedAT

**Story 4 — Swipe Up / Link:**
"Gratis MedAT-Übungsfragen 👆"
Link: ${URL}
`;

// ── 7. TIKTOK SCRIPT IDEAS ──────────────────────────────────────

posts["tiktok-ideas.md"] = `# TikTok Video Ideas

## Format: 15-30 Sekunden, MedAT-Fokus

---

### Video 1: "Kannst du diese MedAT-Frage lösen?"
- Hook (0-3s): "90% scheitern an dieser MedAT-Frage 🧬"
- Frage einblenden (3-10s): Bio/Chemie Multiple Choice
- Countdown "3... 2... 1..." (10-15s)
- Auflösung + kurze Erklärung (15-25s)
- CTA: "Mehr auf medmaster.at — Link in Bio" (25-30s)

### Video 2: "${countdown}"
- Hook: "MedAT in X Tagen — bist du ready?"
- Schneller Durchlauf: Was du noch lernen musst
- "Gratis Übungsplattform: medmaster.at"

### Video 3: "MedAT-Fakt den du nicht wusstest"
- Hook: "Wusstest du, dass nur 14% beim MedAT bestehen?"
- 3 Fakten über den MedAT
- CTA: "Bereite dich gratis vor auf medmaster.at"

### Video 4: "Day in my life — MedAT-Vorbereitung"
- Lern-Setup zeigen
- MedMaster auf dem Screen
- Typischer Lernalltag
- Relatable für Zielgruppe

### Video 5: "POV: Du lernst für den MedAT"
- Trending Sound
- Meme-Format
- Screenshots von der App
- "Link in Bio für gratis Übungsfragen"

---

## Hashtags:
#MedAT #MedAT2026 #Medizinstudium #Aufnahmeprüfung #StudierenInÖsterreich #Medizin #BMS #Lerntipps #MedSchool #MedStudent #GratisLernen #Prüfung #UniWien #MedUni

## Posting-Zeiten (Österreich):
- 7:00-8:00 (vor der Schule/Uni)
- 12:00-13:00 (Mittagspause)
- 18:00-20:00 (Abend — BESTE Zeit)
`;

// ── 8. GUTEFRAGE.NET ────────────────────────────────────────────

posts["gutefrage.md"] = `# gutefrage.net — Antworten auf MedAT-Fragen

## Strategie:
Suche nach Fragen mit Tags: MedAT, Medizinstudium, Aufnahmeprüfung, Medizin Österreich

## Antwort-Template (anpassen je nach Frage):

---

**Frage:** "Wie bereite ich mich am besten auf den MedAT vor?"

**Antwort:**

Ich kann dir folgende Ressourcen empfehlen:

Für den **BMS-Teil** (40% der Gesamtwertung):
- Die offizielle Stichwortliste vom VMC als Grundlage
- Lehrbücher: Biologie (Campbell), Chemie (Zeeck), Physik (Harms)
- Zum Üben: MedMaster (medmaster.at) — hat über 4.300 Übungsfragen mit Erklärungen, aktuell gratis

Für **KFF** (kognitive Fähigkeiten):
- Zahlenfolgen und Implikationen regelmäßig üben
- Am besten mit einem Generator, damit du immer neue Aufgaben bekommst (MedMaster hat sowas eingebaut)

Für **TV** (Textverständnis):
- Lesen, lesen, lesen — wissenschaftliche Paper und Fachtexte
- Übungstexte durcharbeiten unter Zeitdruck

Für **SEK** (Soziales Entscheiden):
- Emotionen erkennen üben (Gesichtsausdrücke)
- Situationsbeurteilung: immer die professionellste Antwort wählen

Wichtig: Fang früh an und mach einen realistischen Lernplan. ${countdown}

Viel Erfolg! 💪

---

## Suchbegriffe auf gutefrage.net:
- "MedAT Vorbereitung"
- "MedAT Erfahrung"
- "MedAT BMS lernen"
- "Medizin Aufnahmetest Österreich"
- "MedAT wie lernen"
- "MedAT Übungsfragen"
- "MedAT kostenlos üben"
`;

// ── 9. SEO BLOG CONTENT IDEAS ───────────────────────────────────

posts["blog-seo-ideas.md"] = `# SEO Blog Content — für medmaster.at/blog (future)

## High-Intent Keywords (DE-AT):

| Keyword | Suchvolumen (geschätzt) | Schwierigkeit |
|---------|------------------------|---------------|
| medat vorbereitung | hoch | mittel |
| medat übungsfragen | mittel | niedrig |
| medat bms lernen | mittel | niedrig |
| medat erfahrung | mittel | mittel |
| medat 2026 | hoch (saisonal) | mittel |
| medat wie viele punkte | mittel | niedrig |
| medizinstudium österreich aufnahme | hoch | hoch |
| medat schwierigkeitsgrad | niedrig | niedrig |
| medat kff tipps | niedrig | niedrig |
| bms fragen gratis | niedrig | niedrig |

## Blog-Artikel Ideen (je 1000-2000 Wörter):

1. **"MedAT ${YEAR}: Alles was du wissen musst"** — Termine, Format, Tipps
2. **"BMS Vorbereitung: Die ultimative Anleitung"** — Fach für Fach
3. **"MedAT KFF: Zahlenfolgen knacken"** — Strategien + Beispiele
4. **"Die besten kostenlosen MedAT-Ressourcen ${YEAR}"** — Liste (inkl. MedMaster)
5. **"MedAT Erfahrungsbericht: So hab ich mich vorbereitet"** — Personal Story
6. **"MedAT Punkterechner: So viele Punkte brauchst du"** — Daten + Tabellen
7. **"Textverständnis im MedAT: 5 Tipps für mehr Punkte"** — Strategie
8. **"MedAT SEK: Emotionen erkennen und regulieren"** — Praxis-Guide

## Landing Pages (bereits erstellt):
- ${BIO_URL}
- ${CHEM_URL}
- ${PHYS_URL}
- ${MATH_URL}
`;

// ── 10. AKTIONSPLAN HEUTE ────────────────────────────────────────

posts["AKTIONSPLAN-HEUTE.md"] = `# 🚀 Traffic-Aktionsplan — ${DATE}

${countdown}

## SOFORT MACHEN (heute Abend/Nacht):

### 1. Reddit (15 min)
- [ ] Account: r/medizinstudium → Post-Variante B (Frage-Format)
- [ ] Account: r/Austria → Post mit Flair "Bildung"
- [ ] Account: r/StudierenInOesterreich → Value-Post
- [ ] Dateien: \`reddit-medat-vorbereitung.md\` + \`reddit-quiz-post.md\`

### 2. Facebook Gruppen (20 min)
- [ ] "MedAT Vorbereitung 2025/2026" → Post-Variante 1
- [ ] "MedAT Aufnahmeprüfung" → Post-Variante 2 (Quiz)
- [ ] "Medizinstudium Österreich" → Post-Variante 3 (Erfahrung)
- [ ] 2-3 weitere Gruppen → Mix
- [ ] Datei: \`facebook-gruppen.md\`

### 3. Discord (10 min)
- [ ] MEDBREAKER Discord joinen → #ressourcen
- [ ] MedGurus Discord → #tools oder #allgemein
- [ ] Datei: \`discord-servers.md\`

### 4. WhatsApp/Telegram (5 min)
- [ ] MedAT-Lerngruppen → Nachricht 1 (kurz)
- [ ] Eigener Status → WhatsApp Status Text
- [ ] Datei: \`whatsapp-telegram.md\`

### 5. gutefrage.net (15 min)
- [ ] Suche: "MedAT Vorbereitung" → 3-5 Fragen beantworten
- [ ] Suche: "MedAT Übungsfragen" → hilfreiche Antworten
- [ ] Datei: \`gutefrage.md\`

${hasCards ? `### 6. Instagram (10 min)
- [ ] Cards sind generiert in: marketing/cards/${DATE}/
- [ ] Question-Card als Post + Caption aus instagram-captions.md
- [ ] Story mit Poll erstellen
- [ ] Datei: \`instagram-captions.md\`` : `### 6. Instagram
- [ ] Erst Cards generieren: \`npm run marketing:cards\`
- [ ] Dann posten mit Captions aus \`instagram-captions.md\``}

---

## MORGEN FRÜH:

### 7. TikTok (30 min)
- [ ] Video 1 aufnehmen ("Kannst du diese Frage lösen?")
- [ ] Datei: \`tiktok-ideas.md\`

### 8. Antwort-Reveal
- [ ] Reddit: Spoiler-Kommentar unter Quiz-Post
- [ ] Facebook: Antwort als Kommentar
- [ ] Discord: Answer-Nachricht

---

## DIESE WOCHE:

- [ ] GitHub Token mit \`workflow\` Scope → Push unlocken
- [ ] Discord Webhook URL → \`DISCORD_WEBHOOK_URL\` env setzen
- [ ] Instagram Business Account aufsetzen
- [ ] Meta Developer App erstellen
- [ ] 1. TikTok Video produzieren
- [ ] SEO Blog-Artikel #1 schreiben

---

## TRACKING:
Erwarteter Traffic heute: 50-200 Besucher (konservativ)
Beste Kanäle für sofortigen Traffic: Reddit + Facebook Gruppen
`;

// ── Write all files ─────────────────────────────────────────────

let count = 0;
for (const [filename, content] of Object.entries(posts)) {
  const filepath = resolve(OUT_DIR, filename);
  writeFileSync(filepath, content.trim() + "\n");
  count++;
}

console.log(`\n✅ ${count} Post-Dateien generiert in:`);
console.log(`   ${OUT_DIR}/\n`);

for (const filename of Object.keys(posts)) {
  const icon =
    filename.includes("AKTIONS") ? "🚀" :
    filename.includes("reddit") ? "🟠" :
    filename.includes("facebook") ? "🔵" :
    filename.includes("discord") ? "🟣" :
    filename.includes("whatsapp") ? "🟢" :
    filename.includes("instagram") ? "📸" :
    filename.includes("tiktok") ? "🎵" :
    filename.includes("gutefrage") ? "❓" :
    filename.includes("blog") ? "📝" : "📄";
  console.log(`   ${icon} ${filename}`);
}

console.log(`\n📋 Starte mit: AKTIONSPLAN-HEUTE.md`);
console.log(`📁 Öffne: open "${OUT_DIR}"\n`);
