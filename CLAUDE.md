# MedMaster – Claude Code Rules

## Project

MedAT-H exam preparation app (React 19 + TypeScript + Vite + Tailwind v4).
Austrian medical school entrance exam: BMS, TV, KFF, SEK sections.

## Commands

```
npm run dev          # Start dev server
npm run build        # Production build (Vite)
npm run typecheck    # Type check (tsc -b)
npm run lint         # ESLint
npm run format       # Prettier (auto-runs via hook)
```

## Key Rules

### TypeScript

- Use `type` over `interface`
- No TypeScript `enum` — use string literal unions
- Always run `npm run typecheck` after significant changes

### BMS Questions

- ALL BMS questions MUST have exactly 5 options (A–E) — MedAT format requirement
- Question interface: `{ id, subject, chapter, topic?, text, options: [{id,text}], correctOptionId, explanation, difficulty, tags }`
- TV questions use 0-indexed `correctOption` (different from BMS!)
- IDs follow pattern: `bio-1-001`, `ch-2-003`, `ph-3-001`, `ma-1-001`

### BMS-Kapitel Referenz (Vorbild: Zellmembran bio-1-03)

Jedes Unterkapitel: Einleitung → **„In diesem Kapitel lernst du:“** (4–5 Bullets) → Kern mit `---` zwischen Abschnitten → **Übergänge** („Bisher haben wir gesehen“, „Um das zu verstehen“) → **Merksätze** `> **Merke:**` nach Blöcken → **1–3 SVG-Hinweise** (additiv) → **MedAT-Fokus:** „Zur gezielten Prüfungsvorbereitung“ → **Zentral prüfungsrelevant:** konkrete Aufzählung (niemals „Siehe unten“) → **Ergänzend vertiefend** → Häufige Fragen, Typische Fallen, Prüfungsrelevante Zahlen → **Zusammenfassung (ultrakompakt)**.

**Erledigt (Feb 2025):** Kap4 UKs 04–09 Übergangssätze ergänzt. Kap2-Datei (bio-2-01 bis bio-3-12): Übergangssätze in allen UKs ergänzt. Kap3- und Kap5-Dateien haben bereits zahlreiche Übergänge; vereinzelt ergänzt. **Muster-UK** bleibt bio-4-01 in `kap4-genetik.ts` für künftige Tiefenprüfungen.

### Data Files

- BMS data: `/src/data/bms/` (barrel files) + `/src/data/bmsKapitel/` (chapter files)
- TV data: `/src/data/tvTextsExpanded.ts` (sets 1–5) + `tvTextsExpanded2.ts` (sets 6–10)
- SEK data: `/src/data/sekDataNew.ts` (Erkennen / Regulieren / Entscheiden)
- KFF generators: `/src/data/kffGenerators.ts`
- Split large data files into <75 questions per agent call (token limit)

### KFF: Generator ≠ Zufall (Regel → Konstruktion → Validator)

Für alle KFF-Untertests gilt: **Erst Regel/Modell definieren → Aufgabe daraus konstruieren → automatisch prüfen → nur bei ✔️ anzeigen.**

- **Pipeline:** `generateTask() { while(true) { const c = generateCandidate(); if (validate(c)) return c; } }`
- **Validator prüft:** Eindeutigkeit, Lösbarkeit, MedAT-Konformität, keine Trivialität/Mehrdeutigkeit.
- **Qualitäts-Gates:** Mehr als 1 richtige Lösung → verwerfen. Keine richtige Lösung → verwerfen. Regel nicht rekonstruierbar → verwerfen.
- **Wortflüssigkeit:** Nur echte Wörter aus Lexikon, Optionen = Buchstaben aus dem Wort; Validator: genau 1 Wort aus Buchstaben bildbar.
- **Implikationen:** Formale Aussagen (Alle/Einige/Keine), Validator: genau 1 Option zwingend korrekt.
- **Zahlenfolgen:** Regel wählen → Folge generieren → Validator: Folge nur mit dieser Regel eindeutig.
- **Figuren:** Zielpolygon zerschneiden, Validator: Teile passen exakt nur zu 1 Option.
- **Merkfähigkeit:** Fester Profil-Pool, Validator: genau 1 richtige Antwort.

### KFF: Mehr Aufgaben generieren

Wenn wir mehr Übungsaufgaben (Zahlenfolgen, Implikationen, Wortflüssigkeit) generieren wollen, **immer am Skript in der jeweiligen Data-Datei orientieren**:

- **Implikationen:** `src/data/kffImplikationen.ts` – oben „SKRIPT FÜR NEUE / WEITERE ÜBUNGSAUFGABEN“; Format an OFFICIAL_IMPLICATION_EXAMPLES anpassen (Prämissen/Optionen mit Punkt, E exakt „Keine der Schlussfolgerungen ist zwingend“).
- **Zahlenfolgen:** `src/data/kffZahlenfolgenMedAT.ts` – OFFICIAL_ZF_EXAMPLES als Formatvorbild; neue Aufgaben nur über Generator, offizielle nie verändern.
- **Wortflüssigkeit:** `src/data/kffWortfluessigkeitMedAT.ts` – OFFICIAL_WF_EXAMPLES; Training in `kffGenerators.ts` (assertNotOfficialLikeWordFluency).
- **Figuren zusammensetzen:** `src/data/kffFigurenZusammensetzenMedAT.ts` – OFFICIAL_FZ_EXAMPLES (1:1 aus IB_FZ_26.pdf); Training via cutPolygonStrategically/generateFigurenTrainingTask (vom Ziel aus strategisch schneiden). UI: zwei Modi (Offizielle Beispiele / Training mit leicht–mittel–schwer).

### React / Frontend

- Tailwind v4 — use `bg-linear-to-br` NOT `bg-gradient-to-br`
- React hooks must be called at top level — never inside try/catch, IIFE, or loops
- Declare all handlers BEFORE the useEffect that references them (avoid TDZ)
- Lazy-load pages with `React.lazy()` in App.tsx

### Git Workflow

- Commit types: feat, fix, refactor, docs, test, chore, perf
- Never use `localStorage.clear()` — only clear specific keys
- Run `npm run build` before committing to catch errors

## What to Avoid

- Never use `--dangerously-skip-permissions`
- Never `localStorage.clear()` (wipes all user data)
- Never add LevelGate to routes (blocks access)
- Skip Karteikarten-related tasks (user preference)
- Don't add `npm run` prefix to format/lint in hooks (use direct binary)

## Supabase

- Project: medmaster (Austrian region)
- Auth handled via `useAuth` hook in `/src/hooks/useAuth.ts`
- Always add timeout fallback for auth loading states
