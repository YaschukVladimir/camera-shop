import { render, screen } from '@testing-library/react';
import PriceFilter from './price-filter';
import { withHistory } from '../../utils/mock-component';

describe('Component: PriceFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Цена, ₽';
    const preparedComponent = withHistory(<PriceFilter productMinPrice={5000} productMaxPrice={25000}/>);
    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
