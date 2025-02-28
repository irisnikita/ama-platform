/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Slider } from "./Slider";
import { Toast } from "../Toast";
import { HeartIcon } from "lucide-react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
A slider component that can be used to select a value.
        `,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const onChangeValue = (value: number | [number, number]) => {
  let text = "";
  if (typeof value === "number") {
    text = `${value}`;
  } else {
    text = `[${value.join(",")}]`;
  }
  Toast.show(`Your selected value：${text}`);
};

export const Default: Story = {
  args: {},
  render: (args) => {
    return <Slider {...args} onAfterChange={onChangeValue} />;
  },
};

export const WithSteps: Story = {
  args: {
    step: 10,
    ticks: true,
  },
  render: (args) => {
    return (
      <Slider
        {...args}
        ticks={args.ticks}
        step={args.step}
        onAfterChange={onChangeValue}
      />
    );
  },
};

export const WithMarks: Story = {
  args: {
    ticks: true,
    marks: {
      0: 0,
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: 100,
    },
  },
  render: (args) => {
    return (
      <Slider
        {...args}
        ticks={args.ticks}
        marks={args.marks}
        onAfterChange={onChangeValue}
      />
    );
  },
};

export const CustomMinMax: Story = {
  args: {
    ticks: true,
    min: 100,
    max: 1000,
    step: 100,
  },
  render: (args) => {
    return (
      <Slider
        step={args.step}
        min={args.min}
        max={args.max}
        ticks={args.ticks}
        onAfterChange={onChangeValue}
      />
    );
  },
};

export const WithPopover: Story = {
  args: {},
  render: (args) => {
    return <Slider {...args} popover onAfterChange={onChangeValue} />;
  },
};

export const CustomStyle: Story = {
  args: {},
  render: (args) => {
    return (
      <Slider
        {...args}
        style={{ "--fill-color": "#21d35f" }}
        defaultValue={30}
        onAfterChange={onChangeValue}
      />
    );
  },
};

export const CustomIcon: Story = {
  args: {},
  render: (args) => {
    return (
      <Slider
        {...args}
        icon={<HeartIcon />}
        defaultValue={30}
        onAfterChange={onChangeValue}
      />
    );
  },
};
