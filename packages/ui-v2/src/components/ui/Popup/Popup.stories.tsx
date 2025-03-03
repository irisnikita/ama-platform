/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Popup, PopupProps, CenterPopup } from "./Popup";
import { useState } from "react";
import { Button } from "../Button";
import { Space } from "../Space";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup",
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: `
A popup to display content when needed.
            `,
      },
    },
  },
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockContent = (
  <div style={{ padding: 20, overflowY: "scroll" }}>
    Occaecat laborum nostrud cupidatat nostrud veniam excepteur ea. Exercitation
    Lorem laborum exercitation excepteur occaecat cillum do Lorem nulla mollit
    nostrud aliquip dolore esse magna. Consectetur magna exercitation nisi
    veniam. Enim qui minim aliqua eu magna sit. Commodo mollit ut exercitation
    aliquip enim eiusmod nostrud laboris labore irure sint ad officia excepteur.
    Eiusmod minim nulla proident magna excepteur in nisi. Ipsum est ad elit
    magna officia exercitation nulla sit consectetur ipsum.
  </div>
);

const mockLongContent = (
  <div style={{ height: "40vh", padding: 20, overflowY: "scroll" }}>
    Occaecat laborum nostrud cupidatat nostrud veniam excepteur ea. Exercitation
    Lorem laborum exercitation excepteur occaecat cillum do Lorem nulla mollit
    nostrud aliquip dolore esse magna. Consectetur magna exercitation nisi
    veniam. Enim qui minim aliqua eu magna sit. Commodo mollit ut exercitation
    aliquip enim eiusmod nostrud laboris labore irure sint ad officia excepteur.
    Eiusmod minim nulla proident magna excepteur in nisi. Ipsum est ad elit
    magna officia exercitation nulla sit consectetur ipsum. Occaecat laborum
    nostrud cupidatat nostrud veniam excepteur ea. Exercitation Lorem laborum
    exercitation excepteur occaecat cillum do Lorem nulla mollit nostrud aliquip
    dolore esse magna. Consectetur magna exercitation nisi veniam. Enim qui
    minim aliqua eu magna sit. Commodo mollit ut exercitation aliquip enim
    eiusmod nostrud laboris labore irure sint ad officia excepteur. Eiusmod
    minim nulla proident magna excepteur in nisi. Ipsum est ad elit magna
    officia exercitation nulla sit consectetur ipsum. Occaecat laborum nostrud
    cupidatat nostrud veniam excepteur ea. Exercitation Lorem laborum
    exercitation excepteur occaecat cillum do Lorem nulla mollit nostrud aliquip
    dolore esse magna. Consectetur magna exercitation nisi veniam. Enim qui
    minim aliqua eu magna sit. Commodo mollit ut exercitation aliquip enim
    eiusmod nostrud laboris labore irure sint ad officia excepteur. Eiusmod
    minim nulla proident magna excepteur in nisi. Ipsum est ad elit magna
    officia exercitation nulla sit consectetur ipsum.
  </div>
);

export const Default: Story = {
  args: {},
  render: (args) => {
    const [visibleX, setVisibleX] = useState(false);
    const [visibleY, setVisibleY] = useState(false);
    const [position, setPosition] = useState<PopupProps["position"]>("bottom");
    return (
      <>
        <Space>
          <Button
            onClick={() => {
              setVisibleY(true);
              setPosition("bottom");
            }}
          >
            Bottom
          </Button>
          <Button
            onClick={() => {
              setVisibleY(true);
              setPosition("top");
            }}
          >
            Top
          </Button>
          <Button
            onClick={() => {
              setVisibleX(true);
              setPosition("left");
            }}
          >
            Left
          </Button>
          <Button
            onClick={() => {
              setVisibleX(true);
              setPosition("right");
            }}
          >
            Right
          </Button>
        </Space>
        <Popup
          {...args}
          visible={visibleY}
          onMaskClick={() => {
            setVisibleY(false);
          }}
          onClose={() => {
            setVisibleY(false);
          }}
          position={position}
          bodyStyle={{ height: "40vh" }}
        >
          {mockContent}
        </Popup>
        <Popup
          {...args}
          visible={visibleX}
          onMaskClick={() => {
            setVisibleX(false);
          }}
          onClose={() => {
            setVisibleX(false);
          }}
          position={position}
          bodyStyle={{ width: "60vw" }}
        >
          {mockContent}
        </Popup>
      </>
    );
  },
};

export const WithCloseButton: Story = {
  args: {
    showCloseButton: true,
    position: "bottom",
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Popup
        </Button>
        <Popup
          {...args}
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(false);
          }}
          bodyStyle={{ height: "40vh" }}
        >
          {mockContent}
        </Popup>
      </>
    );
  },
};

export const WithLongContent: Story = {
  args: {
    showCloseButton: true,
    position: "bottom",
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Popup
        </Button>
        <Popup
          {...args}
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(false);
          }}
        >
          <div style={{ paddingTop: 16 }}>{mockLongContent}</div>
        </Popup>
      </>
    );
  },
};

export const WithCenterPopup: StoryObj<typeof CenterPopup> = {
  args: {
    showCloseButton: false,
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Center Popup
        </Button>
        <CenterPopup
          {...args}
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(false);
          }}
        >
          <div style={{ paddingTop: 16 }}>{mockContent}</div>
        </CenterPopup>
      </>
    );
  },
};
