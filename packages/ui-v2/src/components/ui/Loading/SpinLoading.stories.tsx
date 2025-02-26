// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { SpinLoading } from "./SpinLoading";

const meta: Meta<typeof SpinLoading> = {
  title: "Components/Loading/SpinLoading",
  component: SpinLoading,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a loading indicator.`,
      },
    },
  },
  argTypes: {
    color: {
      control: { type: "color" },
    },
  },
  args: {
    color: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <SpinLoading {...args} />,
};

export const CustomColor: Story = {
  args: {
    color: "blue",
  },
  render: (args) => <SpinLoading color={args.color} />,
};
