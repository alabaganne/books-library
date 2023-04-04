/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/about1.jpg')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      smm: '900px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
