// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Modal from "components";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
