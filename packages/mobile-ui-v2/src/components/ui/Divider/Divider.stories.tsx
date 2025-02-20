// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: `
A dividing line that separates content.

## When to Use

- Split text paragraphs in different chapters.
- Split inline text/links, such as the action column of a table.
            `,
      },
    },
  },
  args: {
    contentPosition: "center",
    direction: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <div className="am-flex am-flex-col am-gap-1">
      <Divider {...args} contentPosition="center">
        Center
      </Divider>
      <Divider {...args} contentPosition="left">
        Left
      </Divider>
      <Divider {...args} contentPosition="right">
        Right
      </Divider>
    </div>
  ),
};

export const CustomStyle: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Customize the divider with the \`style\` prop.
            `,
      },
    },
  },
  args: {
    style: {
      color: "red",
      borderColor: "red",
      borderStyle: "dashed",
    },
  },
  render: (args) => <Divider {...args}>Custom style</Divider>,
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the \`direction\` prop to change the divider to a vertical line.
            `,
      },
    },
  },
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <>
      Text
      <Divider {...args} />
      <a href="#">Link</a>
      <Divider {...args} />
      <a href="#">Link</a>
    </>
  ),
};
