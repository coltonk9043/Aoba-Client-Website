import type { Config } from "tailwindcss";

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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing": "radial-gradient(circle at center, rgba(156, 39, 176, 0.1) 0%, rgba(26, 26, 26, 0.95) 100%), url(/pretty.png)"
      },
      colors: {
        'background': "#1A1A1A",
        'background-accent': "#2D2D2D",
        'background-purple' : "#9C27B019",
        'border-purple': "#9C27B04D",
        'aoba-purple' : "#BB86FC",
        'aoba-purple-dark' : "#9c27b0",
        'aoba-purple-0.4' : "#BB86FC40",
        'aoba-purple-dark-0.4' : "#9c27b040",
        'aoba-purple-0.2' : "#BB86FC20",
        'aoba-purple-dark-0.2' : "#9c27b020",
        'background-titlebar' : "#1A1A1AF0", 
        
      },
      spacing: {
        '50px' : "50px",
      },
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
