/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        primary: { dark: `#141936`, light: `#ada6a9` },
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
      p: {
        '&::before': {
          content: 'none !important',
        },
        '&::after': {
          content: 'none !important',
        },
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              listStyleType: {
                none: 'none',
                square: 'square',
                roman: 'upper-roman',
              },
              a: {
                color: theme(`colors.gray.200`),
                textDecoration: null,
                "&:hover": {
                  textDecoration: `underline`,
                },
              },
              "code::before": null,
              "code::after": null,
              "blockquote p:first-of-type::before": null,
              "blockquote p:last-of-type::after": null,
            },
          },
        }
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
