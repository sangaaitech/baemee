/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const extraColors = {
  night: {
    200: '#2c2c2c',
    300: '#232323',
    400: '#1e1e1e',
    500: '#151515',
    600: '#0a0a0a',
    700: '#0f0f0f',
    800: '#080808',
    900: '#000000',
  },
  turquoise: {
    50: '#ebfef7',
    100: '#cffcea',
    200: '#a3f7da',
    300: '#67eec7',
    400: '#2cdcb0',
    500: '#07c299',
    600: '#009e7e',
    700: '#007e68',
    800: '#016453',
    900: '#025246',
  },
  lemon: {
    50: '#ffff32',
    100: '#ffff28',
    200: '#fbff1e',
    300: '#f1ff14',
    400: '#e7ff0a',
    500: '#ddff00',
    600: '#d3f500',
    700: '#c9eb00',
    800: '#bfe100',
    900: '#b5d700',
  },
  deep: {
    50: '#415b76',
    100: '#37516c',
    200: '#2d4762',
    300: '#233d58',
    400: '#19334e',
    500: '#0f2944',
    600: '#051f3a',
    700: '#001530',
    800: '#000b26',
    900: '#00011c',
  },
  sleep: {
    50: '#7a8ba0',
    100: '#708196',
    200: '#66778c',
    300: '#5c6d82',
    400: '#526378',
    500: '#48596e',
    600: '#3e4f64',
    700: '#34455a',
    800: '#2a3b50',
    900: '#203146',
  },
  alive: {
    50: '#786cfb',
    100: '#6e62f1',
    200: '#6458e7',
    300: '#5a4edd',
    400: '#5044d3',
    500: '#463ac9',
    600: '#3c30bf',
    700: '#3226b5',
    800: '#281cab',
    900: '#1e12a1',
  },
  vibrant: {
    50: '#9049ff',
    100: '#863fff',
    200: '#7c35ff',
    300: '#722bff',
    400: '#6821fe',
    500: '#5e17f4',
    600: '#540dea',
    700: '#4a03e0',
    800: '#4000d6',
    900: '#3600cc',
  },
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Added new colors
      colors: extraColors,
      animation: {
        blob: 'blob 7s infinite',
        colorCycle: 'colorCycle 10s ease infinite',
      },
      keyframes: {
        colorCycle: {
          '0%, 55%, 100%': {filter: 'none', '-webkit-filter': 'none'},
          '11%, 33%': {
            filter: 'brightness(0) invert(1)',
            '-webkit-filter': 'brightness(0) invert(1)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    // Plugin to enable tailwind forms
    require('@tailwindcss/forms'),

    // Plugin for tailwind aspect ratio
    require('@tailwindcss/aspect-ratio'),

    // Plugin to support backdrop blur in Firefox
    plugin(function ({addVariant, e, postcss}) {
      addVariant('firefox', ({container, separator}) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules(rule => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
