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
        maintext: '#FFFFFF',
        lighttext: '#AFAFAF',
        primary: '#8687E7',
        secondary: '#363636',
      },
    },
  },
  plugins: [],
}
export default config
