import React from "react";
import type { Preview } from "@storybook/react";

// Provider
import { ConfigProvider } from "../src/providers";

// Css
import "../src/css/main.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
