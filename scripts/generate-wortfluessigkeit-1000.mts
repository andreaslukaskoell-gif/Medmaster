/**
 * Generates ~1000 validated Wortflüssigkeit tasks (MedAT format).
 * Nur Nomen (Substantive), ohne Umlaute (Ä, Ö, Ü, ß).
 * Run: npx tsx scripts/generate-wortfluessigkeit-1000.mts
 * Output: src/data/kffWortfluessigkeit1000.ts
 */
import { writeFileSync } from "fs";
import { join } from "path";

/** Enthält das Wort Umlaute/ß oder Ersetzungen (AE, OE, UE)? Dann ausschließen – wirklich kein Wort, wo im Deutschen ein Umlaut vorkäme. */
function hasUmlautOrReplacement(word: string): boolean {
  if (/[ÄÖÜäöüß]/u.test(word)) return true;
  const w = word.toUpperCase();
  return w.includes("AE") || w.includes("OE") || w.includes("UE");
}

/** Typische Verb-Infinitiv – nur Nomen verwenden. */
function isLikelyVerbInfinitive(word: string): boolean {
  const w = word.toUpperCase();
  if (w.length < 6 || !w.endsWith("EN")) return false;
  const verbPrefixes = ["ANBIET", "ANFANG", "ANMELD", "ANPASS", "ANWEND", "AUFBAU", "AUFNEHM", "BEDEUT", "BEGLEIT", "BEHALT", "BESCHLIESS", "BESPRECH", "BESTIMM", "BETREU", "BEZAHL", "DARSTELL", "DURCHFUHR", "EINHALT", "EINRICHT", "EINSCHATZ", "EINWILLIG", "EMPFEHL", "ENTSCHEID", "ENTWICKEL", "ERFULL", "ERHALT", "ERINNER", "ERKLAR", "ERLEDIG", "ERWEITER", "FESTLEG", "FESTSTELL", "FORDER", "GENEHMIG", "GESTALT", "HANDHAB", "KOMBINIER", "KONTROLLIER", "KORRIGIER", "MELD", "NACHWEIS", "PRUEF", "RECHN", "SAMMEL", "SICHERSTELL", "STEUER", "UBERPRUEF", "UMSETZ", "UNTERSUCH", "VERBESSER", "VERBIND", "VEREINBAR", "VERMITTEL", "VEROFFENTLICH", "VERSCHIEB", "VERSORG", "VERTRET", "VERWALT", "VERWEND", "VERWIRKLICH", "VORBEREIT", "VORSTELL", "WARN", "WIRK"];
  return verbPrefixes.some((p) => w === p + "EN" || (w.startsWith(p) && w.length <= p.length + 3));
}

const WORD_POOL_LEICHT = [
  "HAUSTIER", "GESCHENK", "BRUNNEN", "PFLASTER", "FENSTER", "GARTEN", "KUCHEN", "LAMPE", "TELLER",
  "ZIMMER", "DECKEL", "BEUTEL", "WOLKEN", "STEINE", "HERBST", "WINTER", "SOMMER", "STUHL", "REGEN",
  "WASSER", "FEUER", "STEIN", "BAUM", "WALD", "BERG", "SAND", "MEER", "STERN", "LICHT", "KRAFT",
  "TRAUM", "DIENST", "BRIEF", "FRUCHT", "GLOCKE", "KISSEN", "MANTEL", "PLATZ", "STROM", "TURM",
  "WURZEL", "BLATT", "FEDER", "GRUND", "INSEL", "KUGEL", "NEBEL", "BLUME", "TORTE", "SCHUH", "TISCH",
  "PFERD", "VOGEL", "KIRCHE", "HUND", "KATZE", "MAUS", "FISCH", "BROT", "MILCH", "BIRNE", "APFEL",
  "PILZ", "ROSE", "TULPE", "LILIE", "KERZE", "DORF", "STADT", "FLUSS", "TEICH", "WIESE", "HECKE",
  "ZAUN", "MAUER", "DACH", "WAND", "BODEN", "SEIL", "KETTE", "RING", "NAGEL", "DRAHT", "KNOPF",
  "NADEL", "GABEL", "MESSER", "SCHALE", "KANNE", "KORB", "EIMER", "TONNE", "DOSE", "GLAS", "TOPF",
  "OFEN", "HERD", "BANK", "REGAL", "SOFA", "BETT", "KISTE", "BILD", "RAHMEN", "STIFT", "FARBE",
  "PINSEL", "SCHERE", "PAPIER", "BLOCK", "HEFT", "BUCH", "SEITE", "PERLE", "HARFE", "GEIGE", "ORGEL",
  "KLEID", "HEMD", "ROCK", "JACKE", "HOSE", "HELM", "KAPPE", "SCHAL", "ANKER", "FLAGGE", "HAFEN",
  "DAMM", "DEICH", "BACH", "WELLE", "WOLKE", "BLITZ", "DONNER", "STURM", "FROST", "SCHNEE", "HAGEL",
  "DUNST", "ERNTE", "SAAT", "KORN", "WEIZEN", "ROGGEN", "HAFER", "GERSTE", "MALZ", "HONIG", "ZUCKER",
  "SALZ", "PFEFFER", "ESSIG", "SAHNE", "BUTTER", "MEHL", "TEIG", "SUPPE", "BRATEN", "SENF", "WURST", "SPECK",
];
const WORD_POOL_MITTEL = [
  "HANDWERK", "ERDBEERE", "SCHMETTERLING", "BERGSTEIGER", "ZEITGEIST", "STRASSENBAHN", "REGENSCHIRM",
  "SCHNEEFLOCKE", "FAHRSCHEIN", "BRIEFMARKE", "DACHBODEN", "KIRCHTURM", "SCHULRANZEN",
  "HALSKETTE", "LANDKARTE", "TRINKGLAS", "MAHLZEIT", "NACHRICHTEN", "SPIELPLATZ", "WERKSTATT",
  "FREIHEIT", "GLEICHGEWICHT", "BAUERNHOF", "NATURSCHUTZ", "HANDSCHRIFT", "LEBENSRAUM", "FREUNDSCHAFT",
  "APOTHEKE", "WASSERFALL", "AUTOBAHN", "FAHRKARTE", "RATHAUS", "FLUGHAFEN", "MARKTPLATZ", "TURNHALLE",
  "SCHWIMMBAD", "KRANKENHAUS", "GRUNDSCHULE", "HOCHSCHULE", "BUCHHANDEL", "SPIELKARTE", "BACKOFEN",
  "TAGESZEIT", "NACHTRUHE", "WANDUHR", "ZEITSCHRIFT", "BILDSCHIRM", "TASTATUR", "FERNSEHER",
  "STAUBSAUGER", "WASCHBECKEN", "BADEWANNE", "HANDTASCHE", "RUCKSACK",
  "KACHELOFEN", "TREPPENHAUS", "HAUSFLUR", "GARDEROBE", "KOCHBUCH", "BLUMENTOPF", "GIESSKANNE",
  "GARTENZAUN", "VOGELHAUS", "LICHTUNG", "BAUMSTAMM", "WURZELWERK", "LAUBWALD",
  "SONNENBLUME", "KORNBLUME", "SEEROSE", "FLUSSBETT", "BIENENSTOCK",
];
const WORD_POOL_SCHWER = [
  "BLITZABLEITER", "KRANKENSCHWESTER", "VERSICHERUNG", "STRASSENKREUZUNG", "SCHNEELANDSCHAFT",
  "BUNDESKANZLER", "KRISTALLGITTER", "SCHWERPUNKT", "ZUSAMMENFASSUNG", "WETTBEWERB",
  "WELTMEISTERSCHAFT", "VERANTWORTUNG", "GESUNDHEITSWESEN", "FRIEDENSVERTRAG", "BERUFSERFAHRUNG",
  "FORTPFLANZUNG", "GEBIRGSLANDSCHAFT", "WERKZEUGKASTEN", "FERNBEDIENUNG", "WISSENSCHAFTLER",
  "REGIERUNGSSPRECHER", "BUNDESSTRASSE", "STRASSENSPERRUNG", "VERKEHRSZEICHEN", "KREISVERKEHR",
  "ARBEITGEBER", "ARBEITNEHMER", "SOZIALVERSICHERUNG",
  "RENTENVERSICHERUNG", "VOLKSHOCHSCHULE", "BERUFSAUSBILDUNG", "STUDIENABSCHLUSS", "FORSCHUNGSARBEIT",
  "NATURWISSENSCHAFT", "GEISTESWISSENSCHAFT", "WIRTSCHAFTSLEHRE", "INFORMATIONSTECHNIK",
  "DATENVERARBEITUNG", "BETRIEBSSYSTEM", "RECHTSANWALT", "VERWALTUNGSRECHT", "KRANKENHAUSAUFENTHALT",
  "NOTAUFNAHME", "REHABILITATIONSZENTRUM", "GESUNDHEITSMINISTER", "ORGANTRANSPLANTATION",
  "UMWELTVERSCHMUTZUNG", "ENERGIEVERSORGUNG", "SONNENKRAFTWERK", "WINDKRAFTANLAGE",
];
const TRAINING_WF_WORDS: Record<1 | 2 | 3, string[]> = {
  1: ["HAUS", "BAUM", "HUND", "TIER", "ARZT", "BLUT", "HERZ", "MOND", "BILD", "WAND", "DACH", "GELD", "RING", "BERG", "TUCH", "WORT", "SEIL", "HAND", "GOLD", "BALL", "MAUS", "REIS", "SALZ", "HAUT", "NASE", "OFEN", "TOPF", "BROT", "MILCH", "LAMPE", "STUHL", "TISCH", "STERN", "KRAFT", "BRIEF", "STEIN", "GABEL", "NADEL", "KERZE", "BIRNE", "WOLKE", "BLUME", "FARBE", "KARTE", "ORGAN", "LEBER", "LUNGE", "NIERE", "ZELLE", "GEIST", "SONNE", "REGEN", "FEDER", "DRAHT", "KOHLE", "SUPPE", "SAHNE", "KNOPF", "GRUND", "PFERD", "KATZE", "FLORA", "STURM", "VOGEL", "PILZ", "ROSE"],
  2: ["GARTEN", "SCHULE", "KIRCHE", "WASSER", "BRILLE", "PFLEGE", "FENSTER", "MESSER", "KISSEN", "BALKON", "KAFFEE", "ZUCKER", "FORMEN", "FLIEGE", "SOMMER", "WINTER", "FRUCHT", "KELLER", "FINGER", "MUTTER", "BRUDER", "STANGE", "MAGNET", "PLATTE", "FELSEN", "MANTEL", "TELLER", "DECKEL", "BREMSE", "BECHER", "SYMPTOM", "FIEBER", "RISIKO", "CHANCE", "FLASCHE", "PFLICHT", "KNOCHEN", "SKELETT", "TROPFEN", "SCHMERZ", "PATIENT", "THEORIE", "WIRKUNG", "URSACHE", "HEILUNG", "STEMPEL", "SCHRANK", "STIEFEL", "PROTEIN", "NAHRUNG", "RAHMEN", "BILDUNG", "AMPERE"],
  3: ["DIAGNOSE", "OPERATION", "KRANKHEIT", "THERAPIE", "ANATOMIE", "MATHEMATIK", "VERDAUUNG", "KREISLAUF", "CHROMOSOM", "BLUTDRUCK", "SAUERSTOFF", "STICKSTOFF", "KOHLENSTOFF", "MAGNETFELD", "SCHWERKRAFT", "EVOLUTION", "MUTATION", "INFEKTION", "MEDIKAMENT", "CHIRURGIE", "NEUROLOGIE", "KARDIOLOGIE", "BIOCHEMIE", "ORGANISMUS", "PATHOLOGIE", "PHARMAZIE", "ZELLKERN", "REAKTION", "GLEICHUNG", "SEHKRAFT", "BLUTZUCKER", "HYPOTHESE", "STATISTIK", "PARAMETER", "INSTRUMENT", "DIMENSION", "FREQUENZ", "AMPLITUDE", "FORSCHUNG", "BIBLIOTHEK", "UNIVERSUM", "TEMPERATUR", "EXPERIMENT", "BEHANDLUNG", "SPANNUNG", "KRANKENHAUS", "WISSENSCHAFT", "PHILOSOPHIE", "NERVENSYSTEM", "GLEICHGEWICHT"],
};
const EXTRA_WORDS = [
  "ABEND", "ABLAUF", "ABSCHIED", "ACHTUNG", "ANFANG", "ANLAGE", "ANRUF", "ANSPRUCH", "ANTWORT", "ANWALT", "APRIL",
  "ARBEIT", "AUGUST", "AUSWAHL", "AUTOMAT", "BEDARF", "BEDEUTUNG", "BEGRIFF", "BEHORDE", "BEITRAG", "BEREICH",
  "BERICHT", "BESUCH", "BETRAG", "BEZUG", "BLICK", "BOTSCHAFT", "BRAND", "BUNDESLAND", "CHARAKTER", "COMPUTER",
  "DATUM", "DENKMAL", "DETAIL", "DIENSTAG", "DOKUMENT", "DONNERSTAG", "DURCHSCHNITT", "EINDRUCK", "EINHEIT",
  "EINNAHME", "EINRICHTUNG", "EINTRITT", "EINWOHNER", "ERFOLG", "ERGEBNIS", "ERINNERUNG", "ERKLARUNG", "ERLEBNIS",
  "ERWARTUNG", "FACHBEREICH", "FEBRUAR", "FERNSEHEN", "FESTIVAL", "FEUERWEHR", "FILM", "FREITAG", "FREUND",
  "FRIEDEN", "FUNKTION", "GARANTIE", "GEBURT", "GEDANKE", "GEGENTEIL", "GEHALT", "GEMEINDE", "GEPACK", "GERICHT",
  "GESCHAFT", "GESCHICHTE", "GESELLSCHAFT", "GESICHT", "GESPRACH", "GESTALT", "GEWICHT", "GEWOHNHEIT", "GLAUBE",
  "GRENZE", "GRUNDLAGE", "GRUNDSATZ", "GRUPPE", "HALBJAHR", "HANDLUNG", "HAUPTSTADT", "HAUSAUFGABE", "HAUSHALT",
  "HEIMAT", "HILFE", "HINWEIS", "HOCHSCHULE", "HORIZONT", "IDEAL", "INDUSTRIE", "INHALT", "INTERESSE", "JANUAR",
  "JUGEND", "JUNI", "JULI", "KAMPAGNE", "KAPITEL", "KATASTROPHE", "KENNTNIS", "KINDERGARTEN", "KLASSE",
  "KOMMENTAR", "KOMMUNIKATION", "KONFLIKT", "KONZERT", "KOPF", "KORPER", "KOSTEN", "KREIS", "KULTUR", "KUNDE",
  "KUNST", "LAGE", "LAND", "LEBEN", "LEISTUNG", "LITERATUR", "LOSUNG", "MASCHINE", "MAI", "MASSNAHME",
  "MATERIAL", "MEDIZIN", "MEINUNG", "MENSCH", "METHODE", "MIETWOHNUNG", "MITTWOCH", "MOMENT", "MONTAG", "MUSEUM",
  "MUSIK", "NACHBAR", "NACHT", "NOVEMBER", "OKTOBER", "ORDNUNG", "PARK", "PARTNER", "PARTEI", "PERSON", "PLAN",
  "POLITIK", "PRAXIS", "PREIS", "PROBLEM", "PRODUKT", "PROGRAMM", "PROJEKT", "QUALITAT", "RADIO", "RAT", "RAUM",
  "RECHT", "REGEL", "REGION", "REIHE", "REISE", "REST", "RICHTER", "SAMSTAG", "SATZ", "SCHICKSAL",
  "SCHLUSS", "SCHRITT", "SCHULTER", "SCHWESTER", "SEPTEMBER", "SICHT", "SITZUNG", "SONNTAG", "SORGE", "SPIEL",
  "SPRACHE", "STAAT", "STEUER", "STIMME", "STUCK", "STUNDE", "SYSTEM", "TAG", "TECHNIK", "TEIL",
  "TELEFON", "THEMA", "TOD", "TOCHTER", "TRADITION", "TRAINING", "TYP", "UMFELD", "UMGANG", "UMSATZ",
  "UNTERSCHIED", "UNTERSTUTZUNG", "URTEIL", "VATER", "VERBAND", "VERHALTEN", "VERKEHR", "VERLAG", "VERMOGEN",
  "VERSION", "VERTRAG", "VERWANDTE", "VIERTEL", "VOLK", "VORBEREITUNG", "VORFALL", "VORGANG", "VORHAND",
  "VORSTELLUNG", "WECHSEL", "WEG", "WELT", "WERK", "WERT", "WIRTSCHAFT", "WOCHE", "WOHNUNG", "ZAHL", "ZEIT",
  "ZEITUNG", "ZIEL", "ZUSAMMENHANG", "ZUSTAND", "ZWECK", "ADLER", "AFFE", "ANTILOPE", "BIBER", "DELFIN",
  "EICHE", "ELEFANT", "FALKE", "FARN", "FICHTE", "FUCHS", "GEPARD", "HASE", "HIRSCH", "IGEL", "KAKTUS", "KAMEL",
  "KROKODIL", "LUCHS", "MARDER", "NASHORN", "OTTER", "PANDA", "PAPAGEI", "PINGUIN",
  "ROBOTER", "SALBEI", "SCHAF", "SEEHUND", "SPINNE", "TANNE", "TIGER", "WAL", "WOLF", "ZEBRA", "ZIRKUS",
  "ANANAS", "AVOCADO", "BANANE", "BROMBEERE", "CLEMENTINE", "DATTEL", "HIMBEERE", "KIRSCHE", "KOKOSNUSS",
  "MANDARINE", "MELONE", "PFLANZE", "PRESSE", "QUITTE", "STACHELBEERE", "WASSERMELONE", "ZITRONE", "ANZUG",
  "BADEANZUG", "BLUSE", "GURTEL", "HANDTUCH", "HUT", "JEANS", "KRAVATTE", "PULLOVER", "REGENSCHIRM", "SCHUHE",
  "SONNENBRILLE", "TASCHE", "UNTERWASCHE", "WINTERMANTEL", "ANWENDUNG", "BENUTZER", "DATENBANK", "EINGABE",
  "FESTPLATTE", "HARDWARE", "INTERNET", "KENNWORT", "MONITOR", "NETZWERK", "PROGRAMMIERUNG", "SOFTWARE",
  "TASTATUR", "VERBINDUNG", "ZEICHEN", "AKTION", "ANGEBOT", "AUFTRAG", "BESTELLUNG", "EINKAUF", "KASSE",
  "LIEFERUNG", "MARKT", "NACHLASS", "RABATT", "VERKAUF", "WAREN", "WERBUNG", "ZAHLUNG", "ANMELDUNG",
  "BEHANDLUNG", "GEBISS", "GESUNDHEIT", "KRANKENVERSICHERUNG", "PULS", "REZEPT", "VERBAND", "WARTEZIMMER",
  "ZAHNARZT", "AUSSTELLUNG", "BALLETT", "BUEHNE", "GALERIE", "GEMALDE", "KUNSTLER", "MALEREI", "OPER",
  "THEATER", "BASKETBALL", "FUSSBALL", "HOCKEY", "SKIFAHREN", "SPIELER", "TENNIS", "TURNIER",
  "WETTKAMPF", "WINTERSPORT", "SPORTART", "MANNSCHAFT", "MEISTERSCHAFT",
  "ABLAUF", "ABSTIMMUNG", "ANFORDERUNG", "ANLEITUNG", "ANMELDUNG", "ANPASSUNG", "ANWESENHEIT",
  "AUFBEWAHRUNG", "AUFENTHALT", "AUFGABE", "AUFKLARUNG", "AUFMERKSAMKEIT", "AUFNAHME", "AUFSICHT",
  "AUSBAU", "AUSBRUCH", "AUSDRUCK", "AUSGANG", "AUSKUNFT", "AUSLAND", "AUSNAHME", "AUSSTELLUNG",
  "AUSWIRKUNG", "BEDINGUNG", "BEFUND", "BEGLEITUNG", "BEHORDE", "BEITRAG", "BENACHRICHTIGUNG",
  "BEREITSCHAFT", "BESCHREIBUNG", "BESPRECHUNG", "BESTATIGUNG", "BESTIMMUNG", "BETREUUNG",
  "BEZEICHNUNG", "BILDUNG", "DARSTELLUNG", "DURCHFUEHRUNG", "EINRICHTUNG", "EINSCHATZUNG",
  "EINWILLIGUNG", "EMPFEHLUNG", "ENTSCHEIDUNG", "ENTWICKLUNG", "ERFAHRUNG", "ERFINDUNG",
  "ERFOLG", "ERFULLUNG", "ERGEBNIS", "ERHALTUNG", "ERINNERUNG", "ERKLARUNG", "ERKUNDUNG",
  "ERLAUBNIS", "ERLEDIGUNG", "ERWEITERUNG", "ERWARTUNG", "ERZEUGNIS", "FACHSPRACHE", "FERTIGUNG",
  "FESTLEGUNG", "FESTSTELLUNG", "FORDERUNG", "FORSCHUNG", "FREIGABE", "FREISCHALTUNG",
  "GENEHMIGUNG", "GESTALTUNG", "GEWOHNHEIT", "GLEICHUNG", "GRUNDLAGE", "HANDHABUNG",
  "HANDLUNG", "HERAUSFORDERUNG", "HINWEIS", "KENNTNIS", "KOMBINATION", "KOMBINATION",
  "KONSTRUKTION", "KONTROLLE", "KORREKTUR", "KOSTEN", "LAGE", "LEISTUNG", "LIEFERUNG",
  "MASSNAHME", "MELDUNG", "MITARBEIT", "MITTEILUNG", "NACHFOLGE", "NACHWEIS", "OBER", "PRUEFUNG",
  "RECHNUNG", "REGELUNG", "RICHTLINIE", "SAMMLUNG", "SCHLUSSFOLGERUNG", "SCHULUNG",
  "SICHERSTELLUNG", "SITZUNG", "SPEZIALISIERUNG", "STELLUNG", "STELLUNGNAHME", "STEUERUNG",
  "STORUNG", "UBERLEGUNG", "UBERPRUEFUNG", "UMGANG", "UMGESTALTUNG", "UMSETZUNG", "UNTERLAGE",
  "UNTERRICHT", "UNTERSUCHUNG", "VERANLASSUNG", "VERBESSERUNG", "VERBINDUNG", "VERBREITUNG",
  "VEREINBARUNG", "VERHALTEN", "VERMITTLUNG", "VEROFFENTLICHUNG", "VERORDNUNG", "VERPFLICHTUNG",
  "VERSAMMLUNG", "VERSCHIEBUNG", "VERSORGUNG", "VERSTANDNIS", "VERTRETUNG", "VERWALTUNG",
  "VERWENDUNG", "VERWIRKLICHUNG", "VORBEREITUNG", "VORGEHEN", "VORHAND", "VORLESUNG",
  "VORSCHLAG", "VORSTELLUNG", "WARNUNG", "WIRKUNG", "WISSENSCHAFT", "ZUSAMMENARBEIT",
  "ZUSAMMENHANG", "ABLAUF", "ABSTIMMUNG", "ANFORDERUNG", "ANLEITUNG", "ANMELDUNG", "ANPASSUNG", "ANWESENHEIT",
  "AUFBEWAHRUNG", "AUFENTHALT", "AUFGABE", "AUFKLARUNG", "AUFMERKSAMKEIT", "AUFNAHME", "AUFSICHT",
  "AUSBAU", "AUSBRUCH", "AUSDRUCK", "AUSGANG", "AUSKUNFT", "AUSLAND", "AUSNAHME", "AUSSTELLUNG",
  "AUSWIRKUNG", "BEDINGUNG", "BEFUND", "BEGLEITUNG", "BEHORDE", "BEITRAG", "BENACHRICHTIGUNG",
  "BEREITSCHAFT", "BESCHREIBUNG", "BESPRECHUNG", "BESTATIGUNG", "BESTIMMUNG", "BETREUUNG",
  "BEZEICHNUNG", "BILDUNG", "DARSTELLUNG", "DURCHFUEHRUNG", "EINRICHTUNG", "EINSCHATZUNG",
  "EINWILLIGUNG", "EMPFEHLUNG", "ENTSCHEIDUNG", "ENTWICKLUNG", "ERFAHRUNG", "ERFINDUNG",
  "ERFOLG", "ERFULLUNG", "ERGEBNIS", "ERHALTUNG", "ERINNERUNG", "ERKLARUNG", "ERKUNDUNG",
  "ERLAUBNIS", "ERLEDIGUNG", "ERWEITERUNG", "ERWARTUNG", "ERZEUGNIS", "FACHSPRACHE", "FERTIGUNG",
  "FESTLEGUNG", "FESTSTELLUNG", "FORDERUNG", "FORSCHUNG", "FREIGABE", "FREISCHALTUNG",
  "GENEHMIGUNG", "GESTALTUNG", "GEWOHNHEIT", "GLEICHUNG", "GRUNDLAGE", "HANDHABUNG",
  "HANDLUNG", "HERAUSFORDERUNG", "HINWEIS", "KENNTNIS", "KOMBINATION",
  "KONSTRUKTION", "KONTROLLE", "KORREKTUR", "KOSTEN", "LAGE", "LEISTUNG", "LIEFERUNG",
  "MASSNAHME", "MELDUNG", "MITARBEIT", "MITTEILUNG", "NACHFOLGE", "NACHWEIS", "OBER", "PRUEFUNG",
  "RECHNUNG", "REGELUNG", "RICHTLINIE", "SAMMLUNG", "SCHLUSSFOLGERUNG", "SCHULUNG",
  "SICHERSTELLUNG", "SITZUNG", "SPEZIALISIERUNG", "STELLUNG", "STELLUNGNAHME", "STEUERUNG",
  "STORUNG", "UBERLEGUNG", "UBERPRUEFUNG", "UMGANG", "UMGESTALTUNG", "UMSETZUNG", "UNTERLAGE",
  "UNTERRICHT", "UNTERSUCHUNG", "VERANLASSUNG", "VERBESSERUNG", "VERBINDUNG", "VERBREITUNG",
  "VEREINBARUNG", "VERHALTEN", "VERMITTLUNG", "VEROFFENTLICHUNG", "VERORDNUNG", "VERPFLICHTUNG",
  "VERSAMMLUNG", "VERSCHIEBUNG", "VERSORGUNG", "VERSTANDNIS", "VERTRETUNG", "VERWALTUNG",
  "VERWENDUNG", "VERWIRKLICHUNG", "VORBEREITUNG", "VORGEHEN", "VORHAND", "VORLESUNG",
  "VORSCHLAG", "VORSTELLUNG", "WARNUNG", "WIRKUNG", "WISSENSCHAFT", "ZUSAMMENARBEIT",
  "ZUSAMMENHANG", "ALBUM", "ALARM", "ANHANG", "ANWURF", "ARMBAND", "ATLAS", "BALKON", "BELAG", "BELASTUNG",
  "BERUF", "BETRUG", "BEZUG", "BLITZ", "BLOCK", "BODEN", "BOGEN", "BOHNE", "BOTANIK",
  "BRAND", "BRUNNEN", "BUND", "BURSTE", "CHOR", "CLUB", "DAMPF", "DECK", "DILL", "DOLCH",
  "DRACHEN", "DROHNUNG", "DRUCK", "ECHTE", "EID", "EIMER", "EINBAND", "EINLADUNG", "EINNAHME",
  "EINTRITT", "EISBERG", "EISEN", "ELTERN", "EMPFANG", "ENDUNG", "ENGEL", "ENTE", "ERBE",
  "ERDBEBEN", "ERDKUNDE", "ERLEBNIS", "ERNTE", "FABRIK", "FACKEL", "FADEN", "FAHRRAD",
  "FARBEN", "FASER", "FEBRUAR", "FEDER", "FENSTERBANK", "FERIENTAG", "FERNSEHER", "FESTUNG",
  "FEUERWEHR", "FIGUR", "FILMBILD", "FINSTERNIS", "FISCHER", "FLASCHE", "FLUGZEUG", "FORST",
  "FRACHT", "FUNKE", "GABELUNG", "GARAGE", "GEBIET", "GEDANKEN", "GEFANGENE",
  "GEHILFE", "GESCHOSS", "GESICHTSPUNKT",
  "GEWICHT", "GIPFEL", "GLASSCHEIBE", "GLOCKENTURM", "GRAD", "GRAS", "GRAT", "GRENZSTEIN",
  "GRIFF", "HAAR", "HALBPUNKT",
];
// @ts-expect-error - ESM
import { wortfluessigkeitWords } from "../src/data/kffWortfluessigkeit.ts";
// @ts-expect-error - ESM
import { OFFICIAL_WF_EXAMPLES } from "../src/data/kffWortfluessigkeitMedAT.ts";

type WordFluencyTask = {
  id: string;
  letters: string[];
  options: string[];
  correctIndex: number;
  solutionWord: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
};

/** Only A–Z (MedAT uses no ÄÖÜß in letter grid). */
function onlyAZ(word: string): string {
  return word.toUpperCase().replace(/[^A-Z]/g, "");
}

function distinctLetters(word: string): number {
  return new Set(onlyAZ(word).split("")).size;
}

/** Deterministic shuffle for stable tasks per word. */
function shuffleWithSeed<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  const rng = () => {
    h = (Math.imul(16807, h) + 12345) | 0;
    return (Math.abs(h) >>> 0) / (0xffffffff + 1);
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function difficultyFromLength(len: number): 1 | 2 | 3 {
  if (len <= 5) return 1;
  if (len <= 7) return 2;
  return 3;
}

function buildTask(word: string, index: number): WordFluencyTask | null {
  const w = onlyAZ(word);
  if (w.length === 0) return null;
  const lettersInWord = [...new Set(w.split(""))];
  if (lettersInWord.length < 4) return null; // need at least 1 correct + 3 wrong for A–D

  const letters = shuffleWithSeed(w.split(""), `wf1000-${index}-${word}`);
  const correctFirst = w[0]!;
  const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
  const wrongLetters = shuffleWithSeed(wrongPool, `wf1000-wrong-${index}`).slice(0, 3);
  const optionBase =
    wrongLetters.length >= 3
      ? [correctFirst, ...wrongLetters]
      : wrongLetters.length === 2
        ? [correctFirst, wrongLetters[0]!, wrongLetters[1]!, wrongLetters[0]!]
        : [correctFirst, wrongLetters[0]!, wrongLetters[0]!, wrongLetters[0]!];
  const options = [...shuffleWithSeed(optionBase, `wf1000-opt-${index}`), "-"];
  const correctIndex = options.indexOf(correctFirst);
  if (correctIndex === 4) return null; // correct must be A–D, not E

  const difficulty = difficultyFromLength(w.length);
  const task: WordFluencyTask = {
    id: `wf-1000-${index + 1}`,
    letters,
    options,
    correctIndex,
    solutionWord: w,
    explanation: `Das Lösungswort lautet „${w}" und beginnt mit „${correctFirst}".`,
    difficulty,
  };
  if (task.options.length !== 5 || task.options[4] !== "-") return null;
  return task;
}

function main() {
  const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));

  const allWords: string[] = [];
  const seen = new Set<string>();

  const add = (raw: string) => {
    if (hasUmlautOrReplacement(raw)) return;
    if (isLikelyVerbInfinitive(raw)) return;
    const w = onlyAZ(raw);
    if (w.length < 4) return;
    if (seen.has(w)) return;
    if (officialWords.has(w)) return;
    if (distinctLetters(w) < 4) return;
    seen.add(w);
    allWords.push(w);
  };

  for (const w of wortfluessigkeitWords.map((x) => x.solution)) add(w);
  for (const d of [1, 2, 3] as const) {
    for (const w of TRAINING_WF_WORDS[d]) add(w);
  }
  for (const w of WORD_POOL_LEICHT) add(w);
  for (const w of WORD_POOL_MITTEL) add(w);
  for (const w of WORD_POOL_SCHWER) add(w);
  for (const w of EXTRA_WORDS) add(w);

  console.log(`Unique words (4+ letters, 4+ distinct, no official): ${allWords.length}`);

  const tasks: WordFluencyTask[] = [];
  const target = 1000;
  for (let i = 0; i < allWords.length && tasks.length < target; i++) {
    const t = buildTask(allWords[i]!, tasks.length);
    if (t) tasks.push(t);
  }

  console.log(`Generated ${tasks.length} valid tasks.`);

  const byDiff = { 1: 0, 2: 0, 3: 0 };
  for (const t of tasks) byDiff[t.difficulty]++;
  console.log(`By difficulty: 1=${byDiff[1]}, 2=${byDiff[2]}, 3=${byDiff[3]}`);

  const outPath = join(process.cwd(), "src/data/kffWortfluessigkeit1000.ts");
  const lines: string[] = [
    "// Auto-generated by scripts/generate-wortfluessigkeit-1000.mts – ca. 1000 Wortflüssigkeit-Aufgaben, verschiedene Schwierigkeitsgrade.",
    "// MedAT-Format: Buchstabenreihe, Optionen A–D = Anfangsbuchstabe, E = Keine der Antwortmöglichkeiten ist richtig.",
    "",
    "import type { WordFluencyTask } from \"./kffWortfluessigkeitMedAT\";",
    "",
    "export const WF_TRAINING_POOL_1000: WordFluencyTask[] = [",
  ];

  for (const t of tasks) {
    lines.push(
      "  {" +
        ` id: ${JSON.stringify(t.id)},` +
        ` letters: ${JSON.stringify(t.letters)},` +
        ` options: ${JSON.stringify(t.options)},` +
        ` correctIndex: ${t.correctIndex},` +
        ` solutionWord: ${JSON.stringify(t.solutionWord)},` +
        ` explanation: ${JSON.stringify(t.explanation)},` +
        ` difficulty: ${t.difficulty} },`
    );
  }
  lines.push("];");
  lines.push("");
  lines.push(`export const WF_TRAINING_POOL_1000_COUNT = ${tasks.length};`);

  writeFileSync(outPath, lines.join("\n"), "utf-8");
  console.log(`Wrote ${outPath}`);
}

main();
