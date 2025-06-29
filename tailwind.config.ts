/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "#17C58B",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#B9F4E0",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#FF8142",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F4F8F7",
          foreground: "#9C9C9C",
        },
        accent: {
          DEFAULT: "#B9F4E0",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#F4F8F7",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#F4F8F7",
          foreground: "#000000",
        },
        // Custom travel dashboard colors
        black: "#000000",
        "primary-green": "#17C58B",
        "gray-light": "#B5B6B6",
        "mint-light": "#B9F4E0",
        orange: "#FF8142",
        "gray-medium": "#9C9C9C",
        "bg-main": "#F4F8F7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Noto Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
