/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "am-",
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--am-radius)",
        md: "calc(var(--am-radius) - 2px)",
        sm: "calc(var(--am-radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--am-background))",
        foreground: "hsl(var(--am-foreground))",
        card: {
          DEFAULT: "hsl(var(--am-card))",
          foreground: "hsl(var(--am-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--am-popover))",
          foreground: "hsl(var(--am-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--am-primary))",
          foreground: "hsl(var(--am-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--am-secondary))",
          foreground: "hsl(var(--am-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--am-muted))",
          foreground: "hsl(var(--am-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--am-accent))",
          foreground: "hsl(var(--am-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--am-destructive))",
          foreground: "hsl(var(--am-destructive-foreground))",
        },
        border: "hsl(var(--am-border))",
        input: "hsl(var(--am-input))",
        ring: "hsl(var(--am-ring))",
        chart: {
          1: "hsl(var(--am-chart-1))",
          2: "hsl(var(--am-chart-2))",
          3: "hsl(var(--am-chart-3))",
          4: "hsl(var(--am-chart-4))",
          5: "hsl(var(--am-chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
