/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f9ebe5',
          200: '#f3d5c7',
          300: '#e8b49e',
          400: '#db8e72',
          500: '#c86f4d',
          600: '#a8533c',
          700: '#8c4133',
          800: '#743730',
          900: '#61302a'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: []
};

