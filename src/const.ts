export enum AppRoute {
  Root = '/',
  Catalogue = '/',
  Product = '/product/:id',
  Basket = '/basket',
  Guarantees = '/',
  Delivery = '/',
  AboutCompany = '/'
}

export const navigationList = {
  Catalogue: 'Каталог',
  Guarantees: 'Гарантии',
  Delivery: 'Доставка',
  AboutCompany: 'О комрании'
};

export const TIMEOUT_SHOW_ERROR = 500;

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
}

export enum ApiRoutes {
  GetProducts = '/cameras',
  GetPromo = '/promo',
  GetActiveProduct = '/cameras/',
}

export const PRODUCTS_PER_PAGE = 9;


export enum Direction {
  Next = 'Далее',
  Prev = 'Назад'
}

export const PAGES_TO_SHOW = 3;
