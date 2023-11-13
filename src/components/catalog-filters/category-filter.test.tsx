import { render, screen } from '@testing-library/react';
import CategoryFilter from './category-filter';
import { withHistory } from '../../utils/mock-component';


describe('Component: CategoryFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Категория';
    const preparedComponent = withHistory(<CategoryFilter />);
    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
