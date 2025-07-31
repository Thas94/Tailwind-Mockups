/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        "menu-hover": "#AEB4A1"
      },
      // fontFamily: {
      //   Montserrat: "Montserrat, sans-serif",
      //   frank: "Frank Ruhl Libre, 'serif"
      // },
      container: {
        center: true,
        padding: "2rem",
      },
    },
    // screens: {
    //   "c1": "767"
    // }
  },
  plugins: [],
  // darkMode: 'class'
}

