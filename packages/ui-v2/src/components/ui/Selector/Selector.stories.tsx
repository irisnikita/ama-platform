// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Selector } from "./Selector";
import { Space } from "../Space";

const meta: Meta<typeof Selector> = {
  title: "Components/Selector",
  component: Selector,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to select a value.
        `,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Option 3",
    value: "3",
  },
  {
    label: "Option 4",
    value: "4",
  },
  {
    label: "Option 5",
    value: "5",
  },
];

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <Selector
        {...args}
        options={options}
        defaultValue={["1"]}
        onChange={(arr, extend) => console.log(arr, extend.items)}
      />
    );
  },
};

export const WithDescription: Story = {
  args: {},
  render: (args) => {
    return (
      <Selector
        {...args}
        columns={2}
        options={[
          {
            label: "Option 1",
            description: "This is description of the first option",
            value: "1",
          },
          {
            label: "Option 2",
            description: "This is description of the second option",
            value: "2",
          },
        ]}
        defaultValue={["1"]}
      />
    );
  },
};

export const MultiSelect: Story = {
  args: {
    multiple: true,
  },
  render: (args) => {
    return (
      <Selector
        {...args}
        options={options}
        defaultValue={["2", "3"]}
        multiple={args.multiple}
        onChange={(arr, extend) => console.log(arr, extend.items)}
      />
    );
  },
};

export const CustomColumn: Story = {
  args: {
    columns: 2,
  },
  render: (args) => {
    return (
      <Selector
        {...args}
        columns={args.columns}
        options={options}
        defaultValue={["2", "3"]}
        multiple
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <Space block direction="vertical">
        <Selector
          {...args}
          options={options}
          defaultValue={["1"]}
          disabled={args.disabled}
        />
        <Selector
          options={[
            {
              label: "Option 1",
              value: "1",
            },
            {
              label: "Option 2",
              value: "2",
              disabled: args.disabled,
            },
            {
              label: "Option 3",
              value: "3",
            },
          ]}
          defaultValue={["3"]}
        />
      </Space>
    );
  },
};

export const WithCustomStyle: Story = {
  args: {},
  render: (args) => {
    return (
      <Selector
        {...args}
        style={{
          "--border-radius": "100px",
          "--border": "solid transparent 1px",
          "--checked-border": "solid var(--adm-color-primary) 1px",
          "--padding": "8px 24px",
        }}
        showCheckMark={false}
        options={options}
        defaultValue={["1"]}
      />
    );
  },
};
