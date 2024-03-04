import { Theme, Sizes } from '../Types/styles';

const lightMode: Theme = {
  color: {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#761515',
    buttonBg: '#CBB3BA',
    headerFooterBg: '#FFFFFF',
    navLinkActive: '#000000',
    navLinkHover: '#9E9E9E',
    standardDelimiter: '#5D5D5D',
    textPrimary: '#000000 ',
    textSecondary: '#FFFFFF',
  },
};

const darkMode: Theme = {
  color: {
    bgPrimary: '#181818',
    bgSecondary: '#FFE6E6',
    buttonBg: '#000000',
    headerFooterBg: '#181818',
    navLinkActive: '#FFFFFF',
    navLinkHover: '#9E9E9E',
    standardDelimiter: '#5D5D5D',
    textPrimary: '#FFFFFF',
    textSecondary: '#000000',
  },
};

const defaultTheme: Sizes = {
  size: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
  },
};

const theme = {
  light: {
    ...lightMode,
    ...defaultTheme,
  },
  dark: {
    ...darkMode,
    ...defaultTheme,
  },
};

export default theme;
