
import { NameSpace } from '../../const';
import { ActiveProduct, Product, PromoProduct, State } from '../../types/types';


export const getProducts = (state: Pick <State, NameSpace.Data>): Product[] =>
  state[NameSpace.Data].products;

export const getPromoProducts = (state: Pick <State, NameSpace.Data>): PromoProduct[] =>
  state[NameSpace.Data].promoProducts;

export const getActiveModalId = (state: Pick <State, NameSpace.Data>): number | null =>
  state[NameSpace.Data].modalActiveId;

export const GetActiveProduct = (state: Pick <State, NameSpace.Data>): ActiveProduct =>
  state[NameSpace.Data].activeProduct;
