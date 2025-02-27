/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Components
import { ImageViewer } from "./ImageViewer";

import { Button } from "../Button";

const meta: Meta<typeof ImageViewer> = {
  title: "Components/ImageViewer",
  component: ImageViewer,
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
    image: {
      control: { type: "text" },
      description: "The url of the image resource",
    },
    afterClose: {
      description: "Triggered when it is completely closed",
    },
    classNames: {
      description: "Semantic structure class",
    },
    getContainer: {
      description:
        "To get the specified mounted HTML node, the default is null rendered to the current node",
    },
    maxZoom: {
      control: { type: "number" },
      description: "The maximum zoom ratio",
    },
    onClose: {
      description: "Triggered when it is closed",
    },
    renderFooter: {
      description: "Render extra content on footer",
    },
    visible: {
      control: { type: "boolean" },
      description: "Whether to show or hide",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const demoImages = [
  "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
  "https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80",
  "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80",
  "https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80",
];

export const Default: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Image
        </Button>
        <ImageViewer
          {...args}
          classNames={{
            mask: "customize-mask",
            body: "customize-body",
          }}
          image={demoImages[0]}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </>
    );
  },
};

export const MultiImages: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Image
        </Button>
        <ImageViewer.Multi
          {...args}
          images={demoImages}
          visible={visible}
          defaultIndex={1}
          onClose={() => {
            setVisible(false);
          }}
        />
      </>
    );
  },
};

export const WithFooter: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);

    const renderFooter = (image: string, index: number) => {
      return (
        <div className="am-p-16 am-text-center">
          <div
            className="am-text-white am-text-[var(--adm-font-size-4)] am-leading-none am-px-4 am-py-2 am-bg-gray-600/40 am-rounded-full am-inline-block am-cursor-pointer"
            onClick={() => {
              console.log("Loading...");
            }}
          >
            Page {index + 1}
          </div>
        </div>
      );
    };

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Image
        </Button>
        <ImageViewer.Multi
          {...args}
          images={demoImages}
          visible={visible}
          defaultIndex={1}
          onClose={() => {
            setVisible(false);
          }}
          renderFooter={renderFooter}
        />
      </>
    );
  },
};
