/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: '#2C2C2C'
  		},
  		fontFamily: {
  			sans: ["var(--font-dm-sans)"],
  			serif: ["var(--font-dm-serif)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontSize: {
  		xs: ["12px", "16px"],
  		sm: ["14px", "20px"],
  		base: ["16px", "24px"],
  		lg: ["20px", "28px"],
  		xl: ["24px", "32px"],
  		'2xl': ["32px", "40px"]
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
