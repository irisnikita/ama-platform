/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Components
import { Mask } from "./Mask";
import { Button } from "../Button";
import { Slider } from "../Slider";
import { Space } from "../Space";

const meta: Meta<typeof Mask> = {
  title: "Components/Mask",
  component: Mask,
  parameters: {
    docs: {
      description: {
        component: `
A mask to cover content.
            `,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>Show Mask</Button>
        <Mask
          {...args}
          visible={visible}
          onMaskClick={() => setVisible(false)}
        />
      </>
    );
  },
};

export const CustomOpacity: Story = {
  args: {
    opacity: 0.5,
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState<
      number | "default" | "thin" | "thick" | undefined
    >(0.1);
    return (
      <>
        <Space direction="vertical">
          <Space
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: 8,
                marginRight: 20,
              }}
            >
              Opacity: {opacity}
            </div>
            <Button
              onClick={() => {
                setVisible(true);
                setOpacity("thin");
              }}
            >
              Thin
            </Button>
            <Button
              onClick={() => {
                setVisible(true);
                setOpacity("thick");
              }}
            >
              Thick
            </Button>
          </Space>

          <div style={{ marginTop: 8 }}>Custom Number</div>
          <Slider
            max={1}
            min={0}
            step={0.01}
            popover
            onAfterChange={(value) => {
              setVisible(true);
              setOpacity(value as number);
            }}
          />
        </Space>
        <Mask
          {...args}
          visible={visible}
          onMaskClick={() => setVisible(false)}
          opacity={opacity}
        />
      </>
    );
  },
};

export const CustomColor: Story = {
  args: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>Show Mask</Button>
        <Mask
          {...args}
          visible={visible}
          onMaskClick={() => setVisible(false)}
        />
      </>
    );
  },
};

export const WithContent: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Mask {...args} visible={visible} onMaskClick={() => setVisible(false)}>
          <div
            style={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150px",
              height: "150px",
              borderRadius: "16px",
              marginTop: "-75px",
              marginLeft: "-75px",
            }}
          >
            Your content
          </div>
        </Mask>
        <Button onClick={() => setVisible(true)}>Show Mask with content</Button>
      </>
    );
  },
};
