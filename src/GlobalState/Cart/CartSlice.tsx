import { createSlice } from '@reduxjs/toolkit';

export type CartProps = {
  id: string;
  productName: string;
  amount: number;
  description: string;
  price: number;
  stockStatus: string;
  imgPath: string;
};

const initialState = {
  cartItems: [] as CartProps[],
};

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, productName, description, price, stockStatus, imgPath } =
        action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const newItem = {
          id,
          productName,
          description,
          price,
          stockStatus,
          amount: 1,
          imgPath,
        };

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, amount: Math.max(0, item.amount - 1) };
        }
        return item;
      });

      const filteredCartItems = updatedCartItems.filter(
        (item) => item.amount > 0
      );

      return {
        ...state,
        cartItems: filteredCartItems,
      };
    },
  },
});

export const { addProduct, removeProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
