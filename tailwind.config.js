/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'color-black': '#000000',
        'dark-gray': 'hsl(0, 0%, 12%)',
        'color-blue': '#004aad',
        'color-green': '#34a206',
        'color-purple': '#533fca',
        'color-hotpink': '#cf0b63',
        'color-orange ': '#f17b00',
        'color-red': '#ff0000',
        'color-pink': '#ff66c4',
        'color-white': '#ffffff',

        'grad-purple': '#8c52ff',
        'grad-green': '#00bf63',
      },
    },
    screens: {
      mobile: '375px',
      desktop: '1140px',
    },
    fontFamily: {
      'work-sans': '"Work Sans", sans-serif',
    }
  },
  plugins: [],
};
