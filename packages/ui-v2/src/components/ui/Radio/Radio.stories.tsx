/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Radio } from "./Radio";
import { Space } from "../Space";
import { useState } from "react";
import { SmileIcon, SmilePlusIcon } from "lucide-react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
A scrollable list of letters. Clicking on a letter will scroll to the corresponding list.
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
  render: () => {
    return (
      <Space direction="vertical">
        <div
          onClick={() => {
            console.log("You clicked the Radio");
          }}
        >
          <Radio />
        </div>
        <Radio>Option 1</Radio>
      </Space>
    );
  },
};

export const Group: Story = {
  args: {},
  render: () => {
    return (
      <Radio.Group defaultValue="1">
        <Space direction="vertical">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </Space>
      </Radio.Group>
    );
  },
};

export const CustomIcon: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string>();
    const options = Array.from({ length: 5 }, (_, i) => ({
      value: i + 1,
      label: `Option ${i + 1}`,
    }));

    return (
      <Radio.Group
        value={value}
        onChange={(val) => {
          setValue(val as string);
        }}
      >
        <Space direction="vertical">
          {options.map((option) => (
            <Radio
              value={option.value}
              icon={(checked) =>
                checked ? (
                  <SmileIcon style={{ color: "var(--adm-color-primary)" }} />
                ) : (
                  <SmilePlusIcon style={{ color: "var(--adm-color-weak)" }} />
                )
              }
            >
              {option.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    );
  },
};
