import { Composition } from "remotion";
import { QuizChallenge } from "./compositions/QuizChallenge";
import { TippDesTages } from "./compositions/TippDesTages";
import { ZahlenfolgeChallenge } from "./compositions/ZahlenfolgeChallenge";
import { WortRaetsel } from "./compositions/WortRaetsel";
import { StatsUrgency } from "./compositions/StatsUrgency";
import { RichtigOderFalsch } from "./compositions/RichtigOderFalsch";
import { ImplikationenChallenge } from "./compositions/ImplikationenChallenge";
import { FigurenChallenge } from "./compositions/FigurenChallenge";
import { BMSExplainer } from "./compositions/BMSExplainer";
import { BMSExplainerVoiceover } from "./compositions/BMSExplainerVoiceover";
import { BlutgruppenExplainer } from "./compositions/BlutgruppenExplainer";
import { FPS, WIDTH, HEIGHT } from "./shared/brand";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 22s — BMS quiz with poll + countdown + reveal + triple CTA */}
      <Composition
        id="QuizChallenge"
        component={QuizChallenge}
        durationInFrames={660}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          question: "Welches Hormon senkt den Blutzuckerspiegel?",
          subject: "Biologie",
          options: [
            { id: "a", text: "Glucagon" },
            { id: "b", text: "Insulin" },
            { id: "c", text: "Cortisol" },
            { id: "d", text: "Adrenalin" },
            { id: "e", text: "Somatostatin" },
          ],
          correctOptionId: "b",
          explanation:
            "Insulin wird in den β-Zellen der Langerhans-Inseln im Pankreas produziert und senkt den Blutzucker durch Förderung der Glukoseaufnahme.",
        }}
      />

      {/* 12s — "Wusstest du?" fact card */}
      <Composition
        id="TippDesTages"
        component={TippDesTages}
        durationInFrames={360}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          subject: "Biologie",
          tipp: "Mitochondrien besitzen eine eigene ringförmige DNA und werden ausschließlich maternal vererbt.",
          source: "MedMaster BMS Kapitel",
        }}
      />

      {/* 15s — KFF number sequence puzzle */}
      <Composition
        id="ZahlenfolgeChallenge"
        component={ZahlenfolgeChallenge}
        durationInFrames={450}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          sequence: [2, 5, 11, 23, 47],
          answer: 47,
          rule: "×2 + 1",
        }}
      />

      {/* 15s — KFF word puzzle */}
      <Composition
        id="WortRaetsel"
        component={WortRaetsel}
        durationInFrames={450}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          letters: ["P", "L", "A", "S", "M", "A"],
          word: "PLASMA",
          hint: "Anfangsbuchstabe: P",
        }}
      />

      {/* 12s — fast stat flash + urgency */}
      <Composition
        id="StatsUrgency"
        component={StatsUrgency}
        durationInFrames={360}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          applicants: 16000,
          spots: 1850,
          questions: 5300,
        }}
      />

      {/* 25s — 3 true/false with progressive difficulty */}
      <Composition
        id="RichtigOderFalsch"
        component={RichtigOderFalsch}
        durationInFrames={750}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          statements: [
            { text: "DNA-Replikation verläuft semikonservativ", correct: true },
            { text: "Mitochondrien haben keine eigene DNA", correct: false },
            { text: "Enzyme werden bei Reaktionen verbraucht", correct: false },
          ],
        }}
      />
      {/* 22s — KFF Implikationen with premises + options */}
      <Composition
        id="ImplikationenChallenge"
        component={ImplikationenChallenge}
        durationInFrames={660}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          premise1: "Alle Hunde sind Säugetiere.",
          premise2: "Alle Säugetiere sind Wirbeltiere.",
          options: [
            "Alle Hunde sind Wirbeltiere.",
            "Alle Hunde sind keine Wirbeltiere.",
            "Einige Hunde sind Wirbeltiere.",
            "Einige Hunde sind keine Wirbeltiere.",
            "Keine der Schlussfolgerungen ist richtig.",
          ],
          correctAnswer: 0,
          explanation: "Klassischer Kettenschluss: Alle A sind B, Alle B sind C → Alle A sind C.",
        }}
      />

      {/* 17s — KFF Figuren zusammensetzen */}
      <Composition
        id="FigurenChallenge"
        component={FigurenChallenge}
        durationInFrames={510}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          piecePaths: ["M 30 100 L 100 30 L 170 100 Z", "M 30 100 L 170 100 L 100 170 Z"],
          piecesLayout: {
            viewBox: "0 0 148 148",
            paths: [
              { d: "M 0 70 L 70 0 L 140 70 Z", transform: "translate(4,4)" },
              { d: "M 0 0 L 140 0 L 70 70 Z", transform: "translate(4,78)" },
            ],
          },
          optionPaths: [
            "M 100 14 L 186 64 L 186 136 L 100 186 L 14 136 L 14 64 Z",
            "M 100 19 L 181 100 L 100 181 L 19 100 Z",
            "M 100 17 L 178 56 L 178 144 L 100 183 L 22 144 L 22 56 Z",
            "M 100 35 L 165 100 L 100 165 L 35 100 Z",
          ],
          correctIndex: 1,
          explanation: "Die 2 Teile setzen sich exakt zur gewählten Figur zusammen.",
        }}
      />

      {/* 13s — BMS topic explainer with real MedMaster image */}
      <Composition
        id="BMSExplainer"
        component={BMSExplainer}
        durationInFrames={390}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          subject: "Biologie",
          hook: "So wird Membrantransport endlich logisch",
          topicTitle: "Aktiver vs. passiver Transport",
          imageUrl: "https://www.medmaster.at/images/bms/bio-diffusion.jpg",
          steps: [
            "Passiv: entlang des Konzentrationsgefälles, ohne ATP",
            "Aktiv: gegen das Gefälle, braucht ATP-Energie",
            "Beispiel: Na⁺/K⁺-Pumpe = aktiv (3 Na⁺ raus, 2 K⁺ rein)",
          ],
          merke: "Passiv = bergab (gratis). Aktiv = bergauf (kostet ATP).",
          cta: "Dieses Thema kommt im MedAT — lern es jetzt richtig",
        }}
      />
      {/* ~51s — Premium BMS explainer with voice-over (per-segment normalized) */}
      <Composition
        id="BMSExplainerVoiceover"
        component={BMSExplainerVoiceover}
        durationInFrames={Math.round(67.8 * FPS)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          subject: "Biologie",
          hook: "Arterien führen sauerstoffreiches\nBlut. Oder?",
          topicTitle: "Blutkreislauf",
          imageUrl: "bio-herz-kreislauf.jpg",
          audioSrc: "blutkreislauf-voice-only.wav",
          images: [
            { url: "bio-herz-kreislauf.jpg", startFrame: 90, endFrame: 478 },
            { url: "bio-herz-position.jpg", startFrame: 478, endFrame: 866 },
            { url: "bio-herz-oberflaeche.jpg", startFrame: 866, endFrame: 1254 },
            { url: "bio-herzwand.jpg", startFrame: 1254, endFrame: 1642 },
            { url: "bio-herz-kreislauf.jpg", startFrame: 1642, endFrame: 2034 },
          ],
          subtitles: [
            { text: "Arterien führen\nsauerstoffreiches Blut. Oder?", startFrame: 0, endFrame: 90 },
            {
              text: "Im MedAT kostet dich genau\ndieser Satz Punkte.",
              startFrame: 97,
              endFrame: 188,
            },
            { text: "Hier ist warum.", startFrame: 212, endFrame: 241 },
            {
              text: "Arterie bedeutet nur eins: Gefäß,\ndas Blut vom Herzen wegtransportiert.",
              startFrame: 249,
              endFrame: 391,
            },
            { text: "Vene: Gefäß zum Herzen hin.", startFrame: 408, endFrame: 457 },
            {
              text: "Sauerstoff? Spielt für die\nDefinition keine Rolle.",
              startFrame: 465,
              endFrame: 563,
            },
            { text: "Und das ändert alles.", startFrame: 587, endFrame: 625 },
            {
              text: "Dein rechter Ventrikel drückt\nsauerstoffarmes Blut in die Lungenarterie.",
              startFrame: 633,
              endFrame: 743,
            },
            {
              text: "Ja, Arterie. Aber sauerstoffarm.\nWeil die Definition rein anatomisch ist.",
              startFrame: 759,
              endFrame: 915,
            },
            {
              text: "In der Lunge passiert der Gasaustausch.\nCO2 raus, O2 rein.",
              startFrame: 939,
              endFrame: 1066,
            },
            {
              text: "Zurück fließt das Blut über die Lungenvenen,\njetzt sauerstoffreich, in den linken Vorhof.",
              startFrame: 1083,
              endFrame: 1231,
            },
            {
              text: "Das ist der kleine Kreislauf.\nVom rechten Herz zur Lunge und zurück.",
              startFrame: 1247,
              endFrame: 1357,
            },
            {
              text: "Der große Kreislauf startet links.\nLinker Ventrikel, Aorta, ganzer Körper.",
              startFrame: 1381,
              endFrame: 1529,
            },
            {
              text: "Zurück über die Hohlvenen\nins rechte Herz.",
              startFrame: 1546,
              endFrame: 1616,
            },
            {
              text: "Eine Regel, die dir Punkte sichert:\nArterie heißt weg vom Herzen. Nicht sauerstoffreich.",
              startFrame: 1633,
              endFrame: 1785,
            },
            {
              text: "Merk dir das. Alle BMS-Themen aufbereitet auf mett,\nmaster, punkt, ah, teh.",
              startFrame: 1809,
              endFrame: 1987,
            },
          ],
        }}
      />
      {/* ~47s — Blutgruppen AB0 animated explainer with voice-over */}
      <Composition
        id="BlutgruppenExplainer"
        component={BlutgruppenExplainer}
        durationInFrames={Math.round(46.6 * FPS)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          audioSrc: "blutgruppen-voice-only.wav",
          subtitles: [
            { text: "Blutgruppe A hat\nAnti-A-Antikörper.", startFrame: 0, endFrame: 64 },
            { text: "Falsch.", startFrame: 71, endFrame: 97 },
            {
              text: "Und genau das kreuzen die\nmeisten im MedAT an.",
              startFrame: 105,
              endFrame: 188,
            },
            {
              text: "Die Regel ist simpel: Du hast immer\nAntikörper gegen das, was du nicht hast.",
              startFrame: 212,
              endFrame: 333,
            },
            {
              text: "Blutgruppe A hat das A-Antigen\nauf den Erythrozyten.",
              startFrame: 357,
              endFrame: 450,
            },
            { text: "Und Anti-B im Plasma.", startFrame: 457, endFrame: 510 },
            {
              text: "Blutgruppe B hat das B-Antigen,\nund Anti-A im Plasma.",
              startFrame: 527,
              endFrame: 652,
            },
            {
              text: "AB hat beide Antigene,\nund gar keine Antikörper.",
              startFrame: 668,
              endFrame: 757,
            },
            { text: "Deshalb ist AB\nder Universalempfänger.", startFrame: 764, endFrame: 840 },
            { text: "Und Blutgruppe Null?", startFrame: 856, endFrame: 896 },
            {
              text: "Keine Antigene. Aber Anti-A\nund Anti-B im Plasma.",
              startFrame: 903,
              endFrame: 1017,
            },
            {
              text: "Null kann an alle spenden.\nUniversalspender.",
              startFrame: 1025,
              endFrame: 1110,
            },
            {
              text: "Merke: Antigen auf der Zelle, Antikörper\nim Plasma, immer gegeneinander.",
              startFrame: 1134,
              endFrame: 1276,
            },
            { text: "Speicher dir das.\nmedmaster punkt at.", startFrame: 1292, endFrame: 1353 },
          ],
        }}
      />
    </>
  );
};
