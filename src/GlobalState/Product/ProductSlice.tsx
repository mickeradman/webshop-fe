import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsFromBackend } from '../../API/productAPI';
import { Product } from '../../Types/types';
import { RootState } from '../store';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const persistedState = localStorage.getItem('reduxState');

const initialProductState: ProductState = persistedState
  ? JSON.parse(persistedState)
  : initialState;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return fetchProductsFromBackend();
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? 'Misslyckades att hämta produkter.';
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
