/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    fontSize: {
      sm: ['14px', '24px'],
      base: ['16px', '24px'],
      lg: ['20px', '36px'],
      xl: ['24px', '32px'],
    },
    extend: {
      fontFamily: {
        primary: ['Inter'],
      },
      colors: {
        light: {
          100: '#FFFFFF',
          300: '#F7FBFF',
          500: '#EDF3FA',
          700: '#D5DAE0',
          900: '#8D9094',
        },
        dark: {
          100: '#4C4C4C',
          300: '#333333',
          500: '#171717',
          700: '#0D0D0D',
          900: '#000000',
        },
        primary: {
          100: '#73A5FF',
          300: '#4C8DFF',
          500: '#397DF6',
          700: '#2F68CC',
          900: '#234E99',
        },
      },
    },
  },
  plugins: [],
}
