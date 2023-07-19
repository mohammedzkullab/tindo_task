import type { Meta, StoryObj } from "@storybook/react";

import { ModalExample } from "../components/Modal_example";

const meta: Meta<typeof ModalExample> = {
  title: "Components/ModalExample",
  component: ModalExample,
};

export default meta;
type Story = StoryObj<typeof ModalExample>;

export const Example: Story = {
  args: {
    isOpen: true,
    close: () => {},
  },
};
