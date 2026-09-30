import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ⭐ AHADEX Brand — From logo gradient
        aha: {
          cyan: "#4DD9FF",
          blue: "#5B9BFF",
          violet: "#8B5CF6",
          magenta: "#C084FC",
          deep: "#0A0B1E",
          coral: "#FF5F8F",
          gold: "#FFB84D",
          mint: "#3DFFC0",
        },
        light: {
          bg: "#FAFAF7",
          surface: "#FFFFFF",
          elevated: "#F4F4F0",
          text: "#0A0B1E",
          textSecondary: "#5A5C7A",
          border: "#E5E5EC",
        },
        dark: {
          bg: "#0A0B1E",
          surface: "#141530",
          elevated: "#1E1F3D",
          text: "#F8F6F1",
          textSecondary: "#A0A2C0",
          border: "#2A2B4A",
        },
        success: "#3DFFC0",
        warning: "#FFB84D",
        error: "#FF5F8F",
        info: "#4DD9FF",
      },

      fontFamily: {
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        bangla: ['"Hind Siliguri"', '"Baloo Da 2"', "sans-serif"],
        handwritten: ['"Caveat"', "cursive"],
      },

      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h1: ["clamp(2rem, 4.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.15" }],
        h3: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25" }],
        h4: ["1.125rem", { lineHeight: "1.35" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.4" }],
      },

      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        "glow-cyan": "0 0 40px rgba(77, 217, 255, 0.35)",
        "glow-blue": "0 0 40px rgba(91, 155, 255, 0.35)",
        "glow-violet": "0 0 40px rgba(139, 92, 246, 0.35)",
        "glow-magenta": "0 0 40px rgba(192, 132, 252, 0.35)",
        "glow-coral": "0 0 40px rgba(255, 95, 143, 0.35)",
        "glow-gold": "0 0 40px rgba(255, 184, 77, 0.35)",
        "glow-mint": "0 0 40px rgba(61, 255, 192, 0.35)",
        "glass-light": "0 8px 32px rgba(0, 0, 0, 0.06)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.5)",
        premium: "0 20px 60px -10px rgba(139, 92, 246, 0.3)",
      },

      backgroundImage: {
        "logo-gradient":
          "linear-gradient(135deg, #4DD9FF 0%, #5B9BFF 35%, #8B5CF6 70%, #C084FC 100%)",
        aurora: "linear-gradient(135deg, #4DD9FF 0%, #8B5CF6 50%, #C084FC 100%)",
        "aurora-subtle":
          "radial-gradient(ellipse at top left, rgba(77,217,255,0.15), transparent 50%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.15), transparent 50%)",
        glass: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
        "heart-gradient": "radial-gradient(circle at center, #FF5F8F 0%, #8B5CF6 100%)",
      },

      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.15)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.08)" },
          "60%": { transform: "scale(1)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        auroraShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        heartOpen: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1.2) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(77, 217, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(77, 217, 255, 0.6)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        logoPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(77, 217, 255, 0.4))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.7))" },
        },
      },

      animation: {
        heartbeat: "heartbeat 1.2s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        aurora: "auroraShift 12s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "heart-open": "heartOpen 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        wave: "wave 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "gradient-move": "gradientMove 8s ease-in-out infinite",
        "logo-pulse": "logoPulse 3s ease-in-out infinite",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;