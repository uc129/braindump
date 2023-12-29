/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: { 'half-screen': '50vh' },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sfBlack': ['SF_Black'],
        'sfBold': ['SF_Bold'],
        'sfHeavy': ['SF_Heavy'],
        'sfLight': ['SF_Light'],
        'sfMedium': ['SF_Medium'],
        'sfRegular': ['SF_Regular'],
        'sfSemibold': ['SF_Semibold'],
        'sfThin': ['SF_Thin'],
        'sfUltralight': ['SF_Ultralight'],
      },
    },
  },
  plugins: [],
}
