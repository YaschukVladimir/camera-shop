import { render, screen } from '@testing-library/react';
import SlideNextButton from './slider-next-button';

describe('Component: SlideNextButton', () => {
  it('should render correct', () => {
    const buttonTestId = 'next-button';
    render(<SlideNextButton />);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
