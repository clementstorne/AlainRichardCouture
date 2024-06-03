import type { Config } from "tailwindcss";
// import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      transitionDelay: {
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1100": "1100ms",
        "1200": "1200ms",
        "1300": "1300ms",
        "1400": "1400ms",
        "1500": "1500ms",
        "1600": "1600ms",
        "1700": "1700ms",
        "1800": "1800ms",
        "1900": "1900ms",
        "2000": "2000ms",
        "2100": "2100ms",
        "2200": "2200ms",
        "2300": "2300ms",
        "2400": "2400ms",
        "2500": "2500ms",
        "2600": "2600ms",
        "2700": "2700ms",
        "2800": "2800ms",
        "2900": "2900ms",
        "3000": "3000ms",
        "3100": "3100ms",
        "3200": "3200ms",
        "3300": "3300ms",
        "3400": "3400ms",
        "3500": "3500ms",
        "3600": "3600ms",
        "3700": "3700ms",
        "3800": "3800ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-fwd": {
          from: {
            transform: "scale(0)",
            opacity: "0",
          },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "focus-in-expand": {
          from: {
            "letter-spacing": "-0.5em",
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        "focus-in-contract": {
          from: {
            "letter-spacing": "1em",
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        "tilt-in-left": {
          from: {
            transform: "rotateX(30deg) translateX(-300px) skewX(30deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateX(0deg) translateX(0) skewX(0deg)",
            opacity: "1",
          },
        },
        "tilt-in-right": {
          from: {
            transform: "rotateX(-30deg) translateX(300px) skewX(30deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateX(0deg) translateX(0) skewX(0deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-fwd":
          "fade-in-fwd 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "focus-in-expand":
          "focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "focus-in-contract":
          "focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "tilt-in-left":
          "tilt-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "tilt-in-right":
          "tilt-in-right 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      fontFamily: {
        serif: '"Noto Serif"',
        inter: ["var(--font-inter)"],
      },
      spacing: {
        "100": "400px",
        "118": "472px",
        "138": "552px",
      },
      maxWidth: {
        "240": "960px",
        "285": "1140px",
      },
      backgroundImage: {
        main: "linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url('/img/background.webp')",
        jura: "linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)),url('/img/background-jura.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
