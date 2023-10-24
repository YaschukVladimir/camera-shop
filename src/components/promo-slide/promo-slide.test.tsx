import { render, screen } from '@testing-library/react';
import PromoSlide from './promo-slide';
import { withHistory, withStore } from '../../utils/mock-component';


describe('Component: PromoSlide', () => {
  it('should render correct', () => {
    const mockPromo = [{
      id: 1,
      name: 'Ретрокамера Dus Auge lV',
      previewImg: 'img/content/promo.jpg',
      previewImg2x: 'img/content/promo@2x.jpg',
      previewImgWebp: 'img/content/promo.webp',
      previewImgWebp2x: 'img/content/promo@2x.webp'
    }];
    const expectedText = 'Новинка!';
    const pictureTestId = 'picture';
    const { withStoreComponent } = withStore(<PromoSlide activePromo={mockPromo[0]}/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const picture = screen.getByTestId(pictureTestId);
    expect(picture).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
