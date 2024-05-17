/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#25213a",
        text: "#f2f3eb",
        card: "#3c3d6b",
        "gradient-start": "#e2547c",
        "gradient-end": "#e571b8",
        button1: "#58e8e8",
        button2: "#db85a2",
        "button2-dark": "#b06a81",
        button3: "#de1ae2",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}