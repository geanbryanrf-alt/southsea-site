import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Fundo super escuro baseado na imagem
        foreground: "#f2f0eb", // Branco levemente off-white
        primary: {
          DEFAULT: "#c28e46", // Cobre/Dourado elegante
          light: "#dca75e", // Cobre claro
        },
        secondary: {
          DEFAULT: "#141414", // Cinza bem escuro para contrastes sutis
          light: "#262626", // Cinza médio escuro
        },
        accent: {
          DEFAULT: "#c28e46", // Foco interações
        },
        dark: {
          DEFAULT: "#000000", // Preto puro
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
