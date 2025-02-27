/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { IndexBar, IndexBarRef } from "./IndexBar";
import { List } from "../List";
import { useEffect, useRef } from "react";

const meta: Meta<typeof IndexBar> = {
  title: "Components/IndexBar",
  component: IndexBar,
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
  args: {
    sticky: true,
  },
  render: (args) => {
    const getRandomList = (min: number, max: number): string[] => {
      return new Array(Math.floor(Math.random() * (max - min) + min)).fill("");
    };

    const charCodeOfA = "A".charCodeAt(0);
    const groups = Array(26)
      .fill("")
      .map((_, i) => ({
        title: String.fromCharCode(charCodeOfA + i),
        items: getRandomList(3, 10).map(
          () => `Item of ${String.fromCharCode(charCodeOfA + i)}`
        ),
      }));

    return (
      <div style={{ height: window.innerHeight }}>
        <IndexBar {...args}>
          {groups.map((group) => {
            const { title, items } = group;
            return (
              <IndexBar.Panel
                index={title}
                title={`List ${title}`}
                key={`List ${title}`}
              >
                <List>
                  {items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      </div>
    );
  },
};

export const WithTabIndexChange: Story = {
  args: {
    tabIndex: 10,
  },
  render: (args) => {
    const getRandomList = (min: number, max: number): string[] => {
      return new Array(Math.floor(Math.random() * (max - min) + min)).fill("");
    };

    const charCodeOfA = "A".charCodeAt(0);
    const groups = Array(26)
      .fill("")
      .map((_, i) => ({
        title: String.fromCharCode(charCodeOfA + i),
        items: getRandomList(3, 10).map(
          () => `Item of ${String.fromCharCode(charCodeOfA + i)}`
        ),
      }));

    const indexBarRef = useRef<IndexBarRef>(null);

    useEffect(() => {
      indexBarRef.current?.scrollTo(groups[args.tabIndex || 0].title);
    }, [args.tabIndex]);

    return (
      <div style={{ height: window.innerHeight }}>
        <IndexBar ref={indexBarRef}>
          {groups.map((group) => {
            const { title, items } = group;
            return (
              <IndexBar.Panel
                index={title}
                title={`List ${title}`}
                key={`List ${title}`}
              >
                <List>
                  {items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      </div>
    );
  },
};
