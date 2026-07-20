import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#f7f4ee",
        primary: { DEFAULT: "#c28e46", light: "#dca75e" },
        secondary: { DEFAULT: "#111111", light: "#1b1b1b" },
        accent: { DEFAULT: "#c28e46" },
        dark: { DEFAULT: "#030303" },
      },
      fontFamily: { sans: ["var(--font-inter)", "sans-serif"], serif: ["var(--font-cormorant)", "serif"] },
      backgroundImage: { "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))" },
    },
  },
  plugins: [],
};
export default config;