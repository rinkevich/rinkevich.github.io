/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: "8px 8px 34px #d6d6d6, -8px -8px 34px #ffffff",
      },
      backgroundColor: {
        primary: "#ffffff ",
      },
      borderRadius: {
        primary: "25px",
      },
    },
  },
  plugins: [],
};
