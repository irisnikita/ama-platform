/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { InfiniteScroll } from "./InfiniteScroll";
import { useState } from "react";
import { List } from "../List";

// Utils
import { sleep } from "antd-mobile/es/utils/sleep";

const meta: Meta<typeof InfiniteScroll> = {
  title: "Components/InfiniteScroll",
  component: InfiniteScroll,
  parameters: {
    docs: {
      description: {
        component: `
A component that can be used to display content that can be scrolled infinitely.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

let count = 0;

async function mockRequest() {
  if (count >= 5) {
    return [];
  }
  await sleep(2000);
  count++;
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
  ];
}

export const WithContent: Story = {
  args: {},
  render: (args) => {
    const [data, setData] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState(true);
    async function loadMore() {
      const append = await mockRequest();
      setData((val) => [...val, ...append]);
      setHasMore(append.length > 0);
    }

    return (
      <>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
        <InfiniteScroll {...args} loadMore={loadMore} hasMore={hasMore} />
      </>
    );
  },
};
