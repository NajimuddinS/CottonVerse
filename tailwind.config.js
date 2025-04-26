/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e11d48', // Red color similar to the reference screenshot
          light: '#f43f5e',
          dark: '#be123c',
        },
        secondary: {
          DEFAULT: '#0f172a', // Dark blue/black
          light: '#1e293b',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#f97316', // Orange
          light: '#fb923c',
          dark: '#ea580c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}