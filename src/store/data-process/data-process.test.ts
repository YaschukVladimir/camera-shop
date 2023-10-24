import { ActiveProduct, Product, ReviewType } from '../../types/types';
import { fetchActiveProduct, fetchProductsAction, fetchPromoProductsAction, fetchReviews, fetchSimilarProducts, postReview } from '../api-actions';
import { dataProcess, setModalActive, setReviewModalActive, setReviewSuccessModalActive } from './data-process';


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

const initialActiveProduct: ActiveProduct = {
  id: 0,
  name: '',
  vendorCode: '',
  type: '',
  category: '',
  description: '',
  level: '',
  price: 0,
  rating: 0,
  reviewCount: 0,
  previewImg: '',
  previewImg2x: '',
  previewImgWebp: '',
  previewImgWebp2x: '',
};

describe('data process slice', () => {
  const expectedState = {
    products: mockProducts,
    promoProducts: [],
    isModalActive: false,
    isBasketModalActive: false,
    isReviewModalActive: false,
    isReviewSuccessModalActive: false,
    activeProduct: initialActiveProduct,
    similarProducts: [],
    reviews: [],
    isActiveProductLoading: false,
    activeModalProduct: initialActiveProduct,
  };
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = dataProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should change modal active status', () => {
    const result = dataProcess.reducer(expectedState, setModalActive(true));
    expect(result.isModalActive).toStrictEqual(true);
  });
  it('should change review modal active status', () => {
    const result = dataProcess.reducer(expectedState, setReviewModalActive(true));
    expect(result.isReviewModalActive).toStrictEqual(true);
  });
  it('should change succes modal active status', () => {
    const result = dataProcess.reducer(expectedState, setReviewSuccessModalActive(true));
    expect(result.isReviewSuccessModalActive).toStrictEqual(true);
  });
  it('should fetch products with fetchProductsAction.fulfilled', () => {
    const result = dataProcess.reducer(expectedState, fetchProductsAction.fulfilled(mockProducts, '', undefined));
    expect(result.products).toEqual(mockProducts);
  });
  it('should fetch PromoProductsAction.fulfilled', () => {
    const mockPromo = [{
      id: 1,
      name: 'Ретрокамера Dus Auge lV',
      previewImg: 'img/content/promo.jpg',
      previewImg2x: 'img/content/promo@2x.jpg',
      previewImgWebp: 'img/content/promo.webp',
      previewImgWebp2x: 'img/content/promo@2x.webp'
    }];
    const result = dataProcess.reducer(expectedState, fetchPromoProductsAction.fulfilled(mockPromo, '', undefined));
    expect(result.promoProducts).toEqual(mockPromo);
  });
  it('should fetch activeProduct.pending', () => {
    const result = dataProcess.reducer(expectedState, fetchActiveProduct.pending('', 1));
    expect(result.isActiveProductLoading).toBe(true);
  });
  it('shold fetch activeProduct.fulfilled', () => {
    const mockProduct: ActiveProduct = {
      id: 0,
      name: 'dsvsdvds',
      vendorCode: 'dvdsv',
      type: 'sdvs',
      category: 'svsvs',
      description: 'fnhhn',
      level: 'nhnfnh',
      price: 444,
      rating: 110,
      reviewCount: 220,
      previewImg: 'bbgbg',
      previewImg2x: 'ffffff',
      previewImgWebp: 'gggg',
      previewImgWebp2x: 'gggg',
    };
    const result = dataProcess.reducer(expectedState, fetchActiveProduct.fulfilled(mockProduct, '', 1));
    expect(result.activeProduct).toEqual(mockProduct);
    expect(result.isActiveProductLoading).toBe(false);
  });
  it('should fetch similarProducts with fetchSimilarProductsAction.fulfilled', () => {
    const result = dataProcess.reducer(expectedState, fetchSimilarProducts.fulfilled(mockProducts, '', 1));
    expect(result.similarProducts).toEqual(mockProducts);
  });
  it('should fetch reviews with fetchReviews.fulfilled', () => {
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
    const result = dataProcess.reducer(expectedState, fetchReviews.fulfilled(mockReviews, '', 1));
    expect(result.reviews).toEqual(mockReviews);
  });
  const mockReview = {
    id: 'string',
    createAt: 'string',
    cameraId: 1223,
    userName: 'string',
    advantage: 'string',
    disadvantage: 'string',
    review: 'string',
    rating: 5,
  };
  it('should post review with postReview.fulfilled', () => {
    const mockPostReview = {
      cameraId: 1,
      userName: 'ddd',
      advantage: 'ddd',
      disadvantage: 'fff',
      review: 'ggg',
      rating: 1
    };
    const result = dataProcess.reducer(expectedState, postReview.fulfilled(mockReview, '', mockPostReview));
    expect(result.reviews).toEqual([mockReview]);
  });
});
