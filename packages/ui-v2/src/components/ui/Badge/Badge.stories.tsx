// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Badge } from "./Badge";
import { Space } from "../Space";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `
A badge component that can be used to display a number or icon.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Space style={{ "--gap": "24px" }}>
        <Badge content="1">
          <div className="am-bg-slate-600 am-w-10 am-h-10 am-block am-rounded-lg " />
        </Badge>
        <Badge content="2">
          <div className="bg-gray-200 w-10 h-10 block rounded-lg" />
        </Badge>
        <Badge content={Badge.dot}>
          <div className="bg-gray-200 w-10 h-10 block rounded-lg" />
        </Badge>
      </Space>
    );
  },
};
