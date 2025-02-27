/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { CascaderView } from "./CascaderView";

const meta: Meta<typeof CascaderView> = {
  title: "Components/CascaderView",
  component: CascaderView,
  parameters: {
    docs: {
      description: {
        component: `
        The section of a page that contains information. It helps with navigation and provides important details.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "1. Hanoi",
    value: "1",
    children: [
      {
        label: "1-1. Ba Dinh District",
        value: "1",
        children: [
          {
            label: "1-1-1. Ho Chi Minh Mausoleum",
            value: "1",
          },
          {
            label: "1-1-2. One Pillar Pagoda",
            value: "2",
          },
          {
            label: "1-1-3. Presidential Palace",
            value: "3",
            disabled: true,
          },
        ],
      },
      {
        label: "1-2. Hoan Kiem District",
        value: "2",
        children: [
          {
            label: "1-2-1. Hoan Kiem Lake",
            value: "1",
          },
          {
            label: "1-2-2. Ngoc Son Temple",
            value: "2",
            disabled: true,
          },
          {
            label: "1-2-3. Hanoi Opera House",
            value: "3",
          },
        ],
      },
      {
        label: "1-3. Tay Ho District",
        value: "3",
        children: [
          {
            label: "1-3-1. West Lake",
            value: "1",
          },
          {
            label: "1-3-2. Tran Quoc Pagoda",
            value: "2",
          },
          {
            label: "1-3-3. Quang Ba Flower Market",
            value: "3",
          },
        ],
      },
    ],
  },
  {
    label: "2. Ho Chi Minh City",
    value: "2",
    children: [
      {
        label: "2-1. District 1",
        value: "1",
        children: [
          {
            label: "2-1-1. Ben Thanh Market",
            value: "1",
          },
          {
            label: "2-1-2. Notre-Dame Cathedral Basilica",
            value: "2",
          },
          {
            label: "2-1-3. Independence Palace",
            value: "3",
          },
        ],
      },
      {
        label: "2-2. District 3",
        value: "2",
        children: [
          {
            label: "2-2-1. War Remnants Museum",
            value: "1",
          },
          {
            label: "2-2-2. Tan Dinh Church",
            value: "2",
          },
          {
            label: "2-2-3. Le Van Tam Park",
            value: "3",
          },
        ],
      },
    ],
  },
  {
    label: "3. Da Nang",
    value: "3",
    children: [
      {
        label: "3-1. Son Tra District",
        value: "1",
        children: [
          {
            label: "3-1-1. Linh Ung Pagoda",
            value: "1",
          },
          {
            label: "3-1-2. Son Tra Peninsula",
            value: "2",
          },
          {
            label: "3-1-3. Ban Co Peak",
            value: "3",
          },
        ],
      },
      {
        label: "3-2. Hai Chau District",
        value: "2",
        children: [
          {
            label: "3-2-1. Dragon Bridge",
            value: "1",
          },
          {
            label: "3-2-2. Han Market",
            value: "2",
          },
          {
            label: "3-2-3. Museum of Cham Sculpture",
            value: "3",
          },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <CascaderView {...args} placeholder="Please select" options={options} />
    );
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return (
      <CascaderView
        {...args}
        placeholder="Please select"
        options={options}
        loading={args.loading}
      />
    );
  },
};
