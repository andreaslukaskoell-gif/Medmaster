import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionTOC } from "./SectionTOC";
import type { SectionTOCItem } from "./SectionTOC";

const sampleSections: SectionTOCItem[] = [
  { id: "aufbau", title: "Aufbau der Zellmembran" },
  { id: "transport", title: "Membrantransport" },
  { id: "diffusion", title: "Diffusion und Osmose" },
  { id: "aktiv", title: "Aktiver Transport" },
  { id: "endozytose", title: "Endozytose und Exozytose" },
  { id: "signaltransduktion", title: "Signaltransduktion an der Membran" },
];

const meta: Meta<typeof SectionTOC> = {
  title: "Chapter/SectionTOC",
  component: SectionTOC,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionTOC>;

export const Default: Story = {
  args: {
    sections: sampleSections,
    currentSectionId: "transport",
    onSelect: () => {},
  },
};

export const LeftVariant: Story = {
  args: {
    sections: sampleSections,
    currentSectionId: "diffusion",
    onSelect: () => {},
    variant: "left",
  },
};

export const NoneSelected: Story = {
  args: {
    sections: sampleSections,
    currentSectionId: null,
    onSelect: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [current, setCurrent] = useState<string>("aufbau");
    return (
      <div className="max-w-xs">
        <SectionTOC sections={sampleSections} currentSectionId={current} onSelect={setCurrent} />
      </div>
    );
  },
};
