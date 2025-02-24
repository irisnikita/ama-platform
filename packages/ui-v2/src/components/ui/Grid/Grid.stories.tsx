// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: `
A grid layout component. It can be used to display content in a grid layout.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: 10,
  },
  render: (args) => (
    <div>
      <Grid {...args}>
        <Grid.Item className="border border-gray-600 am-bg-zinc-200 text-center text-gray-600 h-full am-text-center">
          A
        </Grid.Item>
        <Grid.Item className="border border-gray-600 am-bg-zinc-200 text-center text-gray-600 h-full am-text-center">
          B
        </Grid.Item>
        <Grid.Item className="border border-gray-600 am-bg-zinc-200 text-center text-gray-600 h-full am-text-center">
          C
        </Grid.Item>
        <Grid.Item className="border border-gray-600 am-bg-zinc-200 text-center text-gray-600 h-full am-text-center">
          D
        </Grid.Item>
        <Grid.Item className="border border-gray-600 am-bg-zinc-200 text-center text-gray-600 h-full am-text-center">
          E
        </Grid.Item>
      </Grid>
    </div>
  ),
};
