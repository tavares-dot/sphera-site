import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        bg2: "rgb(var(--bg-2) / <alpha-value>)",
        bg3: "rgb(var(--bg-3) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-hi": "rgb(var(--accent-hi) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.24em",
        tightest: "-0.035em",
      },
      maxWidth: {
        wide: "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
