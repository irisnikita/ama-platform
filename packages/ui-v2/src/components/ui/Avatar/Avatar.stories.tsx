// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Avatar } from "./Avatar";
import { Space } from "../Space";
import { List } from "../List";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display an image or icon.
        `,
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const demoAvatarImages = [
  "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
  "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
];

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Space block wrap>
        <Avatar src={demoAvatarImages[0]} />
        <Avatar src={demoAvatarImages[1]} />
        <Avatar src={demoAvatarImages[2]} />
        <Avatar src={demoAvatarImages[3]} />
      </Space>
    );
  },
};

export const ChangeSize: Story = {
  args: {},
  render: () => {
    return (
      <Space block wrap>
        <Avatar src={demoAvatarImages[0]} style={{ "--size": "32px" }} />
        <Avatar src={demoAvatarImages[0]} style={{ "--size": "48px" }} />
        <Avatar src={demoAvatarImages[0]} style={{ "--size": "64px" }} />
      </Space>
    );
  },
};

export const WithList: Story = {
  args: {},
  render: () => {
    return (
      <List>
        <List.Item
          prefix={<Avatar src={demoAvatarImages[0]} />}
          description="User A"
        >
          User 1
        </List.Item>
      </List>
    );
  },
};
