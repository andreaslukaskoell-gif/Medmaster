import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { SmartLink } from "./SmartLink";

const meta: Meta<typeof SmartLink> = {
  title: "Content/SmartLink",
  component: SmartLink,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SmartLink>;

export const WithDescription: Story = {
  args: {
    to: "/bms/biologie/kap1/zellmembran",
    description:
      "Aufbau und Funktion der Zellmembran: Phospholipid-Doppelschicht, Membranproteine, Fluid-Mosaik-Modell.",
    children: "Zellmembran",
  },
};

export const WithoutDescription: Story = {
  args: {
    to: "/bms/chemie/kap2/redox",
    children: "Redoxreaktionen",
  },
};

export const InParagraph: Story = {
  render: () => (
    <MemoryRouter>
      <p className="text-sm text-[var(--text-primary)] leading-relaxed max-w-xl">
        Die Na+/K+-ATPase ist ein Beispiel für{" "}
        <SmartLink
          to="/bms/biologie/kap1/membrantransport"
          description="Aktiver und passiver Transport durch die Zellmembran: Diffusion, Osmose, Carrier, Ionenkanäle."
        >
          aktiven Membrantransport
        </SmartLink>
        . Sie transportiert unter ATP-Verbrauch 3 Na+-Ionen nach aussen und 2 K+-Ionen nach innen.
        Dieses Prinzip ist eng verwandt mit den Grundlagen der{" "}
        <SmartLink
          to="/bms/chemie/kap3/elektrochemie"
          description="Elektrochemische Grundlagen: Nernst-Gleichung, Elektrodenpotentiale, galvanische Zellen."
        >
          Elektrochemie
        </SmartLink>
        .
      </p>
    </MemoryRouter>
  ),
};

export const MultipleLinks: Story = {
  render: () => (
    <MemoryRouter>
      <div className="space-y-3 max-w-xl">
        <p className="text-sm font-semibold text-[var(--text-primary)]">Verwandte Kapitel:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-primary)]">
          <li>
            <SmartLink
              to="/bms/biologie/kap4/dna-replikation"
              description="Semikonservative Replikation, Helikase, Primase, DNA-Polymerase III, Okazaki-Fragmente."
            >
              DNA-Replikation
            </SmartLink>
          </li>
          <li>
            <SmartLink
              to="/bms/biologie/kap4/transkription"
              description="RNA-Polymerase, Promotor, mRNA-Prozessierung, Spleissen."
            >
              Transkription
            </SmartLink>
          </li>
          <li>
            <SmartLink
              to="/bms/biologie/kap4/translation"
              description="Ribosomen, tRNA, Codons, Wobble-Hypothese, Polysome."
            >
              Translation
            </SmartLink>
          </li>
        </ul>
      </div>
    </MemoryRouter>
  ),
};
