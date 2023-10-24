
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import ProductCard from './product-card';

describe('Component: ProductCard', () => {
  it('should render correct', () => {
    const mockProduct = {
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
    const expectedText = 'Цена:';
    const preparedComponent = withHistory(<ProductCard product={mockProduct} />);
    const { withStoreComponent } = withStore(preparedComponent, {});
    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
