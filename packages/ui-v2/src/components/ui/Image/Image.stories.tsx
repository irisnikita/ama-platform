// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Image } from "./Image";
import { Space } from "../Space";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display an image or icon.
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: { type: "text" },
      description: "The address of the image",
    },
    width: {
      control: { type: "number" },
      description:
        "The width of the image, if a number is passed in, the unit is px",
    },
    alt: {
      control: { type: "text" },
      description: "The description of the image",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder when loading",
    },
    draggable: {
      control: { type: "boolean" },
      description: "Whether to allow users to drag the image",
    },
    fit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "none", "scale-down"],
      description: "The fill mode of the image",
    },
    height: {
      control: { type: "number" },
      description:
        "The height of the image, if a number is passed in, the unit is px",
    },
    onClick: {
      description: "The image click event",
    },
    onContainerClick: {
      description: "The content click event",
    },
    onError: {
      description: "Callback when failed to load",
    },
    onLoad: {
      description: "Triggered when image loaded",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const demoSrc =
  "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";
const demoSrc2 =
  "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80";

export const Default: Story = {
  args: {
    width: 300,
  },
  render: (args) => {
    return <Image {...args} src={demoSrc} />;
  },
};

export const CustomFit: Story = {
  args: {},
  render: (args) => {
    return (
      <Space wrap>
        <Image {...args} src={demoSrc} width={100} height={100} fit="fill" />
        <Image {...args} src={demoSrc} width={100} height={100} fit="contain" />
        <Image {...args} src={demoSrc} width={100} height={100} fit="cover" />
        <Image
          {...args}
          src={demoSrc}
          width={100}
          height={100}
          fit="scale-down"
        />
        <Image {...args} src={demoSrc} width={100} height={100} fit="none" />
      </Space>
    );
  },
};

export const LazyLoading: Story = {
  args: {},
  render: (args) => {
    return <Image {...args} lazy src={demoSrc2} />;
  },
};
