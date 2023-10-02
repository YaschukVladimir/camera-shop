import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/types';
import { fetchProductsAction, fetchPromoProductsAction } from '../api-actions';

const initialState: DataProcess = {
  products: [],
  promoProducts: []
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchPromoProductsAction.fulfilled, (state, action) => {
        state.promoProducts = action.payload;
      });
  }
});
