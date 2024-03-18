import { Theme, Sizes } from '../Types/styles';

const lightMode: Theme = {
  color: {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#FFF6F6',
    borderPrimary: '#1B172E',
    buttonBg: '#CBB3BA',
    cartCountChip: '#6DD76D',
    headerFooterBg: '#FFFFFF',
    iconHoverPrimary: '#D59100',
    navbarBg: '#FFFFFF',
    navLinkActive: '#000000',
    navLinkHover: '#9E9E9E',
    navLinkInactive: '#B6B6B6',
    productCardBg: '#F6F6F6',
    standardDelimiter: '#5D5D5D',
    textPrimary: '#000000 ',
    textSecondary: '#FFFFFF',
  },
};

const darkMode: Theme = {
  color: {
    bgPrimary: '#181818',
    bgSecondary: '#242424',
    borderPrimary: '#4B535A',
    buttonBg: '#000000',
    cartCountChip: '#008000',
    headerFooterBg: '#181818',
    iconHoverPrimary: '#EBD322',
    navbarBg: '#251F26',
    navLinkActive: '#FFFFFF',
    navLinkHover: '#9E9E9E',
    // navLinkHover: '#003983',
    navLinkInactive: '#B6B6B6',
    productCardBg: '#181818',
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
