// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { FC, PropsWithChildren, useRef } from "react";

// Components
import { Checkbox, CheckboxRef } from "./CheckBox";
import { List } from "../List";
import { Space } from "../Space";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
            console.log("You clicked the checkbox");
          }}
        >
          <Checkbox />
        </div>
        <Checkbox>Option 1</Checkbox>
      </Space>
    );
  },
};

const ListItemWithCheckbox: FC<
  PropsWithChildren<{
    item: string;
  }>
> = (props) => {
  const checkboxRef = useRef<CheckboxRef>(null);
  return (
    <List.Item
      prefix={
        <div onClick={(e) => e.stopPropagation()}>
          <Checkbox value={props.item} ref={checkboxRef} />
        </div>
      }
      onClick={() => {
        checkboxRef.current?.toggle();
      }}
      arrowIcon={false}
    >
      {props.item}
    </List.Item>
  );
};

export const WithList: Story = {
  render: () => {
    const items = ["Apple", "Orange", "Banana"];
    return (
      <Checkbox.Group>
        <List>
          {items.map((item) => (
            <ListItemWithCheckbox key={item} item={item} />
          ))}
        </List>
      </Checkbox.Group>
    );
  },
};
