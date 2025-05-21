/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { NumberKeyboard, PasscodeInput } from "antd-mobile";

const meta: Meta<typeof PasscodeInput> = {
  title: "Components/PasscodeInput",
  component: PasscodeInput,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a PasscodeInput.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "123456",
    length: 6,
    caret: true,
    error: false,
    plain: false,
    seperated: false,
    keyboard: <NumberKeyboard />,
    className: "",
    defaultValue: "123456",
    style: {},
  },
};
