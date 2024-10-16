/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderColor: {
        primary: '#5A1561',
      },
      backgroundColor: {
        primary: '#250A27',
      },
    },
  },
  plugins: [],
}
