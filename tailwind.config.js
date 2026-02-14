/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#00D4AA",
          50: "#00D4AA15",
          100: "#00D4AA30",
          400: "#00D4AA40",
          500: "#00D4AA",
          600: "#00b894",
        },
        accent: {
          teal: "#00D4AA",
          amber: "#F59E0B",
          danger: "#EF4444",
        },
        bg: {
          primary: "#0A0D12",
          secondary: "#111620",
          tertiary: "#1A2035",
        },
        bull: {
          DEFAULT: "#00D4AA",
          light: "#00D4AA",
          dark: "#00b894",
        },
        bear: {
          DEFAULT: "#EF4444",
          light: "#EF4444",
          dark: "#dc2626",
        },
        surface: {
          50: "#1A2035",
          100: "#111620",
          200: "#1E293B",
          300: "#334155",
          400: "#94A3B8",
          500: "#94A3B8",
          600: "#64748b",
          700: "#334155",
          800: "#1E293B",
          900: "#111620",
          950: "#0A0D12",
        },
        border: {
          subtle: "#1E293B",
          active: "#00D4AA40",
        },
      },
      backgroundColor: {
        "app-primary": "var(--bg-primary)",
        "app-secondary": "var(--bg-secondary)",
        "app-tertiary": "var(--bg-tertiary)",
      },
      textColor: {
        "app-primary": "var(--text-primary)",
        "app-secondary": "var(--text-secondary)",
        "app-muted": "var(--text-muted)",
      },
      borderColor: {
        "app-subtle": "var(--border-subtle)",
        "app-active": "var(--border-active)",
      },
      boxShadow: {
        glow: "0 0 20px #00D4AA30",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
      },
      spacing: {
        4.5: "18px",
        18: "72px",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "slide-up": "slideUp 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientMesh: {
          "0%, 100%": { opacity: "1", transform: "scale(1) translate(0, 0)" },
          "50%": { opacity: "0.8", transform: "scale(1.1) translate(5%, 5%)" },
        },
      },
    },
  },
  plugins: [],
};
