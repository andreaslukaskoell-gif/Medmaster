import { useEffect, useRef, useState } from "react";

type Molecule = {
  id: string;
  name: string;
  smiles: string;
  detail: string;
  category: string;
};

const molecules: Molecule[] = [
  {
    id: "glucose",
    name: "Glucose (D-Glucose)",
    smiles: "OC[C@@H](O1)[C@@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    category: "Kohlenhydrate",
    detail:
      "Monosaccharid (Aldohexose, C₆H₁₂O₆). Wichtigster Energielieferant der Zelle. Wird in der Glykolyse zu Pyruvat abgebaut. Ringform: α- und β-Glucose (Pyranose).",
  },
  {
    id: "atp",
    name: "ATP (Adenosintriphosphat)",
    smiles: "c1nc(N)c2ncn(C3OC(COP(=O)(O)OP(=O)(O)OP(=O)(O)O)C(O)C3O)c2n1",
    category: "Nukleotide",
    detail:
      "Universelle Energiewährung der Zelle. Enthält Adenin + Ribose + 3 Phosphatgruppen. Hydrolyse der γ-Phosphatbindung setzt ~30,5 kJ/mol frei.",
  },
  {
    id: "ethanol",
    name: "Ethanol",
    smiles: "CCO",
    category: "Alkohole",
    detail:
      "Einfachster primärer Alkohol (C₂H₅OH). Hydroxylgruppe (-OH) macht das Molekül polar und wasserlöslich. Wird in der Leber durch Alkoholdehydrogenase (ADH) abgebaut.",
  },
  {
    id: "aspirin",
    name: "Acetylsalicylsäure (Aspirin)",
    smiles: "CC(=O)Oc1ccccc1C(=O)O",
    category: "Arzneistoffe",
    detail:
      "Hemmt irreversibel COX-1 und COX-2 → verminderte Prostaglandinsynthese. Wirkt analgetisch, antipyretisch, antiphlogistisch. Thrombozytenaggregationshemmung durch COX-1-Blockade.",
  },
  {
    id: "alanin",
    name: "L-Alanin",
    smiles: "N[C@@H](C)C(=O)O",
    category: "Aminosäuren",
    detail:
      "Einfachste chirale Aminosäure. Methylgruppe als Seitenkette (R = -CH₃). Hydrophob, nicht-polar. Häufig in α-Helices von Proteinen.",
  },
  {
    id: "benzol",
    name: "Benzol",
    smiles: "c1ccccc1",
    category: "Aromaten",
    detail:
      "Grundgerüst aller Aromaten. 6 delokalisierte π-Elektronen (Hückel-Regel: 4n+2, n=1). Mesomeriestabilisiert, daher Addition statt Substitution ungewöhnlich.",
  },
];

export default function MoleculeViewer() {
  const [active, setActive] = useState<string>("glucose");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawerRef = useRef<unknown>(null);
  const [loaded, setLoaded] = useState(false);

  // Dynamically import smiles-drawer (heavy, only load when component mounts)
  useEffect(() => {
    let cancelled = false;
    import("smiles-drawer").then((mod) => {
      if (cancelled) return;
      const SmilesDrawer = mod.default || mod;
      drawerRef.current = new SmilesDrawer.Drawer({
        width: 380,
        height: 280,
        bondThickness: 1.5,
        bondLength: 20,
        shortBondLength: 0.85,
        fontSizeLarge: 11,
        fontSizeSmall: 6,
        padding: 30,
        themes: {
          light: {
            C: "#374151",
            O: "#dc2626",
            N: "#2563eb",
            S: "#ca8a04",
            P: "#ea580c",
            H: "#6b7280",
            F: "#059669",
            Cl: "#059669",
            Br: "#92400e",
            I: "#7c3aed",
            BACKGROUND: "#ffffff",
          },
        },
      });
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Draw the active molecule
  useEffect(() => {
    if (!loaded || !canvasRef.current || !drawerRef.current) return;
    const mol = molecules.find((m) => m.id === active);
    if (!mol) return;

    const SmilesDrawerModule = drawerRef.current as {
      draw: (parsed: unknown, canvas: HTMLCanvasElement, theme: string) => void;
    };

    import("smiles-drawer").then((mod) => {
      const SmilesDrawer = mod.default || mod;
      SmilesDrawer.parse(mol.smiles, (tree: unknown) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        SmilesDrawerModule.draw(tree, canvas, "light");
      });
    });
  }, [active, loaded]);

  const activeMol = molecules.find((m) => m.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Molekülstrukturen (SMILES-Viewer)
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Wähle ein Molekül — die 2D-Strukturformel wird aus der SMILES-Notation berechnet.
      </p>

      {/* Molecule selector */}
      <div className="flex flex-wrap gap-2">
        {molecules.map((m) => (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            className="px-2.5 py-1 text-xs rounded-full border transition-all"
            style={{
              borderColor: active === m.id ? "#0d9488" : "#d1d5db",
              backgroundColor: active === m.id ? "#ccfbf1" : "transparent",
              color: active === m.id ? "#0f766e" : "#6b7280",
              fontWeight: active === m.id ? 600 : 400,
            }}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Canvas for SMILES rendering */}
      <div className="flex justify-center bg-white rounded-lg border border-gray-200 p-2">
        {!loaded ? (
          <div className="flex items-center justify-center h-[280px] text-sm text-gray-400">
            Molekül-Renderer wird geladen...
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            width={380}
            height={280}
            className="max-w-full"
          />
        )}
      </div>

      {/* Detail box */}
      {activeMol && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <span className="text-xs px-1.5 py-0.5 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 rounded">
              {activeMol.category}
            </span>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              {activeMol.name}
            </p>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1.5">{activeMol.detail}</p>
          <p className="text-[10px] text-gray-400 mt-1 font-mono">SMILES: {activeMol.smiles}</p>
        </div>
      )}
    </div>
  );
}
