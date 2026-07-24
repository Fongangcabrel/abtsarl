/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081736',
          900: '#0E2249',
          800: '#163569',
          700: '#1E4382',
          600: '#2C548F',
          400: '#6B87B5',
          100: '#E4EAF5',
        },
        gold: {
          600: '#A87B2E',
          500: '#C99A44',
          400: '#DCB56B',
          300: '#EAD1A0',
        },
        sand: {
          50: '#F5F6F8',
          100: '#EEF0F4',
        },
        ink: {
          900: '#101826',
          700: '#3C4657',
          500: '#6B7688',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0E2249 0%, #163569 55%, #1E4382 100%)',
      },
    },
  },
  plugins: [],
}
