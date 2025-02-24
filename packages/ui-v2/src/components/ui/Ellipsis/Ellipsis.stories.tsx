// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Ellipsis } from "./Ellipsis";

const meta: Meta<typeof Ellipsis> = {
  title: "Components/Ellipsis",
  component: Ellipsis,
  parameters: {
    docs: {
      description: {
        component: `
 Component that can be used to display overflow content that can be expanded or collapsed.
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["start", "middle", "end"],
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const content =
  "Ut qui aliqua enim ipsum do fugiat. Culpa sint exercitation labore culpa sint id. Cillum exercitation ea aliqua nisi ipsum duis Lorem veniam. Nulla dolor duis sit. Ipsum proident mollit nostrud velit laboris reprehenderit labore. Amet id laboris tempor non do in amet qui labore magna. Ut qui aliqua enim ipsum do fugiat. Culpa sint exercitation labore culpa sint id. Cillum exercitation ea aliqua nisi ipsum duis Lorem veniam. Nulla dolor duis sit. Ipsum proident mollit nostrud velit laboris reprehenderit labore. Amet id laboris tempor non do in amet qui labore magna. Ut qui aliqua enim ipsum do fugiat. Culpa sint exercitation labore culpa sint id. Cillum exercitation ea aliqua nisi ipsum duis Lorem veniam. Nulla dolor duis sit. Ipsum proident mollit nostrud velit laboris reprehenderit labore. Amet id laboris tempor non do in amet qui labore magna. Ut qui aliqua enim ipsum do fugiat. Culpa sint exercitation labore culpa sint id. Cillum exercitation ea aliqua nisi ipsum duis Lorem veniam. Nulla dolor duis sit. Ipsum proident mollit nostrud velit laboris reprehenderit labore. Amet id laboris tempor non do in amet qui labore magna.";

export const Default: Story = {
  args: {
    direction: "end",
  },
  render: (args) => {
    return <Ellipsis content={content} direction={args.direction} />;
  },
};

export const CustomRow: Story = {
  args: {
    rows: 3,
  },
  render: (args) => {
    return <Ellipsis {...args} rows={args.rows} content={content} />;
  },
};

export const Expandable: Story = {
  args: {
    expandText: "Expand",
    collapseText: "Collapse",
  },
  render: (args) => {
    return (
      <Ellipsis
        {...args}
        content={content}
        expandText={args.expandText}
        collapseText={args.collapseText}
      />
    );
  },
};

export const DefaultExpand: Story = {
  args: {
    defaultExpanded: true,
  },
  render: (args) => {
    return (
      <Ellipsis
        content={content}
        defaultExpanded={args.defaultExpanded}
        expandText="Expand"
        collapseText="Collapse"
      />
    );
  },
};
