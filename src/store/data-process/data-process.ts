import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/types';
import { fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction, fetchReviews, fetchSimilarProducts } from '../api-actions';

const initialState: DataProcess = {
  products: [],
  promoProducts: [],
  isModalActive: false,
  activeProduct: null,
  similarProducts: [],
  reviews: []
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setModalActive: (state, action: PayloadAction<boolean>) => {
      state.isModalActive = action.payload;
    },
    clearActiveProduct: (state) => {
      state.activeProduct = null;
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
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export const { setModalActive, clearActiveProduct } = dataProcess.actions;
