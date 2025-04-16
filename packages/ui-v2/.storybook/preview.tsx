import React from "react";
import type { Preview, StoryContext } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

// Css
import "../src/css/main.scss";
import "./main.scss";

// Providers
import { ConfigProvider } from "../src/Providers";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.normal,
      source: {
        format: "dedent",
        language: "tsx",
        transform: (_code: string, storyContext: StoryContext) => {
          const originalSource =
            storyContext.parameters?.docs?.source?.originalSource;

          console.log(originalSource);

          const regexDocs =
            /(?<=\/\* storybook-docs wrapper \*\/)[\s\S]*(?=\/\* storybook-docs wrapper \*\/.*)/m;

          const matchRegex = originalSource.match(regexDocs);
          if (!matchRegex) return null;

          const formattedRegex = matchRegex[0].trim();

          return `const App: React.FC = () => {\n${
            formattedRegex.includes("return") ? "" : "  return"
          }\n    ${formattedRegex}\n}`;
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone14pro",
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
