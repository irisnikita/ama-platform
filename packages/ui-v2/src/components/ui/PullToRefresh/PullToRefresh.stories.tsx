/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Utils
import { sleep } from "antd-mobile/es/utils/sleep";

// Components
import { PullStatus, PullToRefresh } from "./PullToRefresh";
import { List } from "../List";
import { Toast } from "../Toast";

const meta: Meta<typeof PullToRefresh> = {
  title: "Components/PullToRefresh",
  component: PullToRefresh,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display a pull-to-refresh indicator.`,
      },
    },
  },
  args: {},
};

function getNextData() {
  const ret: string[] = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(`Item ${i}`);
  }
  return ret;
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [data, setData] = useState(() => getNextData());
    return (
      <PullToRefresh
        {...args}
        onRefresh={async () => {
          await sleep(1000);
          setData([...getNextData(), ...data]);
        }}
      >
        <List style={{ minHeight: "100vh" }}>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    );
  },
};

const statusRecord: Record<PullStatus, string> = {
  pulling: "Is Pulling",
  canRelease: "Can Release",
  refreshing: "Refreshing...",
  complete: "Complete",
};

export const CustomContent: Story = {
  args: {},
  render: (args) => {
    const [data, setData] = useState(() => getNextData());
    return (
      <PullToRefresh
        {...args}
        onRefresh={async () => {
          await sleep(1000);
          setData([...getNextData(), ...data]);
        }}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
        <List style={{ minHeight: "100vh" }}>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    );
  },
};

async function doRefresh() {
  await sleep(1000);
  Toast.show({
    icon: "fail",
    content: "Loading failed",
  });
  throw new Error("Refresh failed");
}

export const HandleRefreshError: Story = {
  args: {},
  render: (args) => {
    return (
      <PullToRefresh {...args} onRefresh={doRefresh}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>Refreshing</div>
        </div>
      </PullToRefresh>
    );
  },
};
