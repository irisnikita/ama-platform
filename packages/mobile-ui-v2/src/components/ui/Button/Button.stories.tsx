import { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";

// Components
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
## When to Use

Marks or encapsulates a group of operation commands, responds to user click behavior, and triggers corresponding business logic. 

        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    block: {
      control: "boolean",
      defaultValue: false,
      description: "Option to fit button width to its parent width",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of button",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      description: "The size of the button.",
      table: {
        defaultValue: { summary: "middle" },
      },
    },
    color: {
      description: "The color of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    fill: {
      description: "The fill mode.",
      table: {
        defaultValue: { summary: "solid" },
      },
    },
    loading: {
      control: "boolean",
      description: "Loading state of button",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loadingText: {
      control: "text",
      description: "The extra text displayed in loading state.",
      type: "string",
    },
    onClick: {
      action: "clicked",
      description: "Callback when button is clicked",
      type: "function",
    },
    type: {
      control: "select",
      description: "The type of the button.",
      options: ["submit", "reset", "button"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    loadingIcon: {
      control: undefined,
      description: "The customized icon in loading state.",
      type: "function",
      table: {
        defaultValue: { summary: "<DotLoading color='currentColor' />" },
      },
    },
    shape: {
      description: "The shape of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    icon: {
      type: "function",
    },
    // ghost: {
    //   control: "boolean",
    //   description:
    //     "Make background transparent and invert text and border colors",
    //   type: "boolean",
    //   table: {
    //     defaultValue: { summary: "false" },
    //   },
    // },
    // classNames: {
    //   control: {
    //     type: "object",
    //   },
    //   description: "Semantic DOM class",
    //   type: "symbol",
    //   table: {},
    // },
  },
  args: {
    children: "Button",
    color: "default",
    fill: "solid",
    size: "middle",
    loading: false,
    type: "button",
    shape: "default",
    iconPosition: "left",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Fill: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} fill="solid" />
      <Button {...args} fill="outline" />
      <Button {...args} fill="none" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The fill mode.",
      },
    },
  },
};

export const Color: Story = {
  args: {},
  render: (args) => {
    /* storybook-docs wrapper */
    return (
      <div className="am-flex am-items-center am-gap-4 am-flex-wrap">
        <Button {...args} />
        <Button {...args} color="primary" />
        <Button {...args} color="success" />
        <Button {...args} color="danger" />
        <Button {...args} color="warning" />
      </div>
    );
    /* storybook-docs wrapper */
  },
  parameters: {
    docs: {
      description: {
        story: "The color of the button.",
      },
    },
  },
};

export const Size: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} size="mini" />
      <Button {...args} size="small" />
      <Button {...args} size="middle" />
      <Button {...args} size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The size of the button.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    children: "Search",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} icon={<SearchIcon />} />
      <Button {...args} size="small" icon={<SearchIcon size={18} />} />
      <Button
        {...args}
        size="large"
        icon={<SearchIcon size={24} />}
        iconPosition="right"
      />
      <Button
        {...args}
        size="small"
        icon={<SearchIcon size={18} />}
        iconPosition="right"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The icon of the button.",
      },
    },
  },
};

export const Shape: Story = {
  args: {
    children: "Button",
    color: "primary",
    fill: "solid",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} shape="default" />
      <Button {...args} shape="rounded" />
      <Button {...args} shape="rectangular" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The shape of the button.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    color: "primary",
    fill: "solid",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} loading />
      <Button {...args} loading loadingText="Loading" />
      <Button
        {...args}
        loading="auto"
        onClick={async () => {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 2000);
          });
        }}
      >
        Auto Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The loading state of the button.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    color: "primary",
    fill: "solid",
  },
  render: (args) => (
    <div className="am-flex am-items-center am-gap-4">
      <Button {...args} disabled />
      <Button {...args} color="default" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The disabled state of the button.",
      },
    },
  },
};

export const CSSVariables: Story = {
  parameters: {
    controls: { disable: true },
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        story: `
| Name               | Description                     | Default                       | Global                          |
|--------------------|---------------------------------|-------------------------------|---------------------------------|
| --background-color | Background color of the button. | \`var(--adm-color-background)\` | \`--adm-button-background-color\` |
| --border-color     | Border color of the button.     | \`var(--adm-color-border)\`     | \`--adm-button-border-color\`     |
| --border-radius    | Border radius of the button.    | \`4px\`                         | \`--adm-button-border-radius\`    |
| --border-style     | Border style of the button.     | \`solid\`                       | \`--adm-button-border-style\`     |
| --border-width     | Border width of the button.     | \`1px\`                         | \`--adm-button-border-width\`     |
| --text-color       | Text color of the button.       | \`var(--adm-color-text)\`       | \`--adm-button-text-color\`       |
        `,
      },
    },
  },
  render: () => <></>,
};
