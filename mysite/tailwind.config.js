/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        tro: {
          red: {
            100: "#FF6B6B",
            200: "#FF4444",
            300: "#FF0000",
            400: "#DC143C",
            500: "#CC0000",
            600: "#8B0000",
            700: "#660000",
          },
          black: {
            100: "#1A1A1A",
            200: "#141414",
            300: "#0F0F0F",
            400: "#0A0A0A",
            500: "#050505",
            600: "#000000",
          },
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Courier New"', "monospace"],
        terminal: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        scanline: "scanline 6s linear infinite",
        flicker: "flicker 0.15s infinite",
        typing: "typing 2s steps(30, end), blink-caret 0.75s step-end infinite",
        "data-flow": "dataFlow 3s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(255, 0, 0, 0.3), 0 0 10px rgba(255, 0, 0, 0.15)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.25)",
          },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#FF0000" },
        },
        dataFlow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        borderGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        tro: "0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)",
        "tro-intense":
          "0 0 30px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.3)",
        "tro-subtle": "0 0 10px rgba(255, 0, 0, 0.2)",
        "tro-glow": "0 0 15px rgba(255, 0, 0, 0.5)",
      },
      backgroundImage: {
        "tro-grid":
          "linear-gradient(rgba(255, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.08) 1px, transparent 1px)",
        "tro-grid-bright":
          "linear-gradient(rgba(255, 0, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.15) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
