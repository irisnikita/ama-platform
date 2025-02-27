// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { Card } from "./Card";
import { Toast } from "../Toast";
import { Button } from "../Button";

// Icons
import { AlignRightIcon, EditIcon } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `
A card component that can be used to display content.
        `,
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const onClick = () => {
      Toast.show("This is a card");
    };

    return (
      <Card title="Card 1" onClick={onClick}>
        This is card 1 content
      </Card>
    );
  },
};

export const WithoutContent: Story = {
  args: {},
  render: () => {
    const onClick = () => {
      Toast.show("This is the title of card 1");
    };
    return <Card title="Card 1" onClick={onClick} />;
  },
};

export const ComplexCard: Story = {
  args: {},
  render: () => {
    const onHeaderClick = () => {
      Toast.show("This is the title of card");
    };

    const onBodyClick = () => {
      Toast.show("This is the content of card");
    };
    return (
      <Card
        icon={<EditIcon style={{ color: "#1677ff" }} />}
        title={<div style={{ fontWeight: "bold" }}>Title</div>}
        extra={<AlignRightIcon />}
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: "16px" }}
      >
        <div className="am-h-10">Content</div>
        <div
          className="am-flex am-justify-items-end am-p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            color="primary"
            onClick={() => {
              Toast.show("You clicked the save button");
            }}
          >
            Save
          </Button>
        </div>
      </Card>
    );
  },
};
