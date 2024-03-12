import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsFromBackend } from '../../API/productAPI';
import { Product } from '../../Types/types';

export const fetchProducts = createAsyncThunk<Product[], void>(
  'products/fetchProducts',
  async () => {
    const products = await fetchProductsFromBackend();
    return products;
  }
);
