/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1B1A18',
          50: '#F5F4F3',
          100: '#E6E4E1',
          400: '#4A4744',
          600: '#302E2B',
          700: '#232220',
          800: '#1B1A18',
          900: '#111110',
        },
        ivory: {
          DEFAULT: '#F7F3EA',
          soft: '#FBF9F4',
        },
        gold: {
          DEFAULT: '#AD8A52',
          light: '#C9AD79',
          dark: '#8A6D3D',
        },
        sand: {
          DEFAULT: '#E7DFCF',
          dark: '#CBBFA3',
        },
        stone: {
          DEFAULT: '#8B8478',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1400px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
