/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#faf8ff',
          100: '#f2ecff',
          200: '#e6d9ff',
          300: '#d1b8ff',
          400: '#b48aff',
          500: '#9254ff',
          600: '#7a33f5',
          700: '#6527cc',
          800: '#5223a3',
          900: '#431f82'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)',
        card: '0 4px 16px -2px rgba(0,0,0,0.06)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [],
}
