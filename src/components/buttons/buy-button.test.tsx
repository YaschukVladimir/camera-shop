import { render, screen } from '@testing-library/react';
import BuyButton from './buy-button';
import { withStore } from '../../utils/mock-component';


describe('Component: BuyButton', () => {
  it('should render correct', () => {
    const expectedProps = {
      id: 1,
    };
    const { id } = expectedProps;
    const expectedText = 'Купить';
    const { withStoreComponent } = withStore(<BuyButton id={id} />, {});
    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
