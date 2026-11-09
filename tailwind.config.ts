import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#171918',
        ink: '#1E201F',
        ivory: '#F5F2EB',
        cream: '#EDE8DD',
        champagne: '#B69A70',
        champagnelight: '#D3BE9E',
        stone: '#AAA69E',
        smoke: '#6E6C66',
      },
      fontFamily: {
        serif: ['\"Cormorant Garamond\"', 'Georgia', 'serif'],
        sans: ['Jost', '\"Helvetica Neue\"', 'Arial', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.35em' },
      transitionDuration: { '1200': '1200ms' },
    },
  },
  plugins: [],
};
export default config;