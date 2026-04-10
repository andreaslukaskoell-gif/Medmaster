/**
 * Chemie Pool 2 — "Was ist falsch?" (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/chemie.
 * 60 Fragen, 10 pro Kapitel: chem-kap1, chem-kap2, chem-kap-stoech, chem-kap4, chem-kap5, chem-kap6/chem-kap3.
 * Schwierigkeit: 18 leicht, 27 mittel, 15 schwer.
 */
import type { Question } from "./index";

const ids = ["a", "b", "c", "d", "e"] as const;

function wif(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer",
  tags: string[]
): Question {
  return {
    id,
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags: ["falsch-frage", ...tags],
  };
}

export const chemieWasIstFalsch2: Question[] = [
  // ─── chem-kap1: Atombau und Periodensystem (10 Fragen) ───────────


  wif(
    "ch-falsch2-002",
    "chem-kap1",
    "Welche der folgenden Aussagen zu Elektronen-Orbitalen ist FALSCH?",
    [
      "s-Orbitale sind kugelförmig.",
      "p-Orbitale sind hantelförmig.",
      "In der zweiten Schale (n = 2) gibt es d-Orbitale.",
      "Jedes Orbital kann maximal 2 Elektronen aufnehmen.",
      "Die Nebenquantenzahl l bestimmt die Form des Orbitals.",
    ],
    2,
    "d-Orbitale treten erst ab der dritten Schale (n = 3) auf. Für n = 2 gilt l = 0, 1 (s und p), nicht l = 2 (d).",
    "leicht",
    ["orbitale", "quantenzahlen"]
  ),

  wif(
    "ch-falsch2-003",
    "chem-kap1",
    "Welche Aussage über Isotope ist FALSCH?",
    [
      "Isotope eines Elements haben die gleiche Ordnungszahl.",
      "Isotope unterscheiden sich in der Neutronenzahl.",
      "Isotope haben identische chemische Eigenschaften.",
      "Alle Isotope eines Elements sind radioaktiv.",
      "Die Massenzahl A variiert bei verschiedenen Isotopen.",
    ],
    3,
    "Nicht alle Isotope sind radioaktiv. Die meisten natürlich vorkommenden Isotope sind stabil (z. B. ¹²C und ¹³C). Nur bestimmte Isotope mit ungünstigem Neutronen-Protonen-Verhältnis sind instabil und radioaktiv.",
    "leicht",
    ["isotope", "radioaktivitaet"]
  ),

  wif(
    "ch-falsch2-004",
    "chem-kap1",
    "Welche Aussage zum Aufbau-Prinzip (Aufbauprinzip) der Elektronenhülle ist FALSCH?",
    [
      "Elektronen besetzen zuerst Orbitale niedrigerer Energie.",
      "Nach der Hundschen Regel werden Orbitale gleicher Energie zuerst einfach besetzt.",
      "Das Pauli-Prinzip besagt, dass zwei Elektronen im selben Orbital antiparallelen Spin haben müssen.",
      "Das 3d-Orbital wird vor dem 4s-Orbital besetzt.",
      "Die Elektronenkonfiguration von Neon ist 1s² 2s² 2p⁶.",
    ],
    3,
    "Das 4s-Orbital wird VOR dem 3d-Orbital besetzt, nicht umgekehrt. Nach der Madelung-Regel (n + l) wird 4s (n + l = 4 + 0 = 4) vor 3d (n + l = 3 + 2 = 5) aufgefüllt.",
    "mittel",
    ["aufbauprinzip", "elektronenkonfiguration"]
  ),

  wif(
    "ch-falsch2-005",
    "chem-kap1",
    "Welche der folgenden Aussagen über Hauptgruppenelemente ist FALSCH?",
    [
      "Alkalimetalle bilden bevorzugt einwertige Kationen.",
      "Halogene haben 7 Valenzelektronen.",
      "Erdalkalimetalle bilden bevorzugt zweiwertige Kationen.",
      "Die Atomradien nehmen in einer Periode von links nach rechts zu.",
      "Edelgase haben eine besonders hohe Ionisierungsenergie.",
    ],
    3,
    "Die Atomradien nehmen in einer Periode von links nach rechts AB, nicht zu. Die steigende Kernladung zieht die Elektronenhülle stärker an, wodurch der Atomradius kleiner wird.",
    "leicht",
    ["periodensystem", "atomradius"]
  ),


  wif(
    "ch-falsch2-007",
    "chem-kap1",
    "Welche Aussage zu den Nebengruppenelementen ist FALSCH?",
    [
      "Sie füllen d-Orbitale auf.",
      "Viele sind als Katalysatoren von Bedeutung.",
      "Sie können verschiedene Oxidationsstufen einnehmen.",
      "Sie bilden ausschließlich farblose Verbindungen.",
      "Ihre Ionen haben häufig ungepaarte Elektronen.",
    ],
    3,
    "Nebengruppenelemente (Übergangsmetalle) bilden häufig FARBIGE Verbindungen. Die Farbe entsteht durch d-d-Übergänge von Elektronen in den teilweise besetzten d-Orbitalen.",
    "leicht",
    ["nebengruppen", "uebergangsmetalle"]
  ),


  wif(
    "ch-falsch2-009",
    "chem-kap1",
    "Welche der folgenden Aussagen über die Elektronenaffinität ist FALSCH?",
    [
      "Die Elektronenaffinität ist die Energie, die bei der Aufnahme eines Elektrons frei wird.",
      "Halogene haben besonders hohe Elektronenaffinitäten.",
      "Edelgase haben eine besonders hohe Elektronenaffinität.",
      "Chlor hat eine höhere Elektronenaffinität als Fluor.",
      "Die Elektronenaffinität ist ein Maß dafür, wie stark ein Atom ein zusätzliches Elektron bindet.",
    ],
    2,
    "Edelgase haben eine sehr NIEDRIGE (praktisch keine positive) Elektronenaffinität, da ihre Valenzschale vollständig besetzt ist und ein zusätzliches Elektron in eine energetisch ungünstige höhere Schale müsste.",
    "mittel",
    ["elektronenaffinitaet", "edelgase"]
  ),

  wif(
    "ch-falsch2-010",
    "chem-kap1",
    "Welche Aussage über die Oktettregel ist FALSCH?",
    [
      "Hauptgruppenelemente streben eine Edelgaskonfiguration mit 8 Valenzelektronen an.",
      "Wasserstoff strebt die Helium-Konfiguration mit 2 Elektronen an.",
      "Die Oktettregel gilt ausnahmslos für alle Elemente.",
      "Durch Elektronenabgabe oder -aufnahme können Ionen eine Edelgaskonfiguration erreichen.",
      "Kovalente Bindungen ermöglichen es Atomen, die Oktettregel durch Elektronenpaarbindung zu erfüllen.",
    ],
    2,
    "Die Oktettregel gilt NICHT ausnahmslos. Wichtige Ausnahmen: BF₃ (Bor mit Elektronensextett), SF₆ (Schwefel mit 12 Valenzelektronen durch d-Orbital-Beteiligung), PCl₅, und Radikale wie NO.",
    "schwer",
    ["oktettregel", "ausnahmen"]
  ),

  // ─── chem-kap2: Materie und Zustandsformen (10 Fragen) ────────────


  wif(
    "ch-falsch2-012",
    "chem-kap2",
    "Welche der folgenden Aussagen zu Gasen ist FALSCH?",
    [
      "Ideale Gase haben kein Eigenvolumen der Teilchen.",
      "Bei idealen Gasen gibt es keine zwischenmolekularen Wechselwirkungen.",
      "p · V = n · R · T gilt für ideale Gase.",
      "Reale Gase verhalten sich bei hohen Drücken und niedrigen Temperaturen ideal.",
      "Bei gleichem Druck und gleicher Temperatur enthalten gleiche Volumina idealer Gase die gleiche Teilchenzahl.",
    ],
    3,
    "Reale Gase verhalten sich bei hohem Druck und niedriger Temperatur NICHT ideal, sondern gerade dann am wenigsten ideal. Ideales Verhalten zeigt sich bei niedrigem Druck und hoher Temperatur, wenn Teilchenvolumen und Wechselwirkungen vernachlässigbar sind.",
    "mittel",
    ["gasgesetze", "ideales-gas"]
  ),

  wif(
    "ch-falsch2-013",
    "chem-kap2",
    "Welche Aussage über intermolekulare Kräfte ist FALSCH?",
    [
      "Van-der-Waals-Kräfte treten zwischen allen Molekülen auf.",
      "Wasserstoffbrücken sind stärker als Van-der-Waals-Kräfte.",
      "Dipol-Dipol-Wechselwirkungen treten nur zwischen polaren Molekülen auf.",
      "Wasserstoffbrücken sind stärker als kovalente Bindungen.",
      "London-Dispersionskräfte nehmen mit der Molekülgröße zu.",
    ],
    3,
    "Wasserstoffbrücken (ca. 10–40 kJ/mol) sind deutlich SCHWÄCHER als kovalente Bindungen (ca. 150–800 kJ/mol). Kovalente Bindungen sind intramolekulare Bindungen und um ein Vielfaches stärker.",
    "leicht",
    ["intermolekulare-kraefte", "wasserstoffbruecken"]
  ),


  wif(
    "ch-falsch2-015",
    "chem-kap2",
    "Welche Aussage zur Kristallstruktur ist FALSCH?",
    [
      "In einem Ionenkristall sind Kationen und Anionen in einem regelmäßigen Gitter angeordnet.",
      "Metallgitter bestehen aus Metallkationen in einem Elektronengas.",
      "Molekülkristalle haben generell höhere Schmelzpunkte als Ionenkristalle.",
      "Diamant ist ein Beispiel für einen Atomkristall.",
      "Die Gitterenergie ist ein Maß für die Stabilität eines Ionenkristalls.",
    ],
    2,
    "Molekülkristalle haben generell NIEDRIGERE Schmelzpunkte als Ionenkristalle, da die intermolekularen Kräfte (Van-der-Waals, H-Brücken) viel schwächer sind als die elektrostatischen Anziehungen im Ionengitter.",
    "mittel",
    ["kristallstruktur", "schmelzpunkt"]
  ),

  wif(
    "ch-falsch2-016",
    "chem-kap2",
    "Welche Aussage über kolligative Eigenschaften ist FALSCH?",
    [
      "Die Siedepunktserhöhung ist proportional zur Molalität des gelösten Stoffes.",
      "Die Gefrierpunktserniedrigung wird durch gelöste Teilchen verursacht.",
      "Kolligative Eigenschaften hängen von der Art des gelösten Stoffes ab.",
      "Der osmotische Druck einer Lösung steigt mit der Konzentration.",
      "Die Dampfdruckerniedrigung ist eine kolligative Eigenschaft.",
    ],
    2,
    "Kolligative Eigenschaften hängen NICHT von der Art des gelösten Stoffes ab, sondern nur von der ANZAHL der gelösten Teilchen. Daher der Name 'kolligativ' (lat. colligare = zusammenbinden).",
    "schwer",
    ["kolligative-eigenschaften", "siedepunktserhoehung"]
  ),


  wif(
    "ch-falsch2-018",
    "chem-kap2",
    "Welche Aussage zur Löslichkeit ist FALSCH?",
    [
      "Polare Stoffe lösen sich gut in polaren Lösungsmitteln (similia similibus solvuntur).",
      "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur zu.",
      "Die Löslichkeit der meisten Salze in Wasser nimmt mit steigender Temperatur zu.",
      "Die Löslichkeit von Gasen steigt mit zunehmendem Druck (Henry-Gesetz).",
      "Ethanol und Wasser sind in jedem Verhältnis mischbar.",
    ],
    1,
    "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur AB, nicht zu. Bei höherer Temperatur haben die Gasmoleküle mehr kinetische Energie und können die Lösung leichter verlassen.",
    "leicht",
    ["loeslichkeit", "gase"]
  ),

  wif(
    "ch-falsch2-019",
    "chem-kap2",
    "Welche Aussage über die Brownsche Molekularbewegung ist FALSCH?",
    [
      "Sie beschreibt die unregelmäßige Bewegung kleiner Teilchen in einer Flüssigkeit.",
      "Sie wurde erstmals an Pollenkörnern in Wasser beobachtet.",
      "Die Bewegung nimmt mit steigender Temperatur zu.",
      "Die Bewegung kommt durch Stöße der Lösungsmittelmoleküle zustande.",
      "Die Brownsche Bewegung kommt bei 0 °C vollständig zum Stillstand.",
    ],
    4,
    "Die Brownsche Bewegung kommt bei 0 °C NICHT zum Stillstand. 0 °C ist nicht der absolute Nullpunkt. Erst am absoluten Nullpunkt (0 K = −273,15 °C) würde theoretisch jede thermische Bewegung aufhören.",
    "mittel",
    ["brownsche-bewegung", "temperatur"]
  ),

  wif(
    "ch-falsch2-020",
    "chem-kap2",
    "Welche der folgenden Aussagen zum Phasendiagramm von Wasser ist FALSCH?",
    [
      "Die Dampfdruckkurve endet am kritischen Punkt.",
      "Am Tripelpunkt existieren Eis, Wasser und Dampf gleichzeitig.",
      "Die Schmelzdruckkurve von Wasser hat eine positive Steigung wie bei den meisten Stoffen.",
      "Oberhalb des kritischen Punktes gibt es keinen Unterschied mehr zwischen flüssiger und gasförmiger Phase.",
      "Der Tripelpunkt von Wasser liegt bei etwa 0,01 °C und 611 Pa.",
    ],
    2,
    "Die Schmelzdruckkurve von Wasser hat eine NEGATIVE Steigung (anomale Eigenschaft des Wassers). Eis hat ein größeres Volumen als flüssiges Wasser, daher sinkt der Schmelzpunkt mit steigendem Druck.",
    "schwer",
    ["phasendiagramm", "anomalie-wasser"]
  ),

  // ─── chem-kap-stoech: Stöchiometrie und Lösungen (10 Fragen) ─────


  wif(
    "ch-falsch2-022",
    "chem-kap-stoech",
    "Welche Aussage zu Konzentrationsangaben ist FALSCH?",
    [
      "Die Molarität (c) gibt die Stoffmenge pro Liter Lösung an.",
      "Die Molalität gibt die Stoffmenge pro Kilogramm Lösungsmittel an.",
      "Der Massenanteil w ist dimensionslos und wird oft in Prozent angegeben.",
      "Eine 1-molare NaCl-Lösung enthält 58,44 g NaCl pro Liter Lösungsmittel.",
      "ppm bedeutet parts per million (Teile pro Million).",
    ],
    3,
    "Eine 1-molare NaCl-Lösung enthält 58,44 g NaCl pro Liter LÖSUNG, nicht pro Liter Lösungsmittel. Die Molarität bezieht sich auf das Volumen der gesamten Lösung.",
    "mittel",
    ["konzentration", "molaritaet"]
  ),

  wif(
    "ch-falsch2-023",
    "chem-kap-stoech",
    "Welche Aussage über die Verdünnungsregel ist FALSCH?",
    [
      "c₁ · V₁ = c₂ · V₂ gilt für Verdünnungen.",
      "Beim Verdünnen bleibt die Stoffmenge des gelösten Stoffes konstant.",
      "Beim Verdünnen einer Säure gibt man immer Wasser zur Säure.",
      "Durch Verdünnen sinkt die Konzentration.",
      "Die Verdünnungsregel gilt für beliebige Konzentrationseinheiten (solange dieselbe verwendet wird).",
    ],
    2,
    "Beim Verdünnen einer konzentrierten Säure gibt man IMMER die Säure zum Wasser (\"Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure\"). Die Hydratationswärme kann sonst zum Spritzen führen.",
    "mittel",
    ["verduennung", "sicherheit"]
  ),

  wif(
    "ch-falsch2-024",
    "chem-kap-stoech",
    "Welche Aussage über das molare Volumen ist FALSCH?",
    [
      "Das molare Volumen eines idealen Gases beträgt bei Normalbedingungen (0 °C, 1 atm) ca. 22,4 L/mol.",
      "Das Avogadro-Gesetz besagt, dass gleiche Volumina idealer Gase bei gleicher Temperatur und gleichem Druck gleich viele Teilchen enthalten.",
      "Das molare Volumen ist unabhängig von der Art des Gases (bei idealen Gasen).",
      "Das molare Volumen eines idealen Gases bei 25 °C und 1 atm beträgt ca. 22,4 L/mol.",
      "Aus dem molaren Volumen kann man die Dichte eines Gases berechnen.",
    ],
    3,
    "Bei 25 °C und 1 atm beträgt das molare Volumen ca. 24,5 L/mol, NICHT 22,4 L/mol. Der Wert 22,4 L/mol gilt nur bei Normalbedingungen (0 °C = 273,15 K). Bei höherer Temperatur dehnt sich das Gas aus.",
    "schwer",
    ["molares-volumen", "gasgesetze"]
  ),

  wif(
    "ch-falsch2-025",
    "chem-kap-stoech",
    "Welche Aussage zum Grenzreagenz (limitierender Reaktand) ist FALSCH?",
    [
      "Das Grenzreagenz ist der Stoff, der zuerst verbraucht wird.",
      "Die Produktmenge wird durch das Grenzreagenz bestimmt.",
      "Der Stoff im stöchiometrischen Überschuss wird nicht vollständig verbraucht.",
      "Das Grenzreagenz ist immer der Stoff mit der geringsten Masse.",
      "Zur Bestimmung des Grenzreagenz vergleicht man Stoffmengen im Verhältnis der stöchiometrischen Koeffizienten.",
    ],
    3,
    "Das Grenzreagenz ist NICHT einfach der Stoff mit der geringsten Masse. Entscheidend ist das Verhältnis von vorhandener Stoffmenge zu benötigter Stoffmenge (laut Reaktionsgleichung).",
    "mittel",
    ["grenzreagenz", "stoechiometrie"]
  ),

  wif(
    "ch-falsch2-026",
    "chem-kap-stoech",
    "Welche Aussage über die Ausbeute einer Reaktion ist FALSCH?",
    [
      "Die theoretische Ausbeute ist die maximal erreichbare Produktmenge.",
      "Die tatsächliche Ausbeute ist meist geringer als die theoretische.",
      "Die prozentuale Ausbeute berechnet sich als (tatsächlich / theoretisch) × 100 %.",
      "Eine Ausbeute über 100 % ist bei einer reinen Reaktion möglich.",
      "Nebenreaktionen und Verluste senken die tatsächliche Ausbeute.",
    ],
    3,
    "Eine Ausbeute über 100 % ist bei einer reinen chemischen Reaktion NICHT möglich. Falls ein Wert über 100 % berechnet wird, deutet dies auf Messfehler, Verunreinigungen oder einen Rechenfehler hin.",
    "leicht",
    ["ausbeute", "stoechiometrie"]
  ),

  wif(
    "ch-falsch2-027",
    "chem-kap-stoech",
    "Welche Aussage über Oxidationszahlen ist FALSCH?",
    [
      "Die Oxidationszahl von Elementen im elementaren Zustand ist 0.",
      "Sauerstoff hat in den meisten Verbindungen die Oxidationszahl −2.",
      "Wasserstoff hat in Verbindungen mit Nichtmetallen die Oxidationszahl +1.",
      "Die Summe der Oxidationszahlen in einem neutralen Molekül ist immer 0.",
      "Fluor hat in allen Verbindungen die Oxidationszahl +1.",
    ],
    4,
    "Fluor ist das elektronegativste Element und hat in ALLEN Verbindungen die Oxidationszahl −1, niemals +1.",
    "leicht",
    ["oxidationszahlen", "fluor"]
  ),

  wif(
    "ch-falsch2-028",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur Titration ist FALSCH?",
    [
      "Bei der Säure-Base-Titration wird der Äquivalenzpunkt bestimmt.",
      "Am Äquivalenzpunkt einer starken Säure mit starker Base ist der pH-Wert 7.",
      "Phenolphthalein schlägt im Bereich pH 8,2–10 um.",
      "Am Äquivalenzpunkt einer schwachen Säure mit starker Base ist der pH-Wert genau 7.",
      "Die Maßlösung hat eine genau bekannte Konzentration.",
    ],
    3,
    "Am Äquivalenzpunkt einer schwachen Säure mit starker Base ist der pH-Wert NICHT 7, sondern liegt im basischen Bereich (> 7), da das konjugierte Base-Anion der schwachen Säure in Wasser hydrolysiert.",
    "schwer",
    ["titration", "aequivalenzpunkt"]
  ),

  wif(
    "ch-falsch2-029",
    "chem-kap-stoech",
    "Welche Aussage zur empirischen Formel ist FALSCH?",
    [
      "Die empirische Formel gibt das kleinste ganzzahlige Verhältnis der Atome an.",
      "Die Molekülformel kann ein Vielfaches der empirischen Formel sein.",
      "Aus der Elementaranalyse erhält man zunächst die empirische Formel.",
      "Die empirische Formel und die Molekülformel sind immer identisch.",
      "Glucose hat die empirische Formel CH₂O und die Molekülformel C₆H₁₂O₆.",
    ],
    3,
    "Die empirische Formel und die Molekülformel sind NICHT immer identisch. Beispiel: Glucose hat die empirische Formel CH₂O, aber die Molekülformel C₆H₁₂O₆ (6-faches der empirischen Formel).",
    "leicht",
    ["empirische-formel", "molekuelformel"]
  ),

  wif(
    "ch-falsch2-030",
    "chem-kap-stoech",
    "Welche der folgenden Aussagen zur Neutralisation ist FALSCH?",
    [
      "Bei der Neutralisation reagiert eine Säure mit einer Base.",
      "Das Produkt einer Neutralisation ist ein Salz und Wasser.",
      "Die Neutralisation von HCl mit NaOH ergibt NaCl und H₂O.",
      "Die Neutralisationsreaktion ist endotherm.",
      "Die Neutralisationsenthalpie starker Säuren mit starken Basen beträgt ca. −57 kJ/mol.",
    ],
    3,
    "Die Neutralisationsreaktion ist EXOTHERM (es wird Energie frei), nicht endotherm. Die freiwerdende Energie stammt aus der Bildung von Wasser aus H⁺ und OH⁻.",
    "mittel",
    ["neutralisation", "enthalpie"]
  ),

  // ─── chem-kap4: Reaktionen und Gleichgewicht (10 Fragen) ──────────


  wif(
    "ch-falsch2-032",
    "chem-kap4",
    "Welche Aussage zur Reaktionsgeschwindigkeit ist FALSCH?",
    [
      "Die Reaktionsgeschwindigkeit steigt mit der Temperatur.",
      "Ein Katalysator senkt die Aktivierungsenergie.",
      "Bei einer Verdopplung der Konzentration eines Reaktanden verdoppelt sich die Geschwindigkeit bei einer Reaktion erster Ordnung bezüglich dieses Reaktanden.",
      "Die Reaktionsgeschwindigkeit ist bei Beginn der Reaktion am niedrigsten.",
      "Die RGT-Regel besagt, dass eine Temperaturerhöhung um 10 °C die Geschwindigkeit etwa verdoppelt bis verdreifacht.",
    ],
    3,
    "Die Reaktionsgeschwindigkeit ist bei Beginn der Reaktion am HÖCHSTEN (nicht am niedrigsten), da die Konzentrationen der Edukte am größten sind und mit fortschreitender Reaktion abnehmen.",
    "mittel",
    ["reaktionsgeschwindigkeit", "kinetik"]
  ),

  wif(
    "ch-falsch2-033",
    "chem-kap4",
    "Welche der folgenden Aussagen zur Enthalpie ist FALSCH?",
    [
      "Bei exothermen Reaktionen ist ΔH negativ.",
      "Die Bildungsenthalpie eines Elements in seinem Standardzustand ist null.",
      "Der Satz von Hess besagt, dass die Reaktionsenthalpie vom Weg abhängt.",
      "Bindungsenthalpien geben die Energie an, die zum Spalten einer Bindung nötig ist.",
      "Verbrennungsreaktionen sind in der Regel exotherm.",
    ],
    2,
    "Der Satz von Hess besagt, dass die Reaktionsenthalpie WEGUNABHÄNGIG ist. Die Gesamtenthalpieänderung hängt nur von Anfangs- und Endzustand ab, nicht vom Reaktionsweg.",
    "mittel",
    ["enthalpie", "satz-von-hess"]
  ),


  wif(
    "ch-falsch2-035",
    "chem-kap4",
    "Welche Aussage über die Gibbs-Energie ist FALSCH?",
    [
      "ΔG = ΔH − T · ΔS beschreibt die freie Enthalpie.",
      "Eine Reaktion ist spontan, wenn ΔG < 0.",
      "Bei ΔG = 0 befindet sich die Reaktion im Gleichgewicht.",
      "Eine exotherme Reaktion ist immer spontan.",
      "Die Gibbs-Energie verknüpft Enthalpie und Entropie.",
    ],
    3,
    "Eine exotherme Reaktion (ΔH < 0) ist NICHT immer spontan. Wenn die Entropieänderung stark negativ ist (T · ΔS stark positiv subtrahiert), kann ΔG trotz negativem ΔH positiv werden. Spontanität erfordert ΔG < 0.",
    "schwer",
    ["gibbs-energie", "spontanitaet"]
  ),




  wif(
    "ch-falsch2-039",
    "chem-kap4",
    "Welche Aussage zu Redox-Reaktionen ist FALSCH?",
    [
      "Bei einer Oxidation werden Elektronen abgegeben.",
      "Bei einer Reduktion werden Elektronen aufgenommen.",
      "Oxidation und Reduktion treten immer gemeinsam auf.",
      "Das Oxidationsmittel wird selbst reduziert.",
      "Ein Reduktionsmittel hat nach der Reaktion eine niedrigere Oxidationszahl.",
    ],
    4,
    "Ein Reduktionsmittel gibt Elektronen ab (wird oxidiert) und hat nach der Reaktion eine HÖHERE Oxidationszahl, nicht eine niedrigere.",
    "mittel",
    ["redox", "oxidationsmittel"]
  ),

  wif(
    "ch-falsch2-040",
    "chem-kap4",
    "Welche Aussage zur Elektrolyse ist FALSCH?",
    [
      "Bei der Elektrolyse wird elektrische Energie in chemische Energie umgewandelt.",
      "An der Kathode findet Reduktion statt.",
      "An der Anode findet Oxidation statt.",
      "Die Elektrolyse von Wasser liefert an der Kathode Sauerstoff.",
      "Zur Elektrolyse wird eine externe Spannungsquelle benötigt.",
    ],
    3,
    "Bei der Elektrolyse von Wasser entsteht an der Kathode WASSERSTOFF (H₂), nicht Sauerstoff. Sauerstoff (O₂) entsteht an der Anode durch Oxidation von Wasser.",
    "leicht",
    ["elektrolyse", "wasserstoff"]
  ),

  // ─── chem-kap5: Anorganische Chemie (10 Fragen) ──────────────────

  wif(
    "ch-falsch2-041",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Säuren nach Brønsted ist FALSCH?",
    [
      "Säuren sind Protonendonatoren.",
      "HCl ist eine starke Säure.",
      "Essigsäure (CH₃COOH) ist eine schwache Säure.",
      "Eine starke Säure hat einen hohen pKₛ-Wert.",
      "Wasser kann sowohl als Säure als auch als Base reagieren (Ampholyt).",
    ],
    3,
    "Eine starke Säure hat einen NIEDRIGEN (negativen) pKₛ-Wert, nicht einen hohen. Je kleiner der pKₛ, desto stärker die Säure (z. B. HCl: pKₛ ≈ −6).",
    "leicht",
    ["saeure-base", "pks"]
  ),

  wif(
    "ch-falsch2-042",
    "chem-kap5",
    "Welche Aussage über Salze ist FALSCH?",
    [
      "Salze bestehen aus Kationen und Anionen.",
      "NaCl entsteht aus der Reaktion von Na mit Cl₂.",
      "Salze leiten im festen Zustand den elektrischen Strom.",
      "Viele Salze lösen sich in Wasser unter Dissoziation.",
      "Das Löslichkeitsprodukt Kₛₚ beschreibt das Gleichgewicht bei schwerlöslichen Salzen.",
    ],
    2,
    "Salze leiten im festen Zustand den elektrischen Strom NICHT, da die Ionen im Kristallgitter fixiert sind. Nur in Lösung oder als Schmelze können sich die Ionen frei bewegen und Strom leiten.",
    "leicht",
    ["salze", "leitfaehigkeit"]
  ),


  wif(
    "ch-falsch2-044",
    "chem-kap5",
    "Welche Aussage über die Halogene (Gruppe 17) ist FALSCH?",
    [
      "Fluor ist das elektronegativste Element.",
      "Chlor ist bei Raumtemperatur ein gelbgrünes Gas.",
      "Brom ist bei Raumtemperatur ein Feststoff.",
      "Iod sublimiert leicht und bildet violette Dämpfe.",
      "Halogene bilden mit Metallen Ionenverbindungen (Halogenide).",
    ],
    2,
    "Brom ist bei Raumtemperatur eine rotbraune FLÜSSIGKEIT (neben Quecksilber eines der wenigen bei RT flüssigen Elemente), kein Feststoff.",
    "leicht",
    ["halogene", "aggregatzustand"]
  ),

  wif(
    "ch-falsch2-045",
    "chem-kap5",
    "Welche der folgenden Aussagen zu Kohlenstoffdioxid ist FALSCH?",
    [
      "CO₂ ist ein lineares Molekül.",
      "CO₂ löst sich in Wasser zu Kohlensäure (H₂CO₃).",
      "CO₂ ist ein polares Molekül.",
      "CO₂ entsteht bei der Verbrennung organischer Stoffe.",
      "In der Atmosphäre wirkt CO₂ als Treibhausgas.",
    ],
    2,
    "CO₂ ist ein UNPOLARES Molekül, obwohl die C=O-Bindungen polar sind. Die Dipolmomente heben sich aufgrund der linearen Symmetrie gegenseitig auf.",
    "mittel",
    ["kohlenstoffdioxid", "polaritaet"]
  ),

  wif(
    "ch-falsch2-046",
    "chem-kap5",
    "Welche Aussage zu Schwefelsäure (H₂SO₄) ist FALSCH?",
    [
      "Schwefelsäure ist eine zweiprotonige Säure.",
      "Konzentrierte Schwefelsäure wirkt hygroskopisch.",
      "Schwefelsäure ist eine starke Säure (bezüglich der ersten Protolysestufe).",
      "Schwefelsäure wird im Haber-Bosch-Verfahren hergestellt.",
      "Verdünnte Schwefelsäure reagiert mit unedlen Metallen unter Wasserstoffentwicklung.",
    ],
    3,
    "Schwefelsäure wird im KONTAKTVERFAHREN hergestellt, nicht im Haber-Bosch-Verfahren. Das Haber-Bosch-Verfahren dient der Synthese von Ammoniak (NH₃).",
    "mittel",
    ["schwefelsaeure", "kontaktverfahren"]
  ),

  wif(
    "ch-falsch2-047",
    "chem-kap5",
    "Welche Aussage über die Alkalimetalle ist FALSCH?",
    [
      "Alkalimetalle reagieren heftig mit Wasser unter Bildung von Laugen und Wasserstoff.",
      "Die Reaktivität der Alkalimetalle nimmt von oben nach unten in der Gruppe zu.",
      "Alkalimetalle werden unter Petroleum aufbewahrt.",
      "Alkalimetalle haben hohe Elektronegativitätswerte.",
      "Natrium hat die Elektronenkonfiguration [Ne] 3s¹.",
    ],
    3,
    "Alkalimetalle haben NIEDRIGE Elektronegativitätswerte (z. B. Na: 0,93; K: 0,82), da sie ihr Valenzelektron leicht abgeben. Sie gehören zu den am wenigsten elektronegativen Elementen.",
    "leicht",
    ["alkalimetalle", "elektronegativitaet"]
  ),

  wif(
    "ch-falsch2-048",
    "chem-kap5",
    "Welche Aussage über Stickstoff und seine Verbindungen ist FALSCH?",
    [
      "N₂ hat eine stabile Dreifachbindung.",
      "Ammoniak (NH₃) ist eine schwache Base.",
      "Salpetersäure (HNO₃) ist ein starkes Oxidationsmittel.",
      "Stickstoff kommt in der Atmosphäre als N₃ vor.",
      "Ammoniumsalze entstehen aus der Reaktion von Ammoniak mit Säuren.",
    ],
    3,
    "Elementarer Stickstoff kommt in der Atmosphäre als N₂ (zweiatomig) vor, NICHT als N₃. N₃ existiert nur als Azid-Ion (N₃⁻).",
    "leicht",
    ["stickstoff", "atmosphaere"]
  ),


  wif(
    "ch-falsch2-050",
    "chem-kap5",
    "Welche Aussage über Phosphorsäure (H₃PO₄) ist FALSCH?",
    [
      "Phosphorsäure ist eine dreiprotonige Säure.",
      "Die drei Protolysestufen haben unterschiedliche pKₛ-Werte.",
      "Phosphorsäure ist eine starke Säure in allen drei Stufen.",
      "Phosphat (PO₄³⁻) spielt eine wichtige Rolle in biologischen Systemen (ATP, DNA).",
      "Die Salze der Phosphorsäure heißen Phosphate.",
    ],
    2,
    "Phosphorsäure ist NICHT in allen drei Stufen eine starke Säure. Nur die erste Stufe ist mittelstark (pKₛ₁ = 2,15), die zweite (pKₛ₂ = 7,2) und dritte (pKₛ₃ = 12,4) sind schwach.",
    "schwer",
    ["phosphorsaeure", "protolysestufen"]
  ),

  // ─── chem-kap6/chem-kap3: Organische Chemie und Bindung (10 Fragen)



  wif(
    "ch-falsch2-053",
    "chem-kap6",
    "Welche Aussage über Aminosäuren ist FALSCH?",
    [
      "Aminosäuren besitzen eine Amino- und eine Carboxylgruppe.",
      "Am isoelektrischen Punkt liegt die Aminosäure als Zwitterion vor.",
      "Alle proteinogenen Aminosäuren sind D-Aminosäuren.",
      "Peptidbindungen verknüpfen Aminosäuren zu Proteinen.",
      "Essentielle Aminosäuren müssen mit der Nahrung aufgenommen werden.",
    ],
    2,
    "Alle proteinogenen Aminosäuren sind L-Aminosäuren, NICHT D-Aminosäuren. Die L-Konfiguration ist die in der Natur vorherrschende Form.",
    "mittel",
    ["aminosaeuren", "chiralitaet"]
  ),


  wif(
    "ch-falsch2-055",
    "chem-kap3",
    "Welche Aussage über die Metallbindung ist FALSCH?",
    [
      "Im Metallgitter sind Kationen von einem Elektronengas umgeben.",
      "Die metallische Bindung erklärt die elektrische Leitfähigkeit von Metallen.",
      "Metalle sind verformbar, weil die Gitterschichten gegeneinander gleiten können.",
      "Die metallische Bindung wird schwächer mit zunehmender Zahl der Valenzelektronen.",
      "Legierungen sind Mischungen aus verschiedenen Metallen.",
    ],
    3,
    "Die metallische Bindung wird NICHT generell schwächer mit zunehmender Zahl der Valenzelektronen. Mehr Valenzelektronen können die Bindung sogar stärken (z. B. höherer Schmelzpunkt von Übergangsmetallen). Die Bindungsstärke hängt von mehreren Faktoren ab.",
    "schwer",
    ["metallbindung", "valenzelektronen"]
  ),


  wif(
    "ch-falsch2-057",
    "chem-kap6",
    "Welche der folgenden Aussagen zu Estern ist FALSCH?",
    [
      "Ester entstehen durch Reaktion von Carbonsäure mit Alkohol (Kondensation).",
      "Die Veresterung ist eine Gleichgewichtsreaktion.",
      "Ester haben oft einen charakteristischen fruchtigen Geruch.",
      "Die Hydrolyse eines Esters liefert zwei Alkohole.",
      "Fette sind Triester des Glycerins mit Fettsäuren.",
    ],
    3,
    "Die Hydrolyse eines Esters liefert eine CARBONSÄURE und einen ALKOHOL, nicht zwei Alkohole. Die Esterbindung wird zwischen der Carboxylgruppe der Säure und der Hydroxylgruppe des Alkohols gespalten.",
    "mittel",
    ["ester", "hydrolyse"]
  ),

  wif(
    "ch-falsch2-058",
    "chem-kap6",
    "Welche Aussage zu Aromaten ist FALSCH?",
    [
      "Benzol hat ein delokalisiertes π-Elektronensystem.",
      "Aromaten erfüllen die Hückel-Regel (4n + 2 π-Elektronen).",
      "Benzol geht bevorzugt Additionsreaktionen ein.",
      "Alle C−C-Bindungen im Benzol sind gleich lang.",
      "Toluol ist ein methylsubstituiertes Benzol.",
    ],
    2,
    "Benzol geht bevorzugt SUBSTITUTIONSREAKTIONEN ein (elektrophile aromatische Substitution), nicht Additionsreaktionen. Das aromatische π-System ist so stabil, dass Substitution (Erhalt der Aromatizität) gegenüber Addition bevorzugt wird.",
    "mittel",
    ["aromaten", "benzol"]
  ),


  wif(
    "ch-falsch2-060",
    "chem-kap6",
    "Welche Aussage über die Isomerie organischer Verbindungen ist FALSCH?",
    [
      "Konstitutionsisomere haben die gleiche Summenformel, aber unterschiedliche Verknüpfung.",
      "Enantiomere verhalten sich wie Bild und Spiegelbild.",
      "cis-trans-Isomerie tritt an Doppelbindungen auf.",
      "Alle Isomere haben identische physikalische Eigenschaften.",
      "Diastereomere sind Stereoisomere, die keine Enantiomere sind.",
    ],
    3,
    "Isomere haben NICHT identische physikalische Eigenschaften. Konstitutionsisomere unterscheiden sich deutlich in Siedepunkt, Schmelzpunkt etc. Auch Diastereomere haben unterschiedliche physikalische Eigenschaften. Nur Enantiomere haben identische achiral-physikalische Eigenschaften.",
    "schwer",
    ["isomerie", "physikalische-eigenschaften"]
  ),
];
