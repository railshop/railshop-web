/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        blue: {
          DEFAULT: '#38B6FF',
          dim: '#1A9FE8',
        },
        green: '#34D399',
        gold: '#FBBF24',
        red: '#F87171',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        tag: '4px',
      },
      keyframes: {
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeup: 'fadeup 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
