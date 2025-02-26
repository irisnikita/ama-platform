// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Segmented } from "./Segmented";

const meta: Meta<typeof Segmented> = {
  title: "Components/Segmented",
  component: Segmented,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a segmented control.`,
      },
    },
  },
  args: {
    color: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = ["Daily", "Weekly", "Monthly"];

export const Default: Story = {
  args: {},
  render: (args) => <Segmented {...args} options={defaultOptions} />,
};

export const CustomColor: Story = {
  args: {
    color: "default",
  },
  render: (args) => <Segmented {...args} />,
};
