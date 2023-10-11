import { store } from '../store';

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
  activeProduct: ActiveProduct;
  similarProducts: Product[];
  reviews: ReviewType[];
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
} | null;

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
