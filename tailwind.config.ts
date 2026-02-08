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
        'brand': '#100EA0',
        'brand-dark': '#05044a',
        'brand-light': '#EBEBFF',
        'paper': '#FFFFFF',
        'ink': '#050505',
        'ink-light': '#444444',
        'off-white': '#F4F4F5',
      },
      fontFamily: {
        serif: ['Gambetta', 'serif'],
        sans: ['Cabinet Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'scrollDown': 'scrollDown 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23100ea0' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config

