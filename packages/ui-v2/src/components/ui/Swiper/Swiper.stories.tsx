// Libraries
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

// Components
import { Swiper } from "./Swiper";
import { Toast } from "../Toast";

// Constants
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const StyledItem = styled.div`
  height: 200px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  user-select: none;
`;

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <StyledItem
      style={{ background: color }}
      onClick={() => {
        Toast.show(`Swiper ${index + 1}`);
      }}
    >
      {index + 1}
    </StyledItem>
  </Swiper.Item>
));

const meta: Meta<typeof Swiper> = {
  title: "Components/Swiper",
  component: Swiper,
  parameters: {
    docs: {
      description: {
        component: "Swiper component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  args: {
    children: items,
  },
};

export const AutoPlay: Story = {
  args: {
    children: items,
    autoplay: true,
  },
};

export const Loop: Story = {
  args: {
    children: items,
    autoplay: true,
    loop: true,
  },
};
