// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Steps } from "./Steps";
import { Space } from "../Space";
import { Button } from "../Button";

// Icons
import {
  CheckCircleFill,
  ClockCircleFill,
  HandPayCircleOutline,
} from "antd-mobile-icons";

const meta: Meta<typeof Steps> = {
  title: "Components/Steps",
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: `
A step component that can be used to display a list of steps.`,
      },
    },
  },
  argTypes: {
    current: {
      description: "Current step index",
      control: {
        type: "number",
      },
    },
    direction: {
      description: "Direction of the steps",
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <Steps {...args} current={1}>
        <Steps.Step title="Step 1" description="This is step 1" />
        <Steps.Step title="Step 2" description="This is step 2" />
        <Steps.Step title="Step 3" description="This is step 3" />
      </Steps>
    );
  },
};

export const WithCustomStep: Story = {
  args: {},
  render: (args) => {
    return (
      <Steps {...args} current={1}>
        <Steps.Step
          title="Step 1"
          description="This is finished step"
          status="finish"
        />
        <Steps.Step
          title="Step 2"
          description="This is error step"
          status="error"
        />
        <Steps.Step
          title="Step 3"
          description="This is processing step"
          status="process"
        />
        <Steps.Step
          title="Step 4"
          description="This is waiting step"
          status="wait"
        />
      </Steps>
    );
  },
};

export const WithCustomDirection: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => {
    return (
      <Steps {...args} direction={args.direction} current={1}>
        <Steps.Step
          title="Step 1"
          description="This is finished step"
          status="finish"
        />
        <Steps.Step
          title="Step 2"
          description="This is error step"
          status="error"
        />
        <Steps.Step
          title="Step 3"
          description="This is processing step"
          status="process"
        />
        <Steps.Step
          title="Step 4"
          description="This is waiting step"
          status="wait"
        />
      </Steps>
    );
  },
};

export const WithCustomStepDetail: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => {
    return (
      <Steps
        {...args}
        direction="vertical"
        current={1}
        style={{
          "--title-font-size": "17px",
          "--description-font-size": "15px",
          "--indicator-margin-right": "12px",
          "--icon-size": "22px",
        }}
      >
        <Steps.Step
          title="Step 1"
          description="Done step"
          icon={<CheckCircleFill />}
        />
        <Steps.Step
          title="Step 2"
          description={
            <Space block direction="vertical">
              <div>Loading Step</div>
              <Button color="primary">Detail</Button>
            </Space>
          }
          icon={<ClockCircleFill />}
        />
        <Steps.Step
          title="Step 3"
          description="Payment Step"
          icon={<HandPayCircleOutline />}
        />
      </Steps>
    );
  },
};
