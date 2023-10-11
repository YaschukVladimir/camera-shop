import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ActiveProduct, AppDispatch, Product, PromoProduct, ReviewType, State } from '../types/types';
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

export const fetchPromoProductsAction = createAsyncThunk<PromoProduct[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('products/fetchPromoProducts',
  async(_arg, { extra: api}) => {
    const {data} = await api.get<PromoProduct[]>(ApiRoutes.GetPromo);
    return data;
  });

export const fetchActiveProduct = createAsyncThunk<ActiveProduct, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('products/fetchActiveProduct',
  async (id, {extra: api}) => {
    const {data} = await api.get<ActiveProduct>(`${ApiRoutes.GetActiveProduct}${id}`);
    return data;
  }
);

export const fetchSimilarProducts = createAsyncThunk<Product[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('products/fetchSimilarProducts',
  async (id, {extra: api}) => {
    const {data} = await api.get<Product[]>(`${ApiRoutes.GetProducts}/${id}/similar`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<ReviewType[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('products/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${ApiRoutes.GetProducts}/${id}/reviews`);
    return data;
  }
);


