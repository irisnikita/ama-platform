// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Collapse } from "./Collapse";

// Icons
import {
  AddOutline,
  ArrowDownCircleOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  MinusOutline,
} from "antd-mobile-icons";

const meta: Meta<typeof Collapse> = {
  title: "Components/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: `
A collapsible component that can be used to display content that can be expanded or collapsed.
        `,
      },
    },
  },
};

const mockContent =
  "Ut qui aliqua enim ipsum do fugiat. Culpa sint exercitation labore culpa sint id. Cillum exercitation ea aliqua nisi ipsum duis Lorem veniam. Nulla dolor duis sit. Ipsum proident mollit nostrud velit laboris reprehenderit labore. Amet id laboris tempor non do in amet qui labore magna.";

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel key="1" title="Item 1">
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel key="2" title="Item 2">
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel key="3" title="Item 3">
          {mockContent}
        </Collapse.Panel>
      </Collapse>
    );
  },
};

export const CustomArrowIcon: Story = {
  args: {},
  render: () => {
    return (
      <Collapse
        defaultActiveKey={["1"]}
        arrowIcon={(active) => (active ? <MinusOutline /> : <AddOutline />)}
      >
        <Collapse.Panel key="1" title="Minus-Add">
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel
          key="2"
          title="Arrow"
          arrowIcon={<ArrowDownCircleOutline />}
        >
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel
          key="3"
          title="Check-Close"
          arrowIcon={(active) =>
            active ? <CheckCircleOutline /> : <CloseCircleOutline />
          }
        >
          {mockContent}
        </Collapse.Panel>
      </Collapse>
    );
  },
};

export const Disable: Story = {
  args: {},
  render: () => {
    return (
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel key="1" title="Item 1">
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel key="2" title="Item 2" disabled>
          {mockContent}
        </Collapse.Panel>
        <Collapse.Panel key="3" title="Item 3">
          {mockContent}
        </Collapse.Panel>
      </Collapse>
    );
  },
};
