/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 150s linear infinite',
      }
    },
  },
  plugins: [],
}
