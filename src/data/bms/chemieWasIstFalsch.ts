/**
 * Chemie Pool — „Was ist falsch?“ (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/chemie.
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

const STEM = "Welche der folgenden Aussagen ist falsch?";

export const chemieWasIstFalsch: Question[] = [
  q(
    "ch-pool-wif-001",
    "chem-kap1",
    STEM,
    [
      "Die Ordnungszahl Z entspricht der Anzahl der Protonen im Kern.",
      "Isotope haben dieselbe Ordnungszahl, aber verschiedene Massenzahlen.",
      "Die maximale Elektronenzahl in der K-Schale (n=1) ist 2.",
      "Die maximale Elektronenzahl in der L-Schale (n=2) ist 4.",
      "Ein Neutralatom hat gleich viele Protonen wie Elektronen.",
    ],
    3,
    "In der L-Schale (n=2) passen maximal 2n² = 8 Elektronen, nicht 4. Die falsche Aussage ist D.",
    "leicht",
    ["Atombau", "Periodensystem"]
  ),
  q(
    "ch-pool-wif-002",
    "chem-kap5",
    STEM,
    [
      "pH = −log₁₀[H₃O⁺].",
      "Eine Lösung mit pH = 7 ist bei 25 °C neutral.",
      "[H₃O⁺] = 10⁻³ mol/L entspricht pH = 3.",
      "pOH = pH gilt immer in wässriger Lösung.",
      "Starke Säuren sind in Wasser (nahezu) vollständig dissoziiert.",
    ],
    3,
    "pOH = pH gilt nur bei pH = 7 (neutral). Allgemein gilt pH + pOH = 14 (25 °C, wässrig). Die falsche Aussage ist D.",
    "mittel",
    ["pH", "Säuren"]
  ),
  q(
    "ch-pool-wif-003",
    "chem-kap3",
    STEM,
    [
      "Bei der Ionenbindung entstehen Kationen und Anionen.",
      "Bei der kovalenten Bindung werden Elektronenpaare geteilt.",
      "Wasserstoffbrücken sind stärker als kovalente C-H-Bindungen.",
      "Die Elektronegativität beschreibt das Bestreben, Elektronen anzuziehen.",
      "Eine polare Bindung entsteht bei unterschiedlicher Elektronegativität der Partner.",
    ],
    2,
    "Wasserstoffbrücken sind schwächer als kovalente Bindungen. Die falsche Aussage ist C.",
    "mittel",
    ["chemische Bindung"]
  ),
  q(
    "ch-pool-wif-004",
    "chem-kap4",
    STEM,
    [
      "Im chemischen Gleichgewicht sind Hin- und Rückreaktion gleich schnell.",
      "Ein Katalysator senkt die Aktivierungsenergie.",
      "Ein Katalysator verschiebt das Gleichgewicht auf die Produktseite.",
      "Nach Le Chatelier begünstigt Temperaturerhöhung bei exothermer Reaktion die Rückreaktion.",
      "Die Gleichgewichtskonstante K ist temperaturabhängig.",
    ],
    2,
    "Ein Katalysator verschiebt das Gleichgewicht nicht; er beschleunigt nur die Einstellung. Die falsche Aussage ist C.",
    "mittel",
    ["Gleichgewicht", "Katalysator"]
  ),
  q(
    "ch-pool-wif-005",
    "chem-kap6",
    STEM,
    [
      "Alkane haben die allgemeine Summenformel CₙH₂ₙ₊₂.",
      "Eine Hydroxylgruppe (−OH) am C-Gerüst kennzeichnet Alkohole.",
      "Carbonsäuren enthalten die Gruppe −COOH.",
      "Alle organischen Verbindungen enthalten mindestens eine C-H-Bindung.",
      "Isomere haben dieselbe Summenformel, aber unterschiedliche Struktur.",
    ],
    3,
    "Nicht alle organischen Verbindungen haben C-H-Bindung (z. B. CO₂, Oxalsäure). Die falsche Aussage ist D.",
    "mittel",
    ["organische Chemie"]
  ),
  q(
    "ch-pool-wif-006",
    "chem-kap1",
    STEM,
    [
      "Protonen tragen eine positive, Elektronen eine negative Ladung.",
      "Die Massenzahl A ist die Summe aus Protonen- und Neutronenzahl.",
      "Neutronen sind elektrisch neutral.",
      "In einem Orbital können maximal zwei Elektronen mit entgegengesetztem Spin sein.",
      "Alle Atome eines Elements haben dieselbe Neutronenzahl.",
    ],
    4,
    "Isotope desselben Elements haben verschiedene Neutronenzahlen. Die falsche Aussage ist E.",
    "leicht",
    ["Atombau"]
  ),
  q(
    "ch-pool-wif-007",
    "chem-kap5",
    STEM,
    [
      "Basen können OH⁻-Ionen abgeben oder H⁺ aufnehmen.",
      "Nach Brønsted ist eine Säure ein Protonendonator.",
      "Nach Brønsted ist eine Base ein Protonenakzeptor.",
      "Die Autoprotolyse des Wassers liefert H₃O⁺ und OH⁻.",
      "Eine Lösung mit pH < 7 enthält mehr OH⁻ als H₃O⁺.",
    ],
    4,
    "Bei pH < 7 ist [H₃O⁺] > [OH⁻], nicht umgekehrt. Die falsche Aussage ist E.",
    "leicht",
    ["Säuren", "Basen"]
  ),
  q(
    "ch-pool-wif-008",
    "chem-kap2",
    STEM,
    [
      "Der Aggregatzustand eines Stoffes hängt von Temperatur und Druck ab.",
      "Beim Schmelzen bleibt die Temperatur bei einem reinen Stoff konstant.",
      "Sublimation ist der Übergang direkt vom festen in den gasförmigen Zustand.",
      "Die Dichte von Wasser ist bei 4 °C am kleinsten.",
      "Gase sind kompressibel, Flüssigkeiten und Festkörper kaum.",
    ],
    3,
    "Die Dichte von Wasser ist bei 4 °C am größten (Anomalie des Wassers). Die falsche Aussage ist D.",
    "mittel",
    ["Aggregatzustände", "Materie"]
  ),
  q(
    "ch-pool-wif-009",
    "chem-kap1",
    STEM,
    [
      "Die K-Schale (n=1) nimmt max. 2 Elektronen.",
      "Die L-Schale (n=2) nimmt max. 8 Elektronen.",
      "Die L-Schale nimmt max. 4 Elektronen.",
      "Neutronen sind ungeladen.",
      "Die Massenzahl A = Protonen + Neutronen.",
    ],
    2,
    "L-Schale: max. 2n² = 8 Elektronen (C falsch).",
    "leicht",
    ["Atombau"]
  ),
  q(
    "ch-pool-wif-010",
    "chem-kap4",
    STEM,
    [
      "Im Gleichgewicht sind Hin- und Rückreaktion gleich schnell.",
      "Ein Katalysator senkt die Aktivierungsenergie.",
      "Ein Katalysator verschiebt das Gleichgewicht.",
      "Le Chatelier: Temperaturerhöhung bei exothermer Reaktion begünstigt Rückreaktion.",
      "K ist temperaturabhängig.",
    ],
    2,
    "Ein Katalysator verschiebt das Gleichgewicht nicht (C falsch).",
    "mittel",
    ["Gleichgewicht"]
  ),
];
