import { render, screen } from '@testing-library/react';
import PriceFilter from './price-filter';


describe('Component: PriceFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Цена, ₽';
    render(<PriceFilter />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
