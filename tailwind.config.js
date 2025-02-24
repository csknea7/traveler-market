module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-400': '#F2A945',
        'primary-500': '#F78410',
        'primary-600': '#E07516',
      },
      // Slider thumb özelleştirmesi
      slider: {
        thumb: {
          backgroundColor: '#F78410', // primary-500 rengi
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.slider-thumb::-webkit-slider-thumb': {
          '-webkit-appearance': 'none',
          appearance: 'none',
          width: '1rem',
          height: '1rem',
          background: '#F78410', // primary-500 rengi
          borderRadius: '9999px',
          cursor: 'pointer',
        },
      });
    },
  ],
};