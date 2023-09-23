/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
      },
      colors: {
        light: {
          100: 'rgba(255, 255, 255, 1)',
          900: 'rgba(141, 144, 148, 1)',
        },
        dark: {
          100: 'rgba(76, 76, 76, 1)',
          300: 'rgba(51, 51, 51, 1)',
        },
        primary: {
          300: 'rgba(76, 141, 255, 1)',
          500: 'rgba(57, 125, 246, 1)',
        },
      },
    },
  },
  plugins: [],
}
