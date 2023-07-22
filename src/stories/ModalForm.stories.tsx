import type { Meta, StoryObj } from "@storybook/react";

import { ModalExample } from "../components/Modal_example";
import ModalExampleWithForm from "components/ModalExampleWithForm";

const meta: Meta<typeof ModalExample> = {
  title: "Components/ModalExample_form",
  component: ModalExampleWithForm,
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
