// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {},
  args: {
    animated: true,
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => (
    <>
      <Skeleton.Title {...args} />
      <Skeleton.Paragraph {...args} />
    </>
  ),
  args: {
    animated: true,
  },
};
