/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utilities/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      tourney: ["Tourney", "Roboto", "sans-serif"],
      roboto: ["Roboto", "Montserrat", "sans-serif"],
      montserrat: ["var(--font-montserrat)"],
      sans: ["var(--font-montserrat)"],
      heading: ["var(--font-doppio)"],
      lovelo: ["Lovelo", "sans-serif"],
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      minWidth: {
        28: "6rem",
      },
      maxWidth: {
        48: "12rem",
      },
      blur: {
        xs: "2px",
      },
      spacing: {
        28: "6rem",
        128: "32rem",
        160: "40rem",
      },
      colors: {
        "theme-purp": "#c578d6",
        "theme-teal": "#a2d3c2",
        "theme-grey": "#eae2b7",
        "theme-orange": "#ff8400", //
        "theme-red": "#d62828",

        // "theme-grey": "#474747",
        "theme-orange-dark": "#edae49", //
        // "theme-red": "#356790",
        "theme-red-dark": "#003054", //
        // "theme-white": "#ffffff",
        // "theme-teal": "#f16087",
        // "theme-yellow": "#fade99", //
        // b0413e red
        primary: {
          brown: "#473335",
        },
      },
      screens: {
        "3xl": "1720px",
      },
      backgroundImage: {
        "rockets-layer": "url('/assets/background/website_rockets_layer.png')",
        "red-line": "url('/assets/background/redline.jpg')",
        robobrawl: "url('/assets/background/card/rb24.jpg')",
        msdc: "url('/assets/background/card/msdc24.jpg')",
        tesla: "url('/assets/background/card/tc24.jpg')",
        hsdc: "url('/assets/background/card/hsdc24.jpg')",
        keynote: "url('/assets/background/card/keynote24.jpg')",
        startup: "url('/assets/background/card/startup24.jpg')",
        "waves-pink2": "url('/assets/background/waves-pink2.svg')",
        "waves-yell1": "url('/assets/background/waves-yell1.svg')",
        "waves-blue1": "url('/assets/background/waves-blue1.svg')",
        "waves-blue2": "url('/assets/background/waves-blue2.svg')",
        "waves-bottom": "url('/assets/background/waves-bottom.svg')",
        "waves-bottom2": "url('/assets/background/waves-bottom2.svg')",
        "waves-green1": "url('/assets/background/waves-green1.svg')",
        "waves-green2": "url('/assets/background/website moon.png')",
        "blobs-blue1": "url('/assets/background/blobs-blue1.svg')",
        "waves-t-pink1": "url('/assets/background/waves-top-pink1.svg')",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(2) translate(0, -6em)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "image-zoom": "zoom 100s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
