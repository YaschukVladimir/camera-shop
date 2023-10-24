import {render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { withHistory } from '../../utils/mock-component';


describe('Component: notFoundPage', () => {
  it('should render correctly', () => {
    const expectedText = 'Page not found';
    const preparedComponent = withHistory(<NotFoundPage />);

    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
