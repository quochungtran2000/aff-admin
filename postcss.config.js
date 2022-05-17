module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          0: '#000000',
          10: '#001423',
          20: '#001D34',
          30: '#002745',
          40: '#003056',
          50: '#00538F',
          60: '#0077CC',
          70: '#0A99FF',
          80: '#33AAFF',
          90: '#5CBBFF',
          95: '#ADDDFF',
          99: '#ADDDFF',
          100: '#FFFFFF',
          DEFAULT: '#003056', // 40
          container: '#5CBBFF', // 90
        },
        'secondary': {
          10: '#3C2D16',
          20: '#77592C',
          30: '#956F37',
          40: '#BD904C',
          50: '#C9A46D',
          60: '#D3B588',
          70: '#D8BE97',
          80: '#DDC7A6',
          90: '#E9DAC4',
          95: '#EBE4D6',
          99: '#F8F6F1',
          100: '#FFFFFF',
          DEFAULT: '#BD904C', // 40
          container: '#E9DAC4', // 90
        },
        'error': {
          10: '#410E0B',
          20: '#601410',
          30: '#8C1D18',
          40: '#B3261E',
          50: '#DC362E',
          60: '#E46962',
          70: '#EC928E',
          80: '#F2B8B5',
          90: '#F9DEDC',
          95: '#FCEEEE',
          99: '#FFFBF9',
          100: '#FFFFFF',
          DEFAULT: '#B3261E', // 40
          container: '#F9DEDC', // 90
        },
        'on-error': '#FFFFFF', // 100
        'on-error-container': '#410E0B', // 10

        'neutral': {
          10: '#1B1D1F',
          20: '#303133',
          30: '#464849',
          40: '#5D6062',
          50: '#757779',
          60: '#909294',
          70: '#AAACAE',
          80: '#C5C8CA',
          90: '#E1E3E6',
          95: '#EFF3F8',
          99: '#FBFDFF',
          100: '#FFFFFF',
        },
        'background': '#E1E3E6', // neutral-90
        'on-background': '#1B1D1F', // neutral-10
        'surface': '#FBFDFF', // neutral-99
        'on-surface': '#1B1E1F', // neutral-10

        'neutral-variant': {
          0: '#000000',
          10: '#21221A',
          20: '#37372F',
          30: '#4F4E45',
          40: '#66665D',
          50: '#7E7E74',
          60: '#99998F',
          70: '#B4B3A9',
          80: '#D0CFC4',
          90: '#ECECE0',
          95: '#FAFAEE',
          99: '#FFFEFB',
          100: '#FFFFFF',
        },
        'surface-variant': '#ECECE0', // neutral-variant-90
        'on-surface-variant': '#4F4E45', // neutral-variant-10
        'outline': '#7E7E74', // neutral-variant-50
      },
      dropShadow: {
        sidebar: {
          DEFAULT: '0px 2px 8px rgba(0, 0, 0, 0.15)',
          button: 'inset 0px 1px 0px #F0F0F0',
        },
        button: '0px 4px 15px rgba(7, 42, 66, 0.2)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      opacity: {
        45: '0.45',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
