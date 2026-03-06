import { Composition } from "remotion";
import { QuizChallenge } from "./compositions/QuizChallenge";
import { TippDesTages } from "./compositions/TippDesTages";
import { ZahlenfolgeChallenge } from "./compositions/ZahlenfolgeChallenge";
import { WortRaetsel } from "./compositions/WortRaetsel";
import { StatsUrgency } from "./compositions/StatsUrgency";
import { RichtigOderFalsch } from "./compositions/RichtigOderFalsch";
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
    </>
  );
};
