import { render, screen } from '@testing-library/react';
import Review from './review';


describe('Component: Review', () => {
  it('should render correct', () => {
    const expectedProps = {
      id: 'string',
      createAt: 'string',
      cameraId: 1223,
      userName: 'string',
      advantage: 'string',
      disadvantage: 'string',
      review: 'string',
      rating: 5,
    };
    const expectedText = 'Достоинства:';
    const revivewListElementTestId = 'review-list__element';
    render(<Review reviewProps={expectedProps} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    const reviewListElement = screen.getByTestId(revivewListElementTestId);
    expect(reviewListElement).toBeInTheDocument();
  });
});
