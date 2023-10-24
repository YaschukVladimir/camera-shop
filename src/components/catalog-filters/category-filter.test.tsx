import { render, screen } from '@testing-library/react';
import CategoryFilter from './category-filter';


describe('Component: CategoryFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Категория';
    render(<CategoryFilter />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
