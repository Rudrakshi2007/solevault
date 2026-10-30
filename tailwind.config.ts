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
        // --- EXACT PALETTE FROM THE REFERENCE SCREENSHOT ---
        // Primary Blue & Cyan
        brightCyan: {
          DEFAULT: "#079FCB",
          hover: "#09B3E4",
          light: "#85DCED",
        },
        turquoise: {
          DEFAULT: "#12B5D0",
          glow: "rgba(18, 181, 208, 0.4)",
        },
        oceanBlue: {
          DEFAULT: "#087EAD",
          deep: "#07539B",
          dark: "#073B78",
        },
        royalBlue: {
          DEFAULT: "#07539B",
          dark: "#073B78",
        },
        navyBlue: {
          DEFAULT: "#073B78",
          deep: "#04254E",
        },

        // Pink, Coral & Warm Light
        coralPink: {
          DEFAULT: "#F28A9A",
          vibrant: "#EF648F",
          hot: "#E83E9C",
          peach: "#F6A6A0",
        },
        vibrantRose: "#EF648F",
        hotPink: {
          DEFAULT: "#E83E9C",
          hover: "#D62B89",
          glow: "rgba(232, 62, 156, 0.45)",
        },
        warmPeach: "#F6A6A0",

        // Light & Transparency
        pureWhite: "#FFFFFF",
        softWhite: "#F4FAFC",
        translucentCyan: "rgba(133, 220, 237, 0.30)",
        frostedWhite: "rgba(255, 255, 255, 0.20)",
        transparentBlue: "rgba(0, 116, 174, 0.35)",

        // Backward-compatible semantic tokens mapped to reference
        obsidian: {
          DEFAULT: "#073B78",
          deep: "#04254E",
          elevated: "#07539B",
        },
        deepSpace: {
          DEFAULT: "#07539B",
          light: "#087EAD",
          border: "rgba(133, 220, 237, 0.25)",
        },
        midnight: {
          DEFAULT: "#073B78",
          light: "#07539B",
          deep: "#04254E",
        },
        charcoal: {
          DEFAULT: "rgba(7, 83, 155, 0.35)",
          light: "rgba(7, 83, 155, 0.5)",
          border: "rgba(255, 255, 255, 0.22)",
        },
        ivory: {
          DEFAULT: "#FFFFFF",
          muted: "#F4FAFC",
          dark: "#B9EBFF",
        },
        softWhiteText: {
          DEFAULT: "#FFFFFF",
          muted: "rgba(244, 250, 252, 0.8)",
          dark: "#85DCED",
        },
        mutedGrey: {
          DEFAULT: "#A2DBED",
          light: "#D8F3FA",
          dark: "#5AA6C4",
        },
        lime: {
          DEFAULT: "#12B5D0",
          hover: "#079FCB",
        },
        auroraTeal: {
          DEFAULT: "#079FCB",
          hover: "#12B5D0",
        },
        emeraldGlow: {
          DEFAULT: "#E83E9C",
          hover: "#EF648F",
        },
        icyBlue: {
          DEFAULT: "#85DCED",
          light: "#B9EBFF",
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
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
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
      boxShadow: {
        'pelma-glass': '0 20px 50px -10px rgba(4, 37, 78, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)',
        'pelma-card': '0 25px 60px -15px rgba(0, 0, 0, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
        'pelma-glow-pink': '0 0 35px rgba(232, 62, 156, 0.5)',
        'pelma-glow-cyan': '0 0 35px rgba(7, 159, 203, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
