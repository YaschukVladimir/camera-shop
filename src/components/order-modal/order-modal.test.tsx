import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import OrderModal from './order-modal';
import { makeFakeStore } from '../../utils/mock';

describe('Component: OrderModal', () => {
  it('should render correct', () => {

    const modalWrapperTestId = 'modal-wrapper';
    const { withStoreComponent } = withStore(<OrderModal />, makeFakeStore());
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const modalWrapper = screen.getByTestId(modalWrapperTestId);
    expect(modalWrapper).toBeInTheDocument();
  });
});
