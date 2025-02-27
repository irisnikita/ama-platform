// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `
A dialog component that can be used to display content.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() => {
        Dialog.show({
          content: "This is a dialog message!",
        });
      }}
    >
      Show Dialog
    </Button>
  ),
};
