// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { List } from "./List";

// Icons
import { BusIcon, DollarSignIcon, ListIcon } from "lucide-react";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <List {...args}>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List>
    );
  },
};

export const Clickable: Story = {
  args: {},
  render: (args) => {
    return (
      <List {...args}>
        <List.Item
          prefix={<ListIcon />}
          onClick={() => alert("Item 1 clicked")}
        >
          Item 1
        </List.Item>
        <List.Item
          prefix={<DollarSignIcon />}
          onClick={() => alert("Item 2 clicked")}
        >
          Item 2
        </List.Item>
        <List.Item prefix={<BusIcon />} onClick={() => alert("Item 3 clicked")}>
          Item 3
        </List.Item>
      </List>
    );
  },
};
