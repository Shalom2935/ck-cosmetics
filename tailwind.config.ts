import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Bodoni Moda', 'serif'],
        latienne: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;