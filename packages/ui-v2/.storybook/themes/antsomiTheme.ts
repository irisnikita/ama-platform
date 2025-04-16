import { create } from "@storybook/theming";

// Images
import logo from "../static/ama-logo.png";

export default create({
  base: "light",
  fontBase: "Roboto, sans-serif",
  colorSecondary: "#005fb8",
  fontCode: '"Roboto Mono", monospace',
  brandTitle: "Antsomi Mini App UI",
  brandImage: logo,
});
