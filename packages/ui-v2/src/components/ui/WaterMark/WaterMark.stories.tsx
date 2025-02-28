/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { WaterMark } from "./WaterMark";

const meta: Meta<typeof WaterMark> = {
  title: "Components/WaterMark",
  component: WaterMark,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a watermark.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Watermark",
  },
  render: (args) => {
    return <WaterMark {...args} content={args.content} />;
  },
};

export const WithMultiRowsContent: Story = {
  args: {
    content: ["Watermark 1", "Watermark 2"],
  },
  render: (args) => {
    return <WaterMark {...args} content={args.content} />;
  },
};

export const WithImageContent: Story = {
  args: {
    image:
      "https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg",
    imageWidth: 115,
    imageHeight: 36,
    width: 140,
    height: 80,
  },
  render: (args) => {
    return <WaterMark {...args} />;
  },
};
