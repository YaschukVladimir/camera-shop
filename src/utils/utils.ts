import dayjs from 'dayjs';
import { Product, ReviewType } from '../types/types';
import { Action } from '@reduxjs/toolkit';
import { SortDirection, SortType } from '../const';

export default function getSortedReviewsByDate(allReviews: ReviewType[]): ReviewType[] {

  const res = allReviews.slice(0, allReviews.length);
  res.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
  return res;
}

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const sortProducts = (allProducts: Product[], type: string, direction: string): Product[] => {
  const res = [...allProducts];

  const sortByType = (a: Product, b: Product) => {
    if (type === SortType.byPrice) {
      return (direction === SortDirection.descending ? b.price - a.price : a.price - b.price);
    } else if (type === SortType.byPopular) {
      return (direction === SortDirection.descending ? b.rating - a.rating : a.rating - b.rating);
    }
    return 0;
  };

  if (type && direction) {
    res.sort(sortByType);
  } else if (!type && direction === SortDirection.ascending) {
    res.sort(sortByType);
  } else if (!type && direction === SortDirection.descending) {
    res.sort((a, b) => -sortByType(a, b));
  }

  return res;
};

// export const sortProducts = (allProducts: Product[], type: string, direction: string): Product[] => {
//   const res = [...allProducts];
//   if (type === SortType.byPrice) {
//     if (direction === SortDirection.descending) {
//       res.sort((a, b) => b.price - a.price);
//       return res;
//     }
//     if (direction === SortDirection.ascending) {
//       res.sort((a, b) => a.price - b.price);
//       return res;
//     }
//     if (!direction) {
//       return res;
//     }
//     return res;
//   } else if (type === SortType.byPopular) {
//     if (direction === SortDirection.descending) {
//       res.sort((a, b) => b.rating - a.rating);
//       return res;
//     }
//     if (direction === SortDirection.ascending) {
//       res.sort((a, b) => a.rating - b.rating);
//       return res;
//     }
//     if (!direction) {
//       return res;
//     }
//   } else {
//     if (!type && direction === SortDirection.ascending) {
//       res.sort((a, b) => a.price - b.price);
//       return res;
//     }
//     if (!type && direction === SortDirection.descending) {
//       res.sort((a, b) => b.price - a.price);
//       return res;
//     }
//   }
//   return res;
// };


