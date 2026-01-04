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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          navy: "#1e3a5f",
          "navy-dark": "#152a45",
          green: "#1a4d3e",
          "green-light": "#2d6a4f",
        },
        neutral: {
          white: "#ffffff",
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            600: "#4b5563",
            800: "#1f2937",
            900: "#111827",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
