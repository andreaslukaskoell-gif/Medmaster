/**
 * Smart-Linking: Mapping von Begriffen (Keywords) zu Kapitel-IDs.
 * Beim Anzeigen von Content werden diese Begriffe automatisch verlinkt;
 * Hover zeigt eine Kurzbeschreibung, Klick navigiert zum Kapitel.
 *
 * Erweiterung: Einfach weitere Einträge hinzufügen – die App verlinkt sie automatisch.
 */

export type SubjectId = "biologie" | "chemie" | "physik" | "mathematik";

export interface GlossaryEntry {
  /** Begriff, der im Text ersetzt wird (exakte Schreibweise) */
  term: string;
  /** BMS-Kapitel-ID (z.B. "bio-kap1") */
  chapterId: string;
  subject: SubjectId;
  /** Kurzbeschreibung für Tooltip */
  description: string;
}

/** Glossar: Begriff → Kapitel + Beschreibung. Längere Begriffe zuerst, damit z.B. "Zellmembran" vor "Membran" matcht. */
export const glossaryEntries: GlossaryEntry[] = [
  // ============= BIOLOGIE – Die Zelle (bio-kap1) =============
  { term: "Endoplasmatisches Retikulum", chapterId: "bio-kap1", subject: "biologie", description: "Zellorganelle für Transport und Stoffwechsel." },
  { term: "Zellorganellen", chapterId: "bio-kap1", subject: "biologie", description: "Funktionelle Einheiten innerhalb der Zelle." },
  { term: "Zellorganelle", chapterId: "bio-kap1", subject: "biologie", description: "Funktionelle Einheit innerhalb der Zelle." },
  { term: "Zellmembran", chapterId: "bio-kap1", subject: "biologie", description: "Äußere Hülle der Zelle; regelt den Stoffaustausch." },
  { term: "Zellstruktur", chapterId: "bio-kap1", subject: "biologie", description: "Aufbau der Zelle." },
  { term: "Mitochondrien", chapterId: "bio-kap1", subject: "biologie", description: "Kraftwerke der Zelle; Ort der Zellatmung." },
  { term: "Mitochondrium", chapterId: "bio-kap1", subject: "biologie", description: "Kraftwerk der Zelle; Ort der Zellatmung." },
  { term: "Lysosomen", chapterId: "bio-kap1", subject: "biologie", description: "Verdauungsorganelle der Zelle." },
  { term: "Lysosom", chapterId: "bio-kap1", subject: "biologie", description: "Verdauungsorganell der Zelle." },
  { term: "Ribosomen", chapterId: "bio-kap1", subject: "biologie", description: "Orte der Proteinbiosynthese." },
  { term: "Ribosom", chapterId: "bio-kap1", subject: "biologie", description: "Ort der Proteinbiosynthese." },
  { term: "Golgi-Apparat", chapterId: "bio-kap1", subject: "biologie", description: "Verpackung und Versand von Proteinen." },
  { term: "Cytoskelett", chapterId: "bio-kap1", subject: "biologie", description: "Proteinnetzwerk, das der Zelle Form und Beweglichkeit gibt." },
  { term: "Chloroplasten", chapterId: "bio-kap1", subject: "biologie", description: "Plastiden der Pflanzenzelle; Ort der Photosynthese." },
  { term: "Chloroplast", chapterId: "bio-kap1", subject: "biologie", description: "Plastid der Pflanzenzelle; Ort der Photosynthese." },
  { term: "Zytoplasma", chapterId: "bio-kap1", subject: "biologie", description: "Zellflüssigkeit zwischen Zellkern und Zellmembran." },
  { term: "Zellkern", chapterId: "bio-kap1", subject: "biologie", description: "Steuerzentrale der Zelle; enthält die DNA." },
  { term: "Zellwand", chapterId: "bio-kap1", subject: "biologie", description: "Starre Hülle bei Pflanzen- und Pilzzellen außerhalb der Membran." },
  { term: "Vakuole", chapterId: "bio-kap1", subject: "biologie", description: "Speicherorganell; bei Pflanzenzellen turgorgebend." },
  { term: "Vesikel", chapterId: "bio-kap1", subject: "biologie", description: "Membrangebundene Transportbläschen innerhalb der Zelle." },
  { term: "Zellen", chapterId: "bio-kap1", subject: "biologie", description: "Kleinste lebende Einheiten." },
  { term: "Zelle", chapterId: "bio-kap1", subject: "biologie", description: "Kleinste lebende Einheit." },

  // ============= BIOLOGIE – Gewebe (bio-kap2) =============
  { term: "Muskelgewebe", chapterId: "bio-kap2", subject: "biologie", description: "Gewebe für Kontraktion und Bewegung." },
  { term: "Nervengewebe", chapterId: "bio-kap2", subject: "biologie", description: "Gewebe aus Neuronen und Gliazellen für Signalverarbeitung." },
  { term: "Epithelgewebe", chapterId: "bio-kap2", subject: "biologie", description: "Oberflächengewebe mit Schutzfunktion." },
  { term: "Bindegewebe", chapterId: "bio-kap2", subject: "biologie", description: "Stützgewebe mit Kollagen; verbindet andere Gewebe." },

  // ============= BIOLOGIE – Anatomie & Physiologie (bio-kap3) =============
  { term: "Neurotransmitter", chapterId: "bio-kap3", subject: "biologie", description: "Botenstoffe zur chemischen Signalübertragung an Synapsen." },
  { term: "Hämoglobin", chapterId: "bio-kap3", subject: "biologie", description: "Sauerstofftransportprotein in roten Blutkörperchen." },
  { term: "Aktionspotential", chapterId: "bio-kap3", subject: "biologie", description: "Elektrischer Impuls entlang einer Nervenzelle." },
  { term: "Synapse", chapterId: "bio-kap3", subject: "biologie", description: "Kontaktstelle zwischen zwei Neuronen oder Neuron und Muskel." },

  // ============= BIOLOGIE – Klassische Genetik (bio-kap5) =============
  { term: "Phänotyp", chapterId: "bio-kap5", subject: "biologie", description: "Äußeres Erscheinungsbild; resultiert aus Genotyp + Umwelt." },
  { term: "Genotyp", chapterId: "bio-kap5", subject: "biologie", description: "Gesamtheit der genetischen Anlagen eines Organismus." },
  { term: "Allele", chapterId: "bio-kap5", subject: "biologie", description: "Alternative Formen eines Gens; bestimmen das Phänotyp." },
  { term: "Allel", chapterId: "bio-kap5", subject: "biologie", description: "Alternative Form eines Gens; dominant oder rezessiv." },

  // ============= BIOLOGIE – Molekulargenetik (bio-kap6) =============
  { term: "Transkription", chapterId: "bio-kap6", subject: "biologie", description: "Umschreibung von DNA in mRNA im Zellkern." },
  { term: "Translation", chapterId: "bio-kap6", subject: "biologie", description: "Synthese eines Proteins nach mRNA-Vorlage am Ribosom." },
  { term: "mRNA", chapterId: "bio-kap6", subject: "biologie", description: "Boten-RNA; überträgt genetische Info vom Kern zu den Ribosomen." },
  { term: "RNA", chapterId: "bio-kap6", subject: "biologie", description: "Ribonukleinsäure; vermittelt zwischen DNA und Protein." },
  { term: "DNA", chapterId: "bio-kap6", subject: "biologie", description: "Desoxyribonukleinsäure; Träger der genetischen Information." },
  { term: "Codon", chapterId: "bio-kap6", subject: "biologie", description: "Drei-Basen-Folge der mRNA, die eine Aminosäure codiert." },
  { term: "Mutation", chapterId: "bio-kap6", subject: "biologie", description: "Dauerhafte Veränderung der DNA-Sequenz." },

  // ============= BIOLOGIE – Entwicklungsbiologie (bio-kap4) =============
  { term: "Entwicklungsbiologie", chapterId: "bio-kap4", subject: "biologie", description: "Lehre von der Individualentwicklung und Ontogenese." },

  // ============= BIOLOGIE – Methoden der Genetik (bio-kap7) =============
  { term: "PCR-Verfahren", chapterId: "bio-kap7", subject: "biologie", description: "Polymerase-Kettenreaktion zur DNA-Vervielfältigung." },

  // ============= BIOLOGIE – Humangenetik (bio-kap8) =============
  { term: "Humangenetik", chapterId: "bio-kap8", subject: "biologie", description: "Genetik des Menschen; Analyse menschlicher Erbanlagen." },

  // ============= BIOLOGIE – Evolution (bio-kap9) =============
  { term: "Evolution", chapterId: "bio-kap9", subject: "biologie", description: "Veränderung von Organismen über Generationen hinweg." },

  // ============= BIOLOGIE – Ökologie (bio-kap10) =============
  { term: "Ökologie", chapterId: "bio-kap10", subject: "biologie", description: "Lehre von Organismen und ihrer Umwelt." },

  // ============= BIOLOGIE – Immunologie (bio-kap11) =============
  { term: "Antikörper", chapterId: "bio-kap11", subject: "biologie", description: "Immunoglobuline; Proteine zur Antigen-Erkennung." },

  // ============= CHEMIE – Atombau (chem-kap1) =============
  { term: "Elektronen", chapterId: "chem-kap1", subject: "chemie", description: "Negativ geladene Teilchen; bilden die Atomhülle." },
  { term: "Elektron", chapterId: "chem-kap1", subject: "chemie", description: "Negativ geladenes Teilchen in der Atomhülle." },
  { term: "Proton", chapterId: "chem-kap1", subject: "chemie", description: "Positiv geladenes Teilchen im Atomkern; Ordnungszahl." },
  { term: "Neutron", chapterId: "chem-kap1", subject: "chemie", description: "Ungeladenes Teilchen im Atomkern; bestimmt Isotope." },

  // ============= CHEMIE – Mikrokosmos (chem-kap2) =============
  { term: "Mikrokosmos", chapterId: "chem-kap2", subject: "chemie", description: "Die Welt der kleinsten Teilchen und Atome." },

  // ============= CHEMIE – Gasgesetze (chem-kap3) =============
  { term: "Gasgesetze", chapterId: "chem-kap3", subject: "chemie", description: "Gesetze der idealen Gase; Boyle, Charles, Gay-Lussac." },

  // ============= CHEMIE – Aggregatzustände (chem-kap4) =============
  { term: "Aggregatzustände", chapterId: "chem-kap4", subject: "chemie", description: "Fest, flüssig, gasförmig; Phasenzustände der Materie." },

  // ============= CHEMIE – Periodensystem (chem-kap5) =============
  { term: "Periodensystem", chapterId: "chem-kap5", subject: "chemie", description: "Systematische Ordnung aller chemischen Elemente." },

  // ============= CHEMIE – Chemische Bindung (chem-kap6) =============
  { term: "Ionenbindung", chapterId: "chem-kap6", subject: "chemie", description: "Elektrostatische Anziehung zwischen Kation und Anion." },
  { term: "Kovalente Bindung", chapterId: "chem-kap6", subject: "chemie", description: "Chemische Bindung durch gemeinsame Elektronenpaare." },

  // ============= CHEMIE – Chemische Reaktionen (chem-kap7) =============
  { term: "Katalysator", chapterId: "chem-kap7", subject: "chemie", description: "Stoff, der die Aktivierungsenergie einer Reaktion senkt." },

  // ============= CHEMIE – Chemisches Gleichgewicht (chem-kap8) =============
  { term: "Gleichgewicht", chapterId: "chem-kap8", subject: "chemie", description: "Dynamisches chemisches Gleichgewicht; Hin- und Rückreaktion." },

  // ============= CHEMIE – Säure-Base (chem-kap10) =============
  { term: "pH-Wert", chapterId: "chem-kap10", subject: "chemie", description: "Maß für den Säure- oder Basencharakter einer Lösung." },
  { term: "Säure", chapterId: "chem-kap10", subject: "chemie", description: "Protonendonator; gibt H⁺-Ionen ab." },
  { term: "Base", chapterId: "chem-kap10", subject: "chemie", description: "Protonenakzeptor; nimmt H⁺-Ionen auf." },

  // ============= CHEMIE – Redox-Reaktionen (chem-kap11) =============
  { term: "Reduktion", chapterId: "chem-kap11", subject: "chemie", description: "Aufnahme von Elektronen oder Abgabe von Sauerstoff." },
  { term: "Oxidation", chapterId: "chem-kap11", subject: "chemie", description: "Abgabe von Elektronen oder Aufnahme von Sauerstoff." },

  // ============= CHEMIE – Naturstoffe (chem-kap13) =============
  { term: "Proteine", chapterId: "chem-kap13", subject: "chemie", description: "Makromoleküle aus Aminosäuren; Struktur- und Funktionsmoleküle." },
  { term: "Protein", chapterId: "chem-kap13", subject: "chemie", description: "Makromolekül aus Aminosäuren; vielfältige Zellfunktionen." },
  { term: "Aminosäuren", chapterId: "chem-kap13", subject: "chemie", description: "Grundbausteine der Proteine; 20 proteinogene AS." },
  { term: "Aminosäure", chapterId: "chem-kap13", subject: "chemie", description: "Grundbaustein der Proteine; enthält Amino- und Carboxylgruppe." },

  // ============= PHYSIK – Größen und Einheiten (phys-kap1) =============
  { term: "Größen", chapterId: "phys-kap1", subject: "physik", description: "Physikalische Größen; messbare Eigenschaften der Natur." },

  // ============= PHYSIK – Mechanik (phys-kap2) =============
  { term: "Wellenlänge", chapterId: "phys-kap2", subject: "physik", description: "Räumliche Periode einer Welle; λ = c/f." },
  { term: "Frequenz", chapterId: "phys-kap2", subject: "physik", description: "Anzahl der Schwingungen pro Sekunde; Einheit Hertz." },
  { term: "Druck", chapterId: "phys-kap2", subject: "physik", description: "Kraft pro Fläche; p = F/A, Einheit Pascal." },
  { term: "Masse", chapterId: "phys-kap2", subject: "physik", description: "Maß für Trägheit; unveränderlich (nicht Gewichtskraft!)." },
  { term: "Kraft", chapterId: "phys-kap2", subject: "physik", description: "Vektorgröße; F = m·a (Newton)." },

  // ============= PHYSIK – Schwingungen und Wellen (phys-kap3) =============
  { term: "Schwingungen", chapterId: "phys-kap3", subject: "physik", description: "Periodische Bewegungen um ein Gleichgewicht." },

  // ============= PHYSIK – Wärmelehre (phys-kap4) =============
  { term: "Wärmelehre", chapterId: "phys-kap4", subject: "physik", description: "Thermodynamik; Lehre von Wärmeprozessen." },

  // ============= PHYSIK – Elektrizitätslehre (phys-kap5) =============
  { term: "Spannung", chapterId: "phys-kap5", subject: "physik", description: "Elektrische Spannung; U = R·I, Einheit Volt." },
  { term: "Strom", chapterId: "phys-kap5", subject: "physik", description: "Elektrischer Strom; I = U/R, Einheit Ampere." },
  { term: "Widerstand", chapterId: "phys-kap5", subject: "physik", description: "Elektrischer Widerstand; R = U/I, Einheit Ohm." },

  // ============= PHYSIK – Optik (phys-kap6) =============
  { term: "Optik", chapterId: "phys-kap6", subject: "physik", description: "Lehre von Licht und optischen Phänomenen." },

  // ============= PHYSIK – Atomphysik (phys-kap7) =============
  { term: "Atomphysik", chapterId: "phys-kap7", subject: "physik", description: "Physik von Atomen und Kernen." },

  // ============= MATHEMATIK – Zehnerpotenzen (math-kap1) =============
  { term: "Zehnerpotenzen", chapterId: "math-kap1", subject: "mathematik", description: "Exponentialschreibweise für große und kleine Zahlen." },

  // ============= MATHEMATIK – Algebra (math-kap2) =============
  { term: "Algebra", chapterId: "math-kap2", subject: "mathematik", description: "Rechengesetze und Gleichungslösungen." },

  // ============= MATHEMATIK – Geometrie (math-kap3) =============
  { term: "Geometrie", chapterId: "math-kap3", subject: "mathematik", description: "Lehre von Figuren, Formen und Raum." },

  // ============= MATHEMATIK – Einheiten (math-kap4) =============
  { term: "Einheiten", chapterId: "math-kap4", subject: "mathematik", description: "SI-Einheiten und Umrechnungen." },

  // ============= MATHEMATIK – Funktionen (math-kap5) =============
  { term: "Logarithmus", chapterId: "math-kap5", subject: "mathematik", description: "Umkehrfunktion der Exponentialfunktion; log_b(x)." },
  { term: "Integral", chapterId: "math-kap5", subject: "mathematik", description: "Flächeninhalt unter einer Kurve; Umkehrung der Ableitung." },
  { term: "Ableitung", chapterId: "math-kap5", subject: "mathematik", description: "Momentane Änderungsrate; Steigung der Tangente." },

  // ============= MATHEMATIK – Vektorrechnung (math-kap6) =============
  { term: "Matrix", chapterId: "math-kap6", subject: "mathematik", description: "Rechteckiges Zahlenschema; für lineare Abbildungen." },
  { term: "Vektor", chapterId: "math-kap6", subject: "mathematik", description: "Mathematisches Objekt mit Betrag und Richtung." },

  // ============= BIOLOGIE – Zellteilung (Mitose/Meiose) =============
  { term: "Zentromere", chapterId: "bio-kap5", subject: "biologie", description: "Engstellen der Chromosomen; Ansatzpunkte der Spindelfasern." },
  { term: "Zentromer", chapterId: "bio-kap5", subject: "biologie", description: "Engstelle des Chromosoms; Ansatzpunkt der Spindelfasern." },
  { term: "Chromatin", chapterId: "bio-kap5", subject: "biologie", description: "Unkondensiertes DNA-Protein-Gemisch im Zellkern." },
  { term: "Chromosomen", chapterId: "bio-kap5", subject: "biologie", description: "DNA-Protein-Komplexe; Träger der Erbinformation." },
  { term: "Chromosom", chapterId: "bio-kap5", subject: "biologie", description: "DNA-Protein-Komplex; Träger der Erbinformation." },
  { term: "Meiose", chapterId: "bio-kap5", subject: "biologie", description: "Reifeteilung zur Bildung von Keimzellen (Haploidie)." },
  { term: "Mitose", chapterId: "bio-kap5", subject: "biologie", description: "Kernteilung mit Bildung zweier identischer Tochterzellen." },

  // ============= BIOLOGIE – Stoffwechsel =============
  { term: "Photosynthese", chapterId: "bio-kap1", subject: "biologie", description: "Umwandlung von Lichtenergie in chemische Energie (Glukose)." },
  { term: "Zellatmung", chapterId: "bio-kap1", subject: "biologie", description: "Aerober Abbau von Glukose zu CO₂, H₂O und ATP." },
  { term: "Glykolyse", chapterId: "bio-kap1", subject: "biologie", description: "Abbau von Glukose zu Pyruvat im Zytoplasma." },
  { term: "Enzyme", chapterId: "bio-kap1", subject: "biologie", description: "Biologische Katalysatoren; ermöglichen Stoffwechselreaktionen." },
  { term: "Enzym", chapterId: "bio-kap1", subject: "biologie", description: "Biologischer Katalysator; beschleunigt biochemische Reaktionen." },
  { term: "ATP", chapterId: "bio-kap1", subject: "biologie", description: "Adenosintriphosphat; universeller Energieträger der Zelle." },
];

/** Escape für RegExp (Sonderzeichen) */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Globale RegExp (gecacht) zur Performance-Optimierung */
let cachedRegex: RegExp | null = null;

/**
 * Erstelle RegExp: Alle Glossar-Begriffe, längste zuerst, als alternatives Muster.
 * Sortierung = längste zuerst bereits erfolgt in der `glossaryEntries`-Liste.
 */
function buildGlossaryRegex(): RegExp {
  if (cachedRegex) return cachedRegex;

  const pattern = glossaryEntries
    .map((entry) => escapeRegex(entry.term))
    .join("|");

  cachedRegex = new RegExp(`\\b(${pattern})\\b`, "g");
  return cachedRegex;
}

/**
 * Ersetze alle Glossar-Begriffe in Text durch Links zu den Kapiteln.
 * Liefert ein Array von Text- und Link-Elementen für React-Rendering.
 */
export function linkGlossaryTerms(
  text: string
): (string | { term: string; chapterId: string; description: string })[] {
  const regex = buildGlossaryRegex();
  const result: (string | { term: string; chapterId: string; description: string })[] =
    [];
  let lastIndex = 0;

  let match;
  // Reset regex
  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    const matchText = match[0];
    const beforeText = text.substring(lastIndex, match.index);

    // Push Text vor Link
    if (beforeText.length > 0) {
      result.push(beforeText);
    }

    // Find entry
    const entry = glossaryEntries.find(
      (e) => e.term.toLowerCase() === matchText.toLowerCase()
    );

    if (entry) {
      result.push({
        term: entry.term,
        chapterId: entry.chapterId,
        description: entry.description,
      });
    } else {
      result.push(matchText);
    }

    lastIndex = regex.lastIndex;
  }

  // Push Rest
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// Smart-Link API (verwendet von SubchapterContent.tsx)
// ─────────────────────────────────────────────────────────────────────────────

/** Vorberechneter Eintrag mit Pfad für React-Rendering. */
export interface KeywordLinkEntry {
  term: string;
  path: string;
  description: string;
}

/**
 * Ersetzt Glossar-Begriffe im Text durch Markdown-Links der Form
 * `[Begriff](/bms/... "Begriff")` – so dass buildMarkdownComponents sie
 * als SmartLink rendern kann.
 * Wenn keine Einträge übergeben → Text unverändert zurückgeben.
 */
export function processTextForSmartLinks(
  text: string,
  _pathFn: (chapterId: string) => string,
  entries?: KeywordLinkEntry[]
): string {
  if (!entries?.length) return text;
  // Längere Begriffe zuerst, damit "Zellmembran" vor "Membran" matcht
  const sorted = [...entries].sort((a, b) => b.term.length - a.term.length);
  let result = text;
  for (const entry of sorted) {
    const esc = entry.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Nur außerhalb bestehender Markdown-Links ersetzen
    result = result.replace(
      new RegExp(`(?<!\\[)\\b${esc}\\b(?![^[]*\\])`, "g"),
      `[${entry.term}](${entry.path} "${entry.term}")`
    );
  }
  return result;
}

/** Prüft, ob ein Link-Title einem Glossar-Begriff entspricht. */
export function isKeywordLinkTitle(title: string): boolean {
  return glossaryEntries.some((e) => e.term === title);
}

/** Liefert die Beschreibung zu einem Glossar-Begriff (für Tooltip). */
export function getKeywordLinkDescription(title: string): string | undefined {
  return glossaryEntries.find((e) => e.term === title)?.description;
}
