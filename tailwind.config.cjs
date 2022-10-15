/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 40,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      violet: {
        700: '#6d28d9',
        500: '#8b5cf6',
        400: '#a78bfa',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
