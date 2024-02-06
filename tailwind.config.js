/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        "vermilion": {
          50: "#FFECE5",
          100: "#FFD9CC",
          200: "#FFB399",
          300: "#FF8C66",
          400: "#FF6633",
          500: "#FF4000",
          600: "#CC3300",
          700: "#992600",
          800: "#661A00",
          900: "#330D00",
          950: "#190600"
        }
      }
    },
    plugins: []
  }
}
