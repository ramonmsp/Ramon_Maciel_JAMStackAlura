import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
      contrast: '#000000',
    },
  },
  primary: {
    main: {
      color: '#E9C46A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFF8E6',
      contrastText: '#E3451',
    },
  },
  tertiary: {
    main: {
      color: '#000000',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  breakpoints,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Fira Sans Condensed\', \'Fira Sans\',  sans-serif',
  typographyVariants,
};
