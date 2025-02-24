// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Toast } from "./Toast";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Toast",
  component: () => <></>,
  parameters: {
    docs: {
      description: {
        component: `
A toast notification is a message that pops up on the surface of the UI to inform the user of a system event.`,
      },
    },
  },
  argTypes: {
    content: {
      control: "text",
      defaultValue: "This is a toast message!",
      description: "Nội dung Toast",
    },
    duration: {
      control: { type: "number", min: 500, max: 5000, step: 500 },
      defaultValue: 2000,
      description: "Thời gian Toast hiển thị (ms)",
    },
    position: {
      control: { type: "radio" },
      options: ["top", "center", "bottom"],
      defaultValue: "center",
      description: "Vị trí hiển thị Toast",
    },
    icon: {
      control: { type: "radio" },
      options: ["success", "fail", "warning", "loading"],
      defaultValue: "success",
      description: "Icon hình trên Toast",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 2000,
    position: "center",
  },
  render: (args) => (
    <Button
      onClick={() => {
        Toast.show({
          content: "This is a toast message!",
          ...args,
        });
      }}
    >
      Show Toast
    </Button>
  ),
};

export const WithDuration: Story = {
  args: {
    duration: 1000,
  },
  render: (args) => (
    <Button
      onClick={() => {
        Toast.show({
          content: "This is a toast message!",
          duration: args.duration,
          ...args,
        });
      }}
    >
      Show Toast
    </Button>
  ),
};

export const WithPosition: Story = {
  args: {
    position: "center",
  },
  render: (args) => (
    <Button
      onClick={() => {
        Toast.show({
          content: "This is a toast message!",
          position: args.position,
          ...args,
        });
      }}
    >
      Show Toast
    </Button>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: "success",
  },
  render: (args) => (
    <Button
      onClick={() => {
        Toast.show({
          content: "This is a toast message!",
          icon: args.icon,
          ...args,
        });
      }}
    >
      Show Toast
    </Button>
  ),
};
