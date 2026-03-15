import type { Meta, StoryObj } from "@storybook/react";
import { GlossaryTerm } from "./GlossaryTerm";

const meta: Meta<typeof GlossaryTerm> = {
  title: "Content/GlossaryTerm",
  component: GlossaryTerm,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof GlossaryTerm>;

export const Default: Story = {
  args: {
    term: "Apoptose",
  },
};

export const WithCustomClass: Story = {
  args: {
    term: "Phospholipid-Doppelschicht",
    className: "font-semibold text-[var(--accent)]",
  },
};

export const InContext: Story = {
  render: () => (
    <p className="text-sm text-[var(--text-primary)] leading-relaxed max-w-xl">
      Bei der <GlossaryTerm term="Mitose" className="font-semibold" /> teilt sich eine Mutterzelle
      in zwei genetisch identische Tochterzellen. Im Gegensatz dazu führt die{" "}
      <GlossaryTerm term="Meiose" className="font-semibold" /> zu vier haploiden Zellen mit
      genetischer Variation durch <GlossaryTerm term="Crossing-over" className="font-semibold" />.
    </p>
  ),
};
