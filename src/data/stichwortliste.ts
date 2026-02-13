// ============================================================
// OFFIZIELLE BMS-STICHWORTLISTE 2025/2026
// Vollständig strukturiert für KI-adaptives Lernen
// ============================================================

export interface Stichwort {
  id: string;
  fach: "biologie" | "chemie" | "physik" | "mathematik";
  kapitel: string;
  kapitelNr: number;
  thema: string;
  unterthemen: string[];
  prioritaet: "hoch" | "mittel" | "niedrig";
  neu2026: boolean;
  abgedeckt: boolean;
  linkedChapterId?: string;   // Verknüpfung zum bmsKapitel-System
  linkedQuestionTags?: string[]; // Tags für Fragen-Zuordnung
}

// ============================================================
// BIOLOGIE (40 Fragen, 30 Min)
// ============================================================

const biologieStichworte: Stichwort[] = [
  // --- Kap 1: Die menschliche Zelle ---
  { id: "bio-1-01", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Allgemeine Charakteristika lebender Systeme", unterthemen: ["Kennzeichen des Lebens", "Stoffwechsel", "Reizbarkeit", "Fortpflanzung", "Wachstum", "Evolution"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-allgemein", linkedQuestionTags: ["zelle", "lebende-systeme"] },
  { id: "bio-1-02", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zelltypen", unterthemen: ["Prokaryoten", "Eukaryoten", "Unterschiede", "Bakterien", "Archaeen"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-typen", linkedQuestionTags: ["zelltypen", "prokaryoten", "eukaryoten"] },
  { id: "bio-1-03", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zellmembranen", unterthemen: ["Aufbau", "Funktion", "Flüssig-Mosaik-Modell", "Phospholipid-Doppelschicht", "Membranproteine", "Cholesterin"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-membran", linkedQuestionTags: ["zellmembran", "membran"] },
  { id: "bio-1-04", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zytoplasma", unterthemen: ["Zytosol", "Zusammensetzung", "Funktion"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-zytoplasma", linkedQuestionTags: ["zytoplasma"] },
  { id: "bio-1-05", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zellkern", unterthemen: ["Aufbau", "Funktion", "Kernporen", "Chromatin", "Chromosomen", "Nucleolus", "Kernhülle"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-kern", linkedQuestionTags: ["zellkern", "chromatin", "chromosomen"] },
  { id: "bio-1-06", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Mitochondrien", unterthemen: ["Aufbau", "Atmungskette", "ATP-Synthese", "Citratzyklus", "Oxidative Phosphorylierung", "Endosymbiontentheorie"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-mitochondrien", linkedQuestionTags: ["mitochondrien", "atmungskette", "atp"] },
  { id: "bio-1-07", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Plastiden", unterthemen: ["Überblick", "Chloroplasten", "Chromoplasten", "Leukoplasten"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-plastiden", linkedQuestionTags: ["plastiden"] },
  { id: "bio-1-08", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Endoplasmatisches Retikulum", unterthemen: ["Raues ER", "Glattes ER", "Proteinsynthese", "Lipidsynthese", "Calciumspeicher"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-er", linkedQuestionTags: ["er", "endoplasmatisches-retikulum"] },
  { id: "bio-1-09", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Golgi-Apparat", unterthemen: ["Aufbau", "Funktion", "Sortierung", "Glykosylierung", "Vesikel"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-golgi", linkedQuestionTags: ["golgi"] },
  { id: "bio-1-10", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Lysosomen und Endosomen", unterthemen: ["Lysosomen", "Endosomen", "Autophagie", "Saure Hydrolasen", "Phagozytose"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-lysosomen", linkedQuestionTags: ["lysosomen", "endosomen"] },
  { id: "bio-1-11", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Peroxisomen", unterthemen: ["Funktion", "Katalase", "β-Oxidation", "H₂O₂-Abbau"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-peroxisomen", linkedQuestionTags: ["peroxisomen"] },
  { id: "bio-1-12", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Ribosomen", unterthemen: ["Aufbau", "70S vs 80S", "Funktion", "Proteinsynthese"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-ribosomen", linkedQuestionTags: ["ribosomen"] },
  { id: "bio-1-13", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Proteasomen und Zentriolen", unterthemen: ["Proteasomen", "Proteinabbau", "Ubiquitin", "Zentriolen", "Spindelapparat"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-proteasomen", linkedQuestionTags: ["proteasomen", "zentriolen"] },
  { id: "bio-1-14", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zytoskelett", unterthemen: ["Mikrofilamente/Aktin", "Intermediärfilamente", "Mikrotubuli", "Motorproteine", "Kinesin", "Dynein"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-zytoskelett", linkedQuestionTags: ["zytoskelett", "mikrotubuli", "aktin"] },
  { id: "bio-1-15", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zellkontakte", unterthemen: ["Tight Junctions", "Desmosomen", "Gap Junctions", "Hemidesmosomen"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-kontakte", linkedQuestionTags: ["zellkontakte", "tight-junctions", "gap-junctions"] },
  { id: "bio-1-16", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Kinozilien, Geißeln, Mikrovilli", unterthemen: ["Kinozilien", "Geißeln/Flagellen", "Mikrovilli", "9+2-Struktur"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-cilien", linkedQuestionTags: ["zilien", "mikrovilli"] },
  { id: "bio-1-17", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Stofftransport", unterthemen: ["Diffusion", "Osmose", "Aktiver Transport primär", "Aktiver Transport sekundär", "Endozytose", "Exozytose", "Na⁺/K⁺-ATPase"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-transport", linkedQuestionTags: ["stofftransport", "diffusion", "osmose", "aktiver-transport"] },
  { id: "bio-1-18", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zellteilung", unterthemen: ["Zellzyklus", "G1/S/G2/M-Phase", "Mitose-Phasen", "Meiose-Phasen", "Regulation", "Checkpoints", "p53", "Cycline"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-teilung", linkedQuestionTags: ["zellteilung", "mitose", "meiose", "zellzyklus"] },
  { id: "bio-1-19", fach: "biologie", kapitel: "Die menschliche Zelle", kapitelNr: 1, thema: "Zelltod", unterthemen: ["Apoptose", "Nekrose", "Caspasen", "Unterschiede", "Bedeutung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-zelle-zelltod", linkedQuestionTags: ["apoptose", "nekrose", "zelltod"] },

  // --- Kap 2: Gewebe ---
  { id: "bio-2-01", fach: "biologie", kapitel: "Gewebe", kapitelNr: 2, thema: "Epithelgewebe", unterthemen: ["Arten", "Funktionen", "Plattenepithel", "Zylinderepithel", "Übergangsepithel", "Drüsenepithel"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-gewebe-epithel", linkedQuestionTags: ["epithelgewebe", "gewebe"] },
  { id: "bio-2-02", fach: "biologie", kapitel: "Gewebe", kapitelNr: 2, thema: "Binde- und Stützgewebe", unterthemen: ["Knochen", "Knorpel", "Fettgewebe", "Lockeres Bindegewebe", "Straffes Bindegewebe", "Kollagen", "Elastin"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-gewebe-binde", linkedQuestionTags: ["bindegewebe", "knochen", "knorpel"] },
  { id: "bio-2-03", fach: "biologie", kapitel: "Gewebe", kapitelNr: 2, thema: "Muskelgewebe", unterthemen: ["Glatte Muskulatur", "Quergestreifte Skelettmuskulatur", "Herzmuskulatur", "Sarkomer", "Gleitfilamenttheorie"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-gewebe-muskel", linkedQuestionTags: ["muskelgewebe", "sarkomer"] },
  { id: "bio-2-04", fach: "biologie", kapitel: "Gewebe", kapitelNr: 2, thema: "Nervengewebe", unterthemen: ["Neuronen", "Gliazellen", "Schwann-Zellen", "Oligodendrozyten", "Astrozyten", "Myelinscheide"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-gewebe-nerven", linkedQuestionTags: ["nervengewebe", "neuronen", "gliazellen"] },

  // --- Kap 3: Organsysteme ---
  { id: "bio-3-01", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Nervensystem", unterthemen: ["ZNS", "PNS", "Vegetatives NS", "Sympathikus", "Parasympathikus", "Synapse", "Aktionspotential", "Neurotransmitter", "Reflexbogen", "Saltatorische Erregungsleitung"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-nerven", linkedQuestionTags: ["nervensystem", "synapse", "aktionspotential"] },
  { id: "bio-3-02", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Sinnesorgane und Haut", unterthemen: ["Auge", "Ohr", "Geruch", "Geschmack", "Tastsinn", "Hautschichten", "Epidermis", "Dermis", "Subcutis", "Rezeptoren"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-sinne", linkedQuestionTags: ["sinnesorgane", "auge", "ohr", "haut"] },
  { id: "bio-3-03", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Hormonsystem", unterthemen: ["Hypothalamus-Hypophyse-Achse", "Schilddrüse", "Nebenniere", "Pankreas", "Regelkreise", "Hormone", "Insulin", "Glukagon", "Cortisol", "Adrenalin", "T3/T4"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-hormone", linkedQuestionTags: ["hormonsystem", "hormone", "endokrin"] },
  { id: "bio-3-04", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Herz-Kreislauf-System", unterthemen: ["Herzaufbau", "Erregungsleitung", "Blutkreislauf", "Blutdruck", "Blutgefäße", "Arterien", "Venen", "Kapillaren", "Großer/Kleiner Kreislauf", "Herzklappen"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-herz", linkedQuestionTags: ["herz", "kreislauf", "blutgefaesse"] },
  { id: "bio-3-05", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Blut", unterthemen: ["Zusammensetzung", "Erythrozyten", "Leukozyten", "Thrombozyten", "Gerinnung", "Blutgruppen AB0", "Rhesus-System", "Hämoglobin", "Hämatokrit"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-blut", linkedQuestionTags: ["blut", "blutgruppen", "gerinnung"] },
  { id: "bio-3-06", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Immunsystem", unterthemen: ["Angeborene Immunität", "Erworbene Immunität", "Humoral", "Zellulär", "Antikörper", "T-Zellen", "B-Zellen", "Antigene", "Immunantwort", "Impfung", "Allergie", "Autoimmun"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-immun", linkedQuestionTags: ["immunsystem", "antikoerper", "t-zellen"] },
  { id: "bio-3-07", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Lymphatisches System", unterthemen: ["Lymphknoten", "Milz", "Thymus", "Lymphe", "Lymphgefäße"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-lymphe", linkedQuestionTags: ["lymphsystem", "lymphknoten"] },
  { id: "bio-3-08", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Atmungssystem", unterthemen: ["Obere Atemwege", "Untere Atemwege", "Gasaustausch", "Atemmechanik", "Regulation", "Alveolen", "Surfactant", "Hämoglobin-O₂-Bindung"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-atmung", linkedQuestionTags: ["atmung", "gasaustausch", "lunge"] },
  { id: "bio-3-09", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Verdauungssystem", unterthemen: ["Mund", "Ösophagus", "Magen", "Dünndarm", "Dickdarm", "Leber", "Gallenblase", "Pankreas", "Enzyme", "Resorption", "Peristaltik"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-verdauung", linkedQuestionTags: ["verdauung", "enzyme", "leber"] },
  { id: "bio-3-10", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Harnsystem", unterthemen: ["Niere", "Nephron", "Filtration", "Rückresorption", "Sekretion", "Harnbildung", "Regulation", "ADH", "Aldosteron", "Gegenstromprinzip"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-niere", linkedQuestionTags: ["niere", "nephron", "harnbildung"] },
  { id: "bio-3-11", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Skelettsystem", unterthemen: ["Knochen", "Knorpel", "Gelenke", "Skelettmuskulatur", "Sehnen", "Bänder", "Osteoblasten", "Osteoklasten"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-skelett", linkedQuestionTags: ["skelett", "knochen", "gelenke"] },
  { id: "bio-3-12", fach: "biologie", kapitel: "Organsysteme", kapitelNr: 3, thema: "Fortpflanzungssystem", unterthemen: ["Hoden", "Spermatogenese", "Spermien", "Ovar", "Oogenese", "Eizelle", "Menstruationszyklus", "Hormone", "FSH", "LH", "Östrogen", "Progesteron"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-organ-fortpflanzung", linkedQuestionTags: ["fortpflanzung", "menstruationszyklus", "spermatogenese"] },

  // --- Kap 4: Frühentwicklung ---
  { id: "bio-4-01", fach: "biologie", kapitel: "Frühentwicklung", kapitelNr: 4, thema: "Befruchtung und Einnistung", unterthemen: ["Befruchtung", "Zygote", "Furchung", "Morula", "Blastozyste", "Implantation", "Akrosomreaktion"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-frueh-befruchtung", linkedQuestionTags: ["befruchtung", "einnistung"] },
  { id: "bio-4-02", fach: "biologie", kapitel: "Frühentwicklung", kapitelNr: 4, thema: "Keimblätter", unterthemen: ["Ektoderm", "Mesoderm", "Endoderm", "Derivate", "Gastrulation", "Neurulation"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-frueh-keimblaetter", linkedQuestionTags: ["keimblaetter", "ektoderm", "mesoderm", "endoderm"] },
  { id: "bio-4-03", fach: "biologie", kapitel: "Frühentwicklung", kapitelNr: 4, thema: "Embryonal- und Fetalentwicklung", unterthemen: ["Embryonalperiode", "Organogenese", "Fetalperiode", "Wachstum", "Stadien"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-frueh-embryo", linkedQuestionTags: ["embryonalentwicklung", "organogenese"] },
  { id: "bio-4-04", fach: "biologie", kapitel: "Frühentwicklung", kapitelNr: 4, thema: "Plazenta und Eihäute", unterthemen: ["Plazenta", "Funktion", "Eihäute", "Amnion", "Chorion", "Nabelschnur", "Plazentaschranke"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-frueh-plazenta", linkedQuestionTags: ["plazenta", "eihaute"] },

  // --- Kap 5: Genetik ---
  { id: "bio-5-01", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Mendelsche Regeln", unterthemen: ["Uniformität", "Spaltung", "Unabhängigkeit", "Dominant/Rezessiv", "Intermediär", "Kodominanz", "Kreuzungsschema"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-mendel", linkedQuestionTags: ["mendel", "vererbung", "kreuzung"] },
  { id: "bio-5-02", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Chromosomentheorie der Vererbung", unterthemen: ["Genkopplung", "Crossing-over", "Rekombination", "Kopplungsgruppen", "Genkartierung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-chromosom", linkedQuestionTags: ["chromosomentheorie", "crossing-over", "kopplung"] },
  { id: "bio-5-03", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Nichtchromosomale Vererbung", unterthemen: ["Mitochondriale Vererbung", "Maternale Vererbung", "Plastiden-Vererbung"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-extrachrom", linkedQuestionTags: ["mitochondriale-vererbung"] },
  { id: "bio-5-04", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Aufbau des Genoms", unterthemen: ["Eukaryotisches Genom", "Chromosomen", "Karyotyp", "Autosomen", "Gonosomen", "Heterochromatin", "Euchromatin"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-genom", linkedQuestionTags: ["genom", "chromosomen", "karyotyp"] },
  { id: "bio-5-05", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Mutationen", unterthemen: ["Genmutationen", "Chromosomenmutationen", "Genommutationen", "Mutagene", "Punktmutation", "Frameshift", "Deletion", "Translokation", "Aneuploidie"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-mutation", linkedQuestionTags: ["mutationen", "mutagene"] },
  { id: "bio-5-06", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Vererbung des Geschlechts", unterthemen: ["X-chromosomal", "Gonosomale Vererbung", "X-Inaktivierung", "Barr-Körperchen", "Y-Chromosom", "SRY-Gen"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-geschlecht", linkedQuestionTags: ["geschlechtsvererbung", "x-chromosomal"] },
  { id: "bio-5-07", fach: "biologie", kapitel: "Genetik", kapitelNr: 5, thema: "Krebsentstehung", unterthemen: ["Onkogene", "Tumorsuppressorgene", "Mehrstufenmodell", "p53", "Rb", "Metastasierung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-genetik-krebs", linkedQuestionTags: ["krebs", "onkogene", "tumorsuppressor"] },

  // --- Kap 6: Molekulare Genetik ---
  { id: "bio-6-01", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "DNA-Aufbau und Replikation", unterthemen: ["Doppelhelix", "Basenpaare", "Replikation", "Reparaturmechanismen", "Semikonservativ", "Helicase", "Polymerase", "Ligase", "Okazaki-Fragmente"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-dna", linkedQuestionTags: ["dna", "replikation", "doppelhelix"] },
  { id: "bio-6-02", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "Genetischer Code", unterthemen: ["Codons", "Degeneriertheit", "Universalität", "Start-/Stoppcodons", "Leseraster"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-code", linkedQuestionTags: ["genetischer-code", "codons"] },
  { id: "bio-6-03", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "Aufbau eukaryotischer Gene", unterthemen: ["Exons", "Introns", "Promotor", "Enhancer", "TATA-Box"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-genaufbau", linkedQuestionTags: ["exons", "introns", "promotor"] },
  { id: "bio-6-04", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "Transkription und Translation", unterthemen: ["Transkription", "Translation", "mRNA-Prozessierung", "Spleißen", "Ribosomen", "tRNA", "Elongation", "Termination"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-expression", linkedQuestionTags: ["transkription", "translation", "proteinsynthese"] },
  { id: "bio-6-05", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "RNA-Typen und Spleißen", unterthemen: ["mRNA", "tRNA", "rRNA", "snRNA", "miRNA", "Spleißen", "Alternatives Spleißen", "Spliceosom"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-rna", linkedQuestionTags: ["rna", "spleissen"] },
  { id: "bio-6-06", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "Genregulation", unterthemen: ["Operon-Modell", "Lac-Operon", "Transkriptionsfaktoren", "Enhancer", "Silencer", "Epigenetik", "DNA-Methylierung", "Histonmodifikation"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-regulation", linkedQuestionTags: ["genregulation", "operon", "epigenetik"] },
  { id: "bio-6-07", fach: "biologie", kapitel: "Molekulare Genetik", kapitelNr: 6, thema: "Proteomik und Epigenetik", unterthemen: ["Proteom", "Proteomik", "Epigenetik", "DNA-Methylierung", "Histonmodifikation", "ncRNA"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-molgen-proteomik", linkedQuestionTags: ["proteomik", "epigenetik"] },

  // --- Kap 7: NEU 2026 — Methoden der Genetik ---
  { id: "bio-7-01", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "PCR", unterthemen: ["Prinzip", "Schritte", "Denaturierung", "Annealing", "Elongation", "Taq-Polymerase", "Anwendung"], prioritaet: "hoch", neu2026: true, abgedeckt: false, linkedQuestionTags: ["pcr", "polymerase-kettenreaktion"] },
  { id: "bio-7-02", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "DNA-Sequenzierung", unterthemen: ["Sanger-Methode", "Next-Generation-Sequencing", "Kettenabbruchmethode", "Anwendung"], prioritaet: "hoch", neu2026: true, abgedeckt: false, linkedQuestionTags: ["sequenzierung", "sanger"] },
  { id: "bio-7-03", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "Genomanalyse", unterthemen: ["Gesamtgenomanalyse", "Genexpressionsanalyse", "Microarray", "Bioinformatik"], prioritaet: "mittel", neu2026: true, abgedeckt: false, linkedQuestionTags: ["genomanalyse"] },
  { id: "bio-7-04", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "Genetischer Fingerabdruck", unterthemen: ["STR-Analyse", "RFLP", "Forensik", "Vaterschaftstest"], prioritaet: "hoch", neu2026: true, abgedeckt: false, linkedQuestionTags: ["genetischer-fingerabdruck", "str"] },
  { id: "bio-7-05", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "Gentechnisch veränderte Organismen", unterthemen: ["GVO", "Transgene Organismen", "Restriktionsenzyme", "Vektoren", "Plasmide", "Transformation"], prioritaet: "mittel", neu2026: true, abgedeckt: false, linkedQuestionTags: ["gvo", "gentechnik"] },
  { id: "bio-7-06", fach: "biologie", kapitel: "Methoden der Genetik", kapitelNr: 7, thema: "Klonierung", unterthemen: ["Reproduktives Klonen", "Therapeutisches Klonen", "Dolly", "Ethische Aspekte"], prioritaet: "mittel", neu2026: true, abgedeckt: false, linkedQuestionTags: ["klonierung"] },

  // --- Kap 8: Humangenetik ---
  { id: "bio-8-01", fach: "biologie", kapitel: "Humangenetik", kapitelNr: 8, thema: "Stammbaumanalysen", unterthemen: ["Autosomal dominant", "Autosomal rezessiv", "X-chromosomal dominant", "X-chromosomal rezessiv", "Symbole", "Konduktorin"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-humgen-stammbaum", linkedQuestionTags: ["stammbaumanalyse", "erbgang"] },
  { id: "bio-8-02", fach: "biologie", kapitel: "Humangenetik", kapitelNr: 8, thema: "Genetische Beratung und Diagnostik", unterthemen: ["Genetische Beratung", "Genetische Diagnostik", "Risikoberechnung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["genetische-beratung"] },
  { id: "bio-8-03", fach: "biologie", kapitel: "Humangenetik", kapitelNr: 8, thema: "Erbgänge vertieft", unterthemen: ["Multifaktorielle Vererbung", "Polygenie", "Pleiotropie", "Penetranz", "Expressivität"], prioritaet: "hoch", neu2026: true, abgedeckt: false, linkedQuestionTags: ["erbgaenge", "penetranz"] },
  { id: "bio-8-04", fach: "biologie", kapitel: "Humangenetik", kapitelNr: 8, thema: "Präimplantations- und Pränataldiagnostik", unterthemen: ["PID", "PND", "Amniozentese", "Chorionzottenbiopsie", "NIPT", "Ultraschall", "Triple-Test", "Ethische Aspekte"], prioritaet: "hoch", neu2026: true, abgedeckt: false, linkedQuestionTags: ["pid", "pnd", "praenataldiagnostik"] },

  // --- Kap 9: Evolution ---
  { id: "bio-9-01", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Entstehung des Lebens", unterthemen: ["Chemische Evolution", "Miller-Experiment", "Ursuppe", "Biogenese", "Protobionten", "RNA-Welt"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "bio-evo-entstehung", linkedQuestionTags: ["chemische-evolution", "miller"] },
  { id: "bio-9-02", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Endosymbiontentheorie", unterthemen: ["Mitochondrien", "Chloroplasten", "Belege", "Lynn Margulis"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["endosymbiontentheorie"] },
  { id: "bio-9-03", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Phylogenetik", unterthemen: ["Stammbäume", "Homologie", "Analogie", "Konvergenz", "Divergenz", "Molekulare Phylogenie"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["phylogenetik", "homologie", "stammbaum"] },
  { id: "bio-9-04", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Evolutionstheorie", unterthemen: ["Darwin", "Lamarck", "Natürliche Selektion", "Synthetische Evolutionstheorie"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "bio-evo-theorie", linkedQuestionTags: ["evolution", "darwin", "selektion"] },
  { id: "bio-9-05", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Artbegriff und Artbildung", unterthemen: ["Biologischer Artbegriff", "Allopatrische Artbildung", "Sympatrische Artbildung", "Reproduktive Isolation"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["artbildung", "artbegriff", "isolation"] },
  { id: "bio-9-06", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Evolutionsfaktoren", unterthemen: ["Mutation", "Selektion", "Gendrift", "Genfluss", "Rekombination", "Hardy-Weinberg"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedQuestionTags: ["evolutionsfaktoren", "selektion", "gendrift"] },
  { id: "bio-9-07", fach: "biologie", kapitel: "Evolution", kapitelNr: 9, thema: "Entwicklung des Menschen", unterthemen: ["Hominiden", "Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens", "Out-of-Africa"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["hominiden", "menschliche-evolution"] },

  // --- Kap 10: Ökologie ---
  { id: "bio-10-01", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Abiotische Faktoren", unterthemen: ["Temperatur", "Licht", "Wasser", "Toleranzkurve", "Minimum-Gesetz", "Stenök/Euryök"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["abiotische-faktoren", "toleranz"] },
  { id: "bio-10-02", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Biotische Faktoren", unterthemen: ["Konkurrenz", "Prädation", "Symbiose", "Parasitismus", "Kommensalismus", "Mutualismus"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["biotische-faktoren", "symbiose"] },
  { id: "bio-10-03", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Population", unterthemen: ["Wachstum", "Regulation", "r/K-Strategie", "Logistisches Wachstum", "Kapazitätsgrenze"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["population", "populationswachstum"] },
  { id: "bio-10-04", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Ökologische Nische", unterthemen: ["Fundamentale Nische", "Realisierte Nische", "Konkurrenzausschlussprinzip"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["oekologische-nische"] },
  { id: "bio-10-05", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Ökosysteme", unterthemen: ["Stoffkreisläufe", "Energiefluss", "Nahrungskette", "Nahrungsnetz", "Trophieebenen", "Kohlenstoffkreislauf", "Stickstoffkreislauf"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["oekosystem", "nahrungskette", "stoffkreislauf"] },
  { id: "bio-10-06", fach: "biologie", kapitel: "Ökologie", kapitelNr: 10, thema: "Umweltschutz", unterthemen: ["Biodiversität", "Klimawandel", "Nachhaltigkeit", "Artenschutz"], prioritaet: "niedrig", neu2026: false, abgedeckt: true, linkedQuestionTags: ["umweltschutz"] },

  // --- Kap 11: Immunbiologie ---
  { id: "bio-11-01", fach: "biologie", kapitel: "Immunbiologie", kapitelNr: 11, thema: "Antikörper", unterthemen: ["Aufbau IgG", "Klassen IgG/IgA/IgM/IgE/IgD", "Funktion", "Fab/Fc-Region", "Opsonisierung", "Neutralisierung"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedQuestionTags: ["antikoerper", "immunglobuline"] },
  { id: "bio-11-02", fach: "biologie", kapitel: "Immunbiologie", kapitelNr: 11, thema: "Gene der Antikörper", unterthemen: ["Somatische Rekombination", "V(D)J-Rekombination", "Klonale Selektion", "Affinitätsreifung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["antikoerper-gene", "somatische-rekombination"] },
  { id: "bio-11-03", fach: "biologie", kapitel: "Immunbiologie", kapitelNr: 11, thema: "Blutgruppen-Vererbung", unterthemen: ["AB0-Vererbung", "Genotypen", "Phänotypen", "Kodominanz", "Multiple Allele"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedQuestionTags: ["blutgruppen-vererbung", "ab0"] },
  { id: "bio-11-04", fach: "biologie", kapitel: "Immunbiologie", kapitelNr: 11, thema: "Rhesusfaktor", unterthemen: ["Rh-positiv/negativ", "Vererbung", "Rhesus-Inkompatibilität", "Morbus haemolyticus neonatorum", "Anti-D-Prophylaxe"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedQuestionTags: ["rhesusfaktor", "rhesus-inkompatibilitaet"] },
];

// ============================================================
// CHEMIE (24 Fragen, 18 Min)
// ============================================================

const chemieStichworte: Stichwort[] = [
  { id: "ch-1-01", fach: "chemie", kapitel: "Atombau", kapitelNr: 1, thema: "Elementarteilchen und Atomaufbau", unterthemen: ["Protonen", "Neutronen", "Elektronen", "Atomkern", "Elektronenhülle", "Nuklide", "Isotope", "Massenzahl", "Ordnungszahl"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-atombau", linkedQuestionTags: ["atombau", "elementarteilchen"] },
  { id: "ch-2-01", fach: "chemie", kapitel: "Mikrokosmos", kapitelNr: 2, thema: "Quantenmechanik-Grundlagen", unterthemen: ["Unschärferelation", "Elektromagnetische Strahlung", "Teilchen-Welle-Dualismus", "Lichtspektrum", "Photonen"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["quantenmechanik", "welle-teilchen"] },
  { id: "ch-3-01", fach: "chemie", kapitel: "Gasgesetze", kapitelNr: 3, thema: "Gasgesetze", unterthemen: ["Gay-Lussac", "Boyle-Mariotte", "Absolute Temperatur", "Ideale Gasgleichung", "pV=nRT", "Molares Volumen"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-gasgesetze", linkedQuestionTags: ["gasgesetze", "ideales-gas"] },
  { id: "ch-4-01", fach: "chemie", kapitel: "Aggregatzustände", kapitelNr: 4, thema: "Phasen und Phasenübergänge", unterthemen: ["Fest", "Flüssig", "Gasförmig", "Schmelzen", "Verdampfen", "Sublimieren", "Phasendiagramm", "Tripelpunkt"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedChapterId: "ch-aggregat", linkedQuestionTags: ["aggregatzustaende", "phasen"] },
  { id: "ch-5-01", fach: "chemie", kapitel: "Periodensystem", kapitelNr: 5, thema: "Periodensystem", unterthemen: ["Ordnungsprinzip", "Gruppen", "Perioden", "Schalen", "Elektronegativität", "Ionisierungsenergie", "Atomradius", "Trends"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-pse", linkedQuestionTags: ["periodensystem", "pse"] },
  { id: "ch-6-01", fach: "chemie", kapitel: "Chemische Bindung", kapitelNr: 6, thema: "Bindungstypen", unterthemen: ["Ionenbindung", "Atombindung/Kovalent", "Metallbindung", "Van-der-Waals", "Wasserstoffbrücken", "Dipol", "Elektronegativitätsdifferenz"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-bindungen", linkedQuestionTags: ["bindung", "ionenbindung", "kovalent"] },
  { id: "ch-7-01", fach: "chemie", kapitel: "Chemische Reaktionen", kapitelNr: 7, thema: "Reaktionen und Stöchiometrie", unterthemen: ["Chemische Symbole", "Formelschreibweise", "Stöchiometrie", "Mol", "Avogadro", "Molare Masse", "Reaktionsgleichung"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-reaktionen", linkedQuestionTags: ["stoechiometrie", "mol", "reaktion"] },
  { id: "ch-8-01", fach: "chemie", kapitel: "Chemisches Gleichgewicht", kapitelNr: 8, thema: "Gleichgewicht und Kinetik", unterthemen: ["Reaktionsgeschwindigkeit", "Aktivierungsenergie", "Exotherm/Endotherm", "Massenwirkungsgesetz", "Katalysator", "Le Chatelier", "Gleichgewichtskonstante"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-gleichgewicht", linkedQuestionTags: ["gleichgewicht", "kinetik", "katalysator"] },
  { id: "ch-9-01", fach: "chemie", kapitel: "Elemente und Verbindungen", kapitelNr: 9, thema: "Wichtige Elemente", unterthemen: ["Wasserstoff", "Sauerstoff", "Wasser", "Kohlenstoff", "CO₂", "Kohlensäure", "Stickstoff", "Halogene", "Schwefel", "Oxide"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["elemente", "verbindungen", "wasser"] },
  { id: "ch-10-01", fach: "chemie", kapitel: "Säure-Base", kapitelNr: 10, thema: "Säure-Base-Reaktionen", unterthemen: ["Autoprotolyse", "pH-Wert", "Brønsted", "Säurestärke", "pKs", "Mineralsäuren", "Salze", "Puffer", "Henderson-Hasselbalch", "Neutralisation", "Indikatoren"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-saeure-base", linkedQuestionTags: ["saeure-base", "ph-wert", "puffer"] },
  { id: "ch-11-01", fach: "chemie", kapitel: "Redox-Reaktionen", kapitelNr: 11, thema: "Redox und Elektrochemie", unterthemen: ["Oxidation", "Reduktion", "Oxidationszahlen", "Galvanisches Element", "Redox-Potenzial", "Elektrolyse", "Spannungsreihe", "Nernst"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-redox", linkedQuestionTags: ["redox", "oxidation", "elektrochemie"] },
  { id: "ch-12-01", fach: "chemie", kapitel: "Organische Chemie", kapitelNr: 12, thema: "Organische Verbindungen", unterthemen: ["Kohlenwasserstoffe", "Alkane", "Alkene", "Alkine", "Aromaten", "Funktionelle Gruppen", "Alkohole", "Aldehyde", "Ketone", "Carbonsäuren", "Ester", "Amine", "Isomerie"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-organik", linkedQuestionTags: ["organische-chemie", "funktionelle-gruppen"] },
  { id: "ch-13-01", fach: "chemie", kapitel: "Naturstoffe", kapitelNr: 13, thema: "Biomoleküle", unterthemen: ["Kohlenhydrate", "Proteine", "Aminosäuren", "Fette", "Lipide", "Nukleinsäuren", "DNA/RNA", "Vitamine", "Enzyme"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ch-naturstoffe", linkedQuestionTags: ["naturstoffe", "biomolekuele", "kohlenhydrate", "proteine"] },
];

// ============================================================
// PHYSIK (18 Fragen, 16 Min)
// ============================================================

const physikStichworte: Stichwort[] = [
  { id: "ph-1-01", fach: "physik", kapitel: "Größen und Einheiten", kapitelNr: 1, thema: "Größen und Einheiten", unterthemen: ["Grundgrößen", "Abgeleitete Größen", "SI-Einheiten", "Präfixe", "Umrechnung"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["einheiten", "groessen"] },
  { id: "ph-2-01", fach: "physik", kapitel: "Mechanik", kapitelNr: 2, thema: "Mechanik", unterthemen: ["Newton'sche Gesetze", "Erhaltungssätze", "Translation", "Rotation", "Arbeit", "Energie", "Impuls", "Leistung", "Gravitation", "Reibung", "Dichte", "Auftrieb", "Bernoulli", "Druck"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-mechanik", linkedQuestionTags: ["mechanik", "newton", "energie", "impuls"] },
  { id: "ph-3-01", fach: "physik", kapitel: "Schwingungen und Wellen", kapitelNr: 3, thema: "Schwingungen und Wellen", unterthemen: ["Pendel", "Harmonische Schwingungen", "Gedämpfte Schwingungen", "Elementarwellen", "Harmonische Wellen", "Überlagerung", "Interferenz", "Beugung", "Polarisation", "Stehende Wellen"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-wellen", linkedQuestionTags: ["schwingungen", "wellen", "interferenz"] },
  { id: "ph-4-01", fach: "physik", kapitel: "Wärmelehre", kapitelNr: 4, thema: "Thermodynamik", unterthemen: ["Temperatur", "Innere Energie", "Aggregatzustände", "Osmotischer Druck", "Arbeit und Wärme", "Hauptsätze", "Gasgesetz", "Zustandsgleichung", "Wärmekraftmaschinen", "Anomalie des Wassers", "Spezifische Wärmekapazität"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-waerme", linkedQuestionTags: ["thermodynamik", "waerme", "hauptsaetze"] },
  { id: "ph-5-01", fach: "physik", kapitel: "Elektrizitätslehre", kapitelNr: 5, thema: "Elektrizität und Magnetismus", unterthemen: ["Elektrische Ladungen", "Elektrisches Feld", "Spannung", "Stromstärke", "Leiter", "Ohmscher Widerstand", "Ohmsches Gesetz", "Kirchhoff", "Leistung und Arbeit", "Magnetfeld", "Wechselstrom", "Effektivwert", "EM-Wellen", "Frequenzspektrum"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-elektrizitaet", linkedQuestionTags: ["elektrizitaet", "ohm", "kirchhoff", "magnetfeld"] },
  { id: "ph-6-01", fach: "physik", kapitel: "Optik", kapitelNr: 6, thema: "Optik", unterthemen: ["Geometrische Optik", "Wellenoptik", "Welle-Teilchen-Dualismus", "Absorption", "Brechung", "Reflexion", "Totalreflexion", "Linsen", "Optische Geräte", "Optik des Auges", "Dispersion"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-optik", linkedQuestionTags: ["optik", "brechung", "linsen"] },
  { id: "ph-7-01", fach: "physik", kapitel: "Atomphysik", kapitelNr: 7, thema: "Atom- und Kernphysik", unterthemen: ["Atomaufbau", "Atomkern", "Starke/Schwache Wechselwirkung", "Elektronen-Orbitale", "Kernkräfte", "Kernspaltung", "Kernfusion", "Antiteilchen", "Radioaktive Stoffe", "Radioaktivität", "Aktivität", "Ionisierende Strahlung", "Absorption", "Kosmische Strahlung", "α-/β-/γ-Zerfall", "Halbwertszeit"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ph-atomphysik", linkedQuestionTags: ["atomphysik", "kernphysik", "radioaktivitaet"] },
];

// ============================================================
// MATHEMATIK (12 Fragen, 11 Min)
// ============================================================

const mathematikStichworte: Stichwort[] = [
  { id: "ma-1-01", fach: "mathematik", kapitel: "Zehnerpotenzen", kapitelNr: 1, thema: "Zehnerpotenzen", unterthemen: ["Präfixe", "Rechenbeispiele", "Wissenschaftliche Notation", "Größenordnungen"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["zehnerpotenzen", "praefixe"] },
  { id: "ma-2-01", fach: "mathematik", kapitel: "Algebra", kapitelNr: 2, thema: "Algebra", unterthemen: ["Schlussrechnung", "Prozentrechnung", "Bruchrechnung", "Gleichungen", "Ungleichungen", "Quadratische Gleichungen", "Binomische Formeln", "Potenzgesetze", "Wurzelgesetze"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ma-algebra", linkedQuestionTags: ["algebra", "gleichungen", "prozent", "bruch"] },
  { id: "ma-3-01", fach: "mathematik", kapitel: "Geometrie", kapitelNr: 3, thema: "Geometrie", unterthemen: ["Winkel", "Kreis", "Rechteck", "Dreieck", "Prisma", "Quader", "Zylinder", "Kugel", "Pyramide", "Tetraeder", "Flächen", "Volumina", "Umfänge"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ma-geometrie", linkedQuestionTags: ["geometrie", "flaechen", "volumina"] },
  { id: "ma-4-01", fach: "mathematik", kapitel: "Einheiten", kapitelNr: 4, thema: "Einheiten", unterthemen: ["Zeit", "Länge", "Flächen", "Volumina", "Umrechnungen", "SI-System"], prioritaet: "mittel", neu2026: false, abgedeckt: true, linkedQuestionTags: ["einheiten", "umrechnung"] },
  { id: "ma-5-01", fach: "mathematik", kapitel: "Funktionen", kapitelNr: 5, thema: "Funktionen und Analysis", unterthemen: ["Winkelfunktionen", "e-Funktion", "Logarithmus", "Potenzfunktion", "Differential", "Integral", "Geradenfunktion", "Ableitungsregeln", "Extremwerte"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ma-analysis", linkedQuestionTags: ["funktionen", "analysis", "ableitung", "integral"] },
  { id: "ma-6-01", fach: "mathematik", kapitel: "Vektorrechnung", kapitelNr: 6, thema: "Vektorrechnung", unterthemen: ["Betrag", "Winkel", "Einheitsvektor", "Normalvektor", "Addition", "Subtraktion", "Skalarprodukt", "Kreuzprodukt"], prioritaet: "hoch", neu2026: false, abgedeckt: true, linkedChapterId: "ma-vektoren", linkedQuestionTags: ["vektoren", "skalarprodukt"] },
];

// ============================================================
// ZUSAMMENFÜHRUNG + HILFSFUNKTIONEN
// ============================================================

export const alleStichworteBio = biologieStichworte;
export const alleStichworteChemie = chemieStichworte;
export const alleStichwortePhysik = physikStichworte;
export const alleStichworteMathe = mathematikStichworte;

export const alleStichworteListe: Stichwort[] = [
  ...biologieStichworte,
  ...chemieStichworte,
  ...physikStichworte,
  ...mathematikStichworte,
];

// Hilfsfunktionen
export function getStichwortById(id: string): Stichwort | undefined {
  return alleStichworteListe.find((s) => s.id === id);
}

export function getStichworteByFach(fach: Stichwort["fach"]): Stichwort[] {
  return alleStichworteListe.filter((s) => s.fach === fach);
}

export function getStichworteByKapitel(fach: string, kapitelNr: number): Stichwort[] {
  return alleStichworteListe.filter((s) => s.fach === fach && s.kapitelNr === kapitelNr);
}

export function getNeu2026Stichworte(): Stichwort[] {
  return alleStichworteListe.filter((s) => s.neu2026);
}

export function getAbdeckungsStatistik(fach?: Stichwort["fach"]) {
  const list = fach ? getStichworteByFach(fach) : alleStichworteListe;
  const total = list.length;
  const abgedeckt = list.filter((s) => s.abgedeckt).length;
  const hoch = list.filter((s) => s.prioritaet === "hoch").length;
  const hochAbgedeckt = list.filter((s) => s.prioritaet === "hoch" && s.abgedeckt).length;
  const neu2026 = list.filter((s) => s.neu2026).length;
  const neu2026Abgedeckt = list.filter((s) => s.neu2026 && s.abgedeckt).length;
  return {
    total,
    abgedeckt,
    prozent: total > 0 ? Math.round((abgedeckt / total) * 100) : 0,
    hoch,
    hochAbgedeckt,
    hochProzent: hoch > 0 ? Math.round((hochAbgedeckt / hoch) * 100) : 0,
    neu2026,
    neu2026Abgedeckt,
  };
}

// Fach-Metadaten
export const fachConfig = {
  biologie: { label: "Biologie", fragen: 40, minuten: 30, color: "emerald", icon: "BookOpen" },
  chemie: { label: "Chemie", fragen: 24, minuten: 18, color: "red", icon: "Flask" },
  physik: { label: "Physik", fragen: 18, minuten: 16, color: "blue", icon: "Atom" },
  mathematik: { label: "Mathematik", fragen: 12, minuten: 11, color: "violet", icon: "Calculator" },
} as const;
