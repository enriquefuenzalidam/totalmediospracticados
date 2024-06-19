const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                customBlue: '#1E5DB2',
                andereBlau: '#22BEEB'
            },
            fontFamily: {
                sans: ['Helvetica Neue', 'Arial', 'Inter', ...defaultTheme.fontFamily.sans]
            },
            screens: {
              'custom-screen-lg': '950px'
            },
            width: {
              '85px': '85px',
              '115px': '115px',
              '175px': '175px',
              '190px': '190px'
            },
            height: {
              '843px': '843px',
              '610px': '610px'
            },
            scrollMargin: {
              'header': '4rem', // Adjust this value based on the height of your fixed menu
            }
        }
    },
    variants: {
      extend: {
        scrollMargin: ['responsive'], // Ensure it works with responsive design
      },
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
