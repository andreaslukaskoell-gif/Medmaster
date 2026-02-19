# MedMaster Premium — MedAT-Lernplattform v1.0

## What This Is

Eine kommerzielle Premium-Lernplattform zur Vorbereitung auf den MedAT-H (Aufnahmetest Humanmedizin, Osterreich). Alle 4 Testsektionen (BMS, TV, KFF, SEK) sollen auf verkaufsbereites Niveau gebracht werden. Nutzer bezahlen fur den Zugang — jedes Detail muss Premium-Qualitat haben.

## Core Value

BMS-Inhalte in Lehrbuch-Tiefe mit Altfragen-Markierungen, interaktiv aufbereitet uber Quiz und Merksatze, sodass zahlende Nutzer sich besser vorbereiten als mit jedem anderen Tool.

## Requirements

### Validated

<!-- Shipped and confirmed valuable — inferred from existing codebase. -->

- ✓ BMS-Kapitelstruktur mit Unterkapiteln (4 Facher, hierarchisch) — existing
- ✓ Interaktive QuizQuestion-Komponente (Sofort-Feedback, Hints, Second-Try) — existing
- ✓ MerksatzBox mit 5 Typen (merke/altfragen/klinisch/achtung/tipp) — existing
- ✓ XP-System mit Level-Aufstieg und Level-Namen — existing
- ✓ Zustand-Stores fur State-Persistence (localStorage, sanitized) — existing
- ✓ Stichwortliste mit 4 Fachern, Prioritaten, Abdeckungs-Tracking — existing
- ✓ TV-Modul (10 Textsets, 120 MC-Fragen) — existing
- ✓ SEK-Modul (80 Tasks: Erkennen/Regulieren/Entscheiden) — existing
- ✓ KFF-Modul mit Generatoren — existing
- ✓ Simulation (Probepruefung uber alle Sektionen) — existing
- ✓ Responsive Layout (Sidebar + TopBar + BottomTabBar) — existing
- ✓ Dark Mode — existing
- ✓ Supabase Auth + Sync — existing
- ✓ Badge-System — existing
- ✓ Hot-Streak + Random Rewards — existing
- ✓ Progressive Disclosure in Content — existing
- ✓ Smart-Links zwischen Kapiteln — existing

### Active

<!-- Current scope. Building toward these. -->

- [ ] BMS-Content auf Lehrbuch-Niveau + Altfragen-Markierungen fur alle Kapitel
- [ ] BMS-Kapitel in lernlogischer Abfolge neu strukturieren (aufbauend: Zelle → Gewebe → Organe → Genetik → Okologie)
- [ ] Pro Kapitel: Content validieren, Ballast loschen, Lucken fullen gegen Stichwortliste
- [ ] Interaktive Inhalte konsequent uber QuizQuestion + MerksatzBox-Patterns
- [ ] "Mastered"-Status pro Lern-Bucket (Fortschritts-Tracking)
- [ ] Progress-Bars pro Fach und pro Kapitel
- [ ] XP-Logging optimieren (Gamification fur zahlende Nutzer)
- [ ] Nahtlose Kapitel-Navigation ohne Layout-Glitches
- [ ] TV-Modul auf Premium-Niveau polieren
- [ ] KFF-Modul auf Premium-Niveau polieren
- [ ] SEK-Modul auf Premium-Niveau polieren
- [ ] Dashboard mit Premium-Grad Usability
- [ ] Datenstruktur clean fur spatere Paywall/Abo-Integration
- [ ] Freemium-Architektur vorbereiten (Feature-Flags, Zugriffssteuerung)

### Out of Scope

<!-- Explicit boundaries. -->

- Paywall-Implementierung (Split noch nicht definiert) — Architektur vorbereiten, aber kein Zahlungssystem in v1
- Bilder/Medien-Content — Fokus auf Text-Prazision und Interaktivitat
- Mobile App — Web-first, responsive reicht
- AI-Tutor-Integration — bereits als Feature-Gate vorhanden, keine Vertiefung in v1
- Karteikarten/Flashcards — per User-Praferenz ausgeschlossen

## Context

**Bestehendes System:** React 19 + TypeScript + Vite SPA, deployed auf Vercel. Zustand fur State, Supabase fur Auth/Sync. ~1060 BMS-Fragen, 10 TV-Sets, 80 SEK-Tasks, KFF-Generatoren. 33 SVG-Diagramme. Content als TypeScript-Dateien, nicht DB-driven.

**BMS-Content-Status:** Gemischt — einige Kapitel gut ausgearbeitet, andere dunn oder veraltet. Pro Kapitel muss gepruft werden. Stichwortliste (`stichworteData.ts`) ist die offizielle Referenz 2025/2026 mit `abgedeckt`-Flags und Prioritaten.

**Stabile Template-Patterns (identifiziert):**
- `QuizQuestion.tsx` — Quiz-Flow mit Hints, Second-Try, XP-Callback
- `SubchapterContent.tsx` — Progressive Disclosure, Markdown, Tabellen
- `MerksatzBox.tsx` — 5 Typen, konsistentes Design
- `xp.ts` + `progression.ts` — Pure XP-Berechnung, Level-System
- `useStore.ts` + `quizSessionStore.ts` — Zustand, persisted, sanitized
- `AppShell.tsx` — Overlay-Orchestrierung, responsive Layout

**Fach-Farben:** Biologie=emerald, Chemie=red, Physik=blue, Mathematik=violet

## Constraints

- **Tech Stack**: React 19 + TypeScript + Vite + Tailwind — keine Anderung
- **Content-Format**: TypeScript-Dateien in `src/data/` — kein DB-Migration
- **MedAT-Format**: 5 Optionen (A-E) pro BMS-Frage, TV mit 0-indexed correctOption
- **Build**: `npm run build` muss fehlerfrei durchlaufen
- **Patterns**: Bestehende stabile Patterns (QuizQuestion, MerksatzBox, Zustand-Stores) als Basis nutzen, nicht neu erfinden
- **Keine Bilder**: Text + Interaktivitat, keine Medien-Assets in v1

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Lernlogische Abfolge statt Kapitel-Reihenfolge | Aufbauendes Lernen ist effektiver als alphabetisch/willkurlich | — Pending |
| Lehrbuch + Altfragen kombiniert | Premium-Anspruch: vollstandig genug zum Lernen, prufungsrelevant markiert | — Pending |
| Freemium-Architektur vorbereiten | Split noch unklar, aber Architektur muss stimmen | — Pending |
| BMS zuerst, dann TV/KFF/SEK | BMS ist Herzstuck und grosster Content-Block | — Pending |
| Bestehende Patterns als Templates | QuizQuestion, MerksatzBox, Zustand proven — keine Neuerfindung | ✓ Good |

---
*Last updated: 2026-02-19 after initialization*
