// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { DatePicker, DatePickerProps } from "./DatePicker";
import { Button } from "../Button";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: `A date picker component.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const WrapperComponent = (args: DatePickerProps) => {
      const [visible, setVisible] = useState(false);

      return (
        <>
          <Button onClick={() => setVisible(true)}>Show date picker</Button>
          <DatePicker
            {...args}
            visible={visible}
            onClose={() => setVisible(false)}
          />
        </>
      );
    };

    return <WrapperComponent {...args} />;
  },
};
