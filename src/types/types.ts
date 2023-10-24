import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { store } from '../store';
import { createApi } from '../services/api';

export type Product = {
id: number;
name: string;
vendorCode: string;
type: string;
category: string;
description: string;
level: string;
price: number;
rating: number;
reviewCount: number;
previewImg: string;
previewImg2x: string;
previewImgWebp: string;
previewImgWebp2x: string;
}

export type PromoProduct = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type DataProcess = {
  products: Product[];
  promoProducts: PromoProduct[];
  isModalActive: boolean;
  isBasketModalActive: boolean;
  isReviewModalActive: boolean;
  isReviewSuccessModalActive: boolean;
  activeProduct: ActiveProduct;
  similarProducts: Product[];
  reviews: ReviewType[];
  isActiveProductLoading: boolean;
  activeModalProduct: ActiveProduct;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ActiveProduct = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
};

export type ReviewType = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type FormData = {
  'cameraId': number | undefined;
  'userName': string;
  'advantage': string;
  'disadvantage': string;
  'review': string;
  'rating': number;
}

export interface Stars {
  [key: number]: string;
}

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;
