import dayjs from 'dayjs';
import { Product, ReviewType } from '../types/types';
import { Action } from '@reduxjs/toolkit';
import { SortDirection, SortType } from '../const';
import StarIcon from '../components/star-icon/star-icon';

export default function getSortedReviewsByDate(allReviews: ReviewType[]): ReviewType[] {

  const res = allReviews.slice(0, allReviews.length);
  res.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
  return res;
}

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const sortProducts = (allProducts: Product[], type: string, direction: string): Product[] => {
  const res = [...allProducts];
  if (type === SortType.byPrice) {
    if (direction === SortDirection.descending) {
      res.sort((a, b) => b.price - a.price);
      return res;
    }
    if (direction === SortDirection.ascending) {
      res.sort((a, b) => a.price - b.price);
      return res;
    }
    if (!direction) {
      return res;
    }
    return res;
  } else if (type === SortType.byPopular) {
    if (direction === SortDirection.descending) {
      res.sort((a, b) => b.rating - a.rating);
      return res;
    }
    if (direction === SortDirection.ascending) {
      res.sort((a, b) => a.rating - b.rating);
      return res;
    }
    if (!direction) {
      return res;
    }
  } else {
    if (!type && direction === SortDirection.ascending) {
      res.sort((a, b) => a.price - b.price);
      return res;
    }
    if (!type && direction === SortDirection.descending) {
      res.sort((a, b) => b.price - a.price);
      return res;
    }
  }
  return res;
};

export const filterProductsByPrice = (allProducts: Product[], minPrice: number, maxPrice: number) => {
  let filteredProducts = [];
  if (minPrice && !maxPrice) {
    filteredProducts = allProducts.filter((product) => product.price >= minPrice);
    return filteredProducts;
  } else if (!minPrice && maxPrice) {
    filteredProducts = allProducts.filter((product) => product.price <= maxPrice);
    return filteredProducts;
  } else if (minPrice && maxPrice) {
    filteredProducts = allProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    return filteredProducts;
  } else {
    filteredProducts = [...allProducts];
  }
  return filteredProducts;
};

export const filterProductsByCategory = (allProducts: Product[], category: string) => {
  if(category.length) {
    const filteredProducts = allProducts.filter((product) => product.category === category);
    return filteredProducts;
  } else {
    return allProducts;
  }
};

export const filterProductsByTypes = (allProducts: Product[], types: string[]) => {
  const filteredProducts: Product[][] = [];
  if(types.length) {
    types.map((type) => {
      filteredProducts.push(allProducts.filter((product) => product.type === type));
    });
    return (filteredProducts.flat());
  } else {
    return allProducts;
  }
};

export const filterProductsByLevels = (allProducts: Product[], levels: string[]) => {
  const filteredProducts: Product[][] = [];
  if(levels.length) {
    levels.map((level) => {
      filteredProducts.push(allProducts.filter((product) => product.level === level));
    });
    return (filteredProducts.flat());
  } else {
    return allProducts;
  }
};

export function showRateStars (quantity: number[], productRating: number) {
  const starsToShow = quantity.map((star) => {
    if (star <= productRating) {
      return (
        <StarIcon href="#icon-full-star" key={star} />
      );
    }
    if (star > productRating) {
      return (
        <StarIcon href="#icon-star" key={star}/>
      );
    }
  });
  return starsToShow;
}
