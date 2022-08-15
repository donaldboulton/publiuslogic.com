/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    screens: {
      sm: '640px',
      'demo-sm': '720px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        spinSlow: 'spin 3s linear infinite',
      },
      keyframes: {
        comeInOut: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        spinSlow: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        transparent: 'transparent',
        pre: '#fcfcfc',
        code: '#fcfcfc',
        offwhite: '#fcfcfc',
      },
      fontFamily: {
        sans: 'DM Sans',
        serif: 'Lora',
      },
      p: {
        '&::before': {
          content: 'none !important',
        },
        '&::after': {
          content: 'none !important',
        },
      },
      typography: theme => {
        return {
          DEFAULT: {
            css: {
              listStyleType: {
                none: 'none',
                square: 'square',
                roman: 'upper-roman',
              },
              'code::before': null,
              'code::after': null,
              'blockquote p:first-of-type::before': null,
              'blockquote p:last-of-type::after': null,
            },
          },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
