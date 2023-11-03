import { NameSpace } from '../../const';
import { State } from '../../types/types';


export const getSortType = (state: Pick <State, NameSpace.App>): string =>
  state[NameSpace.App].sortType;

export const getSortDirection = (state: Pick <State, NameSpace.App>): string =>
  state[NameSpace.App].sortDirection;
