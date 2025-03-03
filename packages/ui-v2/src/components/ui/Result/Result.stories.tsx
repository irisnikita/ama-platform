// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Result } from "./Result";
import { SmileIcon } from "lucide-react";

const meta: Meta<typeof Result> = {
  title: "Components/Result",
  component: Result,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to show the result.
            `,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        status="success"
        title="Success"
        description="Complete successfully"
      />
    );
  },
};

export const Waiting: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        status="waiting"
        title="Waiting"
        description="Waiting to complete"
      />
    );
  },
};

export const Error: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        status="error"
        title="Failed"
        description="Failed to complete"
      />
    );
  },
};

export const Warning: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        status="warning"
        title="Warning"
        description="Warning"
      />
    );
  },
};

export const Info: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        status="info"
        title="Information"
        description="Information"
      />
    );
  },
};

export const Custom: Story = {
  args: {},
  render: (args) => {
    return (
      <Result
        {...args}
        icon={<SmileIcon size={32} />}
        status="success"
        title="Well done"
        description="You successfully read this message."
      />
    );
  },
};
