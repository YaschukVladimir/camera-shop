
import { LocalStorageProducts } from '../../components/buy-modal/buy-modal';
import { NameSpace, PromocodeStatus } from '../../const';
import { ActiveProduct, Product, PromoProduct, ReviewType, State } from '../../types/types';


export const getProducts = (state: Pick <State, NameSpace.Data>): Product[] =>
  state[NameSpace.Data].products;

export const getPromoProducts = (state: Pick <State, NameSpace.Data>): PromoProduct[] =>
  state[NameSpace.Data].promoProducts;

export const getIsModalActive = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isModalActive;

export const getActiveProduct = (state: Pick <State, NameSpace.Data>): ActiveProduct =>
  state[NameSpace.Data].activeProduct;

export const getActiveModalProduct = (state: Pick <State, NameSpace.Data>): ActiveProduct =>
  state[NameSpace.Data].activeModalProduct;

export const getSimilarProducts = (state: Pick <State, NameSpace.Data>): Product[] =>
  state[NameSpace.Data].similarProducts;

export const getReviews = (state: Pick<State, NameSpace.Data>): ReviewType[] =>
  state[NameSpace.Data].reviews;

export const getIsReviewModalActive = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isReviewModalActive;

export const getIsReviewSuccessModalActive = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isReviewSuccessModalActive;

export const getIsActiveProductLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isActiveProductLoading;

export const getIsProductsRequestError = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].hasProductsRequestError;

export const getIsProductsLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isProductsLoading;

export const getSuccesAddToBasketModalStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isSuccesAddToBusketModalActive;

export const getLocalStorageProducts = (state: Pick <State, NameSpace.Data>): LocalStorageProducts[] =>
  state[NameSpace.Data].localStorageProducts;

export const getPromoDiscount = (state: Pick <State, NameSpace.Data>): number =>
  state[NameSpace.Data].promoDiscount;

export const getDeleteFromBasketModalStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isDeleteFromBasketModalActive;

export const getProductToDelete = (state: Pick <State, NameSpace.Data>): Product | Record<string, never> =>
  state[NameSpace.Data].productToDeleteFromBasket;

export const getPromoCodeStatus = (state: Pick <State, NameSpace.Data>): PromocodeStatus =>
  state[NameSpace.Data].isPromocodeValid;

export const getPostProductsStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isPostBasketProductsSuccess;

export const getIsOrderModalActive = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isOrderModalActive;
