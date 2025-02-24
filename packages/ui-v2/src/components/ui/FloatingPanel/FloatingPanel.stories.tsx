// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { FloatingPanel } from "./FloatingPanel";
import { List } from "../List";

const meta: Meta<typeof FloatingPanel> = {
  title: "Components/FloatingPanel",
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component: `
A floating panel component that can be used to display content that can freely and flexibly slide up and down to browse the content
        `,
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
];

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8];

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <FloatingPanel {...args} anchors={anchors}>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </FloatingPanel>
    );
  },
};
