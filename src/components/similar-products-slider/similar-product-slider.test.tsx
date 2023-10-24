import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import SimilarProductsSlider from './similar-products-slider';


describe('Component: SimilarProductsSlider', () => {
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
    const sliderCntainerTestId = 'slider-container';
    const { withStoreComponent } = withStore(<SimilarProductsSlider similarProducts={[mockProduct]} />, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const sliderContainer = screen.getByTestId(sliderCntainerTestId);
    expect(sliderContainer).toBeInTheDocument();
  });
});
