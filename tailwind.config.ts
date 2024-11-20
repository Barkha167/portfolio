import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f8f9f3',
          100: '#e8ebd7',
          200: '#d4d9b9',
          300: '#b8c090',
          400: '#9ca76c',
          500: '#839154',
          600: '#697543',
          700: '#525a37',
          800: '#404631',
          900: '#363c2d',
        },
        sage: {
          50: '#f4f6f1',
          100: '#e3e8dc',
          200: '#cad4c2',
          300: '#aab8a0',
          400: '#89997d',
          500: '#6f7d63',
          600: '#59654e',
          700: '#474f40',
          800: '#3a4035',
          900: '#32362f',
        },
      },
      backgroundImage: {
        'olive-texture': "url('data:image/svg+xml,...')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;