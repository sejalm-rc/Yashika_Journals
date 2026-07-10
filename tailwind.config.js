/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1d3a",
          50: "#eef1f7",
          100: "#d6ddec",
          200: "#aebbd9",
          300: "#8598c1",
          400: "#5c74a3",
          500: "#3d5484",
          600: "#28395f",
          700: "#1a2748",
          800: "#101b36",
          900: "#0b1d3a",
          950: "#070f22",
        },
        teal: {
          DEFAULT: "#0fb5ba",
          50: "#e6fbfb",
          100: "#c1f4f5",
          200: "#8ee9eb",
          300: "#57d9dc",
          400: "#25c4c9",
          500: "#0fb5ba",
          600: "#0b8f95",
          700: "#0c7176",
          800: "#0f5a5e",
          900: "#0f4a4d",
        },
        amber: {
          DEFAULT: "#f5a623",
          50: "#fff8ec",
          100: "#ffedc9",
          200: "#ffd98d",
          300: "#ffbf50",
          400: "#f5a623",
          500: "#e88c0d",
          600: "#cc6c08",
          700: "#a94f0b",
          800: "#8a3f10",
          900: "#713511",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(11, 29, 58, 0.08)",
        "card-hover": "0 12px 30px rgba(11, 29, 58, 0.16)",
        glow: "0 0 0 3px rgba(15, 181, 186, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
