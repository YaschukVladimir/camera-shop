import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/types';
import { fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction } from '../api-actions';

const initialState: DataProcess = {
  products: [],
  promoProducts: [],
  modalActiveId: null,
  activeProduct: null,
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setModalActiveId: (state, action: PayloadAction<number | null>) => {
      state.modalActiveId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchPromoProductsAction.fulfilled, (state, action) => {
        state.promoProducts = action.payload;
      })
      .addCase(fetchActiveProduct.fulfilled, (state, action) => {
        state.activeProduct = action.payload;
      });
  }
});

export const { setModalActiveId } = dataProcess.actions;
