// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Tabs } from "./Tabs";
import { Badge } from "../Badge";

// Icons
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
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
    key: "home",
    title: "Home",
    content: "This is Home page content",
    disable: false,
  },
  {
    key: "todo",
    title: "To do",
    content: "This is To do page content",
    disable: true,
  },
  {
    key: "message",
    title: "Message",
    content: "This is Message page content",
    disable: true,
  },
  {
    key: "personalCenter",
    title: "Center",
    content: "This is Center page content",
    disable: false,
  },
];

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <Tabs {...args}>
        {tabs.map((item) => (
          <Tabs.Tab key={item.key} title={item.title} />
        ))}
      </Tabs>
    );
  },
};

export const WithContent: Story = {
  args: {},
  render: (args) => {
    return (
      <Tabs {...args}>
        {tabs.map((item) => (
          <Tabs.Tab key={item.key} title={item.title}>
            {item.content}
          </Tabs.Tab>
        ))}
      </Tabs>
    );
  },
};

export const Disable: Story = {
  args: {},
  render: (args) => {
    return (
      <Tabs {...args}>
        {tabs.map((item) => (
          <Tabs.Tab key={item.key} disabled={item.disable} title={item.title} />
        ))}
      </Tabs>
    );
  },
};
