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

const PeriodicTable = lazy(() => import("./chemistry/PeriodicTable"));
const AtomicOrbitals = lazy(() => import("./chemistry/AtomicOrbitals"));
const IonicBond = lazy(() => import("./chemistry/IonicBond"));
const CovalentBond = lazy(() => import("./chemistry/CovalentBond"));
const PHScale = lazy(() => import("./chemistry/PHScale"));
const FunctionalGroups = lazy(() => import("./chemistry/FunctionalGroups"));
const EnzymeSubstrate = lazy(() => import("./chemistry/EnzymeSubstrate"));

const NewtonForces = lazy(() => import("./physics/NewtonForces"));
const CircuitDiagram = lazy(() => import("./physics/CircuitDiagram"));
const WaveTypes = lazy(() => import("./physics/WaveTypes"));
const LensImaging = lazy(() => import("./physics/LensImaging"));
const EMSpectrum = lazy(() => import("./physics/EMSpectrum"));
const DopplerEffect = lazy(() => import("./physics/DopplerEffect"));

const CoordinateSystem = lazy(() => import("./math/CoordinateSystem"));
const UnitCircle = lazy(() => import("./math/UnitCircle"));
const VectorAddition = lazy(() => import("./math/VectorAddition"));

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
  "periodic-table": PeriodicTable,
  "atomic-orbitals": AtomicOrbitals,
  "ionic-bond": IonicBond,
  "covalent-bond": CovalentBond,
  "ph-scale": PHScale,
  "functional-groups": FunctionalGroups,
  "enzyme-substrate": EnzymeSubstrate,
  "newton-forces": NewtonForces,
  circuit: CircuitDiagram,
  "wave-types": WaveTypes,
  "lens-imaging": LensImaging,
  "em-spectrum": EMSpectrum,
  "doppler-effect": DopplerEffect,
  "coordinate-system": CoordinateSystem,
  "unit-circle": UnitCircle,
  "vector-addition": VectorAddition,
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

  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-48 text-muted text-sm">
            Diagramm wird geladen...
          </div>
        }
      >
        <Component />
      </Suspense>
    </div>
  );
}
