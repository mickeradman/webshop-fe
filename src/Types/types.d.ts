export type Theme = {
  color: {
    bgPrimary: string;
    bgSecondary: string;
    borderPrimary: string;
    buttonBg: string;
    disabledComponent: string;
    cartCountChip: string;
    headerFooterBg: string;
    iconHoverPrimary: string;
    modalBg: string;
    navbarBg: string;
    navLinkActive: string;
    navLinkHover: string;
    negativeRed: string;
    negativeRedHover: string;
    positiveGreen: string;
    positiveGreenHover: string;
    productCardBg: string;
    productCardBgOnHover: string;
    delimiterPrimary: string;
    textPrimary: string;
    textSecondary: string;
  };
};

export type Sizes = {
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export type Product = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  stockStatus: string;
  imgPath: string;
  category: string;
};

export enum ValidPaths {
  Nyheter = '/nyheter',
  Produkt = '/produkter',
  Om = '/om-oss',
}
