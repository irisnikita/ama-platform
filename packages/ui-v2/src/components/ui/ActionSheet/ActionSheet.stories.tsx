// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
// import { ActionSheet } from "./ActionSheet";

const meta: Meta = {
  title: "Components/ActionSheet",
  component: () => <></>,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a list of actions.`,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => <></>,
};
