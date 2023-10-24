import { render, screen } from '@testing-library/react';
import Rating from './rating';

describe('Component: rating', () => {
  it('should render correct', () => {
    const expectedProps = {
      rating: 4,
      reviewCount: 12,
    };
    const ratingContainerTestId = 'rating-container';
    render(<Rating activeProduct={expectedProps}/>);

    const ratingContainer = screen.getByTestId(ratingContainerTestId);
    expect(ratingContainer).toBeInTheDocument();
  });
});
