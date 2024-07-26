// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: '#fbce07',
        red: '#dd1d21',
        shellOrange: '#ff6600',        
     //   'black-400': 'rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'md': '10px',
      },
      backgroundOpacity: {
        '70': '0.7',
      },
    },
  },
  plugins: [],
}

