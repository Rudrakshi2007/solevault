import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#090909",
          deep: "#050505",
          elevated: "#121212",
        },
        charcoal: {
          DEFAULT: "#141414",
          light: "#1F1F1F",
          border: "#262626",
        },
        ivory: {
          DEFAULT: "#F4F1EA",
          muted: "#DDD9CE",
          dark: "#B8B3A7",
        },
        mutedGrey: {
          DEFAULT: "#969696",
          light: "#AFAFAF",
          dark: "#5A5A5A",
        },
        lime: {
          DEFAULT: "#D7FF3F",
          hover: "#C4EC2C",
          dim: "#88A320",
          glow: "rgba(215, 255, 63, 0.15)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "'Impact'",
          "'Arial Black'",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "'SF Mono'",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        widest: "0.25em",
        cinematic: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
