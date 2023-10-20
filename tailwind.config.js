/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      moradoBlack: {
        DEFAULT: '#7f00b2', // Sin opacidad (100% opaco)
        50: 'rgba(127, 0, 178, 0.5)', // 50% de opacidad
      },
      violeta: {
        DEFAULT: '#8e22bb', // Sin opacidad (100% opaco)
        50: 'rgba(142, 34, 187, 0.5)', // 50% de opacidad
        30: 'rgba(221, 218, 235, 0.3)', // 30% de opacidad
      },
      purple: {
        DEFAULT: '#ab49cc', // Sin opacidad (100% opaco)
        50: 'rgba(129, 182, 227, 0.5)', // 50% de opacidad
        20: 'rgba(129, 182, 227, 0.2)',
      },
      gris: {
        DEFAULT: '#676161', // Sin opacidad (100% opaco)
        50: 'rgba(103,97,97, 0.5)', // 50% de opacidad
      },
      grisL: {
        DEFAULT: '#636363', // Sin opacidad (100% opaco)
        50: 'rgba(99,99,99, 0.5)', // 50% de opacidad
      },
      black: {
        DEFAULT: '#000000', // Sin opacidad (100% opaco)
        50: 'rgba(0, 0, 0, 0.5)', // 50% de opacidad
        20: 'rgba(0, 0, 0, 0.2)',
      },
      white: {
        DEFAULT: '#FEFFEF', // Sin opacidad (100% opaco)
        50: 'rgba(255, 255, 255, 0.5)', // 50% de opacidad
        80: 'rgba(255, 255, 255, 0.8)'
      },
      whitebg: {
        DEFAULT: '#E5E5E5',
      }
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
      xxl: '1920px',
    },
    extend: {
      backgroundImage: {
        'bgImage': "url('/public/img/bg.jpg')",
      }
    }
  },
  variants: {},
  plugins: [],
};
