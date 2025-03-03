// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { ProgressCircle } from "./ProgressCircle";

import { Space } from "../Space";

const meta: Meta<typeof ProgressCircle> = {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    docs: {
      description: {
        component: `
A progress circle to show progress loading percentage.
            `,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 50,
  },
  render: (args) => {
    return (
      <Space direction="vertical">
        <ProgressCircle {...args} />
        <ProgressCircle {...args}>{`${args.percent}%`}</ProgressCircle>
      </Space>
    );
  },
};
