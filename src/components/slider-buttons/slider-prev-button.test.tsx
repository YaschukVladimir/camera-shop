import { render, screen } from '@testing-library/react';
import SlidePrevButton from './slider-prev-button';

describe('Component: SlideNextButton', () => {
  it('should render correct', () => {
    const buttonTestId = 'prev-button';
    render(<SlidePrevButton />);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
