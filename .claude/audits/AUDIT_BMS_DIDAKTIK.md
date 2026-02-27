# Strenges didaktisches Audit aller BMS-Kapitel
**Datum**: 2026-02-26
**Geprüft**: Alle 4 Fächer (Biologie, Chemie, Physik, Mathematik) — alle Kapitel-Dateien
**Methode**: Quellcode-Analyse aller `bmsKapitel/*.ts` Dateien + Stichproben-Lesen aller UKs

---

## Gesamtübersicht

| Fach | Dateien | Zeilen | UKs (geschätzt) | Bewertung |
|------|---------|--------|-----------------|-----------|
| Biologie | 5 Kapitel | 11.478 | ~40 UKs | **8/10** |
| Chemie | 6 Kapitel | 15.564 | ~35 UKs | **6/10** |
| Physik | 5 Kapitel | 8.389 | ~25 UKs | **5/10** |
| Mathematik | 5 Kapitel | 9.114 | ~25 UKs | **5/10** |

---

## 1. BIOLOGIE — 8/10

### Stärken
- **bio-1-01 (Kennzeichen des Lebens)**: Vorbildlich. Motivierende Einleitung ("Was unterscheidet eine lebende Zelle von einem Stein?"), klare "Lernst du"-Bullets mit Konzepten (nicht Formeln), saubere Übergänge ("Bisher haben wir gesehen..."), Merksätze nach jedem Block, klinische Bezüge (Diabetes als Homöostasestörung), Analogien vorhanden.
- **Übergänge**: Durchgängig vorhanden ("Bisher haben wir gesehen", "Um das zu verstehen"). Baut logisch auf: Kennzeichen → Homöostase → Viren → Emergenz.
- **MedAT-Fokus**: Eigener Abschnitt mit typischen Fragen und Fallen.
- **Merksätze**: Konsequent mit `> **Merke:**` nach jedem Block. Mnemonics vorhanden (StReForWaEvoBeHo).
- **Diagramme**: `{{DIAGRAM:animal-cell}}`, `{{DIAGRAM:plant-vs-animal-cell}}` korrekt referenziert.
- **Tiefe**: kap4-genetik (1.111 Zeilen) ist das kürzeste — aber kap1 und kap2 sind sehr umfangreich.

### Schwächen
- **kap4-genetik**: Mit 1.111 Zeilen das dünnste Kapitel. Für MedAT-Genetik (Mendelsche Regeln, Humangenetik, Gentechnik) möglicherweise zu knapp.
- **Redundanz**: In kap1 wird die Zellmembran sowohl in bio-1-03 als auch teilweise in bio-1-04 (Organellen) behandelt — leichte Überlappung.
- **Analogien**: Bei abstrakteren Themen (Meiose, Genexpression) fehlen alltagsnahe Vergleiche.

### Fehlende Themen für MedAT-Reife
- Genetik könnte tiefer sein: Stammbaum-Analyse, Hardy-Weinberg, Epigenetik
- Neurophysiologie: Nernst-Gleichung, Aktionspotential-Details (wird evtl. in kap2 abgedeckt)

---

## 2. CHEMIE — 6/10

### Stärken
- **ch-1-01 (Atommodelle)**: Hervorragende Einleitung mit Goldring-Analogie. Historischer Aufbau (Demokrit → Dalton → Thomson → Rutherford → Bohr → Orbital) ist didaktisch perfekt.
- **Übergänge**: Durchgängig vorhanden und logisch.
- **Merksätze**: Konsequent nach Blöcken.
- **Umfang**: kap5-anorganisch (3.704 Zeilen) und kap1-atombau (3.348 Zeilen) sind sehr umfangreich.
- **Diagramme**: `{{DIAGRAM:atomic-orbitals}}` korrekt platziert.

### Schwächen
- **kap6-chemische-bindung**: Mit 1.461 Zeilen dünn für ein MedAT-Kernthema (Ionenbindung, kovalente Bindung, metallische Bindung, Van-der-Waals, H-Brücken).
- **kap2-materie-und-zustaende**: Nur 1.687 Zeilen — Aggregatzustände, Phasendiagramm, ideales Gasgesetz brauchen mehr Tiefe.
- **Fehlende Kapitel**: Kein kap3 vorhanden! Zwischen kap2 und kap4 klafft eine Lücke. Mögliche fehlende Themen: Stöchiometrie, Mol-Konzept, Lösungen/Löslichkeit.
- **Zwei Dateien heißen "kap6"**: `kap6-chemische-bindung.ts` und `kap6-organische-chemie.ts` — verwirrende Namensgebung, deutet auf fehlende Kapitel-Nummern hin.

### Fehlende Themen für MedAT-Reife
- **KRITISCH**: Kein Kapitel zu Stöchiometrie/Mol-Rechnungen (MedAT-Standardthema)
- **KRITISCH**: Kein Kapitel zu Lösungen, Löslichkeit, Kolligative Eigenschaften
- Säure-Base-Chemie: Unklar ob in kap4-reaktionen oder separat behandelt
- Elektrochemie: Redox, Galvanische Zelle, Elektrolyse — Standardthemen fehlen möglicherweise
- Chemische Bindung zu dünn (H-Brücken, Van-der-Waals für Biochemie essentiell)

---

## 3. PHYSIK — 5/10

### Stärken
- **ph-1-01 (SI-Einheiten)**: Gute Einleitung mit Blutdruck-Bezug, klare Struktur.
- **Übergänge**: Vorhanden ("Bisher haben wir gesehen").
- **Klinische Bezüge**: Durchgängig (Blutdruck, Infusionsrate, Fieberthermometer).
- **ph-4-01 (Wärmelehre)**: Gute Analogie mit Fieberthermometer, Dichteanomalie erklärt.

### Schwächen
- **Gesamtumfang nur 8.389 Zeilen** — deutlich weniger als Bio (11.478) oder Chemie (15.564).
- **kap7-atomphysik**: Nur 1.197 Zeilen für Radioaktivität, Kernphysik, Strahlung — zu dünn für MedAT (Radiologie, Nuklearmedizin, Strahlenschutz).
- **kap3-schwingungen-und-wellen**: Nur 1.425 Zeilen — Akustik (Hören, Dezibel, Doppler-Ultraschall) und Optik (Linsen, Auge, Mikroskop) brauchen mehr.
- **kap4-waermelehre**: Nur 1.292 Zeilen — Hauptsätze der Thermodynamik, Entropie fehlen möglicherweise.
- **Diagramme**: `{{DIAGRAM:coordinate-system}}` wird generisch verwendet (auch in Wärmelehre) — keine fachspezifischen Diagramme für Thermodynamik, Wellen, Optik.
- **Redundanz in ph-1-01**: "Definition abgeleitete Größen" wird zweimal erklärt (Zeile 76-78 und vorher).

### Fehlende Themen für MedAT-Reife
- **KRITISCH**: Fluidmechanik (Hagen-Poiseuille, Bernoulli, Blutströmung) — MedAT-Kernthema
- **KRITISCH**: Optik-Tiefe (Brechung, Totalreflexion, Linsengleichung, Auge als optisches System)
- Akustik (Schallpegel, Dezibel, Impedanz, Ultraschall-Doppler)
- Strahlenschutz (Dosimetrie: Gray, Sievert, Äquivalentdosis)
- Elektrizität: Ohmsches Gesetz, Kirchhoff, Wechselstrom (für EKG-Verständnis)

---

## 4. MATHEMATIK — 5/10

### Stärken
- **ma-1-01 (Zehnerpotenzen)**: Guter Einstieg mit medizinischen Größenordnungen. Klare Rechenregeln-Tabelle.
- **ma-7-01 (Kombinatorik)**: Starke Einleitung mit DNA-Codons. Entscheidungsbaum-Ansatz didaktisch sinnvoll.
- **ma-5-01 (Lineare Funktionen)**: Lambert-Beer und Pharmakokinetik als Anwendung — guter MedAT-Bezug.
- **"Idee" + "Verfahren"**-Struktur in Mathe-UKs: Erst Konzept, dann Rechenschritte — didaktisch gut.

### Schwächen
- **Gesamtumfang nur 9.114 Zeilen** — zu wenig für 5 Kapitel.
- **kap7-stochastik**: Nur 1.237 Zeilen für 4 UKs (Kombinatorik, Wahrscheinlichkeit, Bayes, Normalverteilung) — viel zu dünn.
- **kap6-vektorrechnung**: Nur 1.406 Zeilen — Vektoren sind MedAT-relevant (Kräftezerlegung, Drehmoment).
- **kap5-funktionen**: Nur 1.507 Zeilen für Analysis — Quadratische Funktionen, Exponential, Logarithmus brauchen mehr Platz.
- **Diagramme**: `{{DIAGRAM:coordinate-system}}` wird ÜBERALL verwendet — auch für Stochastik (ma-7-01 zeigt coordinate-system + probability-distribution). Kein spezifisches Diagramm für Kombinatorik, Normalverteilung, Vektoren.
- **ma-1-01**: `{{DIAGRAM:coordinate-system}}` wird DOPPELT referenziert (Zeile 43-44) — sieht nach Copy-Paste-Fehler aus.

### Fehlende Themen für MedAT-Reife
- **KRITISCH**: Gleichungen lösen (linear, quadratisch, Bruchgleichungen) — Basis-MedAT
- **KRITISCH**: Prozentrechnung, Dreisatz, Einheitenumrechnung — MedAT-Standardaufgaben
- Logarithmen und Exponentialfunktionen (pH-Wert, Halbwertszeit, Wachstum)
- Trigonometrie (Grundlagen für Vektoren und Physik)
- Differentialrechnung Grundlagen (Steigung, Extrema — wird im MedAT gefragt)

---

## Querschnitts-Probleme (alle Fächer)

### 1. Diagramm-Generizität (MEDIUM)
`{{DIAGRAM:coordinate-system}}` wird als "Platzhalter" in fast allen Fächern verwendet — auch wo es thematisch nicht passt (Wärmelehre, Stochastik, Organische Chemie). Schüler sehen immer dasselbe Koordinatensystem statt fachspezifischer Visualisierungen.

**Betroffene UKs**: ph-4-01, ma-1-01 (doppelt!), ma-7-01, ma-5-01

### 2. Fehlende Kapitel (CRITICAL)
- Chemie: Kein kap3 (Stöchiometrie/Lösungen)
- Physik: Keine Fluidmechanik, lückenhafte Optik/Akustik
- Mathematik: Keine Prozentrechnung, kein Gleichungslösen

### 3. Dünne Kapitel (HIGH)
Kapitel unter 1.300 Zeilen haben typischerweise zu wenig Tiefe für MedAT-Vorbereitung:
- `kap7-atomphysik.ts` (1.197 Zeilen)
- `kap7-stochastik.ts` (1.237 Zeilen)
- `kap4-waermelehre.ts` (1.292 Zeilen)

### 4. Einleitungen (LOW)
Biologie und Chemie kap1 haben vorbildliche Einleitungen mit Alltagsbezug und motivierenden Fragen. Mathematik-Einleitungen sind ebenfalls gut (medizinische Beispiele). Physik variiert — manche UKs starten etwas trocken.

### 5. Redundanz (MEDIUM)
Einige UKs wiederholen Definitionen innerhalb desselben UKs (z.B. ph-1-01: abgeleitete Größen zweimal definiert). Über UKs hinweg gibt es gelegentliche Überlappungen (Zellmembran in Bio).

---

## Prioritäten für Fixes

### P0 — CRITICAL (Fehlende Kernthemen)
1. **Chemie kap3 erstellen**: Stöchiometrie, Mol-Konzept, Lösungen, Löslichkeit, Kolligative Eigenschaften
2. **Physik Fluidmechanik erstellen**: Hagen-Poiseuille, Bernoulli, Kontinuitätsgleichung, Viskosität
3. **Mathematik Grundlagen-Kapitel**: Prozentrechnung, Dreisatz, Gleichungen lösen (linear + quadratisch)

### P1 — HIGH (Dünne Kapitel vertiefen)
4. **Physik kap7-atomphysik vertiefen**: Radioaktiver Zerfall (α, β, γ), Halbwertszeit, Dosimetrie (Gray, Sievert), Strahlenschutz
5. **Mathematik kap7-stochastik vertiefen**: Mehr Beispiele bei Bayes/PPV, Normalverteilung mit Tabellen
6. **Chemie kap6-chemische-bindung vertiefen**: H-Brücken, Van-der-Waals, Dipol-Dipol detaillierter
7. **Physik Optik vertiefen**: Linsengleichung, Brechungsgesetz, Totalreflexion, Auge

### P2 — MEDIUM (Qualitätsverbesserung)
8. **Diagramme diversifizieren**: Fachspezifische Diagramme statt generisches coordinate-system
9. **Doppelte Diagramm-Referenzen entfernen**: ma-1-01 hat `{{DIAGRAM:coordinate-system}}` zweimal
10. **Redundanz in ph-1-01 bereinigen**: Doppelte Definition "abgeleitete Größen"
11. **Analogien ergänzen**: Besonders in Physik (Elektrizität, Wellen) und Mathematik (Vektoren)

### P3 — LOW (Polish)
12. **Genetik vertiefen**: Stammbaumanalyse, Hardy-Weinberg
13. **Chemie-Kapitelnummern korrigieren**: Zwei "kap6"-Dateien auflösen
14. **Mathematik**: Trigonometrie-Grundlagen ergänzen

---

## Fazit

**Biologie ist das stärkste Fach** — didaktisch vorbildlich, gute Tiefe, konsistente Struktur. Es kann als Template für die anderen Fächer dienen.

**Chemie hat gute Einzelkapitel** (Atombau, Anorganik), aber **strukturelle Lücken** (fehlendes kap3, dünne Bindungslehre).

**Physik und Mathematik sind die schwächsten Fächer** — zu wenig Gesamtumfang, fehlende Kernthemen (Fluidmechanik, Prozentrechnung), und generische Diagramme. Für eine ernsthafte MedAT-Vorbereitung reichen diese beiden Fächer in der aktuellen Form NICHT aus.

**Geschätzte Arbeit für MedAT-Reife**: 
- Biologie: ~10% mehr Content nötig
- Chemie: ~30% mehr Content nötig (v.a. neues kap3)
- Physik: ~50% mehr Content nötig (Fluidmechanik, Optik, Akustik)
- Mathematik: ~40% mehr Content nötig (Grundlagen, Trig, Diff)
