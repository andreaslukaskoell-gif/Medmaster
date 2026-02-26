# MedMaster Premium — MedAT-Lernplattform

## What This Is

Eine kommerzielle Premium-Lernplattform zur Vorbereitung auf den MedAT-H (Aufnahmetest Humanmedizin, Osterreich). Alle 4 Testsektionen (BMS, TV, KFF, SEK) mit 5.000+ Fragen, echten MedAT-Aufgabenformaten und Stripe-Bezahlung. Von Content-Qualitat bis Go-Live.

## Core Value

BMS-Inhalte in Lehrbuch-Tiefe mit Altfragen-Markierungen, interaktiv aufbereitet uber Quiz und Merksatze, sodass zahlende Nutzer sich besser vorbereiten als mit jedem anderen Tool.

## Current Milestone: v2.0 Launch-Ready

**Goal:** App von Content-Qualitat bis Go-Live bringen — BMS-Kapitel auditieren, KFF auf 1.000+ Aufgaben, Figuren zusammensetzen, Stripe, Landing Page, Domain.

**Target features:**
- BMS-Kapitel Audit + Qualitatsverbesserung + SVG-Bilder
- KFF alle Teile auf 1.000+ Aufgaben (inkl. Figuren zusammensetzen + Gedachtnis)
- UI/UX Polish (Sidebar, App-Check, Landing Page, Post-Registration)
- Impressum/Datenschutz/AGB
- Stripe Payment
- Echte Domain + Go-Live

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ BMS-Kapitelstruktur mit Unterkapiteln (4 Facher, hierarchisch) — v1.0
- ✓ Interaktive QuizQuestion-Komponente (Sofort-Feedback, Hints, Second-Try) — v1.0
- ✓ MerksatzBox mit 5 Typen (merke/altfragen/klinisch/achtung/tipp) — v1.0
- ✓ XP-System mit Level-Aufstieg und Level-Namen — v1.0
- ✓ Zustand-Stores fur State-Persistence (localStorage, sanitized) — v1.0
- ✓ Stichwortliste mit 4 Fachern, Prioritaten, Abdeckungs-Tracking — v1.0
- ✓ TV-Modul (10 Textsets, 120 MC-Fragen) — v1.0
- ✓ SEK-Modul (80 Tasks: Erkennen/Regulieren/Entscheiden) — v1.0
- ✓ KFF-Modul mit Generatoren (Zahlenfolgen 1.000, Wortflussigkeit 930) — v1.0
- ✓ Simulation (Probepruefung uber alle Sektionen) — v1.0
- ✓ Responsive Layout (Sidebar + TopBar + BottomTabBar) — v1.0
- ✓ Dark Mode — v1.0
- ✓ Supabase Auth + Sync — v1.0
- ✓ BMS 5.187 Fragen (Bio 983, Chem 1.090, Phys 1.106, Mathe 1.055) — v1.0
- ✓ Badge-System + Hot-Streak + Random Rewards — v1.0
- ✓ Stichworte-Audit 106/106 grun — v1.0

### Active

<!-- Current scope — v2.0 Launch-Ready -->

- [ ] BMS-Kapitel Struktur, Lesbarkeit, Verstandlichkeit, Tiefe verbessern
- [ ] Hochqualitative SVG-Bilder pro BMS-Kapitel
- [ ] Figuren zusammensetzen als echte MedAT-Aufgaben + 1.000 generieren
- [ ] KFF alle Teile (ausser Gedachtnis) auf 1.000+ Aufgaben
- [ ] Gedachtnis-Untertest mit copyright-freien Gesichtern im MedAT-Stil
- [ ] Erfolge-Label aus Sidebar entfernen
- [ ] App komplett durchprufen (alle Flows, Bugs, Edge Cases)
- [ ] Landing Page verbessern
- [ ] Post-Registration Flow optimieren
- [ ] Impressum/Datenschutz/AGB verbessern
- [ ] Stripe Payment implementieren
- [ ] Von Vercel auf echte Domain + Go-Live

### Out of Scope

- Mobile App — Web-first, responsive reicht
- AI-Tutor-Vertiefung — Feature-Gate vorhanden, keine Erweiterung in v2
- Karteikarten/Flashcards — per User-Praferenz ausgeschlossen
- Supabase DB-Migration fur Content — bleibt in TypeScript-Dateien

## Context

**Bestehendes System:** React 19 + TypeScript + Vite SPA, deployed auf Vercel. Zustand fur State, Supabase fur Auth/Sync. 5.187 BMS-Fragen, 10 TV-Sets, 80 SEK-Tasks, KFF mit Zahlenfolgen (1.000) + Wortflussigkeit (930). Content als TypeScript-Dateien.

**Seit v1.0 erledigt (Cursor-Session):** Navigation refactored (useBack/navigationStore), Layout vereinfacht, Mathe Pool 7-15, Physik Pool 12-21, Formeln erweitert, FragenTrainer erweitert, Lernplan/Dashboard uberarbeitet, KFF FirstTimeIntro, formatExplanation utility.

**Stabile Patterns:** QuizQuestion, SubchapterContent, MerksatzBox, Zustand-Stores, AppShell.

**Fach-Farben:** Biologie=emerald, Chemie=red, Physik=blue, Mathematik=violet

## Constraints

- **Tech Stack**: React 19 + TypeScript + Vite + Tailwind v4 — keine Anderung
- **Content-Format**: TypeScript-Dateien in `src/data/`
- **MedAT-Format**: 5 Optionen (A-E) pro BMS-Frage, TV mit 0-indexed correctOption
- **Build**: `npm run build` muss fehlerfrei durchlaufen
- **Bilder**: SVG-Diagramme in `public/` und `src/components/diagrams/`
- **Keine Push tags**: Nur abends pushen (Vercel Build-Minuten sparen)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Bestehende Patterns als Templates | QuizQuestion, MerksatzBox, Zustand proven | ✓ Good |
| BMS zuerst, dann KFF/UI/Payment | BMS Kernprodukt, KFF zweitgrosster Block | ✓ Good |
| Stripe fur Payments | Standard, gut dokumentiert, EU-konform | — Pending |
| Eigene Domain statt Vercel-URL | Professioneller Auftritt fur Launch | — Pending |
| Copyright-freie Gesichter fur Gedachtnis | Keine Lizenzprobleme, MedAT-authentisch | — Pending |
| SVG statt Raster fur Kapitel-Bilder | Skalierbar, klein, editierbar | — Pending |

---
*Last updated: 2026-02-26 after milestone v2.0 initialization*
