module.exports = {
  // Configure Tailwind to remove unused styles in production
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}