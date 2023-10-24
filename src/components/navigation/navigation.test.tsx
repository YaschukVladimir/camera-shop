import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Navigation from './navigation';


describe('Component: Navigation', () => {
  it('should render correct', () => {
    const expectedText = 'Гарантии';
    const preparedComponent = withHistory(<Navigation />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
