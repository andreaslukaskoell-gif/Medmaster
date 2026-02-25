# MedMaster

MedAT-Vorbereitungsplattform (React 19 + TypeScript + Vite + Tailwind + Supabase).

## Plan: Einwandfrei laufen & alle Inhalte funktionsfähig

**Ziel:** Alles überarbeiten, sodass die App stabil läuft und alle Inhalte (BMS, KFF, TV, SEK, Training, Fortschritt) zuverlässig funktionieren.

**Stand (Durchführung):** Phase 1–8 umgesetzt: ErrorBoundary + PageLoading/PageError/PageEmpty auf KFF, BMS, TV, SEK. BMS: PageEmpty bei leerer Kapitelliste; TV: Guards für Legacy/Set-Views; SEK: PageEmpty bei keinen Aufgaben. TS-Fixes (Flashcards Badge, Simulation doppelter Import, SozialesEntscheidenUeben). Build & Typecheck grün.

### Phasen (Reihenfolge)

| Phase | Fokus | Kurz |
|-------|--------|------|
| **1** | Stabilität | ErrorBoundary optional Retry, einheitliches Loading/Error/Empty auf allen datenabhängigen Seiten, Supabase null/Fehler abfangen |
| **2** | BMS | Source of Truth (Supabase/localStorage), alle Kapitel/Unterkapitel laden, Quiz pro Fach, Inhalte & Kontrollfragen prüfen |
| **3** | KFF | Alle Subtests: Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren, Gedächtnis, Emotionen, Soziales – Lernen/Üben/Simulation durchtesten, Generatoren/Validator |
| **4** | TV | Texte (tvTexte1–10, tvTextsExpanded), Fragen, Lernen/Üben/Simulation, Speicherung Ergebnisse |
| **5** | SEK | Erkennen/Regulieren/Entscheiden aus sekDataNew, alle Bereiche Lernen/Üben/Simulation |
| **6** | Training & Fortschritt | FragenTrainer, WissenCheck, Simulation (alle Sektionen), Stichwortliste, Duell, Karteikarten, Fortschritt/Statistik/Prognose mit Lade-/Empty-State |
| **7** | Weitere Seiten | Dashboard, Today, Lernplan, Notizen, Analyse, Community, AI-Tutor, Formelsammlung, Wrapped – keine toten Links, Fallbacks |
| **8** | Inhalte | BMS-Kapitelstruktur einheitlich, alle UKs prüfen, KFF/TV/SEK-Texte, Glossar, Formeln, Stichwortliste |
| **9** | Technik | Build/Bundle, Service Worker, Env-Doku, Sentry |

### Checkliste „Einwandfrei“

- Keine uncaught Errors bei normaler Nutzung; jede Route mit Fehlerbehandlung/Retry oder klarer Meldung.
- Loading- und Empty-State auf allen datenabhängigen Seiten.
- BMS: Kapitel/Unterkapitel/Quiz laden und speichern.
- KFF: Jeder Subtest in Lernen/Üben/Simulation funktionsfähig.
- TV: Texte + Fragen, Ergebnisse gespeichert.
- SEK: Erkennen/Regulieren/Entscheiden funktionsfähig.
- Simulation: Alle Sektionen durchspielbar, Ergebnisse gespeichert.
- Fortschritt/Statistik mit Daten oder sinnvollem Empty State.

Details: `docs/TECHNISCHER_BERICHT_PROJEKTSTAND.md`, `docs/PRE-LAUNCH-CHECKLIST.md`, `src/data/CONTENT_GUIDE.md`.

---

# React + TypeScript + Vite (Template)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
