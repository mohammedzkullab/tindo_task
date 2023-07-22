import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me !",
    className: "border border-white",
  },
  argTypes: {
    loading: {
      control: "boolean",
    },
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    className: "border border-white  hover:!bg-opacity-95",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    buttonSize: "small",
  },
};

export const Medium: Story = {
  args: {
    buttonSize: "medium",
  },
};

export const Large: Story = {
  args: {
    buttonSize: "large",
  },
};

export const FullSize: Story = {
  args: {
    fullWidth: true,
  },
};
export const Loading: Story = {
  args: {
    loading: true,
  },
};
