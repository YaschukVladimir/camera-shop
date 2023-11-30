import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import DeleteFromBasketModal from './delete-from-basket-modal';
import { makeFakeStore } from '../../utils/mock';

describe('Component: DeleteFromBasketModal', () => {
  it('should render correct', () => {

    const modalWrapperTestId = 'modal-wrapper';
    const { withStoreComponent } = withStore(<DeleteFromBasketModal />, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const modalWrapper = screen.getByTestId(modalWrapperTestId);
    expect(modalWrapper).toBeInTheDocument();
  });
});
