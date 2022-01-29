/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        wiggle: 'wiggle 1s ease-in-out infinite', 
        spinSlow: 'spin 3s linear infinite',       
      },
      keyframes: {
        spinSlow: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      },
      colors: {
        primary: { dark: `#16181d`, light: `#ada6a9` },
        transparent: `transparent`,
        pre: `#fcfcfc`,
        code: `#fcfcfc`,
        offwhite: `#fcfcfc`,
        green: `#56d187`,
        orange: `#ff9938`,
      },
      fontFamily: {
        sans: `DM Sans`,
        serif: `Lora`,
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {
      textOpacity: ['dark']
    },
    backgroundColor: [`light`],
    textColor: [`light`],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      const lightSelector = `.light`;
      addVariant(`light`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${lightSelector} .${e(`light${separator}${className}`)}`;
        });
      });
    }),
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'), 
    require('@tailwindcss/aspect-ratio'),
  ],
}
