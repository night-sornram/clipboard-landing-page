import type { Config } from "tailwindcss";

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(171, 66%, 44%)",
      "200" : "hsl(233, 100%, 69%)",
      "300" : "hsl(210, 10%, 33%)",
      "400" : "hsl(201, 11%, 66%)"
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "header-desktop"  : "url('/images/bg-header-desktop.png')",
          "header-mobile"  : "url('/images/bg-header-mobile.png')",
      },
      colors : colors
    },
  },
  plugins: [],
};
export default config;
