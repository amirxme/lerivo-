import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#111113",
        border: "#27272A",
        muted: "#A1A1AA",
        accent: "#7C3AED",
      },
    },
  },
  plugins: [],
};

export default config;