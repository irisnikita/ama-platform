// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { CapsuleTabs } from "./CapsuleTabs";

const meta: Meta<typeof CapsuleTabs> = {
  title: "Components/CapsuleTabs",
  component: CapsuleTabs,
};

export default meta;
type Story = StoryObj<typeof CapsuleTabs>;

export const Default: Story = {
  args: {},
  render: () => (
    <CapsuleTabs>
      <CapsuleTabs.Tab title="Fruits" key="fruits">
        Fruits
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Vegetables" key="vegetables">
        Vegetables
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Animals" key="animals">
        Animals
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  ),
};

export const AutoScroll: Story = {
  args: {},
  render: () => (
    <div className="am-w-full">
      <CapsuleTabs defaultActiveKey="1">
        <CapsuleTabs.Tab title="Espresso" key="1">
          1
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Coffee Latte" key="2">
          2
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Cappuccino" key="3">
          3
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Americano" key="4">
          4
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Flat White" key="5">
          5
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Caramel Macchiato" key="6">
          6
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Cafe Mocha" key="7">
          7
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  ),
};
