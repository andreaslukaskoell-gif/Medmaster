/**
 * Biologie Typ K Neu 5 — 75 Kombinationsaufgaben (IDs bio-typk-new5-001 bis -075).
 * Schwerpunkte: Vegetatives NS, Muskulatur, Reproduktion, Bioethik/Genetik,
 *               Verhalten/Ökologie, Wasser-/Elektrolythaushalt, Säure-Base-Haushalt.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const biologieTypKNew5: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–011: VEGETATIVES NERVENSYSTEM ────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 Grundlagen VNS (leicht) ───
  {
    id: "bio-typk-new5-001",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum vegetativen Nervensystem sind richtig?",
    aussagen: [
      { nr: 1, text: "Das vegetative Nervensystem steuert unwillkürliche Körperfunktionen wie Herzschlag und Verdauung.", korrekt: true },
      { nr: 2, text: "Es besteht aus Sympathikus, Parasympathikus und enterischem Nervensystem.", korrekt: true },
      { nr: 3, text: "Das somatische Nervensystem gehört ebenfalls zum vegetativen Nervensystem.", korrekt: false },
      { nr: 4, text: "Die meisten inneren Organe werden dual innerviert (Sympathikus und Parasympathikus).", korrekt: true },
      { nr: 5, text: "Das enterische Nervensystem wird auch als \"Bauchhirn\" bezeichnet.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Das somatische Nervensystem steuert willkürliche Bewegungen und gehört nicht zum VNS (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 002 Sympathikus (mittel) ───
  {
    id: "bio-typk-new5-002",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum Sympathikus sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Sympathikus bewirkt eine Erweiterung der Pupillen (Mydriasis).", korrekt: true },
      { nr: 2, text: "Er steigert die Herzfrequenz und den Blutdruck.", korrekt: true },
      { nr: 3, text: "Der Sympathikus fördert die Verdauungstätigkeit (Peristaltik).", korrekt: false },
      { nr: 4, text: "Die präganglionären Neurone des Sympathikus liegen im thorakolumbalen Rückenmark.", korrekt: true },
      { nr: 5, text: "Noradrenalin ist der wichtigste postganglionäre Transmitter des Sympathikus.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Der Sympathikus hemmt die Verdauung; die Peristaltik wird vom Parasympathikus gefördert (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 003 Parasympathikus (mittel) ───
  {
    id: "bio-typk-new5-003",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum Parasympathikus sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Parasympathikus senkt die Herzfrequenz.", korrekt: true },
      { nr: 2, text: "Er verengt die Pupille (Miosis).", korrekt: true },
      { nr: 3, text: "Acetylcholin ist der Transmitter an prä- und postganglionären Synapsen des Parasympathikus.", korrekt: true },
      { nr: 4, text: "Der Nervus vagus (X. Hirnnerv) ist der längste parasympathische Nerv.", korrekt: true },
      { nr: 5, text: "Der Parasympathikus erweitert die Bronchien für eine bessere Sauerstoffzufuhr.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Parasympathikus verengt die Bronchien (Bronchokonstriktion); Erweiterung bewirkt der Sympathikus (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 004 Transmitter VNS (schwer) ───
  {
    id: "bio-typk-new5-004",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zu Neurotransmittern des vegetativen Nervensystems sind richtig?",
    aussagen: [
      { nr: 1, text: "Alle präganglionären Neurone (Sympathikus und Parasympathikus) setzen Acetylcholin frei.", korrekt: true },
      { nr: 2, text: "Postganglionäre sympathische Fasern zu den Schweißdrüsen setzen ausnahmsweise Acetylcholin frei.", korrekt: true },
      { nr: 3, text: "Adrenalin wird ausschließlich im Nebennierenmark als Hormon freigesetzt, nicht als Neurotransmitter.", korrekt: true },
      { nr: 4, text: "Muskarinrezeptoren vermitteln die Wirkung von Acetylcholin an den Endorganen des Parasympathikus.", korrekt: true },
      { nr: 5, text: "Nikotinrezeptoren kommen nur an der motorischen Endplatte vor, nicht im vegetativen Nervensystem.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nikotinrezeptoren kommen auch an vegetativen Ganglien vor (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 005 Fight-or-Flight (leicht) ───
  {
    id: "bio-typk-new5-005",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zur Stressreaktion (Fight-or-Flight) sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei Stress wird vermehrt Adrenalin aus dem Nebennierenmark freigesetzt.", korrekt: true },
      { nr: 2, text: "Die Herzfrequenz steigt und die Bronchien erweitern sich.", korrekt: true },
      { nr: 3, text: "Die Durchblutung der Skelettmuskulatur nimmt zu.", korrekt: true },
      { nr: 4, text: "Die Verdauungstätigkeit wird gesteigert, um Energie bereitzustellen.", korrekt: false },
      { nr: 5, text: "Glykogen wird in der Leber zu Glucose abgebaut (Glykogenolyse).", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Bei Stress wird die Verdauung gehemmt, nicht gesteigert (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 006 Nebennierenmark (mittel) ───
  {
    id: "bio-typk-new5-006",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum Nebennierenmark und Katecholaminen sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Nebennierenmark setzt etwa 80 % Adrenalin und 20 % Noradrenalin frei.", korrekt: true },
      { nr: 2, text: "Katecholamine werden aus der Aminosäure Tyrosin synthetisiert.", korrekt: true },
      { nr: 3, text: "Das Nebennierenmark ist funktionell ein sympathisches Ganglion.", korrekt: true },
      { nr: 4, text: "Adrenalin wirkt über α- und β-Adrenozeptoren.", korrekt: true },
      { nr: 5, text: "Das Nebennierenmark gehört zum Parasympathikus.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Das Nebennierenmark gehört zum Sympathikus, nicht zum Parasympathikus (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 007 VNS Organwirkungen (mittel) ───
  {
    id: "bio-typk-new5-007",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zu Organwirkungen des vegetativen Nervensystems sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Sympathikus hemmt die Insulinsekretion der Bauchspeicheldrüse.", korrekt: true },
      { nr: 2, text: "Der Parasympathikus fördert die Speichelsekretion (dünnflüssiger, enzymreicher Speichel).", korrekt: true },
      { nr: 3, text: "Der Sympathikus bewirkt eine Kontraktion des Detrusors (Harnblase) und damit Miktion.", korrekt: false },
      { nr: 4, text: "Der Parasympathikus steigert die Darmmotilität und fördert die Sekretion von Verdauungssäften.", korrekt: true },
      { nr: 5, text: "Der Sympathikus fördert die Lipolyse im Fettgewebe.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Der Detrusor wird vom Parasympathikus kontrahiert (Miktion); der Sympathikus erschlafft ihn (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 008 Vegetative Reflexe (schwer) ───
  {
    id: "bio-typk-new5-008",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zu vegetativen Reflexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Barorezeptorreflex reguliert kurzfristig den Blutdruck über Dehnungsrezeptoren im Karotissinus und Aortenbogen.", korrekt: true },
      { nr: 2, text: "Der Pupillenreflex (Lichtreflex) wird über parasympathische Fasern des N. oculomotorius vermittelt.", korrekt: true },
      { nr: 3, text: "Der Miktionsreflex wird rein willkürlich gesteuert und hat keine vegetative Komponente.", korrekt: false },
      { nr: 4, text: "Chemorezeptoren im Glomus caroticum registrieren den O₂-Partialdruck im Blut.", korrekt: true },
      { nr: 5, text: "Der peristaltische Reflex im Darm kann auch ohne zentrale Steuerung über das enterische Nervensystem ablaufen.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Der Miktionsreflex hat eine vegetative Komponente (Parasympathikus kontrahiert den Detrusor); nur der äußere Sphinkter ist willkürlich kontrolliert (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 009 Enterisches NS (mittel) ───
  {
    id: "bio-typk-new5-009",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum enterischen Nervensystem sind richtig?",
    aussagen: [
      { nr: 1, text: "Es enthält den Plexus myentericus (Auerbach) und den Plexus submucosus (Meissner).", korrekt: true },
      { nr: 2, text: "Der Plexus myentericus steuert hauptsächlich die Darmmotilität.", korrekt: true },
      { nr: 3, text: "Der Plexus submucosus reguliert vor allem die Sekretion und Durchblutung der Mukosa.", korrekt: true },
      { nr: 4, text: "Das enterische Nervensystem kann unabhängig vom ZNS arbeiten.", korrekt: true },
      { nr: 5, text: "Das enterische Nervensystem enthält etwa so viele Neurone wie das gesamte Rückenmark.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle Aussagen 1–5 sind richtig. Das enterische NS hat ca. 100 Mio. Neurone (ähnlich Rückenmark) und arbeitet weitgehend autonom.",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 010 Antagonismus Sympathikus/Parasympathikus (leicht) ───
  {
    id: "bio-typk-new5-010",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum Antagonismus von Sympathikus und Parasympathikus sind richtig?",
    aussagen: [
      { nr: 1, text: "Am Herzen wirken Sympathikus (Frequenzsteigerung) und Parasympathikus (Frequenzsenkung) antagonistisch.", korrekt: true },
      { nr: 2, text: "An der Pupille wirken sie antagonistisch: Sympathikus → Mydriasis, Parasympathikus → Miosis.", korrekt: true },
      { nr: 3, text: "An den Bronchien wirken sie antagonistisch: Sympathikus → Dilatation, Parasympathikus → Konstriktion.", korrekt: true },
      { nr: 4, text: "Sympathikus und Parasympathikus wirken an allen Organen immer rein antagonistisch.", korrekt: false },
      { nr: 5, text: "Die Speicheldrüsen werden sowohl von Sympathikus als auch von Parasympathikus stimuliert, aber mit unterschiedlichem Speichel.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 2, 4] },
      { key: "C", nummern: [3, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. An manchen Organen (z. B. Speicheldrüsen) wirken beide synergistisch, daher stimmt \"immer rein antagonistisch\" nicht (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 011 Herzfrequenzregulation (schwer) ───
  {
    id: "bio-typk-new5-011",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zur vegetativen Herzfrequenzregulation sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Sinusknoten hat eine intrinsische Frequenz von ca. 100/min, die in Ruhe vom Vagus auf ca. 60–70/min gesenkt wird.", korrekt: true },
      { nr: 2, text: "Atropin blockiert muskarinische Acetylcholinrezeptoren und erhöht dadurch die Herzfrequenz.", korrekt: true },
      { nr: 3, text: "β₁-Rezeptoren am Herzen vermitteln die positiv chronotrope Wirkung des Sympathikus.", korrekt: true },
      { nr: 4, text: "Im Schlaf dominiert der Sympathikus, was die niedrige Herzfrequenz erklärt.", korrekt: false },
      { nr: 5, text: "Die Herzfrequenzvariabilität (HRV) spiegelt die Balance zwischen Sympathikus und Parasympathikus wider.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Im Schlaf dominiert der Parasympathikus (Vagotonus), nicht der Sympathikus (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 012–022: MUSKULATUR ──────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 012 Muskeltypen (leicht) ───
  {
    id: "bio-typk-new5-012",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu den drei Muskeltypen sind richtig?",
    aussagen: [
      { nr: 1, text: "Skelettmuskulatur ist quergestreift und willkürlich steuerbar.", korrekt: true },
      { nr: 2, text: "Herzmuskulatur ist quergestreift, aber unwillkürlich.", korrekt: true },
      { nr: 3, text: "Glatte Muskulatur findet sich in Hohlorganen und ist unwillkürlich.", korrekt: true },
      { nr: 4, text: "Herzmuskelzellen sind über Glanzstreifen (Disci intercalares) mit Gap Junctions verbunden.", korrekt: true },
      { nr: 5, text: "Skelettmuskelzellen sind einkernig und haben keine Querstreifung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Skelettmuskelzellen sind mehrkernig (Synzytium) und quergestreift (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 013 Sarkomer (mittel) ───
  {
    id: "bio-typk-new5-013",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zum Sarkomer sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Sarkomer ist die kleinste kontraktile Einheit der Skelettmuskulatur.", korrekt: true },
      { nr: 2, text: "Es wird von zwei Z-Scheiben begrenzt.", korrekt: true },
      { nr: 3, text: "Die A-Bande enthält die dicken Myosinfilamente und bleibt bei Kontraktion gleich lang.", korrekt: true },
      { nr: 4, text: "Die I-Bande enthält nur dünne Aktinfilamente und verkürzt sich bei Kontraktion.", korrekt: true },
      { nr: 5, text: "Bei der Kontraktion werden die Filamente kürzer (sie schrumpfen).", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Beim Gleitfilamentmechanismus gleiten die Filamente übereinander, sie werden nicht kürzer (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 014 Gleitfilamenttheorie (mittel) ───
  {
    id: "bio-typk-new5-014",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Gleitfilamenttheorie sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Myosinköpfe binden an Aktin und kippen unter ATP-Hydrolyse (Kraftschlag).", korrekt: true },
      { nr: 2, text: "ATP ist nötig, um die Myosinköpfe nach dem Kraftschlag vom Aktin zu lösen.", korrekt: true },
      { nr: 3, text: "Ohne ATP verbleibt Myosin am Aktin gebunden (Totenstarre).", korrekt: true },
      { nr: 4, text: "Troponin und Tropomyosin regulieren die Freigabe der Myosinbindungsstellen am Aktin.", korrekt: true },
      { nr: 5, text: "Calcium bindet an Tropomyosin und gibt dadurch die Bindungsstellen frei.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Calcium bindet an Troponin (nicht Tropomyosin), was zur Verlagerung von Tropomyosin und Freigabe der Bindungsstellen führt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 015 Elektromechanische Kopplung (schwer) ───
  {
    id: "bio-typk-new5-015",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur elektromechanischen Kopplung im Skelettmuskel sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Aktionspotenzial breitet sich über die T-Tubuli ins Faserinnere aus.", korrekt: true },
      { nr: 2, text: "Die T-Tubuli stehen in Kontakt mit dem sarkoplasmatischen Retikulum (SR).", korrekt: true },
      { nr: 3, text: "Das SR setzt Ca²⁺ über Ryanodinrezeptoren ins Zytoplasma frei.", korrekt: true },
      { nr: 4, text: "Die SERCA-Pumpe transportiert Ca²⁺ zurück ins SR und leitet die Relaxation ein.", korrekt: true },
      { nr: 5, text: "Die Ca²⁺-Freisetzung erfolgt spannungsunabhängig durch passive Diffusion aus dem SR.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Ca²⁺-Freisetzung ist spannungsabhängig über DHPR-Ryanodinrezeptor-Kopplung, nicht durch passive Diffusion (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 016 Motorische Einheit (mittel) ───
  {
    id: "bio-typk-new5-016",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur motorischen Einheit sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine motorische Einheit umfasst ein Motoneuron und alle von ihm innervierten Muskelfasern.", korrekt: true },
      { nr: 2, text: "Kleine motorische Einheiten (z. B. Augenmuskeln) ermöglichen feine Bewegungen.", korrekt: true },
      { nr: 3, text: "Bei zunehmender Kraftanforderung werden zunächst große, dann kleine motorische Einheiten rekrutiert.", korrekt: false },
      { nr: 4, text: "Alle Muskelfasern einer motorischen Einheit kontrahieren synchron.", korrekt: true },
      { nr: 5, text: "Das Henneman-Prinzip (Size Principle) beschreibt die geordnete Rekrutierung von klein nach groß.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Nach dem Henneman-Prinzip werden zuerst kleine, dann große Einheiten rekrutiert (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 017 Muskelfasertypen (mittel) ───
  {
    id: "bio-typk-new5-017",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Muskelfasertypen sind richtig?",
    aussagen: [
      { nr: 1, text: "Typ-I-Fasern (Slow-Twitch) sind reich an Mitochondrien und Myoglobin.", korrekt: true },
      { nr: 2, text: "Typ-II-Fasern (Fast-Twitch) ermüden schneller als Typ-I-Fasern.", korrekt: true },
      { nr: 3, text: "Typ-I-Fasern gewinnen Energie hauptsächlich über aerobe Stoffwechselwege.", korrekt: true },
      { nr: 4, text: "Typ-II-Fasern nutzen verstärkt anaerobe Glykolyse und ermüden daher schneller.", korrekt: true },
      { nr: 5, text: "Typ-I-Fasern sind weiß und Typ-II-Fasern sind rot gefärbt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Typ-I-Fasern sind rot (viel Myoglobin), Typ-II-Fasern eher weiß (5 falsch — umgekehrt).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 018 Glatte Muskulatur (mittel) ───
  {
    id: "bio-typk-new5-018",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur glatten Muskulatur sind richtig?",
    aussagen: [
      { nr: 1, text: "Glatte Muskelzellen sind spindelförmig und einkernig.", korrekt: true },
      { nr: 2, text: "Sie besitzen kein Troponin; die Regulation erfolgt über Calmodulin und die Myosin-Leichtketten-Kinase (MLCK).", korrekt: true },
      { nr: 3, text: "Glatte Muskulatur kann sich über einen langen Zeitraum tonisch kontrahieren ohne zu ermüden.", korrekt: true },
      { nr: 4, text: "Einzelne glatte Muskelzellen (Single-Unit-Typ) können über Gap Junctions synchron kontrahieren.", korrekt: true },
      { nr: 5, text: "Glatte Muskulatur hat Sarkomere und Z-Scheiben wie die Skelettmuskulatur.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Glatte Muskulatur hat keine Sarkomere und keine Z-Scheiben; stattdessen Dense Bodies (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 019 Neuromuskuläre Endplatte (schwer) ───
  {
    id: "bio-typk-new5-019",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur neuromuskulären Endplatte sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Transmitter an der motorischen Endplatte ist Acetylcholin.", korrekt: true },
      { nr: 2, text: "Acetylcholin wird durch Acetylcholinesterase im synaptischen Spalt abgebaut.", korrekt: true },
      { nr: 3, text: "Die Endplatte enthält nikotinische Acetylcholinrezeptoren.", korrekt: true },
      { nr: 4, text: "Curare blockiert nikotinische Rezeptoren und führt zu schlaffer Lähmung.", korrekt: true },
      { nr: 5, text: "Botulinumtoxin steigert die Acetylcholinfreisetzung und verursacht Muskelkrämpfe.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Botulinumtoxin hemmt die ACh-Freisetzung und führt zu schlaffer Lähmung, nicht zu Krämpfen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 020 Muskelstoffwechsel (schwer) ───
  {
    id: "bio-typk-new5-020",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zum Muskelstoffwechsel sind richtig?",
    aussagen: [
      { nr: 1, text: "Kreatinphosphat dient als schnelle ATP-Reserve für die ersten Sekunden einer Kontraktion.", korrekt: true },
      { nr: 2, text: "Bei intensiver Belastung entsteht Laktat durch anaerobe Glykolyse.", korrekt: true },
      { nr: 3, text: "Myoglobin speichert Sauerstoff im Muskel und gibt ihn bei Bedarf ab.", korrekt: true },
      { nr: 4, text: "Die Fettsäureoxidation ist bei Kurzzeit-Maximalbelastung die Hauptenergiequelle.", korrekt: false },
      { nr: 5, text: "Bei Ausdauerbelastung werden zunehmend Fettsäuren als Energiesubstrat genutzt.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Bei Kurzzeit-Maximalbelastung dominieren Kreatinphosphat und anaerobe Glykolyse, nicht Fettsäureoxidation (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 021 Muskelkontraktion Kontraktionsformen (leicht) ───
  {
    id: "bio-typk-new5-021",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Kontraktionsformen der Skelettmuskulatur sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei isotonischer Kontraktion ändert sich die Muskellänge bei konstanter Spannung.", korrekt: true },
      { nr: 2, text: "Bei isometrischer Kontraktion bleibt die Muskellänge konstant, die Spannung steigt.", korrekt: true },
      { nr: 3, text: "Exzentrische Kontraktion bedeutet, der Muskel wird unter Spannung verlängert.", korrekt: true },
      { nr: 4, text: "Konzentrische Kontraktion bedeutet, der Muskel verkürzt sich aktiv.", korrekt: true },
      { nr: 5, text: "Bei isometrischer Kontraktion wird keine Energie verbraucht.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Auch bei isometrischer Kontraktion wird ATP verbraucht (Querbrückenzyklen laufen ab, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 022 Tetanus und Einzelzuckung (mittel) ───
  {
    id: "bio-typk-new5-022",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Einzelzuckung und Tetanus sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein einzelnes Aktionspotenzial löst eine Einzelzuckung aus.", korrekt: true },
      { nr: 2, text: "Bei hoher Reizfrequenz verschmelzen die Einzelzuckungen zum Tetanus.", korrekt: true },
      { nr: 3, text: "Beim vollständigen Tetanus ist die Kraftentwicklung maximal und die Einzelzuckungen nicht mehr erkennbar.", korrekt: true },
      { nr: 4, text: "Herzmuskel kann tetanisieren, weil seine Refraktärzeit kurz ist.", korrekt: false },
      { nr: 5, text: "Die lange Refraktärzeit des Herzmuskels verhindert Tetanus und damit einen Herzstillstand durch Dauerkrampf.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Der Herzmuskel kann gerade nicht tetanisieren, weil seine Refraktärzeit so lang wie die Kontraktionsdauer ist (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 023–033: REPRODUKTION ────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 023 Weiblicher Zyklus (leicht) ───
  {
    id: "bio-typk-new5-023",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zum weiblichen Menstruationszyklus sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Zyklus dauert im Mittel etwa 28 Tage.", korrekt: true },
      { nr: 2, text: "Die Follikelphase wird durch FSH gesteuert.", korrekt: true },
      { nr: 3, text: "Der LH-Peak löst die Ovulation aus.", korrekt: true },
      { nr: 4, text: "Das Corpus luteum produziert hauptsächlich Progesteron.", korrekt: true },
      { nr: 5, text: "Östrogen wird ausschließlich in der Lutealphase produziert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Östrogen wird bereits in der Follikelphase von den heranreifenden Follikeln produziert (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 024 Spermatogenese (mittel) ───
  {
    id: "bio-typk-new5-024",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur Spermatogenese sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Spermatogenese findet in den Tubuli seminiferi (Samenkanälchen) statt.", korrekt: true },
      { nr: 2, text: "Sertoli-Zellen bilden die Blut-Hoden-Schranke und ernähren die Keimzellen.", korrekt: true },
      { nr: 3, text: "Leydig-Zellen produzieren Testosteron unter Einfluss von LH.", korrekt: true },
      { nr: 4, text: "FSH stimuliert die Sertoli-Zellen.", korrekt: true },
      { nr: 5, text: "Die Spermatogenese dauert nur etwa 7 Tage.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Spermatogenese dauert ca. 64–74 Tage (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 025 Implantation & Frühentwicklung (mittel) ───
  {
    id: "bio-typk-new5-025",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Implantation und frühen Embryonalentwicklung sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Implantation der Blastozyste erfolgt etwa 6–7 Tage nach der Befruchtung.", korrekt: true },
      { nr: 2, text: "Die Blastozyste besteht aus Trophoblast (außen) und Embryoblast (innen).", korrekt: true },
      { nr: 3, text: "Aus dem Trophoblasten entwickelt sich die Plazenta.", korrekt: true },
      { nr: 4, text: "Das hCG (humanes Choriongonadotropin) erhält das Corpus luteum und damit die Progesteronproduktion.", korrekt: true },
      { nr: 5, text: "Die Nidation findet im Eileiter statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Nidation findet im Uterus (Endometrium) statt, nicht im Eileiter (5 falsch; Eileiter-Implantation = Eileiterschwangerschaft).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 026 Gastrulation (schwer) ───
  {
    id: "bio-typk-new5-026",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Gastrulation sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Gastrulation entstehen die drei Keimblätter: Ektoderm, Mesoderm und Entoderm.", korrekt: true },
      { nr: 2, text: "Aus dem Ektoderm entwickeln sich Nervensystem und Epidermis.", korrekt: true },
      { nr: 3, text: "Aus dem Mesoderm entstehen u. a. Knochen, Muskeln und Blutgefäße.", korrekt: true },
      { nr: 4, text: "Aus dem Entoderm bilden sich die Epithelien des Verdauungstrakts und der Lunge.", korrekt: true },
      { nr: 5, text: "Die Gastrulation findet vor der Blastulation statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Reihenfolge ist: Befruchtung → Furchung → Blastulation → Gastrulation (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 027 Plazenta (mittel) ───
  {
    id: "bio-typk-new5-027",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Plazenta sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Plazenta ermöglicht den Austausch von Nährstoffen, Gasen und Abfallprodukten zwischen Mutter und Fetus.", korrekt: true },
      { nr: 2, text: "Mütterliches und fetales Blut mischen sich in der Plazenta direkt.", korrekt: false },
      { nr: 3, text: "Die Plazenta produziert Hormone wie hCG, Östrogen und Progesteron.", korrekt: true },
      { nr: 4, text: "IgG-Antikörper der Mutter können die Plazenta passieren und dem Fetus passive Immunität verleihen.", korrekt: true },
      { nr: 5, text: "Die Nabelschnur enthält zwei Arterien und eine Vene.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4, 5] },
      { key: "B", nummern: [1, 2, 3] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Das mütterliche und fetale Blut sind durch die Plazentaschranke getrennt und mischen sich nicht (2 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 028 Kontrazeption (leicht) ───
  {
    id: "bio-typk-new5-028",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zu Kontrazeptionsmethoden sind richtig?",
    aussagen: [
      { nr: 1, text: "Die \"Pille\" enthält synthetische Östrogene und/oder Gestagene, die die Ovulation unterdrücken.", korrekt: true },
      { nr: 2, text: "Kondome bieten neben Empfängnisverhütung auch Schutz vor sexuell übertragbaren Infektionen.", korrekt: true },
      { nr: 3, text: "Die Kupferspirale wirkt u. a. durch eine Entzündungsreaktion im Uterus, die die Spermien hemmt.", korrekt: true },
      { nr: 4, text: "Die \"Pille danach\" (Levonorgestrel) ist ein Abtreibungsmittel.", korrekt: false },
      { nr: 5, text: "Hormonelle Kontrazeptiva wirken auf die Hypothalamus-Hypophysen-Gonaden-Achse durch negative Rückkopplung.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Die Pille danach verschiebt/verhindert die Ovulation, ist aber kein Abtreibungsmittel (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 029 IVF (mittel) ───
  {
    id: "bio-typk-new5-029",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur In-vitro-Fertilisation (IVF) sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der IVF werden Eizellen außerhalb des Körpers mit Spermien zusammengebracht.", korrekt: true },
      { nr: 2, text: "Vor der Eizellentnahme erfolgt eine hormonelle Stimulation der Ovarien.", korrekt: true },
      { nr: 3, text: "ICSI (Intrazytoplasmatische Spermieninjektion) wird bei schwerer männlicher Subfertilität eingesetzt.", korrekt: true },
      { nr: 4, text: "Embryonen können im Blastozystenstadium in den Uterus transferiert werden.", korrekt: true },
      { nr: 5, text: "Bei IVF ist eine genetische Veränderung des Embryos Standard.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Eine genetische Veränderung des Embryos ist nicht Standard bei IVF und in vielen Ländern verboten (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 030 Sexualhormone männlich (mittel) ───
  {
    id: "bio-typk-new5-030",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zu männlichen Sexualhormonen sind richtig?",
    aussagen: [
      { nr: 1, text: "Testosteron wird in den Leydig-Zellen des Hodens produziert.", korrekt: true },
      { nr: 2, text: "LH (aus der Hypophyse) stimuliert die Testosteronproduktion.", korrekt: true },
      { nr: 3, text: "Testosteron fördert Muskelaufbau, Knochendichte und Spermatogenese.", korrekt: true },
      { nr: 4, text: "Dihydrotestosteron (DHT) ist die biologisch aktivere Form und wirkt z. B. an der Prostata.", korrekt: true },
      { nr: 5, text: "Testosteron wird ausschließlich im Hoden produziert, nie in der Nebennierenrinde.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Auch die Nebennierenrinde produziert geringe Mengen Androgene (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 031 Zwillinge (leicht) ───
  {
    id: "bio-typk-new5-031",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Zwillingen sind richtig?",
    aussagen: [
      { nr: 1, text: "Eineiige Zwillinge entstehen aus einer befruchteten Eizelle, die sich teilt.", korrekt: true },
      { nr: 2, text: "Eineiige Zwillinge haben identisches Erbgut.", korrekt: true },
      { nr: 3, text: "Zweieiige Zwillinge entstehen aus zwei unabhängig befruchteten Eizellen.", korrekt: true },
      { nr: 4, text: "Zweieiige Zwillinge sind genetisch wie normale Geschwister (ca. 50 % gemeinsame Gene).", korrekt: true },
      { nr: 5, text: "Eineiige Zwillinge haben immer die gleiche Blutgruppe.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle Aussagen 1–5 sind richtig. Da eineiige Zwillinge genetisch identisch sind, haben sie zwangsläufig auch die gleiche Blutgruppe.",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 032 Embryonale Entwicklung (schwer) ───
  {
    id: "bio-typk-new5-032",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Embryonalentwicklung sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Neurulation bildet das Neuralrohr, aus dem Gehirn und Rückenmark entstehen.", korrekt: true },
      { nr: 2, text: "Die Neuralleiste liefert u. a. Zellen für das periphere Nervensystem und Melanozyten.", korrekt: true },
      { nr: 3, text: "Folsäuremangel kann zu Neuralrohrdefekten (z. B. Spina bifida) führen.", korrekt: true },
      { nr: 4, text: "Die Organogenese findet hauptsächlich im 1. Trimester statt.", korrekt: true },
      { nr: 5, text: "Ab dem 2. Trimester ist der Embryo unempfindlich gegenüber Teratogenen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Auch im 2. und 3. Trimester können Teratogene Schäden verursachen (z. B. ZNS-Entwicklung, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 033 Hormonelle Regulation Schwangerschaft (schwer) ───
  {
    id: "bio-typk-new5-033",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur hormonellen Regulation in der Schwangerschaft sind richtig?",
    aussagen: [
      { nr: 1, text: "hCG steigt in den ersten Schwangerschaftswochen stark an und wird im Schwangerschaftstest nachgewiesen.", korrekt: true },
      { nr: 2, text: "Ab dem 2. Trimester übernimmt die Plazenta die Hauptproduktion von Progesteron vom Corpus luteum.", korrekt: true },
      { nr: 3, text: "Progesteron hält die Uterusschleimhaut aufrecht und verhindert Kontraktionen.", korrekt: true },
      { nr: 4, text: "Oxytocin fördert die Wehen und wird bei der Geburt in positiver Rückkopplung ausgeschüttet.", korrekt: true },
      { nr: 5, text: "Prolaktin hemmt die Milchproduktion nach der Geburt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Prolaktin fördert (nicht hemmt) die Milchproduktion (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 034–044: BIOETHIK UND GENETIK ────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 034 Stammzellen Grundlagen (leicht) ───
  {
    id: "bio-typk-new5-034",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Stammzellen sind richtig?",
    aussagen: [
      { nr: 1, text: "Embryonale Stammzellen sind pluripotent und können sich in alle Zelltypen differenzieren.", korrekt: true },
      { nr: 2, text: "Adulte Stammzellen sind multipotent und kommen z. B. im Knochenmark vor.", korrekt: true },
      { nr: 3, text: "Die Zygote ist totipotent — aus ihr kann ein ganzer Organismus entstehen.", korrekt: true },
      { nr: 4, text: "Induzierte pluripotente Stammzellen (iPSC) werden aus adulten Zellen durch Reprogrammierung gewonnen.", korrekt: true },
      { nr: 5, text: "Adulte Stammzellen können sich in jeden beliebigen Zelltyp differenzieren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Adulte Stammzellen sind multipotent, nicht pluripotent — sie können nur bestimmte Zelltypen bilden (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 035 CRISPR-Cas9 (mittel) ───
  {
    id: "bio-typk-new5-035",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zu CRISPR-Cas9 sind richtig?",
    aussagen: [
      { nr: 1, text: "CRISPR-Cas9 ist ein Werkzeug zur gezielten Genomeditierung.", korrekt: true },
      { nr: 2, text: "Eine Guide-RNA leitet das Cas9-Enzym zu einer spezifischen DNA-Sequenz.", korrekt: true },
      { nr: 3, text: "Cas9 erzeugt einen Doppelstrangbruch in der DNA, der repariert werden kann.", korrekt: true },
      { nr: 4, text: "CRISPR stammt ursprünglich aus dem Immunsystem von Bakterien.", korrekt: true },
      { nr: 5, text: "CRISPR-Cas9 kann nur in prokaryotischen Zellen eingesetzt werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. CRISPR-Cas9 funktioniert in pro- und eukaryotischen Zellen, einschließlich menschlicher Zellen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 036 Klonen (mittel) ───
  {
    id: "bio-typk-new5-036",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zum Klonen sind richtig?",
    aussagen: [
      { nr: 1, text: "Beim somatischen Zellkerntransfer wird der Kern einer Körperzelle in eine entkernte Eizelle übertragen.", korrekt: true },
      { nr: 2, text: "Das Klonschaf Dolly wurde durch somatischen Zellkerntransfer erzeugt.", korrekt: true },
      { nr: 3, text: "Therapeutisches Klonen zielt auf die Gewinnung von embryonalen Stammzellen, nicht auf einen ganzen Organismus.", korrekt: true },
      { nr: 4, text: "Reproduktives Klonen beim Menschen ist in den meisten Ländern ethisch umstritten und gesetzlich verboten.", korrekt: true },
      { nr: 5, text: "Ein Klon hat identisches nukleäres und mitochondriales Erbgut wie der Spenderorganismus.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die mitochondriale DNA stammt von der Eizellspenderin, nicht vom Kernsender — daher nicht identisch (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 037 Gentherapie (schwer) ───
  {
    id: "bio-typk-new5-037",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zur Gentherapie sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der somatischen Gentherapie werden Körperzellen genetisch verändert; die Änderungen werden nicht vererbt.", korrekt: true },
      { nr: 2, text: "Keimbahntherapie verändert auch Keimzellen, sodass Änderungen an Nachkommen weitergegeben werden.", korrekt: true },
      { nr: 3, text: "Virale Vektoren (z. B. Adenoviren, AAV, Lentiviren) werden häufig für den Gentransfer genutzt.", korrekt: true },
      { nr: 4, text: "Keimbahntherapie am Menschen ist in den meisten Ländern erlaubt und weit verbreitet.", korrekt: false },
      { nr: 5, text: "Ex-vivo-Gentherapie entnimmt Zellen, verändert sie im Labor und gibt sie zurück.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Keimbahntherapie am Menschen ist in den meisten Ländern verboten (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 038 Gentechnik in der Landwirtschaft (leicht) ───
  {
    id: "bio-typk-new5-038",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zu gentechnisch veränderten Organismen (GVO) in der Landwirtschaft sind richtig?",
    aussagen: [
      { nr: 1, text: "Bt-Mais enthält ein Gen aus Bacillus thuringiensis, das ein Insektengift produziert.", korrekt: true },
      { nr: 2, text: "Golden Rice wurde entwickelt, um Vitamin-A-Mangel zu bekämpfen.", korrekt: true },
      { nr: 3, text: "Herbizidresistente Pflanzen können gezielt mit Unkrautvernichtungsmitteln behandelt werden, ohne selbst Schaden zu nehmen.", korrekt: true },
      { nr: 4, text: "In der EU ist der Anbau von GVO vollständig verboten.", korrekt: false },
      { nr: 5, text: "Agrobacterium tumefaciens wird als natürlicher Gentransfer-Vektor für Pflanzen genutzt.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. In der EU ist GVO-Anbau nicht vollständig verboten, aber streng reguliert (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 039 Epigenetik (schwer) ───
  {
    id: "bio-typk-new5-039",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-03",
    stamm: "Welche der folgenden Aussagen zur Epigenetik sind richtig?",
    aussagen: [
      { nr: 1, text: "Epigenetische Veränderungen beeinflussen die Genexpression, ohne die DNA-Sequenz zu verändern.", korrekt: true },
      { nr: 2, text: "DNA-Methylierung an CpG-Inseln führt typischerweise zur Stilllegung von Genen.", korrekt: true },
      { nr: 3, text: "Histonacetylierung lockert die Chromatinstruktur und fördert die Transkription.", korrekt: true },
      { nr: 4, text: "Epigenetische Markierungen können bei der Zellteilung an Tochterzellen weitergegeben werden.", korrekt: true },
      { nr: 5, text: "Epigenetische Veränderungen sind grundsätzlich irreversibel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Epigenetische Veränderungen sind grundsätzlich reversibel (z. B. Demethylierung, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 040 PCR (mittel) ───
  {
    id: "bio-typk-new5-040",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zur Polymerase-Kettenreaktion (PCR) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die PCR dient der exponentiellen Vervielfältigung spezifischer DNA-Abschnitte.", korrekt: true },
      { nr: 2, text: "Die drei Schritte eines PCR-Zyklus sind Denaturierung, Annealing und Elongation.", korrekt: true },
      { nr: 3, text: "Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus.", korrekt: true },
      { nr: 4, text: "Primer sind kurze DNA-Oligonukleotide, die den zu vervielfältigenden Abschnitt flankieren.", korrekt: true },
      { nr: 5, text: "Nach 30 Zyklen liegt die DNA in etwa 2³⁰ ≈ 1 Milliarde Kopien vor (theoretisch).", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle Aussagen 1–5 sind richtig. Die PCR verdoppelt idealerweise die DNA-Menge in jedem Zyklus.",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 041 Gelelektrophorese (mittel) ───
  {
    id: "bio-typk-new5-041",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zur Gelelektrophorese sind richtig?",
    aussagen: [
      { nr: 1, text: "DNA-Fragmente wandern im elektrischen Feld zum Pluspol (Anode), da DNA negativ geladen ist.", korrekt: true },
      { nr: 2, text: "Kleinere Fragmente wandern schneller durch das Gel als größere.", korrekt: true },
      { nr: 3, text: "Restriktionsenzyme schneiden DNA an spezifischen Erkennungssequenzen.", korrekt: true },
      { nr: 4, text: "Die Agarose-Gelelektrophorese wird u. a. für DNA-Fingerprinting eingesetzt.", korrekt: true },
      { nr: 5, text: "Proteine wandern im Gel immer zum Minuspol, weil sie positiv geladen sind.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Proteine können verschiedene Ladungen haben; bei SDS-PAGE werden sie negativ geladen und wandern ebenfalls zur Anode (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 042 Präimplantationsdiagnostik (schwer) ───
  {
    id: "bio-typk-new5-042",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zur Präimplantationsdiagnostik (PID) sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der PID werden Embryonen aus IVF vor dem Transfer genetisch untersucht.", korrekt: true },
      { nr: 2, text: "Ziel ist es, Embryonen mit schweren genetischen Erkrankungen zu erkennen.", korrekt: true },
      { nr: 3, text: "In Österreich ist die PID unter bestimmten Bedingungen seit 2015 erlaubt.", korrekt: true },
      { nr: 4, text: "Die Entnahme einer Zelle im Blastozystenstadium ist für den Embryo in der Regel nicht schädlich.", korrekt: true },
      { nr: 5, text: "PID darf in Österreich ohne Einschränkungen für Geschlechtsselektion verwendet werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Geschlechtsselektion ohne medizinische Indikation ist in Österreich nicht erlaubt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 043 Stammzelltherapie (mittel) ───
  {
    id: "bio-typk-new5-043",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Stammzelltherapie sind richtig?",
    aussagen: [
      { nr: 1, text: "Hämatopoetische Stammzelltransplantation wird bei Leukämie eingesetzt.", korrekt: true },
      { nr: 2, text: "Nabelschnurblut enthält hämatopoetische Stammzellen, die eingefroren und später genutzt werden können.", korrekt: true },
      { nr: 3, text: "iPSC (induzierte pluripotente Stammzellen) können die ethischen Bedenken embryonaler Stammzellen umgehen.", korrekt: true },
      { nr: 4, text: "Abstoßungsreaktionen sind bei autologen Stammzelltransplantationen (eigene Zellen) kein Problem.", korrekt: true },
      { nr: 5, text: "Embryonale Stammzellen können ohne ethische Bedenken unbegrenzt gewonnen werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Gewinnung embryonaler Stammzellen erfordert die Zerstörung von Embryonen und ist ethisch umstritten (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 044 Gentechnische Methoden (leicht) ───
  {
    id: "bio-typk-new5-044",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zu gentechnischen Methoden sind richtig?",
    aussagen: [
      { nr: 1, text: "Restriktionsenzyme schneiden DNA an spezifischen Palindrom-Sequenzen.", korrekt: true },
      { nr: 2, text: "Ligasen verknüpfen DNA-Fragmente miteinander.", korrekt: true },
      { nr: 3, text: "Plasmide dienen in der Gentechnik als Vektoren zum Gentransfer in Bakterien.", korrekt: true },
      { nr: 4, text: "Reverse Transkriptase stellt aus mRNA eine cDNA-Kopie her.", korrekt: true },
      { nr: 5, text: "Restriktionsenzyme können nur RNA schneiden, nicht DNA.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Restriktionsenzyme schneiden DNA (nicht RNA) an spezifischen Stellen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 045–055: VERHALTEN UND ÖKOLOGIE ──────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 045 Lernformen (leicht) ───
  {
    id: "bio-typk-new5-045",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu Lernformen sind richtig?",
    aussagen: [
      { nr: 1, text: "Klassische Konditionierung (Pawlow) verknüpft einen neutralen Reiz mit einem unbedingten Reiz.", korrekt: true },
      { nr: 2, text: "Operante Konditionierung (Skinner) beruht auf Belohnung und Bestrafung.", korrekt: true },
      { nr: 3, text: "Prägung (Lorenz) ist eine irreversible Lernform mit sensibler Phase.", korrekt: true },
      { nr: 4, text: "Habituation ist die Gewöhnung an einen harmlosen Reiz, sodass die Reaktion abnimmt.", korrekt: true },
      { nr: 5, text: "Klassische Konditionierung erfordert immer eine Belohnung als Verstärker.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei klassischer Konditionierung ist der Verstärker der unbedingte Reiz (z. B. Futter), keine extra Belohnung nötig — das ist operante Konditionierung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 046 Biorhythmus (mittel) ───
  {
    id: "bio-typk-new5-046",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zum Biorhythmus sind richtig?",
    aussagen: [
      { nr: 1, text: "Circadiane Rhythmen haben eine Periodenlänge von etwa 24 Stunden.", korrekt: true },
      { nr: 2, text: "Der Nucleus suprachiasmaticus (SCN) im Hypothalamus ist die zentrale innere Uhr bei Säugetieren.", korrekt: true },
      { nr: 3, text: "Melatonin wird in der Epiphyse (Zirbeldrüse) produziert und fördert den Schlaf.", korrekt: true },
      { nr: 4, text: "Licht synchronisiert die innere Uhr über Melanopsin-haltige Ganglienzellen der Retina.", korrekt: true },
      { nr: 5, text: "Circadiane Rhythmen existieren nur bei Säugetieren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Circadiane Rhythmen kommen bei fast allen Lebewesen vor, auch bei Pflanzen, Pilzen und Bakterien (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 047 Migration/Vogelzug (mittel) ───
  {
    id: "bio-typk-new5-047",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu Tiermigration und Vogelzug sind richtig?",
    aussagen: [
      { nr: 1, text: "Zugvögel orientieren sich u. a. am Erdmagnetfeld, Sonnenstand und Sternen.", korrekt: true },
      { nr: 2, text: "Die Zugunruhe beschreibt das erhöhte Aktivitätsniveau vor dem Zug.", korrekt: true },
      { nr: 3, text: "Der Vogelzug wird durch Photoperiode (Tageslänge) und endogene Rhythmen ausgelöst.", korrekt: true },
      { nr: 4, text: "Standvögel ziehen nicht, weil ihnen die genetische Grundlage fehlt.", korrekt: false },
      { nr: 5, text: "Lachse kehren zur Fortpflanzung in ihr Geburtsgewässer zurück (Natal Homing).", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Standvögel haben durchaus genetische Zugvogelanteile, sie ziehen nicht aufgrund ökologischer Bedingungen (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 048 Symbiose und Parasitismus (leicht) ───
  {
    id: "bio-typk-new5-048",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu Symbiose und Parasitismus sind richtig?",
    aussagen: [
      { nr: 1, text: "Mutualismus ist eine Symbioseform, bei der beide Partner profitieren.", korrekt: true },
      { nr: 2, text: "Kommensalismus bedeutet, ein Partner profitiert, der andere ist nicht betroffen.", korrekt: true },
      { nr: 3, text: "Parasitismus schädigt den Wirt und nützt dem Parasiten.", korrekt: true },
      { nr: 4, text: "Mykorrhiza ist eine mutualistische Symbiose zwischen Pilz und Pflanzenwurzel.", korrekt: true },
      { nr: 5, text: "Parasiten töten ihren Wirt grundsätzlich immer ab.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Parasiten sind auf den lebenden Wirt angewiesen und töten ihn meist nicht (Parasitoide sind eine Ausnahme, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 049 Nahrungskette und Trophieebenen (leicht) ───
  {
    id: "bio-typk-new5-049",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu Nahrungsketten und Trophieebenen sind richtig?",
    aussagen: [
      { nr: 1, text: "Produzenten (Pflanzen) stehen auf der ersten Trophieebene.", korrekt: true },
      { nr: 2, text: "Primärkonsumenten sind Pflanzenfresser (Herbivore).", korrekt: true },
      { nr: 3, text: "Bei jedem Trophiewechsel gehen etwa 90 % der Energie verloren.", korrekt: true },
      { nr: 4, text: "Destruenten bauen tote organische Substanz ab und schließen den Stoffkreislauf.", korrekt: true },
      { nr: 5, text: "Eine Nahrungskette hat typischerweise mehr als 10 Trophieebenen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nahrungsketten haben typischerweise 3–5 Trophieebenen wegen des hohen Energieverlusts (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 050 Populationsdynamik (mittel) ───
  {
    id: "bio-typk-new5-050",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zur Populationsdynamik sind richtig?",
    aussagen: [
      { nr: 1, text: "Exponentielles Wachstum tritt auf, wenn keine begrenzenden Faktoren wirken.", korrekt: true },
      { nr: 2, text: "Die Umweltkapazität (K) ist die maximale Populationsgröße, die ein Lebensraum dauerhaft tragen kann.", korrekt: true },
      { nr: 3, text: "Logistisches Wachstum zeigt eine S-förmige Kurve, die sich K annähert.", korrekt: true },
      { nr: 4, text: "r-Strategen investieren viel in Brutpflege und haben wenige Nachkommen.", korrekt: false },
      { nr: 5, text: "Dichteabhängige Faktoren (z. B. Konkurrenz, Krankheiten) verstärken sich mit zunehmender Populationsdichte.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. r-Strategen haben viele Nachkommen mit wenig Brutpflege; K-Strategen investieren in wenige Nachkommen (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 051 Ökologische Nische (mittel) ───
  {
    id: "bio-typk-new5-051",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zur ökologischen Nische sind richtig?",
    aussagen: [
      { nr: 1, text: "Die ökologische Nische beschreibt die Gesamtheit der Umweltfaktoren, die eine Art zum Überleben benötigt.", korrekt: true },
      { nr: 2, text: "Die Fundamentalnische ist die theoretisch mögliche Nische ohne Konkurrenz.", korrekt: true },
      { nr: 3, text: "Die Realnische ist die tatsächlich besetzte Nische unter Konkurrenzbedingungen.", korrekt: true },
      { nr: 4, text: "Das Konkurrenzausschlussprinzip (Gause) besagt, dass zwei Arten nicht dauerhaft dieselbe Nische besetzen können.", korrekt: true },
      { nr: 5, text: "Zwei Arten können dauerhaft exakt dieselbe ökologische Nische besetzen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nach Gause können zwei Arten nicht dauerhaft exakt dieselbe Nische besetzen — eine wird verdrängt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 052 Kohlenstoffkreislauf (mittel) ───
  {
    id: "bio-typk-new5-052",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zum Kohlenstoffkreislauf sind richtig?",
    aussagen: [
      { nr: 1, text: "Pflanzen binden CO₂ durch Photosynthese und bauen es in organische Verbindungen ein.", korrekt: true },
      { nr: 2, text: "Zellatmung setzt CO₂ wieder frei.", korrekt: true },
      { nr: 3, text: "Fossile Brennstoffe enthalten Kohlenstoff aus vor Millionen Jahren fixiertem CO₂.", korrekt: true },
      { nr: 4, text: "Die Verbrennung fossiler Brennstoffe erhöht den CO₂-Gehalt der Atmosphäre.", korrekt: true },
      { nr: 5, text: "Ozeane spielen keine Rolle im Kohlenstoffkreislauf.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ozeane sind eine wichtige CO₂-Senke und spielen eine zentrale Rolle im Kohlenstoffkreislauf (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 053 Angeborenes Verhalten (leicht) ───
  {
    id: "bio-typk-new5-053",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu angeborenem Verhalten sind richtig?",
    aussagen: [
      { nr: 1, text: "Reflexe sind angeborene, unwillkürliche Reaktionen auf einen Reiz.", korrekt: true },
      { nr: 2, text: "Instinkthandlungen bestehen aus Appetenzverhalten, Schlüsselreiz und Erbkoordination.", korrekt: true },
      { nr: 3, text: "Schlüsselreize lösen angeborene Reaktionen über angeborene auslösende Mechanismen (AAM) aus.", korrekt: true },
      { nr: 4, text: "Fixe Aktionsmuster (Erbkoordinationen) laufen einmal ausgelöst immer vollständig ab.", korrekt: true },
      { nr: 5, text: "Angeborenes Verhalten wird ausschließlich durch Lernen erworben.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Angeborenes Verhalten ist genetisch fixiert und wird nicht durch Lernen erworben (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 054 Biodiversität (mittel) ───
  {
    id: "bio-typk-new5-054",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zur Biodiversität sind richtig?",
    aussagen: [
      { nr: 1, text: "Biodiversität umfasst Artenvielfalt, genetische Vielfalt und Ökosystemvielfalt.", korrekt: true },
      { nr: 2, text: "Habitatvernichtung ist die Hauptursache für den Rückgang der Biodiversität.", korrekt: true },
      { nr: 3, text: "Invasive Arten können einheimische Arten verdrängen und die Biodiversität gefährden.", korrekt: true },
      { nr: 4, text: "Keystone-Arten haben einen überproportional großen Einfluss auf ihr Ökosystem.", korrekt: true },
      { nr: 5, text: "Der Verlust einer Art hat keine Auswirkungen auf das Ökosystem.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Verlust einer Art kann Kaskadeneffekte im Ökosystem auslösen, besonders bei Keystone-Arten (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 055 Sukzession (schwer) ───
  {
    id: "bio-typk-new5-055",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zur ökologischen Sukzession sind richtig?",
    aussagen: [
      { nr: 1, text: "Primärsukzession beginnt auf bisher unbesiedeltem Substrat (z. B. erstarrte Lava).", korrekt: true },
      { nr: 2, text: "Sekundärsukzession setzt nach einer Störung auf bereits vorhandenem Boden ein.", korrekt: true },
      { nr: 3, text: "Pionierpflanzen (z. B. Flechten, Moose) besiedeln als erste das Substrat.", korrekt: true },
      { nr: 4, text: "Die Klimaxgesellschaft ist das stabile Endstadium der Sukzession.", korrekt: true },
      { nr: 5, text: "Sukzession führt immer zu geringerer Artenvielfalt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Sukzession führt in der Regel zu höherer Artenvielfalt und Komplexität (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 056–065: WASSER- UND ELEKTROLYTHAUSHALT ──────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 056 Körperwasser (leicht) ───
  {
    id: "bio-typk-new5-056",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Körperwasserhaushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Wasseranteil des menschlichen Körpers beträgt bei Erwachsenen etwa 60 %.", korrekt: true },
      { nr: 2, text: "Etwa 2/3 des Körperwassers befindet sich intrazellulär.", korrekt: true },
      { nr: 3, text: "Das extrazelluläre Wasser umfasst Blutplasma und interstitielle Flüssigkeit.", korrekt: true },
      { nr: 4, text: "Osmose ist die Wanderung von Wasser durch eine semipermeable Membran zum Ort höherer gelöster Stoffkonzentration.", korrekt: true },
      { nr: 5, text: "Isotone Kochsalzlösung hat eine höhere Osmolarität als Blutplasma.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Isotone Kochsalzlösung (0,9 %) hat die gleiche Osmolarität wie Blutplasma (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 057 Natrium (mittel) ───
  {
    id: "bio-typk-new5-057",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Natriumhaushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Natrium (Na⁺) ist das wichtigste extrazelluläre Kation.", korrekt: true },
      { nr: 2, text: "Aldosteron fördert die Na⁺-Rückresorption in der Niere.", korrekt: true },
      { nr: 3, text: "ADH (Antidiuretisches Hormon) fördert die Wasserrückresorption im Sammelrohr.", korrekt: true },
      { nr: 4, text: "Hyponatriämie kann zu Hirnödem und neurologischen Symptomen führen.", korrekt: true },
      { nr: 5, text: "Die Na⁺-Konzentration im Serum liegt physiologisch bei ca. 14 mmol/L.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die physiologische Na⁺-Konzentration im Serum beträgt ca. 135–145 mmol/L, nicht 14 mmol/L (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 058 Kalium (mittel) ───
  {
    id: "bio-typk-new5-058",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Kaliumhaushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Kalium (K⁺) ist das wichtigste intrazelluläre Kation.", korrekt: true },
      { nr: 2, text: "Die Na⁺/K⁺-ATPase pumpt 3 Na⁺ nach außen und 2 K⁺ nach innen.", korrekt: true },
      { nr: 3, text: "Hyperkaliämie kann zu lebensbedrohlichen Herzrhythmusstörungen führen.", korrekt: true },
      { nr: 4, text: "Insulin fördert die K⁺-Aufnahme in die Zelle.", korrekt: true },
      { nr: 5, text: "Die K⁺-Konzentration im Serum ist normalerweise höher als die Na⁺-Konzentration.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Serum-K⁺ liegt bei 3,5–5 mmol/L, deutlich niedriger als Na⁺ (135–145 mmol/L, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 059 ADH und Durstregulation (mittel) ───
  {
    id: "bio-typk-new5-059",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zu ADH und Durstregulation sind richtig?",
    aussagen: [
      { nr: 1, text: "ADH (Vasopressin) wird im Hypothalamus gebildet und im Hypophysenhinterlappen gespeichert und freigesetzt.", korrekt: true },
      { nr: 2, text: "ADH steigert die Wasserpermeabilität der Sammelrohre durch Einbau von Aquaporin-2.", korrekt: true },
      { nr: 3, text: "Osmorezeptoren im Hypothalamus registrieren die Plasmaosmolalität.", korrekt: true },
      { nr: 4, text: "Alkohol hemmt die ADH-Ausschüttung und führt zu vermehrter Urinproduktion.", korrekt: true },
      { nr: 5, text: "ADH wird bei niedrigem Blutdruck gehemmt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei niedrigem Blutdruck wird ADH vermehrt ausgeschüttet (nicht gehemmt), um Wasser zu retinieren (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 060 RAAS (schwer) ───
  {
    id: "bio-typk-new5-060",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Renin-Angiotensin-Aldosteron-System (RAAS) sind richtig?",
    aussagen: [
      { nr: 1, text: "Renin wird in den juxtaglomerulären Zellen der Niere bei niedrigem Blutdruck freigesetzt.", korrekt: true },
      { nr: 2, text: "Renin spaltet Angiotensinogen (aus der Leber) zu Angiotensin I.", korrekt: true },
      { nr: 3, text: "ACE (Angiotensin-Converting-Enzyme) wandelt Angiotensin I in Angiotensin II um, v. a. in der Lunge.", korrekt: true },
      { nr: 4, text: "Angiotensin II bewirkt Vasokonstriktion und stimuliert die Aldosteronfreisetzung.", korrekt: true },
      { nr: 5, text: "Aldosteron hemmt die Natriumrückresorption und fördert dadurch die Diurese.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Aldosteron fördert (nicht hemmt) die Na⁺- und Wasserrückresorption und erhöht damit das Blutvolumen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 061 Calcium (mittel) ───
  {
    id: "bio-typk-new5-061",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Calciumhaushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Ca²⁺ ist wichtig für Muskelkontraktion, Blutgerinnung und Signaltransduktion.", korrekt: true },
      { nr: 2, text: "Parathormon (PTH) erhöht den Ca²⁺-Spiegel im Blut.", korrekt: true },
      { nr: 3, text: "Calcitonin senkt den Ca²⁺-Spiegel, indem es den Knochenabbau hemmt.", korrekt: true },
      { nr: 4, text: "Vitamin D fördert die Ca²⁺-Resorption im Darm.", korrekt: true },
      { nr: 5, text: "Ca²⁺ liegt im Körper ausschließlich in gelöster Form im Blut vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ca. 99 % des Calciums sind in Knochen und Zähnen gespeichert, nicht nur gelöst im Blut (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 062 Ödeme (schwer) ───
  {
    id: "bio-typk-new5-062",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Entstehung von Ödemen sind richtig?",
    aussagen: [
      { nr: 1, text: "Ödeme entstehen durch ein Ungleichgewicht zwischen Filtration und Resorption an den Kapillaren.", korrekt: true },
      { nr: 2, text: "Ein erniedrigter kolloidosmotischer Druck (z. B. bei Albuminmangel) fördert Ödeme.", korrekt: true },
      { nr: 3, text: "Erhöhter hydrostatischer Druck (z. B. bei Herzinsuffizienz) kann zu Ödemen führen.", korrekt: true },
      { nr: 4, text: "Das Lymphsystem transportiert überschüssige interstitielle Flüssigkeit ab.", korrekt: true },
      { nr: 5, text: "Ödeme entstehen nur bei Nierenkrankheiten.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ödeme können viele Ursachen haben: Herzinsuffizienz, Leberzirrhose, Eiweißmangel, Lymphabflussstörungen etc. (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 063 Dehydratation (leicht) ───
  {
    id: "bio-typk-new5-063",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Dehydratation sind richtig?",
    aussagen: [
      { nr: 1, text: "Dehydratation entsteht bei unzureichender Flüssigkeitszufuhr oder übermäßigem Wasserverlust.", korrekt: true },
      { nr: 2, text: "Symptome umfassen Durst, trockene Schleimhäute und verminderte Urinproduktion.", korrekt: true },
      { nr: 3, text: "Bei isotoner Dehydratation gehen Wasser und Elektrolyte proportional verloren.", korrekt: true },
      { nr: 4, text: "Schwere Dehydratation kann zu Kreislaufversagen führen.", korrekt: true },
      { nr: 5, text: "Dehydratation hat keine Auswirkungen auf die Nierenfunktion.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Dehydratation reduziert die Nierendurchblutung und kann zum akuten Nierenversagen führen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 064 Elektrolyte allgemein (leicht) ───
  {
    id: "bio-typk-new5-064",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zu Elektrolyten im Körper sind richtig?",
    aussagen: [
      { nr: 1, text: "Na⁺ ist das Hauptkation extrazellulär, K⁺ intrazellulär.", korrekt: true },
      { nr: 2, text: "Cl⁻ ist das Hauptanion der extrazellulären Flüssigkeit.", korrekt: true },
      { nr: 3, text: "Phosphat (HPO₄²⁻) ist ein wichtiges intrazelluläres Anion.", korrekt: true },
      { nr: 4, text: "Mg²⁺ ist Kofaktor vieler enzymatischer Reaktionen.", korrekt: true },
      { nr: 5, text: "Elektrolyte spielen keine Rolle bei der Erregungsleitung in Nerven.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Elektrolyte (Na⁺, K⁺, Ca²⁺) sind essenziell für die Erregungsleitung in Nerven und Muskeln (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 065 Nierenfunktion Überblick (mittel) ───
  {
    id: "bio-typk-new5-065",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Nierenfunktion im Wasser-Elektrolyt-Haushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Niere filtert täglich ca. 180 L Primärharn; davon werden über 99 % rückresorbiert.", korrekt: true },
      { nr: 2, text: "Im proximalen Tubulus werden ca. 65 % des Na⁺ und Wassers rückresorbiert.", korrekt: true },
      { nr: 3, text: "Die Henle-Schleife ist entscheidend für die Harnkonzentrierung (Gegenstromprinzip).", korrekt: true },
      { nr: 4, text: "Im distalen Tubulus und Sammelrohr wirken Aldosteron und ADH regulierend.", korrekt: true },
      { nr: 5, text: "Die Niere hat keinen Einfluss auf den Blutdruck.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Niere reguliert über RAAS und Wasserhaushalt den Blutdruck maßgeblich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 066–075: SÄURE-BASE-HAUSHALT ─────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 066 pH und Puffer (leicht) ───
  {
    id: "bio-typk-new5-066",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Säure-Base-Haushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "Der physiologische Blut-pH liegt bei 7,35–7,45.", korrekt: true },
      { nr: 2, text: "Der Bicarbonat-Puffer (HCO₃⁻/CO₂) ist das wichtigste Puffersystem im Blut.", korrekt: true },
      { nr: 3, text: "pH-Werte unter 7,35 werden als Azidose bezeichnet.", korrekt: true },
      { nr: 4, text: "pH-Werte über 7,45 werden als Alkalose bezeichnet.", korrekt: true },
      { nr: 5, text: "Ein pH von 7,0 im Blut ist physiologisch normal.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ein pH von 7,0 wäre eine schwere Azidose und lebensbedrohlich (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 067 Bicarbonat-Puffer (mittel) ───
  {
    id: "bio-typk-new5-067",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Bicarbonat-Puffersystem sind richtig?",
    aussagen: [
      { nr: 1, text: "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ beschreibt das Gleichgewicht des Bicarbonat-Puffers.", korrekt: true },
      { nr: 2, text: "Das Enzym Carboanhydrase katalysiert die Umwandlung von CO₂ und H₂O zu H₂CO₃.", korrekt: true },
      { nr: 3, text: "Das Bicarbonat-Puffersystem ist ein offenes System, weil CO₂ über die Lunge abgeatmet werden kann.", korrekt: true },
      { nr: 4, text: "Die Niere kann HCO₃⁻ rückresorbieren oder sezernieren und so den pH regulieren.", korrekt: true },
      { nr: 5, text: "Dieser Puffer funktioniert nur im sauren Bereich (pH < 7).", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Bicarbonat-Puffer ist im physiologischen pH-Bereich (7,35–7,45) der wichtigste Puffer und funktioniert auch im alkalischen Bereich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 068 Respiratorische Azidose (mittel) ───
  {
    id: "bio-typk-new5-068",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur respiratorischen Azidose sind richtig?",
    aussagen: [
      { nr: 1, text: "Sie entsteht durch verminderte CO₂-Abatmung (Hypoventilation).", korrekt: true },
      { nr: 2, text: "Der pCO₂ im Blut ist erhöht.", korrekt: true },
      { nr: 3, text: "Die Niere kompensiert durch vermehrte HCO₃⁻-Rückresorption.", korrekt: true },
      { nr: 4, text: "Ursachen können COPD, Atemdepression oder neuromuskuläre Erkrankungen sein.", korrekt: true },
      { nr: 5, text: "Die respiratorische Azidose wird durch die Lunge kompensiert (Hyperventilation).", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die respiratorische Azidose kann nicht durch die Lunge kompensiert werden (die ist ja das Problem); die Kompensation erfolgt renal (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 069 Metabolische Azidose (schwer) ───
  {
    id: "bio-typk-new5-069",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur metabolischen Azidose sind richtig?",
    aussagen: [
      { nr: 1, text: "Sie entsteht durch Akkumulation von H⁺ oder Verlust von HCO₃⁻.", korrekt: true },
      { nr: 2, text: "Ursachen sind z. B. Laktatazidose, diabetische Ketoazidose oder Nierenversagen.", korrekt: true },
      { nr: 3, text: "Die Lunge kompensiert durch Hyperventilation (Kussmaul-Atmung), um CO₂ abzuatmen.", korrekt: true },
      { nr: 4, text: "Der HCO₃⁻-Spiegel im Blut ist erniedrigt.", korrekt: true },
      { nr: 5, text: "Metabolische Azidose führt immer zu einem Anstieg des pCO₂.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Durch die kompensatorische Hyperventilation sinkt der pCO₂ (nicht steigt, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 070 Alkalose (mittel) ───
  {
    id: "bio-typk-new5-070",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Alkalose sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei respiratorischer Alkalose ist der pCO₂ erniedrigt (Hyperventilation).", korrekt: true },
      { nr: 2, text: "Bei metabolischer Alkalose ist der HCO₃⁻-Spiegel erhöht.", korrekt: true },
      { nr: 3, text: "Erbrechen kann durch Verlust von HCl (Magensäure) eine metabolische Alkalose verursachen.", korrekt: true },
      { nr: 4, text: "Alkalose kann zu Tetanie (Muskelkrämpfen) durch erniedrigtes ionisiertes Ca²⁺ führen.", korrekt: true },
      { nr: 5, text: "Respiratorische Alkalose wird durch die Niere durch vermehrte HCO₃⁻-Rückresorption kompensiert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei respiratorischer Alkalose kompensiert die Niere durch verminderte HCO₃⁻-Rückresorption (vermehrte Ausscheidung), nicht vermehrte (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 071 Puffersysteme im Blut (schwer) ───
  {
    id: "bio-typk-new5-071",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zu Puffersystemen im Blut sind richtig?",
    aussagen: [
      { nr: 1, text: "Neben dem Bicarbonat-Puffer gibt es den Hämoglobin-Puffer, den Phosphat-Puffer und den Proteinat-Puffer.", korrekt: true },
      { nr: 2, text: "Der Hämoglobin-Puffer ist quantitativ der zweitwichtigste Puffer im Blut.", korrekt: true },
      { nr: 3, text: "Desoxyhämoglobin kann mehr H⁺-Ionen binden als Oxyhämoglobin.", korrekt: true },
      { nr: 4, text: "Der Phosphat-Puffer ist v. a. im intrazellulären Raum und im Urin wirksam.", korrekt: true },
      { nr: 5, text: "Im Blut gibt es nur den Bicarbonat-Puffer als einziges Puffersystem.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Es gibt mehrere Puffersysteme im Blut, nicht nur den Bicarbonat-Puffer (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 072 Henderson-Hasselbalch (schwer) ───
  {
    id: "bio-typk-new5-072",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Henderson-Hasselbalch-Gleichung im biologischen Kontext sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Gleichung lautet: pH = pKₐ + log([HCO₃⁻]/[CO₂]).", korrekt: true },
      { nr: 2, text: "Das physiologische Verhältnis HCO₃⁻ : CO₂ beträgt etwa 20 : 1.", korrekt: true },
      { nr: 3, text: "Steigt der CO₂-Anteil (Nenner), sinkt der pH (Azidose).", korrekt: true },
      { nr: 4, text: "Steigt der HCO₃⁻-Anteil (Zähler), steigt der pH (Alkalose).", korrekt: true },
      { nr: 5, text: "Der pKₐ des Bicarbonat-Puffers beträgt etwa 10,1.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der pKₐ des Bicarbonat-Puffers beträgt ca. 6,1 (nicht 10,1, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 073 Kompensation (mittel) ───
  {
    id: "bio-typk-new5-073",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Kompensation von Säure-Base-Störungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Respiratorische Störungen werden renal kompensiert (HCO₃⁻-Regulation).", korrekt: true },
      { nr: 2, text: "Metabolische Störungen werden respiratorisch kompensiert (CO₂-Abatmung).", korrekt: true },
      { nr: 3, text: "Die respiratorische Kompensation setzt schnell ein (Minuten), die renale langsam (Stunden–Tage).", korrekt: true },
      { nr: 4, text: "Eine vollständige Kompensation normalisiert den pH, aber nicht die Primärstörung.", korrekt: true },
      { nr: 5, text: "Die Kompensation überkorrigiert den pH-Wert und schießt über den Normalbereich hinaus.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Eine physiologische Kompensation überkorrigiert nicht — der pH nähert sich dem Normalbereich, überschreitet ihn aber nicht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 074 Blutgasanalyse (schwer) ───
  {
    id: "bio-typk-new5-074",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Blutgasanalyse (BGA) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die BGA misst pH, pCO₂, pO₂ und berechnet HCO₃⁻ und Base Excess (BE).", korrekt: true },
      { nr: 2, text: "Der Base Excess gibt die metabolische Komponente einer Säure-Base-Störung an.", korrekt: true },
      { nr: 3, text: "Ein negativer BE deutet auf eine metabolische Azidose hin.", korrekt: true },
      { nr: 4, text: "Ein positiver BE deutet auf eine metabolische Alkalose hin.", korrekt: true },
      { nr: 5, text: "Die BGA kann nur aus venösem Blut gewonnen werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die BGA wird typischerweise aus arteriellem Blut gewonnen (A. radialis), kann aber auch kapillär oder venös entnommen werden (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 075 Nierenregulation pH (mittel) ───
  {
    id: "bio-typk-new5-075",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur renalen pH-Regulation sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Niere kann H⁺-Ionen aktiv sezernieren.", korrekt: true },
      { nr: 2, text: "Die Niere kann neues HCO₃⁻ generieren und ins Blut abgeben.", korrekt: true },
      { nr: 3, text: "Ammoniumionen (NH₄⁺) dienen als Puffer im Urin und ermöglichen die Ausscheidung von H⁺.", korrekt: true },
      { nr: 4, text: "Die renale pH-Regulation ist langsamer als die respiratorische, dafür aber nachhaltiger.", korrekt: true },
      { nr: 5, text: "Die Niere spielt keine Rolle bei der Regulation des Säure-Base-Haushalts.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Niere ist neben der Lunge das wichtigste Organ der Säure-Base-Regulation (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
];
