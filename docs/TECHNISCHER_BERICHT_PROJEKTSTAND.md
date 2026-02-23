# MedMaster – Technischer Bericht Projektstand

**Stand:** Kurzfassung für Strategie-Planer  
**Zweck:** Nächste Schritte und Prioritäten ableiten

---

## 1. Architektur

| Aspekt        | Details                                                        |
| ------------- | -------------------------------------------------------------- |
| **Framework** | **Vite 7** + **React 19** (kein Next.js)                       |
| **Routing**   | **React Router v7** (BrowserRouter, keine App Router)          |
| **Build**     | `vite build`, TypeScript, Pfad-Alias `@/` → `src/`             |
| **Styling**   | Tailwind CSS 4 (mit @tailwindcss/vite)                         |
| **State**     | Zustand (useStore), lokale useState; Supabase für Auth/Backend |

**Ordnerstruktur (relevant):**

```
src/
├── App.tsx              # Root, Routes, AuthGuard, Lazy-Loading
├── main.tsx             # Einstieg, createRoot
├── pages/                # ~63 Page-Komponenten (alle Routen)
├── components/           # UI, layout (AppShell, Sidebar, TopBar), chapter/, diagrams/, ui/
├── data/                 # Alle Lern- und Übungsdaten (TS/JSON-ähnlich)
│   ├── bmsKapitel/       # BMS-Kapitel (statisch + Typen)
│   ├── bms/              # BMS-Fragen (biologie, chemie, physik, mathematik)
│   ├── bmsQuestions.ts   # Legacy BMS-Fragen
│   ├── kffData.ts        # KFF-Strategie, Implikationen
│   ├── kffWortfluessigkeit.ts, kffZahlenfolgen.ts, kffImplikationen.ts, …
│   ├── kffTextverstaendnis.ts, kffEmotionenErkennen.ts, kffSozialesEntscheiden.ts, …
│   ├── tvData.ts, tvTexte1bis5.ts, tvTexte6bis10.ts, tvTextsExpanded*
│   ├── flashcards.ts, flashcards_expanded*.ts
│   ├── stichwortliste.ts
│   ├── sekData.ts
│   ├── figurenGenerator.ts (Schlauchfiguren)
│   └── formeln.ts, chapters/, questions/
├── lib/                  # bmsStorage, supabase, supabaseBMS, utils, stripe
├── store/                # useStore, adaptiveLearning
├── hooks/                # useAuth
└── utils/                # optimizeChapterContent, parseKontrollfragen, listChapters, …
```

**Hinweis:** Es gibt **keinen** `app/`-Ordner (kein Next.js App Router) und **keinen** dedizierten `content/`-Ordner; Inhalte liegen in `src/data/` als TypeScript-Module.

---

## 2. Daten-Quellen

### BMS (38 Kapitel)

| Quelle                  | Speicherort                                       | Beschreibung                                                                                                                                                              |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primär (laufend)**    | **localStorage** Key `bms-chapters`               | 38 Kapitel + 177 Unterkapitel; Lade-/Speicherlogik in `src/lib/bmsStorage.ts` (`loadAllChapters()`, `saveChapter()`, …).                                                  |
| **Statisch (Fallback)** | `src/data/bmsKapitel/`                            | Nur **Biologie** mit 1–2 Kapiteln in TS: `biologie/kap1-die-zelle-test.ts`, `kap2-zellkern-und-ribosomen.ts`. Chemie/Physik/Mathe: leere Arrays in jeweiligen `index.ts`. |
| **Supabase (optional)** | Tabelle `bms_chapters` (+ ggf. `bms_subchapters`) | Client: `src/lib/supabaseBMS.ts` (`loadBMSChaptersFromSupabase()`). BMS-Seite lädt zuerst Supabase, Fallback localStorage.                                                |

**Fazit:** Die „38 BMS-Kapitel“ leben **im Browser** unter `localStorage`; nicht als 38 einzelne Dateien. Statische TS-Dateien decken nur einen kleinen Teil ab.

### KFF-Aufgaben

| Quelle             | Dateien                                                                                                                                                                              | Inhalt                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Strategie & Basis  | `data/kffData.ts`                                                                                                                                                                    | Strategie-Guides, Implikationen, große TS-Objekte                  |
| Subtest-spezifisch | `kffWortfluessigkeit.ts`, `kffZahlenfolgen.ts`, `kffImplikationen.ts`, `kffTextverstaendnis.ts`, `kffEmotionenErkennen.ts`, `kffEmotionenRegulieren.ts`, `kffSozialesEntscheiden.ts` | Wörter, Aufgaben, Szenarien                                        |
| Figuren            | `data/figurenGenerator.ts`                                                                                                                                                           | Schlauchfiguren-Aufgaben (`figurenAufgaben`)                       |
| Generatoren        | `data/kffGenerators.ts`                                                                                                                                                              | Generierte Aufgaben (Zahlenfolgen, Wortflüssigkeit, Gedächtnis, …) |

Alles **hart in TypeScript**; keine separaten JSON/MD-Dateien für KFF.

### TV (Textverständnis)

- `data/tvData.ts` (Strategie, `tvTexts`)
- `data/tvTexte1bis5.ts`, `tvTexte6bis10.ts`
- `data/tvTextsExpanded*.ts` / `data/kffTextverstaendnis.ts` (Texte + MC)

Ebenfalls **TS-Module**, keine Markdown-Dateien.

### Karteikarten

- `data/flashcards.ts`: Basis-Decks (z. B. `baseDecks`), `getDeckNames`, `flashcardDecks` aus expanded-Dateien
- `data/flashcards_expanded.ts`, `flashcards_expanded2.ts`, `flashcards_expanded3.ts`, `flashcards_expanded4.ts`

Struktur: **große TS-Arrays/Objekte** (front/back, category, topic, difficulty). Kein JSON/MD.

---

## 3. Status Quo – Routen/Seiten

**Öffentlich (ohne Auth):**

- `/login`, `/register`, `/forgot-password`

**Geschützt (AuthGuard + AppShell):**

| Route                                       | Seite                 | Kurzbeschreibung                                               |
| ------------------------------------------- | --------------------- | -------------------------------------------------------------- |
| `/`                                         | Dashboard             | MedAT-Übersicht, Module (BMS, KFF, TV, SEK, Simulation), Links |
| `/dashboard`                                | → Redirect auf `/`    |                                                                |
| `/onboarding`                               | Onboarding            | Einmaliger Onboarding-Guard                                    |
| `/bms`, `/bms/:fach`, `/bms/:fach/:kapitel` | BMS                   | Kapitel nach Fach, Unterkapitel                                |
| `/kff`                                      | KFF                   | KFF-Übersicht/Subtests                                         |
| `/tv`                                       | TV                    | Textverständnis                                                |
| `/sek`                                      | SEK                   | Sozial-emotionale Kompetenzen                                  |
| `/simulation`                               | Simulation            | MedAT-Simulation                                               |
| `/ai-tutor`                                 | AITutor               | AI-Tutor                                                       |
| `/lernplan`                                 | Lernplan              | Lernplan                                                       |
| `/analyse`                                  | Analysis              | Analyse                                                        |
| `/community`                                | Community             | Community                                                      |
| `/statistik`                                | Statistics            | Statistik                                                      |
| `/notizen`                                  | Notes                 | Notizen                                                        |
| `/karteikarten`                             | Flashcards            | Karteikarten                                                   |
| `/duell`                                    | Duel                  | Duell                                                          |
| `/stichwortliste`                           | StichwortlistePage    | Stichwortliste                                                 |
| `/schwachstellen`                           | SchwachstellenTrainer | Schwachstellen                                                 |
| `/preise`                                   | Pricing               | Preise                                                         |
| `/admin/kapitel-editor`                     | KapitelEditor         | Admin: Kapitel bearbeiten                                      |

Zusätzlich viele **KFF-Subtest-Seiten** (z. B. Zahlenfolgen, Wortflüssigkeit, Implikationen, Textverständnis, Emotionen, Soziales Entscheiden) mit Lernen/Üben/Simulation/Page-Varianten – alle über React Router erreichbar, teils über KFF-Hub verlinkt.

**MedAT-Übersicht (zentrale Startseite nach Login):**  
`src/pages/Dashboard.tsx` – definiert die Module (BMS, KFF, TV, SEK, Simulation, …) und verlinkt auf die obigen Routen.

---

## 4. Code-Qualität – drei „rohe“ Stellen

1. **BMS-Daten dual (localStorage + Supabase, wenig einheitliche Quelle)**
   - 38 Kapitel faktisch in `localStorage`; Supabase optional, Migration/Sync manuell oder per Konsole.
   - Statische Kapitel nur minimal in `data/bmsKapitel` (v. a. Biologie).
   - **Risiko:** Inkonsistenz, doppelte Logik, schwer wartbar. **Empfehlung:** Eine klare „Source of Truth“ (z. B. nur Supabase oder nur localStorage) und klare Migrations-/Sync-Strategie.

2. **Viele Seiten ohne einheitliche Lade-/Fehlerzustände**
   - Einige Pages nutzen `isLoading`/Loading-Spinner (z. B. BMS, Auth-Seiten), viele andere nicht.
   - Kein durchgängiges Pattern für Skeletons, Fehlerboundaries oder „empty state“.
   - **Risiko:** Flackern, leere Flächen bei langsamen Daten. **Empfehlung:** Gemeinsame Loading/Error-Komponenten und Nutzung auf allen datenabhängigen Seiten.

3. **Große, hartcodierte Daten in TS-Dateien**
   - KFF, TV, Karteikarten, Stichwortliste, BMS-Fragen als große Arrays/Objekte in `src/data/*.ts`.
   - Keine JSON/MD; Änderungen nur per Code-Edit, schwer für Redaktion.
   - **Risiko:** Große Bundles, schwer skalierbar, kein CMS/Backend-Anschluss. **Empfehlung:** Schrittweise Auslagerung (z. B. JSON/API/Supabase) und lazy loading wo möglich (teilw. schon in vite.config manualChunks).

---

## 5. Zusammenfassung (für Planer)

- **Stack:** Vite + React 19 + React Router 7 + Tailwind + Zustand + Supabase (Auth/optional BMS).
- **BMS:** 38 Kapitel aktuell in **localStorage** (`bms-chapters`); optional Supabase; statische TS-Kapitel nur gering.
- **KFF/TV/Karteikarten:** Alles in **TypeScript** unter `src/data/` (keine JSON/MD), viele große Arrays.
- **Routen:** Alle in `App.tsx` definiert; zentrale MedAT-Übersicht: `Dashboard.tsx`; ~63 Page-Komponenten.
- **Technische Schulden:** (1) Doppelte BMS-Datenquelle (localStorage vs. Supabase vs. statisch), (2) uneinheitliche Lade-/Fehlerzustände, (3) große hartcodierte Daten in TS statt editierbarer Datenquellen/Backend.

**Mögliche nächste Schritte:** BMS-Source-of-Truth festlegen und Migration dokumentieren; einheitliche Loading/Error-UI einführen; Daten schrittweise in Supabase/JSON/API verschieben und Redaktions-Workflow definieren.
