// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { DotLoading } from "./DotLoading";

const meta: Meta<typeof DotLoading> = {
  title: "Components/Loading/DotLoading",
  component: DotLoading,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a loading indicator.`,
      },
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
  render: (args) => <DotLoading {...args} />,
};

export const CustomColor: Story = {
  args: {
    color: "default",
  },
  render: (args) => <DotLoading {...args} />,
};
