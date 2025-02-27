// Libraries
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

// Components
import { Button } from "../Button";
import { Picker, PickerProps } from "./Picker";

const meta: Meta<typeof Picker> = {
  title: "Components/Picker",
  component: Picker,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Picker>;

const basicColumns: { label: string; value: string }[][] = [
  [
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
  ],
];

const DefaultRender = (args: Story["args"]) => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState<string | number | null>(
    basicColumns[0][0].value
  );

  const selectedOption = basicColumns[0].find(
    (option) => option.value === value
  );

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        {selectedOption?.label}
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={[value]}
        onConfirm={(v) => {
          setValue(v[0]);
        }}
        {...args}
      />
    </>
  );
};

export const Default: Story = {
  args: {},
  argTypes: {},
  render: DefaultRender,
};
