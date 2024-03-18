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
