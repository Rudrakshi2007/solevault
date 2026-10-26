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
          DEFAULT: "#050608",
          deep: "#030405",
          elevated: "#0B1014",
        },
        deepSpace: {
          DEFAULT: "#0B1014",
          light: "#111820",
          border: "#18232C",
        },
        midnight: {
          DEFAULT: "#101B2A",
          light: "#17273D",
          deep: "#0A111C",
        },
        auroraTeal: {
          DEFAULT: "#35E6D3",
          hover: "#25D2BF",
          glow: "rgba(53, 230, 211, 0.25)",
          dim: "rgba(53, 230, 211, 0.12)",
        },
        emeraldGlow: {
          DEFAULT: "#46F0A0",
          hover: "#34DC8C",
          dim: "rgba(70, 240, 160, 0.15)",
        },
        icyBlue: {
          DEFAULT: "#75BFFF",
          light: "#A4D4FF",
          dim: "rgba(117, 191, 255, 0.15)",
        },
        softWhite: {
          DEFAULT: "#F2F5F7",
          muted: "#D1D9E0",
          dark: "#8F9CA8",
        },
        // Backwards compatibility for existing components
        charcoal: {
          DEFAULT: "#0B1014",
          light: "#111820",
          border: "#18232C",
        },
        ivory: {
          DEFAULT: "#F2F5F7",
          muted: "#D1D9E0",
          dark: "#8F9CA8",
        },
        mutedGrey: {
          DEFAULT: "#8F9CA8",
          light: "#B0BCC7",
          dark: "#4B5663",
        },
        lime: {
          DEFAULT: "#35E6D3",
          hover: "#25D2BF",
          dim: "rgba(53, 230, 211, 0.12)",
          glow: "rgba(53, 230, 211, 0.25)",
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
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
