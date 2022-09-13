/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC, #43E7AD, #E1D55D)',
      },
    },
  },
  plugins: [],
}
