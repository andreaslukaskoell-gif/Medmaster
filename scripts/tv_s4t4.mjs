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
// tv4-t4: q3,q4,q5
src = ins(src, "tv4-t4-q2",
  q("tv4-t4-q3",
    "Wer beschrieb laut Text den Halo-Effekt erstmals und wann?",
    ["Sigmund Freud im Jahr 1900",
     "Jean Piaget im Jahr 1945",
     "Der amerikanische Psychologe Edward Thorndike im Jahr 1920",
     "Carl Jung im Jahr 1935",
     "B.F. Skinner im Jahr 1950"],
    2,
    "Der Text besagt: \u201EDer Halo-Effekt, erstmals 1920 vom amerikanischen Psychologen Edward Thorndike beschrieben.\u201C") +
  q("tv4-t4-q4",
    "Welche Auswirkung des Halo-Effekts auf die Markenwahrnehmung beschreibt der Text?",
    ["Ein erfolgreiches Produkt verdr\u00E4ngt alle anderen Produkte derselben Marke",
     "Ein erfolgreiches Produkt eines Unternehmens kann die Bewertung aller anderen Produkte derselben Marke positiv beeinflussen",
     "Eine starke Marke sch\u00FCtzt schlechte Produkte vor Kritik",
     "Der Halo-Effekt f\u00FChrt dazu, dass Kunden immer das teuerste Produkt kaufen",
     "Marken mit bekannten Logos profitieren mehr vom Halo-Effekt"],
    1,
    "Im Text hei\u00DFt es: \u201Eein erfolgreiches Produkt eines Unternehmens kann die Bewertung aller anderen Produkte derselben Marke positiv beeinflussen.\u201C") +
  q("tv4-t4-q5",
    "Welches klassische Beispiel f\u00FCr den Halo-Effekt nennt der Text?",
    ["Reiche Menschen werden als intelligenter eingestuft als \u00E4rmere",
     "Attraktive Menschen werden h\u00E4ufig auch als intelligenter, kompetenter und vertrauensw\u00FCrdiger eingesch\u00E4tzt",
     "Gro\u00DFe Menschen werden als autorit\u00E4rer wahrgenommen als kleinere",
     "Menschen mit tiefer Stimme gelten als vertrauensw\u00FCrdiger",
     "Gut gekleidete Menschen werden als flei\u00DFiger beurteilt"],
    1,
    "Der Text nennt: \u201EAttraktive Menschen werden h\u00E4ufig auch als intelligenter, kompetenter und vertrauensw\u00FCrdiger eingesch\u00E4tzt, obwohl es keinen objektiven Zusammenhang zwischen Aussehen und diesen Eigenschaften gibt.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv4-t4 done, len:", src.length);
