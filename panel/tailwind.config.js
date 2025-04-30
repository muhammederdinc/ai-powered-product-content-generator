/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class', // veya 'media'
  daisyui: {
    themes: ['light', 'dark', 'corporate', 'emerald', 'cupcake', 'winter'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: true,
  },
}
