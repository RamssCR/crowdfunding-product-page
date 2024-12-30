/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '108': '25rem'
      },
      width: {
        '84': '22rem'
      },
      height: {
        '112': '28em'
      },
      fontFamily: {
        body: ['"Commissioner"', 'sans-serif']
      }
    },
  },
  safelist: [
    'bg-gray-300',
    'hover:bg-gray-300',
    'hover:cursor-auto',
    'bg-teal-500',
    'hover:bg-teal-400',
    'hover:cursor-pointer'
  ],
  plugins: [],
}

