// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { TabBar } from "./TabBar";
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

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
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
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "To do",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "Message",
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "personalCenter",
    title: "Center",
    icon: <UserOutline />,
  },
];

export default meta;
type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <TabBar {...args}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    );
  },
};

export const WithBadge: Story = {
  args: {},
  render: (args) => {
    return (
      <TabBar {...args}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    );
  },
};

export const WithoutTitle: Story = {
  args: {},
  render: (args) => {
    return (
      <TabBar {...args}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    );
  },
};

export const WithoutIcon: Story = {
  args: {},
  render: (args) => {
    return (
      <TabBar {...args}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} title={item.title} />
        ))}
      </TabBar>
    );
  },
};

const TabBarStory = (args) => {
  const [activeKey, setActiveKey] = useState("message");
  return (
    <TabBar {...args} activeKey={activeKey} onChange={setActiveKey}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export const WithActiveKey: Story = {
  args: {},
  render: (args) => {
    return <TabBarStory {...args} />;
  },
};
