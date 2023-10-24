
import { NameSpace } from '../../const';
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
