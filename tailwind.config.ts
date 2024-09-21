import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "large": "20px",
        "medium": "16px",
        "regular": "14px",
        "small": "12px",
        "tiny": "10px",
      },
      fontFamily: {
        'prata': ['Prata', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
