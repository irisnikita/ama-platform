// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { JumboTabs } from "./JumboTabs";

const meta: Meta<typeof JumboTabs> = {
  title: "Components/JumboTabs",
  component: JumboTabs,
  parameters: {
    docs: {
      description: {
        component: `
A tab component that can be used to switch between different tabs.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof JumboTabs>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <JumboTabs {...args}>
        <JumboTabs.Tab title="Tab 1" description="Tab 1 description" key={1}>
          Tab 1
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 2" description="Tab 2 description" key={2}>
          Tab 2
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 3" description="Tab 3 description" key={3}>
          Tab 3
        </JumboTabs.Tab>
      </JumboTabs>
    );
  },
};

export const WithActiveKey: Story = {
  args: {
    defaultActiveKey: "2",
    activeKey: "2",
  },
  render: (args) => {
    return (
      <JumboTabs {...args}>
        <JumboTabs.Tab title="Tab 1" description="Tab 1 description" key={1}>
          Tab 1
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 2" description="Tab 2 description" key={2}>
          Tab 2
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 3" description="Tab 3 description" key={3}>
          Tab 3
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 4" description="Tab 4 description" key={4}>
          Tab 3
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Tab 5" description="Tab 5 description" key={5}>
          Tab 3
        </JumboTabs.Tab>
      </JumboTabs>
    );
  },
};

// export const Clickable: Story = {
//   args: {},
//   render: (args) => {
//     return (
//       <JumboTabs {...args}>
//         <JumboTabs.Item
//           prefix={<JumboTabsIcon />}
//           onClick={() => alert("Item 1 clicked")}
//         >
//           Item 1
//         </JumboTabs.Item>
//         <JumboTabs.Item
//           prefix={<DollarSignIcon />}
//           onClick={() => alert("Item 2 clicked")}
//         >
//           Item 2
//         </JumboTabs.Item>
//         <JumboTabs.Item
//           prefix={<BusIcon />}
//           onClick={() => alert("Item 3 clicked")}
//         >
//           Item 3
//         </JumboTabs.Item>
//       </JumboTabs>
//     );
//   },
// };
