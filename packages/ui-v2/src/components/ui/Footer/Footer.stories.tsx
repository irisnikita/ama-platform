/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { type ChipItem, Footer, LinkItem } from "./Footer";

// Icons
import { HandPayCircleOutline } from "antd-mobile-icons";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: `
        The bottom section of a page that contains information. It helps with navigation and provides important details.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Footer",
  },
  render: (args) => {
    return <Footer {...args} label={args.label}></Footer>;
  },
};

export const CustomLabel: Story = {
  args: {},
  render: () => {
    return (
      <Footer
        label={
          <div>
            <HandPayCircleOutline /> Footer
          </div>
        }
      ></Footer>
    );
  },
};

const links: LinkItem[] = [
  {
    text: "Link 1",
    href: "https://mobile.ant.design/components/footer/",
  },
  {
    text: "Link 2",
    href: "https://mobile.ant.design/components/footer/",
  },
];

export const WithLink: Story = {
  args: {
    links: links,
  },
  render: (args) => {
    return <Footer {...args} links={args.links} />;
  },
};

const chips: ChipItem[] = [
  {
    text: "Chip 1",
    type: "link",
  },
  {
    text: "Chip 2",
    type: "link",
  },
  {
    text: "Chip 3",
  },
];

export const WithChips: Story = {
  args: {
    chips: chips,
  },
  render: (args) => {
    return <Footer {...args} chips={args.chips} />;
  },
};

export const ComplexFooter: Story = {
  args: {
    label: "Footer",
    content: "Content",
    links: links,
    chips: chips,
  },
  render: (args) => {
    return <Footer {...args}></Footer>;
  },
};
