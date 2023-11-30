import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import InBasketButton from './in-basket-button';


describe('Component: InBasketButton', () => {
  it('should render correct', () => {
    const expectedText = 'В корзине';
    const { withStoreComponent } = withStore(<InBasketButton />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
