import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, Product, State } from '../types/types';
import { ApiRoutes } from '../const';


export const fetchProductsAction = createAsyncThunk<Product[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('products/fetchProducts',
  async(_arg, { extra: api}) => {
    const {data} = await api.get<Product[]>(ApiRoutes.GetProducts);
    return data;
  }
);
