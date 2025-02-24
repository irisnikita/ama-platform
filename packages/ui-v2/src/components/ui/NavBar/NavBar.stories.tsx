// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { NavBar } from "./NavBar";
import { Toast } from "../Toast";
import { Space } from "../Space";

// Icons
import { MoreOutline, SearchOutline } from "antd-mobile-icons";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component: `
A navigation bar at the top of the screen.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <NavBar>Nav bar</NavBar>
      </div>
    );
  },
};

export const WithBack: Story = {
  args: {},
  render: () => {
    const back = () =>
      Toast.show({
        content: "Go back to the previous page",
        duration: 1000,
      });

    return (
      <div>
        <NavBar back="Back" onBack={back}>
          Nav bar
        </NavBar>
      </div>
    );
  },
};

export const WithRight: Story = {
  args: {},
  render: () => {
    const right = (
      <div style={{ fontSize: 24 }}>
        <Space style={{ "--gap": "16px" }}>
          <SearchOutline />
          <MoreOutline />
        </Space>
      </div>
    );

    return (
      <div>
        <NavBar right={right}>Nav bar</NavBar>
      </div>
    );
  },
};

export const WithLeft: Story = {
  args: {},
  render: () => {
    const left = (
      <div style={{ fontSize: 24 }}>
        <Space style={{ "--gap": "16px" }}>
          <SearchOutline />
          <MoreOutline />
        </Space>
      </div>
    );

    return (
      <div>
        <NavBar left={left}>Nav bar</NavBar>
      </div>
    );
  },
};
