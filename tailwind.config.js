/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#141414',
          600: '#1a1a1a',
        },
        crimson: {
          50:  '#fff1f3',
          100: '#ffe1e6',
          200: '#ffc2cc',
          300: '#ff92a5',
          400: '#ff5a76',
          500: '#e11d48',
          600: '#dc143c',
          700: '#b00d30',
          800: '#7a0c22',
          900: '#4d0715',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        ojuju: ['Ojuju', 'system-ui', 'sans-serif'],
        parkinsans: ['Parkinsans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'accent': '0 10px 40px -10px rgba(220,20,60,0.35)',
        'accent-lg': '0 20px 60px -15px rgba(220,20,60,0.45)',
      },
    },
  },
  plugins: [],
}
