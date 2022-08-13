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
        'electric-purple': '#a537fd',
        'lightpurple': '#A78BFA',
        'soft-purple': '#460b70',        
      },
    },
  },
  plugins: [],
}
