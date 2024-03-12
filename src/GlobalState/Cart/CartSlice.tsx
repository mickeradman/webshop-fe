import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartProps = {
  id: number;
  text: string;
};

const initialState = {
  cartItems: [] as CartProps[],
};

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.cartItems.push({ id: Date.now(), text: action.payload });
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
