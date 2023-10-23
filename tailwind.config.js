module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: 'class',
  theme: {
    container: {
        center: true,
        padding: '16px',
      },
    extend: {
      spacing: {
          '13': '3.25rem',
      },
      fontFamily: {
          'inter' : ['Inter']
      },
      colors : {
        primary   : '#4E54C8',
        success   : '#78A680',
        warning   : '#EBA930',
        info      : '#E5A02F',
        danger    : '#CC7B2A',
        secondary : '#2F4A53',
        dark      : '#64748b',
      },
      animation: {
          'spin-slow' : 'spin 3s linear infinite',
          'bounce-slow' : 'bounce 4s ease-in-out infinite',
          'goyang':'key-goyang 2s ease-in-out infinite',
      },
      keyframes: {
          'key-goyang': {
              '0%, 100%' : {
                  transform: 'rotate(-3deg)'
              },
              '50%': {
                  transform: 'rotate(3deg)'
              }
          },
      },
      screens: {
        '2xl': '1320px',
      },
     
    },
  },
  plugins: [],
};