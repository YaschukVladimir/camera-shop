import { render, screen } from '@testing-library/react';
import ReviewStars from './review-stars';


describe('Component: ReviewStars', () => {
  it('should render correct', () => {
    const starsContainerTestId = 'review-stars-container';
    render(<ReviewStars rating={1} />);
    const starsContainer = screen.getByTestId(starsContainerTestId);

    expect(starsContainer).toBeInTheDocument();
  });
});
