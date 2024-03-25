import { createSlice } from '@reduxjs/toolkit';

export type CartProps = {
  id: string;
  productName: string;
  qty: number;
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
    increaseProductQty: (state, action) => {
      const { id, productName, description, price, stockStatus, imgPath } =
        action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
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
          qty: 1,
          imgPath,
        };

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    },
    decreaseProductQty: (state, action) => {
      const { id } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: Math.max(0, item.qty - 1) };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems.filter((item) => item.qty > 0),
      };
    },
  },
});

export const { increaseProductQty, decreaseProductQty } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
