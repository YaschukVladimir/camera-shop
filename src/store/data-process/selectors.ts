
import { NameSpace } from '../../const';
import { Product, State } from '../../types/types';


export const getProducts = (state: Pick <State, NameSpace.Data>): Product[] =>
  state[NameSpace.Data].products;
