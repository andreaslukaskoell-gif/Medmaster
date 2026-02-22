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
// tv2-t3: q3,q4,q5
src = ins(src, "tv2-t3-q2",
  q("tv2-t3-q3",
    "Wann erscheinen laut Text bei Kindern typischerweise die ersten verst\u00E4ndlichen W\u00F6rter?",
    ["Zwischen dem sechsten und achten Lebensmonat",
     "Zwischen dem zehnten und vierzehnten Lebensmonat",
     "Zwischen dem 18. und 24. Lebensmonat",
     "Erst nach dem zweiten Geburtstag",
     "Ab dem dritten Lebensmonat als Lautimitationen"],
    1,
    "Im Text steht: \u201EDie ersten verst\u00E4ndlichen W\u00F6rter erscheinen typischerweise zwischen dem zehnten und vierzehnten Lebensmonat.\u201C") +
  q("tv2-t3-q4",
    "Was stellt der Text \u00FCber den kindlichen Grammatikerwerb bis zum Schuleintritt fest?",
    ["Die meisten Kinder beherrschen bis zum Schuleintritt nur einfache S\u00E4tze",
     "Die Grammatik muss durch formalen Unterricht erworben werden",
     "Die meisten Kinder beherrschen die grundlegende Grammatik ihrer Muttersprache weitgehend fehlerfrei, ohne je formalen Grammatikunterricht erhalten zu haben",
     "Kinder lernen Grammatik haupts\u00E4chlich durch das Lesen von B\u00FCchern",
     "Die Grammatikentwicklung ist erst mit dem 10. Lebensjahr abgeschlossen"],
    2,
    "Der Text besagt: \u201EBis zum Schuleintritt beherrschen die meisten Kinder die grundlegende Grammatik ihrer Muttersprache weitgehend fehlerfrei, obwohl sie nie formalen Grammatikunterricht erhalten haben.\u201C") +
  q("tv2-t3-q5",
    "Was k\u00F6nnen F\u00F6ten laut Text bereits im Mutterleib?",
    ["Sie k\u00F6nnen Licht und Dunkel wahrnehmen",
     "Sie k\u00F6nnen Sprachlaute wahrnehmen und zeigen nach der Geburt eine Pr\u00E4ferenz f\u00FCr die Stimme der Mutter",
     "Sie k\u00F6nnen einfache Melodien von komplexen unterscheiden",
     "Sie k\u00F6nnen bereits auf bestimmte W\u00F6rter mit Bewegungen reagieren",
     "Sie k\u00F6nnen ihre eigene Muttersprache von Fremdsprachen unterscheiden"],
    1,
    "Im Text hei\u00DFt es: \u201EBereits im Mutterleib k\u00F6nnen F\u00F6ten Sprachlaute wahrnehmen und zeigen nach der Geburt eine Pr\u00E4ferenz f\u00FCr die Stimme der Mutter.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv2-t3 done, len:", src.length);
