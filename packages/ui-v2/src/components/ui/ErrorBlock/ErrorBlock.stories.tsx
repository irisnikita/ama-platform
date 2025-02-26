// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { ErrorBlock } from "./ErrorBlock";

const meta: Meta<typeof ErrorBlock> = {
  title: "Components/ErrorBlock",
  component: ErrorBlock,
  parameters: {
    docs: {
      description: {
        component: `Hello`,
      },
    },
  },
  argTypes: {
    title: {
      type: "string",
      description: "Title",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    description: {
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "-",
        },
      },
      description: "Description",
    },
    status: {
      description: "The Default error type",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    image: {
      type: "function",
      description: "Image",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    fullPage: {
      type: "boolean",
      description: "Full page",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
  args: {
    status: "default",
    fullPage: false,
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBlock>;

export const Default: Story = {};

export const FullPage: Story = {
  args: {
    fullPage: true,
  },
};
