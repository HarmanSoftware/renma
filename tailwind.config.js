/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#270440',
        'mauve': '#d5b8ff',
        'lightmauve': '#e2cfff',
        'blue-chill': '#0b7fab',
        'lightpurple': '#A78BFA',
        'vivid': '#f15a22',        
      },
    },
  },
  plugins: [],
}
