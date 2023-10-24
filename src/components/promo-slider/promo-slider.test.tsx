import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import PromoSlider from './promo-slider';


describe('Component: PromoSlider', () => {
  it('should render correct', () => {
    const mockPromo = [{
      id: 1,
      name: 'Ретрокамера Dus Auge lV',
      previewImg: 'img/content/promo.jpg',
      previewImg2x: 'img/content/promo@2x.jpg',
      previewImgWebp: 'img/content/promo.webp',
      previewImgWebp2x: 'img/content/promo@2x.webp'
    }];
    const sliderCntainerTestId = 'slider-container';
    const { withStoreComponent } = withStore(<PromoSlider promoProducts={mockPromo} />, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const sliderContainer = screen.getByTestId(sliderCntainerTestId);
    expect(sliderContainer).toBeInTheDocument();
  });
});
