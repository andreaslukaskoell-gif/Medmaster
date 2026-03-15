import type { Meta, StoryObj } from "@storybook/react";
import { CollapsibleSection } from "./CollapsibleSection";

const meta: Meta<typeof CollapsibleSection> = {
  title: "Chapter/CollapsibleSection",
  component: CollapsibleSection,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "medat", "summary"],
    },
    progressStatus: {
      control: "select",
      options: ["unread", "opened", "completed"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

const sampleContent = (
  <div className="space-y-3 text-sm text-[var(--text-primary)]">
    <p>
      Die <strong>Zellmembran</strong> (Plasmamembran) besteht aus einer Phospholipid-Doppelschicht
      mit eingelagerten Proteinen. Dieses Fluid-Mosaik-Modell wurde 1972 von Singer und Nicolson
      beschrieben.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Phospholipide: amphiphil (hydrophiler Kopf, hydrophobe Schwänze)</li>
      <li>Integrale Proteine: durchspannen die gesamte Membran</li>
      <li>Periphere Proteine: an der Oberfläche assoziiert</li>
      <li>Cholesterin: reguliert die Membranfluidität</li>
    </ul>
  </div>
);

export const Default: Story = {
  args: {
    id: "zellmembran",
    title: "Aufbau der Zellmembran",
    children: sampleContent,
    variant: "default",
    defaultOpen: false,
  },
};

export const DefaultOpen: Story = {
  args: {
    id: "zellmembran-open",
    title: "Aufbau der Zellmembran",
    children: sampleContent,
    variant: "default",
    defaultOpen: true,
  },
};

export const MedATFokus: Story = {
  args: {
    id: "medat-fokus",
    title: "Prüfungsrelevante Membrantransport-Mechanismen",
    children: (
      <div className="space-y-3 text-sm text-[var(--text-primary)]">
        <p>Zentral prüfungsrelevant: Unterscheidung zwischen passivem und aktivem Transport.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Diffusion: entlang des Konzentrationsgradienten, ohne ATP</li>
          <li>Osmose: Diffusion von Wasser durch semipermeable Membran</li>
          <li>Aktiver Transport: gegen den Gradienten, ATP-abhängig (z. B. Na+/K+-ATPase)</li>
          <li>Endozytose / Exozytose: Vesikeltransport</li>
        </ul>
      </div>
    ),
    variant: "medat",
    defaultOpen: true,
  },
};

export const Summary: Story = {
  args: {
    id: "zusammenfassung",
    title: "Zusammenfassung: Zellorganellen",
    children: (
      <div className="space-y-2 text-sm text-[var(--text-primary)]">
        <p>
          <strong>Mitochondrien</strong> — Kraftwerke der Zelle (oxidative Phosphorylierung, eigene
          DNA).
        </p>
        <p>
          <strong>Endoplasmatisches Retikulum</strong> — raues ER: Proteinsynthese; glattes ER:
          Lipidsynthese, Entgiftung.
        </p>
        <p>
          <strong>Golgi-Apparat</strong> — Modifikation, Sortierung und Verpackung von Proteinen.
        </p>
      </div>
    ),
    variant: "summary",
    defaultOpen: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2 max-w-2xl">
      <CollapsibleSection
        id="var-default"
        title="Grundlagen der Genetik"
        variant="default"
        defaultOpen
      >
        <p className="text-sm text-[var(--text-primary)]">
          Die Genetik beschäftigt sich mit der Vererbung von Merkmalen. DNA ist der Träger der
          genetischen Information.
        </p>
      </CollapsibleSection>
      <CollapsibleSection
        id="var-medat"
        title="MedAT-Fokus: Mendelsche Regeln"
        variant="medat"
        defaultOpen
      >
        <p className="text-sm text-[var(--text-primary)]">
          Uniformitätsregel, Spaltungsregel und Unabhängigkeitsregel — alle drei Regeln werden
          regelmässig im BMS abgefragt.
        </p>
      </CollapsibleSection>
      <CollapsibleSection id="var-summary" title="Zusammenfassung" variant="summary" defaultOpen>
        <p className="text-sm text-[var(--text-primary)]">
          Mendel beschrieb die Grundregeln der Vererbung anhand von Kreuzungsexperimenten mit Erbsen
          (Pisum sativum).
        </p>
      </CollapsibleSection>
    </div>
  ),
};
