/* eslint-disable react-hooks/rules-of-hooks */
// Libraries
import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useMemo, useState } from "react";

// Components
import { Cascader, type CascaderOption } from "./Cascader";
import { Button } from "../Button";
import { Toast } from "../Toast";

// Utils
import { sleep } from "antd-mobile/es/utils/sleep";

const meta: Meta<typeof Cascader> = {
  title: "Components/Cascader",
  component: Cascader,
  parameters: {
    docs: {
      description: {
        component: `
        A cascader component that can be used to display content.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

async function mockDataFetch(value: string) {
  await sleep(1000);
  return Array(5)
    .fill(null)
    .map((_, index) => (value ? `${value}-${index + 1}` : `Data ${index + 1}`));
}

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
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Cascader
        </Button>
        <Cascader
          {...args}
          placeholder="Please select"
          cancelText="Cancel"
          confirmText="OK"
          onConfirm={(value) => {
            Toast.show(`You selected ${value.join("-")}`);
          }}
          onCancel={() => {
            Toast.show("You cancelled");
          }}
          options={options}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </>
    );
  },
};

export const UsePrompt: Story = {
  render: () => {
    return (
      <Button
        onClick={async () => {
          const value = await Cascader.prompt({
            options,
            title: "Cascader",
            placeholder: "Please select",
            confirmText: "OK",
            cancelText: "Cancel",
          });
          Toast.show(
            value ? `You selected ${value.join("-")}` : "You cancelled"
          );
        }}
      >
        Show Cascader
      </Button>
    );
  },
};

export const WithAsync: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [valueToOptions, setValueToOptions] = useState(
      {} as Record<string, CascaderOption[] | null>
    );
    const options = useMemo<CascaderOption[]>(() => {
      function generate(v: string): CascaderOption[] | undefined {
        const options = valueToOptions[v];
        if (options === null) {
          return undefined;
        }
        if (options === undefined) {
          return Cascader.optionSkeleton;
        }
        return options.map((option) => ({
          ...option,
          children: generate(option.value || ""),
        }));
      }
      return generate("") ?? [];
    }, [valueToOptions]);

    async function fetchOptionsForValue(v: string, level: number) {
      if (v in valueToOptions) return;
      if (level >= 3) {
        setValueToOptions((prev) => ({
          ...prev,
          [v]: null,
        }));
        return;
      }
      const data = await mockDataFetch(v);
      const options =
        data === null
          ? null
          : data.map((entry) => ({
              value: entry,
              label: entry,
            }));
      setValueToOptions((prev) => ({
        ...prev,
        [v]: options,
      }));
    }

    useEffect(() => {
      fetchOptionsForValue("", 0);
    }, []);

    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show Cascader
        </Button>
        <Cascader
          {...args}
          placeholder="Please select"
          cancelText="Cancel"
          confirmText="OK"
          options={options}
          onConfirm={(value) => {
            Toast.show(`You selected ${value.join("-")}`);
          }}
          onCancel={() => {
            Toast.show("You cancelled");
          }}
          onSelect={(value) => {
            value.forEach((v, index) => {
              fetchOptionsForValue(v as string, index + 1);
            });
          }}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </>
    );
  },
};
