/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Stepper } from "./Stepper";
import { Toast } from "../Toast";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: `
A stepper component that can be used to count or select a value.
        `,
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    defaultValue: 1,
    onChange: (value) => {
      console.log("value:: ", value);
    },
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const WithSteps: Story = {
  args: {
    step: 10,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const CustomMinMax: Story = {
  args: {
    min: -10,
    max: 10,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const CustomDigits: Story = {
  args: {
    digits: 1,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const FormatterAndParser: Story = {
  args: {
    formatter: (value) => `$ ${value}`,
    parser: (value) => value.replace("$", ""),
    onChange: (value) => {
      console.log("value:: ", value);
    },
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const WithInputReadOnly: Story = {
  args: {
    inputReadOnly: true,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const OnFocusOnBlur: Story = {
  args: {
    onFocus: () => Toast.show("You have focus"),
    onBlur: () => Toast.show("You have blur"),
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};

export const AllowEmpty: Story = {
  args: {
    allowEmpty: true,
  },
  render: (args) => {
    return <Stepper {...args} />;
  },
};
