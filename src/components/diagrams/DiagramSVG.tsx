import { lazy, Suspense } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

const AnimalCell = lazy(() => import("./biology/AnimalCell"));
const PlantVsAnimalCell = lazy(() => import("./biology/PlantVsAnimalCell"));
const CellMembrane = lazy(() => import("./biology/CellMembrane"));
const MitosisPhases = lazy(() => import("./biology/MitosisPhases"));
const MeiosisOverview = lazy(() => import("./biology/MeiosisOverview"));
const DNAHelix = lazy(() => import("./biology/DNAHelix"));
const TranscriptionTranslation = lazy(() => import("./biology/TranscriptionTranslation"));
const HeartAnatomy = lazy(() => import("./biology/HeartAnatomy"));
const CardiacConduction = lazy(() => import("./biology/CardiacConduction"));
const Nephron = lazy(() => import("./biology/Nephron"));
const ActionPotential = lazy(() => import("./biology/ActionPotential"));
const Synapse = lazy(() => import("./biology/Synapse"));
const ImmuneResponse = lazy(() => import("./biology/ImmuneResponse"));
const MenstrualCycle = lazy(() => import("./biology/MenstrualCycle"));
const BloodGroups = lazy(() => import("./biology/BloodGroups"));
const PedigreeAnalysis = lazy(() => import("./biology/PedigreeAnalysis"));
const CellCycle = lazy(() => import("./biology/CellCycle"));
const MembraneTransport = lazy(() => import("./biology/MembraneTransport"));
const BloodCirculation = lazy(() => import("./biology/BloodCirculation"));
const RespiratorySystem = lazy(() => import("./biology/RespiratorySystem"));
const DigestiveSystem = lazy(() => import("./biology/DigestiveSystem"));
const NervousSystem = lazy(() => import("./biology/NervousSystem"));
const HormoneSystem = lazy(() => import("./biology/HormoneSystem"));
const SenseOrgans = lazy(() => import("./biology/SenseOrgans"));
const ProkaryoteVsEukaryote = lazy(() => import("./biology/ProkaryoteVsEukaryote"));
const EndomembraneSystem = lazy(() => import("./biology/EndomembraneSystem"));
const Sarcomere = lazy(() => import("./biology/Sarcomere"));
const BloodComponents = lazy(() => import("./biology/BloodComponents"));
const DoubleMembraneOrganelles = lazy(() => import("./biology/DoubleMembraneOrganelles"));
const StemCells = lazy(() => import("./biology/StemCells"));

const DIAGRAM_MAP: Record<string, LazyExoticComponent<ComponentType>> = {
  "animal-cell": AnimalCell,
  "plant-vs-animal-cell": PlantVsAnimalCell,
  "cell-membrane": CellMembrane,
  mitosis: MitosisPhases,
  meiosis: MeiosisOverview,
  "dna-helix": DNAHelix,
  "transcription-translation": TranscriptionTranslation,
  "heart-anatomy": HeartAnatomy,
  "cardiac-conduction": CardiacConduction,
  nephron: Nephron,
  "action-potential": ActionPotential,
  synapse: Synapse,
  "immune-response": ImmuneResponse,
  "menstrual-cycle": MenstrualCycle,
  "blood-groups": BloodGroups,
  "pedigree-analysis": PedigreeAnalysis,
  "cell-cycle": CellCycle,
  "membrane-transport": MembraneTransport,
  blutkreislauf: BloodCirculation,
  atmungssystem: RespiratorySystem,
  verdauungssystem: DigestiveSystem,
  "nervensystem-übersicht": NervousSystem,
  hormonsystem: HormoneSystem,
  sinnesorgane: SenseOrgans,
  "prokaryote-vs-eukaryote": ProkaryoteVsEukaryote,
  "endomembrane-system": EndomembraneSystem,
  sarkomer: Sarcomere,
  blutbestandteile: BloodComponents,
  "double-membrane-organelles": DoubleMembraneOrganelles,
  "stem-cells": StemCells,
};

/** Short German captions shown below each diagram. */
const DIAGRAM_CAPTIONS: Record<string, string> = {
  // Biology
  "animal-cell": "Schematischer Aufbau einer tierischen Zelle mit den wichtigsten Organellen.",
  "plant-vs-animal-cell":
    "Vergleich Pflanzenzelle vs. Tierzelle — gemeinsame und exklusive Strukturen.",
  "cell-membrane":
    "Flüssig-Mosaik-Modell der Zellmembran mit Lipiddoppelschicht und Membranproteinen.",
  mitosis: "Die Phasen der Mitose: Prophase → Metaphase → Anaphase → Telophase.",
  meiosis: "Meiose I und II — Reduktion des Chromosomensatzes von 2n auf n.",
  "dna-helix": "DNA-Doppelhelix mit Basenpaaren (A–T, G–C) und antiparalleler Orientierung.",
  "transcription-translation":
    "Vom Gen zum Protein: Transkription (DNA → mRNA) und Translation (mRNA → Protein).",
  "heart-anatomy": "Anatomie des Herzens — Kammern, Klappen und Gefäßanschlüsse.",
  "cardiac-conduction":
    "Erregungsleitungssystem: Sinusknoten → AV-Knoten → His-Bündel → Purkinje-Fasern.",
  nephron: "Aufbau eines Nephrons — Glomerulus, proximaler/distaler Tubulus und Henle-Schleife.",
  "action-potential":
    "Verlauf eines Aktionspotentials: Ruhepotential → Depolarisation → Repolarisation.",
  synapse: "Chemische Synapse — Transmitterfreisetzung und postsynaptische Rezeptorbindung.",
  "immune-response": "Angeborene und adaptive Immunantwort im Überblick.",
  "menstrual-cycle": "Der weibliche Zyklus: Follikelphase, Ovulation und Lutealphase.",
  "blood-groups": "AB0-Blutgruppensystem — Antigene, Antikörper und Verträglichkeit.",
  "pedigree-analysis": "Stammbaum-Analyse: autosomal-dominant, -rezessiv und X-chromosomal.",
  "cell-cycle": "Zellzyklus: G1 → S → G2 → M-Phase mit Kontrollpunkten.",
  "membrane-transport": "Passiver und aktiver Membrantransport — Diffusion, Osmose, Pumpen.",
  blutkreislauf: "Großer und kleiner Kreislauf — Weg des Blutes durch den Körper.",
  atmungssystem: "Aufbau der Atemwege und Gasaustausch in den Alveolen.",
  verdauungssystem: "Verdauungstrakt: Mund → Ösophagus → Magen → Dünn-/Dickdarm.",
  "nervensystem-übersicht": "Zentrales und peripheres Nervensystem — Gliederung und Funktionen.",
  hormonsystem: "Endokrines System — Hypothalamus-Hypophysen-Achse und wichtige Hormondrüsen.",
  sinnesorgane: "Übersicht der Sinnesorgane und ihre Reizverarbeitung.",
  "prokaryote-vs-eukaryote": "Prokaryoten vs. Eukaryoten — strukturelle Unterschiede im Vergleich.",
  "endomembrane-system": "Endomembransystem: ER → Golgi → Vesikel → Lysosom.",
  sarkomer: "Aufbau eines Sarkomers — Aktin, Myosin und das Gleitfilament-Modell.",
  blutbestandteile: "Zusammensetzung des Blutes: Plasma, Erythrozyten, Leukozyten, Thrombozyten.",
  "double-membrane-organelles":
    "Doppelmembran-Organellen: Mitochondrium und Chloroplast im Vergleich.",
  "stem-cells": "Stammzellen — Potenz-Stufen von totipotent bis unipotent.",
};

export type DiagramType = keyof typeof DIAGRAM_MAP;

export const DIAGRAM_LIST = Object.keys(DIAGRAM_MAP) as DiagramType[];

interface Props {
  type: string;
  className?: string;
}

export default function DiagramSVG({ type, className }: Props) {
  const Component = DIAGRAM_MAP[type];
  if (!Component) return null;

  const caption = DIAGRAM_CAPTIONS[type];

  return (
    <figure className={className}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-48 text-muted text-sm">
            Diagramm wird geladen...
          </div>
        }
      >
        <Component />
      </Suspense>
      {caption && (
        <figcaption className="mt-1.5 text-xs text-center text-[var(--text-secondary)] italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
