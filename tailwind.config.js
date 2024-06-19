/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      colors: {
        'miamiGreen': '#0f4953',
        'miamiWhite': '#F9FCFB',
        'miamiPink' : '#FFCFD2',
        'miamiOrange': '#F98E6E',
        'miamiTeal': '#CBF5EF',
      },
    },
  },
  plugins: [],
}

