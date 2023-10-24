import { render, screen } from '@testing-library/react';
import FilterForm from './filter-form';


describe('Component: FilterForm', () => {
  it('should render correct', () => {
    const expectedText = 'Фильтр';

    render(<FilterForm />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
