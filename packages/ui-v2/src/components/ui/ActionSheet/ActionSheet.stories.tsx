/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import {
  type Action,
  ActionSheet,
  ActionSheetShowHandler,
} from "./ActionSheet";
import { useRef, useState } from "react";
import { Button } from "../Button";
import { Toast } from "../Toast";

const meta: Meta = {
  title: "Components/ActionSheet",
  component: ActionSheet,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a list of actions.`,
      },
    },
  },
  argTypes: {},
};

const actions: Action[] = [
  { text: "Copy", key: "copy" },
  { text: "Edit", key: "edit" },
  { text: "Save", key: "save" },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>Default List</Button>
        <ActionSheet
          {...args}
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
        />
      </>
    );
  },
};

export const WithCancelButtonAndDescription: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>
          List with description and cancel
        </Button>
        <ActionSheet
          {...args}
          extra="Extra description"
          cancelText="Cancel"
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
        />
      </>
    );
  },
};

export const WithCustomActions: Story = {
  args: {},
  render: (args) => {
    const actions: Action[] = [
      { text: "Copy", key: "copy" },
      { text: "Edit", key: "edit", disabled: true },
      {
        text: "Delete",
        key: "delete",
        description: "Delete permanently",
        danger: true,
        bold: true,
      },
    ];

    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>
          List with custom actions
        </Button>
        <ActionSheet
          {...args}
          extra="Extra description"
          cancelText="Cancel"
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
        />
      </>
    );
  },
};

export const WithCustomEvents: Story = {
  args: {},
  render: (args) => {
    const actions: Action[] = [
      { text: "Copy", key: "copy" },
      { text: "Edit", key: "edit" },
      {
        text: "Save",
        key: "save",
        // onClick: async () => {
        //   const result = await Dialog.confirm({ content: '确定要保存吗？' })
        //   if (result) {
        //     Toast.show('执行了保存操作')
        //   }
        // },
      },
    ];

    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>
          List with custom events
        </Button>
        <ActionSheet
          {...args}
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
          onAction={(action) => {
            if (action.key === "edit" || action.key === "copy") {
              Toast.show(`You have selected ${action.text}`);
            }
          }}
          afterClose={() => {
            Toast.show("Action sheet closed");
          }}
        />
      </>
    );
  },
};

export const Imperative: Story = {
  args: {},
  render: () => {
    const handler = useRef<ActionSheetShowHandler>();
    const actions: Action[] = [
      {
        text: "Copy text",
        key: "copy",
      },
      {
        text: "Edit text",
        key: "edit",
        onClick: () => {
          handler.current?.close();
        },
      },
    ];

    return (
      <>
        <Button
          onClick={() => {
            handler.current = ActionSheet.show({
              actions,
              onClose: () => {
                Toast.show("Action sheet closed");
              },
            });
          }}
        >
          Imperative List
        </Button>
      </>
    );
  },
};
