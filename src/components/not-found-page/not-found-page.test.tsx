import {render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';


describe('Component: notFoundPage', () => {
  it('should render correctly', () => {
    const expectedText = 'Page not found';
    const preparedComponent = withHistory(<NotFoundPage />);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
