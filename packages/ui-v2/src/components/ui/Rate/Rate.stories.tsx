// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Rate } from "./Rate";
import { Toast } from "../Toast";
import { Space } from "../Space";
import { SmileIcon } from "lucide-react";

const meta: Meta<typeof Rate> = {
  title: "Components/Rate",
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a rating.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 3,
  },
  render: (args) => {
    return <Rate {...args} onChange={(val) => Toast.show(val.toString())} />;
  },
};

export const AllowHalf: Story = {
  args: {
    value: 2.5,
  },
  render: (args) => {
    return <Rate {...args} allowHalf defaultValue={2.5} />;
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 3,
  },
  render: (args) => {
    return <Rate {...args} readOnly={args.readOnly} />;
  },
};

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: 3,
  },
  render: (args) => {
    return <Rate {...args} allowClear={args.allowClear} />;
  },
};

export const CustomCharacter: Story = {
  args: {},
  render: (args) => {
    return (
      <Space direction="vertical">
        <Rate {...args} allowHalf defaultValue={2} character={<SmileIcon />} />
        <Rate {...args} allowHalf defaultValue={1.5} character={"A"} />
        <Rate
          {...args}
          allowHalf
          defaultValue={3.5}
          character={"好"}
          style={{
            "--star-size": "32px",
            "--active-color": "#ff7f7f",
          }}
        />
      </Space>
    );
  },
};
