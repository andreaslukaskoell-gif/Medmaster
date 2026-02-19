# Requirements: MedMaster Premium BMS-Plattform

**Defined:** 2026-02-19
**Core Value:** BMS-Inhalte in Lehrbuch-Tiefe mit Altfragen-Markierungen, interaktiv aufbereitet über Quiz und Merksätze, sodass zahlende Nutzer sich besser vorbereiten als mit jedem anderen Tool.

---

## v1 Requirements

### Content-Synchronisation (Stichwortliste als Source of Truth)

- [x] **SYNC-01**: Jedes Thema aus `stichworteData.ts` (189 Einträge) hat ein zugeordnetes Kapitel in `src/data/bms/`
- [x] **SYNC-02**: Alle 8 fehlenden Themen (neu2026, abgedeckt: false) werden mit vollständigem Content erstellt
- [x] **SYNC-03**: Content-Audit pro Fach — irrelevante Inhalte (nicht in Stichwortliste) werden gelöscht
- [x] **SYNC-04**: `abgedeckt`-Flag in Stichwortliste wird nach Content-Erstellung auf `true` gesetzt
- [x] **SYNC-05**: Jede Frage verwendet Tags aus `linkedQuestionTags` der Stichwortliste für Trackbarkeit

### Content-Qualität (Lehrbuch-Niveau + Altfragen)

- [x] **QUAL-01**: Jedes Kapitel folgt dem BMSUnterkapitel.tsx-Pattern (SubchapterContent + QuizQuestion + MerksatzBox)
- [x] **QUAL-02**: BMS-Fragen haben 5 Optionen (A-E) gemäß MedAT-Format
- [x] **QUAL-03**: Altfragen sind mit MerksatzBox type="altfragen" markiert
- [x] **QUAL-04**: Klinische Highlights verwenden MerksatzBox type="klinisch" ("By doctors for future doctors")
- [x] **QUAL-05**: Erklärungen zu Antworten sind auf Lehrbuch-Niveau (nicht nur "richtig/falsch")
- [x] **QUAL-06**: Schwierigkeitsgrad (difficulty: "leicht" | "mittel" | "schwer") ist korrekt zugeordnet

### Struktur & Bucketing (Lernlogische Abfolge)

- [x] **STRUCT-01**: 4 Premium-Buckets (Biologie=emerald, Chemie=red, Physik=blue, Mathematik=violet) sind implementiert
- [x] **STRUCT-02**: Biologie-Kapitel in lernlogischer Abfolge: Zelle → Gewebe → Organe → Frühentwicklung → Genetik → Molekulare Genetik → Methoden → Humangenetik → Ökologie
- [ ] **STRUCT-03**: Jedes Fach hat eine Übersichtsseite mit Kapitel-Roadmap und Fortschrittsanzeige
- [ ] **STRUCT-04**: Kapitel-Navigation nutzt konsistente URL-Struktur (`/bms/:fach/:kapitel`)
- [ ] **STRUCT-05**: Smart-Links zwischen Kapiteln funktionieren (Querverweise auf verwandte Themen)

### Smart-Function Integration (QuizQuestion + MerksatzBox + Progression)

- [ ] **SMART-01**: Jede Frage nutzt QuizQuestion.tsx mit XP-Vergabe via `useStore.ts`
- [ ] **SMART-02**: Second-Try-Mechanik ist aktiv (halbe XP bei zweitem Versuch)
- [ ] **SMART-03**: Hints werden angezeigt nach falschem ersten Versuch
- [ ] **SMART-04**: MerksatzBox-Komponente ist in jedem Kapitel mindestens 2x verwendet (merke/altfragen/klinisch/achtung/tipp)
- [ ] **SMART-05**: XP-System aus `xp.ts` + `progression.ts` ist konsistent integriert
- [ ] **SMART-06**: Level-Aufstieg wird nach Quiz-Abschluss angezeigt mit Level-Namen
- [ ] **SMART-07**: Hot-Streak-Bonus wird nach 3+ korrekten Antworten in Folge vergeben

### Fortschritts-Tracking (Mastered-Status + Progress-Bars)

- [ ] **PROG-01**: "Mastered"-Status pro Kapitel (100% Fragen korrekt beantwortet)
- [ ] **PROG-02**: Progress-Bar pro Fach zeigt % abgeschlossener Kapitel
- [ ] **PROG-03**: Progress-Bar pro Kapitel zeigt % beantworteter Fragen
- [ ] **PROG-04**: Dashboard zeigt Gesamt-Fortschritt über alle 4 Fächer
- [ ] **PROG-05**: Stichwortliste-Seite zeigt `abgedeckt`-Status und Kapitel-Verlinkung
- [ ] **PROG-06**: Quiz-Session-History wird in `quizSessionStore.ts` persistent gespeichert

### UX & Navigation (Premium-Grad Usability)

- [ ] **UX-01**: Nahtlose Kapitel-Navigation ohne Layout-Glitches (kein Content-Jump beim Wechsel)
- [ ] **UX-02**: TopBar zeigt aktuelles Fach + Kapitel + Fortschritt
- [ ] **UX-03**: Sidebar-Navigation ist kollabierbar und zeigt Fach-Icons mit Farben
- [ ] **UX-04**: Mobile: BottomTabBar funktioniert auf allen BMS-Seiten
- [ ] **UX-05**: Dark Mode funktioniert konsistent in allen Kapiteln
- [ ] **UX-06**: Breadcrumbs zeigen Pfad: BMS > Fach > Kapitel
- [ ] **UX-07**: "Nächstes Kapitel"-Button am Ende jedes Kapitels (lernlogische Reihenfolge)

### Datenstruktur & Freemium-Vorbereitung

- [ ] **DATA-01**: Question-Interface hat optionales `premium: boolean`-Flag
- [ ] **DATA-02**: Kapitel-Daten haben optionales `tier: "free" | "pro" | "premium"`-Flag
- [ ] **DATA-03**: Feature-Flags in `useStore.ts` für freemium-Splits vorbereitet
- [ ] **DATA-04**: Content-Dateien verwenden barrel-files (z.B. `biologie.ts` aggregiert `_part1.ts`, `_part2.ts`)
- [ ] **DATA-05**: Build (`npm run build`) läuft fehlerfrei durch

---

## v2 Requirements

### Content-Erweiterung

- **CONT-V2-01**: Chemie-Content auf Lehrbuch-Niveau gebracht (analog zu Biologie)
- **CONT-V2-02**: Physik-Content auf Lehrbuch-Niveau gebracht
- **CONT-V2-03**: Mathematik-Content auf Lehrbuch-Niveau gebracht
- **CONT-V2-04**: Zusätzliche SVG-Diagramme für komplexe Themen (z.B. Zellorganellen, Kreisläufe)

### Premium-Features

- **PREM-V2-01**: Paywall-Implementation (Stripe Integration)
- **PREM-V2-02**: Custom Quiz-Creation (Premium-Feature)
- **PREM-V2-03**: Personalisierte Lernpfade basierend auf Schwächen
- **PREM-V2-04**: Analytics-Dashboard (Learning Insights mit PostHog)

### Andere Sektionen

- **TV-V2-01**: TV-Modul auf Premium-Niveau poliert (einheitliches Design, XP-Integration)
- **KFF-V2-02**: KFF-Modul auf Premium-Niveau poliert
- **SEK-V2-03**: SEK-Modul auf Premium-Niveau poliert

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Bilder/Medien-Content | Fokus auf Text-Präzision und Interaktivität, keine Medien-Assets in v1 |
| Karteikarten/Flashcards | Per User-Präferenz ausgeschlossen |
| AI-Tutor-Integration | Feature-Gate vorhanden, aber keine Vertiefung in v1 |
| Mobile App | Web-first, responsive reicht |
| Paywall-Implementation | Architektur vorbereiten (Feature-Flags), aber kein Zahlungssystem in v1 |
| Content-Migration zu DB | TypeScript-Dateien bleiben in `src/data/`, kein DB-driven Content |
| Andere MedAT-Sektionen als BMS | BMS ist Herzstück, TV/KFF/SEK polieren erst in v2 |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SYNC-01 | Phase 1 | Complete |
| SYNC-02 | Phase 2 | Complete |
| SYNC-03 | Phase 1 | Complete |
| SYNC-04 | Phase 2 | Complete |
| SYNC-05 | Phase 1 | Complete |
| QUAL-01 | Phase 3 | Complete |
| QUAL-02 | Phase 3 | Complete |
| QUAL-03 | Phase 3 | Complete |
| QUAL-04 | Phase 3 | Complete |
| QUAL-05 | Phase 3 | Complete |
| QUAL-06 | Phase 3 | Complete |
| STRUCT-01 | Phase 4 | Complete |
| STRUCT-02 | Phase 4 | Complete |
| STRUCT-03 | Phase 4 | Pending |
| STRUCT-04 | Phase 4 | Pending |
| STRUCT-05 | Phase 4 | Pending |
| SMART-01 | Phase 5 | Pending |
| SMART-02 | Phase 5 | Pending |
| SMART-03 | Phase 5 | Pending |
| SMART-04 | Phase 5 | Pending |
| SMART-05 | Phase 5 | Pending |
| SMART-06 | Phase 5 | Pending |
| SMART-07 | Phase 5 | Pending |
| PROG-01 | Phase 6 | Pending |
| PROG-02 | Phase 6 | Pending |
| PROG-03 | Phase 6 | Pending |
| PROG-04 | Phase 6 | Pending |
| PROG-05 | Phase 6 | Pending |
| PROG-06 | Phase 6 | Pending |
| UX-01 | Phase 7 | Pending |
| UX-02 | Phase 7 | Pending |
| UX-03 | Phase 7 | Pending |
| UX-04 | Phase 7 | Pending |
| UX-05 | Phase 7 | Pending |
| UX-06 | Phase 7 | Pending |
| UX-07 | Phase 7 | Pending |
| DATA-01 | Phase 8 | Pending |
| DATA-02 | Phase 8 | Pending |
| DATA-03 | Phase 8 | Pending |
| DATA-04 | Phase 8 | Pending |
| DATA-05 | Phase 8 | Pending |

**Coverage:**
- v1 requirements: 42 total
- Mapped to phases: 42
- Unmapped: 0 ✓

---

*Requirements defined: 2026-02-19*
*Last updated: 2026-02-19 after initial definition*
