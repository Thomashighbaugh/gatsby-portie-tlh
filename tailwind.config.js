module.exports = {
  mode: 'jit',
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: false,
    purgeLayersByDefault: false,
    defaultLineHeights: false,
  },

  purge: [],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      fontSize: {
        '4xs': '.125rem',
        '3xs': '.25rem',
        '2xs': '.5rem',
        xs: '.75rem',

        sm: '.875rem',

        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',

        '3xl': '1.875rem',

        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',

        '7xl': '5rem',
      },
      height: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        64: '16rem',
        '50p': '50%',
        '33p': '33.333333%',
        '66p': '66.666667%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '20p': '20%',
        '40p': '40%',
        '60p': '60%',
        '80p': '80%',
        '16p': '16.666667%',
        '83p': '83.333333%',
        '8p': '8.333333%',
        '16p': '16.666667%',
        '41p': '41.666667%',
        '58p': '58.333333%',
        '83p': '83.333333%',
        '91p': '91.666667%',

        full: '100%',
        screen: '100vh',
      },
      width: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        64: '16rem',
        full: '100%',
        screen: '100vh',
        half: '50%',
        '50p': '50%',
        '33p': '33.333333%',
        '66p': '66.666667%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '20p': '20%',
        '40p': '40%',
        '60p': '60%',
        '80p': '80%',
        '16p': '16.666667%',
        '83p': '83.333333%',
        '8p': '8.333333%',
        '16p': '16.666667%',
        '41p': '41.666667%',
        '58p': '58.333333%',
        '83p': '83.333333%',
        '91p': '91.666667%',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-30': '-30deg',
        '-22': '-22.5deg',
        '-15': '-15deg',
        '-10': '-10deg',
        '-9': '-9deg',
        '-8': '-8deg',
        '-7': '-7deg',
        '-6': '-6deg',
        '-5': '-5deg',
        '-4': '-4deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        4: '4deg',
        5: '5deg',
        6: '6deg',
        7: '7deg',
        8: '8deg',
        9: '9deg',
        10: '10deg',
        15: '15deg',
        22: '22.5deg',
        30: '30deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        110: '28rem',
        118: '30rem',
        126: '32rem',
        132: '34rem',
        140: '36rem',
        half: '65%',
      },
      padding: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        110: '28rem',
        118: '30rem',
        126: '32rem',
        132: '34rem',
        140: '36rem',
        half: '65%',
        '50p': '50%',
        '33p': '33.333333%',
        '66p': '66.666667%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '20p': '20%',
        '40p': '40%',
        '60p': '60%',
        '80p': '80%',
        '16p': '16.666667%',
        '83p': '83.333333%',
        '8p': '8.333333%',
        '16p': '16.666667%',
        '41p': '41.666667%',
        '58p': '58.333333%',
        '83p': '83.333333%',
        '91p': '91.666667%',
      },

      margin: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        110: '28rem',
        118: '30rem',
        126: '32rem',
        132: '34rem',
        140: '36rem',
        half: '65%',
        '50p': '50%',
        '33p': '33.333333%',
        '66p': '66.666667%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '20p': '20%',
        '40p': '40%',
        '60p': '60%',
        '80p': '80%',
        '16p': '16.666667%',
        '83p': '83.333333%',
        '8p': '8.333333%',
        '16p': '16.666667%',
        '41p': '41.666667%',
        '58p': '58.333333%',
        '83p': '83.333333%',
        '91p': '91.666667%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },

      colors: {
        secondary: {
          lighter: '#8ae7ff',
          default: '#00caff',
          darker: '#00a6d1',
        },
        blue: {
          DEFAULT: '#00CAFF',
          50: '#8AE7FF',
          100: '#7AE3FF',
          200: '#5CDDFF',
          300: '#3DD7FF',
          400: '#1FD0FF',
          500: '#00CAFF',
          600: '#00BEF0',
          700: '#00B2E0',
          800: '#00A6D1',
          900: '#009AC2',
        },
        gray: {
          DEFAULT: '#8b9cbe',
          100: '#e8ebf2',
          200: '#d1d7e5',
          300: '#b9c4d8',
          400: '#a2b0cb',
          500: '#8b9cbe',
          600: '#6f7d98',
          700: '#535e72',
          800: '#383e4c',
          900: '#1c1f26',
        },
        links: '#8b9cbe',
        orange: {
          100: '#ffe6e6',
          200: '#ffcdcd',
          300: '#ffb5b5',
          400: '#ff9c9c',
          500: '#ff8383',
          600: '#cc6969',
          700: '#994f4f',
          800: '#663434',
          900: '#331a1a',
        },
        green: {
          100: '#ccfff5',
          200: '#99ffeb',
          300: '#66ffe0',
          400: '#33ffd6',
          500: '#00ffcc',
          600: '#00cca3',
          700: '#00997a',
          800: '#006652',
          900: '#003329',
        },
        purple: {
          100: '#e6e0ff',
          200: '#cdc1ff',
          300: '#b4a3ff',
          400: '#9b84ff',
          500: '#8265ff',
          600: '#6851cc',
          700: '#4e3d99',
          800: '#342866',
          900: '#1a1433',
        },
        yellow: {
          100: '#fefee3',
          200: '#fdfcc6',
          300: '#fbfbaa',
          400: '#faf98d',
          500: '#f9f871',
          600: '#c7c65a',
          700: '#959544',
          800: '#64632d',
          900: '#323217',
        },
        code: {
          green: '#00ffcc',
          yellow: '#f9f871',
          purple: '#8265ff',
          red: '#ff3d81',
          blue: '#00caff',
        },
      },
    },
    // Typography overwrites, mainly for blog content
    typography: (theme) => ({
      default: {
        css: {
          '> :first-child': false,
          h1: {
            color: theme('colors.black'),
            fontWeight: '700',
            marginTop: '-120px',
            paddingTop: '140px',
          },
          h2: {
            color: theme('colors.black'),
            fontWeight: '700',
            marginTop: '-120px',
            paddingTop: '135px',
          },
          h3: {
            color: theme('colors.black'),
            fontWeight: '600',
            marginTop: '-120px',
            paddingTop: '130px',
          },
          h4: {
            color: theme('colors.black'),
            fontWeight: '600',
            marginTop: '-120px',
            paddingTop: '120px',
          },
          strong: {
            color: theme('colors.gray.800'),
            fontWeight: '700',
          },
          a: {
            color: theme('colors.indigo.700'),
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },

          // Remove additional quotes
          code: {
            fontWeight: '600',
          },
          'code::before': {
            content: false,
          },
          'code::after': {
            content: false,
          },
          'pre code::before': {
            content: false,
          },
          'pre code::after': {
            content: false,
          },
          pre: {
            marginTop: '2em',
          },
          '.remark-code-title + pre': {
            marginTop: 0,
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      textColor: ['dark'],
      backgroundColor: ['dark'],
      gradientColorStops: ['dark'],
      backgroundImage: ['dark'],
      opacity: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
};
