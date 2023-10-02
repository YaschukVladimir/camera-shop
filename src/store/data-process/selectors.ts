
import { NameSpace } from '../../const';
import { Product, PromoProduct, State } from '../../types/types';


export const getProducts = (state: Pick <State, NameSpace.Data>): Product[] =>
  state[NameSpace.Data].products;

export const getPromoProducts = (state: Pick <State, NameSpace.Data>): PromoProduct[] =>
  state[NameSpace.Data].promoProducts;
