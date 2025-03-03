/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { useEffect, useState } from "react";

// Components
import { Popover, type PopoverProps } from "./Popover";
import { Button } from "../Button";
import { Toast } from "../Toast";
import {
  BusFrontIcon,
  DollarSignIcon,
  HelpCircleIcon,
  ScanIcon,
} from "lucide-react";

const StyledItem = styled.div`
  margin: 32px auto;
  background: #cccbcb;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 8;
  font-size: 15px;
  top: 45%;
  left: 54%;
  position: absolute;
  margin-top: -75px;
  margin-left: -75px;
`;

type PlacementValues = PopoverProps["placement"];

const directionList: PlacementValues[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start",
];

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display content onclick.`,
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    placement: {
      control: { type: "select" },
      options: directionList,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: "click",
    placement: "bottom",
    content: "This is a popover",
    defaultVisible: true,
  },
  render: (args) => {
    return (
      <Popover {...args}>
        <Button>Default</Button>
      </Popover>
    );
  },
};

export const Visible: Story = {
  args: {
    trigger: "click",
    placement: "bottom",
    content: "This is a popover",
    visible: true,
  },
  render: (args) => {
    return (
      <Popover {...args}>
        <Button>Default</Button>
      </Popover>
    );
  },
};

export const Placements: Story = {
  args: {
    content: "Content",
    visible: true,
  },
  render: (args) => {
    const [placement, setPlacement] =
      useState<PopoverProps["placement"]>("top-start");

    useEffect(() => {
      let current = 0;

      const timer = window.setInterval(() => {
        if (current >= directionList.length - 1) {
          current = 0;
        } else {
          current += 1;
        }
        setPlacement(directionList[current]);
      }, 1500);

      return () => {
        window.clearInterval(timer);
      };
    }, []);
    return (
      <Popover {...args} key={placement} placement={placement}>
        <StyledItem>{placement}</StyledItem>
      </Popover>
    );
  },
};

type PopoverMenuType = typeof Popover.Menu;
type PopoverMenuProps = Parameters<PopoverMenuType>[0];

const actionList: PopoverMenuProps["actions"] = [
  { key: "scan", icon: <ScanIcon />, text: "Scan" },
  { key: "payment", icon: <DollarSignIcon />, text: "Payment" },
  { key: "bus", icon: <BusFrontIcon />, text: "Bus" },
  { key: "assistant", icon: <HelpCircleIcon />, text: "Assistant" },
];

export const WithMenu: Story = {
  args: {
    trigger: "click",
    placement: "bottom-start",
  },
  render: (args) => {
    return (
      <Popover.Menu
        {...args}
        actions={actionList}
        onAction={(node) => Toast.show(`You selected ${node.text}`)}
      >
        <Button>Show Menu</Button>
      </Popover.Menu>
    );
  },
};

export const CustomMode: Story = {
  args: {
    trigger: "click",
    placement: "bottom-start",
    mode: "dark",
  },
  render: (args) => {
    return (
      <Popover.Menu
        {...args}
        actions={actionList}
        onAction={(node) => Toast.show(`You selected ${node.text}`)}
      >
        <Button>Show Menu</Button>
      </Popover.Menu>
    );
  },
};

export const CustomMenu: StoryObj<PopoverMenuProps> = {
  args: {
    trigger: "click",
    placement: "bottom-start",
    maxCount: 2,
  },
  render: (args) => {
    return (
      <Popover.Menu
        {...args}
        actions={actionList}
        onAction={(node) => Toast.show(`You selected ${node.text}`)}
      >
        <Button>Show Menu</Button>
      </Popover.Menu>
    );
  },
};
