import type { Meta, StoryObj } from "@storybook/react";
import { MerksatzBox } from "./MerksatzBox";

const meta: Meta<typeof MerksatzBox> = {
  title: "Chapter/MerksatzBox",
  component: MerksatzBox,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["merke", "altfragen", "klinisch", "achtung", "tipp"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MerksatzBox>;

export const Merke: Story = {
  args: {
    type: "merke",
    text: "Die DNA-Replikation verläuft <strong>semikonservativ</strong>: Jeder Tochterstrang enthält einen alten und einen neu synthetisierten Strang.",
  },
};

export const Altfragen: Story = {
  args: {
    type: "altfragen",
    text: "Welches Enzym entwindet die DNA-Doppelhelix während der Replikation? — <em>Helikase</em> (nicht Topoisomerase, nicht Primase).",
  },
};

export const Klinisch: Story = {
  args: {
    type: "klinisch",
    text: "Sichelzellanämie entsteht durch eine Punktmutation im <strong>HBB-Gen</strong> (Glu → Val an Position 6). Heterozygote Träger haben einen Selektionsvorteil gegenüber Malaria.",
  },
};

export const Achtung: Story = {
  args: {
    type: "achtung",
    text: "Verwechslungsgefahr: <strong>Mitose</strong> ≠ <strong>Meiose</strong>. Mitose = identische Tochterzellen (2n), Meiose = haploide Gameten (n) mit Crossing-over.",
  },
};

export const Tipp: Story = {
  args: {
    type: "tipp",
    text: "Eselsbrücke für die Phasen der Mitose: <strong>P</strong>rophet <strong>M</strong>atthäus <strong>A</strong>ß <strong>T</strong>orte — Prophase, Metaphase, Anaphase, Telophase.",
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <MerksatzBox
        type="merke"
        text="Die DNA-Replikation verläuft <strong>semikonservativ</strong>."
      />
      <MerksatzBox
        type="altfragen"
        text="Häufig gefragt: Welches Enzym entwindet die Doppelhelix?"
      />
      <MerksatzBox
        type="klinisch"
        text="Sichelzellanämie — Punktmutation im <strong>HBB-Gen</strong>."
      />
      <MerksatzBox
        type="achtung"
        text="Verwechslungsgefahr: <strong>Mitose</strong> ≠ <strong>Meiose</strong>."
      />
      <MerksatzBox
        type="tipp"
        text="Eselsbrücke: <strong>P</strong>rophet <strong>M</strong>atthäus <strong>A</strong>ß <strong>T</strong>orte."
      />
    </div>
  ),
};
