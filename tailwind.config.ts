import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        royal: "0 0 60px rgba(212,175,55,0.15)",
      },
      backgroundImage: {
        "radial-royal":
          "radial-gradient(circle at top, rgba(212,175,55,0.16), transparent 35%), radial-gradient(circle at 70% 30%, rgba(124,92,255,0.12), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
