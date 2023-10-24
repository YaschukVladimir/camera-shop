import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const expectedText = 'Интернет-магазин фото- и видеотехники';
    const footerContainerTestId = 'footer-container';
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    const footerContainer = screen.getByTestId(footerContainerTestId);
    expect(footerContainer).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});
