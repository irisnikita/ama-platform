import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    block: {
      control: "boolean",
      defaultValue: false,
      description: "Option to fit button width to its parent width",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of button",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    ghost: {
      control: "boolean",
      description:
        "Make background transparent and invert text and border colors",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    classNames: {
      control: {
        type: "object",
      },
      description: "Semantic DOM class",
      type: "symbol",
      table: {},
    },
  },
  // args: {
  //   onClick: fn(),
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello bạn",
  },
};
