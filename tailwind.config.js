module.exports = {
  // Configure Tailwind to remove unused styles in production
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ['chinese-black']: {
          900: '#0F1014',
          800: '#121418',
        },
        jet: {
          DEFAULT: '#333438'
        },
        ['ash-gray']: {
          DEFAULT: '#AEB9BC'
        },
        ['anti-flash-white']: {
          DEFAULT: '#EFF3F6'
        },
        ['smoky-black']: {
          DEFAULT: '#0C0B0E'
        },
        ['eerie-black']: {
          DEFAULT: '#17181C'
        },
        gainsboro: {
          DEFAULT: '#DDDDDD'
        },
        ['quick-silver']: {
          DEFAULT: '#9EA6AA'
        },
        ['medium-orchid']: {
          DEFAULT: '#BB57FC'
        },
        ['dark-gunmetal']: {
          DEFAULT: '#1F2228'
        },
        onyx: {
          DEFAULT: '#35383E'
        },
        gunmetal: {
          DEFAULT: '#2D3036'
        },
        ['metallic-silver']: {
          DEFAULT: '#A7B0B4'
        },
        ['teal-deer']: {
          DEFAULT: '#94FFB4'
        },
        ['dim-gray']: {
          DEFAULT: '#6E6A64'
        },
        arsenic: {
          DEFAULT: '#424242'
        }
      },
      letterSpacing: {
        ['custom-xl']: '3.5px'
      },
      fontFamily: {
        quicksand: ['"Quicksand"', '"sans-serif"'],
        ['roboto-condensed']: 'roboto condensed'
      },
      width: {
        '18': '4.5rem'
      },
      height: {
        '18': '4.5rem'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(340px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(340px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(340px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(340px, 1fr))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
      margin: ['first', 'last']
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  corePlugins: {
   fontFamily: true,
  }
}

/*
    sidebar background color: #121418 - woodsmoke - Chinese Black 800 - chinese black-lighter X
    sidebar border color: #333438 - tuna - jet X
    unactivated sidebar link: #AEB9BC - tower gray - Ash Gray X
    activated sidebar link: #EFF3F6 - aqua haze - Anti-Flash White X
    activated sidebar link background: #0C0B0E - woodsmoke - Smoky Black X
    panel background color: #17181C - woodsmoke - Eerie Black X
    panel border color: #333438 - tuna - Jet X
    panel description text: #DDDDDD - alto - Gainsboro X
    panel meta text: #9EA6AA - Gray Chateau - Quick Silver
    panel title text: #EFF3F6 - Porcelain- Anti-Flash White X
    panel featured  meta text: #BB57FC - Heliotrope - Medium Orchid X
    body background: #1F2228 - shark - Dark Gunmetal X
    table-1n-row: #35383E - tuna - Onyx X
    table-2n-row: #2D3036 - shark - Gunmetal X
    table border color: #0F1014 - woodsmoke - Chinese Black 900 - chinese black-darker X
    table head text color: #A7B0B4 - hit gray - Metallic Silver X
    table cell text color: #A7B0B4 - hit gray - Metallic Silver X
    table cell success text color: #94FFB4 - mint green - Teal Deer X
    table title: color: #A7B0B4 - hit gray - Metallic Silver X
*/