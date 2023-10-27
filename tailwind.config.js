/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.js",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#264653",
        persianGreen: "#2a9d8f",
        saffron: "#e9c46a",
        sandyBrown: "#f4a261",
        burntSienna: "#e76f51"
      },
      fontFamily: {
        libreCaslonDisplay: ['Libre Caslon Display', 'ui-serif'],
        libreCaslonText: ['Libre Caslon Text', 'ui-serif'],
        oswald: ['Oswald', 'ui-sans'],
      },
      backgroundImage: {
        globeBg: "url('../images/globe-2.jpg')",
        // globeBg: "url('./public/images/globe-2.jpg')",
        mapBg: "url('../images/map_image.jpg')"
        // mapBg: "url('./public/images/map_image.jpg')"
      }
    },
  },
  plugins: [],
}