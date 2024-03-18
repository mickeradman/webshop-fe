import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartProps = {
  id: string;
  productName: string;
  amount: number;
};

const initialState = {
  cartItems: [] as CartProps[],
};

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, productName } = action.payload;
      const existingIndex = state.cartItems.findIndex((item) => item.id === id);

      if (existingIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          }

          return item;
        });

        console.log(
          'Lägger till en till av den här, för den finns redan i kundvagnen.'
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const newItem = {
          id,
          productName,
          amount: 1,
        };

        console.log(
          'Uppdaterad kundvagn:',
          JSON.parse(JSON.stringify([...state.cartItems, newItem]))
        );

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
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
