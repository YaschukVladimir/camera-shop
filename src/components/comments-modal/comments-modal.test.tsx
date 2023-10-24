import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { makeFakeStore } from '../../utils/mock';
import { withHistory, withStore } from '../../utils/mock-component';
import ReviewModal from './comments-modal';

describe('Component: ReviewModal', () => {
  it('should render correct', () => {
    const nameInputTestId = 'name-input';
    const ratingInputTestId = 'rating-input';
    const advantageInputTestId = 'advantage-input';
    const disadvantageTestId = 'disadvantage-input';
    const reviewTestId = 'review-textarea';
    const submitButtonTestId = 'submit-button';
    const { withStoreComponent } = withStore(<ReviewModal id={1}/>, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const nameInput = screen.getByTestId(nameInputTestId);
    const ratingInput = screen.getAllByTestId(ratingInputTestId);
    const advantageInput = screen.getByTestId(advantageInputTestId);
    const disadvantageInput = screen.getByTestId(disadvantageTestId);
    const reviewInput = screen.getByTestId(reviewTestId);
    const submitButton = screen.getByTestId(submitButtonTestId);

    expect(nameInput).toBeInTheDocument();
    expect(ratingInput[0]).toBeInTheDocument();
    expect(advantageInput).toBeInTheDocument();
    expect(disadvantageInput).toBeInTheDocument();
    expect(reviewInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it('should render correct when user enter name', async () => {
    const nameInputTestId = 'name-input';
    const expectedNameValue = 'volodya';

    const { withStoreComponent } = withStore(<ReviewModal id={1}/>, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(screen.getByTestId(nameInputTestId), expectedNameValue);
    expect(screen.getByDisplayValue(expectedNameValue)).toBeInTheDocument();
  });
});
