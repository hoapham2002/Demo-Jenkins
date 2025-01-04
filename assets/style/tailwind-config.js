tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          background_opacity: 'rgba(0, 0, 0, 0.5)',
        },
        fontFamily: {
          protest_revolution: ['Protest Revolution', 'sans-serif'],
        },
        keyframes: {
          moveUpDown: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
          },
        },
        animation: {
            moveUpDown: 'moveUpDown 3s infinite ease-in-out',
        },
      }
    },
    variants: {
      extend: {
          backgroundColor: ['peer-checked'],
          borderColor: ['peer-checked'],
      },
    },
    plugins: [],
  }