import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import ErrorScreen from './error-screen';
import { makeFakeStore } from '../../utils/mock';

describe('Component: ErrorScreen', () => {
  it('should render correct', () => {
    const expectedText = 'Ups, something went wrong!';
    const preparedComponent = withHistory(<ErrorScreen />);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});
