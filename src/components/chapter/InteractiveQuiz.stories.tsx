import type { Meta, StoryObj } from "@storybook/react";
import { InteractiveQuiz } from "./InteractiveQuiz";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";

const sampleQuestions: SelfTestQuestion[] = [
  {
    question: "Welche Aussage zur DNA-Replikation ist korrekt?",
    options: [
      "Sie verläuft konservativ",
      "Sie verläuft semikonservativ",
      "Sie verläuft dispersiv",
      "Sie benötigt keine Enzyme",
      "Sie findet im Cytoplasma statt",
    ],
    correctIndex: 1,
    explanation:
      "Die DNA-Replikation verläuft semikonservativ: Jeder Tochterstrang enthält einen alten und einen neu synthetisierten Strang (Meselson-Stahl-Experiment).",
    difficulty: 1,
  },
  {
    question: "Welches Enzym katalysiert die Verknüpfung von Okazaki-Fragmenten?",
    options: ["DNA-Polymerase III", "Helikase", "DNA-Ligase", "Primase", "Topoisomerase"],
    correctIndex: 2,
    explanation:
      "Die DNA-Ligase verknüpft die Okazaki-Fragmente auf dem Folgestrang durch Bildung von Phosphodiesterbindungen.",
    difficulty: 2,
    hints: [
      "Okazaki-Fragmente entstehen am Folgestrang und müssen verbunden werden.",
      "Das gesuchte Enzym verknüpft DNA-Fragmente durch Phosphodiesterbindungen.",
    ],
  },
  {
    question: "Wie viele Wasserstoffbrücken bilden sich zwischen Guanin und Cytosin?",
    options: ["1", "2", "3", "4", "5"],
    correctIndex: 2,
    explanation:
      "Zwischen Guanin und Cytosin bilden sich 3 Wasserstoffbrücken (G-C), während zwischen Adenin und Thymin nur 2 entstehen (A-T).",
    difficulty: 1,
  },
];

const meta: Meta<typeof InteractiveQuiz> = {
  title: "Chapter/InteractiveQuiz",
  component: InteractiveQuiz,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveQuiz>;

export const Default: Story = {
  args: {
    questions: sampleQuestions,
  },
};

export const SingleQuestion: Story = {
  args: {
    questions: [sampleQuestions[0]],
  },
};

export const WithHints: Story = {
  args: {
    questions: [sampleQuestions[1]],
  },
};
