// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { PageIndicator } from "./PageIndicator";

const meta: Meta<typeof PageIndicator> = {
  title: "Components/PageIndicator",
  component: PageIndicator,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a page tracker.
            `,
      },
    },
  },
  args: {},
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 4,
    current: 0,
  },
  render: (args) => (
    <PageIndicator {...args} total={args.total} current={args.current} />
  ),
};

export const CustomDirection: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <PageIndicator {...args} total={4} current={0} direction={args.direction} />
  ),
};

export const CustomDot: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <PageIndicator
      {...args}
      total={4}
      current={0}
      style={{
        "--dot-color": "rgba(0, 0, 0, 0.4)",
        "--active-dot-color": "#ffc0cb",
        "--dot-size": "10px",
        "--active-dot-size": "30px",
        "--dot-border-radius": "50%",
        "--active-dot-border-radius": "15px",
        "--dot-spacing": "8px",
      }}
    />
  ),
};
