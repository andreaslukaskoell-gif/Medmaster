/**
 * Archived Unterkapitel from Physik Kap7 (Atomphysik).
 * Removed because topics are NOT on the MedAT Stichwortliste for Atomphysik.
 */
import type { Kapitel } from "../../types";

export const archivedPhysAtomUKs: Kapitel["unterkapitel"] = [
  // ─────────────────────────────────────────────────────────────────────────
  // UK ph-7-05: Strahlenschutz und klinische Strahlenanwendungen
  // Reason: "Strahlenschutz" and "klinische Strahlenanwendungen" are NOT
  // listed in MedAT Stichwortliste for Atomphysik.
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "ph-7-05",
    title: "Strahlenschutz und klinische Strahlenanwendungen",
    stichworte: [
      "ALARA-Prinzip",
      "Abstandsquadratgesetz",
      "Abschirmung",
      "Strahlenschutzverordnung",
      "Dosisgrenzwerte",
      "Strahlentherapie",
      "Brachytherapie",
      "Teletherapie",
      "Linearbeschleuniger",
      "Nuklearmedizin Übersicht",
      "Strahlenunfall",
      "Akutes Strahlensyndrom",
      "Radon Österreich",
    ],
    content: `## Strahlenschutz — Wenn Physik Leben rettet

Jeder Radiologe trägt ein Dosimeter, jede CT-Anforderung braucht eine Rechtfertigung, und in manchen Teilen Oberösterreichs sickert unsichtbar Radongas aus dem Boden in Wohnhäuser. Strahlenschutz ist kein abstraktes Thema — er bestimmt den klinischen Alltag und war bereits in mehreren MedAT-Prüfungen vertreten.

{{DIAGRAM:strahlenschutz-alara}}

Die drei Säulen des Strahlenschutzes folgen dem **ALARA-Prinzip** (As Low As Reasonably Achievable):

| Maßnahme | Physikalisches Prinzip | Formel | Praxisbeispiel |
|----------|----------------------|--------|----------------|
| **Abstand** ↑ | Dosisleistung sinkt mit r² | Ḋ ∝ 1/r² | 2× Abstand → ¼ der Dosis |
| **Abschirmung** ↑ | Material absorbiert Strahlung | I = I₀ · (½)^(d/HVL) | Bleischürze, Betonwand |
| **Zeit** ↓ | Dosis proportional zur Expositionszeit | D = Ḋ · t | Kurzprogramm statt Standardprotokoll |

**Abschirmregel PAB** — welches Material für welche Strahlung?

| Strahlenart | Abschirmung | Warum? |
|-------------|------------|--------|
| α (Heliumkerne) | Papier, Haut | Hohe Masse → geringe Reichweite (~5 cm Luft) |
| β (Elektronen) | Aluminium, Plexiglas | Kein Blei! → Bremsstrahlung |
| γ / Röntgen (Photonen) | Blei, Beton | Hohe Elektronendichte → Photoeffekt, Compton |
| Neutronen | Wasser, Paraffin | Leichte Kerne (H) → elastischer Stoß, max. Energieübertrag |

> **Merke:** ALARA = **A**bstand ↑ (I ∝ 1/r²), **A**bschirmung ↑ (PAB: Papier–Alu–Blei für α–β–γ), **Z**eit ↓ (D = Ḋ·t). MedAT-Falle: Blei ist für Neutronen unwirksam — Wasser/Paraffin ist richtig!

---

## Gesetzliche Dosisgrenzwerte (Österreich / EU)

Die österreichische **Strahlenschutzverordnung** (StrSchV) setzt verbindliche Obergrenzen. Stell dir das als ein Stufenmodell vor: Je näher eine Person an Strahlenquellen arbeitet, desto höher der erlaubte Grenzwert — aber auch desto strenger die Überwachung.

| Personengruppe | Grenzwert effektive Dosis | Überwachung |
|---------------|--------------------------|-------------|
| Beruflich Kat. A (Radiologen, Nuklearmediziner) | **≤ 20 mSv/Jahr** | Personendosimeter Pflicht |
| Beruflich Kat. B (OP-Personal, Ambulanz) | ≤ 6 mSv/Jahr | Bereichsüberwachung |
| Allgemeinbevölkerung | ≤ 1 mSv/Jahr | Zusätzlich zur natürlichen Strahlung |
| Schwangere (ab Meldung) | ≤ 1 mSv restliche Schwangerschaft | Strenger Embryonalschutz |
| Augenlinse (beruflich) | ≤ 20 mSv/Jahr | Schutz vor Strahlenkatarakt |

**Natürliche Strahlenbelastung in Österreich:** ca. **2,1 mSv/Jahr** — zusammengesetzt aus kosmischer Strahlung (~0,3 mSv), terrestrischer Strahlung (~0,5 mSv), Radon-Inhalation (~1,0 mSv) und interner Strahlung durch ⁴⁰K im Körper (~0,3 mSv). Medizinische Diagnostik addiert im Schnitt weitere ~1,5 mSv/Jahr.

> **Merke:** Grenzwerte: Beruf Kat. A ≤ **20 mSv/a** | Bevölkerung ≤ **1 mSv/a** | Natürlich ~**2,1 mSv/a**. Die Zahl 20 taucht dreimal auf: 20 mSv Kat. A, 20 mSv Augenlinse, w_R = 20 für α-Strahlung.

---

## Dosisvergleiche — ein Röntgenbild vs. ein CT

Für die MedAT-Prüfung musst du Größenordnungen kennen. Die folgende Tabelle ordnet typische medizinische Expositionen ein:

| Exposition | Effektive Dosis | Entspricht … natürlicher Strahlung |
|-----------|----------------|--------------------------------------|
| Röntgen Thorax (2 Ebenen) | 0,02–0,1 mSv | 1–5 Tage |
| Mammographie | 0,4 mSv | 2 Monate |
| CT Schädel | 2 mSv | ~1 Jahr |
| CT Thorax | 7 mSv | ~3 Jahre |
| **CT Abdomen** | **10 mSv** | **~5 Jahre** |
| PET/CT (¹⁸F-FDG) | 10–25 mSv | 5–12 Jahre |
| Koronarangiographie | 5–15 mSv | 2–7 Jahre |
| Transatlantikflug (hin+zurück) | 0,05 mSv | 2–3 Tage |

**Faustregel:** Ein CT Abdomen entspricht etwa **500 Thorax-Röntgenaufnahmen** oder 5 Jahren natürlicher Strahlung. Deshalb verlangt jede CT-Anforderung eine rechtfertigende Indikation.

> **Merke:** CT Abdomen ~10 mSv ≈ 5 Jahre natürliche Strahlung ≈ 500× Thorax-Röntgen. Niedrigste Dosis: konventionelles Röntgen; höchste: PET/CT und Intervention.

---

## Strahlentherapie — Ionisierende Strahlung gegen Krebs

Die DNA ist das Hauptziel: Ionisierende Strahlung erzeugt Einzel- und Doppelstrangbrüche. Tumorzellen reparieren diese Schäden schlechter als gesundes Gewebe, weil ihre DNA-Reparaturmechanismen oft defekt sind. Diesen Unterschied nutzt die Strahlentherapie systematisch aus.

{{DIAGRAM:strahlentherapie-vergleich}}

### Teletherapie (Quelle außerhalb des Körpers)

| Methode | Strahlung | Energie | Besonderheit |
|---------|-----------|---------|--------------|
| **LINAC** (Linearbeschleuniger) | Photonen oder Elektronen | 4–25 MV | Gold-Standard; variable Energie, IMRT/VMAT möglich |
| **⁶⁰Co-Gerät** | γ (1,17 + 1,33 MeV) | fest | Historisch; T½ = 5,27 a, Quellentausch nötig |
| **Protonentherapie** | Protonen (p⁺) | 70–250 MeV | **Bragg-Peak**: Dosismaximum am Reichweitenende |

Der **Bragg-Peak** ist der entscheidende Vorteil geladener Teilchen: Protonen geben ihre Energie erst am Ende ihrer Reichweite schlagartig ab — wie ein Läufer, der auf den letzten Metern sprintet. Vor dem Tumor liegt die Dosis niedrig, im Tumor ist sie maximal, und dahinter fällt sie auf nahezu null. Photonen dagegen zeigen ein exponentielles Dosisprofil mit Maximum nahe der Oberfläche und stetigem Abfall — Gewebe hinter dem Tumor wird also immer mitbelastet.

**IMRT** (Intensity-Modulated Radiation Therapy) und **VMAT** (Volumetric Modulated Arc Therapy) modulieren die Strahlintensität computergesteuert aus vielen Winkeln. Ergebnis: Die Dosis wird dreidimensional an die Tumorform angepasst, Risikoorgane (Rückenmark, Parotis, Lunge) werden geschont.

### Brachytherapie (Quelle im oder am Tumor)

| Technik | Beschreibung | Typische Indikation |
|---------|-------------|---------------------|
| Intrakavitär | Quelle in Körperhöhle | Zervix-Ca (Uterus) |
| Interstitiell | Seeds direkt im Tumorgewebe | Prostata-Ca (¹²⁵I, ¹⁰³Pd) |

Vorteil der Brachytherapie: Durch das Abstandsquadratgesetz (I ∝ 1/r²) fällt die Dosis um die Quelle herum extrem schnell ab. Wenige Zentimeter entfernt ist die Belastung bereits minimal — das umliegende gesunde Gewebe wird geschont.

**Nuklide in der Brachytherapie:** ¹⁹²Ir (T½ = 73,8 d), ¹²⁵I (T½ = 59,4 d), ¹⁰³Pd (T½ = 17 d), ⁶⁰Co (T½ = 5,27 a) — alle γ-Strahler.

> **Merke:** Teletherapie = Quelle **außen** (LINAC, Protonen, ⁶⁰Co). Brachytherapie = Quelle **im/am Tumor** (hohe lokale Dosis, schneller 1/r²-Abfall). Protonentherapie-Vorteil: Bragg-Peak → Dosismaximum erst im Tumor, fast null dahinter.

---

## Nuklearmedizin — Diagnostik und Therapie

Nuklearmedizin dreht das Prinzip der Radiologie um: Statt Strahlung von außen durch den Körper zu schicken, wird ein radioaktives Pharmakon (Tracer) verabreicht, das sich im Zielgewebe anreichert und Strahlung **von innen** aussendet.

### Diagnostik: Dem Stoffwechsel zuschauen

| Verfahren | Nuklid | Energie / T½ | Prinzip | Klinische Anwendung |
|-----------|--------|--------------|---------|---------------------|
| Szintigraphie | ⁹⁹ᵐTc | γ, 140 keV, 6 h | Gammakamera, 2D | Skelett, Schilddrüse, Niere |
| SPECT | ⁹⁹ᵐTc, ²⁰¹Tl | γ | Rotierende Gammakamera, 3D | Myokardperfusion, Hirnperfusion |
| PET | ¹⁸F | β⁺ → 2×511 keV, 110 min | Koinzidenzdetektion, 3D | Tumorstaging, Neurologie |
| PET/CT | ¹⁸F-FDG | β⁺ + CT | PET + CT fusioniert | Tumorstaging, Therapiekontrolle |

**Warum ⁹⁹ᵐTc der „Arbeitsesel" der Nuklearmedizin ist:** Ideale γ-Energie (140 keV — durchdringt den Körper, ist aber gut detektierbar), kurze T½ (6 h — genug für die Untersuchung, schneller Zerfall danach), leicht aus ⁹⁹Mo-Generator verfügbar, bindet an viele Pharmazeutika.

### Therapie: Strahlung von innen

| Verfahren | Nuklid | Strahlung / T½ | Indikation |
|-----------|--------|----------------|-----------|
| Radiojodtherapie | ¹³¹I | β⁻ + γ, 8 d | M. Basedow, Schilddrüsen-Ca |
| PSMA-Therapie | ¹⁷⁷Lu | β⁻, 6,65 d | Metastasiertes Prostata-Ca |
| DOTATATE-Therapie | ¹⁷⁷Lu | β⁻, 6,65 d | Neuroendokrine Tumoren |
| Radiosynoviorthese | ⁹⁰Y, ¹⁸⁶Re, ¹⁶⁹Er | β⁻ | Chronische Gelenksentzündungen |
| Ra-223-Therapie | ²²³Ra | α, 11,4 d | Knochenmetastasen (Prostata-Ca) |

**Theragnostik** — das Zukunftsprinzip: Derselbe Ligand wird mit verschiedenen Nukliden gekoppelt. Beispiel PSMA: ⁶⁸Ga-PSMA (β⁺-Strahler → PET-Diagnostik), ¹⁷⁷Lu-PSMA (β⁻-Strahler → Therapie). Erst sehen, wo der Tumor sitzt, dann gezielt bestrahlen.

> **Merke:** Diagnostik nutzt **γ-Strahler** (Photonen verlassen den Körper → Detektion von außen). Therapie nutzt **β⁻- oder α-Strahler** (kurze Reichweite im Gewebe → lokale Zerstörung). Theragnostik: gleicher Ligand, verschiedene Nuklide (⁶⁸Ga-PET / ¹⁷⁷Lu-Therapie).

---

## Biologische Strahlenwirkung und Akutes Strahlensyndrom (ARS)

Strahlung schädigt Gewebe auf zwei Wegen: **direkt** (Ionisation der DNA → Strangbrüche) und **indirekt** (Radiolyse von Wasser → freie Radikale wie OH• → DNA-Schäden). ~70 % der biologischen Wirkung in Weichgewebe entstehen über den indirekten Weg.

Das **Bergonié-Tribondeau-Gesetz** (1906) erklärt, warum verschiedene Gewebe unterschiedlich strahlenempfindlich sind: Je höher die Mitoserate und je undifferenzierter die Zellen, desto empfindlicher.

| Gewebe | Empfindlichkeit | Begründung |
|--------|----------------|------------|
| Lymphozyten, Knochenmark | Sehr hoch | Hohe Teilungsrate |
| Darmepithel | Hoch | Schnelle Erneuerung (3–5 Tage) |
| Haut, Keimzellen | Mittel | Stammzellkompartiment |
| Muskulatur | Niedrig | Wenig Teilung |
| Nervenzellen | Sehr niedrig | Postmitotisch |

### Das Akute Strahlensyndrom (ARS)

Das ARS tritt nach **Ganzkörperbestrahlung** mit hoher Dosis in kurzer Zeit auf. Es ist ein **deterministischer Effekt** (Schwellendosis, Schwere dosisabhängig) — im Gegensatz zu stochastischen Effekten (Krebs, keine Schwelle, Wahrscheinlichkeit dosisabhängig).

| Syndrom | Dosis (Ganzkörper) | Latenz | Leitsymptome | Prognose |
|---------|-------------------|--------|--------------|----------|
| Prodromalphase | ab ~1 Gy | Stunden | Übelkeit, Erbrechen, Durchfall | Reversibel |
| **Hämatopoetisch** | 1–6 Gy | 2–3 Wochen | Leukopenie, Thrombopenie → Infekte, Blutungen | Überlebbar mit Therapie |
| **Gastrointestinal** | 6–10 Gy | 1 Woche | Zottenatrophie, blutiger Durchfall, Sepsis | Meist letal |
| **Zerebrovaskulär** | > 10 Gy | Stunden | Hirnödem, Koma, Kreislaufkollaps | Immer letal |

**LD₅₀/₆₀** (letale Dosis für 50 % der Exponierten innerhalb von 60 Tagen, ohne Therapie): ca. **3,5–4 Gy**. Mit moderner Intensivmedizin (Knochenmarktransplantation, Wachstumsfaktoren) kann die Überlebensgrenze auf ~8 Gy angehoben werden.

**Lymphozytenabfall als biologischer Dosimeter:** Lymphozyten reagieren innerhalb von Stunden auf Strahlung. Ein Abfall auf < 1000/μl in den ersten 48 h deutet auf > 1 Gy; < 500/μl auf > 2 Gy; < 100/μl auf > 6 Gy. Dieser einfache Bluttest ist in Strahlenunfall-Szenarien die schnellste Dosisabschätzung.

> **Merke:** ARS-Reihenfolge: hämatopoetisch (1–6 Gy) → gastrointestinal (6–10 Gy) → zerebrovaskulär (>10 Gy). LD₅₀ ≈ 3,5–4 Gy. Lymphozyten = empfindlichste Zellen = bester Biomarker. Deterministisch (Schwelle!) vs. stochastisch (Krebs, keine Schwelle).

---

## Radon in Österreich — die unsichtbare Gefahr

Radon (²²²Rn) ist ein farb- und geruchloses radioaktives **Edelgas** aus der Uran-Radium-Zerfallsreihe: ²³⁸U → … → ²²⁶Ra → **²²²Rn** + α (T½ = 3,82 d). Als Gas diffundiert es aus dem Boden durch Risse und Spalten in Gebäude.

**Warum ist Radon so gefährlich?**

1. ²²²Rn zerfällt zu kurzlebigen **α-strahlenden Tochterprodukten**: ²¹⁸Po (T½ = 3,1 min) → ²¹⁴Pb → ²¹⁴Bi → ²¹⁴Po (T½ = 164 μs)
2. Diese Tochterprodukte lagern sich an **Aerosolpartikel** an und werden eingeatmet
3. Im Bronchialepithel geben sie **α-Strahlung** direkt ins Gewebe ab — mit einem Strahlenwichtungsfaktor w_R = 20 (20× biologisch wirksamer als γ!)
4. Folge: **Lungenkrebs** — nach Rauchen die **zweithäufigste Ursache** weltweit

**Radon-Situation in Österreich:**

| Parameter | Wert |
|-----------|------|
| Mittlere Raumluftkonzentration | ~99 Bq/m³ |
| EU-Referenzwert (Grenze für Sanierung) | 300 Bq/m³ |
| Beitrag zur Jahresdosis | ~1 mSv/a (~50 % der natürlichen Strahlung) |
| Risikogebiete | Mühlviertel, Waldviertel, Teile der Steiermark und Salzburgs |

Der geologische Grund: Kristallines Grundgestein (Granit, Gneis) in diesen Regionen enthält mehr Uran als Sedimentgestein. Gegenmaßnahmen: Radon-Messung, Abdichtung von Kellerböden, kontrollierte Belüftung.

> **Merke:** Radon (²²²Rn): α-strahlendes Edelgas, T½ = 3,82 d. Tochterprodukte im Lungenepithel → α-Strahlung (w_R = 20) → Lungenkrebs (Nr. 2 nach Rauchen). In Österreich ~1 mSv/a, Risikogebiete: Mühlviertel/Waldviertel.

---

## Rechenbeispiele

**Beispiel 1 — Abstandsquadratgesetz:**
Ein ⁶⁰Co-Präparat hat in 1 m Abstand eine Dosisleistung von 0,5 mSv/h. In welchem Abstand beträgt sie nur noch 0,02 mSv/h?

Lösung: Ḋ₁·r₁² = Ḋ₂·r₂² → r₂ = r₁ · √(Ḋ₁/Ḋ₂) = 1 m · √(0,5/0,02) = 1 m · √25 = **5 m**.

**Beispiel 2 — Abschirmung (Halbwertsschichtdicke HVL):**
¹³⁷Cs-Quelle: Ḋ₀ = 100 mSv/h. HVL in Blei = 6,5 mm. Wie viel Blei für < 1 mSv/h?

Lösung: 100 · (1/2)^n < 1 → n > log(100)/log(2) = 6,64 → **n = 7 HVL** → 7 × 6,5 mm = **45,5 mm Blei**.

**Beispiel 3 — Jahresdosis eines Radiologen:**
Dosisleistung in 1 m: 0,1 mSv/h. Arbeitsplatz: 3 m Abstand, 8 h/Tag, 250 Tage/Jahr.

In 3 m: Ḋ = 0,1 × (1/3)² = 0,0111 mSv/h.
Tagesdosis: 0,0111 × 8 = 0,089 mSv. Jahresdosis: 0,089 × 250 = **22,2 mSv/Jahr** → Grenzwert 20 mSv überschritten! Maßnahme: Bleischürze oder mehr Abstand.

---

## Prüfungsrelevante Zahlen und Fakten

| Größe | Wert | MedAT-Relevanz |
|-------|------|----------------|
| Grenzwert Kat. A | ≤ 20 mSv/a | Häufig abgefragt |
| Grenzwert Bevölkerung | ≤ 1 mSv/a | Häufig abgefragt |
| Natürliche Strahlung (AT) | ~2,1 mSv/a | Radon-Anteil ~1 mSv |
| CT Abdomen | ~10 mSv | = 5 Jahre natürliche Strahlung |
| LD₅₀/₆₀ | 3,5–4 Gy | Ohne Therapie |
| Radon T½ | 3,82 d | α-Strahler, Edelgas |
| w_R (α) | 20 | 20× wirksamer als γ |
| ⁹⁹ᵐTc γ-Energie | 140 keV, T½ = 6 h | Häufigstes Nuklid |
| Bragg-Peak | Protonen: Dosismax. am Ende | Protonentherapie-Vorteil |`,
    lernziele: [
      "Das ALARA-Prinzip (Abstand, Abschirmung, Zeit) erklären und das Abstandsquadratgesetz auf Strahlenschutzszenarien anwenden.",
      "Die gesetzlichen Dosisgrenzwerte für beruflich Strahlenexponierte und die Allgemeinbevölkerung kennen.",
      "Teletherapie (LINAC, Protonentherapie) und Brachytherapie hinsichtlich Prinzip und Anwendungsgebiet vergleichen.",
      "Diagnostische und therapeutische Nuklearmedizin-Verfahren mit den jeweiligen Nukliden zuordnen.",
      "Das akute Strahlensyndrom in seinen Phasen und die Bedeutung von Radon als natürlichem Strahlenrisiko beschreiben.",
    ],
    sections: [
      {
        heading: "Dosisgrenzwerte und Strahlenschutzrecht",
        text: "ALARA-Grundprinzipien (Abstand, Abschirmung, Zeit) → UK 03. Grenzwerte Österreich/EU: beruflich Kat. A ≤ 20 mSv/a, Kat. B ≤ 6 mSv/a, Bevölkerung ≤ 1 mSv/a, Schwangere ≤ 1 mSv restliche Schwangerschaft, Augenlinse ≤ 20 mSv/a. Natürliche Strahlung ~2,1 mSv/a (davon ~1 mSv Radon). Dosisvergleich: CT Abdomen ~10 mSv = 500 Thorax-Röntgen.",
        merksatz:
          "Dosisgrenzwerte: Beruf Kat. A ≤ 20 mSv/a; Bevölkerung ≤ 1 mSv/a. CT Abdomen ~10 mSv ≈ 5 Jahre natürliche Strahlung.",
      },
      {
        heading: "Strahlentherapie: Teletherapie und Brachytherapie",
        text: "Teletherapie: Quelle außerhalb (LINAC: variable Energie 4–25 MV; ⁶⁰Co-Gerät: 1,17+1,33 MeV γ; Protonentherapie: Bragg-Peak → präzises Dosismaximum). Brachytherapie: Quelle im/am Tumor (¹⁹²Ir, ¹²⁵I), hohe lokale Dosis, schneller Abfall. IMRT/VMAT: modulierte Dosisverteilung, Schonung von Risikoorganen.",
        merksatz:
          "Teletherapie = Quelle außen (LINAC, ⁶⁰Co, Protonen). Brachytherapie = Quelle im Tumor (¹⁹²Ir, ¹²⁵I). Bragg-Peak: Dosismaximum der Protonen am Zielort.",
      },
      {
        heading: "Akutes Strahlensyndrom und Radon",
        text: "ARS: ab ~1 Gy Ganzkörper; hämatopoetisch (1–6 Gy), gastrointestinal (6–10 Gy), zerebrovaskulär (>10 Gy). LD₅₀/₆₀ ohne Therapie: ~3,5–4 Gy. Lymphozytenabfall als Biomarker. Radon (²²²Rn): α-strahlendes Edelgas, Inhalation → Zerfallsprodukte → α-Strahlung im Lungenepithel → Lungenkrebs. Zweitwichtigste Ursache nach Rauchen in Österreich.",
        merksatz:
          "ARS: hämatopoetisch (1–6 Gy) → GI (6–10 Gy) → zerebrovaskulär (>10 Gy). Radon: α-Edelgas, Lungenkrebs, Nr. 2 nach Rauchen.",
      },
    ],
    merksätze: [
      "ALARA = Abstand ↑ (I ∝ 1/r²) + Abschirmung ↑ (PAB: Papier–Alu–Blei für α–β–γ) + Zeit ↓ (D = Ḋ·t). Blei ist für Neutronen unwirksam — Wasser/Paraffin!",
      "Dosisgrenzwerte: Beruf Kat. A ≤ 20 mSv/a | Bevölkerung ≤ 1 mSv/a | natürliche Strahlung AT ~2,1 mSv/a (davon ~1 mSv Radon).",
      "CT Abdomen ~10 mSv ≈ 500× Thorax-Röntgen ≈ 5 Jahre natürliche Strahlung. Jede CT braucht rechtfertigende Indikation.",
      "Bragg-Peak: Protonen geben Energie am Reichweitenende schlagartig ab → Dosismaximum im Tumor, fast null dahinter. Ideal für Kinder, Auge, ZNS.",
      "Teletherapie = Quelle außen (LINAC, ⁶⁰Co, Protonen); Brachytherapie = Quelle im/am Tumor (1/r²-Abfall → lokale Wirkung).",
      "Nuklearmedizin: Diagnostik = γ-Strahler (⁹⁹ᵐTc, 140 keV). Therapie = β⁻/α-Strahler (¹³¹I, ¹⁷⁷Lu, ²²³Ra). Theragnostik: gleicher Ligand, verschiedene Nuklide.",
      "ARS: hämatopoetisch (1–6 Gy) → GI (6–10 Gy) → zerebrovaskulär (>10 Gy). LD₅₀/₆₀ ≈ 3,5–4 Gy. Lymphozyten = empfindlichste Zellen und bester Biomarker.",
      "Bergonié-Tribondeau: Je höher die Mitoserate, desto strahlenempfindlicher. Lymphozyten > Darmepithel > Haut > Muskel > Nerven.",
      "Radon (²²²Rn): α-Edelgas, T½ = 3,82 d, Tochterprodukte → α im Lungenepithel (w_R = 20!) → Lungenkrebs Nr. 2 nach Rauchen. AT-Risikogebiete: Mühl-/Waldviertel.",
    ],
    altfrage: {
      question:
        "Erläutern Sie die Grundprinzipien des Strahlenschutzes und beschreiben Sie die Unterschiede zwischen Teletherapie und Brachytherapie.",
      answer:
        "Der Strahlenschutz basiert auf dem ALARA-Prinzip (As Low As Reasonably Achievable) mit drei Grundprinzipien: Erstens Abstand — die Dosisleistung nimmt mit dem Quadrat des Abstands ab (Abstandsquadratgesetz I ∝ 1/r²), eine Verdopplung des Abstands reduziert die Dosis auf ein Viertel. Zweitens Abschirmung — verschiedene Strahlenarten erfordern unterschiedliche Materialien: α-Strahlung wird von Papier gestoppt, β-Strahlung von Aluminium oder Plexiglas, γ-Strahlung von Blei oder Beton, und Neutronenstrahlung von wasserstoffreichen Materialien (Wasser, Paraffin). Drittens Zeit — die Gesamtdosis ist proportional zur Expositionszeit (D = Ḋ·t), daher soll die Aufenthaltszeit in Strahlenbereichen minimiert werden. Bei der Strahlentherapie unterscheidet man Teletherapie und Brachytherapie. Bei der Teletherapie befindet sich die Strahlenquelle außerhalb des Körpers — moderne Linearbeschleuniger (LINAC) erzeugen Photonen- oder Elektronenstrahlen variabler Energie (4–25 MV), alternativ werden Protonentherapiegeräte eingesetzt, deren Bragg-Peak eine präzise Dosisdeposition im Tumor ermöglicht. Historisch kam ⁶⁰Co (γ-Strahlung) zum Einsatz. IMRT und VMAT ermöglichen eine computergesteuerte Dosismodulation zum Schutz gesunder Organe. Bei der Brachytherapie wird die radioaktive Quelle (z. B. ¹⁹²Ir, ¹²⁵I) direkt im oder am Tumor platziert. Vorteil: sehr hohe lokale Dosis mit schnellem Dosisabfall (1/r²), dadurch Schonung des umgebenden Gewebes. Anwendungen: Zervix-Ca (intrakavitär), Prostata-Ca (Seeds), Endobronchiales Karzinom.",
    },
    klinischerBezug:
      "Strahlenschutz ist im klinischen Alltag allgegenwärtig: Bleischürzen in der Radiologie, Dosimeter für Personal, Radon-Messungen in Krankenhäusern. Moderne Strahlentherapie (IMRT/VMAT, Protonentherapie) ermöglicht präzise Tumorbestrahlung bei minimaler Schädigung gesunder Organe. Nuklearmedizinische Theragnostik (⁶⁸Ga/¹⁷⁷Lu-PSMA) revolutioniert die Behandlung metastasierter Karzinome.",
    selfTest: [
      {
        question:
          "In 2 Meter Abstand von einer radioaktiven Quelle beträgt die Dosisleistung 8 mSv/h. Wie hoch ist die Dosisleistung in 4 Meter Abstand?",
        options: ["4 mSv/h", "2 mSv/h", "1 mSv/h", "0,5 mSv/h", "0,25 mSv/h"],
        correctIndex: 1,
        explanation:
          "Das Abstandsquadratgesetz besagt: Ḋ ∝ 1/r². Verdopplung des Abstands (2 m → 4 m) senkt die Dosisleistung auf (2/4)² = 1/4: also 8 × 1/4 = 2 mSv/h. Dieses Gesetz gilt für Punktquellen und ist eine wichtige Grundlage klinischer Strahlenschutzberechnungen.",
        hints: [
          "Abstandsquadratgesetz: I ∝ 1/r². Abstand verdoppelt → Dosis geviertelt.",
          "Ḋ₂ = Ḋ₁ × (r₁/r₂)² = 8 × (2/4)² = 2 mSv/h.",
        ],
        tags: ["abstandsgesetz", "strahlenschutz", "dosisleistung"],
        difficulty: 1,
      },
      {
        question: "Welches Material ist am besten zur Abschirmung von Neutronenstrahlung geeignet?",
        options: ["Blei", "Aluminium", "Wasser oder Paraffin", "Beton", "Kupfer"],
        correctIndex: 2,
        explanation:
          "Neutronen sind ungeladen und werden am effektivsten durch elastische Stöße mit leichten Kernen moderiert. Bei einem Stoß mit einem Proton (gleiche Masse) kann ein Neutron bis zu 100 % seiner Energie abgeben — bei schwerem Blei nur wenige Prozent. Wasser und Paraffin enthalten viel Wasserstoff und sind daher ideal. Klassische MedAT-Falle: Blei ist für Neutronen weitgehend unwirksam!",
        hints: [
          "Neutronen sind ungeladen → keine Coulomb-Wechselwirkung. Was bremst sie am besten?",
          "Elastischer Stoß: maximaler Energieübertrag bei gleichen Massen. Neutron ≈ Proton (Wasserstoff).",
        ],
        tags: ["neutronenabschirmung", "strahlenschutz", "wasser"],
        difficulty: 2,
      },
      {
        question:
          "Welcher Dosisgrenzwert gilt in Österreich für beruflich strahlenexponierte Personen der Kategorie A?",
        options: [
          "≤ 1 mSv pro Jahr",
          "≤ 6 mSv pro Jahr",
          "≤ 20 mSv pro Jahr",
          "≤ 50 mSv pro Jahr",
          "≤ 100 mSv pro Jahr",
        ],
        correctIndex: 2,
        explanation:
          "Kat. A (Radiologen, Nuklearmediziner): ≤ 20 mSv/a effektive Dosis. Kat. B (sonstiges Krankenhauspersonal): ≤ 6 mSv/a. Allgemeinbevölkerung: ≤ 1 mSv/a zusätzlich zur natürlichen Strahlung von ~2,1 mSv/a. Die 20 mSv gelten gemittelt über 5 Jahre, mit max. 50 mSv in einem Einzeljahr.",
        hints: [
          "Drei Stufen: 1 mSv (Bevölkerung), 6 mSv (Kat. B), 20 mSv (Kat. A).",
          "Kat. A = höchste Expositionskategorie → höchster erlaubter Grenzwert.",
        ],
        tags: ["dosisgrenzwert", "strahlenschutz", "österreich"],
        difficulty: 1,
      },
      {
        question: "Welche Aussage zum Bragg-Peak ist richtig?",
        options: [
          "Er beschreibt den exponentiellen Dosisabfall von Photonenstrahlung im Gewebe",
          "Protonen geben den Großteil ihrer Energie am Ende ihrer Reichweite ab, was ein scharfes Dosismaximum erzeugt",
          "Er tritt nur bei α-Strahlung auf, nicht bei Protonen",
          "Er bewirkt, dass die höchste Dosis direkt an der Hautoberfläche entsteht",
          "Er beschreibt die Halbwertsschichtdicke von Blei für γ-Strahlung",
        ],
        correctIndex: 1,
        explanation:
          "Der Bragg-Peak ist eine Eigenschaft geladener Teilchen (Protonen, Schwerionen): Sie werden im Gewebe zunehmend langsamer und geben am Ende ihrer Reichweite schlagartig den Großteil ihrer Energie ab → scharfes Dosismaximum. Dahinter ist die Dosis nahezu null. Photonen dagegen zeigen ein exponentielles Dosisprofil mit Maximum nahe der Oberfläche. Der Bragg-Peak ermöglicht es, Tumoren präzise zu bestrahlen und Risikoorgane zu schonen.",
        hints: [
          "Geladene Teilchen ionisieren stärker, je langsamer sie werden.",
          "Am Ende der Reichweite: maximale Ionisierungsdichte = Bragg-Peak. Dahinter: fast null.",
        ],
        tags: ["bragg-peak", "protonentherapie", "strahlentherapie"],
        difficulty: 2,
      },
      {
        question: "Was beschreibt das Bergonié-Tribondeau-Gesetz?",
        options: [
          "Die Halbwertszeit radioaktiver Isotope nimmt mit der Ordnungszahl zu",
          "Die Strahlenempfindlichkeit eines Gewebes steigt mit seiner Mitoserate und sinkt mit dem Differenzierungsgrad",
          "Die Dosisleistung einer Punktquelle nimmt mit dem Quadrat des Abstands ab",
          "Der Bragg-Peak entsteht nur bei Protonen mit Energien über 100 MeV",
          "Die biologische Wirkung ionisierender Strahlung ist unabhängig vom Gewebetyp",
        ],
        correctIndex: 1,
        explanation:
          "Das Bergonié-Tribondeau-Gesetz (1906) besagt: Je höher die Mitoserate (Zellteilungsrate) und je undifferenzierter die Zellen, desto strahlenempfindlicher sind sie. Deshalb sind Lymphozyten und Knochenmarkzellen am empfindlichsten, Nervenzellen (postmitotisch, hochdifferenziert) am widerstandsfähigsten. Dieses Gesetz erklärt auch die Reihenfolge beim akuten Strahlensyndrom: erst hämatopoetisch, dann GI, zuletzt zerebrovaskulär.",
        hints: [
          "Welche Zellen teilen sich am schnellsten? Die sind am empfindlichsten.",
          "Lymphozyten > Darmepithel > Haut > Muskel > Nervenzellen.",
        ],
        tags: ["bergonie-tribondeau", "strahlenbiologie", "strahlensensibilität"],
        difficulty: 2,
      },
      {
        question:
          "Ein Patient wird bei einem Strahlenunfall mit 5 Gy Ganzkörperdosis bestrahlt. Welches Syndrom dominiert?",
        options: [
          "Nur Prodromalsymptome, keine weiteren Folgen",
          "Hämatopoetisches Syndrom (Knochenmarkversagen)",
          "Gastrointestinales Syndrom (Darmversagen)",
          "Zerebrovaskuläres Syndrom (Hirnödem)",
          "Chronisches Strahlensyndrom ohne akute Symptome",
        ],
        correctIndex: 1,
        explanation:
          "Bei 5 Gy Ganzkörperdosis liegt man im Bereich des hämatopoetischen Syndroms (1–6 Gy): Das Knochenmark wird geschädigt, es kommt zu Leukopenie, Thrombopenie und Anämie innerhalb von 2–3 Wochen. Ohne Therapie (z. B. Knochenmarktransplantation, Wachstumsfaktoren) kann dies letal sein — die LD₅₀/₆₀ liegt bei 3,5–4 Gy. Das GI-Syndrom beginnt erst ab ~6 Gy, das zerebrovaskuläre ab >10 Gy.",
        hints: [
          "ARS-Reihenfolge: hämatopoetisch (1–6 Gy) → GI (6–10 Gy) → zerebrovaskulär (>10 Gy).",
          "5 Gy liegt im Bereich 1–6 Gy → welches Syndrom ist das?",
        ],
        tags: ["ars", "strahlensyndrom", "hämatopoetisch"],
        difficulty: 3,
      },
    ],
  },
];
