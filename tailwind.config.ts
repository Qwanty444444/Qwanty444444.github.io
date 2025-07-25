import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "light-beam": "lightBeam 15s ease-in-out infinite",
        glow: "glow 5s ease-in-out infinite",
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0.4",
          },
          "25%": {
            transform: "translateY(-20px) translateX(12px) rotate(90deg)",
            opacity: "0.9",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-8px) rotate(180deg)",
            opacity: "0.7",
          },
          "75%": {
            transform: "translateY(-25px) translateX(15px) rotate(270deg)",
            opacity: "1",
          },
        },
        lightBeam: {
          "0%": {
            opacity: "0.5",
            transform: "rotate(-10deg) scale(1.5)",
          },
          "33%": {
            opacity: "0.9",
            transform: "rotate(0deg) scale(1.8)",
          },
          "66%": {
            opacity: "0.7",
            transform: "rotate(10deg) scale(1.6)",
          },
          "100%": {
            opacity: "0.8",
            transform: "rotate(20deg) scale(2)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 40px rgba(255, 223, 87, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 80px rgba(255, 223, 87, 0.9)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
