import { lazy, Suspense } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

// Biology
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
const Gastrulation = lazy(() => import("./biology/Gastrulation"));
const Neurulation = lazy(() => import("./biology/Neurulation"));
const PhotosynthesisZScheme = lazy(() => import("./biology/PhotosynthesisZScheme"));
const RadiationPenetration = lazy(() => import("./biology/RadiationPenetration"));

// Chemistry
const AtomicOrbitals = lazy(() => import("./chemistry/AtomicOrbitals"));
const CovalentBond = lazy(() => import("./chemistry/CovalentBond"));
const EnzymeSubstrate = lazy(() => import("./chemistry/EnzymeSubstrate"));
const FunctionalGroups = lazy(() => import("./chemistry/FunctionalGroups"));
const IonicBond = lazy(() => import("./chemistry/IonicBond"));
const PeriodicTable = lazy(() => import("./chemistry/PeriodicTable"));
const PHScale = lazy(() => import("./chemistry/PHScale"));

// Physics
const CircuitDiagram = lazy(() => import("./physics/CircuitDiagram"));
const DopplerEffect = lazy(() => import("./physics/DopplerEffect"));
const EMSpectrum = lazy(() => import("./physics/EMSpectrum"));
const LensImaging = lazy(() => import("./physics/LensImaging"));
const NewtonForces = lazy(() => import("./physics/NewtonForces"));
const RadioactiveDecay = lazy(() => import("./physics/RadioactiveDecay"));
const TemperatureScales = lazy(() => import("./physics/TemperatureScales"));
const Thermodynamics = lazy(() => import("./physics/Thermodynamics"));
const WaveTypes = lazy(() => import("./physics/WaveTypes"));
const LeverArm = lazy(() => import("./physics/LeverArm"));
const InclinedPlane = lazy(() => import("./physics/InclinedPlane"));
const CentripetalForce = lazy(() => import("./physics/CentripetalForce"));
const HarmonicOscillation = lazy(() => import("./physics/HarmonicOscillation"));
const MagneticFieldLines = lazy(() => import("./physics/MagneticFieldLines"));
const KirchhoffLaws = lazy(() => import("./physics/KirchhoffLaws"));
const SnelliusRefraction = lazy(() => import("./physics/SnelliusRefraction"));
const DoubleSlit = lazy(() => import("./physics/DoubleSlit"));
const ContinuityEquation = lazy(() => import("./physics/ContinuityEquation"));
const LaminarFlowProfile = lazy(() => import("./physics/LaminarFlowProfile"));
const PhaseDiagramWater = lazy(() => import("./physics/PhaseDiagramWater"));
const IdealGasLaws = lazy(() => import("./physics/IdealGasLaws"));
const DampedOscillation = lazy(() => import("./physics/DampedOscillation"));
const SIUnitsOverview = lazy(() => import("./physics/SIUnitsOverview"));
const ScalarVectorComparison = lazy(() => import("./physics/ScalarVectorComparison"));
const CentrifugeBlood = lazy(() => import("./physics/CentrifugeBlood"));
const MicroscopeOptics = lazy(() => import("./physics/MicroscopeOptics"));
const EndoscopeFiber = lazy(() => import("./physics/EndoscopeFiber"));
const ThinFilmInterference = lazy(() => import("./physics/ThinFilmInterference"));
const SIPrefixes = lazy(() => import("./physics/SIPrefixes"));

// Math
const CombinatoricsTree = lazy(() => import("./math/CombinatoricsTree"));
const CoordinateSystem = lazy(() => import("./math/CoordinateSystem"));
const ExponentialFunction = lazy(() => import("./math/ExponentialFunction"));
const GeometricShapes = lazy(() => import("./math/GeometricShapes"));
const LogarithmFunction = lazy(() => import("./math/LogarithmFunction"));
const PercentFractions = lazy(() => import("./math/PercentFractions"));
const ProbabilityDistribution = lazy(() => import("./math/ProbabilityDistribution"));
const QuadraticFunction = lazy(() => import("./math/QuadraticFunction"));
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
  gastrulation: Gastrulation,
  neurulation: Neurulation,
  "photosynthesis-z-scheme": PhotosynthesisZScheme,
  "radiation-penetration": RadiationPenetration,
  // Chemistry
  "atomic-orbitals": AtomicOrbitals,
  "covalent-bond": CovalentBond,
  "enzyme-substrate": EnzymeSubstrate,
  "functional-groups": FunctionalGroups,
  "ionic-bond": IonicBond,
  "periodic-table": PeriodicTable,
  "ph-scale": PHScale,
  // Physics
  "circuit-diagram": CircuitDiagram,
  "doppler-effect": DopplerEffect,
  "em-spectrum": EMSpectrum,
  "lens-imaging": LensImaging,
  "newton-forces": NewtonForces,
  "radioactive-decay": RadioactiveDecay,
  "temperature-scales": TemperatureScales,
  thermodynamics: Thermodynamics,
  "wave-types": WaveTypes,
  "lever-arm": LeverArm,
  "inclined-plane": InclinedPlane,
  "centripetal-force": CentripetalForce,
  "harmonic-oscillation": HarmonicOscillation,
  "magnetic-field-lines": MagneticFieldLines,
  "kirchhoff-laws": KirchhoffLaws,
  "snellius-refraction": SnelliusRefraction,
  "double-slit": DoubleSlit,
  "continuity-equation": ContinuityEquation,
  "laminar-flow-profile": LaminarFlowProfile,
  "phase-diagram-water": PhaseDiagramWater,
  "ideal-gas-laws": IdealGasLaws,
  "damped-oscillation": DampedOscillation,
  "si-units-overview": SIUnitsOverview,
  "scalar-vector-comparison": ScalarVectorComparison,
  "centrifuge-blood": CentrifugeBlood,
  "microscope-optics": MicroscopeOptics,
  "endoscope-fiber": EndoscopeFiber,
  "thin-film-interference": ThinFilmInterference,
  "si-prefixes": SIPrefixes,
  // Math
  "combinatorics-tree": CombinatoricsTree,
  "coordinate-system": CoordinateSystem,
  "exponential-function": ExponentialFunction,
  "geometric-shapes": GeometricShapes,
  "logarithm-function": LogarithmFunction,
  "percent-fractions": PercentFractions,
  "probability-distribution": ProbabilityDistribution,
  "quadratic-function": QuadraticFunction,
  "unit-circle": UnitCircle,
  "vector-addition": VectorAddition,
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
  gastrulation: "Gastrulation — Bildung der drei Keimblätter aus der Zweiblattscheibe.",
  neurulation: "Neurulation — Von der Neuralplatte zum Neuralrohr und Neuralleistenzellen.",
  "photosynthesis-z-scheme":
    "Z-Schema — Elektronenfluss durch PS II und PS I in der Lichtreaktion.",
  "radiation-penetration":
    "Durchdringungsfähigkeit — Alpha-, Beta- und Gamma-Strahlung im Vergleich.",
  // Chemistry
  "atomic-orbitals": "Atomorbitale — Formen der s-, p- und d-Orbitale.",
  "covalent-bond": "Kovalente Bindung — Elektronenpaarbindung am Beispiel Wasser (H₂O).",
  "enzyme-substrate": "Enzym-Substrat-Komplex — Schlüssel-Schloss-Prinzip und Katalyse.",
  "functional-groups": "Funktionelle Gruppen der organischen Chemie im Überblick.",
  "ionic-bond": "Ionenbindung — Elektronenübertragung und Kristallgitter (NaCl).",
  "periodic-table": "Periodensystem der Elemente — Gruppen, Perioden und Trends.",
  "ph-scale": "pH-Skala — Säuren, Basen und Neutralpunkt mit Alltagsbeispielen.",
  // Physics
  "circuit-diagram": "Schaltkreise — Reihen- und Parallelschaltung von Widerständen.",
  "doppler-effect": "Doppler-Effekt — Frequenzverschiebung bei bewegter Quelle.",
  "em-spectrum": "Elektromagnetisches Spektrum — von Gammastrahlung bis Radiowellen.",
  "lens-imaging": "Linsenabbildung — Strahlengang durch Sammel- und Zerstreuungslinse.",
  "newton-forces": "Kräfte und Newton'sche Gesetze — Gewichtskraft, Normalkraft, Reibung.",
  "radioactive-decay": "Radioaktiver Zerfall — Alpha-, Beta- und Gammastrahlung.",
  "temperature-scales": "Temperaturskalen — Celsius, Kelvin und Fahrenheit im Vergleich.",
  thermodynamics: "Thermodynamik — Wärmekraftmaschine und Carnot-Wirkungsgrad.",
  "wave-types": "Wellenarten — Transversal- vs. Longitudinalwellen im Vergleich.",
  "lever-arm": "Hebelgesetz — Drehmoment, Gleichgewicht und der Unterarm als Hebel.",
  "inclined-plane": "Schiefe Ebene — Kräftezerlegung in Hangabtriebskraft und Normalkraft.",
  "centripetal-force":
    "Zentripetalkraft bei Kreisbewegung — medizinische Anwendung in der Zentrifuge.",
  "harmonic-oscillation": "Harmonische Schwingung — Sinuswelle, Feder-Masse-System und Kenngrößen.",
  "magnetic-field-lines":
    "Magnetische Feldlinien — geschlossene Kurven vom Nord- zum Südpol (außen) und zurück (innen).",
  "kirchhoff-laws":
    "Kirchhoff'sche Gesetze — Knotenregel (Stromerhaltung) und Maschenregel (Spannungsbilanz).",
  "snellius-refraction":
    "Snellius'sches Brechungsgesetz — Lichtbrechung und Totalreflexion am Medienübergang.",
  "double-slit": "Doppelspaltexperiment — Interferenzmuster als Beweis der Wellennatur des Lichts.",
  "continuity-equation":
    "Kontinuitätsgleichung — Strömungsgeschwindigkeit steigt bei Rohrverengung (Stenose).",
  "laminar-flow-profile":
    "Laminares Strömungsprofil — parabolische Geschwindigkeitsverteilung (Hagen-Poiseuille).",
  "phase-diagram-water":
    "Phasendiagramm von Wasser — Tripelpunkt, kritischer Punkt und Anomalie der Schmelzkurve.",
  "ideal-gas-laws": "Ideale Gasgesetze — Boyle-Mariotte, Gay-Lussac und Charles im Überblick.",
  "damped-oscillation":
    "Gedämpfte Schwingung — exponentiell abklingende Amplitude im unterdämpften Fall.",
  "si-units-overview": "Die 7 SI-Basiseinheiten — Größe, Name, Symbol und medizinische Beispiele.",
  "scalar-vector-comparison":
    "Skalare vs. Vektoren — Betrag allein vs. Betrag mit Richtungsangabe.",
  "centrifuge-blood":
    "Blutzentrifugation — Auftrennung in Plasma, Buffy Coat und Erythrozyten (Hämatokrit).",
  "microscope-optics": "Zusammengesetztes Mikroskop — Strahlengang durch Objektiv und Okular.",
  "endoscope-fiber":
    "Glasfaser-Lichtleiter — Totalreflexion im Kern für endoskopische Bildübertragung.",
  "thin-film-interference":
    "Dünnschichtinterferenz — Gangunterschied und Farbeffekte an dünnen Schichten.",
  "si-prefixes":
    "SI-Präfixe — Zehnerpotenzen von Femto bis Tera mit medizinisch relevanten Bereichen.",
  // Math
  "combinatorics-tree": "Baumdiagramm — Permutationen, Variationen und Kombinationen.",
  "coordinate-system": "Koordinatensystem — Lineare, quadratische und exponentielle Funktionen.",
  "exponential-function": "Exponentialfunktion — Wachstum, Zerfall und die Euler'sche Zahl e.",
  "geometric-shapes": "Geometrische Formen — Flächen- und Volumenformeln.",
  "logarithm-function": "Logarithmusfunktion — Umkehrfunktion der Exponentialfunktion.",
  "percent-fractions": "Prozentrechnung und Brüche — Umrechnung und Anwendung.",
  "probability-distribution":
    "Wahrscheinlichkeitsverteilungen — Normal-, Binomial- und Poisson-Verteilung.",
  "quadratic-function": "Quadratische Funktionen — Parabelformen, Scheitelpunkt und Nullstellen.",
  "unit-circle": "Einheitskreis — Sinus, Cosinus und Tangens an wichtigen Winkeln.",
  "vector-addition": "Vektoraddition — Parallelogrammregel und Komponentenzerlegung.",
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
          <div className="flex items-center justify-center h-48 text-[var(--muted)] text-sm">
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
