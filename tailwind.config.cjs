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
          DEFAULT: 'var(--blue)',
          dim: 'var(--blue-dim)',
          glow: 'var(--blue-glow)',
          border: 'var(--blue-border)',
        },
        green: 'var(--green)',
        gold: 'var(--gold)',
        red: 'var(--red)',
      },
      borderRadius: {
        card: '12px',
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
