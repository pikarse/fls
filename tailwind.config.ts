import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1',
        'primary-dark': '#553C9A',
        secondary: '#9F7AEA',
        accent: '#B794F4',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        text: '#FFFFFF',
        'text-secondary': '#A0AEC0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config 