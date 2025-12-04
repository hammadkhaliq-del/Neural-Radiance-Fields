/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding a slightly more clinical/professional font stack if desired
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
         // A subtle medical blue accent
        'med-blue': {
            50: '#f0f7ff',
            100: '#e0effe',
            500: '#3b82f6',
            600: '#2563eb',
            900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}