module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        'textPrimary':'#e8505b',
      },
      backgroundColor:{
        'bgPrimary':'#e8505b',
      },
      borderColor:{
        'borderPrimary':'#e8505b'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
