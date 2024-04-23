import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dusk: "#362C28",
        chalk: "#FFFFF8",
        goldenrod: "#C4A35A",
        rain: "#26495C",
        cafe: "#A18276",
        darkcafe: "#6A544B",
        creme: "#FFF7E2",
        taupe: "#A59994",
      },
    },
  },
  plugins: [],
};
export default config;
