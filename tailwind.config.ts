import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // VERY IMPORTANT
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-color) / <alpha-value>)",
        text: "rgb(var(--text-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
