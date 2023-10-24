import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/mock-component';


describe('Componen: Logo', () => {
  it('should render correct', () => {
    const logoSvgTestId = 'logo-svg';
    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);
    const logoSvg = screen.getByTestId(logoSvgTestId);
    expect(logoSvg).toBeInTheDocument();
  });
});
