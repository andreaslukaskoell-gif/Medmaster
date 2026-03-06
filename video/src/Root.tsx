import { Composition } from "remotion";
import { QuizChallenge } from "./compositions/QuizChallenge";
import { TippDesTages } from "./compositions/TippDesTages";
import { ZahlenfolgeChallenge } from "./compositions/ZahlenfolgeChallenge";
import { WortRaetsel } from "./compositions/WortRaetsel";
import { StatsUrgency } from "./compositions/StatsUrgency";
import { RichtigOderFalsch } from "./compositions/RichtigOderFalsch";
import { ImplikationenChallenge } from "./compositions/ImplikationenChallenge";
import { FigurenChallenge } from "./compositions/FigurenChallenge";
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
    </>
  );
};
