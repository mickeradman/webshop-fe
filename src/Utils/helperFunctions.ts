import { ValidPaths } from '../Types/types';
import { CartProps } from '../GlobalState/Cart/CartSlice';

export const isValidPath = (path: string): boolean => {
  return Object.values(ValidPaths).includes(path as ValidPaths);
};

export const getAmount = (id: string, cartItems: CartProps[]) => {
  return cartItems.find((item) => item.id === id)?.amount || 0;
};
