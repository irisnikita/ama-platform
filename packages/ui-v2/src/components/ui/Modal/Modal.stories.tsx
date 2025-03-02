// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Button } from "../Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    closeOnMaskClick: true,
    title: "Modal Title",
    content: "Modal Content",
    closeOnAction: true,
    actions: [
      {
        key: "cancel",
        text: "Cancel",
      },
    ],
  },

  render: (args) => {
    return (
      <Button
        onClick={() => {
          Modal.show({
            ...args,
          });
        }}
      >
        Open Modal
      </Button>
    );
  },
};
