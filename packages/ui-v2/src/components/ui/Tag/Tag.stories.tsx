// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Tag } from "./Tag";
import { Space } from "../Space";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: `
A tag component that can be used to display content.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Tag {...args}>Default</Tag>,
};

export const CustomColor: Story = {
  args: {},
  render: () => (
    <Space direction="vertical">
      <span className="am-font-bold">Fill Outline</span>
      <Space>
        <Tag color="primary" fill="outline">
          Primary
        </Tag>
        <Tag color="#87d068" fill="outline">
          #87d068
        </Tag>
        <Tag color="#ff6430" fill="outline">
          #ff6430
        </Tag>
      </Space>

      <span className="am-font-bold">Fill Solid</span>
      <Space>
        <Tag color="default">Default</Tag>
        <Tag color="primary">Primary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
      </Space>
    </Space>
  ),
};

export const CustomStyle: Story = {
  args: {},
  render: () => (
    <Space>
      <Tag color="primary" fill="outline" style={{ "--border-radius": "6px" }}>
        Primary
      </Tag>
      <Tag
        color="success"
        fill="outline"
        style={{ "--background-color": "#c8f7c5" }}
      >
        Success
      </Tag>
      <Tag color="warning" style={{ "--text-color": "var(--adm-color-text)" }}>
        Warning
      </Tag>
      <Tag
        color="danger"
        fill="outline"
        style={{ "--border-color": "var(--adm-color-weak)" }}
      >
        Danger
      </Tag>
    </Space>
  ),
};
