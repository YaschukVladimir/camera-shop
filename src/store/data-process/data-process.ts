import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ActiveProduct, DataProcess } from '../../types/types';
import { fetchActiveModalProduct, fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction, fetchReviews, fetchSimilarProducts, postReview } from '../api-actions';
import { LocalStorageProducts } from '../../components/buy-modal/buy-modal';

const initialActiveProduct: ActiveProduct = {
  id: 0,
  name: '',
  vendorCode: '',
  type: '',
  category: '',
  description: '',
  level: '',
  price: 0,
  rating: 0,
  reviewCount: 0,
  previewImg: '',
  previewImg2x: '',
  previewImgWebp: '',
  previewImgWebp2x: '',
};

const initialState: DataProcess = {
  products: [],
  promoProducts: [],
  isModalActive: false,
  isBasketModalActive: false,
  isReviewModalActive: false,
  isReviewSuccessModalActive: false,
  activeProduct: initialActiveProduct,
  similarProducts: [],
  reviews: [],
  isActiveProductLoading: false,
  activeModalProduct: initialActiveProduct,
  hasProductsRequestError: false,
  isProductsLoading: false,
  isSuccesAddToBusketModalActive: false,
  localStorageProducts: [],
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setModalActive: (state, action: PayloadAction<boolean>) => {
      state.isModalActive = action.payload;
    },
    setReviewModalActive: (state, action: PayloadAction<boolean>) => {
      state.isReviewModalActive = action.payload;
    },
    setReviewSuccessModalActive: (state, action: PayloadAction<boolean>) => {
      state.isReviewSuccessModalActive = action.payload;
    },
    clearActiveProduct: (state) => {
      state.activeProduct = initialActiveProduct;
    },
    setSuccesAddTobasketModalActive: (state, action: PayloadAction<boolean>) => {
      state.isSuccesAddToBusketModalActive = action.payload;
    },
    setLocalStorageProducts: (state, action: PayloadAction<LocalStorageProducts[]>) => {
      state.localStorageProducts = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.hasProductsRequestError = false;
        state.isProductsLoading = false;
      })
      .addCase(fetchProductsAction.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.hasProductsRequestError = true;
        state.isProductsLoading = false;
      })
      .addCase(fetchPromoProductsAction.fulfilled, (state, action) => {
        state.promoProducts = action.payload;
      })
      .addCase(fetchActiveProduct.fulfilled, (state, action) => {
        state.activeProduct = action.payload;
        state.isActiveProductLoading = false;
      })
      .addCase(fetchActiveProduct.pending, (state) => {
        state.isActiveProductLoading = true;
      })
      .addCase(fetchActiveProduct.rejected, (state) => {
        state.isActiveProductLoading = false;
      })
      .addCase(fetchActiveModalProduct.fulfilled, (state, action) => {
        state.activeModalProduct = action.payload;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewModalActive = false;
        state.isReviewSuccessModalActive = true;
      });
  }
});

export const {
  setModalActive,
  clearActiveProduct,
  setReviewModalActive,
  setReviewSuccessModalActive,
  setSuccesAddTobasketModalActive,
  setLocalStorageProducts } = dataProcess.actions;
