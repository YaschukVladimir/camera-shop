import { render, screen } from '@testing-library/react';
import FilterForm from './filter-form';
import { withHistory } from '../utils/mock-component';

describe('Component: FilterForm', () => {
  it('should render correct', () => {
    const expectedText = 'Фильтр';
    const preparedComponent = withHistory(<FilterForm productMinPrice={5000} productMaxPrice={25000}/>);

    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
