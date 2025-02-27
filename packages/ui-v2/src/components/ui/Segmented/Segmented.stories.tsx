/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Components
import { Segmented } from "./Segmented";
import { Button } from "../Button";
import { Avatar } from "../Avatar";

// Icons
import { AppOutline, UnorderedListOutline } from "antd-mobile-icons";

const meta: Meta<typeof Segmented> = {
  title: "Components/Segmented",
  component: Segmented,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a segmented control.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = ["Daily", "Weekly", "Monthly"];

export const Default: Story = {
  args: {},
  render: (args) => <Segmented {...args} options={defaultOptions} />,
};

export const FitWidth: Story = {
  args: {},
  render: (args) => (
    <Segmented {...args} block options={[123, 456, "long-long-long"]} />
  ),
};

export const WithValue: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = useState<string | number>("Map");
    return (
      <Segmented
        {...args}
        value={value}
        onChange={setValue}
        options={["Map", "Transit", "Hybrid"]}
      />
    );
  },
};

export const DisabledSingle: Story = {
  args: {},
  render: (args) => (
    <Segmented
      {...args}
      options={[
        "Daily",
        { label: "Weekly", value: "Weekly", disabled: true },
        "Monthly",
        { label: "Yearly", value: "Yearly", disabled: true },
      ]}
    />
  ),
};

export const DisabledAll: Story = {
  args: {},
  render: (args) => (
    <Segmented {...args} options={["Map", "Transit", "Satellite"]} disabled />
  ),
};

export const WithLoadMoreOptions: Story = {
  args: {},
  render: (args) => {
    const [options, setOptions] = useState(defaultOptions);
    const [moreLoaded, setMoreLoaded] = useState(false);

    const handleLoadOptions = () => {
      setOptions([...defaultOptions, "Quarterly", "Yearly"]);
      setMoreLoaded(true);
    };
    return (
      <div>
        <Segmented {...args} options={options} />
        <Button
          style={{ marginTop: 10 }}
          size="mini"
          disabled={moreLoaded}
          onClick={handleLoadOptions}
        >
          Load more options
        </Button>
      </div>
    );
  },
};

const options = [
  {
    label: "List",
    value: "List",
    icon: <UnorderedListOutline />,
  },
  {
    label: "Kanban",
    value: "Kanban",
    icon: <AppOutline />,
  },
];

export const WithCustomIcon: Story = {
  args: {},
  render: (args) => {
    return <Segmented {...args} options={options} />;
  },
};

const optionsLabel = [
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div>User 1</div>
      </div>
    ),
    value: "user1",
  },
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div>User 2</div>
      </div>
    ),
    value: "user2",
  },
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div>User 3</div>
      </div>
    ),
    value: "user3",
  },
];

export const WithCustomLabel: Story = {
  args: {},
  render: (args) => {
    return <Segmented {...args} options={optionsLabel} />;
  },
};
