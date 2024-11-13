import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          900: "var(--main-900)",
          800: "var(--main-800)",
          700: "var(--main-700)",
          600: "var(--main-600)",
          500: "var(--main-500)",
        },
        dark: {
          900: "var(--dark-900)",
          800: "var(--dark-800)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
