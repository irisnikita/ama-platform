import { Meta, StoryObj } from "@storybook/react";

// Components
import { AutoCenter } from "./AutoCenter";

const meta: Meta<typeof AutoCenter> = {
  title: "Components/AutoCenter",
  component: AutoCenter,
  parameters: {
    docs: {
      description: {
        component: `The content is not enough for the width of the entire line, or it is used after reaching the full width.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Auto Center",
  },
};
