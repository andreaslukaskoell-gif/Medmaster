import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
function ins(src, targetId, newQsText) {
  const marker = 'id: "' + targetId + '"';
  const idx = src.indexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + targetId + "\n"); return src; }
  const CLOSE_PAT = NL + "        }," + NL + "      ],";
  const closeQ = src.indexOf(CLOSE_PAT, idx);
  if (closeQ < 0) { process.stderr.write("NO CLOSE for " + targetId + "\n"); return src; }
  const insertPos = closeQ + NL.length + "        },".length;
  return src.slice(0, insertPos) + newQsText + src.slice(insertPos);
}
function q(id, question, opts, correct, expl) {
  const T = "        ";
  return NL + T + "{" + NL +
    T + "  id: " + JSON.stringify(id) + "," + NL +
    T + "  question: " + JSON.stringify(question) + "," + NL +
    T + "  options: [" + NL +
    opts.map(o => T + "    " + JSON.stringify(o) + ",").join(NL) + NL +
    T + "  ]," + NL +
    T + "  correctOption: " + correct + "," + NL +
    T + "  explanation:" + NL +
    T + "    " + JSON.stringify(expl) + "," + NL +
    T + "}";
}
// tv1-t3: q3,q4,q5 (Text about CRISPR/gene editing)
src = ins(src, "tv1-t3-q2",
  q("tv1-t3-q3",
    "Wie funktioniert CRISPR-Cas9 laut Text?",
    ["Ein Enzym durchsucht das Erbgut zuf\u00E4llig und entfernt fehlerhafte Abschnitte",
     "Ein RNA-Molek\u00FCl f\u00FChrt das Cas9-Enzym zu einer bestimmten DNA-Sequenz, wo es den DNA-Strang durchtrennt",
     "Ein Protein bindet an die Zellmembran und verhindert Mutationen",
     "Ein Virus tr\u00E4gt gesunde Gene in die Zelle ein und ersetzt kranke Abschnitte",
     "Ein chemischer Wirkstoff l\u00F6st die Wasserstoffbr\u00FCckenbindungen der DNA auf"],
    1,
    "Der Text erkl\u00E4rt: \u201EEin RNA-Molek\u00FCl f\u00FChrt das Cas9-Enzym zu einer ganz bestimmten Stelle im Erbgut, wo es den DNA-Strang pr\u00E4zise durchtrennt.\u201C") +
  q("tv1-t3-q4",
    "Welche medizinische Anwendung von CRISPR wird im Text als Beispiel genannt?",
    ["Die Heilung von Krebs durch Entfernung von Tumorzellen",
     "Die Behandlung von Alzheimer durch Reparatur von Nervenzellen",
     "Die Korrektur von Erbkrankheiten wie Sichelzellan\u00E4mie oder Mukoviszidose",
     "Die Entwicklung von Impfstoffen gegen Viruserkrankungen",
     "Die Verbesserung der Insulinproduktion bei Diabetes"],
    2,
    "Im Text steht: \u201EIn der Medizin k\u00F6nnte CRISPR-Cas9 genutzt werden, um Erbkrankheiten wie Sichelzellan\u00E4mie oder Mukoviszidose zu heilen, indem fehlerhafte Genabschnitte korrigiert werden.\u201C") +
  q("tv1-t3-q5",
    "Welche ethische Bedenken gegen\u00FCber CRISPR werden im Text ge\u00E4u\u00DFert?",
    ["Die Technologie ist zu teuer und damit nicht f\u00FCr alle Menschen zug\u00E4nglich",
     "Eingriffe in die Keimbahn k\u00F6nnten vererbbare Ver\u00E4nderungen erzeugen und es bestehe das Risiko sogenannter Designer-Babys",
     "Die Methode ist zu unpr\u00E4zise und erzeugt zu viele unbeabsichtigte Mutationen",
     "CRISPR k\u00F6nnte von Regierungen zur Massenmanipulation der Bev\u00F6lkerung eingesetzt werden",
     "Die Technologie zerst\u00F6rt die Biodiversit\u00E4t durch genetisch ver\u00E4nderte Organismen"],
    1,
    "Der Text formuliert als ethische Bedenken: \u201EInsbesondere Eingriffe in die Keimbahn \u2013 also in Eizellen, Spermien oder fr\u00FChe Embryonen \u2013 sind umstritten, da solche Ver\u00E4nderungen an alle Nachkommen weitergegeben werden. Kritiker warnen vor dem Risiko sogenannter Designer-Babys.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv1-t3 done, len:", src.length);
