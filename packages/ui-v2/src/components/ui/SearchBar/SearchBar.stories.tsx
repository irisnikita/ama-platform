/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

// Components
import { SearchBar, SearchBarRef } from "./SearchBar";
import { Space } from "../Space";
import { Toast } from "../Toast";
import { Button } from "../Button";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: `
A search bar component that can be used to find content.
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
    placeholder: "Search something...",
  },
  render: (args) => {
    return <SearchBar placeholder={args.placeholder} />;
  },
};

export const WithCancelButton: Story = {
  args: {
    showCancelButton: true,
    placeholder: "Search something...",
  },
  render: (args) => {
    return <SearchBar {...args} showCancelButton={args.showCancelButton} />;
  },
};

export const WithAutoFocus: Story = {
  args: {
    placeholder: "Search something...",
    autoFocus: true,
  },
  render: (args) => {
    return <SearchBar {...args} autoFocus={args.autoFocus} />;
  },
};

export const UseRef: Story = {
  args: {},
  render: () => {
    const searchRef = useRef<SearchBarRef>(null);
    return (
      <Space block direction="vertical">
        <SearchBar
          ref={searchRef}
          placeholder="Search something..."
          showCancelButton
          onSearch={(val) => {
            Toast.show(`You searched ${val}`);
            searchRef.current?.clear();
          }}
          onFocus={() => {
            console.log("Focus");
          }}
          onBlur={() => {
            console.log("Blur");
          }}
          onCancel={() => {
            console.log("Cancel");
          }}
        />
        <Space>
          <Button
            onClick={() => {
              searchRef.current?.clear();
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => {
              searchRef.current?.focus();
            }}
          >
            Focus
          </Button>
        </Space>
      </Space>
    );
  },
};
