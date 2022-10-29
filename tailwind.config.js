// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/n4Fb5QewROc.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
