import { render, screen } from '@testing-library/react';
import SearchForm from './search';
import { Product } from '../../types/types';
import { withHistory } from '../../utils/mock-component';

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


describe('Component: SearchForm', () => {
  it('should render correct', () => {
    const searchDataTestId = 'form-search__container';
    const preparedComponent = withHistory(<SearchForm products={mockProducts}/>);

    render(preparedComponent);
    const searchContainer = screen.getByTestId(searchDataTestId);
    expect(searchContainer).toBeInTheDocument();
  });
});
