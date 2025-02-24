// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { SideBar } from "./SideBar";
import { Badge } from "../Badge";

const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    docs: {
      description: {
        component: `
A tab component that can be used to switch between different tabs.
        `,
      },
    },
  },
};

const tabs = [
  {
    key: "key1",
    title: "Tab 1",
    badge: Badge.dot,
  },
  {
    key: "key2",
    title: "Tab 2",
    badge: "5",
  },
  {
    key: "key3",
    title: "Tab 3",
    badge: "99+",
    disabled: true,
  },
];

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <SideBar {...args}>
        {tabs.map((item) => (
          <SideBar.Item key={item.key} title={item.title} />
        ))}
      </SideBar>
    );
  },
};

export const WithBadge: Story = {
  args: {},
  render: (args) => {
    return (
      <SideBar {...args}>
        {tabs.map((item) => (
          <SideBar.Item key={item.key} title={item.title} badge={item.badge} />
        ))}
      </SideBar>
    );
  },
};

export const Disable: Story = {
  args: {},
  render: (args) => {
    return (
      <SideBar {...args}>
        {tabs.map((item) => (
          <SideBar.Item
            key={item.key}
            title={item.title}
            disabled={item.disabled}
          />
        ))}
      </SideBar>
    );
  },
};
