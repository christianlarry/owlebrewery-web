import type { Config } from "tailwindcss"

const config:Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:"Poppins",
        secondary:"DM Serif Text"
      }
    }
  },
  plugins: [],
}

export default config

