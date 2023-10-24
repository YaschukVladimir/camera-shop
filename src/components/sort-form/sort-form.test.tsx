import { render, screen } from '@testing-library/react';
import SortForm from './sort-form';


describe('Component: SortForm', () => {
  it('should render correct', () => {
    const expectedText = 'Сортировать:';

    render(<SortForm />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
