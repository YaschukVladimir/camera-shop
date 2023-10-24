
import { AppThunkDispatch, Product, ReviewType, State } from '../types/types';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction, fetchReviews, fetchSimilarProducts, postReview } from './api-actions';
import { Action } from '@reduxjs/toolkit';
import { ApiRoutes } from '../const';
import { extractActionsTypes } from '../utils/utils';
import { api } from './index';


const mockProducts: Product[] = [{
  category: 'Видеокамера',
  description: 'Крайне редкое наименование, не потеряло актуальность не смотря на сможество альтернатив. После съёмок на данную камеру фильм не стыдно показать в рамках кинофестиваля. Первые 4К настройки, высочайшее разрешение, уникальная цветопередача.',
  id: 5,
  level: 'Профессиональный',
  name: 'Van Shot',
  previewImg: 'img/content/van-shot.jpg',
  previewImg2x: 'img/content/van-shot@2x.jpg',
  previewImgWebp: 'img/content/van-shot.webp',
  previewImgWebp2x: 'img/content/van-shot@2x.webp',
  price: 149990,
  rating: 3,
  reviewCount: 26,
  type: 'Коллекционная',
  vendorCode: 'YU7RT5GH76'
}];

const mockActiveProduct = {
  category: 'Видеокамера',
  description: 'Крайне редкое наименование, не потеряло актуальность не смотря на сможество альтернатив. После съёмок на данную камеру фильм не стыдно показать в рамках кинофестиваля. Первые 4К настройки, высочайшее разрешение, уникальная цветопередача.',
  id: 5,
  level: 'Профессиональный',
  name: 'Van Shot',
  previewImg: 'img/content/van-shot.jpg',
  previewImg2x: 'img/content/van-shot@2x.jpg',
  previewImgWebp: 'img/content/van-shot.webp',
  previewImgWebp2x: 'img/content/van-shot@2x.webp',
  price: 149990,
  rating: 3,
  reviewCount: 26,
  type: 'Коллекционная',
  vendorCode: 'YU7RT5GH76'
};

const mockReviews: ReviewType[] = [{
  id: 'string',
  createAt: 'string',
  cameraId: 1223,
  userName: 'string',
  advantage: 'string',
  disadvantage: 'string',
  review: 'string',
  rating: 5,
}];

const mockPromo = [{
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  previewImg: 'img/content/promo.jpg',
  previewImg2x: 'img/content/promo@2x.jpg',
  previewImgWebp: 'img/content/promo.webp',
  previewImgWebp2x: 'img/content/promo@2x.webp'
}];

const mockPostReview = {
  cameraId: 1,
  userName: 'ddd',
  advantage: 'ddd',
  disadvantage: 'fff',
  review: 'ggg',
  rating: 1
};


describe('async actions', () => {

  // console.log(createApi, 'ddd');
  // const axios = createApi();
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: {
      products: [],
      promoProducts: [],
      isModalActive: false,
      isBasketModalActive: false,
      isReviewModalActive: false,
      isReviewSuccessModalActive: false,
      activeProduct: {},
      similarProducts: [],
      reviews: [],
      isActiveProductLoading: false,
      activeModalProduct: {}, }});
  });

  describe('fetchProductsAction', () => {
    it('should dispatch "fetchProductsAction.pending", "fetchProductsAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(ApiRoutes.GetProducts).reply(200, mockProducts);

      await store.dispatch(fetchProductsAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchProductsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchProductsAction.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchProductsAction.pending.type,
        fetchProductsAction.fulfilled.type,
      ]);
      expect(fetchProductsActionFulfilled.payload).toEqual(mockProducts);

    });
  });
  describe('fetchPromoProductsAction', () => {
    it('should dispatch "fetchPromoProductsAction.pending", "fetchProductsAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(ApiRoutes.GetPromo).reply(200, mockPromo);
      await store.dispatch(fetchPromoProductsAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchPromoProductsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchPromoProductsAction.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchPromoProductsAction.pending.type,
        fetchPromoProductsAction.fulfilled.type,
      ]);
      expect(fetchPromoProductsActionFulfilled.payload).toEqual(mockPromo);
    });
  });
  describe('fetchActiveProduct', () => {
    it('should dispatch "fetchActiveProduct.pending", "fetchActiveProduct.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`${ApiRoutes.GetActiveProduct}${1}`).reply(200, mockActiveProduct);
      await store.dispatch(fetchActiveProduct(1));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchActiveProductFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchActiveProduct.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchActiveProduct.pending.type,
        fetchActiveProduct.fulfilled.type,
      ]);
      expect(fetchActiveProductFulfilled.payload).toEqual(mockActiveProduct);
    });
  });
  describe('fetchSimilarProducts', () => {
    it('should dispatch "fetchSimilarProducts.pending", "fetchSimilarProducts.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`${ApiRoutes.GetProducts}/${1}/similar`).reply(200, mockProducts);
      await store.dispatch(fetchSimilarProducts(1));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchSimilarProductsFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchSimilarProducts.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchSimilarProducts.pending.type,
        fetchSimilarProducts.fulfilled.type,
      ]);
      expect(fetchSimilarProductsFulfilled.payload).toEqual(mockProducts);
    });
  });
  describe('fetchReviews', () => {
    it('should dispatch "fetchReviews.pending", "fetchReviews.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`${ApiRoutes.GetProducts}/${1}/reviews`).reply(200, mockReviews);
      await store.dispatch(fetchReviews(1));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchReviewsFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchReviews.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);
      expect(fetchReviewsFulfilled.payload).toEqual(mockReviews);
    });
  });
  describe('postReview', () => {
    it('should dispatch "postReview.pending", "postReview.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onPost(ApiRoutes.PostReview).reply(200, mockReviews[0]);
      await store.dispatch(postReview(mockPostReview));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const postReviewFulfilled = emmitedActions.at(1) as ReturnType<typeof postReview.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postReview.pending.type,
        postReview.fulfilled.type,
      ]);
      expect(postReviewFulfilled.payload).toEqual(mockReviews[0]);
    });
  });
});
