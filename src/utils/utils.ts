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

export const filterProductsByType = (allProducts: Product[], type: string) => {
  if (type.length) {
    const filteredProducts = allProducts.filter((product) => product.type === type);
    return filteredProducts;
  } else {
    return allProducts;
  }
};

export const filterProductsByLevel = (allProducts: Product[], level: string) => {
  if (level.length) {
    const filteredProducts = allProducts.filter((product) => product.level === level);
    return filteredProducts;
  } else {
    return allProducts;
  }
};


