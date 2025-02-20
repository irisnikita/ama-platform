// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Space } from "./Space";
import { Button } from "../Button";

const meta: Meta<typeof Space> = {
  title: "Components/Space",
  component: Space,
  parameters: {
    docs: {},
  },
  argTypes: {
    align: {
      description: "Vertical alignment of the children.",
      table: {},
    },
    block: {
      description: "Should render as block element.",
      table: {},
    },
    direction: {
      description: "VerThe spacing direction.",
      table: {},
    },
    justify: {
      description: "Align the items on the main axis.	",
      table: {},
    },
    onClick: {
      description: "The click event of the Space",
      table: {},
    },
    wrap: {
      description: `Should line break automatically, work only with \`horizontal\`.`,
      table: {},
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <Space {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Space>
    );
  },
};

export const Wrap: Story = {
  args: {
    direction: "horizontal",
    wrap: true,
  },
  parameters: {
    docs: {
      description: {
        story: `When \`wrap\` is \`true\`, the \`Space\` will wrap the children to the next line when there is not enough space.`,
      },
    },
  },
  render: (args) => {
    return (
      <Space {...args}>
        {Array.from({ length: 15 }).map((_, index) => (
          <Button key={index}>Button {index + 1}</Button>
        ))}
      </Space>
    );
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: `The \`direction\` prop can be set to \`vertical\` to align the children vertically.`,
      },
    },
  },
  render: (args) => {
    return (
      <Space {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Space>
    );
  },
};

export const Gap: Story = {
  args: {
    style: { "--gap": "24px" },
  },
  parameters: {
    docs: {
      description: {
        story: `The \`gap\` prop can be used to set the gap between the children.`,
      },
    },
  },
  render: (args) => {
    return (
      <Space {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Space>
    );
  },
};

export const CSSVariables: Story = {
  parameters: {
    controls: { disable: true },
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        story: `
| Name             | Description                       | Default      |
|------------------|-----------------------------------|--------------|
| --gap            | The gap between items.            | \`8px\`        |
| --gap-horizontal | The horizontal gap between items. | \`var(--gap)\` |
| --gap-vertical   | The vertical gap between items.   | \`var(--gap)\` |
        `,
      },
    },
  },
  render: () => <></>,
};
