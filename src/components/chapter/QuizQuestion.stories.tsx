import type { Meta, StoryObj } from "@storybook/react";
import { QuizQuestion } from "./QuizQuestion";

const meta: Meta<typeof QuizQuestion> = {
  title: "Chapter/QuizQuestion",
  component: QuizQuestion,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof QuizQuestion>;

export const Default: Story = {
  args: {
    questionNumber: 1,
    question: {
      question:
        "Welches Enzym ist für die Entspiralisierung der DNA-Doppelhelix während der Replikation verantwortlich?",
      options: ["DNA-Polymerase III", "Helikase", "Ligase", "Primase", "Topoisomerase I"],
      correctIndex: 1,
      explanation:
        "Die Helikase trennt die Wasserstoffbrücken zwischen den komplementären Basenpaaren und entwindet so die Doppelhelix am Replikationsursprung.",
    },
  },
};

export const WithHints: Story = {
  args: {
    questionNumber: 2,
    question: {
      question:
        "Wie viele ATP-Moleküle werden bei der vollständigen Oxidation eines Glukosemoleküls maximal gewonnen?",
      options: ["2", "4", "30-32", "36-38", "40"],
      correctIndex: 2,
      explanation:
        "Bei der vollständigen Oxidation von Glukose (Glykolyse + Citratzyklus + Atmungskette) werden nach aktueller Berechnung ca. 30-32 ATP gewonnen.",
      hints: [
        "Denke an die drei Stufen: Glykolyse, Citratzyklus und oxidative Phosphorylierung.",
        "Die meisten ATP-Moleküle entstehen in der Atmungskette durch den Protonengradienten.",
        "Die ältere Zahl von 36-38 ATP basiert auf einer veralteten Berechnung.",
      ],
    },
  },
};

export const EasyDifficulty: Story = {
  args: {
    questionNumber: 3,
    question: {
      question: "Welche Organelle wird als 'Kraftwerk der Zelle' bezeichnet?",
      options: [
        "Endoplasmatisches Retikulum",
        "Golgi-Apparat",
        "Mitochondrium",
        "Lysosom",
        "Ribosom",
      ],
      correctIndex: 2,
      explanation:
        "Mitochondrien sind die Orte der oxidativen Phosphorylierung und produzieren den Grossteil des zellulären ATPs. Sie besitzen eine Doppelmembran und eigene DNA.",
      difficulty: 1,
    },
  },
};

export const ChemistryQuestion: Story = {
  args: {
    questionNumber: 4,
    question: {
      question: "Welche der folgenden Aussagen zur kovalenten Bindung ist falsch?",
      options: [
        "Bindende Elektronenpaare werden geteilt",
        "Sie tritt bevorzugt zwischen Nichtmetallen auf",
        "Die Bindung ist gerichtet",
        "Ionische Bindungen sind ein Spezialfall der kovalenten Bindung",
        "Mehrfachbindungen sind möglich",
      ],
      correctIndex: 3,
      explanation:
        "Ionische Bindungen sind kein Spezialfall der kovalenten Bindung. Sie beruhen auf elektrostatischer Anziehung zwischen Ionen, während kovalente Bindungen auf geteilten Elektronenpaaren basieren.",
      difficulty: 2,
      hints: ["Überlege, wie sich ionische und kovalente Bindungen grundlegend unterscheiden."],
    },
  },
};
