import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import ReviewSuccessModal from './review-success-modal';
import { makeFakeStore } from '../../utils/mock';


describe('Component: ReviewSuccessModal', () => {
  it('should render correct', () => {
    const expectedText = 'Спасибо за отзыв';
    const { withStoreComponent } = withStore(<ReviewSuccessModal />, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
