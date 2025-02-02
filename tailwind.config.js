/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat as a custom font
        smooch: ['Smooch Sans', 'serif'], // Add Smooch as a custom font
        dm: ['DM Mono', 'monospace'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['roboto', 'sans-serif']
      },
      animation: {
        blink: 'blink 1.5s infinite',
      },
    },
  },
  plugins: [],

}

