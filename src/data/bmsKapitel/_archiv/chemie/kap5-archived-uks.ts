import type { Kapitel } from "../../types";

/**
 * Archivierte UKs aus kap5-anorganische-chemie.ts
 * Nicht im offiziellen MedAT 2026 Stichwortliste enthalten.
 * Archiviert am 2026-03-11.
 */
export const archivedChemAnorgUKs: Kapitel["unterkapitel"] = [
  {
    id: "ch-9-04",
    title: "Übergangselemente — Biochemie und Pharmazie",
    stichworte: [
      "d-Block-Elemente",
      "Variable Oxidationsstufen",
      "Koordinationschemie",
      "Ligand",
      "Koordinationszahl",
      "Eisen Fe²⁺ Fe³⁺",
      "Hämoglobin",
      "Ferritin Transferrin",
      "Kupfer Coeruloplasmin",
      "Zink Metalloenzyme",
      "Cobalt Vitamin B12",
      "Chelat-Therapie EDTA",
      "Deferoxamin",
      "D-Penicillamin Wilson",
      "Cisplatin",
    ],
    content: `Eisen transportiert Sauerstoff, Kupfer treibt die Atmungskette an, Zink katalysiert über 300 Enzymreaktionen. Ohne Übergangsmetalle wäre kein einziger dieser Prozesse möglich — und genau deshalb führen selbst minimale Spurenelementdefizite zu spezifischen Krankheitsbildern.

## Warum d-Block-Elemente biologisch unersetzlich sind

Die Elemente der Gruppen 3–12 (Nebengruppen) besitzen **unvollständig gefüllte d-Orbitale**. Daraus ergeben sich drei Schlüsseleigenschaften:

1. **Variable Oxidationsstufen** — d-Elektronen liegen energetisch eng zusammen und können schrittweise abgegeben oder aufgenommen werden. Eisen wechselt zwischen Fe²⁺ und Fe³⁺, Kupfer zwischen Cu⁺ und Cu²⁺, Mangan zwischen Mn²⁺ und Mn⁴⁺. Dieses Redox-Pendeln ist die Grundlage biologischer Elektronentransportketten.

2. **Komplexbildung** — Übergangsmetall-Ionen wirken als **Lewis-Säuren** (Elektronenpaar-Akzeptoren). Sie binden Moleküle oder Ionen (Liganden) über deren freie Elektronenpaare und bilden **Koordinationsverbindungen** (Komplexe). Die Häm-Gruppe im Hämoglobin ist ein solcher Komplex: Fe²⁺ im Zentrum, vier Stickstoff-Atome des Porphyrins als Liganden.

3. **Farbigkeit** — d-d-Übergänge absorbieren spezifische Wellenlängen sichtbaren Lichts. Deshalb ist venöses Blut (Desoxyhämoglobin) dunkelrot und arterielles Blut (Oxyhämoglobin) hellrot; Kupferproteine wie Coeruloplasmin schimmern blau.

> **Merke:** Variable Oxidationsstufen + Komplexbildung + Farbigkeit — diese drei Eigenschaften erklären, warum d-Block-Elemente im biologischen Elektronentransport, in der Enzymkatalyse und als diagnostische Marker unersetzlich sind.

---

## Koordinationschemie — Wie Metalle Liganden binden

### Koordinationszahl und Geometrie

Die **Koordinationszahl (KZ)** gibt an, wie viele Liganden direkt an das Zentralmetall gebunden sind:

| KZ | Geometrie | Beispiel |
|---|---|---|
| 2 | Linear | [Ag(NH₃)₂]⁺ (Tollens-Reagenz) |
| 4 | Tetraedrisch | [ZnCl₄]²⁻, Zinkfinger-Proteine |
| 4 | Quadratisch-planar | [Pt(NH₃)₂Cl₂] (Cisplatin) |
| 6 | Oktaedrisch | [Fe(CN)₆]⁴⁻, [Co(NH₃)₆]³⁺, Häm |

Die Geometrie bestimmt die räumliche Anordnung der Liganden und damit die biologische Funktion: Cisplatin ist quadratisch-planar — nur in der cis-Konfiguration kann es DNA quervernetzen. Das trans-Isomer (Transplatin) ist unwirksam.

### Ligandentypen

Liganden werden nach der Anzahl ihrer Donoratome klassifiziert:

- **Einzähnig (monodental):** H₂O, NH₃, Cl⁻, CN⁻, CO — binden über ein einziges freies Elektronenpaar
- **Zweizähnig (bidental):** Ethylendiamin (en), Oxalat (C₂O₄²⁻) — binden über zwei Donoratome gleichzeitig
- **Sechszähnig (hexadental):** **EDTA** (Ethylendiamintetraessigsäure) — bindet über sechs Donoratome und umschließt das Metallion vollständig

Mehrzähnige Liganden bilden **Chelatkomplexe** (griechisch chelē = Krebsschere). Der **Chelateffekt** erklärt, warum diese Komplexe besonders stabil sind: Ein einzelner hexadentater Ligand (EDTA) verdrängt sechs Wassermoleküle — der Entropiegewinn (6 freigesetzte H₂O vs. 1 gebundenes EDTA) treibt die Reaktion thermodynamisch an.

> **Merke:** Einzähnig (H₂O, NH₃, Cl⁻) → Zweizähnig (Ethylendiamin) → Sechszähnig (EDTA). Je mehr Donoratome, desto stabiler der Komplex (Chelateffekt durch Entropiegewinn).

### Warum Komplexe farbig sind

In einem oktaedrischen Komplex spalten sich die fünf d-Orbitale in zwei Energieniveaus auf: t₂g (niedrigere Energie) und eg (höhere Energie). Die Energiedifferenz Δ entspricht bestimmten Wellenlängen sichtbaren Lichts. Wird ein Photon absorbiert, springt ein Elektron von t₂g nach eg — das nicht absorbierte Licht bestimmt die wahrgenommene Farbe.

- Cu²⁺-Lösungen: absorbieren oranges Licht → erscheinen **blau**
- Fe³⁺-Lösungen: absorbieren blaues Licht → erscheinen **gelb-braun**
- MnO₄⁻: absorbiert grünes Licht → erscheint **violett**

Klinisch nutzbar: Die Farbe von Blut, Galle (Biliverdin = Cu-frei, aber Häm-Abbau) und Urin ändert sich mit dem Oxidationszustand der beteiligten Metallkomplexe.

---

## Eisen — Das Sauerstoff-Metall

Eisen ist das häufigste Übergangsmetall im Körper (~3–5 g). Die Biologie des Eisens dreht sich um den Wechsel zwischen **Fe²⁺ (Ferro, reduziert)** und **Fe³⁺ (Ferri, oxidiert)**.

### Hämoglobin: Kooperativer O₂-Transport

Jedes Hämoglobin-Tetramer (2α + 2β-Ketten) trägt vier **Häm-Gruppen** — einen Protoporphyrin-IX-Ring mit Fe²⁺ im Zentrum (KZ = 6, oktaedrisch). Vier Koordinationsstellen belegen die Stickstoff-Atome des Porphyrins, die fünfte ein proximales Histidin der Globinkette. Die sechste Stelle bindet **reversibel O₂**.

**Kooperative Bindung:** Die erste O₂-Bindung erleichtert die nächsten drei (sigmoidale Sättigungskurve). Mechanismus: O₂-Bindung zieht Fe²⁺ in die Porphyrinebene → Konformationsänderung der Globinkette → T-Zustand (tense, niedrige Affinität) wird zum R-Zustand (relaxed, hohe Affinität).

**Bohr-Effekt:** Niedrigeres pH und höheres pCO₂ im aktiven Gewebe senken die O₂-Affinität → mehr O₂ wird freigesetzt, genau dort wo es gebraucht wird. In der Lunge kehrt sich der Effekt um.

**Wichtig:** Nur **Fe²⁺** bindet O₂. Fe³⁺ (Methämoglobin) bindet kein O₂ → funktionslos. Methämoglobin-Reduktase (NADH-abhängig) reduziert Fe³⁺ zurück zu Fe²⁺.

### Eisenstoffwechsel: Speicherung und Transport

| Protein | Funktion | Klinische Bedeutung |
|---|---|---|
| **Transferrin** | Transport von Fe³⁺ im Plasma (2 Fe³⁺ pro Molekül) | Transferrinsättigung ↓ bei Eisenmangel |
| **Ferritin** | Intrazelluläre Fe³⁺-Speicherung (bis 4500 Fe³⁺-Ionen pro Molekül) | Serum-Ferritin = bester Marker für Eisenspeicher |
| **Hepcidin** | Hormon der Leber, blockiert Ferroportin → hemmt Fe-Export aus Enterozyten | Hepcidin ↑ bei Entzündung → Anämie chronischer Erkrankungen |
| **Ferroportin** | Einziger bekannter Fe-Exporter (Enterozyt → Plasma) | Durch Hepcidin reguliert |

**Aufnahme:** Nahrungseisen liegt überwiegend als Fe³⁺ vor. Magensäure und Vitamin C (Ascorbat) reduzieren Fe³⁺ zu Fe²⁺ → DMT1 (Divalenter Metalltransporter 1) nimmt Fe²⁺ im Duodenum auf. Häm-Eisen (aus Fleisch) wird direkt über HCP1 (Häm-Carrier-Protein 1) resorbiert — höhere Bioverfügbarkeit.

> **Merke:** Fe²⁺ (Ferro) ≠ Fe³⁺ (Ferri). Nahrungseisen ist meist Fe³⁺, muss aber zu Fe²⁺ reduziert werden (Vitamin C hilft), damit DMT1 es im Duodenum aufnehmen kann. Häm-Eisen aus tierischer Nahrung umgeht diesen Schritt.

### Eisenmangel und Eisenüberladung

- **Eisenmangelanämie** (häufigste Anämie weltweit): mikrozytär (MCV ↓), hypochrom (MCH ↓). Labor: Ferritin ↓, Transferrinsättigung ↓, löslicher Transferrinrezeptor ↑. Ursachen: chronischer Blutverlust (Menstruation, GI-Blutung), Malabsorption, erhöhter Bedarf (Schwangerschaft, Wachstum).
- **Hämochromatose** (HFE-Genmutation, häufigste genetische Erkrankung bei Nordeuropäern): gestörte Hepcidin-Produktion → unkontrollierte Fe-Resorption → Eisenüberladung. Organschäden: Leberzirrhose (→ hepatozelluläres Karzinom), Kardiomyopathie, Diabetes mellitus Typ 3 („Bronzediabetes"), Hyperpigmentierung, Arthropathie. Therapie: Aderlass (Phlebotomie), Deferoxamin bei Transfusionshämosiderose.

---

## Kupfer — Elektronentransport und Redoxschutz

Kupfer (~100 mg im Körper) pendelt zwischen **Cu⁺** und **Cu²⁺** und katalysiert Einelektronen-Übertragungen.

**Schlüsselenzyme:**
- **Cytochrom-c-Oxidase** (Komplex IV der Atmungskette): Cu-Zentren übertragen Elektronen auf O₂ → H₂O. Letzter Schritt der oxidativen Phosphorylierung.
- **Cu/Zn-Superoxiddismutase (SOD1):** 2 O₂⁻• + 2H⁺ → H₂O₂ + O₂. Schutz vor oxidativem Stress im Zytoplasma.
- **Coeruloplasmin:** Ferroxidase-Aktivität — oxidiert Fe²⁺ zu Fe³⁺, damit Transferrin Eisen binden kann. Bindet ~95% des Plasma-Kupfers.
- **Lysyloxidase:** Quervernetzung von Kollagen und Elastin.
- **Tyrosinase:** Melaninsynthese (Kupfermangel → Depigmentierung).

**Wilson-Krankheit** (autosomal-rezessiv, ATP7B-Mutation): gestörte biliäre Cu-Ausscheidung → Cu-Akkumulation in Leber (Hepatitis, Zirrhose), Gehirn (Basalganglien → Tremor, Dystonie, psychiatrische Symptome) und Auge (**Kayser-Fleischer-Kornealring** — grün-brauner Cu-Ring in der Descemet-Membran, pathognomonisch). Labor: Coeruloplasmin ↓, freies Cu ↑, Cu im 24h-Urin ↑. Therapie: **D-Penicillamin** (Chelator), Zink (hemmt intestinale Cu-Resorption).

**Menkes-Krankheit** (X-chromosomal, ATP7A-Mutation): Cu-Resorptionsstörung im Darm → systemischer Cu-Mangel → Neurodegeneration, „Stahlhaar" (Pili torti), Bindegewebsschwäche. Letaler Verlauf in der Kindheit.

---

## Zink — Der stille Katalysator

Zink (~2–3 g im Körper) ist nach Eisen das zweithäufigste Übergangsmetall im Organismus. Anders als Fe und Cu wechselt Zn²⁺ **nicht** die Oxidationsstufe — es ist immer Zn²⁺ und wirkt als Lewis-Säure in der Katalyse.

**Wichtige Zn²⁺-Enzyme und -Proteine:**
- **Carboanhydrase:** CO₂ + H₂O ⇌ H₂CO₃ (10⁶-fache Beschleunigung). Zn²⁺ aktiviert H₂O zum nucleophilen OH⁻-Angriff auf CO₂. Essentiell für CO₂-Transport in Erythrozyten, Säuresekretion im Magen, Augeninnendruck (Kammerwasser). Hemmung durch **Acetazolamid** → Diuretikum, Glaukomtherapie.
- **Alkoholdehydrogenase (ADH):** Ethanol → Acetaldehyd (erster Schritt des Alkoholabbaus).
- **Zinkfinger-Transkriptionsfaktoren:** Zn²⁺ stabilisiert die „Finger"-Strukturen, die DNA erkennen und binden → Genregulation.
- **Matrix-Metalloproteasen (MMPs):** Bindegewebsumbau, Wundheilung, aber auch Tumormetastasierung.
- **Insulin-Speicherung:** 2 Zn²⁺ + 6 Insulinmoleküle → Zink-Insulin-Hexamer in den β-Zell-Granula.

**Zinkmangel:** Wachstumsstörungen, verzögerte Wundheilung, Immunschwäche (T-Zell-Dysfunktion), Hypogonadismus, Alopezie, Diarrhö, Geschmacksstörungen. Ursache: Malabsorption, Alkoholismus, Acrodermatitis enteropathica (genetisch, SLC39A4-Mutation).

> **Merke:** Zn²⁺ ist immer zweiwertig (kein Redoxwechsel), wirkt als Lewis-Säure. Über 300 Metalloenzyme + Zinkfinger-Proteine. Klinisches Trias bei Mangel: Wundheilungsstörung + Immunschwäche + Wachstumsverzögerung.

---

## Cobalt — Das Vitamin-B12-Metall

Cobalt ist ausschließlich als **Co³⁺ im Corrin-Ring** von Vitamin B12 (Cobalamin) biologisch aktiv. Die beiden Coenzymformen:

- **Methylcobalamin:** Cofaktor der Methionin-Synthase (Homocystein → Methionin). Gleichzeitig wird Tetrahydrofolat (THF) regeneriert → essentiell für DNA-Synthese.
- **Adenosylcobalamin:** Cofaktor der Methylmalonyl-CoA-Mutase (Methylmalonyl-CoA → Succinyl-CoA → Citratzyklus). Mangel → Methylmalonsäure-Akkumulation (diagnostischer Marker).

**B12-Mangel:** Megaloblastäre Anämie (MCV ↑, hypersegmentierte Neutrophile) + funikuläre Myelose (Demyelinisierung der Hinter- und Seitenstränge → Ataxie, Parästhesien, Spastik). Ursachen: Intrinsic-Factor-Mangel (perniziöse Anämie, Autoantikörper gegen Parietalzellen), Gastrektomie, streng vegane Ernährung. Therapie: B12 parenteral (i.m.) bei Resorptionsstörung.

---

## Weitere medizinisch relevante Übergangsmetalle

- **Mangan (Mn):** Mn-SOD (SOD2, mitochondrial) — Schutz vor Superoxidradikalen. Arginase im Harnstoffzyklus. Manganismus (chronische Mn-Exposition, z. B. Schweißer): Parkinson-ähnliches Syndrom (Basalganglien-Schädigung).
- **Molybdän (Mo):** Cofaktor der Xanthinoxidase (Hypoxanthin → Xanthin → Harnsäure). Gicht-Therapie: **Allopurinol** hemmt Xanthinoxidase → Harnsäure ↓.
- **Chrom (Cr³⁺):** Diskutierte Rolle in der Insulinsensitivierung (Chromodulin). Cr⁶⁺ (Chromat) ist hochkanzerogen (Lungenkrebs bei Industriearbeitern) — Cr³⁺ vs. Cr⁶⁺ ist ein wichtiges toxikologisches Unterscheidungsmerkmal.
- **Platin (Pt):** Cisplatin [Pt(NH₃)₂Cl₂] — quadratisch-planarer Pt²⁺-Komplex, quervernetzt DNA-Stränge (Guanin-Guanin intrastrand crosslinks) → Apoptose. Bedeutendes Zytostatikum bei Hoden-, Ovarial-, Blasen- und Lungenkarzinomen. Nephrotoxizität und Ototoxizität als Hauptnebenwirkungen.

---

## Chelat-Therapie — Metallvergiftung behandeln

Das Prinzip: Ein mehrzähniger Ligand (Chelator) bindet das toxische Metallion mit höherer Affinität als körpereigene Proteine → wasserlöslicher Chelatkomplex → renale Ausscheidung.

| Chelator | Zielmetall | Indikation |
|---|---|---|
| **EDTA** (Ethylendiamintetraessigsäure) | Pb²⁺, Ca²⁺ | Bleivergiftung (CaNa₂-EDTA, damit kein Ca-Entzug) |
| **Deferoxamin** (Desferrioxamin) | Fe³⁺ | Transfusionshämosiderose, akute Eisenvergiftung |
| **Deferasirox** | Fe³⁺ | Orale Alternative zu Deferoxamin |
| **D-Penicillamin** | Cu²⁺, Pb²⁺ | Wilson-Krankheit, Bleivergiftung |
| **DMSA** (Dimercaptobernsteinsäure) | Pb²⁺, Hg²⁺, As³⁺ | Schwermetallvergiftung (oral) |
| **BAL** (Dimercaprol) | As³⁺, Hg²⁺, Au³⁺ | Arsen-, Quecksilbervergiftung (i.m.) |

> **Merke:** EDTA bei Blei, Deferoxamin bei Eisen, D-Penicillamin bei Kupfer (Wilson). Grundprinzip: Chelator bindet Metallion fester als körpereigene Proteine → renale Elimination des Chelatkomplexes.

**Cave:** CaNa₂-EDTA wird bei Bleivergiftung eingesetzt, nicht Na₂-EDTA allein — letzteres würde Ca²⁺ chelieren → lebensbedrohliche Hypokalzämie.

---

## Typische Prüfungsfallen

1. **Fe²⁺ vs. Fe³⁺:** Nahrungseisen ist Fe³⁺ → muss zu Fe²⁺ reduziert werden für die Resorption (DMT1). Im Hämoglobin ist Fe²⁺ aktiv — Fe³⁺ = Methämoglobin = funktionslos.
2. **Zink hat keine Redoxchemie:** Zn²⁺ bleibt immer Zn²⁺. Es wirkt als Lewis-Säure, nicht als Redoxpartner.
3. **Cisplatin ist cis, nicht trans:** Nur die cis-Konfiguration kann beide Chloride an benachbarte Guanine der DNA binden. Transplatin ist inaktiv.
4. **Coeruloplasmin hat Ferroxidase-Aktivität:** Obwohl es ein Kupferprotein ist, oxidiert es Eisen (Fe²⁺ → Fe³⁺).
5. **CaNa₂-EDTA, nicht Na₂-EDTA:** Bei Bleivergiftung muss der EDTA-Komplex bereits Ca²⁺ enthalten, um keine Hypokalzämie auszulösen.

> **Merke:** Hämoglobin = Fe²⁺ (bindet O₂), Methämoglobin = Fe³⁺ (bindet kein O₂). Coeruloplasmin = Cu-Protein mit Ferroxidase-Funktion. Cisplatin = cis-Konfiguration therapeutisch wirksam, trans unwirksam.`,
    lernziele: [
      "Die drei Schlüsseleigenschaften der d-Block-Elemente (variable Oxidationsstufen, Komplexbildung, Farbigkeit) erklären",
      "Koordinationszahl, Geometrie und Ligandentypen (mono-/bi-/hexadental) an Beispielen beschreiben",
      "Den Chelateffekt thermodynamisch begründen (Entropiegewinn)",
      "Den Eisenstoffwechsel (Transferrin, Ferritin, Hepcidin, DMT1) und die Unterscheidung Fe²⁺/Fe³⁺ erklären",
      "Klinische Bilder bei Eisenmangel, Hämochromatose, Wilson-Krankheit und B12-Mangel den betroffenen Metallen zuordnen",
      "Die wichtigsten Chelatoren (EDTA, Deferoxamin, D-Penicillamin) ihren Zielmetallen und Indikationen zuordnen",
    ],
    sections: [
      {
        heading: "Koordinationschemie: Liganden, Geometrie, Chelateffekt",
        text: "Übergangsmetall-Ionen binden Liganden über deren freie Elektronenpaare (Lewis-Säure-Base-Prinzip). KZ = 4: tetraedrisch (Zinkfinger) oder quadratisch-planar (Cisplatin). KZ = 6: oktaedrisch (Häm, [Co(NH₃)₆]³⁺). Mehrzähnige Liganden (EDTA: hexadental) bilden besonders stabile Chelatkomplexe — der Chelateffekt beruht auf dem Entropiegewinn: 1 EDTA verdrängt 6 H₂O. Farbigkeit entsteht durch d-d-Elektronenübergänge: die Kristallfeldaufspaltung Δ bestimmt die absorbierte Wellenlänge.",
        merksatz:
          "KZ 4 = tetraedrisch/quadratisch-planar; KZ 6 = oktaedrisch. Chelateffekt: je mehr Donoratome, desto stabiler. Farbigkeit = d-d-Übergänge.",
      },
      {
        heading: "Eisen: Hämoglobin, Ferritin, Transferrin",
        text: "Fe²⁺ im Häm bindet reversibel O₂ (6. Koordinationsstelle). Kooperative Bindung: T→R-Konformationsänderung. Bohr-Effekt: pH↓ → O₂-Affinität↓. Eisentransport: Transferrin (2 Fe³⁺ im Plasma). Speicherung: Ferritin (bis 4500 Fe³⁺). Regulation: Hepcidin blockiert Ferroportin → hemmt Fe-Export aus Enterozyten. Resorption: Fe³⁺ → Fe²⁺ (Vitamin C) → DMT1 im Duodenum. Eisenmangelanämie: mikrozytär, hypochrom, Ferritin↓. Hämochromatose: HFE-Mutation → Fe-Überladung → Leber, Herz, Pankreas.",
        merksatz:
          "Fe²⁺ = aktives Hämoglobin (O₂-Bindung); Fe³⁺ = Methämoglobin (inaktiv). Nahrung: Fe³⁺ → Reduktion zu Fe²⁺ → Resorption via DMT1.",
      },
      {
        heading: "Kupfer, Zink, Cobalt — Spurenelemente mit Schlüsselfunktion",
        text: "Cu: Cytochrom-c-Oxidase (Komplex IV), Cu/Zn-SOD, Coeruloplasmin (Ferroxidase). Wilson-Krankheit: ATP7B-Mutation → Cu-Akkumulation → Kayser-Fleischer-Ring. Therapie: D-Penicillamin. Zn²⁺: >300 Metalloenzyme (Carboanhydrase, ADH, MMPs), Zinkfinger-Proteine, Insulin-Hexamer. Kein Redoxwechsel — reine Lewis-Säure. Co³⁺ im Corrin-Ring von Vitamin B12: Methylcobalamin (Methionin-Synthase) und Adenosylcobalamin (Methylmalonyl-CoA-Mutase). B12-Mangel: megaloblastäre Anämie + funikuläre Myelose.",
        merksatz:
          "Cu: Atmungskette + Wilson-Krankheit. Zn: 300+ Enzyme, kein Redoxwechsel. Co: nur in B12 — Mangel = Anämie + Myelose.",
      },
      {
        heading: "Chelat-Therapie: Metallvergiftungen gezielt behandeln",
        text: "Chelatoren binden toxische Metallionen mit höherer Affinität als körpereigene Proteine → renale Elimination. EDTA (hexadental): Bleivergiftung (als CaNa₂-EDTA, nicht Na₂-EDTA → sonst Hypokalzämie). Deferoxamin: Fe³⁺-Chelator bei Transfusionshämosiderose. D-Penicillamin: Cu²⁺-Chelator bei Wilson-Krankheit. DMSA/BAL: Schwermetalle (Pb, Hg, As). Allopurinol hemmt die Mo-haltige Xanthinoxidase → Harnsäure↓ → Gichttherapie.",
        merksatz:
          "EDTA → Blei; Deferoxamin → Eisen; D-Penicillamin → Kupfer (Wilson). CaNa₂-EDTA verwenden, nie reines Na₂-EDTA.",
      },
    ],
    merksätze: [
      "d-Block-Elemente: variable Oxidationsstufen + Komplexbildung + Farbigkeit — Grundlage biologischer Katalyse.",
      "Koordinationszahl 6 → oktaedrisch (Häm, Cytochrome); KZ 4 → tetraedrisch oder quadratisch-planar (Cisplatin).",
      "Chelateffekt: mehrzähnige Liganden bilden stabilere Komplexe durch Entropiegewinn (1 EDTA verdrängt 6 H₂O).",
      "Fe²⁺ (Ferro) bindet O₂ im Hämoglobin; Fe³⁺ (Ferri) = Methämoglobin, funktionslos.",
      "Nahrungseisen: Fe³⁺ → Reduktion zu Fe²⁺ (Vitamin C) → DMT1-Aufnahme im Duodenum.",
      "Ferritin = Eisenspeicher (Serum-Ferritin bester Labormarker); Transferrin = Fe³⁺-Transport im Plasma.",
      "Hepcidin ↑ → Ferroportin blockiert → Eisenresorption ↓ (Anämie chronischer Erkrankungen).",
      "Cu: Cytochrom-c-Oxidase, SOD1, Coeruloplasmin. Wilson (ATP7B) → Cu-Akkumulation → D-Penicillamin.",
      "Zn²⁺: immer zweiwertig, >300 Enzyme, Zinkfinger-Proteine. Mangel → Wundheilungsstörung, Immunschwäche.",
      "Co³⁺ in Vitamin B12 → Mangel: megaloblastäre Anämie + funikuläre Myelose.",
      "EDTA (Pb), Deferoxamin (Fe), D-Penicillamin (Cu) — drei Chelatoren mit klarer Zuordnung.",
      "Cisplatin: cis-Pt(II)-Komplex quervernetzt DNA → Apoptose. Trans-Isomer ist unwirksam.",
    ],
    altfrage: {
      question:
        "Erklären Sie, warum Eisen im Hämoglobin in der Oxidationsstufe +2 vorliegen muss und welche klinischen Konsequenzen eine Oxidation zu Fe³⁺ hätte.",
      answer:
        "Fe²⁺ im Häm-Zentrum des Hämoglobins besitzt sechs Koordinationsstellen: vier davon sind durch Stickstoffatome des Protoporphyrin-IX-Rings besetzt, die fünfte durch das proximale Histidin (His F8) der Globinkette. Die sechste Stelle ist frei und kann reversibel O₂ binden. Diese Reversibilität funktioniert nur mit Fe²⁺: Es bildet eine partielle, reversible Bindung zu O₂ ohne vollständige Elektronenübertragung.\n\nWird Fe²⁺ zu Fe³⁺ oxidiert, entsteht Methämoglobin (MetHb). Fe³⁺ kann kein O₂ binden → funktioneller Sauerstofftransportverlust. Normalerweise liegt <1% MetHb vor, weil NADH-Methämoglobin-Reduktase (Cytochrom-b5-Reduktase) Fe³⁺ kontinuierlich zu Fe²⁺ reduziert.\n\nMethämoglobinämie (>10% MetHb): Zyanose (schokoladenbraunes Blut), Dyspnoe, bei >50% lebensbedrohlich. Ursachen: Nitrite (Nitroprussid, Dapsone), Lokalanästhetika (Prilocain, Benzocain), angeborener Enzymmangel. Therapie: Methylenblau i.v. (wird durch NADPH-MetHb-Reduktase zu Leukomethylenblau reduziert, das dann MetHb zu Hb reduziert).",
    },
    klinischerBezug:
      "Eisenmangelanämie ist die häufigste Anämie weltweit und betrifft besonders menstruierende Frauen, Schwangere und Kleinkinder. Die Labordiagnostik folgt einer klaren Kaskade: Ferritin (Speicher) → Transferrinsättigung (Transport) → löslicher Transferrinrezeptor (zellulärer Bedarf) → MCV/MCH (Erythrozytenmorphologie). Wilson-Krankheit wird oft verzögert diagnostiziert, weil psychiatrische Symptome (Depression, Persönlichkeitsveränderung) der Lebererkrankung vorausgehen können — der Kayser-Fleischer-Ring in der Spaltlampenuntersuchung ist pathognomonisch. Cisplatin revolutionierte die Hodenkarzinom-Therapie: Heilungsrate von <10% auf >90%.",
    selfTest: [
      {
        question:
          "Welche Eigenschaft der d-Block-Elemente ermöglicht den biologischen Elektronentransport in der Atmungskette?",
        options: [
          "Die Fähigkeit, stabile Edelgaskonfigurationen zu bilden",
          "Variable Oxidationsstufen durch energetisch nahestehende d-Elektronen",
          "Die Abgabe von genau zwei Valenzelektronen wie Erdalkalimetalle",
          "Ihre hohe Elektronegativität im Vergleich zu Nichtmetallen",
          "Die Bildung ausschließlich ionischer Bindungen",
        ],
        correctIndex: 1,
        explanation:
          "d-Block-Elemente haben unvollständig gefüllte d-Orbitale mit energetisch eng zusammenliegenden Elektronen. Diese können schrittweise abgegeben oder aufgenommen werden → variable Oxidationsstufen (z. B. Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺). In der Atmungskette nutzen Cytochrome und Cu-Zentren genau dieses Redox-Pendeln, um Elektronen von NADH/FADH₂ schrittweise auf O₂ zu übertragen. Edelgaskonfiguration und feste Ionenladungen (Antworten A, C) gelten für Hauptgruppenelemente.",
        hints: [
          "Die Atmungskette überträgt Elektronen schrittweise — das erfordert Metalle, die ihre Ladung flexibel ändern können.",
          "Fe wechselt zwischen +2 und +3, Cu zwischen +1 und +2.",
        ],
        difficulty: 1,
        tags: ["d-block", "oxidationsstufen", "atmungskette"],
      },
      {
        question:
          "EDTA ist ein besonders stabiler Chelator. Welche Aussage erklärt den Chelateffekt thermodynamisch korrekt?",
        options: [
          "EDTA hat eine höhere Elektronegativität als andere Liganden",
          "EDTA bildet nur zwei Bindungen zum Metallion, aber diese sind kovalent",
          "Ein hexadentater Ligand verdrängt sechs H₂O-Moleküle → Entropiegewinn treibt die Reaktion an",
          "EDTA verändert die Oxidationsstufe des Metalls und stabilisiert es dadurch",
          "Der Chelateffekt beruht auf der geringeren Masse des EDTA-Komplexes",
        ],
        correctIndex: 2,
        explanation:
          "Der Chelateffekt ist primär ein Entropie-Effekt: Ein einzelnes EDTA-Molekül (hexadental, 6 Donoratome) ersetzt sechs einzähnige H₂O-Liganden. Die Zahl freier Teilchen steigt (1 gebunden + 6 freigesetzt vs. 6 gebunden + 1 freigesetzt) → ΔS > 0 → ΔG negativer → stabilerer Komplex. EDTA hat keine besondere EN (A falsch), bildet 6 Bindungen nicht 2 (B falsch), verändert nicht die Oxidationsstufe (D falsch).",
        hints: [
          "1 EDTA ersetzt 6 H₂O — wie ändert sich die Teilchenzahl in Lösung?",
          "Mehr freie Teilchen = höhere Entropie = thermodynamisch begünstigt.",
        ],
        difficulty: 2,
        tags: ["chelateffekt", "edta", "thermodynamik"],
      },
      {
        question:
          "Ein Patient mit Transfusionshämosiderose benötigt eine Chelat-Therapie. Welcher Chelator wird eingesetzt?",
        options: [
          "D-Penicillamin — weil es den stärksten Chelateffekt aller Chelatoren hat",
          "CaNa₂-EDTA — weil es spezifisch Fe³⁺ bindet",
          "Deferoxamin (Desferrioxamin) — ein spezifischer Fe³⁺-Chelator",
          "BAL (Dimercaprol) — als universeller Schwermetallchelator",
          "Acetazolamid — weil es die eisenhaltige Carboanhydrase hemmt",
        ],
        correctIndex: 2,
        explanation:
          "Deferoxamin (Desferrioxamin) ist der Standardchelator bei Eisenüberladung (Transfusionshämosiderose). Es bindet hochspezifisch Fe³⁺ (Stabilitätskonstante K ≈ 10³¹) und wird renal als Ferrioxamin ausgeschieden. D-Penicillamin ist ein Cu-Chelator (Wilson-Krankheit). CaNa₂-EDTA wird bei Bleivergiftung verwendet. BAL bei As/Hg-Vergiftung. Acetazolamid hemmt die Carboanhydrase, ist aber kein Chelator.",
        hints: [
          "Der Name 'Desferri-oxamin' verrät das Zielmetall: Eisen (Ferrum).",
          "Ziel: Fe³⁺-Chelation und renale Elimination.",
        ],
        difficulty: 2,
        tags: ["deferoxamin", "eisenüberladung", "chelat-therapie"],
      },
      {
        question:
          "Ein 28-jähriger Patient zeigt Leberzirrhose und einen grün-braunen Kornealring in der Spaltlampe. Welches Metall akkumuliert, und welche Therapie ist indiziert?",
        options: [
          "Eisen-Akkumulation (Hämochromatose) — Therapie: Aderlass",
          "Kupfer-Akkumulation (Wilson-Krankheit) — Therapie: D-Penicillamin",
          "Zink-Akkumulation — Therapie: EDTA",
          "Mangan-Akkumulation (Manganismus) — Therapie: L-DOPA",
          "Blei-Akkumulation (Saturnismus) — Therapie: DMSA",
        ],
        correctIndex: 1,
        explanation:
          "Der Kayser-Fleischer-Kornealring (grün-braune Cu-Ablagerung in der Descemet-Membran) ist pathognomonisch für die Wilson-Krankheit (ATP7B-Mutation → gestörte biliäre Cu-Ausscheidung → Cu-Akkumulation in Leber, ZNS, Kornea). Labor: Coeruloplasmin↓, freies Cu im Serum↑, Cu im 24h-Urin↑. Therapie: D-Penicillamin (Cu-Chelator), alternativ Trientin. Langfristig: Zink-Supplementation (hemmt intestinale Cu-Resorption durch Metallothionein-Induktion).",
        hints: [
          "Grün-brauner Kornealring = Kayser-Fleischer-Ring — pathognomonisch für eine Metallspeicherkrankheit.",
          "Das Metall hat die Farbcodes blau-grün — denk an Kupferpatina.",
        ],
        difficulty: 2,
        tags: ["wilson-krankheit", "kayser-fleischer", "d-penicillamin"],
      },
      {
        question: "Welche Aussage zur Eisenresorption im Duodenum ist FALSCH?",
        options: [
          "Nahrungseisen liegt überwiegend als Fe³⁺ vor",
          "Vitamin C (Ascorbat) fördert die Resorption durch Reduktion von Fe³⁺ zu Fe²⁺",
          "DMT1 (Divalenter Metalltransporter 1) transportiert Fe²⁺ in die Enterozyte",
          "Hepcidin fördert die Eisenresorption durch Aktivierung von Ferroportin",
          "Häm-Eisen aus tierischer Nahrung hat eine höhere Bioverfügbarkeit als Nicht-Häm-Eisen",
        ],
        correctIndex: 3,
        explanation:
          "Die Aussage D ist falsch: Hepcidin HEMMT die Eisenresorption, indem es Ferroportin (den einzigen Fe-Exporter auf der basolateralen Seite der Enterozyten) internalisiert und abbaut. Hepcidin ↑ → Ferroportin ↓ → Fe bleibt in der Enterozyte und geht mit der Zellabschilferung verloren. Bei Entzündungen steigt Hepcidin → Anämie chronischer Erkrankungen. Alle anderen Aussagen sind korrekt: Nahrungseisen ist Fe³⁺ (A), Vitamin C reduziert es zu Fe²⁺ (B), DMT1 transportiert Fe²⁺ (C), Häm-Eisen hat höhere Bioverfügbarkeit (E).",
        hints: [
          "Hepcidin ist das 'Eisentorwächter-Hormon' — fördert oder blockiert es den Eisenexport?",
          "Hepcidin wird bei Eisenüberladung und Entzündung hochreguliert — was wäre der biologische Sinn?",
        ],
        difficulty: 3,
        tags: ["hepcidin", "ferroportin", "eisenresorption"],
      },
      {
        question:
          "Cisplatin [Pt(NH₃)₂Cl₂] ist ein wichtiges Zytostatikum. Warum ist nur die cis-Konfiguration therapeutisch wirksam?",
        options: [
          "Weil die cis-Form besser wasserlöslich ist als die trans-Form",
          "Weil die cis-Form eine höhere Oxidationsstufe des Platins hat",
          "Weil nur in der cis-Konfiguration die beiden Chlorid-Liganden an benachbarte Guanin-Basen der DNA binden können (intrastrand crosslink)",
          "Weil die trans-Form im Körper sofort zu Pt⁰ reduziert wird",
          "Weil Transplatin eine oktaedrische statt quadratisch-planare Geometrie hat",
        ],
        correctIndex: 2,
        explanation:
          "Cisplatin ist quadratisch-planar (Pt²⁺, KZ=4). In der cis-Konfiguration stehen die beiden Chlorid-Liganden auf derselben Seite. Im Zellinnern werden die Cl⁻ durch H₂O ersetzt (Aquation), und die entstehenden Aqua-Komplexe binden an die N7-Position zweier benachbarter Guanine auf demselben DNA-Strang (intrastrand crosslink, 1,2-d(GpG)). Dieser Crosslink verbiegt die DNA (~35°) und wird von Reparaturenzymen nicht effizient entfernt → Apoptose. In der trans-Konfiguration stehen die Abgangsgruppen gegenüber → geometrisch unmöglich, zwei benachbarte Basen gleichzeitig zu erreichen.",
        hints: [
          "Quadratisch-planar: cis = gleiche Seite, trans = gegenüberliegende Seite.",
          "Für einen intrastrand crosslink müssen beide Bindungsstellen auf derselben Seite des Moleküls liegen.",
        ],
        difficulty: 3,
        tags: ["cisplatin", "cis-trans", "dna-crosslink"],
      },
    ],
  },
  {
    id: "ch-10-03",
    title: "Puffersysteme und Henderson-Hasselbalch",
    stichworte: [
      "Henderson-Hasselbalch-Gleichung",
      "Pufferbereich pKa ± 1",
      "Pufferkapazität",
      "Carbonat-Puffersystem",
      "Bicarbonat HCO₃⁻",
      "Phosphatpuffer",
      "Proteinpuffer Hämoglobin",
      "Azidose Alkalose",
      "Lunge CO₂ Regulation",
      "Niere HCO₃⁻ Regulation",
      "Bohr-Effekt",
      "Carboanhydrase",
      "Acetazolamid",
    ],
    content: `## Was ist ein Puffer?


Ein **Puffersystem** ist eine Lösung, die pH-Änderungen bei Zugabe kleiner Mengen Säure oder Base minimiert. Puffer bestehen aus einem **schwachen Säure-Base-Paar**:

- Einer **schwachen Säure (HA)** -- neutralisiert zugesetzte Basen
- Ihrer **konjugierten Base (A-)** -- neutralisiert zugesetzte Säuren

Reaktionen beim Puffern:

Zugabe von H⁺:  A⁻ + H⁺ → HA          (Base fängt Säure ab)
Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O  (Säure fängt Base ab)

## Die Henderson-Hasselbalch-Gleichung

Die zentrale Gleichung für Puffersysteme:

pH = pKa + log([A⁻]/[HA])

**Bedeutung der Terme:**
- pKa: Säurestärke der schwachen Säure im Puffer
- [A⁻]/[HA]: Verhältnis von konjugierter Base zu schwacher Säure
- Bei [A⁻] = [HA] (Verhältnis = 1): log(1) = 0 → **pH = pKa**

**Pufferbereich:** pH = pKa +/- 1 (effektiver Pufferbereich)

Außerhalb dieses Bereichs kann das System kaum noch puffern.

### Herleitung aus Ka:
Ka = [H₃O⁺][A⁻]/[HA] → [H₃O⁺] = Ka · [HA]/[A⁻]
→ −log[H₃O⁺] = −log Ka + log([A⁻]/[HA])
→ pH = pKa + log([A⁻]/[HA])

## Pufferkapazität

Die **Pufferkapazität** gibt an, wie viel Säure oder Base ein Puffer aufnehmen kann, bevor der pH sich stark ändert. Sie ist:

- Am **größten bei pH = pKa** (gleiche Mengen HA und A-)
- Proportional zur **Gesamtkonzentration** des Puffersystems (c = [HA] + [A-])
- **Begrenzt**: Ist entweder HA oder A- verbraucht, versagt der Puffer

**Praktische Konsequenz:** Ein konzentrierterer Puffer kann mehr Säure/Base abpuffern, ändert aber den pH bei Verdünnung (nur wenn beide Komponenten gleich verdünnt werden, bleibt pH konstant).

{{IMAGE}}

## Das Carbonat-Puffersystem im Blut


Das wichtigste Puffersystem im Blut ist das **Kohlensäure-Bicarbonat-System**:

CO₂(g) ⇌ CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

Der effektive pKa im physiologischen Kontext (berücksichtigt CO2-Hydratation) beträgt **~ 6,1**.

Henderson-Hasselbalch für Blut:
7,4 = 6,1 + log([HCO3-]/[CO2])
log([HCO3-]/[CO2]) = 1,3 => [HCO3-]/[CO2] ~ 20:1

Normalwerte im arteriellen Blut:
- [HCO3-] ~ 24 mmol/L
- pCO2 ~ 40 mmHg (entspricht ~1,2 mmol/L gelöstem CO2)
- pH ~ 7,4

**Regulation:**
- Lunge: reguliert CO2 (schnell, Minuten)
- Niere: reguliert HCO3- (langsam, Stunden bis Tage)

## Der Phosphatpuffer

Das Phosphat-Puffersystem (H2PO4-/HPO4 2-, pKa ~ 7,2) ist im Blutplasma weniger wichtig, aber entscheidend im **Urin** und **intrazellulär**:

H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻     pKa ≈ 7,2

Bei pH 7,4 überwiegt HPO4 2- (~80 %) über H2PO4- (~20 %).

## Proteinpuffer

Proteine (besonders Hämoglobin und Plasmaproteine) sind die **quantitativ wichtigsten** Puffer im Blut. Die ionisierbaren Seitenketten der Aminosäuren, v. a. **Histidin** (pKa ~ 6), fungieren als Säure-Base-Paare. Hämoglobin wirkt im Erythrozyten als Puffer, besonders beim Bohr-Effekt (H+ stabilisiert deoxy-Hb).

## Klinische Puffersysteme im Überblick

| Puffersystem | pKa | Wichtigste Lokalisation |
|---|---|---|
| H2CO3/HCO3- | 6,1 (eff.) | Blutplasma |
| H2PO4-/HPO4 2- | 7,2 | Intrazelluläres Milieu, Urin |
| Hämoglobin-Puffer | ~6-8 | Erythrozyten |
| Plasmaprotein-Puffer | ~6-8 | Blutplasma |

## Klinisch: Azidose und Alkalose durch Pufferversagen

Der Carbonat-Puffer kann versagen, wenn:
- **CO2 steigt** (respiratorische Azidose: z. B. Hyperventilationsausfall, COPD)
- **HCO3- sinkt** (metabolische Azidose: z. B. Ketoazidose, Laktazidose, Nierenversagen)
- **CO2 sinkt** (respiratorische Alkalose: Hyperventilation)
- **HCO3- steigt** (metabolische Alkalose: z. B. Erbrechen, Diuretika)

## Hämoglobin als Puffer: Bohr-Effekt

Hämoglobin (Hb) ist nach dem Carbonat-System der zweitwichtigste Blutpuffer:

**HbO₂ + H⁺ ⇌ HHb⁺ + O₂**

Abfallendes pH (saures Milieu bei Muskelarbeit, CO₂, Laktat) → Le Chatelier → mehr O₂ wird freigesetzt → Sauerstoffversorgung des aktiven Gewebes steigt. Bei hohem pH (Lunge) verschiebt sich das Gleichgewicht links → mehr O₂ wird gebunden.

Zusätzlich beeinflusst 2,3-DPG (Diphosphoglycerat) die O₂-Affinität: Bei hohem 2,3-DPG (z. B. bei Hypoxie, Anämie) sinkt die O₂-Affinität → mehr O₂-Abgabe ins Gewebe.

## Carboanhydrase


Die **Carboanhydrase (CA)** katalysiert: CO₂ + H₂O ⇌ H₂CO₃

- Beschleunigung: ca. 10⁶-fach (k_cat ≈ 10⁶/s — eines der schnellsten Enzyme)
- Cofaktor: Zn²⁺ im aktiven Zentrum
- Vorkommen: Erythrozyten (CO₂-Transport), Nierentubuli (Säure-Base), Augenkammerwasser (Glaukompathogenese)

Ohne CA würde der CO₂-Transport im Blut und die pH-Regulierung zusammenbrechen. **Acetazolamid** hemmt CA und wird als Diuretikum und zur Glaukomtherapie eingesetzt.

---

> **Merke:** Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]). Bei [A-] = [HA] ist pH = pKa (maximale Pufferkapazität). Effektiver Pufferbereich: pKa +/- 1.

> 💡 **Prüfungstipp:** Henderson-Hasselbalch auswendig können! Wenn [A⁻] = [HA] → log(1) = 0 → pH = pKa. Das ist der Punkt maximaler Pufferkapazität.

> **Merke:** Blut-pH 7,4 entsteht durch [HCO3-]/[CO2] ~ 20:1 bei pKa(eff.) = 6,1. Lunge reguliert pCO2 schnell (Minuten), Niere reguliert HCO3- langsam (Stunden bis Tage). Versagt die Kompensation, drohen Azidose (pH < 7,35) oder Alkalose (pH > 7,45).

> **Merke:** Bohr-Effekt: pH ↓ / pCO₂ ↑ → Hb-O₂-Affinität ↓ → mehr O₂-Abgabe ans Gewebe. Le Chatelier auf molekularer Ebene.`,
    lernziele: [
      "Die Henderson-Hasselbalch-Gleichung anwenden und den pH von Pufferlösungen berechnen",
      "Den Pufferbereich (pH = pKa ± 1) und die Pufferkapazität erklären",
      "Das Carbonat-Puffersystem des Blutes mit der Henderson-Hasselbalch-Gleichung analysieren",
      "Die Rolle von Phosphat- und Proteinpuffern im Körper beschreiben",
      "Azidose und Alkalose auf das Versagen des Carbonat-Puffersystems zurückführen",
      "Den Bohr-Effekt als Le-Chatelier-Prinzip in der Hämoglobin-O₂-Bindung erläutern.",
      "Die Rolle der Carboanhydrase im CO₂-Transport und der pH-Regulierung erklären.",
    ],
    sections: [
      {
        heading: "Henderson-Hasselbalch: Die Formel verstehen",
        text: "pH = pKa + log([A⁻]/[HA]) gilt für jedes konjugierte Säure-Base-Paar. Bei [A⁻] = [HA] ist log(1) = 0, also pH = pKa. Erhöht man [A⁻] (mehr Base), steigt pH. Erhöht man [HA] (mehr Säure), sinkt pH. Der effektive Pufferbereich liegt bei pH = pKa ± 1 (Verhältnis 10:1 bis 1:10). Klinisch: Blut-pH 7,4 = pKa(6,1) + log(20) = 6,1 + 1,3 = 7,4.",
        merksatz:
          "pH = pKa + log([Base]/[Säure]). Bei pH = pKa: 50:50-Verhältnis. Pufferbereich: pKa ± 1.",
      },
      {
        heading: "Das Blut-Carbonat-System: Lunge und Niere als Regulatoren",
        text: "Blut-pH 7,4 hält das System bei [HCO₃⁻]/[CO₂] ≈ 20:1 aufrecht. Die Lunge reguliert CO₂ innerhalb von Minuten (schnelle Kompensation): Hyperventilation → CO₂ sinkt → pH steigt. Die Niere reguliert HCO₃⁻ über Stunden bis Tage (langsame Kompensation): mehr H⁺-Ausscheidung und HCO₃⁻-Reabsorption. Respiratorische Störungen werden renal kompensiert und umgekehrt.",
        merksatz:
          "Lunge reguliert CO₂ (schnell), Niere reguliert HCO₃⁻ (langsam). pKa(eff.) = 6,1 für Blutpuffer.",
      },
      {
        heading: "Pufferkapazität: Warum Konzentration wichtig ist",
        text: "Die Pufferkapazität ist proportional zur Konzentration beider Pufferkomponenten. Ein Puffer bei pH = pKa hat maximale Kapazität (beide Komponenten vorhanden). Ist eine Komponente erschöpft (nur noch HA oder nur noch A⁻), versagt der Puffer. Klinisch: Bei metabolischer Azidose wird HCO₃⁻ verbraucht (puffert H⁺ zu H₂CO₃ → CO₂) → Pufferkapazität nimmt ab → pH sinkt trotz Kompensation.",
        merksatz:
          "Pufferkapazität maximal bei pH = pKa. Konzentriertere Puffer = höhere Kapazität. Begrenzt: Erschöpfung möglich.",
      },
      {
        heading: "Bohr-Effekt und Carboanhydrase",
        text: "Bohr-Effekt: HbO₂ + H⁺ ⇌ HHb⁺ + O₂. Niedriger pH in aktiven Geweben senkt O₂-Affinität von Hb → O₂-Abgabe steigt (Le Chatelier). In der Lunge (hoher pH) bindet Hb wieder O₂. Carboanhydrase (CA): Zn²⁺-Metalloenzym, beschleunigt CO₂ + H₂O ⇌ H₂CO₃ um 10⁶-fach. Vorkommen: Erythrozyten, Nierentubuli, Augenkammerwasser. Acetazolamid hemmt CA → Diuretikum und Glaukomtherapie.",
        merksatz:
          "Bohr-Effekt: pH ↓ → Hb gibt mehr O₂ ab. Carboanhydrase: Zn²⁺-Enzym, 10⁶× schneller, gehemmt durch Acetazolamid.",
      },
    ],

    merksätze: [
      "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) – die wichtigste Puffergleichung.",
      "Bei [A⁻] = [HA] gilt pH = pKa (Halbäquivalenzpunkt; maximale Pufferkapazität).",
      "Pufferbereich: pH = pKa ± 1 (Verhältnis 1:10 bis 10:1).",
      "Blut-Puffersystem: H₂CO₃/HCO₃⁻, pKa(eff.) ≈ 6,1; pH 7,4 → [HCO₃⁻]/[CO₂] ≈ 20:1.",
      "Lunge reguliert CO₂ schnell; Niere reguliert HCO₃⁻ langsam.",
      "Phosphatpuffer (H₂PO₄⁻/HPO₄²⁻, pKa ≈ 7,2): wichtig intrazellulär und im Urin.",
      "Proteine (Hämoglobin, Histidinreste) sind quantitativ wichtigste Puffer im Blut.",
      "Zugabe von H⁺: A⁻ + H⁺ → HA. Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O.",
      "Azidose: pH < 7,35; Alkalose: pH > 7,45 – Pufferversagen oder Überbelastung.",
      "Pufferkapazität erschöpft → pH fällt/steigt stark → medizinischer Notfall.",
      "Bohr-Effekt: niedrigeres pH → Hb gibt mehr O₂ ab (Le Chatelier).",
      "Carboanhydrase: CO₂ + H₂O ⇌ H₂CO₃ (10⁶× beschleunigt, Zn²⁺-Enzym).",
      "Acetazolamid hemmt Carboanhydrase → Diuretikum und Glaukomtherapie.",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Erklären Sie anhand der Henderson-Hasselbalch-Gleichung, warum das Carbonat-Puffersystem trotz eines pKa von 6,1 den Blut-pH bei 7,4 puffern kann, und wie Lunge und Niere zur Regulation beitragen.",
      answer:
        "Die Henderson-Hasselbalch-Gleichung lautet: pH = pKa + log([HCO₃⁻]/[CO₂]). Für das Blut: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]), also log([HCO₃⁻]/[CO₂]) = 1,3, d. h. das Verhältnis [HCO₃⁻]/[CO₂] ≈ 20:1. Obwohl der pKa (6,1) weit vom Blut-pH (7,4) entfernt liegt und der optimale Pufferbereich eigentlich bei pKa ± 1 = 5,1–7,1 wäre, ist das System effektiv, weil beide Komponenten reguliert werden können.\n\nDie **Lunge** reguliert CO₂ schnell (innerhalb von Minuten) über die Ventilation: Azidose → Hyperventilation → CO₂ sinkt → Nenner kleiner → Verhältnis steigt → pH steigt (respiratorische Kompensation). Alkalose → Hypoventilation → CO₂ steigt → pH sinkt.\n\nDie **Niere** reguliert HCO₃⁻ langsam (Stunden bis Tage): Bei Azidose scheidet die Niere mehr H⁺ aus (als NH₄⁺ und titrierbarer Säure) und reabsorbiert mehr HCO₃⁻ → Zähler steigt → pH steigt. Bei Alkalose umgekehrt.\n\nDie Kombination aus schneller respiratorischer und langsamer renaler Kompensation macht das System besonders flexibel und zum wichtigsten Blutpuffer. Die hohen Konzentrationen (HCO₃⁻ ≈ 24 mmol/L) verleihen dem System zudem eine große Pufferkapazität.",
    },
    klinischerBezug:
      "Die Henderson-Hasselbalch-Gleichung ist das Fundament der klinischen Blutgasanalyse: pH = 6,1 + log([HCO₃⁻]/[pCO₂ × 0,0307]). Eine respiratorische Azidose (pCO₂ ↑, z. B. bei COPD) wird renal durch HCO₃⁻-Retention kompensiert; eine metabolische Azidose (HCO₃⁻ ↓, z. B. Ketoazidose) wird respiratorisch durch Hyperventilation (Kussmaul-Atmung, CO₂ ↓) kompensiert. Diese gegenläufige Kompensation ist diagnostisch zentral zur Unterscheidung primärer und kompensatorischer Störungen.",
    selfTest: [
      {
        question:
          "Ein Puffersystem aus Essigsäure (pKa = 4,75) enthält [CH₃COO⁻] = 0,1 mol/L und [CH₃COOH] = 0,01 mol/L. Welcher pH liegt vor?",
        options: ["pH = 5,75", "pH = 4,75", "pH = 3,75", "pH = 6,75", "pH = 7,4"],
        correctIndex: 0,
        explanation:
          "pH = pKa + log([A⁻]/[HA]) = 4,75 + log(0,1/0,01) = 4,75 + log(10) = 4,75 + 1 = 5,75. Das Verhältnis [Base]/[Säure] = 10:1 verschiebt den pH um +1 pKa-Einheit nach oben. Bei 1:1 wäre pH = pKa = 4,75; bei 100:1 wäre pH = 4,75 + 2 = 6,75. Die Henderson-Hasselbalch-Gleichung erlaubt diese direkte Berechnung, ohne Ka explizit umzurechnen.",
        hints: ["pH = pKa + log([A⁻]/[HA])", "log(10) = 1 → pH = 4,75 + 1"],
        difficulty: 1,
        tags: ["henderson-hasselbalch", "puffer", "acetat"],
      },
      {
        question: "Welche der folgenden Aussagen zur Pufferkapazität ist FALSCH?",
        options: [
          "Die Pufferkapazität ist am größten, wenn pH = pKa",
          "Ein Puffer kann unbegrenzt viel Säure oder Base neutralisieren",
          "Eine konzentriertere Pufferlösung hat eine größere Pufferkapazität",
          "Die Pufferkapazität nimmt ab, wenn das Verhältnis [A⁻]/[HA] sehr groß oder sehr klein wird",
          "Der effektive Pufferbereich liegt bei pH = pKa ± 1",
        ],
        correctIndex: 1,
        explanation:
          "Ein Puffer kann NICHT unbegrenzt Säure oder Base aufnehmen – das ist die falsche Aussage. Die Pufferkapazität ist begrenzt durch die Mengen der vorhandenen Pufferkomponenten. Wird HA vollständig zu A⁻ umgewandelt (bei Zugabe von Base) oder A⁻ vollständig zu HA (bei Zugabe von Säure), ist die Kapazität erschöpft. Alle anderen Aussagen sind korrekt: Maximale Kapazität bei pH = pKa, konzentriertere Puffer puffern mehr, effektiver Pufferbereich bei pKa ± 1.",
        hints: [
          "Puffer haben endliche Kapazität – erschöpfbar",
          "Maximale Kapazität bei pH = pKa, nicht unbegrenzt",
        ],
        difficulty: 1,
        tags: ["pufferkapazität", "pufferbereich", "pka-pm1"],
      },
      {
        question:
          "Das Blut hat pH 7,4, der effektive pKa des Carbonat-Systems beträgt 6,1. Wie hoch ist das Verhältnis [HCO₃⁻]/[CO₂]?",
        options: ["1:1", "10:1", "20:1", "100:1", "7,4:6,1"],
        correctIndex: 2,
        explanation:
          "Henderson-Hasselbalch: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]). log([HCO₃⁻]/[CO₂]) = 7,4 − 6,1 = 1,3. [HCO₃⁻]/[CO₂] = 10^1,3 ≈ 20. Das Verhältnis ist ≈ 20:1 (nicht 10:1, was einem Unterschied von genau 1 pH-Einheit entsprechen würde). Normalwerte: [HCO₃⁻] ≈ 24 mmol/L, gelöstes CO₂ ≈ 1,2 mmol/L (bei pCO₂ = 40 mmHg). Das asymmetrische Verhältnis 20:1 erklärt, warum das System auf Säurezugabe empfindlicher reagiert als auf Basenzugabe.",
        hints: ["7,4 = 6,1 + log(x) → log(x) = 1,3 → x = 10^1,3 ≈ 20", "10^1 = 10; 10^1,3 ≈ 20"],
        difficulty: 2,
        tags: ["carbonat-puffer", "hco3-co2-verhältnis", "blut-ph"],
      },
      {
        question:
          "Ein Patient hat pH 7,2, pCO₂ = 30 mmHg (erniedrigt). Was für eine Störung liegt vor?",
        options: [
          "Respiratorische Azidose",
          "Metabolische Alkalose",
          "Respiratorische Alkalose",
          "Metabolische Azidose mit respiratorischer Kompensation",
          "Kein Säure-Base-Problem",
        ],
        correctIndex: 3,
        explanation:
          "pH 7,2 < 7,35 → Azidose. pCO₂ = 30 mmHg (normal: 35–45 mmHg) → erniedrigt → Hyperventilation. Bei einer primären respiratorischen Azidose wäre pCO₂ erhöht. Hier ist pCO₂ erniedrigt – das ist eine respiratorische Kompensation: Die Hyperventilation versucht, durch CO₂-Abatmung den pH zu heben. Primäre Störung: metabolische Azidose (HCO₃⁻ ↓). Kompensation: respiratorisch (pCO₂ ↓ durch Hyperventilation). Klinisches Beispiel: Diabetische Ketoazidose mit Kussmaul-Atmung.",
        hints: [
          "pH < 7,35 = Azidose; pCO₂ erniedrigt = Hyperventilation (Kompensation)",
          "Primäre Störung: wo liegt die Ursache? Kompensation: entgegengesetzt",
        ],
        difficulty: 3,
        tags: ["metabolische-azidose", "ketoazidose", "kussmaul"],
      },
      {
        question:
          "Warum liegt der pKa des Carbonat-Puffers effektiv bei 6,1, obwohl die reine Kohlensäure H₂CO₃ pKa1 ≈ 6,35 hat?",
        options: [
          "Weil die Niere den pKa verändert",
          "Weil der Ionenstärke-Effekt im Blut den pKa senkt",
          "Weil Hämoglobin den pKa senkt",
          "Weil der pH-Wert des Blutes den pKa beeinflusst",
          "Weil gelöstes CO₂ in die Pufferrechnung einbezogen wird und [CO₂] >> [H₂CO₃] ist",
        ],
        correctIndex: 4,
        explanation:
          "Im Blut ist die Konzentration von gelöstem CO₂ viel größer als die von H₂CO₃ (das Hydratationsgleichgewicht CO₂ + H₂O ⇌ H₂CO₃ liegt weit auf der CO₂-Seite, Verhältnis ca. 700:1). Wenn man in der Pufferrechnung nicht [H₂CO₃] allein, sondern [CO₂(aq)] + [H₂CO₃] ≈ [CO₂(aq)] als Nenner verwendet (was physiologisch sinnvoll ist, da CO₂ der regulierbare Parameter ist), ergibt sich ein effektiver pKa von 6,1 statt 6,35. Dieser effektive pKa wird mit 6,1 angegeben und ist für die Henderson-Hasselbalch-Gleichung im Blutkontext zu verwenden.",
        hints: [
          "CO₂(aq) >> H₂CO₃; effektiver Nenner ist CO₂(gesamt)",
          "pKa(eff) = 6,1 gilt für [HCO₃⁻]/[CO₂(aq)] – der in der Klinik verwendete Wert",
        ],
        difficulty: 3,
        tags: ["pka-effektiv", "co2-h2co3", "carbonat-puffer"],
      },
      {
        question:
          "Man bereitet einen Phosphatpuffer bei pH 7,4 mit dem Paar H₂PO₄⁻/HPO₄²⁻ (pKa = 7,2) vor. Welches Molverhältnis [HPO₄²⁻]/[H₂PO₄⁻] ist erforderlich?",
        options: [
          "Etwa 1,58:1 (mehr HPO₄²⁻)",
          "Genau 1:1",
          "Etwa 0,16:1 (mehr H₂PO₄⁻)",
          "Etwa 10:1",
          "Genau 7,4:7,2",
        ],
        correctIndex: 0,
        explanation:
          "Henderson-Hasselbalch: 7,4 = 7,2 + log([HPO₄²⁻]/[H₂PO₄⁻]). log([HPO₄²⁻]/[H₂PO₄⁻]) = 0,2. [HPO₄²⁻]/[H₂PO₄⁻] = 10^0,2 ≈ 1,58. Es überwiegt HPO₄²⁻ leicht (etwa 61 % HPO₄²⁻, 39 % H₂PO₄⁻). Bei pKa = 7,2 und pH = 7,4 (0,2 pH-Einheiten über pKa) gilt: etwas mehr als 50 % liegen als Base vor. Bei pKa 7,2 ist dieser Puffer ideal für physiologische pH-Werte und wird für Laborpuffer verwendet.",
        hints: [
          "7,4 = 7,2 + log(x) → log(x) = 0,2 → x = 10^0,2 ≈ 1,58",
          "10^0,2 ≈ 1,58 (da 10^0 = 1 und 10^1 = 10)",
        ],
        difficulty: 2,
        tags: ["phosphatpuffer", "ph74", "henderson-hasselbalch"],
      },
      {
        question:
          "Warum ist der Phosphatpuffer (pKa ≈ 7,2) im Blutplasma weniger wichtig als intrazellulär, obwohl sein pKa ideal für pH 7,4 wäre?",
        options: [
          "Weil Phosphat zu schnell reagiert und das System instabil macht",
          "Weil die Phosphatkonzentration im Plasma sehr niedrig ist (~1 mmol/L) verglichen mit HCO₃⁻ (~24 mmol/L)",
          "Weil Phosphat nur im sauren Milieu als Puffer wirkt",
          "Weil Phosphat mit Kalzium reagiert und ausfällt",
          "Weil Phosphat durch die Niere vollständig entfernt wird",
        ],
        correctIndex: 1,
        explanation:
          "Obwohl pKa ≈ 7,2 ideal nahe am physiologischen pH liegt, ist die Phosphatkonzentration im Blutplasma sehr niedrig (ca. 1 mmol/L), verglichen mit HCO₃⁻ (ca. 24 mmol/L). Die Pufferkapazität ist proportional zur Konzentration der Pufferkomponenten. Intrazellulär hingegen sind Phosphatkonzentrationen höher (ca. 10–40 mmol/L), weshalb der Phosphatpuffer dort eine bedeutende Rolle spielt. Zusätzlich ist der Carbonatpuffer durch die Regulierbarkeit von CO₂ über die Lunge besonders leistungsfähig.",
        hints: [
          "Pufferkapazität ∝ Konzentration der Pufferkomponenten",
          "Plasma: [HCO₃⁻] ≈ 24 mmol/L >> [Phosphat] ≈ 1 mmol/L",
        ],
        difficulty: 3,
        tags: ["phosphatpuffer", "konzentration", "intrazellulär"],
      },
      {
        question:
          "Welches Ergebnis hat die Henderson-Hasselbalch-Gleichung, wenn [A⁻]/[HA] = 100:1?",
        options: ["pH = pKa − 2", "pH = pKa − 1", "pH = pKa + 2", "pH = pKa + 1", "pH = pKa"],
        correctIndex: 2,
        explanation:
          "pH = pKa + log([A⁻]/[HA]) = pKa + log(100) = pKa + 2. Beim Verhältnis 100:1 (100-facher Überschuss der Baseform) liegt der pH 2 Einheiten über dem pKa. Bei 10:1 wäre pH = pKa + 1; bei 1:1 pH = pKa; bei 1:10 pH = pKa − 1; bei 1:100 pH = pKa − 2. Dies verdeutlicht den Pufferbereich: Außerhalb von pKa ± 1 (also 1:10 bis 10:1) ist eine Komponente so stark verarmt, dass kaum noch Pufferung möglich ist.",
        hints: ["log(100) = log(10²) = 2", "pH = pKa + log(100) = pKa + 2"],
        difficulty: 1,
        tags: ["henderson-hasselbalch", "verhältnis", "pufferbereich"],
      },
    ],
  },
  {
    id: "ch-10-04",
    title: "Titrationskurven, Indikatoren und klinische Anwendung",
    stichworte: [
      "Äquivalenzpunkt",
      "Halbäquivalenzpunkt pH = pKa",
      "Phenolphthalein",
      "Methylorange",
      "Titrationskurve",
      "Respiratorische Azidose",
      "Metabolische Azidose",
      "Kussmaul-Atmung",
      "Blutgasanalyse BGA",
      "Anionenlücke",
      "Kompensationsmechanismen",
    ],
    content: `## Grundprinzip der Titration


Eine **Titration** ist ein analytisches Verfahren zur quantitativen Bestimmung einer unbekannten Konzentration. Eine Lösung bekannter Konzentration (Titrant, in der Bürette) wird einer Lösung unbekannter Konzentration (Analyt, in dem Erlenmeyerkolben) tropfenweise zugegeben, bis die Reaktion vollständig ist.

**Äquivalenzpunkt**: Der Punkt, an dem stöchiometrisch genauso viele Moles Titrant wie Analyt vorhanden sind.

**Berechnung:** n(Säure) = n(Base) -> c1 * V1 = c2 * V2

## Titrationskurven: Vier wichtige Fälle


### 1. Starke Säure mit starker Base (z. B. HCl mit NaOH)

- Äquivalenzpunkt bei **pH = 7** (Salz NaCl reagiert neutral)
- Steiler pH-Sprung um den Äquivalenzpunkt (ca. pH 3-11 in enger Volumenspanne)
- Indikatoren: **Phenolphthalein** (pH 8-10) oder **Methylorange** (pH 3,1-4,4) geeignet

### 2. Schwache Säure mit starker Base (z. B. CH3COOH mit NaOH)

- Äquivalenzpunkt bei **pH > 7** (basisch, weil Acetat CH3COO- basisch hydrolysiert)
- Am Halbäquivalenzpunkt (Volumen = 1/2 Äquivalenzvolumen): **pH = pKa** der Säure
- Pufferbereich sichtbar: flache Kurve um pKa +/- 1
- Indikator: **Phenolphthalein** geeignet (Umschlag im Basischen)

### 3. Starke Säure mit schwacher Base (z. B. HCl mit NH3)

- Äquivalenzpunkt bei **pH < 7** (sauer, weil NH4+ sauer hydrolysiert)
- Indikator: **Methylorange** geeignet (Umschlag im Sauren)

### 4. Schwache Säure mit schwacher Base

- Kein klarer Äquivalenzpunkt (schwacher pH-Sprung)
- In der Praxis vermieden, Indikatoren ungeeignet

### Mehrprotonige Säuren (z. B. H3PO4 mit NaOH)

Zeigen **mehrere Äquivalenzpunkte** (einen pro Protonierungsstufe). Bei H3PO4 gibt es drei Äquivalenzpunkte und zwei erkennbare Pufferbereiche.

## Indikatoren: Schwache Säuren mit Farbunterschied

Indikatoren (HIn) sind selbst schwache Säuren, deren Protonierungs- und Deprotonierungsform unterschiedliche Farben haben:

HIn  ⇌ H+  +  In-
(Farbe 1)      (Farbe 2)

Der Farbumschlag erfolgt beim **pKa(HIn)**. Im Bereich **pKa +/- 1** sieht man eine Mischfarbe.

### Wichtige Indikatoren:
| Indikator | Umschlagsbereich | Farbe sauer | Farbe basisch |
|-----------|-----------------|-------------|----------------|
| Methylorange | 3,1-4,4 | Rot | Gelb |
| Methylrot | 4,4-6,2 | Rot | Gelb |
| Lackmus (Litmus) | 5,0-8,0 | Rot | Blau |
| Bromthymolblau | 6,0-7,6 | Gelb | Blau |
| Phenolphthalein | 8,2-10,0 | Farblos | Rot-violett |
| Thymolblau | 8,0-9,6 | Gelb | Blau |

**Auswahl des Indikators:** Der Indikator muss so gewählt werden, dass sein Umschlagsbereich mit dem pH am Äquivalenzpunkt übereinstimmt.

## Klinische Säure-Base-Pathophysiologie

Der normale Blut-pH liegt bei **7,35-7,45**. Vier primäre Störungen sind zu unterscheiden:

### Respiratorische Azidose
- **Ursache:** Hypoventilation -> CO2 hoch (pCO2 > 45 mmHg)
- **pH:** < 7,35 (Azidose)
- **Kompensation:** Niere erhöht HCO3--Reabsorption (langsam, Tage)
- **Beispiele:** COPD, Sedierung, Atemmuskellähmung

### Respiratorische Alkalose
- **Ursache:** Hyperventilation -> CO2 niedrig (pCO2 < 35 mmHg)
- **pH:** > 7,45 (Alkalose)
- **Kompensation:** Niere erhöht HCO3--Ausscheidung
- **Beispiele:** Angst, Höhenkrankheit, Fieber

### Metabolische Azidose
- **Ursache:** HCO3- niedrig oder H+-Überschuss
- **pH:** < 7,35
- **Kompensation:** Hyperventilation -> CO2 niedrig (Kussmaul-Atmung)
- **Beispiele:** Ketoazidose (Diabetes), Laktazidose, Nierenversagen, Diarrhö
- **Anionenlücke:** AG = Na+ - (Cl- + HCO3-) normal 8-16 mEq/L; erhöhte AG bei Keto-/Laktazidose

### Metabolische Alkalose
- **Ursache:** HCO3- hoch oder H+-Verlust
- **pH:** > 7,45
- **Kompensation:** Hypoventilation -> CO2 hoch
- **Beispiele:** Erbrechen (HCl-Verlust), Diuretika-Einnahme, übermäßige NaHCO3-Zufuhr

## Referenz: BGA-Interpretation

| Störung | pH | pCO2 | HCO3- |
|---------|-----|------|--------|
| Resp. Azidose | niedrig | hoch | hoch (kompensatorisch) |
| Resp. Alkalose | hoch | niedrig | niedrig (kompensatorisch) |
| Met. Azidose | niedrig | niedrig (kompensatorisch) | niedrig |
| Met. Alkalose | hoch | hoch (kompensatorisch) | hoch |

## Normwerte für Blutgasanalyse (BGA)
- pH: 7,35-7,45
- pCO2: 35-45 mmHg
- pO2: 75-100 mmHg (arteriell)
- HCO3-: 22-26 mmol/L
- Base Excess (BE): -2 bis +2 mmol/L

---

> **Merke:** Am Halbäquivalenzpunkt einer Titration (Volumen = 1/2 des Äquivalenzvolumens) gilt pH = pKa -- dort liegt die maximale Pufferkapazität. Der Äquivalenzpunkt liegt bei pH = 7 nur für starke Säure + starke Base; bei schwacher Säure + starker Base liegt er im Basischen.

> **Merke:** BGA-Diagnostik: pH < 7,35 = Azidose, pH > 7,45 = Alkalose. Primär pCO2 verändert = respiratorisch; primär HCO3- verändert = metabolisch. Kompensation erfolgt jeweils durch das andere Organ (Lunge <-> Niere).

> **Prüfungstipp:** BGA-Interpretation in 3 Schritten: (1) pH prüfen: Azidose oder Alkalose? (2) pCO₂ oder HCO₃⁻ als Ursache identifizieren. (3) Kompensation vorhanden? Äquivalenzpunkt-pH merken: stark+stark = 7, schwach+stark = basisch, stark+schwach = sauer.`,
    lernziele: [
      "Titrationskurven für starke und schwache Säure/Base-Kombinationen beschreiben und den Äquivalenzpunkt lokalisieren",
      "Den pH am Äquivalenzpunkt vorhersagen (neutral, sauer oder basisch) und begründen",
      "Den passenden Indikator für eine gegebene Titration auswählen",
      "Die vier primären Säure-Base-Störungen (respiratorisch/metabolisch, Azidose/Alkalose) erklären und anhand von BGA-Werten identifizieren",
      "Kompensationsmechanismen von Lunge und Niere beschreiben",
    ],
    sections: [
      {
        heading: "Titrationskurven: Äquivalenzpunkt und pH-Sprung",
        text: "Bei der Titration starker Säure mit starker Base liegt der Äquivalenzpunkt bei pH 7 (NaCl reagiert neutral). Bei schwacher Säure mit starker Base liegt er im Basischen (pH > 7), weil das entstehende Salz (z. B. Natriumacetat) basisch hydrolysiert. Am Halbäquivalenzpunkt gilt pH = pKa – das ist der Pufferbereich. Der steile pH-Sprung um den Äquivalenzpunkt ist charakteristisch und erlaubt die Indikatorwahl. Je schwächer die Säure oder Base, desto weniger steil der Sprung.",
        merksatz:
          "Starke Säure + starke Base → Äquivalenzpunkt pH 7. Schwache Säure + starke Base → pH > 7. Schwache Base + starke Säure → pH < 7.",
      },
      {
        heading: "Indikatoren: Auswahl nach Äquivalenzpunkt",
        text: "Indikatoren sind selbst schwache Säuren (HIn ⇌ H⁺ + In⁻) mit zwei verschiedenfarbigen Formen. Der Umschlag findet bei pKa(HIn) statt. Der Indikator muss im Umschlagsbereich des Äquivalenzpunkts liegen. Für starke Säure/starke Base: Phenolphthalein (8–10) oder Methylorange (3–4) möglich, weil der pH-Sprung beide Bereiche überquert. Für schwache Säure/starke Base: nur Phenolphthalein (basischer Äquivalenzpunkt). Für starke Säure/schwache Base: nur Methylorange oder Methylrot.",
        merksatz:
          "Indikatorwahl: pKa(Indikator) ≈ pH am Äquivalenzpunkt. Phenolphthalein für basische, Methylorange für saure Äquivalenzpunkte.",
      },
      {
        heading: "Klinische Azidose und Alkalose: BGA-Interpretation",
        text: "Vier primäre Störungen: (1) Respiratorische Azidose: pH ↓, pCO₂ ↑ → renale Kompensation (HCO₃⁻ ↑). (2) Respiratorische Alkalose: pH ↑, pCO₂ ↓ → renale Kompensation (HCO₃⁻ ↓). (3) Metabolische Azidose: pH ↓, HCO₃⁻ ↓ → respiratorische Kompensation (pCO₂ ↓, Kussmaul-Atmung). (4) Metabolische Alkalose: pH ↑, HCO₃⁻ ↑ → respiratorische Kompensation (pCO₂ ↑). Die primäre Störung und die Kompensation verändern sich immer in dieselbe Richtung (CO₂ und HCO₃⁻ ändern sich gleichsinnig bei Kompensation).",
        merksatz:
          "pH ↓ = Azidose. pH ↑ = Alkalose. Primär CO₂-Änderung = respiratorisch. Primär HCO₃⁻-Änderung = metabolisch.",
      },
    ],

    merksätze: [
      "Titration: n(Säure) = n(Base) am Äquivalenzpunkt → c₁V₁ = c₂V₂.",
      "Starke Säure + starke Base: Äquivalenzpunkt pH = 7 (neutrales Salz).",
      "Schwache Säure + starke Base: Äquivalenzpunkt pH > 7 (basisches Salz hydrolysiert).",
      "Am Halbäquivalenzpunkt einer schwachen Säure: pH = pKa.",
      "Indikatoren: schwache Säuren mit zwei Farbformen; Umschlag bei pKa(Indikator).",
      "Phenolphthalein: farblos (sauer) → rot-violett (basisch), Umschlag pH 8,2–10,0.",
      "Methylorange: rot (sauer) → gelb (basisch), Umschlag pH 3,1–4,4.",
      "Blut-pH 7,35–7,45; pCO₂ 35–45 mmHg; HCO₃⁻ 22–26 mmol/L – Normwerte.",
      "Respiratorische Azidose: pCO₂ ↑, pH ↓ (z. B. COPD); renale Kompensation: HCO₃⁻ ↑.",
      "Metabolische Azidose: HCO₃⁻ ↓, pH ↓ (z. B. Ketoazidose); respiratorische Kompensation: pCO₂ ↓ (Kussmaul).",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Beschreiben Sie den Verlauf der Titrationskurve bei der Titration einer schwachen Säure (z. B. Essigsäure, pKa = 4,75) mit Natronlauge. Auf welchen pH-Wert setzt der Äquivalenzpunkt, und welcher Indikator ist geeignet?",
      answer:
        "Die Titrationskurve der Essigsäure mit NaOH beginnt bei einem relativ flachen Anfangs-pH (für 0,1 mol/L CH₃COOH ca. pH 2,87). Zu Beginn der Titration (0 bis ca. 50 % des Äquivalenzvolumens) steigt der pH nur langsam an – dies ist der Pufferbereich, in dem sowohl CH₃COOH als auch CH₃COO⁻ vorhanden sind. Am Halbäquivalenzpunkt (50 % des Äquivalenzvolumens hinzugefügt) gilt pH = pKa = 4,75, da [CH₃COOH] = [CH₃COO⁻].\n\nNachdem etwa 90–100 % des Äquivalenzvolumens zugegeben wurden, steigt der pH rasch an (steiler pH-Sprung). Am Äquivalenzpunkt liegt der pH nicht bei 7, sondern im basischen Bereich (ca. pH 8,9 für 0,1 mol/L CH₃COONa). Das ist so, weil das entstehende Natriumacetat (CH₃COONa) in Wasser basisch hydrolysiert: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ – Acetat ist die konjugierte Base der schwachen Essigsäure und ist eine mittelstarke Base.\n\nDa der Äquivalenzpunkt im basischen Bereich (pH ≈ 8–9) liegt, ist **Phenolphthalein** (Umschlagsbereich pH 8,2–10,0) der geeignete Indikator: Er schlägt genau in diesem Bereich von farblos nach rot-violett um. Methylorange (Umschlag pH 3,1–4,4) wäre ungeeignet, da es im Pufferbereich der Essigsäure umschlägt, nicht am Äquivalenzpunkt.",
    },
    klinischerBezug:
      "Die Unterscheidung der vier primären Säure-Base-Störungen (respiratorisch/metabolisch × Azidose/Alkalose) ist eine Kernkompetenz der klinischen Medizin. Bei einer Blutgasanalyse (BGA) bestimmt man pH, pCO₂ und HCO₃⁻: pH < 7,35 bei pCO₂ > 45 mmHg ist respiratorische Azidose (z. B. COPD-Exazerbation), pH < 7,35 bei HCO₃⁻ < 22 mmol/L ist metabolische Azidose (z. B. Ketoazidose; Kussmaul-Atmung als Kompensation). Die gleichzeitige Beurteilung des Kompensationsstatus erlaubt die Diagnose primärer und sekundärer Störungen.",
    selfTest: [
      {
        question:
          "Bei der Titration von 25 mL HCl (unbekannte Konzentration) werden 20 mL NaOH (0,1 mol/L) verbraucht. Wie groß ist c(HCl)?",
        options: ["0,05 mol/L", "0,125 mol/L", "0,1 mol/L", "0,08 mol/L", "0,2 mol/L"],
        correctIndex: 3,
        explanation:
          "Am Äquivalenzpunkt gilt: n(HCl) = n(NaOH) (1:1-Stöchiometrie). n(NaOH) = c × V = 0,1 mol/L × 0,020 L = 0,002 mol. n(HCl) = 0,002 mol. c(HCl) = n/V = 0,002 mol / 0,025 L = 0,08 mol/L. Merke: c₁V₁ = c₂V₂ gilt nur bei einbasigen Säuren und einsäurigen Basen (1:1-Stöchiometrie). Bei zweiprotoniger Säure wie H₂SO₄ wäre das Verhältnis 1:2, also c(H₂SO₄) = c(NaOH) × V(NaOH) / (2 × V(H₂SO₄)).",
        hints: ["n(HCl) = n(NaOH) am Äquivalenzpunkt", "c(HCl) = n/V = (0,1 × 0,020) / 0,025"],
        difficulty: 1,
        tags: ["titration", "äquivalenzpunkt", "c1v1-c2v2"],
      },
      {
        question:
          "Welcher Indikator ist für die Titration von Essigsäure (pKa = 4,75) mit NaOH am besten geeignet?",
        options: [
          "Methylorange (Umschlag pH 3,1–4,4)",
          "Methylrot (Umschlag pH 4,4–6,2)",
          "Lackmus (Umschlag pH 5,0–8,0)",
          "Bromthymolblau (Umschlag pH 6,0–7,6)",
          "Phenolphthalein (Umschlag pH 8,2–10,0)",
        ],
        correctIndex: 4,
        explanation:
          "Bei der Titration einer schwachen Säure (Essigsäure) mit einer starken Base (NaOH) liegt der Äquivalenzpunkt im Basischen (pH ≈ 8–9, weil Acetat basisch hydrolysiert). Daher braucht man einen Indikator, der in diesem basischen Bereich umschlägt: Phenolphthalein (Umschlag pH 8,2–10,0) ist ideal. Methylorange schlägt im sauren Bereich um (pH 3,1–4,4) – das liegt im Pufferbereich der Essigsäure, nicht am Äquivalenzpunkt. Bromthymolblau (6–7,6) liegt zu nah am neutralen Bereich.",
        hints: [
          "Äquivalenzpunkt schwache Säure + starke Base: pH > 7",
          "Indikator muss im pH-Bereich des Äquivalenzpunkts umschlagen",
        ],
        difficulty: 1,
        tags: ["indikator", "phenolphthalein", "titration-essigsäure"],
      },
      {
        question:
          "Bei der Titration von NH₃ (schwache Base, pKb = 4,75) mit HCl (starke Säure) liegt der Äquivalenzpunkt bei:",
        options: [
          "pH < 7 (sauer)",
          "pH > 7 (basisch)",
          "pH = 7 (neutral)",
          "pH = pKb = 4,75",
          "pH = 14",
        ],
        correctIndex: 0,
        explanation:
          "Bei der Titration einer schwachen Base (NH₃) mit einer starken Säure (HCl) entsteht am Äquivalenzpunkt das Salz NH₄Cl. NH₄⁺ ist die konjugierte Säure der schwachen Base NH₃ und reagiert sauer: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75 = 9,25. Der pH am Äquivalenzpunkt liegt sauer, ca. bei pH = 5–5,5 (für 0,1 mol/L NH₄Cl). Geeigneter Indikator: Methylorange oder Methylrot (Umschlag im Sauren).",
        hints: [
          "Schwache Base + starke Säure → Salz hydrolysiert sauer",
          "NH₄⁺ ist konjugierte Säure von NH₃ → saure Lösung am Äquivalenzpunkt",
        ],
        difficulty: 2,
        tags: ["titration-nh3", "äquivalenzpunkt-sauer", "salz-hydrolyse"],
      },
      {
        question:
          "Ein Patient hat folgende BGA-Werte: pH = 7,52, pCO₂ = 30 mmHg, HCO₃⁻ = 24 mmol/L. Welche Störung liegt vor?",
        options: [
          "Metabolische Alkalose",
          "Respiratorische Alkalose (unkompensiert)",
          "Respiratorische Azidose",
          "Metabolische Azidose mit respiratorischer Kompensation",
          "Keine Störung",
        ],
        correctIndex: 1,
        explanation:
          "pH 7,52 > 7,45 → Alkalose. pCO₂ = 30 mmHg < 35 mmHg (erniedrigt) → CO₂ wird abgeatmet → Hyperventilation. HCO₃⁻ = 24 mmol/L (normal). Primäre Störung: pCO₂ erniedrigt → respiratorische Alkalose. Da HCO₃⁻ noch normal ist, keine renale Kompensation → unkompensiert. Bei kompensierter respiratorischer Alkalose würde die Niere HCO₃⁻ ausscheiden (HCO₃⁻ ↓). Ursachen: Hyperventilation bei Angst, Schmerz, Höhe, Sepsis. Behandlung: Ursache beheben, evtl. CO₂-Rückatmung.",
        hints: [
          "pH > 7,45 = Alkalose; pCO₂ erniedrigt = respiratorisch primär",
          "HCO₃⁻ normal → keine renale Kompensation → unkompensiert",
        ],
        difficulty: 2,
        tags: ["respiratorische-alkalose", "hyperventilation", "bga"],
      },
      {
        question:
          "Ein diabetischer Patient mit schlechter Einstellung hat pH 7,22, pCO₂ = 25 mmHg, HCO₃⁻ = 10 mmol/L. Welche Diagnose und welches klinische Zeichen der Kompensation sind zu erwarten?",
        options: [
          "Respiratorische Azidose; Oligurie als Kompensation",
          "Metabolische Alkalose; Hypoventilation als Kompensation",
          "Metabolische Azidose; Kussmaul-Atmung als respiratorische Kompensation",
          "Respiratorische Alkalose; renale HCO₃⁻-Retention als Kompensation",
          "Gemischte Störung ohne erkennbare Kompensation",
        ],
        correctIndex: 2,
        explanation:
          "pH 7,22 < 7,35 → Azidose. HCO₃⁻ = 10 mmol/L (normal 22–26) → stark erniedrigt → primär metabolische Azidose. pCO₂ = 25 mmHg (normal 35–45) → erniedrigt → respiratorische Kompensation durch Hyperventilation. Klinisches Zeichen: Kussmaul-Atmung (tiefe, regelmäßige, geräuschvolle Atemzüge) – charakteristisch für die diabetische Ketoazidose. Bei der Ketoazidose sind Ketonkörper (β-Hydroxybutyrat, Acetoacetat) starke Säuren, die HCO₃⁻ verbrauchen. Behandlung: Insulin, Flüssigkeit, Elektrolytausgleich.",
        hints: [
          "HCO₃⁻ ↓ → metabolische Störung; pCO₂ ↓ → respiratorische Kompensation",
          "Ketoazidose → Kussmaul-Atmung (tiefe Hyperventilation als Kompensation)",
        ],
        difficulty: 2,
        tags: ["ketoazidose", "kussmaul-atmung", "metabolische-azidose"],
      },
      {
        question:
          "Was versteht man unter dem Halbäquivalenzpunkt bei der Titration einer schwachen Säure, und welchen Wert hat der pH dort?",
        options: [
          "Der Punkt, an dem die Hälfte des Titranten zugegeben wurde und pH = 7",
          "Der Punkt, an dem der Indikator umschlägt",
          "Der Äquivalenzpunkt selbst, bei pH > 7",
          "Der Punkt, an dem [HA] = [A⁻] und pH = pKa der schwachen Säure",
          "Der Punkt, an dem [OH⁻] = [H₃O⁺]",
        ],
        correctIndex: 3,
        explanation:
          "Der Halbäquivalenzpunkt liegt bei der Hälfte des Äquivalenzvolumens (also wenn halb so viel Base zugegeben wurde wie am Äquivalenzpunkt nötig). An diesem Punkt ist genau die Hälfte der Säure HA zur konjugierten Base A⁻ neutralisiert worden: [HA] = [A⁻]. Nach Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0 = pKa. Am Halbäquivalenzpunkt ist also pH = pKa der schwachen Säure. Dieser Punkt ist diagnostisch wichtig: Man kann pKa einer unbekannten Säure durch Titration bestimmen.",
        hints: [
          "Halbäquivalenz: halb neutralisiert → [HA] = [A⁻]",
          "Henderson-Hasselbalch: bei [HA] = [A⁻] → log(1) = 0 → pH = pKa",
        ],
        difficulty: 2,
        tags: ["halbäquivalenzpunkt", "pka-bestimmung", "titration"],
      },
      {
        question:
          "Phenolphthalein ist farblos bei pH 7 und rot-violett bei pH 10. Es selbst ist eine schwache Säure mit pKa ≈ 9,1. Bei welchem pH findet der Farbumschlag statt?",
        options: [
          "Bei pH = 7 (neutral)",
          "Bei pH = 14 (maximal basisch)",
          "Der Umschlag hängt nicht vom pKa ab",
          "Bei pH = 7,4 (Blut-pH)",
          "Bei pH ≈ 9,1 (= pKa des Indikators)",
        ],
        correctIndex: 4,
        explanation:
          "Indikatoren sind schwache Säuren (HIn). Der Farbumschlag findet in der Nähe des pKa des Indikators statt. Bei pH << pKa überwiegt HIn (saure, farblose Form). Bei pH >> pKa überwiegt In⁻ (basische, rote Form). Bei pH = pKa sind [HIn] = [In⁻]: man sieht eine Mischfarbe, und das ist der Mittelpunkt des Umschlagsbereichs (pKa ± 1). Für Phenolphthalein mit pKa ≈ 9,1 ist der Umschlagsbereich 8,1–10,1. Dies erklärt, warum Phenolphthalein für Titrationen mit basischem Äquivalenzpunkt geeignet ist.",
        hints: [
          "Indikator-Umschlag bei pH ≈ pKa(Indikator)",
          "HIn (farblos) ⇌ H⁺ + In⁻ (farbig): Gleichgewicht bestimmt Farbe",
        ],
        difficulty: 2,
        tags: ["phenolphthalein", "indikator-pka", "farbumschlag"],
      },
      {
        question:
          "Ein Patient mit chronischer Niereninsuffizienz hat pH 7,30, pCO₂ = 32 mmHg, HCO₃⁻ = 15 mmol/L. Welche Störung liegt vor?",
        options: [
          "Metabolische Azidose mit respiratorischer Kompensation",
          "Metabolische Alkalose",
          "Respiratorische Azidose mit metabolischer Kompensation",
          "Respiratorische Alkalose mit metabolischer Kompensation",
          "Normalbefund",
        ],
        correctIndex: 0,
        explanation:
          "pH 7,30 < 7,35 → Azidose. HCO₃⁻ = 15 mmol/L < 22 mmol/L → stark erniedrigt → primär metabolische Ursache (Niere kann H⁺ nicht ausreichend ausscheiden und HCO₃⁻ nicht regenerieren). pCO₂ = 32 mmHg < 35 mmHg → erniedrigt → respiratorische Kompensation (Hyperventilation). Diagnose: Metabolische Azidose mit respiratorischer Kompensation, typisch für chronische Niereninsuffizienz. Die Niere ist hier die Ursache (kann keine Säuren ausscheiden), nicht die Kompensationsorgane. Behandlung: Natriumbicarbonat-Substitution, renale Ersatztherapie.",
        hints: [
          "HCO₃⁻ erniedrigt → primär metabolisch; pCO₂ erniedrigt → respiratorische Kompensation",
          "Chronische Niereninsuffizienz → HCO₃⁻ ↓ (Niere kann Säure nicht ausscheiden)",
        ],
        difficulty: 3,
        tags: ["niereninsuffizienz", "metabolische-azidose", "bga"],
      },
    ],
  },
  {
    id: "ch-11-03",
    title: "Nernst-Gleichung und Elektrochemisches Gleichgewicht",
    stichworte: [
      "Nernst-Gleichung",
      "Reaktionsquotient Q",
      "Nernst-Faktor 59,16 mV",
      "Glaselektrode pH-Messung",
      "Gleichgewichtskonstante aus E°",
      "Konzentrationszelle",
      "Nernst-Potenzial biologisch",
      "Ruhemembranpotenzial",
      "Goldman-Gleichung",
      "K⁺-Nernst −90 mV",
    ],
    content: `


## Warum reicht E° allein nicht aus?

Das **Standardpotenzial E°** beschreibt die Spannung unter idealen Laborbedingungen (25 °C, alle Konzentrationen exakt 1 mol/L). In der Realität sind diese Bedingungen fast nie erfüllt: Im Blut liegt die K+-Konzentration bei 4 mmol/L, nicht bei 1 mol/L. Die **Nernst-Gleichung** korrigiert E° für reale Konzentrationen.

**Die Grundidee in einem Satz:** Je mehr vom Oxidationsmittel vorhanden ist, desto stärker "will" die Reaktion ablaufen -> die Spannung steigt. Je mehr vom Reduktionsmittel da ist, desto schwächer wird der Antrieb -> die Spannung sinkt.

Das ist wie ein Wasserfall: Je größer der Höhenunterschied (= Konzentrationsunterschied), desto mehr Kraft hat das Wasser (= Spannung).

---

## Die Nernst-Gleichung -- Schritt für Schritt

Die Formel sieht auf den ersten Blick kompliziert aus, aber sie hat nur **eine zentrale Aussage**: *Das reale Potenzial E weicht vom Standardpotenzial E ab, und zwar abhängig vom Konzentrationsverhältnis Q.*

**E = E_Standard - (0,05916 V)/n * log(Q)**   *(bei 25 °C)*

Was bedeuten die einzelnen Teile?

| Symbol | Bedeutung | Woher kommt es? |
|--------|-----------|-----------------|
| **E** | Das tatsächliche Potenzial -- was du messen würdest | Das ist gesucht |
| **E_Standard** | Das Standardpotenzial (aus der Tabelle) | Bekannt aus dem letzten UK |
| **0,05916 V** | Der "Nernst-Faktor" -- eine Naturkonstante bei 25 °C | Kommt aus R*T/F * ln(10) |
| **n** | Anzahl übertragener Elektronen | Aus der Reaktionsgleichung |
| **Q** | Reaktionsquotient: [Produkte] / [Edukte] | Aus den aktuellen Konzentrationen |

**Das Minuszeichen** ist der Schlüssel: Wenn Q groß wird (viel Produkt, wenig Edukt -> Batterie fast leer), wird E kleiner. Wenn Q klein ist (viel Edukt -> Batterie frisch), bleibt E nahe an E_Standard oder wird sogar größer.

> **Merke:** Mehr Oxidationsmittel (Edukt) = stärkerer Antrieb = höheres E. Mehr Reduktionsmittel (Produkt) = schwächerer Antrieb = niedrigeres E. Der Nernst-Faktor beträgt **59,16 mV pro Zehnerpotenz** im Konzentrationsverhältnis (bei 25 °C).

---

## Wie misst das pH-Gerät im Krankenhaus?

Die wichtigste Anwendung der Nernst-Gleichung in der Klinik ist die **pH-Messung** mit einer Glaselektrode. Das Prinzip ist elegant: Eine spezielle Glasmembran lässt nur H+-Ionen durch. Je nachdem wie viele H+-Ionen in der Lösung sind (= der pH-Wert), baut sich eine messbare Spannung auf.

Pro **pH-Einheit** ändert sich die Spannung um genau **59,16 mV** (bei 25 °C).

- pH sinkt um 1 (z. B. von 7 auf 6 = 10-fach mehr H+) -> Spannung steigt um ca. 59 mV
- pH steigt um 1 (z. B. von 7 auf 8 = 10-fach weniger H+) -> Spannung sinkt um ca. 59 mV

Bei **Körpertemperatur (37 °C)** beträgt der Nernst-Faktor ca. **61,5 mV** pro pH-Einheit.

> **Merke:** Glaselektrode: **-59 mV pro pH-Einheit** (25 °C). Klinisch: Blutgasanalysator misst Blut-pH (Norm: 7,35-7,45) genau mit diesem Prinzip.

---

## Biologische Membranpotenziale -- Nernst in der Zelle

Nervenzellen besitzen einen charakteristischen Ionengradienten:

- **Intrazellulär:** viel K+ (ca. 140 mmol/L), wenig Na+ (ca. 15 mmol/L)
- **Extrazellulär:** wenig K+ (ca. 4 mmol/L), viel Na+ (ca. 145 mmol/L)

Dieser Konzentrationsunterschied erzeugt -- genau wie bei einer Batterie -- eine elektrische Spannung. Die Nernst-Gleichung berechnet, welche Spannung sich für **ein einzelnes Ion** ergibt:

**E_Ion = (RT/zF) * ln([außen] / [innen])**

In der Praxis merkt man sich die Ergebnisse:

| Ion | innen | außen | Nernst-Potenzial |
|-----|-------|--------|----------|
| **K+** | 140 mmol/L | 4 mmol/L | **ca. -90 mV** |
| **Na+** | 15 mmol/L | 145 mmol/L | **ca. +62 mV** |

Wäre die Membran *nur* für K+ durchlässig, läge das Potenzial bei -90 mV. Wäre sie *nur* für Na+ durchlässig, bei +62 mV. In der Realität ist sie vor allem für K+ durchlässig -- daher liegt das **Ruhemembranpotenzial bei ca. -70 mV** (näher am K+-Wert).

> **Merke:** K+-Nernst ca. -90 mV, Na+-Nernst ca. +62 mV. Ruhemembranpotenzial (ca. -70 mV) liegt dazwischen. Diesen Zusammenhang beschreibt die **Goldman-Gleichung**.

> **Prüfungstipp:** Der Nernst-Faktor 59,16 mV (bei 25 °C) taucht in Rechenfragen auf: Pro Zehnerpotenz Konzentrationsänderung verschiebt sich E um 59,16/n mV. Membranpotenzialwerte merken: K+ = -90 mV, Na+ = +62 mV, Ruhepotenzial = -70 mV.`,
    lernziele: [
      "Die Nernst-Gleichung formulieren und auf konkrete Elektroden- und Zellpotenziale anwenden",
      "Den Einfluss von Konzentration und Temperatur auf Elektrodenpotenziale berechnen und interpretieren",
      "Das Prinzip der potentiometrischen pH-Messung mit der Glaselektrode erläutern",
      "Gleichgewichtskonstanten aus Standardelektropotenzialen berechnen",
      "Biologische Membranpotenziale als elektrochemische Phänomene (Nernst-Potenzial) beschreiben",
    ],
    sections: [
      {
        heading: "Die Nernst-Gleichung — Formel und Bedeutung",
        text: "E = E° − (0,05916 V)/n · log(Q) bei 25 °C. Q ist der Reaktionsquotient: [Produkte]/[Edukte]. Ist Q < 1 (Oxidans-Überschuss), ist E > E°. Ist Q > 1 (Reduktans-Überschuss), ist E < E°. Die Nernst-Gleichung verknüpft Thermodynamik (ΔG = −nFE) mit realen Konzentrationen und erklärt, warum sich Zellspannungen mit Entladung ändern.",
        merksatz:
          "Nernst: E = E° − (0,05916/n) · log(Q). Bei 25 °C: pro Zehnerpotenz in Q ändert sich E um 59,16/n mV.",
      },
      {
        heading: "pH-Messung mit der Glaselektrode",
        text: "Die Glaselektrode nutzt die Nernst-Gleichung zur pH-Bestimmung: E_Membran = const − 0,05916 · pH. Pro pH-Einheit ändert sich die Spannung um 59,16 mV (Nernst-Faktor). Zwei Referenzpunkte (Kalibrierung mit pH 4 und pH 7 oder 7 und 10) legen die Geraden fest. Klinisch wird pH-Messung im Blutgas-Gerät eingesetzt (Normwert arteriell: pH 7,35–7,45).",
        merksatz:
          "Glaselektrode: −59,16 mV pro pH-Einheit (Nernst-Steigung bei 25 °C). Kalibrierung mit 2 Puffern.",
      },
      {
        heading: "Gleichgewichtskonstante aus E°",
        text: "Im Gleichgewicht gilt E = 0 und ΔG = 0. Daraus folgt K = 10^(n · E° / 0,05916). Großes positives E° = große K = Reaktion läuft fast vollständig ab. Kleines E° = kleines K = nur partieller Umsatz. Daniell-Element: K ≈ 10³⁷ (praktisch vollständiger Umsatz). Diese Verknüpfung verbindet Elektrochemie mit Gleichgewichtsthermodynamik.",
        merksatz: "K = 10^(n·E°/0,05916). Positives E° → K > 1 → spontan und produktbegünstigt.",
      },
      {
        heading: "Nernst-Potenzial und biologische Membranen",
        text: "Das Nernst-Potenzial eines Ions beschreibt das Gleichgewichtspotenzial, bei dem die elektrische Kraft den Konzentrationsgradienten gerade kompensiert. E_Ion = (RT/zF) · ln([außen]/[innen]). Für K⁺ ergibt sich ca. −90 mV, für Na⁺ ca. +62 mV. Das tatsächliche Ruhemembranpotenzial (−70 mV) liegt zwischen diesen Werten und wird durch die Goldman-Gleichung beschrieben, die Permeabilitäten berücksichtigt.",
        merksatz:
          "Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen]). K⁺: ca. −90 mV; Na⁺: ca. +62 mV.",
      },
    ],
    merksätze: [
      "Nernst-Gleichung: E = E° − (RT/nF)·ln(Q) = E° − (0,05916/n)·log(Q) bei 25 °C",
      "Nernst-Faktor: 59,16 mV pro Dekade in Q (bei 25 °C, n = 1)",
      "Hohe [Ox]-Konzentration → kleines Q → E größer als E° (stärkeres Oxidationsmittel)",
      "Gleichgewicht: E = 0 → K = 10^(n·E°/0,05916) bei 25 °C",
      "Glaselektrode: −59,16 mV pro pH-Einheit bei 25 °C (Nernst-Steigung)",
      "Biologisches Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen])",
      "K⁺-Nernst-Potenzial ≈ −90 mV; Na⁺-Nernst-Potenzial ≈ +62 mV (physiolog.)",
      "Ruhemembranpotenzial ≈ −70 mV (zwischen K⁺ und Na⁺ Nernst-Potenzial)",
      "Konzentrationszelle: E° = 0, aber E ≠ 0 wegen Konzentrationsunterschied (Nernst)",
      "ΔG = −nFE; im Gleichgewicht E = 0 und ΔG = 0 → K aus E° berechenbar",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Erläutern Sie die Nernst-Gleichung: Was besagt sie, wie wird sie angewendet, und welche biologische Bedeutung hat sie? Berechnen Sie das Nernst-Potenzial für K⁺ bei physiologischen Konzentrationen.",
      answer:
        "Die Nernst-Gleichung beschreibt das tatsächliche Elektrodenpotenzial E unter realen (nicht-Standard-)Bedingungen: E = E° − (RT/nF)·ln(Q), bei 25 °C vereinfacht zu E = E° − (0,05916/n)·log(Q). Dabei ist E° das Standardpotenzial, R die Gaskonstante (8,314 J/mol·K), T die Temperatur in Kelvin, n die Anzahl übertragener Elektronen, F die Faraday-Konstante (96485 C/mol) und Q der Reaktionsquotient. Die Gleichung zeigt: Erhöht man die Konzentration des Oxidationsmittels (Ox), sinkt Q, und E wird größer als E° — das Redoxpaar wird reaktiver. Umgekehrt bei Überschuss des Reduktionsmittels. Anwendung: pH-Messung mit der Glaselektrode basiert auf der Nernst-Gleichung; pro pH-Einheit ändert sich die Spannung um 59,16 mV. In der Biologie beschreibt das Nernst-Potenzial das Gleichgewichtspotenzial eines Ions über eine selektive Membran. Für K⁺ mit typischen physiologischen Konzentrationen ([K⁺]_innen = 140 mmol/L, [K⁺]_außen = 4 mmol/L) bei 37 °C (T = 310 K): E_K = (RT/zF)·ln([außen]/[innen]) = (8,314 × 310)/(1 × 96485)·ln(4/140) = 0,02677 · ln(0,02857) = 0,02677 × (−3,555) ≈ −0,095 V ≈ −95 mV. Dieses Potenzial bedeutet: Wenn die Membran nur für K⁺ permeabel wäre, würde sich ein Gleichgewichtspotenzial von −95 mV einstellen. Das reale Ruhemembranpotenzial (−70 mV) liegt zwischen K⁺ (−95 mV) und Na⁺ (+62 mV), da die Membran für beide Ionen teilweise permeabel ist (Goldman-Gleichung).",
    },
    klinischerBezug:
      "Die Nernst-Gleichung ist direkt relevant für die Blutgasanalyse: pH-Elektroden in Blutgasgeräten messen das Membranpotenzial der Glaselektrode und berechnen daraus den pH-Wert (Normbereich arteriell: 7,35–7,45). pO₂- und pCO₂-Elektroden (Clark- und Severinghaus-Elektroden) basieren ebenfalls auf elektrochemischen Prinzipien. Die Nernst-Gleichung erklärt auch, warum Hypokaliämie (erniedrigtes extrazelluläres K⁺) das Ruhemembranpotenzial hyperpolarisiert und Herzrhythmusstörungen verursacht — das K⁺-Nernst-Potenzial verschiebt sich in negativere Richtung.",
    selfTest: [
      {
        question: "Die Nernst-Gleichung lautet bei 25 °C (vereinfacht):",
        options: [
          "E = E° + (0,05916/n) · log(Q)",
          "E = E° − (0,05916/n) · log(Q)",
          "E = E° · n · 0,05916 · log(Q)",
          "E = E° / (n · 0,05916 · log(Q))",
          "E = −E° + (0,05916/n) · log(Q)",
        ],
        correctIndex: 1,
        explanation:
          "Die Nernst-Gleichung bei 25 °C lautet: E = E° − (0,05916 V / n) · log₁₀(Q). Der Faktor 0,05916 V entsteht aus RT/F bei 25 °C multipliziert mit ln(10) für die Umrechnung von natürlichem auf dekadischen Logarithmus: (8,314 × 298 / 96485) × 2,303 = 0,05916 V. Das Minuszeichen ist entscheidend: Erhöht man Q (mehr Produkte), sinkt E. Diese Gleichung ermöglicht die Berechnung von Elektrodenpotenzialen unter beliebigen Konzentrationsbedingungen.",
        hints: [
          "Merke: E = E° MINUS (0,05916/n) · log(Q) — Minuszeichen!",
          "0,05916 V = RT·ln(10)/F bei 25 °C (= 2,303 × 8,314 × 298 / 96485)",
        ],
        difficulty: 1,
        tags: ["nernst-gleichung", "reaktionsquotient", "konzentration"],
      },
      {
        question:
          "Das Elektrodenpotenzial einer Zn²⁺/Zn-Elektrode (E° = −0,76 V, n = 2) bei [Zn²⁺] = 0,01 mol/L beträgt:",
        options: ["−0,701 V", "−0,760 V", "−0,819 V", "−0,642 V", "−0,900 V"],
        correctIndex: 2,
        explanation:
          "Nernst: E = −0,76 − (0,05916/2) · log([Zn]/[Zn²⁺]). Für Metallabscheidung Zn²⁺ + 2e⁻ → Zn gilt Q = 1/[Zn²⁺] = 1/0,01 = 100. Also: E = −0,76 − (0,02958) · log(100) = −0,76 − 0,02958 · 2 = −0,76 − 0,0592 = −0,819 V. Eine niedrigere Zn²⁺-Konzentration macht die Elektrode negativer (Reduktion ist weniger begünstigt), was die Le-Chatelier-Regel bestätigt.",
        hints: [
          "Q = 1/[Zn²⁺] für die Reduktionshalbreaktion Zn²⁺ + 2e⁻ → Zn",
          "E = −0,76 − (0,05916/2) · log(1/0,01) = −0,76 − 0,02958 · log(100)",
        ],
        difficulty: 3,
        tags: ["nernst", "zn-elektrode", "konzentration-spannung"],
      },
      {
        question:
          "Die Glaselektrode zeigt eine Spannung von −59,16 mV pro pH-Einheit. Was beschreibt dieser Wert?",
        options: [
          "Die maximale Spannung der Elektrode",
          "Den pKa-Wert der Glasmembran",
          "Die Aktivierungsenergie der Elektrodenreaktion",
          "Den Nernst-Faktor: die Potenzialänderung pro Einheit im Reaktionsquotienten bei n = 1 und 25 °C",
          "Die Faraday-Konstante in mV",
        ],
        correctIndex: 3,
        explanation:
          "Der Nernst-Faktor (59,16 mV bei 25 °C für n = 1) beschreibt die Potenzialänderung pro Dekade im Reaktionsquotienten Q. Da pH = −log[H⁺], entspricht eine pH-Änderung um 1 einer zehnfachen Änderung von [H⁺] (eine Dekade). Die Glaselektrode misst H⁺-Aktivität, und nach der Nernst-Gleichung ändert sich das Potential um 59,16 mV pro pH-Einheit (bei 25 °C). Bei Körpertemperatur (37 °C) beträgt der Nernst-Faktor ca. 61,5 mV/pH.",
        hints: [
          "59,16 mV = RT·ln(10)/F bei 25 °C für n = 1 Elektron",
          "pH = −log[H⁺] — eine pH-Einheit entspricht einer Zehnerpotenz in [H⁺]",
        ],
        difficulty: 2,
        tags: ["glaselektrode", "nernst-faktor", "ph-messung"],
      },
      {
        question:
          "Das Nernst-Gleichgewichtspotenzial für Na⁺ liegt bei ca. +62 mV. Was bedeutet dies für eine Nervenzelle?",
        options: [
          "Na⁺ strömt bei diesem Potenzial aus der Zelle aus",
          "Bei −62 mV sind elektrischer und chemischer Gradient für Na⁺ im Gleichgewicht",
          "Das Aktionspotenzial erreicht genau +62 mV",
          "Na⁺ hat ein negatives Ruhepotenzial",
          "Bei +62 mV halten sich elektrischer Antrieb und chemischer Konzentrationsgradient für Na⁺ die Waage",
        ],
        correctIndex: 4,
        explanation:
          "Das Nernst-Potenzial +62 mV für Na⁺ bedeutet: Wenn das Membranpotenzial genau +62 mV betrüge, wären elektrischer Gradient (innen positiv = treibt Na⁺ raus) und chemischer Gradient ([Na⁺]_außen >> innen = treibt Na⁺ rein) im Gleichgewicht, es gäbe keinen Nettostrom. Da das Ruhemembranpotenzial ca. −70 mV ist, besteht ein großer treibender Druck für Na⁺-Einstrom. Beim Aktionspotenzial öffnen Na⁺-Kanäle, Na⁺ strömt ein und das Potential nähert sich (aber erreicht meist nicht ganz) +62 mV.",
        hints: [
          "Nernst-Potenzial = das Membranpotenzial, bei dem Nettostrom = 0 (elektrisch und chemisch im Gleichgewicht)",
          "Bei Ruhepotenzial −70 mV: Wie wirken elektrischer und chemischer Gradient für Na⁺?",
        ],
        difficulty: 2,
        tags: ["nernst-potenzial", "na-kanal", "membranpotenzial"],
      },
      {
        question: "Wie wird die Gleichgewichtskonstante K aus dem Standardpotenzial E° berechnet?",
        options: [
          "K = 10^(n · E° / 0,05916)",
          "K = E° / (n · 0,05916)",
          "K = n · E° / 0,05916",
          "K = e^(n · E° / 0,05916)",
          "K = 10^(E° / 0,05916)",
        ],
        correctIndex: 0,
        explanation:
          "Im Gleichgewicht gilt E = 0, also Q = K. Einsetzen in die Nernst-Gleichung: 0 = E° − (0,05916/n) · log(K) → log(K) = n · E° / 0,05916 → K = 10^(n·E°/0,05916). Alternativ über ΔG°: ΔG° = −nFE° = −RT·ln(K) → ln(K) = nFE°/(RT) → K = e^(nFE°/RT). Für Daniell-Element: K = 10^(2 × 1,10 / 0,05916) = 10^37,2 ≈ 10³⁷ — die Reaktion läuft praktisch vollständig ab.",
        hints: [
          "Im Gleichgewicht E = 0, daher Q = K — setze in Nernst-Gleichung ein und löse nach K auf",
          "log(K) = n·E°/0,05916 → K = 10^(n·E°/0,05916)",
        ],
        difficulty: 2,
        tags: ["gleichgewichtskonstante", "e0", "k-berechnung"],
      },
      {
        question:
          "Eine Konzentrationszelle besteht aus zwei Cu/Cu²⁺-Halbzellen mit [Cu²⁺] = 1,0 mol/L (Kathode) und [Cu²⁺] = 0,01 mol/L (Anode). Welche Zellspannung ergibt sich näherungsweise?",
        options: ["0,00 V", "+0,059 V", "+0,029 V", "+0,118 V", "+0,34 V"],
        correctIndex: 1,
        explanation:
          "Bei einer Konzentrationszelle gilt E°Zelle = 0 (beide Elektroden sind Cu²⁺/Cu mit E° = +0,34 V). Die Spannung kommt ausschließlich aus dem Konzentrationsunterschied: E_Zelle = −(0,05916/2) · log([Cu²⁺]_Anode / [Cu²⁺]_Kathode) = −(0,02958) · log(0,01/1,0) = −0,02958 · (−2) = +0,0592 ≈ +0,059 V. Konzentrationszellen erzeugen also auch ohne unterschiedliche Elektrodenmaterialien eine Spannung — allein durch den Konzentrationsgradienten. Dies ist direkt analog zum chemiosmotischen Prinzip in Mitochondrien.",
        hints: [
          "Konzentrationszelle: E° = 0, Spannung kommt nur vom Konzentrationsunterschied (Nernst)",
          "E_Zelle = (0,05916/n) · log([Ox]_hoch / [Ox]_niedrig) — höhere [Ox] an der Kathode treibt die Reaktion",
        ],
        difficulty: 3,
        tags: ["konzentrationszelle", "nernst", "konzentrationsunterschied"],
      },
      {
        question:
          "Welchen Einfluss hat ein Anstieg der Temperatur von 25 °C auf 37 °C auf den Nernst-Faktor?",
        options: [
          "Der Nernst-Faktor bleibt konstant bei 59,16 mV",
          "Der Nernst-Faktor sinkt auf ca. 50 mV",
          "Der Nernst-Faktor steigt auf ca. 61,5 mV",
          "Der Nernst-Faktor wird negativ",
          "Der Nernst-Faktor halbiert sich auf ca. 30 mV",
        ],
        correctIndex: 2,
        explanation:
          "Der Nernst-Faktor bei 25 °C (298 K) beträgt RT·ln(10)/F = 8,314 × 298 × 2,303 / 96485 = 0,05916 V = 59,16 mV. Bei 37 °C (310 K): 8,314 × 310 × 2,303 / 96485 = 0,06148 V ≈ 61,5 mV. Der Nernst-Faktor ist direkt proportional zur absoluten Temperatur T. Das ist relevant für pH-Messungen und biologische Membranpotenziale: Ein auf 25 °C kalibriertes pH-Gerät zeigt bei 37 °C (Körpertemperatur) leicht abweichende Werte, deshalb haben klinische Blutgasgeräte eine Temperaturkompensation.",
        hints: [
          "Nernst-Faktor = RT·ln(10)/F — er ist proportional zu T (Kelvin)",
          "T wächst von 298 K auf 310 K — um welchen Faktor wächst der Nernst-Faktor?",
        ],
        difficulty: 3,
        tags: ["nernst-faktor", "temperatur", "ph-kalibrierung"],
      },
    ],
  },
  {
    id: "ch-11-04",
    title: "Oxidativer Stress, ROS und biologische Redox-Systeme",
    stichworte: [
      "Reaktive Sauerstoffspezies ROS",
      "Superoxid O₂·⁻",
      "Hydroxyl-Radikal Fenton",
      "Superoxiddismutase SOD",
      "Katalase",
      "Glutathion GSH GPx",
      "NADPH Pentosephosphatweg",
      "G6PD-Mangel",
      "Vitamin E Membranschutz",
      "Lipidperoxidation",
      "Oxidativer Burst NADPH-Oxidase",
    ],
    content: `


## Reaktive Sauerstoffspezies (ROS)

Reaktive Sauerstoffspezies (ROS, englisch: Reactive Oxygen Species) sind hochreaktive, sauerstoffhaltige Moleküle, die in der Lage sind, zelluläre Biomoleküle zu oxidieren und zu schädigen. Sie entstehen als unvermeidliche Nebenprodukte des aeroben Stoffwechsels, aber auch gezielt durch Immunzellen zur Pathogenabwehr.

**Wichtige ROS und ihre Bildung:**
- **Superoxid-Radikalanion (O2*-):** Entsteht durch unvollständige Reduktion von O2 (1-Elektronen-Übertragung), besonders an Komplex I und III der Atmungskette. O2 + e- -> O2*-
- **Wasserstoffperoxid (H2O2):** Entsteht aus O2*- durch Superoxiddismutase (SOD): 2O2*- + 2H+ -> H2O2 + O2. Weniger reaktiv als O2*-, aber membrangängig.
- **Hydroxyl-Radikal (*OH):** Das reaktivste ROS. Entsteht aus H2O2 durch die **Fenton-Reaktion**: H2O2 + Fe2+ -> *OH + OH- + Fe3+. Auch durch Haber-Weiss-Reaktion: O2*- + H2O2 -> *OH + OH- + O2.
- **Singlett-Sauerstoff (1O2):** Angeregter, besonders reaktiver Zustand des O2, entsteht bei Photooxidation.
- **Peroxynitrit (ONOO-):** Reaktion von O2*- mit NO: O2*- + NO* -> ONOO- (sehr reaktiv, nitrosiert Proteine).

## Oxidativer Stress

**Oxidativer Stress** entsteht, wenn die Produktion von ROS die antioxidative Kapazität der Zelle übersteigt. Dies führt zu:
- **Lipidperoxidation:** ROS attackieren mehrfach ungesättigte Fettsäuren in Membranen -> Kettenreaktion -> Membranschädigung
- **Protein-Oxidation:** Oxidation von Cystein-SH-Gruppen zu Disulfiden (-S-S-), Sulfensäuren (-SOH), oder Sulfonyl-Gruppen; Carbonylierung; Fragmentierung
- **DNA-Oxidation:** *OH greift Basen und Desoxyribose an -> 8-Oxo-Guanin (häufigste oxidative DNA-Läsion) -> Mutationen, Strangbrüche
- **Enzyme-Inaktivierung:** Oxidation aktiver Zentren (Fe-S-Cluster, Haem-Gruppen)

**Krankheiten bei chronischem oxidativem Stress:** Arteriosklerose (LDL-Oxidation), Krebs, Morbus Alzheimer, Parkinson, Diabetes mellitus Typ 2, rheumatoide Arthritis, chronisch-entzündliche Darmerkrankungen.

## Antioxidatives Schutzsystem

Die Zelle verfügt über enzymatische und nicht-enzymatische Antioxidantien:

**Enzymatische Antioxidantien — die Schutzkaskade:**
- **Superoxiddismutase (SOD):** Disproportioniert O2*- -> H2O2 + O2
- **Katalase:** H2O2 -> H2O + 1/2 O2. Peroxisomales Enzym
- **Glutathion-Peroxidase (GPx):** H2O2 + 2GSH -> 2H2O + GSSG. Selenocystein im aktiven Zentrum
- **Glutathion-Reduktase (GR):** GSSG + NADPH -> 2GSH. Regeneriert GSH auf Kosten von NADPH (aus Pentosephosphatweg)

> **Merke:** O₂ →(1e⁻)→ O₂·⁻ →(SOD)→ H₂O₂ →(Katalase/GPx)→ H₂O. GPx braucht GSH, GSH braucht NADPH, NADPH braucht G6PD — bei G6PD-Mangel bricht die Kette.

**Nicht-enzymatische Antioxidantien:**
- **Glutathion (GSH):** Tripeptid (gamma-Glu-Cys-Gly), zentrales intrazelluläres Antioxidans. Konzentration 1-10 mmol/L intrazellulär.
- **Vitamin C (Ascorbinsäure):** Wasserlöslich, direkte Radikalfänger-Funktion, regeneriert Vitamin E
- **Vitamin E (alpha-Tocopherol):** Fettlöslich, schützt Membranen vor Lipidperoxidation durch Abfangen von Peroxy-Radikalen (LOO*)
- **beta-Carotin und andere Carotinoide:** Quencher von Singlett-Sauerstoff
- **Harnsäure:** Wichtiges Antioxidans im Plasma
- **Coenzym Q10 (Ubichinol):** Membrangebundener Elektronenträger, auch antioxidativ

## NADPH und der Pentosephosphatweg

NADPH (Nicotinamid-Adenin-Dinukleotid-Phosphat, reduziert) ist das zentrale Reduktionsmittel für die Regeneration des Antioxidans-Systems. Der **Pentosephosphatweg (PPW)** ist die Hauptquelle für NADPH in der Zelle:
- G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der erste, geschwindigkeitsbestimmende Schritt
- G6PD-Mangel (häufigste Enzymopathie weltweit, X-chromosomal) -> reduzierter NADPH-Spiegel -> Erythrozyten anfällig für oxidativen Stress -> hämolytische Anämie bei Exposition zu Oxidantien (Primaquin, Favabohnen, Infektionen)

## ROS als Signalmoleküle

ROS sind nicht nur schädlich — in physiologischen (nanomolaren) Konzentrationen wirkt H₂O₂ als **Redox-Signalmolekül**, das durch Oxidation von Cystein-SH-Gruppen Signalwege moduliert. Die **NADPH-Oxidase (NOX2)** in Phagozyten produziert O₂·⁻ gezielt zur Pathogenabwehr (oxidativer Burst).

---

> **Prüfungstipp:** ROS-Schutzkaskade merken: SOD (O₂·⁻ -> H₂O₂) -> Katalase/GPx (H₂O₂ -> H₂O). G6PD-Mangel = häufigste Enzymopathie weltweit = hämolytische Anämie bei Oxidantien. Fenton-Reaktion (Fe²⁺ + H₂O₂ -> ·OH) ist die gefährlichste ROS-Quelle.`,
    lernziele: [
      "Die wichtigsten reaktiven Sauerstoffspezies (ROS), ihre Bildungsmechanismen und Reaktivität benennen",
      "Oxidativen Stress definieren und seine Folgen auf Lipide, Proteine und DNA beschreiben",
      "Das enzymatische und nicht-enzymatische antioxidative Schutzsystem der Zelle erläutern",
      "Die Rolle von NADPH und dem Pentosephosphatweg für die antioxidative Kapazität erklären",
      "ROS als Signalmoleküle einordnen und den Unterschied zwischen physiologischer und pathologischer ROS-Produktion beschreiben",
    ],
    sections: [
      {
        heading: "Bildung und Klassifikation von ROS",
        text: "Superoxid (O₂·⁻) ist das primäre ROS der Atmungskette. SOD wandelt es zu H₂O₂ um (Disproportionierung). H₂O₂ ist membrangängig und modulerat reaktiv. Das Hydroxyl-Radikal (·OH), gebildet durch die Fenton-Reaktion (Fe²⁺ + H₂O₂), ist das reaktivste ROS und kann jedes biologische Molekül in diffusionslimitierter Geschwindigkeit oxidieren. Peroxynitrit (ONOO⁻, aus O₂·⁻ + NO) schädigt Proteine durch Nitrosierung.",
        merksatz:
          "ROS-Kaskade: O₂ → O₂·⁻ (1e⁻) → H₂O₂ (SOD) → ·OH (Fenton: Fe²⁺). Hydroxyl-Radikal ist das reaktivste.",
      },
      {
        heading: "Enzymatisches Antioxidans-System",
        text: "SOD (Superoxiddismutase) → Katalase → Glutathion-Peroxidase (GPx) bilden eine Kaskade: SOD entgiftet O₂·⁻ zu H₂O₂, Katalase und GPx bauen H₂O₂ ab. GPx benötigt GSH (Glutathion), das durch Glutathion-Reduktase auf Kosten von NADPH regeneriert wird. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (G6PD). G6PD-Mangel unterbricht diese Kette.",
        merksatz:
          "SOD → H₂O₂ → Katalase/GPx → H₂O. GPx braucht GSH; GSH-Reduktase regeneriert GSH mit NADPH.",
      },
      {
        heading: "Nicht-enzymatische Antioxidantien",
        text: "Vitamin E (α-Tocopherol, fettlöslich) schützt Membranen vor Lipidperoxidation; Vitamin C (Ascorbat, wasserlöslich) regeneriert Vitamin E. Glutathion (GSH) ist das wichtigste intrazelluläre Antioxidans und Co-Substrat von GPx. Harnsäure ist wichtig im Plasma. β-Carotin quencht Singlett-Sauerstoff. Coenzym Q₁₀ (Ubichinol) hat membrangebundene antioxidative Funktion.",
        merksatz:
          "Vitamin E (Membran) + Vitamin C (Zytosol, regeneriert Vit. E) + GSH + Harnsäure (Plasma) = Antioxidans-Team.",
      },
      {
        heading: "ROS als Signalmoleküle — Redox-Signaling",
        text: "Physiologische H₂O₂-Konzentrationen (nanomolar) wirken als Signalmoleküle: Sie oxidieren reaktive Cysteine in Phosphatasen und Kinasen, ändern deren Aktivität und modulieren Signalwege (NF-κB, Nrf2, HIF-1α). NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom (oxidativer Burst). Mitochondriale ROS triggern Apoptose. Zu viel ROS = Distress; kontrollierte ROS = Eustress.",
        merksatz:
          "Redox-Signaling: H₂O₂ oxidiert Cystein-SH → Konformationsänderung → Signalwirkung (physiologisch bei niedrigen Konz.).",
      },
    ],
    merksätze: [
      "ROS-Kaskade: O₂ →(1e⁻)→ O₂·⁻ →(SOD)→ H₂O₂ →(Fenton/Fe²⁺)→ ·OH",
      "Hydroxyl-Radikal (·OH) ist das reaktivste ROS — keine spezifische Entgiftung möglich",
      "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺ (Eisenkatalyse!)",
      "SOD: O₂·⁻ → H₂O₂ + O₂ (Disproportionierung; 3 Isoformen: Cu/Zn, Mn, extrazellulär)",
      "Katalase: H₂O₂ → H₂O + ½O₂ (peroxisomal; höchste Umsatzzahl aller Enzyme)",
      "GPx: H₂O₂ + 2GSH → 2H₂O + GSSG (Selen im aktiven Zentrum)",
      "NADPH aus Pentosephosphatweg regeneriert GSH über Glutathion-Reduktase",
      "G6PD-Mangel → NADPH-Mangel → GSH-Mangel → oxidative Hämolyse (X-chromosomal)",
      "Vitamin E (fettlöslich, Membranschutz) + Vitamin C (wasserlöslich, regeneriert Vit. E)",
      "Oxidativer Stress: ROS > antioxidative Kapazität → Lipidperoxidation, DNA-Schäden, Proteincarbonylierung",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Beschreiben Sie das antioxidative Schutzsystem der Zelle. Wie arbeiten enzymatische und nicht-enzymatische Antioxidantien zusammen, und welche klinische Relevanz hat ein G6PD-Mangel?",
      answer:
        "Das antioxidative Schutzsystem der Zelle besteht aus zwei Ebenen: enzymatische und nicht-enzymatische Antioxidantien, die koordiniert gegen reaktive Sauerstoffspezies (ROS) vorgehen. Das primäre ROS, Superoxid (O₂·⁻), wird von der Superoxiddismutase (SOD) durch Disproportionierung in Wasserstoffperoxid (H₂O₂) und O₂ umgewandelt: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. H₂O₂ ist weniger reaktiv, aber noch gefährlich, da es durch die Fenton-Reaktion (Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺) zum extrem reaktiven Hydroxyl-Radikal (·OH) führen kann. Zwei Enzyme bauen H₂O₂ ab: (1) Katalase (peroxisomal): H₂O₂ → H₂O + ½O₂, sehr schnell. (2) Glutathion-Peroxidase (GPx): H₂O₂ + 2GSH → 2H₂O + GSSG, verbraucht dabei reduziertes Glutathion (GSH). Das oxidierte Glutathion (GSSG) wird durch Glutathion-Reduktase auf Kosten von NADPH regeneriert: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (PPW), dessen erster Schritt von Glucose-6-Phosphat-Dehydrogenase (G6PD) katalysiert wird. Nicht-enzymatische Antioxidantien ergänzen dieses System: Glutathion (GSH, direkter Radikalfänger), Vitamin E (α-Tocopherol, Membranschutz durch Abfangen von Lipidperoxyl-Radikalen), Vitamin C (Ascorbat, wasserlöslich, regeneriert Vitamin E, direkte Radikalabfangung), Harnsäure (wichtig im Plasma) und β-Carotin (Singlett-Sauerstoff-Quencher). Klinische Relevanz G6PD-Mangel: G6PD-Mangel ist die häufigste Enzymopathie weltweit (ca. 400 Millionen Betroffene), X-chromosomal vererbt. Erythrozyten haben keinen Zellkern und können Enzyme nicht neu synthetisieren — mit G6PD-Mangel können sie kein NADPH produzieren, weshalb GSH nicht regeneriert werden kann. Bei Exposition zu Oxidantien (Malaria-Medikament Primaquin, Favabohnen, Infektionen) kommt es zu unkontrolliertem oxidativem Stress im Erythrozyten, Hämolyse der Membran und hämolytischer Anämie.",
    },
    klinischerBezug:
      "Reaktive Sauerstoffspezies (ROS) spielen eine zentrale Rolle in der Pathogenese häufiger Erkrankungen: Oxidierte LDL-Partikel (durch ROS-Angriff) werden von Makrophagen in der Gefäßwand aufgenommen und bilden Schaumzellen — Ausgangspunkt der Arteriosklerose. Bei ischämischer Reperfusion (z. B. nach Myokardinfarkt) entsteht ein ROS-Burst, der zusätzlichen Gewebeschaden verursacht (Reperfusionsschaden). Pharmakologische Antioxidantien (N-Acetylcystein als GSH-Vorläufer, Allopurinol, Vitamin E) werden klinisch eingesetzt, um oxidativen Stress bei Paracetamol-Vergiftung, Nierenprotektoin und kardiovaskulären Erkrankungen zu reduzieren.",
    selfTest: [
      {
        question: "Welches ROS entsteht durch die Fenton-Reaktion?",
        options: [
          "Superoxid (O₂·⁻)",
          "Wasserstoffperoxid (H₂O₂)",
          "Singlett-Sauerstoff (¹O₂)",
          "Hydroxyl-Radikal (·OH)",
          "Peroxynitrit (ONOO⁻)",
        ],
        correctIndex: 3,
        explanation:
          "Die Fenton-Reaktion lautet: Fe²⁺ + H₂O₂ → Fe³⁺ + OH⁻ + ·OH. Das Hydroxyl-Radikal (·OH) ist das Produkt und gleichzeitig das reaktivste bekannte ROS. Es kann ohne Enzymkatalyse praktisch jedes biologische Molekül oxidieren — Lipide, Proteine, DNA — in diffusionslimitierter Geschwindigkeit (k ≈ 10⁹–10¹⁰ L·mol⁻¹·s⁻¹). Da es keine spezifische Entgiftungsmöglichkeit gibt, ist die Vorbeugung seiner Bildung durch H₂O₂-Abbau (Katalase, GPx) und Eisenbindung (Ferritin, Transferrin) essenziell.",
        hints: [
          "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ? — das Produkt ist das reaktivste ROS",
          "·OH = Hydroxyl-Radikal; nicht zu verwechseln mit OH⁻ (Hydroxid-Ion)",
        ],
        difficulty: 1,
        tags: ["fenton-reaktion", "hydroxyl-radikal", "ros"],
      },
      {
        question: "Welches Enzym katalysiert die Disproportionierung von Superoxid (O₂·⁻)?",
        options: [
          "Katalase",
          "Glutathion-Peroxidase",
          "NADPH-Oxidase",
          "Glutathion-Reduktase",
          "Superoxiddismutase (SOD)",
        ],
        correctIndex: 4,
        explanation:
          "Die Superoxiddismutase (SOD) katalysiert: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. Es handelt sich um eine Disproportionierung (Comproportionierung) — ein Teil des Superoxids wird zu H₂O₂ reduziert (OZ von −1/2 auf −1), ein anderer Teil zu O₂ oxidiert (OZ von −1/2 auf 0). Drei SOD-Isoformen existieren beim Menschen: SOD1 (Cu/Zn, zytosolisch, dominant im ZNS), SOD2 (Mn, mitochondrial, besonders wichtig bei hohem O₂·⁻-Fluss), SOD3 (Cu/Zn, sekretiert). SOD1-Mutationen sind mit familiärer ALS assoziiert.",
        hints: [
          "Das Enzym heißt nach seinem Substrat: Superoxid-Dis-mutase",
          "Disproportionierung: O₂·⁻ wird gleichzeitig oxidiert (→O₂) und reduziert (→H₂O₂)",
        ],
        difficulty: 1,
        tags: ["sod", "superoxid-dismutase", "superoxid"],
      },
      {
        question: "Welche Aussage zu Glutathion (GSH) ist korrekt?",
        options: [
          "GSH ist ein Tripeptid (γ-Glu-Cys-Gly), das als Co-Substrat der Glutathion-Peroxidase dient",
          "GSH ist ein fettlösliches Antioxidans, das Membranen schützt",
          "GSH wird durch Katalase regeneriert",
          "GSH enthält Selen im aktiven Zentrum",
          "Oxidiertes GSSG wird durch NADH regeneriert",
        ],
        correctIndex: 0,
        explanation:
          "Glutathion (GSH) ist ein Tripeptid aus γ-Glutaminsäure, Cystein und Glycin (γ-Glu-Cys-Gly). Die ungewöhnliche γ-Peptidbindung schützt es vor normalen Peptidasen. Die freie SH-Gruppe des Cysteins ist der antioxidativ wirksame Teil. Als Co-Substrat der Glutathion-Peroxidase (GPx) wird GSH zu GSSG oxidiert: H₂O₂ + 2GSH → 2H₂O + GSSG. Regeneriert wird GSH durch die Glutathion-Reduktase auf Kosten von NADPH: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. Das Selen befindet sich im aktiven Zentrum der GPx (als Selenocystein), nicht im Glutathion selbst.",
        hints: [
          "GSH ist ein Tripeptid (3 Aminosäuren) mit einer reaktiven SH-Gruppe",
          "GPx braucht GSH als Reduktionsmittel; was entsteht dabei?",
        ],
        difficulty: 2,
        tags: ["glutathion", "gsh", "gsx-peroxidase"],
      },
      {
        question: "Warum führt G6PD-Mangel zu hämolytischer Anämie bei Exposition zu Oxidantien?",
        options: [
          "G6PD produziert direkt Hämoglobin, dessen Mangel zur Hämolyse führt",
          "G6PD-Mangel → weniger NADPH → kein GSH-Regeneration → oxidativer Stress → Erythrozytenmembran-Hämolyse",
          "G6PD ist für die Synthese von Häm erforderlich",
          "G6PD baut Oxidantien direkt ab; ohne G6PD akkumulieren sie",
          "G6PD aktiviert Katalase; ohne G6PD fehlt die H₂O₂-Entgiftung",
        ],
        correctIndex: 1,
        explanation:
          "G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der geschwindigkeitsbestimmende Schritt des Pentosephosphatwegs und die Hauptquelle für NADPH in Erythrozyten. NADPH wird benötigt, um GSSG zu GSH zu regenerieren (durch Glutathion-Reduktase). Ohne ausreichend NADPH sinkt der GSH-Spiegel. GSH ist der wichtigste antioxidative Schutz im Erythrozyten. Bei oxidativem Stress (Primaquin, Favabohnen, Infektionen) können Erythrozyten mit G6PD-Mangel ROS nicht ausreichend neutralisieren → Oxidation von Hämoglobin zu Methämoglobin und Heinz-Körper-Bildung → Hämolyse. G6PD-Mangel ist X-chromosomal und schützt heterozygote Frauen partiell vor schwerer Malaria.",
        hints: [
          "G6PD → NADPH → Glutathion-Reduktase → GSH. Wo ist die Kette unterbrochen?",
          "Erythrozyten haben keinen Kern und können Enzyme nicht neu synthetisieren — was passiert, wenn GSH aufgebraucht ist?",
        ],
        difficulty: 2,
        tags: ["g6pd-mangel", "nadph", "hämolytische-anämie"],
      },
      {
        question: "Welche Aussage zu Vitamin E (α-Tocopherol) ist korrekt?",
        options: [
          "Vitamin E ist wasserlöslich und schützt zytosolische Proteine vor Oxidation",
          "Vitamin E wirkt als Prooxidans bei hohen Dosen",
          "Vitamin E fängt Lipidperoxyl-Radikale in Membranen ab und wird dabei selbst zum Tocopherol-Radikal, das durch Vitamin C regeneriert wird",
          "Vitamin E aktiviert die Katalase und erhöht deren Umsatzrate",
          "Vitamin E wird durch GSH direkt regeneriert ohne Beteiligung von Vitamin C",
        ],
        correctIndex: 2,
        explanation:
          "Vitamin E (α-Tocopherol) ist fettlöslich und lokalisiert in Zellmembranen. Es fängt Lipidperoxyl-Radikale (LOO·) ab, die bei Lipidperoxidation entstehen: LOO· + Vit-E-OH → LOOH + Vit-E-O· (Tocopherol-Radikal). Das resultierende Tocopherol-Radikal ist stabil und wenig reaktiv. Es wird durch Vitamin C (Ascorbat) im wässrigen Milieu regeneriert: Vit-E-O· + Ascorbat → Vit-E-OH + Ascorbyl-Radikal. Das Ascorbyl-Radikal wird durch Glutathion oder NADPH-abhängige Reduktasen regeneriert. Diese Kaskade Vitamin E → Vitamin C → GSH/NADPH verbindet die membrangebundene mit der zytosolischen Antioxidans-Ebene.",
        hints: [
          "Vitamin E = fettlöslich = Membranschutz; es fängt Radikale ab und wird selbst zum Radikal",
          "Wer regeneriert das Tocopherol-Radikal — ein anderes Antioxidans?",
        ],
        difficulty: 2,
        tags: ["vitamin-e", "tocopherol", "fettlösliches-antioxidans"],
      },
      {
        question: "Welche pathologische Folge entsteht primär durch Lipidperoxidation?",
        options: [
          "8-Oxo-Guanin-Bildung in der DNA",
          "Proteincarbonylierung und Enzyminaktivierung",
          "Mitochondriale DNA-Deletionen durch direkte ·OH-Angriffe",
          "Membranschädigung durch Kettenreaktion an ungesättigten Fettsäuren",
          "Histon-Acetylierung und epigenetische Veränderungen",
        ],
        correctIndex: 3,
        explanation:
          "Lipidperoxidation ist eine Kettenreaktion (Initiierung → Propagation → Termination), die bevorzugt mehrfach ungesättigte Fettsäuren (PUFA) in Membranen befällt. Initiierung: ·OH entzieht einer PUFA ein H-Atom → Lipidradikal L·. Propagation: L· + O₂ → LOO· (Peroxyl-Radikal); LOO· + LH → LOOH + L· (Kettenreaktion). Termination: zwei Radikale reagieren. Produkte sind Malondialdehyd (MDA), 4-Hydroxynonenal (4-HNE) und Isoprostane — Biomarker für oxidativen Stress. Die Konsequenz ist strukturelle Membranschädigung, veränderte Permeabilität und Rezeptorfunktion sowie Aktivierung von Apoptose.",
        hints: [
          "Lipidperoxidation = Membranen; welcher Membranbestandteil wird primär angegriffen?",
          "Es handelt sich um eine Kettenreaktion (Radikal → erzeugt neues Radikal)",
        ],
        difficulty: 2,
        tags: ["lipidperoxidation", "membranschaden", "ros-kettenreaktion"],
      },
      {
        question:
          "Welche ROS wirkt als physiologisches Signalmolekül bei nanomolaren Konzentrationen?",
        options: [
          "Hydroxyl-Radikal (·OH)",
          "Superoxid (O₂·⁻)",
          "Singlett-Sauerstoff (¹O₂)",
          "Peroxynitrit (ONOO⁻)",
          "Wasserstoffperoxid (H₂O₂)",
        ],
        correctIndex: 4,
        explanation:
          "H₂O₂ ist das wichtigste ROS-Signalmolekül bei niedrigen (nanomolaren) Konzentrationen. Es ist ausreichend stabil (Halbwertszeit Millisekunden bis Sekunden), membrangängig über Aquaporine, und reagiert selektiv mit hochreaktiven Cysteinresten in Enzymen und Transkriptionsfaktoren. Durch Oxidation von Cys-SH zu Cys-SOH (Sulfensäure) werden Phosphatasen gehemmt (z. B. PTP1B) oder Kinasen aktiviert — Redox-Signaling. Aktivierte Transkriptionsfaktoren: Nrf2 (antioxidative Gene), NF-κB (Inflammation), HIF-1α (Hypoxieantwort). Das Hydroxyl-Radikal ist zu reaktiv für selektives Signaling; O₂·⁻ ist geladen und schlecht membrangängig.",
        hints: [
          "Welches ROS ist stabil genug für Signalwege (nicht zu reaktiv), aber reaktiv genug für Proteinmodifikation?",
          "H₂O₂ ist membrangängig und oxidiert selektiv reaktive Cysteine in Signalproteinen",
        ],
        difficulty: 3,
        tags: ["h2o2-signaling", "redox-signaling", "nrf2"],
      },
      {
        question: "Welche Aussage zum oxidativen Burst von Makrophagen ist korrekt?",
        options: [
          "NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom zur Pathogenabwehr",
          "Makrophagen produzieren ROS versehentlich als Nebenprodukt der Phagozytose",
          "Makrophagen nutzen Katalase, um H₂O₂ zur Abtötung von Bakterien einzusetzen",
          "Der oxidative Burst produziert NO als einziges antimikrobielles ROS",
          "Der oxidative Burst aktiviert SOD, um die ROS-Produktion zu verstärken",
        ],
        correctIndex: 0,
        explanation:
          "Die NADPH-Oxidase (NOX2, auch Phagozyt-Oxidase) ist ein Multiprotein-Enzymkomplex, der bei Aktivierung von Makrophagen und Neutrophilen gezielt O₂·⁻ ins Phagosom produziert: 2O₂ + NADPH → 2O₂·⁻ + NADP⁺ + H⁺. Dieses O₂·⁻ wird zu H₂O₂ dismutiert, aus dem Myeloperoxidase (MPO) Hypochlorit (HOCl, 'Bleiche') bildet: H₂O₂ + Cl⁻ → HOCl + OH⁻. HOCl ist hochwirksam gegen Bakterien. Chronische Granulomatose (CGD) ist eine seltene Erkrankung mit NOX2-Defekt — Patienten leiden an schweren, rezidivierenden Infektionen mit katalasepositiven Bakterien (die ihr eigenes H₂O₂ abbauen).",
        hints: [
          "NADPH-Oxidase = NOX2, produziert gezielt Superoxid (O₂·⁻) zur Pathogenabwehr",
          "Der oxidative Burst ist eine GEWOLLTE, kontrollierte ROS-Produktion — kein Versehen",
        ],
        difficulty: 2,
        tags: ["oxidativer-burst", "nadph-oxidase", "makrophagen"],
      },
    ],
  },
];
