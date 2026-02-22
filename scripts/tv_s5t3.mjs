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
// tv5-t3: add q4, q5 (has q1,q2,q3 already)
src = ins(src, "tv5-t3-q3",
  q("tv5-t3-q4",
    "Welches konkrete Beispiel f\u00FCr algorithmische Diskriminierung nennt der Text?",
    ["Ein Navigationssystem, das bestimmte Stadtteile bevorzugt",
     "Ein Einstellungsprogramm eines Technologieunternehmens, das m\u00E4nnliche Bewerber systematisch bevorzugte",
     "Ein Kreditbewertungssystem, das reiche Kunden bevorzugt",
     "Ein Newsalgorithmus, der bestimmte politische Meinungen verst\u00E4rkt",
     "Ein Gesichtserkennungsprogramm mit hoher Fehlerrate bei bestimmten Ethnien"],
    1,
    "Der Text nennt: \u201EEin bekanntes Beispiel betrifft ein Einstellungsprogramm eines gro\u00DFen Technologieunternehmens, das m\u00E4nnliche Bewerber systematisch bevorzugte, weil es auf Daten trainiert worden war, die den \u00FCberwiegend m\u00E4nnlichen Einstellungserfolg der Vergangenheit widerspiegelten.\u201C") +
  q("tv5-t3-q5",
    "Was versteht der Text unter 'Explainable AI' (XAI)?",
    ["KI-Systeme, die ausschlie\u00DFlich von Experten bedient werden k\u00F6nnen",
     "Methoden zur Erkl\u00E4rbarkeit von KI-Entscheidungen, damit diese nachvollziehbar werden",
     "Eine spezielle Programmiersprache f\u00FCr transparente Algorithmen",
     "Das Recht der Nutzer, Erkl\u00E4rungen zu verlangen",
     "Ein EU-weites Zertifizierungsverfahren f\u00FCr KI-Produkte"],
    1,
    "Der Text nennt als L\u00F6sungsansatz: \u201Edie Entwicklung von Methoden zur Erkl\u00E4rbarkeit von KI-Entscheidungen (Explainable AI)\u201C, damit algorithmische Entscheidungen nachvollziehbar werden."));
writeFileSync(FILE, src, "utf8");
console.log("tv5-t3 done, len:", src.length);
