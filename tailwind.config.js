/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#3C66E2',
      },
      backgroundImage: {
        slide1: `url('../public/images/slide1.png')`,
        slide2: `url('../public/images/slide2.png')`,
        slide3: `url('../public/images/slide3.png')`,
      },
    },
  },
  plugins: [],
};
