# MASTERPROMPT: Overnight Full Audit + Consolidation + Frontend Upgrade

**Für Claude Code — autonome Ausführung über Nacht**

---

## SETUP & SICHERHEIT (zuerst ausführen)

```bash
git checkout -b overnight/content-consolidation-v2
git add -A && git commit -m "checkpoint: before overnight v2"
```

---

## PHASE 1 — VOLLSTÄNDIGER KAPITEL-AUDIT (alle 37 Kapitel)

### 1.1 Automatisierter Scan aller Kapitel

Schreibe ein Python-Script `/tmp/full_audit.py` und führe es aus:

```python
import os, re, json

BASE = "/sessions/vibrant-dreamy-turing/mnt/medmaster/src/data/bmsKapitel"
subjects = ["biologie", "chemie", "physik", "mathematik"]

results = []

for subj in subjects:
    path = f"{BASE}/{subj}"
    for f in sorted(os.listdir(path)):
        if not f.endswith(".ts") or f == "index.ts":
            continue
        content = open(f"{path}/{f}", encoding="utf-8").read()

        # Zähle UKs
        uk_count = content.count("unterkapitelId:") + content.count("id: 'bio-") + content.count("id: 'chem-") + content.count("id: 'phys-") + content.count("id: 'math-")

        # Prüfe Felder
        has_sections = "sections:" in content
        has_selftest = "selfTest:" in content
        has_altfragen = "altfragen:" in content
        has_diagram = "diagramType:" in content
        has_merksatz = "merksatz:" in content
        has_lernziele = "lernziele:" in content

        # Zähle H2-Überschriften im content
        h2_count = len(re.findall(r'## ', content))

        # Prüfe auf Probleme
        double_apostrophe = content.count("''")
        arrow_markers = content.count(">>>>")

        # Dateigrö0e
        lines = content.count('\n')

        results.append({
            "file": f,
            "subject": subj,
            "lines": lines,
            "h2_count": h2_count,
            "has_sections": has_sections,
            "has_selftest": has_selftest,
            "has_altfragen": has_altfragen,
            "has_diagram": has_diagram,
            "has_merksatz": has_merksatz,
            "has_lernziele": has_lernziele,
            "problems": {
                "double_apostrophe": double_apostrophe,
                "arrow_markers": arrow_markers,
            }
        })

print("=== AUDIT RESULTS ===")
for r in results:
    problems = [k for k, v in r["problems"].items() if v > 0]
    print(f"\n[{r['subject'].upper()}] {r['file']} ({r['lines']} lines)")
    print(f"  Sections: {r['has_sections']} | SelfTest: {r['has_selftest']} | Altfragen: {r['has_altfragen']} | Diagram: {r['has_diagram']} | Merksatz: {r['has_merksatz']}")
    if problems:
        print(f"  ⚠️  PROBLEME: {problems}")

# Finde kleine Kapitel (< 200 Zeilen → Kandidaten zum Zusammenlegen)
print("\n\n=== KLEINE KAPITEL (Merge-Kandidaten) ===")
for r in sorted(results, key=lambda x: x["lines"]):
    if r["lines"] < 300:
        print(f"  {r['subject']}/{r['file']}: {r['lines']} Zeilen")

print(f"\nGesamt: {len(results)} Kapitel")
```

### 1.2 Für JEDES Kapitel einzeln prüfen und korrigieren

Gehe jeden Kapitel-File durch und korrigiere folgende Probleme:

**A) ÜBERSCHRIFTEN-STRUKTUR**

- Das Kapitel selbst hat einen `title:` → das ist die H1
- Sections haben `heading:` → das ist H2
- Im `content:` Feld dürfen KEINE `##`-H2-Überschriften stehen die inhaltlich identisch mit sections sind
- `content:` darf `##` nur für thematische Einleitungen die VOR den sections kommen
- Stelle sicher dass `sections[]` das primäre Strukturelement ist (nicht inline `##` im content)

**B) MERKSÄTZE**

- `merksatz:` darf NUR unter einer section stehen die direkt zu diesem Lernziel gehört
- Kein Merksatz der allgemein ist und zu einer übergeordneten Einheit gehört
- Format: `merksatz: "Kurzer, prägnanter Satz der exakt eine Kernaussage vermittelt."`
- Merksätze sollen MedAT-relevante Fakten enthalten, nicht allgemeine Beschreibungen
- Beispiel SCHLECHT: `merksatz: "Die Zelle ist die kleinste Einheit."`
- Beispiel GUT: `merksatz: "Alle Lebewesen bestehen aus Zellen (Zelltheorie: Schleiden & Schwann, 1839)."`

**C) FRAGEN (selfTest + altfragen) — MEDAT-KONFORM**

Alle Fragen MÜSSEN diesem Format entsprechen:

```typescript
{
  id: "bio-1-01-q1",
  question: "Welche Aussage zum Citratzyklus ist KORREKT?",
  options: ["A) ...", "B) ...", "C) ...", "D) ...", "E) ..."],  // 5 Optionen wie beim echten MedAT
  correctIndex: 2,  // 0-basiert
  explanation: "Der Citratzyklus findet in der Mitochondrienmatrix statt und...",
  difficulty: "mittel",  // "leicht" | "mittel" | "schwer"
  tags: ["stoffwechsel", "mitochondrium"]
}
```

Regeln für MedAT-konforme Fragen:

- IMMER 5 Antwortoptionen (A-E)
- Nur eine korrekte Antwort
- Typische MedAT-Fragetypen: "Welche Aussage ist RICHTIG/FALSCH?", "Welche der folgenden...", "Was trifft auf X zu?"
- Keine Fragen die offensichtlich klinisch sind (kein Diagnose/Therapie)
- Fragen müssen mit dem Unterkapitel-Content übereinstimmen
- Schwierigkeitsgrad: 60% mittel, 25% schwer, 15% leicht (MedAT-Verteilung)

Überprüfe JEDE bestehende Frage auf:

- Hat sie 5 Optionen? (wenn nicht → ergänzen)
- Ist sie MedAT-stil? (wenn nicht → umschreiben)
- Ist die Erklärung präzise und lehrreich?
- Passt sie zum UK-Content?

**D) DIAGRAMME / SVGs**
Verfügbare DiagramTypes in DiagramSVG.tsx (alle diese sind implementiert):

```
biologie: animal-cell, plant-vs-animal-cell, prokaryote-vs-eukaryote,
          cell-membrane, dna-helix, mitosis-phases, meiosis-overview,
          transcription-translation, blood-groups, immune-response,
          blood-circulation, heart-anatomy, nervous-system, synapse,
          action-potential, nephron, respiratory-system, digestive-system,
          hormone-system, sarcomere, menstrual-cycle, cell-cycle,
          stem-cells, double-membrane-organelles, endomembrane-system,
          blood-components, cardiac-conduction, sense-organs

chemie:   atomic-orbitals, ionic-bond, covalent-bond, enzyme-substrate,
          ph-scale, periodic-table, functional-groups

physik:   wave-types, circuit, coordinate-system, vector-addition,
          unit-circle, euler-diagrams, doppler-effect, em-spectrum,
          lens-imaging, newton-forces

mathematik: coordinate-system, vector-addition, unit-circle
```

Füge `diagramType:` zu UKs hinzu wo es sinnvoll ist und noch kein Diagram vorhanden ist.
Mapping-Empfehlungen:

- Die Zelle → `animal-cell`, `prokaryote-vs-eukaryote`, `cell-membrane`
- Mitose/Meiose → `mitosis-phases`, `meiosis-overview`
- DNA/Genetik → `dna-helix`, `transcription-translation`
- Immunologie → `immune-response`, `blood-groups`
- Anatomie → `blood-circulation`, `heart-anatomy`, `nervous-system`
- Chemische Bindung → `ionic-bond`, `covalent-bond`, `atomic-orbitals`
- Säure-Base → `ph-scale`, `enzyme-substrate`
- Physik Wellen → `wave-types`, `doppler-effect`, `em-spectrum`
- Optik → `lens-imaging`
- Elektrizität → `circuit`
- Vektoren → `vector-addition`, `coordinate-system`

---

## PHASE 2 — KAPITEL ZUSAMMENLEGEN

### 2.1 Konsolidierungs-Plan

**BIOLOGIE: 11 → 8 Kapitel**

| Vorher                    | Nachher                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| kap1-die-zelle            | kap1-die-zelle (behalten, Flagship)                                   |
| kap2-gewebe               | → **in kap3-anatomie-physiologie integrieren** als neue erste Section |
| kap3-anatomie-physiologie | kap2-anatomie-gewebe-physiologie (größer)                             |
| kap4-entwicklungsbiologie | kap3-entwicklung-evolution (kap4+kap9 zusammen)                       |
| kap5-klassische-genetik   | kap4-genetik (kap5+kap6+kap7+kap8 zusammen)                           |
| kap6-molekulargenetik     | → in kap4-genetik                                                     |
| kap7-methoden-der-genetik | → in kap4-genetik (als eigener UK-Block)                              |
| kap8-humangenetik         | → in kap4-genetik                                                     |
| kap9-evolution            | → in kap3-entwicklung-evolution                                       |
| kap10-oekologie           | kap5-oekologie-immunologie (kap10+kap11)                              |
| kap11-immunologie         | → in kap5-oekologie-immunologie                                       |

Neue Biologie-Struktur: **5-6 große Kapitel**

**CHEMIE: 13 → 8 Kapitel**

| Zusammenlegen                                                    | Neues Kapitel                 |
| ---------------------------------------------------------------- | ----------------------------- |
| kap1-atombau + kap2-mikrokosmos + kap5-periodensystem            | kap1-atombau-periodensystem   |
| kap3-gasgesetze + kap4-aggregatzustaende                         | kap2-materie-und-zustaende    |
| kap6-chemische-bindung (behalten)                                | kap3-chemische-bindung        |
| kap7-chemische-reaktionen + kap8-chemisches-gleichgewicht        | kap4-reaktionen-gleichgewicht |
| kap9-elemente-und-verbindungen + kap10-saeure-base + kap11-redox | kap5-anorganische-chemie      |
| kap12-organische-chemie + kap13-naturstoffe                      | kap6-organische-chemie        |

**PHYSIK: 7 → 5 Kapitel**

| Zusammenlegen                           | Neues Kapitel            |
| --------------------------------------- | ------------------------ |
| kap1-groessen + kap2-mechanik           | kap1-mechanik-grundlagen |
| kap3-schwingungen-und-wellen (behalten) | kap2-wellen              |
| kap4-waermelehre (behalten)             | kap3-waermelehre         |
| kap5-elektrizitaet + kap6-optik         | kap4-elektrizitaet-optik |
| kap7-atomphysik (behalten)              | kap5-atomphysik          |

**MATHEMATIK: 6 → 4 Kapitel**

| Zusammenlegen                         | Neues Kapitel          |
| ------------------------------------- | ---------------------- |
| kap1-zehnerpotenzen + kap4-einheiten  | kap1-zahlen-einheiten  |
| kap2-algebra + kap3-geometrie         | kap2-algebra-geometrie |
| kap5-funktionen (behalten, erweitern) | kap3-funktionen        |
| kap6-vektorrechnung (behalten)        | kap4-vektoren          |

### 2.2 Zusammenlegen-Prozess

Für JEDE Zusammenlegung:

1. Lese beide Quelldateien vollständig
2. Erstelle neue zusammengelegte Datei mit:
   - Neuem `id` und `title`
   - Allen UKs beider Quellen (in sinnvoller Reihenfolge)
   - Keine inhaltliche Duplizierung — wenn beide Quellen ähnliche Inhalte haben: beste Version behalten, ergänzen
   - `estimatedTime:` neu berechnen (Summe + 20% für neue Übergänge)
3. Aktualisiere `index.ts` für das Fach
4. Aktualisiere alle Routen/IDs in:
   - `src/lib/bmsRoutes.ts` (falls vorhanden)
   - `src/data/glossary.ts` (chapterId-Referenzen)
   - `src/data/questions/index.ts`
   - Sidebar.tsx (hasChildren BMS tree)

**WICHTIG:** Alte UK-IDs müssen als Aliases/redirects erhalten bleiben falls sie in SRS-Daten gespeichert sind. Füge in den neuen UKs das alte `id` als Kommentar hinzu: `// merged from: bio-2-01`

---

## PHASE 3 — FRONTEND AUF NEUES LEVEL BRINGEN

### 3.1 Visuelle Hierarchie & Typography

**BMSUnterkapitel.tsx** — Content-Bereich verbessern:

- Überschriften mit klaren Größenhierarchien
- `text-balance` für alle Headings (besserer Zeilenumbruch)
- Subtile Separator-Linien zwischen Sektionen
- Reading-progress-bar oben (schmale Linie die zeigt wie weit man gescrollt hat)

**SubchapterContent.tsx** — Render-Qualität:

- Inline-Code (`code`) mit monochromed Background
- Mathematische Formeln (die mit $ stehen) kursiv + anderer Schrifttyp
- Tabellen: sticky header beim Scrollen
- Listen: bessere bullet-point Styles (filled circles für Hauptpunkte, outline für Sub-Punkte)

### 3.2 Neues "UK Card" Design in der Kapitel-Übersicht

In `BMSKapitelView.tsx` oder `BMS.tsx` — UK-Karten sollen zeigen:

- Fortschritts-Ring (wie viel % des UK-Contents gelesen)
- SRS-Status Badge (Neu / Gelernt / Fällig / Beherrscht)
- Schwierigkeits-Indikator (1-3 Punkte)
- Estimated Reading Time

### 3.3 "Quick Review" Modus

Füge in `BMSUnterkapitel.tsx` einen neuen Button "Quick Review" hinzu:

- Zeigt nur Merksätze aller Sektionen hintereinander (kein langer Text)
- Perfekt für schnelle Wiederholung
- Toggle-Button neben dem bestehenden "Hinterfrag-Modus"

```tsx
// In der TopBar des UK-Viewers:
<Button
  variant={quickReviewMode ? "default" : "outline"}
  size="sm"
  onClick={() => setQuickReviewMode(!quickReviewMode)}
>
  <Zap className="w-3.5 h-3.5 mr-1.5" />
  Quick Review
</Button>
```

Im Quick-Review-Modus:

- Zeige nur `section.merksatz` Felder in Cards
- Zeige `section.heading` als Kontext
- Kompaktes Layout, keine langen Texte

### 3.4 Dashboard-Widget: Lernstreak-Kalender

In `Dashboard.tsx` — GitHub-style Contribution-Heatmap:

- Zeige die letzten 12 Wochen als Grid
- Grüner Punkt = Lerntag, Intensität = wie viel gelernt
- Nutze die bestehende `heatmap.tsx` Komponente aus `/components/ui/heatmap.tsx`
- Daten aus dem Store: `quizResults` Timestamps

### 3.5 BMS Kapitel-Karten: Subject Color Coding

Jedes Fach hat bereits Farben definiert (`--accent-bio`, `--accent-chem`, etc.).
Stelle sicher dass:

- Biologie-Karten: grüner Akzent
- Chemie-Karten: blauer Akzent
- Physik-Karten: oranger Akzent
- Mathematik-Karten: violetter Akzent
  Konsistent in: Kapitel-Header, UK-Cards, Sidebar-Badges, Progress-Bars

### 3.6 Smooth Page Transitions

In `App.tsx` — füge AnimatePresence für Route-Wechsel hinzu:

```tsx
import { AnimatePresence, motion } from "framer-motion";

// Wrapper um die Route:
<AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
  >
    {children}
  </motion.div>
</AnimatePresence>;
```

### 3.7 Onboarding-Verbesserung

Lies `Onboarding.tsx` und prüfe:

- Zeigt es alle wichtigen Features? (Simulation, Schwachstellen, Prognose)
- Hat es einen klaren "Wo soll ich anfangen?"-Flow?
- Verbessere den letzten Schritt: zeige die 3 wichtigsten ersten Aktionen

### 3.8 Empty States verbessern

Überall wo eine Liste leer ist (keine Quiz-Ergebnisse, keine Notizen, etc.):

- Motivierender Illustration-Text statt "Keine Daten"
- CTA-Button zur relevanten Aktion
- Beispiel: Prognose ohne Daten → "Mache deinen ersten Test um deine Prognose zu sehen" + Button zu `/simulation`

---

## PHASE 4 — USABILITY IMPROVEMENTS

### 4.1 Keyboard Navigation

In `BMSUnterkapitel.tsx`:

- `ArrowLeft` / `ArrowRight` → nächstes/vorheriges Unterkapitel
- `Space` → nächste Section aufklappen
- `R` → Quick-Review-Modus togglen
- Zeige Keyboard-Shortcuts als Tooltip beim ersten Besuch

### 4.2 Search/Jump-to Verbesserung

In `CommandPalette.tsx` — prüfe ob BMS-Kapitel-Suche funktioniert:

- User kann nach Kapitel-Titeln suchen und direkt springen
- Zeige letzte 5 besuchte Kapitel als Vorschläge
- Fuzzy-search falls noch nicht implementiert

### 4.3 Lernzeit-Tracker

Füge `estimatedReadingTime` Anzeige hinzu:

- Berechne basierend auf Wortanzahl im content (200 Wörter/Minute)
- Zeige: "~12 min Lesezeit" im UK-Header
- Zeige "Noch ~5 min" wenn User halb durch ist

---

## PHASE 5 — QUALITÄTS-CHECKS & COMMIT

### 5.1 Nach jeder Phase committen

```bash
# Nach Phase 1 (Audit + Fixes):
git add -A && git commit -m "content: full audit - fix headings, merksätze, questions to MedAT format"

# Nach Phase 2 (Konsolidierung):
git add -A && git commit -m "content: consolidate chapters Bio 11→6, Chem 13→8, Phys 7→5, Math 6→4"

# Nach Phase 3+4 (Frontend):
git add -A && git commit -m "feat: frontend upgrade - quick review, transitions, heatmap, empty states"
```

### 5.2 TypeScript-Check nach jeder Phase

```bash
cd /sessions/vibrant-dreamy-turing/mnt/medmaster && npx tsc --noEmit 2>&1 | head -30
```

Alle TypeScript-Fehler sofort beheben bevor weitergemacht wird.

### 5.3 Final-Check

```bash
# Prüfe dass alle alten Chapter-IDs noch funktionieren (für SRS-Daten)
grep -rn "bio-kap\|chem-kap\|phys-kap\|math-kap" /sessions/vibrant-dreamy-turing/mnt/medmaster/src --include="*.ts" --include="*.tsx" | grep -v "_backup" | grep -v "data/bmsKapitel"

# Prüfe dass alle Routes noch matchen
grep -n "path=" /sessions/vibrant-dreamy-turing/mnt/medmaster/src/App.tsx
```

---

## PRIORITÄTEN (bei Zeitmangel: in dieser Reihenfolge)

1. **MUSS**: Phase 1 komplett — Fragen auf MedAT-Format, Überschriften fix, Merksätze korrekt
2. **MUSS**: Phase 2 teilweise — zumindest Biologie konsolidieren (größtes Fach)
3. **SOLL**: Phase 3.3 (Quick-Review) + Phase 3.4 (Heatmap) — hoher UX-Impact
4. **KANN**: Phase 3.6 (Transitions) + Phase 4.1 (Keyboard) — polishing
5. **KANN**: Restliche Konsolidierung Chemie/Physik/Mathe

---

## WICHTIGE REGELN

- **Niemals Content löschen** — nur verschieben, zusammenlegen, verbessern
- **Niemals UK-IDs löschen** ohne Alias — SRS-Daten werden sonst unbrauchbar
- **Immer 5 Optionen** bei selfTest-Fragen (MedAT-Standard)
- **Git-commits** nach jeder abgeschlossenen Phase
- Bei Unsicherheit über Fach-Inhalte: konservativer Ansatz, lieber weniger ändern
- TypeScript muss nach jeder Phase clean (exit 0) sein
