import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import AddToBasketModal from './add-to-basket-modal';
import { makeFakeStore } from '../../utils/mock';

describe('Component: AddToBasketModal', () => {
  it('should render correct', () => {

    const modalWrapperTestId = 'modal-wrapper';
    const { withStoreComponent } = withStore(<AddToBasketModal />, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const modalWrapper = screen.getByTestId(modalWrapperTestId);
    expect(modalWrapper).toBeInTheDocument();
  });
});
