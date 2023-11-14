
import { render, screen} from '@testing-library/react';
import SortForm from './sort-form';
import { withHistory } from '../../utils/mock-component';

describe('Component: SortForm', () => {

  it('should render correct', () => {
    const expectedText = 'Сортировать:';
    const preparedComponent = withHistory(<SortForm />);

    render(
      preparedComponent
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

