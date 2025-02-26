// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { PullToRefresh } from "./PullToRefresh";

const meta: Meta<typeof PullToRefresh> = {
  title: "Components/PullToRefresh",
  component: PullToRefresh,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a pull-to-refresh indicator.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <PullToRefresh {...args} />,
};
