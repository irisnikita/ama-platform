/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Switch } from "./Switch";
import { Space } from "../Space";
import { CheckIcon, XIcon } from "lucide-react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
A switch component that can be used to toggle a value.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return <Switch {...args} />;
  },
};

export const CustomSwitchText: Story = {
  args: {
    checkedText: "On",
    uncheckedText: "Off",
  },
  render: (args) => {
    return (
      <Space wrap direction="vertical">
        <Switch {...args} />
        <Switch
          checkedText={<CheckIcon fontSize={18} />}
          uncheckedText={<XIcon fontSize={18} />}
        />
      </Space>
    );
  },
};

export const CustomStyle: Story = {
  args: {
    style: {
      "--checked-color": "#00b578",
      "--height": "36px",
      "--width": "60px",
    },
  },
  render: (args) => {
    return <Switch {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <Space wrap direction="vertical">
        <Switch {...args} />
        <Switch {...args} defaultChecked />
      </Space>
    );
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return <Switch {...args} />;
  },
};
