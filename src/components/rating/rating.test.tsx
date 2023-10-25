import { render, screen } from '@testing-library/react';
import Rating from './rating';

describe('Component: rating', () => {
  it('should render correct', () => {
    const expectedProps = {
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
    const ratingContainerTestId = 'rating-container';
    render(<Rating activeProduct={expectedProps}/>);

    const ratingContainer = screen.getByTestId(ratingContainerTestId);
    expect(ratingContainer).toBeInTheDocument();
  });
});
