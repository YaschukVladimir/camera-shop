import { NameSpace } from '../../const';
import { ActiveProduct, Product } from '../../types/types';
import { getIsActiveProductLoadingStatus, getIsModalActive, getProducts, getPromoProducts, getReviews, getSimilarProducts } from './selectors';


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

describe('data process selectors', () => {
  const state = {
    [NameSpace.Data]: {
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
    }
  };
  it('should return products array from state', () => {
    const { products } = state[NameSpace.Data];
    const result = getProducts(state);
    expect(result).toEqual(products);
  });
  it('should return promoProducts array from state', () => {
    const { promoProducts } = state[NameSpace.Data];
    const result = getPromoProducts(state);
    expect(result).toEqual(promoProducts);
  });
  it('should return modal active status from state', () => {
    const { isModalActive } = state[NameSpace.Data];
    const result = getIsModalActive(state);
    expect(result).toEqual(isModalActive);
  });
  it('should return similar products array from state', () => {
    const { similarProducts } = state[NameSpace.Data];
    const result = getSimilarProducts(state);
    expect(result).toEqual(similarProducts);
  });
  it('should return reviews array from state', () => {
    const { reviews } = state[NameSpace.Data];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });
  it('should return modal active loading status from state', () => {
    const { isActiveProductLoading } = state[NameSpace.Data];
    const result = getIsActiveProductLoadingStatus(state);
    expect(result).toEqual(isActiveProductLoading);
  });
});
