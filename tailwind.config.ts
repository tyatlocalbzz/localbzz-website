import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFC000',
          dark: '#111111',
          paper: '#F4F1EA',
          grey: '#E8E5DE',
        },
      },
      boxShadow: {
        hard: '6px 6px 0px 0px #111111',
        'hard-sm': '4px 4px 0px 0px #111111',
        'hard-white': '6px 6px 0px 0px #FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#333 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config
