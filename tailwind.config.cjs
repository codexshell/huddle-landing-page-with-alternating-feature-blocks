/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-pink": "hsl(322, 100%, 66%)",
        "brand-cyan-1": "hsl(193, 100%, 96%)",
        "brand-cyan-2": "hsl(192, 100%, 9%)",
        "brand-blue": "hsl(208, 11%, 55%)",
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        headings: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
