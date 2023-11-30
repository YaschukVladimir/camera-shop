import { PromocodeStatus } from '../const';
import { ActiveProduct, State } from '../types/types';

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


export const makeFakeStore = (initialState?: Partial<State>): State => ({
  APP: { error: null },
  DATA: {
    isModalActive: false,
    products: [],
    promoProducts: [],
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
  },
  ...initialState ?? {},
});
