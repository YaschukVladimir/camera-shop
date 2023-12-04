import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, PromocodeStatus } from '../../const';
import { ActiveProduct, DataProcess, Product } from '../../types/types';
import { fetchActiveModalProduct, fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction, fetchReviews, fetchSimilarProducts, postBasketProducts, postPromoCode, postReview } from '../api-actions';
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
  promoDiscount: 0,
  isDeleteFromBasketModalActive: false,
  productToDeleteFromBasket: {},
  isPromocodeValid: PromocodeStatus.UNKNOWN,
  isPostBasketProductsSuccess: false,
  isOrderModalActive: false,
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
    },
    setDeleteBasketModalActive: (state, action: PayloadAction<boolean>) => {
      state.isDeleteFromBasketModalActive = action.payload;
    },
    setProductToDeleteFromBasket: (state, action: PayloadAction<Product>) => {
      state.productToDeleteFromBasket = action.payload;
    },
    setIsPostBasketProductsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isPostBasketProductsSuccess = action.payload;
    },
    setIsOrderModalActive: (state, action: PayloadAction<boolean>) => {
      state.isOrderModalActive = action.payload;
    },
    setPromoDiscount: (state, action: PayloadAction<number>) => {
      state.promoDiscount = action.payload;
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
      })
      .addCase(postPromoCode.fulfilled, (state, action) => {
        state.promoDiscount = action.payload;
        state.isPromocodeValid = PromocodeStatus.VALID;
      })
      .addCase(postPromoCode.rejected, (state) => {
        state.isPromocodeValid = PromocodeStatus.INVALID;
        state.promoDiscount = 0;
      })
      .addCase(postBasketProducts.fulfilled, (state) => {
        state.localStorageProducts = [];
        state.isPostBasketProductsSuccess = true;
        state.isOrderModalActive = true;
        state.isPromocodeValid = PromocodeStatus.UNKNOWN;
      })
      .addCase(postBasketProducts.rejected, (state) => {
        state.isOrderModalActive = true;
        state.isPromocodeValid = PromocodeStatus.UNKNOWN;
        state.isPostBasketProductsSuccess = false;
      });
  }
});

export const {
  setModalActive,
  clearActiveProduct,
  setReviewModalActive,
  setReviewSuccessModalActive,
  setSuccesAddTobasketModalActive,
  setLocalStorageProducts,
  setDeleteBasketModalActive,
  setProductToDeleteFromBasket,
  setIsOrderModalActive,
  setPromoDiscount } = dataProcess.actions;
