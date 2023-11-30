import { Stars } from './types/types';

export enum AppRoute {
  Root = '/',
  Catalogue = '/',
  Product = '/product/:id/',
  ProductAbout = '/product/:id/:title',
  Basket = '/basket',
  Guarantees = '/',
  Delivery = '/',
  AboutCompany = '/',
  NotFound = '*'
}

export const navigationList = {
  Catalogue: 'Каталог',
  Guarantees: 'Гарантии',
  Delivery: 'Доставка',
  AboutCompany: 'О компании'
};

export const TIMEOUT_SHOW_ERROR = 5000;

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
}

export enum ApiRoutes {
  GetProducts = '/cameras',
  GetPromo = '/promo',
  GetActiveProduct = '/cameras/',
  PostReview = '/reviews',
  PostCoupon = '/coupons',
  PostBasketProducts = '/orders'
}

export const PRODUCTS_PER_PAGE = 9;


export enum Direction {
  Next = 'Далее',
  Prev = 'Назад'
}

export const PAGES_TO_SHOW = 3;

export type PostedProducts = {
  camerasIds: number[];
  coupon: string | null;
}

export const STARS_TITLES: Stars = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

export const starsValues: number[] = [5, 4, 3, 2, 1];

export enum SortType {
  byPrice = 'Price',
  byPopular = 'Popular'
}

export enum PromocodeStatus {
  UNKNOWN = 'unknown',
  VALID = 'valid',
  INVALID = 'invalid'
}

export enum SortDirection {
  descending = 'desc',
  ascending = 'asc'
}

export const CAMERA_CATEGORIES = {
  photocamera: 'Фотоаппарат',
  videocamera: 'Видеокамера'
};

export const CAMERA_TYPE = {
  digital: 'Цифровая',
  film: 'Плёночная',
  snapshot: 'Моментальная',
  collection: 'Коллекционная'
};

export const CAMERA_LEVEL = {
  zero: 'Нулевой',
  nonProffesional: 'Любительский',
  proffesional: 'Профессиональный'
};

export const STARS_QUANTITY = [1, 2, 3, 4, 5];

export const PROMO_CODES = ['camera-333', 'camera-444', 'camera-555'];
