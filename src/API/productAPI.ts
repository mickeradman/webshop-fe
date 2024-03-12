import axios from 'axios';

import { API_URL } from '../Utils/constants';

export const fetchProductsFromBackend = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/getall`);
    return response.data;
  } catch (error) {
    throw new Error('Misslyckades att hämta produkter.');
  }
};
