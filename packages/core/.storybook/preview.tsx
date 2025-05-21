import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import React from "react";
import i18n from "./i18next";

// Css
import "./main.scss";

// Providers
// import { ConfigProvider } from "../src/Providers";

const preview: Preview = {
  initialGlobals: {
    locale: "vi",
    locales: {
      en: {
        icon: "🇺🇸",
        title: "English",
        right: "EN",
      },
      vi: {
        icon: "🇻🇳",
        title: "Tiếng Việt",
        right: "VN",
      },
    },
  },
  parameters: {
    docs: {
      theme: themes.normal,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default preview;
