import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Header from './header';


it('renders Header component with a search form', () => {
  const formSearchContainerTestId = 'form-search__container';
  const products = [{
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
  const preparedComponent = withHistory(<Header products={products}/>);
  render(
    preparedComponent
  );
  const searchFormcontainer = screen.getByTestId(formSearchContainerTestId);
  expect(searchFormcontainer).toBeInTheDocument();
});

