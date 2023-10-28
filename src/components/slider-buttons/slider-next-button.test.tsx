import { render, screen } from '@testing-library/react';
import SlideNextButton from './slider-next-button';

describe('Component: SlideNextButton', () => {
  it('should render correct', () => {
    const buttonTestId = 'next-button';
    render(<SlideNextButton isEnd={false}/>);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
