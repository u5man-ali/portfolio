/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      disp: ['"Noto Nastaliq Urdu"', 'serif'],
      body: ['"Jameel Noori Nastaleeq"', 'serif'],
}
    },
  },
  plugins: [require('tailwindcss-rtl')],
}

