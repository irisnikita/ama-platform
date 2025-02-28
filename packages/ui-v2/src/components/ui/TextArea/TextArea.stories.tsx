/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Components
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `
A text area component that can be used to input content.
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
    const [value, setValue] = useState("");
    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};

export const CustomRows: Story = {
  args: {
    rows: 5,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};

export const WithAutoSize: Story = {
  args: {
    autoSize: { minRows: 3, maxRows: 5 },
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};

export const WithCountWords: Story = {
  args: {
    showCount: true,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState("This is disabled");

    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => {
    const [value, setValue] = useState("This is read only");

    return (
      <TextArea
        {...args}
        placeholder="Input something..."
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    );
  },
};
