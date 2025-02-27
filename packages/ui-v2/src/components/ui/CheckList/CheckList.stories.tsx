/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { CheckList } from "./CheckList";

// Icons
import { CheckIcon, EyeIcon, LockIcon } from "lucide-react";

const meta: Meta<typeof CheckList> = {
  title: "Components/CheckList",
  component: CheckList,
  parameters: {
    docs: {
      description: {
        component: `
A check list component that can be used to display content.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <CheckList {...args} defaultValue={["B"]}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C" disabled>
          C
        </CheckList.Item>
        <CheckList.Item value="D" readOnly>
          D
        </CheckList.Item>
      </CheckList>
    );
  },
};

export const MultiSelect: Story = {
  args: {},
  render: (args) => {
    return (
      <CheckList {...args} multiple defaultValue={["B", "C"]}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    );
  },
};

export const CustomActiveIcon: Story = {
  args: {
    activeIcon: <EyeIcon />,
  },
  render: (args) => {
    return (
      <CheckList {...args} activeIcon={args.activeIcon} defaultValue={["B"]}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    );
  },
};

export const WithExtra: Story = {
  args: {
    extra: (active) => (active ? <CheckIcon /> : <LockIcon />),
  },
  render: (args) => {
    return (
      <CheckList extra={args.extra} defaultValue={["B"]}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => {
    return (
      <CheckList {...args} defaultValue={["B"]} readOnly={args.readOnly}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <CheckList {...args} defaultValue={["B"]} disabled={args.disabled}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    );
  },
};
