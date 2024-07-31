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
        shellSilver: '#e3e4e5' ,
        shellGray: '#d7d7d7',
        shellBlack: '#1c1c1c',
        shellgrayDark: '#242526'       
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

