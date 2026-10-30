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
        // --- CORE BRAND PALETTE: SKY BLUE × WHITE × HOT PINK ---
        skyBlue: {
          DEFAULT: "#55C7F2",
          light: "#B9EBFF",
          pale: "#E1F6FF",
          deep: "#087EAD",
          hover: "#3EB8E8",
          glow: "rgba(85, 199, 242, 0.35)",
          dim: "rgba(85, 199, 242, 0.12)",
        },
        hotPink: {
          DEFAULT: "#FF3D9A",
          soft: "#FFB5D8",
          pale: "#FFE8F3",
          deep: "#D91B77",
          hover: "#F52C8C",
          glow: "rgba(255, 61, 154, 0.35)",
          dim: "rgba(255, 61, 154, 0.12)",
        },
        oceanBlue: {
          DEFAULT: "#087EAD",
          deep: "#055474",
          light: "#129BCE",
          border: "rgba(8, 126, 173, 0.2)",
        },
        pureWhite: "#FFFFFF",
        paleBg: {
          DEFAULT: "#F5FBFF",
          alt: "#EBF6FC",
          card: "rgba(255, 255, 255, 0.78)",
          glass: "rgba(255, 255, 255, 0.85)",
        },
        darkText: {
          DEFAULT: "#172B3A",
          muted: "#4A667A",
          light: "#7B96A8",
          subtle: "#9BB3C4",
        },

        // --- BACKWARD-COMPATIBLE SEMANTIC MAPPINGS ---
        // Maps existing dark tokens to new luminous, atmospheric theme
        obsidian: {
          DEFAULT: "#F5FBFF",
          deep: "#EBF6FC",
          elevated: "#FFFFFF",
        },
        deepSpace: {
          DEFAULT: "#FFFFFF",
          light: "#F5FBFF",
          border: "rgba(85, 199, 242, 0.25)",
        },
        midnight: {
          DEFAULT: "#EBF6FC",
          light: "#F5FBFF",
          deep: "#E0F2FA",
        },
        auroraTeal: {
          DEFAULT: "#55C7F2",
          hover: "#3EB8E8",
          glow: "rgba(85, 199, 242, 0.35)",
          dim: "rgba(85, 199, 242, 0.12)",
        },
        emeraldGlow: {
          DEFAULT: "#FF3D9A",
          hover: "#F52C8C",
          dim: "rgba(255, 61, 154, 0.15)",
        },
        icyBlue: {
          DEFAULT: "#B9EBFF",
          light: "#E1F6FF",
          dim: "rgba(185, 235, 255, 0.25)",
        },
        softWhite: {
          DEFAULT: "#172B3A",
          muted: "#4A667A",
          dark: "#7B96A8",
        },
        charcoal: {
          DEFAULT: "#FFFFFF",
          light: "#F5FBFF",
          border: "rgba(85, 199, 242, 0.22)",
        },
        ivory: {
          DEFAULT: "#172B3A",
          muted: "#4A667A",
          dark: "#7B96A8",
        },
        mutedGrey: {
          DEFAULT: "#5A788D",
          light: "#7E99AC",
          dark: "#3B5567",
        },
        lime: {
          DEFAULT: "#FF3D9A",
          hover: "#F52C8C",
          dim: "rgba(255, 61, 154, 0.12)",
          glow: "rgba(255, 61, 154, 0.35)",
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
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(8, 126, 173, 0.08), 0 0 25px -5px rgba(85, 199, 242, 0.15)',
        'glass-hover': '0 25px 50px -12px rgba(255, 61, 154, 0.15), 0 0 35px -5px rgba(85, 199, 242, 0.25)',
        'glow-sky': '0 0 25px rgba(85, 199, 242, 0.35)',
        'glow-pink': '0 0 25px rgba(255, 61, 154, 0.35)',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "ambient-pulse": "ambientPulse 8s ease-in-out infinite alternate",
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
        ambientPulse: {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "0.95", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
