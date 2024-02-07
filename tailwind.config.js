/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
