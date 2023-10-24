import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Header from './header';


it('renders Header component with a search form', () => {
  const formSearchContainerTestId = 'form-search__container';
  const preparedComponent = withHistory(<Header />);
  render(
    preparedComponent
  );
  const searchFormcontainer = screen.getByTestId(formSearchContainerTestId);
  expect(searchFormcontainer).toBeInTheDocument();
});

