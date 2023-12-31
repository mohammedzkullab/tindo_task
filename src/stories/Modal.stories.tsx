import type { Meta, StoryObj } from "@storybook/react";

import { ModalExample } from "../components/Modal_example";

const meta: Meta<typeof ModalExample> = {
  title: "Components/ModalExample_text",
  component: ModalExample,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
};

export default meta;
type Story = StoryObj<typeof ModalExample>;

export const OpenModal: Story = {
  args: {
    initOpen: true,
  },
};

export const ClosedModal: Story = {
  args: {
    initOpen: false,
  },
};

export const WithoutFooter: Story = {
  args: {
    initOpen: true,
    withoutFooter: true,
  },
};
