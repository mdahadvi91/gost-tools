import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 💕 AHADEX Love Palette
        love: {
          rose:     "#FF6B9D",
          deep:     "#D946A6",
          blush:    "#FFB3C6",
          lavender: "#C8A2FF",
          gold:     "#FFD9A0",
          pearl:    "#FFF5F7",
          cream:    "#FFF9FB",
          black:    "#1A0F1A",
          mint:     "#A8E6CF",
          wine:     "#8B2C4E",
        },

        // Neutrals — Light Mode
        light: {
          bg:            "#FFF9FB",
          surface:       "#FFFFFF",
          elevated:      "#FFF5F7",
          text:          "#1A0F1A",
          textSecondary: "#8B6B7A",
          border:        "#F0DCE3",
        },

        // Neutrals — Dark Mode
        dark: {
          bg:            "#1A0F1A",
          surface:       "#241423",
          elevated:      "#2E1B2C",
          text:          "#FFF5F7",
          textSecondary: "#C8A2B5",
          border:        "#3D2438",
        },

        success: "#A8E6CF",
        warning: "#FFD9A0",
        error:   "#FF6B9D",
        info:    "#C8A2FF",
      },

      fontFamily: {
        display:     ['"Playfair Display"', '"Clash Display"', "serif"],
        script:      ['"Dancing Script"', '"Caveat"', "cursive"],
        sans:        ['"Inter"', "system-ui", "sans-serif"],
        mono:        ['"JetBrains Mono"', "monospace"],
        bangla:      ['"Hind Siliguri"', '"Baloo Da 2"', "sans-serif"],
      },

      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4rem)",     { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h1:   ["clamp(2rem, 4.5vw, 3rem)",     { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        h2:   ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.15" }],
        h3:   ["clamp(1.25rem, 2vw, 1.5rem)",   { lineHeight: "1.25" }],
        h4:   ["1.125rem",                    { lineHeight: "1.35" }],
        body: ["1rem",                        { lineHeight: "1.65" }],
        small:["0.875rem",                    { lineHeight: "1.5" }],
        tiny: ["0.75rem",                     { lineHeight: "1.4" }],
      },

      spacing: {
        "18":  "4.5rem",
        "88":  "22rem",
        "128": "32rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      boxShadow: {
        "glow-rose":     "0 0 40px rgba(255, 107, 157, 0.45)",
        "glow-deep":     "0 0 40px rgba(217, 70, 166, 0.40)",
        "glow-blush":    "0 0 40px rgba(255, 179, 198, 0.40)",
        "glow-lavender": "0 0 40px rgba(200, 162, 255, 0.40)",
        "glow-gold":     "0 0 40px rgba(255, 217, 160, 0.35)",
        "glow-mint":     "0 0 40px rgba(168, 230, 207, 0.40)",
        "glow-wine":     "0 0 40px rgba(139, 44, 78, 0.50)",
        "glass-light":   "0 8px 32px rgba(255, 107, 157, 0.10)",
        "glass-dark":    "0 8px 32px rgba(0, 0, 0, 0.45)",
        premium:         "0 20px 60px -10px rgba(217, 70, 166, 0.35)",
        soft:            "0 4px 20px rgba(255, 107, 157, 0.15)",
      },

      backgroundImage: {
        "love-gradient":
          "linear-gradient(135deg, #FF6B9D 0%, #D946A6 35%, #C8A2FF 70%, #FFD9A0 100%)",
        "love-soft":
          "linear-gradient(135deg, #FFB3C6 0%, #FF6B9D 100%)",
        "aurora-love":
          "linear-gradient(135deg, #FF6B9D 0%, #C8A2FF 50%, #FFD9A0 100%)",
        "aurora-subtle":
          "radial-gradient(ellipse at top left, rgba(255,107,157,0.15), transparent 50%), radial-gradient(ellipse at bottom right, rgba(200,162,255,0.15), transparent 50%)",
        "glass":
          "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
        "heart-gradient":
          "radial-gradient(circle at center, #FF6B9D 0%, #D946A6 100%)",
        "rose-radial":
          "radial-gradient(circle at top, #FFB3C6 0%, #FF6B9D 40%, #D946A6 100%)",
        "pearl":
          "linear-gradient(135deg, #FFF9FB 0%, #FFF5F7 50%, #FFF9FB 100%)",
      },

      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "15%":      { transform: "scale(1.15)" },
          "30%":      { transform: "scale(1)" },
          "45%":      { transform: "scale(1.08)" },
          "60%":      { transform: "scale(1)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.05)", opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        petalFall: {
          "0%":   { transform: "translateY(-10%) rotate(0deg)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
        butterflyDrift: {
          "0%":   { transform: "translate(-10%, -10%) rotate(-10deg)", opacity: "0" },
          "10%":  { opacity: "1" },
          "50%":  { transform: "translate(60%, 30%) rotate(5deg)", opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translate(120%, 90%) rotate(-5deg)", opacity: "0" },
        },
        roseBloom: {
          "0%":   { transform: "scale(0.8) rotate(-10deg)", opacity: "0" },
          "50%":  { transform: "scale(1.1) rotate(3deg)",  opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)",    opacity: "1" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%":      { opacity: "1",   transform: "scale(1.2)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        auroraShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        ripple: {
          "0%":   { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        slideDown: {
          "0%":   { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",     opacity: "1" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)",   opacity: "1" },
        },
        heartOpen: {
          "0%":   { transform: "scale(0) rotate(0deg)",   opacity: "0" },
          "50%":  { transform: "scale(1.2) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)",   opacity: "1" },
        },
        wave: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 107, 157, 0.30)" },
          "50%":      { boxShadow: "0 0 40px rgba(255, 107, 157, 0.60)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        logoPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(255, 107, 157, 0.5))" },
          "50%":      { filter: "drop-shadow(0 0 20px rgba(217, 70, 166, 0.8))" },
        },
        heartBeat: {
          "0%, 100%": { transform: "scale(1)" },
          "10%":      { transform: "scale(1.1)" },
          "20%":      { transform: "scale(1)" },
          "30%":      { transform: "scale(1.05)" },
          "40%":      { transform: "scale(1)" },
        },
        rosePulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 107, 157, 0.4)" },
          "50%":      { boxShadow: "0 0 30px rgba(217, 70, 166, 0.7)" },
        },
      },

      animation: {
        heartbeat:        "heartbeat 1.2s ease-in-out infinite",
        "heart-beat":     "heartBeat 2s ease-in-out infinite",
        breathe:          "breathe 4s ease-in-out infinite",
        float:            "float 4s ease-in-out infinite",
        "petal-fall":     "petalFall 8s linear infinite",
        "butterfly-drift":"butterflyDrift 12s ease-in-out infinite",
        "rose-bloom":     "roseBloom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        sparkle:          "sparkle 2s ease-in-out infinite",
        shimmer:          "shimmer 2s linear infinite",
        aurora:           "auroraShift 12s ease-in-out infinite",
        ripple:           "ripple 0.6s ease-out",
        "slide-up":       "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down":     "slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in":        "fadeIn 0.5s ease-out",
        "scale-in":       "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "heart-open":     "heartOpen 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        wave:             "wave 2s ease-in-out infinite",
        glow:             "glow 2s ease-in-out infinite",
        "gradient-move":  "gradientMove 8s ease-in-out infinite",
        "logo-pulse":     "logoPulse 3s ease-in-out infinite",
        "rose-pulse":     "rosePulse 3s ease-in-out infinite",
      },

      transitionTimingFunction: {
        smooth:       "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-soft":"cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;