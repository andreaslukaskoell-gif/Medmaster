import type { Meta, StoryObj } from "@storybook/react";
import { TableOfContents } from "./TableOfContents";
import type { TocSection } from "./TableOfContents";

const meta: Meta<typeof TableOfContents> = {
  title: "Learning/TableOfContents",
  component: TableOfContents,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

const biologySections: TocSection[] = [
  { id: "zellbiologie", title: "Zellbiologie", level: 2 },
  { id: "zellmembran", title: "Aufbau der Zellmembran", level: 3 },
  { id: "membrantransport", title: "Membrantransport", level: 3 },
  { id: "zellorganellen", title: "Zellorganellen", level: 3 },
  { id: "genetik", title: "Genetik", level: 2 },
  { id: "dna-replikation", title: "DNA-Replikation", level: 3 },
  { id: "transkription", title: "Transkription", level: 3 },
  { id: "translation", title: "Translation", level: 3 },
  { id: "mutationen", title: "Mutationen und Reparatur", level: 3 },
  { id: "evolution", title: "Evolution", level: 2 },
  { id: "selektion", title: "Selektionstypen", level: 3 },
  { id: "artbildung", title: "Artbildung", level: 3 },
];

export const BiologyChapter: Story = {
  args: {
    sections: biologySections,
  },
};

const chemieSections: TocSection[] = [
  { id: "atombau", title: "Atombau", level: 2 },
  { id: "elektronenkonfiguration", title: "Elektronenkonfiguration", level: 3 },
  { id: "periodensystem", title: "Periodensystem der Elemente", level: 3 },
  { id: "bindungslehre", title: "Chemische Bindungen", level: 2 },
  { id: "ionenbindung", title: "Ionenbindung", level: 3 },
  { id: "kovalente-bindung", title: "Kovalente Bindung", level: 3 },
  { id: "redox", title: "Redoxreaktionen", level: 2 },
  { id: "oxidationszahlen", title: "Oxidationszahlen", level: 3 },
];

export const ChemistryChapter: Story = {
  args: {
    sections: chemieSections,
  },
};

export const FlatH2Only: Story = {
  args: {
    sections: [
      { id: "mechanik", title: "Mechanik", level: 2 },
      { id: "thermodynamik", title: "Thermodynamik", level: 2 },
      { id: "elektrizitaet", title: "Elektrizität", level: 2 },
      { id: "optik", title: "Optik", level: 2 },
      { id: "atomphysik", title: "Atomphysik", level: 2 },
    ],
  },
};

export const TooFewSections: Story = {
  name: "Fewer Than 3 Sections (Hidden)",
  args: {
    sections: [
      { id: "intro", title: "Einführung", level: 2 },
      { id: "fazit", title: "Fazit", level: 2 },
    ],
  },
};
