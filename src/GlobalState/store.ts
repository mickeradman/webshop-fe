import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Cart/CartSlice';
import productReducer from './Product/ProductSlice';

export const store = configureStore({
  reducer: {
    shopItem: cartReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
