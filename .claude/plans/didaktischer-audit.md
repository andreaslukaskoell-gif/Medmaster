# Didaktischer Audit: Verständlichkeit der UKs

**Datum:** 2026-02-26
**Status:** Abgeschlossen

---

## Das Kernproblem

Viele UKs sind wie ein Formelblatt geschrieben, nicht wie ein Lehrbuch. Ein Schüler, der das Thema zum ersten Mal sieht, versteht nicht *warum* etwas so ist — er sieht nur Formeln und Zahlen.

---

## 1. NERNST-GLEICHUNG (ch-11-03) — Paradebeispiel für das Problem

**Was ein Schüler sieht:**
- Einleitung: E = E° − (0,05916/n)·log Q; Q = [Red]/[Ox]; 59,16 mV; K = 10^(n·E°/0,05916); E_Ion = (RT/zF)·ln([außen]/[innen]); K⁺ ≈ −90 mV, Na⁺ ≈ +62 mV...
- Schon die Einleitung ist eine Formelsammlung — kein Schüler versteht das beim Lesen

**Konkrete Probleme:**
- Einleitung enthält 6+ Formeln statt einer verständlichen Erklärung ("Worum geht es" ist kein Fließtext, sondern ein komprimiertes Formelbündel)
- "In diesem Kapitel lernst du" listet Formeln statt Konzepte — z.B. "Nernst: E = E° − (0,05916/n)·log Q" statt "warum sich Batteriespannung mit der Konzentration ändert"
- Rechenbeispiele ohne Erklärung warum: Cu²⁺/Cu bei 0,01 mol/L → 0,34 − 0,02958 × 2 = ... Ein Schüler sieht nur Zahlen, kein Verständnis
- Kein einziger Vergleich/Analogie — z.B. "Stell dir vor: eine Batterie wird schwächer wenn sie sich entlädt → das ist Nernst"
- MedAT-Fokus wiederholt die gleichen Formeln nochmal — dreifache Redundanz (Einleitung, Hauptteil, MedAT-Fokus, Zusammenfassung)

---

## 2. Systemisches Problem: Die "Einleitung" ist überall eine Formel-Zusammenfassung

Fast alle UKs haben dasselbe Muster in der Einleitung:

> **Worum geht es?** [FORMEL 1]; [FORMEL 2]; [FORMEL 3]. **Warum MedAT-relevant?** [FORMEL NOCHMAL]. **Welche Fragen?** „[FORMEL]?"; „[FORMEL]?"

**Beispiele:**
- **ph-4-01** (Wärmelehre): "Kelvin T = °C + 273,15, spezifische Wärmekapazität c, Q = m·c·ΔT" — alles in einem Absatz
- **ph-2-01** (Newton): "Kinematik (Weg, Geschwindigkeit, Beschleunigung), F = m·a, actio = reactio, g ≈ 9,81 m/s²" — Formelaufzählung
- **ma-1-01** (Zehnerpotenzen): "10ⁿ, 10³ × 10⁻⁵ = ?" — sofort Rechnung statt Konzept

**Was es sein sollte:** "Stell dir vor du bist im Labor und misst den pH einer Blutprobe..." → Motivation → dann erst Formeln

---

## 3. Rechenbeispiele: Oft unnötig und verwirrend

### Unnötige Rechenbeispiele (können raus)

| UK | Rechenbeispiel | Problem |
|----|----------------|---------|
| ch-11-03 (Nernst) | Cu²⁺/Cu bei 0,01 mol/L, Zn²⁺/Zn bei 0,001 mol/L | Kein Schüler braucht 2 Elektrodenrechnungen — eine reicht, mit Erklärung |
| ch-11-03 | K = 10^(2×1,10/0,05916) = 10^37,2 | Irrelevant für MedAT — verwirrt nur |
| ch-11-03 | Henderson-Hasselbalch-Ableitung aus Nernst | Zu abstrakt, gehört nicht in dieses UK |
| ph-4-01 | Metallstab-Dehnung (α = 12 × 10⁻⁶) | Kein Medizin-Bezug — irrelevant für MedAT |
| ph-4-01 | Verdunstungskühlung (600 W × 3600 s) | Zu detailliert, verwirrt |

### Gute Rechenbeispiele (können bleiben)

| UK | Rechenbeispiel | Warum gut |
|----|----------------|-----------|
| ph-4-01 | Mischungstemperatur (80°C + 20°C) | Alltagsnah, einfach |
| ph-4-01 | Körpertemperatur °C → K/°F | Direkt klinisch relevant |
| ch-7-01 | Ethanol Brennwert 7,1 kcal/g | Medizinisch relevant |

---

## 4. Redundanz: MedAT-Fokus = Zusammenfassung = Einleitung

Jedes UK wiederholt den gleichen Stoff 3-4 mal:

1. **Einleitung** → Formel-Zusammenfassung
2. **Hauptteil** → Erklärung mit Formeln
3. **MedAT-Fokus** → dieselben Formeln nochmal, + "Typische Fallen"
4. **Zusammenfassung (ultrakompakt)** → dieselben Formeln nochmal

Am schlimmsten bei ch-11-03 (Nernst): Die Formel E = E° − (0,05916/n)·log Q kommt **8 mal** im selben UK vor.

**Vorschlag:** MedAT-Fokus sollte nur Prüfungstipps enthalten (Fallen, Tricks), nicht den ganzen Stoff wiederholen.

---

## 5. Fehlende didaktische Elemente

### Analogien/Vergleiche — fast komplett fehlend
- Nernst: Kein "Batterie wird schwächer"-Vergleich
- Osmose: Kein "Rosinchen im Wasser"-Bild
- Newton: Guter klinischer Bezug (Dezelerationstrauma), aber selten

### Schrittweise Hinführung — oft zu abrupt
- ch-10-01 (Säure-Base): Springt von Arrhenius (1884) direkt zu Brønsted-Lewis ohne zu erklären warum die alte Definition nicht reicht
- ph-2-01 (Newton): Guter Übergang mit "Um Bewegung mathematisch zu fassen..." — dieses UK ist eines der besseren

### "Warum ist das so?" fehlt
- Formeln werden hingestellt, aber nicht hergeleitet oder motiviert
- Z.B. Nernst: Warum ändert sich das Potenzial mit der Konzentration? → Keine intuitive Erklärung

---

## 6. Positive Beispiele (so sollte es sein)

### ph-1-01 (SI-Einheiten) — GUT
- Klare Struktur mit Tabellen
- Gute Erklärungen ("Jede physikalische Größe = Zahlenwert × Einheit")
- Alltagsbeispiele ("Zwei Tassen Kaffee → doppeltes Volumen, aber dieselbe Temperatur")
- Merksätze nach jedem Block

### ch-7-01 (Reaktionstypen) — GUT
- Tabelle mit Schema + Beispiel + Klinischer Bezug = top
- Klare Definitionen bevor Formeln kommen
- Guter klinischer Bezug (Katalase, Nierensteine, Gicht)

### bio-1-03 (Zellmembran) — das Referenz-UK
- SVG-Diagramme inline
- Schrittweiser Aufbau
- Tabellen für Übersicht
- "Was ist amphiphil?" wird in Klammern erklärt

---

## 7. Konkrete Maßnahmen (priorisiert)

| Prio | Maßnahme | Betroffene UKs |
|------|----------|-----------------|
| **P0** | Einleitungen umschreiben: Fließtext statt Formelsammlung. "Stell dir vor..." / "Im Alltag..." → dann erst Formeln | ALLE UKs |
| **P0** | "Lernst du" umschreiben: Konzepte statt Formeln ("warum sich Spannung ändert" statt "E = E° − ...") | ALLE UKs |
| **P1** | Unnötige Rechenbeispiele entfernen: Max. 1-2 pro UK, nur klinisch relevante | ch-11-03, ph-4-01, ph-2-01 |
| **P1** | Redundanz MedAT-Fokus/Zusammenfassung: MedAT-Fokus nur Prüfungstipps, keine Wiederholung | ALLE UKs |
| **P1** | Nernst komplett neu schreiben: Analogie → Konzept → eine Formel → eine Rechnung → Biologie-Anwendung | ch-11-03 |
| **P2** | Analogien ergänzen bei abstrakten Themen (Elektrochemie, Thermodynamik, Stochastik) | ~20 UKs in Chemie/Physik/Mathe |
| **P2** | Zu kurze Chemie-UKs (ch-10-01: 282w, ch-10-02: 262w, ch-10-03: 226w) mit verständlichen Erklärungen auffüllen | 4 UKs |
| **P3** | Zu lange UKs (>2000w) aufsplitten oder Redundanz kürzen | 7 UKs in Mathe/Physik |
